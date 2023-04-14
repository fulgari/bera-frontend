import React from 'react';
import { Link } from "react-router-dom";
import s from './List.module.css';

type ListLayoutProps = {
  children?: any;
}
export default function (props: ListLayoutProps) {
  const { children } = props;
  return (<div className={s.listWrap}>
    {children}
  </div>)
}