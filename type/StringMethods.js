// 日期格式化
const $toDate = function (val = new Date(), format = 'YY/MM/DD') {
  var date = new Date(Number(val))
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var min = date.getMinutes()
  var sec = date.getSeconds()
  if (month < 10) {
    month = '0' + month
  } else if (day < 10) {
    day = '0' + day
  } else if (hour < 10) {
    hour = '0' + hour
  } else if (hour < 10) {
    hour = '0' + hour
  } else if (min < 10) {
    min = '0' + min
  } else if (sec < 10) {
    sec = '0' + sec
  }
  if (format === 'YY/MM/DD hh:mm:ss') {
    return `${year}/${month}/${day} ${hour}:${min}:${sec}`
  } else if (format === 'YY/MM/DD') {
    return `${year}/${month}/${day}`
  } else {
    return new Error('参数错误')
  }
}
export {
  $toDate
}
