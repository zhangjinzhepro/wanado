import { isChinese } from '../src/sources/isChinese';

test('检测中文', () => {
  expect(isChinese(1)).toBe(false);
  expect(isChinese('1')).toBe(false);
  expect(isChinese('你好')).toBe(true);
});
