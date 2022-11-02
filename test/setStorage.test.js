import { checkType } from './checkType';

/**
 * 设置storage
 * @param key
 * @param value
 * @param options
 */
export const setStorage = (key, value, options = {}) => {
  const item = {
    key: 'wanadoStorage',
    data: JSON.stringify(value),
    type: checkType(value),
    expire: options.expire && new Date().getTime() + options.expire * 1000,
    mode: options.mode || 'local',
  };
  (options.mode === 'session' ? sessionStorage : localStorage).setItem(key, JSON.stringify(item));
};
