import React from 'react';
import { substract, today, } from '../../utils/date';


const UPCOMING_NUMBER = 5;

export default function UpcomingDays(props: any) {

  return (<div>
    {
      Array.from({ length: UPCOMING_NUMBER }).map((_, i) => {

        return (
          <div key={UPCOMING_NUMBER - i}>
            {substract(today(), UPCOMING_NUMBER - i)}
          </div>
        )
      }

      )
    }
  </div>)
}