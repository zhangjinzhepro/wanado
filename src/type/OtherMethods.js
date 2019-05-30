// 判断数据类型 --start
const isString = (val) => {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 14) === 'String' ? true : false
}
const isNumber = (val) => {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 14) === 'Number' ? true : false
}
const isArray = (val) => {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 13) === 'Array' ? true : false
}
const isBoolean = (val) => {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 15) === 'Boolean' ? true : false
}
const isFunction = (val) => {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 16) === 'Function' ? true : false
}
const isObject = (val) => {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 14) === 'Object' ? true : false
}
// --end

//cookie操作  --start
const setCookie = (key, val, time = '') => {
  var max_age = time === '' ? '' : `max-age={time * 60 * 60}`
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  document.cookie = key + "=" + val + "; " + max_age;
}

const getCookie = (key) => {
  var cookie = document.cookie
  var cookieObj = {}
  if (!key || cookie === '') {
    return new Error('参数错误')
  }
  if (cookie.indexOf(';') === -1) {
    var item = cookie.split('=')
    if (item[1].isFunction || item[1].isArray || item[1].isObject) {
      cookieObj[item[0]] = JSON.parse(item[1])
    } else {
      cookieObj[item[0]] = item[1]
    }
    return cookieObj[key]
  }

  var cookieArr = cookie.split('; ')
  for (const key in cookieArr) {
    if (cookieArr.hasOwnProperty(key)) {
      var item = cookieArr[key].split('=')
      if (isFunction(item[1]) || isArray(item[1]) || isObject(item[1])) {
        cookieObj[item[0]] = JSON.parse(item[1])
      } else {
        cookieObj[item[0]] = item[1]
      }
    }
  }
  return cookieObj[key]
}
// --end

export {
  isString,
  isNumber,
  isArray,
  isBoolean,
  isFunction,
  isObject,
  setCookie,
  getCookie
}
