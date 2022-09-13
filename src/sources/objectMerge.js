import { isNotArray } from './isNotArray';
import { isNotObject } from './isNotObject';

/**
 * 对象合并
 * @param target
 * @param type
 * @returns {{}}
 */
export const objectMerge = ({ target, type = 'backward' }) => {
  if (isNotArray(target) || target.some((n) => isNotObject(n))) {
    return Error('target必须为一个对象数组');
  }
  return target.reduce((a, b) => (type === 'forward' ? { ...b, ...a } : { ...a, ...b }));
};
