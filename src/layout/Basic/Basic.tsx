import React from 'react';
import { Link } from "react-router-dom";
import styles from './Basic.module.css';

type BasicLayoutProps = {
  children?: any;
}
export default function (props: BasicLayoutProps) {
  const { children } = props;
  return (<div className={styles.basicWrap}>
    <nav className={styles.nav} >
      <Link to="/">Bera</Link>
      {/* <Link to="/home">Home</Link> */}
      <Link to="/kanban">Kanban</Link>
    </nav>
    {children}
  </div>)
}