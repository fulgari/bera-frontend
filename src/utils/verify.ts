import { isSimpleDate } from './date'

function verifyTodoRecord (todo: any): boolean {
  return todo.id && !!todo &&
    todo.date &&
    isSimpleDate(todo.date) &&
    todo.text &&
    typeof todo.done !== 'undefined' &&
    todo.modifiedAt &&
    todo.createdAt
}

export {
  verifyTodoRecord
}
