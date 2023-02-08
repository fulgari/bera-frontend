import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import styles from "./Main.module.css";
import BasicDashboard from "../BasicDashboard/BasicDashboard";
import BasicHeader from "../BasicHeader/BasicHeader";
import { getUrl } from "../../utils/env";

type MainProps = {};

export default function (props: MainProps) {
  const delta: number = useSelector((state: any) => {
    return state.main.dateDelta;
  });
  const dateInMs = new Date().getTime() + delta;
  const date = new Date(dateInMs);
  const ms = date.getTime();
  const day = date.getDay();
  /** start of the current showing week */
  const anchorMs = ms - (day === 0 ? 6 : day - 1) * 60 * 60 * 1000 * 24;

  return  (
    <div className={styles.wrap}>
      <BasicHeader />
      <BasicDashboard anchorMs={anchorMs} /> 
    </div>
  );
}
