import { isNotBoolean } from '../src/sources/isNotBoolean';

test('反向检测布尔类型', () => {
  expect(isNotBoolean(1)).toBe(true);
  expect(isNotBoolean('1')).toBe(true);
  expect(isNotBoolean({ a: 1 })).toBe(true);
  expect(isNotBoolean([])).toBe(true);
  expect(isNotBoolean(true)).toBe(false);
});
