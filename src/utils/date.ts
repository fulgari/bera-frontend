const today = () => new Date()

function getToday (): string {
  const dt = today()
  const day = `${dt.getDate()}`.padStart(2, '0')
  const month = `${dt.getMonth() + 1}`.padStart(2, '0')
  const year = dt.getFullYear()
  return `${year}-${month}-${day}`
}

function subtract (dt: Date, value: number, unit: 'd' | 'm' | 'y' = 'd'): string {
  const time = dt.getTime()
  switch (unit) {
    case 'd':
      dt.setTime(time - value * 24 * 60 * 60 * 1000)
      break
    case 'm':
      dt.setTime(time - value * 30 * 24 * 60 * 60 * 1000)
      break
    case 'y':
      dt.setTime(time - value * 365 * 24 * 60 * 60 * 1000)
      // dt.setFullYear(dt.getFullYear() - value);
      break
    default:
      dt.setTime(time - value * 24 * 60 * 60 * 1000)
      break
  }
  const day = `${dt.getDate()}`.padStart(2, '0')
  const month = `${dt.getMonth() + 1}`.padStart(2, '0')
  const year = dt.getFullYear()
  return `${year}-${month}-${day}`
}

function isSimpleDate (date: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(date)
}

/**
 * Transforms Date object to yyyy-MM-dd string
 * @param date
 * @returns
 */
function simplifyDate (date: Date): string {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
}

export { today, getToday, subtract, isSimpleDate, simplifyDate }
