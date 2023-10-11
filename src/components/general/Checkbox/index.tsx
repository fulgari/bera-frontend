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
        ? <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#fff" height="16px" width="16px" version="1.1" viewBox="0 0 490 490" xmlSpace="preserve">
        <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "/>
        </svg>
        : null
      }
      {children}
    </div>
  )
}
