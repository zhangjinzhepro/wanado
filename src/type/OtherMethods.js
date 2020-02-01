// 判断数据类型 --start
const isString = (val) => {
  const type = Object.prototype.toString.call(val);
  return type.substring(8, 14) === 'String';
};
const isNumber = (val) => {
  const type = Object.prototype.toString.call(val);
  return type.substring(8, 14) === 'Number';
};
const isArray = (val) => {
  const type = Object.prototype.toString.call(val);
  return type.substring(8, 13) === 'Array';
};
const isBoolean = (val) => {
  const type = Object.prototype.toString.call(val);
  return type.substring(8, 15) === 'Boolean';
};
const isFunction = (val) => {
  const type = Object.prototype.toString.call(val);
  return type.substring(8, 16) === 'Function';
};
const isObject = (val) => {
  const type = Object.prototype.toString.call(val);
  return type.substring(8, 14) === 'Object';
};
// --end

// cookie操作  --start
const setCookie = (key, val, time = '') => {
  const max_age = time === '' ? '' : 'max-age={time * 60 * 60}';
  if (typeof val === 'object') {
    val = JSON.stringify(val);
  }
  document.cookie = `${key}=${val}; ${max_age}`;
};

const getCookie = (key) => {
  const { cookie } = document;
  const cookieObj = {};
  if (!key || cookie === '') {
    return new Error('参数错误');
  }
  if (cookie.indexOf(';') === -1) {
    const item = cookie.split('=');
    if (item[1].isFunction || item[1].isArray || item[1].isObject) {
      cookieObj[item[0]] = JSON.parse(item[1]);
    } else {
      cookieObj[item[0]] = item[1];
    }
    return cookieObj[key];
  }

  const cookieArr = cookie.split('; ');
  for (const key in cookieArr) {
    if (cookieArr.hasOwnProperty(key)) {
      const item = cookieArr[key].split('=');
      if (isFunction(item[1]) || isArray(item[1]) || isObject(item[1])) {
        cookieObj[item[0]] = JSON.parse(item[1]);
      } else {
        cookieObj[item[0]] = item[1];
      }
    }
  }
  return cookieObj[key];
};
// --end

export {
  isString,
  isNumber,
  isArray,
  isBoolean,
  isFunction,
  isObject,
  setCookie,
  getCookie,
};
