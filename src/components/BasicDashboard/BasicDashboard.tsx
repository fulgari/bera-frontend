import React from "react";
import styles from "./BasicDashboard.module.css";

type BasicDashboardProps = {};

export default function (props: BasicDashboardProps) {
  return (
    <div className={styles.basicDashboardWrap}>
      <div className={styles.basicDashboard}>
        {new Array(6).fill(0).map((_, i) => (
          <div className={styles.basicDashboardItem}>{i}</div>
        ))}
      </div>
    </div>
  );
}
