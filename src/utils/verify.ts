
function verifyTodoPayload(todo: any) {
    return !!todo
        && todo.id
        && todo.date
        && /^\d{4}-\d{2}-\d{2}$/.test(todo.date)
        && todo.note
        && typeof todo.done !== "undefined"
        && todo.updatedAt
        && todo.createdAt
}

export {
    verifyTodoPayload
}