import { isEmptyObject } from '../src/sources/isEmptyObject';

test('检测空对象', () => {
  expect(isEmptyObject({ a: 1 })).toBe(false);
  expect(isEmptyObject({})).toBe(true);
});
