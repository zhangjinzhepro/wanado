import { isUndefined } from './isUndefined';
import { checkType } from './checkType';
import { isNotArray } from './isNotArray';

/**
 * 数组添加
 * @param target
 * @param data
 * @param index
 * @returns {Error|[]}
 */
export const arrayAdd = ({ target, data, index }) => {
  // 判断初始类型 -开始
  if (isNotArray(target)) {
    return Error('target必须为数组');
  }
  if (isUndefined(data)) {
    return Error('data不能为空');
  }// -结束

  // 尾部添加
  if (isUndefined(index)) {
    return target.concat(data);
  }
  // 正常添加
  return [...target.slice(0, index), ...(checkType(data) === 'Array' ? data : [data]), ...target.slice(index)];
};
