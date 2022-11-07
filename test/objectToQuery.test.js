import { objectToQuery } from '../src/sources/objectToQuery';

test('对象转query', () => {
  expect(objectToQuery({ a: 1, b: 2, c: 3 })).toStrictEqual('a=1&b=2&c=3');
  expect(objectToQuery({ a: 1, b: 2, c: 3 }, ':')).toStrictEqual('a=1:b=2:c=3');
});
