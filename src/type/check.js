export const isString = (params) => Object.prototype.toString.call(params).includes('String');
export const isNumber = (params) => Object.prototype.toString.call(params).includes('Number');
export const isArray = (params) => Object.prototype.toString.call(params).includes('Array');
export const isBoolean = (params) => Object.prototype.toString.call(params).includes('Boolean');
export const isFunction = (params) => Object.prototype.toString.call(params).includes('Function');
export const isObject = (params) => Object.prototype.toString.call(params).includes('Object');
export const isEmptyArray = (params) => {
  if (!isArray(params)) {
    throw new Error('请传入一个数组');
  }
  return !(params.length);
};
export const isEmptyObject = (params) => {
  if (!isObject(params)) {
    throw new Error('请传入一个对象');
  }
  return !(Object.keys(params).length);
};
