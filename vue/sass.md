---
Sass
在线编辑器：https://www.sassmeister.com/
---

1. sass基本语法

- 变量：以$开头，镶嵌进字符串使用#{$XX}
- 计算：可以使用表达式计算值
- 嵌套：选择器嵌套、选择器内属性嵌套、&引用父元素
- 注释：
  - 单行注释（//）：编译省略
  - 标准注释（/*    */）：保留到编译后的文件
  - 重要注释（/*！   */）：压缩模式编译后也会保留，普通标准注释不保留



2. sass代码重用

- 继承

  @extend

  ```scss
  $blue: #0000ff;
  
  .class1{
  	color: $blue;
  }
  
  .class2{
    @extend .class1;
    font-size: 10px;
  }
  ```

- Mixin

  类似于宏，可重用代码块，@mixin和@include，可传参

  ```scss
  @mixin left($value: 10px){
    float: left;
    margin-left: $value
  }
  
  div{
    @include left(20px);
  }
  ```

- 颜色函数

  内置颜色函数，可以生成系列颜色，如lighten、darken等

  ```scss
  　lighten(#cc3, 10%) // #d6d65c
  　darken(#cc3, 10%) // #a3a329
  　grayscale(#cc3) // #808080
  　complement(#cc3) // #33c
  ```

  

- 插入文件

  @import 插入外部文件，@import "path/demo.scss"

  > 继承和mixin都可以抽象出可充用的代码块，但是继承是对基本样式的抽象，样式是固定的；而mixin实际抽出了可重用的一套属性列表，但是属性值可以在引用时自定义。



3. scss高级功能

- 控制流程

  - 条件

    @if/@else

    ```scss
    p {
      @if(5 < 3){
        background: red;
      }
      @else{
        background: blue;
      }
    }
    ```

  - 循环

    @for：生成layout页面布局样式

    ```scss
    @for $i from 1 to 10{
      .border-#{$i} {
        border: #{$i}px solid red;
      }
    }
    ```

    @while

    ```scss
    $i: 6;
    
    @while $i > 0 {
      .border-#{$i} {
        border: #{$i}px solid red;
      }
      $i: $i - 2
    }
    ```

    @each(与for类似)

    ```scss
    @each $i in 1,2,3,4{
      .border-#{$i} {
        border: #{$i}px solid red;
      }
    }
    ```

- 自定义函数

  ```scss
  @function double($value){
    @return $value * 2;
  }
  
  p{
    width: double(2px);
  }
  ```

  