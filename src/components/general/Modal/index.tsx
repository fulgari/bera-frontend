import React from 'react'
import cx from 'classnames'
import s from './index.module.css'

interface ModalProps {
  children: any
  type?: 'default'
  onClick?: (e: React.MouseEvent) => void
  className?: string
  style?: React.CSSProperties
  [key: string]: any
}

export default function Modal (props: ModalProps) {
  const { children, type = 'default', className, style, ...rest } = props
  return (
    <div className={cx(s[type], s.button, className)} style={style} {...rest}>
      {children}
    </div>
  )
}
