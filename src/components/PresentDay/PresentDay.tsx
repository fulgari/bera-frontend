import React, { useReducer, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getToday } from '../../utils/date';
import Button from '../general/Button/Button';
import styles from './PresentDay.module.css';

export const PresentDay = (props) => {
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  console.log('PresentDay props', props, store)

  const [showModal, toggleShowModal] = useReducer((state) => !state, false); 

  return (
    <div className={styles.presentDay}>
      {/* <div className={styles.presentDayTitle}>
        新建今日事项
      </div> */}
      <Button onClick={e => {
        // dispatch({
        //   type: 'presentDay/generate', payload: {
        //     title: getToday(),
        //     description: 'Win win is good',
        //     date: getToday()
        //   }
        // })
        toggleShowModal();
      }}>{getToday()}</Button>
    </div>
  )
}


export default PresentDay;