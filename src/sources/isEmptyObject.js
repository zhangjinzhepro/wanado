import { isObject } from './isObject';

export const isEmptyObject = (params) => {
  if (!isObject(params)) {
    throw new Error('请传入一个对象');
  }
  return !(Object.keys(params).length);
};
