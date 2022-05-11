# wanado
一个简单js库，目的是简化js数据操作


# 使用方法

### 使用npm安装
`npm install wanado`

### 引用
`import wanado from 'wanado'`

#### 按需加载,需安装`eslint-plugin-import`
`import { isString } from 'wanado/src/sources/isString'`

# 索引

#### 判断
- [checkType](#checktype)
- [isString](#isstring)  
- [isNumber](#isnumber)
- [isArray](#isarray)
- [isBoolean](#isboolean)
- [isFunction](#isfunction)
- [isObject](#isobject)
- [isEmptyObject](#isemptyobject)
- [isEmptyArray](#isemptyarray)
#### 工具函数
- [时间格式化](#todate)
- [cookie设置](#setcookie)
- [cookie获取](#getcookie)
- [storage设置](#setstorage)
- [storage获取](#getstorage)
- [千分位格式化](#tothousands)
- [对象的深浅拷贝](#objectcopy)
- [对象的合并](#objectmerge)
- [数组去重](#deduplicate)
- [数组添加](#arrayappend)
- [数组删除](#arrayremove)
- [数组排序（支持复杂对象排序）](#sort)
- [对象数组分组](#arraygrounp)
- [下载二进制文件](#downloadblob)
#### 正则
- [匹配邮箱](#isemail)
- [匹配手机号码](#isphonenum)
- [匹配汉字](#ischinese)

> ### `checkType`

判断类型

```js
// value: any
// return: 'String' || 'Number' || 'Boolean' || 'Array' || 'Objerct'......
wanado.checkType(value)
```

> ### `isString`

判断是否为字符串类型

```js
// value: any
// return: Boolean 
wanado.isString(value)
```

> ### `isNumber`

判断是否为数字类型

```js
// value: any
// return: Boolean 
wanado.isNumber(value)
```

> ### `isArray`

判断是否为数组类型

```js
// value: any
// return: Boolean 
wanado.isArray(value)
```

> ### `isBoolean`

判断是否为数组类型

```js
// value: any
// return: Boolean 
wanado.isBoolean(value)
```

> ### `isFunction`

判断是否为函数类型

```js
// value: any
// return: Boolean 
wanado.isFunction(value)
```

> ### `isObject`

判断是否为对象类型

```js
// value: any
// return: Boolean 
wanado.isObject(value)
```
> ### `isEmptyObject`

判断是否为空对象

```js
// value: any
// return: Boolean 
wanado.isEmptyObject(value)
```
> ### `isEmptyArray`

判断是否为空数组

```js
// value: any
// return: Boolean 
wanado.isEmptyArray(value)
```

> ### `setCookie`

设置cookie

```js
// params 数据源
// options 配置项
wanado.setCookie(params, options)

wanado.setCookie({ a: 1,b: 2 },{ a:{ 'max-age': 10000 },b:{'max-age': 40000}})
```

> ### `setStorage`

设置storage

```js
// key 属性
// vlaue 值
// options 配置项
// {
//   mode: 'local' || 'session' // 存储位置，默认local
//   expire: 100000 存储时间，单位秒
// }
wanado.setStorage(key, value, options)

wanado.setStorage('id',[1,2,3], {
  expire: 10000,
  mode: 'session'
})
```

> ### `getStorage`

获取storage

```js
// key 属性
wanado.setStorage(key)
```

> ### `getCookie`

获取cookie

```js
// key: String
wanado.getCookie(key)
```

> ### `toDate`

时间格式化函数

```js
// date: Date 毫秒数 || 日期格式 || 空（当前时间）
// format: 格式如下
// yyyy: 年
// M: 月（不补0）
// MM: 月（补0）
// D: 天（不补0）
// DD: 天（补0）
// h: 12小时制小时（不补0）
// hh: 12小时制小时（补0）
// H: 24小时制小时（不补0）
// HH: 24小时制小时（补0）
// m: 分钟（不补0）
// mm: 分钟（补0）
// s: 秒（不补0）
// ss: 秒（补0）
wanado.toDate(date,format)

wanado.toDate('2018-3-3') // 默认格式
// 2018-03-03 00:00:00

wanado.toDate(1234567890, 'YY//MM!!DD hh::mm""ss') //格式化可自由组合（包括连接符）
// 1970//01!!15 14::56""07
```
> ### `toThousands`

千分位格式化

```js
// target: Number || String
wanado.toThousands(target)

wanado.toThousands('123123123')
// 123,123,123

```

> ### `objectCopy`

数组或对象的拷贝

```js
// obj: Array || Object
// sources: 'deep' || 'shallow'
wanado.objectCopy(obj, type)
```

> ### `objectMerge`

合并对象并返回一个合并后的对象

```js
// obj: Object
wanado.objectMerge(obj, obj2, ...obj)
```

> ### `sort`

数组排序（支持复杂对象排序）

```js
// arr: Array
// type: 'order' || 'invert'
// key: 当传入对象数组时，要指定一个key用来排序
wanado.sort(arr, type, key)

var arr = [2, 1, 3]

wanado.sort(arr, 'order')
// [1, 2, 3]

wanado.sort(arr, 'invert')
// [3, 2, 1]

var arr = [
  {id:3,name:'zhang'},
  {id:1,name: 'wang'},
  {id:2,name:'li'}
]

wanado.sort(arr, 'order', 'id')
// {id:1,name: 'wang'},{id:2,name:'li'},{id:3,name:'zhang'},

wanado.sort(arr, 'invert', 'id')
//  {id:3,name:'zhang'}, {id:2,name:'li'}, {id:1,name: 'wang'},

```

> ### `deDuplicate`

数组去重

```js
// arr: Array
// key: 可选，用于对象数组指定key值
wanado.deDuplicate(arr, key)
```

> ### `arrayAppend`

数组添加

```js
// target: Array
// data: Any
// i: index 不传默认尾部添加
wanado.arrayAppend(target, data, i )
```

> ### `arrayRemove`

数组删除

```js
// target: Array
// start: Any
// count: Number 不传为复杂模式,传为简单模式
wanado.arrayRemove(target, start, count)

// 简单模式
wanado.arrayRemove([1,2,3], 0, 2)
wanado.arrayRemove([{a:1},{a:2},{a:3}], 1, 1)
// [3]
// [{a:1},{a:3}]

// 复杂模式
wanado.arrayRemove([{a:1},{a:2},{a:3}], {a:2})
wanado.arrayRemove([1,2,3], 1)
// [{a:1},{a:3}]
// [2,3]
```

> ### `arrayGrounp`

根据传入的对象数组和key进行分组

```js
// target: Array
// key: String
wanado.arrayGrounp(target, key)

var arr = [
  {id: 1, year: 2018},
  {id: 2, year: 2017},
  {id: 3, year: 2016},
  {id: 4, year: 2017},
  {id: 5, year: 2018},
  {id: 6, year: 2017}
]


wanado.arrayGrounp(arr, 'year')
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

> ### `downloadBlob`

下载二进制流文件

```js
// data: 源数据
// type: MIME类型
// fileName: 文件名
wanado.downloadBlob(data, {type, fileName})
```

> ### `isEmail`

表单验证邮箱

```js
// val: String
// return Boolean
wanado.isEmail(val)
```

> ### `isPhoneNum`

表单验证手机号

```js
// val: String || Number
// return Boolean
wanado.isPhoneNum(val)

```
> ### `isChinese`

表单验证汉字 

```js
// str: String
// return Boolean
wanado.isChinese(str)
```
