import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import styles from "./Main.module.css";
import PresentDay from "../PresentDay/PresentDay";
import UpcomingDays from "../UpcomingDays/UpcomingDays";
import PassDays from "../PastDays/PassDays";
import BasicDashboard from "../BasicDashboard/BasicDashboard";
import BasicHeader from "../BasicHeader/BasicHeader";

type MainProps = {};

export default function (props: MainProps) {
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

  // if (error) return "An error has occurred: " + (error as any).message;

  return isLoading ? (
    <div className={styles.dotsBars}>
    </div>
  ) : (
    // <div className={styles.entry}>
    //   <div className={styles.canvas}>
    //     <div
    //       className={styles.colLeft}
    //       style={{
    //         transform: showModal ? "translateY(-100%)" : undefined,
    //         transition: "transform 0.3s ease-in",
    //       }}
    //     >
    //       <UpcomingDays />
    //     </div>
    //     <div className={styles.colCenter}>
    //       <PresentDay />
    //     </div>
    //     <div
    //       className={styles.colRight}
    //       style={{
    //         transform: showModal ? "translateY(-100%)" : undefined,
    //         transition: "transform 0.3s ease-in",
    //       }}
    //     >
    //       {/* {todos.map((todo) => (
    //         <li style={{ listStyle: "none", display: "flex" }}>
    //           <div style={{ marginRight: "1em" }}>{todo.title}</div>
    //         </li>
    //       ))} */}
    //       <PassDays todos={todos}/>
    //     </div>
    //   </div>
    // </div>
    <div className={styles.wrap}>
      <BasicHeader />
      <BasicDashboard />
      
    </div>
  );
}
