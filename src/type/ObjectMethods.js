import {
  isObject,
  isArray
} from './OtherMethods'

// 数组和对象的深拷贝浅拷贝 --start
const objectCopy = (val, type = 'shallow') => {
  if (type === 'deep') {
    var newObj = isObject(val) ? {} : []
    for (const key in val) {
      if (val.hasOwnProperty(key)) {
        if (val[key] || typeof val[key] === 'object') {
          newObj[key] = isObject(val[key]) ? {} : []
          newObj[key] = objectCopy(val[key])
        } else {
          newObj[key] = val[key];
        }
      }
    }
    return newObj
  } else {
    return Object.assign(val)
  }
}
// --end

// 对象合并 --start
const objectMerge = (...obj) => {
  let arr = [...obj]
  arr.forEach((ele) => {
    if (!isObject(ele)) {
      return new Error('参数错误')
    }
  })
  return arr.reduce((a, b) => {
    return Object.assign({}, a, b)
  })
}

export {
  objectCopy,
  objectMerge
}
