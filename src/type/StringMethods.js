// 日期格式化  --start
const toDate = (val = new Date(), format = 'YY-MM-DD') => {
  var date = new Date(val)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var min = date.getMinutes()
  var sec = date.getSeconds()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (min < 10) {
    min = '0' + min
  }
  if (sec < 10) {
    sec = '0' + sec
  }
  if (format === 'YY-MM-DD hh:mm:ss') {
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
  } else if (format === 'YY-MM-DD') {
    return `${year}-${month}-${day}`
  } else {
    return new Error('参数错误')
  }
}
// --end

// 一些表单验证规则
const isEmail = (val) => {
  var rule = /\w{1,}@\w{1,}\.[A-z]/
  return rule.test(val)
}

const isPhone = (val) => {
  var rule = /1[\d]{10}/
  return rule.test(val)
}
// --end

export {
  toDate,
  isEmail,
  isPhone
}
