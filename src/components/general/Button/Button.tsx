import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: any;
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

export default function Button(props: ButtonProps) {
  const { children, type = 'primary', className, style, ...rest } = props;
  return (
    <div className={`${styles[type]} ${styles.button} ${className}`} style={style} {...rest} >{children}</div>
  )
}
