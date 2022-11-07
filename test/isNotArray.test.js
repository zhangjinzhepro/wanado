import { isNotArray } from '../src/sources/isNotArray';

test('反向检测数组类型', () => {
  expect(isNotArray(1)).toBe(true);
  expect(isNotArray('1')).toBe(true);
  expect(isNotArray({ a: 1 })).toBe(true);
  expect(isNotArray([])).toBe(false);
});
