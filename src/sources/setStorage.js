import { checkType } from './checkType';

export const setStorage = ({ key, value, option = {} }) => {
  const item = {
    data: JSON.stringify(value),
    type: checkType(value),
    expire: option.expire && new Date().getTime() + option.expire * 1000,
    mode: option.mode || 'local',
  };
  (option.mode === 'session' ? sessionStorage : localStorage).setItem(key, JSON.stringify(item));
};
