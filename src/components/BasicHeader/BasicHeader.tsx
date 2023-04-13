import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusDelta } from "../Main/MainSlice";
import styles from "./BasicHeader.module.css";
import cx from "classnames";

type BasicHeaderProps = {};

export default function (props: BasicHeaderProps) {
  const dispatch = useDispatch();
  const dateInMs: number = useSelector((state: any) => {
    return new Date().getTime() + state.main.dateDelta;
  });

  const date = new Date(dateInMs);
  const year = date.toLocaleString("en-GB", { year: "numeric" });
  const month = date.toLocaleString("en-GB", { month: "short" });

  const renderBtns = () => {
    const btns = [
      {
        name: "Prev",
        onClick: () => { dispatch({ type: "main/minusDelta", payload: {} }); }
      },
      {
        name: "Cur",
        onClick: () => { dispatch({ type: "main/resetDelta", payload: {} }); }
      },
      {
        name: "Next",
        onClick: () => { dispatch({ type: "main/addDelta", payload: {} }); }
      },
      {
        name: "Setting",
        onClick: () => { dispatch({ type: "", payload: {} }); }
      }
    ];
    return btns.map((item, index) => {
      return (
        <div key={index} className={cx(styles.basicHeaderRightItem, "text-green-600")} onClick={item.onClick}>{item.name}</div>
      )
    })
  }

  return (
    <div className={styles.basicHeaderWrap}>
      <div className={styles.basicHeaderLeft}>{year} {month}</div>
      <div className={styles.basicHeaderRight}>
        {renderBtns()}
      </div>
    </div>
  );
}
