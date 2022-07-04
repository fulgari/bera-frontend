import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styles from './Entry.module.css';

type EntryProps = {};


export default function (props: EntryProps) {

  const { isLoading, error, data: todos, isFetching } = useQuery("gettodos", () =>
    fetch(
      "http://127.0.0.1:9001/api/todorecord", {
      method: "GET",
    }
    ).then(res => res.json()).then((res: any) => {
      console.log("[rq] get: ", res);
      return res;
    })
  );

  const today = new Date();
  const futureTodos = todos && todos.filter(todo => todo.dueDate);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + (error as any).message;

  return (<div className={styles.entry}>
    <div className={styles.canvas}>
      {todos.map(todo => (
        <li style={{ listStyle: "none", display: 'flex' }}>
          <div style={{ marginRight: "1em" }}>
            {todo.title}
          </div>
          <div>
            {todo.description}
          </div>
        </li>
      ))}
    </div>
  </div>)
}
