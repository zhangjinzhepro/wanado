// 日期格式化  --start
const toDate = (val = new Date(), format) => {
  const date = new Date(val);
  date.YY = date.getFullYear();
  date.MM = date.getMonth() + 1;
  date.DD = date.getDate();
  date.hh = date.getHours();
  date.mm = date.getMinutes();
  date.ss = date.getSeconds();
  if (date.MM < 10) {
    date.MM = `0${date.MM}`;
  }
  if (date.DD < 10) {
    date.DD = `0${date.DD}`;
  }
  if (date.hh < 10) {
    date.hh = `0${date.hh}`;
  }
  if (date.mm < 10) {
    date.mm = `0${date.mm}`;
  }
  if (date.ss < 10) {
    date.ss = `0${date.ss}`;
  }
  let result = '';
  if (!format) {
    return `${date.YY}-${date.MM}-${date.DD}`;
  }
  format.split(/:|\s|\//g).forEach((item) => {
    result = (result ? `${result}${(item === 'MM' || item === 'DD') ? '/' : ((item === 'hh')  ? ' ' : ':')}` : null) + date[item];
  });
  return result;
  // return new Error('参数错误');
};

// --end

// 一些表单验证规则
const isEmail = (val) => {
  const rule = /\w{1,}@\w{1,}\.[A-z]/;
  return rule.test(val);
};

const isPhone = (val) => {
  const rule = /1[\d]{10}/;
  return rule.test(val);
};
// --end

export {
  toDate,
  isEmail,
  isPhone,
};
