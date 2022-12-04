import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import styles from "./Main.module.css";
import BasicDashboard from "../BasicDashboard/BasicDashboard";
import BasicHeader from "../BasicHeader/BasicHeader";
import { getUrl } from "../../utils/env";

type MainProps = {};

export default function (props: MainProps) {

  // deprecated
  const {
    isLoading,
    error,
    data: todos,
    isFetching,
  } = useQuery("gettodos", () =>
    fetch(`${getUrl()}/api/todorecord`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res: any) => {
        console.log("[rq] get: ", res);
        return res;
      })
  );

  return isLoading ? (
    <div className={styles.dotsBars}>
    </div>
  ) : (
    <div className={styles.wrap}>
      <BasicHeader />
      {/* TODO: 做成动态的数据 */}
      <BasicDashboard from={"2022-11-28"} to={"2022-12-05"} /> 
    </div>
  );
}
