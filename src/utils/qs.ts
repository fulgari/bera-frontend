import qs from 'qs'

function getQS (key) {
  let search = window?.location?.search || ''
  while (search.startsWith('?')) {
    search = search.substring(1)
  }
  return qs.parse(search)[key]
}

export {
  getQS
}
