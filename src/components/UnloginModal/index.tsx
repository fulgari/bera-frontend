import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../general/Button'
import { getUrl } from '../../utils/env'
import { useNavigate } from 'react-router-dom'
import { useService } from '../../service/ServiceProvider'
import { log } from '../../utils/logger'
import { setCookie } from '../../utils/cookie'

export default function UnloginModal () {
  const { email, password } = useSelector((state: any) => {
    return state.unloginModal
  })

  const service = useService()
  const dispatch = useDispatch()
  const nav = useNavigate()

  const handleRegister = async () => {
    try {
      const res = await service.post({
        url: `${getUrl()}/auth/register`,
        data: JSON.stringify({
          email,
          password
        }),
        headers: {
          'content-type': 'application/json'
        }
      })
      log('[handleRegister] register', res)
    } catch (e) {
      console.error(e)
    }
  }

  const handleSignIn = async () => {
    try {
      const res = await service.post({
        url: `${getUrl()}/auth/sign_in`,
        data: JSON.stringify({
          email,
          password
        }),
        headers: {
          'content-type': 'application/json'
        }
      })

      if (res.token) {
        const { token } = res || {}
        setCookie('authorization', token)
        nav('/')
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className={'flex flex-col flex-nowrap justify-center items-center overflow-auto w-full h-full px-8 py-2 bg-slate-50 dark:bg-gray-800'}>
      <div className="mt-4 mb-2 dark:text-red-50">email:</div>
      <input type="text" value={email} onChange={(e) =>
        dispatch({ type: 'unloginModal/setEmail', payload: e.target.value })
      } />
      <div className="mt-4 mb-2 dark:text-red-50">password:</div>
      <input type="password" name="" id="" value={password} onChange={(e) =>
        dispatch({ type: 'unloginModal/setPassword', payload: e.target.value })
      } />
      <div className="flex justify-center items-center mt-4">
        <Button type='primary' className="" onClick={() => { void handleRegister() }}>Register</Button>
        <Button type='primary' className="" onClick={() => { void handleSignIn() }}>Log in</Button>
      </div>
    </div>
  )
}
