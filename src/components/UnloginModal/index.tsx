import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface UnloginModalProps {}

export default function UnloginModal (props: UnloginModalProps) {
  const { username, password } = useSelector((state: any) => {
    return state.unlogin
  })

  const dispatch = useDispatch()

  return (
        <div className={'flex flex-col flex-nowrap items-center overflow-auto w-full h-full px-8 py-2 bg-slate-50 dark:bg-gray-800'}>
            <div>Unlogin</div>
            <div className="fle"></div>
            <div className="">Username:</div>
            <input type="text" value={username} onChange={(e) =>
              dispatch({ type: 'unloginModal/setUsername', payload: e.target.value })
            } />
            <div className="">password:</div>
            <input type="password" name="" id="" value={password} onChange={(e) =>
              dispatch({ type: 'unloginModal/setPassword', payload: e.target.value })
            } />
        </div>
  )
}
