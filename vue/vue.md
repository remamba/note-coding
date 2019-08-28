---
记录一些vue重要的知识点
---



1. new Vue中的data可以是对象，但是组件中的data必须是函数.因为组件具有可复用性，当在项目中创建了多个组件实例的时候，如果采用对象的格式，会导致这些实例共用这个对象。为了保证组件的每个实例可以独立维护自己的数据，采用函数的方式提供独立作用域。
2. vue条件过滤和过滤器
3. vue事件修饰符：v-on事件修饰符，点开头的指令后缀，如v-on:click.stop阻止单击事件继续传播
4. vue样式绑定

- vue绑定内联样式，css属性名用驼峰式或者短横线分隔（kebab-case，需要用括号引起来）

  `<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px'}"></div>`

- style属性多重值（主要用于各种浏览器差异）：渲染数组中最后一个被浏览器支持的值

  `<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>`

5. vue条件渲染

   key属性、元素复用（加快渲染过程）

   > `v-if`和`v-show`的区别
   >
   > `v-show`的元素会始终被渲染并保留在DOM中，只是简单切换css属性display。但是`v-show`不支持`<template>`和`v-else`。`v-if`支持`<template>`，可以通过这`<template>`控制多个基本元素的展示。
   >
   > v-if具有更高的切换开销，适合运行时条件改变较少的情况；而v-show具有更高的初始化开销，适合更频繁的切换。

6. vue数据侦听（model-view响应）

- 数组更新监听：数组的变异方法（即改变了原数组）会触发view更新，包括栈操作（push、pop）、队列操作（shift、unshift）、splice、sort、reverse

  **无法侦听到的情形**：(1)使用索引直接设置数组项的值;   (2)修改数组长度

  **解决方法**：(1)Vue.set()    vm.$set   vm.arr.splice();   (2)vm.arr.splice(newLength)

- 对象更新监听：根级别（即data对象）不支持动态添加响应式属性，但是可以往其中的嵌套对象通过`Vue.set(object, propertyName, value)`添加响应式属性。

  ```javascript
  var vm = new Vue({
    data: {
      userProfile:{
        age: 12
      }
    }
  })
  
  vm.userImg. ///不支持
  Vue.set(data.userProfile, 'name', 'wx')
  ```

  