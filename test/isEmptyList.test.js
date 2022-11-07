import { isEmptyList } from '../src/sources/isEmptyList';

test('检测空列表', () => {
  expect(isEmptyList([123, 345])).toBe(false);
  expect(isEmptyList([])).toBe(true);
});
