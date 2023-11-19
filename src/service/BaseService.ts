import axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'

interface IReqParams {
  url: string
  data?: any
  headers: Record<string, string>
  errorHandler?: () => void
}

axios.interceptors.response.use(response => response, error => {
  if (error?.response?.status === 401) {
    window.location.href = '/login'
  }
})

axios.interceptors.response.use(response => {
  if (
    response?.data &&
    response.headers['content-type'].indexOf('application/json') > -1
  ) {
    response.data = camelizeKeys(response.data)
  }

  return response
})

export default class BaseService {
  async post (params: IReqParams) {
    const { url, data, headers } = params
    console.log('first1111')
    const res = await axios.post(url, data, {
      headers,
      timeout: 5000,
      validateStatus: (status) => {
        return status < 400
      }
    })
    console.log('first1111-2', res)
    return res?.data
  }

  async get (params: IReqParams) {
    const { url, headers } = params
    const res = await axios.get(url, {
      headers,
      timeout: 5000,
      validateStatus: (status) => {
        return status < 400
      }
    })
    return res?.data
  }

  async put (params: IReqParams) {
    const { url, data, headers } = params
    const res = await axios.put(url, data, {
      headers,
      timeout: 5000,
      validateStatus: (status) => {
        return status < 400
      }
    })
    return res?.data
  }

  async delete (params: IReqParams) {
    const { url, headers } = params
    const res = await axios.delete(url, {
      headers,
      timeout: 5000,
      validateStatus: (status) => {
        return status < 400
      }
    })
    return res?.data
  }
}
