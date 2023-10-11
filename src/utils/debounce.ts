export function throttle (fn, delay) {
  let last = 0
  return function (...args) {
    const now = Date.now()
    if (now - last < delay) {
      return
    }
    fn(...args)
    last = now
  }
}

// export function debounce(fn, delay) {
//   let timer;
//   return function(...args) {
//     if (timer) {

//     }
//   }
// }
