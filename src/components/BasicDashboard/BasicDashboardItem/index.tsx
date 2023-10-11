import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { simplifyDate } from '../../../utils/date'
import { type TodoRecordType } from '../BasicDashboardSlice'
import TaskInput from '../TaskInput'

export const dayMap = {
  0: 'Mon',
  1: 'Tue',
  2: 'Wed',
  3: 'Thu',
  4: 'Fri',
  5: 'Sat',
  6: 'Sun'
}

interface BasicDashboardItemProps {
  itemIndex: number
  itemDate: Date
}
function BasicDashboardItem (props: BasicDashboardItemProps) {
  const { itemIndex, itemDate } = props

  const dayInMonth = itemDate.getDate()
  const month = itemDate.toLocaleString('en-GB', { month: 'short' })
  const currentDateString = simplifyDate(itemDate)
  const todayDateString = simplifyDate(new Date())

  const todosAtDate: TodoRecordType[] = useSelector((state: any) => {
    const todos = state.basicDashboard.todos
    const todosAtDate = todos.filter(todorecord => todorecord.date === currentDateString)
    return todosAtDate
  })

  return (
        <div>
            <div className={`font-mono ${todayDateString === currentDateString ? 'underline text-emerald-400' : 'dark:text-slate-200'}` } >
                {month} {dayInMonth}, {dayMap[itemIndex]}
            </div>
            <div>
                {todosAtDate?.map((todo, todoIndex) => {
                  return (<TaskInput todo={todo} date={currentDateString} path={[itemIndex, todoIndex]} key={todoIndex} />)
                })}
                <TaskInput todo={undefined} date={currentDateString} path={[itemIndex, todosAtDate.length]} isLast={true} />
            </div>
        </div>
  )
}

export default BasicDashboardItem
