import { isObject } from './isObject';

/**
 * 对象合并
 * @param obj
 * @returns {*}
 */
export const objectMerge = (...obj) => {
  const arr = [...obj];
  arr.forEach((ele) => {
    if (!isObject(ele)) {
      throw new Error('参数错误');
    }
  });
  return arr.reduce((a, b) => ({ ...a, ...b }));
};
