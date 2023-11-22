import connection from '../connection'
import { TEST_DOC_ID } from '../constants'
import { log } from '../utils/logger'
import { errWrap } from './utils'
import type sharedb from 'sharedb/lib/client'

const createTodo = (connection: sharedb.Connection, todo) => {
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
      const op = [{ p: [idx], li: obj }]
      doc.submitOp(op, {}, errWrap(() => {
        log('[sharedb] createTodo, done')
      }))
    }
  }))
}

const findTodo = (connection, todo, successCb) => {
  const doc = connection.get('todorecords', TEST_DOC_ID)
  doc.fetch(errWrap(() => {
    const id = todo?.id
    const { data } = doc
    if (!id) {
      throw new Error('findTodo Error, id: ' + id)
    }
    const originIdx = data?.findIndex((item) => item?.id === id)
    const originObj = data?.[originIdx]
    successCb?.(doc, originIdx, originObj)
  }))
}

const updateTodo = (connection, todo) => {
  findTodo(connection, todo, (doc, originIdx, originObj) => {
    const obj = { ...todo }
    const op = [{ p: [originIdx], ld: originObj, li: obj }]
    doc.submitOp(op, {}, errWrap(() => {
      log('[sharedb] updateTodo, done')
    }))
  })
}

const deleteTodo = (connection, todo) => {
  findTodo(connection, todo, (doc, originIdx, originObj) => {
    const op = [{ p: [originIdx], ld: originObj }]
    doc.submitOp(op, {}, errWrap(() => {
      log('[sharedb] deleteTodo, done')
    }))
  })
}

export {
  createTodo,
  updateTodo,
  deleteTodo
}
