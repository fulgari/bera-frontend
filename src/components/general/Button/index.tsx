import React from 'react'
import cx from 'classnames'
import s from './Button.module.css'

interface ButtonProps {
  children: any
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'default'
  onClick?: (e: React.MouseEvent) => void
  className?: string
  style?: React.CSSProperties
  [key: string]: any
}

export default function Button (props: ButtonProps) {
  const { children, type = 'primary', className, style, ...rest } = props
  return (
    <div className={cx(s[type], s.button, className)} style={style} {...rest}>
      {children}
    </div>
  )
}
