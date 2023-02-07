import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusDelta } from "../Main/MainSlice";
import styles from "./BasicHeader.module.css";

type BasicHeaderProps = {};

export default function (props: BasicHeaderProps) {
  const dispatch = useDispatch();
  const dateInMs: number = useSelector((state: any) => {
    return new Date().getTime() + state.main.dateDelta;
  });

  const date = new Date(dateInMs);
  const year = date.toLocaleString("en-GB", { year: "numeric" });
  const month = date.toLocaleString("en-GB", { month: "short" });

  return (
    <div className={styles.basicHeaderWrap}>
      <div className={styles.basicHeaderLeft}>{year} {month}</div>
      <div className={styles.basicHeaderRight}>
        <div className={styles.basicHeaderRightItem} onClick={() => { dispatch({ type: "main/minusDelta", payload: {} }); }}>Prev</div>
        <div className={styles.basicHeaderRightItem} onClick={() => { dispatch({ type: "main/resetDelta", payload: {} }); }}>Cur</div>
        <div className={styles.basicHeaderRightItem} onClick={() => { dispatch({ type: "main/addDelta", payload: {} }); }}>Next</div>
        <div className={styles.basicHeaderRightItem}>Setting</div>
      </div>
    </div>
  );
}
