const getCookie = (key) => {
  const cookie = document.cookie
  const arr = cookie.split(';')
  for (const item of arr) {
    const tuple = item.split('=')
    const k = tuple[0]
    if (k === key) {
      return tuple[1]
    }
  }
  return ''
}
const setCookie = (key: string, value: string) => {
  const str = `${key}=${value};`
  document.cookie += str
}
export {
  getCookie,
  setCookie
}
