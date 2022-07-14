import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import styles from "./Entry.module.css";
import PresentDay from "../PresentDay/PresentDay";
import UpcomingDays from "../UpcomingDays/UpcomingDays";

type EntryProps = {};

export default function (props: EntryProps) {
  const showModal = useSelector((state: any) => state.presentDay.toggle.showModal);

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

  const today = new Date();
  const futureTodos = todos && todos.filter((todo) => todo.dueDate);

  // if (error) return "An error has occurred: " + (error as any).message;

  return isLoading ? (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ margin: "auto", background: "#fff", display: "block" }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#fee6e9"
          stroke-width="10"
          r="35"
          stroke-dasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  ) : (
    <div className={styles.entry}>
      <div
        className={styles.canvas}
        style={{
          transform: showModal ? "translateY(-100%)" : undefined,
        }}
      >
        <div className={styles.colLeft}>
          <UpcomingDays />
        </div>
        <div className={styles.colCenter}>
          <PresentDay />
        </div>
        <div className={styles.colRight}>
          {todos.map((todo) => (
            <li style={{ listStyle: "none", display: "flex" }}>
              <div style={{ marginRight: "1em" }}>{todo.title}</div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
