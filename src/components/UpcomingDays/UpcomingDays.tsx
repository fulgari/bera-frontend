import React from "react";
import { substract, today } from "../../utils/date";
import styles from "./UpcomingDays.module.css";

const UPCOMING_NUMBER = 5;

export default function UpcomingDays(props: any) {
  return (
    // <div className={styles.upcomingList}>
    <>
      {Array.from({ length: UPCOMING_NUMBER }).map((_, i) => {
        return (
          <div
            key={UPCOMING_NUMBER - i}
            className="flex justify-center items-center rounded-md border-slate-200 border-2 mx-2 my-6 py-6 cursor-default"
            // style={{ opacity: (i + 2) / (UPCOMING_NUMBER + 4) }}
          >
            <div>{substract(today(), UPCOMING_NUMBER - i)}</div>
          </div>
        );
      })}
    </>
    // </div>
  );
}
