import { isArray } from './isArray';

/**
 * 数组添加
 * @param arr
 * @param i
 * @param data
 * @returns {*[]|*}
 */
export const arrayAppend = (arr, i, data) => {
  // 插入数组
  if (isArray(data)) {
    return [...arr.slice(0, i), ...data, ...arr.slice(i)];
  }
  // 简单数组
  arr.splice(i, 0, data);
  return arr;
};
