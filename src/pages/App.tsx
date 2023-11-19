import React, { useEffect } from 'react'
import Basic from '../layout/Basic'
import Main from '../components/Main'
import { useAppDispatch } from '../store'
import { setupTodos } from '../slice/TodoRecordSlice'
import { useGetTodos } from '../common/hooks/useGetTodos'
import { log } from '../utils/logger'
import { useMount } from '../common/hooks/useMount'
import connection from '../connection'
import { TEST_DOC_ID } from '../constants'

export const App = (props) => {
  const dispatch = useAppDispatch()

  const { isLoading, isError, data } = useGetTodos()

  useMount(() => {
    const doc = connection.get('todorecords', TEST_DOC_ID)

    doc.subscribe((err) => {
      if (err) throw err
      console.log('[subscribe]', doc.data)
      dispatch(setupTodos(doc.data))
    })
  })

  useEffect(() => {
    if (isError || isLoading || !data) {
      log('initData useGetTodos', { isError, isLoading })
      return
    }
    dispatch(setupTodos(data))
  }, [isError, isLoading, data])

  return (
    <Basic>
      <Main />
    </Basic>
  )
}
