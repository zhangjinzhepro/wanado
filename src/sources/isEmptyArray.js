import { isArray } from './isArray';

export const isEmptyArray = (params) => {
  if (!isArray(params)) {
    throw new Error('请传入一个数组');
  }
  return !(params.length);
};
