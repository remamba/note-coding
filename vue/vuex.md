---
Vuex
---

# 核心

## module

单一状态树可能导致数据臃肿，因此vuex可以允许将store分割成模块。每个模块拥有自己的state、motation、action、getter。

## mutation

提交mutation是唯一更改store中状态的方法。

提交mutation的唯一接口是store.commit，参数可以是：

	- （对象形式）一个：包含type属性和其他任意属性（栽荷）的对象；
	- （栽荷形式）两个：第一个是type，第二个是payload（用payload对象的方式更易理解）。

提交mutation的位置：

- action里面
- vue组件里面

## action

> mutation和action的对比：
>
> mutation支持同步事务，不应该在 mutation中包含异步调用。如果调用了两个包含异步回调的mutation，并不知道哪个先回调，因此采用action提交mutation，支持异步操作。

action的入参是一个与store对象具有相同方法和属性的context对象，{ commit, state, getter}可以通过解构赋值的方式获取。分发action的唯一方式是store.dispatch，跟mutation类似也有对象形式和栽荷形式的