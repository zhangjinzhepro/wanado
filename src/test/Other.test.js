import { isArray } from '../type/OtherMethods';

test('isArray', () => {
  expect(isArray('string')).toEqual(false);
});
