/**
 * 对象数组的分组
 * @param arr
 * @param key
 */
export const arrayGrounp = (arr, key) => arr.reduce((obj, ele) => {
  const newObj = obj;
  (newObj[ele[key]] = newObj[ele[key]] || []).push(ele);
  return newObj;
}, {});
