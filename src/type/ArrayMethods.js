// 数组去重 --start
const simplify = function (arr) {
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

export {
  simplify,
  append,
  remove

}
