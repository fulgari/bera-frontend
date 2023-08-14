import React from 'react'

interface CardProps {}

export default function (props: CardProps) {
  return (
    <div className={'w-24 h-24 bg-orange-400'}>
      <div className={'w-3 h-3 bg-red-300'}></div>
    </div>
  )
}
