import React from "react";
import styles from "./BasicHeader.module.css";

type BasicHeaderProps = {};

export default function (props: BasicHeaderProps) {
  const date = new Date();
  const year = date.toLocaleString("en-GB", {year: "numeric"});
  const month = date.toLocaleString("en-GB", {month: "short"});
  return (
    <div className={styles.basicHeaderWrap}>
      <div className={styles.basicHeaderLeft}>{year} {month}</div>
      <div className={styles.basicHeaderRight}>
        {new Array(4).fill(0).map((_, i) => (
          <div className={styles.basicHeaderRightItem}>{i}</div>
        ))}
      </div>
    </div>
  );
}
