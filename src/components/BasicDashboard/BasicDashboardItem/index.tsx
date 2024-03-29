import React, { useRef } from 'react'
import { simplifyDate } from '../../../utils/date'
import { type TodoRecordType } from '../../../slice/TodoRecordSlice'
import TaskInput from '../TaskInput'
import { useAppSelector } from '../../../store'

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

  const todosAtDate: TodoRecordType[] = useAppSelector((state) => {
    const todos = state.todoRecord.todos
    const todosAtDate = todos.filter(todorecord => todorecord.date === currentDateString)
    return todosAtDate
  })
  const colonRef = useRef(null)

  return (
    <div>
      <div className={`font-mono transition ease-in delay-100 ${todayDateString === currentDateString ? 'underline text-emerald-400' : 'dark:text-slate-200'}`} >
        {month} {dayInMonth}, {dayMap[itemIndex]}
      </div>
      <div ref={colonRef}>
        {todosAtDate?.map((todo, todoIndex) => {
          return (<TaskInput todo={todo} date={currentDateString} path={[itemIndex, todoIndex]} key={todoIndex} colonRef={colonRef.current} />)
        })}
        <TaskInput todo={undefined} date={currentDateString} path={[itemIndex, todosAtDate.length]} colonRef={colonRef.current} isLast={true} />
      </div>
    </div>
  )
}

export default BasicDashboardItem
