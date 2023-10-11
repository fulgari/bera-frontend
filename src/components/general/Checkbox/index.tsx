import React from 'react'
import cx from 'classnames'
import s from './index.module.css'

interface CheckboxProps {
  isChecked: boolean
  children?: any
  onClick?: (e: React.MouseEvent) => void
  className?: string
  style?: React.CSSProperties
  [key: string]: any
}

export default function Checkbox (props: CheckboxProps) {
  const { children, isChecked, className, style, ...rest } = props
  return (
    <div className={cx(s.checkbox, className)} style={style} {...rest}>
      {children}
    </div>
  )
}
