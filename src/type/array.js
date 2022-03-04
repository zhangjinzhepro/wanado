import { isArray, isNumber, isObject } from './check';

export const deDuplicate = (arr, key) => {
  // 对象数组
  if (key !== undefined) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arr.length; i++) {
      // eslint-disable-next-line no-plusplus
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i][key] === arr[j][key]) {
          arr.splice(j, 1);
          // eslint-disable-next-line no-plusplus
          j--;
        }
      }
    }
    return arr;
  }
  // 简单数组
  return Array.from(new Set(arr));
};


export const arrayAppend = (arr, i, data) => {
  // 插入数组
  if (isArray(data)) {
    return [...arr.slice(0, i), ...data, ...arr.slice(i)];
  }
  // 简单数组
  arr.splice(i, 0, data);
  return arr;
};

export const arrayRemove = (arr, start, count) => {
  // 简单数组
  if (isNumber(start) && isNumber(count)) {
    arr.splice(start, count);
    return arr;
  }
  // 对象数组
  return arr.filter((n) => {
    let flag = true;
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in start) {
      flag = n[key] !== start[key];
    }
    return flag;
  });
};

const sort1 = (arr, type, item, id) => {
  if (type === 'order' && item === 'obj') {
    return arr.sort((a, b) => a[id] - b[id]);
  } if (type === 'invert' && item === 'obj') {
    return arr.sort((a, b) => b[id] - a[id]);
  } if (type === 'order' && item === 'str') {
    return arr.sort((a, b) => a - b);
  } if (type === 'invert' && item === 'str') {
    return arr.sort((a, b) => b - a);
  }
};

// 数组排序 --start
const sort = (...obj) => {
  let item;
  obj[0].forEach((element) => {
    if (isObject(element)) {
      item = 'obj';
    } else {
      item = 'str';
    }
  });
  let newArr;
  if (item === 'obj' && obj[1] && obj[2]) {
    switch (obj[1]) {
      case 'order':
        newArr = sort1(obj[0], 'order', item, obj[2]);
        break;
      case 'invert':
        newArr = sort1(obj[0], 'invert', item, obj[2]);
        break;
      default:
        return new Error('参数错误');
    }
  } else if (item === 'str' && obj[1]) {
    switch (obj[1]) {
      case 'order':
        newArr = sort1(obj[0], 'order', item);
        break;
      case 'invert':
        newArr = sort1(obj[0], 'invert', item);
        break;
      default:
        return new Error('参数错误');
    }
  }
  return newArr;
};

// --end

// 伪数组转换数组 --start
const toArray = (arr) => Array.prototype.slice.call(arr);
// --end

// 对象数组的分组 --start
const arrayGrounp = (arr, key) => arr.reduce((obj, ele) => {
  const newObj = obj;
  (newObj[ele[key]] = newObj[ele[key]] || []).push(ele);
  return newObj;
}, {});
// --end


export {
  toArray,
  sort,
  arrayGrounp,
};
