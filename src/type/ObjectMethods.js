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

const objectMerge = (params1, params2, params3) => {
  if (params2 === 'undefined' || params2 === undefined) {
    if (isArray(params1)) {
      var obj = params1.reduce((a, b)=>{
        return Object.assign({},a,b)
      })
      return obj
    } else {
      return new Error("请使用数组。")
    }
  } else if (params3) {
    return new Error("请使用数组。")
  }else{
    return Object.assign({},params1,params2)
  }

}

export {
  objectCopy,
  objectMerge
}
