import React, { InputHTMLAttributes, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, TodoRecordType } from '../BasicDashboardSlice';
import styles from "./TaskInput.module.css";
import { useEffect } from 'react';
import { genEmptyTodoRecord } from '../../../utils/gen';

function TaskInput(props: any) {
    const { path, date, todo, isLast } = props;

    const inputRef = useRef<any>();
    const dispatch = useDispatch();

    useEffect(() => {
        if (inputRef.current && todo.text) {
            inputRef.current.value = todo.text;
        }
    }, [inputRef.current, todo.text])

    return (
        <input
            ref={inputRef}
            key={path}
            className={styles.input}
            onChange={e => {
                console.log('e.target', e)
                if (inputRef.current) {
                    inputRef.current.value = e.target.value;
                }
            }}
            onBlur={e => {
                if (inputRef.current?.value === "") return;
                if (isLast) {
                    const ts = new Date().getTime();
                    const tdId = ts.toString(32) + Math.floor(Math.random() * 1000);
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
                    dispatch({ type: "basicDashboard/addTodo", payload: newTodo });
                } else if (e.target.value) {
                    const newTodo: Partial<TodoRecordType> = {
                        id: todo.id,
                        text: e.target.value as string,
                    }
                    dispatch({ type: "basicDashboard/updateTodo", payload: newTodo });
                }
            }}
        />
    )
}

export default TaskInput;