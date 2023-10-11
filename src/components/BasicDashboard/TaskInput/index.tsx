import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type DraftTodoRecordType, type TodoRecordType } from '../BasicDashboardSlice'
import { getUrl } from '../../../utils/env'
import { useService } from '../../../service/ServiceProvider'
import { log } from '../../../utils/logger'
import { getCookie } from '../../../utils/cookie'
import Checkbox from '../../general/Checkbox'
import { throttle } from '../../../utils/debounce'

interface TaskInputProps {
  path: number[]
  date: string
  todo?: TodoRecordType
  isLast?: boolean
}

function TaskInput (props: TaskInputProps) {
  const { path, date, todo, isLast } = props || {}

  const authorization: string = `JWT ${getCookie('authorization')}`

  const inputRef = useRef<any>()
  const dispatch = useDispatch()
  const service = useService()

  useEffect(() => {
    if (inputRef.current && todo?.text) {
      inputRef.current.value = todo?.text
    }
  }, [inputRef.current, todo?.text])

  const addTask = async () => {
    if (inputRef.current?.value === '') return
    const value = inputRef.current?.value
    try {
      if (isLast) {
        const ts = new Date().getTime()
        // const tdId = ts.toString(32) + Math.floor(Math.random() * 1000);
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
        dispatch({ type: 'basicDashboard/addTodo', payload: newTodo })
        await service.post({
          url: `${getUrl()}/api/todorecord`,
          data: JSON.stringify(newTodo),
          headers: {
            'content-type': 'application/json',
            authorization
          }
        })
      } else if (Boolean(value) && todo?.id) {
        const newTodo: Partial<TodoRecordType> = {
          id: todo?.id,
          text: value as string
        }
        dispatch({ type: 'basicDashboard/updateTodo', payload: newTodo })

        await service.put({
          url: `${getUrl()}/api/todorecord/${todo?.id}`,
          data: JSON.stringify(newTodo),
          headers: {
            'content-type': 'application/json',
            authorization
          }
        })
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
    dispatch({
      type: 'basicDashboard/updateTodo',
      payload: newTodo
    })
    await service.put({
      url: `${getUrl()}/api/todorecord/${todo.id}`,
      data: JSON.stringify(newTodo),
      headers: {
        'content-type': 'application/json',
        authorization
      }
    })
  }, 100)

  return (
    <div className={'flex justify-center items-center'}>
        <Checkbox isChecked={todo?.done} onClick={toggleCheckTask}/>
        <input
            ref={inputRef}
            key={path.toString()}
            className={'relative w-full py-1 px-2 mb-1 border-b-slate-300 border-b-[.01rem] focus:rounded-sm focus:outline-dashed focus:outline-1 focus:outline-neutral-400 dark:bg-[#313a47] dark:text-slate-200'}
            onChange={e => {
              log('e.target', e)
              if (inputRef.current) {
                inputRef.current.value = e.target.value
              }
            }}
            onBlur={() => { void addTask() }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                void addTask()
              }
            }}
        />
        </div>
  )
}

export default TaskInput
