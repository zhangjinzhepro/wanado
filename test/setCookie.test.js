import { isUndefined } from './isUndefined';
import { objectToQuery } from './objectToQuery';

/**
 * 添加cookie
 * @param key
 * @param value
 * @param option
 * @returns {Error|*}
 */
// eslint-disable-next-line consistent-return
export const setCookie = ({ key, value, options = {} }) => {
  if (isUndefined(key)) {
    return Error('请传入key');
  }
  // 解析option
  const optionStr = objectToQuery({ target: options, limit: ';' });
  document.cookie = `${key}=${encodeURIComponent(value)};${optionStr}`;
};
