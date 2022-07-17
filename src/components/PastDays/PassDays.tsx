import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getToday } from "../../utils/date";

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
      {todos.map((todo) => (
        <li className="flex justify-center items-center rounded-md border-slate-200 border-2 mx-2 my-6 py-6 cursor-default">
          <div>{todo.title}</div>
        </li>
      ))}
    </>
  );
};

export default PassDays;
