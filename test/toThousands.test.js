import { toThousands } from '../src/sources/toThousands';

test('转千分位', () => {
  expect(toThousands(123456789)).toStrictEqual('123,456,789');
  expect(toThousands(123456789.123456)).toStrictEqual('123,456,789.123456');
});
