import { log } from './logger'

const urlMap = {
  development: 'http://127.0.0.1:9001',
  production: 'https://bera-backend.vercel.app'
}

function getUrl (): string {
  const env = process.env.NODE_ENV ?? 'development'
  log('ENV', env, process.env.NODE_ENV)
  return urlMap[env]
}

export { getUrl }
