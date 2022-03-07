/**
 * 伪数组转换数组
 * @param arr
 * @returns {T[]}
 */
export const toArray = (arr) => Array.prototype.slice.call(arr);
