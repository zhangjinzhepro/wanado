// 判断数据类型 --start
const isString = function (val) {
  var type = Object.prototype.toString.call(val)
  return type.substring(8,14) === 'String' ? true : false
}
const isNumber = function (val) {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 14) === 'Number' ? true : false
}
const isArray = function (val) {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 13) === 'Array' ? true : false
}
const isBoolean = function (val) {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 15) === 'Boolean' ? true : false
}
const isFunction = function (val) {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 16) === 'Function' ? true : false
}
const isObject = function (val) {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 14) === 'Object' ? true : false
}
// --end

//cookie操作  --start
const setCookie = function (key, val, time = '') {
  var max_age = time === '' ? '' : `max-age={time * 60 * 60}`
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  document.cookie = key + "=" + val + "; " + max_age;
}

const getCookie = function (key) {
  var cookieArr = document.cookie.split('; ')
  var cookieObj = {}
    for (const key in cookieArr) {
      if (cookieArr.hasOwnProperty(key)) {
        var item = cookieArr[key].split('=')
        cookieObj[item[0]] = JSON.parse(item[1])
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
