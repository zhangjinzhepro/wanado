import * as string from '../type/String'
import * as number from '../type/Number'

let $z = {}

for (const key in string) {
  $z[key] = string[key];
}
for (const key in number) {
  $z[key] = number[key];
}

export default $z
