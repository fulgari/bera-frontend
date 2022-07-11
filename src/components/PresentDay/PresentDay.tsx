import { Button } from '@blueprintjs/core';
import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getToday } from '../../utils/date';
import styles from './PresentDay.module.css';

export const PresentDay = (props) => {
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  console.log('PresentDay props', props, store)
  return (
    <div className={styles.presentDay}>
      <div className={styles.presentDayTitle}>
        </div>
        <Button onClick={e=>{
          dispatch({type: 'presentDay/generate', payload: {
            title: "HI, "+ getToday(),
            description: 'Win win is good',
            date: getToday()
          } })
        }}>{getToday()}</Button>
    </div>
  )
}


export default PresentDay;