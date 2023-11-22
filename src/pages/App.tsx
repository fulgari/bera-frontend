import React, { useEffect } from 'react'
import Basic from '../layout/Basic'
import Main from '../components/Main'
import { useAppDispatch } from '../store'
import { setupTodos } from '../slice/TodoRecordSlice'
import { log } from '../utils/logger'
import { useMount } from '../common/hooks/useMount'
import connection from '../connection'
import { TEST_DOC_ID } from '../constants'

export const App = (props) => {
  const dispatch = useAppDispatch()

  useMount(() => {
    const doc = connection.get('todorecords', TEST_DOC_ID)

    doc.subscribe((err) => {
      if (err) throw err
      log('[subscribe]', doc.data)
    })
    doc.on('load', () => {
      log('[op] load', doc.data)
      dispatch(setupTodos(doc.data))
    })
    doc.on('op', () => {
      log('[op] op', doc.data)
      dispatch(setupTodos(doc.data))
    })
  })

  return (
    <Basic>
      <Main />
    </Basic>
  )
}
