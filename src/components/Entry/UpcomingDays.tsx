import React from 'react';
import { substract, today, } from '../../utils/date';


const UPCOMING_NUMBER = 5;

export default function UpcomingDays(props: any) {

  return (<div>
    {
      Array.from({ length: UPCOMING_NUMBER }).map((_, i) => {

        return (
          <div key={i}>
            {substract(today(), i)}
          </div>
        )
      }

      )
    }
  </div>)
}