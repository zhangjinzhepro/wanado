import { isEmptyValue } from '../src/sources/isEmptyValue';

test('检测空值', () => {
  expect(isEmptyValue({})).toBe(true);
  expect(isEmptyValue([])).toBe(true);
  expect(isEmptyValue('')).toBe(true);
  expect(isEmptyValue(0)).toBe(false);
  expect(isEmptyValue(undefined)).toBe(true);
  expect(isEmptyValue(null)).toBe(true);
});
