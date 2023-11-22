import React from 'react'
import BasicDashboardItem from './BasicDashboardItem'

interface BasicDashboardProps {
  anchorMs: number
}

export default function BasicDashboard (props: BasicDashboardProps) {
  const { anchorMs } = props

  return (
    <div className={'w-full shadow-lg rounded-2xl flex-1 my-7 pb-3 bg-white transition ease-in delay-100 dark:bg-[rgba(255,255,255,.08)]'}>
      <div className={'grid grid-cols-1 min-h-full mx-3 md:grid-cols-4 xl:grid-cols-5'}>
        {
          (new Array(7).fill(0).map((_, i) => (
            <div className={'relative pt-10 px-3'} key={i}>
              <BasicDashboardItem itemIndex={(i) % 7} itemDate={new Date(anchorMs + i * 60 * 60 * 1000 * 24)} />
            </div>
          )))}
      </div>
    </div>
  )
}
