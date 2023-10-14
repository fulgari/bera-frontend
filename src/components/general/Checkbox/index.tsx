import React from 'react'
import cx from 'classnames'
import s from './index.module.css'

interface CheckboxProps {
  isChecked?: boolean
  children?: any
  onClick?: (e: React.MouseEvent) => void
  className?: string
  fillColor?: string
  style?: React.CSSProperties
  [key: string]: any
}

export default function Checkbox (props: CheckboxProps) {
  const { children, isChecked, className, fillColor, style, ...rest } = props
  return (
    <div className={cx(s.checkbox, className)} style={style} {...rest}>
      {isChecked
        ? <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" style={{ transform: 'scale(1.5)' }}><path fill={fillColor} d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z" /></svg>
        : null
      }
      {children}
    </div>
  )
}
