import { isNotNull } from '../src/sources/isNotNull';

test('反向检测null类型', () => {
  expect(isNotNull({})).toBe(true);
  expect(isNotNull(undefined)).toBe(true);
  expect(isNotNull(null)).toBe(false);
});
