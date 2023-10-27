import React from 'react'
import BasicDashboard from '../BasicDashboard'
import BasicHeader from '../BasicHeader'
import { useAppSelector } from '../../store'

export default function Main () {
  const delta = useAppSelector((state) => {
    return state.main.dateDelta
  })
  const dateInMs = new Date().getTime() + delta
  const date = new Date(dateInMs)
  const ms = date.getTime()
  const day = date.getDay()
  /** start of the current showing week */
  const anchorMs = ms - (day === 0 ? 6 : day - 1) * 60 * 60 * 1000 * 24

  return (
    <div className={'flex flex-col flex-nowrap items-center overflow-auto w-full h-full px-8 py-2 transition ease-in delay-100 bg-slate-50 dark:bg-gray-800'}>
      <BasicHeader />
      <BasicDashboard anchorMs={anchorMs} />
    </div>
  )
}
