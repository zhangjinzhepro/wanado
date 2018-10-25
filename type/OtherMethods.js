// 判断数据类型 --start

const $isString = function (val) {
  var type = Object.prototype.toString.call(val)
  return type.substring(8,14) === 'String' ? true : false
}
const $isNumber = function (val) {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 14) === 'Number' ? true : false
}
const $isArray = function (val) {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 14) === 'Array' ? true : false
}
const $isBoolean = function (val) {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 15) === 'Boolean' ? true : false
}
const $isFunction = function (val) {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 14) === 'Function' ? true : false
}
const $isObject = function (val) {
  var type = Object.prototype.toString.call(val)
  return type.substring(8, 14) === 'Object' ? true : false
}

// --end


export {
  $isString,
  $isNumber,
  $isArray,
  $isBoolean,
  $isFunction,
  $isObject
}
