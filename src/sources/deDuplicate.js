/**
 * 数组去重
 * @param arr
 * @param key
 * @returns {any[]|*}
 */
export const deDuplicate = (arr, key) => {
  // 对象数组
  if (key !== undefined) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i][key] === arr[j][key]) {
          arr.splice(j, 1);
          j--;
        }
      }
    }
    return arr;
  }
  // 简单数组
  return Array.from(new Set(arr));
};
