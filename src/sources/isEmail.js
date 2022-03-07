export const isEmail = (val) => {
  const rule = /\w{1,}@\w{1,}\.[A-z]/;
  return rule.test(val);
};
