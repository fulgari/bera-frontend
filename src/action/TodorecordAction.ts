import { type TodoRecordType } from '../slice/TodoRecordSlice'

export function setupTodos (todos: TodoRecordType[]) {
  return { type: 'todoRecord/setupTodos', payload: todos }
}

export function addTodo (todo: TodoRecordType) {
  return { type: 'todoRecord/addTodo', payload: todo }
}

export function updateTodo (todo: Partial<TodoRecordType>) {
  return { type: 'todoRecord/updateTodo', payload: todo }
}

export function removeTodo (todo: TodoRecordType) {
  return { type: 'todoRecord/removeTodo', payload: todo }
}
