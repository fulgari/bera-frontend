import React from 'react'
import cx from 'classnames'
import s from './index.module.css'

interface CheckboxProps {
  isChecked?: boolean
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
      {isChecked
        ? <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#fff" height="28px" width="28px" version="1.1" viewBox="0 0 490 490" xmlSpace="preserve">
      <polygon points="4.5,0.28 1.98,3.95 0.29,2.57 0,2.92 2.07,4.62 4.90,0.55 "/>
      </svg>
        : null
      }
      {children}
    </div>
  )
}
