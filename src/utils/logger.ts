import { getQS } from './qs'

export function log (...args) {
  if (process.env.NODE_ENV === 'development' || (Boolean(getQS('isDebug')))) {
    console.log(...args)
  }
}
