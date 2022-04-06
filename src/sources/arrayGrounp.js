/**
 * 对象数组的分组
 * @param target
 * @param key
 */
export const arrayGrounp = (target, key) => target.reduce((obj, ele) => {
  const newObj = obj;
  (newObj[ele[key]] = newObj[ele[key]] || []).push(ele);
  return newObj;
}, {});
