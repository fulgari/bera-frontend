import React from 'react';
import styles from './Card.module.css';

type CardProps = {};

export default function (props: CardProps) {
  return (<div className={styles.cardWrap}>
    <div className={styles.card}>
    </div>
  </div>)
}