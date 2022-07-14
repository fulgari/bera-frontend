import React from "react";
import { substract, today } from "../../utils/date";
import styles from "./UpcomingDays.module.css";

const UPCOMING_NUMBER = 5;

export default function UpcomingDays(props: any) {
  return (
    <div className={styles.upcomingList}>
      {Array.from({ length: UPCOMING_NUMBER }).map((_, i) => {
        return (
          <div
            key={UPCOMING_NUMBER - i}
            className={styles.upcomingItem}
            style={{ opacity: (i + 2) / (UPCOMING_NUMBER + 10) }}
          >
            {substract(today(), UPCOMING_NUMBER - i)}
          </div>
        );
      })}
    </div>
  );
}
