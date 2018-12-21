export const formatNumber = (n) => {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export const formatTime = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export const getFullURL = (appOptions) => {
  if (!appOptions) return null
  var url = appOptions.path || ''
  var params = []
  var query = appOptions.query || {}
  for (var x in query) {
    params.push(x + '=' + query[x])
  }
  if (params.length > 0) {
    url = url + '?' + params.join('&')
  }
  if (url && !url.startsWith('/')) {
    url = `/${url}`
  }
  return url
}
