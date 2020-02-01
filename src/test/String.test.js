import {
  toDate,
  isPhone,
} from '../type/StringMethods';

test('toDate', () => {
  expect(toDate('2018-1-1', 'YY/MM/DD hh:mm:ss')).toEqual('2018/01/01 00:00:00');
});

test('isPhone', () => {
  expect(isPhone('13233333333')).toEqual(true);
  expect(isPhone('+8613233333333')).toEqual(true);
});
