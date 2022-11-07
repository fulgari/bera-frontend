import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../BasicDashboardSlice';
import styles from "./TaskInput.module.css";
import { useEffect } from 'react';

function TaskInput(props: any) {
    const { setTodos, index, date } = props;

    const todos = useSelector((state:any) => state.basicDashboard.todos);
    const dispatch = useDispatch();


    useEffect(() => {
        console.log("TODOS, ", todos)
    }, [todos])

    return (
        <input
            className={styles.input}
            onChange={e => {
                console.log('e.target', e)
                setTodos(prev => {
                    let a = [...prev];
                    a[index] = e.target.value || "";
                    return a;
                })
            }}
            onBlur={e => {
                const newTodo = {
                    title: e.target.value,
                    description: "",
                    state: "",
                    date: date,
                    priority: 1,
                    dueDate: ""
                }
                dispatch({ type: "basicDashboard/addTodo", payload: newTodo });
            }}
        />
    )
}

export default TaskInput;