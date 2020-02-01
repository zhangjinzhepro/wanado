import {
  isObject,
} from './OtherMethods';
// 数组去重 --start
const simplify = (arr) => Array.from(new Set(arr));
// --end

// 添加 --start
const append = (arr, i, data) => {
  arr.splice(i, 0, data);
  return arr;
};
// --end

// 删除 --start
const remove = (arr, start, count) => {
  arr.splice(start, count);
  return arr;
};
// --end

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
  simplify,
  append,
  remove,
  toArray,
  sort,
  arrayGrounp,
};
