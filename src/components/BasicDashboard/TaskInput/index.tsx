import React, { useRef, useEffect, useState } from 'react'
import { type DraftTodoRecordType, type TodoRecordType } from '../../../slice/TodoRecordSlice'
import { useService } from '../../../service/ServiceProvider'
import { log } from '../../../utils/logger'
import { getCookie } from '../../../utils/cookie'
import Checkbox from '../../general/Checkbox'
import { throttle } from '../../../utils/debounce'
import { useAppDispatch, useAppSelector } from '../../../store'
import connection from '../../../connection'
import { createTodo, updateTodo, deleteTodo } from '../../../sharedb/actions'
import { fetchSetupTodos } from '../../../api/thunk'

interface TaskInputProps {
  path: number[]
  date: string
  colonRef: HTMLDivElement | null
  todo?: TodoRecordType
  isLast?: boolean
}

function TaskInput (props: TaskInputProps) {
  const { path, date, todo, colonRef, isLast } = props || {}

  const dispatch = useAppDispatch()
  const authorization: string = `JWT ${getCookie('authorization')}`

  const inputRef = useRef<any>()
  const service = useService()
  const isDarkMode = useAppSelector((state) => state.main.isDarkMode)

  const [oldText, setOldText] = useState('')

  useEffect(() => {
    if (inputRef.current && todo?.text) {
      inputRef.current.value = todo?.text
    }
  }, [inputRef.current, todo?.text])

  const handleBlur = async () => {
    if (inputRef.current?.value === '' && !isLast && todo?.id) {
      deleteTodo(connection, todo)
      void dispatch(fetchSetupTodos())
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
        createTodo(connection, newTodo)
        void dispatch(fetchSetupTodos())
      } else if (Boolean(value) && todo?.id) {
        const newTodo = {
          id: todo.id,
          text: value as string
        }
        updateTodo(connection, newTodo)
        void dispatch(fetchSetupTodos())
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
    updateTodo(connection, newTodo)
    void dispatch(fetchSetupTodos())
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
