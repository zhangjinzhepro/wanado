import { checkType } from './checkType';

/**
 * 设置storage
 * @param key
 * @param value
 * @param option
 */
export const setStorage = ({ key, value, option = {} }) => {
  const item = {
    data: JSON.stringify(value),
    type: checkType(value),
    expire: option.expire && new Date().getTime() + option.expire * 1000,
    mode: option.mode || 'local',
  };
  (option.mode === 'session' ? sessionStorage : localStorage).setItem(key, JSON.stringify(item));
};
