import React from "react";
import s from "./Card.module.css";

type CardProps = {};

export default function (props: CardProps) {
  return (
    <div className={s.cardWrap}>
      <div className={s.card}></div>
    </div>
  );
}
