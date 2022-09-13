import { isUndefined } from './isUndefined';
import { queryToObject } from './queryToObject';

/**
 * 获取cookie
 * @param key
 * @returns {*}
 */
export const getCookie = (key) => {
  if (isUndefined(key)) {
    throw Error('参数错误');
  }
  const cookieObj = queryToObject({ target: document.cookie, limit: ';' });
  return cookieObj[key];
};
