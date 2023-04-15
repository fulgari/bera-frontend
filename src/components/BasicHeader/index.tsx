import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusDelta } from "../Main/MainSlice";
import cx from "classnames";

type BasicHeaderProps = {};

export default function (props: BasicHeaderProps) {
  const dispatch = useDispatch();
  const dateInMs: number = useSelector((state: any) => {
    return new Date().getTime() + state.main.dateDelta;
  });

  const date = new Date(dateInMs);
  const year = date.toLocaleString("en-GB", { year: "numeric" });
  const month = date.toLocaleString("en-GB", { month: "short" });

  const renderBtns = () => {
    const btns = [
      {
        name: "Prev",
        onClick: () => { dispatch({ type: "main/minusDelta", payload: {} }); }
      },
      {
        name: "Cur",
        onClick: () => { dispatch({ type: "main/resetDelta", payload: {} }); }
      },
      {
        name: "Next",
        onClick: () => { dispatch({ type: "main/addDelta", payload: {} }); }
      },
      // {
      //   name: "Setting",
      //   onClick: () => { dispatch({ type: "", payload: {} }); }
      // }
    ];
    return btns.map((item, index) => {
      return (
        <div key={index} className={cx("w-10 h-10 mr-3 leading-10 cursor-default select-none font-mono text-green-600 hover:drop-shadow-md hover:text-green-400")} onClick={item.onClick}>{item.name}</div>
      )
    })
  }

  return (
    <div className={"flex justify-between items-center w-full p-3"}>
      <div className={"text-4xl leading-9 tracking-tighter capitalize flex items-center cursor-default font-serif"}>{year} {month}</div>
      <div className={"flex items-center"}>
        {renderBtns()}
      </div>
    </div>
  );
}
