
import * as string from './type/StringMethods'
import * as number from './type/NumberMethods'
import * as object from './type/ObjectMethods'
import * as other from './type/OtherMethods'
import * as array from './type/ArrayMethods'

let $z = {...string,...number,...object,...other,...array}

export default $z
