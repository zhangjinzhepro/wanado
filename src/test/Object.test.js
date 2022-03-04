import {
  objectMerge,
  objectGrounp,
} from '../type/object';

test('objectMerge', () => {
  expect(objectMerge({
    a: 1,
    b: 2,
  }, {
    c: 3,
    d: 4,
  })).toEqual({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  });
});
