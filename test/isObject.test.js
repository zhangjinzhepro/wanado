import { isObject } from '../src/sources/isObject';

test('检测object类型', () => {
  expect(isObject({})).toBe(true);
  expect(isObject('123')).toBe(false);
  expect(isObject(123)).toBe(false);
  expect(isObject([123])).toBe(false);
  expect(isObject(null)).toBe(false);
});
