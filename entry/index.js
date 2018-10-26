import * as string from '../type/StringMethods'
import * as number from '../type/NumberMethods'
import * as object from '../type/ObjectMethods'
import * as other from '../type/OtherMethods'
import * as array from '../type/ArrayMethods'
let $z = {}

for (const key in string) {
  $z[key] = string[key];
}
for (const key in number) {
  $z[key] = number[key];
}
for (const key in object) {
  $z[key] = object[key];
}
for (const key in other) {
  $z[key] = other[key];
}
for (const key in array) {
  $z[key] = array[key];
}

export default $z
