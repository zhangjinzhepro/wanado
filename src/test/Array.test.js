import {
  simplify,
  toArray
} from '../type/ArrayMethods'

import {
  objectMerge
} from '../type/ObjectMethods'

test('simplify', () => {
  expect(simplify([1, 1, 2, 3, 4, 4, 5, 3, 2, 3, 3, 2, 3])).toEqual([1, 2, 3, 4, 5]);
});


test('toArray', () => {
  expect(toArray([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});
