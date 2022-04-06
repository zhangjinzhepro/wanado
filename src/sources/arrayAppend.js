import { isArray } from './isArray';
import { isUndefined } from './isUndefined';
import { checkType } from './checkType';

/**
 * 数组添加
 * @param target
 * @param data
 * @param i
 * @returns {*[]|*}
 */
export const arrayAppend = (target, data, i) => {
  // 尾部添加
  if (isUndefined(i)) {
    return target.concat(checkType(data) === 'Array' ? data : [data]);
  }
  // 正常添加
  return [...target.slice(0, i), ...(checkType(data) === 'Array' ? data : [data]), ...target.slice(i)];
};
