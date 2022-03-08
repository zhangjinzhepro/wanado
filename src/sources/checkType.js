export const checkType = (params) => Object.prototype.toString.call(params).replace(/^\[(\w+)\s(\w+)\]$/, (str, $1, $2) => $2);
