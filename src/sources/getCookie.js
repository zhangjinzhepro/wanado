/**
 * 获取cookie
 * @param key
 * @returns {*}
 */
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
