import * as number from './type/number';
import * as object from './type/object';
import * as storage from './type/storage';
import * as array from './type/array';
import * as check from './type/check';

const wanado = {
  ...check,
  ...storage,
  ...object,
  ...array,
  // ...number,
};

export default wanado;
