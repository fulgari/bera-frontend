import React from 'react';
import { Link } from "react-router-dom";
import styles from './List.module.css';

type ListLayoutProps = {
  children?: any;
}
export default function (props: ListLayoutProps) {
  const { children } = props;
  return (<div className={styles.listWrap}>
    <nav className={styles.nav} >
      <Link to="/">Home</Link>
      <Link to="/kanban">Kanban</Link>
    </nav>
    {children}
  </div>)
}