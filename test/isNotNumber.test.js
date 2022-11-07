import { isNotNumber } from '../src/sources/isNotNumber';

test('反向检测number类型', () => {
  expect(isNotNumber({})).toBe(true);
  expect(isNotNumber('123')).toBe(true);
  expect(isNotNumber(123)).toBe(false);
});
