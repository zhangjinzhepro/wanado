import {
  isObject
} from './OtherMethods'
// 数组去重 --start
const simplify = (arr) => {
  return Array.from(new Set(arr));
}
// --end

// 添加 --start
const append = (arr, i, data) => {
  arr.splice(i, 0, data)
  return arr
}
// --end

// 删除 --start
const remove = (arr, start, count) => {
  arr.splice(start, count)
  return arr
}
// --end

// 数组排序 --start
const sort = (...obj) => {
  var item
  obj[0].forEach(element => {
    if (isObject(element)) {
      item = 'obj'
    } else {
      item = 'str'
    }
  })
  var newArr
  if (item === 'obj' && obj[1] && obj[2]) {
    switch (obj[1]) {
      case 'order':
        newArr = sort1(obj[0], 'order', item, obj[2])
        break
      case 'invert':
        newArr = sort1(obj[0], 'invert', item, obj[2])
        break
      default:
        return new Error('参数错误')
    }
  } else if (item === 'str' && obj[1]) {
    switch (obj[1]) {
      case 'order':
        newArr = sort1(obj[0], 'order', item)
        break
      case 'invert':
        newArr = sort1(obj[0], 'invert', item)
        break
      default:
        return new Error('参数错误')
    }
  }
  return newArr
}

const sort1 = (arr, type, item, id) => {
  if (type === 'order' && item === 'obj') {
    return arr.sort((a, b) => {
      return a[id] - b[id]
    })
  } else if (type === 'invert' && item === 'obj') {
    return arr.sort((a, b) => {
      return b[id] - a[id]
    })
  } else if (type === 'order' && item === 'str') {
    return arr.sort((a, b) => {
      return a - b
    })
  } else if (type === 'invert' && item === 'str') {
    return arr.sort((a, b) => {
      return b - a
    })
  }
}
// --end

// 伪数组转换数组 --start
const toArray = (arr) => {
  return Array.prototype.slice.call(arr)
}
// --end

// 对象数组的分组 --start
const arrayGrounp = (arr, key) => {
  return arr.reduce((obj, ele) => {
    (obj[ele[key]] = obj[ele[key]] || []).push(ele)
    return obj
  }, {})
}
// --end


export {
  simplify,
  append,
  remove,
  toArray,
  sort,
  arrayGrounp
}
