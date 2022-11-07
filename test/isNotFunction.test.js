import { isNotFunction } from '../src/sources/isNotFunction';

test('反向检测function类型', () => {
  expect(isNotFunction({})).toBe(true);
  expect(isNotFunction(() => {})).toBe(false);
});
