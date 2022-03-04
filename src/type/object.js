import { isObject } from './check';

// 数组和对象的深拷贝浅拷贝 --start
const objectCopy = (val, type = 'shallow') => {
  if (type === 'deep') {
    const newObj = isObject(val) ? {} : [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in val) {
      if (Object.prototype.hasOwnProperty.call(val, key)) {
        if (val[key] || typeof val[key] === 'object') {
          newObj[key] = isObject(val[key]) ? {} : [];
          newObj[key] = objectCopy(val[key]);
        } else {
          newObj[key] = val[key];
        }
      }
    }
    return newObj;
  }
  return Object.assign(val);
};
// --end

// 对象合并 --start
const objectMerge = (...obj) => {
  const arr = [...obj];
  arr.forEach((ele) => {
    if (!isObject(ele)) {
      return new Error('参数错误');
    }
    return true;
  });
  return arr.reduce((a, b) => ({ ...a, ...b }));
};
// --end


export {
  objectCopy,
  objectMerge,
};
