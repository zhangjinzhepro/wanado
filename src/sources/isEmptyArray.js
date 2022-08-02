import { isNotArray } from './isNotArray';

export const isEmptyArray = (data) => {
  if (!isNotArray(data)) {
    throw new Error('请传入一个数组');
  }
  return !(data.length);
};
