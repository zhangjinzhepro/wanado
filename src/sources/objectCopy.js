import { isObject } from './isObject';

/**
 * 深浅拷贝
 * @param val
 * @param type
 * @returns {*[]|any}
 */
export const objectCopy = (val, type = 'shallow') => {
  if (type === 'deep') {
    const newObj = isObject(val) ? {} : [];
    Object.keys(val).forEach((key) => {
      if (val[key] || typeof val[key] === 'object') {
        newObj[key] = isObject(val[key]) ? {} : [];
        newObj[key] = objectCopy(val[key]);
      } else {
        newObj[key] = val[key];
      }
    });
    return newObj;
  }
  return Object.assign(val);
};
