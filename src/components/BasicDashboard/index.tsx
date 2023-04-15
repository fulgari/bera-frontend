import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { simplifyDate } from "../../utils/date";
import { getUrl } from "../../utils/env";
import s from "./index.module.css";
import BasicDashboardItem from "./BasicDashboardItem";

type BasicDashboardProps = {
  anchorMs: number,
};

export default function (props: BasicDashboardProps) {
  const { anchorMs } = props;

  const dispatch = useDispatch();

  const startOfWeek = new Date(anchorMs);
  const endOfWeek = new Date(anchorMs + 7 * 60 * 60 * 1000 * 24);
  const from = simplifyDate(startOfWeek);
  const to = simplifyDate(endOfWeek);

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
    <div className={"w-full shadow-lg rounded-2xl flex-1 my-7"}>
      <div className={"grid grid-cols-5 min-h-full mx-3"}>
        {isLoading && (
          <div className={s.dotsBars}>
          </div>
        )}
        {!isLoading
          && !error
          && (new Array(7).fill(0).map((_, i) => (
            <div className={"relative pt-10 px-3"} key={i}>
              <BasicDashboardItem itemIndex={(i) % 7} itemDate={new Date(anchorMs + i * 60 * 60 * 1000 * 24)} />
            </div>
          )))}
      </div>
    </div>
  );
}
