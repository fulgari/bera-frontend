import React, { useReducer, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getToday } from '../../utils/date';
import Button from '../general/Button/Button';
import styles from './PresentDay.module.css';
import { useEffect } from 'react';

export const PresentDay = (props) => {
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  const showModal = useSelector((state: any) => state.presentDay.toggle.showModal);
  console.log('PresentDay props', props, store)

  useEffect(() => {
    console.log('PresentDay useEffect', showModal);
  }, [showModal])

  return (
    <div className={styles.presentDay}>
      {/* <div className={styles.presentDayTitle}>
        新建今日事项
      </div> */}
      <Button
        className={`${styles.animatedBtn}`}
        style={{
          transform: showModal ? 'scale(5)' : undefined,
          opacity: showModal ? 0 : undefined,
          pointerEvents: showModal ? 'none' : undefined,
        }}
        onClick={e => {
          // dispatch({
          //   type: 'presentDay/generate', payload: {
          //     title: getToday(),
          //     description: 'Win win is good',
          //     date: getToday()
          //   }
          // })
          dispatch({ type: 'presentDay/showModal', payload: { showModal: true } });
        }}>{getToday()}</Button>
    </div>
  )
}


export default PresentDay;