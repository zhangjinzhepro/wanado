import { isNotObject } from '../src/sources/isNotObject';

test('反向检测object类型', () => {
  expect(isNotObject({})).toBe(false);
  expect(isNotObject('123')).toBe(true);
  expect(isNotObject(123)).toBe(true);
  expect(isNotObject([123])).toBe(true);
});
