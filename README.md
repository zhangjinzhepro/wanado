# wanado
一个简单js库，目的是简化js数据操作


# 使用方法

### 使用npm安装
`npm install wanado`

### 引用
`import utils from 'wanado'`

# 索引

## 1.  类型判断

  [isString](#isstring)

  [isNumber](#isnumber)

  [isArray](#isarray)

  [isBoolean](#isboolean)

  [isFunction](#isfunction)

  [isObject](#isobject)

## 2. 一般字符串操作

  [时间格式化](#todate)

  [cookie设置](#setcookie)

  [cookie获取](#getcookie)

## 3. 一般对象操作

  [对象的深浅拷贝](#objectcopy)

  [对象的合并](#objectmerge)

## 4. 一般数组操作

  [数组去重](#simplify)

  [数组添加](#append)

  [数组删除](#remove)

  [数组排序（支持复杂对象排序）](#sort)

  [对象数组分组](#arraygrounp)

## 5. 正则验证

  [邮箱](#isemail)

  [手机号码](#isphone)

# 文档

> ### `isString`

判断是否为字符串类型

```js
utils.isString(value)
// value: any

utils.isString('123')
// true

utils.isString(123)
// false

utils.isString({ a: 1, b: 2 })
// false
```

> ### `isNumber`

判断是否为数字类型

```js
utils.isNumber(value)
// value: any

utils.isNumber(123)
// true

utils.isNumber('123')
// false

utils.isNumber({ a: 1, b: 2 })
// false
```

> ### `isArray`

判断是否为数组类型

```js
utils.isArray(value)
// value: any

utils.isArray([ 1, 2, 3 ])
// true

utils.isArray('123')
// false

utils.isArray({ a: 1, b: 2 })
// false
```

> ### `isBoolean`

判断是否为数组类型

```js
utils.isBoolean(value)
// value: any

utils.isBoolean(false)
// true

utils.isBoolean('123')
// false

utils.isBoolean({ a: 1, b: 2 })
// false
```

> ### `isFunction`

判断是否为函数类型

```js
utils.isFunction(value)
// value: any

utils.isFunction(function(){})
// true

utils.isFunction('123')
// false

utils.isFunction({ a: 1, b: 2 })
// false
```

> ### `isObject`

判断是否为对象类型

```js
utils.isObject(value)
// value: any

utils.isObject({ a: 1, b: 2 })
// true

utils.isObject(function(){})
// false

utils.isObject('123')
// false

```

> ### `setCookie`

设置cookie

```js
utils.setCookie(key, val, time)
// key: String
// val: any
// time: 保存时间（一小时为单位）

utils.setCookie('name','zhang')
// key: 'name' value: 'zhang'

utils.setCookie('data',{a:1,b:2},3)
// key: 'data' value: [{'a':1,'b':2}]
```

> ### `getCookie`

获取cookie

```js
utils.getCookie(key)
// key: String

utils.getCookie('name')
// 'zhang'

utils.getCookie('data')
// {a: 1, b: 2}
```

> ### `toDate`

时间格式化函数

```js
utils.toDate(date,format)
// date: Date 毫秒数 ||日期格式
// format: String 'YY-MM-DD hh:mm:ss'

utils.toDate('2018-3-3') // 默认格式化
// 2018/03/03

utils.toDate(1234567890, 'YY/MM/DD hh:mm:ss') //指定格式化（可自由组合）
// 1970/01/15 14:56:07
```

> ### `objectCopy`

数组或对象的拷贝

```js
utils.objectCopy(obj, params)
// obj: Array || Object
// params: 'deep' || 'shallow'

utils.objectCopy({a: 1, b: 2, c: 3}) // 浅拷贝
// {a: 1, b: 2, c: 3} 默认浅拷贝

utils.objectCopy({a: 1, b: 2, c: {a: function(){}}}, 'deep') //深拷贝
// {a: 1, b: 2, c: {a: function(){}}}
```

> ### `objectMerge`

合并对象并返回一个合并后的对象

```js
utils.objectMerge(obj, obj2...)
// obj: Object

var a = {a: 1, b: 2}
var b = {c: 2, d: 4}
var c = {e: 5, f: 6}

utils.objectMerge(a,b,c)
// {a: 1, b: 2, c: 2, d: 4, e: 5, f: 6}
```

> ### `sort`

数组排序（支持复杂对象排序）

```js
utils.sort(arr, type, key)
// arr: Array
// type: 'order' || 'invert'
// key: 当传入对象数组时，要指定一个key用来排序

var arr = [2, 1, 3]

utils.sort(arr, 'order')
// [1, 2, 3]

utils.sort(arr, 'invert')
// [3, 2, 1]

var arr = [
  {id:3,name:'zhang'},
  {id:1,name: 'wang'},
  {id:2,name:'li'}
]

utils.sort(arr, 'order', 'id')
// {id:1,name: 'wang'},{id:2,name:'li'},{id:3,name:'zhang'},

utils.sort(arr, 'invert', 'id')
//  {id:3,name:'zhang'}, {id:2,name:'li'}, {id:1,name: 'wang'},

```

> ### `simplify`

数组去重

```js
utils.simplify(arr)
// val: Array

utils.simplify([1,2,3,2,3,2,4,5,6])
// [1, 2, 3, 4, 5, 6]
```

> ### `append`

数组添加

```js
utils.append(val, i, data)
// val: Array
// i: index
// data: any

utils.append([1,2,3], 2, {a:1})
// [1, 2, {a:1}, 3]
```

> ### `remove`

数组删除

```js
utils.remove(val, start, count)
// val: Array
// start: index
// count: 数量any

utils.remove([1,2,3], 2, 1)
// [1, 2]
```

> ### `arrayGrounp`

根据传入的对象数组和key进行分组

```js
utils.arrayGrounp(arr, key)
// arr: Array
// key: String

var arr = [
  {id: 1, year: 2018},
  {id: 2, year: 2017},
  {id: 3, year: 2016},
  {id: 4, year: 2017},
  {id: 5, year: 2018},
  {id: 6, year: 2017}
]


utils.arrayGrounp(arr, 'year')
// {
//   "2016": [
//     {"id": 3, "year": 2016}
//   ],
//   "2017": [
//     {"id": 2, "year": 2017},
//     {"id": 4, "year": 2017},
//     {"id": 6, "year": 2017}
//   ],
//   "2018": [
//     {"id": 1, "year": 2018},
//     {"id": 5, "year": 2018}
//   ]
// }
```

> ### `isEmail`

表单验证邮箱

```js
utils.isEmail(val)
// val: String

utils.isEmail('123@qq.com')
// true

utils.isEmail('utilshang@utilshangan.cn')
// true
```

> ### `isPhone`

表单验证手机号

```js
utils.isPhone(val)
// val: String || Number

utils.isPhone('13233333333')
// true

utils.isPhone('18623456543')
// true
```
更多功能陆续添加中...
