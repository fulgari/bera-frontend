import React from 'react';
import styles from './Basic.module.css';

type BasicLayoutProps = {
  children: any;
}
export default function (props: BasicLayoutProps) {
  const { children } = props;
  return (<div className={styles.basicWrap}>
    {children}
  </div>)
}