export const getStorage = (key) => {
  const item = localStorage.getItem(key) || sessionStorage.getItem(key);
  const origin = JSON.parse(item);
  if (origin.expire && (origin.expire <= new Date().getTime())) {
    (origin.mode === 'session' ? sessionStorage : localStorage).removeItem(key);
    return null;
  }
  return JSON.parse(origin.data);
};
