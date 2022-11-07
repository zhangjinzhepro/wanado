import { isUndefined } from '../src/sources/isUndefined';

test('检测undefined类型', () => {
  expect(isUndefined({})).toBe(false);
  expect(isUndefined('123')).toBe(false);
  expect(isUndefined(123)).toBe(false);
  expect(isUndefined([123])).toBe(false);
  expect(isUndefined(null)).toBe(false);
  expect(isUndefined(undefined)).toBe(true);
});
