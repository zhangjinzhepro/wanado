import { isNotObject } from './isNotObject';
import { isObject } from './isObject';
import { isUndefined } from './isUndefined';

/**
 * 添加cookie
 * @param key
 * @param value
 * @param option
 * @returns {Error|*}
 */
// eslint-disable-next-line consistent-return
export const setCookie = ({ key, value, option = {} }) => {
  if (isUndefined(key)) {
    return Error('请传入key');
  }
  // 解析option
  let optionStr = '';
  Object.keys(option).forEach((n) => {
    optionStr += `${n}=${option[n]};`;
  });
  // eslint-disable-next-line no-undef
  document.cookie = `${key}=${JSON.stringify(value)};${optionStr}`;
};
