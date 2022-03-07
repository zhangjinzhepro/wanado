import { isObject } from './isObject';

/**
 * 添加cookie
 * @param params
 * @param options
 */
export const setCookie = (params, options = {}) => {
  if (!isObject(params)) {
    throw Error('请传入一个对象');
  }
  Object.keys(params).forEach((n) => {
    let option = ';';
    Object.keys(options[n] || {}).forEach((m) => {
      option += `${m}=${options[n][m]};`;
    });
    // eslint-disable-next-line no-undef
    document.cookie = `${n}=${JSON.stringify(params[n])}${option}`;
  });
};
