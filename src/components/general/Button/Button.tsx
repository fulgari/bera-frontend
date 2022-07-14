import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: any;
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: ButtonProps) {
  const { children, type = 'primary' } = props;
  return (
    <div className={`${styles[type]} ${styles.button}`}>{children}</div>
  )
}
