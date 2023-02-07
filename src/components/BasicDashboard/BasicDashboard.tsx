import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { getUrl } from "../../utils/env";
import styles from "./BasicDashboard.module.css";
import BasicDashboardItem from "./BasicDashboardItem/BasicDashboardItem";

type BasicDashboardProps = {
  from: string,
  to: string
};

export default function (props: BasicDashboardProps) {
  const { from, to } = props;

  const dispatch = useDispatch();
  const date = new Date();
  const milli = date.getTime();
  const day = date.getDay(); // weekday
  const anchorMilli = milli - (day === 0 ? 6 : day - 1) * 60 * 60 * 1000 * 24;

  const startOfWeek = new Date(anchorMilli);

  console.log("startOfWeek", startOfWeek, day - 1)

  const {
    isLoading,
    error,
    data: todos,
    isFetching,
  } = useQuery("getTodosByPeriod", () =>
    fetch(`${getUrl()}/api/todorecord/period/${from}/${to}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res: any) => {
        console.log("[period] get: ", res);
        return res;
      })
  );

  useEffect(() => {
    if (!isLoading && !error) {
      console.log("[todos] this week: ", todos)
      dispatch({ type: "basicDashboard/setupTodos", payload: todos })
    }
  }, [todos, isLoading, error])

  return (
    <div className={styles.basicDashboardWrap}>
      <div className={styles.basicDashboard}>
        {!isLoading
          && !error
          && (new Array(7).fill(0).map((_, i) => (
            <div className={styles.basicDashboardItem}>
              <BasicDashboardItem itemIndex={(i) % 7} itemDate={new Date(anchorMilli + i * 60 * 60 * 1000 * 24)} />
            </div>
          )))}
      </div>
    </div>
  );
}
