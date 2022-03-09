import { isNumber } from './isNumber';

/**
 * 数组删除
 * @param arr
 * @param start
 * @param count
 * @returns {*}
 */
export const arrayRemove = (arr, start, count) => {
  // 简单数组
  if (isNumber(start) && isNumber(count)) {
    arr.splice(start, count);
    return arr;
  }
  // 对象数组
  return arr.filter((n) => {
    let flag = true;
    Object.keys(start).forEach((key) => {
      flag = n[key] !== start[key];
    });
    return flag;
  });
};
