import React, { useReducer, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getToday } from "../../utils/date";
import Button from "../general/Button/Button";
import styles from "./PresentDay.module.css";
import { useEffect } from "react";
import Modal from "../general/Modal/Modal";

export const PresentDay = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const showModal = useSelector((state: any) => state.presentDay.toggle.showModal);
  console.log("PresentDay props", props, store);

  useEffect(() => {
    console.log("PresentDay useEffect", showModal);
  }, [showModal]);

  return (
    <div className={styles.presentDay}>
      {/* <div className={styles.presentDayTitle}>
        新建今日事项
      </div> */}
      <Button
        className={`${styles.animatedBtn}`}
        style={{
          transform: showModal ? "scale(5)" : undefined,
          opacity: showModal ? 0 : undefined,
          pointerEvents: showModal ? "none" : undefined,
        }}
        onClick={(e) => {
          // dispatch({
          //   type: 'presentDay/generate', payload: {
          //     title: getToday(),
          //     description: 'Win win is good',
          //     date: getToday()
          //   }
          // })
          dispatch({ type: "presentDay/showModal", payload: { showModal: true } });
        }}
      >
        {getToday()}
      </Button>
      {showModal && (
        <div className={styles.modal}>
          <Modal>
            <div className={styles.modalTitle}>新建今日事项</div>
            <div className={styles.modalContent}>
              <div className={styles.modalContentTitle}>标题</div>
              <input className={styles.modalContentInput} />
              <div className={styles.modalContentTitle}>描述</div>
              <textarea className={styles.modalContentInput} />
              <div className={styles.modalContentTitle}>日期</div>
              <input className={styles.modalContentInput} />
            </div>
            <div className={styles.modalFooter}>
              <Button
                className={styles.modalFooterBtn}
                onClick={(e) => {
                  dispatch({ type: "presentDay/showModal", payload: { showModal: false } });
                }}
              >
                取消
              </Button>
              <Button
                className={styles.modalFooterBtn}
                onClick={(e) => {
                  dispatch({ type: "presentDay/showModal", payload: { showModal: false } });
                }}
              >
                确定
              </Button>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default PresentDay;
