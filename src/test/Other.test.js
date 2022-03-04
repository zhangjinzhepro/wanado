import { isArray } from '../type/storage';

test('isArray', () => {
  expect(isArray('string')).toEqual(false);
});
