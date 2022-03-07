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
  return arr.sort((a, b) => a - b);
};
