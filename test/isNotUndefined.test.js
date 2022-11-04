import { isNotUndefined } from '../src/sources/isNotUndefined';

test('反向检测undefined类型', () => {
  expect(isNotUndefined({})).toBe(true);
  expect(isNotUndefined('123')).toBe(true);
  expect(isNotUndefined(123)).toBe(true);
  expect(isNotUndefined([123])).toBe(true);
  expect(isNotUndefined(undefined)).toBe(false);
});
