import React from 'react'
import styles from "./TaskInput.module.css";

function TaskInput(props: any) {
    const {setTodos, index} = props;
    return (
        <input className={styles.input} onChange={e => {
            console.log('e.target', e)
            setTodos(prev => {
                let a = [...prev];
                a[index] = e.target.value || "";
                return a;
            })
        }} />
    )
}

export default TaskInput;