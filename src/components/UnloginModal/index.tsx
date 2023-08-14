import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../general/Button'
import { getUrl } from '../../utils/env'

export default function UnloginModal () {
  const { email, password } = useSelector((state: any) => {
    return state.unloginModal
  })

  const dispatch = useDispatch()

  const handleRegister = async () => {
    await fetch(`${getUrl()}/auth/register`, {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => { console.log(res) }).catch(e => { console.error(e) })
  }

  const handleSignIn = async () => {
    await fetch(`${getUrl()}/auth/sign_in`, {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => { console.log(res) }).catch(e => { console.error(e) })
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
        <Button type='primary' className="">Register</Button>
        <Button type='primary' className="" onClick={() => { void handleSignIn() }}>Log in</Button>
      </div>
    </div>
  )
}
