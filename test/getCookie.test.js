import { getCookie } from '../src/sources/getCookie';

test('检查类型', () => {
  document.cookie = 'a=1;';
  expect(getCookie('a')).toBe('1');
});
