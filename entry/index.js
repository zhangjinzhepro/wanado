import * as string from 'z-formatter/type/StringMethods'
import * as number from 'z-formatter/type/NumberMethods'
import * as object from 'z-formatter/type/ObjectMethods'
import * as other from '../type/OtherMethods'
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

export default $z
