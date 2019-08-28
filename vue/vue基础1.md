---

---

---

## basic

- 指令v-bind、v-if、v-for、v-on、v-model(实现表单输入和应用状态之间的双向绑定)

- 组件系统（组件树）

  - 组件：一个拥有预定义选项的一个vue实例。如果在vue应用外部定义组件，应该在使用组件之前声明

    ``````html
    <div id="app">
      <app-nav></app-nav>
      <app-view>
        <app-sidebar></app-sidebar>
        <app-content></app-content>
      </app-view>
    </div>
    ``````

  - vue组件和自定义元素的关系
    - 浏览器支持度不同
    - vue组件的扩展功能：跨组件数据流、自定义事件通信、构建工具集成

- vue应用

  - ·vue应用由一个通过new vue创建的跟vue实例和包含的组件树组成。如todo列表应用

- 数据响应

  - 创建vue实例时，将此时data中存在的属性添加到vue的响应式系统中，这些属性数据改变时引起视图重新渲染。

  - 阻止响应：Object.freeze

- vue属性和方法

  带有前缀\$, 如$data、\$el

  ``````
  app.$watch(某个数据属性, function(newValue, oldValue){
  	//这个回调在这个数据属性改变后调用
  })
  ``````

- 实例生命周期

  - 初始化过程：设置数据监听、编译模版、将实例挂载到DOM并在数据变化时更新DOM

  - 生命周期钩子（函数，this上下文只想调用它的vue实例）：created（创建后）、mouted、updated、destroyed.       $$不要使用箭头函数$$

    

## 模板语法

### 插值（数据绑定）

- 文本：Mustance{{ }}，v-once指令执行一次性插值
- html：v-html，不能用v-html来复合局部模板（vue不是基于字符串的模板引擎）。动态渲染html容易导致xss攻击
- 特性：v-bind，当绑定数据类型为boolean时，如果数据值为undefined、null或者false，特性不会被包含在元素中
- javascript表达式：不支持语句和控制流程

### 指令

- v-*（值大部分情况下为单个表达式）：指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。
- 参数：指令名称之后用冒号表示
  - v-bind：响应式地更新html特性（参数为html特性）
  - v-on：监听dom事件（参数为监听的事件名）
- 动态参数：v-bind:[js表达式]
- 修饰符：修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。

### 缩写

常见指令的缩写：

v-bind:href ——> :href

v-on:click ——> @click



## 计算属性和侦听器

对复杂js逻辑使用计算属性，例：

``````{
let vm = new Vue({
	el: "#app",
	data:{
	
	},
	computed: {
		//计算属性的getter
		calculProp: fucntion(){
			//对原始属性进行处理，返回计算后的值
			return XXX;
		}
	}
})
``````

### 计算属性缓存和方法的区别

前面的calculProp也可以通过方法调用的方式获取数据，但是区别在于计算属性基于响应式依赖进行缓存（只在相关响应式依赖发生改变时它们才会重新求值）。且如下的计算属性不会再更新：

``````javascript
computed: {
  now: function () {
    return Date.now()
  }
}
``````

### 计算属性和侦听属性

应用场景：有一些数据需要随着其他数据变动而变动。可使用watch，但是代码重复且是命令式的，而且需要存储更多数据。

计算属性的getter 和setter

``````javascript
let vm = new Vue({
  el: "#app",
  data: {
    firstName: "aaa",
    lastName: "bbb"
  },
  computed: {
    fullName: {
      get: function(){
        return this.firstName + this.lastName;
      },
      set: function(value){
        //根据传入的value对数据属性进行修改
      }
    }
  }
})

//在外部修改计算属性，数据属性同时响应
``````

### 侦听器

## 条件渲染

- v-if
- v-else可选，必须紧跟在v-if或者v-else-if后
- v-else-if（2.1.0)，必须紧跟在v-if或者v-else-if后

``````html
<h1 v-if="show">yes</h1>
<h1 v-else>no</h1>
``````

- 在template元素上使用v-if条件渲染**分组**



## 列表渲染



Vue-cli：（SPA)热重载、eslint检查、生产环境可用的构建版本。