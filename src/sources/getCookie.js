import { queryToObject } from './queryToObject';

/**
 * 获取cookie
 * @param key
 * @returns {*}
 */
export const getCookie = (key) => {
  const cookieObj = queryToObject({ target: document.cookie, limit: ';' });
  return cookieObj[key];
};
