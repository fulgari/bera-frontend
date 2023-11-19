import { TEST_DOC_ID } from '../constants'
import { log } from '../utils/logger'
import { errWrap } from './utils'

const createTodo = (connection, todo) => {
  const doc = connection.get('todorecords', TEST_DOC_ID)
  doc.fetch(errWrap(() => {
    if (!doc.data) {
      const obj = {
        id: 0,
        ...todo
      }
      const data = [obj]

      doc.create(data, errWrap(() => {
        log('[sharedb] createTodo, !doc.data')
      }))
    } else {
      const { data } = doc
      const idx = data.length
      const obj = {
        id: idx,
        ...todo
      }
      const addOp = [{ p: [idx], li: obj }]
      doc.submitOp(addOp, {}, errWrap(() => {
        log('[sharedb] createTodo, add')
      }))
    }
  }))
}

export {
  createTodo
}
