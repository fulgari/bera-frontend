import { log } from './logger'

const hostname = {
  development: '127.0.0.1:9001',
  production: 'bella-7jng.onrender.com'
}

const protocol = {
  HTTP: 'http',
  HTTPS: 'https',
  WSS: 'wss',
  WS: 'ws'
}

const urlMap = {
  development: `${protocol.HTTP}://${hostname.development}`,
  production: `${protocol.HTTPS}://${hostname.production}`
}

const urlWSSMap = {
  development: `${protocol.WS}://${hostname.development}`,
  production: `${protocol.WSS}://${hostname.production}`
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
