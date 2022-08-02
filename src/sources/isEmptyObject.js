import { isObject } from './isObject';

export const isEmptyObject = (data) => {
  if (!isObject(data)) {
    throw new Error('请传入一个对象');
  }
  return !(Object.keys(data).length);
};
