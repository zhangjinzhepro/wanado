import { isNotArray } from './isNotArray';
import { isNotObject } from './isNotObject';
import { isArray } from './isArray';
import { isNumber } from './isNumber';

/**
 * 数组删除
 * @param target
 * @param index
 * @param count
 * @param key
 * @returns {Error|[]}
 */
export const arrayDel = ({
  target, index, count, key,
}) => {
  if (isNotArray(target)) {
    return Error('target必须为数组');
  }
  // 根据数量删除
  if (isNumber(index)) {
    return target.slice(0, index).concat(isNumber(count) ? target.slice(index + count) : []);
  }
  // 简单数组删除
  if (isArray(key) && key.some((n) => isNotObject(n))) {
    return target.filter((n) => !key.includes(n));
  }
  // 对象数组删除
  return target.filter((n) => Object.keys(key).every((keys) => n[keys] !== key[keys]));
};
