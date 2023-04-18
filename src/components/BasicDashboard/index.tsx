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
    <div className={"w-full shadow-lg rounded-2xl flex-1 my-7 bg-white dark:bg-[rgba(255,255,255,.08)]"}>
      <div className={"grid grid-cols-5 min-h-full mx-3"}>
        {isLoading && (
          <div className="absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] flex justify-center items-center">
            <svg className="animate-spin h-5 w-5 text-emerald-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
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