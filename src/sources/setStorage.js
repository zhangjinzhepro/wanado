import { checkType } from './checkType';

export const setStorage = (key, value, options = {} ) => {
  const item = {
    data: JSON.stringify(value),
    type: checkType(value),
    expire: options.expire && new Date().getTime() + options.expire * 1000,
    mode: options.mode || 'local',
  };
  (options.mode === 'session' ? sessionStorage : localStorage).setItem(key, JSON.stringify(item));
};
