import React, { useEffect, useState } from 'react'
import TaskInput from '../TaskInput/TaskInput';
import styles from "./BasicDashboardItem.module.css";

export const dayMap = {
    "0": "Mon",
    "1": "Tue",
    "2": "Wed",
    "3": "Thu",
    "4": "Fri",
    "5": "Sat",
    "6": "Sun",
}

type BasicDashboardItemProps = {
    index: number;
}
function BasicDashboardItem(props: BasicDashboardItemProps) {
    const { index } = props;
    const date = new Date();
    const milli = date.getTime();
    const day = date.getDay(); // weekday
    const anchorMilli = milli - (day - 1) * 60 * 60 * 1000 * 24;
    const itemDate = new Date(anchorMilli + index * 60 * 60 * 1000 * 24);
    const dayInMonth = itemDate.getDate();
    const month = itemDate.toLocaleString("en-GB", { month: "short" });

    const [todos, setTodos] = useState([""]);

    useEffect(() => {
        console.log('todos', todos)
    }, [todos])

    return (
        <div>
            <div className={styles.itemTitle + (day === ((index + 1) % 7) ? (" " + styles.highlight) : "")} >
                {month} {dayInMonth}, {dayMap[index]}
            </div>
            <div className={styles.itemContentWrap}>
                {todos.map((item, order) => {
                    return (<TaskInput setTodos={setTodos} date={itemDate} path={[index, order]} />)
                })}
            </div>
        </div>
    )
}

export default BasicDashboardItem