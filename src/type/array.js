import { isArray, isNumber, isObject } from './check';

/**
 * 数组去重
 * @param arr
 * @param key
 * @returns {any[]|*}
 */
export const deDuplicate = (arr, key) => {
  // 对象数组
  if (key !== undefined) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arr.length; i++) {
      // eslint-disable-next-line no-plusplus
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i][key] === arr[j][key]) {
          arr.splice(j, 1);
          // eslint-disable-next-line no-plusplus
          j--;
        }
      }
    }
    return arr;
  }
  // 简单数组
  return Array.from(new Set(arr));
};

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
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in start) {
      flag = n[key] !== start[key];
    }
    return flag;
  });
};

/**
 * 数组排序
 * @param arr
 * @param type
 * @param key
 * @returns {*}
 */
export const sort = (arr, type, key) => {
  if (key && type === 'order') {
    return arr.sort((a, b) => a[key] - b[key]);
  }
  if (key && type === 'invert') {
    return arr.sort((a, b) => b[key] - a[key]);
  }
  if (type === 'order') {
    return arr.sort((a, b) => a - b);
  }
  return arr.sort((a, b) => b - a);
};

// 伪数组转换数组
export const toArray = (arr) => Array.prototype.slice.call(arr);

// 对象数组的分组
export const arrayGrounp = (arr, key) => arr.reduce((obj, ele) => {
  const newObj = obj;
  (newObj[ele[key]] = newObj[ele[key]] || []).push(ele);
  return newObj;
}, {});
