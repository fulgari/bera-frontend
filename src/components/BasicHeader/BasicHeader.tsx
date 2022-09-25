import React from "react";
import styles from "./BasicHeader.module.css";

type BasicHeaderProps = {};

export default function (props: BasicHeaderProps) {
  return (
    <div className={styles.basicHeaderWrap}>
      <div className={styles.basicHeaderLeft}>BasicHeader left</div>
      <div className={styles.basicHeaderRight}>
        {new Array(4).fill(0).map((_, i) => (
          <div className={styles.basicHeaderRightItem}>{i}</div>
        ))}
      </div>
    </div>
  );
}
