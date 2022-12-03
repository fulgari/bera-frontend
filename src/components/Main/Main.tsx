import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import styles from "./Main.module.css";
import BasicDashboard from "../BasicDashboard/BasicDashboard";
import BasicHeader from "../BasicHeader/BasicHeader";

type MainProps = {};

export default function (props: MainProps) {

  const {
    isLoading,
    error,
    data: todos,
    isFetching,
  } = useQuery("gettodos", () =>
    fetch("http://127.0.0.1:9001/api/todorecord", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res: any) => {
        console.log("[rq] get: ", res);
        return res;
      })
  );

  // if (error) return "An error has occurred: " + (error as any).message;

  return isLoading ? (
    <div className={styles.dotsBars}>
    </div>
  ) : (
    <div className={styles.wrap}>
      <BasicHeader />
      {/* TODO: 做成动态的数据 */}
      <BasicDashboard from={"2022-12-01"} to={"2022-12-31"} /> 
    </div>
  );
}
