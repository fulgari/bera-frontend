import React from 'react'
import { Link } from 'react-router-dom'
import s from './List.module.css'

interface ListLayoutProps {
  children?: any
}
export default function List (props: ListLayoutProps) {
  const { children } = props
  return (<div className={'flex flex-col items-center justify-center w-full h-full px-4 overflow-hidden box-border'}>
    {children}
  </div>)
}
