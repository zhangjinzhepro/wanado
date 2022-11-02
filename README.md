# wanado
一个简单js函数库，目的是简化js数据操作

# 使用方法

### 使用npm安装
`npm install wanado`

### 引用
`import wanado from 'wanado'`

#### 按需加载,需安装`eslint-plugin-import`
`import { isString } from 'wanado/src/sources/isString'`

# 索引

#### 数据判断
- [checkType](#checktype)
- [isString](#isstring)  
- [isNotString](#isnotstring)
- [isNumber](#isnumber)
- [isNotNumber](#isnotnumber)
- [isArray](#isarray)
- [isNotArray](#isnotarray)
- [isBoolean](#isboolean)
- [isNotBoolean](#isnotboolean)
- [isFunction](#isfunction)
- [isNotFunction](#isnotfunction)
- [isObject](#isobject)
- [isNotObject](#isnotobject)
- [isUndefined](#isundefined)
- [isNotObject](#isUndefined)
- [isObject](#isobject)
- [isNotObject](#isnotobject)
- [isEmptyObject](#isemptyobject)
- [isEmptyList](#isemptylist)
#### 工具函数
- [时间格式化](#todate)
- [cookie设置](#setcookie)
- [cookie获取](#getcookie)
- [storage设置](#setstorage)
- [storage获取](#getstorage)
- [千分位格式化](#tothousands)
- [对象的深浅拷贝](#objectcopy)
- [对象的合并](#objectmerge)
- [对象转query](#objecttoquery)
- [query转对象](#querytoobject)
- [数组去重](#listdeduplicate-)
- [数组插入](#listinsert-)
- [数组删除](#listremove-)
- [数组排序（支持复杂对象排序）](#sort)
- [对象数组分组](#arraygrounp)
- [伪数组转数组](#toarray)
- [下载二进制文件](#downloadblob)
#### 正则
- [匹配邮箱](#isemail)
- [匹配手机号码](#isphonenum)
- [匹配汉字](#ischinese)

# 文档

> ### `checkType`判断类型

```js
wanado.checkType(value)
```

> ### `isString`判断是否为字符串类型(正向)

```js
wanado.isString(value)
```

> ### `isNotString`判断是否为字符串类型（反向）

```js
wanado.isNotString(value)
```

> ### `isNumber`判断是否为数字类型(正向)

```js
wanado.isNumber(value)
```

> ### `isNotNumber`判断是否为数字类型(反向)

```js
wanado.isNotNumber(value)
```

> ### `isArray`判断是否为数组类型(正向)

```js
wanado.isArray(value)
```

> ### `isNotArray`判断是否为数组类型(反向)

```js
wanado.isNotArray(value)
```

> ### `isBoolean`判断是否为布尔类型(正向)

```js
wanado.isBoolean(value)
```

> ### `isNotBoolean`判断是否为布尔类型(反向)

```js
wanado.isNotBoolean(value)
```

> ### `isFunction`判断是否为函数类型(正向)

```js
wanado.isFunction(value)
```

> ### `isNotFunction`判断是否为函数类型(反向)

```js
wanado.isNotFunction(value)
```

> ### `isObject`判断是否为对象类型(正向)

```js
wanado.isObject(value)
```

> ### `isNotObject`判断是否为对象类型(反向)

```js
wanado.isNotObject(value)
```

> ### `isUndefined`判断是否为undefined(正向)

```js
wanado.isUndefined(value)
```

> ### `isNotUndefined`判断是否为undefined(反向)

```js
wanado.isNotUndefined(value)
```

> ### `isNull`判断是否为null(正向)

```js
wanado.isNull(value)
```

> ### `isNotNull`判断是否为bull(反向)

```js
wanado.isNotNull(value)
```

> ### `isEmptyObject`判断是否为空对象

```js
wanado.isEmptyObject(value)
```

> ### `isEmptyList`判断是否为空数组

```js
wanado.isEmptyList(value)
```

> ### `setCookie`设置cookie

```js
// key 属性
// vlaue 值
// option 配置项
wanado.setCookie({key, value, option})

wanado.setCookie({key: 'token', value: '1357924680', option: {'max-age': 40000}})
```

> ### `getCookie`

获取cookie

```js
// key: String
wanado.getCookie(key)
```

> ### `setStorage`

设置storage

```js
// key 属性
// vlaue 值
// option 配置项
// {
//   mode: 'local' || 'session' // 存储位置，默认local
//   expire: 100000 存储时间，单位秒
// }
wanado.setStorage({key, value, option})

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
wanado.toDate({target, format})

wanado.toDate({target: '2018-3-3'}) // 默认格式
// 2018-03-03 00:00:00

wanado.toDate({target: 1234567890, format: 'YY//MM!!DD hh::mm""ss'}) //格式化可自由组合（包括连接符）
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
// target: Array || Object
// type: 'deep' || 'shallow' 默认shallow
wanado.objectCopy({target, type})
```

> ### `objectMerge`

合并对象并返回一个合并后的对象

```js
// target: Array 对象数组
wanado.objectMerge({target})
```

> ### `objectToQuery`

对象转query

```js
// target: Object
// limit 链接字符 不传默认&
wanado.objectToQuery({target: {a: 1, b: 2}, limit: '@'})
// a=1@b=2
```


> ### `queryToObject`

query转对象

```js
// target: String
// limit 链接字符 不传默认&
wanado.queryToObject({target: 'a=1&b=2&c=3'})
// { a: "1", b: "2", c: "3" }
```

> ### `sort`

数组排序（支持复杂对象排序）

```js
// target: Array
// type: 'order' || 'invert'
// key: 当传入对象数组时，要指定一个key用来排序
wanado.sort({target, type, key})

var arr = [2, 1, 3]

wanado.sort({target: arr, type: 'order'})
// [1, 2, 3]

wanado.sort({target: arr, type: 'invert'})
// [3, 2, 1]

var arr = [
  {id:3,name:'zhang'},
  {id:1,name: 'wang'},
  {id:2,name:'li'}
]

wanado.sort({target:arr, type: 'order', key: 'id'})
// {id:1,name: 'wang'},{id:2,name:'li'},{id:3,name:'zhang'},

wanado.sort({target:arr, type: 'invert', key: 'id'})
//  {id:3,name:'zhang'}, {id:2,name:'li'}, {id:1,name: 'wang'},

```

> ### `listDeduplicate` 数组去重

```js
// 普通去重
wanado.listDeduplicate([1,2,3,3,4,5,6,6,7,7,8,8,8])
// [1,2,3,4,5,6,7,8]

// 对象数组去重（默认保留向前）
wanado.listDeduplicate([{a:1,b:2},{a:1,b:3},{a:2,b:2,c:3}], 'a')
// [{a:1,b:2},{a:2,b:2,c:3}]

// 对象数组去重（保留向后）
wanado.listDeduplicate([{a:1,b:2},{a:1,b:3},{a:2,b:2,c:3}], 'a', 'behind')
// [{a:1,b:3},{a:2,b:2,c:3}]
```

> ### `listInsert` 数组插入

```js
// 普通插入
wanado.listInsert([1, 2, 3], [4, 5])
// [1,2,3,4,5]

// 依据下标插入
wanado.listInsert([1, 2, 3], {a: 1}, 1)
// [1,{a: 1},2,3]

// 筛选对象插入（默认向后）
wanado.listInsert([{a: 1,b: 1},{a: 2,b: 2}], {a:3,b:3}, {a: 1})
// [{a:1,b:1},{a:3,b:3},{a:2,b:2}]

// 选择插入方向（向前）
wanado.listInsert([{a: 1,b: 1},{a: 2,b: 2}], {a:3,b:3}, {a: 2}, 'ahead')
// [{a:1,b:1},{a:3,b:3},{a:2,b:2}]
```

> ### `listRemove` 数组删除

```js
// 根据下标指定数量删除
wanado.listRemove([1,2,3,4], 0, 2)
// [3,4]

// 指定数据删除
wanado.listRemove([1,2,3,4], [2,4])
// [1,3]

// 根据属性指定删除
wanado.listRemove([{a: 1,b:2},{a:1,b:1,c:3}], {b:1,c:3})
// [{a: 1, b: 2}]
```

> ### `arrayGrounp`

根据传入的对象数组和key进行分组

```js
// target: Array
// key: String
wanado.arrayGrounp({target, key})

var arr = [
  {id: 1, year: 2018},
  {id: 2, year: 2017},
  {id: 3, year: 2016},
  {id: 4, year: 2017},
  {id: 5, year: 2018},
  {id: 6, year: 2017}
]


wanado.arrayGrounp({target: arr, key: 'year'})
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

> ### `toArray`

伪数组转数组

```js
// target
wanado.toArray(target)
```

> ### `downloadBlob`

下载二进制流文件

```js
// data: 源数据
// type: MIME类型
// fileName: 文件名
wanado.downloadBlob({data, type, fileName})
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
