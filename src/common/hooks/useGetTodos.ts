import { useQuery } from 'react-query'
import { useService } from '../../service/ServiceProvider'
import { type TodoRecordType } from '../../slice/TodoRecordSlice'
import { getCookie } from '../../utils/cookie'
import { getUrl } from '../../utils/env'
import { log } from '../../utils/logger'
import { useEffect } from 'react'
import connection from '../../connection'

const COLLECTION_NAME = 'todorecords'
const TEST_DOC_ID = 'test_doc'

export const useGetTodos = () => {
  const authorization: string = `JWT ${getCookie('authorization')}`
  const service = useService()

  useEffect(() => {
    // connection.createSubscribeQuery(COLLECTION_NAME, { })
  }, [])

  return useQuery<TodoRecordType[]>('getTodos', async () => {
    // const doc = connection.get(COLLECTION_NAME, TEST_DOC_ID)
    // const res: any = await new Promise((resolve, reject) => {
    //   doc.fetch((err) => {
    //     if (err) reject(err)
    //     resolve(doc.data)
    //   })
    // })
    const res = await service.get({
      // url: `${getUrl()}/api/todorecord/period/${from}/${to}`,
      url: `${getUrl()}/api/todorecord`,
      headers: {
        'content-type': 'application/json',
        authorization
      }
    })
    log('[period] get: ', res)
    if (!res) return []
    return res
  }, {
    refetchOnWindowFocus: true,
    refetchInterval: 0
  })
}
