import { isFunction } from '../src/sources/isFunction';

test('检测function类型', () => {
  expect(isFunction({})).toBe(false);
  expect(isFunction(()=> {})).toBe(true);
});
