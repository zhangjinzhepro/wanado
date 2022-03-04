import { isObject } from './check';

// 添加cookie
export const setCookie = (params, options = {}) => {
  if (!isObject(params)) {
    throw Error('请传入一个对象');
  }
  Object.keys(params).forEach((n) => {
    let option = ';';
    Object.keys(options[n] || {}).forEach((m) => {
      option += `${m}=${options[n][m]};`;
    });
    document.cookie = `${n}=${JSON.stringify(params[n])}${option}`;
  });
};

// 获取cookie
export const getCookie = (key) => {
  const { cookie } = document;
  // const cookieObj = {};
  if (!key) {
    throw Error('参数错误');
  }
  if (cookie.includes(';')) {
    const cookieObj = cookie.split('; ').map((n) => n.split('=')).reduce((a, b) => ({
      ...a,
      [b[0]]: b[1],
    }), {});
    return cookieObj[key];
  }
  const cookieObj = cookie.map((n) => n.split('=')).reduce((a, b) => ({
    ...a,
    [b[0]]: b[1],
  }), {});
  return cookieObj[key];
};
