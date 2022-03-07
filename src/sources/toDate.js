// eslint-disable-next-line default-param-last
export const toDate = (val, format) => {
  const date = new Date(val || new Date());
  const time = {
    yyyy: date.getFullYear(),
    M: date.getMonth() + 1,
    MM: `0${date.getMonth() + 1}`,
    D: date.getDate(),
    DD: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    h: date.getHours(),
    hh: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
    m: date.getMinutes(),
    mm: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
    s: date.getSeconds(),
    ss: date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
  };
  if (format) {
    return format.replace(/(y{0,4})(\W*)(M{0,2})(\W*)(D{0,2})(\W*)(h{0,2})(\W*)(m{0,2})(\W*)(s{0,2})/, (string, y, s1, M, s2, D, s3, h, s4, m, s5, s) => `${time[y] || ''}${s1}${time[M] || ''}${s2}${time[D] || ''}${s3}${time[h] || ''}${s4}${time[m] || ''}${s5}${time[s] || ''}`);
  }
  return `${time.yyyy}-${time.MM}-${time.DD} ${time.hh}:${time.mm}:${time.ss}`
};
