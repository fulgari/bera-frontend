import { createSlice } from '@reduxjs/toolkit'
import { verifyTodoRecord } from '../utils/verify'
import { log } from '../utils/logger'

interface TodoRecordType {
  id: string
  date: string
  listId: string | null
  note: string | null
  text: string
  done: boolean
  modifiedAt: string
  createdAt: string
  isMD: boolean | null
  tags: string | null
}

type DraftTodoRecordType = Omit<TodoRecordType, 'id'>

const todoRecordSlice = createSlice({
  name: 'todoRecord',
  initialState: {
    todos: [] as TodoRecordType[],
    isSyncing: false
  },
  reducers: {
    setupTodos: (state, action) => {
      const todos: any[] = action.payload
      log('setup todos', todos)
      if (todos.every(todo => verifyTodoRecord(todo))) {
        state.todos = action.payload
      }
    },
    addTodo: (state, action) => {
      if (verifyTodoRecord(action.payload)) {
        state.todos = [...state.todos, action.payload]
        log('[redux] addTodo, new state: ', state.todos)
      } else {
        console.error('[FAILED] addTodo() got invalid todo payload: ', action.payload)
      }
    },
    updateTodo: (state, action) => {
      const { payload } = action
      const todoIndex = state.todos.findIndex(todo => todo.id === payload.id)
      if (todoIndex !== -1) {
        const todo = state.todos[todoIndex]
        state.todos.splice(todoIndex, 1, { ...todo, ...payload })
        log('[redux] updateTodo, from: ', todo, ' to: ', payload, state.todos)
      }
    },
    removeTodo: (state, action) => {
      const { payload } = action
      const todoIndex = state.todos.findIndex(todo => todo.id === payload.id)
      if (todoIndex !== -1) {
        state.todos.splice(todoIndex, 1)
        log('[redux] removeTodo, ', payload, state.todos)
      }
    },
    startSyncing: (state) => {
      state.isSyncing = true
    },
    endSyncing: (state) => {
      state.isSyncing = false
    }
  }
})

export type { TodoRecordType, DraftTodoRecordType }
export const { addTodo, updateTodo } = todoRecordSlice.actions
export default todoRecordSlice.reducer