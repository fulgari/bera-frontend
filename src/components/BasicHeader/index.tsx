import React from 'react'
import cx from 'classnames'
import { useAppDispatch, useAppSelector } from '../../store'
import { addDelta, minusDelta, resetDelta } from '../../action'

export default function BasicHeader () {
  const dispatch = useAppDispatch()
  const dateInMs: number = useAppSelector((state) => {
    return new Date().getTime() + state.main.dateDelta
  })

  const date = new Date(dateInMs)
  const year = date.toLocaleString('en-GB', { year: 'numeric' })
  const month = date.toLocaleString('en-GB', { month: 'short' })

  const renderBtns = () => {
    const btns = [
      {
        name: 'Prev',
        onClick: () => { dispatch(minusDelta()) }
      },
      {
        name: 'Cur',
        onClick: () => { dispatch(resetDelta()) }
      },
      {
        name: 'Next',
        onClick: () => { dispatch(addDelta()) }
      }
      // {
      //   name: "Setting",
      //   onClick: () => { dispatch({ type: ""}); }
      // }
    ]
    return btns.map((item, index) => {
      return (
        <div key={index} className={cx('w-10 h-10 mr-3 leading-10 cursor-default select-none font-mono text-neutral-400 hover:text-shadow-lg hover:text-emerald-400')} onClick={item.onClick}>{item.name}</div>
      )
    })
  }

  return (
    <div className={'flex justify-between items-center w-full p-3'}>
      <div className={'text-4xl leading-9 tracking-tighter capitalize flex items-center cursor-default font-serif dark:text-zinc-100'}>{year} {month}</div>
      <div className={'flex items-center'}>
        {renderBtns()}
      </div>
    </div>
  )
}
