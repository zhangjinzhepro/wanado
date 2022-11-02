import { isEmptyObject } from '../src/sources/isEmptyObject';

test('adds 1 + 2 to equal 3', () => {
  expect(isEmptyObject({ a: 1 })).toBe(false);
});
