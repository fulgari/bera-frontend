function errWrap (fn) {
  return function (err) {
    if (err) throw err
    fn()
  }
}

export { errWrap }
