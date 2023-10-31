import React, { useRef, useEffect, type MutableRefObject, useState } from 'react'
import { type DraftTodoRecordType, type TodoRecordType } from '../../../slice/TodoRecordSlice'
import { getUrl } from '../../../utils/env'
import { useService } from '../../../service/ServiceProvider'
import { log } from '../../../utils/logger'
import { getCookie } from '../../../utils/cookie'
import Checkbox from '../../general/Checkbox'
import { throttle } from '../../../utils/debounce'
import { useAppDispatch, useAppSelector } from '../../../store'
import { addTodo, endSyncing, removeTodo, startSyncing, updateTodo } from '../../../action'
import { DRAFT_TODO_RECORD_ID } from '../../../constants'

interface TaskInputProps {
  path: number[]
  date: string
  colonRef: HTMLDivElement | null
  todo?: TodoRecordType
  isLast?: boolean
}

function TaskInput (props: TaskInputProps) {
  const { path, date, todo, colonRef, isLast } = props || {}

  const authorization: string = `JWT ${getCookie('authorization')}`

  const inputRef = useRef<any>()
  const dispatch = useAppDispatch()
  const service = useService()
  const isDarkMode = useAppSelector((state) => state.main.isDarkMode)
  const isSyncing = useAppSelector((state) => state.todoRecord.isSyncing)

  const [oldText, setOldText] = useState('')

  useEffect(() => {
    if (inputRef.current && todo?.text) {
      inputRef.current.value = todo?.text
    }
  }, [inputRef.current, todo?.text])

  const handleBlur = async () => {
    if (isSyncing) return
    if (inputRef.current?.value === '' && !isLast && todo?.id) {
      dispatch(startSyncing())
      dispatch(removeTodo(todo))
      const res = await service.delete({
        url: `${getUrl()}/api/todorecord/${todo?.id}`,
        headers: {
          'content-type': 'application/json',
          authorization
        }
      })
      const { success } = res || {}
      dispatch(endSyncing(() => {
        if (!success) {
          dispatch(addTodo(todo))
        }
      }))
      return
    }
    if (inputRef.current?.value === oldText) {
      return
    }
    const value = inputRef.current?.value
    try {
      if (isLast) {
        const ts = new Date().getTime()
        const newTodo: DraftTodoRecordType = {
          date,
          listId: null,
          note: null,
          text: value,
          done: false,
          modifiedAt: ts.toString(),
          createdAt: ts.toString(),
          isMD: null,
          tags: null
        }
        dispatch(startSyncing())
        dispatch(addTodo({ ...newTodo, id: DRAFT_TODO_RECORD_ID }))
        const res = await service.post({
          url: `${getUrl()}/api/todorecord`,
          data: JSON.stringify(newTodo),
          headers: {
            'content-type': 'application/json',
            authorization
          }
        })
        const { success, result } = res || {}
        const { id } = result || {}
        dispatch(endSyncing(() => {
          if (success) {
            dispatch(updateTodo({ newTodo: { ...newTodo, id }, id: DRAFT_TODO_RECORD_ID }))
          } else {
            dispatch(removeTodo({ ...newTodo, id: DRAFT_TODO_RECORD_ID }))
          }
        }))
      } else if (Boolean(value) && todo?.id) {
        const newTodo = {
          id: todo.id,
          text: value as string
        }

        const res = await service.put({
          url: `${getUrl()}/api/todorecord/${todo?.id}`,
          data: JSON.stringify(newTodo),
          headers: {
            'content-type': 'application/json',
            authorization
          }
        })
        if (res?.success) {
          dispatch(updateTodo({ newTodo, id: newTodo.id }))
        }
      }
    } catch (e) {
      console.error('error: ', e)
    }
  }

  const toggleCheckTask = throttle(async () => {
    if (!todo?.id) {
      alert('Checkbox empty, failed')
      return
    }
    const newTodo = {
      ...todo,
      done: !todo.done
    }
    const res = await service.put({
      url: `${getUrl()}/api/todorecord/${todo.id}`,
      data: JSON.stringify(newTodo),
      headers: {
        'content-type': 'application/json',
        authorization
      }
    })
    if (res?.success) {
      dispatch({
        type: 'todoRecord/updateTodo',
        payload: newTodo
      })
    }
  }, 100)

  const addAndMoveNext = async () => {
    await handleBlur()
    const index = path[path.length - 1]
    const nextEl = colonRef?.children?.[index + 1]
    const nextInput = nextEl?.querySelector('input')
    nextInput?.focus()
  }

  return (
    <div className={'flex justify-center items-center'}>
      {todo ? <Checkbox isChecked={todo?.done} fillColor={isDarkMode ? '#fff' : '#d0d0d0'} onClick={toggleCheckTask} /> : null}
      <input
        ref={inputRef}
        key={path.toString()}
        className={'relative bg-transparent w-full py-1 px-2 mb-1 border-b-slate-300 border-b-[.01rem] transition ease-in focus:rounded-sm focus:outline-dashed focus:outline-1 focus:outline-neutral-400 dark:text-slate-200'}
        style={{
          textDecoration: todo?.done ? 'line-through' : '',
          color: todo?.done ? '#d0d0d0' : ''
        }}
        onChange={e => {
          log('e.target', e)
          if (inputRef.current) {
            inputRef.current.value = e.target.value
          }
        }}
        onFocus={(e) => {
          setOldText(e.target.value)
        }}
        onBlur={() => { void handleBlur() }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            e.stopPropagation()
            void addAndMoveNext()
          }
        }}
      />
    </div>
  )
}

export default TaskInput
