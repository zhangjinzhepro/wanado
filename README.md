# z-formatter
一个简单js库，目的是简化js数据操作


# 使用方法

### 使用npm安装
`npm install z-formatter`

### 引用
`import $z from 'z-formatter'`

# 文档

> ### `$toDate`

时间格式化函数

```js
$z.$toDate(date,format)
// date: Number 毫秒数 ||日期格式
// format: String 'YY/MM/DD hh:mm:ss' || 'YY/MM/DD'

$z.$toDate() //当前时间 
// 2018/10/25

$z.$toDate('2018/3/3') // 指定时间
// 2018/03/03

$z.$toDate(1234567890, 'YY/MM/DD hh:mm:ss') //指定时间格式化
// 1970/01/15 14:56:07
```

> ### `$isString`

判断是否为字符串类型

```js
$z.$isString(value)
// value: 任意类型

$z.$isString('123')
// true

$z.$isString(123)
// false

$z.$isString({ a: 1, b: 2 })
// false
```

> ### `$isNumber`

判断是否为数字类型

```js
$z.$isNumber(value)
// value: 任意类型

$z.$isNumber(123)
// true

$z.$isNumber('123')
// false

$z.$isNumber({ a: 1, b: 2 })
// false
```

> ### `$isArray`

判断是否为数组类型

```js
$z.$isArray(value)
// value: 任意类型

$z.$isArray([ 1, 2, 3 ])
// true

$z.$isArray('123')
// false

$z.$isArray({ a: 1, b: 2 })
// false
```

> ### `$isBoolean`

判断是否为数组类型

```js
$z.$isBoolean(value)
// value: 任意类型

$z.$isBoolean(false)
// true

$z.$isBoolean('123')
// false

$z.$isBoolean({ a: 1, b: 2 })
// false
```

> ### `$isFunction`

判断是否为函数类型

```js
$z.$isFunction(value)
// value: 任意类型

$z.$isFunction(function(){})
// true

$z.$isFunction('123')
// false

$z.$isFunction({ a: 1, b: 2 })
// false
```

> ### `$isObject`

判断是否为对象类型

```js
$z.$isObject(value)
// value: 任意类型

$z.$isObject({ a: 1, b: 2 })
// true

$z.$isObject(function(){})
// false

$z.$isObject('123')
// false

```

> ### `$objectCopy`

数组或对象的拷贝

```
$z.$objectCopy(obj, params)
// obj: Array || Object
// params: 'deep' || 'shallow' 

$z.$objectCopy({a:1,b:2,c:3}) // 浅拷贝
// {a:1,b:2,c:3} 默认浅拷贝

$z.$objectCopy({a:1,b:2,c:{a: function(){}}}, 'deep') //深拷贝
// {a:1,b:2,c:{a: function(){}}}
```
