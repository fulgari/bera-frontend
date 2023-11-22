import { log } from './logger'

const hostname = {
  development: '127.0.0.1:9001',
  production: 'bera-backend.vercel.app'
}

const protocol = {
  HTTPS: 'https',
  WS: 'ws'
}

const urlMap = {
  development: `${protocol.HTTPS}://${hostname.development}`,
  production: `${protocol.HTTPS}://${hostname.production}`
}

const urlWSSMap = {
  development: `${protocol.WS}://${hostname.development}`,
  production: `${protocol.WS}://${hostname.production}`
}

function getUrl (): string {
  const env = process.env.NODE_ENV ?? 'development'
  log('ENV', env, process.env.NODE_ENV)
  return urlMap[env]
}

function getWsUrl (): string {
  const env = process.env.NODE_ENV ?? 'development'
  log('ENV', env, process.env.NODE_ENV)
  return urlWSSMap[env]
}

export { getUrl, getWsUrl }
