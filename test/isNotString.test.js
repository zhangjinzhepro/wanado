import { isNotString } from '../src/sources/isNotString';

test('反向检测string类型', () => {
  expect(isNotString({})).toBe(true);
  expect(isNotString('123')).toBe(false);
  expect(isNotString(123)).toBe(true);
  expect(isNotString([123])).toBe(true);
});
