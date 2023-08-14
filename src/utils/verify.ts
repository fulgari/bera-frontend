import { isSimpleDate } from './date'

function verifyTodoRecord (todo: any): boolean {
  return !!todo &&
    todo.id && // diff
    todo.date &&
    isSimpleDate(todo.date) &&
    todo.text &&
    typeof todo.done !== 'undefined' &&
    todo.modifiedAt &&
    todo.createdAt
}

function verifyDraftTodoRecord (todo: any): boolean {
  return !!todo &&
    todo.date &&
    isSimpleDate(todo.date) &&
    todo.text &&
    typeof todo.done !== 'undefined' &&
    todo.modifiedAt &&
    todo.createdAt
}

export {
  verifyTodoRecord,
  verifyDraftTodoRecord
}
