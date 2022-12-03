import React, { useEffect } from "react";
import { useQuery } from "react-query";
import styles from "./BasicDashboard.module.css";
import BasicDashboardItem from "./BasicDashboardItem/BasicDashboardItem";

type BasicDashboardProps = {
  from: string,
  to: string
};

export default function (props: BasicDashboardProps) {
  const { from, to } = props;

  const {
    isLoading,
    error,
    data: todos,
    isFetching,
  } = useQuery("gettodos", () =>
    fetch(`http://127.0.0.1:9001/api/todorecord/period/${from}/${to}`, {
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
    }
  }, [todos, isLoading, error])


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
