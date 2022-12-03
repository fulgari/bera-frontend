import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, TodoRecordType } from '../BasicDashboardSlice';
import styles from "./TaskInput.module.css";
import { useEffect } from 'react';

function TaskInput(props: any) {
    const { setTodos, path, date } = props;

    const [todoId, setTodoId] = useState<string | null>(null);

    const todos = useSelector((state: any) => state.basicDashboard.todos);
    const dispatch = useDispatch();
    const [value, setValue] = useState("")


    return (
        <input
            key={path}
            className={styles.input}
            value={value}
            onChange={e => {
                console.log('e.target', e)
                setValue(e.target.value)
            }}
            onBlur={e => {
                if (value === "") return;
                if (todoId) {
                    const newTodo: Partial<TodoRecordType> = {
                        id: todoId,
                        text: e.target.value as string,
                    }
                    dispatch({ type: "basicDashboard/updateTodo", payload: newTodo });
                } else {
                    const ts = new Date().getTime();
                    const tdId = ts.toString(32);
                    const newTodo: TodoRecordType = {
                        id: tdId,
                        date: date,
                        listId: null,
                        note: null,
                        text: e.target.value,
                        done: false,
                        updatedAt: ts.toString(),
                        createdAt: ts.toString(),
                        isMD: null,
                        tags: null
                    }
                    setTodoId(tdId);
                    dispatch({ type: "basicDashboard/addTodo", payload: newTodo });
                }

                // if (e.target.value !== value) {
                //     setTodos(prev => {
                //         let a = [...prev];
                //         a[index] = e.target.value || "";
                //         return a;
                //     })
                // }
            }}
        />
    )
}

export default TaskInput;