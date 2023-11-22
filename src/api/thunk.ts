import connection from '../connection'
import { TEST_DOC_ID } from '../constants'
import { type TodoRecordType, setupTodos } from '../slice/TodoRecordSlice'

const fetchTodoApi = async () => {
  const doc = connection.get('todorecords', TEST_DOC_ID)
  return await new Promise<TodoRecordType[]>((resolve, reject) => {
    doc.fetch((err) => {
      if (err) reject(err)
      console.log('[subscribe]', doc.data)
      resolve(doc.data)
    })
  })
}

const fetchSetupTodos = () => async (dispatch, getState, extraArgument) => {
  const { fetchTodoApi } = extraArgument
  const response = await fetchTodoApi()
  console.log('[fetchSetupTodos]', response, dispatch)
  dispatch(setupTodos(response))
}

export {
  fetchTodoApi,
  fetchSetupTodos
}
