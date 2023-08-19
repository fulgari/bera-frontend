import { createContext, useContext } from 'react'
import BaseService from './BaseService'

const ServiceContext = createContext<{
  service: BaseService
  children?: React.ReactNode
}>({
  service: new BaseService()
})

const useService = () => {
  const { service } = useContext(ServiceContext)
  return service
}

const ServiceProvider = ServiceContext.Provider

export {
  ServiceContext,
  ServiceProvider,
  useService
}
