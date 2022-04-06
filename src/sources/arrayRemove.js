import { checkType } from './checkType';
import { isUndefined } from './isUndefined';

/**
 * 数组删除
 * @param target
 * @param start
 * @param count
 * @returns {*}
 */
export const arrayRemove = (target, start, count) => {
  // 根据数量删除
  if (!isUndefined(count)) {
    target.splice(start, count);
    return target;
  }
  // 简单数组删除
  if (checkType(start) !== 'Object') {
    return target.filter((n) => n !== start);
  }
  // 对象数组删除
  return target.filter((n) => Object.keys(start).every((key) => n[key] !== start[key]));
};
