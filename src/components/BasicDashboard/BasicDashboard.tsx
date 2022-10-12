import React from "react";
import styles from "./BasicDashboard.module.css";
import BasicDashboardItem from "./BasicDashboardItem/BasicDashboardItem";

type BasicDashboardProps = {};

export default function (props: BasicDashboardProps) {
  return (
    <div className={styles.basicDashboardWrap}>
      <div className={styles.basicDashboard}>
        {new Array(7).fill(0).map((_, i) => (
          <div className={styles.basicDashboardItem}>
            <BasicDashboardItem index={(i) % 7} />
          </div>
        ))}
      </div>
    </div>
  );
}
