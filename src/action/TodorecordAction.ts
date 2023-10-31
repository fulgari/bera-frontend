import { type TodoRecordType } from '../slice/TodoRecordSlice'

export function setupTodos (todos: TodoRecordType[]) {
  return { type: 'todoRecord/setupTodos', payload: todos }
}

export function addTodo (todo: TodoRecordType) {
  return { type: 'todoRecord/addTodo', payload: todo }
}

export function updateTodo (payload: { id: string, newTodo: Partial<TodoRecordType> }) {
  return { type: 'todoRecord/updateTodo', payload }
}

export function removeTodo (todo: TodoRecordType) {
  return { type: 'todoRecord/removeTodo', payload: todo }
}
export function startSyncing () {
  return { type: 'todoRecord/startSyncing' }
}
export function endSyncing (finishCb: () => void) {
  return { type: 'todoRecord/endSyncing', payload: finishCb }
}
