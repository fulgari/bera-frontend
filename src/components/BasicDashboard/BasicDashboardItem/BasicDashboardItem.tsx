import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { simplifyDate } from '../../../utils/date';
import { TodoRecordType } from '../BasicDashboardSlice';
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
    itemIndex: number;
    itemDate: Date;
}
function BasicDashboardItem(props: BasicDashboardItemProps) {
    const { itemIndex, itemDate } = props;

    const dayInMonth = itemDate.getDate();
    const month = itemDate.toLocaleString("en-GB", { month: "short" });
    const currentDateString = simplifyDate(itemDate);
    const todayDateString = simplifyDate(new Date());

    const todosAtDate: TodoRecordType[] = useSelector((state: any) => {
        const todos = state.basicDashboard.todos
        const todosAtDate = todos.filter(todorecord => todorecord.date === currentDateString);
        return todosAtDate;
    });

    return (
        <div>
            <div className={styles.itemTitle + (todayDateString === currentDateString ? (" " + styles.highlight) : "")} >
                {month} {dayInMonth}, {dayMap[itemIndex]}
            </div>
            <div className={styles.itemContentWrap}>
                {todosAtDate && todosAtDate.map((todo, todoIndex) => {
                    return (<TaskInput todo={todo} date={currentDateString} path={[itemIndex, todoIndex]} />)
                })}
                <TaskInput todo={{}} date={currentDateString} path={[itemIndex, todosAtDate.length]} isLast={true} />
            </div>
        </div>
    )
}

export default BasicDashboardItem