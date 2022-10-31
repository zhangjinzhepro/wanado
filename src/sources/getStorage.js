/**
 * 获取storage
 * @param key
 * @param type
 * @returns {null|any}
 */
import { attrHas } from './attrHas';

export const getStorage = (key, type = 'local') => {
  // 判断存储位置
  const item = (type === 'local' ? localStorage : sessionStorage).getItem(key);
  // 判空
  if (!attrHas(item)) return null;
  const origin = JSON.parse(item);
  // wanado数据
  if (origin.key === 'wanado') {
    // 判断过期
    if (origin.expire && (origin.expire <= new Date().getTime())) {
      // 移除数据
      (origin.mode === 'local' ? localStorage : sessionStorage).removeItem(key);
      return null;
    }
    return JSON.parse(origin.data);
  }
  // 普通数据
  return origin;
};
