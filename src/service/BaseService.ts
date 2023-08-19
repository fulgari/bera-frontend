import axios from 'axios'

interface IReqParams {
  url: string
  data?: any
  headers: Record<string, string>
  errorHandler?: () => void
}

axios.interceptors.response.use(response => response, error => {
  if (error.response.status === 401) {
    window.location.href = '/login'
  }
})

export default class BaseService {
  async post (params: IReqParams) {
    const { url, data, headers } = params
    const res = await axios.post(url, data, {
      headers,
      timeout: 5000,
      validateStatus: (status) => {
        return status < 400
      }
    })
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
}
