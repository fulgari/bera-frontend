import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getToday } from "../../utils/date";
import styles from "./passDays.module.css";

type PassDaysProps = {
  todos: any[];
};
export const PassDays = (props: PassDaysProps) => {
  const { todos } = props;
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  console.log("passDays props", props, store);

  return (
    <>
      <div className={styles.passDays}>
        {todos.map((todo) => (
          <li className="flex rounded m-2 " style={{ listStyle: "none", display: "flex" }}>
            <div style={{ marginRight: "1em" }}>{todo.title}</div>
          </li>
        ))}
      </div>
    </>
  );
};

export default PassDays;
