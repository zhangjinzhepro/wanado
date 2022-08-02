import { isArray } from './isArray';
import { isObject } from './isObject';
import { isNotObject } from './isNotObject';
import { isNotArray } from './isNotArray';

/**
 * 对象数组分组
 * @param target
 * @param key
 */
/**
 * 对象数组分组
 * @param target
 * @param key
 * @returns {Error|[]}
 */
export const arrayGroup = ({ target, key }) => {
  // 判断初始类型 -开始
  if (isNotArray(target) || target.some((n) => isNotObject(n))) {
    return Error('target必须为对象数组');
  }
  if (!key) {
    return Error('key不能为空');
  }// -结束

  return target.reduce((obj, ele) => {
    const newObj = obj;
    (newObj[ele[key]] = newObj[ele[key]] || []).push(ele);
    return newObj;
  }, {});
};
