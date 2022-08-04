/**
 * 获取storage
 * @param key
 * @returns {null|any}
 */
export const getStorage = (key) => {
  const item = localStorage.getItem(key) || sessionStorage.getItem(key);
  if (!item) return null;
  const origin = JSON.parse(item);
  if (origin.expire && (origin.expire <= new Date().getTime())) {
    (origin.mode === 'session' ? sessionStorage : localStorage).removeItem(key);
    return null;
  }
  return JSON.parse(origin.data);
};
