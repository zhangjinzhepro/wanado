export const toThousands = (target) => String(target).replace(/(\d)(?=(\d{3})+$)/g, ($1) => `${$1},`);
