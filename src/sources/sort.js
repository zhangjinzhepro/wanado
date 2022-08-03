/**
 * 数组排序
 * @param target
 * @param type
 * @param key
 * @returns {[]}
 */
export const sort = ({ target, type = 'order', key }) => {
  if (key && type === 'order') {
    return target.sort((a, b) => a[key] - b[key]);
  }
  if (key && type === 'invert') {
    return target.sort((a, b) => b[key] - a[key]);
  }
  if (type === 'order') {
    return target.sort((a, b) => a - b);
  }
  return target.sort((a, b) => b - a);
};
