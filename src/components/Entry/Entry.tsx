import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styles from './Entry.module.css';

type EntryProps = {};

export default function (props: EntryProps) {

  const { isLoading, error, data: users, isFetching } = useQuery("getUsers", () =>
    fetch(
      "http://127.0.0.1:9001/api/users", {
      method: "GET",
    }
    ).then(res => res.json()).then((res: any) => {
      console.log("[rq] get: ", res);
      return res;
    })
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + (error as any).message;

  return (<div className={styles.entry}>
    <div className={styles.canvas}>
      {users.map(user => (
        <li style={{ listStyle: "none" }}>
          <div>
            {user.username}
          </div>
          <div>
            {user.email}
          </div>
        </li>
      ))}
    </div>
  </div>)
}
