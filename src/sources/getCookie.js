import { isUndefined } from './isUndefined';

/**
 * 获取cookie
 * @param key
 * @returns {*}
 */
export const getCookie = (key) => {
  const { cookie } = document;
  if (isUndefined(key)) {
    throw Error('参数错误');
  }
  const cookieObj = (cookie.includes(';') ? cookie.split('; ') : cookie).map((n) => n.split('=')).reduce((a, b) => ({
    ...a,
    [b[0]]: b[1],
  }), {});
  return cookieObj[key];
};
