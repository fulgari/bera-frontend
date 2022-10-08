import React from 'react'
import styles from "./BasicDashboardItem.module.css";

export const dayMap = {
    "0": "Sun",
    "1": "Mon",
    "2": "Tue",
    "3": "Wed",
    "4": "Thu",
    "5": "Fri",
    "6": "Sat"
}
type BasicDashboardItemProps = {
    index: number;
}
function BasicDashboardItem(props: BasicDashboardItemProps) {
    const {index} = props;
  const date = new Date();
  const day = date.getDay(); // weekday
  const dayInMonth = date.getDate();
  return (
    <div>{day===index ? "*": ""} {dayInMonth - day + index}, { dayMap[index] } </div>
  )
}

export default BasicDashboardItem