# Javscript数组的常用方法有哪些？  
以下是一些常见的JavaScript数组方法：  
  
1. `push()`: 在数组末尾添加一个或多个元素，并返回新数组的长度。  
2. `pop()`: 移除并返回数组末尾的元素。  
3. `unshift()`: 在数组开头添加一个或多个元素，并返回新数组的长度。  
4. `shift()`: 移除并返回数组开头的元素。  
5. `concat()`: 合并两个或更多数组，并返回新的合并后的数组，不会修改原始数组。  
6. `slice()`: 从数组中提取指定位置的元素，返回一个新的数组，不会修改原始数组。  
7. `splice()`: 从指定位置删除或替换元素，可修改原始数组。  
8. `indexOf()`: 查找指定元素在数组中的索引，如果不存在则返回-1。  
9. `lastIndexOf()`: 从数组末尾开始查找指定元素在数组中的索引，如果不存在则返回-1。  
10. `includes()`: 检查数组是否包含指定元素，返回一个布尔值。  
11. `join()`: 将数组中的所有元素转为字符串，并使用指定的分隔符连接它们。  
12. `reverse()`: 颠倒数组中元素的顺序，会修改原始数组。  
13. `sort()`: 对数组中的元素进行排序，默认按照字母顺序排序，会修改原始数组。  
14. `filter()`: 创建一个新数组，其中包含符合条件的所有元素。  
15. `map()`: 创建一个新数组，其中包含对原始数组中的每个元素进行操作后的结果。  
16. `reduce()`: 将数组中的元素进行累积操作，返回一个单一的值。  
17. `forEach()`: 对数组中的每个元素执行提供的函数。  
  
```js  
const obj = {  
 fn1: () => console.log(this),  
 fn2: function() {console.log(this)}  
}  
  
obj.fn1();  
obj.fn2();  
  
const x = new obj.fn1();  
const y = new obj.fn2();  
```  
# 下面代码的输出是什么？  
在上面的代码中，obj 对象包含两个方法 fn1 和 fn2。fn1 使用箭头函数定义，而 fn2 使用普通函数定义。  
  
对于箭头函数，它没有自己的 this 值，也就是说它会捕获上下文中的 this 值，因此 fn1 中的 this 指向的是全局对象 window（或者 undefined，如果运行环境是严格模式）。因此，当我们调用 obj.fn1() 时，输出结果为 **window**（或 undefined）。  
  
对于普通函数，它的 this 值是在运行时动态绑定的。因此，当我们调用 obj.fn2() 时，输出结果为 **obj 对象本身**。  
  
接下来，代码中分别使用 new 运算符创建了 obj.fn1 和 obj.fn2 的实例 x 和 y。由于箭头函数没有自己的 this 值，所以尝试使用 new 运算符创建实例会导致 TypeError 错误。而对于普通函数，new 运算符可以正确地创建实例，并且 this 值指向新创建的实例对象。因此，x 是一个空的对象，y 是一个包含 fn2 方法的对象。  
  
```js  
console.log(typeof typeof typeof null);  
console.log(typeof console.log(1));  
```  
# 下面代码的输出是什么？  
第一行代码输出结果为 "string"。解释如下：  
  
1. typeof null 返回 "object"，因为在JavaScript中，null 被认为是一个空对象引用。  
2. typeof "object" 返回 "string"。  
3. typeof "string" 返回 "string"。  
  
因此，最终结果为 "string"。  
  
第二行代码先输出 1，然后输出结果为 "undefined"。解释如下：  
  
1. console.log(1) 输出 1。  
2. console.log 函数没有返回值，因此返回 undefined。  
3. typeof undefined 返回 "undefined"。  
  
因此，最终结果为：  
  
```  
string  
1  
undefined  
```  
# 前端的页面截图怎么实现？  
前端实现页面截图主要有以下几种方式：  
  
1. 使用浏览器自带的截图功能：在 Chrome 浏览器中，可以通过右键菜单或者快捷键 Ctrl + Shift + P 打开“命令菜单”，然后输入“截图”并选择相应选项即可。  
2. 使用第三方插件或工具：例如 Awesome Screenshot、Nimbus Screenshot 等浏览器插件，或者 html2canvas、dom-to-image 等 JavaScript 库。  
3. 使用 Canvas 绘制：通过 Canvas API 可以绘制出页面内容，并将其导出为图片格式。具体实现可以参考 Fabric.js、Puppeteer 等库。  
4. 使用服务器端渲染：对于需要生成动态内容或者需要进行复杂操作的页面，可以使用服务器端渲染技术（如 Node.js 或 PHP）来生成网页截图。  
  
以上这些方法各有优缺点。  
  
- 使用浏览器截图功能简单便捷，但是可能无法自定义截图范围和格式；  
- 使用第三方插件或工具需要安装额外的软件，而且可能存在安全风险；  
- 使用 Canvas 绘制需要掌握一定的 Canvas 编程知识，而且可能会影响性能；  
- 使用服务器端渲染则需要对服务器编程有一定的了解。  
# canvas 和 webgl 有什么区别？  
 Canvas和WebGL都是用于在Web浏览器中绘制图形和动画的技术，但它们在实现和功能上有一些区别：  
  
1. 渲染方式：  
   - Canvas：Canvas使用2D渲染上下文（2D context）来绘制图形和图像。它基于像素的绘图系统，通过JavaScript脚本控制渲染过程。  
   - WebGL：WebGL（Web Graphics Library）是基于OpenGL ES标准的JavaScript API，它可以利用GPU进行硬件加速的3D图形渲染。WebGL使用着色器（shaders）编程，允许更复杂和高性能的图形渲染。  
  
2. 功能和复杂性：  
   - Canvas：Canvas提供了简单的2D图形绘制功能，包括绘制基本形状、路径、文本和图像等。它适用于绘制简单的图形和动画。  
   - WebGL：WebGL提供了强大的3D图形渲染功能，包括高级的着色器编程、纹理映射、深度缓冲、光照效果等。它适用于创建复杂的3D图形、游戏和交互式可视化。  
  
3. 编程难度：  
   - Canvas：使用Canvas进行2D图形绘制相对简单，仅需基本的JavaScript知识和绘图API的了解即可开始绘制。  
   - WebGL：WebGL的编程相对复杂，需要了解着色器编程和3D图形渲染的概念。使用WebGL需要掌握OpenGL ES或类似的图形编程知识。  
  
选择Canvas还是WebGL取决于具体的需求。如果只需要简单的2D图形和动画，Canvas是一个不错的选择。但如果需要更高级的3D图形渲染和性能，或者开发复杂的游戏或可视化应用程序，那么WebGL可能更适合。  
# 导致 JavaScript 中 this 指向混乱的原因是什么?  
在 JavaScript 中，this 关键字的指向通常是动态的，而不是静态的。这意味着 this 可以根据上下文环境的变化而发生改变，导致它的指向变得混乱或难以预测。常见的导致 this 指向混乱的原因包括以下几个方面：  
  
1. 函数调用方式不同：当一个函数被调用时，它的 this 值取决于调用方式。如果使用普通函数调用方式（如 func()），则 this 会指向全局对象 window；如果使用方法调用方式（如 obj.func()），则 this 会指向调用该方法的对象。  
  
2. 箭头函数的使用：箭头函数不具有自己的 this 值，它会捕获上下文中的 this 值。因此，如果在箭头函数中访问 this，它将引用外层作用域中的 this 值。  
  
3. 使用 apply、call 和 bind 方法：apply、call 和 bind 方法可以改变函数执行时的 this 值。其中，apply 和 call 方法可以立即执行函数并传入参数，而 bind 方法可以返回一个新函数，该函数的 this 值被绑定到指定的对象上。  
  
4. DOM 事件处理程序的使用：在处理 DOM 事件时，浏览器会将事件处理程序内部的 this 指向触发事件的元素。但是，在使用 addEventListener 方法绑定事件处理程序时，this 会指向全局对象 window，而不是目标元素。  
  
5. 对象的嵌套和继承：当一个对象被嵌套在另一个对象中或者使用继承时，this 的指向可能会变得混乱。这是因为 this 的指向取决于函数被调用时的上下文环境，而不是对象本身。因此，在嵌套对象或继承类中使用 this 时，需要特别注意它的指向。  
  
> 面试题由“前端面试题宝典”（官网： https://fe.cool.cun ）整理维护，如果您在其他小程序中使用，请向小助手（微信号：interview-fe）反馈。  
# Vue常用的修饰符有哪些？分别有什么应用场景？  
## 一、修饰符是什么  
  
在程序世界里，修饰符是用于限定类型以及类型成员的声明的一种符号  
  
在`Vue`中，修饰符处理了许多`DOM`事件的细节，让我们不再需要花大量的时间去处理这些烦恼的事情，而能有更多的精力专注于程序的逻辑处理  
  
`vue`中修饰符分为以下五种：  
  
- 表单修饰符  
- 事件修饰符  
- 鼠标按键修饰符  
- 键值修饰符  
- v-bind修饰符  
  
## 二、修饰符的作用  
  
### 表单修饰符  
  
在我们填写表单的时候用得最多的是`input`标签，指令用得最多的是`v-model`  
  
关于表单的修饰符有如下：  
  
- lazy  
- trim  
- number  
  
#### lazy  
  
在我们填完信息，光标离开标签的时候，才会将值赋予给`value`，也就是在`change`事件之后再进行信息同步  
  
```js  
<input type="text" v-model.lazy="value">  
<p>{{value}}</p>  
```  
  
#### trim  
  
自动过滤用户输入的首空格字符，而中间的空格不会过滤  
  
```js  
<input type="text" v-model.trim="value">  
```  
  
#### number  
  
自动将用户的输入值转为数值类型，但如果这个值无法被`parseFloat`解析，则会返回原来的值  
  
```js  
<input v-model.number="age" type="number">  
```  
  
### 事件修饰符  
  
事件修饰符是对事件捕获以及目标进行了处理，有如下修饰符：  
  
- stop  
- prevent  
- self  
- once  
- capture  
- passive  
- native  
  
#### stop  
  
阻止了事件冒泡，相当于调用了`event.stopPropagation`方法  
  
```js  
<div @click="shout(2)">  
  <button @click.stop="shout(1)">ok</button>  
</div>  
//只输出1  
```  
  
#### prevent  
  
阻止了事件的默认行为，相当于调用了`event.preventDefault`方法  
  
```js  
<form v-on:submit.prevent="onSubmit"></form>  
```  
  
#### self  
  
只当在 `event.target` 是当前元素自身时触发处理函数  
  
```js  
<div v-on:click.self="doThat">...</div>  
```  
  
> 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止**所有的点击**，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击  
  
#### once  
  
绑定了事件以后只能触发一次，第二次就不会触发  
  
```js  
<button @click.once="shout(1)">ok</button>  
```  
  
#### capture  
  
使事件触发从包含这个元素的顶层开始往下触发  
  
```js  
<div @click.capture="shout(1)">  
    obj1  
<div @click.capture="shout(2)">  
    obj2  
<div @click="shout(3)">  
    obj3  
<div @click="shout(4)">  
    obj4  
</div>  
</div>  
</div>  
</div>  
// 输出结构: 1 2 4 3   
```  
  
#### passive  
  
在移动端，当我们在监听元素滚动事件的时候，会一直触发`onscroll`事件会让我们的网页变卡，因此我们使用这个修饰符的时候，相当于给`onscroll`事件整了一个`.lazy`修饰符  
  
```js  
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->  
<!-- 而不会等待 `onScroll` 完成  -->  
<!-- 这其中包含 `event.preventDefault()` 的情况 -->  
<div v-on:scroll.passive="onScroll">...</div>  
```  
  
> 不要把 `.passive` 和 `.prevent` 一起使用,因为 `.prevent` 将会被忽略，同时浏览器可能会向你展示一个警告。  
>  
> `passive` 会告诉浏览器你不想阻止事件的默认行为  
  
#### native  
  
让组件变成像`html`内置标签那样监听根元素的原生事件，否则组件上使用 `v-on` 只会监听自定义事件  
  
```js  
<my-component v-on:click.native="doSomething"></my-component>  
```  
  
> 使用.native修饰符来操作普通HTML标签是会令事件失效的  
  
### 鼠标按钮修饰符  
  
鼠标按钮修饰符针对的就是左键、右键、中键点击，有如下：  
  
- left 左键点击  
- right 右键点击  
- middle 中键点击  
  
```js  
<button @click.left="shout(1)">ok</button>  
<button @click.right="shout(1)">ok</button>  
<button @click.middle="shout(1)">ok</button>  
```  
  
### 键盘修饰符  
  
键盘修饰符是用来修饰键盘事件（`onkeyup`，`onkeydown`）的，有如下：  
  
`keyCode`存在很多，但`vue`为我们提供了别名，分为以下两种：  
  
- 普通键（enter、tab、delete、space、esc、up...）  
- 系统修饰键（ctrl、alt、meta、shift...）  
  
```js  
// 只有按键为keyCode的时候才触发  
<input type="text" @keyup.keyCode="shout()">  
```  
  
还可以通过以下方式自定义一些全局的键盘码别名  
  
```js  
Vue.config.keyCodes.f2 = 113  
```  
  
### v-bind修饰符  
  
  
  
v-bind修饰符主要是为属性进行操作，用来分别有如下：  
  
- sync  
- prop  
- camel  
  
#### sync  
  
能对`props`进行一个双向绑定  
  
```js  
//父组件  
<comp :myMessage.sync="bar"></comp>   
//子组件  
this.$emit('update:myMessage',params);  
```  
  
以上这种方法相当于以下的简写  
  
```js  
//父亲组件  
<comp :myMessage="bar" @update:myMessage="func"></comp>  
func(e){  
 this.bar = e;  
}  
//子组件js  
func2(){  
  this.$emit('update:myMessage',params);  
}  
```  
  
使用`sync`需要注意以下两点：  
  
- 使用`sync`的时候，子组件传递的事件名格式必须为`update:value`，其中`value`必须与子组件中`props`中声明的名称完全一致  
  
- 注意带有 `.sync` 修饰符的 `v-bind` 不能和表达式一起使用  
  
- 将 `v-bind.sync` 用在一个字面量的对象上，例如 `v-bind.sync=”{ title: doc.title }”`，是无法正常工作的  
  
#### props  
  
设置自定义标签属性，避免暴露数据，防止污染HTML结构  
  
```js  
<input id="uid" title="title1" value="1" :index.prop="index">  
```  
  
#### camel  
  
将命名变为驼峰命名法，如将` view-Box`属性名转换为 `viewBox`  
  
```js  
<svg :viewBox="viewBox"></svg>  
```  
  
## 三、应用场景  
  
根据每一个修饰符的功能，我们可以得到以下修饰符的应用场景：  
  
- .stop：阻止事件冒泡  
- .native：绑定原生事件  
- .once：事件只执行一次  
- .self ：将事件绑定在自身身上，相当于阻止事件冒泡  
- .prevent：阻止默认事件  
- .capture：用于事件捕获  
- .once：只触发一次  
- .keyCode：监听特定键盘按下  
- .right：右键  
  
  
  
# 如果要实现一个类似“谷歌图片”的系统，你会有哪些方面的考虑？  
  
  
可以从以下几个方面考虑：  
  
1. 设计界面和交互：首先需要设计一个美观、易用的用户界面，包括搜索框、图片展示区、分页、筛选器等。同时还需要设计一些交互细节，例如图片加载过程中的占位符、无结果时的提示信息、图片缩放和拖拽等。  
2. 数据获取和处理：接下来需要考虑如何获取和处理图片数据。可以使用爬虫技术从其他网站抓取图片，也可以通过图片 API 或者图库合作获得。在获取到图片之后，还需要对其进行处理，例如压缩、裁剪、优化等。  
3. 存储和管理图片：为了提高图片的访问速度和稳定性，需要将图片存储在 CDN 或者对象存储服务上，并建立相应的管理系统，包括上传、删除、修改、备份等功能。  
4. 图片搜索和智能推荐：为了提高搜索体验和用户满意度，可以开发一些算法和模型，对图片进行分类、标记和关联，从而实现更精确的搜索和智能推荐功能。  
5. 安全和隐私保护：在实现图片搜索和分享的同时，也需要注意安全和隐私保护。可以采用图像识别技术对涉黄、涉暴等不良内容进行过滤，防止违规图片的发布和传播。同时还需要保护用户隐私，避免非法获取和使用用户个人信息。  
  
# 前端路由 `a -> b -> c`这样前进，也可以返回 `c -> b -> a`，用什么数据结构来存比较高效  
在前端路由中，常用的存储方式是栈（Stack）数据结构。栈是一种线性数据结构，具有后进先出（LIFO）的特点，即最后入栈的元素最先弹出栈。  
  
当用户访问一个新页面时，可以将当前页面路由信息压入栈中。例如，在访问页面 a 时，可以将 a 的路由信息存储在栈顶。当用户访问 b 页面时，再将 b 的路由信息压入栈中，此时 a 的路由信息就被挤到了栈底。以此类推，当用户访问 c 页面时，c 的路由信息被压入栈顶，a 和 b 的路由信息都被挤到了栈底。  
  
如果用户想要返回上一个页面，可以从栈顶弹出最后一个路由信息，并显示对应的页面。例如，在 c 页面返回 b 页面时，可以从栈顶弹出 c 的路由信息，然后显示 b 页面。此时，a 和 b 的路由信息还保留在栈中。如果用户再次返回上一个页面，则从栈顶弹出 b 的路由信息，然后显示 a 页面。此时，只有 a 的路由信息剩余在栈中。  
  
使用栈数据结构来存储前端路由信息具有以下优点：  
  
- 简单直观：栈数据结构易于理解和实现，符合前端路由的基本需求。  
- 高效快速：在栈中压入和弹出元素都是 O(1) 的时间复杂度，不会对页面加载和响应产生太大的影响。  
- 可扩展性：栈数据结构可以很容易地扩展到支持浏览器的前进和后退按钮。  
  
在使用栈数据结构来存储前端路由信息时，还需要考虑如何处理浏览器刷新、从历史记录中跳转等特殊情况，并进行相应的错误处理。  
```js  
function Foo(){  
    Foo.a = function(){  
        console.log(1);  
    }  
    this.a = function(){  
        console.log(2)  
    }  
}  
  
Foo.prototype.a = function(){  
    console.log(3);  
}  
  
Foo.a = function(){  
    console.log(4);  
}  
  
Foo.a();  
let obj = new Foo();  
obj.a();  
Foo.a();  
```  
# 说说下面代码的输出是什么？  
运行以上代码，输出结果为：  
  
```  
4  
2  
1  
```  
  
解析如下：  
  
1. 首先，调用 Foo.a() 方法，输出 4。这是因为 Foo.a 是一个静态方法，直接在函数对象上定义的，所以可以通过函数名直接调用执行。  
  
2. 然后，创建一个 Foo 类型的实例 obj，调用 obj.a() 方法，输出 2。这是因为在构造函数 Foo 中，使用 this.a 定义了实例属性 a，会覆盖原型中的同名属性。  
  
3. 最后，再次调用 Foo.a() 方法，输出 1。虽然在上面已经定义了一个静态方法 Foo.a，但是在构造函数 Foo 中又重新定义了一个同名属性，导致静态方法被覆盖了，所以此时输出的是在构造函数中定义的方法。  
```js  
var a=3;  
 function c(){  
    alert(a);  
 }  
 (function(){  
  var a=4;  
  c();  
 })();  
```  
# 说说下面代码的执行过程  
这段代码的执行过程如下：  
  
1. 定义变量 a 并赋值为 3。  
2. 定义一个函数 c，该函数弹出一个对话框显示变量 a 的值。  
3. 定义一个立即执行函数，并在其中定义变量 a 并赋值为 4。  
4. 在立即执行函数中调用函数 c。  
5. 函数 c 弹出一个对话框显示变量 a 的值，此时输出结果为 3。  
  
原因是在立即执行函数中定义的变量 a 只在该函数作用域内有效，并没有改变全局作用域中的变量 a 的值，而函数 c 中使用的变量 a 是从全局作用域中查找的，因此输出的是全局作用域中的变量 a 的值。  
# 浏览器有哪几种缓存，各种缓存的优先级是什么样的？  
在浏览器中，有以下几种常见的缓存：  
  
1. 强制缓存：通过设置 Cache-Control 和 Expires 等响应头实现，可以让浏览器直接从本地缓存中读取资源而不发起请求。  
2. 协商缓存：通过设置 Last-Modified 和 ETag 等响应头实现，可以让浏览器发送条件请求，询问服务器是否有更新的资源。如果服务器返回 304 Not Modified 响应，则表示客户端本地缓存仍然有效，可直接使用缓存的资源。  
3. Service Worker 缓存：Service Worker 是一种特殊的 JS 脚本，可以拦截网络请求并返回缓存的响应，以实现离线访问和更快的加载速度等功能。  
4. Web Storage 缓存：包括 localStorage 和 sessionStorage。localStorage 用于存储用户在网站上的永久性数据，而 sessionStorage 则用于存储用户会话过程中的临时数据。  
  
这些缓存的优先级如下：  
  
1. Service Worker 缓存：由于其可以完全控制网络请求，因此具有最高的优先级，即使是强制缓存也可以被它所覆盖。  
2. 强制缓存：如果存在强制缓存，并且缓存没有过期，则直接使用缓存，不需要向服务器发送请求。  
3. 协商缓存：如果强制缓存未命中，但协商缓存可用，则会向服务器发送条件请求，询问资源是否更新。如果服务器返回 304 Not Modified 响应，则直接使用缓存。  
4. Web Storage 缓存：Web Storage 缓存的优先级最低，只有在网络不可用或者其他缓存都未命中时才会生效。  
# Promise 的 finally 怎么实现的？  
Promise.prototype.finally 方法是 ES2018 引入的一个方法，用于在 Promise 执行结束后无论成功与否都会执行的操作。在实际应用中，finally 方法通常用于释放资源、清理代码或更新 UI 界面等操作。  
  
以下是一个简单的实现方式：  
  
```js  
Promise.prototype.finally = function(callback) {  
  const P = this.constructor;  
  return this.then(  
    value => P.resolve(callback()).then(() => value),  
    reason => P.resolve(callback()).then(() => { throw reason })  
  );  
}  
```  
  
我们定义了一个名为 finally 的函数，它使用了 Promise 原型链的方式实现了 finally 方法。该函数接收一个回调函数作为参数，并返回一个新的 Promise 对象。如果原始 Promise 成功，则会先调用 callback 函数，然后将结果传递给下一个 Promise；如果失败，则会先调用 callback 函数，然后将错误信息抛出。  
  
可以看到，在实现中，我们首先通过 this.constructor 获取当前 Promise 实例的构造函数，然后分别处理 Promise 的 resolved 和 rejected 状态的情况。在 resolved 状态时，我们先调用 callback 函数，然后将结果传递给新创建的 Promise 对象；在 rejected 状态时，我们也是先调用 callback 函数，然后将错误信息抛出。  
  
这样，我们就完成了 Promise.prototype.finally 方法的实现。  
# Promise then 第二个参数和catch的区别是什么？  
Promise 的 then 方法和 catch 方法都是用于处理 Promise 的 rejected 状态的情况。它们的区别在于：  
  
1. then 方法的第二个参数  
  
如果 Promise 的状态变为 rejected，then 方法的第二个参数会被调用。该参数是一个函数，可以接收一个参数，即 Promise 返回的错误信息。  
  
例如：  
  
```js  
function asyncFunction() {  
  return new Promise((resolve, reject) => {  
    setTimeout(() => {  
      reject(new Error('Something went wrong'));  
    }, 1000);  
  });  
}  
  
asyncFunction()  
  .then(  
    result => console.log(result),   
    error => console.error(error)  
  );  
```  
  
在上述代码中，当 Promise 被 reject 时，then 方法的第二个参数会被调用，并打印出错误信息。  
  
2. catch 方法  
  
catch 方法相当于 then 方法的第二个参数，也是用于处理 Promise 的 rejected 状态的情况。不同之处在于，catch 方法可以链式调用，而不需要在每次调用 then 方法时都传递第二个参数。  
  
例如：  
  
```js  
function asyncFunction() {  
  return new Promise((resolve, reject) => {  
    setTimeout(() => {  
      reject(new Error('Something went wrong'));  
    }, 1000);  
  });  
}  
  
asyncFunction()  
  .then(result => console.log(result))  
  .catch(error => console.error(error));  
```  
  
在上述代码中，当 Promise 被 reject 时，catch 方法会被调用，并打印出错误信息。  
  
因此，then 方法的第二个参数和 catch 方法都是用于处理 Promise 的 rejected 状态的情况，但前者需要在每次调用 then 方法时都传递第二个参数，而后者则可以链式调用。  
```js  
var name = '123';  
  
var obj = {  
 name: '456',  
 print: function() {  
  function a() {  
    console.log(this.name);  
  }  
  a();  
 }  
}  
  
obj.print();  
```  
# 下面代码的输出是什么？  
上述代码输出结果为 "123"。解释如下：  
  
1. 在全局作用域中声明了变量 name，值为字符串 "123"。  
2. 声明一个对象 obj，包含属性 name 和方法 print，其中 name 属性的值为字符串 "456"，print 方法中定义了函数 a。  
3. 当执行 obj.print() 时，会调用 print 方法，并在其中定义了函数 a。  
4. 函数 a 中调用 console.log(this.name) 方法。由于此时 this 指向全局对象（即 window 对象），因此执行 this.name 等价于执行 window.name。  
5. 根据步骤1，window.name 的值为字符串 "123"，因此最终输出结果为 "123"。  
  
需要注意的是，在JavaScript中，this 的值取决于函数在何处被调用。如果该函数是作为对象的方法进行调用的，则 this 指向该对象；否则，this 指向全局对象。在本例中，虽然函数 a 被定义在 print 方法中，但是它并没有作为 obj 的方法进行调用，因此 this 指向全局对象。  
# generator 是怎么做到中断和恢复的？  
Generator 是一种特殊的函数类型，可以在函数执行过程中暂停和恢复执行。它通过使用 yield 表达式来实现中断和恢复执行的功能。  
  
当 Generator 函数被调用时，它并不会立即执行，而是返回一个迭代器对象。每次调用迭代器对象的 next() 方法时，Generator 函数会从上一次执行的位置继续执行，直到遇到下一个 yield 表达式或函数结束。此时，Generator 函数将返回一个包含当前值和执行状态的对象，其中 value 属性表示 yield 表达式的结果，done 属性表示是否执行完毕。  
  
例如，下面是一个简单的 Generator 函数示例：  
  
```  
function* myGenerator() {  
  console.log('Step 1');  
  yield;  
  console.log('Step 2');  
  yield;  
  console.log('Step 3');  
}  
  
const gen = myGenerator();  
gen.next(); // 输出 Step 1  
gen.next(); // 输出 Step 2  
gen.next(); // 输出 Step 3  
```  
  
在这个示例中，myGenerator() 函数包含三个 yield 表达式，每次调用迭代器对象的 next() 方法都会从上一次执行的位置继续执行，直到遇到下一个 yield 表达式或函数结束。  
  
当执行第一个 gen.next() 方法时，输出 Step 1，并暂停执行，将控制权交回给调用者。当再次调用 gen.next() 方法时，继续执行后面的代码，输出 Step 2，并再次暂停执行。最后，再次调用 gen.next() 方法时，完成函数的执行，输出 Step 3，并返回一个包含 value 和 done 属性的对象。  
  
通过使用 yield 表达式和迭代器对象，Generator 函数可以实现中断和恢复执行的功能，从而提供更灵活、更高效的 JavaScript 编程方式。  
# 为什么要区分宏任务和微任务？它们的执行优先级是什么？  
宏任务（macrotask）和微任务（microtask）的区分主要是为了解决 JavaScript 引擎中不同任务之间的执行优先级问题。  
  
宏任务通常包括以下几种：  
  
- setTimeout 和 setInterval 定时器  
- DOM 事件处理程序  
- AJAX 请求的回调函数  
- script 标签的加载和执行  
  
对于宏任务，JavaScript 引擎会将其添加到任务队列（task queue）中，在当前任务执行完毕后按顺序依次执行。  
  
而微任务通常包括以下几种：  
  
- Promise 的 then 方法和 catch 方法  
- async/await 中的 await 表达式  
- MutationObserver 监听器  
  
对于微任务，JavaScript 引擎也会将其添加到任务队列中，但是微任务的执行在当前宏任务执行结束后立即进行，也就是说微任务具有更高的执行优先级，可以优先于下一个宏任务执行。  
  
通过区分宏任务和微任务，我们可以更好地控制任务的执行顺序，提高应用程序的性能和响应速度。例如，在处理一些异步操作时，可以使用 Promise 来代替普通的回调函数，并通过 then 方法和 catch 方法来实现更灵活、更高效的任务处理方式。同时，在编写代码时需要注意，尽量避免在宏任务中进行耗时操作，以免影响其他任务的执行。  
  
总之，宏任务和微任务的区分是为了更好地协调任务的执行优先级，提高 JavaScript 的运行效率和代码的可读性。  
# 说说你对 webpack5 模块联邦的了解？  
Webpack 5 的模块联邦（`Module Federation`）是一种新的技术，可以实现多个独立 Webpack 构建之间的共享模块和代码。它通过让每个构建的应用程序能够使用其他应用程序中的模块来提高代码共享和复用的效率。  
  
Module Federation 基于 webpack 的远程容器特性。它允许将一个应用程序的某些模块打包为一个独立的、可远程加载的 bundle，并在运行时动态地加载这些模块。这样，在另一个应用程序中就可以通过远程容器加载这些模块，并直接使用它们。这种方式可以避免重复打包和加载相同的模块或库，提高了应用程序的性能和效率。  
  
Module Federation 的主要优势包括：  
  
1. 多个应用程序之间可以共享代码和模块，从而减少重复代码量。  
2. 应用程序可以更加灵活地划分为更小的子应用程序，从而降低应用程序的复杂度。  
3. 可以避免在应用程序之间传递大量数据，从而提高应用程序的性能和效率。  
4. 可以支持应用程序的动态加载和升级，从而实现更好的版本管理和迭代。  
  
总之，Webpack 5 的模块联邦是一项重要的技术创新，可以帮助开发者更好地共享和复用代码、降低应用程序的复杂度，并提高应用程序的性能和效率。  
# Web Worker 是什么？  
Web Worker 是 HTML5 标准中提供的一项技术，它可以让 JavaScript 脚本在后台线程运行，从而避免阻塞 UI 线程。Web Worker 可以创建一个独立的线程来执行脚本，从而使得主线程可以专注于用户交互和响应。  
  
Web Worker 的主要特点包括：  
  
1. 独立线程：Web Worker 可以在独立的线程中运行 JavaScript 代码，从而避免了在主线程中运行耗时任务的风险。  
2. 沙箱环境：Web Worker 运行的 JavaScript 代码在一个受限的沙箱环境中，不能访问与主线程共享的 DOM、全局变量等资源，从而保证了数据安全性和代码稳定性。  
3. 事件通信：Web Worker 可以通过事件来与主线程进行通信，从而实现线程间的数据传递和同步操作。  
  
使用 Web Worker 可以改善因大量 JS 计算导致的卡顿问题，增强页面的稳定性和用户体验。  
  
Web Worker 不仅可以在浏览器中运行，还可以在 Node.js 中运行，在实际应用和开发中都有广泛的应用。  
# 说说你对 ToPrimitive 的理解  
ToPrimitive 是一个抽象操作，用于将一个值转换为原始值（primitive value），即字符串、数字或布尔值。  
  
在 JavaScript 中，当需要将一个非原始值用作原始值时，会自动调用 `ToPrimitive` 操作。例如，在使用加法运算符时，如果其中一个操作数不是原始值，则会将其转换为原始值，这就是通过调用 `ToPrimitive` 来实现的。  
  
ToPrimitive 操作的实现方式如下：  
  
* 如果该值已经是原始类型，则直接返回该值。  
* 如果该值是对象，则按照以下步骤进行转换：  
	* 调用 valueOf() 方法并返回结果，如果结果是原始类型则直接返回该结果。  
	* 调用 toString() 方法并返回结果，如果结果是原始类型则直接返回该结果。  
* 如果都不是原始类型，则抛出 TypeError 异常。  
  
示例：  
  
```js  
let obj = {  
  [Symbol.toPrimitive](hint) {  
    switch (hint) {  
      case 'number':  
        return 123;  
      case 'string':  
        return 'str';  
      case 'default':  
        return 'default';  
      default:  
        throw new Error();  
     }  
   }  
};  
  
2 * obj // 246  
3 + obj // '3default'  
obj == 'default' // true  
String(obj) // 'str'  
```  
# 如果要设计一个转盘组件，你会考虑哪些方面？有哪些是需要和业务方确认的技术细节？另外，如何从前端的角度进行防刷？  
设计一个转盘组件需要考虑以下几个方面：  
  
1. 功能需求：明确组件的功能需求，例如抽奖逻辑、转盘样式和动画效果等。  
  
2. 技术选型：选择合适的技术实现该组件，例如 CSS3 动画或 Canvas 绘图等。  
  
3. 数据处理：处理与后端交互的数据流程和数据结构，例如抽奖机会计数、奖品种类和数量等。  
  
4. 用户体验：优化用户体验，例如加载速度、响应时间、错误提示和动画效果等。  
  
5. 安全性：确保组件的安全性，例如防止刷奖、重复领奖和作弊等。  
  
  
需要与业务方协调好的技术细节包括：  
  
1. 抽奖规则：确定抽奖规则和奖品设置，并与业务方协商奖品库存、中奖概率和兑换方式等。  
  
2. 后端接口：制定与后端交互的接口规范，包括请求参数、返回结果和接口安全验证等。  
  
3. 防刷策略：与业务方协商防刷策略，例如限制 IP 访问频率、验证码验证和前端 JS 加密等。  
  
4. 奖品发放：与业务方协商奖品发放方式和时机，例如邮寄地址、核验身份和奖品兑换码等。  
  
  
对于前端如何防刷，可以考虑以下几种方法：  
  
1. 限制抽奖次数：记录用户的抽奖次数，并且在达到限制条件时禁止继续抽奖。  
  
2. IP 地址验证：通过前端或后端对用户的 IP 地址进行验证，以确保每个 IP 地址只能抽奖一次。  
  
3. 验证码验证：使用验证码来防止机器人或恶意程序的攻击。  
  
4. 前端 JS 加密：使用前端 JS 对关键信息进行加密，防止信息被篡改或伪造。为了增强安全性，也可以使用 HTTPS 协议来保障数据传输的安全性。  
  
需要注意的是，以上方法并不能完全杜绝作弊行为，但可以大大降低作弊的可能性，从而提高组件的可靠性和安全性。  
```js  
var b = 10;  
(function b(){  
    b = 20;  
    console.log(b);  
})();  
```  
# 说说下面代码执行后的输出是什么？  
先看浏览器中的执行结果：  
  
![](https://static.ecool.fun/others/619e2a00-4b97-4c4b-b4be-e8c847cc5dcb.png)  
  
## 解析  
  
* 代码预解析时，会将var b进行变量提升，此时b没有被赋值(b=undefined) (这里有人会说这里明明有个函数表达式呀，为什么没有进入变量提升，因为IIFE自带有词法作用域(我们常理解得作用域))  
* 发现没有可以变量提升得时候将b赋值为10，此时会将b 赋值为10(b=10)  
* 碰到了立即执行函数，会执行其内边的函数 function b()  
* IIFE作用域中定义b = function b(){}  
* 碰到了b = 20，会顺着作用域链寻找是否存在b，发现IIFE作用域中存在b，将IIFE作用域中的b赋值为20(b=20)(因为函数表达式特性，标识符无法被修改，所以这里执行失败)  
* 执行console.log(b)，此时的b会找IIFE中的作用域看看是否存在b，发现其内边存在，将其返回  
  
# 怎么使用 Math.max、Math.min 获取数组中的最值？  
`Math.min()`和`Math.max()`用法比较类似：  
  
> console.log(Math.min(1, 5, 2, 7, 3)); // 输出：1  
  
但它们不接受数组作为参数。  
  
如果想使用数组作为参数，有以下两个方法：  
  
* apply  
  
```js  
const arr = [1, 5, 2, 7, 3];  
console.log(Math.min.apply(null, arr)); // 输出：1  
```  
  
* 扩展运算符  
  
```js  
const arr = [3, 5, 1, 6, 2, 8];  
  
const maxVal = Math.max(...arr); // 获取数组中的最大值  
```  
# 怎么实现虚拟列表？  
虚拟列表是一种优化长列表渲染性能的技术，它只渲染可见区域内的部分内容，从而大幅降低了页面渲染的复杂度。  
  
具体而言，实现虚拟列表需要以下步骤：  
  
*  计算可见区域：首先需要计算出当前可见区域内的列表项数量和位置。  
  
* 渲染可见区域：只渲染当前可见区域内的列表项，而不是整个列表。  
  
* 动态调整列表高度：由于只渲染了部分列表项，因此需要动态调整列表容器的高度，以确保滚动条可以正确地显示并且用户可以滚动整个列表。  
  
* 延迟加载非可见区域：当用户滚动列表时，需要根据当前滚动位置动态加载非可见区域的列表项，以便在用户滚动到该区域时能够及时显示。  
  
在实现虚拟列表的过程中，还可以使用一些技术来优化渲染性能，包括：  
  
* 虚拟 DOM：使用虚拟 DOM 技术可以减少每次重新渲染时需要操作真实 DOM 的次数，从而提高渲染性能。  
  
* 懒加载：懒加载可以延迟加载非可见区域的列表项，从而减少不必要的网络请求和资源占用。  
  
* 缓存：缓存可以在滚动时快速复用已经渲染的列表项，从而减少重新渲染的次数。  
  
* 预测算法：使用预测算法可以根据当前滚动位置和滚动速度来预测用户可能查看的区域，并提前加载该区域的列表项，以提高用户体验。  
  
总之，实现虚拟列表需要计算可见区域、渲染可见区域、动态调整列表高度和延迟加载非可见区域等步骤，并且需要使用一些技术来优化渲染性能。虚拟列表可以大幅提高长列表的渲染性能，并提高用户体验。  
# 说说对 requestIdleCallback 的理解  
`requestIdleCallback` 是一个浏览器 API，它允许我们在浏览器空闲时执行一些任务，以提高网页的性能和响应速度。  
  
通常情况下，JavaScript 代码会占用主线程，从而阻塞了其他的任务。当页面需要进行一些复杂计算、渲染大量的DOM元素等操作时，就会导致用户的交互体验变得缓慢和卡顿。  
  
`requestIdleCallback` 的作用就是将一些非关键性的任务从主线程中分离出来，等到浏览器闲置时再执行。这样就可以避免占用主线程，提高页面的响应速度和流畅度。  
  
使用 `requestIdleCallback` 需要传入一个回调函数，该函数会在浏览器空闲时被调用。回调函数的参数是一个 IdleDeadline 对象，它包含有关浏览器还剩余多少时间可供执行任务的信息。根据该对象的时间戳信息，开发人员可以自行决定是否继续执行任务或推迟执行。  
  
`requestIdleCallback` 可以帮助我们优化 Web 应用程序的性能和响应速度，减少资源的浪费。  
# 以下等式是成立的吗：1_000_000 === 1000000 ？  
`1_000_000 === 1000000` 的结果为 true  
  
`1_000_000` 中使用了 `_`，这是数字分隔符规范(Numeric Separators)，也就是允许在数字值中使用下划线来提高数值的可读性。  
  
如果我们尝试写十亿这样的值，可以通过用下划线分隔数字来提高可读性。  
  
```js  
let a = 1000000000000;   
let b = 1_000_000_000_000;   
console.log(a===b); // true  
```  
  
数字分隔符规范不仅支持整数，还支持各种数字格式：  
  
```js  
// Decimal   
let dec = 1_000_000.220_720;   
  
// Binary   
let bin = 0b1010_0001_1000_0101;   
  
// Octal   
let oct = 0o1234_5670;   
  
// Hexadecimal   
let hex = 0xA0_B0_C0;   
  
// BigInt   
let bint = 9_223_372_036_854_775_807n;  
```  
  
  
# 页面加载的过程中，JS 文件是不是一定会阻塞 DOM 和 CSSOM 的构建？  
  
  
答案：**不一定**  
  
JavaScript阻塞DOM和CSSOM的构建的情况主要集中在以下两个方面：  
  
* JavaScript文件被放置在head标签内部  
  
当JavaScript文件被放置在head标签内部时，浏览器会先加载JavaScript文件并执行它，然后才会继续解析HTML文档。因此，如果JavaScript文件过大或服务器响应时间过长，就会导致页面一直处于等待状态，进而影响DOM和CSSOM的构建。  
  
* JavaScript代码修改了DOM结构  
  
在JavaScript代码执行时，如果对DOM结构进行了修改，那么浏览器需要重新计算布局（reflow）和重绘（repaint），这个过程会较为耗时，并且会阻塞DOM和CSSOM的构建。  
  
除此之外，还有一些情况下JavaScript并不会阻塞DOM和CSSOM的构建：  
  
* 通过设置 script 标签的 async 、defer 属性避免阻塞DOM和CSSOM的构建  
	* **async**：异步加载JavaScript文件，脚本的下载和执行将与其他工作同时进行（例如从服务器请求其他资源、渲染页面等），而不必等到脚本下载完成才开始这些操作。因此，在使用 async 属性时，脚本的加载和执行是异步的，并且不保证脚本在页面中的顺序。  
	* **defer属性** ：属性也告诉浏览器立即下载脚本文件，但有一个重要的区别：当文档解析时，脚本不会执行，直到文档解析完成后才执行。这意味着脚本将按照它们在页面上出现的顺序执行，并且在执行之前，整个文档已经被解析完毕了。  
* Web Workers ：Web Workers 是一种运行在后台线程的JavaScript脚本，它不会阻塞DOM和CSSOM的构建，并且可以利用多核CPU提高JavaScript代码执行速度。  
  
## 总结  
  
在一定情况下，JavaScript的执行会阻塞DOM和CSSOM的构建。  
  
但是，在实际应用中，我们可以通过设置 script 标签的 async、defer 属性、使用Web Workers等方式来避免这个问题。  
# var、let、const之间有什么区别？  
## 一、var  
  
在ES5中，顶层对象的属性和全局变量是等价的，用`var`声明的变量既是全局变量，也是顶层变量  
  
注意：顶层对象，在浏览器环境指的是`window`对象，在 `Node` 指的是`global`对象  
  
```js  
var a = 10;  
console.log(window.a) // 10  
```  
  
使用`var`声明的变量存在变量提升的情况  
  
```js  
console.log(a) // undefined  
var a = 20  
```  
  
在编译阶段，编译器会将其变成以下执行  
  
```js  
var a  
console.log(a)  
a = 20  
```  
  
使用`var`，我们能够对一个变量进行多次声明，后面声明的变量会覆盖前面的变量声明  
  
```js  
var a = 20   
var a = 30  
console.log(a) // 30  
```  
  
在函数中使用使用`var`声明变量时候，该变量是局部的  
  
```js  
var a = 20  
function change(){  
    var a = 30  
}  
change()  
console.log(a) // 20   
```  
  
而如果在函数内不使用`var`，该变量是全局的  
  
```js  
var a = 20  
function change(){  
   a = 30  
}  
change()  
console.log(a) // 30   
```  
  
## 二、let  
  
`let`是`ES6`新增的命令，用来声明变量  
  
用法类似于`var`，但是所声明的变量，只在`let`命令所在的代码块内有效  
  
```js  
{  
    let a = 20  
}  
console.log(a) // ReferenceError: a is not defined.  
```  
  
不存在变量提升  
  
```js  
console.log(a) // 报错ReferenceError  
let a = 2  
```  
  
这表示在声明它之前，变量`a`是不存在的，这时如果用到它，就会抛出一个错误  
  
只要块级作用域内存在`let`命令，这个区域就不再受外部影响  
  
```js  
var a = 123  
if (true) {  
    a = 'abc' // ReferenceError  
    let a;  
}  
```  
  
使用`let`声明变量前，该变量都不可用，也就是大家常说的“暂时性死区”  
  
最后，`let`不允许在相同作用域中重复声明  
  
```js  
let a = 20  
let a = 30  
// Uncaught SyntaxError: Identifier 'a' has already been declared  
```  
  
注意的是相同作用域，下面这种情况是不会报错的  
  
```js  
let a = 20  
{  
    let a = 30  
}  
```  
  
因此，我们不能在函数内部重新声明参数  
  
```js  
function func(arg) {  
  let arg;  
}  
func()  
// Uncaught SyntaxError: Identifier 'arg' has already been declared  
```  
  
## 三、const  
  
`const`声明一个只读的常量，一旦声明，常量的值就不能改变  
  
```js  
const a = 1  
a = 3  
// TypeError: Assignment to constant variable.  
```  
  
这意味着，`const`一旦声明变量，就必须立即初始化，不能留到以后赋值  
  
```js  
const a;  
// SyntaxError: Missing initializer in const declaration  
```  
  
如果之前用`var`或`let`声明过变量，再用`const`声明同样会报错  
  
```js  
var a = 20  
let b = 20  
const a = 30  
const b = 30  
// 都会报错  
```  
  
`const`实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动  
  
对于简单类型的数据，值就保存在变量指向的那个内存地址，因此等同于常量  
  
对于复杂类型的数据，变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的，并不能确保改变量的结构不变  
  
```js  
const foo = {};  
  
// 为 foo 添加一个属性，可以成功  
foo.prop = 123;  
foo.prop // 123  
  
// 将 foo 指向另一个对象，就会报错  
foo = {}; // TypeError: "foo" is read-only  
```  
  
其它情况，`const`与`let`一致  
  
## 四、区别  
  
`var`、`let`、`const`三者区别可以围绕下面五点展开：  
  
- 变量提升  
- 暂时性死区  
- 块级作用域  
- 重复声明  
- 修改声明的变量  
- 使用  
  
  
  
### 变量提升  
  
`var `声明的变量存在变量提升，即变量可以在声明之前调用，值为`undefined`  
  
// 2023.4.25 更新  
  
~~`let`和`const`不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错~~  
  
let / const 不存在变量提升是不完全正确的，只能说由于暂时性死区的存在使得我们无法直观感受到变量提升的效果。  
  
let 和 const 定义的变量都会被提升，但是不会被初始化，不能被引用，不会像var定义的变量那样，初始值为undefined。  
  
当进入let变量的作用域时，会立即给它创建存储空间，但是不会对它进行初始化。  
  
变量的赋值可以分为三个阶段：  
  
* 创建变量，在内存中开辟空间  
* 初始化变量，将变量初始化为undefined  
* 真正赋值  
  
关于let、var和function：  
* let 的「创建」过程被提升了，但是初始化没有提升。  
* var 的「创建」和「初始化」都被提升了。  
* function 的「创建」「初始化」和「赋值」都被提升了。  
  
```js  
// var  
console.log(a)  // undefined  
var a = 10  
  
// let   
console.log(b)  // Cannot access 'b' before initialization  
let b = 10  
  
// const  
console.log(c)  // Cannot access 'c' before initialization  
const c = 10  
```  
  
### 暂时性死区  
  
`var`不存在暂时性死区  
  
`let`和`const`存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量  
  
```js  
// var  
console.log(a)  // undefined  
var a = 10  
  
// let  
console.log(b)  // Cannot access 'b' before initialization  
let b = 10  
  
// const  
console.log(c)  // Cannot access 'c' before initialization  
const c = 10  
```  
  
  
  
### 块级作用域  
  
`var`不存在块级作用域  
  
`let`和`const`存在块级作用域  
  
```js  
// var  
{  
    var a = 20  
}  
console.log(a)  // 20  
  
// let  
{  
    let b = 20  
}  
console.log(b)  // Uncaught ReferenceError: b is not defined  
  
// const  
{  
    const c = 20  
}  
console.log(c)  // Uncaught ReferenceError: c is not defined  
```  
  
  
  
### 重复声明  
  
`var`允许重复声明变量  
  
`let`和`const`在同一作用域不允许重复声明变量  
  
```js  
// var  
var a = 10  
var a = 20 // 20  
  
// let  
let b = 10  
let b = 20 // Identifier 'b' has already been declared  
  
// const  
const c = 10  
const c = 20 // Identifier 'c' has already been declared  
```  
  
  
  
### 修改声明的变量  
  
`var`和`let`可以  
  
`const`声明一个只读的常量。一旦声明，常量的值就不能改变  
  
```js  
// var  
var a = 10  
a = 20  
console.log(a)  // 20  
  
//let  
let b = 10  
b = 20  
console.log(b)  // 20  
  
// const  
const c = 10  
c = 20  
console.log(c) // Uncaught TypeError: Assignment to constant variable  
```  
  
  
  
### 使用  
能用`const`的情况尽量使用`const`，其他情况下大多数使用`let`，避免使用`var`  
  
# 说说你对轮询的理解  
## 什么是轮询？  
  
轮询是指在一定的时间间隔内，定时向服务器发送请求，获取最新数据的过程。轮询通常用于从服务器获取实时更新的数据。  
  
## 轮询和长轮询有什么区别？  
  
轮询是在固定的时间间隔内向服务器发送请求，即使服务器没有数据更新也会继续发送请求。而长轮询是先发送一个请求，服务器如果没有数据更新，则不会立即返回，而是将请求挂起，直到有数据更新时再返回结果。  
  
## 前端轮询的实现方式有哪些？  
  
前端轮询的实现方式有两种：基于定时器的轮询和基于递归的轮询。基于定时器的轮询使用 setInterval() 方法来定时发送请求，而基于递归的轮询则使用 setTimeout() 方法来控制下一次请求的时间。  
  
## 轮询有什么缺点？  
  
轮询会产生大量的无效请求，浪费带宽和服务器资源，并且对服务器的压力比较大。同时，在短时间内频繁地发送请求可能会被服务器视为恶意行为，导致 IP 被封禁等问题。  
  
## 如何避免轮询的缺点？  
  
为了避免轮询的缺点，可以使用 WebSocket、SSE（Server-Sent Events）等技术来实现实时数据更新。  
  
WebSocket 是一种双向通信协议，能够实现服务器与客户端之间的实时通信；而 SSE 则是一种基于 HTTP 的单向通信协议，可以实现服务器向客户端推送实时数据。  
  
这些技术都能够减少无效请求，提高数据传输效率，并且对服务器资源的消耗也比较小。  
# 什么是作用域链？  
## 一、作用域  
  
作用域，即变量（变量作用域又称上下文）和函数生效（能被访问）的区域或集合  
  
换句话说，作用域决定了代码区块中变量和其他资源的可见性  
  
举个例子  
  
```js  
function myFunction() {  
    let inVariable = "函数内部变量";  
}  
myFunction();//要先执行这个函数，否则根本不知道里面是啥  
console.log(inVariable); // Uncaught ReferenceError: inVariable is not defined  
```  
  
上述例子中，函数`myFunction`内部创建一个`inVariable`变量，当我们在全局访问这个变量的时候，系统会报错  
  
这就说明我们在全局是无法获取到（闭包除外）函数内部的变量  
  
  
  
我们一般将作用域分成：  
  
- 全局作用域  
- 函数作用域  
  
- 块级作用域  
  
  
  
### 全局作用域  
  
任何不在函数中或是大括号中声明的变量，都是在全局作用域下，全局作用域下声明的变量可以在程序的任意位置访问  
  
```js  
// 全局变量  
var greeting = 'Hello World!';  
function greet() {  
  console.log(greeting);  
}  
// 打印 'Hello World!'  
greet();  
```    
  
  
### 函数作用域  
  
函数作用域也叫局部作用域，如果一个变量是在函数内部声明的它就在一个函数作用域下面。这些变量只能在函数内部访问，不能在函数以外去访问  
  
```js  
function greet() {  
  var greeting = 'Hello World!';  
  console.log(greeting);  
}  
// 打印 'Hello World!'  
greet();  
// 报错： Uncaught ReferenceError: greeting is not defined  
console.log(greeting);  
```  
可见上述代码中在函数内部声明的变量或函数，在函数外部是无法访问的，这说明在函数内部定义的变量或者方法只是函数作用域  
  
  
  
### 块级作用域  
  
ES6引入了`let`和`const`关键字,和`var`关键字不同，在大括号中使用`let`和`const`声明的变量存在于块级作用域中。在大括号之外不能访问这些变量  
  
```js  
{  
  // 块级作用域中的变量  
  let greeting = 'Hello World!';  
  var lang = 'English';  
  console.log(greeting); // Prints 'Hello World!'  
}  
// 变量 'English'  
console.log(lang);  
// 报错：Uncaught ReferenceError: greeting is not defined  
console.log(greeting);  
```  
  
  
  
## 二、词法作用域  
  
词法作用域，又叫静态作用域，变量被创建时就确定好了，而非执行阶段确定的。也就是说我们写好代码时它的作用域就确定了，`JavaScript` 遵循的就是词法作用域  
  
```js  
var a = 2;  
function foo(){  
    console.log(a)  
}  
function bar(){  
    var a = 3;  
    foo();  
}  
bar()  
```  
  
上述代码改变成一张图  
  
 ![](https://static.vue-js.com/29fab3d0-718f-11eb-85f6-6fac77c0c9b3.png)  
  
由于`JavaScript`遵循词法作用域，相同层级的 `foo` 和 `bar` 就没有办法访问到彼此块作用域中的变量，所以输出2  
  
  
  
## 三、作用域链  
  
当在`Javascript`中使用一个变量的时候，首先`Javascript`引擎会尝试在当前作用域下去寻找该变量，如果没找到，再到它的上层作用域寻找，以此类推直到找到该变量或是已经到了全局作用域  
  
如果在全局作用域里仍然找不到该变量，它就会在全局范围内隐式声明该变量(非严格模式下)或是直接报错  
  
这里拿《你不知道的Javascript(上)》中的一张图解释：  
  
把作用域比喻成一个建筑，这份建筑代表程序中的嵌套作用域链，第一层代表当前的执行作用域，顶层代表全局作用域  
  
 ![](https://static.vue-js.com/33f9c100-718f-11eb-85f6-6fac77c0c9b3.png)  
  
变量的引用会顺着当前楼层进行查找，如果找不到，则会往上一层找，一旦到达顶层，查找的过程都会停止  
  
下面代码演示下：  
  
```js  
var sex = '男';  
function person() {  
    var name = '张三';  
    function student() {  
        var age = 18;  
        console.log(name); // 张三  
        console.log(sex); // 男   
    }  
    student();  
    console.log(age); // Uncaught ReferenceError: age is not defined  
}  
person();  
```  
  
上述代码主要主要做了以下工作：  
  
- `student`函数内部属于最内层作用域，找不到`name`，向上一层作用域`person`函数内部找，找到了输出“张三”  
- `student`内部输出 sex 时找不到，向上一层作用域`person`函数找，还找不到继续向上一层找，即全局作用域，找到了输出“男”  
- 在`person`函数内部输出`age`时找不到，向上一层作用域找，即全局作用域，还是找不到则报错  
# ES6有哪些新特性？  
 ### 关于ES6和JavaScript的关系  
  
##### 1、ES6是对于ES2015+的俗称，也可以说是通常叫法，那么，ES6是什么呢？  
  
ES 全称是ECMAScript，它是JavaScript基础构建的一种语言，JavaScript正是建立在ECMAScript语言的基础规范中建立使用的，那么，ECMAScript的使用，对于JavaScript至关重要！  
  
在我的理解中，ECMAScript是一种语言层面的东西，它只是定义了JavaScript以及在它基础之上建立的其他语言的语法规范，而JavaScript的语言，更关于一种平台性质在其中。  
  
JavaScript包括 ECMAScript、DOM、BOM三个组成部分，DOM和BOM是web API提供的接口或者是JavaScript和浏览器之间进行交互的部分，实质就是操纵文档元素，进行展示布局，而ECMAScript在JavaScript中其中语法的作用，它不会去跟文档有直接的关系，但是他的数据处理完成后会通过web API展示在文档中。  
  
### ES6新特性的分类  
  
新特性主要归为四大类：  
  
* 解决原有语法上的一些不足  
  
比如let 和 const 的块级作用域  
  
* 对原有语法进行增强  
  
比如解构、展开、参数默认值、模板字符串  
  
* 全新的对象、全新的方法、全新的功能  
  
比如promise、proxy、object的assign、is  
  
* 全新的数据类型和数据结构  
  
比如symbol、set、map  
  
下面具体进行介绍  
  
## 1. let、const 块级作用域以及和 var 的区别  
  
- let、const 声明的变量，在 for，if 语句中，会形成块级作用域，块级作用域内的变量，不能被作用域外部使用  
- let、const 声明变量不再会有声明提升，在变量声明之前使用运行时会报错  
  
```js  
//块级作用域一级块级作用域的使用  
if (true) {  
  const param = 'param in if block'  
  console.log(param) //param in if block  
}  
console.log(param) //块级作用域外访问内部定义的变量，ReferenceError: param is not defined  
```  
  
- 块级作用域声明变量，会出现“暂时性死区”，块级作用域声明变量前使用变量，将会报错  
  
```js  
// 暂时性死区  
const i = 100  
if (i) {  
  console.log(i) //ReferenceError: Cannot access 'i' before initialization  
  const i = 1000  
}  
```  
  
- const 声明的是一个常量，声明必须初始化  
  
```js  
  
    // const常量声明必须初始化  
    const i;  
    i = 10;  
    console.log(i) //SyntaxError: Missing initializer in const declaration  
  
```  
  
- 如果 const 声明的是基本类型常量，初始化之后不能修改；引用类型的常量，可以修改其成员变量；  
  
```js  
// 基本类型常量不能修改，引用类型常量能修改属性  
const str = 'str'  
str = 'str1' //TypeError: Assignment to constant variable.  
  
const arr = [1, 2, 3]  
arr[0] = 100  
console.log(arr[0]) //100  
```  
  
- 和 var 的区别  
  
| 声明方式 | 变量提升 | 作用域 | 初始值 | 重复定义 |  
| -------- | -------- | ------ | ------ | -------- |  
| var      | 是       | 函数级 | 不需要 | 允许     |  
| let      | 否       | 块级   | 不需要 | 不允许   |  
| const    | 否       | 块级   | 必需   | 不允许   |  
  
## 2.解构-快速提取数组/对象中的元素  
  
- **数组解构**  
  
- 单独解构-根据数组索引，将数组解构成单独的元素  
  
```js  
const arr = [1, 2, 3]  
  
const [a, b, c] = arr  
console.log(a, b, c) //1,2,3  
const [, , d] = arr  
console.log(d) //3  
```  
  
- 默认值，解构时可以给变量设置默认值，数组没有这个元素的话  
  
```js  
const arr = [1, 2, 3]  
  
const [, , , defaultVal = '4'] = arr  
console.log('设置默认值', defaultVal)  
```  
  
- 剩余解构-用 "...+变量名" 解构剩余参数到新数组，只能用一次  
  
```js  
const arr = [1, 2, 3]  
  
const [e, ...rest] = arr  
console.log(rest) //[2, 3]  
```  
  
- 实例应用  
  
```js  
// 拆分字符串  
const str = 'xiaobai/18/200'  
const strArr = str.split('/')  
const [, age] = strArr  
console.log(age) //18  
```  
  
- **对象解构**  
  
- 单个/多个解构-跟数组解构差不多  
  
```js  
const obj = { name: 'xiaohui', age: 18, height: undefined }  
const { name, age } = obj  
console.log(name, age) // 'xiaohui', 18  
```  
  
- 解构+重命名-给解构出来的变量重命名  
  
```js  
const obj = { name: 'xiaohui', age: 18, height: undefined }  
const { name: objName } = obj  
console.log(objName)  
```  
  
- 默认值-给解构变量设置默认值  
  
```js  
const obj = { name: 'xiaohui', age: 18, height: undefined }  
const { next = 'default' } = obj  
console.log(next)  
```  
  
## 3.模板字符串  
  
用法：使用``将字符串包裹起来  
  
功能：可以换行、插值、使用标签函数进行字符串操作  
  
示例：  
  
- 换行/插值  
  
```js  
//换行  
const str = `fdsjak  
    fdsa`  
console.log(str)  
  
// 插值  
const strs = `random: ${Math.random()}`  
console.log(strs)  
```  
  
- 标签函数-可以对模板字符串的字符串和插值进行处理和过滤等操作  
  
```js  
/**  
 * 字符串模板函数  
 * @param {array} strs 以插值为分隔符组成的字符串数组  
 * @param {string} name 插值的value，有多少个就会传入多少个  
 */  
const tagFunc = (strs, name, gender) => {  
  const [str1, str2, str3] = strs  
  const genderParsed = gender == '1' ? '男' : '女'  
  // 可以在此做过滤，字符串处理，多语言等操作  
  return str1 + name + str2 + str3 + genderParsed  
}  
  
// 带标签的模板字符串,  
const person = {  
  name: 'xiaohui',  
  gender: 1,  
}  
// 返回值为标签函数的返回值  
const result = tagFunc`my name is ${person.name}.gender is ${person.gender}`  
console.log(result) //my name is xiaohui.gender is 男  
```  
  
## 4. 字符串扩展方法  
  
- includes-是否包含  
- startsWith-是否以什么开始  
- endsWith-是否以什么结束  
  
```js  
const str = 'abcd'  
  
console.log(str.includes('e')) //false  
console.log(str.startsWith('a')) //true  
console.log(str.endsWith('a')) //false  
```  
  
## 5.参数默认值&剩余参数  
  
- 给函数形参设置默认值  
  
```js  
// 带默认参数的形参一般放在后面，减少传参导致的错误几率  
const defaultParams = function (name, age = 0) {  
  return [age, name]  
}  
console.log(defaultParams(1))  
```  
  
- 使用...rest 形式设置剩余形参，支持无限参数  
  
```js  
// 剩余参数，转化成数组  
const restParams = function (...args) {  
  console.log(args.toString()) //1, 2, 3, 4, 5  
}  
  
restParams(1, 2, 3, 4, 5)  
```  
  
## 6.展开数组  
  
使用...将数组展开  
  
```js  
const arr = [1, 2, 3]  
  
console.log(...arr)  
// 等价于es5中以下写法  
console.log.apply(console, arr)  
```  
  
## 7.箭头函数  
  
**特性&优势：**  
  
- 1、简化了函数的写法  
- 2、没有 this 机制，this 继承自上一个函数的上下文，如果上一层没有函数，则指向 window  
- 3、作为异步回调函数时，可解决 this 指向问题  
  
```js  
const inc = (n) => n + 1  
console.log(inc(100))  
  
const obj = {  
  name: 'aa',  
  func() {  
    setTimeout(() => {  
      console.log(this.name) //aa  
    }, 0)  
    setTimeout(function () {  
      console.log(this.name) //undefined  
    }, 0)  
  },  
}  
obj.func()  
```  
  
## 8.对象字面量增强  
  
- 同名属性可以省略 key:value 形式，直接 key，  
- 函数可以省略 key：value 形式  
- 可以直接 func(),  
- 可以使用计算属性，比如：{[Math.random()]: value}  
  
```js  
/**  
 * 1、增强了对象字面量：  
 * 1，同名属性可以省略key:value形式，直接key，  
 * 2，函数可以省略key：value形式  
 * 3，可以直接func(),  
 * 4，可以使用计算属性，比如：{[Math.random()]: value}  
 */  
const arr = [1, 2, 3]  
const obj = {  
  arr,  
  func() {  
    console.log(this.arr)  
  },  
  [Math.random()]: arr,  
}  
  
console.log(obj)  
```  
  
## 9.Object.assign(target1, target2, targetN)-复制/合并对象  
  
```js  
/**  
 * Object.assign(target1, target2, ...targetn)  
 * 后面的属性向前面的属性合并  
 * 如果target1是空对象，可以创建一个全新对象，而不是对象引用  
 */  
const obj1 = {  
  a: 1,  
  b: 2,  
}  
const obj2 = {  
  a: 1,  
  b: 2,  
}  
  
const obj3 = Object.assign({}, obj1)  
obj3.a = 5  
console.log(obj3, obj2, obj1)  
```  
  
## 10.Object.is(value1, value2)  
  
作用：比较两个值是否相等  
  
特性：  
  
- 没有隐式转换  
- 可以比较+0,-0、NaN  
  
```js  
console.log(NaN === NaN) //false  
console.log(Object.is(NaN, NaN)) //true  
console.log(0 === -0) // true  
console.log(Object.is(0, -0)) //false  
console.log(Object.is(1, 1)) //true  
```  
  
## 11.Proxy(object, handler)  
  
**作用：**  
  
- 代理一个对象的所有，包括读写操作和各种操作的监听  
  
**用法：**  
  
```js  
const P = {  
  n: 'p',  
  a: 19,  
}  
  
const proxy = new Proxy(P, {  
  get(target, property) {  
    console.log(target, property)  
    return property in target ? target[property] : null  
  },  
  defineProperty(target, property, attrs) {  
    console.log(target, property, attrs)  
    //   throw new Error('不允许修改')  
  },  
  deleteProperty(target, property) {  
    console.log(target, property)  
    delete target[property]  
  },  
  set(target, property, value) {  
    target[property] = value  
  },  
})  
  
proxy.c = 100  
console.log('pp', P)  
```  
  
与 Object.definePropert 对比  
  
优势：  
  
- **拥有很多 defineProperty 没有的属性方法，比如：**  
  - handler.getPrototypeOf() ---Object.getPrototypeOf 方法的监听器  
  - handler.setPrototypeOf() ---Object.setPrototypeOf 方法的监听器。  
  - handler.isExtensible() ---Object.isExtensible 方法的监听器。  
  - handler.preventExtensions() ---Object.preventExtensions 方法的监听器。  
  - handler.getOwnPropertyDescriptor() ---Object.getOwnPropertyDescriptor 方法的监听器。  
  - handler.defineProperty() ---Object.defineProperty 方法的监听器。  
  - handler.has() ---in 操作符的监听器。  
  - handler.get() ---属性读取操作的监听器。  
  - handler.set() ---属性设置操作的监听器。  
  - handler.deleteProperty() ---delete 操作符的监听器  
  - handler.ownKeys() ---Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的监听器。  
  - handler.apply() ---函数调用操作的监听器。  
  - handler.construct() ---new 操作符的监听器。  
- **对数组的监视更方便**  
- **以非侵入的访视监管对象的读写**  
  
## 12.Reflect  
  
作用：  
  
集成 Object 操作的所有方法，统一、方便，具体方法如下：  
  
用于对对象的统一操作，集成 Object 相关的所有方法  
  
1、apply：类似 Function.prototype.apply  
  
2、Reflect.construct()  
  
对构造函数进行 new 操作，相当于执行 new target(...args)。  
  
3、Reflect.defineProperty()  
  
和 Object.defineProperty() 类似。  
  
4、Reflect.deleteProperty()  
  
作为函数的 delete 操作符，相当于执行 delete target[name]。  
  
5、Reflect.get()  
  
获取对象身上某个属性的值，类似于 target[name]。  
  
6、Reflect.getOwnPropertyDescriptor()  
  
类似于 Object.getOwnPropertyDescriptor()。  
  
7、Reflect.getPrototypeOf()  
  
类似于 Object.getPrototypeOf(), 获取目标对象的原型。  
  
8、Reflect.has()  
  
判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。  
  
9、Reflect.isExtensible()  
  
类似于 Object.isExtensible().判断对象是否可扩展，可以添加额外属性  
  
Object.seal(封闭对象)， Object.freeze（冻结对象）是不可扩展的  
  
10、Reflect.ownKeys()  
  
返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 Object.keys(), 但不会受 enumerable 影响).  
  
11、Reflect.preventExtensions()  
  
类似于 Object.preventExtensions()。返回一个 Boolean。  
  
12、Reflect.set()  
  
将值分配给属性的函数。返回一个 Boolean，如果更新成功，则返回 true, 反之返回 false。  
  
13、Reflect.setPrototypeOf()  
  
类似于 Object.setPrototypeOf()。  
  
示例：  
  
```js  
const obj = {  
  name: 'reflect',  
}  
Reflect.preventExtensions(obj) //禁止扩展  
console.log(Reflect.set(obj, 'age', 'xiaobai')) //false  
console.log(obj) //{ name: 'reflect' }  
console.log(Reflect.isExtensible(obj, 'name')) //false  
console.log(Reflect.ownKeys(obj)) //[ 'name' ]  
```  
  
## 13.Promise  
  
作用：解决异步编程中回调嵌套过深问题  
  
## 14.class&静态方法&继承  
  
**定义**  
  
- 使用 class 关键字定义类  
  
```js  
class Person {  
  constructor(props) {  
    this.props = props  
  }  
}  
```  
  
**方法**  
  
- 实例方法，需要实例化之后才能调用，this 指向实例  
- 静态方法，用 static 修饰符修饰，可以直接通过类名调用，不需要实例化，this 不指向实例，而是指向当前类  
  
```js  
class Person {  
  constructor(props) {  
    this.props = props  
  }  
  // 实例方法  
  eat() {}  
  // 静态方法  
  static run() {}  
}  
// 调用静态方法  
Person.run()  
const person = new Person('props')  
// 调用实例方法  
person.eat()  
```  
  
**继承：子类使用 extends 关键字实现继承，可以继承父类所有属性**  
  
```js  
class Student extends Person {  
  constructor(props) {  
    super(props)  
  }  
  printProps() {  
    console.log(this.props)  
  }  
}  
  
const student = new Student('student')  
student.printProps()  
```  
  
## 15.Set  
  
说明：  
  
Set 是一种类似于数组的数据结构  
  
特性：  
  
- 元素唯一性，不允许重复元素  
- 使用 add 增加重复元素，将会被忽略  
  
用途：  
  
- 数组去重  
- 数据存储  
  
```js  
const arr = [1, 3, 1, 1, 1]  
const set = new Set(arr)  
set.add(1).add(1)  
console.log(set.size) //2  
const newArr = Array.from(set)  
console.log(newArr) //[ 1, 3 ]  
```  
  
## 16.Map  
  
说明：  
  
类似 Object，以 key、value 形式存储数据  
  
区别：  
  
Map 键不会隐式转换成字符串，而是保持原有类型  
  
实例：  
  
```js  
const map = new Map()  
map.set(1, 1)  
map.set('name', 'map')  
map.set(obj, obj)  
console.log(map.get(1)) //1  
/**  
        1 1  
        name map  
        { '1': 1, true: true, a: 'a' } { '1': 1, true: true, a: 'a' }  
     */  
map.forEach((val, key) => {  
  console.log(key, val)  
})  
```  
  
## 17.Symbol  
  
说明：  
  
JavaScript 第六种原始数据类型，用来定义一个唯一的变量  
  
作用：  
  
- 创建唯一的变量，解决对象键名重复问题  
- 为对象、类、函数等创建私有属性  
  
- 修改对象的 toString 标签  
- 为对象添加迭代器属性  
  
如何获取对象的 symbol 属性？  
  
- Object.getOwnPropertySymbols(object)  
  
实例  
  
```js  
// 对象属性重名问题；  
const objSymbol = {  
  [Symbol()]: 1,  
  [Symbol()]: 2,  
}  
console.log(objSymbol)  
  
// 2、为对象、类、函数等创建私有属性  
const name = Symbol()  
const obj2 = {  
  [name]: 'symbol',  
  testPrivate() {  
    console.log(this[name])  
  },  
}  
  
obj2.testPrivate()  
// 定义toString标签；  
console.log(obj2.toString())  
obj2[Symbol.toStringTag] = 'xx'  
console.log(obj2.toString()) //[object xx]  
```  
  
## 18.for...of...  
  
用途：  
  
已统一的方式，遍历所有引用数据类型  
  
特性：  
  
可以随时使用 break 终止遍历，而 forEach 不行  
  
实例：  
  
```js  
// 基本用法  
// 遍历数组  
const arr = [1, 2, 3, 4]  
for (const item of arr) {  
  if (item > 3) {  
    break  
  }  
  if (item > 2) {  
    console.log(item)  
  }  
}  
  
// 遍历set  
const set = new Set()  
set.add('foo').add('bar')  
for (const item of set) {  
  console.log('set for of', item)  
}  
// 遍历map  
const map = new Map()  
map.set('foo', 'one').set('bar', 'two')  
for (const [key, val] of map) {  
  console.log('for of map', key, val)  
}  
//迭代对象  
const obj = {  
  name: 'xiaohui',  
  age: '10',  
  store: [1, 2, 3],  
  // 实现可迭代的接口  
  [Symbol.iterator]: function () {  
    const params = [this.name, this.age, this.store]  
    let index = 0  
    return {  
      next() {  
        const ret = {  
          value: params[index],  
          done: index >= params.length,  
        }  
        index++  
        return ret  
      },  
    }  
  },  
}  
  
for (const item of obj) {  
  console.log('obj for of', item)  
}  
```  
  
## 19. 迭代器模式  
  
作用：通过 Symbol.interator 对外提供统一的接口，获取内部的数据  
  
外部可以通过 for...of...去迭代内部的数据  
  
```js  
const tods = {  
  life: ['eat', 'sleep'],  
  learn: ['js', 'dart'],  
  // 增加的任务  
  work: ['sale', 'customer'],  
  [Symbol.iterator]: function () {  
    const all = []  
    Object.keys(this).forEach((key) => {  
      all.push(...this[key])  
    })  
    let index = 0  
    return {  
      next() {  
        const ret = {  
          value: all[index],  
          done: index >= all.length,  
        }  
        index++  
        return ret  
      },  
    }  
  },  
}  
  
for (const item of tods) {  
  console.log(item)  
}  
```  
  
## 20.Generator 生成器  
  
- Generator  
- 函数前添加 *，生成一个生成器  
- 一般配合 yield 关键字使用  
- 最大特点，惰性执行，调 next 才会往下执行  
- 主要用来解决异步回调过深的问题  
  
```js  
// 生成迭代器方法  
//  生成器Generator的应用  
  
function* createIdGenerator() {  
  let id = 1  
  while (id < 3) yield id++  
}  
const createId = createIdGenerator()  
console.log(createId.next()) //{ value: 1, done: false }  
console.log(createId.next()) //{ value: 2, done: false }  
console.log(createId.next()) //{ value: undefined, done: true }  
  
const todos = {  
  life: ['eat', 'sleep', 'baba'],  
  learn: ['es5', 'es6', 'design pattern'],  
  work: ['b', 'c', 'framework'],  
  [Symbol.iterator]: function* () {  
    const all = [...this.life, ...this.learn, ...this.work]  
    for (const i of all) {  
      yield i  
    }  
  },  
}  
for (const item of todos) {  
  console.log(item)  
}  
```  
  
## 21.includes 函数-es2016  
  
判断数组是否包含某个元素，包含 NaN，解决 indexOf 无法查找 NaN 问题  
  
```js  
//  includes函数  
const arr = ['foo', 'bar', 'baz', NaN]  
console.log(arr.includes(NaN)) //true  
console.log(arr.indexOf(NaN)) //-1  
```  
  
## 22. 运算符-es2016  
  
指数运算  
  
```js  
// 指数运算符 **  
// es5中2十次方  
console.log(Math.pow(2, 10))  
// es6中2十次方  
console.log(2 ** 10)  
```  
  
## 23.values 函数-es2017  
  
将对象的值以数组的形式返回  
  
```js  
const obj = {  
  foo: 1,  
  bar: 2,  
  baz: 3,  
}  
  
console.log(Object.values(obj)) //[ 1, 2, 3 ]  
```  
  
## 24.entries 函数-es2017  
  
将对象以键值对二维数组返回，使之可以使用 for...of...遍历  
  
```js  
const obj = {  
  foo: 1,  
  bar: 2,  
  baz: 3,  
}  
console.log(Object.entries(obj))  
const entry = Object.entries(obj)  
for (const [key, value] of entry) {  
  console.log(key, value)  
}  
```  
  
## 25.Object.getOwnPropertyDescriptors(obj)-es2017  
  
获取对象的描述信息  
  
可以通过获得的描述信息，配合 Object.defineProperties 来完整复制对象，包含 get，set 方法  
  
```js  
// getOwnPropertyDescriptors  
  
// 普通get方法  
const objGet = {  
  foo: 1,  
  bar: 2,  
  get getCount() {  
    return this.foo + this.bar  
  },  
}  
// assign方法会把getCount当做普通属性复制，从而getCount为3，修改bar不管用  
const objGet1 = Object.assign({}, objGet)  
objGet1.bar = 3  
console.log(objGet1.getCount) //3  
// descriptors  
const descriptors = Object.getOwnPropertyDescriptors(objGet)  
console.log('des', descriptors)  
// 通过descriptors来复制对象，可以完整复制对象，包含get，set  
const objGet2 = Object.defineProperties({}, descriptors)  
objGet2.bar = 3  
console.log(objGet2.getCount) //4  
```  
  
## 26.padStart, padEnd 函数-es2017  
  
在字符串前，或者后面追加指定字符串  
  
参数：  
  
targetLenght: 填充后的目标长度  
  
padString:填充的字符串  
  
规则：  
  
1、填充的字符串超过目标长度，会在规定长度时被截断  
  
2、填充字符串太短会以空格填充  
  
3、padString 未传值，以空格填充  
  
作用：  
  
一般用来对齐字符串输出  
  
```js  
  
    /**  
     *  foo.................|1  
        barbar..............|2  
        bazbazbaz...........|3  
     */  
    console.log(`${key.padEnd(20, '.')}${value.toString().padStart(2, '|')}`)  
```  
  
  
  
  
# ES6中新增的Set、Map两种数据结构怎么理解?  
  
  
 ![](https://static.vue-js.com/2b947d00-560c-11eb-85f6-6fac77c0c9b3.png)  
  
如果要用一句来描述，我们可以说  
  
`Set`是一种叫做集合的数据结构，`Map`是一种叫做字典的数据结构  
  
什么是集合？什么又是字典？  
  
- 集合    
是由一堆无序的、相关联的，且不重复的内存结构【数学中称为元素】组成的组合  
  
- 字典     
是一些元素的集合。每个元素有一个称作key 的域，不同元素的key 各不相同  
  
区别？  
  
- 共同点：集合、字典都可以存储不重复的值  
- 不同点：集合是以[值，值]的形式存储元素，字典是以[键，值]的形式存储  
  
## 一、Set  
  
` Set`是`es6`新增的数据结构，类似于数组，但是成员的值都是唯一的，没有重复的值，我们一般称为集合  
  
`Set`本身是一个构造函数，用来生成 Set 数据结构  
  
```js  
const s = new Set();  
```  
  
  
  
### 增删改查  
  
`Set`的实例关于增删改查的方法：  
  
- add()  
- delete()  
  
- has()  
- clear()  
  
### add()  
  
添加某个值，返回 `Set` 结构本身  
  
当添加实例中已经存在的元素，`set`不会进行处理添加  
  
```js  
s.add(1).add(2).add(2); // 2只被添加了一次  
```  
  
### delete()  
  
删除某个值，返回一个布尔值，表示删除是否成功  
  
```js  
s.delete(1)  
```  
  
### has()  
  
返回一个布尔值，判断该值是否为`Set`的成员  
  
```js  
s.has(2)  
```  
  
### clear()  
  
清除所有成员，没有返回值  
  
```js  
s.clear()  
```  
  
  
  
### 遍历  
  
`Set`实例遍历的方法有如下：  
  
关于遍历的方法，有如下：  
  
- keys()：返回键名的遍历器  
- values()：返回键值的遍历器  
- entries()：返回键值对的遍历器  
- forEach()：使用回调函数遍历每个成员  
  
`Set`的遍历顺序就是插入顺序  
  
`keys`方法、`values`方法、`entries`方法返回的都是遍历器对象  
  
```javascript  
let set = new Set(['red', 'green', 'blue']);  
  
for (let item of set.keys()) {  
  console.log(item);  
}  
// red  
// green  
// blue  
  
for (let item of set.values()) {  
  console.log(item);  
}  
// red  
// green  
// blue  
  
for (let item of set.entries()) {  
  console.log(item);  
}  
// ["red", "red"]  
// ["green", "green"]  
// ["blue", "blue"]  
```  
  
`forEach()`用于对每个成员执行某种操作，没有返回值，键值、键名都相等，同样的`forEach`方法有第二个参数，用于绑定处理函数的`this`  
  
```javascript  
let set = new Set([1, 4, 9]);  
set.forEach((value, key) => console.log(key + ' : ' + value))  
// 1 : 1  
// 4 : 4  
// 9 : 9  
```  
  
扩展运算符和` Set` 结构相结合实现数组或字符串去重  
  
```javascript  
// 数组  
let arr = [3, 5, 2, 2, 5, 5];  
let unique = [...new Set(arr)]; // [3, 5, 2]  
  
// 字符串  
let str = "352255";  
let unique = [...new Set(str)].join(""); // "352"  
```  
  
实现并集、交集、和差集  
  
```javascript  
let a = new Set([1, 2, 3]);  
let b = new Set([4, 3, 2]);  
  
// 并集  
let union = new Set([...a, ...b]);  
// Set {1, 2, 3, 4}  
  
// 交集  
let intersect = new Set([...a].filter(x => b.has(x)));  
// set {2, 3}  
  
// （a 相对于 b 的）差集  
let difference = new Set([...a].filter(x => !b.has(x)));  
// Set {1}  
```  
  
  
  
## 二、Map  
  
`Map`类型是键值对的有序列表，而键和值都可以是任意类型  
  
`Map`本身是一个构造函数，用来生成 `Map` 数据结构  
  
```js  
const m = new Map()  
```  
  
  
  
### 增删改查  
  
`Map` 结构的实例针对增删改查有以下属性和操作方法：  
  
- size 属性  
- set()  
- get()  
- has()  
- delete()  
- clear()  
  
### size  
  
`size`属性返回 Map 结构的成员总数。  
  
```javascript  
const map = new Map();  
map.set('foo', true);  
map.set('bar', false);  
  
map.size // 2  
```  
  
  
  
### set()  
  
设置键名`key`对应的键值为`value`，然后返回整个 Map 结构  
  
如果`key`已经有值，则键值会被更新，否则就新生成该键  
  
同时返回的是当前`Map`对象，可采用链式写法  
  
```javascript  
const m = new Map();  
  
m.set('edition', 6)        // 键是字符串  
m.set(262, 'standard')     // 键是数值  
m.set(undefined, 'nah')    // 键是 undefined  
m.set(1, 'a').set(2, 'b').set(3, 'c') // 链式操作  
```  
  
  
  
### get()  
  
`get`方法读取`key`对应的键值，如果找不到`key`，返回`undefined`  
  
```javascript  
const m = new Map();  
  
const hello = function() {console.log('hello');};  
m.set(hello, 'Hello ES6!') // 键是函数  
  
m.get(hello)  // Hello ES6!  
```  
  
  
  
### has()  
  
`has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中  
  
```javascript  
const m = new Map();  
  
m.set('edition', 6);  
m.set(262, 'standard');  
m.set(undefined, 'nah');  
  
m.has('edition')     // true  
m.has('years')       // false  
m.has(262)           // true  
m.has(undefined)     // true  
```  
  
  
  
### delete()  
  
`delete`方法删除某个键，返回`true`。如果删除失败，返回`false`  
  
```javascript  
const m = new Map();  
m.set(undefined, 'nah');  
m.has(undefined)     // true  
  
m.delete(undefined)  
m.has(undefined)       // false  
```  
  
### clear()  
  
`clear`方法清除所有成员，没有返回值  
  
```javascript  
let map = new Map();  
map.set('foo', true);  
map.set('bar', false);  
  
map.size // 2  
map.clear()  
map.size // 0  
```  
  
  
  
### 遍历  
  
`Map `结构原生提供三个遍历器生成函数和一个遍历方法：  
  
- keys()：返回键名的遍历器  
- values()：返回键值的遍历器  
- entries()：返回所有成员的遍历器  
- forEach()：遍历 Map 的所有成员  
  
遍历顺序就是插入顺序  
  
```javascript  
const map = new Map([  
  ['F', 'no'],  
  ['T',  'yes'],  
]);  
  
for (let key of map.keys()) {  
  console.log(key);  
}  
// "F"  
// "T"  
  
for (let value of map.values()) {  
  console.log(value);  
}  
// "no"  
// "yes"  
  
for (let item of map.entries()) {  
  console.log(item[0], item[1]);  
}  
// "F" "no"  
// "T" "yes"  
  
// 或者  
for (let [key, value] of map.entries()) {  
  console.log(key, value);  
}  
// "F" "no"  
// "T" "yes"  
  
// 等同于使用map.entries()  
for (let [key, value] of map) {  
  console.log(key, value);  
}  
// "F" "no"  
// "T" "yes"  
  
map.forEach(function(value, key, map) {  
  console.log("Key: %s, Value: %s", key, value);  
});  
```  
  
## 三、WeakSet 和 WeakMap  
  
### WeakSet  
  
创建`WeakSet`实例  
  
```js  
const ws = new WeakSet();  
```  
  
`WeakSet `可以接受一个具有 `Iterable `接口的对象作为参数  
  
```js  
const a = [[1, 2], [3, 4]];  
const ws = new WeakSet(a);  
// WeakSet {[1, 2], [3, 4]}  
```  
  
在`API`中`WeakSet`与`Set`有两个区别：  
  
- 没有遍历操作的`API`  
- 没有`size`属性  
  
`WeackSet`只能成员只能是引用类型，而不能是其他类型的值  
  
```js  
let ws=new WeakSet();  
  
// 成员不是引用类型  
let weakSet=new WeakSet([2,3]);  
console.log(weakSet) // 报错  
  
// 成员为引用类型  
let obj1={name:1}  
let obj2={name:1}  
let ws=new WeakSet([obj1,obj2]);   
console.log(ws) //WeakSet {{…}, {…}}  
```  
  
`WeakSet `里面的引用只要在外部消失，它在 `WeakSet `里面的引用就会自动消失  
  
  
  
### WeakMap  
  
`WeakMap`结构与`Map`结构类似，也是用于生成键值对的集合  
  
在`API`中`WeakMap`与`Map`有两个区别：  
  
- 没有遍历操作的`API`  
- 没有`clear`清空方法  
  
```javascript  
// WeakMap 可以使用 set 方法添加成员  
const wm1 = new WeakMap();  
const key = {foo: 1};  
wm1.set(key, 2);  
wm1.get(key) // 2  
  
// WeakMap 也可以接受一个数组，  
// 作为构造函数的参数  
const k1 = [1, 2, 3];  
const k2 = [4, 5, 6];  
const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);  
wm2.get(k2) // "bar"  
```  
  
`WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名  
  
```javascript  
const map = new WeakMap();  
map.set(1, 2)  
// TypeError: 1 is not an object!  
map.set(Symbol(), 2)  
// TypeError: Invalid value used as weak map key  
map.set(null, 2)  
// TypeError: Invalid value used as weak map key  
```  
  
`WeakMap`的键名所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用  
  
举个场景例子：  
  
在网页的 DOM 元素上添加数据，就可以使用`WeakMap`结构，当该 DOM 元素被清除，其所对应的`WeakMap`记录就会自动被移除  
  
```javascript  
const wm = new WeakMap();  
  
const element = document.getElementById('example');  
  
wm.set(element, 'some information');  
wm.get(element) // "some information"  
```  
  
注意：`WeakMap` 弱引用的只是键名，而不是键值。键值依然是正常引用  
  
下面代码中，键值`obj`会在`WeakMap`产生新的引用，当你修改`obj`不会影响到内部  
  
```js  
const wm = new WeakMap();  
let key = {};  
let obj = {foo: 1};  
  
wm.set(key, obj);  
obj = null;  
wm.get(key)  
// Object {foo: 1}  
```  
  
  
# 谈谈对 this 对象的理解  
![](https://static.vue-js.com/46c820d0-74b7-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
## 一、定义  
  
函数的 `this` 关键字在 `JavaScript` 中的表现略有不同，此外，在严格模式和非严格模式之间也会有一些差别  
  
在绝大多数情况下，函数的调用方式决定了 `this` 的值（运行时绑定）  
  
`this` 关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象  
  
举个例子：  
  
```js  
function baz() {  
    // 当前调用栈是：baz  
    // 因此，当前调用位置是全局作用域  
      
    console.log( "baz" );  
    bar(); // <-- bar的调用位置  
}  
  
function bar() {  
    // 当前调用栈是：baz --> bar  
    // 因此，当前调用位置在baz中  
      
    console.log( "bar" );  
    foo(); // <-- foo的调用位置  
}  
  
function foo() {  
    // 当前调用栈是：baz --> bar --> foo  
    // 因此，当前调用位置在bar中  
      
    console.log( "foo" );  
}  
  
baz(); // <-- baz的调用位置  
```  
  
同时，`this`在函数执行过程中，`this`一旦被确定了，就不可以再更改  
  
```js  
var a = 10;  
var obj = {  
  a: 20  
}  
  
function fn() {  
  this = obj; // 修改this，运行后会报错  
  console.log(this.a);  
}  
  
fn();  
```  
  
  
  
  
  
## 二、绑定规则  
  
根据不同的使用场合，`this`有不同的值，主要分为下面几种情况：  
  
- 默认绑定  
- 隐式绑定  
- new绑定  
  
- 显示绑定  
  
  
  
### 默认绑定  
  
全局环境中定义`person`函数，内部使用`this`关键字  
  
```js  
var name = 'Jenny';  
function person() {  
    return this.name;  
}  
console.log(person());  //Jenny  
```  
  
上述代码输出`Jenny`，原因是调用函数的对象在游览器中位`window`，因此`this`指向`window`，所以输出`Jenny`  
  
注意：  
  
严格模式下，不能将全局对象用于默认绑定，this会绑定到`undefined`，只有函数运行在非严格模式下，默认绑定才能绑定到全局对象  
  
  
  
### 隐式绑定  
  
函数还可以作为某个对象的方法调用，这时`this`就指这个上级对象  
  
```js  
function test() {  
  console.log(this.x);  
}  
  
var obj = {};  
obj.x = 1;  
obj.m = test;  
  
obj.m(); // 1  
```  
  
这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，`this`指向的也只是它上一级的对象  
  
```js  
var o = {  
    a:10,  
    b:{  
        fn:function(){  
            console.log(this.a); //undefined  
        }  
    }  
}  
o.b.fn();  
```  
  
上述代码中，`this`的上一级对象为`b`，`b`内部并没有`a`变量的定义，所以输出`undefined`  
  
这里再举一种特殊情况  
  
```js  
var o = {  
    a:10,  
    b:{  
        a:12,  
        fn:function(){  
            console.log(this.a); //undefined  
            console.log(this); //window  
        }  
    }  
}  
var j = o.b.fn;  
j();  
```  
  
此时`this`指向的是`window`，这里的大家需要记住，`this`永远指向的是最后调用它的对象，虽然`fn`是对象`b`的方法，但是`fn`赋值给`j`时候并没有执行，所以最终指向`window`  
  
  
  
### new绑定  
  
通过构建函数`new`关键字生成一个实例对象，此时`this`指向这个实例对象  
  
```js  
function test() {  
　this.x = 1;  
}  
  
var obj = new test();  
obj.x // 1  
```  
  
上述代码之所以能过输出1，是因为`new`关键字改变了`this`的指向  
  
这里再列举一些特殊情况：  
  
`new`过程遇到`return`一个对象，此时`this`指向为返回的对象  
  
```js  
function fn()    
{    
    this.user = 'xxx';    
    return {};    
}  
var a = new fn();    
console.log(a.user); //undefined  
```  
  
如果返回一个简单类型的时候，则`this`指向实例对象  
  
```js  
function fn()    
{    
    this.user = 'xxx';    
    return 1;  
}  
var a = new fn;    
console.log(a.user); //xxx  
```  
  
注意的是`null`虽然也是对象，但是此时`new`仍然指向实例对象  
  
```js  
function fn()    
{    
    this.user = 'xxx';    
    return null;  
}  
var a = new fn;    
console.log(a.user); //xxx  
```  
  
  
  
### 显示修改  
  
`apply()、call()、bind()`是函数的一个方法，作用是改变函数的调用对象。它的第一个参数就表示改变后的调用这个函数的对象。因此，这时`this`指的就是这第一个参数  
  
```js  
var x = 0;  
function test() {  
　console.log(this.x);  
}  
  
var obj = {};  
obj.x = 1;  
obj.m = test;  
obj.m.apply(obj) // 1  
```  
  
关于`apply、call、bind`三者的区别，我们后面再详细说  
  
  
## 三、箭头函数  
  
在 ES6 的语法中还提供了箭头函语法，让我们在代码书写时就能确定 `this` 的指向（编译时绑定）  
  
举个例子：  
  
```js  
const obj = {  
  sayThis: () => {  
    console.log(this);  
  }  
};  
  
obj.sayThis(); // window 因为 JavaScript 没有块作用域，所以在定义 sayThis 的时候，里面的 this 就绑到 window 上去了  
const globalSay = obj.sayThis;  
globalSay(); // window 浏览器中的 global 对象  
```  
  
虽然箭头函数的`this`能够在编译的时候就确定了`this`的指向，但也需要注意一些潜在的坑  
  
下面举个例子：  
  
绑定事件监听  
  
```js  
const button = document.getElementById('mngb');  
button.addEventListener('click', ()=> {  
    console.log(this === window) // true  
    this.innerHTML = 'clicked button'  
})  
```  
  
上述可以看到，我们其实是想要`this`为点击的`button`，但此时`this`指向了`window`  
  
包括在原型上添加方法时候，此时`this`指向`window`  
  
```js  
Cat.prototype.sayName = () => {  
    console.log(this === window) //true  
    return this.name  
}  
const cat = new Cat('mm');  
cat.sayName()  
```  
  
同样的，箭头函数不能作为构建函数  
  
  
  
## 四、优先级  
  
### 隐式绑定 VS 显式绑定  
  
```js  
function foo() {  
    console.log( this.a );  
}  
  
var obj1 = {  
    a: 2,  
    foo: foo  
};  
  
var obj2 = {  
    a: 3,  
    foo: foo  
};  
  
obj1.foo(); // 2  
obj2.foo(); // 3  
  
obj1.foo.call( obj2 ); // 3  
obj2.foo.call( obj1 ); // 2  
```  
  
显然，显式绑定的优先级更高  
  
### new绑定 VS 隐式绑定  
  
```js  
function foo(something) {  
    this.a = something;  
}  
  
var obj1 = {  
    foo: foo  
};  
  
var obj2 = {};  
  
obj1.foo( 2 );  
console.log( obj1.a ); // 2  
  
obj1.foo.call( obj2, 3 );  
console.log( obj2.a ); // 3  
  
var bar = new obj1.foo( 4 );  
console.log( obj1.a ); // 2  
console.log( bar.a ); // 4  
```  
  
可以看到，new绑定的优先级`>`隐式绑定  
  
### `new`绑定 VS 显式绑定  
  
因为`new`和`apply、call`无法一起使用，但硬绑定也是显式绑定的一种，可以替换测试  
  
```js  
function foo(something) {  
    this.a = something;  
}  
  
var obj1 = {};  
  
var bar = foo.bind( obj1 );  
bar( 2 );  
console.log( obj1.a ); // 2  
  
var baz = new bar( 3 );  
console.log( obj1.a ); // 2  
console.log( baz.a ); // 3  
```  
  
`bar`被绑定到obj1上，但是`new bar(3)` 并没有像我们预计的那样把`obj1.a`修改为3。但是，`new`修改了绑定调用`bar()`中的`this`  
  
我们可认为`new`绑定优先级`>`显式绑定  
  
综上，new绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级  
  
  
# 说说你对函数式编程的理解，以及优缺点？  
![](https://static.vue-js.com/ec0f6e80-8534-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、是什么  
  
函数式编程是一种"编程范式"（programming paradigm），一种编写程序的方法论  
  
主要的编程范式有三种：命令式编程，声明式编程和函数式编程  
  
相比命令式编程，函数式编程更加强调程序执行的结果而非执行的过程，倡导利用若干简单的执行单元让计算结果不断渐进，逐层推导复杂的运算，而非设计一个复杂的执行过程  
  
举个例子，将数组每个元素进行平方操作，命令式编程与函数式编程如下  
  
```js  
// 命令式编程  
var array = [0, 1, 2, 3]  
for(let i = 0; i < array.length; i++) {  
    array[i] = Math.pow(array[i], 2)  
}  
  
// 函数式方式  
[0, 1, 2, 3].map(num => Math.pow(num, 2))  
```  
  
简单来讲，就是要把过程逻辑写成函数，定义好输入参数，只关心它的输出结果  
  
即是一种描述集合和集合之间的转换关系，输入通过函数都会返回有且只有一个输出值  
  
 ![](https://static.vue-js.com/f9f83900-8534-11eb-85f6-6fac77c0c9b3.png)  
  
可以看到，函数实际上是一个关系，或者说是一种映射，而这种映射关系是可以组合的，一旦我们知道一个函数的输出类型可以匹配另一个函数的输入，那他们就可以进行组合  
  
  
## 二、概念  
  
### 纯函数  
  
函数式编程旨在尽可能的提高代码的无状态性和不变性。要做到这一点，就要学会使用无副作用的函数，也就是纯函数  
  
纯函数是对给定的输入返还相同输出的函数，并且要求你所有的数据都是不可变的，即纯函数=无状态+数据不可变  
  
 ![](https://static.vue-js.com/04f50720-8535-11eb-ab90-d9ae814b240d.png)  
  
举一个简单的例子  
  
```js  
let double = value=>value*2;  
```  
  
特性：  
  
- 函数内部传入指定的值，就会返回确定唯一的值  
- 不会造成超出作用域的变化，例如修改全局变量或引用传递的参数  
  
优势：  
  
- 使用纯函数，我们可以产生可测试的代码  
  
```js  
test('double(2) 等于 4', () => {  
  expect(double(2)).toBe(4);  
})  
```  
  
- 不依赖外部环境计算，不会产生副作用，提高函数的复用性  
  
- 可读性更强 ，函数不管是否是纯函数  都会有一个语义化的名称，更便于阅读  
  
- 可以组装成复杂任务的可能性。符合模块化概念及单一职责原则  
  
  
  
### 高阶函数  
  
在我们的编程世界中，我们需要处理的其实也只有“数据”和“关系”，而关系就是函数  
  
编程工作也就是在找一种映射关系，一旦关系找到了，问题就解决了，剩下的事情，就是让数据流过这种关系，然后转换成另一个数据，如下图所示  
  
 ![](https://static.vue-js.com/104af1c0-8535-11eb-ab90-d9ae814b240d.png)  
  
在这里，就是高阶函数的作用。  
  
高阶函数，就是以函数作为输入或者输出的函数被称为高阶函数  
  
通过高阶函数抽象过程，注重结果，如下面例子  
  
```js  
const forEach = function(arr,fn){  
    for(let i=0;i<arr.length;i++){  
        fn(arr[i]);  
    }  
}  
let arr = [1,2,3];  
forEach(arr,(item)=>{  
    console.log(item);  
})  
```  
  
上面通过高阶函数 `forEach`来抽象循环如何做的逻辑，直接关注做了什么  
  
高阶函数存在缓存的特性，主要是利用闭包作用  
  
```js  
const once = (fn)=>{  
    let done = false;  
    return function(){  
        if(!done){  
            fn.apply(this,fn);  
        }else{  
            console.log("该函数已经执行");  
        }  
        done = true;  
    }  
}  
```  
  
### 柯里化  
  
柯里化是把一个多参数函数转化成一个嵌套的一元函数的过程  
  
一个二元函数如下：  
  
```js  
let fn = (x,y)=>x+y;  
```  
  
转化成柯里化函数如下：  
  
```js  
const curry = function(fn){  
    return function(x){  
        return function(y){  
            return fn(x,y);  
        }  
    }  
}  
let myfn = curry(fn);  
console.log( myfn(1)(2) );  
```  
  
上面的`curry`函数只能处理二元情况，下面再来实现一个实现多参数的情况  
  
```js  
// 多参数柯里化；  
const curry = function(fn){  
    return function curriedFn(...args){  
        if(args.length<fn.length){  
            return function(){  
                return curriedFn(...args.concat([...arguments]));  
            }  
        }  
        return fn(...args);  
    }  
}  
const fn = (x,y,z,a)=>x+y+z+a;  
const myfn = curry(fn);  
console.log(myfn(1)(2)(3)(1));  
```  
  
关于柯里化函数的意义如下：  
  
- 让纯函数更纯，每次接受一个参数，松散解耦  
- 惰性执行  
  
  
  
### 组合与管道  
  
组合函数，目的是将多个函数组合成一个函数  
  
举个简单的例子：  
  
```js  
function afn(a){  
    return a*2;  
}  
function bfn(b){  
    return b*3;  
}  
const compose = (a,b)=>c=>a(b(c));  
let myfn =  compose(afn,bfn);  
console.log( myfn(2));  
```  
  
可以看到`compose`实现一个简单的功能：形成了一个新的函数，而这个函数就是一条从 `bfn -> afn` 的流水线  
  
下面再来看看如何实现一个多函数组合：  
  
```js  
const compose = (...fns)=>val=>fns.reverse().reduce((acc,fn)=>fn(acc),val);  
```  
  
`compose`执行是从右到左的。而管道函数，执行顺序是从左到右执行的  
  
```js  
const pipe = (...fns)=>val=>fns.reduce((acc,fn)=>fn(acc),val);  
```  
  
组合函数与管道函数的意义在于：可以把很多小函数组合起来完成更复杂的逻辑  
  
## 三、优缺点  
  
#### 优点  
  
- 更好的管理状态：因为它的宗旨是无状态，或者说更少的状态，能最大化的减少这些未知、优化代码、减少出错情况  
  
- 更简单的复用：固定输入->固定输出，没有其他外部变量影响，并且无副作用。这样代码复用时，完全不需要考虑它的内部实现和外部影响  
  
- 更优雅的组合：往大的说，网页是由各个组件组成的。往小的说，一个函数也可能是由多个小函数组成的。更强的复用性，带来更强大的组合性  
  
- 隐性好处。减少代码量，提高维护性  
  
#### 缺点：  
  
- 性能：函数式编程相对于指令式编程，性能绝对是一个短板，因为它往往会对一个方法进行过度包装，从而产生上下文切换的性能开销  
  
- 资源占用：在 JS 中为了实现对象状态的不可变，往往会创建新的对象，因此，它对垃圾回收所产生的压力远远超过其他编程方式  
  
- 递归陷阱：在函数式编程中，为了实现迭代，通常会采用递归操作  
  
# cookie、localStorage和sessionStorage 三者之间有什么区别  
## 生命周期  
  
* cookie：可设置失效时间，没有设置的话，默认是关闭浏览器后失效  
* localStorage：除非被手动清除，否则将会永久保存。  
* sessionStorage： 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除。  
  
## 存放数据大小  
  
* cookie：4KB左右  
* localStorage和sessionStorage：可以保存5MB的信息。  
  
## http请求  
  
* cookie：每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题  
* localStorage和sessionStorage：仅在客户端（即浏览器）中保存，不参与和服务器的通信  
  
## 易用性  
  
* cookie：需要程序员自己封装，原生的 Cookie API 不友好  
* localStorage和sessionStorage：原生 API 可以接受，亦可再次封装来对Object和Array有更好的支持  
  
## 应用场景  
  
从安全性来说，因为每次http请求都会携带cookie信息，这样无形中浪费了带宽，所以cookie应该尽可能少的使用，另外cookie还需要指定作用域，不可以跨域调用（当前页面只能读取页面所在域的 `cookie`，即 `document.cookie` ），限制比较多。但是用来识别用户登录来说，cookie还是比storage更好用的。其他情况下，可以使用storage，就用storage。  
  
storage在存储数据的大小上面秒杀了cookie，现在基本上很少使用cookie了。  
  
localStorage和sessionStorage唯一的差别一个是永久保存在浏览器里面，一个是关闭网页就清除了信息。localStorage可以用来夸页面传递参数，sessionStorage用来保存一些临时的数据，防止用户刷新页面之后丢失了一些参数。  
  
# 怎么实现图片懒加载？  
懒加载是一种网页性能优化的方式，它能极大的提升用户体验。就比如说图片，图片一直是影响网页性能的主要元凶，现在一张图片超过几兆已经是很经常的事了。如果每次进入页面就请求所有的图片资源，那么可能等图片加载出来用户也早就走了。所以，我们需要懒加载，进入页面的时候，只请求可视区域的图片资源。  
  
总结出来就两个点：  
  
1. 全部加载的话会影响用户体验  
2. 浪费用户的流量，有些用户并不想全部看完，全部加载会耗费大量流量。  
  
# 实现方式  
  
## html 实现  
  
最简单的实现方式是给 `img` 标签加上 `loading="lazy"`，比如  
  
```html  
<img src="./example.jpg" loading="lazy">  
```  
  
该属性的兼容性也还行，大家生产环境可以使用。  
  
![image.png](https://pic.rmb.bdstatic.com/bjh/bc5b155c5016d9979e2da98bcd74730b.png)  
  
## js实现原理  
  
我们通过js监听页面的滚动也能实现。  
  
使用js实现的原理主要是判断当前图片是否到了可视区域：  
  
* 拿到所有的图片 dom 。  
* 遍历每个图片判断当前图片是否到了可视区范围内。  
* 如果到了就设置图片的 src 属性。  
* 绑定 window 的 scroll 事件，对其进行事件监听。  
  
在页面初始化的时候，<img>图片的src实际上是放在data-src属性上的，当元素处于可视范围内的时候，就把data-src赋值给src属性，完成图片加载。  
  
```html  
// 在一开始加载的时候  
<img data-src="http://xx.com/xx.png" src="" />  
  
// 在进入可视范围内时  
<img data-src="http://xx.com/xx.png" src="http://xx.com/xx.png" />  
```  
  
<div>使用背景图来实现，原理也是一样的，把图片链接存放在 `data-src` 中，在可视范围时，就把data-src赋值给 `background-image` 属性，完成图片加载。  
  
```html  
// 在一开始加载的时候  
<div  
  data-src="http://xx.com/xx.png"  
  style="background-image: none;background-size: cover;"  
></div>  
  
// 在进入可视范围内时  
<div  
  data-src="http://xx.com/xx.png"  
  style="background-image: url(http://xx.com/xx.png);background-size: cover;"  
></div>  
```  
  
下面展示一个demo：  
  
```html  
<html lang="en">  
  <head>  
    <meta charset="UTF-8" />  
    <title>Lazyload</title>  
    <style>  
      img {  
        display: block;  
        margin-bottom: 50px;  
        height: 200px;  
        width: 400px;  
      }  
    </style>  
  </head>  
  <body>  
    <img src="./img/default.png" data-src="./img/1.jpg" />  
    <img src="./img/default.png" data-src="./img/2.jpg" />  
    <img src="./img/default.png" data-src="./img/3.jpg" />  
    <img src="./img/default.png" data-src="./img/4.jpg" />  
    <img src="./img/default.png" data-src="./img/5.jpg" />  
    <img src="./img/default.png" data-src="./img/6.jpg" />  
    <img src="./img/default.png" data-src="./img/7.jpg" />  
    <img src="./img/default.png" data-src="./img/8.jpg" />  
    <img src="./img/default.png" data-src="./img/9.jpg" />  
    <img src="./img/default.png" data-src="./img/10.jpg" />  
  </body>  
</html>  
```  
  
先获取所有图片的 dom，通过 `window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight` 获取可视区高度，再使用 `element.getBoundingClientRect()` API 直接得到元素相对浏览的 top 值， 遍历每个图片判断当前图片是否到了可视区范围内。代码如下：  
  
```js  
function lazyload() {  
  let viewHeight = window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight //获取可视区高度，兼容不同浏览器  
  let imgs = document.querySelectorAll('img[data-src]')  
  imgs.forEach((item, index) => {  
    if (item.dataset.src === '') return  
  
    // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置  
    let rect = item.getBoundingClientRect()  
    if (rect.bottom >= 0 && rect.top < viewHeight) {  
      item.src = item.dataset.src  
      item.removeAttribute('data-src')  
    }  
  })  
}  
```  
  
最后给 window 绑定 onscroll 事件  
  
```js  
window.addEventListener('scroll', lazyload)  
```  
  
主要就完成了一个图片懒加载的操作了。但是这样存在较大的性能问题，因为 scroll 事件会在很短的时间内触发很多次，严重影响页面性能，为了提高网页性能，我们需要一个节流函数来控制函数的多次触发，在一段时间内（如 200ms）只执行一次回调。  
  
下面实现一个节流函数  
  
```js  
function throttle(fn, delay) {  
  let timer  
  let prevTime  
  return function (...args) {  
    const currTime = Date.now()  
    const context = this  
    if (!prevTime) prevTime = currTime  
    clearTimeout(timer)  
  
    if (currTime - prevTime > delay) {  
      prevTime = currTime  
      fn.apply(context, args)  
      clearTimeout(timer)  
      return  
    }  
  
    timer = setTimeout(function () {  
      prevTime = Date.now()  
      timer = null  
      fn.apply(context, args)  
    }, delay)  
  }  
}  
```  
  
然后修改一下 srcoll 事件  
  
```js  
window.addEventListener('scroll', throttle(lazyload, 200))  
```  
  
## 拓展： IntersectionObserver  
  
通过上面例子的实现，我们要实现懒加载都需要去监听 scroll 事件，尽管我们可以通过函数节流的方式来阻止高频率的执行函数，但是我们还是需要去计算 scrollTop，offsetHeight 等属性，有没有简单的不需要计算这些属性的方式呢，答案就是 `IntersectionObserver`。  
  
`IntersectionObserver` 是一个比较新的 API，可以自动"观察"元素是否可见，Chrome 51+ 已经支持。由于可见（visible）的本质是，目标元素与视口产生一个交叉区，所以这个 API 叫做"交叉观察器"。我们来看一下它的用法：  
  
```js  
var io = new IntersectionObserver(callback, option)  
  
// 开始观察  
io.observe(document.getElementById('example'))  
  
// 停止观察  
io.unobserve(element)  
  
// 关闭观察器  
io.disconnect()  
  
```  
  
IntersectionObserver 是浏览器原生提供的构造函数，接受两个参数：callback 是可见性变化时的回调函数，option 是配置对象（该参数可选）。  
  
目标元素的可见性变化时，就会调用观察器的回调函数 callback。callback 一般会触发两次。一次是目标元素刚刚进入视口（开始可见），另一次是完全离开视口（开始不可见）。  
  
下面我们用 IntersectionObserver 实现图片懒加载  
  
```js  
const imgs = document.querySelectorAll('img[data-src]')  
const config = {  
  rootMargin: '0px',  
  threshold: 0,  
}  
let observer = new IntersectionObserver((entries, self) => {  
  entries.forEach((entry) => {  
    if (entry.isIntersecting) {  
      let img = entry.target  
      let src = img.dataset.src  
      if (src) {  
        img.src = src  
        img.removeAttribute('data-src')  
      }  
      // 解除观察  
      self.unobserve(entry.target)  
    }  
  })  
}, config)  
  
imgs.forEach((image) => {  
  observer.observe(image)  
})  
  
```  
  
  
# 举例说明你对尾递归的理解，以及有哪些应用场景  
![](https://static.vue-js.com/74db8fe0-815d-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、递归  
  
递归（英语：Recursion）  
  
在数学与计算机科学中，是指在函数的定义中使用函数自身的方法  
  
在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数  
  
其核心思想是把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解  
  
一般来说，递归需要有边界条件、递归前进阶段和递归返回阶段。当边界条件不满足时，递归前进；当边界条件满足时，递归返回  
  
下面实现一个函数 `pow(x, n)`，它可以计算 `x` 的 `n` 次方  
  
使用迭代的方式，如下：  
  
```js  
function pow(x, n) {  
  let result = 1;  
  
  // 再循环中，用 x 乘以 result n 次  
  for (let i = 0; i < n; i++) {  
    result *= x;  
  }  
  return result;  
}  
```  
  
使用递归的方式，如下：  
  
```js  
function pow(x, n) {  
  if (n == 1) {  
    return x;  
  } else {  
    return x * pow(x, n - 1);  
  }  
}  
```  
  
`pow(x, n)` 被调用时，执行分为两个分支：  
  
```js  
             if n==1  = x  
             /  
pow(x, n) =  
             \  
              else     = x * pow(x, n - 1)  
```  
  
也就是说`pow` 递归地调用自身 直到 `n == 1`  
  
 ![](https://static.vue-js.com/8002c960-815d-11eb-ab90-d9ae814b240d.png)  
  
为了计算 `pow(2, 4)`，递归变体经过了下面几个步骤：  
  
1. `pow(2, 4) = 2 * pow(2, 3)`  
2. `pow(2, 3) = 2 * pow(2, 2)`  
3. `pow(2, 2) = 2 * pow(2, 1)`  
4. `pow(2, 1) = 2`  
  
因此，递归将函数调用简化为一个更简单的函数调用，然后再将其简化为一个更简单的函数，以此类推，直到结果  
  
  
  
## 二、尾递归  
  
尾递归，即在函数尾位置调用自身（或是一个尾调用本身的其他函数等等）。尾递归也是递归的一种特殊情形。尾递归是一种特殊的尾调用，即在尾部直接调用自身的递归函数  
  
尾递归在普通尾调用的基础上，多出了2个特征：  
  
- 在尾部调用的是函数自身  
- 可通过优化，使得计算仅占用常量栈空间  
  
在递归调用的过程当中系统为每一层的返回点、局部量等开辟了栈来存储，递归次数过多容易造成栈溢出  
  
这时候，我们就可以使用尾递归，即一个函数中所有递归形式的调用都出现在函数的末尾，对于尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误  
  
实现一下阶乘，如果用普通的递归，如下：  
  
```js  
function factorial(n) {  
  if (n === 1) return 1;  
  return n * factorial(n - 1);  
}  
  
factorial(5) // 120  
```  
  
如果`n`等于5，这个方法要执行5次，才返回最终的计算表达式，这样每次都要保存这个方法，就容易造成栈溢出，复杂度为`O(n)`  
  
如果我们使用尾递归，则如下：  
  
```js  
function factorial(n, total = 1) {  
  if (n === 1) return total;  
  return factorial(n - 1, n * total);  
}  
  
factorial(5) // 120  
```  
  
可以看到，每一次返回的就是一个新的函数，不带上一个函数的参数，也就不需要储存上一个函数了。尾递归只需要保存一个调用栈，复杂度 O(1)  
  
  
  
## 二、应用场景  
  
数组求和  
  
```js  
function sumArray(arr, total) {  
    if(arr.length === 1) {  
        return total  
    }  
    return sumArray(arr, total + arr.pop())  
}  
```  
  
使用尾递归优化求斐波那契数列  
  
```js  
function factorial2 (n, start = 1, total = 1) {  
    if(n <= 2){  
        return total  
    }  
    return factorial2 (n -1, total, total + start)  
}  
```  
  
数组扁平化  
  
```js  
let a = [1,2,3, [1,2,3, [1,2,3]]]  
// 变成  
let a = [1,2,3,1,2,3,1,2,3]  
// 具体实现  
function flat(arr = [], result = []) {  
    arr.forEach(v => {  
        if(Array.isArray(v)) {  
            result = result.concat(flat(v, []))  
        }else {  
            result.push(v)  
        }  
    })  
    return result  
}  
```  
  
数组对象格式化  
  
```js  
let obj = {  
    a: '1',  
    b: {  
        c: '2',  
        D: {  
            E: '3'  
        }  
    }  
}  
// 转化为如下：  
let obj = {  
    a: '1',  
    b: {  
        c: '2',  
        d: {  
            e: '3'  
        }  
    }  
}  
  
// 代码实现  
function keysLower(obj) {  
    let reg = new RegExp("([A-Z]+)", "g");  
    for (let key in obj) {  
        if (obj.hasOwnProperty(key)) {  
            let temp = obj[key];  
            if (reg.test(key.toString())) {  
                // 将修改后的属性名重新赋值给temp，并在对象obj内添加一个转换后的属性  
                temp = obj[key.replace(reg, function (result) {  
                    return result.toLowerCase()  
                })] = obj[key];  
                // 将之前大写的键属性删除  
                delete obj[key];  
            }  
            // 如果属性是对象或者数组，重新执行函数  
            if (typeof temp === 'object' || Object.prototype.toString.call(temp) === '[object Array]') {  
                keysLower(temp);  
            }  
        }  
    }  
    return obj;  
};  
```  
  
# null 和 undefined 有什么区别？  
首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。  
  
undefined 代表的含义是未定义，null 代表的含义是空对象。一般变量声明了但还没有定义的时候会返回 undefined，null主要用于赋值给一些可能会返回对象的变量，作为初始化。  
  
undefined 在 JavaScript 中不是一个保留字，这意味着可以使用 undefined 来作为一个变量名，但是这样的做法是非常危险的，它会影响对 undefined 值的判断。我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。  
  
当对这两种类型使用 typeof 进行判断时，Null 类型化会返回 “object”，这是一个历史遗留的问题。当使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。  
  
```js  
typeof null; // "object" (not "null" for legacy reasons)  
typeof undefined; // "undefined"  
null === undefined; // false  
null == undefined; // true  
null === null; // true  
null == null; // true  
!null; // true  
Number.isNaN(1 + null); // false  
Number.isNaN(1 + undefined); // true  
```  
  
```js  
Promise.reject('err!!!')  
  .then((res) => {  
    console.log('success', res)  
  }, (err) => {  
    console.log('error', err)  
  }).catch(err => {  
    console.log('catch', err)  
  })  
  
```  
# 【Promise第21题】下面代码的输出是什么？  
## 解析  
  
.then函数中的两个参数。  
  
第一个参数是用来处理Promise成功的函数，第二个则是处理失败的函数。  
  
也就是说Promise.resolve('xxx')的值会进入成功的函数，Promise.reject('xxx')的值会进入失败的函数。  
  
## 答案  
```  
'error' 'err!!!'  
```  
# 给某个资源的链接，如 https://www.baidu.com/index.html ，请实现一个方法，获取该资源的后缀，如 html  
本题主要考察字符串相关的方法，实现比较简单，下面列举两个实现方法。  
  
```js  
var fileName = "https://www.baidu.com/index.html";  
  
function getFileExtension(url){  
	if(typeof url !== 'string'){  
    	return ''  
    }  
      
    // 方法一  
    return url.substring(url.lastIndexOf('.') + 1);  
      
    // 方法二  
    //return url.split('.').pop().toLowerCase();  
}  
```  
  
# js函数有哪几种声明方式？有什么区别？  
有 `表达式` 和 `声明式` 两种函数声明方式  
  
* 函数的声明式写法为：`function test(){}`，这种写法会导致函数提升，所有通过`function`关键字声明的变量都会被解释器优先编译，不管声明在什么位置都可以调用它，但是它本身并不会被执行。  
  
```js  
test(); // 测试  
function test() {  
  console.log("测试");  
}  
test(); // 测试  
```  
  
* 函数的表达式写法为：`var test = function(){}`，这种写法不会导致函数提升，必须先声明后调用，不然就会报错。  
  
```js  
test(); // 报错：TypeError: test is not a function  
var test = function() {  
  console.log("测试");  
};  
```  
  
## 二者的区别  
  
```javascript  
//函数声明式  
function greeting(){  
      console.log("hello world");    
}  
//函数表达式  
var greeting = function(){  
    console.log("hello world");   
}  
```  
  
1. 函数声明式变量会声明提前 函数表达式变量不会声明提前  
2. **函数声明**中的`函数名`是必需的，而**函数表达式**中的`函数名则是可选的`。  
3. 函数表达式可以在定义的时候直接在表达式后面加()执行，而函数声明则不可以。    
  
```javascript    
function fun(){    
   console.log('我是一个函数声明式')    
}();   //unexpected token    
  
var foo = function (){    
    console.log('我是一个函数表达式')    
}();   //我是一个函数表达式    
  
```  
  
4. 自执行函数即使带有函数名，它里面的函数还是属于函数表达式。    
  
```javascript    
(function fun(){    
    console.log('我是一个函数表达式')    
})()  //我是一个函数表达式    
```    
  
因为函数只是整个自执行函数的一部分。  
  
  
  
  
  
# 如何把一个对象变成可迭代对象？  
可迭代对象（Iterable object）是数组的泛化，这个概念是在说任何对象都可以被定制为可在 `for..of` 循环中使用的对象。  
  
也就是说，可以应用 `for..of` 的对象被称为 `可迭代对象`。  
  
## 迭代器  
  
在 JavaScript 中，**迭代器**是一个对象，它定义一个序列，并在终止时可能返回一个返回值。  
  
更具体地说，迭代器是通过使用 `next()` 方法实现 `Iterator protocol` 的任何一个对象，该方法返回具有两个属性的对象：   
  
* `value`，这是序列中的 `next` 值  
* `done`，如果已经迭代到序列中的最后一个值，则它为 `true`   
  
如果 `value` 和 `done` 一起存在，则它是迭代器的返回值。  
  
一旦创建，迭代器对象可以通过重复调用 `next() `显式地迭代。  
  
迭代一个迭代器被称为消耗了这个迭代器，因为它通常只能执行一次。  
  
在产生终止值之后，对 `next()` 的额外调用应该继续返回 `{done: true}`。  
  
Javascript 中最常见的迭代器是 Array 迭代器，它只是按顺序返回关联数组中的每个值。  
  
虽然很容易想象所有迭代器都可以表示为数组，但事实并非如此。数组必须完整分配，但迭代器仅在必要时使用，因此可以表示无限大小的序列，例如 0 和无穷大之间的整数范围。  
  
这是一个可以做到这一点的例子。它允许创建一个简单的范围迭代器，它定义了从开始（包括）到结束（独占）间隔步长的整数序列。它的最终返回值是它创建的序列的大小，由变量 iterationCount 跟踪。  
  
```js  
let index = 0  
const bears = ['ice', 'panda', 'grizzly']  
  
let iterator = {  
  next() {  
    if (index < bears.length) {  
      return { done: false, value: bears[index++] }  
    }  
  
    return { done: true, value: undefined }  
  }  
}  
  
console.log(iterator.next()) //{ done: false, value: 'ice' }  
console.log(iterator.next()) //{ done: false, value: 'panda' }  
console.log(iterator.next()) //{ done: false, value: 'grizzly' }  
console.log(iterator.next()) //{ done: true, value: undefined }  
```  
  
## 实现可迭代对象  
  
如果一个对象拥有 `[Symbol.iterator]` 方法，并且该方法返回一个迭代器对象，这样的对象即可称为`可迭代对象`。  
  
```js  
let info = {  
  bears: ['ice', 'panda', 'grizzly'],  
  [Symbol.iterator]: function() {  
    let index = 0  
    let _iterator = {  
       //这里一定要箭头函数，或者手动保存上层作用域的this  
       next: () => {  
        if (index < this.bears.length) {  
          return { done: false, value: this.bears[index++] }  
        }  
    
        return { done: true, value: undefined }  
      }  
    }  
  
    return _iterator  
  }  
}  
  
let iter = info[Symbol.iterator]()  
console.log(iter.next())  
console.log(iter.next())  
console.log(iter.next())  
console.log(iter.next())  
  
//符合可迭代对象协议 就可以利用 for of 遍历  
for (let bear of info) {  
  console.log(bear)  
}  
//ice panda grizzly  
```  
# 说说你对“立即执行函数”的理解  
  
什么是立即执行函数？  
  
JS立即执行函数模式是一种语法，可以让你的函数在定义后立即被执行，这种模式本质上就是函数表达式（命名的或者匿名的），在创建后立即执行。  
  
**立即执行函数的两种常见写法**：  
  
* 匿名函数包裹在一个括号运算符中，后面跟一个小括号  
  
```js  
(function(){  
    //...  
})()  
```  
  
* 匿名函数后面跟一个小括号，整个包裹在一个括号运算符中  
  
```js  
(function(){  
    //...  
}())  
```  
  
()，！，+，-，=等运算符都能起到立即执行的作用，这些运算符的作用就是将匿名函数或函数声明转换为函数表达式。  
  
注意：  
  
* 函数体后面要有小括号()  
* 函数体必须是函数表达式而不能是函数声明  
  
例：  
  
```js  
(function (test) {    //使用()运算符,输出123  
    console.log(test);  
})(123);  
  
(function (test) {    //使用()运算符,输出123  
    console.log(test);  
}(123));  
  
!function (test) {    //使用!运算符,输出123  
    console.log(test);  
}(123);  
var fn = function (test) {  //使用=运算符,输出123  
    console.log(test);  
}(123);  
```  
  
**好处**：  
  
* 不必为函数命名，避免了污染全局变量  
* 立即执行函数内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量  
* 封装变量  
  
总之：立即执行函数会形成一个单独的作用域，可以封装一些临时变量或者局部变量，避免污染全局变量。  
# Vue项目如何进行部署？是否有遇到部署服务器后刷新404问题？  
## 一、如何部署  
  
前后端分离开发模式下，前后端是独立布署的，前端只需要将最后的构建物上传至目标服务器的`web`容器指定的静态目录下即可  
  
我们知道`vue`项目在构建后，是生成一系列的静态文件  
  
  
![](https://imgkr2.cn-bj.ufileos.com/b9d13e56-f859-4b4b-a9da-a703a34c2f5d.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=m1qDXRSFHrfXlnAtAlVhjoLKP70%253D&Expires=1609927181)  
  
  
常规布署我们只需要将这个目录上传至目标服务器即可  
  
```bash  
// scp 上传 user为主机登录用户，host为主机外网ip, xx为web容器静态资源路径  
scp dist.zip user@host:/xx/xx/xx  
```  
  
让`web`容器跑起来，以`nginx`为例  
  
```bash  
server {  
  listen  80;  
  server_name  www.xxx.com;  
  
  location / {  
    index  /data/dist/index.html;  
  }  
}  
```  
配置完成记得重启`nginx`  
```bash  
// 检查配置是否正确  
nginx -t   
  
// 平滑重启  
nginx -s reload  
```  
  
操作完后就可以在浏览器输入域名进行访问了  
  
当然上面只是提到最简单也是最直接的一种布署方式  
  
什么自动化，镜像，容器，流水线布署，本质也是将这套逻辑抽象，隔离，用程序来代替重复性的劳动，本文不展开  
  
## 二、404问题  
  
这是一个经典的问题，相信很多同学都有遇到过，那么你知道其真正的原因吗？  
  
我们先还原一下场景：  
  
- `vue`项目在本地时运行正常，但部署到服务器中，刷新页面，出现了404错误  
  
先定位一下，HTTP 404 错误意味着链接指向的资源不存在  
  
问题在于为什么不存在？且为什么只有`history`模式下会出现这个问题？  
  
### 为什么history模式下有问题  
  
`Vue`是属于单页应用（single-page application）  
  
而`SPA`是一种网络应用程序或网站的模型，所有用户交互是通过动态重写当前页面，前面我们也看到了，不管我们应用有多少页面，构建物都只会产出一个`index.html`  
  
现在，我们回头来看一下我们的`nginx`配置  
  
```js  
server {  
  listen  80;  
  server_name  www.xxx.com;  
  
  location / {  
    index  /data/dist/index.html;  
  }  
}  
```  
  
可以根据 `nginx` 配置得出，当我们在地址栏输入 `www.xxx.com` 时，这时会打开我们 `dist` 目录下的 `index.html` 文件，然后我们在跳转路由进入到 `www.xxx.com/login`  
  
关键在这里，当我们在 `website.com/login` 页执行刷新操作，`nginx location` 是没有相关配置的，所以就会出现 404 的情况  
  
  
### 为什么hash模式下没有问题  
  
`router hash` 模式我们都知道是用符号#表示的，如  `website.com/#/login`, `hash` 的值为 `#/login`  
  
它的特点在于：`hash` 虽然出现在 `URL` 中，但不会被包括在 `HTTP` 请求中，对服务端完全没有影响，因此改变 `hash` 不会重新加载页面  
  
`hash` 模式下，仅 `hash` 符号之前的内容会被包含在请求中，如 `website.com/#/login` 只有 `website.com` 会被包含在请求中 ，因此对于服务端来说，即使没有配置`location`，也不会返回404错误  
  
  
  
## 解决方案  
  
看到这里我相信大部分同学都能想到怎么解决问题了，  
  
产生问题的本质是因为我们的路由是通过JS来执行视图切换的，  
  
当我们进入到子路由时刷新页面，`web`容器没有相对应的页面此时会出现404  
  
所以我们只需要配置将任意页面都重定向到 `index.html`，把路由交由前端处理  
  
对`nginx`配置文件`.conf`修改，添加`try_files $uri $uri/ /index.html;`  
  
```bash  
server {  
  listen  80;  
  server_name  www.xxx.com;  
  
  location / {  
    index  /data/dist/index.html;  
    try_files $uri $uri/ /index.html;  
  }  
}  
```  
  
修改完配置文件后记得配置的更新  
  
```bash  
nginx -s reload  
```  
  
这么做以后，你的服务器就不再返回 404 错误页面，因为对于所有路径都会返回 `index.html` 文件  
  
为了避免这种情况，你应该在 `Vue` 应用里面覆盖所有的路由情况，然后在给出一个 404 页面  
  
```js  
const router = new VueRouter({  
  mode: 'history',  
  routes: [  
    { path: '*', component: NotFoundComponent }  
  ]  
})  
```  
  
关于后端配置方案还有：`Apache`、`nodejs`等，思想是一致的，这里就不展开述说了  
  
# ES6中数组新增了哪些扩展?  
  
 ![](https://static.vue-js.com/a156b8d0-53c5-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、扩展运算符的应用  
  
ES6通过扩展元素符`...`，好比 `rest` 参数的逆运算，将一个数组转为用逗号分隔的参数序列  
  
```js  
console.log(...[1, 2, 3])  
// 1 2 3  
  
console.log(1, ...[2, 3, 4], 5)  
// 1 2 3 4 5  
  
[...document.querySelectorAll('div')]  
// [<div>, <div>, <div>]  
```  
  
主要用于函数调用的时候，将一个数组变为参数序列  
  
```js  
function push(array, ...items) {  
  array.push(...items);  
}  
  
function add(x, y) {  
  return x + y;  
}  
  
const numbers = [4, 38];  
add(...numbers) // 42  
```  
  
可以将某些数据结构转为数组  
  
```js  
[...document.querySelectorAll('div')]  
```  
  
能够更简单实现数组复制  
  
```js  
const a1 = [1, 2];  
const [...a2] = a1;  
// [1,2]  
```  
  
数组的合并也更为简洁了  
  
```js  
const arr1 = ['a', 'b'];  
const arr2 = ['c'];  
const arr3 = ['d', 'e'];  
[...arr1, ...arr2, ...arr3]  
// [ 'a', 'b', 'c', 'd', 'e' ]  
```  
  
注意：通过扩展运算符实现的是浅拷贝，修改了引用指向的值，会同步反映到新数组  
  
下面看个例子就清楚多了  
  
```js  
const arr1 = ['a', 'b', [1, 2]];  
const arr2 = ['c'];  
const arr3 = [...arr1, ...arr2]  
arr1[2][0] = 9999 // 修改arr1里面数组成员值  
console.log(arr3) // 影响到arr3,['a','b',[9999,2],'c']  
```  
  
扩展运算符可以与解构赋值结合起来，用于生成数组  
  
```js  
const [first, ...rest] = [1, 2, 3, 4, 5];  
first // 1  
rest  // [2, 3, 4, 5]  
  
const [first, ...rest] = [];  
first // undefined  
rest  // []  
  
const [first, ...rest] = ["foo"];  
first  // "foo"  
rest   // []  
```  
  
如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错  
  
```js  
const [...butLast, last] = [1, 2, 3, 4, 5];  
// 报错  
  
const [first, ...middle, last] = [1, 2, 3, 4, 5];  
// 报错  
```  
  
可以将字符串转为真正的数组  
  
```javascript  
[...'hello']  
// [ "h", "e", "l", "l", "o" ]  
```  
  
定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组  
  
```js  
let nodeList = document.querySelectorAll('div');  
let array = [...nodeList];  
  
let map = new Map([  
  [1, 'one'],  
  [2, 'two'],  
  [3, 'three'],  
]);  
  
let arr = [...map.keys()]; // [1, 2, 3]  
```  
  
如果对没有 Iterator 接口的对象，使用扩展运算符，将会报错  
  
```javascript  
const obj = {a: 1, b: 2};  
let arr = [...obj]; // TypeError: Cannot spread non-iterable object  
```  
  
  
  
## 二、构造函数新增的方法  
  
关于构造函数，数组新增的方法有如下：  
  
- Array.from()  
- Array.of()  
  
### Array.from()  
  
将两类对象转为真正的数组：类似数组的对象和可遍历`（iterable）`的对象（包括 `ES6` 新增的数据结构 `Set` 和 `Map`）  
  
```js  
let arrayLike = {  
    '0': 'a',  
    '1': 'b',  
    '2': 'c',  
    length: 3  
};  
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']  
```  
  
还可以接受第二个参数，用来对每个元素进行处理，将处理后的值放入返回的数组  
  
```js  
Array.from([1, 2, 3], (x) => x * x)  
// [1, 4, 9]  
```  
  
  
  
### Array.of()  
  
用于将一组值，转换为数组  
  
```js  
Array.of(3, 11, 8) // [3,11,8]  
```  
  
没有参数的时候，返回一个空数组  
  
当参数只有一个的时候，实际上是指定数组的长度  
  
参数个数不少于 2 个时，`Array()`才会返回由参数组成的新数组  
  
```js  
Array() // []  
Array(3) // [, , ,]  
Array(3, 11, 8) // [3, 11, 8]  
```  
  
  
  
### 三、实例对象新增的方法  
  
关于数组实例对象新增的方法有如下：  
  
- copyWithin()  
- find()、findIndex()  
- fill()  
- entries()，keys()，values()  
- includes()  
- flat()，flatMap()  
  
### copyWithin()  
  
将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组  
  
参数如下：  
  
- target（必需）：从该位置开始替换数据。如果为负值，表示倒数。  
- start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。  
- end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。  
  
```js  
[1, 2, 3, 4, 5].copyWithin(0, 3) // 将从 3 号位直到数组结束的成员（4 和 5），复制到从 0 号位开始的位置，结果覆盖了原来的 1 和 2  
// [4, 5, 3, 4, 5]   
```  
  
  
  
### find()、findIndex()  
  
`find()`用于找出第一个符合条件的数组成员  
  
参数是一个回调函数，接受三个参数依次为当前的值、当前的位置和原数组  
  
```js  
[1, 5, 10, 15].find(function(value, index, arr) {  
  return value > 9;  
}) // 10  
```  
  
`findIndex`返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回`-1`  
  
```javascript  
[1, 5, 10, 15].findIndex(function(value, index, arr) {  
  return value > 9;  
}) // 2  
```  
  
这两个方法都可以接受第二个参数，用来绑定回调函数的`this`对象。  
  
```js  
function f(v){  
  return v > this.age;  
}  
let person = {name: 'John', age: 20};  
[10, 12, 26, 15].find(f, person);    // 26  
```  
  
  
  
### fill()  
  
使用给定值，填充一个数组  
  
```javascript  
['a', 'b', 'c'].fill(7)  
// [7, 7, 7]  
  
new Array(3).fill(7)  
// [7, 7, 7]  
```  
  
还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置  
  
```js  
['a', 'b', 'c'].fill(7, 1, 2)  
// ['a', 7, 'c']  
```  
  
注意，如果填充的类型为对象，则是浅拷贝  
  
  
  
### entries()，keys()，values()  
  
`keys()`是对键名的遍历、`values()`是对键值的遍历，`entries()`是对键值对的遍历  
  
```js  
or (let index of ['a', 'b'].keys()) {  
  console.log(index);  
}  
// 0  
// 1  
  
for (let elem of ['a', 'b'].values()) {  
  console.log(elem);  
}  
// 'a'  
// 'b'  
  
for (let [index, elem] of ['a', 'b'].entries()) {  
  console.log(index, elem);  
}  
// 0 "a"  
```  
  
  
  
### includes()  
  
用于判断数组是否包含给定的值  
  
```js  
[1, 2, 3].includes(2)     // true  
[1, 2, 3].includes(4)     // false  
[1, 2, NaN].includes(NaN) // true  
```  
  
方法的第二个参数表示搜索的起始位置，默认为`0`  
  
参数为负数则表示倒数的位置  
  
```js  
[1, 2, 3].includes(3, 3);  // false  
[1, 2, 3].includes(3, -1); // true  
```  
  
  
  
### flat()，flatMap()  
  
将数组扁平化处理，返回一个新数组，对原数据没有影响  
  
```js  
[1, 2, [3, 4]].flat()  
// [1, 2, 3, 4]  
```  
  
`flat()`默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将`flat()`方法的参数写成一个整数，表示想要拉平的层数，默认为1  
  
```js  
[1, 2, [3, [4, 5]]].flat()  
// [1, 2, 3, [4, 5]]  
  
[1, 2, [3, [4, 5]]].flat(2)  
// [1, 2, 3, 4, 5]  
```  
  
`flatMap()`方法对原数组的每个成员执行一个函数相当于执行`Array.prototype.map()`，然后对返回值组成的数组执行`flat()`方法。该方法返回一个新数组，不改变原数组  
  
```js  
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()  
[2, 3, 4].flatMap((x) => [x, x * 2])  
// [2, 4, 3, 6, 4, 8]  
```  
  
`flatMap()`方法还可以有第二个参数，用来绑定遍历函数里面的`this`  
  
  
  
### 四、数组的空位  
  
数组的空位指，数组的某一个位置没有任何值  
  
ES6 则是明确将空位转为`undefined`，包括`Array.from`、扩展运算符、`copyWithin()`、`fill()`、`entries()`、`keys()`、`values()`、`find()`和`findIndex()`  
  
建议大家在日常书写中，避免出现空位  
  
  
  
  
  
### 五、排序稳定性  
  
将`sort()`默认设置为稳定的排序算法  
  
```js  
const arr = [  
  'peach',  
  'straw',  
  'apple',  
  'spork'  
];  
  
const stableSorting = (s1, s2) => {  
  if (s1[0] < s2[0]) return -1;  
  return 1;  
};  
  
arr.sort(stableSorting)  
// ["apple", "peach", "straw", "spork"]  
```  
  
排序结果中，`straw`在`spork`的前面，跟原始顺序一致  
  
  
# bind、call、apply 有什么区别？如何实现一个bind?  
![](https://static.vue-js.com/a900e460-7be4-11eb-ab90-d9ae814b240d.png)  
  
  
  
## 一、作用  
  
`call `、`apply `、`bind `作用是改变函数执行时的上下文，简而言之就是改变函数运行时的`this`指向  
  
那么什么情况下需要改变`this`的指向呢？下面举个例子  
  
```js  
const name="lucy";  
const obj={  
    name:"martin",  
    say:function () {  
        console.log(this.name);  
    }  
};  
obj.say(); //martin，this指向obj对象  
setTimeout(obj.say,0); //lucy，this指向window对象  
```  
  
从上面可以看到，正常情况`say`方法输出`martin`  
  
但是我们把`say`放在`setTimeout`方法中，在定时器中是作为回调函数来执行的，因此回到主栈执行时是在全局执行上下文的环境中执行的，这时候`this`指向`window`，所以输出`luck`  
  
我们实际需要的是`this`指向`obj`对象，这时候就需要该改变`this`指向了  
  
```js  
setTimeout(obj.say.bind(obj),0); //martin，this指向obj对象  
```  
  
  
  
## 二、区别  
  
下面再来看看`apply`、`call`、`bind`的使用  
  
### apply  
  
`apply`接受两个参数，第一个参数是`this`的指向，第二个参数是函数接受的参数，以数组的形式传入  
  
改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次  
  
```js  
function fn(...args){  
    console.log(this,args);  
}  
let obj = {  
    myname:"张三"  
}  
  
fn.apply(obj,[1,2]); // this会变成传入的obj，传入的参数必须是一个数组；  
fn(1,2) // this指向window  
```  
  
当第一个参数为`null`、`undefined`的时候，默认指向`window`(在浏览器中)  
  
```js  
fn.apply(null,[1,2]); // this指向window  
fn.apply(undefined,[1,2]); // this指向window  
```  
  
  
  
### call  
  
`call`方法的第一个参数也是`this`的指向，后面传入的是一个参数列表  
  
跟`apply`一样，改变`this`指向后原函数会立即执行，且此方法只是临时改变`this`指向一次  
  
```js  
function fn(...args){  
    console.log(this,args);  
}  
let obj = {  
    myname:"张三"  
}  
  
fn.call(obj,1,2); // this会变成传入的obj，传入的参数必须是一个数组；  
fn(1,2) // this指向window  
```  
  
同样的，当第一个参数为`null`、`undefined`的时候，默认指向`window`(在浏览器中)  
  
```js  
fn.call(null,1,2]); // this指向window  
fn.call(undefined,1,2); // this指向window  
```  
  
  
  
### bind  
  
bind方法和call很相似，第一参数也是`this`的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入)  
  
改变`this`指向后不会立即执行，而是返回一个永久改变`this`指向的函数  
  
```js  
function fn(...args){  
    console.log(this,args);  
}  
let obj = {  
    myname:"张三"  
}  
  
const bindFn = fn.bind(obj); // this 也会变成传入的obj ，bind不是立即执行需要执行一次  
bindFn(1,2) // this指向obj  
fn(1,2) // this指向window  
```  
  
  
### 小结  
  
从上面可以看到，`apply`、`call`、`bind`三者的区别在于：  
  
- 三者都可以改变函数的`this`对象指向  
- 三者第一个参数都是`this`要指向的对象，如果如果没有这个参数或参数为`undefined`或`null`，则默认指向全局`window`  
- 三者都可以传参，但是`apply`是数组，而`call`是参数列表，且`apply`和`call`是一次性传入参数，而`bind`可以分为多次传入  
- `bind `是返回绑定this之后的函数，`apply `、`call` 则是立即执行   
  
  
  
## 三、实现  
  
实现`bind`的步骤，我们可以分解成为三部分：  
  
- 修改`this`指向  
- 动态传递参数  
  
```js  
// 方式一：只在bind中传递函数参数  
fn.bind(obj,1,2)()  
  
// 方式二：在bind中传递函数参数，也在返回函数中传递参数  
fn.bind(obj,1)(2)  
```  
  
- 兼容`new`关键字  
  
整体实现代码如下：  
  
```js  
Function.prototype.myBind = function (context) {  
    // 判断调用对象是否为函数  
    if (typeof this !== "function") {  
        throw new TypeError("Error");  
    }  
  
    // 获取参数  
    const args = [...arguments].slice(1),  
          fn = this;  
  
    return function Fn() {  
  
        // 根据调用方式，传入不同绑定值  
        return fn.apply(this instanceof Fn ? new fn(...arguments) : context, args.concat(...arguments));   
    }  
}  
```  
# 说说你对模块化方案的理解，比如 CommonJS、AMD、CMD、ES Module 分别是什么？  
 `时间轴：CommonJS --> AMD --> CMD --> ES Module`  
  
### CommonJS  
  
* 常用于：`服务器端`，`node`，`webpack`  
* 特点：`同步/运行时加载`，`磁盘读取速度快`  
* 语法：    
  
```js  
// 1. 导出：通过module.exports或exports来暴露模块    
module.exports = {    
  attr1,    
  attr2    
}    
exports.attr = xx    
```  
  
**注意**    
不可以`exports = xxx`，这样写会无效，因为更改了exports的地址，而 `exports` 是 `module.exports` 的引用指向的是同一个内存，模块最后导出的是 `module.exports`    
  
```js  
// 2. 引用：require('x')    
const xx = require('xx') // 整体重命名    
const { attr } = require('xx') // 解构某一个导出  
```  
  
### AMD  
  
* 常用于：不常用，`CommonJs的浏览器端实现`  
* 特点：    
   * `异步加载`：因为面向浏览器端，为了不影响渲染肯定是异步加载    
   * `依赖前置`：所有的依赖必须写在最初的依赖数组中，速度快，但是会浪费资源，预先加载了所有依赖不管你是否用到  
* 语法：    
  
```js  
// 1. 导出：通过define来定义模块    
// 如果该模块还依赖其他模块，则将模块的路径填入第一个参数的数组中    
define(['x'], function(x){    
  function foo(){    
      return x.fn() + 1    
  }    
  return {    
      foo: foo    
  };    
});    
// 2. 引用    
require(['a'], function (a){    
  a.foo()    
});  
```  
  
### CMD  
  
* 常用于：不常用，`根据CommonJs和AMD实现，优化了加载方式`  
* 特点：    
   * `异步加载`    
   * `按需加载/依赖就近`：用到了再引用依赖，方便了开发，缺点是速度和性能较差  
* 语法：    
  
```js  
// 1. 导出：通过define来定义模块    
// 如果该模块还依赖其他模块，在用到的地方引用即可    
define(function(){    
  function foo(){    
      var x = require('x')    
      return x.fn() + 1    
  }    
  return {    
      foo: foo    
  };    
});    
// 2. 引用    
var x = require('a');    
a.foo();  
```  
  
### ES module  
  
* 常用于：`目前浏览器端的默认标准`  
* 特点：`静态编译：` 在编译的时候就能确定依赖关系，以及输入和输出的变量  
* 语法：    
  
```js  
// 1. 导出：通过export 或 export default 输出模块    
// 写法1: 边声明，边导出    
export var m = 1;    
export function m() {};    
export class M {};    
  
// 写法2：导出一个接口 export {}，形似导出对象但不是, 本质上是引用集合，最常用的导出方法    
  
export {    
  attr1,    
  attr2    
}    
  
// 写法3：默认导出    
  
export default fn    
  
// 2. 引用    
import { x } from 'test.js' // 导出模块中对应的值，必须知道值在模块中导出时的名字    
import { x as myx } from 'test.js' // 改名字    
import x from 'test.js' // 默认导出的引用方式    
```  
  
**注意**    
  
 1. `export default`在同一个文件中只可存在一个（一个模块只能有一个默认输出）    
 2. 一个模块中可以同时使用export default 和 export    
   
 ```js  
 // 模块 test.js  
 var info = {    
   name: 'name',    
   age: 18    
 }    
 export default info    
 export var name= '海洋饼干'    
 export var age = 18    
   
 // 引用    
 import person, {name, age as myAge} from 'test.js'    
 console.log(person); // { name: 'name', age: 18 }    
 console.log(name+ '=' + myAge); // 海洋饼干=18  
 ```  
# 说说你对闭包的理解，以及闭包使用场景  
![](https://static.vue-js.com/c141a030-6a7a-11eb-ab90-d9ae814b240d.png)  
  
## 一、是什么  
  
一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）  
  
也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域  
  
在 `JavaScript `中，每当创建一个函数，闭包就会在函数创建的同时被创建出来，作为函数内部与外部连接起来的一座桥梁  
  
下面给出一个简单的例子  
  
```js  
function init() {  
    var name = "Mozilla"; // name 是一个被 init 创建的局部变量  
    function displayName() { // displayName() 是内部函数，一个闭包  
        alert(name); // 使用了父函数中声明的变量  
    }  
    displayName();  
}  
init();  
```  
  
`displayName()` 没有自己的局部变量。然而，由于闭包的特性，它可以访问到外部函数的变量  
  
  
  
## 二、使用场景  
  
任何闭包的使用场景都离不开这两点：  
  
- 创建私有变量  
- 延长变量的生命周期  
  
> 一般函数的词法环境在函数返回后就被销毁，但是闭包会保存对创建时所在词法环境的引用，即便创建时所在的执行上下文被销毁，但创建时所在词法环境依然存在，以达到延长变量的生命周期的目的  
  
  
下面举个例子：  
  
在页面上添加一些可以调整字号的按钮  
  
```js  
function makeSizer(size) {  
  return function() {  
    document.body.style.fontSize = size + 'px';  
  };  
}  
  
var size12 = makeSizer(12);  
var size14 = makeSizer(14);  
var size16 = makeSizer(16);  
  
document.getElementById('size-12').onclick = size12;  
document.getElementById('size-14').onclick = size14;  
document.getElementById('size-16').onclick = size16;  
```  
  
  
  
### 柯里化函数  
  
柯里化的目的在于避免频繁调用具有相同参数函数的同时，又能够轻松的重用  
  
```js  
// 假设我们有一个求长方形面积的函数  
function getArea(width, height) {  
    return width * height  
}  
// 如果我们碰到的长方形的宽老是10  
const area1 = getArea(10, 20)  
const area2 = getArea(10, 30)  
const area3 = getArea(10, 40)  
  
// 我们可以使用闭包柯里化这个计算面积的函数  
function getArea(width) {  
    return height => {  
        return width * height  
    }  
}  
  
const getTenWidthArea = getArea(10)  
// 之后碰到宽度为10的长方形就可以这样计算面积  
const area1 = getTenWidthArea(20)  
  
// 而且如果遇到宽度偶尔变化也可以轻松复用  
const getTwentyWidthArea = getArea(20)  
```  
  
  
  
### 使用闭包模拟私有方法  
  
在`JavaScript`中，没有支持声明私有变量，但我们可以使用闭包来模拟私有方法  
  
  
下面举个例子：  
  
```js  
var Counter = function() {  
  var privateCounter = 0;  
  function changeBy(val) {  
    privateCounter += val;  
  }  
  return {  
    increment: function() {  
      changeBy(1);  
    },  
    decrement: function() {  
      changeBy(-1);  
    },  
    value: function() {  
      return privateCounter;  
    }  
  }  
};  
  
var Counter1 = Counter();  
var Counter2 = Counter();  
console.log(Counter1.value()); /* logs 0 */  
Counter1.increment();  
Counter1.increment();  
console.log(Counter1.value()); /* logs 2 */  
Counter1.decrement();  
console.log(Counter1.value()); /* logs 1 */  
console.log(Counter2.value()); /* logs 0 */  
```  
  
上述通过使用闭包来定义公共函数，并令其可以访问私有函数和变量，这种方式也叫模块方式  
  
两个计数器 `Counter1` 和 `Counter2` 是维护它们各自的独立性的，每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境，不会影响另一个闭包中的变量  
  
  
  
### 其他  
  
例如计数器、延迟调用、回调等闭包的应用，其核心思想还是创建私有变量和延长变量的生命周期  
  
  
  
## 三、注意事项  
  
如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响  
  
例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。  
  
原因在于每个对象的创建，方法都会被重新赋值  
  
```js  
function MyObject(name, message) {  
  this.name = name.toString();  
  this.message = message.toString();  
  this.getName = function() {  
    return this.name;  
  };  
  
  this.getMessage = function() {  
    return this.message;  
  };  
}  
```  
  
上面的代码中，我们并没有利用到闭包的好处，因此可以避免使用闭包。修改成如下：  
  
```js  
function MyObject(name, message) {  
  this.name = name.toString();  
  this.message = message.toString();  
}  
MyObject.prototype.getName = function() {  
  return this.name;  
};  
MyObject.prototype.getMessage = function() {  
  return this.message;  
};  
```  
# 谈谈你对浏览器中进程和线程的理解  
## 浏览器是多进程的  
  
它主要包括以下进程：  
  
* Browser 进程：浏览器的主进程，唯一，负责创建和销毁其它进程、网络资源的下载与管理、浏览器界面的展示、前进后退等。  
* GPU 进程：用于 3D 绘制等，最多一个。  
* 第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件时才创建。  
* 浏览器渲染进程（浏览器内核）：内部是多线程的，每打开一个新网页就会创建一个进程，主要用于页面渲染，脚本执行，事件处理等。  
  
## 渲染进程（浏览器内核）  
  
浏览器的渲染进程是多线程的，页面的渲染，JavaScript 的执行，事件的循环，都在这个进程内进行：  
  
* GUI 渲染线程：负责渲染浏览器界面，当界面需要重绘（Repaint）或由于某种操作引发回流(Reflow)时，该线程就会执行。  
* JavaScript 引擎线程：也称为 JavaScript 内核，负责处理 Javascript 脚本程序、解析 Javascript 脚本、运行代码等。（例如 V8 引擎）  
* 事件触发线程：用来控制浏览器事件循环，注意这不归 JavaScript 引擎线程管，当事件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JavaScript 引擎的处理。  
* 定时触发器线程：传说中的 setInterval 与 setTimeout 所在线程，注意，W3C 在 HTML 标准中规定，规定要求 setTimeout 中低于 4ms 的时间间隔算为 4ms 。（PS：最小间隔4ms的说法是不准确的，或者说是有前提条件的，请看HTML标准：`11. If nesting level is greater than 5, and timeout is less than 4, then set timeout to 4.`，也就是说，循环嵌套超过5层的，并且延迟不到4ms，才会变成4ms）  
* 异步 http 请求线程：在 XMLHttpRequest 连接后通过浏览器新开一个线程请求，将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入事件队列中。再由 JavaScript 引擎执行。  
  
注意，GUI 渲染线程与 JavaScript 引擎线程是互斥的，当 JavaScript 引擎执行时 GUI 线程会被挂起（相当于被冻结了），GUI 更新会被保存在一个队列中等到 JavaScript 引擎空闲时立即被执行。所以如果 JavaScript 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。  
  
## 单线程的 JavaScript  
  
所谓单线程，是指在 JavaScript 引擎中负责解释和执行 JavaScript 代码的线程唯一，同一时间上只能执行一件任务。  
# 怎么解决canvas中获取跨域图片数据的问题？  
## 背景  
  
在一张图片添加相关文字，然后转化为base64数据，上传至服务器。当代码上线写完部署到测试环境，控制台报出如下错题：  
  
```  
Uncaught (in promise) DOMException: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported  
```  
  
这是因为页面在请求图片时产生跨域情况，canvas认为该图片数据为污染的数据，是不安全的数据，无法导出base64数据。  
  
## 为什么 canvas 认为跨域图片数据为 污染的数据  
  
当请求跨域图片数据，而未满足跨域请求资源的条件时。如果canvas使用未经跨域允许的图片的原始数据，这些是不可信的数据，可能会暴露页面的数据。  
  
## 请求图片资源 - 同域  
  
Request Headers带有cookie。图片数据是被canvas信任的。  
  
## 请求图片资源 - 跨域  
  
默认情况下，直接请求跨域图片。因为不符合跨域请求资源的条件，图片数据是不被canvas信任的。  
  
为了解决图片跨域资源共享的问题， <img> 元素提供了支持的属性：crossOrigin，该属性一共有两个值可选：anonymous 和 use-credentials，下面列举了两者的使用场景，以及满足的条件。  
  
| |anonymous|use-credentials|  
|--|--|--|  
|用途|匿名请求跨域图片资源，不会发送证书（比如cookie等）|具名请求跨域图片资源，会携带证书数据|  
|Request Headers|	origin	|origin、cookie|  
|Response headers|	Access-Control-Allow-Origin|	Access-Control-Allow-Origin、Access-Control-Allow-Credentials|  
|所需条件|	Access-Control-Allow-Origin 字段值需要包含请求域。	|Access-Control-Allow-Origin 字段值需要包含请求域，且不能为通配符 *。Access-Control-Allow-Credentials 字段值需要为 true，表明允许请求发送证书数据。|  
  
## 代码示例  
  
```js  
// page origin is https://a.com  
  
const canvas = document.createElement('canvas');  
const context = canvas.getContext('2d');  
  
const img = new Image();  
img.crossOrigin = 'anonymous';  
img.onload = function () {  
   context.drawImage(this, 0, 0);  
   context.getImageData(0, 0, img.width, img.height);  
};  
img.src = 'https://b.com/a.png';  
```  
  
另外，跨域图片能正常裁剪（图片未转化成base64），应该满足三个条件：  
  
* img元素中设置crossorigin属性  
* 图片允许跨域，设置响应头Access-Control-Allow-Origin  
* 使用js方式请求图片资源, 需要避免使用缓存，设置url后加上时间戳，或者http头设置Cache-Control为no-cache  
  
主要原因是：  
  
* 如果使用跨域的资源画到canvas中，并且资源没有使用CORS去请求，canvas会被认为是被污染了, canvas可以正常展示，但是没办法使用toDataURL()或者toBlob()导出数据，见Allowing cross-origin use of images and canvas。 所以通过在img标签上设置crossorigin，启用CORS，属性值为anonymous，在CORS请求时不会发送认证信息,见HTML attribute: crossorigin。  
* 在启用CORS请求跨域资源时，资源必须允许跨域，才能正常返回，最简单的方式设置响应头Access-Control-Allow-Origin  
* 图片已经通过img标签加载过，浏览器默认会缓存下来，下次使用js方式再去请求，直接返回缓存的图片，如果缓存中的图片不是通过CORS 请求或者响应头中不存在Access-Control-Allow-Origin，都会导致报错。  
  
  
# 说说你对 Iterator, Generator 和 Async/Await 的理解  
这里重点理解他们三者分别是什么，有什么区别，以及分别适用什么场景  
  
# Iterator  
  
Iterator是最简单最好理解的。  
  
简单的说，我们常用的 `for of` 循环，都是通过调用被循环对象的一个特殊函数 `Iterator` 来实现的，但是以前这个函数是隐藏的我们无法访问， 从 `Symbol` 引入之后，我们就可以通过 `Symbol.iterator` 来直接读写这个特殊函数。  
  
对于循环语句来说，他并不关心被循环的对象到底是什么，他只负责调用 `data[Symbol.iterator]` 函数，然后根据返回值来进行循环。所以任何对象只要提供了标准的 Iterator 接口即可被循环，比如我们现在来创造一个自定义的数据：  
  
```  
var students = {}  
students[Symbol.iterator] = function() {  
  let index = 1;  
  return { next() {  
    return {done: index>100, value: index++} }  
  }  
}  
  
for(var i of students) { console.log(i); }  
```  
  
除了这种方式外，我们也可以通过 `Generator` 来实现一个 `Iterator` 接口。  
  
# Generator 基本语法  
  
Generator 是ES6引入的新语法，Generator是一个可以暂停和继续执行的函数。简单的用法，可以当做一个Iterator来用，进行一些遍历操作。复杂一些的用法，他可以在内部保存一些状态，成为一个状态机。  
  
Generator 基本语法包含两部分：  
* 函数名前要加一个星号  
* 函数内部用 `yield` 关键字返回值  
  
下面是一个简单的示例：  
  
```js  
function * count() {  
  yield 1  
  yield 2  
  return 3  
}  
var c = count()  
console.log(c.next()) // { value: 1, done: false }  
console.log(c.next()) // { value: 2, done: false }  
console.log(c.next()) // { value: 3, done: true }  
console.log(c.next()) // { value: undefined, done: true }  
```  
  
由于Generator也存在 `Symbol.iterator` 接口，所以他也可以被 `for` 循环调用：  
  
```js  
function * count() {  
  yield 1  
  yield 2  
  return 3  
}  
var c = count()  
for (i of c) console.log(i) // 1, 2  
```  
不过这里要注意一个不同点，调用 `next` 的时候能得到 `3` ，但是用 `for` 则会忽略最后的 `return` 语句。 也就是 `for` 循环会忽略 `generator` 中的 `return` 语句.  
  
另外 `yeild*` 语法可以用来在 `Generator` 中调用另一个 `Generator`，参见 [yield* MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield%2A)  
  
# Generator VS Iterator  
  
Generator 可以看做是一个更加灵活的 `Iterator` ，他们之间是可以互相替代的，但是， `Generator` 由于可以通过 `yield` 随时暂停，因此可以很方便进行流程控制和状态管理，而 `Iterator` 就可能需要你写更多的代码进行相同的操作：  
  
比如 Stack Overflow 上的这个中序遍历代码：  
  
```js  
function* traverseTree(node) {  
    if (node == null) return;  
    yield* traverseTree(node.left);  
    yield node.value;  
    yield* traverseTree(node.right);  
}  
```  
同样的功能用 `iterator` 实现就会变得麻烦很多。  
  
Generator 也是实现简单的状态机的最佳选择，因为他是在函数内部进行 `yield` 操作，因此不会丢失当前状态：  
  
```js  
function * clock () {  
  yield 'tick'  
  yield 'tock'  
}  
```  
  
同样的功能如果普通的函数，因为每次都是调用这个函数，所以函数内部并不能保存状态，因此就需要在函数外面用一个变量来保存当前状态：  
  
```js  
let tick = false  
function clock() {  
  tick = !tick  
  return tick ? 'tick' : 'tock'  
}  
```  
  
其实Babel编译 `Generator` 的时候，也是用了一个 `Context` 来保存当前状态的，可以看看Babel编译后的代码，其中的 `_context` 就是当前状态，这里通过 `_context.next` 的值来控制调用 `next` 的时候应该进入到哪一个流程：  
  
```js  
  
var _marked = /*#__PURE__*/regeneratorRuntime.mark(clock);  
  
function clock() {  
  return regeneratorRuntime.wrap(function clock$(_context) {  
    while (1) {  
      switch (_context.prev = _context.next) {  
        case 0:  
          _context.next = 2;  
          return 'tick';  
  
        case 2:  
          _context.next = 4;  
          return 'tock';  
  
        case 4:  
        case 'end':  
          return _context.stop();  
      }  
    }  
  }, _marked, this);  
}  
```  
  
当然，如果是很复杂的，非线性状态变化的状态机，我还是会倾向于用一个类来实现。  
  
# Generator 异步操作  
  
Generator 的设计，可以很方便执行异步操作，现在我们需要写一个小函数，可以取到用户信息然后打印出来，我们用generator来写就是这样的：  
  
```js  
function * fetchUser () {  
  const user = yield ajax()  
  console.log(user)  
}  
```  
但是，generator本身并不会自动进行 `next` 操作，也就是，我们如果此时这样调用并不能打印出用户信息:  
  
```js  
const f = fetchUser()  
```  
因为`Generator` 本身只是一个状态机，他需要由调用者来改变他的状态，所以我们需要额外加一段控制代码来控制 `fetchUser` 进行状态转换:  
  
```js  
  
function * fetchUser () {  
  const user = yield ajax()  
  console.log(user)  
}  
  
const f = fetchUser()  
  
// 加入的控制代码  
const result = f.next()  
result.value.then((d) => {  
  f.next(d)  
})  
```  
  
但是写了这些代码之后， `Generator` 的实现就变得非常不优雅了，如果我们内部有多个异步操作，控制代码就会变得很长。我们可以选择 co 库来帮我们做这个操作。  
  
# Async/Await  
  
我最开始接触到 Async/Await 的时候把它当成了一个 `promise` 的语法糖，但是经过我们对 `Generator` 的理解后，明白了其实他就是 `Generator` 的一个语法糖：  
  
* `async` 对应的是 `*`  
* `await` 对应的是 `yield`  
  
他只是自动帮我们进行了 `Generator` 的流程控制而已。  
  
和上面的获取用户信息实现一样的功能的话，基本语法如下：  
  
```js  
async function fetchUser() {  
  const user = await ajax()  
  console.log(user)  
}  
```  
  
因为有自动的流程控制，所以我们不用手动在ajax成功的时候手动调用 `next`。相比于 `Promise` 或者 `Generator` 的实现，代码要明显更加优雅。  
  
如果有兴趣的话，可以参考一下 `Babel` 是如何编译 `Async/Await` 的，简单的说，代码分成了两部分，一部分是编译了一个 `Generator`，另一部分是通过 promise 实现了generator的流程控制。  
  
对于如下代码：  
  
```js  
async function count () {  
  let a = await 1;  
  let b = await 2;  
  return a+b  
}  
```  
  
编译后的代码：  
  
```js  
var count = function () {  
  // 下面这部分是 generator 的一个实现  
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {  
    var a, b;  
    return regeneratorRuntime.wrap(function _callee$(_context) {  
      while (1) {  
        switch (_context.prev = _context.next) {  
          case 0:  
            _context.next = 2;  
            return 1;  
  
            // 省略...  
        }  
      }  
    }, _callee, this);  
  }));  
  
  return function count() {  
    return _ref.apply(this, arguments);  
  };  
}();  
  
// 下面这部分是用 promise 实现了流程控制。  
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }  
```  
  
所以我们可以大约这么认为： **async/await == generator + promise**  
  
# async/await 并发  
  
我们的代码在执行到await的时候会等待结果返回才执行下一行，这样如果我们有很多需要异步执行的操作就会变成一个串行的流程，可能会导致非常慢。  
  
比如如下代码，我们需要遍历获取redis中存储的100个用户的信息：  
  
```js  
const users=[]  
for (var i=0;i<ids.length;i++) {  
  users.push(await db.get(ids))  
}  
```  
由于每次数据库读取操作都要消耗时间，这个接口将会变得非常慢。如果我们把它变成一个并行的操作，将会极大提升效率：  
  
```js  
const users = await Promise.all(ids.map(async (id) => await db.get(id)))  
```  
  
# 总结  
  
* `Iterator` 是一个循环接口，任何实现了此接口的数据都可以被 `for of` 循环遍历  
* `Generator` 是一个可以暂停和继续执行的函数，他可以完全实现 `Iterator` 的功能，并且由于可以保存上下文，他非常适合实现简单的状态机。另外通过一些流程控制代码的配合，可以比较容易进行异步操作。  
* `Async/Await` 就是generator进行异步操作的语法糖。而这个语法糖反而是被使用最广泛的，比如著名的 `Koa`  
  
```js  
const singers = [  
  { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },  
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },  
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },  
  { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },  
];  
```  
# 请对以下数组，根据 `born` 的值降序排列  
`Array.prototype.sort()` 方法用原地算法对数组的元素进行排序，并返回数组。在很多排序场景下推荐使用。  
  
语法：   
  
> arr.sort([compareFunction])  
  
这道题在实现上也比较简单，我们直接看实现方法：  
  
```js  
function compare(a, b) {  
  return a.born < b.born ? 1: -1   
}  
  
singers.sort(compare);  
  
// 也可以进行简写  
singers.sort((a,b) => b.born - a.born)  
  
```  
  
  
# es5 中的类和es6中的class有什么区别？  
  
在es5中主要是通过构造函数方式和原型方式来定义一个类，在es6中我们可以通过class来定义类。  
  
## 一、class类必须new调用，不能直接执行。  
  
![image.png](https://pic.rmb.bdstatic.com/bjh/80a46bd84b6fec579111adb70ea88ad2.png)  
  
class类执行的话会报错，而es5中的类和普通函数并没有本质区别，执行肯定是ok的。  
  
## 二、class类不存在变量提升  
  
![image.png](https://pic.rmb.bdstatic.com/bjh/3e34d40c8d36b35c3149660dc9a727b6.png)  
  
![image.png](https://pic.rmb.bdstatic.com/bjh/1301f1c5a607efe29c7e407b951a50f2.png)  
  
图2报错，说明class方式没有把类的定义提升到顶部。  
  
## 三、class类无法遍历它实例原型链上的属性和方法  
  
```js  
function Foo (color) {  
    this.color = color  
}  
Foo.prototype.like = function () {  
    console.log(`like${this.color}`)  
}  
let foo = new Foo()  
  
for (let key in foo) {  
    // 原型上的like也被打印出来了  
    console.log(key)  // color、like  
}  
```  
  
```js  
class Foo {  
    constructor (color) {  
        this.color = color  
    }  
    like () {  
        console.log(`like${this.color}`)  
    }  
}  
let foo = new Foo('red')  
  
for (let key in foo) {  
    // 只打印一个color,没有打印原型链上的like  
    console.log(key)  // color  
}  
```  
  
## 四、new.target属性  
  
es6为new命令引入了一个new.target属性，它会返回new命令作用于的那个构造函数。如果不是通过new调用或Reflect.construct()调用的，new.target会返回undefined  
  
```js  
function Person(name) {  
  if (new.target === Person) {  
    this.name = name;  
  } else {  
    throw new Error('必须使用 new 命令生成实例');  
  }  
}  
  
let obj = {}  
Person.call(obj, 'red') // 此时使用非new的调用方式就会报错  
```  
  
## 五、class类有static静态方法  
  
static静态方法只能通过类调用，不会出现在实例上；另外如果静态方法包含 this 关键字，这个 this 指的是类，而不是实例。static声明的静态属性和方法都不可以被子类继承。  
  
```js  
class Foo {  
  static bar() {  
    this.baz(); // 此处的this指向类  
  }  
  static baz() {  
    console.log('hello'); // 不会出现在实例中  
  }  
  baz() {  
    console.log('world');  
  }  
}  
  
Foo.bar() // hello  
```  
# 前端怎么实现跨域请求？  
## 什么是跨域？  
  
### 1.什么是同源策略及其限制内容？  
  
同源策略是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSRF等攻击。所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。  
  
同源策略限制内容有：  
  
* Cookie、LocalStorage、IndexedDB 等存储性内容  
* DOM 节点  
* AJAX 请求发送后，结果被浏览器拦截了  
  
但是有三个标签是允许跨域加载资源：  
  
* `<img src=XXX>`  
* `<link href=XXX>`  
* `<script src=XXX>`  
  
### 2.常见跨域场景  
  
当协议、子域名、主域名、端口号中任意一个不相同时，都算作不同域。不同域之间相互请求资源，就算作“跨域”。  
  
特别说明两点：  
  
* 第一：如果是协议和端口造成的跨域问题“前台”是无能为力的。  
* 第二：在跨域问题上，仅仅是通过“URL的首部”来识别而不会根据域名对应的IP地址是否相同来判断。“URL的首部”可以理解为“协议, 域名和端口必须匹配”。  
  
跨域并不是请求发不出去，请求能发出去，服务端能收到请求并正常返回结果，只是结果被浏览器拦截了。你可能会疑问明明通过表单的方式可以发起跨域请求，为什么 Ajax 就不会?因为归根结底，跨域是为了阻止用户读取到另一个域名下的内容，Ajax 可以获取响应，浏览器认为这不安全，所以拦截了响应。但是表单并不会获取新的内容，所以可以发起跨域请求。同时也说明了跨域并不能完全阻止 CSRF，因为请求毕竟是发出去了。  
  
## 跨域有哪些方案？  
  
这里只介绍几种开发中用的比较多的，几乎用不到的比如：  
  
- document.domain + iframe：适用主域名相同，子域名不同的跨域场景  
- window.name + iframe：利用name值最长可以 2M ，并用不同页面或不同域名加载后依然存在的特性  
- location.hash + iframe：适用通过 C 页面来实现 A 页面与 B 页面通信的场景  
  
就不过多展开了  
  
### 1. **CORS**  
  
CORS 通信过程都是浏览器自动完成，需要浏览器(都支持)和服务器都支持，所以关键在**只要服务器支持，就可以跨域通信**，CORS请求分两类，`简单请求`和`非简单请求`  
  
另外CORS请求**默认不包含Cookie以及HTTP认证信息**，如果需要包含Cookie，需要满足几个条件：  
- 服务器指定了 `Access-Control-Allow-Credentials: true`  
- 开发者须在请求中打开withCredentials属性: `xhr.withCredentials = true`  
- `Access-Control-Allow-Origin不要设为星号`，指定明确的与请求网页一致的域名，这样就不会把其他域名的Cookie上传  
  
#### 简单请求  
  
需要同时满足两个条件，就属于简单请求：  
  
- 请求方法是：`HEAD`、`GET`、`POST`，三者之一  
- 请求头信息不超过以下几个字段：  
    - Accept  
    - Accept-Language  
    - Content-Language  
    - Last-Event-Id  
    - Content-Type：值为三者之一application/x-www/form/urlencoded、multipart/form-data、text/plain  
  
需要这些条件是为了兼容表单，因为历史上表单一直可以跨域  
  
浏览器直接发出CORS请求，具体来说就是在头信息中增加Origin字段，表示请求来源来自哪个域(协议+域名+端口)，服务器根据这个值决定是否同意请求。如果同意，返回的响应会多出以下响应头信息  
  
```js  
Access-Control-Allow-Origin: http://juejin.com // 和 Orign 一致  这个字段是必须的  
Access-Control-Allow-Credentials: true // 表示是否允许发送 Cookie  这个字段是可选的  
Access-Control-Expose-Headers: FooBar // 指定返回其他字段的值   这个字段是可选的  
Content-Type: text/html; charset=utf-8 // 表示文档类型  
```  
  
在简单请求中服务器至少需要设置：`Access-Control-Allow-Origin` 字段  
  
#### 非简单请求  
  
比如 PUT 或 DELETE 请求，或 Content-Type 为 application/json ，就是非简单请求。  
  
非简单 CORS 请求，**正式请求前会发一次 OPTIONS 类型的查询请求**，称为`预检请求`，询问服务器是否支持网页所在域名的请求，以及可以使用哪些头信息字段。只有收到肯定的答复，才会发起正式XMLHttpRequest请求，否则报错  
  
预检请求的方法是OPTIONS，它的头信息中有几个字段  
  
- Origin: 表示请求来自哪个域，这个字段是必须的  
- Access-Control-Request-Method：列出CORS请求会用到哪些HTTP方法，这个字段是必须的  
- Access-Control-Request-Headers： 指定CORS请求会额外发送的头信息字段，用逗号隔开  
  
OPTIONS请求次数过多也会损耗性能，所以要尽量减少OPTIONS请求，可以让服务器在请求返回头部添加  
```js  
Access-Control-Max-Age: Number // 数字 单位是秒  
```  
表示预检请求的返回结果可以被缓存多久，在这个时间范围内再请求就不需要预检了。不过这个缓存只对完全一样的URL才会生效  
  
### 2. Nginx代理跨域  
  
配置一个代理服务器向服务器请求，再将数据返回给客户端，实质和CORS跨域原理一样，需要配置请求响应头Access-Control-Allow-Origin等字段  
  
```js  
server {   
    listen 81; server_name www.domain1.com;   
    location / {   
        proxy_pass http://xxxx1:8080; // 反向代理   
        proxy_cookie_domain www.xxxx1.com www.xxxx2.com; // 修改cookie里域名   
        index index.html index.htm;   
        // 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用   
        add_header Access-Control-Allow-Origin http://www.xxxx2.com; // 当前端只跨域不带cookie时，可为*   
        add_header Access-Control-Allow-Credentials true;   
    }   
}  
```  
  
### 3. Node中间件代理跨域  
  
在 Vue 中 vue.config.js 中配置  
```js  
module.export = {  
    ...  
    devServer: {  
        proxy: {  
            [ process.env.VUE_APP_BASE_API ]: {  
                target: \'http://xxxx\',//代理跨域目标接口  
                ws: true,  
                changeOrigin: true,  
                pathRewrite: {  
                    [ \'^\' + process.env.VUE_APP_BASE_API ] : \'\'  
                }  
            }  
        }  
    }  
}  
```  
Node + express  
```js  
const express = require(\'express\')  
const proxy = require(\'http-proxy-middleware\')  
const app = express()  
app.use(\'/\', proxy({   
    // 代理跨域目标接口   
    target: \'http://xxxx:8080\',   
    changeOrigin: true,   
    // 修改响应头信息，实现跨域并允许带cookie   
    onProxyRes: function(proxyRes, req, res) {   
        res.header(\'Access-Control-Allow-Origin\', \'http://xxxx\')  
        res.header(\'Access-Control-Allow-Credentials\', \'true\')  
    },   
    // 修改响应信息中的cookie域名   
    cookieDomainRewrite: \'www.domain1.com\' // 可以为false，表示不修改  
}));   
app.listen(3000);   
```  
  
### 4. WebSocket  
  
WebSocket是HTML5标准中的一种通信协议，以`ws://`(非加密)和`wss://`(加密)作为协议前缀，该协议不实行同源政策，只要服务器支持就行  
  
因为WebSocket请求头信息中有Origin字段，表示请求源来自哪个域，服务器可以根据这个字段判断是否允许本次通信，如果在白名单内，就可以通信  
  
### 5. postMessage  
  
postMessage是HTML5标准中的API，它可以给我们解决如下问题：  
  
- 页面和新打开的窗口间数据传递  
- 多窗口之间数据传递  
- 页面与嵌套的 iframe 之间数据传递  
- 上面三个场景之间的`跨域传递`  
  
postMessage 接受两个参数，用法如下：  
- **参数一**：发送的数据  
- **参数二**：你要发送给谁就写谁的地址`(协议 + 域名 +端口`)，也可以设置为`*`，表示任意窗口，为`/`表示与当前窗口同源的窗口  
  
### 6. JSONP  
  
原理就是通过添加一个&lt;script&gt;标签，向服务器请求JSON数据，这样不受同源政策限制。服务器收到请求后，将数据放在一个callback回调函数中传回来。比如axios。  
  
不过`只支持GET请求`且`不安全`，**可能遇到XSS攻击，不过它的好处是可以向老浏览器或不支持CORS的网站请求数据**  
  
```js  
    let script = document.createElement('script')  
    script.type = 'text/javascript'  
    script.src = 'http://juejin.com/xxx?callback=handleCallback'  
    document.body.appendChild(script)  
      
    function handleCallback(res){  
        console.log(res)  
    }  
```  
服务器返回并立即执行  
```js  
handleCallback({ code: 200, msg: 'success', data: [] })  
```  
  
## 跨域时 Cookie 要做何处理？  
  
指的就是对第三方使用 Cookie 的设置，在 Cookie 信息中添加 `SameSite` 属性  
  
```js  
Set-Cookie: widget_session=123456; SameSite=None; Secure  
```  
  
SameSite 有三个值：  
- `strict`：严格模式，完全禁止使用Cookie  
- `lax`：宽松模式，允许部分情况使用Cookie，`跨域的都行`，a标签跳转，link标签，GET提交的表单  
- `none`：任何情况下都会发送Cookie，但必须同时设置Secure属性，意思是需要安全上下文，Cookie `只能通过https发送`，否则无效  
    
Chrome 80之前默认值是none，之后是lax  
  
不过在最新的 `Chrome91` 版本中这个`已经被移除`了，所以在 91之前的版本依然可以使用  
  
如果 Chrome 或 Edge 版本大于91小于94的话，可以通过[Chromium支持的command-line flag](https://peter.sh/experiments/chromium-command-line-switches/)  
  
- 右键 Chrome 或 Edge 浏览器，选择属性  
- 在目标(Target)属性末尾加上  
  
```js  
 --disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure  
```  
  
并且官方说的到 94 版本会连 comman-line 也会移除  
  
官方的说法是任由开发者控制这两个选项，容易被攻击  
# 如何判断某个字符串长度（要求支持表情）？  
大家看到题目，可能首先想到的是 `str.length` 获取字符串的长度。  
  
其实 JS 中的字符串长度是个奇怪的设定，很多编程语言，获取字符串的长度是得到字节长度，比如一个正常的汉字是两个字节，但在 js 中，'汉'.length 是 **1** 。看上去很方便，殊不知，这个特性埋下的坑。  
  
比如：  
  
```  
😀 : '😀'.length 得到的是 2  
𠮷 : '𠮷''.length 得到的也是 2  
```  
  
ES6 里添加了一个东西叫字符串迭代器，还添加了一个东西叫 unicode 正则模式，它们也不能直接统计字符数，而是可以把字符串拆成一个字符的数组，你可以间接的计算出字符个数。  
  
使用字符串的Iterator统计长度，如下例子：  
  
```js  
const testStr = '123 '   
   
for(let c of testStr) {   
  console.log(c)   
}   
// 1   
// 2   
// 3   
//     
console.log([...testStr].length)   
// 4   
```  
  
使用 `Array.from` 替换，并且封装一下：  
  
```js  
function unicodeLength(str) {  
    return Array.from(str).length  
}  
```  
  
  
  
  
  
# 说说你对SPA的理解  
 ![](https://static.vue-js.com/cf6aa320-3ac6-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、什么是SPA  
  
SPA（single-page application），翻译过来就是单页应用`SPA`是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验在单页应用中，所有必要的代码（`HTML`、`JavaScript`和`CSS`）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面页面在任何时间点都不会重新加载，也不会将控制转移到其他页面举个例子来讲就是一个杯子，早上装的牛奶，中午装的是开水，晚上装的是茶，我们发现，变的始终是杯子里的内容，而杯子始终是那个杯子结构如下图  
  
 ![](https://static.vue-js.com/df14a5a0-3ac6-11eb-85f6-6fac77c0c9b3.png)  
  
我们熟知的JS框架如`react`,`vue`,`angular`,`ember`都属于`SPA`  
  
## 二、SPA和MPA的区别  
  
上面大家已经对单页面有所了解了，下面来讲讲多页应用MPA（MultiPage-page application），翻译过来就是多页应用在`MPA`中，每个页面都是一个主页面，都是独立的当我们在访问另一个页面的时候，都需要重新加载`html`、`css`、`js`文件，公共文件则根据需求按需加载如下图  
  
 ![](https://static.vue-js.com/eeb13aa0-3ac6-11eb-85f6-6fac77c0c9b3.png)  
  
#### 单页应用与多页应用的区别  
  
|  | 单页面应用（SPA） | 多页面应用（MPA） |  
| :-- | :-- | :-- |  
| 组成 | 一个主页面和多个页面片段 | 多个主页面 |  
| 刷新方式 | 局部刷新 | 整页刷新 |  
| url模式 | 哈希模式 | 历史模式 |  
| SEO搜索引擎优化 | 难实现，可使用SSR方式改善 | 容易实现 |  
| 数据传递 | 容易 | 通过url、cookie、localStorage等传递 |  
| 页面切换 | 速度快，用户体验良好 | 切换加载资源，速度慢，用户体验差 |  
| 维护成本 | 相对容易 | 相对复杂 |  
  
#### 单页应用优缺点  
  
优点：  
  
- 具有桌面应用的即时性、网站的可移植性和可访问性  
- 用户体验好、快，内容的改变不需要重新加载整个页面  
- 良好的前后端分离，分工更明确  
  
缺点：  
  
- 不利于搜索引擎的抓取  
- 首次渲染速度相对较慢  
-   
  
## 三、实现一个SPA  
  
#### 原理  
  
1.  监听地址栏中`hash`变化驱动界面变化  
2.  用`pushsate`记录浏览器的历史，驱动界面发送变化  
  
 ![](https://static.vue-js.com/fc95bf60-3ac6-11eb-ab90-d9ae814b240d.png)  
  
#### 实现  
  
##### `hash` 模式  
  
核心通过监听`url`中的`hash`来进行路由跳转  
  
```js  
// 定义 Router    
class Router {    
    constructor () {    
        this.routes = {}; // 存放路由path及callback    
        this.currentUrl = '';    
            
        // 监听路由change调用相对应的路由回调    
        window.addEventListener('load', this.refresh, false);    
        window.addEventListener('hashchange', this.refresh, false);    
    }    
        
    route(path, callback){    
        this.routes[path] = callback;    
    }    
        
    push(path) {    
        this.routes[path] && this.routes[path]()    
    }    
}    
    
// 使用 router    
window.miniRouter = new Router();    
miniRouter.route('/', () => console.log('page1'))    
miniRouter.route('/page2', () => console.log('page2'))    
    
miniRouter.push('/') // page1    
miniRouter.push('/page2') // page2    
```  
  
##### history模式  
  
`history` 模式核心借用 `HTML5 history api`，`api` 提供了丰富的 `router` 相关属性先了解一个几个相关的api  
  
 -    `history.pushState` 浏览器历史纪录添加记录  
 -    `history.replaceState`修改浏览器历史纪录中当前纪录  
 -    `history.popState` 当 `history` 发生变化时触发  
  
```js  
// 定义 Router    
class Router {    
    constructor () {    
        this.routes = {};    
        this.listerPopState()    
    }    
        
    init(path) {    
        history.replaceState({path: path}, null, path);    
        this.routes[path] && this.routes[path]();    
    }    
        
    route(path, callback){    
        this.routes[path] = callback;    
    }    
        
    push(path) {    
        history.pushState({path: path}, null, path);    
        this.routes[path] && this.routes[path]();    
    }    
        
    listerPopState () {    
        window.addEventListener('popstate' , e => {    
            const path = e.state && e.state.path;    
            this.routers[path] && this.routers[path]()    
        })    
    }    
}    
    
// 使用 Router    
    
window.miniRouter = new Router();    
miniRouter.route('/', ()=> console.log('page1'))    
miniRouter.route('/page2', ()=> console.log('page2'))    
    
// 跳转    
miniRouter.push('/page2')  // page2    
```  
  
### 四、题外话：如何给SPA做SEO  
  
下面给出基于`Vue`的`SPA`如何实现`SEO`的三种方式  
  
1.  **SSR服务端渲染**  
  
将组件或页面通过服务器生成html，再返回给浏览器，如`nuxt.js`  
  
2.  **静态化**  
  
目前主流的静态化主要有两种：（1）一种是通过程序将动态页面抓取并保存为静态页面，这样的页面的实际存在于服务器的硬盘中（2）另外一种是通过WEB服务器的 `URL Rewrite`的方式，它的原理是通过web服务器内部模块按一定规则将外部的URL请求转化为内部的文件地址，一句话来说就是把外部请求的静态地址转化为实际的动态页面地址，而静态页面实际是不存在的。这两种方法都达到了实现URL静态化的效果  
  
3.  **使用`Phantomjs`针对爬虫处理**  
  
原理是通过`Nginx`配置，判断访问来源是否为爬虫，如果是则搜索引擎的爬虫请求会转发到一个`node server`，再通过`PhantomJS`来解析完整的`HTML`，返回给爬虫。下面是大致流程图  
  
 ![](https://static.vue-js.com/25be6630-3ac7-11eb-ab90-d9ae814b240d.png)  
  
# js中数组是如何在内存中存储的？  
数组不是以一组连续的区域存储在内存中，而是一种哈希映射的形式。它可以通过多种数据结构来实现，其中一种是链表。  
  
js分为基本类型和引用类型：  
  
* 基本类型是保存在栈内存中的简单数据段，它们的值都有固定的大小，保存在栈空间，通过按值访问；  
* 引用类型是保存在堆内存中的对象，值大小不固定，栈内存中存放的该对象的访问地址指向堆内存中的对象，JavaScript不允许直接访问堆内存中的位置，因此操作对象时，实际操作对象的引用  
  
## js的数据类型  
  
js的数据分为两种， 一种是原始类型（Boolean,Null,Undefined,Number,BigInt,String,Symbol）， 一种是对象（Object）。    
原始类型的数据放在栈中，对象的数据放在堆中。  
  
### 堆栈的区别  
  
* 堆（heap）是不连续的内存区域，即数据可以任意存放， 主要存放的是对象等。    
  
( 栈（stack）是一块连续的内存区域，每个区块按照一定次序存放（后进先出），栈中主要存放的是基本类型的变量的值以及指向堆中的数组或者对象的地址。  
  
### 为什么要区分堆栈  
  
> 变量主要是两种形式，一种内容短小（比如一个int整数），需要频繁访问，但是生命周期很短，通常只在一个方法内存活，而另一种内容可能很多（比如很长一个字符串），可能不需要太频繁的访问，但生命周期较长，通常很多个方法中可能都要用到，那么自然将这两类变量分开就显得比较理性，一类存储* 区，通常是局部变量、操作符栈、函数参数传递和返回值，另一类存储在堆区，通常是较大的结构体（或者OOP中的对象）、需要反复访问的全局变量。 堆区就是各种慢，申请内存慢，访问慢，修改慢，释放慢，整理慢（或者说GC垃圾回收），但优点也不言而喻，访问随机灵活，空间超大，在不超可用内存的情况下你要多大就给多大。 栈区就像临时工，干完就跑，所以超快，但是缺点也很多，比如生命周期短，一般只能在一个方法内存活，又比如你需要事先知道需要多大的栈（事实上绝大多数语言栈区要分配的大小编译期就确定了，Java就是这样），而且通常最大栈区可用内存都很小，你不可能往栈区里堆很多数据。  
  
### 原始类型  
  
原始类型有一个特点就是不可变。示例代码如下  
  
```js  
// 例子1  
var str = "abc";  
str[0] = "d";  
console.log(str) // abc    
  
// 例子2  
var str2 = "abc";  
str2 = "dbc";  
console.log(str2) // dbc  
  
```  
  
例子1的数据没有改变， 例子2的数据却改变了， 实际上例子2是创建了一个新的字符串， 也就是内存开辟了一个新的区域给"dbc"使用。    
  
简单点来讲， 就是假设栈中存放了一个数据如"abc"， 那么这个数据就永远不会改变， 而如果是如例子2中赋值了一个其他的字符串或者任何其他改变值的情况下， 栈中都会保留原来的"abc"， 然后新开一个地方存放"dbc"。 类似下图：    
  
![image](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/16/170e18ee182d7b23~tplv-t2oaga2asx-image.image)  
  
**为什么要把基础类型的值设成不可变**  
  
1. 为了安全    
假设基础类型的值是可变的， 那么下面的代码会变得很奇怪  
  
```  
var strTest = "varaiable";  
var fun = (str) => { str + "---ok" };  
fun(strTest);  
console.log(strTest) // varaiable---ok  
  
// 可以看到strTest的值被改变了， 特别是在map之类的对象中更为显著    
var map = new Map()  
var strTest = "t1";  
map.set(strTest, 10);  
strTest = "notT1";  
map.get("t1"); // undefined;  
map.get("notT1"); // 10  
  
```  
  
这样的代码容易造成更多的bug，特别是像java之类的多线程语言， 更有可能造成线程不安全的问题。  
  
1. 为了共享    
实际上， 基础类型中， 值一样的变量是共享一个内存区域的。    
![image](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/16/170e216bb0628f9b~tplv-t2oaga2asx-image.image)  
  
这样做的好处是避免额外的内存开销，提升效能。    
当然， 这个前提是基础类型不可变， 不然如果str1的值变化了， str2的值也会跟着变化（实际上并没有对其操作）。  
  
### 对象类型  
  
V8中的对象（数组也是对象）存储相对来说比较复杂，他们是存放在堆里面的数据。并且格式大致如下:    
  
![image](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/16/170e24658c3a4707~tplv-t2oaga2asx-image.image)  
  
这和很多资料说的是用Map实现不同， 很明显， 根据上图（[来自v8的博客](https://v8.dev/blog/fast-properties)）,起码可以说明不是使用Map来处理的。  
  
V8是把对象中的属性分成两类， 一类是字符常量， 一类是数字or数字字符串（如"1"这种），并分别放在了两个数组，Properties和Elements。  
  
**普通的字符常量**    
先从普通的字符常量说起， 字符常量的存放方式又细分为三类。  
  
第一类： In-object    
实际上， 在生成一个对象的时候， v8会给该对象留下一些空间以分配属性（数量由对象的初始大小预先确定），这些属性直接存储在对象本身上。这些是V8中最快的属性，因为无需任何间接访问即可访问它们，如下图：  
  
![image](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/16/170e254a7ec37603~tplv-t2oaga2asx-image.image)  
  
第二类： Fast properties    
v8的In-object空间并不多，通过对象字面量创建的无属性对象分配 4 个对象内属性存储（inobject\_properties）空间。当这些空间被使用完之后， 即会通过HideClass(隐藏类，有些也叫Map，这里统一叫隐藏类)来协助完成属性的快速访问。  
  
HiddenClasses and DescriptorArrays    
HiddenClass存储有关对象的元信息，包括该对象上的属性数量以及对该对象原型的引用。除此之外，HiddenClasses里面还有一个DescriptorArrays数组， 该数组存储了对象属性的信息。    
即如下图：    
  
![image](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/16/170e270f1a1ff2eb~tplv-t2oaga2asx-image.image)  
  
这里一般会有一个疑惑， 为什么需要一个隐藏类， 我直接搞一个hashTable不是更快吗？    
关于隐藏类及ICs的概率， 推荐阅读这一篇文章[JavaScript 引擎基础：Shapes 和 Inline Caches](https://zhuanlan.zhihu.com/p/38202123), 概念清晰易懂，图文并茂。    
这里简单说一下概念：    
首先看下， 隐藏类是怎么来的    
  
![image](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/16/170e2744aaa0dcaa~tplv-t2oaga2asx-image.image)  
  
从图中可以看出， 隐藏类是通过一颗树来不断生成的，每添加一个属性都会新生成一个隐藏类节点（添加数组索引属性不会创建新的）， 然后呢， 具有相同结构（相同属性，顺序相同）的对象具有相同的隐藏类。也就是说， 如果在上面的代码中加一个代码如下：  
  
```  
var a = {};  
a.a = "ddd";  
  
var b = {};  
b.a = "3";  
b.b = "test";  
  
```  
  
那么a的隐藏类是右边的第一个nofOwnDescriptors， b是第二个。对于程序代码来说， 实际上很多对象都是拥有相同的隐藏类。而隐藏类背后的主要动机是 Inline Caches 或 ICs 的概念。ICs 是促使 JavaScript 快速运行的关键因素！JavaScript 引擎利用 ICs 来记忆去哪里寻找对象属性的信息，以减少昂贵的查找次数。    
大致就是每次将代码编译成字节码并读取属性时，都会根据隐藏类把该属性的位置保存起来，在下一次读取或者遇到拥有相同隐藏类的对象读取时，可以根据隐藏类提供的属性位置直接读取，而避免查找过程。  
  
第三类： Slow properties    
最后一种方式即是字典存储方式。字典存储模式相对来说比较简单， 先看下官方提供的图：    
  
![image](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/16/170e2815cb97346c~tplv-t2oaga2asx-image.image)  
  
    
简单点说， 就是隐藏类里面的DescriptorArrays会直接置为空， 然后把属性的值和元信息直接存储在properties数组中，并通过hash的方式进行get和set。    
既然上面说了拥有隐藏类可以带来效能的提升， 为什么还要提供字典方式？    
v8的原文如下：   
  
> However, if many properties get added and deleted from an object, it can generate a lot of time and memory overhead to maintain the descriptor array and HiddenClasses  
  
大致意思是说，增加删除属性的操作过多会使用大量的时间和内存开销来维护descriptorArray 和 HiddenClasses。  
  
最后， 什么时候是Fast properties（隐藏类）， 什么时候是slow properties(字典模式)?    
关于这一方面，推荐该系列文章[奇技淫巧学 V8 之一，对象访问模式优化](https://zhuanlan.zhihu.com/p/28777722), 以下部分为引用 新创建的小对象为Fast properties。执行如下操作的时候会变成slow properties  
  
1. 动态添加过多的属性  
2. 删除属性（delete）  
3. 删除非最后添加的属性（V8 >= 6.0）  
  
**数组类型**    
数组的话种类比较多， 按官方的话说多达20种类型。    
实际上， 数组一般是放到了一开始提的elements数组里面， 然后按索引读值， 这个比较简单， 说下其中比较典型的两种。  
  
1. 存在缺失的元素，会按原型链串上去拿值，实际上就是对象原型链..  
  
```  
const o = ['a', 'b', 'c'];  
console.log(o[1]);          // Prints 'b'.  
  
delete o[1];                // Introduces a hole in the elements store.  
console.log(o[1]);          // Prints 'undefined'; property 1 does not exist.  
o.__proto__ = {1: 'B'};     // Define property 1 on the prototype.  
  
console.log(o[0]);          // Prints 'a'.  
console.log(o[1]);          // Prints 'B'.  
console.log(o[2]);          // Prints 'c'.  
console.log(o[3]);          // Prints undefined  
  
```  
  
![image](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/3/16/170e28f5ad820607~tplv-t2oaga2asx-image.image)  
  
1. 稀疏数组， 如果存在这种情况， 那么elements会存在大量的内存没有使用， 所以v8优化成字典模式，也就是和上面的字符串一样。  
  
```  
const sparseArray = [];  
sparseArray[9999] = 'foo'; // Creates an array with dictionary elements.  
  
```  
  
除此之外， v8还在数组上做了各种优化，如Gc等， 这里不赘述。  
# 编程实现温度转换，已知温度转换的关系式是：华氏度＝32＋摄氏度×1.8，现在要求输入摄氏度，输出对应的华氏度，小数保留两位  
 ```js  
function convertTemperature(centigrade){  
	if(typeof centigrade !== 'number'){  
		throw new Error('Wrong parameter type!')  
    }  
  
	return (32 + centigrade * 1.8).toFixed(2)  
}  
```  
有一组版本号如下`['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']`。  
  
现在需要对其进行排序，排序的结果为 `['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']`  
# 版本号排序  
本题目的实现有很多不同的思路，在这里先给大家介绍一种非常简洁，也非常有意思的实现方案：  
  
```js  
const arr=['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'];  
arr.sort((a,b)=>a>b?-1:1);  
console.log(arr); // ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']  
```  
  
## 为什么字符串比较能够轻松的实现排序？  
  
在JavaScript中，字符串之间无疑也是可以比较的。猜猜看下面这段代码输出的结果是什么？  
  
```js  
console.log('5'>'1')  
console.log('5'>'10')  
```  
  
答案是`true`、`true`。  
  
### 比较字符串是比较它们的 Unicode 值  
  
这是因为在两个字符串进行比较时，是使用基于标准字典的 Unicode 值来进行比较的。通过`String.prototype.codePointAt()`方法我们能拿到字符串的 Unicode 值。所以`'5'>'1'`的结果是`true`;  
  
而当字符串长度大于1的时候比较则是逐位进行，因此`'5'>'10'`进行比较时，首先比较第一位也就是`'5'>'1'`，如果有结果则返回，没有结果则继续比较第二位。所以`'5'>'10'`的结果与`'5'>'1'`相同，也是`true`。  
  
回过头来看问题，就不难理解了：`.`的 Unicode 值为 46，`0`的 Unicode 值为 48，其它数字在此基础上递增。所以在比较的时候`10.1`是要大于`1.1`的。  
  
### 字符串比较法适用范围很小  
  
上文解释了为什么题目中的 case 能够通过字符串比较来实现。但是机智如你一定会发现，这种比较是存在问题的：如果修改题目中的arr如下:  
  
```js  
const arr=[  
    '0.5.1',  
    '0.1.1',  
    '2.3.3',  
    '0.302.1',  
    '4.2',  
    '4.3.5',  
    '4.3.4.5'  
];  
```  
  
那字符串比较法会出错：期望中版本号`'0.302.1'`应该大于`'0.5.1'`，但实际比较的结果则是相反的，原因就在于**逐位比较**。  
  
所以字符串比较这个技巧需要限定条件为各个版本号均为1位数字，它得出的结果才是准备的，而常见的版本号并不符合这个条件。那么有没有适用性更强又简洁的比较方式呢？  
  
## “大数”加权法  
  
### 比较npm规则版本号  
  
假设版本号遵循 npm 语义化规则，即版本号由`MAJOR.MINOR.PATCH`几个部分组成：：  
  
```js  
const arr=['2.3.3', '4.3.4', '0.3.1'];  
```  
  
通过如下公式得出待比较的目标版本号：  
  
> MAJOR\*p2 \+ MINOR\*p + PATCH  
  
代码如下：  
  
```js  
const p = 1000;  
const gen = (arr) =>   
    arr.split('.').reduce(reducer,0);  
  
const reducer = (acc,value,index) =>   
    acc+(+value)*Math.pow(p,arr.length-index-1);  
  
arr.sort((a,b)=> gen(a)>gen(b)?-1:1);  
  
console.log(arr)  
```  
  
其中`p`为常量，它的取值要大于`MAJOR/MINOR/PATCH`三者中最大值至少一个量级。譬如待比较的版本号为`1.0.1`、`'0.302.1'`，此时如果`p`取值为 10 那么计算出来的结果显然会不符合预期。而`p`取`1000`就能够避免各个子版本加权之后产生污染。  
  
同理，有类似规则的版本号（如`'1.0.1.12'`）都可以通过上述方法进行排序。  
  
### 更多的版本号  
  
如果版本号数组如下:  
  
```js  
const arr=[  
    '1.1',  
    '2.3.3',  
    '4.3.5',  
    '0.3.1',  
    '0.302.1',  
    '4.20.0',  
    '4.3.5.1',  
    '1.2.3.4.5'  
];  
```  
  
上述数组不但不遵循`MAJOR.MINOR.PATCH规`则，其长度也没有明显的规则，这时该如何比较呢？  
  
可以在固定规则比较的方法基础上进行扩展，首先需要获取到版本号数组中子版本号最多有几位`maxLen`。这里我们通过`Math.max()`获取：  
  
```js  
const maxLen = Math.max(  
    ...arr.map((item)=>item.split('.').length)  
);  
```  
  
拿到`maxLen`之后即可改写 reducer 方法:  
  
```js  
const reducer = (acc,value,index) =>   
    acc+(+value)*Math.pow(p,maxLen-index-1);  
  
const gen = (arr) =>  
    arr.split('.').reduce(reducer,0);  
  
arr.sort((a,b)=> gen(a)>gen(b)?-1:1);  
  
console.log(arr)  
```  
  
上述方法足够用于常规版本号的比较了。但是我们知道，JavaScript 的 number 类型为双精度64位浮点类型，如果`maxLen`特别大、每一位的值又很大（比如某个子版本号用时间戳来标记），那么上述方法则存在溢出而导致比较结果不准确的问题。  
  
不过`BigInt`提案已经进入stage3规范，它能够表示任意大的整数。可以预见的是，在不久的将来我们无需考虑版本号取值范围带来的影响。  
  
## 循环比较法  
  
相对字符串比较法和大数加权法，循环比较法的适用性更强。思路仍然是逐位比较子版本号：如果当前版本号相同则比较下一位；如果版本号位数不相等而前几位值一致则认为位数多的版本号大。  
  
代码如下：  
  
```js  
arr.sort((a, b) => {  
    let i = 0;  
    const arr1 = a.split('.');  
    const arr2 = b.split('.');  
  
    while (true) {  
        const s1 = arr1[i];  
        const s2 = arr2[i++];  
  
        if (s1 === undefined || s2 === undefined) {  
            return arr2.length - arr1.length;  
        }  
  
        if (s1 === s2) continue;  
  
        return s2 - s1;  
    }  
});  
  
console.log(arr)  
```  
  
## 思考  
  
我们总结并且对比了几种用来比较版本号的方法，在不同的场景可以选择合适的方式：  
  
* 字符串比较法  
* 大数加权法  
* 循环比较法  
  
> 以上答案由 “前端面试题宝典” （官网地址：[https://fe.ecool.fun/](https://fe.ecool.fun/) ）整理收集  
# Map 和 WeakMap 有什么区别？  
### Map  
  
##### 1.传统对象结构  
Map本质上是一个键值对的集合。和传统对象结构相比，传统对象只能用字符串作为键名，这在使用上造成了很大的限制。  
  
```javascript  
const data = {}  
//element为节点对象  
const element = document.querySelector('.node')  
console.log(element)  //输出div.node对象  
console.log(element.toString())  
//用点操作符不能有空格，所以采用中括号的形式给对象赋值  
data[element] = 'objectData'  
//输出objectData，说明在对象中存在[object HTMLDivElement]键名  
console.log(data['[object HTMLDivElement]'])  
  
```  
上面带代码中，我们创建了一个对象并将一个节点对象作为它的键名，并进行了代码测试，首先验证了获取到的element节点为一个对象，再确定了经过toString方法转化后的结果，以这个值为键名成功的输出了value值objectData。  
  
上面的代码证明了传统对象的键名会通过toString方法转化为字符串类型  
  
注意：在我们访问对象成员的时，键名有空格时不能采用点访问，例如data.ab c  
这是错误的。我们可以用data['ab c']的形式访问  
  
##### 2.Map结构  
  
Map类似于对象，但是键名不限于字符串，可以说Object结构提供键值对应，Map提供值值对应，因此采用Map结构会优于传统对象。  
  
```javascript  
const dataMap = new Map()  
const element = document.querySelector('.node')  
dataMap.set(element,'objectData')  
console.log(dataMap.get(element))  
console.log(dataMap)  
```  
上面的代码中我们获取值时直接传入了element对象，成功将对象作为键名，弥补了传统对象的不足。  
  
##### 3.Map的特点  
  
1. Map默认情况下不包含任何键，所有键都是自己添加进去的。不同于Object原型链上有一写默认的键。  
2. Map的键可以时任何类型数据，就连函数都可以。  
3. Map的键值对个数可以轻易通过size属性获取，Object需要手动计算。  
4. Map在频繁增删键值对的场景下性能比Object更好。  
  
##### 4.什么时候用Map  
  
1. 想要添加的键值名和Object上的默认键值名冲突，又不想改名，用Map。  
2. 需要String和Symbol以外的数据类型做键值时，用Map。  
3. 键值对很多，有时需要计算数量，用Map。  
4. 需要频繁地增删键值对时，用Map。  
  
### WeakMap  
#### 什么是WeakMap  
  
WeakMap是ES6中新增的一种集合类型，叫做'弱映射'。它和Map是兄弟关系，与Map的区别在于这个弱字，API还是Map那套API  
  
#### WeakMap的特性  
  
##### 1. WeakMap只能将对象作为键名  
只接受对象作为键名(null除外)，不接受其它类型的值作为键名。  
  
##### 2.WeakMap的键名引用的对象是弱引用  
  
首先我们需要知道什么是强引用什么是弱引用  
  
**强引用**  
  
```javascript  
const e1 = document.getElementById('foo')  
const e2 = document.getElementById('bar')  
const arr = [  
    [e1,'foo'],  
    [e2,'bar'],  
];  
```  
  
上面的代码中e1和e2是两个对象，通过arr数组对这两个对象添加一些文字说明。但是这样就形成了arr对e1和e2的引用，而这种引用又是强引用。它的区别就体现在这。当我们不再需要这两个对象时，我们必须手动删除这个引用，接触arr对两个对象的引用关系，否则垃圾回收机制不会释放e1和e2占用的内存。因为arr仍然存在着对对象的引用。  
  
```javascript  
arr[0] = null;  
arr[1] = null;  
```  
  
**弱引用**  
  
是指不能确保其引用的对象不会被垃圾回收器回收的引用。一个对象若只被弱引用所引用，则被认为是不可访问的，并因此可能在任何时刻被回收。  
  
也就是说当我们创建一个弱引用的对象时，我们就可以静静地等待其被垃圾回收器回收。  
  
总的来说，局势WeakMap保持了对键名所引用对象的弱引用，即垃圾回收机制不将该引用考虑在内。只要所引用的对象的其它引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap里面的键名对象和所对应的键值对会自动消失，不需要手动删除引用。  
  
##### 3.不可遍历  
  
正因为WeakMap对键名引用的对象是弱引用关系 ，因此WeakMap内部成员是会取决于垃圾回收机制有没有执行，运行前后成员个数很可能是不一样的，而垃圾回收机制的执行又是不可预测的，因此不可遍历。  
  
## Map和WeakMap区别  
  
- Map的键可以是任意类型，WeakMap只接受对象作为键，不接受其它类型的值作为键  
- Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键；WeakMap的键是弱引用，键所指向的对象是可以被垃圾回收，此时键是无效的。  
- Map可以被遍历，WeakMap不能被遍历  
  
  
# JavaScript 中如何取消请求  
众所周知，JavaScript 实现异步请求就靠浏览器提供的两个 API —— **XMLHttpRequest 和 Fetch**。我们平常用的较多的是 Promise 请求库 axios，它基于 XMLHttpRequest。  
  
本篇带来 XMLHttpRequest、Fetch 和 axios 分别是怎样“取消请求”的。  
  
### 取消 XMLHttpRequest 请求  
  
当请求已经发送了，可以使用 **XMLHttpRequest.abort()** 方法取消发送，代码示例如下：  
  
```js  
const xhr = new XMLHttpRequest();  
xhr.open('GET', '<http://127.0.0.1:3000/api/get>', true);  
xhr.send();  
setTimeout(() => {  
	 xhr.abort();  
}, 1000);  
```  
  
取消请求，[readyState](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState) 会变成 `XMLHttpRequest.UNSENT`(0)；请求的 xhr.[status](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status) 会被设为 0 ；  
  
不如在 Chrome DevTools Network 中，看看正常请求和取消请求的对比图：  
  
![image.png](https://pic.rmb.bdstatic.com/bjh/b14104626799dc65c94014992779438d.png?)  
  
### 取消 Fetch 请求  
  
取消 Fetch 请求，需要用到 [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) API。我们可以构造一个 controller 实例：**`const controller = new AbortController()` ,** controller 它有一个只读属性 [AbortController.signal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)，可以作为参数传入到 fetch 中，用于将控制器与获取请求相关联；  
  
代码示例如下：  
  
```js  
const controller = new AbortController();  
void (async function () {  
    const response = await fetch('<http://127.0.0.1:3000/api/get>', {  
        signal: controller.signal,  
    });  
    const data = await response.json();  
})();  
  
setTimeout(() => {  
    controller.abort();  
}, 1000);  
```  
  
浏览器控制台对比图：  
  
![image.png](https://pic.rmb.bdstatic.com/bjh/b14104626799dc65c94014992779438d.png)  
  
我们其实可以在 controller.abort() 传入“取消请求的原因”参数，然后进行 try...catch 捕获  
  
![image.png](https://pic.rmb.bdstatic.com/bjh/e7c46993072985b60ee3340c1f355683.png)  
  
### 取消 axios 请求  
  
axios 同样支持 [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)  
  
```js  
const controller = new AbortController();  
const API_URL = '<http://127.0.0.1:3000/api/get>';  
void (async function () {  
    const response = await axios.get(API_URL, {  
        signal: controller.signal,  
    });  
    const { data } = response;  
})();  
setTimeout(() => {  
    controller.abort();  
}, 1000);  
```  
  
控制台截图：  
  
![image.png](https://pic.rmb.bdstatic.com/bjh/2e01899c949cd6a58c36a42297845a78.png)  
  
错误捕获：  
  
![image.png](https://pic.rmb.bdstatic.com/bjh/2419382f57d767775b75b6b7e711ad59.png)  
  
注意：axios 之前用于取消请求的 CancelToken 方法已经被弃用，更多请见文档 [axios-http.com/docs/cancel…](https://axios-http.com/docs/cancellation)；  
  
# Object与Map有什么区别？  
### 概念  
  
*   Object  
  
在ECMAScript中，`Object`是一个特殊的对象。它本身是一个顶级对象，同时还是一个构造函数，可以通过它（如：`new Object()`）来创建一个对象。我们可以认为JavaScript中所有的对象都是`Object`的一个实例，对象可以用字面量的方法const obj = {}即可声明。    
  
*   Map  
  
`Object`本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键，这给它的使用带来了很大的限制。  
  
为了解决这个问题，`ES6` 提供了 `Map` 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。  
  
也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 `Hash` 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。  
  
通过 `const m = new Map();` 即可得到一个map实例。  
  
### 访问  
  
map: 通过map.get(key)方法去属性, 不存在则返回undefined  
  
object: 通过obj.a或者obj\['a'\]去访问一个属性, 不存在则返回undefined  
  
### 赋值  
  
map: 通过map.set去设置一个值，key可以是任意类型  
  
object: 通过object.a = 1或者object\['a'\] = 1，去赋值，key只能是字符串，数字或symbol  
  
### 删除  
  
map: 通过map.delete去删除一个值，试图删除一个不存在的属性会返回false  
  
object: 通过delete操作符才能删除对象的一个属性，诡异的是，即使对象不存在该属性，删除也返回true，当然可以通过**Reflect.deleteProperty(target, prop)** 删除不存在的属性还是会返回true。  
  
    var obj = {}; // undefined  
    delete obj.a // true  
  
### 大小  
  
map: 通过map.size即可快速获取到内部元素的总个数  
  
object: 需要通过Object.keys的转换才能将其转换为数组，再通过数组的length方法去获得或者使用Reflect.ownKeys(obj)也可以获取到keys的集合  
  
### 迭代  
  
map: 拥有迭代器，可以通过`for-of`、`forEach`去直接迭代元素，而且遍历顺序是确定的  
  
object: 并没有实现迭代器，需要自行实现，不实现只能通过for-in循环去迭代，遍历顺序是不确定的  
  
### 使用场景  
  
1.  如果只需要简单的存储key-value的数据，并且key不需要存储复杂类型的，直接用对象  
2.  如果该对象必须通过JSON转换的，则只能用对象，目前暂不支持Map  
3.  map的阅读性更好，所有操作都是通过api形式去调用，更有编程体验  
# 深拷贝浅拷贝有什么区别？怎么实现深拷贝？  
![](https://static.vue-js.com/cdf952e0-69b8-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、数据类型存储  
  
前面文章我们讲到，`JavaScript`中存在两大数据类型：  
  
- 基本类型  
- 引用类型   
  
基本类型数据保存在在栈内存中  
  
引用类型数据保存在堆内存中，引用数据类型的变量是一个指向堆内存中实际对象的引用，存在栈中  
  
  
  
## 二、浅拷贝  
  
浅拷贝，指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝  
  
如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址  
  
即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址  
  
下面简单实现一个浅拷贝  
  
```js  
function shallowClone(obj) {  
    const newObj = {};  
    for(let prop in obj) {  
        if(obj.hasOwnProperty(prop)){  
            newObj[prop] = obj[prop];  
        }  
    }  
    return newObj;  
}  
```  
  
在`JavaScript`中，存在浅拷贝的现象有：  
  
- `Object.assign`  
- `Array.prototype.slice()`, `Array.prototype.concat()`  
- 使用拓展运算符实现的复制  
  
  
  
  
  
### Object.assign  
  
```js  
var obj = {  
    age: 18,  
    nature: ['smart', 'good'],  
    names: {  
        name1: 'fx',  
        name2: 'xka'  
    },  
    love: function () {  
        console.log('fx is a great girl')  
    }  
}  
var newObj = Object.assign({}, obj);  
```  
  
  
  
### slice()  
  
```js  
const fxArr = ["One", "Two", "Three"]  
const fxArrs = fxArr.slice(0)  
fxArrs[1] = "love";  
console.log(fxArr) // ["One", "Two", "Three"]  
console.log(fxArrs) // ["One", "love", "Three"]  
```  
  
  
  
### concat()  
  
```js  
const fxArr = ["One", "Two", "Three"]  
const fxArrs = fxArr.concat()  
fxArrs[1] = "love";  
console.log(fxArr) // ["One", "Two", "Three"]  
console.log(fxArrs) // ["One", "love", "Three"]  
```  
  
  
  
  
  
  
  
### 拓展运算符  
  
```js  
const fxArr = ["One", "Two", "Three"]  
const fxArrs = [...fxArr]  
fxArrs[1] = "love";  
console.log(fxArr) // ["One", "Two", "Three"]  
console.log(fxArrs) // ["One", "love", "Three"]  
```  
  
  
  
  
  
## 三、深拷贝  
  
深拷贝开辟一个新的栈，两个对象的属性完全相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性  
  
常见的深拷贝方式有：  
  
- _.cloneDeep()  
  
- jQuery.extend()  
- JSON.stringify()  
- 手写循环递归  
  
  
  
### _.cloneDeep()  
  
```js  
const _ = require('lodash');  
const obj1 = {  
    a: 1,  
    b: { f: { g: 1 } },  
    c: [1, 2, 3]  
};  
const obj2 = _.cloneDeep(obj1);  
console.log(obj1.b.f === obj2.b.f);// false  
```  
  
  
  
### jQuery.extend()  
  
```js  
const $ = require('jquery');  
const obj1 = {  
    a: 1,  
    b: { f: { g: 1 } },  
    c: [1, 2, 3]  
};  
const obj2 = $.extend(true, {}, obj1);  
console.log(obj1.b.f === obj2.b.f); // false  
```  
  
  
  
  
  
### JSON.stringify()  
  
```js  
const obj2=JSON.parse(JSON.stringify(obj1));  
```  
  
但是这种方式存在弊端，会忽略`undefined`、`symbol`和`函数`  
  
```js  
const obj = {  
    name: 'A',  
    name1: undefined,  
    name3: function() {},  
    name4:  Symbol('A')  
}  
const obj2 = JSON.parse(JSON.stringify(obj));  
console.log(obj2); // {name: "A"}  
```  
  
  
  
### 循环递归  
  
```js  
function deepClone(obj, hash = new WeakMap()) {  
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作  
  if (obj instanceof Date) return new Date(obj);  
  if (obj instanceof RegExp) return new RegExp(obj);  
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝  
  if (typeof obj !== "object") return obj;  
  // 是对象的话就要进行深拷贝  
  if (hash.get(obj)) return hash.get(obj);  
  let cloneObj = new obj.constructor();  
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身  
  hash.set(obj, cloneObj);  
  for (let key in obj) {  
    if (obj.hasOwnProperty(key)) {  
      // 实现一个递归拷贝  
      cloneObj[key] = deepClone(obj[key], hash);  
    }  
  }  
  return cloneObj;  
}  
```  
  
  
  
  
  
  
  
## 四、区别  
  
下面首先借助两张图，可以更加清晰看到浅拷贝与深拷贝的区别  
  
 ![](https://static.vue-js.com/d9862c00-69b8-11eb-ab90-d9ae814b240d.png)  
  
从上图发现，浅拷贝和深拷贝都创建出一个新的对象，但在复制对象属性的时候，行为就不一样  
  
浅拷贝只复制属性指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存，修改对象属性会影响原对象  
  
```js  
// 浅拷贝  
const obj1 = {  
    name : 'init',  
    arr : [1,[2,3],4],  
};  
const obj3=shallowClone(obj1) // 一个浅拷贝方法  
obj3.name = "update";  
obj3.arr[1] = [5,6,7] ; // 新旧对象还是共享同一块内存  
  
console.log('obj1',obj1) // obj1 { name: 'init',  arr: [ 1, [ 5, 6, 7 ], 4 ] }  
console.log('obj3',obj3) // obj3 { name: 'update', arr: [ 1, [ 5, 6, 7 ], 4 ] }  
```  
  
但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象  
  
```js  
// 深拷贝  
const obj1 = {  
    name : 'init',  
    arr : [1,[2,3],4],  
};  
const obj4=deepClone(obj1) // 一个深拷贝方法  
obj4.name = "update";  
obj4.arr[1] = [5,6,7] ; // 新对象跟原对象不共享内存  
  
console.log('obj1',obj1) // obj1 { name: 'init', arr: [ 1, [ 2, 3 ], 4 ] }  
console.log('obj4',obj4) // obj4 { name: 'update', arr: [ 1, [ 5, 6, 7 ], 4 ] }  
```  
  
### 小结  
  
前提为拷贝类型为引用类型的情况下：  
  
- 浅拷贝是复制内存中的地址，拷贝前后的对象，因为引用类型共享了同一块内存，修改会相互影响。  
- 深拷贝是递归拷贝深层次，属性为对象时，深拷贝是新开栈，两个对象指向不同的地址  
# 一个滚动公告组件，如何在鼠标滑入时停止播放，在鼠标离开时继续等待滑入时的剩余等待时间后播放？  
轮播图的定时滚动，一般是使用 setInterval 实现。  
   
可以监听轮播图的 `mouseover` 和 `mouseout` 事件，如果 `mouseover` 被触发，就清除定时轮播，并记录下一次轮播的剩余等待时间`xs`，如果 `mouseout` 被触发，就在 `xs` 的时间后立即进行切换，并且开启定时轮播。  
  
当然其中的细节还比较多，比如 `mouseover` 的过程中手动切换了轮播图该怎么处理等等。  
# 相比于npm和yarn，pnpm的优势是什么？  
pnpm对比npm/yarn的优点：  
  
* 更快速的依赖下载  
* 更高效的利用磁盘空间  
* 更优秀的依赖管理  
  
我们按照包管理工具的发展历史，从 npm2 开始讲起：  
  
## npm2  
  
用 node 版本管理工具把 node 版本降到 4，那 npm 版本就是 2.x 了。  
  
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b4eef39cebc949859ff12c8d51e747e0~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
然后找个目录，执行下 npm init -y，快速创建个 package.json。  
  
然后执行 npm install express，那么 express 包和它的依赖都会被下载下来：  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8ad0f0e13d1404c93089bde5ae08112~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
展开 express，它也有 node\_modules：  
  
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ada5f744720c4cb7b4d846ee2d1bf81b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
再展开几层，每个依赖都有自己的 node\_modules：  
  
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ff1d1c0cab14b65b905fe1e74db59a1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
也就是说 npm2 的 node\_modules 是嵌套的。  
  
这很正常呀？有什么不对么？  
  
这样其实是有问题的，多个包之间难免会有公共的依赖，这样嵌套的话，同样的依赖会复制很多次，会占据比较大的磁盘空间。  
  
这个还不是最大的问题，致命问题是 windows 的文件路径最长是 260 多个字符，这样嵌套是会超过 windows 路径的长度限制的。  
  
当时 npm 还没解决，社区就出来新的解决方案了，就是 yarn：  
  
## yarn  
  
yarn 是怎么解决依赖重复很多次，嵌套路径过长的问题的呢？  
  
铺平。所有的依赖不再一层层嵌套了，而是全部在同一层，这样也就没有依赖重复多次的问题了，也就没有路径过长的问题了。  
  
我们把 node\_modules 删了，用 yarn 再重新安装下，执行 yarn add express：  
  
这时候 node\_modules 就是这样了：  
  
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71906633d465460183c3eb880391bf2e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
全部铺平在了一层，展开下面的包大部分是没有二层 node\_modules 的：  
  
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52e6392c33f04f7a949c07fa7d65d358~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
当然也有的包还是有 node\_modules 的，比如这样：  
  
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd0a3971237445aea60f4de1c13250a7~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
为什么还有嵌套呢？  
  
因为一个包是可能有多个版本的，提升只能提升一个，所以后面再遇到相同包的不同版本，依然还是用嵌套的方式。  
  
npm 后来升级到 3 之后，也是采用这种铺平的方案了，和 yarn 很类似：  
  
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79f93e2855514117bb73de52284d86fa~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
当然，yarn 还实现了 yarn.lock 来锁定依赖版本的功能，不过这个 npm 也实现了。  
  
yarn 和 npm 都采用了铺平的方案，这种方案就没有问题了么？  
  
并不是，扁平化的方案也有相应的问题。  
  
最主要的一个问题是幽灵依赖，也就是你明明没有声明在 dependencies 里的依赖，但在代码里却可以 require 进来。  
  
这个也很容易理解，因为都铺平了嘛，那依赖的依赖也是可以找到的。  
  
但是这样是有隐患的，因为没有显式依赖，万一有一天别的包不依赖这个包了，那你的代码也就不能跑了，因为你依赖这个包，但是现在不会被安装了。  
  
这就是幽灵依赖的问题。  
  
而且还有一个问题，就是上面提到的依赖包有多个版本的时候，只会提升一个，那其余版本的包不还是复制了很多次么，依然有浪费磁盘空间的问题。  
  
那社区有没有解决这俩问题的思路呢？  
  
当然有，这不是 pnpm 就出来了嘛。  
  
那 pnpm 是怎么解决这俩问题的呢？  
  
## pnpm  
  
回想下 npm3 和 yarn 为什么要做 node\_modules 扁平化？不就是因为同样的依赖会复制多次，并且路径过长在 windows 下有问题么？  
  
那如果不复制呢，比如通过 link。  
  
首先介绍下 link，也就是软硬连接，这是操作系统提供的机制，硬连接就是同一个文件的不同引用，而软链接是新建一个文件，文件内容指向另一个路径。当然，这俩链接使用起来是差不多的。  
  
如果不复制文件，只在全局仓库保存一份 npm 包的内容，其余的地方都 link 过去呢？  
  
这样不会有复制多次的磁盘空间浪费，而且也不会有路径过长的问题。因为路径过长的限制本质上是不能有太深的目录层级，现在都是各个位置的目录的 link，并不是同一个目录，所以也不会有长度限制。  
  
没错，pnpm 就是通过这种思路来实现的。  
  
再把 node\_modules 删掉，然后用 pnpm 重新装一遍，执行 pnpm install。  
  
你会发现它打印了这样一句话：  
  
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b2d51d9a17743a4bafc42f1bbfd310c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
包是从全局 store 硬连接到虚拟 store 的，这里的虚拟 store 就是 node\_modules/.pnpm。  
  
我们打开 node\_modules 看一下：  
  
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9b4dc807ca6e4ae7a955c8dd6385cb46~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
确实不是扁平化的了，依赖了 express，那 node\_modules 下就只有 express，没有幽灵依赖。  
  
展开 .pnpm 看一下：  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65a69589bd534fdd97bdbeb6e3e1024c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
所有的依赖都在这里铺平了，都是从全局 store 硬连接过来的，然后包和包之间的依赖关系是通过软链接组织的。  
  
比如 .pnpm 下的 expresss，这些都是软链接，  
  
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c50d8dc8a2a4466ba9e5eccd5c15614e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
也就是说，所有的依赖都是从全局 store 硬连接到了 node\_modules/.pnpm 下，然后之间通过软链接来相互依赖。  
  
官方给了一张原理图，配合着看一下就明白了：  
  
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/326a2090786e4d16b2d6fce25e876680~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
这就是 pnpm 的实现原理。  
  
那么回过头来看一下，pnpm 为什么优秀呢？  
  
首先，最大的优点是节省磁盘空间呀，一个包全局只保存一份，剩下的都是软硬连接，这得节省多少磁盘空间呀。  
  
其次就是快，因为通过链接的方式而不是复制，自然会快。  
  
这也是它所标榜的优点：  
  
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ba8815b36b3498ea4a3c2248d192bd6~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?)  
  
相比 npm2 的优点就是不会进行同样依赖的多次复制。  
  
相比 yarn 和 npm3+ 呢，那就是没有幽灵依赖，也不会有没有被提升的依赖依然复制多份的问题。  
  
这就已经足够优秀了，对 yarn 和 npm 可以说是降维打击。  
  
## 总结  
  
pnpm 最近经常会听到，可以说是爆火。本文我们梳理了下它爆火的原因：  
  
npm2 是通过嵌套的方式管理 node\_modules 的，会有同样的依赖复制多次的问题。  
  
npm3+ 和 yarn 是通过铺平的扁平化的方式来管理 node\_modules，解决了嵌套方式的部分问题，但是引入了幽灵依赖的问题，并且同名的包只会提升一个版本的，其余的版本依然会复制多次。  
  
pnpm 则是用了另一种方式，不再是复制了，而是都从全局 store 硬连接到 node\_modules/.pnpm，然后之间通过软链接来组织依赖关系。  
  
这样不但节省磁盘空间，也没有幽灵依赖问题，安装速度还快，从机制上来说完胜 npm 和 yarn。  
  
pnpm 就是凭借这个对 npm 和 yarn 降维打击的。  
# 用js实现二叉树的定义和基本操作  
树是计算机科学中经常用到的一种数据结构。树是一种非线性的数据结构，以分层的方式存储数据。树被用来存储具有层级关系的数据，比如文件系统中的文件；树还被用来存储有序列表。  
  
二叉树具有诸多优点。相对于链表来说，二叉树在进行查找时速度非常快，而相对于数组来说，为二叉树添加或删除元素也非常快。  
  
## 二叉树  
  
二叉树是一种特殊的树，表现在它的子节点个数不超过两个。且二叉树的子树有左右之分，其次序不能任意颠倒。  
  
在实现二叉树时，采用的存储结构为链式存储结构，链式结构的意思是采用一个链表来存储一颗二叉树，二叉树中每一个节点用链表的一个节点来存储，在二叉树中，节点结构至少有三个域：数据域data，左指针域left，右指针域right，如下图所示：  
  
![](https://pic4.zhimg.com/80/v2-0cf0e67e9d10119d6ec0d15fd2594653_1440w.webp)  
  
二叉链表的存储结构描述如下：  
  
```js  
class Node{  
    constructor(data, left, right){  
        this.data = data;  
        this.left = left;  
        this.right = right;  
        this.count = 1;  
    }  
}  
  
```  
  
与图1不同之处在于多了一个count变量，这个变量的作用在于，在向二叉排序树中插入节点时，如果发现有已经有相同的节点值了，就放弃插入，但是将该节点的count变量加一，这是为了后面实现统计文本中不同的单词数量而设计的。  
  
使用不同的存储结构，实现二叉树的链表的算法也不同。因此接下来的算法全都基于当前所选的存储结构。  
  
其次，将要实现的并不是普通的二叉树，而是二叉排序树，其定义为：  
  
> 二叉排序树或者是一棵空树，或者是具有下列性质的二叉树：    
> （1）若左子树不空，则左子树上所有结点的值均小于它的根结点的值；    
> （2）若右子树不空，则右子树上所有结点的值均大于它的根结点的值；    
> （3）左、右子树也分别为二叉排序树；    
> （4）没有键值相等的节点。  
  
    
## 二叉排序树  
  
在二叉排序树的实现了一些基本操作：插入节点，删除节点，寻找节点，以及获取最小值和最大值。  
  
代码框架：  
  
```js  
class BSTree {  
    constructor() {  
        this.root = null;  
    }  
  
    // 删除一个节点  
    _removeNode(node, data) {  
         
    }  
  
    // 删除给定的数据节点  
    remove(data) {  
        this.root = this._removeNode(this.root, data);  
    }  
  
    // 向二叉树中插入节点  
    insert(data) {  
          
    }  
  
    // 寻找给定数据的节点  
    find(data) {  
          
    }  
  
    // 获得最小值的节点  
    getMinNode(node = this.root) {  
          
    }  
  
    // 获得最大值的节点  
    getMaxNode(node = this.root) {  
          
    }  
}  
  
```  
  
## 实现二叉排序树的各种方法  
  
首先是insert(data)方法，从总体上来说，插入操作可以分为两步，新建值为data的节点，然后在二叉排序树中找到合适的位置插入即可。  
  
建立以data为值的新的节点比较容易，只要  
  
```js  
let newNode = new Node(data, null, null);  
  
```  
  
即可，关键就在于如何找到正确的插入位置。  
  
这里使用parentNode来记录当前节点的父节点，初始时，该变量为null，当前节点为currNode，初始时为该二叉树的根节点。  
  
* 如果在插入时，root节点为空，则直接将新节点赋给root节点即可。  
* 如果新的节点值小于当前节点值，说明待插入的位置应在在当前节点的左子树上，那么在大于时，就应该在当前节点的右子树上。进而更新当前节点所指向的节点，直到当前节点为空时，说明找到了正确的插入位置。  
  
insert()的具体代码如下：  
  
```js  
    // 向二叉树中插入节点  
    insert(data) {  
        let newNode = new Node(data, null, null);  
  
        if (this.root == null) {  
            this.root = newNode;  
        } else {  
            let currNode = this.root;  
            let parentNode = null;  
  
            while (true) {  
                parentNode = currNode;  
  
                if (newNode.data < currNode.data) {  
                    currNode = currNode.left;  // 更新当前指点的指向  
  
                    if (!currNode) {  // 当前节点为空时，说明找到了正确的插入位置  
                        parentNode.left = newNode;  
                        break;  
                    }  
                } else if (newNode.data > currNode.data) {  
                    currNode = currNode.right;   // 更新当前指点的指向  
  
                    if (!currNode) {  // // 当前节点为空时，说明找到了正确的插入位置  
                        parentNode.right = newNode;  
                        break;  
                    }  
                } else if (newNode.data == currNode.data) {  
                    // 如果给定的数据再次出现，就更新计数值  
                    currNode.count++;  
                    break;  
                }  
            }  
        }  
    }  
  
```  
  
    
寻找最小值函数getMinNode()，该方法较为简单，因为是一个二叉排序树，所以最小值永远在最左边的分支上，故而一直沿着左分支走到头就是最小值了。  
  
```js  
   // 获得最小值的节点  
    getMinNode(node = this.root) {  
        let currNode = node;  
        while (currNode.left) {  
            currNode = currNode.left;  
        }  
        return currNode;  
    }  
  
```  
  
最大值也是同样的道理：  
  
```js  
   // 获得最大值的节点  
    getMaxNode(node = this.root) {  
        let currNode = node;  
        while (currNode.right) {  
            currNode = currNode.right;  
        }  
        return currNode;  
    }  
  
```  
  
find()方法，在二叉树排序树中寻找给定的数据，比较简单：  
  
```js  
    // 寻找给定数据的节点  
    find(data) {  
        let currNode = this.root;  
        while (currNode) {  
            if (currNode.data == data) {  
                return currNode;  
            } else if (data < currNode.data) {  
                currNode = currNode.left;  
            } else {  
                currNode = currNode.right;  
            }  
        }  
        return null;  
    }  
  
```  
  
    
接下来时较为复杂一些的remove()方法，由于删除节点操作使用到了递归的操作，所以单独定义了一个函数：  
  
```js  
_removeNode(node, data){}  
  
```  
  
这里在\_removeNode()的方法中实现真正的删除操作。该函数的功能是删除以data为值的节点，函数名称前面有个下划线表示不应该在实例中调用此函数。  
  
这里在remove()方法中调用了这个函数：  
  
```js  
remove(data){  
    this.root = this._removeNode(this.root, data);  
}  
  
```  
  
在删除节点时，一共可以分为三种情况：  
  
1. 待删除的节点是叶子节点。  
2. 待删除的节点没有左子节点，或者没有右子节点。  
3. 待删除的节点的左右子节点均存在。  
  
当待删除的节点时叶子节点时，这种情况比较简单，直接将待删除的节点置空返回即可。  
  
当待删除的节点没有左子节点时，返回该节点的右孩子节点，并删除该节点。待删除节点没有右节点时类似处理。  
  
比较麻烦的是最后一种情况，待删除的节点的左右子节点均存在时，可以有两种做法：要么查找待删除节点左子树上的最大值，要么查找其右子树上的最小值。  
  
这里使用查找其右子树上的最小值的方法。在找到待删除节点的右子树上的最小值后，创建一个临时节点，将临时节点上的值复制到待删除节点，然后再删除临时节点。  
  
```js  
    // 删除一个节点  
    _removeNode(node, data) {  
        if (node == null) {  
            return null;  
        }  
        if (data == node.data) {  
            // 叶子节点  
            if (node.left == null && node.right == null) {  
                return null;  
            }  
  
            // 没有左节点的节点  
            if (node.left == null) return node.right;  
  
  
            //没有右节点的节点  
            if (node.right == null) return node.left;  
       
  
            // 有两个节点的节点  
            /*    
             做法：  
                找到待删除节点的右子树上的最小值创建一个临时节点。  
                将临时节点上的值复制到待删除节点，然后再删除临时节点  
            */  
  
            // 寻找右子树上的最小值  
            let tmpNode = this.getMinNode(node.right);  
            node.data = tmpNode.data;  
            node.right = this._removeNode(node.right, tmpNode.data);  
            return node;  
        } else if (data < node.data) {  // 待删除节点在左子树上  
            node.left = this._removeNode(node.left, data);  
            return node;  
        } else {  // 待删除节点在右子树上  
            node.right = this._removeNode(node.right, data);  
            return node;  
        }  
    }  
  
```  
  
该函数使用了递归的操作来删除一个节点，如果传入待删除的数据值正好等于传入的节点的数据值时，就开始判断是上面提到的3中情况的那一种。如果待删除数据值小于当前节点数据值，则说明待删除的数据在当前节点的左子树上，反之在右子树上。  
    
    
## 测试  
  
由于准备将二叉排序树的遍历操作写在下一篇中，所以担心方法可能写错了的小伙伴可能展示无法测试所写的插入和删除操作正确与否。先用写的获取最大值和最小值来测试下吧。  
  
```js  
let myTree = new BSTree();  
  
myTree.insert(20);  
myTree.insert(13);  
myTree.insert(7);  
myTree.insert(9);  
myTree.insert(15);  
myTree.insert(14);  
myTree.insert(42);  
myTree.insert(22);  
myTree.insert(21);  
myTree.insert(24);  
myTree.insert(57);  
  
```  
  
新建后的二叉排序树如下图所示：  
  
![](https://pic2.zhimg.com/80/v2-449e3e59d753e1b2558e11dd1ac8e88d_1440w.webp)  
  
    
获取最大值试一下：  
  
```js  
console.log(myTree.getMaxNode());  // Node {data: 57, left: null, right: null, count: 1}  
  
```  
  
可以看到值为57的节点确实没有左右子树。  
  
最小值：  
  
```js  
console.log(myTree.getMinNode());  // Node {data: 7, left: null, right: Node, count: 1}  
  
```  
  
可以看到值为7的节点只有右子树，与上图所示相同。  
  
删除节点7，模拟下删除时有右子节点的情况：  
  
```js  
myTree.remove(7);  
console.log(myTree.getMinNode());  // Node {data: 9, left: null, right: null, count: 1}  
  
```  
  
可见值为9的节点取代了原来值为7的节点的位置。  
  
删除节点42，模拟下删除时左右子树均存在的情况：  
  
```js  
myTree.remove(42);  
console.log(myTree.getMaxNode());  // Node {data: 57, left: Node, right: null, count: 1}  
  
```  
  
在删除值为42的节点时，使用的方法时寻找其右子树上的最大值，为57。将待删除的节点的值修改为57，然后在其右子树上删除值为57的节点即可。  
  
根据返回的结果来看，删除后最大值为57，其右子树为空。可见是正确的。  
  
# 非递归遍历二叉树  
二叉树使用递归实现前中后序遍历是非常容易的，本文给出非递归实现前中后序遍历的方法，核心的思想是使用一个栈，通过迭代来模拟递归的实现过程。  
  
下面实现中root代表二叉树根节点，每个节点都具有left,right两个指针，分别指向当前节点左右子树，一个val属性代表当前节点的值  
  
# 前序遍历（preorderTraversal）  
  
```javascript  
const preorderTraversal = function(root) {  
    const stack = [], res = []  
    root && stack.push(root)  
    // 使用一个栈stack，每次首先输出栈顶元素，也就是当前二叉树根节点，之后依次输出二叉树的左孩子和右孩子  
    while(stack.length > 0) {  
        let cur = stack.pop()  
        res.push(cur.val)  
        // 先入栈的元素后输出，所以先入栈当前节点右孩子，再入栈左孩子  
        cur.right && stack.push(cur.right)  
        cur.left && stack.push(cur.left)  
    }  
    return res  
};  
```  
  
# 中序遍历（inorderTraversal）  
  
## 第一种方法  
  
```javascript  
const inorderTraversal = function(root) {  
    const res = [], stack = []  
    while(root || stack.length) {  
        // 中序遍历，首先迭代左孩子，左孩子依次入栈  
        if(root.left) {  
            stack.push(root)  
            root = root.left  
        // 如果左孩子为空了，输出节点，去右孩子中迭代，  
        } else if(root.right) {  
            res.push(root.val)  
            root = root.right  
        // 如果左右孩子都为空了，输出当前节点，栈顶元素出栈，也就是回退到上一层，此时置空节点左孩子，防止while循环重复进入  
        } else if(!root.left && !root.right) {  
            res.push(root.val)  
            root = stack.pop()  
            root && (root.left = null)  
        }  
    }  
    return res  
};  
```  
  
## 第二种方法（第一种优化）  
  
我们在上一种方法里，条件判断`root.left`,`root.right`,其实我们可以只考虑当前节点node，这样我们只需要判断node是否存在，简化代码  
  
```javascript  
 const inorderTraversal = function(root) {  
    const res = [], stack = []  
    let node = root;  
    while (stack.length > 0 || node !== null) {  
        // 这里用当前节点node是否存在，简化代码，  
        if (node) {  
            stack.push(node);  
            node = node.left  
        } else {  
            node = stack.pop();  
            res.push(node.val);  
            node = node.right;  
        }  
    }  
    return res;  
};  
```  
  
# 后序遍历（postorderTraversal）  
  
## 第一种方法  
  
```javascript  
// 1, 先依次遍历左孩子, 在栈中依次记录，当左孩子为空时，遍历到叶子节点 //跳回上一层节点, 为防止while循环重复进入，将上一层左孩子置为空  
// 2, 接着遍历右孩子, 在栈中依次记录值，当右孩子为空时, 遍历到叶子节点  
// 跳回上一层节点, 为防止while循环重复进入，将上一层右孩子置为空  
const postorderTraversal = function(root) {  
    let res = [], stack = []  
    while (root || stack.length) {  
        if (root.left) {  
            stack.push(root)  
            root = root.left  
        } else if (root.right) {  
            stack.push(root)  
            root = root.right  
        } else {  
            res.push(root.val)  
            root = stack.pop()  
            if (root && root.left) root.left = null  
            else if (root && root.right) root.right = null  
        }  
    }  
    return res  
};  
```  
  
## 第二种方法（逆序思维）  
  
再回头看看前序遍历的代码，实际上后序遍历和前序遍历是一个逆序过程  
  
```javascript  
// 结果数组中依次进入的是节点的左孩子，右孩子，节点本身，注意使用的是  
// unshift，与前序遍历push不同，每次数组头部添加元素，实际上就是前序 遍历的逆序过程  
const postorderTraversal = function(root) {  
    const res = [], stack = []  
    while (root || stack.length) {  
        res.unshift(root.val)  
        root.left && stack.push(root.left)  
        root.right && stack.push(root.right)  
        root = stack.pop()  
    }  
    return res  
};  
```  
  
## 第三种方法（逆序思维的另一种写法）  
  
```javascript  
// 和前序遍历区别在于，结果数组res中入栈顺序是当前节点，右孩子，左孩子，最后  
// 使用js数组reverse方法反转（逆序），使得输出顺序变为左孩子，右孩子，当前节点，实现后序遍历  
const postorderTraversal = function(root) {  
    let stack = [], res = []  
    root && stack.push(root)  
    while(stack.length > 0) {  
        let cur = stack.pop()  
        res.push(cur.val)  
        cur.left && stack.push(cur.left)  
        cur.right && stack.push(cur.right)  
    }  
    return res.reverse()  
};  
```  
  
本文详细介绍了二叉树前中后序遍历的非递归实现，核心是借助一个栈stack,使用迭代的方式模拟递归过程  
# 导致页面加载白屏时间长的原因有哪些，怎么进行优化？  
# 一、白屏时间  
  
白屏时间：即用户点击一个链接或打开浏览器输入URL地址后，从屏幕空白到显示第一个画面的时间。  
  
# 二、白屏时间的重要性  
  
当用户点开一个链接或者是直接在浏览器中输入URL开始进行访问时，就开始等待页面的展示。页面渲染的时间越短，用户等待的时间就越短，用户感知到页面的速度就越快。这样可以极大的**提升用户的体验，减少用户的跳出，提升页面的留存率。**  
  
# 三、白屏的过程  
  
从输入url，到页面的画面展示的过程  
  
1、首先，在浏览器地址栏中输入url  
  
2、浏览器先查看浏览器缓存-系统缓存-路由器缓存，如果缓存中有，会直接在屏幕中显示页面内容。若没有，则跳到第三步操作。  
  
3、在发送http请求前，需要域名解析(DNS解析)，解析获取相应的IP地址。  
  
4、浏览器向服务器发起tcp连接，与浏览器建立tcp三次握手。  
  
5、握手成功后，浏览器向服务器发送http请求，请求数据包。  
  
6、服务器处理收到的请求，将数据返回至浏览器  
  
7、浏览器收到HTTP响应  
  
8、读取页面内容，浏览器渲染，解析html源码  
  
9、生成Dom树、解析css样式、js交互,渲染显示页面  
  
浏览器下载HTML后，首先解析头部代码，进行样式表下载，然后继续向下解析HTML代码，构建DOM树，同时进行样式下载。当DOM树构建完成后，立即开始构造CSSOM树。理想情况下，样式表下载速度够快，DOM树和CSSOM树进入一个并行的过程，当两棵树构建完毕，构建渲染树，然后进行绘制。  
  
Tips:浏览器安全解析策略对解析HTML造成的影响：  
  
当解析HTML时遇到内联JS代码，会阻塞DOM树的构建，会先执行完JS代码;当CSS样式文件没有下载完成时，浏览器解析HTML遇到了内联JS代码，此时，浏览器暂停JS脚本执行，暂停HTML解析。直到CSS文件下载完成，完成CSSOM树构建，重新恢复原来的解析。  
  
JavaScript 会阻塞 DOM 生成，而样式文件又会阻塞 JavaScript 的执行，所以在实际的工程中需要重点关注 JavaScript 文件和样式表文件，使用不当会影响到页面性能的。  
  
# 四、白屏-性能优化  
  
## 1\. DNS解析优化  
  
针对DNS Lookup环节，我们可以针对性的进行DNS解析优化。  
  
* DNS缓存优化  
* DNS预加载策略  
* 稳定可靠的DNS服务器  
  
## 2\. TCP网络链路优化  
  
多花点钱吧  
  
## 3\. 服务端处理优化  
  
服务端的处理优化，是一个非常庞大的话题，会涉及到如Redis缓存、数据库存储优化或是系统内的各种中间件以及Gzip压缩等…  
  
## 4\. 浏览器下载、解析、渲染页面优化  
  
根据浏览器对页面的下载、解析、渲染过程，可以考虑一下的优化处理：  
  
* 尽可能的精简HTML的代码和结构  
* 尽可能的优化CSS文件和结构  
* 一定要合理的放置JS代码，尽量不要使用内联的JS代码  
* 将渲染首屏内容所需的关键CSS内联到HTML中，能使CSS更快速地下载。在HTML下载完成之后就能渲染了，页面渲染的时间提前，从而缩短首屏渲染时间；  
* 延迟首屏不需要的图片加载，而优先加载首屏所需图片（offsetTop<clientHeight）  
  
```js  
document.documentElement.clientHeight//获取屏幕可视区域的高度  
element.offsetTop//获取元素相对于文档顶部的高度  
```  
  
因为JavaScript 会阻塞 DOM 生成，而样式文件又会阻塞 JavaScript 的执行，所以在实际的工程中需要重点关注 JavaScript 文件和样式表文件，使用不当会影响到页面性能的。  
# 说说你对 pnpm 的了解  
 pnpm 的官方文档是这样说的:  
  
> Fast, disk space efficient package manager  
  
pnpm 本质上就是一个包管理器，这一点跟 npm/yarn 没有区别，但它作为杀手锏的两个优势在于:  
  
* 包安装速度极快；  
* 磁盘空间利用非常高效。  
  
pnpm 与 npm/yarn 相似，也是一个包管理器，但与他们不同的是，作者设计了一套理论上更完善的依赖结构以及高效的文件复用，来解决 npm/yarn 未打算解决或还不够完善的问题。  
  
### 嵌套 + 扁平 + pnpm-lock.yaml  
  
打开通过 pnpm 安装的项目 node\_modules 文件夹，你会发现几乎只会有当前 **package.json** 中所声明的各个依赖（的软连接），而 "真正" 的模块文件，存在于 **node\_modules/.pnpm**，由 **模块名@版本号** 形式的文件夹**扁平化**存储（解决依赖重复安装）。  
  
这样的设计，很好的避免了项目中 **跨声明访问** 的问题，因为当前项目 **node\_modules** 只有声明的依赖可以访问。  
  
而 **pnpm-lock.yaml** 文件如同 yarn.lock、package-lock.json 一样，可以为项目提供一份各个依赖稳定的版本信息。  
  
### 硬链接与更高效的复用  
  
与 yarn 的 **PnP模式** 效果类似，为了提升**文件存储效率**以及降低文件**IO开销**，**node\_modules/.pnpm** 中存储的文件其实是 pnpm 实际缓存文件的 **硬链接**，从而避免了多个项目带来多份相同文件引起的空间浪费问题。  
  
pnpm 还额外的使用了 **内容寻址的文件系统** 来存储依赖文件。当遇到**两个版本**的 **a模块** 依赖，但两个版本之前只有**一个文件**存在差异时，pnpm 只会新增一个差异文件，最大化的提升文件存储效率。  
  
  
  
# 怎么预防用户快速连续点击，造成数据多次提交？  
为了防止重复提交，前端一般会在第一次提交的结果返回前，将提交按钮禁用。  
  
实现的方法有很多种：  
  
* css设置 `pointer-events` 为 `none`  
* 增加变量控制，当变量满足条件时才执行点击事件的后续代码  
* 如果按钮使用 button 标签实现，可以使用 `disabled` 属性  
* 加遮罩层，比如一个全屏的loading，避免触发按钮的点击事件  
* ...  
# 如果使用 Math.random() 计算中奖概率会有什么问题吗？
### 一、引言  
  
我们日常开发经常会用到随机数，基本上我接触下来，都是使用 `Math.random()` 生成的。  
  
例如生成随机ID：  
  
```js  
document.body.id = ('_' + Math.random()).replace('0.', '');  
```  
  
请问这样实现有没有问题？  
  
回答：没有问题。  
  
例如随机排序：  
  
```js  
[1, 2, 3, 4, 5].sort(_ => Math.random() - .5);  
```  
  
请问这样实现有没有问题？  
  
回答：没有问题。  
  
但是，如果你希望实现加密操作，例如生成密钥，尤其是在 Node.js 服务层，则 `Math.random()` 就有问题了，会有潜在的安全风险，需要使用 `crypto.getRandomValues()` 方法。  
  
### 二、Math.random的安全风险  
  
提到 `Math.random()` 的安全风险，有开发人员会说因为 `Math.random()` 返回的是伪随机数。  
  
这个解释似是而非，和伪随机数没有关系，`getRandomValues()` 方法返回的也是伪随机数。  
  
还有人说因为 `Math.random()` 返回的随机值范围不是均匀的，这个回答就不是似是而非了，而是大错特错。  
  
那究竟为何是不安全的呢？  
  
这个就要讲讲 `Math.random()` 方法的底层实现了，这里有[一篇文章](https://www.anquanke.com/post/id/231799)有深入介绍，我简述下其中的要点。  
  
`Math.random()` 函数返回一个范围0-1的伪随机浮点数，其在 V8 中的实现原理是这样的：  
  
为了保证足够的性能，`Math.random()` 随机数并不是实时生成的，而是直接生成一组随机数（64个），并放在缓存中。  
  
当这一组随机数取完之后再重新生成一批，放在缓存中。  
  
由于 `Math.random()` 的底层算法是公开的（xorshift128+ 算法），V8 源码可见，因此，是可以使用其他语言模拟的，这就导致，如果攻击者知道了当前随机生成器的状态，那就可以知道缓存中的所有随机数，那就很容易匹配与破解。  
  
例如抽奖活动，使用 `Math.random()` 进行随机，那么就可以估算出一段时间内所有的中奖结果，从而带来非常严重且致命的损失。  
  
此时应该使用 `getRandomValues()` 方法。  
  
### 三、了解getRandomValues方法  
  
`Crypto.getRandomValues()` 方法返回的也是伪随机数，不是真随机，按照 MDN 的说法，是为了性能考虑，没有使用真随机。  
  
实际上，按照我的认识，所有可以使用算法生成的随机数都可以看成是伪随机数，真随机数应该是存在自然界，例如粒子的起伏，声音的噪点，分子的分布等。  
  
和 `Math.random()` 方法的区别在于，`getRandomValues()` 方法的随机种子生成器更加的无序，例如系统层面的无序源（有些硬件自带随机种子）。  
  
然后不同浏览器下 `getRandomValues()` 方法生成的随机数可能是有区别的。  
  
以及 `getRandomValues()` 方法的底层实现是没有缓存的，随机数都是实时生成的，因此，性能上是要比 `Math.random()` 差的，因此，如果是高并发的场景，同时随机数仅仅是用做随机，与安全和金钱不相关，请使用 `Math.random()` 而不是 `getRandomValues()`。  
  
就 Web 前端而言，必须要使用 `getRandomValues()` 方法的场景很少，不过由于纯前端几乎不存在所谓的高并发，因此，你使用 `getRandomValues()` 方法也是可以的，有装逼的作用。  
  
#### 语法和使用  
  
```js  
let randNumber = self.crypto.getRandomValues(new Uint32Array(1))[0];  
// 一串随机整数，通常10位  
console.log(randNumber);  
```  
  
语法为：  
  
```js  
crypto.getRandomValues(typedArray)  
```  
  
支持的参数 `typedArray` 表示整数型的类型数组，包括：Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array 或者 Uint32Array。  
  
返回值回是所有被替换为随机数的新的数组。  
  
不过 `getRandomValues()` 方法名称有些长，不利于记忆和敏捷使用，我们可以改造下，例如：  
  
```js  
Math.randomValue = function () {  
    return self.crypto.getRandomValues(new Uint32Array(1))[0];  
};  
```  
  
这样我们就可以使用 `Math.randomValue()` 方法返回足够安全的随机值了。  
  
# 如何判断页面是通过PC端还是移动端访问？  
## 一、navigator.userAgent  
  
最简单的方法就是分析浏览器的 user agent 字符串，它包含了设备信息。  
  
JS 通过`navigator.userAgent`属性拿到这个字符串，只要里面包含`mobi`、`android`、`iphone`等关键字，就可以认定是移动设备。  
  
```javascript  
  
if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {  
  // 当前设备是移动设备  
}  
   
// 另一种写法  
if (  
  navigator.userAgent.match(/Mobi/i) ||  
  navigator.userAgent.match(/Android/i) ||  
  navigator.userAgent.match(/iPhone/i)  
) {  
  // 当前设备是移动设备  
}  
   
```  
  
这种方法的优点是简单方便，缺点是不可靠，因为用户可以修改这个字符串，让手机浏览器伪装成桌面浏览器。  
  
Chromium 系的浏览器，还有一个`navigator.userAgentData`属性，也是类似的作用。不同之处是它将 user agent 字符串解析为一个对象，该对象的`mobile`属性，返回一个布尔值，表示用户是否使用移动设备。  
  
```javascript   
const isMobile = navigator.userAgentData.mobile;    
```  
  
注意，苹果的 Safari 浏览器和 Firefox 浏览器都不支持这个属性，具体情况可以查看 [Caniuse 网站](https://caniuse.com/mdn-api%5Fnavigator%5Fuseragentdata)。  
  
此外，还有一个已经废除的[navigator.platform属性](https://stackoverflow.com/questions/19877924/what-is-the-list-of-possible-values-for-navigator-platform-as-of-today)，所有浏览器都支持，所以也可以用。它返回一个字符串，表示用户的操作系统。  
  
```javascript  
   
if (/Android|iPhone|iPad|iPod/i.test(navigator.platform)) {  
 // 当前设备是移动设备  
}   
```  
  
## 二、window.screen，window.innerWidth  
  
另一种方法是通过屏幕宽度，判断是否为手机。  
  
`window.screen`对象返回用户设备的屏幕信息，该对象的`width`属性是屏幕宽度（单位为像素）。  
  
```javascript  
  
if (window.screen.width < 500) {  
 // 当前设备是移动设备   
}  
  
```  
  
上面示例中，如果屏幕宽度`window.screen.width`小于500像素，就认为是手机。  
  
这个方法的缺点在于，如果手机横屏使用，就识别不了。  
  
另一个属性`window.innerWidth`返回浏览器窗口里面的网页可见部分的宽度，比较适合指定网页在不同宽度下的样式。  
  
```javascript  
const getBrowserWidth = function() {  
 if (window.innerWidth < 768) {  
   return "xs";  
 } else if (window.innerWidth < 991) {  
   return "sm";  
 } else if (window.innerWidth < 1199) {  
   return "md";  
 } else {  
   return "lg";  
 }  
};  
```  
  
## 三、window.orientation  
  
第三种方法是侦测屏幕方向，手机屏幕可以随时改变方向（横屏或竖屏），桌面设备做不到。  
  
`window.orientation`属性用于获取屏幕的当前方向，只有移动设备才有这个属性，桌面设备会返回`undefined`。  
  
```javascript  
  
if (typeof window.orientation !== 'undefined') {  
 // 当前设备是移动设备   
}  
  
```  
  
注意，iPhone 的 Safari 浏览器不支持该属性。  
  
## 四、touch 事件  
  
第四种方法是，手机浏览器的 DOM 元素可以通过`ontouchstart`属性，为`touch`事件指定监听函数。桌面设备没有这个属性。  
  
```javascript  
  
function isMobile() {   
 return ('ontouchstart' in document.documentElement);   
}  
  
// 另一种写法  
function isMobile() {  
try {  
   document.createEvent("TouchEvent"); return true;  
 } catch(e) {  
   return false;   
 }  
}  
```  
  
## 五、window.matchMedia()  
  
最后一种方法是结合 CSS 来判断。  
  
CSS 通过 media query（媒介查询）为网页指定响应式样式。如果某个针对手机的 media query 语句生效了，就可以认为当前设备是移动设备。  
  
`window.matchMedia()`方法接受一个 CSS 的 media query 语句作为参数，判断这个语句是否生效。  
  
```javascript  
  
let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;  
  
```  
  
上面示例中，`window.matchMedia()`的参数是一个 CSS 查询语句，表示只对屏幕宽度不超过 700 像素的设备生效。它返回一个对象，该对象的`matches`属性是一个布尔值。如果是`true`，就表示查询生效，当前设备是手机。  
  
除了通过屏幕宽度判断，还可以通过指针的精确性判断。  
  
```javascript  
  
let isMobile = window.matchMedia("(pointer:coarse)").matches;  
  
```  
  
上面示例中，CSS 语句`pointer:coarse`表示当前设备的指针是不精确的。由于手机不支持鼠标，只支持触摸，所以符合这个条件。  
  
有些设备支持多种指针，比如同时支持鼠标和触摸。`pointer:coarse`只用来判断主指针，此外还有一个`any-pointer`命令判断所有指针。  
  
```javascript  
  
let isMobile = window.matchMedia("(any-pointer:coarse)").matches;  
  
```  
  
上面示例中，`any-pointer:coarse`表示所有指针里面，只要有一个指针是不精确的，就符合查询条件。  
  
## 六、工具包  
  
除了上面这些方法，也可以使用别人写好的工具包。这里推荐 [react-device-detect](https://www.npmjs.com/package/react-device-detect)，它支持多种粒度的设备侦测。  
  
```javascript  
  
import {isMobile} from 'react-device-detect';  
  
if (isMobile) {  
 // 当前设备是移动设备  
}  
  
```  
  
比如将当前页面生成一张海报，要求携带当前用户的登录信息。  
# 怎么使用 js 动态生成海报？  
## 方案一：DOM->canvas->image  
  
将目标 DOM 节点绘制到 canvas 画布，然后利用 canvas 相关的 API 以图片形式导出。  
  
可简单标记为绘制阶段和导出阶段两个步骤：  
  
* 绘制阶段：选择希望绘制的 DOM 节点，根据 DOM 的 `nodeType` 属性调用 `canvas` 对象的对应 API，将目标 DOM 节点绘制到 `canvas` 画布（例如对于 img 标签的绘制使用 drawImage 方法)。  
* 导出阶段：通过 canvas 的 `toDataURL` 或 `getImageData` 等对外接口，最终实现画布内容的导出。  
  
## 方案二：DOM->svg->canvas->image  
  
将 html 作为 svg 的外联元素，利用 svg 的 API 导出为图片  
  
## 方案三：使用NodeJS 调用浏览器方法  
  
在后端生成海报，比如可以使用nodeJS，通过 `puppter` 等库，调用浏览器的 page 对象，基于 page.screenshots 截图并保存到磁盘。  
  
# 怎么把十进制的 0.2 转换成二进制？  
进制转换是比较基础的，如果大家熟悉 js 的 API ，那么会首先想到这两个方法：  
  
  
* 十进制转二进制：num.toString(2)  
* 二进制转十进制：parseInt(num, 2)  
  
所以答案就是 `(0.2).toString(2)`，可以简写为 `0.2.toString(2)`  
# map和 filter 有什么区别？  
## 参数  
  
首先，map和filter函数的参数，是完全相同的  
  
> array.map(function(currentValue,index,arr), thisValue)  
>   
> array.filter(function(currentValue,index,arr), thisValue)  
  
* currentValue：数组元素；  
* index：索引  
* arr：原数组；  
* thisValue：作为该执行回调时使用，传递给函数，用作 "this" 的值  
  
## 用途  
  
但是在用途上，它们是有区别的：    
  
1. map方法返回的新数组是原数组的映射，何为映射？就是和原数组的长度相同，数值做相应处理。    
2. filter方法返回的值是过滤原数组后的新数组，和原数组长度不同，数值不变。    
  
**示例**：  
  
```  
let arr = ["1","2","3"];  
let a = arr.map((item,index,a) =>{  
    return item + 1  
});  
console.log(a);//["11", "21", "31"]  
let b = arr.filter((item,index,a) =>{  
    return item > 1  
})  
console.log(b);//["2", "3"]  
```  
  
另外，filter可过滤NaN、null、undefined、0  
  
```js  
let arr = [NaN,null,undefined,"0",0,1,2,3];  
let newArr = arr.filter(item => item);  
console.log(newArr);//["0", 1, 2, 3]  
```  
# map 和 forEach 有什么区别？  
### 定义  
  
我们首先来看一看MDN上对Map和ForEach的定义：  
  
* `forEach()`: 针对每一个元素执行提供的函数(executes a provided function once for each array element)。  
* `map()`: 创建一个新的数组，其中每一个元素由调用数组中的每一个元素执行提供的函数得来(creates a new array with the results of calling a provided function on every element in the calling array)。  
  
到底有什么区别呢？`forEach()`方法不会返回执行结果，而是`undefined`。也就是说，`forEach()`会修改原来的数组。而`map()`方法会得到一个新的数组并返回。  
  
### 示例  
  
下方提供了一个数组，如果我们想将其中的每一个元素翻倍，我们可以使用`map`和`forEach`来达到目的。  
  
```js  
let arr = [1, 2, 3, 4, 5];  
```  
  
#### forEach  
  
注意，`forEach`是不会返回有意义的值的。 我们在回调函数中直接修改`arr`的值。  
  
```js  
arr.forEach((num, index) => {  
    return arr[index] = num * 2;  
});  
```  
  
执行结果如下：  
  
```js  
// arr = [2, 4, 6, 8, 10]  
```  
  
#### map  
  
```js  
let doubled = arr.map(num => {  
    return num * 2;  
});  
```  
  
执行结果如下：  
  
```js  
// doubled = [2, 4, 6, 8, 10]  
```  
  
## 执行速度对比  
  
**jsPref**是一个非常好的网站用来比较不同的JavaScript函数的执行速度。  
  
这里是`forEach()`和`map()`的测试结果：  
  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/2/25/161cafb6186c0ec0~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)  
  
可以看到，在我到电脑上`forEach()`的执行速度比`map()`慢了70%。每个人的浏览器的执行结果会不一样。你可以使用下面的链接来测试一下: [Map vs. forEach - jsPref](https://jsperf.com/map-vs-foreach-speed-test)。  
  
## 函数式角度的理解  
  
如果你习惯使用函数是编程，那么肯定喜欢使用`map()`。因为`forEach()`会改变原始的数组的值，而`map()`会返回一个全新的数组，原本的数组不受到影响。  
  
## 哪个更好呢？  
  
取决于你想要做什么。  
  
`forEach`适合于你并不打算改变数据的时候，而只是想用数据做一些事情 -- 比如存入数据库或则打印出来。  
  
```javascript  
let arr = ['a', 'b', 'c', 'd'];  
arr.forEach((letter) => {  
    console.log(letter);  
});  
// a  
// b  
// c  
// d  
```  
  
`map()`适用于你要改变数据值的时候。不仅仅在于它更快，而且返回一个新的数组。这样的优点在于你可以使用复合(composition)(map(), filter(), reduce()等组合使用)来玩出更多的花样。  
  
```js  
let arr = [1, 2, 3, 4, 5];  
let arr2 = arr.map(num => num * 2).filter(num => num > 5);  
// arr2 = [6, 8, 10]  
```  
  
我们首先使用map将每一个元素乘以2，然后紧接着筛选出那些大于5的元素。最终结果赋值给`arr2`。  
  
## 核心要点  
  
* 能用`forEach()`做到的，`map()`同样可以。反过来也是如此。  
* `map()`会分配内存空间存储新数组并返回，`forEach()`不会返回数据。  
* `forEach()`允许`callback`更改原始数组的元素。`map()`返回新的数组。  
# 如何获取页面的滚动距离值？  
在获取页面滚动距离的高度时候，往往有不同的获取方式，而且不同的属性浏览器支持稍有差别：  
  
_**pageYOffset**_：属window对象，IE9+、Firefox、Chrome、Opera均支持该方式获取页面滚动敢赌值，并且会忽略DOCTYPE定义规则。  
  
```javascript  
window.pageYOffset  
```  
  
_**scrollY**_：属于window对象，Firefox、Chrome、Opera均支持，IE不支持，忽略DOCTYPE定义规则。  
  
```javascript  
window.scrollY  
```  
  
页面如果未定义DOCTYPE文档头，所有浏览器都支持docume.body.scrollTop属性获取滚动高度。  
  
```javascript  
document.body.scrollTop  
```  
  
如果页面定义了DOCTYPE文档头，那么HTML元素上的scrollT属性在IE、Firefox、Opera（presto内核）下都可以获取滚动高度值，而在Chrome和Safari下其值为0。  
  
```javascript  
document.documentElement.scrollTop; //Chrome,Safari下为0  
```  
  
此在获取页面滚动高度的时候优先考虑使用 window.pageYOffset 然后在使用scrollTop。  
  
```javascript  
 var _scrollLeft = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft   
 var _scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop  
```  
# 如何顺序执行10个异步任务？  
## 解法1：for 循环 + await  
   
简单的 for 循环是依次进行循环的，不像 Array.forEach，Array.map 方法是并发执行的，利用这一特点加 async / await 很容易写出下面这样的代码：  
  
```js  
(async () => {  
  const sleep = delay => {  
    return new Promise((resolve, reject) => {  
      setTimeout(_ => resolve(), delay)  
    })  
  }  
    
  const task = (i) => {  
    return new Promise(async (resolve, reject) => {  
      await sleep(500)  
      console.log(`now is ${i}`)  
      ++i  
      resolve(i)  
    })  
  }  
    
  let param = 0  
  for (let i = 0; i < 4; i++) {  
    param = await task(param)  
  }    
})()  
```  
  
输出：  
  
```  
now is 0  
now is 1  
now is 2  
now is 3  
```  
  
## 解法2：Array.prototype.reduce  
  
关于 Array.prototype.reduce 方法相信大部分小伙伴初见时都是用来数组求和。  
  
reduce有`初始值`，`积累值`，以及`当前值`的概念。其中 `积累值`可以看作是前一个值，通过返回`积累值`又可以看作是 下一个值。使用reduce来解决问题的代码为：  
  
```js  
const sleep = delay => {  
  return new Promise((resolve, reject) => {  
    setTimeout(_ => resolve(), delay)  
  })  
}  
  
const task = (i) => {  
  return new Promise(async (resolve, reject) => {  
    await sleep(500)  
    console.log(`now is ${i}`)  
    ++i  
    resolve(i)  
  })  
}  
  
[task, task, task, task].reduce(async (prev, task) => {  
  const res = await prev  
  return task(res)  
}, 0)  
```  
  
输出：  
  
```  
now is 0  
now is 1  
now is 2  
now is 3  
```  
  
可以这样理解 `prev` 和 `task`：  
  
* prev：前一个 异步任务（promise）  
* task：当前的异步任务  
  
当前的异步任务需要上一个异步任务的结果作参数，故很显然要 await prev。  
  
  
  
# 遍历一个任意长度的list中的元素并依次创建异步任务，如何获取所有任务的执行结果？  
看到这个题目，大家首先想到的是 `Promise.all` 或者 `Promise.allSettled`。  
  
* `Promise.all`  
  
`Promise.all` 需要传入一个数组，数组中的元素都是 `Promise` 对象。当这些对象都执行成功时，则 all 对应的 promise 也成功，且执行 then 中的成功回调。如果有一个失败了，则 all 对应的 `promise` 失败，且失败时只能获得第一个失败 `Promise` 的数据。  
  
```js  
const p1 = new Promise((resolve, reject) => {  
  resolve('成功了')  
})  
const p2 = Promise.resolve('success')  
const p3 = Promise.reject('失败')  
  
Promise.all([p1, p2]).then((result) => {  
  console.log(result)  //["成功了", "success"]  
}).catch((error) => {  
  //未被调用  
})  
  
Promise.all([p1, p3, p2]).then((result) => {  
  //未被调用  
}).catch((error) => {  
  console.log(error)  //"失败"  
});  
```  
  
* `Promise.allSettled`  
  
`Promise.allSettled()` 可用于并行执行独立的异步操作，并收集这些操作的结果。  
  
`Promise.allSettled()` 方法返回一个在所有给定的 promise 都已经 fulfilled 或 rejected 后的 promise，并带有一个对象数组，每个对象表示对应的 promise 结果。  
  
```js  
Promise.allSettled([p1, p2, p3])  
.then(values => {  
    console.log(values)  
})  
```  
  
[1,2,3,4,6,7,9,13,15]=>['1->4','6->7','9','13','15']  
# 实现以下转换，合并连续的数字  
本题是一道比较简单的数组处理题目，主要有两个处理步骤：  
  
* 将超过一个的连续数字元素，合并成 `x->y`，比如 [1,2,3,4] 转成 `['1->4']`  
* 将非连续的数字元素，转成字符串  
  
具体的实现代码如下：  
  
```js  
function shortenArray(arr) {  
  // 处理边界  
  if (!Array.isArray(arr) || arr.length <= 1) {  
    return arr;  
  }  
  
  // 记录结果  
  const result = [];  
  
  // 记录连续数字的开始位置  
  let start = 0;  
  // 记录连续数字的结束位置  
  let last = 0;  
  
  function pushArr(arrStart, arrEnd) {  
    if (arrStart === arrEnd) {  
      result.push(arr[arrStart].toString());  
    } else {  
      result.push(`${arr[arrStart]}->${arr[arrEnd]}`);  
    }  
  }  
  
  // 一次循环获取结果  
  for (let i = 1; i < arr.length; i++) {  
    const temp = arr[i];  
    if (arr[last] + 1 === temp) {  
      last = i;  
    } else {  
      pushArr(start, last);  
      start = i;  
      last = i;  
    }  
  }  
  
  // 处理剩余数据  
  pushArr(start, last);  
  
  return result;  
}  
  
shortenArray([1, 2, 3, 4, 6, 7, 9, 13, 15]); // ['1->4','6->7','9','13','15']  
```  
# JQuery中的$(​document).ready与window.onload有什么区别？  
## 定义  
  
再说两者之前先简单说明一下window与document的区别：  
  
* window    
   1. window对象表示浏览器中打开的窗口。    
   2. window对象可以省略，如:`window.console.log()`等价于`console.log()`  
* document    
   1. document对象是window对象的一部分,如：`document.body` 等价于 `window.document.body`    
   2. 浏览器的html文档成为document对象  
  
### $(document).ready()  
  
从字面的意思上理解，就是文档准备好了，也就是浏览器已经加载并解析完整个html文档，DOM树已经建立起来了,然后执行此函数。  
  
原生的JavaScript写法如下：  
  
```  
document.ready=function(){  
 alert("ready");   
}  
  
```  
  
jQuery中的写法如下：  
  
```  
$(document).ready(function(){  
 alert("ready");  
});  
//或者简写为  
$(function(){  
 alert("ready");  
});  
  
```  
  
### $(window).load  
  
在网页中所有元素(包括页面中图片、css文件等所有关联文件)完全加载到浏览器后才执行。  
  
原生JavaScript中的写法如下  
  
```  
window.onload = function(){   
 alert("onload");   
};  
  
```  
  
jQuery中的写法如下：  
  
```  
$(window).load(function(){  
 alert("onload");  
});  
  
```  
  
## ready与load执行顺序  
  
先来看一下DOM文档加载的步骤：  
  
```  
    1.解析HTML结构  
    2.加载外部脚本和样式表文件  
    3.解析并执行脚本代码  
    4.构造HTML DOM模型 //ready  
    5.加载图片等外部文件  
    6.页面加载完毕 //load  
  
```  
  
从上面的步骤中可以看出，ready在第4步完成之后就执行了，但是load要在第6步完成之后才执行。  
  
## 两者区别  
  
### 1.执行时间  
  
* `$(window).load()`必须等到页面内包括图片的所有元素加载完毕后才能执行（比如图片和媒体资源，它们的加载速度远慢于DOM的加载速度）加载完成之后才执行。  
* `$(document).ready()`是DOM结构绘制完毕后就执行，不必等到加载完毕。但这并不代表页面的所有数据已经全部加载完成，一些大的图片有会在建立DOM树之后很长一段时间才行加载完成  
  
以浏览器装载文档为例，在页面加载完毕后，浏览器会通过 Javascript为DOM元素添加事件。在常规的Javascript 代码中，通常使用 window.onload 方法，而在 Jquery 中，使用的是 `$(document).ready()` 方法。 `$(document).ready()`方法是事件模块中最重要一个函数，可以极大的提高 Web 应用程序的速度。  
  
### 2.编写个数不同  
  
* `$(window).load`不能同时编写多个，如果有多个`$(window).load()`，那么只有最后一个`$(window).load()`里面的函数或者代码才会执行，之前的`$(window).load()`都将被覆盖。  
* `$(document).ready()`可以同时编写多个，并且都可以得到执行。  
  
示例如下：  
  
以下代码无法正确执行,结果只输出第二个,:  
  
```  
$(window).load(function(){   
    alert(“text1”);   
});   
$(window).load(function(){   
    alert(“text2”);   
});   
  
```  
  
`$(document).ready()`能同时编写多个,以下代码正确执行，结果两次都输出：  
  
```  
$(document).ready(function(){   
    alert(“Hello World”);   
});   
$(document).ready(function(){   
    alert(“Hello again”);   
});   
  
```  
  
### 3.简化写法  
  
* `$(window).load`没有简化写法  
* `$(document).ready(function(){})`可以简写成`$(function(){})`或者`$().ready(function(){})`  
  
### 4.执行的效率不同  
  
* 如要在dom的元素节点中添加onclick属性节点，这时用`$(document).ready()`就要比用`$(window).load()`的效率高  
* 但是在某些时候还必须得用`$(window).load()`才行，比如按钮图片出现后添加事件  
# 如何实现一个轮播图组件？  
## 1. 原理介绍  
  
轮播图的原理其实不是太复杂，主要可以总结为两点：  
  
* 定位的运用  
* 定时器的运用  
  
上面两点主要是轮播图实现方法中比较重要的两点，通过下面两张图，大家可以更加容易理解轮播图的原理：  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a82a113c15d34b9a83b7a0e131bf81b3~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d84d7de3a6e94d8ab4e3be760f871578~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)  
  
上面图中的1、2、3、4...等盒子可以看作为一张张的图片，它们横向依次排列。最外层还有一个父级盒子，它的宽度刚好就是一张图片的宽度，第一张图没有设置隐藏超出部分，第二张图隐藏了超出部分。  
  
让我们的图片位置不断变化，让它出现在可视区内，加上一些动画，就变成了我们想要的轮播图了。  
  
## 2. 实现的效果  
  
知道了大概的原理，那么接下来我们一起理一下需要实现的效果：  
  
* 图片自动轮播  
* 轮播有动画效果  
* 点击左右按钮可切换  
* 点击数字按钮切换到对应图片  
* 数字按钮有选中的效果  
* 鼠标移入停止自动播放  
  
## 3. 具体实现方式  
  
### 3.1 HTML布局  
  
从上图可以看出，HTML布局很简单，主要分为了三部分：左右切换按钮、图片列表、底部数字切换按钮。  
  
代码如下：  
  
```html  
<div class="container">  
    <!--  图片列表  -->  
    <ul class="ul-img">  
      <li class="li-img">1</li>  
      <li class="li-img">2</li>  
      <li class="li-img">3</li>  
      <li class="li-img">4</li>  
      <li class="li-img">5</li>  
    </ul>  
  
    <!--  上一张、下一张按钮  -->  
    <div class="prev">  
      <span>&lt;</span>  
    </div>  
    <div class="next">  
      <span>&gt;</span>  
    </div>  
  
    <!-- 数字切换按钮 -->  
    <div class="num-box">  
      <ul class="num-ul">  
        <li data-index="0">1</li>  
        <li data-index="1">2</li>  
        <li data-index="2">3</li>  
        <li data-index="3">4</li>  
        <li data-index="4">5</li>  
      </ul>  
    </div>  
</div>  
```  
  
这里需要注意的一点是我们给数字切换按钮的li标签添加了一个自定义属性，因为后面我们在js中需要用到，用来判断与哪一张图片对应，方便设置选中效果。  
  
### 3.2 CSS样式  
  
我们需要将图片列表排成一排，并且让最外层的盒子设置超出隐藏，其它两个部分可以定位到对应的位置，代码如下：  
  
```css  
.container {  
  position: relative;  
  width: 600px;  
  height: 400px;  
  margin: 0 auto;  
  background-color: gray;  
  overflow: hidden;  
}  
  
.ul-img {  
  position: absolute;  
  display: flex;  
  width: 4200px;  
  height: 400px;  
  left: 0;  
  padding: 0;  
  margin: 0;  
}  
  
.li-img {  
  list-style: none;  
  width: 600px;  
  height: 400px;  
  display: flex;  
  align-items: center;  
  justify-content: center;  
  background-color: aquamarine;  
  font-size: 30px;  
  font-weight: 800;  
  border: 1px solid #ccc;  
}  
  
/* 上一张、下一张 */  
.prev,  
.next {  
  position: absolute;  
  height: 400px;  
  width: 80px;  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  top: 0;  
}  
  
.prev {  
  left: 0;  
}  
  
.next {  
  right: 0;  
}  
  
.prev span,  
.next span {  
  display: block;  
  color: #fff;  
  width: 40px;  
  height: 40px;  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  background-color: rgba(0, 0, 0, 0.5);  
  border-radius: 50%;  
  cursor: pointer;  
}  
  
/* 数字切换按钮 */  
.num-box {  
  position: absolute;  
  left: 50%;  
  bottom: 20px;  
  transform: translate(-50%, 0);  
  z-index: 2;  
}  
  
.num-ul {  
  list-style: none;  
  margin: 0;  
  padding: 0;  
  display: flex;  
}  
  
.num-ul li {  
  height: 20px;  
  width: 20px;  
  border-radius: 50%;  
  background-color: rgba(0, 0, 0, 0.5);  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  font-size: 9px;  
  color: #fff;  
  margin: 0 4px;  
  cursor: pointer;  
  user-select: none;  
}  
```  
  
这个时候基本的样式就出来了，只是还不能轮播，一直显示的都是第一张图片：  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7e2b2fa5e994930af5a9defe1f0a213~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)  
  
到这里我们的基础布局算是实现了，但是离我们的需求还有一段距离，重点在js部分。  
  
### 3.3 JS代码  
  
JS逻辑代码才是实现我们整个需求的核心部分，先整体过一下代码，我们再来讲解：  
  
```js  
// 获取元素节点  
var containerDom = document.getElementsByClassName("container")[0]; // 容器  
var ulDom = document.getElementsByClassName("ul-img")[0]; // 图片盒子  
var prevDom = document.getElementsByClassName("prev")[0].firstElementChild; // 上一张按钮  
var nextDom = document.getElementsByClassName("next")[0].firstElementChild; // 下一张按钮  
var numUlDom = document.getElementsByClassName("num-ul")[0]; // 数字按钮父级容器  
var numList = document  
  .getElementsByClassName("num-ul")[0]  
  .getElementsByTagName("li"); // 数字切换按钮列表  
  
// 定义全局变量  
var currentIndex = 0; // 当前显示的图片索引  
var timer = null; // 自动播放定时器  
numList[currentIndex].style.backgroundColor = "#ccc"; // 默认选中第一个数字  
// 上一张  
prevDom.addEventListener("click", prevFun);  
// 下一张  
nextDom.addEventListener("click", nextFun);  
// 鼠标移入容器，停止自动播放  
containerDom.addEventListener("mouseenter", stopAutoPlay);  
// 鼠标移出容器，开启自动播放  
containerDom.addEventListener("mouseleave", autoPlay);  
// 数字按钮点击事件  
numUlDom.addEventListener("click", numClick);  
  
// 开启自动播放  
autoPlay();  
  
// 切换上一张  
function prevFun() {  
  ulDom.style.transition = "0.5s";  
  numList[currentIndex].style.backgroundColor = ""; // 清空上一个按钮的样式  
  if (currentIndex === 0) {  
    ulDom.style.transition = "0s"; // 为了实现无缝滚动，清除动画  
    currentIndex = 4;  
  } else {  
    --currentIndex;  
  }  
  ulDom.style.left = `-${currentIndex * 600}px`;  
  numList[currentIndex].style.backgroundColor = "#ccc";  
}  
  
// 切换下一张  
function nextFun() {  
  ulDom.style.transition = "0.5s";  
  numList[currentIndex].style.backgroundColor = ""; // 清空上一个按钮的样式  
  if (currentIndex === 4) {  
    ulDom.style.transition = "0s"; // 为了实现无缝滚动，清除动画  
    currentIndex = 0; // 重新播放第一张  
  } else {  
    ++currentIndex;  
  }  
  ulDom.style.left = `-${currentIndex * 600}px`;  
  numList[currentIndex].style.backgroundColor = "#ccc"; // 设置按钮选中样式  
}  
  
// 数字按钮点击事件  
function numClick(e) {  
  ulDom.style.transition = "0.5s";  
  let index = e.target.dataset.index;  
  if (index == undefined) {  
    return;  
  }  
  numList[currentIndex].style.backgroundColor = ""; // 清空上一个按钮的样式  
  currentIndex = Number(index);  
  numList[currentIndex].style.backgroundColor = "#ccc";  
  ulDom.style.left = `-${currentIndex * 600}px`;  
}  
  
// 循环播放  
function autoPlay() {  
  timer = setInterval(nextFun, 1000);  
}  
  
// 关闭自动播放  
function stopAutoPlay() {  
  // 清除定时器  
  clearInterval(timer);  
}  
```  
  
js里面主要有几个方法，这里讲解一两个大家就懂了，比如说我们需要点击按钮切换上一张或者下一张图片，主要实现方法如下：  
  
```js  
function nextFun() {  
  ulDom.style.transition = "0.5s";  
  numList[currentIndex].style.backgroundColor = ""; // 清空上一个按钮的样式  
  if (currentIndex === 4) {  
    ulDom.style.transition = "0s"; // 为了实现无缝滚动，清除动画  
    currentIndex = 0; // 重新播放第一张  
  } else {  
    ++currentIndex;  
  }  
  ulDom.style.left = `-${currentIndex * 600}px`;  
  numList[currentIndex].style.backgroundColor = "#ccc"; // 设置按钮选中样式  
}  
```  
  
当我们点击切换按钮式，首先清除掉上一个数字按钮的选中样式，然后判断是否是最后一张图片或者第一张图片。我们声明了一个全局变量currentIndex用来存储当前展示的是第几张图片。  
  
然后通过currentIndex动态计算改变需要展示的图片的left距离。  
  
自动播放和点击数字按钮切换图片得到原理都和这个方法类似，都是需要计算出需要展示的图片的left。  
  
### 3.4 核心方法  
  
js部分我们大概有五个主要的方法：  
  
* prevFun()：点击切换上一张  
* nextFun()：点击切换下一张  
* numClick(e)：点击数字按钮  
* autoPlay()：循环播放轮播  
* stopAutoPlay()：关闭自动播放  
  
## 总结  
  
轮播图实现起来并不难，难的是有没有耐心。轮播图无非就是让一排图片中的某一张图片在合适的时间出现在合适的区域内。  
  
当然实现轮播图的方式和方法都有很多，比如用纯CSS也能实现轮播图，主要看个人需求而定。  
# script标签放在header里和放在body底部里有什么区别？  
script 通常被放在 header 或者 body 标签中，但位置的不同对于页面的加载效果也不一样。  
  
> demo中引用的js文件，都有延迟3秒才执行完成的设定。  
  
### 放在 header 中  
  
```xml  
<head>  
  <title>script 加载机制</title>  
  <script src='/js/test1.js'></script>  
  <script src='/js/test2.js'></script>  
  <script src='/js/test3.js'></script>  
</head>  
```  
  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/23/172407b4eb29b144~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)  
  
你能看到 html **第一时间被加载进来**，但页面 body 内容迟迟没有渲染出来。因为在等待 header 标签中 script 脚本的加载，3 秒后，整个页面渲染完成。  
  
### 放在 body 底部  
  
```xml  
<body>  
  <h2>script 加载机制</h2>  
  <script src='/js/test1.js'></script>  
  <script src='/js/test2.js'></script>  
  <script src='/js/test3.js'></script>  
</body>  
```  
  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/23/172407b4eb50de2c~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)  
  
这次 html 内容第一时间渲染完成，随后等待 js 的加载。  
  
### 总结  
  
**脚本会阻塞页面的渲染**，所以推荐将其放在 body 底部，因为当解析到 script 标签时，通常页面的大部分内容都已经渲染完成，让用户马上能看到一个非空白页面。  
  
另外你能看到多个脚本之间都是异步向服务器请求，他们之间不互相依赖，最终只等待 3 秒，而非 3+3+3 秒。  
  
# 实现一个数字转中文的方法  
```js  
//阿拉伯数字转中文数字  
function NoToChinese(num) {  
    if (!/^\d*(\.\d*)?$/.test(num)) {  
        alert("Number is wrong!");  
        return "Number is wrong!";  
    }  
    var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九");  
    var BB = new Array("", "十", "百", "千", "万", "亿", "点", "");  
    var a = ("" + num).replace(/(^0*)/g, "").split("."),  
        k = 0,  
        re = "";  
    for (var i = a[0].length - 1; i >= 0; i--) {  
        switch (k) {  
            case 0:  
                re = BB[7] + re;  
                break;  
            case 4:  
                if (!new RegExp("0{4}\\d{" + (a[0].length - i - 1) + "}$").test(a[0]))  
                    re = BB[4] + re;  
                break;  
            case 8:  
                re = BB[5] + re;  
                BB[7] = BB[5];  
                k = 0;  
                break;  
        }  
        if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re;  
        if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;  
        k++;  
    }  
    if (a.length > 1) //加上小数部分(如果有小数部分)   
    {  
        re += BB[6];  
        for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)];  
    }  
    return re;  
};  
```  
# arguments如何转成数组？  
函数中的 arguments 是一个对象，不是一个数组，严格来说它是一个类数组对象。  
  
## 1、调用数组的原型方法来转换  
  
```js  
var foo = function(a,b){  
	var arr = Array.prototype.slice.call(arguments);  
	console.log(arr)  
}  
foo(1,2) //(2) [1, 2]  
```  
  
## 2、使用ES6的新语法 `Array.from()` 来转换  
  
`Array.from` 方法用于将两类对象转为真正的数组：类似数组的对象和可遍历对象（包括Set和Map）。  
  
```js  
var foo = function(a,b){  
	var arr = Array.from(arguments);  
	console.log(arr)  
}  
foo(1,2) // (2) [1, 2]  
```  
  
## 3、使用 for   
  
使用 for 循环挨个将 arguments 对象中的内容复制给新数组中  
  
```js  
function toArray(){  
    var args = [];   
    for (var i = 1; i < arguments.length; i++) {   
        args.push(arguments[i]);   
    }   
    return args;  
}  
```  
  
## 4、利用 ES6 中的 rest 参数转换  
  
```js  
let a = (…args) => args;  
```  
  
# 前端跨页面通信，你知道哪些方法？  
## 引言  
  
在浏览器中，我们可以同时打开多个Tab页，每个Tab页可以粗略理解为一个“独立”的运行环境，即使是全局对象也不会在多个Tab间共享。然而有些时候，我们希望能在这些“独立”的Tab页面之间同步页面的数据、信息或状态。  
  
正如下面这个例子：我在列表页点击“收藏”后，对应的详情页按钮会自动更新为“已收藏”状态；类似的，在详情页点击“收藏”后，列表页中按钮也会更新。  
  
![跨页面通信实例](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/4/1/169d767c01990c37~tplv-t2oaga2asx-image.image)  
  
这就是我们所说的前端跨页面通信。  
  
你知道哪些跨页面通信的方式呢？如果不清楚，下面我就带大家来看看七种跨页面通信的方式。  
  
---  
  
## 一、同源页面间的跨页面通信  
  
浏览器的[同源策略](https://en.wikipedia.org/wiki/Same-origin%5Fpolicy)在下述的一些跨页面通信方法中依然存在限制。因此，我们先来看看，在满足同源策略的情况下，都有哪些技术可以用来实现跨页面通信。  
  
### 1\. BroadCast Channel  
  
[BroadCast Channel](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel) 可以帮我们创建一个用于广播的通信频道。当所有页面都监听同一频道的消息时，其中某一个页面通过它发送的消息就会被其他所有页面收到。它的API和用法都非常简单。  
  
下面的方式就可以创建一个标识为`AlienZHOU`的频道：  
  
```  
const bc = new BroadcastChannel('AlienZHOU');  
  
```  
  
各个页面可以通过`onmessage`来监听被广播的消息：  
  
```  
bc.onmessage = function (e) {  
    const data = e.data;  
    const text = '[receive] ' + data.msg + ' —— tab ' + data.from;  
    console.log('[BroadcastChannel] receive message:', text);  
};  
  
```  
  
要发送消息时只需要调用实例上的`postMessage`方法即可：  
  
```  
bc.postMessage(mydata);  
  
```  
  
> Broadcast Channel 的具体的使用方式可以看这篇[《【3分钟速览】前端广播式通信：Broadcast Channel》](https://juejin.cn/post/6844903811228663815)。  
  
### 2\. Service Worker  
  
[Service Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Service%5FWorker%5FAPI) 是一个可以长期运行在后台的 Worker，能够实现与页面的双向通信。多页面共享间的 Service Worker 可以共享，将 Service Worker 作为消息的处理中心（中央站）即可实现广播效果。  
  
> Service Worker 也是 PWA 中的核心技术之一，由于本文重点不在 PWA ，因此如果想进一步了解 Service Worker，可以阅读我之前的文章[【PWA学习与实践】(3) 让你的WebApp离线可用](https://juejin.cn/post/6844903588691443725)。  
  
首先，需要在页面注册 Service Worker：  
  
```  
/* 页面逻辑 */  
navigator.serviceWorker.register('../util.sw.js').then(function () {  
    console.log('Service Worker 注册成功');  
});  
  
```  
  
其中`../util.sw.js`是对应的 Service Worker 脚本。Service Worker 本身并不自动具备“广播通信”的功能，需要我们添加些代码，将其改造成消息中转站：  
  
```  
/* ../util.sw.js Service Worker 逻辑 */  
self.addEventListener('message', function (e) {  
    console.log('service worker receive message', e.data);  
    e.waitUntil(  
        self.clients.matchAll().then(function (clients) {  
            if (!clients || clients.length === 0) {  
                return;  
            }  
            clients.forEach(function (client) {  
                client.postMessage(e.data);  
            });  
        })  
    );  
});  
  
```  
  
我们在 Service Worker 中监听了`message`事件，获取页面（从 Service Worker 的角度叫 client）发送的信息。然后通过`self.clients.matchAll()`获取当前注册了该 Service Worker 的所有页面，通过调用每个client（即页面）的`postMessage`方法，向页面发送消息。这样就把从一处（某个Tab页面）收到的消息通知给了其他页面。  
  
处理完 Service Worker，我们需要在页面监听 Service Worker 发送来的消息：  
  
```  
/* 页面逻辑 */  
navigator.serviceWorker.addEventListener('message', function (e) {  
    const data = e.data;  
    const text = '[receive] ' + data.msg + ' —— tab ' + data.from;  
    console.log('[Service Worker] receive message:', text);  
});  
  
```  
  
最后，当需要同步消息时，可以调用 Service Worker 的`postMessage`方法：  
  
```  
/* 页面逻辑 */  
navigator.serviceWorker.controller.postMessage(mydata);  
  
```  
  
### 3\. LocalStorage  
  
LocalStorage 作为前端最常用的本地存储，大家应该已经非常熟悉了；但[StorageEvent](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent)这个与它相关的事件有些同学可能会比较陌生。  
  
当 LocalStorage 变化时，会触发`storage`事件。利用这个特性，我们可以在发送消息时，把消息写入到某个 LocalStorage 中；然后在各个页面内，通过监听`storage`事件即可收到通知。  
  
```  
window.addEventListener('storage', function (e) {  
    if (e.key === 'ctc-msg') {  
        const data = JSON.parse(e.newValue);  
        const text = '[receive] ' + data.msg + ' —— tab ' + data.from;  
        console.log('[Storage I] receive message:', text);  
    }  
});  
  
```  
  
在各个页面添加如上的代码，即可监听到 LocalStorage 的变化。当某个页面需要发送消息时，只需要使用我们熟悉的`setItem`方法即可：  
  
```  
mydata.st = +(new Date);  
window.localStorage.setItem('ctc-msg', JSON.stringify(mydata));  
  
```  
  
注意，这里有一个细节：我们在mydata上添加了一个取当前毫秒时间戳的`.st`属性。这是因为，`storage`事件只有在值真正改变时才会触发。举个例子：  
  
```  
window.localStorage.setItem('test', '123');  
window.localStorage.setItem('test', '123');  
  
```  
  
由于第二次的值`'123'`与第一次的值相同，所以以上的代码只会在第一次`setItem`时触发`storage`事件。因此我们通过设置`st`来保证每次调用时一定会触发`storage`事件。  
  
### 小憩一下  
  
上面我们看到了三种实现跨页面通信的方式，不论是建立广播频道的 Broadcast Channel，还是使用 Service Worker 的消息中转站，抑或是些 tricky 的`storage`事件，其都是“广播模式”：一个页面将消息通知给一个“中央站”，再由“中央站”通知给各个页面。  
  
> 在上面的例子中，这个“中央站”可以是一个 BroadCast Channel 实例、一个 Service Worker 或是 LocalStorage。  
  
下面我们会看到另外两种跨页面通信方式，我把它称为“共享存储+轮询模式”。  
  
---  
  
### 4\. Shared Worker  
  
[Shared Worker](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker) 是 Worker 家族的另一个成员。普通的 Worker 之间是独立运行、数据互不相通；而多个 Tab 注册的 Shared Worker 则可以实现数据共享。  
  
Shared Worker 在实现跨页面通信时的问题在于，它无法主动通知所有页面，因此，我们会使用轮询的方式，来拉取最新的数据。思路如下：  
  
让 Shared Worker 支持两种消息。一种是 post，Shared Worker 收到后会将该数据保存下来；另一种是 get，Shared Worker 收到该消息后会将保存的数据通过`postMessage`传给注册它的页面。也就是让页面通过 get 来主动获取（同步）最新消息。具体实现如下：  
  
首先，我们会在页面中启动一个 Shared Worker，启动方式非常简单：  
  
```  
// 构造函数的第二个参数是 Shared Worker 名称，也可以留空  
const sharedWorker = new SharedWorker('../util.shared.js', 'ctc');  
  
```  
  
然后，在该 Shared Worker 中支持 get 与 post 形式的消息：  
  
```  
/* ../util.shared.js: Shared Worker 代码 */  
let data = null;  
self.addEventListener('connect', function (e) {  
    const port = e.ports[0];  
    port.addEventListener('message', function (event) {  
        // get 指令则返回存储的消息数据  
        if (event.data.get) {  
            data && port.postMessage(data);  
        }  
        // 非 get 指令则存储该消息数据  
        else {  
            data = event.data;  
        }  
    });  
    port.start();  
});  
  
```  
  
之后，页面定时发送 get 指令的消息给 Shared Worker，轮询最新的消息数据，并在页面监听返回信息：  
  
```  
// 定时轮询，发送 get 指令的消息  
setInterval(function () {  
    sharedWorker.port.postMessage({get: true});  
}, 1000);  
  
// 监听 get 消息的返回数据  
sharedWorker.port.addEventListener('message', (e) => {  
    const data = e.data;  
    const text = '[receive] ' + data.msg + ' —— tab ' + data.from;  
    console.log('[Shared Worker] receive message:', text);  
}, false);  
sharedWorker.port.start();  
  
```  
  
最后，当要跨页面通信时，只需给 Shared Worker `postMessage`即可：  
  
```  
sharedWorker.port.postMessage(mydata);  
  
```  
  
> 注意，如果使用`addEventListener`来添加 Shared Worker 的消息监听，需要显式调用`MessagePort.start`方法，即上文中的`sharedWorker.port.start()`；如果使用`onmessage`绑定监听则不需要。  
  
### 5\. IndexedDB  
  
除了可以利用 Shared Worker 来共享存储数据，还可以使用其他一些“全局性”（支持跨页面）的存储方案。例如 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB%5FAPI) 或 cookie。  
  
> 鉴于大家对 cookie 已经很熟悉，加之作为“互联网最早期的存储方案之一”，cookie 已经在实际应用中承受了远多于其设计之初的责任，我们下面会使用 IndexedDB 来实现。  
  
其思路很简单：与 Shared Worker 方案类似，消息发送方将消息存至 IndexedDB 中；接收方（例如所有页面）则通过轮询去获取最新的信息。在这之前，我们先简单封装几个 IndexedDB 的工具方法。  
  
* 打开数据库连接：  
  
```  
function openStore() {  
    const storeName = 'ctc_aleinzhou';  
    return new Promise(function (resolve, reject) {  
        if (!('indexedDB' in window)) {  
            return reject('don't support indexedDB');  
        }  
        const request = indexedDB.open('CTC_DB', 1);  
        request.onerror = reject;  
        request.onsuccess =  e => resolve(e.target.result);  
        request.onupgradeneeded = function (e) {  
            const db = e.srcElement.result;  
            if (e.oldVersion === 0 && !db.objectStoreNames.contains(storeName)) {  
                const store = db.createObjectStore(storeName, {keyPath: 'tag'});  
                store.createIndex(storeName + 'Index', 'tag', {unique: false});  
            }  
        }  
    });  
}  
  
```  
  
* 存储数据  
  
```  
function saveData(db, data) {  
    return new Promise(function (resolve, reject) {  
        const STORE_NAME = 'ctc_aleinzhou';  
        const tx = db.transaction(STORE_NAME, 'readwrite');  
        const store = tx.objectStore(STORE_NAME);  
        const request = store.put({tag: 'ctc_data', data});  
        request.onsuccess = () => resolve(db);  
        request.onerror = reject;  
    });  
}  
  
```  
  
* 查询/读取数据  
  
```  
function query(db) {  
    const STORE_NAME = 'ctc_aleinzhou';  
    return new Promise(function (resolve, reject) {  
        try {  
            const tx = db.transaction(STORE_NAME, 'readonly');  
            const store = tx.objectStore(STORE_NAME);  
            const dbRequest = store.get('ctc_data');  
            dbRequest.onsuccess = e => resolve(e.target.result);  
            dbRequest.onerror = reject;  
        }  
        catch (err) {  
            reject(err);  
        }  
    });  
}  
  
```  
  
剩下的工作就非常简单了。首先打开数据连接，并初始化数据：  
  
```  
openStore().then(db => saveData(db, null))  
  
```  
  
对于消息读取，可以在连接与初始化后轮询：  
  
```  
openStore().then(db => saveData(db, null)).then(function (db) {  
    setInterval(function () {  
        query(db).then(function (res) {  
            if (!res || !res.data) {  
                return;  
            }  
            const data = res.data;  
            const text = '[receive] ' + data.msg + ' —— tab ' + data.from;  
            console.log('[Storage I] receive message:', text);  
        });  
    }, 1000);  
});  
  
```  
  
最后，要发送消息时，只需向 IndexedDB 存储数据即可：  
  
```  
openStore().then(db => saveData(db, null)).then(function (db) {  
    // …… 省略上面的轮询代码  
    // 触发 saveData 的方法可以放在用户操作的事件监听内  
    saveData(db, mydata);  
});  
  
```  
  
### 小憩一下  
  
在“广播模式”外，我们又了解了“共享存储+长轮询”这种模式。也许你会认为长轮询没有监听模式优雅，但实际上，有些时候使用“共享存储”的形式时，不一定要搭配长轮询。  
  
例如，在多 Tab 场景下，我们可能会离开 Tab A 到另一个 Tab B 中操作；过了一会我们从 Tab B 切换回 Tab A 时，希望将之前在 Tab B 中的操作的信息同步回来。这时候，其实只用在 Tab A 中监听`visibilitychange`这样的事件，来做一次信息同步即可。  
  
下面，我会再介绍一种通信方式，我把它称为“口口相传”模式。  
  
---  
  
### 6\. window.open + window.opener  
  
当我们使用`window.open`打开页面时，方法会返回一个被打开页面`window`的引用。而在未显示指定`noopener`时，被打开的页面可以通过`window.opener`获取到打开它的页面的引用 —— 通过这种方式我们就将这些页面建立起了联系（一种树形结构）。  
  
首先，我们把`window.open`打开的页面的`window`对象收集起来：  
  
```  
let childWins = [];  
document.getElementById('btn').addEventListener('click', function () {  
    const win = window.open('./some/sample');  
    childWins.push(win);  
});  
  
```  
  
然后，当我们需要发送消息的时候，作为消息的发起方，一个页面需要同时通知它打开的页面与打开它的页面：  
  
```  
// 过滤掉已经关闭的窗口  
childWins = childWins.filter(w => !w.closed);  
if (childWins.length > 0) {  
    mydata.fromOpenner = false;  
    childWins.forEach(w => w.postMessage(mydata));  
}  
if (window.opener && !window.opener.closed) {  
    mydata.fromOpenner = true;  
    window.opener.postMessage(mydata);  
}  
  
```  
  
注意，我这里先用`.closed`属性过滤掉已经被关闭的 Tab 窗口。这样，作为消息发送方的任务就完成了。下面看看，作为消息接收方，它需要做什么。  
  
此时，一个收到消息的页面就不能那么自私了，除了展示收到的消息，它还需要将消息再传递给它所“知道的人”（打开与被它打开的页面）:  
  
> 需要注意的是，我这里通过判断消息来源，避免将消息回传给发送方，防止消息在两者间死循环的传递。（该方案会有些其他小问题，实际中可以进一步优化）  
  
```  
window.addEventListener('message', function (e) {  
    const data = e.data;  
    const text = '[receive] ' + data.msg + ' —— tab ' + data.from;  
    console.log('[Cross-document Messaging] receive message:', text);  
    // 避免消息回传  
    if (window.opener && !window.opener.closed && data.fromOpenner) {  
        window.opener.postMessage(data);  
    }  
    // 过滤掉已经关闭的窗口  
    childWins = childWins.filter(w => !w.closed);  
    // 避免消息回传  
    if (childWins && !data.fromOpenner) {  
        childWins.forEach(w => w.postMessage(data));  
    }  
});  
  
```  
  
这样，每个节点（页面）都肩负起了传递消息的责任，也就是我说的“口口相传”，而消息就在这个树状结构中流转了起来。  
  
### 小憩一下  
  
显然，“口口相传”的模式存在一个问题：如果页面不是通过在另一个页面内的`window.open`打开的（例如直接在地址栏输入，或从其他网站链接过来），这个联系就被打破了。  
  
除了上面这六个常见方法，其实还有一种（第七种）做法是通过 WebSocket 这类的“服务器推”技术来进行同步。这好比将我们的“中央站”从前端移到了后端。  
  
关于 WebSocket 与其他“服务器推”技术，不了解的同学可以阅读这篇[《各类“服务器推”技术原理与实例（Polling/COMET/SSE/WebSocket）》](https://juejin.cn/post/6844903618043183111)  
  
此外，我还针对以上各种方式写了一个 [在线演示的 Demo >>](https://alienzhou.github.io/cross-tab-communication/)  
  
![Demo页面](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/4/1/169d8701f85f9f33~tplv-t2oaga2asx-image.image)  
  
## 二、非同源页面之间的通信  
  
上面我们介绍了七种前端跨页面通信的方法，但它们大都受到同源策略的限制。然而有时候，我们有两个不同域名的产品线，也希望它们下面的所有页面之间能无障碍地通信。那该怎么办呢？  
  
要实现该功能，可以使用一个用户不可见的 iframe 作为“桥”。由于 iframe 与父页面间可以通过指定`origin`来忽略同源限制，因此可以在每个页面中嵌入一个 iframe （例如：`http://sample.com/bridge.html`），而这些 iframe 由于使用的是一个 url，因此属于同源页面，其通信方式可以复用上面第一部分提到的各种方式。  
  
页面与 iframe 通信非常简单，首先需要在页面中监听 iframe 发来的消息，做相应的业务处理：  
  
```  
/* 业务页面代码 */  
window.addEventListener('message', function (e) {  
    // …… do something  
});  
  
```  
  
然后，当页面要与其他的同源或非同源页面通信时，会先给 iframe 发送消息：  
  
```  
/* 业务页面代码 */  
window.frames[0].window.postMessage(mydata, '*');  
  
```  
  
其中为了简便此处将`postMessage`的第二个参数设为了`'*'`，你也可以设为 iframe 的 URL。iframe 收到消息后，会使用某种跨页面消息通信技术在所有 iframe 间同步消息，例如下面使用的 Broadcast Channel：  
  
```  
/* iframe 内代码 */  
const bc = new BroadcastChannel('AlienZHOU');  
// 收到来自页面的消息后，在 iframe 间进行广播  
window.addEventListener('message', function (e) {  
    bc.postMessage(e.data);  
});      
  
```  
  
其他 iframe 收到通知后，则会将该消息同步给所属的页面：  
  
```  
/* iframe 内代码 */  
// 对于收到的（iframe）广播消息，通知给所属的业务页面  
bc.onmessage = function (e) {  
    window.parent.postMessage(e.data, '*');  
};  
  
```  
  
下图就是使用 iframe 作为“桥”的非同源页面间通信模式图。  
  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/3/31/169d468988a6ba8f~tplv-t2oaga2asx-image.image)  
  
其中“同源跨域通信方案”可以使用文章第一部分提到的某种技术。  
  
---  
  
## 总结  
  
今天和大家分享了一下跨页面通信的各种方式。  
  
对于同源页面，常见的方式包括：  
  
* 广播模式：Broadcast Channe / Service Worker / LocalStorage + StorageEvent  
* 共享存储模式：Shared Worker / IndexedDB / cookie  
* 口口相传模式：window.open + window.opener  
* 基于服务端：Websocket / Comet / SSE 等  
  
而对于非同源页面，则可以通过嵌入同源 iframe 作为“桥”，将非同源页面通信转换为同源页面通信。  
# 如何让Promise.all在抛出异常后依然有效  
在处理多个并发请求时，我们一般会用`Promise.all()`方法。  
  
该方法指当所有在可迭代参数中的 `promises` 已完成，或者第一个传递的 promise（指 reject）失败时，返回 promise。  
  
但是当其中任何一个被拒绝的话。`Promise.all([..])`就会立即被拒绝，并丢弃来自其他所有promis的全部结果。  
  
也就是说，`promise.all` 中任何一个 `promise` 出现错误的时候都会执行reject，导致其它正常返回的数据也无法使用。  
  
如何让Promise.all在抛出异常后依然有效呢？  
  
# 方案一  
  
在promise.all队列中，使用map每一个过滤每一个promise任务，其中任意一个报错后，return一个返回值，确保promise能正常执行走到.then中。  
  
```js  
var p1 = new Promise((resolve, reject) => {  
	resolve('p1');  
});  
var p2 = new Promise((resolve, reject) => {  
	resolve('p2');  
});  
var p3 = new Promise((resolve, reject) => {  
	reject('p3');  
});  
Promise.all([p1, p2, p3].map(p => p.catch(e => '出错后返回的值' )))  
  .then(values => {  
    console.log(values);  
  }).catch(err => {  
    console.log(err);  
  })  
```  
  
# 方案二  
  
使用 `Promise.allSettled` 替代 `Promise.all()`。  
  
> `Promise.allSettled()`方法返回一个promise，该promise在所有给定的promise已被解析或被拒绝后解析，并且每个对象都描述每个promise的结果。  
  
  
  
  
  
# 什么是同步和异步？  
`JS` 是一门单线程的编程语言，这就意味着一个时间里只能处理一件事，也就是说**JS**引擎一次只能在一个线程里处理一条语句。  
  
虽然单线程简化了编程代码，因为这样咱们不必太担心并发引出的问题，这也意味着在阻塞主线程的情况下执行长时间的操作，如网络请求。  
  
想象一下从API请求一些数据，根据具体的情况，服务器需要一些时间来处理请求，同时阻塞主线程，使网页长时间处于无响应的状态。这就是引入异步 JS 的原因。使用异步 (如 回调函数、`promise`、`async/await`),可以不用阻塞主线程的情况下长时间执行网络请求。  
  
了解异步的工作方式之前，咱们先来看看同步是怎么样工作的。  
  
## 同步 JS 是如何工作的？  
  
在深入研究异步`JS`之前，先来了解同步 `JS` 代码在 `JavaScript` 引擎中执行情况。例如：  
  
```javascript  
    const second = () => {  
      console.log('Hello there!');  
    }  
      
    const first = () => {  
      console.log('Hi there!');  
      second();  
      console.log('The End');  
    }  
      
    first();  
  
复制代码  
```  
  
要理解上述代码如何在 `JS` 引擎中执行，咱们必须理解什么是**执行上下文**和**调用栈**(也称为执行堆栈)。  
  
函数代码在函数执行上下文中执行，全局代码在全局执行上下文中执行。每个函数都有自己的执行上下文。  
  
#### 调用栈  
  
调用堆栈顾名思义是一个具有`LIFO`(后进先出)结构的堆栈，用于存储在代码执行期间创建的所有执行上下文。  
  
`JS` 只有一个调用栈，因为它是一种单线程编程语言。调用堆栈具有 `LIFO` 结构，这意味着项目只能从堆栈顶部添加或删除。  
  
回到上面的代码，尝试理解代该码是如何在`JS`引擎中执行。  
  
```javascript  
const second = () => {  
  console.log('Hello there!');  
}  
const first = () => {  
  console.log('Hi there!');  
  second();  
  console.log('The End');  
}  
first();  
复制代码  
```  
  
![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/011b00fb335040b998711518badef78e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)  
  
#### 这里发生了什么?  
  
当执行此代码时，将创建一个全局执行上下文(由main()表示)并将其推到调用堆栈的顶部。当遇到对`first()`的调用时，它会被推送到堆栈的顶部。  
  
接下来,`console.log('Hi there!')`被推送到堆栈的顶部，当它完成时，它会从堆栈中弹出。之后，我们调用`second()`，因此`second()`函数被推到堆栈的顶部。  
  
`console.log('Hello there!')`被推送到堆栈顶部，并在完成时弹出堆栈。`second()` 函数结束，因此它从堆栈中弹出。  
  
`console.log(“the End”)`被推到堆栈的顶部，并在完成时删除。之后，`first()`函数完成，因此从堆栈中删除它。  
  
程序在这一点上完成了它的执行，所以全局执行上下文(main())从堆栈中弹出。  
  
## 异步 JS 是如何工作的?  
  
现在咱们已经对调用堆栈和同步`JAS`的工作原理有了基本的了解，回到异步`JS`上。  
  
#### 阻塞是什么?  
  
假设咱们正在以同步的方式进行图像处理或网络请求。例如：  
  
```scss  
const processImage = (image) => {  
  /**  
  * doing some operations on image  
  **/  
  console.log('Image processed');  
}  
const networkRequest = (url) => {  
  /**  
  * requesting network resource  
  **/  
  return someData;  
}  
const greeting = () => {  
  console.log('Hello World');  
}  
processImage(logo.jpg);  
networkRequest('www.somerandomurl.com');  
greeting();  
复制代码  
```  
  
做图像处理和网络请求需要时间，当`processImage()`函数被调用时，它会根据图像的大小花费一些时间。  
  
`processImage()` 函数完成后，将从堆栈中删除它。然后调用 `networkRequest()` 函数并将其推入堆栈。同样，它也需要一些时间来完成执行。  
  
最后，当`networkRequest()`函数完成时，调用`greeting()`函数。  
  
因此，咱们必须等待函数如`processImage()`或`networkRequest()`完成。这意味着这些函数阻塞了调用堆栈或主线程。因此，在执行上述代码时，咱们不能执行任何其他操作，这是不理想的。  
  
#### 解决办法是什么?  
  
最简单的解决方案是异步回调，各位使用异步回调使代码非阻塞。例如:  
  
```javascript  
const networkRequest = () => {  
  setTimeout(() => {  
    console.log('Async Code');  
  }, 2000);  
};  
console.log('Hello World');  
networkRequest();  
复制代码  
```  
  
这里使用了`setTimeout`方法来模拟网络请求。请记住`setTimeout`不是`JS`引擎的一部分，它是**Web Api**的一部分。  
  
为了理解这段代码是如何执行的，咱们必须理解更多的概念，比如事件轮询和回调队列(或消息队列)。  
  
![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca51b8264d114d83b3a9f84940297056~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)  
  
事件轮询、web api和消息队列不是`JavaScript`引擎的一部分，而是浏览器的`JavaScript`运行时环境或Nodejs JavaScript运行时环境的一部分(对于Nodejs)。在Nodejs中，web api被c/c++ api所替代。  
  
现在让我们回到上面的代码，看看它是如何异步执行的。  
  
```javascript  
const networkRequest = () => {  
  setTimeout(() => {  
    console.log('Async Code');  
  }, 2000);  
};  
  
console.log('Hello World');  
  
networkRequest();  
  
console.log('The End');  
复制代码  
```  
  
![](//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf142df94784461eb8fcfefd3dded8bd~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)  
  
当上述代码在浏览器中加载时，`console.log(' Hello World ')` 被推送到堆栈中，并在完成后弹出堆栈。接下来，将遇到对 `networkRequest()` 的调用，因此将它推到堆栈的顶部。  
  
下一个 `setTimeout()` 函数被调用，因此它被推到堆栈的顶部。`setTimeout()`有两个参数:  
  
* 1. 回调和  
* 1. 以毫秒(ms)为单位的时间。  
  
`setTimeout()` 方法在web api环境中启动一个2s的计时器。此时，`setTimeout()`已经完成，并从堆栈中弹出。`cosole.log(“the end”)` 被推送到堆栈中，在完成后执行并从堆栈中删除。  
  
同时，计时器已经过期，现在回调被推送到消息队列。但是回调不会立即执行，这就是事件轮询开始的地方。  
  
## 事件轮询  
  
事件轮询的工作是监听调用堆栈，并确定调用堆栈是否为空。如果调用堆栈是空的，它将检查消息队列，看看是否有任何挂起的回调等待执行。  
  
在这种情况下，消息队列包含一个回调，此时调用堆栈为空。因此，事件轮询将回调推到堆栈的顶部。  
  
然后是 `console.log(“Async Code”)` 被推送到堆栈顶部，执行并从堆栈中弹出。此时，回调已经完成，因此从堆栈中删除它，程序最终完成。  
  
消息队列还包含来自DOM事件(如单击事件和键盘事件)的回调。例如:  
  
```javascript  
document.querySelector('.btn').addEventListener('click',(event) => {  
  console.log('Button Clicked');  
});  
复制代码  
```  
  
对于DOM事件，事件侦听器位于web api环境中，等待某个事件(在本例中单击event)发生，当该事件发生时，回调函数被放置在等待执行的消息队列中。  
  
同样，事件轮询检查调用堆栈是否为空，并在调用堆栈为空并执行回调时将事件回调推送到堆栈。  
  
## 延迟函数执行  
  
咱们还可以使用`setTimeout`来延迟函数的执行，直到堆栈清空为止。例如  
  
```javascript  
const bar = () => {  
  console.log('bar');  
}  
const baz = () => {  
  console.log('baz');  
}  
const foo = () => {  
  console.log('foo');  
  setTimeout(bar, 0);  
  baz();  
}  
foo();  
复制代码  
```  
  
打印结果：  
  
```  
foo  
baz  
bar  
复制代码  
```  
  
当这段代码运行时，第一个函数`foo()`被调用，在`foo`内部我们调用`console.log('foo')`，然后`setTimeout()`被调用，`bar()`作为回调函数和时`0`秒计时器。  
  
现在，如果咱们没有使用 `setTimeout`,` bar()` 函数将立即执行，但是使用 `setTimeout` 和`0`秒计时器，将`bar`的执行延迟到堆栈为空的时候。  
  
`0`秒后，`bar()`回调被放入等待执行的消息队列中，但是它只会在堆栈完全空的时候执行，也就是在`baz`和`foo`函数完成之后。  
  
## ES6 任务队列  
  
我们已经了解了异步回调和DOM事件是如何执行的，它们使用消息队列存储等待执行所有回调。  
  
ES6引入了任务队列的概念，任务队列是 `JS` 中的 `promise` 所使用的。消息队列和任务队列的区别在于，任务队列的优先级高于消息队列，这意味着任务队列中的`promise` 作业将在消息队列中的回调之前执行，例如：  
  
```javascript  
const bar = () => {  
  console.log('bar');  
};  
  
const baz = () => {  
  console.log('baz');  
};  
  
const foo = () => {  
  console.log('foo');  
  setTimeout(bar, 0);  
  new Promise((resolve, reject) => {  
    resolve('Promise resolved');  
  }).then(res => console.log(res))  
    .catch(err => console.log(err));  
  baz();  
};  
  
foo();  
复制代码  
```  
  
打印结果：  
  
```  
foo  
baz  
Promised resolved  
bar  
复制代码  
```  
  
咱们可以看到 `promise` 在 `setTimeout` 之前执行，因为 `promise` 响应存储在任务队列中，任务队列的优先级高于消息队列。  
  
## 小结  
  
因此，咱们了解了异步 `JS` 是如何工作的，以及调用堆栈、事件循环、消息队列和任务队列等概念，这些概念共同构成了 `JS` 运行时环境。虽然成为一名出色的`JS`开发人员并不需要学习所有这些概念，但是了解这些概念是有帮助的。  
# 介绍一下 setTimeout 的运行机制  
## setTimeout简介  
  
setTimeout()函数：用来指定某个函数或某段代码在多少毫秒之后执行。它返回一个整数，表示定时器timer的编号，可以用来取消该定时器。  
  
先看个简单的例子：  
  
```js  
console.log(1);  
setTimeout(function () {  
    console.log(2);  
}, 0);  
console.log(3);  
```  
  
问：最后的打印顺序是什么？（如果不了解js的运行机制就会答错）  
  
正确答案：`1 3 2`  
  
解析：无论setTimeout的执行时间是0还是1000，结果都是先输出3后输出2，这就是面试官常常考查的js运行机制的问题，接下来我们要引入一个概念，JavaScript 是单线程的。  
  
## JavaScript 单线程  
  
JavasScript引擎是基于事件驱动和单线程执行的，JS引擎一直等待着任务队列中任务的到来，然后加以处理，浏览器无论什么时候都只有一个JS线程在运行程序，即主线程。那么单线程的JavasScript是怎么实现“非阻塞执行”呢？是通过**任务队列**。  
  
所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。  
  
单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。但是如果有些任务很慢时（比如Ajax操作从网络读取数据），我还是要等结果在执行后一个任务吗？于是，有了一种异步任务。  
  
同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；而异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有主线程执行完毕，主线程去通知"任务队列"，某个异步任务可以执行了，该任务才会进入主线程执行。  
  
所以js的运行机制如下：  
  
* 1) 所有同步任务都在主线程上执行，形成一个执行栈（Call Stack）  
* 2) 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件  
* 3) 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。  
* 4) 主线程不断重复上面的第三步。  
  
## setTimeout运行机制  
  
setTimeout 和 setInterval的运行机制，其实就是将指定的代码移出本次执行，等到下一轮 Event Loop 时，再检查是否到了指定时间。如果到了，就执行对应的代码；如果不到，就等到再下一轮 Event Loop 时重新判断。  
  
这意味着，setTimeout指定的代码，必须等到本次执行的所有同步代码都执行完，才会执行。  
  
  
  
  
  
  
# 说说你的ES7-ES12的了解  
# ES2016(ES7)  
## Array.prototype.includes()  
` includes() ` 方法用来判断一个数组是否包含一个指定的值，如果包含则返回 `true`，否则返回 `false`。  
  
### 语法  
```  
arr.includes(valueToFind[, fromIndex])  
```  
`valueToFind`，需要查找的元素值。  
  
`fromIndex` 可选 从`fromIndex` 索引处开始查找 `valueToFind`。如果为负值（即从末尾开始往前跳 `fromIndex` 的绝对值个索引，然后往后搜寻）。默认为 0。  
### 示例  
```js  
const arr = ['es6', 'es7', 'es8']  
console.log(arr.includes('es7')) // true  
console.log(arr.includes('es7', 1)) // true  
console.log(arr.includes('es7', 2)) // false  
console.log(arr.includes("es7", -1)); // fsle  
console.log(arr.includes("es7", -2)); // true  
```  
### 注意点  
使用 `includes()`查找字符串是区分大小写的。  
```js  
const arr = ["es6", "es7", "es8", "a"];  
console.log(arr.includes("A")); // false  
```  
使用 `includes()`只能判断简单类型的数据，对于复杂类型的数据，比如对象类型的数组，二维数组，这些是无法判断的.  
  
```js  
const arr = ['es6', ['es7', 'es8'], 'es9',{name:"jimmy"}]  
console.log(arr.includes(["es7", "es8"])); // false  
console.log(arr.includes({name:"jimmy"})); // false  
```  
能识别NaN，indexOf是不能识别NaN的  
  
```js  
const arr = ['es6', 'es7', NaN, 'es8']  
console.log(arr.includes(NaN)) // true  
console.log(arr.indexOf(NaN)) // -1  
```  
最后，如果只想知道某个值是否在数组中存在，而并不关心它的索引位置，建议使用includes(),如果想获取一个值在数组中的位置，那么使用indexOf方法。  
## 幂运算符 **  
比如我们想求2的10次方。  
  
### 自己写函数实现  
```js  
function pow(x, y) {  
    let result = 1  
    for (let i = 0; i < y; i++) {  
        result *= x  
    }  
    return result  
}  
console.log(pow(2, 10)) // 1024  
```  
### Math.pow()  
```js  
console.log(Math.pow(2, 10)); // 1024  
```  
### 幂运算符 **  
  
```js  
console.log(2 ** 10); // 1024  
```  
**基本求幂**  
```js  
2 ** 3   // 8  
3 ** 2   // 9  
3 ** 2.5 // 15.588457268119896  
10 ** -1 // 0.1  
NaN ** 2 // NaN  
```  
**注意**  
  
幂运算符的两个*号之间不能出现空格，否则语法会报错。  
# ES2017(ES8)  
## Object.values()  
`Object.values `方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。  
  
```js  
const obj = {  
  name: "jimmy",  
  age: 18,  
  height: 188,  
};  
console.log(Object.values(obj)); // [ 'jimmy', 18, 188 ]  
```  
## Object.entries()  
Object.entries() 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历属性的键值对数组。  
  
```js  
const obj = {  
  name: "jimmy",  
  age: 18,  
  height: 188,  
};  
console.log(Object.entries(obj)); // [ [ 'name', 'jimmy' ], [ 'age', 18 ], [ 'height', 188 ] ]  
console.log(Object.entries([1, 2, 3])); // [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ] ]  
```  
## Object.getOwnPropertyDescriptors()  
` Object.getOwnPropertyDescriptors()  ` 方法用来获取一个对象的所有自身属性的描述符。  
  
```js  
const obj = {  
  name: "jimmy",  
  age: 18,  
};  
const desc = Object.getOwnPropertyDescriptors(obj);  
console.log(desc);    
// 打印结果  
{  
  name: {  
    value: 'jimmy',  
    writable: true,  
    enumerable: true,  
    configurable: true  
  },  
  age: {   
   value: 18,   
   writable: true,  
   enumerable: true,   
   configurable: true   
  }  
}  
```  
上面打印结果中的  
  
- `value`表示当前对象的默认值  
- `writable`表示对象属性是否可以修改  
- `enumerable`表示当前这个属性是否可以出现在对象的枚举属性中   
- `configurable`表示当前对象的属性能否用delete删除   
  
那这些对象的属性我们怎么设置和修改他们呢，我们可以使用es5的 `Object.defineProperty()`  
```js  
const obj = {};  
Object.defineProperty(obj, "name", {  
  value: "jimmy",  
  writable: true,  
  configurable: true,  
  enumerable: true,  
});  
Object.defineProperty(obj, "age", {  
  value: 34,  
  writable: true,  
  configurable: true,  
  enumerable: true,  
});  
console.log(obj); // { name: 'jimmy', age: 34 }  
```  
接下来我们演示下，一些属性设置为false的情况  
```js  
const obj = {};  
Object.defineProperty(obj, "name", {  
  value: "jimmy",  
  writable: false,  
  configurable: false,  
  enumerable: true,  
});  
console.log(obj); // { name: 'jimmy' }  
obj.name = "chimmy";  
console.log(obj); // { name: 'jimmy' }  
delete obj.name  
console.log(obj); // { name: 'jimmy' }  
```  
我们可以看到设置 writable: false和configurable: false,为false时，对象的name对象的值不能改变和不能被删除，打印出来还是原来的对象。  
  
**设置enumerable为false时**  
  
```js  
const obj = {};  
Object.defineProperty(obj, "name", {  
  value: "jimmy",  
  writable: true,  
  configurable: true,  
  enumerable: false,  
});  
console.log(obj); // { }  
for (let key in obj) {  
  console.log(key); // ""  
}  
```  
当设置enumerable: false时，表示对象的属性不可被枚举，这时打印对象为空，遍历对象的键也为空。  
## String.prototype.padStart   
把指定字符串填充到字符串头部，返回新字符串。  
### 语法  
str.padStart(targetLength [, padString])  
-   `targetLength`  
  
当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。  
-   `padString` 可选  
  
填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的默认值为 " "  
### 示例  
```js  
'abc'.padStart(10);         // "       abc"  
'abc'.padStart(10, "foo");  // "foofoofabc"  
'abc'.padStart(6,"123465"); // "123abc"  
'abc'.padStart(8, "0");     // "00000abc"  
'abc'.padStart(1);          // "abc"  
```  
### 应用场景  
  
日期格式化：yyyy-mm-dd的格式：  
```js  
const now = new Date()  
const year = now.getFullYear()  
// 月份和日期 如果是一位前面给它填充一个0  
const month = (now.getMonth() + 1).toString().padStart(2, '0')  
const day = (now.getDate()).toString().padStart(2, '0')  
console.log(year, month, day)  
console.log( `${year}-${month}-${day}` ) //输入今天的日期 2021-12-31  
```  
数字替换(手机号，银行卡号等）  
```js  
const tel = '18781268679'  
const newTel = tel.slice(-4).padStart(tel.length, '*')  
console.log(newTel) // *******5678  
```  
## String.prototype.padEnd  
把指定字符串填充到字符串尾部，返回新字符串。  
  
语法同上  
### 示例  
```js  
'abc'.padEnd(10);          // "abc       "  
'abc'.padEnd(10, "foo");   // "abcfoofoof"  
'abc'.padEnd(6, "123456"); // "abc123"  
'abc'.padEnd(1);           // "abc"  
```  
### 应用场景  
在JS前端我们处理时间戳的时候单位是ms毫秒，但是，后端同学返回的时间戳则不一样是毫秒，可能只有10位，以s秒为单位。所以，我们在前端处理这个时间戳的时候，保险起见，要先做一个13位的补全，保证单位是毫秒。  
  
```js  
// 伪代码  
console.log(new Date().getTime()) // 时间戳 13位的  
timestamp = +String(timestamp).padEnd(13, '0')  
```  
## 尾逗号 Trailing commas  
ES8 允许函数的最后一个参数有尾逗号（Trailing comma）。  
此前，函数定义和调用时，都不允许最后一个参数后面出现逗号。  
  
```js  
function clownsEverywhere(  
    param1,  
    param2  
) {  
    /* ... */  
}  
  
clownsEverywhere(  
    'foo',  
    'bar'  
)  
```  
上面代码中，如果在param2或bar后面加一个逗号，就会报错。  
  
如果像上面这样，将参数写成多行（即每个参数占据一行），以后修改代码的时候，想为函数clownsEverywhere添加第三个参数，或者调整参数的次序，就势必要在原来最后一个参数后面添加一个逗号。这对于版本管理系统来说，就会显示添加逗号的那一行也发生了变动。这看上去有点冗余，因此新的语法允许定义和调用时，尾部直接可以加上一个逗号。  
```js  
function clownsEverywhere(  
    param1,  
    param2,  
) {  
    /* ... */  
}  
  
clownsEverywhere(  
    'foo',  
    'bar',  
)  
```  
这样的规定也使得，函数参数与数组和对象的尾逗号规则，保持一致了。  
## async/await  
### 介绍  
我们都知道使用 Promise 能很好地解决回调地狱的问题，但如果处理流程比较复杂的话，那么整段代码将充斥着 then，语义化不明显，代码不能很好地表示执行流程，那有没有比 Promise 更优雅的异步方式呢？那就是async/await！我们一起来揭开它神秘的面撒吧！  
  
前面添加了async的函数在执行后都会自动返回一个Promise对象:  
```js  
function foo() {  
    return 'jimmy'  
}  
console.log(foo()) // 'jimmy'  
```  
添加async后  
```js  
async function foo() {  
    return 'jimmy' // Promise.resolve('jimmy')  
}  
console.log(foo()) // Promise  
foo()  
```  
async函数中使用await，那么await这里的代码就会变成同步的了，意思就是说只有等await后面的Promise执行完成得到结果才会继续下去，await就是等待。请看下面的示例：  
```js  
function timeout() {  
    return new Promise(resolve => {  
        setTimeout(() => {  
            console.log(1)  
            resolve()  
        }, 1000)  
    })  
}  
  
// 不加async和await是2、1   加了是1、2  
async function foo() {  
    await timeout()   
    console.log(2)  
}  
foo()  
```  
  
### 使用场景  
假如有这样一个使用场景：需要先请求 a 链接，等返回信息之后，再请求 b 链接的另外一个资源。下面代码展示的是使用 fetch 来实现这样的需求，fetch 被定义在 window 对象中，它返回的是一个 Promise 对象。  
```js  
fetch('https://blog.csdn.net/')  
  .then(response => {  
    console.log(response)  
    return fetch('https://juejin.im/')  
  })  
  .then(response => {  
    console.log(response)  
  })  
  .catch(error => {  
    console.log(error)  
  })  
```  
虽然上述代码可以实现这个需求，但语义化不明显，代码不能很好地表示执行流程。基于这个原因，ES8 引入了 async/await，这是 JavaScript 异步编程的一个重大改进，提供了在不阻塞主线程的情况下使用同步代码实现异步访问资源的能力，并且使得代码逻辑更加清晰。  
```js  
async function foo () {  
  try {  
    let response1 = await fetch('https://blog.csdn.net/')  
    console.log(response1)  
    let response2 = await fetch('https://juejin.im/')  
    console.log(response2)  
  } catch (err) {  
    console.error(err)  
  }  
}  
foo()  
```  
通过上面代码，你会发现整个异步处理的逻辑都是使用同步代码的方式来实现的，而且还支持 try catch 来捕获异常，这感觉就在写同步代码，所以是非常符合人的线性思维的。  
### 注意点  
- await 只能在 async 标记的函数内部使用，单独使用会触发 Syntax error。  
  
- await后面需要跟异步操作，不然就没有意义，而且await后面的Promise对象不必写then，因为await的作用之一就是获取后面Promise对象成功状态传递出来的参数。  
  
### async/await的缺陷  
  
了解`Async/await`是非常有用的，但还有一些缺点需要考虑。  
  
`Async/await` 让你的代码看起来是同步的，在某种程度上，也使得它的行为更加地同步。 `await` 关键字会阻塞其后的代码，直到promise完成，就像执行同步操作一样。它确实可以允许其他任务在此期间继续运行，但您自己的代码被阻塞。  
  
这意味着您的代码可能会因为大量`await`的promises相继发生而变慢。每个`await`都会等待前一个完成，而你实际想要的是所有的这些promises同时开始处理（就像我们没有使用`async/await`时那样）。  
  
有一种模式可以缓解这个问题——通过将 `Promise` 对象存储在变量中来同时开始它们，然后等待它们全部执行完毕。如果想更加深入的了解，请参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#asyncawaitçç¼ºé· "Permalink to async/await的缺陷")  
  
# ES2018(ES9)  
## Object Rest & Spread  
在 ES9 新增 Object 的 Rest & Spread 方法，直接看下示例：  
```js  
const input = {  
  a: 1,  
  b: 2,  
  c: 3,  
}  
  
const output = {  
  ...input,  
  c: 4  
}  
  
console.log(output) // {a: 1, b: 2, c: 4}  
```  
这块代码展示了 spread 语法，可以把 input 对象的数据都拓展到 output 对象，这个功能很实用。需要注意的是，**如果存在相同的属性名，只有最后一个会生效**。  
  
### 注意点  
```js  
const obj = { x: { y: 10 } };  
const copy1 = { ...obj };  
const copy2 = { ...obj };  
obj.x.y = "jimmy";  
console.log(copy1, copy2); // x: {y: "jimmy"} x: {y: "jimmy"}  
console.log(copy1.x === copy2.x); // → true  
```  
如果属性的值是一个对象的话，该对象的引用会被拷贝，而不是生成一个新的对象。  
  
我们再来看下 `Object rest` 的示例：  
```js  
const input = {  
  a: 1,  
  b: 2,  
  c: 3  
}  
  
let { a, ...rest } = input  
  
console.log(a, rest) // 1 {b: 2, c: 3}  
```  
当对象 key-value 不确定的时候，把必选的 key 赋值给变量，用一个变量收敛其他可选的 key 数据，这在之前是做不到的。注意，**rest 属性必须始终出现在对象的末尾**，否则将抛出错误。  
  
##  for await of  
异步迭代器(for-await-of)：循环等待每个Promise对象变为resolved状态才进入下一步。  
  
我们知道 for...of 是同步运行的，看如下代码  
```js  
function TimeOut(time){  
    return new Promise(function(resolve, reject) {  
        setTimeout(function() {  
            resolve(time)  
        }, time)  
    })  
}  
  
async function test() {  
    let arr = [TimeOut(2000), TimeOut(1000), TimeOut(3000)]  
    for (let item of arr) {    
     console.log(Date.now(),item.then(console.log))  
    }  
}  
  
test()  
```  
上面打印结果如下图  
  
![1640436987(1).png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e9770e5600d0455c987be604f0d623cb~tplv-k3u1fbpfcp-watermark.image?)  
  
上述代码证实了 for of 方法不能遍历异步迭代器，得到的结果并不是我们所期待的，于是 for await of 就粉墨登场啦！  
  
  
 **ES9 中可以用 for...await...of 的语法来操作**  
  
```js  
function TimeOut(time) {  
    return new Promise(function(resolve, reject) {  
        setTimeout(function() {  
            resolve(time)  
        }, time)  
    })  
}  
  
async function test() {  
    let arr = [TimeOut(2000), TimeOut(1000), TimeOut(3000)]  
    for await (let item of arr) {  
        console.log(Date.now(), item)  
    }  
}  
test()  
// 1560092345730 2000  
// 1560092345730 1000  
// 1560092346336 3000  
  
```  
for await of 环等待每个Promise对象变为resolved状态才进入下一步。所有打印的结果为 2000，1000，3000  
  
## Promise.prototype.finally()  
Promise.prototype.finally() 方法返回一个Promise，在promise执行结束时，无论结果是fulfilled或者是rejected，在执行then()和catch()后，都会执行finally指定的回调函数。这为指定执行完promise后，无论结果是fulfilled还是rejected都需要执行的代码提供了一种方式，避免同样的语句需要在then()和catch()中各写一次的情况。  
  
### 示例  
```js  
new Promise((resolve, reject) => {  
    setTimeout(() => {  
        resolve('success')  
        // reject('fail')  
    }, 1000)  
}).then(res => {  
    console.log(res)  
}).catch(err => {  
    console.log(err)  
}).finally(() => {  
    console.log('finally')  
})  
```  
### 使用场景   
  
**loading关闭**  
  
需要每次发送请求，都会有loading提示，请求发送完毕，就需要关闭loading提示框，不然界面就无法被点击。不管请求成功或是失败，这个loading都需要关闭掉，这时把关闭loading的代码写在finally里再合适不过了  
  
## String 扩展  
放松对标签模板里字符串转义的限制, 遇到不合法的字符串转义会返回undefined，并且从raw上可获取原字符串。  
  
下面是一个es6 的标签模板 如果对这个语法感到陌生，请参考 [标签模板](https://es6.ruanyifeng.com/#docs/string#æ ç­¾æ¨¡æ¿)  
```js  
const foo = (a, b, c) => {  
    console.log(a)  
    console.log(b)  
    console.log(c)  
}  
const name = 'jimmy'  
const age = 18  
foo `这是${name},他的年龄是${age}岁`   
  
  
```  
参数打印如下：  
![1640441065(1).png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6db7b7356279465d85c197b9d284425d~tplv-k3u1fbpfcp-watermark.image?)  
  
ES9开始，模板字符串允许嵌套支持常见转义序列，移除对ECMAScript在带标签的模版字符串中转义序列的语法限制。  
  
```js  
function foo(a, b, c) {  
    console.log(a, b, c)  
}  
// 在标签函数中使用   
// unicode字符%u{61} 对应的值为 a  
// unicode字符%u{62} 对应的值为 b  
// %unicode 是一个无效的unicode字符  
foo `%u{61} and %u{62}`   
foo `%u{61} and %unicode`    
```  
  
![1640441321(1).png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d484a5ff27d4001948e2f7955d3ba7c~tplv-k3u1fbpfcp-watermark.image?)  
  
### 注意点  
在模板字符串中，如果输入无效的unicode字符，还是会报错。只有在便签模板中 从es9开始才不会报错。  
  
```js  
 let string = `%u{61} and %unicode`;  
 console.log(string); // Uncaught SyntaxError: Invalid Unicode escape sequence  
```  
  
# ES2019(ES10)  
## Object.fromEntries()  
方法 Object.fromEntries() 把键值对列表转换为一个对象，这个方法是和 Object.entries() 相对的。  
```js  
Object.fromEntries([  
    ['foo', 1],  
    ['bar', 2]  
])  
// {foo: 1, bar: 2}  
```  
### 案例1：Object 转换操作  
```js  
const obj = {  
    name: 'jimmy',  
    age: 18  
}  
const entries = Object.entries(obj)  
console.log(entries)  
// [Array(2), Array(2)]  
  
// ES10  
const fromEntries = Object.fromEntries(entries)  
console.log(fromEntries)  
// {name: "jimmy", age: 18}  
```  
### 案例2：Map 转 Object  
```js  
const map = new Map()  
map.set('name', 'jimmy')  
map.set('age', 18)  
console.log(map) // {'name' => 'jimmy', 'age' => 18}  
  
const obj = Object.fromEntries(map)  
console.log(obj)  
// {name: "jimmy", age: 18}  
```  
### 案例3：过滤  
course表示所有课程，想请求课程分数大于80的课程组成的对象：  
```js  
const course = {  
    math: 80,  
    english: 85,  
    chinese: 90  
}  
const res = Object.entries(course).filter(([key, val]) => val > 80)  
console.log(res) // [ [ 'english', 85 ], [ 'chinese', 90 ] ]  
console.log(Object.fromEntries(res)) // { english: 85, chinese: 90 }  
```   
### 案例4：url的search参数转换  
  
```js  
// let url = "https://www.baidu.com?name=jimmy&age=18&height=1.88"  
// queryString 为 window.location.search  
const queryString = "?name=jimmy&age=18&height=1.88";  
const queryParams = new URLSearchParams(queryString);  
const paramObj = Object.fromEntries(queryParams);  
console.log(paramObj); // { name: 'jimmy', age: '18', height: '1.88' }  
```  
## Array.prototype.flat()  
### 语法  
```  
let newArray = arr.flat([depth])  
```  
-   `depth` 可选  
指定要提取嵌套数组的结构深度，默认值为 1。  
  
### 示例  
` flat()  ` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。  
  
```js  
const arr1 = [0, 1, 2, [3, 4]];  
console.log(arr1.flat());  //  [0, 1, 2, 3, 4]  
const arr2 = [0, 1, 2, [[[3, 4]]]];  
console.log(arr2.flat(2));  //  [0, 1, 2, [3, 4]]  
  
//使用 Infinity，可展开任意深度的嵌套数组  
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];  
arr4.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
  
// `flat()` 方法会移除数组中的空项:  
var arr5 = [1, 2, , 4, 5];  
arr5.flat(); // [1, 2, 4, 5]  
```  
## Array.prototype.flatMap()  
flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。从方法的名字上也可以看出来它包含两部分功能一个是 map，一个是 flat（深度为1）。  
  
### 语法  
```js  
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {  
    // 返回新数组的元素  
}[, thisArg])  
```  
-   `callback`  
  
可以生成一个新数组中的元素的函数，可以传入三个参数：  
  
 `currentValue`   
   
 当前正在数组中处理的元素  
  
  `index`  
    
  可选 数组中正在处理的当前元素的索引。  
  
  `array`  
    
  可选   被调用的 `map` 数组  
  
-   `thisArg`可选  
  
  
执行 `callback` 函数时 使用的`this` 值。  
  
### 示例  
```js  
const numbers = [1, 2, 3]  
numbers.map(x => [x * 2]) // [[2], [4], [6]]  
numbers.flatMap(x => [x * 2]) // [2, 4, 6]  
```  
这个示例可以简单对比下 map 和 flatMap 的区别。当然还可以看下下面的示例：  
```js  
let arr = ['今天天气不错', '', '早上好']  
arr.map(s => s.split(''))  
// [["今", "天", "天", "气", "不", "错"],[""],["早", "上", "好"]]  
arr.flatMap(s => s.split(''))  
// ["今", "天", "天", "气", "不", "错", "", "早", "上", "好"]  
```  
  
`flatMap` 方法与 `map` 方法和深度depth为1的 `flat` 几乎相同.  
  
  
## String.prototype.trimStart()  
trimStart() 方法从字符串的开头删除空格，trimLeft()是此方法的别名。  
```js  
let str = '   foo  '  
console.log(str.length) // 8  
str = str.trimStart() // 或str.trimLeft()  
console.log(str.length) // 5  
```  
## String.prototype.trimEnd()  
trimEnd() 方法从一个字符串的右端移除空白字符，trimRight 是 trimEnd 的别名。  
```js  
let str = '   foo  '  
console.log(str.length) // 8  
str = str.trimEnd() // 或str.trimRight()  
console.log(str.length) // 6  
```  
## 可选的Catch Binding  
在 ES10 之前我们都是这样捕获异常的：  
```js  
try {  
    // tryCode  
} catch (err) {  
    // catchCode  
}  
```  
在这里 err 是必须的参数，在 ES10 可以省略这个参数：  
```js  
try {  
    console.log('Foobar')  
} catch {  
    console.error('Bar')  
}  
```  
### 应用  
**验证参数是否为json格式**  
  
这个需求我们只需要返回true或false，并不关心catch的参数。  
```js  
const validJSON = json => {  
    try {  
        JSON.parse(json)  
        return true  
    } catch {  
        return false  
    }  
}  
```  
## Symbol.prototype.description  
我们知道，Symbol 的描述只被存储在内部的 `Description` ，没有直接对外暴露，我们只有调用 Symbol 的 toString() 时才可以读取这个属性：  
```js  
const name = Symbol('es')  
console.log(name.toString()) // Symbol(es)  
console.log(name) // Symbol(es)  
console.log(name === 'Symbol(es)') // false  
console.log(name.toString() === 'Symbol(es)') // true  
```  
现在可以通过 description 方法获取 Symbol 的描述:  
```js  
const name = Symbol('es')  
console.log(name.description) // es  
name.description = "es2" // 只读属性 并不能修改描述符  
console.log(name.description === 'es') // true  
// 如果没有描述符 输入undefined  
const s2 = Symbol()  
console.log(s2.description) // undefined  
  
```  
## JSON.stringify() 增强能力  
JSON.stringify 在 ES10 修复了对于一些超出范围的 Unicode 展示错误的问题。因为 JSON 都是被编码成 UTF-8，所以遇到 0xD800–0xDFFF 之内的字符会因为无法编码成 UTF-8 进而导致显示错误。在 ES10 它会用转义字符的方式来处理这部分字符而非编码的方式，这样就会正常显示了。  
```js  
// 😎  emoji 多字节的一个字符  
console.log(JSON.stringify('😎')) // 打印出笑脸  
  
// 如果我们只去其中的一部分  � 这其实是个无效的字符串  
// 之前的版本 ，这些字符将替换为特殊字符，而现在将未配对的代理代码点表示为JSON转义序列  
console.log(JSON.stringify('�')) // "�"  
```  
## 修订 Function.prototype.toString()  
以前函数的toString方法来自Object.prototype.toString(),现在的  
Function.prototype.toString() 方法返回一个表示当前函数源代码的字符串。以前只会返回这个函数，不包含注释、空格等。  
  
```js  
function foo() {  
    // es10新特性  
    console.log('imooc')  
}  
console.log(foo.toString())   
// 打印如下  
// function foo() {  
//  // es10新特性  
//  console.log("imooc");  
// }  
```  
将返回注释、空格和语法等详细信息。  
  
# ES2020(ES11)  
## 空值合并运算符（Nullish coalescing Operator）  
**空值合并操作符**（ `??` ）是一个逻辑操作符，当左侧的操作数为 `null`或者`undefined`时，返回其右侧操作数，否则返回左侧操作数。  
  
```js  
const foo = undefined ?? "foo"  
const bar = null ?? "bar"  
console.log(foo) // foo  
console.log(bar) // bar  
```  
  
与逻辑或操作符（`||`）不同，逻辑或操作符会在左侧操作数为假值时返回右侧操作数。也就是说，如果使用 `||` 来为某些变量设置默认值，可能会遇到意料之外的行为。比如为假值（例如`''`,`0`,`NaN`,`false`）时。见下面的例子。  
  
```js  
const foo = "" ?? 'default string';  
const foo2 = "" || 'default string';  
console.log(foo); // ""  
console.log(foo2); // "default string"  
  
const baz = 0 ?? 42;  
const baz2 = 0 || 42;  
console.log(baz); // 0  
console.log(baz2); // 42  
  
```  
### 注意点  
将 `??` 直接与 AND（`&&`）和 OR（`||`）操作符组合使用是不可取的。  
  
```js  
null || undefined ?? "foo"; // 抛出 SyntaxError  
true || undefined ?? "foo"; // 抛出 SyntaxError  
```  
  
## 可选链 Optional chaining  
### 介绍  
**可选链**操作符( `?.` )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。`?.` 操作符的功能类似于 `.` 链式操作符，不同之处在于，在引用为 `null` 或者 `undefined` 的情况下不会引起错误，该表达式短路返回值是 `undefined`。与函数调用一起使用时，如果给定的函数不存在，则返回 `undefined`。  
  
当尝试访问可能不存在的对象属性时，可选链操作符将会使表达式更短、更简明。在探索一个对象的内容时，如果不能确定哪些属性必定存在，可选链操作符也是很有帮助的。  
  
```js  
const user = {  
    address: {  
        street: 'xx街道',  
        getNum() {  
            return '80号'  
        }  
    }  
}  
  
```  
在之前的语法中，想获取到深层属性或方法，不得不做前置校验，否则很容易命中 `Uncaught TypeError: Cannot read property...` 这种错误，这极有可能让你整个应用挂掉。  
```js  
const street = user && user.address && user.address.street  
const num = user && user.address && user.address.getNum && user.address.getNum()  
console.log(street, num)  
```  
用了 Optional Chaining ，上面代码会变成  
```js  
const street2 = user?.address?.street  
const num2 = user?.address?.getNum?.()  
console.log(street2, num2)  
```  
可选链中的 ? 表示如果问号左边表达式有值, 就会继续查询问号后面的字段。根据上面可以看出，用可选链可以大量简化类似繁琐的前置校验操作，而且更安全。  
  
### 常见用法  
```js  
  // 对象中使用  
  let obj = {  
    name: "jimmy",  
    age: "18",  
  };  
  let property = "age";  
  let name = obj?.name;  
  let age = obj?.age;  
  let ages = obj?.[property];  
  let sex = obj?.sex;  
  console.log(name); // jimmy  
  console.log(age); // 18  
  console.log(ages); // 18  
  console.log(sex); // undefined  
    
  // 数组中使用  
  let arr = [1,2,2];  
  let arrayItem = arr?.[42]; // undefined  
    
  // 函数中使用  
  let obj = {  
   func: function () {  
     console.log("I am func");  
   },  
  };  
  obj?.func(); // I am func  
```  
### 与空值合并操作符一起使用  
```js  
let customer = {  
  name: "jimmy",  
  details: { age: 18 }  
};  
let customerCity = customer?.city ?? "成都";  
console.log(customerCity); // "成都"  
```  
### 注意点  
**可选链不能用于赋值**  
```js  
let object = {};  
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment  
```  
  
## globalThis  
  
在以前，从不同的 JavaScript 环境中获取全局对象需要不同的语句。在 Web 中，可以通过 `window`、`self` 取到全局对象，在 Node.js 中，它们都无法获取，必须使用 `global`。  
  
在松散模式下，可以在函数中返回 `this` 来获取全局对象，但是在严格模式和模块环境下，`this` 会返回 `undefined`。  
  
以前想要获取全局对象，可通过一个全局函数  
```js  
const getGlobal = () => {  
    if (typeof self !== 'undefined') {  
        return self  
    }  
    if (typeof window !== 'undefined') {  
        return window  
    }  
    if (typeof global !== 'undefined') {  
        return global  
    }  
    throw new Error('无法找到全局对象')  
}  
  
const globals = getGlobal()  
console.log(globals)  
```  
  
现在`globalThis` 提供了一个标准的方式来获取不同环境下的全局 `this`  对象（也就是全局对象自身）。不像 `window` 或者 `self` 这些属性，它确保可以在有无窗口的各种环境下正常工作。所以，你可以安心的使用 `globalThis`，不必担心它的运行环境。  
  
为便于记忆，你只需要记住，全局作用域中的 `this` 就是`globalThis`。以后就用globalThis就行了。  
## BigInt  
**`BigInt`** 是一种内置对象，它提供了一种方法来表示大于 `2的53次方 - 1` 的整数。这原本是 Javascript中可以用 `Number` 表示的最大数字。**`BigInt`** 可以表示任意大的整数。  
  
**使用 BigInt 有两种方式：**  
  
### 方式一：数字后面增加n  
```js  
const bigInt = 9007199254740993n  
console.log(bigInt)  
console.log(typeof bigInt) // bigint  
  
// `BigInt` 和 [`Number`]不是严格相等的，但是宽松相等的。  
console.log(1n == 1) // true  
console.log(1n === 1) // false  
  
// `Number` 和 `BigInt` 可以进行比较。  
1n < 2 // ↪ true  
2n > 1 // ↪ true  
  
```  
### 方式二：使用 BigInt 函数  
```js  
const bigIntNum = BigInt(9007199254740993n)  
console.log(bigIntNum)  
```  
### 运算  
  
```js  
let number = BigInt(2);  
let a = number + 2n; // 4n  
let b = number * 10n; // 20n  
let c = number - 10n; // -8n  
console.log(a);  
console.log(b);  
console.log(c);  
```  
### 注意点  
BigInt不能用于 [`Math`] 对象中的方法；不能和任何 [`Number`] 实例混合运算，两者必须转换成同一种类型。在两种类型来回转换时要小心，因为 `BigInt` 变量在转换成 [`Number`] 变量时可能会丢失精度。  
  
##  String.prototype.matchAll()  
**`matchAll()`**  方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。  
```js  
const regexp = /t(e)(st(d?))/g;  
const str = 'test1test2';  
  
const array = [...str.matchAll(regexp)];  
console.log(array[0]);  // ["test1", "e", "st1", "1"]  
console.log(array[1]); // ["test2", "e", "st2", "2"]  
```  
  
## Promise.allSettled()  
我们都知道 Promise.all() 具有并发执行异步任务的能力。但它的最大问题就是如果其中某个任务出现异常(reject)，所有任务都会挂掉，Promise直接进入reject 状态。  
  
场景：现在页面上有三个请求，分别请求不同的数据，如果一个接口服务异常，整个都是失败的，都无法渲染出数据  
  
我们需要一种机制，如果并发任务中，无论一个任务正常或者异常，都会返回对应的的状态，这就是`Promise.allSettled`的作用  
```js  
const promise1 = () => {  
  return new Promise((resolve, reject) => {  
    setTimeout(() => {  
      resolve("promise1");  
      //   reject("error promise1 ");  
    }, 3000);  
  });  
};  
const promise2 = () => {  
  return new Promise((resolve, reject) => {  
    setTimeout(() => {  
      resolve("promise2");  
      //   reject("error promise2 ");  
    }, 1000);  
  });  
};  
const promise3 = () => {  
  return new Promise((resolve, reject) => {  
    setTimeout(() => {  
      //   resolve("promise3");  
      reject("error promise3 ");  
    }, 2000);  
  });  
};  
  
//  Promise.all 会走到catch里面  
Promise.all([promise1(), promise2(), promise3()])  
  .then((res) => {  
    console.log(res);   
  })  
  .catch((error) => {  
    console.log("error", error); // error promise3   
  });  
    
// Promise.allSettled 不管有没有错误，三个的状态都会返回  
Promise.allSettled([promise1(), promise2(), promise3()])  
  .then((res) => {  
    console.log(res);    
    // 打印结果   
    // [  
    //    {status: 'fulfilled', value: 'promise1'},   
    //    {status: 'fulfilled',value: 'promise2'},  
    //    {status: 'rejected', reason: 'error promise3 '}  
    // ]  
  })  
  .catch((error) => {  
    console.log("error", error);   
  });  
```  
## Dynamic Import（按需 import）  
`import()`可以在需要的时候，再加载某个模块。  
```js  
button.addEventListener('click', event => {  
  import('./dialogBox.js')  
  .then(dialogBox => {  
    dialogBox.open();  
  })  
  .catch(error => {  
    /* Error handling */  
  })  
});  
```  
上面代码中，`import()`方法放在`click`事件的监听函数之中，只有用户点击了按钮，才会加载这个模块。  
  
# ES2021(ES12)  
##  逻辑运算符和赋值表达式（&&=，||=，??=）  
### &&=  
逻辑与赋值 `x &&= y`等效于：  
```js  
x && (x = y);  
```  
上面的意思是，当x为真时，x=y。 具体请看下面的示例:  
  
```js  
let a = 1;  
let b = 0;  
  
a &&= 2;  
console.log(a); // 2  
  
b &&= 2;  
console.log(b);  // 0  
```  
### ||=  
  
逻辑或赋值（`x ||= y`）运算仅在 `x` 为false时赋值。   
  
**`x ||= y` 等同于：x || (x = y);**  
  
```js  
const a = { duration: 50, title: '' };  
  
a.duration ||= 10;  
console.log(a.duration); // 50  
  
a.title ||= 'title is empty.';  
console.log(a.title); // "title is empty"  
  
```  
### ??=  
  
逻辑空赋值运算符 (`x ??= y`) 仅在 `x` 是 [nullish](https://developer.mozilla.org/zh-CN/docs/Glossary/Nullish) (`null` 或 `undefined`) 时对其赋值。  
  
**`x ??= y` 等价于： x ?? (x = y);**  
  
**示例一**  
```js  
const a = { duration: 50 };  
  
a.duration ??= 10;  
console.log(a.duration); // 50  
  
a.speed ??= 25;  
console.log(a.speed); // 25  
```  
  
**示例二**  
```js  
function config(options) {  
  options.duration ??= 100;  
  options.speed ??= 25;  
  return options;  
}  
  
config({ duration: 125 }); // { duration: 125, speed: 25 }  
config({}); // { duration: 100, speed: 25 }  
```  
  
  
  
##  String.prototype.replaceAll()  
### 介绍  
`replaceAll()`  方法返回一个新字符串，新字符串中所有满足 `pattern` 的部分都会被`replacement` 替换。`pattern`可以是一个字符串或一个`RegExp`，`replacement`可以是一个字符串或一个在每次匹配被调用的函数。  
  
原始字符串保持不变。  
  
### 示例  
```js  
'aabbcc'.replaceAll('b', '.'); // 'aa..cc'  
```  
使用正则表达式搜索值时，它必须是全局的。  
```js  
'aabbcc'.replaceAll(/b/, '.');  
TypeError: replaceAll must be called with a global RegExp  
```  
这将可以正常运行:  
```js  
'aabbcc'.replaceAll(/b/g, '.');  
"aa..cc"  
```  
##  **数字分隔符**  
欧美语言中，较长的数值允许每三位添加一个分隔符（通常是一个逗号），增加数值的可读性。比如，`1000`可以写作`1,000`。  
  
`ES2021`中允许 JavaScript 的数值使用下划线（`_`）作为分隔符。  
```js  
let budget = 1_000_000_000_000;  
budget === 10 ** 12 // true  
```  
这个数值分隔符没有指定间隔的位数，也就是说，可以每三位添加一个分隔符，也可以每一位、每两位、每四位添加一个。  
```js  
123_00 === 12_300 // true  
  
12345_00 === 123_4500 // true  
12345_00 === 1_234_500 // true  
```  
小数和科学计数法也可以使用数值分隔符。  
```js  
// 小数  
0.000_001  
  
// 科学计数法  
1e10_000  
```  
数值分隔符有几个使用注意点。  
  
-   不能放在数值的最前面（leading）或最后面（trailing）。  
-   不能两个或两个以上的分隔符连在一起。  
-   小数点的前后不能有分隔符。  
-   科学计数法里面，表示指数的`e`或`E`前后不能有分隔符。  
  
下面的写法都会报错。  
  
```js  
// 全部报错  
3_.141  
3._141  
1_e12  
1e_12  
123__456  
_1464301  
1464301_  
```  
## **Promise.any**  
  
方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。  
  
```js  
const promise1 = () => {  
  return new Promise((resolve, reject) => {  
    setTimeout(() => {  
      resolve("promise1");  
      //  reject("error promise1 ");  
    }, 3000);  
  });  
};  
const promise2 = () => {  
  return new Promise((resolve, reject) => {  
    setTimeout(() => {  
      resolve("promise2");  
      // reject("error promise2 ");  
    }, 1000);  
  });  
};  
const promise3 = () => {  
  return new Promise((resolve, reject) => {  
    setTimeout(() => {  
      resolve("promise3");  
      // reject("error promise3 ");  
    }, 2000);  
  });  
};  
Promise.any([promise1(), promise2(), promise3()])  
  .then((first) => {  
    // 只要有一个请求成功 就会返回第一个请求成功的  
    console.log(first); // 会返回promise2  
  })  
  .catch((error) => {  
    // 所有三个全部请求失败 才会来到这里  
    console.log("error", error);  
  });  
```  
只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。  
  
`Promise.any()`跟`Promise.race()`方法很像，只有一点不同，就是`Promise.any()`不会因为某个 Promise 变成`rejected`状态而结束，必须等到所有参数 Promise 变成`rejected`状态才会结束。  
  
##  WeakRef and Finalizers  
这两个新特性，都应该尽量避免使用，所以这里不做过多的讲解。如感兴趣，请参考   
  
[WeakRef](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef)   
  
[Finalizers](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)  
  
  
  
  
  
  
  
  
  
  
  
# ['1','2','3'].map(parseInt) 的返回值是什么？  
首先整个题目考校的是两个函数，和一个字符串转数字的概念  
  
1. 数组的`map`函数，接受三个参数，当前值，当前索引，当前数组。  
2. parseInt接受两个参数，需要转换的字符串，基数（基数取值范围2\~36）    
  
```js  
var new_array = arr.map(function callback(currentValue, index, array) {    
 // Return element for new_array    
})    
parseInt(string, radix)  
```  
  
3. 根据上面的两个函数的解释，我们可以发现实际上，上面的`['1','2','3'].map(parseInt)` 其实就是等价于下面的代码。    
  
```js  
['1','2','3'].map((item, index) => {    
    return parseInt(item, index)    
})    
//  parseInt('1', 0)  1    
//  parseInt('2', 1)  NaN    
//  parseInt('3', 2)  NaN  
```  
  
4. 如果我们需要返回1，2，3需要怎么办？    
  
```js  
function parseIntFun(item) {    
    return parseInt(item, 10)    
}    
['1','2','3'].map(parseIntFun)    
//  parseInt('1', 10)  1    
//  parseInt('2', 10)  2    
//  parseInt('3', 10)  3  
```  
  
综上所述，返回值是 [1,NaN,NaN]   
# 遍历数组的方式有哪些？  
## 数组的方法  
  
JavaScript发展到现在已经提供了许多数组的方法，下面这张图涵盖了数组大部分的方法。  
  
![数组.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b98bb49a4fb49b6942f1397c18173df~tplv-k3u1fbpfcp-watermark.image?)  
  
我们来说一说数组的遍历方法，以及各自的性能，方法这么多，如何挑选性能最佳的方法对我们的开发有非常大的帮助。  
  
## 数组遍历的方法  
  
### for  
  
**标准的for循环语句，也是最传统的循环语句**  
  
```js  
var arr = [1,2,3,4,5]  
for(var i=0;i<arr.length;i++){  
  console.log(arr[i])  
}  
```  
  
最简单的一种遍历方式，也是使用频率最高的，性能较好，但还能优化  
  
**优化版for循环语句**  
  
```js  
var arr = [1,2,3,4,5]  
for(var i=0,len=arr.length;i<len;i++){  
  console.log(arr[i])  
}  
```  
  
使用临时变量，将长度缓存起来，避免重复获取数组长度，尤其是当数组长度较大时优化效果才会更加明显。  
  
**这种方法基本上是所有循环遍历方法中性能最高的一种**  
  
### forEach  
  
**普通forEach**  
  
对数组中的每一元素运行给定的函数,没有返回值，常用来遍历元素  
  
```js  
var arr5 = [10,20,30]  
var result5 = arr5.forEach((item,index,arr)=>{  
    console.log(item)  
})  
console.log(result5)  
/*  
10  
20  
30  
undefined   该方法没有返回值  
*/  
```  
  
**数组自带的foreach循环，使用频率较高，实际上性能比普通for循环弱**  
  
**原型forEach**  
  
由于foreach是Array型自带的，对于一些非这种类型的，无法直接使用(如NodeList)，所以才有了这个变种，使用这个变种可以让类似的数组拥有foreach功能。  
  
```js  
const nodes = document.querySelectorAll('div')  
Array.prototype.forEach.call(nodes,(item,index,arr)=>{  
  console.log(item)  
})  
```  
  
**实际性能要比普通foreach弱**  
  
### for...in  
  
任意顺序遍历一个对象的除[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)以外的[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性，包括继承的可枚举属性。  
  
一般常用来遍历对象，包括非整数类型的名称和继承的那些原型链上面的属性也能被遍历。像 Array和 Object使用内置构造函数所创建的对象都会继承自Object.prototype和String.prototype的不可枚举属性就不能遍历了.  
  
```js  
var arr = [1,2,3,4,5]  
for(var i in arr){  
  console.log(i,arr[i])  
}  //这里的i是对象属性，也就是数组的下标  
/**  
0 1  
1 2  
2 3  
3 4  
4 5 **/  
```  
  
**大部分人都喜欢用这个方法，但它的性能却不怎么好**  
  
### for...of（不能遍历对象）  
  
> 在可迭代对象（具有 iterator 接口）（Array，Map，Set，String，arguments）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句，不能遍历对象  
  
```js  
let arr=["前端","面试题宝典","真好用"];  
    for (let item of arr){  
        console.log(item)  
    }  
  
//遍历对象  
let person={name:"前端面试题宝典",age:18,city:"上海"}  
for (let item of person){  
  console.log(item)  
}  
// 我们发现它是不可以的 我们可以搭配Object.keys使用  
for(let item of Object.keys(person)){  
    console.log(person[item])  
}  
// 南玖 18 上海  
```  
  
这种方式是es6里面用到的，性能要好于forin，但仍然比不上普通for循环  
  
### map  
  
> map: 只能遍历数组，不能中断，返回值是修改后的数组。  
  
```js  
let arr=[1,2,3];  
const res = arr.map(item=>{  
  return item+1  
})  
console.log(res) //[2,3,4]  
console.log(arr) // [1,2,3]  
```  
  
### every  
  
对数组中的每一运行给定的函数，如果该函数对每一项都返回true,则该函数返回true  
  
````js  
var arr = [10,30,25,64,18,3,9]  
var result = arr.every((item,index,arr)=>{  
      return item>3  
})  
console.log(result)  //false  
````  
  
### some  
  
对数组中的每一运行给定的函数，如果该函数有一项返回true,就返回true，所有项返回false才返回false  
  
````js  
var arr2 = [10,20,32,45,36,94,75]  
var result2 = arr2.some((item,index,arr)=>{  
    return item<10  
})  
console.log(result2)  //false  
````  
  
### reduce  
  
`reduce()`方法对数组中的每个元素执行一个由你提供的reducer函数（升序执行），将其结果汇总为单个返回值  
  
```js  
const array = [1,2,3,4]  
const reducer = (accumulator, currentValue) => accumulator + currentValue;  
  
// 1 + 2 + 3 + 4  
console.log(array1.reduce(reducer));  
```  
  
### filter  
  
对数组中的每一运行给定的函数，会返回满足该函数的项组成的数组  
  
````js  
// filter  返回满足要求的数组项组成的新数组  
var arr3 = [3,6,7,12,20,64,35]  
var result3 = arr3.filter((item,index,arr)=>{  
    return item > 3  
})  
console.log(result3)  //[6,7,12,20,64,35]  
````  
  
## 性能测试  
  
### 工具测试  
  
使用工具测试[性能分析](http://tools.jb51.net/aideddesign/js_bianli)结果如下图所示  
  
![性能测试1.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/273410e5e9ed430784437146133327ba~tplv-k3u1fbpfcp-watermark.image?)  
  
### 手动测试  
  
我们也可以自己用代码测试：  
  
```js  
//测试函数  
function clecTime(fn,fnName){  
        const start = new Date().getTime()  
        if(fn) fn()  
        const end = new Date().getTime()  
        console.log(`${fnName}执行耗时:${end-start}ms`)  
}  
  
function forfn(){  
  let a = []  
  for(var i=0;i<arr.length;i++){  
    // console.log(i)  
    a.push(arr[i])  
  }  
}  
clecTime(forfn, 'for')   //for执行耗时:106ms  
  
function forlenfn(){  
  let a = []  
  for(var i=0,len=arr.length;i<len;i++){  
    a.push(arr[i])  
  }  
}  
clecTime(forlenfn, 'for len')   //for len执行耗时:95ms  
  
function forEachfn(){  
  let a = []  
  arr.forEach(item=>{  
    a.push[item]  
  })  
}  
clecTime(forEachfn, 'forEach')   //forEach执行耗时:201ms  
  
function forinfn(){  
  let a = []  
  for(var i in arr){  
    a.push(arr[i])  
  }  
}  
clecTime(forinfn, 'forin') //forin执行耗时:2584ms (离谱)  
  
function foroffn(){  
  let a = []  
  for(var i of arr){  
    a.push(i)  
  }  
}  
clecTime(foroffn, 'forof') //forof执行耗时:221ms  
  
//  ...其余可自行测试  
```  
  
### 结果分析  
  
经过工具与手动测试发现，结果基本一致，数组遍历各个方法的速度：**传统的for循环最快，for-in最慢**  
  
> for-len `>` for ` > ` for-of ` > ` forEach  ` > ` map ` > ` for-in  
  
#### javascript原生遍历方法的建议用法：  
  
- 用`for`循环遍历数组  
- 用`for...in`遍历对象  
- 用`for...of`遍历类数组对象（ES6）  
- 用`Object.keys()`获取对象属性名的集合  
  
####  为何for… in会慢？  
  
因为`for … in`语法是第一个能够迭代对象键的JavaScript语句，循环对象键（{}）与在数组（[]）上进行循环不同，引擎会执行一些额外的工作来跟踪已经迭代的属性。因此不建议使用`for...in`来遍历数组  
# 怎么预防按钮的重复点击？  
先看看在那些场景会导致重复请求：   
  
1. 手速快，不小心双击操作按钮。   
2. 很小心的点击了一次按钮，因为请求响应比较慢，页面没有任何提示，怀疑上次点击没生效，再次点击操作按钮。   
3. 很小心的点击了一次按钮，因为请求响应比较慢，页面没有任何提示，刷新页面，再次点击操作按钮。  
  
## 前端方案  
  
我们可以对症下药：   
  
1. 控制按钮，在短时间内被多次点击，第一次以后的点击无效。   
2. 控制按钮，在点击按钮触发的请求响应之前，再次点击无效。   
3. 配置特殊的URL，然后控制这些URL请求的最小时间间隔。如果再次请求跟前一次请求间隔很小，弹窗二次提示，是否继续操作。  
  
### 防止无意识重复点击按钮  
  
给按钮添加控制，在`control` 毫秒内，第一次点击事件之后的点击事件不执行。  
  
```text  
<template>  
    <button @click="handleClick"></button>  
</templage>  
<script>  
export default {  
    methods: {  
        handleClick(event) {  
            if (this.disabled) return;  
            if (this.notAllowed) return;  
            // 点击完多少秒不能继续点  
            this.notAllowed = true;  
            setTimeout(()=>{  
                this.notAllowed = false;  
            }, this.control)  
            this.$emit('click', event, this);  
        }  
    }  
}  
</script>  
```  
  
当然时间间隔可以设置，默认为300毫秒。我们无意识的重复点击一般在300毫秒以内。  
  
### 按钮点击立马禁用，等响应回来才能继续点击  
  
触发点击的button实例传入fetch配置，代码如下：  
  
```js  
doQuery: function (button) {  
    this.FesApi.fetch(`generalcard/query`, {  
        sub_card_type: this.query.sub_card_type,  
        code_type: this.query.code_type,  
        title: this.query.title,  
        card_id: this.query.card_id,  
        page_info: {  
            pageSize: this.paginationOption.page_info.pageSize,  
            currentPage: this.paginationOption.page_info.currentPage  
        }  
    }, {  
        //看这里，加上下面一行代码就行。。so easy  
        button: button  
    }).then(rst => {  
        // 成功处理  
    });  
}  
  
```  
  
在fetch函数内部，设置button的`disabled=true`，当响应回来时，设置`disabled=false`代码如下：  
  
```js  
const action = function (url, data, option) {  
    // 如果传了button  
    if (option.button) {  
        option.button.currentDisabled = true;  
    }  
    // 记录日志  
    const log = requsetLog.creatLog(url, data);  
  
    return param(url, data, option)  
        .then(success, fail)  
        .then((response) => {  
            requsetLog.changeLogStatus(log, 'success');  
            if (option && option.button) {  
                option.button.currentDisabled = false;  
            }  
            return response;  
        })  
        .catch((error) => {  
            requsetLog.changeLogStatus(log, 'fail');  
            if (option && option.button) {  
                option.button.currentDisabled = false;  
            }  
            error.message && window.Toast.error(error.message);  
            throw error;  
        });  
};  
  
```  
  
### 从根本入手，一招击杀  
  
当页面刷新，页面状态重置，此时再次点击按钮，会判定为初次点击，而且按钮状态恢复可点击。我们可以设置哪些请求地址是重要的，它们请求间隔不能过小。如果过小，页面弹出覆层询问用户时候继续执行。   
  
 设置代码如下：  
  
```js  
this.FesApi.setImportant({  
    'generalcard/action': {  
        control: 10000,  
        message: '您在十秒内重复发起手工清算操作，是否继续？'  
    }  
})  
  
```  
  
而实现代码如下：  
  
```js  
api.fetch = function (url, data, option) {  
    if (requsetLog.importantApi[url]) {  
        const logs = requsetLog.getLogByURL(url, data);  
        if (logs.length > 0) {  
            const compareLog = logs[logs.length - 1];  
            if (compareLog.status === 'compare') {  
                requsetLog.creatLog(url, data, 'notAllowed');  
                return {  
                    then: () => {}  
                };  
            }  
            const importantApiOption = requsetLog.importantApi[url];  
            const control = importantApiOption.control || 10000;  
            const message = importantApiOption.message || util.format('fesMessages.importInterfaceTip', { s: control / 1000 });  
            if (new Date().getTime() - compareLog.timestamp < control) {  
                const oldStatus = compareLog.status;  
                requsetLog.changeLogStatus(compareLog, 'compare');  
                return new Promise(((resolve, reject) => {  
                    window.Message.confirm(util.format('fesMessages.tip'), message).then((index) => {  
                        if (compareLog.status === 'compare') {  
                            requsetLog.changeLogStatus(compareLog, oldStatus);  
                        }  
                        if (index === 0) {  
                            resolve(action(url, data, option));  
                        } else {  
                            reject(new Error('不允许相同操作间隔过小'));  
                        }  
                    });  
                }));  
            }  
            return action(url, data, option);  
        }  
        return action(url, data, option);  
    }  
    return action(url, data, option);  
};  
  
```  
  
攻击者可以绕过正常流程，模拟发起多次请求，所以仅仅在前端页面做好预防重复请求工作是不够的。后台接口需要设计得更健壮，具有幂等性。  
  
# 怎么实现大型文件上传？  
# 前言  
  
大文件快速上传的方案，相信你也有过了解，其实无非就是将 **文件变小**，也就是通过 **压缩文件资源** 或者 **文件资源分块** 后再上传。  
  
本文只介绍资源分块上传的方式，并且会通过 **前端（vue3 + vite）** 和 **服务端（nodejs + koa2）** 交互的方式，实现大文件分块上传的简单功能.  
  
# 梳理思路  
  
问题 1：**谁负责资源分块？谁负责资源整合？**  
  
当然这个问题也很简单，肯定是前端负责分块，服务端负责整合.  
  
问题 2：**前端怎么对资源进行分块？**  
  
首先是选择上传的文件资源，接着就可以得到对应的文件对象 **File**，而 **File.prototype.slice** 方法可以实现资源的分块，当然也有人说是 **Blob.prototype.slice** 方法，因为 **`Blob.prototype.slice === File.prototype.slice`**.  
  
问题 3：**服务端怎么知道什么时候要整合资源？如何保证资源整合的有序性？**  
  
由于前端会将资源分块，然后单独发送请求，也就是说，原来 1 个文件对应 1 个上传请求，现在可能会变成 1 个文件对应 n 个上传请求，所以前端可以基于 Promise.all 将这多个接口整合，上传完成在发送一个合并的请求，通知服务端进行合并。  
  
合并时可通过 nodejs 中的读写流（readStream/writeStream），将所有切片的流通过管道（pipe）输入最终文件的流中。  
  
在发送请求资源时，前端会定好每个文件对应的序号，并将当前分块、序号以及文件 hash 等信息一起发送给服务端，服务端在进行合并时，通过序号进行依次合并即可。  
  
问题 4：**如果某个分块的上传请求失败了，怎么办？**  
  
一旦服务端某个上传请求失败，会返回当前分块失败的信息，其中会包含文件名称、文件 hash、分块大小以及分块序号等，前端拿到这些信息后可以进行重传，同时考虑此时是否需要将 Promise.all 替换为 Promise.allSettled 更方便.  
  
# 前端部分  
  
## 创建项目  
  
通过 **`pnpm create vite`** 创建项目，对应文件目录如下.  
  
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/045b8b5449a34e85a7e04435ca54bf76~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)  
  
## 请求模块  
  
**src/request.js**  
  
该文件就是针对 `axios` 进行简单的封装，如下：  
  
```js  
import axios from "axios";  
  
const baseURL = 'http://localhost:3001';  
  
export const uploadFile = (url, formData, onUploadProgress = () => { }) => {  
  return axios({  
    method: 'post',  
    url,  
    baseURL,  
    headers: {  
      'Content-Type': 'multipart/form-data'  
    },  
    data: formData,  
    onUploadProgress  
  });  
}  
  
export const mergeChunks = (url, data) => {  
  return axios({  
    method: 'post',  
    url,  
    baseURL,  
    headers: {  
      'Content-Type': 'application/json'  
    },  
    data  
  });  
}  
复制代码  
```  
  
## 文件资源分块  
  
根据 **`DefualtChunkSize = 5 * 1024 * 1024`** ，即 5 MB ，来对文件进行资源分块进行计算，通过 [spark-md5](https://link.juejin.cn?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fspark-md5 "https://www.npmjs.com/package/spark-md5") 根据文件内容计算出文件的 hash 值，方便做其他优化，比如：当 hash 值不变时，服务端没有必要重复读写文件等.  
  
```js  
// 获取文件分块  
const getFileChunk = (file, chunkSize = DefualtChunkSize) => {  
  return new Promise((resovle) => {  
    let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,  
      chunks = Math.ceil(file.size / chunkSize),  
      currentChunk = 0,  
      spark = new SparkMD5.ArrayBuffer(),  
      fileReader = new FileReader();  
  
    fileReader.onload = function (e) {  
      console.log('read chunk nr', currentChunk + 1, 'of');  
  
      const chunk = e.target.result;  
      spark.append(chunk);  
      currentChunk++;  
  
      if (currentChunk < chunks) {  
        loadNext();  
      } else {  
        let fileHash = spark.end();  
        console.info('finished computed hash', fileHash);  
        resovle({ fileHash });  
      }  
    };  
  
    fileReader.onerror = function () {  
      console.warn('oops, something went wrong.');  
    };  
  
    function loadNext() {  
      let start = currentChunk * chunkSize,  
        end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;  
      let chunk = blobSlice.call(file, start, end);  
      fileChunkList.value.push({ chunk, size: chunk.size, name: currFile.value.name });  
      fileReader.readAsArrayBuffer(chunk);  
    }  
  
    loadNext();  
  });  
}  
复制代码  
```  
  
## 发送上传请求和合并请求  
  
通过 **`Promise.all`** 方法整合所以分块的上传请求，在所有分块资源上传完毕后，在 **`then`** 中发送合并请求.  
  
```js  
// 上传请求  
const uploadChunks = (fileHash) => {  
  const requests = fileChunkList.value.map((item, index) => {  
    const formData = new FormData();  
    formData.append(`${currFile.value.name}-${fileHash}-${index}`, item.chunk);  
    formData.append("filename", currFile.value.name);  
    formData.append("hash", `${fileHash}-${index}`);  
    formData.append("fileHash", fileHash);  
    return uploadFile('/upload', formData, onUploadProgress(item));  
  });  
  
  Promise.all(requests).then(() => {  
    mergeChunks('/mergeChunks', { size: DefualtChunkSize, filename: currFile.value.name });  
  });  
}  
复制代码  
```  
  
## 进度条数据  
  
分块进度数据利用 **axios** 中的 **onUploadProgress** 配置项获取数据，通过使用**computed** 根据分块进度数据的变化自动自动计算当前文件的总进度.  
  
```javascript  
// 总进度条  
const totalPercentage = computed(() => {  
  if (!fileChunkList.value.length) return 0;  
  const loaded = fileChunkList.value  
    .map(item => item.size * item.percentage)  
    .reduce((curr, next) => curr + next);  
  return parseInt((loaded / currFile.value.size).toFixed(2));  
})  
  
// 分块进度条  
const onUploadProgress = (item) => (e) => {  
  item.percentage = parseInt(String((e.loaded / e.total) * 100));  
}  
复制代码  
```  
  
# 服务端部分  
  
## 搭建服务  
  
* 使用 **koa2** 搭建简单的服务，端口为 **3001**  
* 使用 **koa-body** 处理接收前端传递 **`'Content-Type': 'multipart/form-data'`** 类型的数据  
* 使用 **koa-router** 注册服务端路由  
* 使用 **koa2-cors** 处理跨域问题  
  
## 目录/文件划分  
  
**server/server.js**  
  
该文件是服务端具体的代码实现，用于处理接收和整合分块资源.  
  
**server/resources**  
  
该目录是用于存放单文件的多个分块，以及最后分块整合后的资源：  
  
* **分块资源未合并时**，会在该目录下以当前文件名创建一个目录，用于存放这个该文件相关的所有分块  
* **分块资源需合并时**，会读取这个文件对应的目录下的所有分块资源，然后将它们整合成原文件  
* **分块资源合并完成**，会删除这个对应的文件目录，只保留合并后的原文件，生成的文件名比真实文件名多一个 `_` 前缀，如原文件名 `"测试文件.txt"` 对应合并后的文件名 `"_测试文件.txt"`  
  
## 接收分块  
  
使用 `koa-body` 中的 `formidable` 配置中的 `onFileBegin` 函数处理前端传来的 **FormData** 中的文件资源，在前端处理对应分块名时的格式为：`filename-fileHash-index`，所以这里直接将分块名拆分即可获得对应的信息。  
  
```js  
// 上传请求  
router.post(  
  '/upload',  
  // 处理文件 form-data 数据  
  koaBody({  
    multipart: true,  
    formidable: {  
      uploadDir: outputPath,  
      onFileBegin: (name, file) => {  
        const [filename, fileHash, index] = name.split('-');  
        const dir = path.join(outputPath, filename);  
        // 保存当前 chunk 信息，发生错误时进行返回  
        currChunk = {  
          filename,  
          fileHash,  
          index  
        };  
  
        // 检查文件夹是否存在如果不存在则新建文件夹  
        if (!fs.existsSync(dir)) {  
          fs.mkdirSync(dir);  
        }  
  
        // 覆盖文件存放的完整路径  
        file.path = `${dir}/${fileHash}-${index}`;  
      },  
      onError: (error) => {  
        app.status = 400;  
        app.body = { code: 400, msg: "上传失败", data: currChunk };  
        return;  
      },  
    },  
  }),  
  // 处理响应  
  async (ctx) => {  
    ctx.set("Content-Type", "application/json");  
    ctx.body = JSON.stringify({  
      code: 2000,  
      message: 'upload successfully！'  
    });  
  });  
复制代码  
```  
  
## 整合分块  
  
通过文件名找到对应文件分块目录，使用 `fs.readdirSync(chunkDir)` 方法获取对应目录下所以分块的命名，在通过 `fs.createWriteStream/fs.createReadStream` 创建可写/可读流，结合管道 `pipe` 将流整合在同一文件中，合并完成后通过 `fs.rmdirSync(chunkDir)` 删除对应分块目录.  
  
```js  
// 合并请求  
router.post('/mergeChunks', async (ctx) => {  
  const { filename, size } = ctx.request.body;  
  // 合并 chunks  
  await mergeFileChunk(path.join(outputPath, '_' + filename), filename, size);  
  
  // 处理响应  
  ctx.set("Content-Type", "application/json");  
  ctx.body = JSON.stringify({  
    data: {  
      code: 2000,  
      filename,  
      size  
    },  
    message: 'merge chunks successful！'  
  });  
});  
  
// 通过管道处理流   
const pipeStream = (path, writeStream) => {  
  return new Promise(resolve => {  
    const readStream = fs.createReadStream(path);  
    readStream.pipe(writeStream);  
    readStream.on("end", () => {  
      fs.unlinkSync(path);  
      resolve();  
    });  
  });  
}  
  
// 合并切片  
const mergeFileChunk = async (filePath, filename, size) => {  
  const chunkDir = path.join(outputPath, filename);  
  const chunkPaths = fs.readdirSync(chunkDir);  
  
  if (!chunkPaths.length) return;  
  
  // 根据切片下标进行排序，否则直接读取目录的获得的顺序可能会错乱  
  chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);  
  console.log("chunkPaths = ", chunkPaths);  
  
  await Promise.all(  
    chunkPaths.map((chunkPath, index) =>  
      pipeStream(  
        path.resolve(chunkDir, chunkPath),  
        // 指定位置创建可写流  
        fs.createWriteStream(filePath, {  
          start: index * size,  
          end: (index + 1) * size  
        })  
      )  
    )  
  );  
  
  // 合并后删除保存切片的目录  
  fs.rmdirSync(chunkDir);  
};  
复制代码  
```  
  
# 前端 & 服务端 交互  
  
## 前端分块上传  
  
测试文件信息：  
  
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7c9e7b1a1304249a25bd541315a90b4~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)   
  
选择文件类型为 19.8MB，而且上面设定默认分块大小为 5MB ，于是应该要分成 4 个分块，即 4 个请求.  
  
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40bfabb13d5f4629b89189403649a6af~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)   
  
## 服务端分块接收  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/037e57ca3b994f3f9a625c90d5dee860~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)   
  
## 前端发送合并请求  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/047c780495bd482d8f30ba29df24ee95~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)   
  
## 服务端合并分块  
  
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3eb7cd96244541c583f3f4c99009853e~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)   
  
# 扩展 —— 断点续传 & 秒传  
  
有了上面的核心逻辑之后，要实现断点续传和秒传的功能，只需要在取扩展即可，这里不再给出具体实现，只列出一些思路.  
  
## 断点续传  
  
断点续传其实就是让请求可中断，然后在接着上次中断的位置继续发送，此时要保存每个请求的实例对象，以便后期取消对应请求，并将取消的请求保存或者记录原始分块列表取消位置信息等，以便后期重新发起请求.  
  
**取消请求的几种方式**  
  
* 如果使用原生 **XHR** 可使用 `(new XMLHttpRequest()).abort()` 取消请求  
* 如果使用 **axios** 可使用 `new CancelToken(function (cancel) {})` 取消请求  
* 如果使用 **fetch** 可使用 `(new AbortController()).abort()` 取消请求  
  
## 秒传  
  
不要被这个名字给误导了，其实所谓的秒传就是不用传，在正式发起上传请求时，先发起一个检查请求，这个请求会携带对应的文件 hash 给服务端，服务端负责查找是否存在一模一样的文件 hash，如果存在此时直接复用这个文件资源即可，不需要前端在发起额外的上传请求.  
  
# 最后  
  
前端分片上传的内容单纯从理论上来看其实还是容易理解的，但是实际自己去实现的时候还是会踩一些坑，比如服务端接收解析 formData 格式的数据时，没法获取文件的二进制数据等  
# 说说你对JS的模块化方案的了解  
## 前言  
  
JavaScript 语言诞生至今，模块规范化之路曲曲折折。社区先后出现了各种解决方案，包括 AMD、CMD、CommonJS 等，而后 ECMA 组织在 JavaScript 语言标准层面，增加了模块功能（因为该功能是在 ES2015 版本引入的，所以在下文中将之称为 ES6 module）。     
今天我们就来聊聊，为什么会出现这些不同的模块规范，它们在所处的历史节点解决了哪些问题？  
  
## 何谓模块化？  
  
或根据功能、或根据数据、或根据业务，将一个大程序拆分成互相依赖的小文件，再用简单的方式拼装起来。  
  
## 全局变量  
  
### 演示项目  
  
为了更好的理解各个模块规范，先增加一个简单的项目用于演示。  
  
```  
# 项目目录:  
├─ js              # js文件夹  
│  ├─ main.js      # 入口  
│  ├─ config.js    # 项目配置  
│  └─ utils.js     # 工具  
└─  index.html     # 页面html  
```  
  
### Window  
  
在刀耕火种的前端原始社会，JS 文件之间的通信基本完全依靠`window`对象（借助 HTML、CSS 或后端等情况除外）。  
  
```js  
// config.js  
var api = 'https://github.com/ronffy';  
var config = {  
  api: api,  
}  
  
// utils.js  
var utils = {  
  request() {  
    console.log(window.config.api);  
  }  
}  
  
// main.js  
window.utils.request();  
```  
  
```html  
<!-- index.html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8">  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  
  <title>小贼先生：【深度全面】JS模块规范进化论</title>  
</head>  
<body>  
  
  <!-- 所有 script 标签必须保证顺序正确，否则会依赖报错 -->  
  <script src="./js/config.js"></script>  
  <script src="./js/utils.js"></script>  
  <script src="./js/main.js"></script>  
</body>  
</html>  
```  
  
### IIFE  
  
浏览器环境下，在全局作用域声明的变量都是全局变量。全局变量存在命名冲突、占用内存无法被回收、代码可读性低等诸多问题。  
  
这时，IIFE（匿名立即执行函数）出现了：  
  
```js  
;(function () {  
  ...  
}());  
```  
  
用IIFE重构 config.js：  
  
```js  
;(function (root) {  
  var api = 'https://github.com/ronffy';  
  var config = {  
    api: api,  
  };  
  root.config = config;  
}(window));  
```  
  
IIFE的出现，使全局变量的声明数量得到了有效的控制。  
  
### 命名空间  
  
依靠`window`对象承载数据的方式是“不可靠”的，如`window.config.api`，如果`window.config`不存在，则`window.config.api`就会报错，所以为了避免这样的错误，代码里会大量的充斥`var api = window.config && window.config.api;`这样的代码。  
  
这时，`namespace`登场了，简约版本的`namespace`函数的实现（只为演示，不要用于生产）：  
  
```js  
function namespace(tpl, value) {  
  return tpl.split('.').reduce((pre, curr, i) => {  
    return (pre[curr] = i === tpl.split('.').length - 1  
      ? (value || pre[curr])  
      : (pre[curr] || {}))  
  }, window);  
}  
```  
  
用`namespace`设置`window.app.a.b`的值：  
  
```js  
namespace('app.a.b', 3); // window.app.a.b 值为 3  
```  
  
用`namespace`获取`window.app.a.b`的值：  
  
```js  
var b = namespace('app.a.b');  // b 的值为 3  
   
var d = namespace('app.a.c.d'); // d 的值为 undefined   
  
```  
  
`app.a.c`值为`undefined`，但因为使用了`namespace`, 所以`app.a.c.d`不会报错，变量`d`的值为`undefined`。  
  
## AMD/CMD  
  
随着前端业务增重，代码越来越复杂，靠全局变量通信的方式开始捉襟见肘，前端急需一种更清晰、更简单的处理代码依赖的方式，将 JS 模块化的实现及规范陆续出现，其中被应用较广的模块规范有 AMD 和 CMD。  
  
面对一种模块化方案，我们首先要了解的是：1\. 如何导出接口；2\. 如何导入接口。  
  
### AMD  
  
> 异步模块定义规范（AMD）制定了定义模块的规则，这样模块和模块的依赖可以被异步加载。这和浏览器的异步加载模块的环境刚好适应（浏览器同步加载模块会导致性能、可用性、调试和跨域访问等问题）。  
  
本规范只定义了一个函数`define`，它是全局变量。  
  
```js  
/**  
 * @param {string} id 模块名称  
 * @param {string[]} dependencies 模块所依赖模块的数组  
 * @param {function} factory 模块初始化要执行的函数或对象  
 * @return {any} 模块导出的接口  
 */  
function define(id?, dependencies?, factory): any  
```  
  
### RequireJS  
  
AMD 是一种异步模块规范，RequireJS 是 AMD 规范的实现。  
  
接下来，我们用 RequireJS 重构上面的项目。  
  
在原项目 js 文件夹下增加 require.js 文件：  
  
```  
# 项目目录:  
├─ js                # js文件夹  
│  ├─ ...  
│  └─ require.js     # RequireJS 的 JS 库  
└─  ...  
```  
  
```js  
// config.js  
define(function() {  
  var api = 'https://github.com/ronffy';  
  var config = {  
    api: api,  
  };  
  return config;  
});  
  
// utils.js  
define(['./config'], function(config) {  
  var utils = {  
    request() {  
      console.log(config.api);  
    }  
  };  
  return utils;  
});  
  
// main.js  
require(['./utils'], function(utils) {  
  utils.request();  
});  
```  
  
```html  
<!-- index.html  -->  
<!-- ...省略其他 -->  
<body>  
  
  <script data-main="./js/main" src="./js/require.js"></script>  
</body>  
</html>  
```  
  
可以看到，使用 RequireJS 后，每个文件都可以作为一个模块来管理，通信方式也是以模块的形式，这样既可以清晰的管理模块依赖，又可以避免声明全局变量。  
  
特别说明：   
  
先有 RequireJS，后有 AMD 规范，随着 RequireJS 的推广和普及，AMD 规范才被创建出来。  
  
### CMD和AMD  
  
* CMD 和 AMD 一样，都是 JS 的模块化规范，也主要应用于浏览器端。    
* AMD 是 RequireJS 在的推广和普及过程中被创造出来。    
* CMD 是 SeaJS 在的推广和普及过程中被创造出来。  
  
二者的的主要区别是 CMD 推崇依赖就近，AMD 推崇依赖前置：  
  
```js  
// AMD  
// 依赖必须一开始就写好  
define(['./utils'], function(utils) {  
  utils.request();  
});  
  
// CMD  
define(function(require) {  
  // 依赖可以就近书写  
  var utils = require('./utils');  
  utils.request();  
});  
```  
  
AMD 也支持依赖就近，但 RequireJS 作者和官方文档都是优先推荐依赖前置写法。  
  
考虑到目前主流项目中对 AMD 和 CMD 的使用越来越少，大家对 AMD 和 CMD 有大致的认识就好，此处不再过多赘述。  
  
随着 ES6 模块规范的出现，AMD/CMD 终将成为过去，但毋庸置疑的是，AMD/CMD 的出现，是前端模块化进程中重要的一步。  
  
## CommonJS  
  
前面说了， AMD、CMD 主要用于浏览器端，随着 node 诞生，服务器端的模块规范 CommonJS 被创建出来。  
  
还是以上面介绍到的 `config.js、utils.js、main.js` 为例，看看 CommonJS 的写法:  
  
```js  
// config.js  
var api = 'https://github.com/ronffy';  
var config = {  
  api: api,  
};  
module.exports = config;  
  
// utils.js  
var config = require('./config');  
var utils = {  
  request() {  
    console.log(config.api);  
  }  
};  
module.exports = utils;  
  
// main.js  
var utils = require('./utils');  
utils.request();  
console.log(global.api)  
```  
  
执行`node main.js`，`https://github.com/ronffy`被打印了出来。     
  
在 main.js 中打印`global.api`，打印结果是`undefined`。node 用`global`管理全局变量，与浏览器的`window`类似。与浏览器不同的是，浏览器中顶层作用域是全局作用域，在顶层作用域中声明的变量都是全局变量，而 node 中顶层作用域不是全局作用域，所以在顶层作用域中声明的变量非全局变量。  
  
### module.exports和exports  
  
我们在看 node 代码时，应该会发现，关于接口导出，有的地方使用`module.exports`，而有的地方使用`exports`，这两个有什么区别呢?  
  
CommonJS 规范仅定义了`exports`，但`exports`存在一些问题（下面会说到），所以`module.exports`被创造了出来，它被称为 CommonJS2 。     
  
每一个文件都是一个模块，每个模块都有一个`module`对象，这个`module`对象的`exports`属性用来导出接口，外部模块导入当前模块时，使用的也是`module`对象，这些都是 node 基于 CommonJS2 规范做的处理。  
  
```js  
// a.js  
var s = 'i am ronffy'  
module.exports = s;  
console.log(module);  
```  
  
执行`node a.js`，看看打印的`module`对象：  
  
```  
{  
  exports: 'i am ronffy',  
  id: '.',                                // 模块id  
  filename: '/Users/apple/Desktop/a.js',  // 文件路径名称  
  loaded: false,                          // 模块是否加载完成  
  parent: null,                           // 父级模块  
  children: [],                           // 子级模块  
  paths: [ /* ... */ ],                   // 执行 node a.js 后 node 搜索模块的路径  
}  
```  
  
其他模块导入该模块时：  
  
```js  
// b.js  
var a = require('./a.js'); // a --> i am ronffy  
```  
  
当在 a.js 里这样写时：  
  
```js  
// a.js  
var s = 'i am ronffy'  
exports = s;  
```  
  
a.js 模块的`module.exports`是一个空对象。  
  
```js  
// b.js  
var a = require('./a.js'); // a --> {}  
```  
  
把`module.exports`和`exports`放到“明面”上来写，可能就更清楚了：  
  
```js  
var module = {  
  exports: {}  
}  
var exports = module.exports;  
console.log(module.exports === exports); // true  
  
var s = 'i am ronffy'  
exports = s; // module.exports 不受影响  
console.log(module.exports === exports); // false  
```  
  
模块初始化时，`exports`和`module.exports`指向同一块内存，`exports`被重新赋值后，就切断了跟原内存地址的关系。  
  
所以，`exports`要这样使用：  
  
```js  
// a.js  
exports.s = 'i am ronffy';  
  
// b.js  
var a = require('./a.js');  
console.log(a.s); // i am ronffy  
```  
  
CommonJS 和 CommonJS2 经常被混淆概念，一般大家经常提到的 CommonJS 其实是指 CommonJS2，本文也是如此，不过不管怎样，大家知晓它们的区别和如何应用就好。  
  
### CommonJS与AMD  
  
CommonJS 和 AMD 都是运行时加载，换言之：都是在运行时确定模块之间的依赖关系。   
  
二者有何不同点：  
  
1. CommonJS 是服务器端模块规范，AMD 是浏览器端模块规范。  
2. CommonJS 加载模块是同步的，即执行`var a = require('./a.js');`时，在 a.js 文件加载完成后，才执行后面的代码。AMD 加载模块是异步的，所有依赖加载完成后以回调函数的形式执行代码。  
3. \[如下代码\]`fs`和`chalk`都是模块，不同的是，`fs`是 node 内置模块，`chalk`是一个 npm 包。这两种情况在 CommonJS 中才有，AMD 不支持。  
  
```js  
var fs = require('fs');  
var chalk = require('chalk');  
```  
  
## UMD  
  
> Universal Module Definition.  
  
存在这么多模块规范，如果产出一个模块给其他人用，希望支持全局变量的形式，也符合 AMD 规范，还能符合 CommonJS 规范，能这么全能吗？     
是的，可以如此全能，UMD 闪亮登场。  
  
UMD 是一种通用模块定义规范，代码大概这样(假如我们的模块名称是 myLibName):  
  
```js  
!function (root, factory) {  
  if (typeof exports === 'object' && typeof module === 'object') {  
    // CommonJS2  
    module.exports = factory()  
    // define.amd 用来判断项目是否应用 require.js。  
    // 更多 define.amd 介绍，请[查看文档](https://github.com/amdjs/amdjs-api/wiki/AMD#defineamd-property-)  
  } else if (typeof define === 'function' && define.amd) {  
    // AMD  
    define([], factory)  
  } else if (typeof exports === 'object') {  
    // CommonJS  
    exports.myLibName = factory()  
  } else {  
    // 全局变量  
    root.myLibName = factory()  
  }  
}(window, function () {  
  // 模块初始化要执行的代码  
});  
```  
  
UMD 解决了 JS 模块跨模块规范、跨平台使用的问题，它是非常好的解决方案。  
  
## ES6 module  
  
AMD 、 CMD 等都是在原有JS语法的基础上二次封装的一些方法来解决模块化的方案，ES6 module（在很多地方被简写为 ESM）是语言层面的规范，ES6 module 旨在为浏览器和服务器提供通用的模块解决方案。长远来看，未来无论是基于 JS 的 WEB 端，还是基于 node 的服务器端或桌面应用，模块规范都会统一使用 ES6 module。  
  
### 兼容性  
  
目前，无论是浏览器端还是 node ，都没有完全原生支持 ES6 module，如果使用 ES6 module ，可借助 [babel](https://link.segmentfault.com/?enc=OURkG%2BIY5AFtYQSvk2oXpA%3D%3D.lln5vToJ82eedPfkBshKMEyE0fom4DKUYQxzvphPFmo%3D) 等编译器。本文只讨论 ES6 module 语法，故不对 babel 或 typescript 等可编译 ES6 的方式展开讨论。  
  
### 导出接口  
  
CommonJS 中顶层作用域不是全局作用域，同样的，ES6 module 中，一个文件就是一个模块，文件的顶层作用域也不是全局作用域。导出接口使用`export`关键字，导入接口使用`import`关键字。  
  
`export`导出接口有以下方式：  
  
#### 方式1  
  
```js  
export const prefix = 'https://github.com';  
export const api = `${prefix}/ronffy`;  
```  
  
#### 方式2  
  
```js  
const prefix = 'https://github.com';  
const api = `${prefix}/ronffy`;  
export {  
  prefix,  
  api,  
}  
```  
  
方式1和方式2只是写法不同，结果是一样的，都是把`prefix`和`api`分别导出。  
  
#### 方式3（默认导出）  
  
```js  
// foo.js  
export default function foo() {}  
  
// 等同于：  
function foo() {}  
export {  
  foo as default  
}  
```  
  
`export default`用来导出模块默认的接口，它等同于导出一个名为`default`的接口。配合`export`使用的`as`关键字用来在导出接口时为接口重命名。  
  
#### 方式4（先导入再导出简写）  
  
```js  
export { api } from './config.js';  
  
// 等同于：  
import { api } from './config.js';  
export {  
  api  
}  
```  
  
如果需要在一个模块中先导入一个接口，再导出，可以使用`export ... from 'module'`这样的简便写法。  
  
### 导入模块接口  
  
ES6 module 使用`import`导入模块接口。  
  
导出接口的模块代码1：  
  
```js  
// config.js  
const prefix = 'https://github.com';  
const api = `${prefix}/ronffy`;  
export {  
  prefix,  
  api,  
}  
```  
  
接口已经导出，如何导入呢：  
  
#### 方式1  
  
```js  
import { api } from './config.js';  
  
// or  
// 配合`import`使用的`as`关键字用来为导入的接口重命名。  
import { api as myApi } from './config.js';  
```  
  
#### 方式2（整体导入）  
  
```js  
import * as config from './config.js';  
const api = config.api;  
```  
  
将 config.js 模块导出的所有接口都挂载在`config`对象上。  
  
#### 方式3（默认导出的导入）  
  
```js  
// foo.js  
export const conut = 0;  
export default function myFoo() {}  
  
// index.js  
// 默认导入的接口此处刻意命名为cusFoo，旨在说明该命名可完全自定义。  
import cusFoo, { count } from './foo.js';  
  
// 等同于：  
import { default as cusFoo, count } from './foo.js';  
```  
  
`export default`导出的接口，可以使用`import name from 'module'`导入。这种方式，使导入默认接口很便捷。  
  
#### 方式4（整体加载）  
  
import './config.js';  
  
这样会加载整个 config.js 模块，但未导入该模块的任何接口。  
  
#### 方式5（动态加载模块）  
  
上面介绍了 ES6 module 各种导入接口的方式，但有一种场景未被涵盖：动态加载模块。比如用户点击某个按钮后才弹出弹窗，弹窗里功能涉及的模块的代码量比较重，所以这些相关模块如果在页面初始化时就加载，实在浪费资源，`import()`可以解决这个问题，从语言层面实现模块代码的按需加载。  
  
ES6 module 在处理以上几种导入模块接口的方式时都是编译时处理，所以`import`和`export`命令只能用在模块的顶层，以下方式都会报错：  
  
```js  
// 报错  
if (/* ... */) {  
  import { api } from './config.js';   
}  
  
// 报错  
function foo() {  
  import { api } from './config.js';   
}  
  
// 报错  
const modulePath = './utils' + '/api.js';  
import modulePath;  
```  
  
使用`import()`实现按需加载：  
  
```js  
function foo() {  
  import('./config.js')  
    .then(({ api }) => {  
  
    });  
}  
  
const modulePath = './utils' + '/api.js';  
import(modulePath);  
  
```  
  
特别说明：     
该功能的提议目前处于 TC39 流程的第4阶段。更多说明，请查看[TC39/proposal-dynamic-import](https://link.segmentfault.com/?enc=u61kJdRaczxbmqQREX%2FCUw%3D%3D.j9rCDxYgxXMW%2FmIMJvWZqURrkN38%2FXqha2fZM6a3RRy61j%2BPqOJa7i5wATeqRqGR)。  
  
### CommonJS 和 ES6 module  
  
CommonJS 和 AMD 是运行时加载，在运行时确定模块的依赖关系。    
  
ES6 module 是在编译时（`import()`是运行时加载）处理模块依赖关系，。  
  
#### CommonJS  
  
CommonJS 在导入模块时，会加载该模块，所谓“CommonJS 是运行时加载”，正因代码在运行完成后生成`module.exports`的缘故。当然，CommonJS 对模块做了缓存处理，某个模块即使被多次多处导入，也只加载一次。  
  
```js  
// o.js  
let num = 0;  
function getNum() {  
  return num;  
}  
function setNum(n) {  
  num = n;  
}  
console.log('o init');  
module.exports = {  
  num,  
  getNum,  
  setNum,  
}  
  
// a.js  
const o = require('./o.js');  
o.setNum(1);  
  
// b.js  
const o = require('./o.js');  
// 注意：此处只是演示，项目里不要这样修改模块  
o.num = 2;  
  
// main.js  
const o = require('./o.js');  
  
require('./a.js');  
console.log('a o.num:', o.num);  
  
require('./b.js');  
console.log('b o.num:', o.num);  
console.log('b o.getNum:', o.getNum());  
```  
  
命令行执行`node main.js`，打印结果如下：  
  
```  
1. `o init`    
_模块即使被其他多个模块导入，也只会加载一次，并且在代码运行完成后将接口赋值到`module.exports`属性上。_  
2. `a o.num: 0`    
_模块在加载完成后，模块内部的变量变化不会反应到模块的`module.exports`。_  
3. `b o.num: 2`    
_对导入模块的直接修改会反应到该模块的`module.exports`。_  
4. `b o.getNum: 1`    
_模块在加载完成后即形成一个闭包。_  
```  
  
#### ES6 module  
  
```js  
// o.js  
let num = 0;  
function getNum() {  
  return num;  
}  
function setNum(n) {  
  num = n;  
}  
console.log('o init');  
export {  
  num,  
  getNum,  
  setNum,  
}  
  
// main.js  
import { num, getNum, setNum } from './o.js';  
  
console.log('o.num:', num);  
setNum(1);  
  
console.log('o.num:', num);  
console.log('o.getNum:', getNum());  
```  
  
我们增加一个 index.js 用于在 node 端支持 ES6 module：  
  
```js  
// index.js  
require("@babel/register")({  
  presets: ["@babel/preset-env"]  
});  
  
module.exports = require('./main.js')  
```  
  
命令行执行`npm install @babel/core @babel/register @babel/preset-env -D`安装 ES6 相关 npm 包。  
  
命令行执行`node index.js`，打印结果如下：  
  
```  
1. `o init`    
_模块即使被其他多个模块导入，也只会加载一次。_  
2. `o.num: 0`  
3. `o.num: 1`    
_编译时确定模块依赖的 ES6 module，通过`import`导入的接口只是值的引用，所以`num`才会有两次不同打印结果。_  
4. `o.getNum: 1`  
```  
  
对于打印结果3，知晓其结果，在项目中注意这一点就好。这块会涉及到“Module Records（模块记录）”、“module instance（模快实例）” “linking（链接）”等诸多概念和原理，大家可查看[ES modules: A cartoon deep-dive](https://link.segmentfault.com/?enc=hJYZAxC5vGU2b7y9DswrNw%3D%3D.GLzrq10c45xH5q5ft4hV%2FfypqEagM9x1KX5sfe6PEYfk0n%2BDoqMPVqv23r5OHj1%2FPPpkj7AY0cgIX1dO%2B%2BNsMtCuUx27jMNt9Dq1LUmiBgs%3D)进行深入的研究，本文不再展开。  
  
ES6 module 是编译时加载（或叫做“静态加载”），利用这一点，可以对代码做很多之前无法完成的优化：  
  
1. 在开发阶段就可以做导入和导出模块相关的代码检查。  
2. 结合 Webpack、Babel 等工具可以在打包阶段移除上下文中未引用的代码（dead-code），这种技术被称作“tree shaking”，可以极大的减小代码体积、缩短程序运行时间、提升程序性能。  
  
# 说说你对 new.target 的理解  
  
`new.target`属性允许你检测函数或构造方法是否是通过new运算符被调用的。  
  
在通过new运算符被初始化的函数或构造方法中，`new.target`返回一个指向构造方法或函数的引用。在普通的函数调用中，`new.target` 的值是undefined。  
  
我们可以使用它来检测，一个函数是否是作为构造函数通过new被调用的。  
  
```js  
function Foo() {  
  if (!new.target) throw "Foo() must be called with new";  
  console.log("Foo instantiated with new");  
}  
  
Foo(); // throws "Foo() must be called with new"  
new Foo(); // logs "Foo instantiated with new"  
```  
# 写一个返回数据类型的函数，要求自定义的类实例化的对象返回定义的类名  
Javascript是一门动态类型的语言，一个变量从声明到最后使用，可能经过了很多个函数，而数据类型也会发生改变，那么，对一个变量的数据类型判断就显得尤为重要。  
  
# 获取数据类型  
  
我们先来看下怎么获取一个数据的类型。  
  
## typeof是否能正确判断类型？  
  
由于由于历史原因，在判断原始类型时，`typeof null`会等于`object`。而且对于对象（Object）、数组（Array）来说，都会转换成`object`。例子如下：  
  
```javascript  
    typeof 1 // 'number'  
    typeof "1" // 'string'  
    typeof null // 'object'  
    typeof undefined // 'undefined'  
      
    typeof [] // 'object'  
    typeof {} // 'object'  
    typeof function() {} // 'function'  
```  
所以我们可以发现，typeof可以判断基本数据类型，但是难以判断除了函数以外的复杂数据类型。于是我们可以使用第二种方法，通常用来判断复杂数据类型，也可以用来判断基本数据类型。  
  
对于返回值为`object`，有三种情况：  
- 值为null  
- 值为object  
- 值为array  
  
对于null，我们可以直接用===来进行判断，那么数组和对象呢？不急，我们接着说。  
  
## instanceof是否能正确判断类型？  
  
`instanceof`是通过原型链来判断的，但是对于对象来说，`Array`也会被转换成`Object`，而且也不能区分基本类型`string`和`boolean`。可以左边放你要判断的内容，右边放类型来进行JS类型判断，只能用来判断复杂数据类型,因为instanceof 是用于检测构造函数（右边）的 prototype 属性是否出现在某个实例对象（左边）的原型链上。例如：  
  
```javascript  
    function Func() {}  
    const func = new Func()  
    console.log(func instanceof Func) // true  
      
    const obj = {}  
    const arr = []  
    obj instanceof Object // true  
    arr instanceof Object // true  
    arr instanceof Array // true  
      
    const str = "abc"  
    const str2 = new String("abc")  
    str instanceof String // false  
    str2 instanceof String // true  
```  
  
单独使用`instanceof`好像也是不行的，但是我们对于typeof已经得出结论，不能区分数组和对象，那么，我们结合下`instanceof`，来写一个完整的判断逻辑  
  
```javascript  
    function myTypeof(data) {  
        const type = typeof data  
        if (data === null) {  
            return 'null'  
        }  
        if (type !== 'object') {  
            return type  
        }  
        if (data instanceof Array) {  
            return 'array'  
        }  
        return 'object'  
    }  
```  
## constructor  
  
constructor 判断方法跟instanceof相似,但是constructor检测Object与instanceof不一样,constructor还可以处理基本数据类型的检测,不仅仅是对象类型。  
  
注意:  
  
1. null和undefined没有constructor;  
2. 判断数字时使用(),比如  (123).constructor,如果写成123.constructor会报错  
3. constructor在类继承时会出错,因为Object被覆盖掉了,检测结果就不对了  
  
```javascript  
    function A() {};  
    function B() {};  
    A.prototype = new B();  
    console.log(A.constructor === B)  // false  
  
    var C = new A();  
    console.log(C.constructor === B)  // true  
    console.log(C.constructor === A)  // false   
  
    C.constructor = A;  
    console.log(C.constructor === A);  // true  
    console.log(C.constructor === B);  // false  
```  
  
## Array.isArray()  
  
Array.isArray() 用于确定传递的值是否是一个 Array。如果对象是 Array ，则返回true，否则为false。  
  
```javascript  
    Array.isArray([1, 2, 3]); // true  
    Array.isArray({foo: 123}); // false  
    Array.isArray("foobar"); // false  
    Array.isArray(undefined); // false  
```  
  
## 正则判断  
  
我们可以把对象和数组转成一个字符串，这样就可以做格式判断，从而得到最终的类型。  
  
```javascript  
    function myTypeof(data) {  
        const str = JSON.stringify(data)  
        if (/^{.*}$/.test(data)) {  
            return 'object'  
        }  
        if (/^\[.*\]$/.test(data)) {  
            return 'array'  
        }  
    }  
```  
  
  
## Object.prototype.toString.call()  
  
上面我们通过`typeof`和`instanceof`实现了一版类型判断，那么是否有其他渠道，使我们的代码更加简洁吗？答案就是使用`Object.prototype.toString.call()`。  
  
每个对象都有一个`toString()`方法，当要将对象表示为文本值或以预期字符串的方式引用对象时，会自动调用该方法。默认情况下，从`Object`派生的每个对象都会继承`toString()`方法。如果此方法未在自定义对象中被覆盖，则`toString()`返回`[Object type]`，其中`type`是对象类型。所以就有以下例子：  
  
```javascript  
    Object.prototype.toString.call(new Date()) // [object Date]  
    Object.prototype.toString.call("1") // [object String]  
    Object.prototype.toString.call(1) // [object Numer]  
    Object.prototype.toString.call(undefined) // [object Undefined]  
    Object.prototype.toString.call(null) // [object Null]  
```  
  
所以综合上述知识点，我们可以封装出以下通用类型判断方法：  
  
```javascript  
    function myTypeof(data) {  
        var toString = Object.prototype.toString;  
        var dataType = data instanceof Element ? "Element" : toString.call(data).replace(/\[object\s(.+)\]/, "$1")  
        return dataType  
    };  
  
    myTypeof("a") // String  
    myTypeof(1) // Number  
    myTypeof(window) // Window  
    myTypeof(document.querySelector("h1")) // Element  
```  
  
# 获取实例化对象的类名  
  
题目中的第二个要求，是对于自定义的类实例化的对象，需要返回定义的类名。  
  
这个也比较简单，我们对于上述获取的 Object 类型的数据，直接使用 `xx.constructor.name` 即可获取到这个数据对应的类名。  
  
# 最终实现  
  
```js  
function myTypeof(data) {  
    var toString = Object.prototype.toString;  
    var dataType = data instanceof Element ? "Element" : toString.call(data).replace(/\[object\s(.+)\]/, "$1")  
  
    if(dataType === 'Object'){  
        return data.constructor.name  
    }  
  
    return dataType  
};  
```  
  
  
# 说说vue中的diff算法  
  
  
![](https://static.vue-js.com/5e858e30-4585-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、是什么  
  
`diff` 算法是一种通过同层的树节点进行比较的高效算法  
  
其有两个特点：  
- 比较只会在同层级进行, 不会跨层级比较  
- 在diff比较的过程中，循环从两边向中间比较  
  
`diff` 算法的在很多场景下都有应用，在 `vue` 中，作用于虚拟 `dom` 渲染成真实 `dom` 的新旧 `VNode` 节点比较  
  
## 二、比较方式  
  
`diff`整体策略为：深度优先，同层比较  
  
1. 比较只会在同层级进行, 不会跨层级比较  
  
![](https://static001.infoq.cn/resource/image/91/54/91e9c9519a11caa0c5bf70714383f054.png)  
  
2. 比较的过程中，循环从两边向中间收拢  
  
![](https://static001.infoq.cn/resource/image/2d/ec/2dcd6ad5cf82c65b9cfc43a27ba1e4ec.png)  
  
下面举个`vue`通过`diff`算法更新的例子：  
  
新旧`VNode`节点如下图所示：  
  
![](https://static001.infoq.cn/resource/image/80/6d/80dc339f73b186479e6d1fc18bfbf66d.png)  
  
第一次循环后，发现旧节点D与新节点D相同，直接复用旧节点D作为`diff`后的第一个真实节点，同时旧节点`endIndex`移动到C，新节点的 `startIndex` 移动到了 C  
  
![](https://static001.infoq.cn/resource/image/76/54/76032c78c8ef74047efd42c070e48854.png)  
  
第二次循环后，同样是旧节点的末尾和新节点的开头(都是 C)相同，同理，`diff` 后创建了 C 的真实节点插入到第一次创建的 B 节点后面。同时旧节点的 `endIndex` 移动到了 B，新节点的 `startIndex` 移动到了 E  
  
![](https://static001.infoq.cn/resource/image/1c/d7/1c76e7489660188d35f0a38ea8c8ecd7.png)  
  
第三次循环中，发现E没有找到，这时候只能直接创建新的真实节点 E，插入到第二次创建的 C 节点之后。同时新节点的 `startIndex` 移动到了 A。旧节点的 `startIndex` 和 `endIndex` 都保持不动  
  
![](https://static001.infoq.cn/resource/image/4b/08/4b622c0d61673ec5474465d82305d308.png)  
  
第四次循环中，发现了新旧节点的开头(都是 A)相同，于是 `diff` 后创建了 A 的真实节点，插入到前一次创建的 E 节点后面。同时旧节点的 `startIndex` 移动到了 B，新节点的` startIndex` 移动到了 B  
  
![](https://static001.infoq.cn/resource/image/59/b4/5982417c3e0b2fa9ae940354a0e67ab4.png)  
  
第五次循环中，情形同第四次循环一样，因此 `diff` 后创建了 B 真实节点 插入到前一次创建的 A 节点后面。同时旧节点的 `startIndex `移动到了 C，新节点的 startIndex 移动到了 F  
  
![](https://static001.infoq.cn/resource/image/16/86/16cf0ef90f6e19d26c0ddffeca067e86.png)  
  
新节点的 `startIndex` 已经大于 `endIndex` 了，需要创建 `newStartIdx` 和 `newEndIdx` 之间的所有节点，也就是节点F，直接创建 F 节点对应的真实节点放到 B 节点后面  
  
![](https://static001.infoq.cn/resource/image/dc/ad/dc215b45682cf6c9cc4700a5425673ad.png)  
  
## 三、原理分析  
  
当数据发生改变时，`set`方法会调用`Dep.notify`通知所有订阅者`Watcher`，订阅者就会调用`patch`给真实的`DOM`打补丁，更新相应的视图  
  
源码位置：src/core/vdom/patch.js  
  
```js  
function patch(oldVnode, vnode, hydrating, removeOnly) {  
    if (isUndef(vnode)) { // 没有新节点，直接执行destory钩子函数  
        if (isDef(oldVnode)) invokeDestroyHook(oldVnode)  
        return  
    }  
  
    let isInitialPatch = false  
    const insertedVnodeQueue = []  
  
    if (isUndef(oldVnode)) {  
        isInitialPatch = true  
        createElm(vnode, insertedVnodeQueue) // 没有旧节点，直接用新节点生成dom元素  
    } else {  
        const isRealElement = isDef(oldVnode.nodeType)  
        if (!isRealElement && sameVnode(oldVnode, vnode)) {  
            // 判断旧节点和新节点自身一样，一致执行patchVnode  
            patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly)  
        } else {  
            // 否则直接销毁及旧节点，根据新节点生成dom元素  
            if (isRealElement) {  
  
                if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {  
                    oldVnode.removeAttribute(SSR_ATTR)  
                    hydrating = true  
                }  
                if (isTrue(hydrating)) {  
                    if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {  
                        invokeInsertHook(vnode, insertedVnodeQueue, true)  
                        return oldVnode  
                    }  
                }  
                oldVnode = emptyNodeAt(oldVnode)  
            }  
            return vnode.elm  
        }  
    }  
}  
```  
  
`patch`函数前两个参数位为`oldVnode` 和 `Vnode` ，分别代表新的节点和之前的旧节点，主要做了四个判断：  
  
- 没有新节点，直接触发旧节点的`destory`钩子  
- 没有旧节点，说明是页面刚开始初始化的时候，此时，根本不需要比较了，直接全是新建，所以只调用 `createElm`  
- 旧节点和新节点自身一样，通过 `sameVnode` 判断节点是否一样，一样时，直接调用 `patchVnode `去处理这两个节点  
- 旧节点和新节点自身不一样，当两个节点不一样的时候，直接创建新节点，删除旧节点  
  
下面主要讲的是`patchVnode`部分  
  
```js  
function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {  
    // 如果新旧节点一致，什么都不做  
    if (oldVnode === vnode) {  
      return  
    }  
  
    // 让vnode.el引用到现在的真实dom，当el修改时，vnode.el会同步变化  
    const elm = vnode.elm = oldVnode.elm  
  
    // 异步占位符  
    if (isTrue(oldVnode.isAsyncPlaceholder)) {  
      if (isDef(vnode.asyncFactory.resolved)) {  
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue)  
      } else {  
        vnode.isAsyncPlaceholder = true  
      }  
      return  
    }  
    // 如果新旧都是静态节点，并且具有相同的key  
    // 当vnode是克隆节点或是v-once指令控制的节点时，只需要把oldVnode.elm和oldVnode.child都复制到vnode上  
    // 也不用再有其他操作  
    if (isTrue(vnode.isStatic) &&  
      isTrue(oldVnode.isStatic) &&  
      vnode.key === oldVnode.key &&  
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))  
    ) {  
      vnode.componentInstance = oldVnode.componentInstance  
      return  
    }  
  
    let i  
    const data = vnode.data  
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {  
      i(oldVnode, vnode)  
    }  
  
    const oldCh = oldVnode.children  
    const ch = vnode.children  
    if (isDef(data) && isPatchable(vnode)) {  
      for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode)  
      if (isDef(i = data.hook) && isDef(i = i.update)) i(oldVnode, vnode)  
    }  
    // 如果vnode不是文本节点或者注释节点  
    if (isUndef(vnode.text)) {  
      // 并且都有子节点  
      if (isDef(oldCh) && isDef(ch)) {  
        // 并且子节点不完全一致，则调用updateChildren  
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)  
  
        // 如果只有新的vnode有子节点  
      } else if (isDef(ch)) {  
        if (isDef(oldVnode.text)) nodeOps.setTextContent(elm, '')  
        // elm已经引用了老的dom节点，在老的dom节点上添加子节点  
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)  
  
        // 如果新vnode没有子节点，而vnode有子节点，直接删除老的oldCh  
      } else if (isDef(oldCh)) {  
        removeVnodes(elm, oldCh, 0, oldCh.length - 1)  
  
        // 如果老节点是文本节点  
      } else if (isDef(oldVnode.text)) {  
        nodeOps.setTextContent(elm, '')  
      }  
  
      // 如果新vnode和老vnode是文本节点或注释节点  
      // 但是vnode.text != oldVnode.text时，只需要更新vnode.elm的文本内容就可以  
    } else if (oldVnode.text !== vnode.text) {  
      nodeOps.setTextContent(elm, vnode.text)  
    }  
    if (isDef(data)) {  
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) i(oldVnode, vnode)  
    }  
  }  
```  
  
`patchVnode`主要做了几个判断：  
  
- 新节点是否是文本节点，如果是，则直接更新`dom`的文本内容为新节点的文本内容  
- 新节点和旧节点如果都有子节点，则处理比较更新子节点  
- 只有新节点有子节点，旧节点没有，那么不用比较了，所有节点都是全新的，所以直接全部新建就好了，新建是指创建出所有新`DOM`，并且添加进父节点  
- 只有旧节点有子节点而新节点没有，说明更新后的页面，旧节点全部都不见了，那么要做的，就是把所有的旧节点删除，也就是直接把`DOM` 删除  
  
子节点不完全一致，则调用`updateChildren`  
  
```js  
function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {  
    let oldStartIdx = 0 // 旧头索引  
    let newStartIdx = 0 // 新头索引  
    let oldEndIdx = oldCh.length - 1 // 旧尾索引  
    let newEndIdx = newCh.length - 1 // 新尾索引  
    let oldStartVnode = oldCh[0] // oldVnode的第一个child  
    let oldEndVnode = oldCh[oldEndIdx] // oldVnode的最后一个child  
    let newStartVnode = newCh[0] // newVnode的第一个child  
    let newEndVnode = newCh[newEndIdx] // newVnode的最后一个child  
    let oldKeyToIdx, idxInOld, vnodeToMove, refElm  
  
    // removeOnly is a special flag used only by <transition-group>  
    // to ensure removed elements stay in correct relative positions  
    // during leaving transitions  
    const canMove = !removeOnly  
  
    // 如果oldStartVnode和oldEndVnode重合，并且新的也都重合了，证明diff完了，循环结束  
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {  
      // 如果oldVnode的第一个child不存在  
      if (isUndef(oldStartVnode)) {  
        // oldStart索引右移  
        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left  
  
      // 如果oldVnode的最后一个child不存在  
      } else if (isUndef(oldEndVnode)) {  
        // oldEnd索引左移  
        oldEndVnode = oldCh[--oldEndIdx]  
  
      // oldStartVnode和newStartVnode是同一个节点  
      } else if (sameVnode(oldStartVnode, newStartVnode)) {  
        // patch oldStartVnode和newStartVnode， 索引左移，继续循环  
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)  
        oldStartVnode = oldCh[++oldStartIdx]  
        newStartVnode = newCh[++newStartIdx]  
  
      // oldEndVnode和newEndVnode是同一个节点  
      } else if (sameVnode(oldEndVnode, newEndVnode)) {  
        // patch oldEndVnode和newEndVnode，索引右移，继续循环  
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)  
        oldEndVnode = oldCh[--oldEndIdx]  
        newEndVnode = newCh[--newEndIdx]  
  
      // oldStartVnode和newEndVnode是同一个节点  
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right  
        // patch oldStartVnode和newEndVnode  
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)  
        // 如果removeOnly是false，则将oldStartVnode.eml移动到oldEndVnode.elm之后  
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))  
        // oldStart索引右移，newEnd索引左移  
        oldStartVnode = oldCh[++oldStartIdx]  
        newEndVnode = newCh[--newEndIdx]  
  
      // 如果oldEndVnode和newStartVnode是同一个节点  
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left  
        // patch oldEndVnode和newStartVnode  
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)  
        // 如果removeOnly是false，则将oldEndVnode.elm移动到oldStartVnode.elm之前  
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)  
        // oldEnd索引左移，newStart索引右移  
        oldEndVnode = oldCh[--oldEndIdx]  
        newStartVnode = newCh[++newStartIdx]  
  
      // 如果都不匹配  
      } else {  
        if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)  
  
        // 尝试在oldChildren中寻找和newStartVnode的具有相同的key的Vnode  
        idxInOld = isDef(newStartVnode.key)  
          ? oldKeyToIdx[newStartVnode.key]  
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)  
  
        // 如果未找到，说明newStartVnode是一个新的节点  
        if (isUndef(idxInOld)) { // New element  
          // 创建一个新Vnode  
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)  
  
        // 如果找到了和newStartVnodej具有相同的key的Vnode，叫vnodeToMove  
        } else {  
          vnodeToMove = oldCh[idxInOld]  
          /* istanbul ignore if */  
          if (process.env.NODE_ENV !== 'production' && !vnodeToMove) {  
            warn(  
              'It seems there are duplicate keys that is causing an update error. ' +  
              'Make sure each v-for item has a unique key.'  
            )  
          }  
  
          // 比较两个具有相同的key的新节点是否是同一个节点  
          //不设key，newCh和oldCh只会进行头尾两端的相互比较，设key后，除了头尾两端的比较外，还会从用key生成的对象oldKeyToIdx中查找匹配的节点，所以为节点设置key可以更高效的利用dom。  
          if (sameVnode(vnodeToMove, newStartVnode)) {  
            // patch vnodeToMove和newStartVnode  
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue)  
            // 清除  
            oldCh[idxInOld] = undefined  
            // 如果removeOnly是false，则将找到的和newStartVnodej具有相同的key的Vnode，叫vnodeToMove.elm  
            // 移动到oldStartVnode.elm之前  
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)  
  
          // 如果key相同，但是节点不相同，则创建一个新的节点  
          } else {  
            // same key but different element. treat as new element  
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)  
          }  
        }  
  
        // 右移  
        newStartVnode = newCh[++newStartIdx]  
      }  
    }  
```  
  
`while`循环主要处理了以下五种情景：  
  
- 当新老 `VNode` 节点的 `start` 相同时，直接 `patchVnode` ，同时新老 `VNode` 节点的开始索引都加 1  
- 当新老 `VNode` 节点的 `end`相同时，同样直接 `patchVnode` ，同时新老 `VNode` 节点的结束索引都减 1  
- 当老 `VNode` 节点的 `start` 和新 `VNode` 节点的 `end` 相同时，这时候在 `patchVnode` 后，还需要将当前真实 `dom` 节点移动到 `oldEndVnode` 的后面，同时老 `VNode` 节点开始索引加 1，新 `VNode` 节点的结束索引减 1  
- 当老 `VNode` 节点的 `end` 和新 `VNode` 节点的 `start` 相同时，这时候在 `patchVnode` 后，还需要将当前真实 `dom` 节点移动到 `oldStartVnode` 的前面，同时老 `VNode` 节点结束索引减 1，新 `VNode` 节点的开始索引加 1  
- 如果都不满足以上四种情形，那说明没有相同的节点可以复用，则会分为以下两种情况：  
  - 从旧的 `VNode` 为 `key` 值，对应 `index` 序列为 `value` 值的哈希表中找到与 `newStartVnode` 一致 `key` 的旧的 `VNode` 节点，再进行`patchVnode `，同时将这个真实 `dom `移动到 `oldStartVnode` 对应的真实 `dom` 的前面  
  - 调用 `createElm` 创建一个新的 `dom` 节点放到当前 `newStartIdx` 的位置  
  
  
  
### 小结  
  
- 当数据发生改变时，订阅者`watcher`就会调用`patch`给真实的`DOM`打补丁  
- 通过`isSameVnode`进行判断，相同则调用`patchVnode`方法  
- `patchVnode`做了以下操作：  
  - 找到对应的真实`dom`，称为`el`  
  - 如果都有都有文本节点且不相等，将`el`文本节点设置为`Vnode`的文本节点  
  - 如果`oldVnode`有子节点而`VNode`没有，则删除`el`子节点  
  - 如果`oldVnode`没有子节点而`VNode`有，则将`VNode`的子节点真实化后添加到`el`  
  - 如果两者都有子节点，则执行`updateChildren`函数比较子节点  
- `updateChildren`主要做了以下操作：  
  - 设置新旧`VNode`的头尾指针  
  - 新旧头尾指针进行比较，循环向中间靠拢，根据情况调用`patchVnode`进行`patch`重复流程、调用`createElem`创建一个新节点，从哈希表寻找 `key`一致的`VNode` 节点再分情况操作  
  
  
  
# ​arguments 这种类数组，如何遍历类数组？  
 ## 类数组对象  
  
所谓的类数组对象:  
  
>拥有一个 length 属性和若干索引属性的对象  
  
举个例子：  
  
```js  
var array = ['name', 'age', 'sex'];  
  
var arrayLike = {  
    0: 'name',  
    1: 'age',  
    2: 'sex',  
    length: 3  
}  
```  
  
即便如此，为什么叫做类数组对象呢？  
  
那让我们从读写、获取长度、遍历三个方面看看这两个对象。  
  
## 读写  
  
```js  
console.log(array[0]); // name  
console.log(arrayLike[0]); // name  
  
array[0] = 'new name';  
arrayLike[0] = 'new name';  
```  
  
## 长度  
  
```js  
console.log(array.length); // 3  
console.log(arrayLike.length); // 3  
```  
  
## 遍历  
  
```js  
for(var i = 0, len = array.length; i < len; i++) {  
   ……  
}  
for(var i = 0, len = arrayLike.length; i < len; i++) {  
    ……  
}  
```  
  
是不是很像？  
  
那类数组对象可以使用数组的方法吗？比如：  
  
```js  
arrayLike.push('4');  
```  
  
然而上述代码会报错: arrayLike.push is not a function  
  
所以终归还是类数组呐……  
  
## 调用数组方法  
  
如果类数组就是任性的想用数组的方法怎么办呢？  
  
既然无法直接调用，我们可以用 Function.call 间接调用：  
  
```js  
var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }  
  
Array.prototype.join.call(arrayLike, '&'); // name&age&sex  
  
Array.prototype.slice.call(arrayLike, 0); // ["name", "age", "sex"]   
// slice可以做到类数组转数组  
  
Array.prototype.map.call(arrayLike, function(item){  
    return item.toUpperCase();  
});   
// ["NAME", "AGE", "SEX"]  
```  
  
## 类数组转数组  
  
在上面的例子中已经提到了一种类数组转数组的方法，再补充三个：  
  
```js  
var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3 }  
// 1. slice  
Array.prototype.slice.call(arrayLike); // ["name", "age", "sex"]   
// 2. splice  
Array.prototype.splice.call(arrayLike, 0); // ["name", "age", "sex"]   
// 3. ES6 Array.from  
Array.from(arrayLike); // ["name", "age", "sex"]   
// 4. apply  
Array.prototype.concat.apply([], arrayLike)  
```  
  
那么为什么会讲到类数组对象呢？以及类数组有什么应用吗？  
  
要说到类数组对象，Arguments 对象就是一个类数组对象。在客户端 JavaScript 中，一些 DOM 方法(document.getElementsByTagName()等)也返回类数组对象。  
  
## Arguments对象  
  
接下来重点讲讲 Arguments 对象。  
  
Arguments 对象只定义在函数体中，包括了函数的参数和其他属性。在函数体中，arguments 指代该函数的 Arguments 对象。  
  
举个例子：  
  
```js  
function foo(name, age, sex) {  
    console.log(arguments);  
}  
  
foo('name', 'age', 'sex')  
```  
  
打印结果如下：  
  
![arguments](https://cdn.jsdelivr.net/gh/mqyqingfeng/Blog/Images/arguments.png)  
  
我们可以看到除了类数组的索引属性和length属性之外，还有一个callee属性，接下来我们一个一个介绍。  
  
## length属性  
  
Arguments对象的length属性，表示实参的长度，举个例子：  
  
```js  
function foo(b, c, d){  
    console.log("实参的长度为：" + arguments.length)  
}  
  
console.log("形参的长度为：" + foo.length)  
  
foo(1)  
  
// 形参的长度为：3  
// 实参的长度为：1  
```  
  
## callee属性  
  
Arguments 对象的 callee 属性，通过它可以调用函数自身。  
  
讲个闭包经典面试题使用 callee 的解决方法：  
  
```js  
var data = [];  
  
for (var i = 0; i < 3; i++) {  
    (data[i] = function () {  
       console.log(arguments.callee.i)   
    }).i = i;  
}  
  
data[0]();  
data[1]();  
data[2]();  
  
// 0  
// 1  
// 2  
```  
  
接下来讲讲 arguments 对象的几个注意要点：  
  
## arguments 和对应参数的绑定  
  
```js  
function foo(name, age, sex, hobbit) {  
  
    console.log(name, arguments[0]); // name name  
  
    // 改变形参  
    name = 'new name';  
  
    console.log(name, arguments[0]); // new name new name  
  
    // 改变arguments  
    arguments[1] = 'new age';  
  
    console.log(age, arguments[1]); // new age new age  
  
    // 测试未传入的是否会绑定  
    console.log(sex); // undefined  
  
    sex = 'new sex';  
  
    console.log(sex, arguments[2]); // new sex undefined  
  
    arguments[3] = 'new hobbit';  
  
    console.log(hobbit, arguments[3]); // undefined new hobbit  
  
}  
  
foo('name', 'age')  
```  
  
传入的参数，实参和 arguments 的值会共享，当没有传入时，实参与 arguments 值不会共享  
  
除此之外，以上是在非严格模式下，如果是在严格模式下，实参和 arguments 是不会共享的。  
  
## 传递参数  
  
将参数从一个函数传递到另一个函数  
  
```js  
// 使用 apply 将 foo 的参数传递给 bar  
function foo() {  
    bar.apply(this, arguments);  
}  
function bar(a, b, c) {  
   console.log(a, b, c);  
}  
  
foo(1, 2, 3)  
```  
  
## 强大的ES6  
  
使用ES6的 ... 运算符，我们可以轻松转成数组。  
  
```js  
function func(...arguments) {  
    console.log(arguments); // [1, 2, 3]  
}  
  
func(1, 2, 3);  
```  
  
## 应用  
  
arguments的应用其实很多，在下个系列，也就是 JavaScript 专题系列中，我们会在 jQuery 的 extend 实现、函数柯里化、递归等场景看见 arguments 的身影。这篇文章就不具体展开了。  
  
如果要总结这些场景的话，暂时能想到的包括：  
  
1. 参数不定长  
2. 函数柯里化  
3. 递归调用  
4. 函数重载  
...  
```js  
var bar = function(){  
    console.log(this.x);  
}  
var foo = {  
    x:3  
}  
var sed = {  
    x:4  
}  
var func = bar.bind(foo).bind(sed);  
func(); //?  
   
var fiv = {  
    x:5  
}  
var func = bar.bind(foo).bind(sed).bind(fiv);  
func(); //?  
```  
# 连续 bind()多次，输出的值是什么？  
两次都输出 **3**。  
  
在Javascript中，多次 `bind()` 是无效的。  
  
更深层次的原因， `bind()` 的实现，相当于使用函数在内部包了一个 `call` / `apply` ，第二次 `bind()` 相当于再包住第一次 `bind()` ,故第二次以后的 `bind` 是无法生效的。  
# new fn与new fn()有什么区别吗？  
用 `new` 创建构造函数的实例时，通常情况下 `new` 的构造函数后面需要带括号（譬如：`new Parent()`）。  
  
有些情况下`new`的构造函数后带括号和不带括号的情况一致，譬如：  
  
```js  
function Parent(){  
  this.num = 1;  
}  
console.log(new Parent());//输出Parent对象：{num:1}  
console.log(new Parent);//输出Parent对象：{num:1}  
```  
  
但有些情况下new的构造函数后带括号和不带括号的情况并不一致，譬如：  
  
```js  
function Parent(){  
  this.num = 1;  
}  
console.log(new Parent().num);//1  
console.log(new Parent.num);//报错  
```  
  
结果分析：  
  
从报错信息来看，`new Parent.num`执行顺序是这样的：先执行`Parent.num`，此时返回结果为`undefined`；后执行`new`，因`new`后面必须跟构造函数，所以`new undefined`会报错。  
  
`new Parent().num`相当于`(new Parent()).num`，所以结果返回1。  
  
从结果来看，`new Parent.num`代码相当于`new (Parent.num)；`，`new Parent().num`相当于`(new Parent()).num`。由此看来 `new` 的构造函数后跟括号优先级会提升。  
# ajax、axios、fetch有什么区别？  
## （1）AJAX  
  
Ajax 即“AsynchronousJavascriptAndXML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。它是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面。其缺点如下：  
  
* 本身是针对MVC编程，不符合前端MVVM的浪潮  
* 基于原生XHR开发，XHR本身的架构不清晰  
* 不符合关注分离（Separation of Concerns）的原则  
* 配置和调用方式非常混乱，而且基于事件的异步模型不友好。  
  
## （2）Fetch  
fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的promise对象。Fetch是基于promise设计的。Fetch的代码结构比起ajax简单多。fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象。  
  
fetch的优点：  
  
* 语法简洁，更加语义化  
* 基于标准 Promise 实现，支持 async/await  
* 更加底层，提供的API丰富（request, response）  
* 脱离了XHR，是ES规范里新的实现方式  
  
fetch的缺点：  
  
* fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。  
* fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: 'include'})  
* fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费  
* fetch没有办法原生监测请求的进度，而XHR可以  
  
## （3）Axios  
  
Axios 是一种基于Promise封装的HTTP客户端，其特点如下：  
  
* 浏览器端发起XMLHttpRequests请求  
* node端发起http请求  
* 支持Promise API  
* 监听请求和返回  
* 对请求和返回进行转化  
* 取消请求  
* 自动转换json数据  
* 客户端支持抵御XSRF攻击  
  
# cookie 的有效时间设置为 0 会怎么样  
Cookie过期时间设置为0，表示跟随系统默认，其销毁与Session销毁时间相同，即都在浏览器关闭后的特定时间删除。如果我们写程序的时候不设置Cookie的有效时间，那么，Cookie的有效时间等效于会话时间。  
# postMessage 有哪些使用场景？  
# window.postMessage 定义  
   
`window.postMessage()` 方法可以安全地实现跨源通信。`window.postMessage()` 方法提供了一种受控机制来规避此限制，只要正确的使用，这种方法就很安全  
  
## 用途  
可用于两个不同的Ifrom（不同源） 之间的通讯  
  
## [语法](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage#syntax "Permalink to 语法")  
  
```  
otherWindow.postMessage(message, targetOrigin, [transfer]);  
```  
  
## 参数说明  
-   `data`  
  
    从其他 window 中传递过来的对象。  
  
-   `origin`  
  
    调用 `postMessage`  时消息发送方窗口的 [origin](https://developer.mozilla.org/en-US/docs/Origin "This is a link to an unwritten page") . 这个字符串由 协议、“://“、域名、“ : 端口号”拼接而成。例如 “`https://example.org` (隐含端口 `443`)”、“`http://example.net` (隐含端口 `80`)”、“`http://example.com:8080`”。请注意，这个origin不能保证是该窗口的当前或未来origin，因为postMessage被调用后可能被导航到不同的位置。  
  
-   `source`  
  
    对发送消息的[窗口](https://developer.mozilla.org/en-US/docs/Web/API/Window)对象的引用; 您可以使用此来在具有不同origin的两个窗口之间建立双向通信。  
  
## 例子  
  
### 子框架传递信息  
  
  
```  
<script>  
  
// 子框架向父框架发送信息  
  
function goParentIfromPostMessage(msg,parentUrl){  
  
    var parentUrl = window.parent.location.origin;  
  
        window.onload=function(){  
  
        window.parent.postMessage(msg,parentUrl);  
  
        }  
    }  
 }  
   
    goParentIfromPostMessage('msgStr',parentIfromUrl)  
  
</script>  
  
```  
  
### 父框架接收端  
  
```  
<script>  
  
        window.addEventListener('message',function(e){  
  
            console.log(e.origin,e.data);  
  
            console.log(e.data);  
  
        })  
  
</script>  
  
 ```  
这样即可以实现简单的框架跨域通信，但是会有一些安全问题  
  
## [安全问题](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage#security_concerns "Permalink to 安全问题")  
  
**如果您不希望从其他网站接收message，请不要为message事件添加任何事件侦听器。** 这是一个完全万无一失的方式来避免安全问题。  
  
如果您确实希望从其他网站接收message，请**始终使用origin和source属性验证发件人的身份**。 任何窗口（包括例如http://evil.example.com）都可以向任何其他窗口发送消息，并且您不能保证未知发件人不会发送恶意消息。 但是，验证身份后，您仍然应该**始终验证接收到的消息的语法**。 否则，您信任只发送受信任邮件的网站中的安全漏洞可能会在您的网站中打开跨网站脚本漏洞。  
  
**当您使用postMessage将数据发送到其他窗口时，始终指定精确的目标origin，而不是*。** 恶意网站可以在您不知情的情况下更改窗口的位置，因此它可以拦截使用postMessage发送的数据。  
  
### [示例](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage#example "Permalink to 示例")  
  
```  
/*  
 * A窗口的域名是<http://example.com:8080>，以下是A窗口的script标签下的代码：  
 */  
  
var popup = window.open(...popup details...);  
  
// 如果弹出框没有被阻止且加载完成  
  
// 这行语句没有发送信息出去，即使假设当前页面没有改变location（因为targetOrigin设置不对）  
popup.postMessage("The user is 'bob' and the password is 'secret'",  
                  "https://secure.example.net");  
  
// 假设当前页面没有改变location，这条语句会成功添加message到发送队列中去（targetOrigin设置对了）  
popup.postMessage("hello there!", "http://example.org");  
  
function receiveMessage(event)  
{  
  // 我们能相信信息的发送者吗?  (也许这个发送者和我们最初打开的不是同一个页面).  
  if (event.origin !== "http://example.org")  
    return;  
  
  // event.source 是我们通过window.open打开的弹出页面 popup  
  // event.data 是 popup发送给当前页面的消息 "hi there yourself!  the secret response is: rheeeeet!"  
}  
window.addEventListener("message", receiveMessage, false);  
```  
  
```  
/*  
 * 弹出页 popup 域名是<http://example.org>，以下是script标签中的代码:  
 */  
  
//当A页面postMessage被调用后，这个function被addEventListener调用  
function receiveMessage(event)  
{  
  // 我们能信任信息来源吗？  
  if (event.origin !== "http://example.com:8080")  
    return;  
  
  // event.source 就当前弹出页的来源页面  
  // event.data 是 "hello there!"  
  
  // 假设你已经验证了所受到信息的origin (任何时候你都应该这样做), 一个很方便的方式就是把event.source  
  // 作为回信的对象，并且把event.origin作为targetOrigin  
  event.source.postMessage("hi there yourself!  the secret response " +  
                           "is: rheeeeet!",  
                           event.origin);  
}  
  
window.addEventListener("message", receiveMessage, false);  
```  
```
  
  
# async/await 怎么进行错误处理？  
  
一般情况下 async/await 在错误处理方面，主要使用 try/catch，像这样  
  
```js  
const fetchData = () => {  
    return new Promise((resolve, reject) => {  
        setTimeout(() => {  
            resolve('fetch data is me')  
        }, 1000)  
    })  
}  
  
(async () => {  
    try {  
        const data = await fetchData()  
        console.log('data is ->', data)  
    } catch(err) {  
        console.log('err is ->', err)  
    }  
})()  
  
```  
  
这么看，感觉倒是没什么问题，如果是这样呢？有多个异步操作，需要对每个异步返回的 error 错误状态进行不同的处理，以下是示例代码  
  
```js  
const fetchDataA = () => {  
    return new Promise((resolve, reject) => {  
        setTimeout(() => {  
            resolve('fetch data is A')  
        }, 1000)  
    })  
}  
  
const fetchDataB = () => {  
    return new Promise((resolve, reject) => {  
        setTimeout(() => {  
            resolve('fetch data is B')  
        }, 1000)  
    })  
}  
  
const fetchDataC = () => {  
    return new Promise((resolve, reject) => {  
        setTimeout(() => {  
            resolve('fetch data is C')  
        }, 1000)  
    })  
}  
  
(async () => {  
    try {  
        const dataA = await fetchDataA()  
        console.log('dataA is ->', dataA)  
    } catch(err) {  
        console.log('err is ->', err)  
    }  
  
    try {  
        const dataB = await fetchDataB()  
        console.log('dataB is ->', dataB)  
    } catch(err) {  
        console.log('err is ->', err)  
    }  
  
    try {  
        const dataC = await fetchDataC()  
        console.log('dataC is ->', dataC)  
    } catch(err) {  
        console.log('err is ->', err)  
    }  
})()  
  
```  
  
这样写代码里充斥着 try/catch，有代码洁癖的你能忍受的了吗？这时可能会想到只用一个 try/catch。  
  
```js  
// ... 这里 fetch 函数省略  
  
(async () => {  
    try {  
        const dataA = await fetchDataA()  
        console.log('dataA is ->', dataA)  
        const dataB = await fetchDataB()  
        console.log('dataB is ->', dataB)  
        const dataC = await fetchDataC()  
        console.log('dataC is ->', dataC)  
    } catch(err) {  
        console.log('err is ->', err)  
        // 难道要定义 err 类型，然后判断吗？？  
        /**  
         * if (err.type === 'dataA') {  
         *  console.log('dataA err is', err)  
         * }  
         * ......  
         * */  
    }  
})()  
  
```  
  
如果是这样写只会增加编码的复杂度，而且要多写代码，这个时候就应该想想怎么优雅的解决，async/await 本质就是 promise 的语法糖，既然是 promise 那么就可以使用 then 函数了  
  
```js  
(async () => {  
    const fetchData = () => {  
        return new Promise((resolve, reject) => {  
            setTimeout(() => {  
                resolve('fetch data is me')  
            }, 1000)  
        })  
    }  
  
    const data = await fetchData().then(data => data ).catch(err => err)  
    console.log(data)  
})()  
  
```  
  
在上面写法中，如果 fetchData 返回 resolve 正确结果时，data 是我们要的结果，如果是 reject 了，发生错误了，那么 data 是错误结果，这显然是行不通的，再对其完善。  
  
```js  
(async () => {  
    const fetchData = () => {  
        return new Promise((resolve, reject) => {  
            setTimeout(() => {  
                resolve('fetch data is me')  
            }, 1000)  
        })  
    }  
  
    const [err, data] = await fetchData().then(data => [null, data] ).catch(err => [err, null])  
    console.log('err', err)  
    console.log('data', data)  
    // err null  
    // data fetch data is me  
})()  
  
```  
  
这样是不是好很多了呢，但是问题又来了，不能每个 await 都写这么长，写着也不方便也不优雅，再优化一下  
  
```js  
(async () => {  
    const fetchData = () => {  
        return new Promise((resolve, reject) => {  
            setTimeout(() => {  
                resolve('fetch data is me')  
            }, 1000)  
        })  
    }  
  
    // 抽离成公共方法  
    const awaitWrap = (promise) => {  
        return promise  
            .then(data => [null, data])  
            .catch(err => [err, null])  
    }  
  
    const [err, data] = await awaitWrap(fetchData())  
    console.log('err', err)  
    console.log('data', data)  
    // err null  
    // data fetch data is me  
})()  
  
```  
  
将对 await 处理的方法抽离成公共的方法，在使用 await 调用 awaitWrap 这样的方法是不是更优雅了呢。如果使用 typescript 实现大概是这个样子  
  
```ts  
function awaitWrap<T, U = any>(promise: Promise<T>): Promise<[U | null, T | null]> {  
    return promise  
        .then<[null, T]>((data: T) => [null, data])  
        .catch<[U, null]>(err => [err, null])  
}  
```  
  
  
# 将数组的length设置为0，取第一个元素会返回什么？  
设置 `length = 0` 会清空数组，所以会返回 `undefined`  
# CSS动画和JS实现的动画分别有哪些优缺点？  
## CSS动画  
  
### 优点  
  
* 浏览器可以对动画进行优化    
* 代码相对简单,性能调优方向固定    
* 对于帧速表现不好的低版本浏览器，`CSS3`可以做到自然降级，而`JS`则需要撰写额外代码  
  
### 缺点  
  
* 运行过程控制较弱,无法附加事件绑定回调函数    
* 代码冗长，想用`CSS`实现稍微复杂一点动画,最后`CSS`代码都会变得非常笨重  
  
## JS动画  
  
### 优点  
  
* 控制能力很强, 可以在动画播放过程中对动画进行控制：开始、暂停、回放、终止、取消都是可以做到的。    
* 动画效果比`css3`动画丰富,有些动画效果，比如曲线运动,冲击闪烁,视差滚动效果，只有`js`动画才能完成    
* `CSS3`有兼容性问题，而`JS`大多时候没有兼容性问题  
  
### 缺点    
  
* 代码的复杂度高于`CSS`动画    
* `JavaScript`在浏览器的主线程中运行，而主线程中还有其它需要运行的`JavaScript`脚本、样式计算、布局、绘制任务等,对其干扰导致线程可能出现阻塞，从而造成丢帧的情况  
  
# 前端实现动画有哪些方式？  
前端常用的动画实现方式有以下种：  
  
1. css3的`transition` 属性  
2. css3的`animation` 属性  
3. 原生JS动画  
4. 使用`canvas`绘制动画  
5. SVG动画  
6. Jquery的`animate`函数  
7. 使用gif图片  
  
## 1. css3的`transition`  
  
`transition`属性：  
  
用来设置样式的属性值是如何从一种状态平滑过渡到另外一种状态  
  
**语法：**  
  
```css  
transition: property duration timing-function delay;  
```  
  
`transition`是一种简写属性,它可以拆分为四个过渡属性。你可以 `transition: 值1，值2，值3，值4` 这样写，也可以：`transition-property: 值1;`，`transition-duration:值2;`，`transition-timing-function:值2;`，`transition-delay:值4;`这样写。  
  
| 值 | 描述 |  
| --|--|  
|transition-property|规定设置过渡效果的 CSS 属性的名称。|  
|transition-duration|规定完成过渡效果需要多少秒或毫秒。|  
|transition-timing-function|规定速度效果的速度曲线。|  
|transition-delay|定义过渡效果何时开始。|  
  
**演示代码：**  
  
```html  
<div></div>  
  
```  
  
```css  
div{  
  width:50px;  
  height: 50px;  
  background-color: pink;  
}  
  
div:hover{  
  width:200px;  
}  
```  
  
**效果图：**   
  
![在这里插入图片描述](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/17/1735b47d5cabe35b~tplv-t2oaga2asx-image.image)  
  
由上图可看出：鼠标移入移出时,`width`状态的变化是瞬间完成的。   
  
添加`transition: 1s;`后  
  
```css  
div{  
  width:50px;  
  height: 50px;  
  background-color: pink;  
  transition: 1s;  
}  
div:hover{  
  width:200px;  
}  
```  
  
**效果图：**   
  
![在这里插入图片描述](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/17/1735b47d5de25bf8~tplv-t2oaga2asx-image.image)  
  
`transition: 1s;` 设置了`width`属性状态变化的过渡时间为1秒。   
  
`transition`属性默认为：`transition: all 0 ease 0;`  
  
`transition:1s;` 等价于 `transition: all 1s ease 0;`  
  
## 2. css3的`animation`  
  
`animation`属性：比较类似于 flash 中的逐帧动画。学习过 `flash`的同学知道，这种逐帧动画是由关键帧组成，很多个关键帧连续的播放就组成了动画在 `CSS3` 中是由属性`keyframes`来完成逐帧动画的。  
  
`animation`属性与`transition`属性的区别：  
  
* `transition`只需指定动画的开始和结束状态，整个动画的过程是由特定的函数控制,你不用管它。  
* `animation`可以对动画过程中的各个关键帧进行设置  
  
**演示代码：**  
  
```html  
<div></div>  
  
```  
  
```css  
div{  
	width:50px;  
	height:50px;  
	background-color: pink;  
}  
div:hover{  
	animation: change1 5s;  
}  
@keyframes change1{  
	25%  {width:130px;background-color: red;}  
	50%  {width:170px;background-color: blue;}  
	75%  {width:210px;background-color: green;}  
	100% {width:250px;background-color: yellow;}  
}  
  
```  
  
**效果图：**   
  
![在这里插入图片描述](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/17/1735b47d834ba42c~tplv-t2oaga2asx-image.image)  
  
## 3. 原生`JS`动画  
  
其主要思想是通过setInterval或setTimeout方法的回调函数来持续调用改变某个元素的CSS样式以达到元素样式变化的效果。  
  
javascript 实现动画通常会导致页面频繁性重排重绘，消耗性能，一般应该在桌面端浏览器。在移动端上使用会有明显的卡顿。  
  
```html  
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <style type="text/css">  
        #rect {  
            width: 200px;  
            height: 200px;  
            background: #ccc;  
        }  
    </style>  
</head>  
<body>  
    <div id="rect"></div>  
    <script>  
        let elem = document.getElementById('rect');  
        let left = 0;  
        let timer = setInterval(function(){  
            if(left<window.innerWidth-200){  
                elem.style.marginLeft = left+'px';  
                left ++;  
            }else {  
                clearInterval(timer);  
            }  
        },16);  
    </script>  
</body>  
</html>  
  
```  
  
上面的例子中，我们设置的setInterval时间间隔是16ms。一般认为人眼能辨识的流畅动画为每秒60帧，这里16ms比(1000ms/60)帧略小一些，但是一般可仍为该动画是流畅的。  
  
在很多移动端动画性能优化时，一般使用16ms来进行节流处理连续触发的浏览器事件。例如对touchmove、scroll事件进行节流等。通过这种方式减少持续事件的触发频率，可以大大提升动画的流畅性。  
  
## 4. 使用`canvas`绘制动画  
  
canvas作为H5新增元素，是借助Web API来实现动画的。  
  
```html  
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Document</title>  
    <style>  
    *{  
        margin:0;  
        padding:0;  
    }  
    </style>  
</head>  
<body>  
    <canvas id="canvas" width="700" height="550"></canvas>  
    <script type="text/javascript">  
        let canvas = document.getElementById("canvas");  
        let ctx = canvas.getContext("2d");  
        let left = 0;  
        let timer = setInterval(function(){  
            ctx.clearRect(0,0,700,550);  
            ctx.beginPath();  
            ctx.fillStyle = "#ccc";  
            ctx.fillRect(left,0,100,100);  
            ctx.stroke();  
            if(left>700){  
                clearInterval(timer);  
            }  
            left += 1;  
        },16);  
    </script>  
</body>  
</html>  
```  
  
注释：通过getContext()获取元素的绘制对象，通过clearRect不断清空画布并在新的位置上使用fillStyle绘制新矩形内容实现页面动画效果。  
  
Canvas主要优势是可以应对页面中多个动画元素渲染较慢的情况，完全通过javascript来渲染控制动画的执行。可用于实现较复杂动画。  
  
## 5. SVG 动画  
  
SVG是一种基于XML的图像格式，非常类似于HTML的工作方式。它为许多熟悉的几何形状定义了不同的元素，这些元素可以在标记中组合以产生二维图形。  
  
同样高清的质地，矢量图不畏惧放大，体积小。  
  
这里要说明一点就是，因为 SVG 中保存的是点、线、面的信息，与分辨率和图形大小无关，只是跟图像的复杂程度有关，所以图像文件所占的存储空间通常会比 png 小。  
  
SVG动画的优势：  
  
* 优化 SEO 和无障碍的利器，因为 SVG 图像是使用XML(可扩展标记语言【英语：Extensible Markup Language，简称：XML】标记指计算机所能理解的信息符号，通过此种标记，计算机之间可以处理包含各种信息的文章等)来标记构建的，浏览器通过绘制每个点和线来打印它们，而不是用预定义的像素填充某些空间。这确保 SVG 图像可以适应不同的屏幕大小和分辨率。  
* 由于是在 XML 中定义的，SVG 图像比 JPG 或 PNG 图像更灵活，而且我们可以使用 CSS 和 JavaScript 与它们进行交互。SVG 图像设置可以包含 CSS 和 JavaScript。在 react、vue 这种数据驱动视图的框架下，对于 SVG 操作就更加如鱼得水了。（下文会跟大家分享一些小的 SVG 动画在我们项目中的实践）  
* 在运用层面上，SVG 提供了一些图像编辑效果，比如屏蔽和剪裁、应用过滤器等等。并且 SVG 只是文本，因此可以使用 GZip 对其进行有效压缩。  
  
## 6. Jquery的`animate()`方法  
  
* `animate()` 方法执行 `CSS` 属性集的自定义动画。  
* 该方法通过 CSS 样式将元素从一个状态改变为另一个状态。  
* CSS属性值是逐渐改变的，这样就可以创建动画效果。  
* 只有数字值可创建动画（比如 "`margin:30px`"）。字符串值无法创建动画（比如 "`background-color:red`"）。  
  
**代码演示：**  
  
```html  
<button id="btn1">使用动画放大高度</button>  
<button id="btn2">重置高度</button>  
<div id="box" style="background:#98bf21;height:100px;width:100px;margin:6px;">  
</div>  
  
```  
  
```css  
$(document).ready(function(){  
    $("#btn1").click(function(){  
        $("#box").animate({height:"300px"});  
    });  
    $("#btn2").click(function(){  
        $("#box").animate({height:"100px"});  
    });  
});  
  
```  
  
**效果图：**   
  
![在这里插入图片描述](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/17/1735b47d89e475ad~tplv-t2oaga2asx-image.image)  
  
##  7. 使用`gif`图片  
  
gif图想必大家都接触过，前端使用也非常简单。  
  
## 总结：  
  
* **代码复杂度方面**简单动画：`css`代码实现会简单一些，`js`复杂一些。 复杂动画的话：`css`代码就会变得冗长，`js`实现起来更优。  
* **动画运行时，对动画的控制程度上** `js` 比较灵活，能控制动画暂停，取消，终止等`css`动画不能添加事件，只能设置固定节点进行什么样的过渡动画。  
* **兼容方面** `css` 有浏览器兼容问题`js`大多情况下是没有的。  
* **性能方面** `css`动画相对于优一些，`css` 动画通过`GUI`解析`js`动画需要经过`js`引擎代码解析，然后再进行 `GUI` 解析渲染。  
# 说说你对低代码的了解  
## 低代码究竟是什么  
  
这些年，自从 SaaS（Software-as-a-Service） 厂商 Salesforce 市值水涨船高，还和其大手笔的商业并购案，逐渐引起了国内互联网行业人的关注，习惯进行国内外产品对标的互联网圈子兴起了一股 SaaS 风潮，在后移动互联网时代下，部分人也期待 SaaS 可以成为国内互联网的一个新增长点。  
  
随着不同的用户诉求，一些系统衍生出新的形态，不同于既定的 SaaS 产品形态，用户可以通过可视化拖拽界面、表单配置等方式，快速定制出一个完整的应用，而且这一类系统基本不用编写太多的代码，即可以实现定制化应用。随着这一形态的系统越来越多，久而久之，大家就形象地称之为**”低代码”（low-code）**，另外也有人称之为 ”aPaaS“，即应用平台即服务（属于是互联网造词老技能了...）。  
  
低代码这个概念真正火热起来，还是在于这两年 Outsystems 相继完成了数轮过亿元美金的融资，估值早早地站上了十亿美金级别，成为一方独角兽。由于国内这一领域缺少体量对等的厂商，所以大家自然也在期待哪家厂商能成长为中国的 Outsystems。与此同时，国内低代码赛道上选手也渐渐进入了大家的视野，例如钉钉宜搭、即刻应用、氚云、简道云等等。  
  
  
![低代码厂商.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/360a7f2a28cd41ef8855d17aa9894123~tplv-k3u1fbpfcp-watermark.image?)  
  
（材料来源于iRearch）  
  
## 低代码系统长什么样  
  
虽然低代码平台的形态很多，但是其中的核心还是脱离不开编程思想，基本都有以下功能模块：页面搭建、数据逻辑、数据模型，在线部署和管理系统。根据不同的业务场景，具体的平台形态分化为表单/数据模型驱动、界面驱动等形态。  
  
**表单/数据模型驱动**  
  
表单/数据模型驱动是围绕数据结构来定义整个应用的形态和流程，其中表单驱动指用户通过配置表单界面，元素大多是文本输入、下拉选择器、日期选择器等组件，配置表单界面后自动生成数据模型，并基于该表单做数据及流程管理，而数据模型驱动则更复杂，需要用户进行数据建模和定义模型关系，此操作和 SQL 数据库搭建类似，配置主键、索引，类型等等，然后基于该数据表单搭建上层的管理系统。该模式比较多应用在搭建 CRM、ERP 等管理系统。  
  
  
![维格表配置界面.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/010d21e3fc854903aa3527e45fc9d511~tplv-k3u1fbpfcp-watermark.image?)  
  
（维格表配置界面）  
  
**界面驱动**  
  
界面驱动比较好理解，就是用户通过拖拽组件方式可视化搭建界面，然后配置页面的交互逻辑，比如页面的跳转、数据获取等等。这种形式大多应用在搭建通用程序的低代码平台  
  
  
![iVX配置界面.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d454333bf63b48fcb7ee73c722cdc9f6~tplv-k3u1fbpfcp-watermark.image?)  
  
（iVx配置界面）  
  
这种模式与端应用开发的套路基本一致，只是将代码编辑修改为画布拖拽和表单配置。这里举一个简单的例子，在界面按钮设置一个点击事件，事件逻辑为拉取数据。该流程就是将编程概念提取为交互表单操作，里面还是会出现入参出参字段、回调等等概念，遵循编程的思想。  
  
  
![iVX配置界面2.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55583fbf9fd047679293dc8ba39eb191~tplv-k3u1fbpfcp-watermark.image?)  
  
当用户将应用搭建完成后，可以直接在平台上完成发布工作，然后就可以通过给出的链接访问应用（大多数低代码平台制作出来都是 web 应用）。  
  
低代码概念虽然比较新颖，但是低代码平台已经发展了很久了（Outsystems 建立于 2001 年，国内的道一云建立于 2004 年）。总体来说，经过这些年的发展探索，低代码平台的形态也趋于稳定，各家的创新也是基于面对的用户场景而做的微创新，本质上也没有跳脱出编程思想。  
  
## 低代码怎么做个性化定制  
  
这里有同学会问了，低代码平台怎么满足个性化需求？诚然，受限于低代码平台所提供的组件和逻辑配置表单，只能解决一些通用化场景，当用户的诉求超脱出这个圈圈时，是不是就无能为力了？商业公司肯定不会这么幼稚，以下简单列举搜集到的一些个性化定制的方法：  
  
1.  用户可以在平台定制的规则下录入组件  
1.  提供 API 访问数据库  
1.  生成源代码做二次开发（低代码变代码了...）  
1.  填写反馈等平台更新  
  
  
![低代码个性化定制.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f5a37e4a16d64143b5e51ebdfd63ecc6~tplv-k3u1fbpfcp-watermark.image?)  
  
除了这些固定的章程，低代码厂商还有工程师群体，当用户登录到低代码平台，立即就有专人跟进，询问诉求等等，后续可以根据用户诉求给出合适的配置方案，乃至专门定制个性化场景。到这里就闻到了一丝外包的气味，不过这确实是一个可以带来收入的场景。  
  
## 低代码有没有用？  
  
“低代码究竟有没有用？”  
  
这个问题浮现在各个论坛上。这个问题可以理解为低代码的声量和其能力不匹配，用户对低代码信心不足。对于目前低代码平台的问题，存在主观和客观的因素。  
  
首先很多**低代码平台能力还没有足够完善成熟**，这是一个很核心的因素。对于很多初次使用的用户来说，概念繁多，逻辑复杂，在一番体验以后，预期和实际有落差。使用起来总体耗时跟源码开发相差无几，显得工具比较鸡肋。客观上，国内的人力资源情况相比欧美还是比较便宜，很多有定制应用诉求的客户，首先会想到的是找外包，或者招聘开发岗位，而不是找低代码工具自己动手。另外大家对于低代码的认知也还不足，很难成为一个备选项。  
  
思考这个问题，我们想一个简单问题，“一个可以降低门槛，提高效率的工具有没有用”，答案很显然是肯定的。**低代码平台的宗旨，不就是“降低门槛”，“降本增效”么。**  
  
个人觉得，这些问题大概是时间的问题。就目前市面上的低代码工具而言，从实际需求出发，当深入体验过以后，其实是可以深切感受到工具带来的红利。花上几天，一个人就可以实现前后端应用，以及运维监控，拿到一套可运行的程序。  
  
随着行业关注度的提升和资源的投入，上述遇到的问题大多可以得到解决。**低代码从“可用”到“好用”的进化，也是需要在实际场景中摸爬滚打中历练进化**。  
  
## 目前低代码发展状况  
  
前面说了，低代码的热度持续提升，最明显的举动就是资本真金白银的投资。  
  
![融资情况.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/883a238b0b344f319ab2917ace625167~tplv-k3u1fbpfcp-watermark.image?)  
（材料来源于iResearch）  
  
另外有一个举动也很巧妙。钉钉发布了一个低代码聚合平台，宜搭、氚云、简道云、易鲸云等头部低代码厂商入驻。钉钉拥有国内最大的商务用户人群，而低代码在国内比较成功的落地场景是定制企业管理系统（例如 CRM），**将低代码平台对接到巨大的对口流量之上**，这种契合的操作颇有几分微信接入微信支付一般痛快。  
  
虽然目前发展势头不错，但是打铁还需自身硬，避免共享经济那样一地鸡毛。低代码只有切实地把门槛降低、降本增效目标落在产品上，才可以长久地生存下去。  
  
# e.target 和 e.currentTarget  有什么区别？  
## 冒泡 & 捕获  
  
当你触发一个元素的事件的时候，该事件从该元素的祖先元素传递下去，此过程为` 捕获 `，而到达此元素之后，又会向其祖先元素传播上去，此过程为` 冒泡 `  
  
```html  
    <div id="a">  
      <div id="b">  
        <div id="c">  
          <div id="d">哈哈哈哈哈</div>  
        </div>  
      </div>  
    </div>  
```  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2298b84cc0e484a85d4c8e18674ea34~tplv-k3u1fbpfcp-zoom-1.image)  
  
## addEventListener  
  
` addEventListener `是为元素绑定事件的方法，他接收三个参数：  
- 第一个参数：绑定的事件名  
- 第二个参数：执行的函数  
- 第三个参数：  
  - false：默认，代表冒泡时绑定  
  - true：代表捕获时绑定  
    
## target & currentTarget  
  
### false  
  
我们给四个div元素绑定事件，且` addEventListener `第三个参数不设置，则默认设置为` false `  
  
```js  
const a = document.getElementById('a')  
const b = document.getElementById('b')  
const c = document.getElementById('c')  
const d = document.getElementById('d')  
a.addEventListener('click', (e) => {  
  const {  
    target,  
    currentTarget  
  } = e  
  console.log(`target是${target.id}`)  
  console.log(`currentTarget是${currentTarget.id}`)  
})  
b.addEventListener('click', (e) => {  
  const {  
    target,  
    currentTarget  
  } = e  
  console.log(`target是${target.id}`)  
  console.log(`currentTarget是${currentTarget.id}`)  
})  
c.addEventListener('click', (e) => {  
  const {  
    target,  
    currentTarget  
  } = e  
  console.log(`target是${target.id}`)  
  console.log(`currentTarget是${currentTarget.id}`)  
})  
d.addEventListener('click', (e) => {  
  const {  
    target,  
    currentTarget  
  } = e  
  console.log(`target是${target.id}`)  
  console.log(`currentTarget是${currentTarget.id}`)  
})  
```  
  
现在我们点击，看看输出的东西，可以看出触发的是d，而执行的元素是冒泡的顺序  
```js  
target是d currentTarget是d  
target是d currentTarget是c  
target是d currentTarget是b  
target是d currentTarget是a  
```  
  
### true  
  
我们把四个事件第三个参数都设置为` true `，我们看看输出结果，可以看出触发的是d，而执行的元素是捕获的顺序  
```js  
target是d currentTarget是a  
target是d currentTarget是b  
target是d currentTarget是c  
target是d currentTarget是d  
```  
  
### 区别  
  
我们可以总结出：  
- ` e.target `：**触发**事件的元素  
- ` e.currentTarget `：**绑定**事件的元素  
  
# ​const声明了数组，还能push元素吗，为什么？  
可以  
  
数组是引用类型，const声明的引用类型变量，不可以变的是变量引用始终指向某个对象，不能指向其他对象，但是所指向的某个对象本身是可以变的  
# 如何区分数组和对象？  
## 方法1 ：通过 ES6 中的 Array.isArray 来识别  
  
```  
console.log(Array.isArray([]))//true  
console.log(Array.isArray({}))//false  
```  
## 方法2 ：通过 instanceof 来识别  
  
```  
console.log([] instanceof Array)//true  
console.log({} instanceof Array)//false  
```  
## 方法3 ：通过调用 constructor 来识别  
```  
console.log([].constructor)//[Function: Array]  
console.log({}.constructor)//[Function: Object]  
```  
## 方法4 ：通过 Object.prototype.toString.call 方法来识别  
  
```  
console.log(Object.prototype.toString.call([]))//[object Array]    
console.log(Object.prototype.toString.call({}))//[object Object]     
```  
# async、await 实现原理  
# JavaScript 异步编程回顾  
  
由于 JavaScript 是单线程执行模型，因此必须支持异步编程才能提高运行效率。异步编程的语法目标是让异步过程写起来像同步过程。  
  
## 1. 回调函数  
  
回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数。  
  
```js  
const fs = require('fs')  
fs.readFile('/etc/passwd', (err, data) => {  
  if (err) {  
    console.error(err)  
    return  
  }  
  console.log(data.toString())  
})  
```  
  
回调函数最大的问题是容易形成回调地狱，即多个回调函数嵌套，降低代码可读性，增加逻辑的复杂性，容易出错。  
  
```js  
fs.readFile(fileA, function (err, data) {  
  fs.readFile(fileB, function (err, data) {  
    // ...  
  })  
})  
```  
  
## 2. Promise  
  
为解决回调函数的不足，社区创造出 Promise。  
  
```js  
const fs = require('fs')  
  
const readFileWithPromise = file => {  
  return new Promise((resolve, reject) => {  
    fs.readFile(file, (err, data) => {  
      if (err) {  
        reject(err)  
      } else {  
        resolve(data)  
      }  
    })  
  })  
}  
  
readFileWithPromise('/etc/passwd')  
  .then(data => {  
    console.log(data.toString())  
    return readFileWithPromise('/etc/profile')  
  })  
  .then(data => {  
    console.log(data.toString())  
  })  
  .catch(err => {  
    console.log(err)  
  })  
```  
  
简单的 Promise 实现，窥探下本质  
  
Promise 实际上是利用编程技巧将回调函数的横向加载，改成纵向加载，达到链式调用的效果，避免回调地狱。最大问题是代码冗余，原来的任务被 Promise 包装了一下，不管什么操作，一眼看去都是一堆 then，原来的语义变得很不清楚。  
  
## 3. async、await  
  
为了解决 Promise 的问题，async、await 在 ES7 中被提了出来，是目前为止最好的解决方案  
  
```js  
const fs = require('fs')  
async function readFile() {  
  try {      
    var f1 = await readFileWithPromise('/etc/passwd')  
    console.log(f1.toString())  
    var f2 = await readFileWithPromise('/etc/profile')  
    console.log(f2.toString())  
  } catch (err) {  
    console.log(err)  
  }  
}\  
```  
  
async、await 函数写起来跟同步函数一样，条件是需要接收 Promise 或原始类型的值。异步编程的最终目标是转换成人类最容易理解的形式。  
  
# async、await  
  
分析 async、await 实现原理之前，先介绍下预备知识  
  
## 1. generator  
  
generator 函数是协程在 ES6 的实现。协程简单来说就是多个线程互相协作，完成异步任务。  
  
![image-1-1620701628067.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fca57a6683b546f2bfe987c016acb19b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)  
  
整个 generator 函数就是一个封装的异步任务，异步操作需要暂停的地方，都用 yield 语句注明。generator 函数的执行方法如下：  
  
```js  
function* gen(x) {  
  console.log('start')  
  const y = yield x * 2  
  return y  
}  
  
const g = gen(1)  
g.next()   // start { value: 2, done: false }  
g.next(4)  // { value: 4, done: true }  
```  
  
* `gen()` 不会立即执行，而是一上来就暂停，返回一个 `Iterator` 对象（具体可以参考 [Iterator遍历器](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fwangfupeng1988%2Fjs-async-tutorial%2Fblob%2Fmaster%2Fpart4-generator%2F02-iterator.md "https://github.com/wangfupeng1988/js-async-tutorial/blob/master/part4-generator/02-iterator.md") ）  
* 每次 `g.next()` 都会打破暂停状态去执行，直到遇到下一个 `yield` 或者 `return`  
* 遇到 `yield` 时，会执行 `yield` 后面的表达式，并返回执行之后的值，然后再次进入暂停状态，此时 `done: false` 。  
* `next` 函数可以接受参数，作为上个阶段异步任务的返回结果，被函数体内的变量接收  
* 遇到 `return` 时，会返回值，执行结束，即 `done: true`  
* 每次 `g.next()` 的返回值永远都是 `{value: ... , done: ...}` 的形式  
  
## 2. thunk函数  
  
JavaScript 中的 thunk 函数（译为转换程序）简单来说就是把带有回调函数的多参数函数转换成只接收回调函数的单参数版本  
  
```js  
const fs = require('fs')  
const thunkify = fn => (...rest) => callback => fn(...rest, callback)  
const thunk = thunkify(fs.readFile)  
const readFileThunk = thunk('/etc/passwd', 'utf8')  
readFileThunk((err, data) => {  
   // ...  
})  
```  
  
单纯的 thunk 函数并没有很大的用处， 大牛们想到了和 generator 结合：  
  
```js  
function* readFileThunkWithGen() {  
  try {  
    const content1 = yield readFileThunk('/etc/passwd', 'utf8')  
    console.log(content1)  
    const content2 = yield readFileThunk('/etc/profile', 'utf8')  
    console.log(content2)  
    return 'done'  
  } catch (err) {  
    console.error(err)  
    return 'fail'  
  }    
}  
  
const g = readFileThunkWithGen()  
g.next().value((err, data) => {  
  if (err) {  
    return g.throw(err).value  
  }  
  g.next(data.toString()).value((err, data) => {  
    if (err) {  
      return g.throw(err).value  
    }  
    g.next(data.toString())  
  })  
})  
```  
  
thunk 函数的真正作用是统一多参数函数的调用方式，在 next 调用时把控制权交还给 generator，使 generator 函数可以使用递归方式自启动流程  
  
```js  
const run = generator => {  
  const g = generator()  
  const next = (err, ...rest) => {  
    if (err) {  
      return g.throw(err).value  
    }  
    const result = g.next(rest.length > 1 ? rest : rest[0])  
    if (result.done) {  
      return result.value  
    }  
    result.value(next)  
  }  
  next()  
}  
run(readFileThunkWithGen)  
```  
  
有了自启动的加持之后，generator 函数内就可以写"同步"的代码了。generator 函数也可以与 Promise 结合：  
  
```js  
function* readFileWithGen() {  
  try {      
    const content1 = yield readFileWithPromise('/etc/passwd', 'utf8')  
    console.log(content1)  
    const content2 = yield readFileWithPromise('/etc/profile', 'utf8')  
    console.log(content2)  
    return 'done'  
  } catch (err) {  
    console.error(err)  
    return 'fail'  
  }  
}  
  
const run = generator => {  
  return new Promise((resolve, reject) => {  
    const g = generator()  
    const next = res => {  
      const result = g.next(res)  
      if (result.done) {  
        return resolve(result.value)  
      }  
      result.value  
        .then(  
          next,  
          err => reject(gen.throw(err).value)  
        )  
    }  
    next()  
  })  
}  
  
run(readFileWithGen)  
  .then(res => console.log(res))  
  .catch(err => console.log(err))  
```  
  
generator 可以暂停执行，很容易让它和异步操作产生联系，因为我们在处理异步操作时，在等待的时候可以暂停当前任务，把程序控制权交还给其他程序，当异步任务有返回时，在回调中再把控制权交还给之前的任务。generator 实际上并没有改变 JavaScript 单线程、使用回调处理异步任务的本质。  
  
## 3. co 函数库  
  
每次执行 generator 函数时自己写启动器比较麻烦。 [co函数库](https://github.com/tj/co) 是一个 generator 函数的自启动执行器，使用条件是 generator 函数的 yield 命令后面，只能是 thunk 函数或 Promise 对象，co 函数执行完返回一个 Promise 对象。  
  
```js  
const co = require('co')  
co(readFileWithGen).then(res => console.log(res)) // 'done'  
co(readFileThunkWithGen).then(res => console.log(res)) // 'done'  
```  
  
co 函数库的源码实现其实就是把上面两种情况做了综合:  
  
```js  
// 做了简化，与源码基本一致  
const co = (generator, ...rest) => {  
  const ctx = this  
  return new Promise((resolve, reject) => {  
    const gen = generator.call(ctx, ...rest)  
    if (!gen || typeof gen.next !== 'function') {  
      return resolve(gen)  
    }   
      
    const onFulfilled = res => {  
      let ret  
      try {  
        ret = gen.next(res)  
      } catch (e) {  
        return reject(e)  
      }  
      next(ret)  
    }      
  
    const onRejected = err => {  
      let ret  
      try {  
        ret = gen.throw(err)  
      } catch (e) {  
        return reject(e)  
      }  
      next(ret)  
    }  
  
    const next = result => {  
      if (result.done) {  
        return resolve(result.value)  
      }  
      toPromise(result.value).then(onFulfilled, onRejected)  
    }  
  
    onFulfilled()  
  })    
}  
  
const toPromise = value => {  
  if (isPromise(value)) return value  
  if ('function' == typeof value) {  
    return new Promise((resolve, reject) => {  
      value((err, ...rest) => {  
        if (err) {  
          return reject(err)  
        }  
        resolve(rest.length > 1 ? rest : rest[0])  
      })  
    })  
  }  
}  
  
```  
  
## 4. 理解 async、await  
  
一句话，async、await 是 co 库的官方实现。也可以看作自带启动器的 generator 函数的语法糖。不同的是，async、await 只支持 Promise 和原始类型的值，不支持 thunk 函数。  
  
```js  
// generator with co  
co(function* () {  
  try {      
    const content1 = yield readFileWithPromise('/etc/passwd', 'utf8')  
    console.log(content1)  
    const content2 = yield readFileWithPromise('/etc/profile', 'utf8')  
    console.log(content2)  
    return 'done'  
  } catch (err) {  
    console.error(err)  
    return 'fail'  
  }  
})  
  
// async await  
async function readfile() {  
  try {  
    const content1 = await readFileWithPromise('/etc/passwd', 'utf8')  
    console.log(content1)  
    const content2 = await readFileWithPromise('/etc/profile', 'utf8')  
    console.log(content2)  
    return 'done'  
  } catch (err) {  
    throw(err)  
  }  
}  
readfile().then(  
  res => console.log(res),  
  err => console.error(err)  
)  
```  
  
# 总结  
  
不论以上哪种方式，都没有改变 JavaScript 单线程、使用回调处理异步任务的本质。人类总是追求最简单易于理解的编程方式。  
  
给你一个由 `'1'`（陆地）和 `'0'`（水）组成的的二维网格，请你计算网格中岛屿的数量。  
  
岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。  
  
此外，你可以假设该网格的四条边均被水包围。  
  
**示例 1：**  
  
  
**输入：**  
  
```js  
grid = [  
  ["1","1","1","1","0"],  
  ["1","1","0","1","0"],  
  ["1","1","0","0","0"],  
  ["0","0","0","0","0"]  
]  
```  
  
**输出：** 1  
  
**示例 2：**  
  
  
**输入：**  
  
```js  
grid = [  
  ["1","1","0","0","0"],  
  ["1","1","0","0","0"],  
  ["0","0","1","0","0"],  
  ["0","0","0","1","1"]  
]  
```  
  
**输出：** 3  
  
**提示：**  
  
* `m == grid.length`  
* `n == grid[i].length`  
* `1 <= m, n <= 300`  
* `grid[i][j]` 的值为 `'0'` 或 `'1'`  
  
```js  
/**  
 * @param {character[][]} grid  
 * @return {number}  
 */  
var numIslands = function(grid) {  
  
};  
```  
# 岛屿数量  
## 方法一：深度优先搜索  
  
我们可以将二维网格看成一个无向图，竖直或水平相邻的 11 之间有边相连。  
  
为了求出岛屿的数量，我们可以扫描整个二维网格。如果一个位置为 11，则以其为起始节点开始进行深度优先搜索。在深度优先搜索的过程中，每个搜索到的 11 都会被重新标记为 00。  
  
最终岛屿的数量就是我们进行深度优先搜索的次数。  
  
```js  
const numIslands = (grid) => {  
  let count = 0  
  for (let i = 0; i < grid.length; i++) {  
    for (let j = 0; j < grid[0].length; j++) {  
      if (grid[i][j] === '1') {  
        count++  
        turnZero(i, j, grid)  
      }  
    }  
  }  
  return count  
}  
function turnZero(i, j, grid) {  
  if (i < 0 || i >= grid.length || j < 0   
       || j >= grid[0].length || grid[i][j] === '0') return  
  grid[i][j] = '0'  
  turnZero(i, j + 1, grid)  
  turnZero(i, j - 1, grid)  
  turnZero(i + 1, j, grid)  
  turnZero(i - 1, j, grid)  
}  
```  
  
**复杂度分析**  
  
* 时间复杂度：O(MN)，其中 M 和 N 分别为行数和列数。  
* 空间复杂度：O(MN)，在最坏情况下，整个网格均为陆地，深度优先搜索的深度达到 MN。  
  
## 方法二：广度优先搜索  
  
同样地，我们也可以使用广度优先搜索代替深度优先搜索。  
  
为了求出岛屿的数量，我们可以扫描整个二维网格。如果一个位置为 11，则将其加入队列，开始进行广度优先搜索。在广度优先搜索的过程中，每个搜索到的 11 都会被重新标记为 00。直到队列为空，搜索结束。  
  
最终岛屿的数量就是我们进行广度优先搜索的次数。  
  
```js  
const numIslands = (grid) => {  
  let count = 0  
  let queue = []  
  for (let i = 0; i < grid.length; i++) {  
    for (let j = 0; j < grid[0].length; j++) {  
      if (grid[i][j] === '1') {  
        count++  
        grid[i][j] = '0' // 做标记，避免重复遍历  
        queue.push([i, j])  
        turnZero(queue, grid)  
      }  
    }  
  }  
  return count  
}  
function turnZero(queue, grid) {  
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]  
  while (queue.length) {  
    const cur = queue.shift()  
    for (const dir of dirs) {  
      const x = cur[0] + dir[0]  
      const y = cur[1] + dir[1]  
      if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== '1') {  
        continue  
      }  
      grid[x][y] = '0'  
      queue.push([x, y])  
    }  
  }  
}  
```  
  
**复杂度分析**  
  
* 时间复杂度：O(MN)，其中 M 和 N 分别为行数和列数。  
* 空间复杂度：O(min(M,N))，在最坏情况下，整个网格均为陆地，队列的大小可以达到 min(M,N)。  
  
## 方法三：并查集  
  
同样地，我们也可以使用并查集代替搜索。  
  
为了求出岛屿的数量，我们可以扫描整个二维网格。如果一个位置为 1，则将其与相邻四个方向上的 1 在并查集中进行合并。  
  
最终岛屿的数量就是并查集中连通分量的数目。  
  
```js  
/**  
 * @param {character[][]} grid  
 * @return {number}  
 */  
var numIslands = function(grid) {  
    const Y = grid.length;  
    const X = grid[0].length;  
    const uf = new UnionFind();  
  
    for(let i = 0; i < Y; i++) {  
        for(let j = 0; j < X; j++) {  
            if(grid[i][j] == 1) uf.makeSet([i, j]);  
        }  
    }  
  
    for(let i = 0; i < Y; i++) {  
        for(let j = 0; j < X; j++) {  
            if (grid[i][j] == 1) {  
                console.log(i , j)  
                if ((i + 1 < Y) && (grid[i + 1][j] == 1)) uf.union([i, j], [i + 1, j]); // 右侧  
                if ((j + 1 < X) && (grid[i][j + 1] == 1)) uf.union([i, j], [i, j + 1]); // 下侧  
            }  
        }  
    }  
  
    return uf.getCount();  
};  
class UnionFind {  
    constructor() {  
        this.parents = {};  
        this.count = 0;  
    }  
    makeSet(x) {  
        this.parents[x] = x + '';  
        this.count++;  
    }  
    findSet(x) { // 路径压缩，查x的根节点  
        while (this.parents[x] !== (x + '')) {  
            x = this.parents[x];  
        }  
        return x + '';  
    }  
    union(x, y) {  
        this.link(this.findSet(x), this.findSet(y));  
    }  
    link(x, y) {  
        if (x === y) return;  
        this.parents[x] = y;  
        this.count--;  
    }  
    getCount() {  
        return this.count;  
    }  
}  
```  
  
**复杂度分析**  
  
* 时间复杂度：O(MN×α(MN))，其中 MM 和 NN 分别为行数和列数。注意当使用路径压缩（见 find 函数）和按秩合并（见数组 rank）实现并查集时，单次操作的时间复杂度为 α(MN)，其中 α(x) 为反阿克曼函数，当自变量 xx 的值在人类可观测的范围内（宇宙中粒子的数量）时，函数 α(x) 的值不会超过 5，因此也可以看成是常数时间复杂度。  
* 空间复杂度：O(MN)，这是并查集需要使用的空间。  
  
```js  
var name = 'window'  
const obj = {  
    name: 'obj',  
    sayName:function() {  
        console.log(this.name)  
    },  
}  
obj.sayMyName = () => {  
    console.log(this.name)  
}  
const fn1 = obj.sayName  
const fn2 = obj.sayMyName  
fn1()   
obj.sayName()   
fn2()   
obj.sayMyName()   
```  
# 以下代码的输出是什么？  
依次输出：  
  
```  
window  
obj  
window  
window  
```  
  
本次主要考察对this指向的理解，题目比较简单，不做具体的分析。  
  
> 本答案由“前端面试题宝典”收集整理，PC端访问请前往： https://fe.ecool.fun/   
# 给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡，说下会执行几次事件，然后会先执行冒泡还是捕获？  
 addEventListener绑定几次就执行几次  
   
 先捕获，后冒泡  
# promise.catch后面的.then还会执行吗？  
答案： **会继续执行**。  
  
虽然**Promise**是开发过程中使用非常频繁的一个技术点，但是它的一些细节可能很多人都没有去关注过。我们都知道`.then`, `.catch`, `.finally`都可以链式调用，其本质上是因为返回了一个新的**Promise**实例。  
  
catch的语法形式如下：  
  
```javascript  
p.catch(onRejected);  
```  
  
`.catch`只会处理`rejected`的情况，并且也会返回一个新的`Promise`实例。  
  
`.catch(onRejected)`与`then(undefined, onRejected)`在表现上是一致的。  
  
事实上，catch(onRejected)从内部调用了then(undefined, onRejected)。  
  
* 如果`.catch(onRejected)`的`onRejected`回调中返回了一个状态为`rejected`的`Promise`实例，那么`.catch`返回的`Promise`实例的状态也将变成`rejected`。  
* 如果`.catch(onRejected)`的`onRejected`回调中抛出了异常，那么`.catch`返回的`Promise`实例的状态也将变成`rejected`。  
* 其他情况下，`.catch`返回的`Promise`实例的状态将是`fulfilled`。  
  
# 如何确保你的构造函数只能被new调用，而不能被普通调用？  
## 明确函数的双重用途  
`JavaScript` 中的函数一般有两种使用方式:   
+ 当作构造函数使用: `new Func()`  
+ 当作普通函数使用: `Func()`  
  
但 `JavaScript` 内部并没有区分两者的方式，我们人为规定**构造函数名首字母要大写**作为区分。也就是说，构造函数被当成普通函数调用不会有报错提示。  
  
下面来举个栗子:  
  
```js  
// 定义构造函数 Person  
function Person(firstName, lastName) {  
    this.firstName = firstName;  
    this.lastName = lastName;  
    this.fullName = this.firstName + this.lastName;  
}  
// 使用 new 调用  
console.log(new Person("战场", "小包"));  
// 当作普通函数调用  
console.log(Person("战场", "小包"))  
```  
输出结果:   
  
  
![newFunc-Func.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/01af393ccf114ccd85fb53f683f60ed2~tplv-k3u1fbpfcp-watermark.image?)  
  
通过输出结果可以发现，定义的构造函数被当作普通函数来调用，没有任何错误提示。  
  
## 使用 instanceof 实现  
### instanceof 基础知识  
`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。  
  
使用语法:  
```js  
object instanceof constructor  
```  
  
我们可以使用 `instanceof` 检测某个对象是不是另一个对象的实例，例如 ```new Person() instanceof Person --> true```  
  
### new 绑定/ 默认绑定  
+ 通过 `new` 来调用构造函数，会生成一个新对象，并且把这个新对象绑定为调用函数的 `this` 。  
+ 如果普通调用函数，非严格模式 `this` 指向 `window`，严格模式指向 `undefined`  
  
```js  
function Test() {  
    console.log(this)  
}  
// Window {...}  
console.log(Test())  
// Test {}  
console.log(new Test())  
```  
使用 `new` 调用函数和普通调用函数最大的区别在于**函数内部 `this` 指向不同: `new` 调用后 `this` 指向实例，普通调用则会指向 `window`**。  
  
`instanceof` 可以检测某个对象是不是另一个对象的实例。如果为 `new` 调用， `this` 指向实例，**this instanceof 构造函数** 返回值为 `true` ，普通调用返回值为 `false`。  
  
### 代码实现  
  
```js  
function Person(firstName, lastName) {  
    // this instanceof Person  
    // 如果返回值为 false，说明为普通调用  
    // 返回类型错误信息——当前构造函数需要使用 new 调用  
    if (!(this instanceof Person)) {  
        throw new TypeError('Function constructor A cannot be invoked without "new"')  
    }  
    this.firstName = firstName;  
    this.lastName = lastName;  
    this.fullName = this.firstName + this.lastName;  
}  
// 当作普通函数调用  
// Uncaught TypeError: Function constructor A cannot be invoked without "new"  
console.log(Person("战场", "小包"));  
```  
通过输出结果，我们可以发现，定义的 `Person` 构造函数已经无法被普通调用了。撒花~~~  
  
但这种方案并不是完美的，存在一点小小的瑕疵。我们可以通过伪造实例的方法骗过构造函数里的判断。  
  
具体实现: `JavaScript` 提供的 `apply/call` 方法可以修改 `this` 指向，如果调用时将 `this` 指向修改为 `Person` 实例，就可以成功骗过上面的语法。  
```js  
// 输出结果 undefined  
console.log(Person.call(new Person(), "战场", "小包"));  
```  
这点瑕疵虽说无伤大雅，但经过小包的学习，`ES6` 中提供了更好的方案。  
## new.target  
`JavaScript` 官方也发现了这个让人棘手的问题，因此 `ES6` 中提供了 `new.target` 属性。  
  
《ECMAScript 6 入门》中讲到:   
`ES6` 为 `new` 命令引入了一个 `new.target` 属性，该属性一般用在构造函数之中，返回 `new` 命令作用于的那个构造函数。如果构造函数不是通过 `new` 命令或 `Reflect.construct()` 调用的，`new.target` 会返回 `undefined` ，**因此这个属性可以用来确定构造函数是怎么调用的**。  
  
`new.target` 就是为确定构造函数的调用方式而生的，太符合这个场景了，我们来试一下 `new.target` 的用法。  
```js  
function Person() {  
    console.log(new.target);  
}  
// new: Person {}  
console.log("new: ",new Person())  
// not new: undefined  
console.log("not new:", Person())  
```  
所以我们就可以使用 `new.target` 来非常简单的实现对构造函数的限制。  
  
```js  
function Person() {  
    if (!(new.target)) {  
        throw new TypeError('Function constructor A cannot be invoked without "new"')  
    }  
}  
// Uncaught TypeError: Function constructor A cannot be invoked without "new"  
console.log("not new:", Person())  
```  
  
  
  
## 使用ES6 Class  
  
类也具备限制构造函数只能用 `new` 调用的作用。  
  
`ES6` 提供 `Class` 作为构造函数的语法糖，来实现语义化更好的面向对象编程，并且对 `Class` 进行了规定：**类的构造器必须使用 new 来调用**。  
  
因此后续在进行面向对象编程时，强烈推荐使用 `ES6` 的 `Class`。 `Class` 修复了很多 `ES5` 面向对象编程的缺陷，例如类中的所有方法都是不可枚举的；类的所有方法都无法被当作构造函数使用等。  
  
```js  
class Person {  
    constructor (name) {  
        this.name = name;  
    }  
}  
// Uncaught TypeError: Class constructor Person cannot be invoked without 'new'  
console.log(Person())  
```  
学到这里我就不由得好奇了，既然 `Class` 必须使用 `new` 来调用，那提供 `new.target` 属性的意义在哪里？  
## new.target 实现抽象类  
首先来看一下 `new.target` 在类中使用会返回什么？  
```js  
class Person {  
    constructor (name) {  
        this.name = name;  
        console.log(new.target)  
    }  
}  
new Person()  
```  
输出结果:  
  
  
![new-target-class.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/673b0eb9b3124b63bc72066c0533f7d8~tplv-k3u1fbpfcp-watermark.image?)  
  
`Class` 内部调用 `new.target`，会返回当前 `Class`。  
  
《ECMAScript 6 入门》中又讲到: **需要注意的是，子类继承父类时，`new.target`会返回子类**。继承中的 `new.target` 好像有不一样的花样，我们来试一下。  
  
```js  
class Animal {  
    constructor (type, name, age) {  
        this.type = type;  
        this.name = name;  
        this.age = age;  
        console.log(new.target)  
    }  
}  
// extends 是 Class 中实现继承的关键字  
class Dog extends Animal {  
    constructor(name, age) {  
        super("dog", "baobao", "1")  
    }  
}  
const dog = new Dog()  
```  
输出结果:  
  
![new-target-extends.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0dd72beb61194c61a61a22733e379802~tplv-k3u1fbpfcp-watermark.image?)  
  
通过上面案例，我们可以发现子类调用和父类调用的返回结果是不同的，我们利用这个特性，就可以实现父类不可调用而子类可以调用的情况——面向对象中的**抽象类**  
  
### 抽象类实现  
什么是抽象类那？我们以动物世界为例。  
  
我们定义了一个动物类 `Animal`，并且通过这个类来创建动物，动物是个抽象概念，当你提到动物类时，你并不知道我会创建什么动物。只有将动物实体化，比如说猫，狗，猪啊，这才是具体的动物，并且每个动物的行为都会有所不同。因此我们不应该通过创建 `Animal` 实例来生成动物，`Animal` 只是动物抽象概念的集合。  
  
`Animal` 就是一个抽象类，我们不应该通过它来生成动物，而是通过它的子类，例如 `Dog、Cat` 等来生成对应的 `dog/cat` 实例。  
  
`new.target` 子类调用和父类调用的返回值是不同的，所以我们可以借助 `new.target` 实现抽象类  
  
> 抽象类也可以理解为不能独立使用、必须继承后才能使用的类。  
```js  
class Animal {  
    constructor (type, name, age) {  
        if (new.target === Animal) {  
            throw new TypeError("abstract class cannot new")  
        }  
        this.type = type;  
        this.name = name;  
        this.age = age;  
    }  
}  
// extends 是 Class 中实现继承的关键字  
class Dog extends Animal {  
    constructor(name, age) {  
        super("dog", "baobao", "1")  
    }  
}  
// Uncaught TypeError: abstract class cannot new  
const dog = new Animal("dog", "baobao", 18)  
```  
## 总结  
  
本文介绍了三种限制构造函数只能被 `new` 调用的方案  
  
+ 借助 `instanceof` 和 `new` 绑定的原理，适用于低版本浏览器  
+ 借助 `new.target` 属性，可与 `class` 配合定义抽象类  
+ 面向对象编程使用 `ES6 class`——最佳方案  
  
  
  
# 如何获取到一个实例对象的原型对象？  
* 从 `构造函数` 获得 原型对象：  
  
```  
构造函数.prototype  
```  
  
* 从 `对象实例` 获得 `父级原型对象`：  
  
```  
方法一： 对象实例.__proto__        【 有兼容性问题，不建议使用】  
方法二：Object.getPrototypeOf( 对象实例 )  
```  
  
  
```js  
foo();  
var foo;  
function foo(){  
  console.log(1);  
}  
foo = function(){  
  console.log(2);  
}  
```  
# 下面代码会输出什么？  
答案： 1  
  
引擎会在解释JavaScript代码之前首先对齐进行编译，编译过程中的一部分工作就是找到所有的声明，并用合适的作用域将他们关联起来，这也正是词法作用域的核心内容。  
  
简单说就是在js代码执行前引擎会先进行预编译，预编译期间会将变量声明与函数声明提升至其对应作用域的最顶端。  
  
## 变量提升  
  
变量声明的提升是以变量所处的第一层词法作用域为“单位”的，即全局作用域中声明的变量会提升至全局最顶层，函数内声明的变量只会提升至该函数作用域最顶层。那么开始的一段代码经过预编译则变为：  
  
```js  
var a;  
console.log(a); // undefined  
a = "a";  
var foo = () => {  
    var a; // 全局变量会被局部作用域中的同名变量覆盖  
    console.log(a); // undefined  
    a = "a1";  
}  
foo();  
```  
  
输出undefined就很明了。   
  
ES6新增了let和const关键字，使得js也有了“块”级作用域，而且使用let和const 声明的变量和函数是不存在提升现象的，比较有利于我们养成良好的编程习惯。  
  
## 函数提升  
  
有了上面变量提升的说明，函数提升理解起来就比较容易了，但较之变量提升，函数的提升还是有区别的。举例说明：  
  
```js  
console.log(foo1); // [Function: foo1]  
foo1(); // foo1  
console.log(foo2); // undefined  
foo2(); // TypeError: foo2 is not a function  
function foo1 () {  
	console.log("foo1");  
};  
var foo2 = function () {  
	console.log("foo2");  
};  
```  
  
即函数提升只会提升函数声明，而不会提升函数表达式。  
# restful 接口规范是什么？  
 # RESTful API 基础  
> 本规范在 API 设计上遵循 REST 架构风格，本部分会针对如何实现 RESTful API，作出说明  
  
## 简介  
  
REST，全称 Representational State Transfer（表现层状态转化），由 [Roy Thomas Fielding](http://en.wikipedia.org/wiki/Roy_Fielding) 在他2000年的 [博士论文](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm) 中提出的，是一种被广泛使用的 API 架构风格。  
  
## 资源 Resource  
在REST API的设计中，首先需要面向资源进行建模，其中每个节点是一个“简单资源”或“集合资源”。 为方便起见，它们通常被分别称为资源和集合。  
  
1.  一个集合包含**相同类型**的资源列表。 例如，一个用户拥有一组联系人。  
2.  资源具有状态，以及零个或多个子资源。 每个子资源可以是一个简单资源或一个集合资源。  
  
## 方法 Method  
每个资源都会对应一组操作方法，用户通过 API 来完成对应的操作（使用HTTP Method），常见的操作方法如下：  
  
| 操作类型   | HTTP 映射               | 举例                                                                         |  
| ------ | --------------------- | -------------------------------------------------------------------------- |  
| 获取资源集合 | GET <collection URL>  | curl -X GET <https://foo.bar.com/api/v1/customers>        |  
| 获取单个资源 | GET <resource URL>    | curl -X GET <https://foo.bar.com/api/v1/customers/123>    |  
| 创建资源   | POST <collection URL> | curl -X POST <https://foo.bar.com/api/v1/customers>       |  
| 更新资源   | PUT <resource URL>    | curl -X PUT <https://foo.bar.com/api/v1/customers/123>    |  
| 局部更新资源 | PATCH <resource URL>  | curl -X PATCH <https://foo.bar.com/api/v1/customers/123>  |  
| 删除资源   | DELETE <resource URL> | curl -X DELETE <https://foo.bar.com/api/v1/customers/123> |  
  
*其中：POST/PUT 与 PATCH的区别在于全部更新，还是局部信息的更新，POST/PUT为该资源的所有字段均被更新或者覆盖。*  
  
# RESTful API 设计规范  
  
## 面向资源设计 URL  
  
### 面向使用者建模  
  
资源不是数据模型， 也不是领域模型，它的语义应该面向使用者。  
  
**反例：**  
  
```  
# 面向数据模型设计资源，需要多次请求  
/customers/123  
/customers/123/baseinfo  
/customers/123/tags  
```  
  
**正例：**  
  
```  
# 面向使用者设计，可以把资源定义为：顾客档案  
/customers_archives/123  
```  
  
### 资源与角色相关  
  
不同角色的资源可以不同，不同角色使用的资源可以是不一样的，比如：  
  
**管理员访问某个顾客的订单：**  
  
```  
GET /customers/123/podcasts  
```  
  
**顾客访问自己的订单：**  
  
```  
GET /my_podcasts  
```  
  
### 一类资源两个 URL  
  
每个资源都应该只有两个基础 URL（Endpoint），一个 URL 用于集合，另一个用于集合中的某个特定元素。  
  
```  
/customers      # customer 集合  
/customers/1    # customer 集合中的特定元素  
```  
  
### 使用一致的复数名词  
  
避免混用复数和单数形式，只应该使用统一的复数名词来表达资源。  
  
**反例：**  
  
```  
GET /story  
GET /story/1  
```  
  
**正例：**  
  
```  
GET /stories  
GET /stories/1   
```  
  
### 复杂的查询逻辑使用查询字符串  
  
保持URL简单短小，将复杂或可选参数移动到查询字符串。  
  
```  
GET /customers?country=usa&state=ca&city=sfo  
```  
  
### 表达资源之间的关联  
  
当需要对关联在资源1下的资源2进行操作时，使用该形式构造URL：  
  
resources/:resource_id/sub_resources/:sub_resource_id  
  
**反例：**  
  
```  
GET /cusomters/podcasts/123  
GET /getCustomerPodcasts?customer_id=123  
```  
  
**正例：**  
  
```  
GET /cusomters/5678/podcasts        # 获取某个客户的所有播客  
GET /cusomters/5678/podcasts/123    # 获取某个客户的某个播客  
POST /cusomters/5678/podcasts       # 为某个客户创建一个新播客  
```  
  
## 使用 HTTP Method 表示动作  
  
URL 中不应该包含动词，而是全部使用 Method 来表示动作。  
  
**反例：**  
  
```  
GET /getCusomters  
GET /getAllMaleCusomters  
POST /createCusomter  
POST /updateCustomer  
POST /customer/create_for_management/  
```  
  
**正例：**  
  
```  
GET /customers                # 获取客户列表  
GET /cusomters?gender=male    # 获取客户列表（过滤出男性）  
GET /customers/5              # 获取ID为5的客户  
POST /cusomters               # 创建新客户               
PUT /cusomters/5              # 更新已存在的客户5（全量字段）  
PATCH /cusomters/5            # 更新已存在的客户5（部分字段）  
DELETE /cusomters/5           # 删除客户12  
```  
  
## 使用 HATEOAS  
  
HATEOAS 是 Hypermedia As The Engine Of Application State 的缩写，在 [Richardson Maturity Model](http://martinfowler.com/articles/richardsonMaturityModel.html)中，它是 REST 的最高级形态，采用 Hypermedia 的 API 在响应中除了返回资源本身外，还会额外返回一组 Link。 这组 Link 描述了对于该资源，客户端接下来可以做什么以及怎么做，例如：  
  
```  
{  
  
    "tracking_id": "123456",  
    "status": "WAIT_PAYMENT",  
    "items": [  
        {  
            "name": "potato",  
            "quantity": 1  
        }  
    ],  
    "_links": {  
        "self": {  
            "href": "http://localhost:57900/orders/123456"  
        },  
        "cancel": {  
            "href": "http://localhost:57900/orders/123456"  
        },  
        "payment": {  
            "href": "http://localhost:57900/orders/123456/payments"  
        }  
    }  
}  
```  
  
使用 HATEOAS 的好处包括但不限于：  
  
1.  前端不再需要硬编码绝大多数的后端 API URL，而是由后端在响应中返回，后端在对 API 重命名时可以做到前端无感知。  
2.  将一些业务规则统一收敛到后端，比如：有的功能对某个用户的可见性（权限）  
  
## 自定义方法  
  
> 结合实践，使用严格的 RESTful 会有一些语义不易表达（或者说表达起来很拧巴），所以在此基础上，并参考：[Google Clould API - 自定义方法](https://cloud.google.com/apis/design/custom_methods)，允许使用一些自定义方法来进行表达。这些方法**应该**仅用于标准方法不易表达的功能。通常情况下，**应该**尽可能优先考虑使用标准方法，而不是自定义方法，使用方式如下：  
  
-   为了在表达上和资源区分开，自定义方法使用动词表示，表示针对资源的自定义动作  
-   自定义方法统一只使用 GET / POST 这两种 method。  
  
```  
# 一些自定义方法举例  
POST /cusomters/5/cancel  
POST /cusomters/5/undelete  
POST /cusomters/5/search  # 考虑到搜索通常参数比较长，使用GET可能会导致超出长度  
GET /cusomters/batch_get  
```  
  
# API 格式约定  
  
## URL 前缀  
  
使用如下规则构建 URL：  
  
```  
https://foo.bar.com/api/ + 业务域 + 版本号 + 资源集合 + 资源ID  
  
例如：https://foo.bar.com/api/mall/v1/customers/1  
```  
  
## Response Body 结构  
  
使用相同的 HTTP 响应结构，推荐使用下列结构：  
  
```  
{  
  
  "code": 0,            # 错误码，请求成功时返回0  
  "msg": "success",     # 错误信息，请求成功时返回"success"  
  "data": {             # 数据内容，结构必须为object，使用 list/string 均不合规范  
    "id": 1,  
    "name": "abc"  
  },  
  "extra": {            # 错误码非0时，data应为空，推荐extra字段返回错误时需要携带的信息  
    
  }  
}  
```  
  
## 版本号  
  
-   当 API 的升级是兼容的时，无需升级版本号。  
-   版本号使用简单的有序数，而不要使用点号（如：V1.2）。  
-   在新版本上线时需要保证旧版本API仍然可用，待旧版本不再有请求量时，才能进行下线。  
  
### URI Path 中的版本号  
  
使用在 URI Path 中带版本号，来表示 API 整体的版本，当业务域的 API 发生了重大整体升级时，需要升级该版本号，形如：  
  
```  
https://foo.bar.com/api/mall/v1  
```  
  
## HTTP 状态码  
  
> 使用合适 HTTP Status Code，表达响应的语义  
  
| HTTP | 描述                                                                                                                                                                                                                                                                         |  
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| 200  | No error.                                                                                                                                                                                                                                                                  |  
| 400  | Client specified an invalid argument. Check error message and error details for more information. （参数错误）Request can not be executed in the current system state （执行操作不满足接口前置条件）                                                                                            |  
| 401  | Request not authenticated due to missing, invalid, or expired token. （访问身份错误、或者token错误）                                                                                                                                                                                    |  
| 403  | Client does not have sufficient permission. （无权限）                                                                                                                                                                                                                          |  
| 404  | A specified resource is not found, or the request is rejected by undisclosed reasons, such as whitelisting. （操作的资源不存在）                                                                                                                                                     |  
| 405  | The HTTP method in the request is not allowed on the resource. (请求的方法不支持)                                                                                                                                                                                                  |  
| 409  | Concurrency conflict, such as read-modify-write conflict. （服务端出现并发冲突、幂等性冲突、读写冲突等等）                                                                                                                                                                                         |  
| 409  | The resource that a client tried to create already exists. （要操作的资源已存在）                                                                                                                                                                                                     |  
| 429  | Either out of resource quota or reaching rate limiting. （限流错误）                                                                                                                                                                                                             |  
| 500  | Internal server error. Typically a server bug. （内部异常，不可恢复的）                                                                                                                                                                                                                |  
| 503  | Service unavailable. Typically the server is down.（服务不可用，可恢复异常，短时间之后可以进行重试并恢复的错误码）                                                                                                                                                                                         |  
| 504  | Request deadline exceeded. This will happen only if the caller sets a deadline that is shorter than the method's default deadline (i.e. requested deadline is not enough for the server to process the request) and the request did not finish within the deadline. （调用超时） |  
  
## 错误码  
  
> 在使用 HTTP Status Code 的基础上，还需要有业务错误码，通过code字段返回。错误码由各业务方自行约定，业务内部自行划分区段。  
  
## 分页  
  
### 基于 page、page_size 的分页方式  
  
```  
curl https://foo.bar.com/api/mall/v1/customers?page=1&page_size=10  
  
{  
  
  "code": 0,  
  "message": "success",  
  "data": {  
    "pagination": {  
      "total": 3465  
    },  
    "customers": [  
      {  
        "id": 123,  
        "job_id": 456  
      }  
    ]  
  }  
}  
```  
### 基于 offset、limit 的分页方式  
  
```  
curl https://foo.bar.com/api/mall/v1/customers?offset=20&limit=10  
{  
  "code": 0,  
  "message": "success",  
  "data": {  
    "pagination": {  
      "total": 3465  
    },  
    "customers": [  
      {  
        "id": 123,  
        "job_id": 456  
      }  
    ]  
  }  
}  
```  
  
### 基于 page_token 的分页方式  
  
```  
curl https://foo.bar.com/api/mall/v1/customers?page_token=xxxxxxx&page_size=10  
{  
  "code": 0,  
  "message": "success",  
  "data": {  
    "pagination": {  
      "page_token": "yyyyyyyyyy",  
      "has_more": true  
    },  
    "customers": [  
      {  
        "id": 123,  
        "job_id": 456  
      }  
    ]  
  }  
}  
```  
# API 度量指标  
  
API 的实现方，需要密切关注以下基础监控指标，以便于：  
1. 及时发现系统的突发情况，如：接口QPS / 耗时激增，依赖的RPC接口耗时激增等。  
2. 为接口优化提供依据  
  
## 请求量  
  
-   各接口的请求量，可选口径：QPS / 近7天请求量 / 近1天请求量。  
-   **优化方向：在不影响用户体验的前提下，尽可能减少请求量**  
  
## 接口耗时  
  
-   各接口的响应耗时，可选口径：latency avg / p50 / p95 / p99  
-   **优化方向：在满足使用者需求的前提下，尽可能少的耗时**  
  
## I/O 扩散量（内部 I/O 访问量 & 耗时 & 错误量）  
  
-   **单个接口**的各项 I/O 的QPS & 耗时 & 错误量，如：RPC、Mysql、Redis、Mongo、ES 等，当依赖的基础设施出现问题时，可以快速定位原因。  
-   **优化方向：尽可能减少一次 API 请求中，各项 IO 的 QPS 与耗时。**  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b79065cf3f541fb9ccce9e59f07cc93~tplv-k3u1fbpfcp-zoom-1.image)  
  
# API 开发最佳实践  
  
> 以下部分对一些场景和功能作给出了具体的规范和要求  
  
## API-First  
  
在服务端与客户端开发过程中，提前定义好 API，多方依照契约并行开发。  
  
-   在每次需求编码前，就需要提前定义好API，并在接口平台进行登记  
-   并在后端进行技术方案评审时，需要对 API 接口进行评审  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/18e3edda48154564b23da06ee3c541d5~tplv-k3u1fbpfcp-zoom-1.image)  
  
## 面向使用者设计  
  
### **仔细定义“资源”**  
  
在设计API时，一个重要的前提是对Resource本身进行合理的定义。不应该简单的把服务端内部的存储模型，视为“资源”，而是应该面向使用者，比如：人才详情页也是人才的各种模型的组合，它们应该视为一种（而非多种） 资源。  
  
### 避免琐碎的 API  
  
尽量避免公开大量小型资源的“琐碎”Web API，此类 API 可能需要客户端（前端）发送多个请求才能拼装它需要的所有数据。尽可能将相关信息合并成单个较大资源，以便于使用方直接使用。  
  
### 按需返回  
  
应当关注使用方所依赖的具体字段，以及字段的使用方式，只返回使用方依赖数据的最小集，确保返回的字段都是对功能有意义的。  
  
## CQRS  
  
CQRS 全称是 Command Query Responsibility Segregation，将应用程序分为两部分：  
  
-   命令端(Command)：处理程序创建，更新和删除请求，并在数据更改时发出事件。  
-   查询端(Query)：通过执行查询来处理查询，并且通过订阅数据更改时发出的事件流而保持最新。  
  
CQRS 使用分离的接口，将数据查询操作和数据修改操作分离开来，这也意味着在查询和更新过程中使用的数据模型也是不一样的，这样读和写逻辑就隔离开来了。  
  
相比数据库的读写分离，CQRS 可以理解为是应用层的读写分离，针对读的场景，构建单独的读模型，以提高查询的性能，同时提高系统整体的可维护性。  
  
> 扩展阅读：  
>   
> [CQRS - Martin Fowler](https://martinfowler.com/bliki/CQRS.html)  
>   
> [简单可用的CQRS编码实践](https://insights.thoughtworks.cn/backend-development-cqrs/)  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2412792ec3f461a878a6a13c3054f42~tplv-k3u1fbpfcp-zoom-1.image)  
  
## 兼容性（Compatibility）  
  
**API 的变更必须保证向后兼容，即 API 的升级不会导致 前端/客户端 的出错。**  
  
即使某次的升级是前后端同时发布，也不要做不兼容的升级，原因如下：  
  
-   我们经常并不知道所有的 API 使用方  
-   发布过程需要时间，无法真正实现“同时发布”  
-   使发布各环节耦合，一旦前端需要回滚，则后端也要跟着一起回滚，导致上线方案复杂化  
  
常见的**不兼容**升级如下：  
  
-   移除或重命名字段、方法、枚举值  
-   更改字段类型  
-   修改字段的行为和语义  
  
## 幂等性（Idempotency）  
  
**保证 API 的幂等性，能使客户端可以更安全的重试，从而让复杂的流程实现更为简单。**  
  
### Create 类型的幂等  
  
创建类型的 API，为了实现幂等性，常见的做法是使用一个 client-side generated deduplication token（客户端生成的唯一ID），在反复重试时使用同一个Token，便于服务端识别重复，如果发现重复，应按创建成功返回。  
  
### Update 类型的幂等  
  
更新类型的 API，通常有唯一ID对需要更新的资源进行标示，以此可以保证幂等。  
  
对于“Delta”语义的操作，有以下几类方式确保幂等性：  
  
1.  IncrementBy：基于某个数值增加  
2.  SetNewTotal：设置新的总量  
3.  使用 Deduplication Token 保证幂等  
  
这几种方式各有优缺点，需要根据场景选择合适的方式。  
  
### Delete 类型的幂等  
  
Delete的幂等性问题，往往在于一个对象被删除后，再次试图删除可能会由于数据无法被发现导致出错。这个行为一般来说也没什么问题，虽然严格意义上不幂等，但是也无副作用。  
  
## 长耗时请求异步化  
  
如果某个 API 方法需要很长时间才能完成，可以通过：  
  
1.  在服务端异步启动任务，并返回 GUID 标示 “长时间运行的操作”资源  
2.  客户端通过定时轮询 */polling/{guid}，* 获取任务进行的状态。  
3.  当任务完成/失败时，客户端可以获取到处理的结果/失败原因。  
  
# 附录I：Richardson 成熟度模型  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5590f2f4cc44e32934cd4361ec3ebb5~tplv-k3u1fbpfcp-zoom-1.image)  
  
> [Richardson Maturity Model - steps toward the glory of REST](https://martinfowler.com/articles/richardsonMaturityModel.html)  
>  
> [Richardson成熟度模型(Richardson Maturity Model) - 通往真正REST的步骤](https://blog.csdn.net/dm_vincent/article/details/51341037)  
# ES5怎么实现继承  
## 前言  
继承这个概念在面向对象编程思想里面十分重要，也是面试必考的考点之一。  
  
javascript的继承主要是依托其原型与原型链的概念来实现的。  
  
> ECMAscript将原型链作为实现继承的主要方法。  
  
## 先来看看ES6的实现  
  
ES6提供了Class关键字来实现类的定义，Class 可以通过extends关键字实现继承，让子类继承父类的属性和方法。  
  
咱们重点讲一下ES5的四种常用的实现方式。  
  
## ES5实现的四种方式  
  
### 1. 原型链继承  
原型链继承的原理很简单，直接让子类的原型对象指向父类实例，当子类实例找不到对应的属性和方法时，就会往它的原型对象，也就是父类实例上找，从而实现对父类的属性和方法的继承  
```js  
function Person() {  
    this.name = 'Back_kk';  
}  
Person.prototype.getName = function() {  
    return this.name;  
}  
function Student() {}  
Student.prototype = new Person();  
// 根据原型链的规则,顺便绑定一下constructor, 这一步不影响继承, 只是在用到constructor时会需要  
// 原型的实例等于自身  
Student.prototype.constructor = Student;  
  
const student = new Student();  
console.log(student.name); // Back_kk  
console.log(student.getName()); // Back_kk  
  
```  
  
#### 缺陷  
1. 由于所有Student实例原型都指向同一个Person实例, 因此对某个Student实例的来自父类的引用类型变量修改会影响所有的Student实例  
  
例如：  
```js  
function Person() {  
    this.obj = {  
        name: 'Back_kk',  
        age: 18  
    };  
}  
function Student() {}  
Student.prototype = new Person();  
// 根据原型链的规则,顺便绑定一下constructor, 这一步不影响继承, 只是在用到constructor时会需要  
// 原型的实例等于自身  
Student.prototype.constructor = Student;  
  
const student1 = new Student();  
student1.obj.name = '佩奇';  
const student2 = new Student();  
console.log(student2.obj.name); // 佩奇  
```  
  
2. 在创建子类实例时无法向父类构造传参, 即没有实现super()的功能  
> 那么能不能实现super()功能呢？大家有兴趣可以思考下。  
  
### 2. 构造函数继承  
构造函数继承，即在子类的构造函数中执行父类的构造函数，并为其绑定子类的this，让父类的构造函数把成员属性和方法都挂到子类的this上去，这样既能避免实例之间共享一个原型实例，又能向父类构造方法传参。  
  
```js  
function Person(name) {  
    this.name = name  
}  
Person.prototype.getName = function() {  
    return this.name;  
}  
function Student() {  
    Person.apply(this, arguments);  
}  
  
const student = new Student('Back_kk');  
console.log(student.name); // Back_kk  
```  
#### 缺陷  
- 继承不到父类原型上的属性和方法  
   
  Students类实际上是调用Person类来生成的实例  
  
  ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/443b5a4914794b93a5976ccab98285dd~tplv-k3u1fbpfcp-watermark.image?)  
  
  能否交加修改让其获取到Person原型上的属性和方法呢？  
  
    ```js  
    function Person(name) {  
        this.name = name  
    }  
    Person.prototype.getName = function() {  
        return this.name;  
    }  
    function Student() {  
        // 这里偷偷用了ES6的解构，不影响大局不要在意哈  
       return new Person(...arguments);  
    }  
    const student = new Student('Back_kk');  
    console.log(student); // Back_kk  
    ```  
      
    这是这样顾此失彼，student的构造方法变成了Person,这显然违背了我们的初衷。  
      
    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7acb4551fab446c6a131b17c99b12f3b~tplv-k3u1fbpfcp-watermark.image?)  
  
### 3. 组合式继承  
  
组合是继承结合了原型集成和构造函数继承的特点。  
  
```js  
function Person(name) {  
    this.name = name;  
}  
Person.prototype.getName = function() {  
    return this.name;  
}  
function Student() {  
    // 构造函数继承  
    Person.apply(this, arguments)  
}  
// 原型式继承  
Student.prototype = new Person();  
  
// 原型的实例等于自身  
Student.prototype.constructor = Student;  
  
const student = new Student('Back_kk');  
console.log(student.name); // Back_kk  
console.log(student.getName()); // Back_kk  
  
```  
#### 缺陷  
  
- 每次创建子类实例都执行了两次构造函数(Person.apply和new Person())，虽然这并不影响对父类的继承，但子类创建实例时，原型中会存在两份相同的属性和方法，这并不优雅。  
    
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d7e70a265e7466fb678a8d1f2b4ccd2~tplv-k3u1fbpfcp-watermark.image?)  
  
### 4. 寄生式组合继承  
  
解决构造函数被执行两次的问题, 我们将指向父类实例改为指向父类原型, 减去一次构造函数的执行。  
  
```js  
function Person(name) {  
    this.name = name;  
}  
Person.prototype.getName = function() {  
    return this.name;  
}  
function Student() {  
    // 构造函数继承  
    Person.apply(this, arguments)  
}  
// 原型式继承  
// Student.prototype = new Person();  
Student.prototype = Object.create(Person.prototype);  
  
// 原型的实例等于自身  
Student.prototype.constructor = Student;  
  
const student = new Student('Back_kk');  
console.log(student.name); // Back_kk  
console.log(student.getName()); // Back_kk  
```  
  
这是目前ES5中比较成熟的继承方式了。  
  
  
## 总结  
- 说到js继承，最开始想到的应该是是原型链继承，通过把子类实例的原型指向父类实例来继承父类的属性和方法，但原型链继承的缺陷在于对子类实例继承的引用类型的修改会影响到所有的实例对象以及无法向父类的构造方法传参。  
- 构造函数继承, 通过在子类构造函数中调用父类构造函数并传入子类this来获取父类的属性和方法，但构造函数继承也存在缺陷，构造函数继承不能继承到父类原型链上的属性和方法。  
- 后面有了组合式继承，但也有了新的问题，每次都会执行两次父类的构造方法，最终有了寄生式组合式继承。  
  
  
# 什么是防抖和节流，以及如何编码实现？  
![](https://static.vue-js.com/912f1a10-8787-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、是什么  
  
本质上是优化高频率执行代码的一种手段  
  
如：浏览器的 `resize`、`scroll`、`keypress`、`mousemove` 等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能  
  
为了优化体验，需要对这类事件进行调用次数的限制，对此我们就可以采用`throttle`（节流）和`debounce`（防抖）的方式来减少调用频率  
  
#### 定义  
  
- 节流: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效  
- 防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时  
  
一个经典的比喻:  
  
想象每天上班大厦底下的电梯。把电梯完成一次运送，类比为一次函数的执行和响应  
  
假设电梯有两种运行策略 `debounce` 和 `throttle`，超时设定为15秒，不考虑容量限制  
  
电梯第一个人进来后，15秒后准时运送一次，这是节流  
  
电梯第一个人进来后，等待15秒。如果过程中又有人进来，15秒等待重新计时，直到15秒后开始运送，这是防抖  
  
## 代码实现  
  
### 节流  
  
完成节流可以使用时间戳与定时器的写法  
  
使用时间戳写法，事件会立即执行，停止触发后没有办法再次执行  
  
```js  
function throttled1(fn, delay = 500) {  
    let oldtime = Date.now()  
    return function (...args) {  
        let newtime = Date.now()  
        if (newtime - oldtime >= delay) {  
            fn.apply(null, args)  
            oldtime = Date.now()  
        }  
    }  
}  
  
```  
  
使用定时器写法，`delay`毫秒后第一次执行，第二次事件停止触发后依然会再一次执行  
  
```js  
function throttled2(fn, delay = 500) {  
    let timer = null  
    return function (...args) {  
        if (!timer) {  
            timer = setTimeout(() => {  
                fn.apply(this, args)  
                timer = null  
            }, delay);  
        }  
    }  
}  
```  
  
可以将时间戳写法的特性与定时器写法的特性相结合，实现一个更加精确的节流。实现如下  
  
```js  
function throttled(fn, delay) {  
    let timer = null  
    let starttime = Date.now()  
    return function () {  
        let curTime = Date.now() // 当前时间  
        let remaining = delay - (curTime - starttime)  // 从上一次到现在，还剩下多少多余时间  
        let context = this  
        let args = arguments  
        clearTimeout(timer)  
        if (remaining <= 0) {  
            fn.apply(context, args)  
            starttime = Date.now()  
        } else {  
            timer = setTimeout(fn, remaining);  
        }  
    }  
}  
```  
  
### 防抖  
  
简单版本的实现  
  
```js  
function debounce(func, wait) {  
    let timeout;  
  
    return function () {  
        let context = this; // 保存this指向  
        let args = arguments; // 拿到event对象  
  
        clearTimeout(timeout)  
        timeout = setTimeout(function(){  
            func.apply(context, args)  
        }, wait);  
    }  
}  
```  
  
防抖如果需要立即执行，可加入第三个参数用于判断，实现如下：  
  
```js  
function debounce(func, wait, immediate) {  
  
    let timeout;  
  
    return function () {  
        let context = this;  
        let args = arguments;  
  
        if (timeout) clearTimeout(timeout); // timeout 不为null  
        if (immediate) {  
            let callNow = !timeout; // 第一次会立即执行，以后只有事件执行后才会再次触发  
            timeout = setTimeout(function () {  
                timeout = null;  
            }, wait)  
            if (callNow) {  
                func.apply(context, args)  
            }  
        }  
        else {  
            timeout = setTimeout(function () {  
                func.apply(context, args)  
            }, wait);  
        }  
    }  
}  
```  
  
## 二、区别  
  
相同点：  
  
- 都可以通过使用 `setTimeout` 实现  
- 目的都是，降低回调执行频率。节省计算资源  
  
不同点：  
  
- 函数防抖，在一段连续操作结束后，处理回调，利用`clearTimeout `和 `setTimeout`实现。函数节流，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能  
- 函数防抖关注一定时间连续触发的事件，只在最后执行一次，而函数节流一段时间内只执行一次  
  
例如，都设置时间频率为500ms，在2秒时间内，频繁触发函数，节流，每隔 500ms 就执行一次。防抖，则不管调动多少次方法，在2s后，只会执行一次  
  
如下图所示：  
  
 ![](https://static.vue-js.com/a2c81b50-8787-11eb-ab90-d9ae814b240d.png)  
  
  
## 三、应用场景  
  
防抖在连续的事件，只需触发一次回调的场景有：  
  
- 搜索框搜索输入。只需用户最后一次输入完，再发送请求  
- 手机号、邮箱验证输入检测  
- 窗口大小`resize`。只需窗口调整完成后，计算窗口大小。防止重复渲染。  
  
节流在间隔一段时间执行一次回调的场景有：  
  
- 滚动加载，加载更多或滚到底部监听  
- 搜索框，搜索联想功能  
# 请简述 == 的机制  
大家知道，==是JavaScript中比较复杂的一个运算符。它的运算规则奇怪，容易让人犯错，从而成为JavaScript中“最糟糕的特性”之一。  
  
在仔细阅读了ECMAScript规范的基础上，我画了一张图，我想通过它你会彻底地搞清楚关于==的一切。同时，我也试图通过此文向大家证明==并不是那么糟糕的东西，它很容易掌握，甚至看起来很合理。  
  
先上图：  
  
![](https://pic3.zhimg.com/80/0ea77966986b068628b17c33419e4476_1440w.png)  
  
**图1** \==运算规则的图形化表示  
  
\==运算规则的精确描述在此：[The Abstract Equality Comparison Algorithm](https://link.zhihu.com/?target=http%3A//es5.github.io/%23x11.9.3)。但是，这么复杂的描述，你确定看完后脑子不晕？确定立马就能拿它指导实践？  
  
肯定不行，规范毕竟是给JavaScript运行环境的开发人员看的(比如V8引擎的开发人员们)，而不是给语言的使用者看的。而上图正是将规范中复杂的描述翻译成了更容易看懂的形式。  
  
在详细介绍图1中的每个部分前，我们来复习一下JS中关于类型的知识：  
  
1. JS中的值有两种类型：原始类型(Primitive)、对象类型(Object)。  
2. 原始类型包括：Undefined、Null、Boolean、Number和String等五种。  
3. Undefined类型和Null类型的都只有一个值，即undefined和null；Boolean类型有两个值：true和false；Number类型的值有很多很多；String类型的值理论上有无数个。  
4. 所有对象都有valueOf()和toString()方法，它们继承自Object，当然也可能被子类重写。  
  
现在考虑表达式：  
  
```js  
x == y  
  
```  
  
其中x和y是上述六种类型中某一种类型的值。  
  
当x和y的类型相同时，x == y可以转化为x === y，而后者是很简单的(唯一需要注意的可能是NaN)，所以下面我们只考虑x和y的类型不同的情况。  
  
## 一. 有和无  
  
在图1中，JavaScript值的六种类型用蓝底色的矩形表示。它们首先被分成了两组：  
  
* String、Number、Boolean和Object (对应左侧的大矩形框)  
* Undefined和Null (对应右侧的矩形框)  
  
分组的依据是什么？我们来看一下，右侧的Undefined和Null是用来表示**不确定**、**无**或者**空**的，而右侧的四种类型都是**确定的**、**有**和**非空**。我们可以这样说：  
  
> 左侧是一个**存在**的世界，右侧是一个**空**的世界。  
  
所以，左右两个世界中的任意值做==比较的结果都是false是很合理的。(见图1中连接两个矩形的水平线上标的false)  
  
## 二. 空和空  
  
JavaScript中的undefined和null是另一个经常让我们崩溃的地方。通常它被认为是一个设计缺陷，这一点我们不去深究。不过我曾听说，JavaScript的作者最初是这样想的：  
  
> 假如你打算把一个变量赋予对象类型的值，但是现在还没有赋值，那么你可以用null表示此时的状态(证据之一就是typeof null 的结果是'object')；相反，假如你打算把一个变量赋予原始类型的值，但是现在还没有赋值，那么你可以用undefined表示此时的状态。  
  
不管这个传闻是否可信，它们两者做==比较的结果是true是很合理的。(见图1中右侧垂直线上标的true)  
  
在进行下一步之前，我们先来说一下图1中的两个符号：大写字母N和P。这两个符号并不是PN结中正和负的意思。而是：  
  
* N表示ToNumber操作，即将操作数转为数字。它是规范中的抽象操作，但我们可以用JS中的Number()函数来等价替代。  
* P表示ToPrimitive操作，即将操作数转为原始类型的值。它也是规范中的抽象操作，同样也可以翻译成等价的JS代码。不过稍微复杂一些，简单说来，对于一个对象obj：  
  
> ToPrimitive(obj)等价于：先计算obj.valueOf()，如果结果为原始值，则返回此结果；否则，计算obj.toString()，如果结果是原始值，则返回此结果；否则，抛出异常。  
  
注：此处有个例外，即Date类型的对象，它会先调用toString()方法，后调用valueOf()方法。  
  
在图1中，标有N或P的线表示：当它连接的两种类型的数据做==运算时，标有N或P的那一边的操作数要先执行ToNumber或ToPrimitive变换。  
  
## 三. 真与假  
  
从图1可以看出，当布尔值与其他类型的值作比较时，布尔值会转化为数字，具体来说  
  
```js  
true -> 1  
false -> 0  
  
```  
  
这一点也不需浪费过多口舌。想一下在C语言中，根本没有布尔类型，通常用来表示逻辑真假的正是整数1和0。  
  
## 四. 字符的序列  
  
在图1中，我们把String和Number类型分成了一组。为什么呢？在六种类型中，String和Number都是字符的序列(至少在字面上如此)。字符串是所有合法的字符的序列，而数字可以看成是符合特定条件的字符的序列。所以，数字可以看成字符串的一个子集。  
  
根据图1，在字符串和数字做==运算时，需要使用ToNumber操作，把字符串转化为数字。假设x是字符串，y是数字，那么：  
  
```js  
x == y -> Number(x) == y  
  
```  
  
那么字符串转化为数字的规则是怎样的呢？规范中描述得很复杂，但是大致说来，就是把字符串两边的空白字符去掉，然后把两边的引号去掉，看它能否组成一个合法的数字。如果是，转化结果就是这个数字；否则，结果是NaN。例如：  
  
```js  
Number('123') // 结果123  
Number('1.2e3') // 结果1200  
Number('123abc') // 结果NaN  
Number('123\v\f') // 结果123  
  
```  
  
当然也有例外，比如空白字符串转化为数字的结果是0。即  
  
```js  
Number('') // 结果0  
Number('\v\f') // 结果0  
  
```  
  
## 五. 单纯与复杂  
  
原始类型是一种单纯的类型，它们直接了当、容易理解。然而缺点是表达能力有限，难以扩展，所以就有了对象。对象是属性的集合，而属性本身又可以是对象。所以对象可以被构造得任意复杂，足以表示各种各样的事物。  
  
但是，有时候事情复杂了也不是好事。比如一篇冗长的论文，并不是每个人都有时间、有耐心或有必要从头到尾读一遍，通常只了解其中心思想就够了。于是论文就有了关键字、概述。JavaScript中的对象也一样，我们需要有一种手段了解它的主要特征，于是对象就有了toString()和valueOf()方法。  
  
> toString()方法用来得到对象的一段文字描述；而valueOf()方法用来得到对象的特征值。  
  
当然，这只是我自己的理解。顾名思义，toString()方法倾向于返回一个字符串。那么valueOf()方法呢？根据[规范中的描述](https://link.zhihu.com/?target=http%3A//es5.github.io/%23x9.1)，它倾向于返回一个数字——尽管内置类型中，valueOf()方法返回数字的只有Number和Date。  
  
根据图1，当一个对象与一个非对象比较时，需要将对象转化为原始类型(虽然与布尔类型比较时，需要先将布尔类型变成数字类型，但是接下来还是要将对象类型变成原始类型)。这也是合理的，毕竟==是不严格的相等比较，我们只需要取出对象的主要特征来参与运算，次要特征放在一边就行了。  
  
## 六. 万物皆数  
  
我们回过头来看一下图1。里面标有N或P的那几条连线是没有方向的。假如我们在这些线上标上箭头，使得连线从标有N或P的那一端指向另一端，那么会得到(不考虑undefined和null)：  
  
    
![](https://pic1.zhimg.com/82bc3a94a0ef897a83a1f9c920702218_b.png)  
  
**图2** ==运算过程中类型转化的趋势  
  
发现什么了吗？对，在运算过程中，所有类型的值都有一种向数字类型转化的趋势。毕竟曾经有名言曰：  
  
> 万物皆数。  
  
## 七. 举个栗子  
  
前面废话太多了，这里还是举个例子，来证明图1确实是方便有效可以指导实践的。  
  
例，计算下面表达式的值：  
  
```js  
[''] == false  
  
```  
  
首先，两个操作数分别是对象类型、布尔类型。根据图1，需要将布尔类型转为数字类型，而false转为数字的结果是0，所以表达式变为：  
  
```js  
[''] == 0  
  
```  
  
两个操作数变成了对象类型、数字类型。根据图1，需要将对象类型转为原始类型：  
  
* 首先调用\[\].valueOf()，由于数组的valueOf()方法返回自身，所以结果不是原始类型，继续调用\[\].toString()。  
* 对于数组来说，toString()方法的算法，是将每个元素都转为字符串类型，然后用逗号','依次连接起来，所以最终结果是空字符串''，它是一个原始类型的值。  
  
此时，表达式变为：  
  
```js  
'' == 0  
  
```  
  
两个操作数变成了字符串类型、数字类型。根据图1，需要将字符串类型转为数字类型，前面说了空字符串变成数字是0。于是表达式变为：  
  
```js  
0 == 0  
  
```  
  
到此为止，两个操作数的类型终于相同了，结果明显是true。  
  
从这个例子可以看出，要想掌握==运算的规则，除了牢记图1外，还需要记住那些内置对象的toString()和valueOf()方法的规则。包括Object、Array、Date、Number、String、Boolean等，幸好这没有什么难度。  
  
## 八. 再次变形  
  
其实，图一还不够完美。为什么呢？因为对象与字符串/数字比较时都由对象来转型，但是与同样是原始类型的布尔类型比较时却需要布尔类型转型。实际上，只要稍稍分析一下，全部让对象来转为原始类型也是等价的。所以我们得到了最终的更加完美的图形：  
  
![](https://pic2.zhimg.com/0fc2dd69d7f9d4083f347784446b7f0d_b.png)  
  
**图3** 更完美的==运算规则的图形化表示    
  
有一个地方可能让你疑惑：为什么Boolean与String之间标了两个N？虽然按照规则应该是由Boolean转为数字，但是下一步String就要转为数字了，所以干脆不如两边同时转成数字。  
  
## 九. 总结一下  
  
前面说得很乱，根据我们得到的最终的图3，我们总结一下==运算的规则：  
  
* **undefined == null**，结果是**true**。且它俩与所有其他值比较的结果都是**false**。  
* **String == Boolean**，需要两个操作数同时转为Number。  
* **String/Boolean == Number**，需要String/Boolean转为Number。  
* **Object == Primitive**，需要Object转为Primitive(具体通过**valueOf**和**toString**方法)。  
  
瞧见没有，一共**只有4条规则**！是不是很清晰、很简单。  
  
> 原答案链接： https://zhuanlan.zhihu.com/p/21650547  
>  
> 本答案由《前端面试题宝典》小程序整理和发布，PC端访问地址： https://fe.ecool.fun/  
  
# 说说sourcemap的原理？  
Source map 想必大家都不陌生。线上的代码多是压缩后的，如果线上有报错却只能调试那个代码多半是个噩梦。因此我们需要有一个桥梁帮助我们搭建起源代码及压缩后代码的联系，source map 就是起了这个作用。  
  
以下是 MDN 对于 source map 的解释：  
  
> 调试原始源代码会比浏览器下载的转换后的代码更加容易。 [source map](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) 是从已转换的代码映射到原始源的文件，使浏览器能够重构原始源并在调试器中显示重建的原始源。  
  
但是不知道大家有没有对 source map 的原理产生过疑问？先列出了四个疑问，不知道各位是不是也存在过这样的问题：  
  
![Source map 四问](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7221a39259a648ac9135c6db1889bdef~tplv-k3u1fbpfcp-zoom-1.image)  
  
接下来的内容会逐步为读者解答这四问。  
  
## source map 文件是否影响网页性能  
  
这个答案肯定是不会影响，否则构建相关的优化就肯定会涉及到对于 source map 的处理了，毕竟 source map 文件也不小。  
  
其实 source map 只有在打开 dev tools 的情况下才会开始下载，相信大部分用户都不会去打开这个面板，所以这也就不是问题了。  
  
这时可能会有读者想说：哎，但是我好像从来没有在 Network 里看到 source map 文件的加载呀？其实这只是浏览器隐藏了而已，如果大家使用抓包工具的话就能发现在打开 dev tools 的时候开始下载 source map 了。  
  
## source map 存在标准嘛？  
  
source map 是存在一个标准的，为 Google 及 Mozilla 的工程师制定，[文档地址](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit)。正是因为存在这份标准，各个打包器及浏览器才能生成及使用 source map，否则就乱套了。  
  
各个打包器基本都基于[该库](https://github.com/mozilla/source-map)来生成 source map，当然也存在一些魔改的方案，但是标准都是统一的。  
  
通过上面的库生成出来的 source map 格式大致如下，大家也可以对比各个打包器的产物，格式及内容大部分都是一致的：  
  
```json  
{  
  version: 3,  
  file: "min.js",  
  names: ["bar", "baz", "n"],  
  sources: ["one.js", "two.js"],  
  sourceRoot: "http://example.com/www/js/",  
  mappings: "CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA"  
}  
```  
  
接下来介绍下重要字段的作用：  
  
- version：顾名思义，指代了版本号，目前 source map 标准的版本为 3，也就是说这份 source map 使用的是第三版标准产出的  
- file：编译后的文件名  
- names：一个优化用的字段，后续会在 mappings 中用到  
- sources：多个源文件名  
- mappings：这是最重要的内容，表示了源代码及编译后代码的关系，但是先略过这块，下文中会详细解释  
  
另外大部分应用都是由 webpack 来打包的，可能有些读者会发现 webpack 的 source map   产出的字段于上面的略微有些不一致。  
  
这是因为 webpack 魔改了一些东西，但是底下还是基于这个库实现的，只是变动了一些不涉及核心的字段，[具体代码](https://github.com/webpack/webpack-sources/blob/master/lib/SourceMapSource.js)。  
  
## 浏览器怎么知道源文件和 source map 的关系？  
  
这里我们以 webpack 做个实验，通过 webpack5 对于以下代码进行打包：  
  
```js  
// index.js  
const a = 1  
console.log(a);  
```  
  
当我们开启 source map 选项以后，产物应该为两个文件，分别为 `bundle.js` 以及 `bundle.js.map`。  
  
查看 `bundle.js` 文件以后我们会发现代码中存在这一一段注释：  
  
```js  
console.log(1);  
//# sourceMappingURL=bundle.js.map  
```  
  
`sourceMappingURL` 就是标记了该文件的 source map 地址。  
  
当然除此之外还有别的方式，通过查阅 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/SourceMap) 发现还可以通过 response header 的 `SourceMap: <url>` 字段来表明。  
  
## source map 是如何对应到源代码的？  
  
这是 source map 最核心的功能，也是最涉及知识盲区的一块内容。  
  
大家应该还记得上文中没介绍的 `mapping` 字段吧，接下来我们就来详细了解这个字段的用处。  
  
我们还是以刚才打包的文件为例，来看看产出的 source map 长啥样（去掉了无关紧要的）：  
  
```json  
{  
  sources:["webpack://webpack-source-demo/./src/index.js"],  
  names: ['console', 'log'],  
  mappings: 'AACAA,QAAQC,IADE',  
}  
```  
  
首先 `mappings` 的内容其实是 Base64 VLQ 的编码表示。  
  
内容由三部分组成，分别为：  
  
- 英文，表示源码及压缩代码的位置关联  
- 逗号，分隔一行代码中的内容。比如说 `console.log(a)` 就由 `console` 、`log` 及 `a` 三部分组成，所以存在两个逗号。  
- 分号，代表换行  
  
逗号和分号想必大家没啥疑问，但是对于这几个英文内容应该会很困惑。  
  
其实这就是一种压缩数字内容的编码方式，毕竟源代码可能很庞大，用数字表示行数及列数的话 source map 文件将也会很庞大，因此选用 Base 64 来代表数字用以减少文件体积。  
  
比如说 `A` 代表了数字 0，`C` 代表了数字 2 等等，有兴趣的读者可以通过[该网站](https://www.murzwin.com/base64vlq.html)了解映射关系。  
  
了解了这层编码的映射关系，我们再来聊聊这一串串英文到底代表了什么。  
  
其实这每串英文中的字母都代表了一个位置：  
  
1. 压缩代码的第几列  
2. 哪个源代码文件，毕竟可以多个文件打包成一个，对应 `sources` 字段  
3. 源代码第几行  
4. 源代码第几列  
5. `names` 字段里的索引  
  
这时读者可能有个疑惑，为啥没有压缩代码的第几行表示？这是因为压缩后的代码就一行，所以只需要表示第几列就行了。  
  
------  
  
**更新：有读者询问 Base64 表达的数字是有上限的，如果需要表示的数字很大的话该怎么办。实际上除了每个分号中的第一串英文是用来表示代码的第几行第几列的绝对位置之外，后面的都是相对于之前的位置来做加减法的。**  
  
------  
  
了解完以上知识以后，我们就来根据上文的内容解析下 `AACAA` 的具体含义吧，通过[该网站](https://www.murzwin.com/base64vlq.html)我们可以知道 `AACAA` 对应了 `[0,0,1,0,0]`，这里需要注意的是数字都从 0 开始，笔者表述的时候会自动加一，毕竟代码第零行听起来怪怪的。  
  
1. 压缩代码的第一列  
2. 第一个源代码文件，也就是 `index.js` 文件了  
3. 源代码第二行了  
4. 源代码的第一列  
5. `names` 数组中的第一个索引，也就是 `console`  
  
通过以上的解析，我们就能知道 `console` 在源代码及压缩文件中的具体位置了。  
  
但是为什么 source map 会知道编译后的代码具体在什么位置呢？这里就要用到 AST 了。让我们打开[网站](https://astexplorer.net/)输入 `console.log(a)` 后观察右边的内容，你应该会发现如图所示的数据：  
  
![image-20210516214636867](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7f590b8c7b149369f0641fd12bb196d~tplv-k3u1fbpfcp-zoom-1.image)  
  
因为 source map 是由 AST 产出的，所以我们能用上 AST 中的这个数据。  
  
## source map 的应用  
  
一般来说 source map 的应用都是在监控系统中，开发者构建完应用后，通过插件将源代码及 source map 上传至平台中。一旦客户端上报错误后，我们就可以通过[该库](https://github.com/mozilla/source-map)来还原源代码的报错位置（具体 API 看文档即可），方便开发者快速定位线上问题。  
# 使用js实现二分查找  
二分查找，也称为折半查找，是指在有序的数组里找出指定的值，返回该值在数组中的索引。  
  
查找步骤如下：  
  
1. 从有序数组的最中间元素开始查找，如果该元素正好是指定查找的值，则查找过程结束。否则进行下一步;  
2. 如果指定要查找的元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找，然后重复第一步的操作;  
3. 重复以上过程，直到找到目标元素的索引，查找成功;或者直到子数组为空，查找失败。  
  
优点是比较次数少，查找速度快，平均性能好；  
其缺点是要求待查表为**有序表**，且插入删除困难。因此，折半查找方法适用于不经常变动而查找频繁的有序列表。  
  
## 实现方式  
  
### 非递归  
  
```js  
//arr:数组;key:查找的元素  
function search(arr, key) {  
    //初始索引开始位置和结束位置  
    var start = 0,  
        end = arr.length - 1;  
    while(start <= end) {  
        //取上限和下限中间的索引  
        var mid = parseInt((end + start) /2);  
        if(key == arr[mid]) {  
            //如果找到则直接返回  
            return mid;  
        } else if(key > arr[mid]) {  
            //如果key是大于数组中间索引的值则将索引开始位置设置为中间索引+1  
            start = mid + 1;  
        } else {  
            //如果key是小于数组中间索引的值则将索引结束位置设置为中间索引-1  
            end = mid -1;  
        }  
    }  
    //如果在循环内没有找到查找的key(start<=end)的情况则返回-1  
    return -1;  
}  
var arr = [0,13,21,35,46,52,68,77,89,94];  
search(arr, 68); //6  
search(arr, 1); //-1  
```  
  
### 递归  
```js  
//arr:数组;key:查找的元素;start:开始索引;end:结束索引  
function search2(arr,key,start,end){  
    //首先判断当前起始索引是否大于结束索引,如果大于说明没有找到元素返回-1  
    if(start > end) {  
        return -1;  
    }  
    //如果手动调用不写start和end参数会当做第一次运行默认值  
    //三元表达式:如果不写end参数则为undefined说明第一次调用所以结束索引为arr.length-1  
    //如果是递归调用则使用传进来的参数end值  
    var end= end===undefined ? arr.length-1 : end;  
    //如果 || 前面的为真则赋值start,如果为假则赋值后面的0  
    //所以end变量没有写var end = end || arr.length-1;这样如果递归调用时候传参end为0时会被转化为false,导致赋值给arr.length-1造成无限循环溢出;  
    var start=start || 0;  
    //取中间的索引  
    var mid=parseInt((start+end)/2);  
    if(key==arr[mid]){  
        //如果找到则直接返回  
        return mid;  
    }else if(key<arr[mid]){  
        //如果key小于则递归调用自身,将结束索引设置为中间索引-1  
        return search2(arr,key,start,mid-1);  
    }else{  
        //如果key大于则递归调用自身,将起始索引设置为中间索引+1  
        return search2(arr,key,mid+1,end);  
    }  
}  
var arr = [0,13,21,35,46,52,68,77,89,94];  
search2(arr, 77); //7  
search2(arr, 99); //-1  
```  
  
# AST语法树是什么？  
 ## 概要  
  
下面将通过以下几个方面对AST进行介绍  
  
1. 为什么要了解AST，简要说明AST在开发中的重要性  
2. 什么是AST，对AST有一个直观的认识  
3. AST是如何生成的，分析将代码解析成AST的原理  
4. AST的具体应用，通过解读babel原理、vue模板编译过程，Prettier实现原理，来分析AST在开发中的具体使用。  
5. AST还能做什么，结合工作，思考AST能为我们做些什么  
  
## 为什么要学习AST  
  
AST（抽象语法树）在开发过程中扮演一个非常重要的角色，但是我们却很少去直接接触它。  
  
无论是代码编译（babel），打包（webpack），代码压缩，css预处理，代码校验（eslint），代码美化（pretiier），Vue中对template的编译，这些的实现都离不开AST。  
  
了解学习AST，能够帮助我们更好的对上面说的这些工具原理进行理解，同时，我们可以利用它去开发一些工具，来优化我们的开发流程，提高开发效率。  
  
## 什么是AST  
  
AST是对源代码的抽象语法结构的树状表现形式。  
  
在不同的场景下，会有不同的解析器将源码解析成抽象语法树。  
  
下面直观的看一下AST是什么样的  
  
代码  
  
```  
let answer = 2 * 3;  
  
```  
  
对应的AST语法树  
  
```  
{  
    "type": "Program",  
    "body": [  
        {  
            "type": "VariableDeclaration",  
            "declarations": [  
                {  
                    "type": "VariableDeclarator",  
                    "id": {  
                        "type": "Identifier",  
                        "name": "answer"  
                    },  
                    "init": {  
                        "type": "BinaryExpression",  
                        "operator": "*",  
                        "left": {  
                            "type": "Literal",  
                            "value": 2,  
                            "raw": "2"  
                        },  
                        "right": {  
                            "type": "Literal",  
                            "value": 3,  
                            "raw": "3"  
                        }  
                    }  
                }  
            ],  
            "kind": "let"  
        }  
    ],  
    "sourceType": "script"  
}  
  
```  
  
那么AST是如何生成的呢？  
  
## AST是如何生成的  
  
AST是通过JS Parser （解析器），将js源码转化为抽象语法树，主要分为两步  
  
### 1\. 分词  
  
将整个的代码字符串，分割成语法单元数组（token）。 JS中的语法单元（token）指标识符（function，return），运算符，括号，数字，字符串等能解析的最小单元。主要有以下几种：  
  
1. 标识符    
没有被引号括起来的连续字符，可以包含字母、数字、\_、$，其中数字不能作为开头。    
标识符可能是var，return，function等关键字，也可能是true，false这样的内置常量，或是一个变量。具体是哪种语义，分词阶段不区分，只要正确拆分即可。  
2. 数字 十六进制，十进制，八进制以及科学表达式等都是最小单元  
3. 运算符： +、-、 \*、/ 等  
4. 字符串 对计算机而言，字符串只会参与计算和展示，具体里面细分没必要分析  
5. 注释 不管是行注释还是块注释，对于计算机来说并不关心其内容，所以可以作为不可再拆分的最小单元  
6. 空格 连续的空格，换行，缩进等，只要不在字符串中都没有实际的逻辑意义，所以连续的空格可以作为一个语法单元。  
7. 其他，大括号，中括号，小括号，冒号 等等。  
  
依然拿上面的代码作为例子，分词后生成的语法单元数组如下  
  
```  
[  
    {  
        "type": "Keyword",  
        "value": "var",  
        "range": [  
            0,  
            3  
        ]  
    },  
    {  
        "type": "Identifier",  
        "value": "answer",  
        "range": [  
            4,  
            10  
        ]  
    },  
    {  
        "type": "Punctuator",  
        "value": "=",  
        "range": [  
            11,  
            12  
        ]  
    },  
    {  
        "type": "Numeric",  
        "value": "2",  
        "range": [  
            13,  
            14  
        ]  
    },  
    {  
        "type": "Punctuator",  
        "value": "*",  
        "range": [  
            15,  
            16  
        ]  
    },  
    {  
        "type": "Numeric",  
        "value": "3",  
        "range": [  
            17,  
            18  
        ]  
    },  
    {  
        "type": "Punctuator",  
        "value": ";",  
        "range": [  
            18,  
            19  
        ]  
    }  
]  
  
```  
  
### 2\. 语义分析  
  
语义分析的目的是将分词得到的语法单元进行一个整体的组合，分析确定语法单元之间的关系。  
  
简单来说，语义分析可以理解成对语句（statement）和表达式（expression）的识别。  
  
1. 语句，一个具备边界的代码区域。相邻的两个语句之间从语法上讲互不影响。比如： `var a = 1; if(xxx){xxx}`  
2. 表达式，指最终会有一个结果的一小段代码，它可以嵌入到另一个表达式中，且包含在表达式中。比如：`a++`， `i > 0 && i< 6`  
  
语义分析是一个递归的过程，它会将分词分析出来的数组转化成树形的表达形式。同时，会验证语法，语法如果存在错误的话，会抛出语法错误。  
  
## AST的具体应用  
  
文章一开始就说到了，babel，webpack，css预处理，eslint等都应用到了AST树，那么AST到底做了一个什么样的角色呢！？ 下面我们就来看一下。  
  
首先看一下babel工作原理的实现。  
  
### babel实现原理  
  
babel是一个javascript编译器，用来将es6语法编译成es5  
  
babel的工作可以分为3个阶段：  
  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/12/16efabb5dd074189~tplv-t2oaga2asx-image.image)  
  
第1步 解析（Parse）    
通过解析器babylon将代码解析成抽象语法树  
  
第2步 转换（TransForm）    
通过babel-traverse plugin对抽象语法树进行深度优先遍历，遇到需要转换的，就直接在AST对象上对节点进行添加、更新及移除操作，比如遇到箭头函数，就转换成普通函数，最后得到新的AST树。  
  
第3步 生成（Generate）    
通过babel-generator将AST树生成es5代码  
  
### vue模板编译过程  
  
Vue 提供了 2 个版本，一个是 Runtime + Compiler ，另一个是 Runtime only 的，前者是包含编译代码的，会把编译的过程放在运行时做，后者是不包含编译代码的，需要借助 webpack 的vue-loader把模板编译render函数。不管使用哪个版本，都有一个环节，就是将模板编译成render函数。  
  
下面我们分析下vue模板的编译过程，这也是vue源码实现中非常重要的一个模块。 vue模板的编译过程分为3个阶段  
  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/12/16efabbb717ce350~tplv-t2oaga2asx-image.image)  
  
第1步 解析（Parse）  
  
```  
const ast = parse(template.trim(), options)  
  
```  
  
将模板字符串解析生成 AST,这里的解析器是vue自己实现的，解析过程中会使用正则表达式对模板顺序解析，当解析到开始标签、闭合标签、文本的时候都会有相对应的回调函数执行，来达到构造 AST 树的目的。  
  
生成的AST 元素节点总共有 3 种类型，1 为普通元素， 2 为表达式，3为纯文本。下面看一个例子  
  
```  
<ul :class="bindCls" class="list" v-if="isShow">  
    <li v-for="(item,index) in data" @click="clickItem(index)">{{item}}:{{index}}</li>  
</ul>  
  
```  
  
上面模板解析生成的AST树如下：  
  
```  
ast = {  
  'type': 1,  
  'tag': 'ul',  
  'attrsList': [],  
  'attrsMap': {  
    ':class': 'bindCls',  
    'class': 'list',  
    'v-if': 'isShow'  
  },  
  'if': 'isShow',  
  'ifConditions': [{  
    'exp': 'isShow',  
    'block': // ul ast element  
  }],  
  'parent': undefined,  
  'plain': false,  
  'staticClass': 'list',  
  'classBinding': 'bindCls',  
  'children': [{  
    'type': 1,  
    'tag': 'li',  
    'attrsList': [{  
      'name': '@click',  
      'value': 'clickItem(index)'  
    }],  
    'attrsMap': {  
      '@click': 'clickItem(index)',  
      'v-for': '(item,index) in data'  
     },  
    'parent': // ul ast element  
    'plain': false,  
    'events': {  
      'click': {  
        'value': 'clickItem(index)'  
      }  
    },  
    'hasBindings': true,  
    'for': 'data',  
    'alias': 'item',  
    'iterator1': 'index',  
    'children': [  
      'type': 2,  
      'expression': '_s(item)+":"+_s(index)'  
      'text': '{{item}}:{{index}}',  
      'tokens': [  
        {'@binding':'item'},  
        ':',  
        {'@binding':'index'}  
      ]  
    ]  
  }]  
}  
  
```  
  
第2步 优化语法树（Optimize）  
  
```  
optimize(ast, options)  
  
```  
  
vue模板中并不是所有数据都是响应式的，有很多数据是首次渲染后就永远不会变化的，那么这部分数据生成的 DOM 也不会变化，我们可以在patch的过程跳过对他们的比对。    
此阶段会深度遍历生成的 AST树，检测它的每一颗子树是不是静态节点，如果是静态节点则它们生成 DOM 永远不需要改变，这对运行时对模板的更新起到极大的优化作用。  
  
遍历过程中，会对整个 AST 树中的每一个 AST 元素节点标记static和staticRoot（递归该节点的所有children，一旦子节点有不是static的情况，则为false，否则为true）。  
  
经过该阶段，上面例子中的ast会变成  
  
```  
ast = {  
  'type': 1,  
  'tag': 'ul',  
  'attrsList': [],  
  'attrsMap': {  
    ':class': 'bindCls',  
    'class': 'list',  
    'v-if': 'isShow'  
  },  
  'if': 'isShow',  
  'ifConditions': [{  
    'exp': 'isShow',  
    'block': // ul ast element  
  }],  
  'parent': undefined,  
  'plain': false,  
  'staticClass': 'list',  
  'classBinding': 'bindCls',  
  'static': false,  
  'staticRoot': false,  
  'children': [{  
    'type': 1,  
    'tag': 'li',  
    'attrsList': [{  
      'name': '@click',  
      'value': 'clickItem(index)'  
    }],  
    'attrsMap': {  
      '@click': 'clickItem(index)',  
      'v-for': '(item,index) in data'  
     },  
    'parent': // ul ast element  
    'plain': false,  
    'events': {  
      'click': {  
        'value': 'clickItem(index)'  
      }  
    },  
    'hasBindings': true,  
    'for': 'data',  
    'alias': 'item',  
    'iterator1': 'index',  
    'static': false,  
    'staticRoot': false,  
    'children': [  
      'type': 2,  
      'expression': '_s(item)+":"+_s(index)'  
      'text': '{{item}}:{{index}}',  
      'tokens': [  
        {'@binding':'item'},  
        ':',  
        {'@binding':'index'}  
      ],  
      'static': false  
    ]  
  }]  
}  
  
```  
  
第3步 生成代码  
  
```  
const code = generate(ast, options)  
  
```  
  
通过generate方法，将ast生成render函数  
  
```  
with(this){  
  return (isShow) ?  
    _c('ul', {  
        staticClass: "list",  
        class: bindCls  
      },  
      _l((data), function(item, index) {  
        return _c('li', {  
          on: {  
            "click": function($event) {  
              clickItem(index)  
            }  
          }  
        },  
        [_v(_s(item) + ":" + _s(index))])  
      })  
    ) : _e()  
}  
  
```  
  
### Prettier实现原理  
  
通过上面对babel实现原理和vue模板的编译原理可以看出，他们的实现有很多相同之处，都是先将源码解析成AST树，然后对AST树就行处理，最后生成想要的东西。  
  
Prettier的实现同样是这样，首先依然是将代码解析生成AST树，然后是对AST遍历，调整长句，整理空格，括号等，最后输出代码，这里就不赘述了。  
  
### 小结  
  
我们分析了Babel原理、vue模板编译过程、Prettier原理，这里我们简单总结一下。    
如果把源码比作一个机器，那么分词过程就是将这台机器拆分成一个个零件，语义分析过程就是分析每个零件的位置以及作用，然后根据需要对零件进行加工处理，最后再组装成一个新的机器。  
  
## AST还能做什么  
  
那么工作中我们能使用AST做些什么呢？！  
  
这里就要发挥想象了，看看我们日常工作中有什么需求是可以通过AST开发个工具来解决。    
比如，可以通过AST可以将代码自动转成流程图；    
或者根据自定义的注释规范，通过工具自动生成文档；    
或是通过工具自动生成骨架屏文件。  
# flexible.js实现移动端适配的原理是什么？  
> flexible.js 官方已不再维护，目前推行 vw 适配方案，本答案只是为了分析它的原理。  
  
flexible.js存在的目的，是为了让网页在各终端上的展示效果就像缩放设计稿图片一样，在不同屏幕上等比缩放，每一个元素与整体比例保持不变，真实还原设计稿。  
  
# 基本原理  
  
设页面宽度为P（单位px）  
  
设计稿宽度为750px  
  
设html基准值为X（单位px）  
  
----  
  
首先将页面分为100份，份的单位为F  
  
设1F的像素值为A（单位px/F）  
  
那么：  
  
P = 100F * A  
  
A = P/100F  
  
当P为750时，A=7.5px/F，即一份为7.5px  
  
有没有感觉这个A有点熟悉，没错它就是X，上面份的单位F其实就是rem。  
  
（html font-size的基准值单位虽然写为px，但其实是px/F，这点你知道就可以了）  
  
现在懂了吧。  
  
rem的原理就是份，我们根据设计稿得到元素的份，写到代码中的也是份，现在只要动态改变html的基准值，就能够在不同屏幕下适配，从而还原设计稿尺寸了。  
  
所以flexible.js的原理主要是：  
  
window.onresize = function() {  
	html.size = P/100 + 'px'  
}  
  
当然针对高清屏，它还会设置“viewport scale”，以缩放页面，解决类似高清屏下无法实现1px边框等问题。  
  
需要注意的是，基准值其实是个动态值，只是在写代码时，我们是按照设计稿宽度计算的基准值写的rem，即以设计稿为标准进行屏幕适配的（将设计稿用代码还原成UI界面），但在实际运行时，页面宽度是动态的，所以基准值也是动态的哦。  
  
  
# 源码解析  
  
flexible.js 的源码并不多，总共不到 50 行：  
  
```js  
// 首先是一个立即执行函数，执行时传入的参数是window和document  
(function flexible (window, document) {  
  var docEl = document.documentElement // 返回文档的root元素  
  var dpr = window.devicePixelRatio || 1   
  // 获取设备的dpr，即当前设置下物理像素与虚拟像素的比值  
  
  // 调整body标签的fontSize，fontSize = (12 * dpr) + 'px'  
  // 设置默认字体大小，默认的字体大小继承自body  
  function setBodyFontSize () {  
    if (document.body) {  
      document.body.style.fontSize = (12 * dpr) + 'px'  
    } else {  
      document.addEventListener('DOMContentLoaded', setBodyFontSize)  
    }  
  }  
  setBodyFontSize();  
  
  // set 1rem = viewWidth / 10  
  // 设置root元素的fontSize = 其clientWidth / 10 + ‘px’  
  function setRemUnit () {  
    var rem = docEl.clientWidth / 10  
    docEl.style.fontSize = rem + 'px'  
  }  
  
  setRemUnit()  
  
  // 当页面展示或重新设置大小的时候，触发重新  
  window.addEventListener('resize', setRemUnit)  
  window.addEventListener('pageshow', function (e) {  
    if (e.persisted) {  
      setRemUnit()  
    }  
  })  
  
  // 检测0.5px的支持，支持则root元素的class中有hairlines  
  if (dpr >= 2) {  
    var fakeBody = document.createElement('body')  
    var testElement = document.createElement('div')  
    testElement.style.border = '.5px solid transparent'  
    fakeBody.appendChild(testElement)  
    docEl.appendChild(fakeBody)  
    if (testElement.offsetHeight === 1) {  
      docEl.classList.add('hairlines')  
    }  
    docEl.removeChild(fakeBody)  
  }  
}(window, document))  
```  
  
  
  
# JavaScript中的 sort 方法是怎么实现的？  
本答案将介绍js中常用的几种排序算法，并结合v8中相关源码分析sort实现的策略  
  
## 常见排序算法  
首先温习下排序算法需要关注的两大要素  
  
### 时间复杂度  
描述该算法的运行时间，通常用`大O`描述，附上一张时间复杂度曲线图帮助理解  
  
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/911d36f5d6e345aba9cd29ccd7e8297b~tplv-k3u1fbpfcp-watermark.image)  
      
### 空间复杂度  
度量一个算法在运行过程中占用存储空间大小  
  
### 常见排序  
常见的[十大经典排序算法](https://gitee.com/webfrontup/javascript-algorithms)就不在这科普了，根据特性可将它们从不同角度进行分类  
  
- 是否基于比较：比较类排序和非比较类排序  
  
- 是否稳定：稳定类排序和不稳定类排序  
  
通常我们`从是否基于排序`的视角进行分类  
  
- 比较类排序  
  
  通过比较来决定元素间的相对次序，其时间复杂度不能突破` O(nlogn)`，因此也称为`非线性时间比较`类排序。  
- 非比较类排序  
  
  不通过比较来决定元素间的相对次序，它可以突破基于比较排序的时间下界，以`线性时间运行`，因此也称为`线性时间非比较`类排序。  
  
具体分类枚举可以结合下图理解  
  
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/38e8c91cb7184b9fbbee18013f20bc59~tplv-k3u1fbpfcp-watermark.image)  
  
接下来我们写下几个常见的经典排序  
  
#### 快速排序  
快速排序主要使用`递归分支`的思想，通过一趟排序，将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可以分别对这两部分记录继续进行排序，以达到整个序列有序。  
  
```js  
var a = [ 25, 76, 34, 232, 6, 456, 221];  
function quickSort(array) {  
  var quick = function(arr) {  
    if (arr.length <= 1) return arr  
    const index = Math.floor(len >> 1)  
    const pivot = arr.splice(index, 1)[0]  
    const left = []  
    const right = []  
    for (let i = 0; i < arr.length; i++) {  
      if (arr[i] > pivot) {  
        right.push(arr[i])  
      } else if (arr[i] <= pivot) {  
        left.push(arr[i])  
      }  
    }  
    return quick(left).concat([pivot], quick(right))  
  }  
  const result = quick(array)  
  return result  
  
}  
quickSort(a);//  [ 6, 25, 34, 76, 221, 232, 456]  
```  
  
#### 堆排序  
堆排序是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质，即子结点的键值或索引总是小于（或者大于）它的父节点。堆的底层实际上就是一棵`完全二叉树`，可以用数组实现。  
  
根节点最大的堆叫作`大根堆`，根节点最小的堆叫作`小根堆`，你可以根据从大到小排序或者从小到大来排序，分别建立对应的堆就可以。请看下面的代码。  
  
```js  
var a = [25, 76, 34, 232, 6, 456, 221];  
function heap_sort(arr) {  
  var len = arr.length  
  var k = 0  
  function swap(i, j) {  
    var temp = arr[i]  
    arr[i] = arr[j]  
    arr[j] = temp  
  }  
  
  function max_heapify(start, end) {  
    var dad = start  
    var son = dad * 2 + 1  
    if (son >= end) return  
    if (son + 1 < end && arr[son] < arr[son + 1]) {  
      son++  
    }  
    if (arr[dad] <= arr[son]) {  
      swap(dad, son)  
      max_heapify(son, end)  
    }  
  }  
  for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {  
    max_heapify(i, len)  
  }  
  
  for (var j = len - 1; j > k; j--) {  
    swap(0, j)  
    max_heapify(0, j)  
  }  
  return arr  
}  
  
heap_sort(a); // [6, 25, 34, 76, 221, 232, 456]  
```  
  
#### 归并排序  
归并排序是建立在`归并`操作上的一种有效的排序算法，该算法是采用`分治法`的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为`二路归并`。  
  
```js  
var a = [25, 76, 34, 232, 6, 456, 221];  
function mergeSort(array) {  
  const merge = (right, left) => {  
    const result = []  
    let il = 0  
    let ir = 0  
    while (il < left.length && ir < right.length) {  
      if (left[il] < right[ir]) {  
        result.push(left[il++])  
      } else {  
        result.push(right[ir++])  
      }  
    }  
    while (il < left.length) {  
      result.push(left[il++])  
    }  
    while (ir < right.length) {  
      result.push(right[ir++])  
    }  
    return result  
  }  
  const mergeSort = array => {  
    if (array.length === 1) { return array }  
    const mid = Math.floor(array.length / 2)  
    const left = array.slice(0, mid)  
    const right = array.slice(mid, array.length)  
    return merge(mergeSort(left), mergeSort(right))  
  }  
  return mergeSort(array)  
}  
mergeSort(a); // [6, 25, 34, 76, 221, 232, 456]  
  
```  
  
最后附上一张各排序算法统计对照表:  
  
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e017396d617e4507a6700c11d1249a5b~tplv-k3u1fbpfcp-watermark.image)  
  
  
## js中的sort方法  
  
### sort方法基本使用  
  
> arr.sort([compareFunction])  
  
如果不传入 compareFunction，则元素按照转换为字符串的各个字符的 `Unicode` 位点进行排序，有些同学经常在整数排序上犯错误，多半是因为遗漏了这一规则  
  
```js  
const names = ['tom', 'jesse', 'jack'];  
names.sort();  
  
console.log(names);  
// ["jack", "jesse", "tom"]  
  
const array1 = [1, 30, 4, 21, 100000];  
array1.sort();  
  
console.log(array1);  
// [1, 100000, 21, 30, 4]  
```  
如果指明了 compareFunction 参数 ，那么数组会按照调用该函数的`返回值排序`，即 a 和 b 是两个将要被比较的元素：  
- compareFunction（a, b）< 0，a 会被排列到 b 之前  
- compareFunction（a, b）=== 0，a 和 b 的相对位置不变  
- compareFunction（a, b）> 0，b 会被排列到 a 之前  
  
### sort源码分析  
查阅 [v8源码sort部分](https://github.com/v8/v8/blob/98d735069d0937f367852ed968a33210ceb527c2/src/js/array.js#L709) 我们可以发现，对于需要排序的元素个数n，具体排序策略有几下中情形：  
  
- 当 n<=10 时，采用`插入排序`；  
- 当 n>10 时，采用`三路快速排序`；  
- 10<n <=1000，采用中位数作为哨兵元素；  
- n>1000，每隔 200~215 个元素挑出一个元素，放到一个新数组中，然后对它排序，找到中间位置的数，以此作为中位数。  
  
乍一看结论你可能会纠结两个问题  
  
##### 1、为何元素较少的时候要用快排  
  
其实仔细分析一下不难究其原因。对于插排和快排，理论上的平均时间复杂度分别为O(n^2)和O(nlogn)，其中插排在最好情况下的时间复杂度是 O(n)。对比不难得出结论，当n足够小的时候，快排优势变小。事实上插排经优化后对于小数据集的排序性能可以超过快排。  
  
##### 2、为何要选择哨兵元素  
  
因为快速排序的性能瓶颈在于`递归的深度`，最坏的情况是每次的哨兵都是最小元素或者最大元素，那么进行 partition（一边是小于哨兵的元素，另一边是大于哨兵的元素）时，就会有一边是空的。如果这么排下去，递归的层数就达到了` n `, 而每一层的复杂度是` O(n)`，因此快排这时候会`退化`成` O(n^2) `级别。  
  
这种情况是要尽力避免的，那么如何来避免？就是让哨兵元素尽可能地处于数组的中间位置，让最大或者最小的情况尽可能少  
  
最后我们看下源码中的sort的基本结构  
  
```js  
function ArraySort(comparefn) {  
    CHECK_OBJECT_COERCIBLE(this,"Array.prototype.sort");  
    var array = TO_OBJECT(this);  
    var length = TO_LENGTH(array.length);  
    return InnerArraySort(array, length, comparefn);  
}  
function InnerArraySort(array, length, comparefn) {  
// 比较函数未传入  
if (!IS_CALLABLE(comparefn)) {  
      comparefn = function (x, y) {  
        if (x === y) return 0;  
        if (%_IsSmi(x) && %_IsSmi(y)) {  
          return %SmiLexicographicCompare(x, y);  
        }  
        x = TO_STRING(x);  
        y = TO_STRING(y);  
        if (x == y) return 0;  
        else return x < y ? -1 : 1;  
   };  
}  
function InsertionSort(a, from, to) {  
  // 插入排序  
  for (var i = from + 1; i < to; i++) {  
        var element = a[i];  
        for (var j = i - 1; j >= from; j--) {  
          var tmp = a[j];  
          var order = comparefn(tmp, element);  
          if (order > 0) {  
            a[j + 1] = tmp;  
          } else {  
            break;  
          }  
        }  
      a[j + 1] = element;  
   }  
}  
function GetThirdIndex(a, from, to) {   // 元素个数大于1000时寻找哨兵元素  
  var t_array = new InternalArray();  
  var increment = 200 + ((to - from) & 15);  
  var j = 0;  
  from += 1;  
  to -= 1;  
  for (var i = from; i < to; i += increment) {  
     t_array[j] = [i, a[i]];  
     j++;  
  }  
  t_array.sort(function(a, b) {  
     return comparefn(a[1], b[1]);  
  });  
  var third_index = t_array[t_array.length >> 1][0];  
  return third_index;  
}  
function QuickSort(a, from, to) {  // 快速排序实现  
      //哨兵位置  
      var third_index = 0;  
      while (true) {  
        if (to - from <= 10) {  
          InsertionSort(a, from, to); // 数据量小，使用插入排序，速度较快  
          return;  
        }  
        if (to - from > 1000) {  
          third_index = GetThirdIndex(a, from, to);  
        } else {  
          // 小于1000 直接取中点  
          third_index = from + ((to - from) >> 1);  
        }  
        // 下面开始快排  
        var v0 = a[from];  
        var v1 = a[to - 1];  
        var v2 = a[third_index];  
        var c01 = comparefn(v0, v1);  
        if (c01 > 0) {  
          var tmp = v0;  
          v0 = v1;  
          v1 = tmp;  
        }  
        var c02 = comparefn(v0, v2);  
        if (c02 >= 0) {  
          var tmp = v0;  
          v0 = v2;  
          v2 = v1;  
          v1 = tmp;  
        } else {  
          var c12 = comparefn(v1, v2);  
          if (c12 > 0) {  
            var tmp = v1;  
            v1 = v2;  
            v2 = tmp;  
          }  
        }  
        a[from] = v0;  
        a[to - 1] = v2;  
        var pivot = v1;  
        var low_end = from + 1;   
        var high_start = to - 1;  
        a[third_index] = a[low_end];  
        a[low_end] = pivot;  
        partition: for (var i = low_end + 1; i < high_start; i++) {  
          var element = a[i];  
          var order = comparefn(element, pivot);  
          if (order < 0) {  
            a[i] = a[low_end];  
            a[low_end] = element;  
            low_end++;  
          } else if (order > 0) {  
            do {  
              high_start--;  
              if (high_start == i) break partition;  
              var top_elem = a[high_start];  
              order = comparefn(top_elem, pivot);  
            } while (order > 0);  
            a[i] = a[high_start];  
            a[high_start] = element;  
            if (order < 0) {  
              element = a[i];  
              a[i] = a[low_end];  
              a[low_end] = element;  
              low_end++;  
            }  
          }  
        }  
        // 快排的核心思路，递归调用快速排序方法  
        if (to - high_start < low_end - from) {  
          QuickSort(a, high_start, to);  
          to = low_end;  
        } else {  
          QuickSort(a, from, low_end);  
          from = high_start;  
        }  
    }  
  }  
```  
  
  
  
  
  
  
  
  
  
  
# jquery的链式调用是怎么实现的？  
 我们都知道 jQuery 可以链式调用，比如：  
  
```js  
$("div").eq(0).css("width", "200px").show();  
```  
  
链式调用的核心就在于调用完的方法将自身实例返回。  
  
## 实现一个简单的链式调用  
  
```js  
// 定义一个对象  
class listFunc {  
 // 初始化  
  constructor(val) {  
    this.arr = [...val];  
    return this;  
  }  
  // 打印这个数组  
  get() {  
    console.log(this.arr);  
    return this;  
  }  
  // 向数组尾部添加数据  
  push(val) {  
    console.log(this.arr);  
    this.arr.push(val);  
    return this;  
  }  
  // 删除尾部数据  
  pop() {  
    console.log(this.arr);  
    this.arr.pop();  
    return this;  
  }  
}  
const list = new listFunc([1, 2, 3]);  
list.get().pop().push('ldq')  
```  
  
  
# 如何实现浏览器内多个标签页之间的通信？  
## Broadcast Channel  
  
顾名思义，“广播频道”，官方文档里的解释为“用于同源不同页面之间完成通信的功能”，在其中某个页面发送的消息会被其他页面监听到。  
  
注意“同源”二字，该方法无法完成跨域的数据传输。  
  
## localStorage  
  
localStorage是浏览器多个标签共用的存储空间，所以可以用来实现多标签之间的通信(ps：session是会话级的存储空间，每个标签页都是单独的）。  
  
## SharedWorker  
  
SharedWorker可以被多个window共同使用，但必须保证这些标签页都是同源的(相同的协议，主机和端口号)  
  
## WebSocket通讯  
  
全双工（full-duplex）通信自然可以实现多个标签之间的通信  
  
## 定时器setInterval+cookie  
  
* 在页面A设置一个使用setInterval定时器不断刷新，检查Cookies的值是否发生变化，如果变化就进行刷新的操作。  
* 由于Cookies是在同域可读的，所以在页面B审核的时候改变Cookies的值，页面A自然是可以拿到的。  
  
这样做确实可以实现我想要的功能，但是这样的方法相当浪费资源。虽然在这个性能过盛的时代，浪费不浪费也感觉不出来，但是这种实现方案，确实不够优雅。  
  
## postMessage  
  
两个需要交互的tab页面具有依赖关系。  
  
如 A页面中通过JavaScript的window.open打开B页面，或者B页面通过iframe嵌入至A页面，此种情形最简单，可以通过HTML5的 window.postMessage API完成通信，由于postMessage函数是绑定在 window 全局对象下，因此通信的页面中必须有一个页面（如A页面）可以获取另一个页面（如B页面）的window对象，这样才可以完成单向通信；B页面无需获取A页面的window对象，如果需要B页面对A页面的通信，只需要在B页面侦听message事件，获取事件中传递的source对象，该对象即为A页面window对象的引用：  
  
```js  
//B页面  
window.addEventListner('message',(e)=>{  
    let {data,source,origin} = e;  
    source.postMessage('message echo','/');  
});  
```  
  
postMessage的第一个参数为消息实体，它是一个结构化对象，即可以通过“JSON.stringify和JSON.parse”函数还原的对象；第二个参数为消息发送范围选择器，设置为“/”意味着只发送消息给同源的页面，设置为“*”则发送全部页面。  
  
  
  
  
# 我现在有一个canvas，上面随机布着一些黑块，请实现方法，计算canvas上有多少个黑块。  
这一题可以转化成图的联通分量问题。通过getImageData获得像素数组，从头到尾遍历一遍，就可以判断每个像素是否是黑色。同时，准备一个width * height大小的二维数组，这个数组的每个元素是1/0。如果是黑色，二维数组对应元素就置1；否则置0。  
  
然后问题就被转换成了图的连通分量问题。可以通过深度优先遍历或者并查集来实现。  
有 N 件物品和一个容量是 V 的背包。每件物品有且只有一件。  
  
第 i 件物品的体积是 v[i] ，价值是 w[i] 。  
  
求解将哪些物品装入背包，可使这些物品的总体积不超过背包容量，且总价值最大。  
  
示例 1：  
  
```  
输入: N = 3, V = 4, v = [4,2,3], w = [4,2,3]  
输出: 4  
解释: 只选第一件物品，可使价值最大。  
```  
  
示例 2：  
  
```  
输入: N = 3, V = 5, v = [4,2,3], w = [4,2,3]  
输出: 5  
解释: 不选第一件物品，选择第二件和第三件物品，可使价值最大。  
```  
# 背包问题  
这是最为基础的背包问题，每种物品只有一件，可以选择取或者不取。  
  
问题描述可以归结为：将N种物品有选择地放入容量为V的背包中，要求背包中的物品价值最大。  
  
尝试提炼其子问题：将i种物品有选择地放入容量为V的背包中，要求背包中的物品价值最大。  
  
那么由子问题转移到父问题的方程为：  
  
```  
f(i,V) = max{f(i-1,V), f(i-1,V-v[i]) + w[i]}  
```  
  
解释如下：“将前i件物品放入容量为V的背包中”这个子问题，若只考虑第i件物品的策略（放或者不放），那么就可以转化为一个只关系到前i-1件物品的问题。  
  
* 如果不放第i件物品，那么问题就转化为“前i-1件物品放入容量为v的背包中”；  
* 如果放第i件物品，那么问题就转化为“前i-1件物品放入剩下的容量为V-v[i]的背包中”，此时能获得的最大价值就是f(i-1, V-v[i])再加上通过放入第i件物品获得的价值w[i]。  
  
时间复杂度已经无法优化，我们可以尝试优化空间复杂度。  
  
观察状态转移方程，发现当前状态i只和前一个状态有关i-1，那么我们可以用滚动数组，逆序遍历的方式进行空间优化。  
  
```js]  
 function knapsack(weights, values, W){  
    var n = weights.length -1  
    var f = [[]]  
    for(var j = 0; j <= W; j++){  
        if(j < weights[0]){ //如果容量不能放下物品0的重量，那么价值为0  
           f[0][j] = 0  
        }else{ //否则等于物体0的价值  
           f[0][j] = values[0]  
        }  
    }  
    for(var j = 0; j <= W; j++){  
        for(var i = 1; i <= n; i++ ){  
            if(!f[i]){ //创建新一行  
                f[i] = []  
            }  
            if(j < weights[i]){ //等于之前的最优值  
                f[i][j] = f[i-1][j]  
            }else{  
                f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]] + values[i])   
            }  
        }  
    }  
    return f[n][W]  
}  
var a = knapsack([2,2,6,5,4],[6,3,5,4,6],10)  
console.log(a)  
```  
  
## 合并循环  
  
现在方法里面有两个大循环，它们可以合并成一个。  
  
```js  
function knapsack(weights, values, W){  
    var n = weights.length;  
    var f = new Array(n)  
    for(var i = 0 ; i < n; i++){  
        f[i] = []  
    }  
   for(var i = 0; i < n; i++ ){  
       for(var j = 0; j <= W; j++){  
            if(i === 0){ //第一行  
                f[i][j] = j < weights[i] ? 0 : values[i]  
            }else{  
                if(j < weights[i]){ //等于之前的最优值  
                    f[i][j] = f[i-1][j]  
                }else{  
                    f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]] + values[i])   
                }  
            }  
        }  
    }  
    return f[n-1][W]  
}  
```  
  
然后我们再认真地思考一下，为什么要孤零零地专门处理第一行呢？f[i][j] = j < weights[i] ? 0 : values[i]是不是能适用于下面这一行f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]] + values[i]) 。Math.max可以轻松转换为三元表达式，结构极其相似。而看一下i-1的边界问题，有的书与博客为了解决它，会添加第0行，全部都是0，然后i再往下挪。其实我们也可以添加一个${-1}$行。那么在我们的方程中就不用区分${i==0}$与${0>0}$的情况，方程与其他教科书的一模一样了！  
  
```js  
function knapsack(weights, values, W){  
    var n = weights.length;  
    var f = new Array(n)  
    f[-1] = new Array(W+1).fill(0)  
    for(var i = 0 ; i < n ; i++){ //注意边界，没有等号  
        f[i] = new Array(W).fill(0)  
        for(var j=0; j<=W; j++){//注意边界，有等号  
            if( j < weights[i] ){ //注意边界， 没有等号  
                f[i][j] = f[i-1][j]  
            }else{  
                f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]]+values[i]);//case 3  
            }  
        }  
    }  
    return f[n-1][W]  
}  
```  
  
## 选择物品  
  
上面讲解了如何求得最大价值，现在我们看到底选择了哪些物品，这个在现实中更有意义。许多书与博客很少提到这一点，就算给出的代码也不对，估计是在设计状态矩阵就出错了。  
  
仔细观察矩阵，从${f(n-1,W)}$逆着走向${f(0,0)}$，设i=n-1,j=W，如果${f(i,j)}$==${f(i-1,j-w_i)+v_i}$说明包里面有第i件物品，因此我们只要当前行不等于上一行的总价值，就能挑出第i件物品，然后j减去该物品的重量，一直找到j = 0就行了。  
  
```js  
function knapsack(weights, values, W){  
    var n = weights.length;  
    var f = new Array(n)  
    f[-1] = new Array(W+1).fill(0)  
    var selected = [];  
    for(var i = 0 ; i < n ; i++){ //注意边界，没有等号  
        f[i] = [] //创建当前的二维数组  
        for(var j=0; j<=W; j++){ //注意边界，有等号  
            if( j < weights[i] ){ //注意边界， 没有等号  
                f[i][j] = f[i-1][j]//case 1  
            }else{  
                f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]]+values[i]);//case 2  
            }  
        }  
    }  
    var j = W, w = 0  
    for(var i=n-1; i>=0; i--){  
         if(f[i][j] > f[i-1][j]){  
             selected.push(i)  
             console.log("物品",i,"其重量为", weights[i],"其价格为", values[i])  
             j = j - weights[i];  
             w +=  weights[i]  
         }  
     }  
    console.log("背包最大承重为",W," 现在重量为", w, " 总价值为", f[n-1][W])  
    return [f[n-1][W], selected.reverse() ]  
}  
var a = knapsack([2,3,4,1],[2,5,3, 2],5)  
console.log(a)  
var b = knapsack([2,2,6,5,4],[6,3,5,4,6],10)  
console.log(b)  
```  
  
## 使用滚动数组压缩空间  
  
所谓滚动数组，目的在于优化空间，因为目前我们是使用一个${i*j}$的二维数组来储存每一步的最优解。在求解的过程中，我们可以发现，当前状态只与前一行的状态有关，那么更之前存储的状态信息已经无用了，可以舍弃的，我们只需要存储当前状态和前一行状态，所以只需使用${2*j}$的空间，循环滚动使用，就可以达到跟${i*j}$一样的效果。这是一个非常大的空间优化。  
  
```js  
function knapsack(weights, values, W){  
    var n = weights.length  
    var lineA = new Array(W+1).fill(0)  
    var lineB = [], lastLine = 0, currLine   
    var f = [lineA, lineB]; //case1 在这里使用es6语法预填第一行  
    for(var i = 0; i < n; i++){   
        currLine = lastLine === 0 ? 1 : 0 //决定当前要覆写滚动数组的哪一行  
        for(var j=0; j<=W; j++){  
            f[currLine][j] = f[lastLine][j] //case2 等于另一行的同一列的值  
            if( j>= weights[i] ){                           
                var a = f[lastLine][j]  
                var b = f[lastLine][j-weights[i]] + values[i]  
                f[currLine][j] = Math.max(a, b);//case3  
            }  
             
        }  
        lastLine = currLine//交换行  
   }  
   return f[currLine][W];  
}  
  
var a = knapsack([2,3,4,1],[2,5,3, 2],5)  
console.log(a)  
var b = knapsack([2,2,6,5,4],[6,3,5,4,6],10)  
console.log(b)  
```  
  
注意，这种解法由于丢弃了之前N行的数据，因此很难解出挑选的物品，只能求最大价值。  
  
## 递归法解01背包  
  
```js  
function knapsack(n, W, weights, values, selected) {  
    if (n == 0 || W == 0) {  
        //当物品数量为0，或者背包容量为0时，最优解为0  
        return 0;  
    } else {  
        //从当前所剩物品的最后一个物品开始向前，逐个判断是否要添加到背包中  
        for (var i = n - 1; i >= 0; i--) {  
            //如果当前要判断的物品重量大于背包当前所剩的容量，那么就不选择这个物品  
            //在这种情况的最优解为f(n-1,C)  
            if (weights[i] > W) {  
                return knapsack(n - 1, W, weights, values, selected);  
            } else {  
                var a = knapsack(n - 1, W, weights, values, selected); //不选择物品i的情况下的最优解  
                var b = values[i] + knapsack(n - 1, W - weights[i], weights, values, selected); //选择物品i的情况下的最优解  
                //返回选择物品i和不选择物品i中最优解大的一个  
                if (a > b) {  
                    selected[i] = 0; //这种情况下表示物品i未被选取  
                    return a;  
                } else {  
                    selected[i] = 1; //物品i被选取  
                    return b;  
                }  
            }  
        }  
    }  
}          
var selected = [], ws = [2,2,6,5,4], vs = [6,3,5,4,6]  
var b = knapsack( 5, 10, ws, vs, selected)  
console.log(b) //15  
selected.forEach(function(el,i){  
    if(el){  
        console.log("选择了物品"+i+ " 其重量为"+ ws[i]+" 其价值为"+vs[i])  
    }  
})  
```  
  
  
  
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 **按任意顺序** 返回答案。  
  
示例 1：  
  
```  
输入：nums = [1,2,3]  
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]  
```  
  
示例 2：  
  
```  
输入：nums = [0,1]  
输出：[[0,1],[1,0]]  
```  
  
示例 3：  
```  
输入：nums = [1]  
输出：[[1]]  
```  
  
提示：  
  
* 1 <= nums.length <= 6  
* -10 <= nums[i] <= 10  
* nums 中的所有整数 互不相同  
  
```js  
/**  
 * @param {number[]} nums  
 * @return {number[][]}  
 */  
var permute = function(nums) {  
  
};  
```  
# 全排列  
## 回溯 + DFS 思想  
  
### 例子解析  
  
先用 (1, 2, 3) 进行举例：  
  
* 以 1 开头的全排列，它们是：[1, 2, 3], [1, 3, 2]，即 1 + [2, 3] 的全排列；  
* 以 2 开头的全排列，它们是：[2, 1, 3], [2, 3, 1]，即 2 + [1, 3] 的全排列；  
* 以 3 开头的全排列，它们是：[3, 1, 2], [3, 2, 1]，即 3 + [1, 2] 的全排列。  
  
### 思路解析  
  
* 按顺序枚举每一位可能出现的情况，已经选择的数字在 当前 要选择的数字中不能出现（设置一个 visited 数组）。  
  
* 这样的思路，可以用一个树形结构表示。而树上的每一个结点表示了求解全排列问题的不同的阶段，这些阶段通过变量的「不同的值」体现，这些变量的不同的值，称之为「状态」；  
  
* 使用深度优先遍历有「回头」的过程，在「回头」以后， 状态变量需要设置成为和先前一样 ，因此在回到上一层结点的过程中，需要撤销上一次的选择，这个操作称之为「状态重置」；  
  
使用编程的方法得到全排列，就是在这样的一个树形结构中完成 遍历，从树的根结点到叶子结点形成的路径就是其中一个全排列。  
  
### 要注意的地方  
  
* 要注意遍历到相应的结点的时候，状态变量的值是正确的，具体的做法是：往下走一层的时候，path 变量在尾部追加，而往回走的时候，需要撤销上一次的选择，也是在尾部操作，因此 path 变量是一个栈；  
* 深度优先遍历通过「回溯」操作，实现了全局使用一份状态变量的效果(因此，在每次遍历到叶子结点要将 path 数组拷贝到 result 返回数组，即 new 一个，或 [...push])  
  
### 代码解释  
  
* 首先这棵树除了根结点和叶子结点以外，每一个结点做的事情其实是一样的，即：在已经选择了一些数的前提下，在剩下的还没有选择的数中，依次选择一个数，这显然是一个 递归 结构；  
* 递归的终止条件是： 一个排列中的数字已经选够了 ，因此我们需要一个变量来表示当前程序递归到第几层，我们把这个变量叫做 depth。  
* 布尔数组 visited，初始化的时候都为 false 表示这些数还没有被选择，当我们选定一个数的时候，就将这个数组的相应位置设置为 true ，这样在进行下一层递归时，就能够以 O(1) 的时间复杂度判断这个数是否被选择过，这是一种「以空间换时间」的思想。  
* 这些变量称为「状态变量」，它们表示了在求解一个问题的时候所处的阶段。需要根据问题的场景设计合适的状态变量。  
  
```js  
/**  
 * @param {number[]} nums  
 * @return {number[][]}  
 */  
var permute = function(nums) {  
    let len = nums.length, result = [], visited = new Array(len).fill(false);  
  
    const dfs = (nums, len, depth, path, visited) => {  
        // 遍历到叶子结点了，可以返回了  
        if(depth === len) {  
            result.push([...path]);  
        }  
  
        for(let i = 0; i < len; i++) {  
            // 如果没遍历过  
            if(!visited[i]) {  
                // 压入 path 数组，然后是否遍历过的数组此下标处变为 true  
                path.push(nums[i]);  
                visited[i] = true;  
                // 继续 dfs，直到最后一层  
                dfs(nums, len, depth + 1, path, visited);  
                // 进行回溯，还原，以便下一次使用  
                visited[i] = false;  
                path.pop();  
            }  
        }  
    }  
  
    dfs(nums, len, 0, [], visited);  
    return result;  
};  
```  
# 写一个 repeat 方法，实现字符串的复制拼接  
实现的方法有很多，以下介绍几种。  
  
## 方法一  
  
空数组 join  
  
```js  
function repeat(target, n) {  
  return (new Array(n + 1)).join(target);  
}  
```  
  
## 方法二  
  
改良方法1，省去创建数组这一步，提高性能。之所以创建一个带 length 属性的对象，是因为要调用数组的原型方法，需要指定 call 第一个参数为类数组对象。  
  
```js  
function repeat(target, n) {  
  return Array.prototype.join.call({  
    length: n + 1  
  }, target);  
}  
```  
  
## 方法三  
  
改良方法 2，利用闭包缓存 join，避免重复创建对象、寻找方法。  
  
```js  
var repeat = (function () {  
  var join = Array.prototype.join, obj = {};  
  return function(target, n) {  
    obj.length = n + 1;  
    return join.call(obj, target);  
  };  
})();  
```  
  
## 方法四  
  
使用二分法，减少操作次数  
  
```js  
function repeat(target, n) {  
  var s = target, total = [];  
  while (n > 0) {  
    if (n % 2 === 1) {  
      total[total.length] = s;  
    }  
    if (n === 1) {  
      break;  
    }  
  
    s += s;  
    n = n >> 1; // Math.floor(n / 2);  
  }  
  return total.join('');  
}  
```  
  
## 方法五  
  
方法 4 的变种，免去创建数组与使用 join。缺点是循环中创建的字符串比要求的长。  
  
```js  
function repeat(target, n) {  
  var s = target, c = s.length * n;  
  do {  
    s += s;  
  } while (n = n >> 1)  
  s = s.substring(0, c);  
  return s;  
}  
```  
  
## 方法六  
  
方法 4 的改良。  
  
```js  
function repeat(target, n) {  
  var s = target, total = "";  
  while (n > 0) {  
    if (n % 2 === 1) {  
      total += s;  
    }  
    if (n === 1) {  
      break;  
    }  
    s += s;  
    n = n >> 1;  
  }  
  return total;  
}  
```  
  
  
## 方法七  
  
与 6 相近，不过递归在浏览器中有优化。  
  
```js  
function repeat(target, n) {  
  if (n === 1) {  
    return target;  
  }  
  var s = repeat(target, Math.floor(n / 2));  
  s += s;  
  if (n % 2) {  
    s += target;  
  }  
  return s;  
}  
```  
  
## 方法八  
  
一则反例，很慢，但是可行。  
  
```js  
function repeat(target, n) {  
  return (n <= 0) ? "" : target.concat(repeat(target, --n));  
}  
```  
  
最后给出 MDN 中的`String.prototype.repeat`的 polyfill 方法，大家也可以进行参考：  
  
```js  
if (!String.prototype.repeat) {  
  String.prototype.repeat = function(count) {  
    'use strict';  
    if (this == null)  
      throw new TypeError('can\'t convert ' + this + ' to object');  
  
    var str = '' + this;  
    // To convert string to integer.  
    count = +count;  
    // Check NaN  
    if (count != count)  
      count = 0;  
  
    if (count < 0)  
      throw new RangeError('repeat count must be non-negative');  
  
    if (count == Infinity)  
      throw new RangeError('repeat count must be less than infinity');  
  
    count = Math.floor(count);  
    if (str.length == 0 || count == 0)  
      return '';  
  
    // Ensuring count is a 31-bit integer allows us to heavily optimize the  
    // main part. But anyway, most current (August 2014) browsers can't handle  
    // strings 1 << 28 chars or longer, so:  
    if (str.length * count >= 1 << 28)  
      throw new RangeError('repeat count must not overflow maximum string size');  
  
    var maxCount = str.length * count;  
    count = Math.floor(Math.log(count) / Math.log(2));  
    while (count) {  
       str += str;  
       count--;  
    }  
    str += str.substring(0, maxCount - str.length);  
    return str;  
  }  
}  
```  
有8个图片资源的url，已经存储在数组urls中。  
  
urls类似于`['https://image1.png', 'https://image2.png', ....]`  
  
而且已经有一个函数`function loadImg`，输入一个url链接，返回一个Promise，该Promise在图片下载完成的时候resolve，下载失败则reject。  
  
但有一个要求，任何时刻同时下载的链接数量不可以超过3个。  
  
请写一段代码实现这个需求，要求尽可能快速地将所有图片下载完成。  
  
```js  
var urls = [  
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",  
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",  
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",  
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",  
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",  
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",  
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",  
  "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",  
];  
function loadImg(url) {  
  return new Promise((resolve, reject) => {  
    const img = new Image();  
    img.onload = function() {  
      console.log("一张图片加载完成");  
      resolve(img);  
    };  
    img.onerror = function() {  
    	reject(new Error('Could not load image at' + url));  
    };  
    img.src = url;  
  });  
```  
  
# 使用Promise实现：限制异步操作的并发个数，并尽可能快的完成全部  
既然题目的要求是保证每次并发请求的数量为3，那么我们可以先请求urls中的前面三个(下标为0,1,2)，并且请求的时候使用`Promise.race()`来同时请求，三个中有一个先完成了，我们就把这个当前数组中已经完成的那一项(第1项)换成还没有请求的那一项(urls中下标为3)。  
  
直到urls已经遍历完了，然后将最后三个没有完成的请求(也就是状态没有改变的Promise)用`Promise.all()`来加载它们。  
  
```js  
function limitLoad(urls, handler, limit) {  
  let sequence = [].concat(urls); // 复制urls  
  // 这一步是为了初始化 promises 这个"容器"  
  let promises = sequence.splice(0, limit).map((url, index) => {  
    return handler(url).then(() => {  
      // 返回下标是为了知道数组中是哪一项最先完成  
      return index;  
    });  
  });  
  // 注意这里要将整个变量过程返回，这样得到的就是一个Promise，可以在外面链式调用  
  return sequence  
    .reduce((pCollect, url) => {  
      return pCollect  
        .then(() => {  
          return Promise.race(promises); // 返回已经完成的下标  
        })  
        .then(fastestIndex => { // 获取到已经完成的下标  
        	// 将"容器"内已经完成的那一项替换  
          promises[fastestIndex] = handler(url).then(  
            () => {  
              return fastestIndex; // 要继续将这个下标返回，以便下一次变量  
            }  
          );  
        })  
        .catch(err => {  
          console.error(err);  
        });  
    }, Promise.resolve()) // 初始化传入  
    .then(() => { // 最后三个用.all来调用  
      return Promise.all(promises);  
    });  
}  
limitLoad(urls, loadImg, 3)  
  .then(res => {  
    console.log("图片全部加载完毕");  
    console.log(res);  
  })  
  .catch(err => {  
    console.error(err);  
  });  
  
```  
# 使用Promise封装一个异步加载图片的方法  
这个比较简单，只需要在图片的onload函数中，使用resolve返回一下就可以了。  
  
```js  
function loadImg(url) {  
  return new Promise((resolve, reject) => {  
    const img = new Image();  
    img.onload = function() {  
      resolve(img);  
    };  
    img.onerror = function() {  
    	reject(new Error('Could not load image at' + url));  
    };  
    img.src = url;  
  });  
  
```  
实现mergePromise函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。  
  
```js  
const time = (timer) => {  
  return new Promise(resolve => {  
    setTimeout(() => {  
      resolve()  
    }, timer)  
  })  
}  
const ajax1 = () => time(2000).then(() => {  
  console.log(1);  
  return 1  
})  
const ajax2 = () => time(1000).then(() => {  
  console.log(2);  
  return 2  
})  
const ajax3 = () => time(1000).then(() => {  
  console.log(3);  
  return 3  
})  
  
function mergePromise () {  
  // 在这里写代码  
}  
  
mergePromise([ajax1, ajax2, ajax3]).then(data => {  
  console.log("done");  
  console.log(data); // data 为 [1, 2, 3]  
});  
  
// 要求分别输出  
// 1  
// 2  
// 3  
// done  
// [1, 2, 3]  
  
```  
# 实现mergePromise函数  
这道题有点类似于Promise.all()，不过.all()不需要管执行顺序，只需要并发执行就行了。但是这里需要等上一个执行完毕之后才能执行下一个。  
  
解题思路：  
  
* 定义一个数组data用于保存所有异步操作的结果  
* 初始化一个`const promise = Promise.resolve()`，然后循环遍历数组，在promise后面添加执行ajax任务，同时要将添加的结果重新赋值到promise上。  
  
```js  
function mergePromise (ajaxArray) {  
  // 存放每个ajax的结果  
  const data = [];  
  let promise = Promise.resolve();  
  ajaxArray.forEach(ajax => {  
  	// 第一次的then为了用来调用ajax  
  	// 第二次的then是为了获取ajax的结果  
    promise = promise.then(ajax).then(res => {  
      data.push(res);  
      return data; // 把每次的结果返回  
    })  
  })  
  // 最后得到的promise它的值就是data  
  return promise;  
}  
```  
```js  
const p1 = new Promise((resolve) => {  
  setTimeout(() => {  
    resolve('resolve3');  
    console.log('timer1')  
  }, 0)  
  resolve('resovle1');  
  resolve('resolve2');  
}).then(res => {  
  console.log(res)  
  setTimeout(() => {  
    console.log(p1)  
  }, 1000)  
}).finally(res => {  
  console.log('finally', res)  
})  
  
```  
# 【Promise第40题】下面代码的输出是什么？  
## 解析  
  
* Promise的状态一旦改变就无法改变  
* finally不管Promise的状态是`resolved`还是`rejected`都会执行，且它的回调函数是接收不到Promise的结果的，所以finally()中的res是一个迷惑项。  
* 最后一个定时器打印出的p1其实是`.finally`的返回值，我们知道`.finally`的返回值如果在没有抛出错误的情况下默认会是上一个Promise的返回值，而这道题中`.finally`上一个Promise是`.then()`，但是这个`.then()`并没有返回值，所以p1打印出来的Promise的值会是`undefined`，如果你在定时器的下面加上一个`return 1`，则值就会变成1。  
  
## 结果  
```  
'resolve1'  
'finally' undefined  
'timer1'  
Promise{<resolved>: undefined}  
  
```  
```js  
const async1 = async () => {  
  console.log('async1');  
  setTimeout(() => {  
    console.log('timer1')  
  }, 2000)  
  await new Promise(resolve => {  
    console.log('promise1')  
  })  
  console.log('async1 end')  
  return 'async1 success'  
}   
console.log('script start');  
async1().then(res => console.log(res));  
console.log('script end');  
Promise.resolve(1)  
  .then(2)  
  .then(Promise.resolve(3))  
  .catch(4)  
  .then(res => console.log(res))  
setTimeout(() => {  
  console.log('timer2')  
}, 1000)  
  
```  
# 【Promise第39题】下面代码的输出是什么？  
## 解析  
  
需要注意的点：  
  
* async函数中await的`new Promise`要是没有返回值的话则不执行后面的内容  
* .then函数中的参数期待的是函数，如果不是函数的话会发生透传  
* 注意定时器的延迟时间  
  
## 结果  
  
```  
'script start'  
'async1'  
'promise1'  
'script end'  
1  
'timer2'  
'timer1'  
  
```  
```js  
const first = () => (new Promise((resolve, reject) => {  
    console.log(3);  
    let p = new Promise((resolve, reject) => {  
        console.log(7);  
        setTimeout(() => {  
            console.log(5);  
            resolve(6);  
            console.log(p)  
        }, 0)  
        resolve(1);  
    });  
    resolve(2);  
    p.then((arg) => {  
        console.log(arg);  
    });  
}));  
first().then((arg) => {  
    console.log(arg);  
});  
console.log(4);  
  
```  
# 【Promise第38题】下面代码的输出是什么？  
## 解析  
  
* 第一段代码定义的是一个函数，所以我们得看看它是在哪执行的，发现它在4之前，所以可以来看看first函数里面的内容了。  
* 函数first返回的是一个`new Promise()`，因此先执行里面的同步代码3  
* 接着又遇到了一个`new Promise()`，直接执行里面的同步代码7  
* 执行完7之后，在p中，遇到了一个定时器，先将它放到下一个宏任务队列里不管它，接着向下走  
* 碰到了`resolve(1)`，这里就把p的状态改为了resolved，且返回值为1，不过这里也先不执行  
* 跳出p，碰到了`resolve(2)`，这里的`resolve(2)`，表示的是把first函数返回的那个Promise的状态改了，也先不管它。  
* 然后碰到了`p.then`，将它加入本次循环的微任务列表，等待执行  
* 跳出first函数，遇到了`first().then()`，将它加入本次循环的微任务列表(p.then的后面执行)  
* 然后执行同步代码4  
* 本轮的同步代码全部执行完毕，查找微任务列表，发现`p.then`和`first().then()`，依次执行，打印出1和2  
* 本轮任务执行完毕了，发现还有一个定时器没有跑完，接着执行这个定时器里的内容，执行同步代码5  
* 然后又遇到了一个resolve(6)，它是放在p里的，但是p的状态在之前已经发生过改变了，因此这里就不会再改变，也就是说resolve(6)相当于没任何用处，因此打印出来的p为`Promise{<resolved>: 1}`。  
  
## 结果  
  
```  
3  
7  
4  
1  
2  
5  
Promise{<resolved>: 1}  
```  
```js  
async function async1 () {  
  try {  
    await Promise.reject('error!!!')  
  } catch(e) {  
    console.log(e)  
  }  
  console.log('async1');  
  return Promise.resolve('async1 success')  
}  
async1().then(res => console.log(res))  
console.log('script start')  
  
```  
# 【Promise第37题】下面代码的输出是什么？  
```  
'script start'  
'error!!!'  
'async1'  
'async1 success'  
  
```  
```js  
async function async1 () {  
  await async2();  
  console.log('async1');  
  return 'async1 success'  
}  
async function async2 () {  
  return new Promise((resolve, reject) => {  
    console.log('async2')  
    reject('error')  
  })  
}  
async1().then(res => console.log(res))  
```  
# 【Promise第36题】下面代码的输出是什么？  
```  
'async2'  
Uncaught (in promise) error  
```  
```js  
async function testSometing() {  
  console.log("执行testSometing");  
  return "testSometing";  
}  
  
async function testAsync() {  
  console.log("执行testAsync");  
  return Promise.resolve("hello async");  
}  
  
async function test() {  
  console.log("test start...");  
  const v1 = await testSometing();  
  console.log(v1);  
  const v2 = await testAsync();  
  console.log(v2);  
  console.log(v1, v2);  
}  
  
test();  
  
var promise = new Promise(resolve => {  
  console.log("promise start...");  
  resolve("promise");  
});  
promise.then(val => console.log(val));  
  
console.log("test end...");  
  
```  
# 【Promise第35题】下面代码的输出是什么？  
这儿直接给出答案：  
  
```  
'test start...'  
'执行testSometing'  
'promise start...'  
'test end...'  
'testSometing'  
'执行testAsync'  
'promise'  
'hello async'  
'testSometing' 'hello async'  
```  
```js  
async function async1() {  
  console.log("async1 start");  
  await async2();  
  console.log("async1 end");  
}  
  
async function async2() {  
  console.log("async2");  
}  
  
console.log("script start");  
  
setTimeout(function() {  
  console.log("setTimeout");  
}, 0);  
  
async1();  
  
new Promise(function(resolve) {  
  console.log("promise1");  
  resolve();  
}).then(function() {  
  console.log("promise2");  
});  
console.log('script end')  
  
```  
# 【Promise第34题】下面代码的输出是什么？  
经过前面的题目解析，相信这道题可以很容易得出结果。  
  
## 结果  
  
```  
'script start'  
'async1 start'  
'async2'  
'promise1'  
'script end'  
'async1 end'  
'promise2'  
'setTimeout'  
```  
```js  
async function async1 () {  
  console.log('async1 start');  
  await new Promise(resolve => {  
    console.log('promise1')  
    resolve('promise resolve')  
  })  
  console.log('async1 success');  
  return 'async1 end'  
}  
console.log('srcipt start')  
async1().then(res => {  
  console.log(res)  
})  
new Promise(resolve => {  
  console.log('promise2')  
  setTimeout(() => {  
    console.log('timer')  
  })  
})  
  
```  
# 【Promise第33题】下面代码的输出是什么？  
## 解析  
  
这道题也不难，不过有一点需要注意的，在async1中的`new Promise` resovle的值，和`async1().then()`里的值是没有关系的，很多小伙伴可能看到`resovle('promise resolve')`就会误以为是`async1().then()`中的返回值。  
  
## 结果  
  
```  
'script start'  
'async1 start'  
'promise1'  
'promise2'  
'async1 success'  
'async1 end'  
'timer'  
```  
```js  
async function async1 () {  
  console.log('async1 start');  
  await new Promise(resolve => {  
    console.log('promise1')  
  })  
  console.log('async1 success');  
  return 'async1 end'  
}  
console.log('srcipt start')  
async1().then(res => console.log(res))  
console.log('srcipt end')  
  
```  
# 【Promise第32题】下面代码的输出是什么？  
## 解析  
  
在async1中await后面的Promise是没有返回值的，也就是它的状态始终是pending状态，因此相当于一直在await，await，await却始终没有响应...  
  
所以在await之后的内容是不会执行的，也包括async1后面的 .then。  
  
## 结果  
  
```  
'script start'  
'async1 start'  
'promise1'  
'script end'  
```  
```js  
async function fn () {  
  // return await 1234  
  // 等同于  
  return 123  
}  
fn().then(res => console.log(res))  
```  
# 【Promise第31题】下面代码的输出是什么？  
## 解析  
  
正常情况下，async中的await命令是一个Promise对象，返回该对象的结果。  
  
但如果不是Promise对象的话，就会直接返回对应的值，相当于Promise.resolve()  
  
## 结果  
  
```  
123  
```  
```js  
async function async1() {  
  console.log("async1 start");  
  await async2();  
  console.log("async1 end");  
  setTimeout(() => {  
    console.log('timer1')  
  }, 0)  
}  
async function async2() {  
  setTimeout(() => {  
    console.log('timer2')  
  }, 0)  
  console.log("async2");  
}  
async1();  
setTimeout(() => {  
  console.log('timer3')  
}, 0)  
console.log("start")  
  
```  
# 【Promise第30题】下面代码的输出是什么？  
## 解析  
  
定时器谁先执行，你只需要关注谁先被调用的以及延迟时间是多少，这道题中延迟时间都是0，所以只要关注谁先被调用的。  
  
## 结果  
  
```  
'async1 start'  
'async2'  
'start'  
'async1 end'  
'timer2'  
'timer3'  
'timer1'  
```  
```js  
async function async1() {  
  console.log("async1 start");  
  await async2();  
  console.log("async1 end");  
}  
async function async2() {  
  setTimeout(() => {  
    console.log('timer')  
  }, 0)  
  console.log("async2");  
}  
async1();  
console.log("start")  
  
```  
# 【Promise第29题】下面代码的输出是什么？  
## 解析  
定时器始终还是最后执行的，它被放到下一条宏任务的延迟队列中。  
  
## 结果  
```  
'async1 start'  
'async2'  
'start'  
'async1 end'  
'timer'  
```  
```js  
async function async1() {  
  console.log("async1 start");  
  await async2();  
  console.log("async1 end");  
}  
async function async2() {  
  console.log("async2");  
}  
async1();  
console.log('start')  
```  
# 【Promise第28题】下面代码的输出是什么？  
## 解析  
  
* 首先一进来是创建了两个函数的，我们先不看函数的创建位置，而是看它的调用位置  
* 发现async1函数被调用了，然后去看看调用的内容  
* 执行函数中的同步代码async1 start，之后碰到了await，它会阻塞async1后面代码的执行，因此会先去执行async2中的同步代码async2，然后跳出async1  
* 跳出async1函数后，执行同步代码start  
* 在一轮宏任务全部执行完之后，再来执行刚刚await后面的内容async1 end。  
  
在这里，你可以理解为「紧跟着await后面的语句相当于放到了new Promise中，下一行及之后的语句相当于放在Promise.then中」。  
  
## 结果  
```  
'async1 start'  
'async2'  
'start'  
'async1 end'  
```  
  
```js  
  
function runAsync(x) {  
  const p = new Promise(r =>  
    setTimeout(() => r(x, console.log(x)), 1000)  
  );  
  return p;  
}  
function runReject(x) {  
  const p = new Promise((res, rej) =>  
    setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x)  
  );  
  return p;  
}  
Promise.race([runReject(0), runAsync(1), runAsync(2), runAsync(3)])  
  .then(res => console.log("result: ", res))  
  .catch(err => console.log(err));  
  
```  
# 【Promise第27题】下面代码的输出是什么？  
## 解析  
  
.race()的作用也是接收一组异步任务，然后并行执行异步任务，只保留取第一个执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃。  
  
## 结果  
  
```  
0  
'Error: 0'  
1  
2  
3  
```  
```js  
function runAsync (x) {  
  const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))  
  return p  
}  
function runReject (x) {  
  const p = new Promise((res, rej) => setTimeout(() => rej(`Error: ${x}`, console.log(x)), 1000 * x))  
  return p  
}  
Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])  
  .then(res => console.log(res))  
  .catch(err => console.log(err))  
  
```  
# 【Promise第26题】下面代码的输出是什么？  
## 解析  
  
.catch是会捕获最先的那个异常，在这道题目中最先的异常就是runReject(2)的结果。  
  
## 结果  
```  
// 1s后输出  
1  
3  
// 2s后输出  
2  
Error: 2  
// 4s后输出  
4  
```  
```js  
function runAsync (x) {  
    const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))  
    return p  
}  
Promise.all([runAsync(1), runAsync(2), runAsync(3)])  
  .then(res => console.log(res))  
```  
# 【Promise第25题】下面代码的输出是什么？  
## 解析  
  
.all()的作用是接收一组异步任务，然后并行执行异步任务，并且在所有异步操作执行完后才执行回调。  
  
## 答案  
  
```  
1  
2  
3  
[1, 2, 3]  
```  
  
```js  
function promise1 () {  
  let p = new Promise((resolve) => {  
    console.log('promise1');  
    resolve('1')  
  })  
  return p;  
}  
function promise2 () {  
  return new Promise((resolve, reject) => {  
    reject('error')  
  })  
}  
promise1()  
  .then(res => console.log(res))  
  .catch(err => console.log(err))  
  .finally(() => console.log('finally1'))  
  
promise2()  
  .then(res => console.log(res))  
  .catch(err => console.log(err))  
  .finally(() => console.log('finally2'))  
  
```  
# 【Promise第24题】下面代码的输出是什么？  
## 执行过程  
  
* 首先定义了两个函数`promise1`和`promise2`，先不管接着往下看。  
* `promise1`函数先被调用了，然后执行里面`new Promise`的同步代码打印出`promise1`  
* 之后遇到了`resolve(1)`，将`p`的状态改为了`resolved`并将结果保存下来。  
* 此时`promise1`内的函数内容已经执行完了，跳出该函数  
* 碰到了`promise1().then()`，由于`promise1`的状态已经发生了改变且为`resolved`。因此将·promise1().then()·这条微任务加入本轮的微任务列表(这是第一个微任务)  
* 这时候要注意了，代码并不会接着往链式调用的下面走，也就是不会先将`.finally`加入微任务列表，那是因为`.then`本身就是一个微任务，它链式后面的内容必须得等当前这个微任务执行完才会执行，因此这里我们先不管`.finally()`  
* 再往下走碰到了`promise2()`函数，其中返回的`new Promise`中并没有同步代码需要执行，所以执行`reject('error')`的时候将`promise2`函数中的`Promise`的状态变为了`rejected`  
* 跳出`promise2`函数，遇到了`promise2().catch()`，将其加入当前的微任务队列(这是第二个微任务)，且链式调用后面的内容得等该任务执行完后才执行，和`.then()`一样。  
* 本轮的宏任务全部执行完了，来看看微任务列表，存在`promise1().then()`，执行它，打印出1，然后遇到了`.finally()`这个微任务将它加入微任务列表(这是第三个微任务)等待执行  
* 再执行`promise2().catch()`打印出`error`，执行完后将`finally2`加入微任务加入微任务列表(这是第四个微任务)  
* 本轮又全部执行完了，但是微任务列表还有两个新的微任务没有执行完，因此依次执行`finally1`和`finally2`。  
  
## 结果  
  
```  
'promise1'  
'1'  
'error'  
'finally1'  
'finally2'  
```  
```js  
Promise.resolve('1')  
  .then(res => {  
    console.log(res)  
  })  
  .finally(() => {  
    console.log('finally')  
  })  
Promise.resolve('2')  
  .finally(() => {  
    console.log('finally2')  
  	return '我是finally2返回的值'  
  })  
  .then(res => {  
    console.log('finally2后面的then函数', res)  
  })  
  
```  
# 【Promise第23题】下面代码的输出是什么？  
## 解析  
  
.finally()，这个功能一般不太用在面试中，不过如果碰到了你也应该知道该如何处理。  
  
其实只要记住它三个很重要的知识点就可以了：  
  
* .finally()方法不管Promise对象最后的状态如何都会执行  
* .finally()方法的回调函数不接受任何的参数，也就是说你在.finally()函数中是没法知道Promise最终的状态是resolved还是rejected的  
* 它最终返回的默认会是一个上一次的Promise对象值，不过如果抛出的是一个异常则返回异常的Promise对象。  
  
上面的代码中，这两个Promise的.finally都会执行，且就算finally2返回了新的值，它后面的then()函数接收到的结果却还是'2'。  
  
## 结果  
```  
'1'  
'finally2'  
'finally'  
'finally2后面的then函数' '2'  
```  
```js  
Promise.resolve()  
  .then(function success (res) {  
    throw new Error('error!!!')  
  }, function fail1 (err) {  
    console.log('fail1', err)  
  }).catch(function fail2 (err) {  
    console.log('fail2', err)  
  })  
```  
# 【Promise第22题】下面代码的输出是什么？  
## 解析  
  
由于Promise调用的是resolve()，因此.then()执行的应该是success()函数，可是success()函数抛出的是一个错误，它会被后面的catch()给捕获到，而不是被fail1函数捕获。  
  
## 结果  
  
```  
fail2 Error: error!!!  
    at success  
```  
```js  
Promise.resolve(1)  
  .then(2)  
  .then(Promise.resolve(3))  
  .then(console.log)  
```  
# 【Promise第20题】下面代码的输出是什么？  
## 解析  
  
.then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。  
  
第一个then和第二个then中传入的都不是函数，一个是数字类型，一个是对象类型，因此发生了透传，将resolve(1) 的值直接传到最后一个then里。  
  
## 结果  
  
```  
1  
```  
```js  
const promise = Promise.resolve().then(() => {  
  return promise;  
})  
promise.catch(console.err)  
```  
# 【Promise第19题】下面代码的输出是什么？  
## 解析  
  
.then 或 .catch 返回的值不能是 promise 本身，否则会造成死循环，因此结果会报错。  
  
## 结果  
  
```  
Uncaught (in promise) TypeError: Chaining cycle detected for promise #<Promise>  
```  
  
```js  
Promise.resolve().then(() => {  
  return new Error('error!!!')  
}).then(res => {  
  console.log("then: ", res)  
}).catch(err => {  
  console.log("catch: ", err)  
})  
```  
# 【Promise第18题】下面代码的输出是什么？  
## 解析  
  
返回任意一个非 promise 的值都会被包裹成 promise 对象，因此这里的`return new Error('error!!!')`也被包裹成了`return Promise.resolve(new Error('error!!!'))`。  
  
## 结果  
```  
"then: " "Error: error!!!"  
```  
  
此题中，当然如果想抛出一个错误的话，可以用下面的任意一种：  
  
```js  
return Promise.reject(new Error('error!!!'));  
// or  
throw new Error('error!!!')  
```  
```js  
const promise = new Promise((resolve, reject) => {  
  setTimeout(() => {  
    console.log('timer')  
    resolve('success')  
  }, 1000)  
})  
const start = Date.now();  
promise.then(res => {  
  console.log(res, Date.now() - start)  
})  
promise.then(res => {  
  console.log(res, Date.now() - start)  
})  
  
```  
# 【Promise第17题】下面代码的输出是什么？  
## 解析  
  
如果执行足够快的话，也可能两个都是1001。  
  
Promise 的 .then 或者 .catch 可以被调用多次，但这里 Promise 构造函数只执行一次。或者说 promise 内部状态一经改变，并且有了一个值，那么后续每次调用 .then 或者 .catch 都会直接拿到该值。  
  
## 结果  
  
```  
'timer'  
'success' 1001  
'success' 1002  
```  
```js  
Promise.reject(1)  
  .then(res => {  
    console.log(res);  
    return 2;  
  })  
  .catch(err => {  
    console.log(err);  
    return 3  
  })  
  .then(res => {  
    console.log(res);  
  });  
```  
# 【Promise第16题】下面代码的输出是什么？  
## 解析  
  
因为reject(1)，此时走的是catch，且第二个then中的res得到的就是catch中的返回值。  
  
## 结果  
```  
1  
3  
```  
```js  
Promise.resolve(1)  
  .then(res => {  
    console.log(res);  
    return 2;  
  })  
  .catch(err => {  
    return 3;  
  })  
  .then(res => {  
    console.log(res);  
  });  
```  
# 【Promise第15题】下面代码的输出是什么？  
## 解析  
  
Promise可以链式调用，不过promise 每次调用 .then 或者 .catch 都会返回一个新的 promise，从而实现了链式调用, 它并不像一般我们任务的链式调用一样return this。  
  
上面的输出结果之所以依次打印出1和2，那是因为resolve(1)之后走的是第一个then方法，并没有走catch里，所以第二个then中的res得到的实际上是第一个then的返回值。  
  
且return 2会被包装成resolve(2)。  
  
## 结果  
```  
1  
2  
```  
```js  
const promise = new Promise((resolve, reject) => {  
  reject("error");  
  resolve("success2");  
});  
promise  
.then(res => {  
    console.log("then1: ", res);  
  }).then(res => {  
    console.log("then2: ", res);  
  }).catch(err => {  
    console.log("catch: ", err);  
  }).then(res => {  
    console.log("then3: ", res);  
  })  
```  
# 【Promise第14题】下面代码的输出是什么？  
## 解析  
catch不管被连接到哪里，都能捕获上层未捕捉过的错误。  
  
至于then3也会被执行，那是因为catch()也会返回一个Promise，且由于这个Promise没有返回值，所以打印出来的是undefined。  
  
## 结果  
```  
"catch: " "error"  
"then3: " undefined  
```  
```js  
const promise = new Promise((resolve, reject) => {  
  resolve("success1");  
  reject("error");  
  resolve("success2");  
});  
promise  
.then(res => {  
    console.log("then: ", res);  
  }).catch(err => {  
    console.log("catch: ", err);  
  })  
  
```  
# 【Promise第13题】下面代码的输出是什么？  
## 解析  
  
构造函数中的 resolve 或 reject 只有第一次执行有效，多次调用没有任何作用 ，Promise的状态一经改变就不能再改变。  
  
## 结果  
  
```  
"then: success1"  
```  
```js  
const promise1 = new Promise((resolve, reject) => {  
  setTimeout(() => {  
    resolve("success");  
    console.log("timer1");  
  }, 1000);  
  console.log("promise1里的内容");  
});  
const promise2 = promise1.then(() => {  
  throw new Error("error!!!");  
});  
console.log("promise1", promise1);  
console.log("promise2", promise2);  
setTimeout(() => {  
  console.log("timer2");  
  console.log("promise1", promise1);  
  console.log("promise2", promise2);  
}, 2000);  
```  
# 【Promise第12题】下面代码的输出是什么？  
和之前的题目比较类似，不做详细分析  
  
```  
'promise1里的内容'  
'promise1' Promise{<pending>}  
'promise2' Promise{<pending>}  
'timer1'  
test5.html:102 Uncaught (in promise) Error: error!!! at test.html:102  
'timer2'  
'promise1' Promise{<resolved>: "success"}  
'promise2' Promise{<rejected>: Error: error!!!}  
  
```  
```js  
const promise1 = new Promise((resolve, reject) => {  
  setTimeout(() => {  
    resolve('success')  
  }, 1000)  
})  
const promise2 = promise1.then(() => {  
  throw new Error('error!!!')  
})  
console.log('promise1', promise1)  
console.log('promise2', promise2)  
setTimeout(() => {  
  console.log('promise1', promise1)  
  console.log('promise2', promise2)  
}, 2000)  
```  
# 【Promise第11题】下面代码的输出是什么？  
## 过程分析  
  
* 从上至下，先执行第一个new Promise中的函数，碰到setTimeout将它加入下一个宏任务列表  
* 跳出new Promise，碰到promise1.then这个微任务，但其状态还是为pending，这里理解为先不执行  
* promise2是一个新的状态为pending的Promise  
* 执行同步代码console.log('promise1')，且打印出的promise1的状态为pending  
* 执行同步代码console.log('promise2')，且打印出的promise2的状态为pending  
* 碰到第二个定时器，将其放入下一个宏任务列表  
* 第一轮宏任务执行结束，并且没有微任务需要执行，因此执行第二轮宏任务  
* 先执行第一个定时器里的内容，将promise1的状态改为resolved且保存结果并将之前的promise1.then推入微任务队列  
* 该定时器中没有其它的同步代码可执行，因此执行本轮的微任务队列，也就是promise1.then，它抛出了一个错误，且将promise2的状态设置为了rejected  
* 第一个定时器执行完毕，开始执行第二个定时器中的内容  
* 打印出'promise1'，且此时promise1的状态为resolved  
* 打印出'promise2'，且此时promise2的状态为rejected  
  
## 结果  
  
```  
'promise1' Promise{<pending>}  
'promise2' Promise{<pending>}  
test5.html:102 Uncaught (in promise) Error: error!!! at test.html:102  
'promise1' Promise{<resolved>: "success"}  
'promise2' Promise{<rejected>: Error: error!!!}  
```  
```js  
Promise.resolve().then(() => {  
  console.log('promise1');  
  const timer2 = setTimeout(() => {  
    console.log('timer2')  
  }, 0)  
});  
const timer1 = setTimeout(() => {  
  console.log('timer1')  
  Promise.resolve().then(() => {  
    console.log('promise2')  
  })  
}, 0)  
console.log('start');  
  
```  
# 【Promise第10题】下面代码的输出是什么？  
## 过程分析  
  
* 刚开始整个脚本作为第一次宏任务来执行，我们将它标记为宏1，从上至下执行  
* 遇到Promise.resolve().then这个微任务，将then中的内容加入第一次的微任务队列标记为微1  
* 遇到定时器timer1，将它加入下一次宏任务的延迟列表，标记为宏2，等待执行(先不管里面是什么内容)  
* 执行宏1中的同步代码start  
* 第一次宏任务(宏1)执行完毕，检查第一次的微任务队列(微1)，发现有一个promise.then这个微任务需要执行  
* 执行打印出微1中同步代码promise1，然后发现定时器timer2，将它加入宏2的后面，标记为宏3  
* 第一次微任务队列(微1)执行完毕，执行第二次宏任务(宏2)，首先执行同步代码timer1  
* 然后遇到了promise2这个微任务，将它加入此次循环的微任务队列，标记为微2  
* 宏2中没有同步代码可执行了，查找本次循环的微任务队列(微2)，发现了promise2，执行它  
* 第二轮执行完毕，执行宏3，打印出timer2  
  
## 结果  
  
```  
'start'  
'promise1'  
'timer1'  
'promise2'  
'timer2'  
```  
代码一：  
```js  
setTimeout(() => {  
  console.log('timer1');  
  setTimeout(() => {  
    console.log('timer3')  
  }, 0)  
}, 0)  
setTimeout(() => {  
  console.log('timer2')  
}, 0)  
console.log('start')  
```  
  
代码二：  
```js  
setTimeout(() => {  
  console.log('timer1');  
  Promise.resolve().then(() => {  
    console.log('promise')  
  })  
}, 0)  
setTimeout(() => {  
  console.log('timer2')  
}, 0)  
console.log('start')  
```  
# 【Promise第九题】下面两段代码分别输出什么？  
代码一输出：  
```  
'start'  
'timer1'  
'timer2'  
'timer3'  
```  
  
代码二输出：  
```  
'start'  
'timer1'  
'promise'  
'timer2'  
```  
  
这两个例子，看着好像只是把第一个定时器中的内容换了一下而已。  
  
一个是为定时器timer3，一个是为Promise.then  
  
但是如果是定时器timer3的话，它会在timer2后执行，而Promise.then却是在timer2之前执行。  
  
你可以这样理解，Promise.then是微任务，它会被加入到本轮中的微任务列表，而定时器timer3是宏任务，它会被加入到下一轮的宏任务中。  
  
```js  
const promise = new Promise((resolve, reject) => {  
  console.log(1);  
  setTimeout(() => {  
    console.log("timerStart");  
    resolve("success");  
    console.log("timerEnd");  
  }, 0);  
  console.log(2);  
});  
promise.then((res) => {  
  console.log(res);  
});  
console.log(4);  
```  
# 【Promise第八题】下面代码的输出是什么？  
## 解析  
  
* 从上至下，先遇到new Promise，执行该构造函数中的代码1  
* 然后碰到了定时器，将这个定时器中的函数放到下一个宏任务的延迟队列中等待执行  
* 执行同步代码2  
* 跳出promise函数，遇到promise.then，但其状态还是为pending，这里理解为先不执行  
* 执行同步代码4  
* 一轮循环过后，进入第二次宏任务，发现延迟队列中有setTimeout定时器，执行它  
* 首先执行timerStart，然后遇到了resolve，将promise的状态改为resolved且保存结果并将之前的promise.then推入微任务队列  
* 继续执行同步代码timerEnd  
* 宏任务全部执行完毕，查找微任务队列，发现promise.then这个微任务，执行它。  
  
## 结果  
  
```  
1  
2  
4  
"timerStart"  
"timerEnd"  
"success"  
```  
  
  
```js  
console.log('start')  
setTimeout(() => {  
  console.log('time')  
})  
Promise.resolve().then(() => {  
  console.log('resolve')  
})  
console.log('end')  
```  
# 【Promise第七题】下面代码的输出是什么？  
## 解析  
  
* 刚开始整个脚本作为一个宏任务来执行，对于同步代码直接压入执行栈进行执行，因此先打印出start和end。  
* setTimout作为一个宏任务被放入宏任务队列(下一个)  
* Promise.then作为一个微任务被放入微任务队列  
* 本次宏任务执行完，检查微任务，发现Promise.then，执行它  
* 接下来进入下一个宏任务，发现setTimeout，执行。  
  
## 结果  
  
```  
'start'  
'end'  
'resolve'  
'time'  
```  
```js  
const fn = () =>  
  new Promise((resolve, reject) => {  
    console.log(1);  
    resolve("success");  
  });  
console.log("start");  
fn().then(res => {  
  console.log(res);  
});  
```  
# 【Promise第六题】下面代码的输出是什么？  
## 解析  
  
start就在1之前打印出来了，因为fn函数是之后执行的。  
  
注意：不要看到new Promise()，就以为执行它的第一个参数函数，我们还需要注意它是不是被包裹在函数当中，如果是的话，只有在函数调用的时候才会执行。  
  
## 答案  
  
```  
"start"  
1  
"success"  
```  
```js  
const promise = new Promise((resolve, reject) => {  
  console.log(1);  
  resolve('success')  
  console.log(2);  
});  
promise.then(() => {  
  console.log(3);  
});  
console.log(4);  
```  
# 【Promise第二题】下面代码的输出是什么？  
## 过程分析  
  
* 从上至下，先遇到`new Promise`，执行其中的同步代码1  
* 再遇到`resolve('success')`， 将promise的状态改为了resolved并且将值保存下来  
* 继续执行同步代码2  
* 跳出promise，往下执行，碰到`promise.then`这个微任务，将其加入微任务队列  
* 执行同步代码4  
* 本轮宏任务全部执行完毕，检查微任务队列，发现`promise.then`这个微任务且状态为resolved，执行它。  
  
## 结果  
  
```  
1 2 4 3  
```  
```js  
const fn = () => (new Promise((resolve, reject) => {  
  console.log(1);  
  resolve('success')  
}))  
fn().then(res => {  
  console.log(res)  
})  
console.log('start')  
```  
# 【Promise第五题】下面代码的输出是什么？  
## 分析  
  
fn函数直接返回了一个new Promise的，而且fn函数的调用是在start之前，所以它里面的内容应该会先执行。  
  
## 结果  
  
```  
1  
'start'  
'success'  
```  
```javascript  
const promise1 = new Promise((resolve, reject) => {  
  console.log('promise1')  
  resolve('resolve1')  
})  
const promise2 = promise1.then(res => {  
  console.log(res)  
})  
console.log('1', promise1);  
console.log('2', promise2);  
```  
# 【Promise第四题】下面代码的输出是什么？  
## 过程分析  
  
* 从上至下，先遇到new Promise，执行该构造函数中的代码promise1  
* 碰到resolve函数, 将promise1的状态改变为resolved, 并将结果保存下来  
* 碰到promise1.then这个微任务，将它放入微任务队列  
* promise2是一个新的状态为pending的Promise  
* 执行同步代码1， 同时打印出promise1的状态是resolved  
* 执行同步代码2，同时打印出promise2的状态是pending  
* 宏任务执行完毕，查找微任务队列，发现promise1.then这个微任务且状态为resolved，执行它。  
  
## 结果  
  
```  
'promise1'  
'1' Promise{<resolved>: 'resolve1'}  
'2' Promise{<pending>}  
'resolve1'  
```  
```js  
const promise = new Promise((resolve, reject) => {  
  console.log(1);  
  console.log(2);  
});  
promise.then(() => {  
  console.log(3);  
});  
console.log(4);  
  
```  
# 【Promise第三题】下面代码的输出是什么？  
## 过程分析  
  
* 和【Promise第二题】相似，只不过在promise中并没有resolve或者reject  
* 因此promise.then并不会执行，它只有在被改变了状态之后才会执行。  
  
## 结果：  
  
```  
1 2 4  
```  
```js  
const promise1 = new Promise((resolve, reject) => {  
  console.log('promise1')  
})  
console.log('1', promise1);  
```  
# 【Promise第一题】下面代码的输出是什么？  
## 过程分析：  
  
* 从上至下，先遇到new Promise，执行该构造函数中的代码promise1  
* 然后执行同步代码1，此时promise1没有被resolve或者reject，因此状态还是pending  
  
## 结果  
  
```  
'promise1'  
'1' Promise{<pending>}  
```  
# 说说你对以下几个页面生命周期事件的理解：DOMContentLoaded，load，beforeunload，unload  
HTML 页面的生命周期包含三个重要事件：  
  
* DOMContentLoaded —— 浏览器已完全加载 HTML，并构建了 DOM 树，但像 <img> 和样式表之类的外部资源可能尚未加载完成。  
* load —— 浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等。  
* beforeunload/unload —— 当用户正在离开页面时。  
  
每个事件都是有用的：  
  
* DOMContentLoaded 事件 —— DOM 已经就绪，因此处理程序可以查找 DOM 节点，并初始化接口。  
* load 事件 —— 外部资源已加载完成，样式已被应用，图片大小也已知了。  
* beforeunload 事件 —— 用户正在离开：我们可以检查用户是否保存了更改，并询问他是否真的要离开。  
* unload 事件 —— 用户几乎已经离开了，但是我们仍然可以启动一些操作，例如发送统计数据。  
  
## DOMContentLoaded 和脚本  
  
当浏览器处理一个 HTML 文档，并在文档中遇到 `<script>` 标签时，就会在继续构建 DOM 之前运行它。这是一种防范措施，因为脚本可能想要修改 DOM，甚至对其执行 document.write 操作，所以 DOMContentLoaded 必须等待脚本执行结束。  
  
因此，DOMContentLoaded 肯定在下面的这些脚本执行结束之后发生。  
  
此规则有两个例外：  
  
* 具有 async 特性（attribute）的脚本不会阻塞 DOMContentLoaded，稍后 我们会讲到。  
* 使用 document.createElement('script') 动态生成并添加到网页的脚本也不会阻塞 DOMContentLoaded。  
  
## DOMContentLoaded 和样式  
  
外部样式表不会影响 DOM，因此 DOMContentLoaded 不会等待它们。  
  
但这里有一个陷阱。如果在样式后面有一个脚本，那么该脚本必须等待样式表加载完成。原因是，脚本可能想要获取元素的坐标和其他与样式相关的属性。因此，它必须等待样式加载完成。  
  
当 DOMContentLoaded 等待脚本时，它现在也在等待脚本前面的样式。  
  
## 浏览器内建的自动填充  
  
Firefox，Chrome 和 Opera 都会在 DOMContentLoaded 中自动填充表单。  
  
例如，如果页面有一个带有登录名和密码的表单，并且浏览器记住了这些值，那么在 DOMContentLoaded 上，浏览器会尝试自动填充它们（如果得到了用户允许）。  
  
因此，如果 DOMContentLoaded 被需要加载很长时间的脚本延迟触发，那么自动填充也会等待。你可能在某些网站上看到过（如果你使用浏览器自动填充）—— 登录名/密码字段不会立即自动填充，而是在页面被完全加载前会延迟填充。这实际上是 DOMContentLoaded 事件之前的延迟。  
  
## window.onload  
  
当整个页面，包括样式、图片和其他资源被加载完成时，会触发 window 对象上的 load 事件。可以通过 onload 属性获取此事件。  
  
## window.onunload  
  
当访问者离开页面时，window 对象上的 unload 事件就会被触发。我们可以在那里做一些不涉及延迟的操作，例如关闭相关的弹出窗口。  
  
有一个值得注意的特殊情况是发送分析数据。  
  
假设我们收集有关页面使用情况的数据：鼠标点击，滚动，被查看的页面区域等。  
  
自然地，当用户要离开的时候，我们希望通过 unload 事件将数据保存到我们的服务器上。  
  
有一个特殊的 navigator.sendBeacon(url, data) 方法可以满足这种需求，详见规范 https://w3c.github.io/beacon/。  
  
它在后台发送数据，转换到另外一个页面不会有延迟：浏览器离开页面，但仍然在执行 sendBeacon。  
  
当 sendBeacon 请求完成时，浏览器可能已经离开了文档，所以就无法获取服务器响应（对于分析数据来说通常为空）。  
  
还有一个 keep-alive 标志，该标志用于在 fetch 方法中为通用的网络请求执行此类“离开页面后”的请求。你可以在 Fetch API 一章中找到更多相关信息。  
  
如果我们要取消跳转到另一页面的操作，在这里做不到。但是我们可以使用另一个事件 —— onbeforeunload。  
  
## window.onbeforeunload  
  
如果访问者触发了离开页面的导航（navigation）或试图关闭窗口，beforeunload 处理程序将要求进行更多确认。  
  
如果我们要取消事件，浏览器会询问用户是否确定。  
  
## 总结  
  
页面生命周期事件：  
  
* 当 DOM 准备就绪时，document 上的 DOMContentLoaded 事件就会被触发。在这个阶段，我们可以将 JavaScript 应用于元素。  
	* 诸如 `<script>...</script>` 或 `<script src="..."></script>` 之类的脚本会阻塞 DOMContentLoaded，浏览器将等待它们执行结束。  
	* 图片和其他资源仍然可以继续被加载。  
* 当页面和所有资源都加载完成时，window 上的 load 事件就会被触发。我们很少使用它，因为通常无需等待那么长时间。  
* 当用户想要离开页面时，window 上的 beforeunload 事件就会被触发。如果我们取消这个事件，浏览器就会询问我们是否真的要离开（例如，我们有未保存的更改）。  
* 当用户最终离开时，window 上的 unload 事件就会被触发。在处理程序中，我们只能执行不涉及延迟或询问用户的简单操作。正是由于这个限制，它很少被使用。我们可以使用 navigator.sendBeacon 来发送网络请求。  
  
  
  
# 使用js生成1-10000的数组  
实现的方法很多，除了使用循环（for,while,forEach等）外，最简单的是使用`Array.from`  
  
```js  
// 方法一  
Array.from(new Array(10001).keys()).slice(1)  
  
// 方法二  
Array.from({length:10000},(node,i)=> i+1)  
```  
# 怎么实现一个扫描二维码登录PC网站的需求？  
## 二维码登录本质  
  
二维码登录本质上也是一种登录认证方式。既然是登录认证，要做的也就两件事情：  
  
* 告诉系统我是谁  
* 向系统证明我是谁  
  
## 扫描二维码登录的一般步骤  
  
* 扫码前，手机端应用是已登录状态，PC端显示一个二维码，等待扫描  
* 手机端打开应用，扫描PC端的二维码，扫描后，会提示"已扫描，请在手机端点击确认"  
* 用户在手机端点击确认，确认后PC端登录就成功了  
  
## 具体流程  
  
### 生成二维码  
  
* PC端向服务端发起请求，告诉服务端，我要生成用户登录的二维码，并且把PC端设备信息也传递给服务端  
* 服务端收到请求后，它生成二维码ID，并将二维码ID与PC端设备信息进行绑定  
* 然后把二维码ID返回给PC端  
* PC端收到二维码ID后，生成二维码(二维码中肯定包含了ID)  
* 为了及时知道二维码的状态，客户端在展现二维码后，PC端不断的轮询服务端，比如每隔一秒就轮询一次，请求服务端告诉当前二维码的状态及相关信息，或者直接使用websocket，等待在服务端完成登录后进行通知  
  
### 扫描二维码  
  
* 用户用手机去扫描PC端的二维码，通过二维码内容取到其中的二维码ID  
* 再调用服务端API将移动端的身份信息与二维码ID一起发送给服务端  
* 服务端接收到后，它可以将身份信息与二维码ID进行绑定，生成临时token。然后返回给手机端  
* 因为PC端一直在轮询二维码状态，所以这时候二维码状态发生了改变，它就可以在界面上把二维码状态更新为已扫描  
  
### 状态确认  
  
* 手机端在接收到临时token后会弹出确认登录界面，用户点击确认时，手机端携带临时token用来调用服务端的接口，告诉服务端，我已经确认  
* 服务端收到确认后，根据二维码ID绑定的设备信息与账号信息，生成用户PC端登录的token  
* 这时候PC端的轮询接口，它就可以得知二维码的状态已经变成了"已确认"。并且从服务端可以获取到用户登录的token  
* 到这里，登录就成功了，后端PC端就可以用token去访问服务端的资源了  
  
# js中的undefined和 ReferenceError: xxx is not defined 有什么区别？  
* ReferenceError：当尝试引用一个未定义的变量/函数时，就会抛出ReferenceError。  
* undefined：当一个变量声明后，没有被赋值，那么它就是undefined类型。  
# Math.ceil()、Math.round()、Math.floor()三者的区别是什么？  
* Math.ceil()上取整  
* Math.round() 四舍五入  
* Math.floor()下取整  
  
# 解释下如下代码的意图：Array.prototype.slice.apply(arguments)  
arguments 为类数组对象，并不是真正的数组。  
  
slice可以实现数组的浅拷贝。  
  
由于 arguments不是真正的数组，所以没有slice方法，通过apply可以调用数组对象的slice方法，从而将arguments 类数组转换为数组。  
# 直接在script标签中写 export 为什么会报错？  
现代浏览器可以支持用 script 标签引入模块或者脚本，如果要引入模块，必须给 script 标签添加 type=“module”。如果引入脚本，则不需要 type。  
# js 中的倒计时，怎么实现纠正偏差？  
在前端实现中我们一般通过 setTimeout 和 setInterval 方法来实现一个倒计时效果。但是使用这些方法会存在时间偏差的问题，这是由于 js 的程序执行机制造成的，setTimeout 和 setInterval 的作用是隔一段时间将回调事件加入到事件队列中，因此事件并不是立即执行的，它会等到当前执行栈为空的时候再取出事件执行，因此事件等待执行的时间就是造成误差的原因。  
  
一般解决倒计时中的误差的有这样两种办法：  
  
（1）第一种是通过前端定时向服务器发送请求获取最新的时间差，以此来校准倒计时时间。  
  
（2）第二种方法是前端根据偏差时间来自动调整间隔时间的方式来实现的。这一种方式首先是以 setTimeout 递归的方式来实现倒计时，然后通过一个变量来记录已经倒计时的秒数。每一次函数调用的时候，首先将变量加一，然后根据这个变量和每次的间隔时间，我们就可以计算出此时无偏差时应该显示的时间。然后将当前的真实时间与这个时间相减，这样我们就可以得到时间的偏差大小，因此我们在设置下一个定时器的间隔大小的时候，我们就从间隔时间中减去这个偏差大小，以此来实现由于程序执行所造成的时间误差的纠正。  
# Math.ceil 和 Math.floor 有什么区别？  
Math.ceil() ： 向上取整，函数返回一个大于或等于给定数字的最小整数。  
  
Math.floor() ： 向下取整，函数返回一个小于或等于给定数字的最大整数。  
# 怎么使用 setTimeout 实现 setInterval？  
setInterval 的作用是每隔一段指定时间执行一个函数，但是这个执行不是真的到了时间立即执行，它真正的作用是每隔一段时间将事件加入事件队列中去，只有当当前的执行栈为空的时候，才能去从事件队列中取出事件执行。所以可能会出现这样的情况，就是当前执行栈执行的时间很长，导致事件队列里边积累多个定时器加入的事件，当执行栈结束的时候，这些事件会依次执行，因此就不能到间隔一段时间执行的效果。  
  
针对 setInterval 的这个缺点，我们可以使用 setTimeout 递归调用来模拟 setInterval，这样我们就确保了只有一个事件结束了，我们才会触发下一个定时器事件，这样解决了 setInterval 的问题。  
  
```js  
// 思路是使用递归函数，不断地去执行 setTimeout 从而达到 setInterval 的效果  
  
function mySetInterval(fn, timeout) {  
  // 控制器，控制定时器是否继续执行  
  var timer = {  
    flag: true  
  };  
  
  // 设置递归函数，模拟定时器执行。  
  function interval() {  
    if (timer.flag) {  
      fn();  
      setTimeout(interval, timeout);  
    }  
  }  
  
  // 启动定时器  
  setTimeout(interval, timeout);  
  
  // 返回控制器  
  return timer;  
}  
  
```  
# 怎么使用 js 实现拖拽功能？  
  
一个元素的拖拽过程，我们可以分为三个步骤:  
1. 第一步是鼠标按下目标元素  
2. 第二步是鼠标保持按下的状态移动鼠标  
3. 第三步是鼠标抬起，拖拽过程结束  
  
这三步分别对应了三个事件，mousedown 事件，mousemove 事件和 mouseup 事件。只有在鼠标按下的状态移动鼠标我们才会执行拖拽事件，因此我们需要在 mousedown 事件中设置一个状态来标识鼠标已经按下，然后在 mouseup 事件中再取消这个状态。在 mousedown 事件中我们首先应该判断，目标元素是否为拖拽元素，如果是拖拽元素，我们就设置状态并且保存这个时候鼠标的位置。然后在 mousemove 事件中，我们通过判断鼠标现在的位置和以前位置的相对移动，来确定拖拽元素在移动中的坐标。最后 mouseup 事件触发后，清除状态，结束拖拽事件。  
# mouseover 和 mouseenter 有什么区别？  
当鼠标移动到元素上时就会触发 mouseenter 事件，类似 mouseover，它们两者之间的差别是 mouseenter 不会冒泡。  
  
由于 mouseenter 不支持事件冒泡，导致在一个元素的子元素上进入或离开的时候会触发其 mouseover 和 mouseout 事件，但是却不会触发 mouseenter 和 mouseleave 事件。  
# Js 动画与 CSS 动画区别及相应实现  
* CSS3 的动画的优点  
	* 在性能上会稍微好一些，浏览器会对 CSS3 的动画做一些优化  
	* 代码相对简单  
* 缺点  
	* 在动画控制上不够灵活  
	* 兼容性不好  
  
JavaScript 的动画正好弥补了这两个缺点，控制能力很强，可以单帧的控制、变换，同时写得好完全可以兼容 IE6，并且功能强大。对于一些复杂控制的动画，使用 javascript 会比较靠谱。而在实现一些小的交互动效的时候，就多考虑考虑 CSS 吧  
# 异步编程有哪些实现方式？  
js 中的异步机制可以分为以下几种：  
  
第一种最常见的是使用回调函数的方式，使用回调函数的方式有一个缺点是，多个回调函数嵌套的时候会造成回调函数地狱，上下两层的回调函数间的代码耦合度太高，不利于代码的可维护。  
  
第二种是 Promise 的方式，使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确。  
  
第三种是使用 generator 的方式，它可以在函数的执行过程中，将函数的执行权转移出去，在函数外部我们还可以将执行权转移回来。当我们遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕的时候我们再将执行权给转移回来。因此我们在 generator 内部对于异步操作的方式，可以以同步的顺序来书写。使用这种方式我们需要考虑的问题是何时将函数的控制权转移回来，因此我们需要有一个自动执行 generator 的机制，比如说 co 模块等方式来实现 generator 的自动执行。  
  
第四种是使用 async 函数的形式，async 函数是 generator 和 promise 实现的一个自动执行的语法糖，它内部自带执行器，当函数内部执行到一个 await 语句的时候，如果语句返回一个 promise 对象，那么函数将会等待 promise 对象的状态变为 resolve 后再继续向下执行。因此我们可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行。  
# offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别？  
clientWidth/clientHeight 返回的是元素的内部宽度，它的值只包含 content + padding，如果有滚动条，不包含滚动条。  
  
clientTop 返回的是上边框的宽度。  
  
clientLeft 返回的左边框的宽度。  
  
offsetWidth/offsetHeight 返回的是元素的布局宽度，它的值包含 content + padding + border 包含了滚动条。  
  
offsetTop 返回的是当前元素相对于其 offsetParent 元素的顶部的距离。  
  
offsetLeft 返回的是当前元素相对于其 offsetParent 元素的左部的距离。  
  
scrollWidth/scrollHeight 返回值包含 content + padding + 溢出内容的尺寸。  
  
scrollTop 属性返回的是一个元素的内容垂直滚动的像素数。  
  
scrollLeft 属性返回的是元素滚动条到元素左边的距离。  
# toPrecision 和 toFixed 和 Math.round 有什么区别？  
* toPrecision 用于处理精度，精度是从左至右第一个不为 0 的数开始数起。  
* toFixed 是对小数点后指定位数取整，从小数点开始数起。  
* Math.round 是将一个数字四舍五入到一个整数。  
# 什么是 Polyfill ？  
Polyfill 指的是用于实现浏览器并不支持的原生 API 的代码。  
  
比如说 `querySelectorAll` 是很多现代浏览器都支持的原生 Web API，但是有些古老的浏览器并不支持，那么假设有人写了一段代码来实现这个功能使这些浏览器也支持了这个功能，那么这就可以成为一个 Polyfill。  
# 怎么检测浏览器版本？  
检测浏览器版本一共有两种方式：  
  
一种是检测 `window.navigator.userAgent` 的值，但这种方式很不可靠，因为 `userAgent` 可以被改写，并且早期的浏览器如 ie，会通过伪装自己的 userAgent 的值为 Mozilla 来躲过服务器的检测。  
  
第二种方式是功能检测，根据每个浏览器独有的特性来进行判断，如 ie 下独有的 `ActiveXObject`。  
# 什么是“前端路由”？什么时候适合使用“前端路由”？“前端路由”有哪些优点和缺点？  
## 什么是前端路由？  
  
前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务端根据 url 的不同返回不同的页面实现的。  
  
## 什么时候使用前端路由？  
  
在单页面应用，大部分页面结构不变，只改变部分内容的使用  
  
## 前端路由有什么优点和缺点？  
  
优点：用户体验好，不需要每次都从服务器全部获取，快速展现给用户  
  
缺点：单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置  
  
## 实现方式  
  
前端路由一共有两种实现方式，一种是通过 **hash** 的方式，一种是通过使用 **pushState** 的方式。  
# 什么是点击穿透，怎么解决？  
在发生触摸动作约300ms之后，移动端会模拟产生click动作，它底下的具有点击特性的元素也会被触发，这种现象称为点击穿透。  
  
**常见场景**  
  
1. 情景一：蒙层点击穿透问题，点击蒙层（mask）上的关闭按钮，蒙层消失后发现触发了按钮下面元素的click事件。  
2. 情景二：跨页面点击穿透问题：如果按钮下面恰好是一个有href属性的a标签，那么页面就会发生跳转。  
3. 情景三：另一种跨页面点击穿透问题：这次没有mask了，直接点击页内按钮跳转至新页，然后发现新页面中对应位置元素的click事件被触发了。  
4. 情景四：不过概率很低，就是新页面中对应位置元素恰好是a标签，然后就发生连续跳转了。  
  
**发生的条件**  
* 上层元素监听了触摸事件，触摸之后该层元素消失  
* 下层元素具有点击特性（监听了click事件或默认的特性（a标签、input、button标签））  
  
**解决点击穿透的方法**  
1. 方法一：书写规范问题，不要混用touch和click。既然touch之后300ms会触发click，只用touch或者只用click就自然不会存在问题了。  
2. 方法二：吃掉（或者说是消费掉）touch之后的click，依旧用tap，只是在可能发生点击穿透的情形做额外的处理，拿个东西来挡住、或者tap后延迟350毫秒再隐藏mask、pointer-events、在下面元素的事件处理器里做检测（配合全局flag）等。  
  
  
  
  
# 移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？  
移动端点击有 300ms 的延迟是因为移动端会有双击缩放的这个操作，因此浏览器在 click 之后要等待 300ms，看用户有没有下一次点击，来判断这次操作是不是双击。  
  
有三种办法来解决这个问题：  
  
* 通过 meta 标签禁用网页的缩放。  
* 通过 meta 标签将网页的 viewport 设置为 ideal viewport。  
* 调用一些 js 库，比如 FastClick  
  
click 延时问题还可能引起点击穿透的问题，就是如果我们在一个元素上注册了 touchStart 的监听事件，这个事件会将这个元素隐藏掉，我们发现当这个元素隐藏后，触发了这个元素下的一个元素的点击事件，这就是点击穿透。  
# 如何判断当前脚本运行在浏览器还是 node 环境中？  
```js  
this === window ? 'browser' : 'node';  
```  
  
通过判断 Global 对象是否为 window，如果不为 window，当前脚本没有运行在浏览器中。  
# setTimeout 为什么不能保证能够及时执行？  
![image.png](https://i.loli.net/2021/11/17/tJw8inv6lC52YQc.png)  
  
> 主线程从任务队列中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop。  
  
setTimeout 并不能保证执行的时间，是否及时执行取决于 JavaScript 线程是拥挤还是空闲。  
  
浏览器的JS引擎遇到setTimeout，拿走之后不会立即放入异步队列，同步任务执行之后，timer模块会到设置时间之后放到异步队列中。js引擎发现同步队列中没有要执行的东西了，即运行栈空了就从异步队列中读取，然后放到运行栈中执行。所以setTimeout可能会多了等待线程的时间。  
  
这时setTimeout函数体就变成了运行栈中的执行任务，运行栈空了，再监听异步队列中有没有要执行的任务，如果有就继续执行，如此循环，就叫Event Loop。  
# ['10', '10', '10', '10', '10'].map(parseInt)  
## parseInt  
  
`parseInt()` 函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。  
  
> const intValue = parseInt(string[, radix]);  
  
* `string` 要被解析的值。如果参数不是一个字符串，则将其转换为字符串(使用 ToString 抽象操作)。字符串开头的空白符将会被忽略。  
  
* `radix` 一个介于2和36之间的整数(数学系统的基础)，表示上述字符串的基数。默认为10。  
  
* `返回值` 返回一个整数或NaN  
  
## map   
  
`map()` 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。  
  
```js  
var new_array = arr.map(function callback(currentValue[,index[, array]]) {  
 // Return element for new_array  
 }[, thisArg])  
```  
  
可以看到callback回调函数需要三个参数, 我们通常只使用第一个参数 (其他两个参数是可选的)。  
  
* currentValue 是callback 数组中正在处理的当前元素。  
* index可选, 是callback 数组中正在处理的当前元素的索引。  
* array可选, 是callback map 方法被调用的数组。  
* 另外还有thisArg可选, 执行 callback 函数时使用的this 值  
  
```js  
const arr = [1, 2, 3];  
arr.map((num) => num + 1); // [2, 3, 4]  
```  
  
## 题目分析  
  
回到真实的事例上：  
```js  
['1', '2', '3'].map(parseInt)  
```  
  
对于每个迭代map, parseInt()传递两个参数: 字符串和基数。  
  
所以实际执行的的代码是：  
  
```js  
['1', '2', '3'].map((item, index) => {  
    return parseInt(item, index)  
})  
```  
  
即返回的值分别为：  
  
```js  
parseInt('1', 0) // 1  
parseInt('2', 1) // NaN  
parseInt('3', 2) // NaN, 3 不是二进制  
```  
  
所以：  
  
```js  
['1', '2', '3'].map(parseInt)  
// 1, NaN, NaN  
```  
  
再回到我们的题目，很明显答案应该是：  
  
```js  
['10','10','10','10','10'].map(parseInt);  
// [10, NaN, 2, 3, 4]  
```  
  
  
  
# JavaScript中的错误有哪几种类型？  
## JavaScript中的错误类型  
  
* Error  
* EvalError  
* RangeError  
* ReferenceError  
* SyntaxError  
* TypeError  
* URIError  
  
### Error  
  
`Error`是最基本的错误类型，其他的错误类型都继承自该类型。因此，所有错误的类型共享了一组相同的属性。 这个类型的错误很少见。一般使用开发人员自定义抛出的错误。  
  
### EvalError  
  
这个错误会在使用`eval()`函数发生异常时候抛出。两种情况会出错：  
  
```js  
new eval();  
eval = foo;  
```  
  
上面两个的意思结合就是没有直接调用`eval`函数，而是`new`或者是重新赋值  
这个错误基本上不会遇到，因为`eval`函数本来用的就不多。不过需要注意的是，`eval`是一个关键字。  
  
### RangeError  
  
这个错误会在数值超出相应范围时触发。比如使用`new Array()`的时候传递一个负数或者是超过数组最大长度（4,294,967,295）的数，比如Number.MAX_VALUE，Number.MIN_VALUE。注意递归爆炸也有这个错误。  
  
### ReferenceError  
  
这个错误一般就是出现在变量找不到的情况，比如：  
```js  
var a = b;  
Uncaught ReferenceError: b is not defined  
```  
  
这时候就需要检查一下一个变量了  
  
### SyntaxError  
  
当Javascript语言解析代码时,Javascript引擎发现了不符合语法规范的tokens或token顺序时抛出SyntaxError。  
  
### TypeError  
  
这个错误在JavaScript中是经常遇到的，不管是初学者还是老手。在变量中保存着以外的类型时，或者在访问不存在的方法时。都会导致这种错误。但是归根结底还是由于在执行特定于类型的操作时，变量的类型并不符合要求所致。比如：  
```  
var o = new 10;  
a.style.widht = "10px";  
```  
  
关于设置样式这个东西，新手会遇到很多，一般这都是由获取不到元素导致的。  
  
### URIError  
  
在使用encodeURI或者decodeURI因为URL格式不正确时，就会导致URIError错误。这种错误也很少见。  
  
  
# 什么是“事件代理”  
事件代理（Event Delegation）也称之为事件委托。是JavaScript中常用绑定事件的常用技巧。  
  
顾名思义，“事件代理”即是把原本需要绑定在子元素的响应事件委托给父元素，让父元素担当事件监听的职务。  
  
事件代理的原理是DOM元素的**事件冒泡**。  
  
一个事件触发后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。  
  
* 捕获阶段：从window对象传导到目标节点（上层传到底层）称为“捕获阶段”（capture phase），捕获阶段不会响应任何事件；  
* 目标阶段：在目标节点上触发，称为“目标阶段”  
* 冒泡阶段：从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层。  
  
## 事件委托的优点：  
  
* 可以大量节省内存占用，减少事件注册。  
  
比如在ul上代理所有li的click事件就非常棒  
  
```html  
<ul id="list">  
  <li>item 1</li>  
  <li>item 2</li>  
  <li>item 3</li>  
  ......  
  <li>item n</li>  
</ul>  
```  
  
如上面代码所示，如果给每个li列表项都绑定一个函数，那对内存的消耗是非常大的，因此较好的解决办法就是将li元素的点击事件绑定到它的父元素ul身上，执行事件的时候再去匹配判断目标元素。  
  
* 可以实现当新增子对象时无需再次对其绑定（动态绑定事件）  
  
假设上述的例子中列表项li就几个，我们给每个列表项都绑定了事件；  
  
在很多时候，我们需要通过 AJAX 或者用户操作动态的增加或者删除列表项li元素，那么在每一次改变的时候都需要重新给新增的元素绑定事件，给即将删去的元素解绑事件；  
  
如果用了事件委托就没有这种麻烦了，因为事件是绑定在父层的，和目标元素的增减是没有关系的，执行到目标元素是在真正响应执行事件函数的过程中去匹配的；所以使用事件在动态绑定事件的情况下是可以减少很多重复工作的。  
  
使用事件委托注意事项：使用“事件委托”时，并不是说把事件委托给的元素越靠近顶层就越好。事件冒泡的过程也需要耗时，越靠近顶层，事件的”事件传播链”越长，也就越耗时。如果DOM嵌套结构很深，事件冒泡通过大量祖先元素会导致性能损失。  
  
  
  
  
# Promise.all 和 Promise.allSettled 有什么区别？  
一句话概括`Promise.allSettled`和`Promise.all`的最大不同：`Promise.allSettled`永远不会被**reject**。  
  
## Promise.all的痛点  
  
当需要处理多个Promise并行时，大多数情况下Promise.all用起来是非常顺手的，比如下面这样  
  
```js  
const delay = n => new Promise(resolve => setTimeout(resolve, n));  
  
const promises = [  
  delay(100).then(() => 1),  
  delay(200).then(() => 2),  
  ]  
  
Promise.all(promises).then(values=>console.log(values))  
// 最终输出： [1, 2]  
```  
  
可是，是一旦有一个promise出现了异常，被reject了，情况就会变的麻烦。  
  
```js  
const promises = [  
  delay(100).then(() => 1),  
  delay(200).then(() => 2),  
  Promise.reject(3)  
  ]  
  
Promise.all(promises).then(values=>console.log(values))  
// 最终输出： Uncaught (in promise) 3  
  
Promise.all(promises)  
.then(values=>console.log(values))  
.catch(err=>console.log(err))  
// 加入catch语句后，最终输出：3  
```  
  
尽管能用catch捕获其中的异常，但你会发现其他执行成功的Promise的消息都丢失了，仿佛石沉大海一般。  
  
要么全部成功，要么全部重来，这是Promise.all本身的强硬逻辑，也是痛点的来源，不能说它错，但这的确给Promise.allSettled留下了立足的空间。  
  
## Promise.allSettled  
  
假如使用Promise.allSettled来处理这段逻辑会怎样呢?  
  
```js  
const promises = [  
  delay(100).then(() => 1),  
  delay(200).then(() => 2),  
  Promise.reject(3)  
  ]  
  
Promise.allSettled(promises).then(values=>console.log(values))  
// 最终输出：   
//    [  
//      {status: "fulfilled", value: 1},  
//      {status: "fulfilled", value: 2},  
//      {status: "rejected", value: 3},  
//    ]  
```  
  
可以看到所有promise的数据都被包含在then语句中，且每个promise的返回值多了一个status字段，表示当前promise的状态，没有任何一个promise的信息被丢失。  
  
因此，当用Promise.allSettled时，我们只需专注在then语句里，当有promise被异常打断时，我们依然能妥善处理那些已经成功了的promise，不必全部重来。  
  
# JS中怎么阻止事件冒泡和默认事件？  
## event.stopPropagation()方法  
  
这是阻止事件的冒泡方法，不让事件向 document 上蔓延，但是默认事件任然会执行，当你掉用这个方法的时候，如果点击一个连接，这个连接仍然会被打开，  
  
## event.preventDefault()方法  
  
这是阻止默认事件的方法，比如在a标签的绑定事件上调用此方法，链接则不会被打开，但是会发生冒泡，冒泡会传递到上一层的父元素；  
  
## return false  
  
这个方法比较暴力，他会同事阻止事件冒泡也会阻止默认事件；写上此代码，连接不会被打开，事件也不会传递到上一层的父元素；可以理解为return false就等于同时调用了event.stopPropagation()和event.preventDefault()  
  
  
# 谈谈你对事件冒泡和捕获的理解  
事件冒泡和事件捕获分别由微软和网景公司提出，这两个概念都是为了解决页面中事件流（事件发生顺序）的问题。  
  
```html  
<div id="outer">  
    <p id="inner">Click me!</p>  
</div>  
```  
上面的代码当中一个div元素当中有一个p子元素，如果两个元素都有一个click的处理函数，那么我们怎么才能知道哪一个函数会首先被触发呢？  
  
## 事件冒泡  
  
微软提出了名为事件冒泡(event bubbling)的事件流。事件冒泡可以形象地比喻为把一颗石头投入水中，泡泡会一直从水底冒出水面。也就是说，事件会从最内层的元素开始发生，一直向上传播，直到document对象。  
  
因此在事件冒泡的概念下在p元素上发生click事件的顺序应该是p -> div -> body -> html -> document  
  
## 事件捕获  
  
网景提出另一种事件流名为事件捕获(event capturing)。与事件冒泡相反，事件会从最外层开始发生，直到最具体的元素。  
  
因此在事件捕获的概念下在p元素上发生click事件的顺序应该是document -> html -> body -> div -> p  
  
## addEventListener的第三个参数  
  
网景 和 微软 曾经的战争还是比较火热的，当时， 网景主张捕获方式，微软主张冒泡方式。后来 w3c 采用折中的方式，平息了战火，制定了统一的标准——**先捕获再冒泡**。  
  
addEventListener的第三个参数就是为冒泡和捕获准备的。  
  
addEventListener有三个参数：  
  
```js  
element.addEventListener(event, function, useCapture)  
```  
  
* 第一个参数是需要绑定的事件  
* 第二个参数是触发事件后要执行的函数  
* 第三个参数默认值是false，表示在事件冒泡阶段调用事件处理函数;如果参数为true，则表示在事件捕获阶段调用处理函数。  
  
  
  
  
# js中如何判断一个值是否是数组类型？  
## instanceof  
  
```js  
const arr= [];  
arr instanceof Array; // true  
```  
  
## Array.isArray  
  
```js  
const arr = []  
Array.isArray(arr) // true  
  
const obj = {}  
Array.isArray(obj) // false  
```  
  
## Object.prototype.isPrototypeOf  
  
使用Object的原型方法isPrototypeOf，判断两个对象的原型是否一样, isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。  
  
```js  
const arr = [];  
Object.prototype.isPrototypeOf(arr, Array.prototype); // true  
```  
  
## Object.getPrototypeOf  
  
Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。  
  
```js  
const arr = []  
Object.getPrototypeOf(arr) === Array.prototype // true  
```  
  
## Object.prototype.toString  
  
借用Object原型的call或者apply方法，调用toString()是否为[object Array]  
  
```js  
const arr = []  
Object.prototype.toString.call(arr) === '[object Array]' // true  
  
const obj = {}  
Object.prototype.toString.call(obj) // "[object Object]"  
```  
  
  
# 浏览器为什么要有跨域限制？  
因为存在浏览器同源策略，所以才会有跨域问题。那么浏览器是出于何种原因会有跨域的限制呢。其实不难想到，跨域限制主要的目的就是为了用户的上网安全。  
  
如果浏览器没有同源策略，会存在什么样的安全问题呢。下面从 DOM 同源策略和 XMLHttpRequest 同源策略来举例说明：  
  
**如果没有 DOM 同源策略**，也就是说不同域的 iframe 之间可以相互访问，那么黑客可以这样进行攻击：  
  
* 做一个假网站，里面用 iframe 嵌套一个银行网站 http://mybank.com。  
* 把 iframe 宽高啥的调整到页面全部，这样用户进来除了域名，别的部分和银行的网站没有任何差别。  
* 这时如果用户输入账号密码，我们的主网站可以跨域访问到 http://mybank.com 的 dom 节点，就可以拿到用户的账户密码了。  
  
  
**如果没有 XMLHttpRequest 同源策略**，那么黑客可以进行 CSRF（跨站请求伪造） 攻击：  
  
* 用户登录了自己的银行页面 http://mybank.com，http://mybank.com 向用户的 cookie 中添加用户标识。  
* 用户浏览了恶意页面 http://evil.com，执行了页面中的恶意 AJAX 请求代码。  
* http://evil.com 向 http://mybank.com 发起 AJAX HTTP 请求，请求会默认把 http://mybank.com 对应 cookie 也同时发送过去。  
* 银行页面从发送的 cookie 中提取用户标识，验证用户无误，response 中返回请求数据。此时数据就泄露了。  
* 而且由于 Ajax 在后台执行，用户无法感知这一过程。  
  
因此，有了浏览器同源策略，我们才能更安全的上网。  
  
# 浏览器的同源策略是什么？  
同源策略（Same origin policy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说 Web 是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。  
  
它的核心就在于它认为自任何站点装载的信赖内容是不安全的。当被浏览器半信半疑的脚本运行在沙箱时，它们应该只被允许访问来自同一站点的资源，而不是那些来自其它站点可能怀有恶意的资源。  
  
所谓同源是指：**域名**、**协议**、**端口**相同。  
  
另外，同源策略又分为以下两种：  
  
* DOM 同源策略：禁止对不同源页面 DOM 进行操作。这里主要场景是 iframe 跨域的情况，不同域名的 iframe 是限制互相访问的。  
* XMLHttpRequest 同源策略：禁止使用 XHR 对象向不同源的服务器地址发起 HTTP 请求。  
# 浏览器的垃圾回收机制有哪些？  
JS会在创建变量时自动分配内存，在不使用的时候会自动周期性的释放内存，释放的过程就叫 "垃圾回收"。  
  
一方面自动分配内存减轻了开发者的负担，开发者不用过多的去关注内存使用，但是另一方面，正是因为因为是自动回收，所以如果不清楚回收的机制，会很容易造成混乱，而混乱就很容易造成"内存泄漏"。  
  
由于是自动回收，所以就存在一个 "内存是否需要被回收的" 的问题，但是这个问题的判定在程序中意味着无法通过某个算法去准确完整的解决，后面探讨的回收机制只能有限的去解决一般的问题。  
  
## 回收算法  
  
垃圾回收对是否需要回收的问题主要依赖于对变量的判定是否可访问，由此衍生出两种主要的回收算法：  
  
* 标记清理  
* 引用计数  
  
### 标记清理  
  
标记清理是js最常用的回收策略，2012年后所有浏览器都使用了这种策略，此后的对回收策略的改进也是基于这个策略的改进。其策略是：  
  
* 变量进入上下文，也可理解为作用域，会加上标记，证明其存在于该上下文；  
* 将所有在上下文中的变量以及上下文中被访问引用的变量标记去掉，表明这些变量活跃有用；  
* 在此之后再被加上标记的变量标记为准备删除的变量，因为上下文中的变量已经无法访问它们；  
* 执行内存清理，销毁带标记的所有非活跃值并回收之前被占用的内存；  
  
局限：  
  
* 由于是从根对象(全局对象)开始查找，对于那些无法从根对象查询到的对象都将被清除  
* 回收后会形成内存碎片，影响后面申请大的连续内存空间  
  
### 引用计数  
  
引用计数策略相对而言不常用，因为弊端较多。其思路是对每个值记录它被引用的次数，通过最后对次数的判断(引用数为0)来决定是否保留，具体的规则有：  
  
* 声明一个变量，赋予它一个引用值时，计数+1；  
* 同一个值被赋予另外一个变量时，引用+1；  
* 保存对该值引用的变量被其他值覆盖，引用-1；  
* 引用为0，回收内存；  
  
局限：  
  
最重要的问题就是，循环引用 的问题  
  
```js  
function refProblem () {  
    let a = new Object();  
    let b = new Object();  
    a.c = b;  
    b.c = a;  //互相引用  
}  
```  
  
根据之前提到的规则，两个都互相引用了，引用计数不为0，所以两个变量都无法回收。如果频繁的调用改函数，则会造成很严重的内存泄漏。  
  
  
# xml和json有什么区别？  
## JSON  
  
> JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，它完全独立于语言。它基于JavaScript编程语言，易于理解和生成。  
  
示例：  
```json  
{"Student":[   
    { "Name":"Vivek", "age":"20" },   
    { "Name":"Suraj", "age":"19" },   
    { "Name":"John", "age":"21" },   
    { "Name":"Peter", "age":"22" }   
]}  
```  
  
## XML  
  
XML（可扩展标记语言）旨在传输数据，而不是显示数据。这是W3C的推荐。可扩展标记语言（XML）是一种标记语言，它定义了一组规则，用于以人类可读和机器可读的格式编码文档。XML的设计目标侧重于Internet上的简单性，通用性和可用性。它是一种文本数据格式，通过Unicode为不同的人类语言提供强大的支持。尽管XML的设计侧重于文档，但该语言被广泛用于表示任意数据结构，例如Web服务中使用的那些数据结构。  
  
示例：  
  
```xml  
<Students>   
    <Student>   
        <Name>Vivek</Name> <age>20</age>   
    </Student>   
    <Student>   
        <Name>Suraj</Name> <age>19</age>   
    </Student>   
    <Student>   
        <Name>John</Name> <age>21</age>   
    </Student>   
    <Student>   
        <Name>Peter</Name> <age>22</age>   
    </Student>   
</Students>  
```  
  
这两者都是自描述的，可以被许多编程语言解析和使用。  
  
## JSON和XML之间的区别  
  
以下是JSON和XML之间的一些区别：  
  
1、JSON是JavaScript Object Notation；XML是可扩展标记语言。  
  
2、JSON是基于JavaScript语言；XML源自SGML。  
  
3、JSON是一种表示对象的方式；XML是一种标记语言，使用标记结构来表示数据项。  
  
4、JSON不提供对命名空间的任何支持；XML支持名称空间。  
  
5、JSON支持数组；XML不支持数组。  
  
6、XML的文件相对难以阅读和解释；与XML相比，JSON的文件非常易于阅读。  
  
7、JSON不使用结束标记；XML有开始和结束标签。  
  
8、JSON的安全性较低；XML比JSON更安全。  
  
9、JSON不支持注释；XML支持注释。  
  
10、JSON仅支持UTF-8编码；XML支持各种编码。  
  
  
  
# document.write和innerHTML有什么区别  
* document.write是直接写入到页面的内容流，如果在写之前没有调用document.open, 浏览器会自动调用open。每次写完关闭之后重新调用该函数，会导致页面被重写。  
* innerHTML则是DOM页面元素的一个属性，代表该元素的html内容。你可以精确到某一个具体的元素来进行更改。如果想修改document的内容，则需要修改document.documentElement.innerElement。  
* innerHTML将内容写入某个DOM节点，不会导致页面全部重绘  
* innerHTML很多情况下都优于document.write，其原因在于其允许更精确的控制要刷新页面的那一个部分。  
# 使用原生js给一个按钮绑定两个onclick事件  
```javascript  
//事件监听 绑定多个事件  
var btn = document.getElementById("btn");  
  
btn.addEventListener("click",hello1);  
btn.addEventListener("click",hello2);  
  
function hello1(){  
 alert("hello 1");  
}  
function hello2(){  
 alert("hello 2");  
}  
```  
# 123['toString'].length + 123 的输出值是多少？  
## function的length  
  
```js  
function fn1 (name) {}  
  
function fn2 (name = '林三心') {}  
  
function fn3 (name, age = 22) {}  
  
function fn4 (name, age = 22, gender) {}  
  
function fn5(name = '林三心', age, gender) { }  
  
console.log(fn1.length) // 1  
console.log(fn2.length) // 0  
console.log(fn3.length) // 1  
console.log(fn4.length) // 1  
console.log(fn5.length) // 0  
```  
  
function的length，就是第一个具有默认值之前的参数个数。  
  
在函数的形参中，还有剩余参数这个东西，那如果具有剩余参数，会是怎么算呢？  
  
```  
function fn1(name, ...args) {}  
  
console.log(fn1.length) // 1  
```  
  
可以看出，剩余参数是不算进length的计算之中的。  
  
所以，123['toString'].length + 123 = ?的答案是124  
  
## 总结  
  
length 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数。形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数  
  
  
# for...in和for...of有什么区别？  
for…of 是ES6新增的遍历方式，允许遍历一个含有iterator接口的数据结构（数组、对象等）并且返回各项的值，和ES3中的for…in的区别如下：  
  
* for…of 遍历获取的是对象的键值，for…in 获取的是对象的键名；  
* for… in 会遍历对象的整个原型链，性能非常差不推荐使用，而 for … of 只遍历当前对象不会遍历原型链；  
* 对于数组的遍历，for…in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，for…of 只返回数组的下标对应的属性值；  
  
总结： for...in 循环主要是为了遍历对象而生，不适用于遍历数组；for...of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象。  
# 什么是类数组对象？  
一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数组类似，但是不能调用数组的方法。常见的类数组对象有 arguments 和 DOM 方法的返回结果，还有一个函数也可以被看作是类数组对象，因为它含有 length 属性值，代表可接收的参数个数。  
  
常见的类数组转换为数组的方法有这样几种：  
  
（1）通过 call 调用数组的 slice 方法来实现转换  
  
```js  
Array.prototype.slice.call(arrayLike);  
```  
  
（2）通过 call 调用数组的 splice 方法来实现转换  
```js  
Array.prototype.splice.call(arrayLike, 0);  
```  
  
（3）通过 apply 调用数组的 concat 方法来实现转换  
```js  
Array.prototype.concat.apply([], arrayLike);  
```  
  
（4）通过 Array.from 方法来实现转换  
```js  
Array.from(arrayLike);  
```  
  
# JavaScript脚本延迟加载的方式有哪些？  
延迟加载就是等页面加载完成之后再加载 JavaScript 文件。 js 延迟加载有助于提高页面加载速度。  
  
一般有以下几种方式：  
  
* defer 属性： 给 js 脚本添加 defer 属性，这个属性会让脚本的加载与文档的解析同步解析，然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。多个设置了 defer 属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样。  
* async 属性： 给 js 脚本添加 async 属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，但是当脚本加载完成后立即执行 js 脚本，这个时候如果文档没有解析完成的话同样会阻塞。多个 async 属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。  
* 动态创建 DOM 方式： 动态创建 DOM 标签的方式，可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。  
* 使用 setTimeout 延迟方法： 设置一个定时器来延迟加载js脚本文件  
* 让 JS 最后加载： 将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行。  
# 箭头函数的 this 指向哪⾥？  
箭头函数不同于传统JavaScript中的函数，箭头函数并没有属于⾃⼰的this，它所谓的this是捕获其所在上下⽂的 this 值，作为⾃⼰的 this 值，并且由于没有属于⾃⼰的this，所以是不会被new调⽤的，这个所谓的this也不会被改变。  
  
可以⽤Babel理解⼀下箭头函数:  
  
```js  
// ES6   
const obj = {   
  getArrow() {   
    return () => {   
      console.log(this === obj);   
    };   
  }   
}  
```  
  
转化后：  
  
```js  
// ES5，由 Babel 转译  
var obj = {   
   getArrow: function getArrow() {   
     var _this = this;   
     return function () {   
        console.log(_this === obj);   
     };   
   }   
};  
```  
# 如果new一个箭头函数会怎么样？  
箭头函数是ES6中的提出来的，它没有prototype，也没有自己的this指向，更不可以使用arguments参数，所以不能New一个箭头函数。  
  
new操作符的实现步骤如下：  
  
1、创建一个空的简单JavaScript对象（即{}）；  
  
2、为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；  
  
3、将步骤1新创建的对象作为this的上下文 ；  
  
4、如果该函数没有返回对象，则返回this。  
  
所以，上面的第二、三步，箭头函数都是没有办法执行的。  
# object.assign和扩展运算法是深拷贝还是浅拷贝，两者区别是什么？  
* 扩展运算符  
  
```js  
let outObj = {  
  inObj: {a: 1, b: 2}  
}  
let newObj = {...outObj}  
newObj.inObj.a = 2  
console.log(outObj) // {inObj: {a: 2, b: 2}}  
```  
  
* Object.assign()  
  
```js  
let outObj = {  
  inObj: {a: 1, b: 2}  
}  
let newObj = Object.assign({}, outObj)  
newObj.inObj.a = 2  
console.log(outObj) // {inObj: {a: 2, b: 2}}  
```  
  
可以看到，两者都是浅拷贝。  
  
Object.assign()方法接收的第一个参数作为目标对象，后面的所有参数作为源对象。然后把所有的源对象合并到目标对象中。它会修改了一个对象，因此会触发 ES6 setter。  
  
扩展操作符（…）使用它时，数组或对象中的每一个值都会被拷贝到一个新的数组或对象中。它不复制继承的属性或类的属性，但是它会复制ES6的 symbols 属性。  
  
  
  
# typeof NaN 的结果是什么？  
NaN 指“不是一个数字”（not a number），NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。  
  
```js  
typeof NaN; // "number"  
```  
  
NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 x === x 不成立）的值。而 NaN !== NaN 为 true。  
# 数据类型检测的方式有哪些？  
## （1）typeof  
  
```js  
console.log(typeof 2);               // number  
console.log(typeof true);            // boolean  
console.log(typeof 'str');           // string  
console.log(typeof []);              // object      
console.log(typeof function(){});    // function  
console.log(typeof {});              // object  
console.log(typeof undefined);       // undefined  
console.log(typeof null);            // object  
```  
  
其中数组、对象、null都会被判断为object，其他判断都正确。  
  
## （2）instanceof  
  
instanceof可以正确判断对象的类型，其内部运行机制是判断在其原型链中能否找到该类型的原型。  
  
```js  
console.log(2 instanceof Number);                    // false  
console.log(true instanceof Boolean);                // false   
console.log('str' instanceof String);                // false   
   
console.log([] instanceof Array);                    // true  
console.log(function(){} instanceof Function);       // true  
console.log({} instanceof Object);                   // true  
```  
  
可以看到，instanceof只能正确判断引用数据类型，而不能判断基本数据类型。instanceof 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。  
  
## （3）constructor  
  
```js  
console.log((2).constructor === Number); // true  
console.log((true).constructor === Boolean); // true  
console.log(('str').constructor === String); // true  
console.log(([]).constructor === Array); // true  
console.log((function() {}).constructor === Function); // true  
console.log(({}).constructor === Object); // true  
```  
  
constructor有两个作用，一是判断数据的类型，二是对象实例通过 constrcutor 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，constructor就不能用来判断数据类型了：  
  
```js  
function Fn(){};  
   
Fn.prototype = new Array();  
   
var f = new Fn();  
   
console.log(f.constructor===Fn);    // false  
console.log(f.constructor===Array); // true  
```  
  
## （4）Object.prototype.toString.call()  
  
Object.prototype.toString.call() 使用 Object 对象的原型方法 toString 来判断数据类型：  
  
```js  
var a = Object.prototype.toString;  
   
console.log(a.call(2));  
console.log(a.call(true));  
console.log(a.call('str'));  
console.log(a.call([]));  
console.log(a.call(function(){}));  
console.log(a.call({}));  
console.log(a.call(undefined));  
console.log(a.call(null));  
```  
  
同样是检测对象obj调用toString方法，obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，这是为什么？  
  
这是因为toString是Object的原型方法，而Array、function等类型作为Object的实例，都重写了toString方法。不同的对象类型调用toString方法时，根据原型链的知识，调用的是对应的重写之后的toString方法（function类型返回内容为函数体的字符串，Array类型返回元素组成的字符串…），而不会去调用Object上原型toString方法（返回对象的具体类型），所以采用obj.toString()不能得到其对象类型，只能将obj转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用Object原型上的toString方法。  
  
# Object.is() 与比较操作符 “===”、“==” 的区别？  
* 使用双等号（==）进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。  
* 使用三等号（===）进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。  
* 使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的。  
# isNaN 和 Number.isNaN 函数有什么区别？  
## NaN  
  
全局属性 NaN 的值表示不是一个数字（Not-A-Number）。  
  
在 JavaScript 中，NaN 最特殊的地方就是，我们不能使用相等运算符（== (en-US) 和 === (en-US)）来判断一个值是否是 NaN，因为 NaN == NaN 和 NaN === NaN 都会返回 false。因此，必须要有一个判断值是否是 NaN 的方法。  
  
## 方法简介  
  
* 函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true，因此非数字值传入也会返回 true ，会影响 NaN 的判断。  
* 函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，不会进行数据类型的转换，这种方法对于 NaN 的判断更为准确。  
  
## 总结  
  
和全局函数 isNaN() 相比，Number.isNaN() 不会自行将参数转换成数字，只有在参数是值为 NaN 的数字时，才会返回 true。  
  
Number.isNaN() 方法确定传递的值是否为NaN，并且检查其类型是否为Number。它是原来的全局isNaN() 的更稳妥的版本。  
# 使用Promise实现每隔1秒输出1,2,3  
这道题比较简单的一种做法是可以用Promise配合着reduce不停的在promise后面叠加.then，请看下面的代码：  
  
```javascript  
const arr = [1, 2, 3]  
arr.reduce((p, x) => {  
  return p.then(() => {  
    return new Promise(r => {  
      setTimeout(() => r(console.log(x)), 1000)  
    })  
  })  
}, Promise.resolve())  
```  
  
还可以更简单一点写：  
  
```javascript  
const arr = [1, 2, 3]  
arr.reduce((p, x) => p.then(() => new Promise(r => setTimeout(() => r(console.log(x)), 1000))), Promise.resolve())  
```  
  
# Promise中的值穿透是什么？  
解释：.then 或者 .catch 的参数期望是函数，传入非函数则会发生值穿透。  
  
当then中传入的不是函数，则这个then返回的promise的data，将会保存上一个的promise.data。这就是发生值穿透的原因。而且每一个无效的then所返回的promise的状态都为resolved。  
  
```javascript  
Promise.resolve(1)  
      .then(2) // 注意这里  
      .then(Promise.resolve(3))  
      .then(console.log)  
```  
  
上面代码的输出是 `1`  
# 如何使用js计算一个html页面有多少种标签？  
## 分析  
  
这道题看似简单，但是是一个很有价值的一道题目。它包含了很多重要的知识：  
  
* 如何获取所有DOM节点  
* 伪数组如何转为数组  
* 去重  
  
## 解答  
  
* 获取所有的DOM节点。  
  
```javascript  
document.querySelectorAll('*')  
```  
  
此时得到的是一个NodeList集合，我们需要将其转化为数组，然后对其筛选。  
  
* 转化为数组  
```javascript  
[...document.querySelectorAll('*')]  
```  
一个拓展运算符就轻松搞定。  
  
* 获取数组每个元素的标签名  
```javascript  
[...document.querySelectorAll('*')].map(ele => ele.tagName)  
```  
使用一个map方法，将我们需要的结果映射到一个新数组。  
  
* 去重  
```javascript  
new Set([...document.querySelectorAll('*')].map(ele=> ele.tagName)).size  
```  
  
我们使用ES6中的Set对象，把数组作为构造函数的参数，就实现了去重，再使用Set对象的size方法就可以得到有多少种HTML元素了。  
  
  
  
```javascript  
var bar = function(){  
    console.log(this.x);  
}  
var foo = {  
    x:3  
}  
var sed = {  
    x:4  
}  
var func = bar.bind(foo).bind(sed);  
func(); //?  
    
var fiv = {  
    x:5  
}  
var func = bar.bind(foo).bind(sed).bind(fiv);  
func(); //?  
```  
# bind() 连续调用多次，this的绑定值是什么呢？  
答案是，两次都仍将输出 3 ，而非期待中的 4 和 5 。  
  
原因是，在Javascript中，多次 bind() 是无效的。  
  
更深层次的原因， bind() 的实现，相当于使用函数在内部包了一个 call / apply ，第二次 bind() 相当于再包住第一次 bind() ,故第二次以后的 bind 是无法生效的。  
# 介绍一下 tree shaking 及其工作原理  
> Tree shaking 是一种通过清除多余代码方式来优化项目打包体积的技术，专业术语叫 Dead code elimination。  
  
## tree shaking如何工作的呢？  
  
虽然 tree shaking 的概念在 1990 就提出了，但直到 ES6 的 `ES6-style` 模块出现后才真正被利用起来。  
  
在ES6以前，我们可以使用CommonJS引入模块：require()，这种引入是动态的，也意味着我们可以基于条件来导入需要的代码：  
  
```javascript  
let dynamicModule;  
// 动态导入  
if (condition) {  
  myDynamicModule = require("foo");  
} else {  
  myDynamicModule = require("bar");  
}  
```  
  
但是CommonJS规范无法确定在实际运行前需要或者不需要某些模块，所以CommonJS不适合tree-shaking机制。在 ES6 中，引入了完全静态的导入语法：import。这也意味着下面的导入是不可行的：  
  
```javascript  
// 不可行，ES6 的import是完全静态的  
if (condition) {  
  myDynamicModule = require("foo");  
} else {  
  myDynamicModule = require("bar");  
}  
```  
  
我们只能通过导入所有的包后再进行条件获取。如下：  
  
```  
import foo from "foo";  
import bar from "bar";  
  
if (condition) {  
  // foo.xxxx  
} else {  
  // bar.xxx  
}  
```  
  
ES6的import语法可以完美使用tree shaking，因为可以在代码不运行的情况下就能分析出不需要的代码。  
  
看完上面的分析，你可能还是有点懵，这里我简单做下总结：因为tree shaking只能在静态modules下工作。ECMAScript 6 模块加载是静态的,因此整个依赖树可以被静态地推导出解析语法树。所以在 ES6 中使用 tree shaking 是非常容易的。  
  
## tree shaking的原理是什么?  
  
看完上面的分析，相信这里你可以很容易的得出题目的答案了：  
  
* ES6 Module引入进行静态分析，故而编译的时候正确判断到底加载了那些模块  
* 静态分析程序流，判断那些模块和变量未被使用或者引用，进而删除对应代码  
# base64编码图片，为什么会让数据量变大？  
Base64编码的思想是是采用64个基本的ASCII码字符对数据进行重新编码。它将需要编码的数据拆分成字节数组。以3个字节为一组。按顺序排列24位数据，再把这24位数据分成4组，即每组6位。再在每组的的最高位前补两个0凑足一个字节。这样就把一个3字节为一组的数据重新编码成了4个字节。当所要编码的数据的字节数不是3的整倍数，也就是说在分组时最后一组不够3个字节。这时在最后一组填充1到2个0字节。并在最后编码完成后在结尾添加1到2个"="。  
  
（ 注BASE64字符表：ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/）  
  
从以上编码规则可以得知，通过Base64编码，原来的3个字节编码后将成为4个字节，即字节增加了33.3%，数据量相应变大。所以20M的数据通过Base64编码后大小大概为20M*133.3%=26.67M。  
  
  
# 浏览器和 Node 中的事件循环有什么区别？  
## 浏览器  
  
关于微任务和宏任务在浏览器的执行顺序是这样的：  
  
* 执行一只task（宏任务）  
* 执行完micro-task队列 （微任务）  
  
如此循环往复下去  
  
常见的 task（宏任务） 比如：setTimeout、setInterval、script（整体代码）、 I/O 操作、UI 渲染等。  
常见的 micro-task 比如: new Promise().then(回调)、MutationObserver(html5新特性) 等。  
  
## Node  
  
Node的事件循环是libuv实现的，引用一张官网的图：  
  
![image.png](https://i.loli.net/2021/08/07/g47eAhQN85sRBmS.png)  
  
大体的task（宏任务）执行顺序是这样的：  
  
* timers定时器：本阶段执行已经安排的 setTimeout() 和 setInterval() 的回调函数。  
* pending callbacks待定回调：执行延迟到下一个循环迭代的 I/O 回调。  
* idle, prepare：仅系统内部使用。  
* poll 轮询：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，它们由计时器和   
* setImmediate() 排定的之外），其余情况 node 将在此处阻塞。  
* check 检测：setImmediate() 回调函数在这里执行。  
* close callbacks 关闭的回调函数：一些准备关闭的回调函数，如：socket.on('close', ...)。  
  
微任务和宏任务在Node的执行顺序  
  
Node 10以前：  
  
* 执行完一个阶段的所有任务  
* 执行完nextTick队列里面的内容  
* 然后执行完微任务队列的内容  
  
Node 11以后：  
和浏览器的行为统一了，都是每执行一个宏任务就执行完微任务队列。  
  
  
  
  
# 谈谈对 window.requestAnimationFrame 的理解  
window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。  
  
与setTimeout相比，requestAnimationFrame最大的优势是由系统来决定回调函数的执行时机。具体一点讲，如果屏幕刷新率是60Hz,那么回调函数就每16.7ms被执行一次，如果刷新率是75Hz，那么这个时间间隔就变成了1000/75=13.3ms，换句话说就是，requestAnimationFrame的步伐跟着系统的刷新步伐走。它能保证回调函数在屏幕每一次的刷新间隔中只被执行一次，这样就不会引起丢帧现象，也不会导致动画出现卡顿的问题。  
  
这个API的调用很简单，如下所示：  
  
```javascript  
const element = document.getElementById('some-element-you-want-to-animate');  
let start;  
  
function step(timestamp) {  
  if (start === undefined)  
    start = timestamp;  
  const elapsed = timestamp - start;  
  
  //这里使用`Math.min()`确保元素刚好停在200px的位置。  
  element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';  
  
  if (elapsed < 2000) { // 在两秒后停止动画  
    window.requestAnimationFrame(step);  
  }  
}  
  
window.requestAnimationFrame(step);  
```  
  
除此之外，requestAnimationFrame还有以下两个优势：  
  
* CPU节能：使用setTimeout实现的动画，当页面被隐藏或最小化时，setTimeout 仍然在后台执行动画任务，由于此时页面处于不可见或不可用状态，刷新动画是没有意义的，完全是浪费CPU资源。而requestAnimationFrame则完全不同，当页面处理未激活的状态下，该页面的屏幕刷新任务也会被系统暂停，因此跟着系统步伐走的requestAnimationFrame也会停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了CPU开销。  
* 函数节流：在高频率事件(resize,scroll等)中，为了防止在一个刷新间隔内发生多次函数执行，使用requestAnimationFrame可保证每个刷新间隔内，函数只被执行一次，这样既能保证流畅性，也能更好的节省函数执行的开销。一个刷新间隔内函数执行多次时没有意义的，因为显示器每16.7ms刷新一次，多次绘制并不会在屏幕上体现出来。  
# 浏览器一帧都会干些什么？  
我们都知道，页面的内容都是一帧一帧绘制出来的，浏览器刷新率代表浏览器一秒绘制多少帧。原则上说 1s 内绘制的帧数也多，画面表现就也细腻。目前浏览器大多是 60Hz（60帧/s），每一帧耗时也就是在 16.6ms 左右。那么在这一帧的（16.6ms） 过程中浏览器又干了些什么呢？  
  
![image.png](https://i.loli.net/2021/08/07/E2jyGxNbFpz7QXg.png)  
  
通过上面这张图可以清楚的知道，浏览器一帧会经过下面这几个过程：  
  
* 接受输入事件  
* 执行事件回调  
* 开始一帧  
* 执行 RAF (RequestAnimationFrame)  
* 页面布局，样式计算  
* 绘制渲染  
* 执行 RIC (RequestIdelCallback)  
  
第七步的 RIC 事件不是每一帧结束都会执行，只有在一帧的 16.6ms 中做完了前面 6 件事儿且还有剩余时间，才会执行。如果一帧执行结束后还有时间执行 RIC 事件，那么下一帧需要在事件执行结束才能继续渲染，所以 RIC 执行不要超过 30ms，如果长时间不将控制权交还给浏览器，会影响下一帧的渲染，导致页面出现卡顿和事件响应不及时。  
  
  
# 谈谈 Object.defineProperty 与 Proxy 的区别  
在 Vue2.x 的版本中，双向绑定是基于 Object.defineProperty 方式实现的。而 Vue3.x 版本中，使用了 ES6 中的 Proxy 代理的方式实现。  
  
## Object.defineProperty(obj, prop, descriptor)  
  
使用 Object.defineProperty 会产生三个主要的问题：  
  
* 不能监听数组的变化  
  
在 Vue2.x 中解决数组监听的方法是将能够改变原数组的方法进行重写实现（比如：push、 pop、shift、unshift、splice、sort、reverse），举例：  
  
```javascript  
// 我们重写 push 方法  
const originalPush = Array.prototype.push  
  
Array.prototype.push = function() {  
  // 我们在这个位置就可以进行 数据劫持 了  
  console.log('数组被改变了')  
  
  originalPush.apply(this, arguments)  
}  
```  
  
* 必须遍历对象的每个属性  
  
可以通过 Object.keys() 来实现  
  
* 必须深层遍历嵌套的对象  
  
通过递归深层遍历嵌套对象，然后通过 Object.keys() 来实现对每个属性的劫持  
  
## Proxy  
  
* Proxy 针对的整个对象，Object.defineProperty 针对单个属性，这就解决了 需要对对象进行深度递归（支持嵌套的复杂对象劫持）实现对每个属性劫持的问题  
  
```javascript  
// 定义一个复杂对象  
const obj = {  
    obj: {  
        children: {  
            a: 1  
        }  
    }  
}  
  
const objProxy = new Proxy(obj, {  
    get(target, property, receiver){  
        console.log('-- target --')  
        return Reflect.get(target, property, receiver)  
    },  
  
    set(target, property, value, receiver) {  
        console.log('-- set --')  
        return Reflect.set(target, property, value, receiver)  
    }  
})  
  
console.log(objProxy.obj) // 输出 '-- target --'  
console.log(objProxy.a = 2) // 输出 '-- set --'  
```  
  
* Proxy 解决了 Object.defineProperty 无法劫持数组的问题  
  
```javascript  
const ary = [1, 2, 3]  
  
const aryProxy = new Proxy(ary, {  
    get(target, property, receiver){  
        console.log('-- target --')  
        return Reflect.get(target, property, receiver)  
    },  
    set(target, property, value, receiver) {  
        console.log('-- set --')  
        return Reflect.set(target, property, value, receiver)  
    }  
})  
  
console.log(aryProxy[0]) // 输出 '-- target --'  
console.log(aryProxy.push(1)) // 输出 '-- set --'  
```  
  
*  比 Object.defineProperty 有更多的拦截方法，对比一些新的浏览器，可能会对 Proxy 针正对性的优化，有助于性能提升  
  
  
  
# 虚拟DOM一定更快吗？  
## 虚拟DOM／domDiff  
  
我们常说的虚拟DOM是通过JS对象模拟出来的DOM节点,domDiff是通过特定算法计算出来一次操作所带来的DOM变化。react和vue中都使用了虚拟DOM，我们借着react聊聊虚拟DOM。  
  
react中涉及到虚拟DOM的代码主要分为以下三部分，其中核心是第二步的domDiff算法：  
  
* 把render中的JSX(或者createElement这个API)转化成虚拟DOM  
* 状态或属性改变后重新计算虚拟DOM并生成一个补丁对象(domDiff)  
* 通过这个补丁对象更新视图中的DOM节点  
  
## 虚拟DOM不一定更快  
  
干前端的都知道DOM操作是性能杀手，因为操作DOM会引起页面的回流或者重绘。相比起来，通过多一些预先计算来减少DOM的操作要划算的多。  
  
但是，“使用虚拟DOM会更快”这句话并不一定适用于所有场景。例如：一个页面就有一个按钮，点击一下，数字加一，那肯定是直接操作DOM更快。使用虚拟DOM无非白白增加了计算量和代码量。即使是复杂情况，浏览器也会对我们的DOM操作进行优化，大部分浏览器会根据我们操作的时间和次数进行批量处理，所以直接操作DOM也未必很慢。  
  
那么为什么现在的框架都使用虚拟DOM呢？因为使用虚拟DOM可以提高代码的性能下限，并极大的优化大量操作DOM时产生的性能损耗。同时这些框架也保证了，即使在少数虚拟DOM不太给力的场景下，性能也在我们接受的范围内。  
  
而且，我们之所以喜欢react、vue等使用了虚拟DOM框架，不光是因为他们快，还有很多其他更重要的原因。例如react对函数式编程的友好，vue优秀的开发体验等，目前社区也有好多比较这两个框架并打口水战的，我觉着还是在两个都懂的情况下多探究一下原理更有意义一些。  
  
# html文档渲染过程，css文件和js文件的下载，是否会阻塞渲染？  
浏览器内有多个进程，其中渲染进程被称为浏览器内核，负责页面渲染和执行 JS 脚本等。渲染进程负责浏览器的解析和渲染，内部有 JS 引擎线程、 GUI 渲染线程、事件循环管理线程、定时器线程、HTTP 线程。  
  
JS 引擎线程负责执行 JS 脚本，GUI 渲染线程负责页面的解析和渲染，两者是互斥的，也就是执行 JS 的时候页面是停止解析和渲染的。这是因为如果在页面渲染的同时 JS 引擎修改了页面元素，比如清空页面，会造成后续页面渲染的不必要和错误。而由于 JS 经常要操作 DOM ，就要涉及 JS 引擎线程和 GUI 渲染线程的通信，而线程间通信代价是非常昂贵的，这也是造成 JS 操作 DOM 效率不高的原因。  
  
  
浏览器的 HTML/CSS 的解析和渲染都属于 GUI渲染线程，所以和 JS 引擎线程是互斥、阻塞的。下面从代码实际运行的角度分析浏览器解析和渲染的顺序，以及互相间的阻塞关系。  
  
## CSS 阻塞  
  
* css 文件的下载和解析不会影响 DOM 的解析，但是会阻塞 DOM 的渲染。因为 CSSOM Tree 要和 DOM Tree 合成 Render Tree 才能绘制页面。下面的 test1 在 css 下载并解析完成前是默认样式， test2 在 css 下载并解析完成之前不会显示：  
  
```html  
<button class="btn btn-primary">test1</button>  
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">  
<div>test2</div>  
```  
  
* css 文件没下载并解析完成之前，后续的 js 脚本不能执行。下面的 alert('ok') 在 css 下载并解析完成之前不会弹出来：  
  
```html  
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">  
<script>  
    alert('ok')  
</script>  
```  
  
* css 文件的下载不会阻塞前面的 js 脚本执行。下面的 alert('ok') 会在 css 下载完成前弹出：  
  
```html  
<script>  
    alert('ok')  
</script>  
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">  
```  
  
所以在需要提前执行不操作 dom 元素的 js 时，不妨把 js 放到 css 文件之前。  
  
## js 阻塞  
  
js 文件的下载和解析会阻塞 GUI 渲染进程，也就是会阻塞 DOM 和 CSS 的解析和渲染。  
  
js 文件没下载并解析完成之前，后续的 HTML 和 CSS 无法解析：  
  
```html  
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>  
<div>test</div>  
```  
  
* js 文件的下载不会阻塞前面 HTML 和 CSS 的解析：  
  
```html  
<div>test</div>  
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>  
```  
  
## 需要注意的点  
  
* 第一，GUI 渲染线程会尽可能早的将内容呈现到屏幕上，并不会等到所有的 HTML 都解析完成之后再去构建和布局 Render Tree，而是解析完一部分内容就显示一部分内容，同时，可能还在通过网络下载其余内容。下面 test1 会在 js 文件下载完成前渲染完成，而 test2 则会在 js 文件下载并执行完之后渲染：  
  
```html  
  <div>test1</div>  
  <script src="https://code.jquery.com/jquery-3.4.1.js"></script>  
  <div>test2</div>  
```  
  
* 第二，文件的下载是不会被阻塞的，不管是 css 还是 js 文件，浏览器的主线程会在页面解析前开启下载，所以就算在外部脚本执行前删除脚本，脚本也还是会下载。  
  
```html  
<body>  
  <script>  
    document.body.remove()  
  </script>    
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">  
  <script src="https://code.jquery.com/jquery-3.4.1.js"></script>  
</body>  
```  
  
  
  
  
  
  
  
# 为什么JavaScript是单线程？  
JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么JavaScript不能有多个线程呢？这样能提高效率啊。  
  
JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？  
  
所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变。  
  
为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。  
  
  
# 说说你对 Object.defineProperty 的理解  
Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。  
  
该方法接受三个参数，第一个参数是 obj：要定义属性的对象，第二个参数是 prop：要定义或修改的属性的名称或 Symbol，第三个参数是 descriptor：要定义或修改的属性描述符。  
  
```javascript  
const obj = {};  
Object.defineProperty(obj, "property", { value: 18 });  
console.log(obj.property); // 18  
```  
  
虽然我们可以直接添加属性和值，但是使用这种方式，我们能进行更多的配置。  
  
函数的第三个参数 descriptor 所表示的属性描述符有两种形式：数据描述符和存取描述符。数据描述符是一个具有值的属性，该值可以是可写的，也可以是不可写的。存取描述符是由 getter 函数和 setter 函数所描述的属性。一个描述符只能是这两者其中之一；不能同时是两者。  
  
这两种同时拥有下列两种键值：  
  
* configurable：是否可以删除目标属性或是否可以再次修改属性的特性（writable, configurable, enumerable）。设置为true可以被删除或可以重新设置特性；设置为false，不能被可以被删除或不可以重新设置特性。默认为false。  
* enumerable：当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。默认为 false。  
  
```javascript  
const obj = { property: 24 };  
Object.defineProperty(obj, "property", { configurable: true });  
delete obj["property"]; // true  
obj; // {}  
// 改变状态  
const obj = { property: 24 };  
Object.defineProperty(obj, "property", { configurable: false });  
delete obj["property"]; // false  
obj; // {'property': 24}  
```  
  
```javascript  
const obj = { property1: 24, property2: 34, property3: 54 };  
Object.defineProperty(obj, "property1", { enumerable: true });  
for (i in obj) {  
  console.log(i);  
}  
// property1  
// property2  
// property3  
// 改状态  
  
Object.defineProperty(obj, "property1", { enumerable: false });  
for (i in obj) {  
  console.log(i);  
}  
// property2  
// property3  
  
```  
  
数据描述符还具有以下可选键值：  
  
* value：该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。  
* writable：当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变。默认为 false。  
  
```javascript  
const obj = {};  
Object.defineProperty(obj, "property1", { value: 18 });  
obj; // {'property1': 18}  
```  
  
```javascript  
const obj = {};  
Object.defineProperty(obj, "property1", { value: 18, writable: false });  
obj.property1 = 24;  
obj; // {'property1': 18}  
  
// 改变状态  
const obj = {};  
Object.defineProperty(obj, "property1", { value: 18, writable: true });  
obj.property1 = 24;  
obj; // {'property1': 24}  
  
```  
  
存取描述符还具有以下可选键值：  
  
* get：属性的 getter 函数，如果没有 getter，则为 undefined。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的 this 并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。默认为 undefined。  
* set：属性的 setter 函数，如果没有 setter，则为 undefined。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。默认为 undefined。  
  
```javascript  
const obj = {};  
Object.defineProperty(obj, "property1", {  
  get(value) {  
    return value;  
  },  
  set(newValue) {  
    value = newValue;  
  },  
});  
  
```  
  
  
  
# ES6中的 Reflect 对象有什么用？  
Reflect 对象不是构造函数，所以创建时不是用 new 来进行创建。  
  
在 ES6 中增加这个对象的目的：  
  
- 将 Object 对象的一些明显属于语言内部的方法（比如 Object.defineProperty），放到 Reflect 对象上。现阶段，某些方法同时在 Object 和 Reflect 对象上部署，未来的新方法将只部署在 Reflect 对象上。也就是说，从 Reflect 对象上可以拿到语言内部的方法。  
- 修改某些 Object 方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而 Reflect.defineProperty(obj, name, desc)则会返回 false。  
- 让 Object 操作都变成函数行为。某些 Object 操作是命令式，比如 name in obj 和 delete obj[name]，而 Reflect.has(obj, name)和 Reflect.deleteProperty(obj, name)让它们变成了函数行为。  
- Reflect 对象的方法与 Proxy 对象的方法一一对应，只要是 Proxy 对象的方法，就能在 Reflect 对象上找到对应的方法。这就让 Proxy 对象可以方便地调用对应的 Reflect 方法，完成默认行为，作为修改行为的基础。也就是说，不管 Proxy 怎么修改默认行为，你总可以在 Reflect 上获取默认行为。  
  
```javascript  
var loggedObj = new Proxy(obj, {  
  get(target, name) {  
    console.log("get", target, name);  
    return Reflect.get(target, name);  
  },  
  deleteProperty(target, name) {  
    console.log("delete" + name);  
    return Reflect.deleteProperty(target, name);  
  },  
  has(target, name) {  
    console.log("has" + name);  
    return Reflect.has(target, name);  
  },  
});  
  
```  
  
上面代码中，每一个 Proxy 对象的拦截操作（get、delete、has），内部都调用对应的 Reflect 方法，保证原生行为能够正常执行。添加的工作，就是将每一个操作输出一行日志。  
  
  
# 什么是尾调用优化和尾递归？  
## 什么是尾调用？  
  
尾调用的概念非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。  
  
```javascript  
function f(x){  
  return g(x);  
}  
```  
  
上面代码中，函数f的最后一步是调用函数g，这就叫尾调用。  
  
以下两种情况，都不属于尾调用。  
  
```javascript  
// 情况一  
function f(x){  
  let y = g(x);  
  return y;  
}  
  
// 情况二  
function f(x){  
  return g(x) + 1;  
}  
```  
  
上面代码中，情况一是调用函数g之后，还有别的操作，所以不属于尾调用，即使语义完全一样。情况二也属于调用后还有操作，即使写在一行内。  
  
尾调用不一定出现在函数尾部，只要是最后一步操作即可。  
  
```  
function f(x) {  
  if (x > 0) {  
    return m(x)  
  }  
  return n(x);  
}  
```  
  
上面代码中，函数m和n都属于尾调用，因为它们都是函数f的最后一步操作。  
  
## 尾调用优化  
  
尾调用之所以与其他调用不同，就在于它的特殊的调用位置。  
  
我们知道，函数调用会在内存形成一个"调用记录"，又称"调用帧"（call frame），保存调用位置和内部变量等信息。如果在函数A的内部调用函数B，那么在A的调用记录上方，还会形成一个B的调用记录。等到B运行结束，将结果返回到A，B的调用记录才会消失。如果函数B内部还调用函数C，那就还有一个C的调用记录栈，以此类推。所有的调用记录，就形成一个"调用栈"（call stack）。  
  
尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用记录，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用记录，取代外层函数的调用记录就可以了。  
  
```javascript  
function f() {  
  let m = 1;  
  let n = 2;  
  return g(m + n);  
}  
f();  
  
// 等同于  
function f() {  
  return g(3);  
}  
f();  
  
// 等同于  
g(3);  
```  
  
上面代码中，如果函数g不是尾调用，函数f就需要保存内部变量m和n的值、g的调用位置等信息。但由于调用g之后，函数f就结束了，所以执行到最后一步，完全可以删除 f() 的调用记录，只保留 g(3) 的调用记录。  
  
这就叫做"尾调用优化"（Tail call optimization），即只保留内层函数的调用记录。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用记录只有一项，这将大大节省内存。这就是"尾调用优化"的意义。  
  
## 尾递归  
  
函数调用自身，称为递归。如果尾调用自身，就称为尾递归。  
  
递归非常耗费内存，因为需要同时保存成千上百个调用记录，很容易发生"栈溢出"错误（stack overflow）。但对于尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误。  
  
```javascript  
function factorial(n) {  
  if (n === 1) return 1;  
  return n * factorial(n - 1);  
}  
  
factorial(5) // 120  
```  
  
上面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n) 。  
  
如果改写成尾递归，只保留一个调用记录，复杂度 O(1) 。  
  
```javascript  
function factorial(n, total) {  
  if (n === 1) return total;  
  return factorial(n - 1, n * total);  
}  
  
factorial(5, 1) // 120  
```  
  
"尾调用优化"对递归操作意义重大，所以一些函数式编程语言将其写入了语言规格。ES6也是如此，第一次明确规定，所有 ECMAScript 的实现，都必须部署"尾调用优化"。这就是说，在 ES6 中，只要使用尾递归，就不会发生栈溢出，相对节省内存。  
  
# 简单介绍下 ES6 中的 Iterator 迭代器  
想必大家使用过for循环、while循环等，遍历Array获取其中的值，那其他数据结构如何通过遍历获取呢？或者这样说，是否可以提供一个统一的访问机制？来访问Object、Map、Set等。  
  
轮到Iterator迭代器出场，Iterator迭代器就是为了解决这个问题，它提供统一的接口，为不同的数据结构提供统一的访问机制。(目前Map、Set、Array支持Iterator)。  
  
顾名思义，Iterator迭代器的出现就是为了迭代而生，为不同的集合：Object、Array、Map、Set，提供了一个统一的接口（这里接口可以简单的理解为方法，就是遍历方法）。像我们常用的for...of就是依赖与Iterator迭代器。  
  
在这里顺便提一嘴，我理解到的遍历、迭代的关系：遍历就是访问数据结构的所有元素，而迭代是遍历的一种形式。  
  
```javascript  
// 阮一峰 ECMAScript 6 入门  
// 模拟next方法返回值  
var it = makeIterator(['a', 'b']);  
  
it.next() // { value: "a", done: false }  
it.next() // { value: "b", done: false }  
it.next() // { value: undefined, done: true }  
  
function makeIterator(array) {  
  var nextIndex = 0;  
  return {  
    next: function() {  
      return nextIndex < array.length ?  
        {value: array[nextIndex++], done: false} :  
        {value: undefined, done: true}  
    }  
  }  
}  
```  
  
上面的makeIterator函数，它就是一个迭代器生成函数，作用就是返回一个迭代器对象。对数组执行这个函数，就会返回该数组的迭代器对象it。  
  
通过调用next函数，返回value和done两个属性；value属性返回当前位置的成员，done属性是一个布尔值，表示遍历是否结束，即是否还有必要再一次调用next方法；当done为true时，即遍历完成。  
  
小结：Iterator迭代器就是一个接口方法，它为不同的数据结构提供了一个统一的访问机制；使得数据结构的成员能够按某种次序排列，并逐个被访问。  
  
## Iterator规范  
  
在上面的代码中，迭代器对象it包含一个next() 方法，调用next()方法，返回两个属性：布尔值done和值value，value的类型无限制。  
  
迭代器对象包含的属性我们知道了，那么在日常开发中，我们如何让一个对象成为一个可迭代对象呢？（可迭代对象即支持迭代器规范的对象）  
  
要成为可迭代对象， 一个对象必须实现@@iterator方法。这意味着对象（或者它原型链上的某个对象）必须有一个键为@@iterator的属性，可通过常量 Symbol.iterator 访问该属性。  
  
```javascript  
let myIterable = {  
    a: 1,  
    b: 2,  
    c: 3  
}  
myIterable[Symbol.iterator] = function() {  
  let self = this;  
  let arr = Object.keys(self);  
  let index = 0;  
  return {  
    next() {  
      return index < arr.length ? {value: self[arr[index++]], done: false} : {value: undefined, done: true};  
    }  
  }  
}  
  
var it = myIterable[Symbol.iterator]();  
  
it.next();  
  
for(const i of myIterable) {  
  console.log(i);  
}  
```  
  
将myIterable对象添加Symbol.iterator属性，同时在返回的next方法中，添加两个属性，既让它成为了一个可迭代对象。（其实如果真的有这样的需求，可以考虑使用Map）。  
  
小结：Iterator规范————Iterator迭代器包含一个next()方法，方法调用返回返回两个属性：done和value；通过定义一个对象的Symbol.iterator属性，即可将此对象修改为迭代器对象，支持for...of遍历。  
  
  
  
# js对象中，可枚举性（enumerable）是什么？  
可枚举性（enumerable）用来控制所描述的属性，是否将被包括在for...in循环之中（除非属性名是一个Symbol）。具体来说，如果一个属性的enumerable为false，下面三个操作不会取到该属性。  
  
* for..in循环  
* Object.keys方法  
* JSON.stringify方法  
  
```javascript  
var o = { a: 1, b: 2 };  
  
o.c = 3;  
Object.defineProperty(o, "d", {  
  value: 4,  
  enumerable: false,  
});  
  
o.d;  
// 4  
  
for (var key in o) console.log(o[key]);  
// 1  
// 2  
// 3  
  
Object.keys(o); // ["a", "b", "c"]  
  
JSON.stringify(o); // => "{a:1,b:2,c:3}"  
```  
  
上面代码中，d属性的enumerable为false，所以一般的遍历操作都无法获取该属性，使得它有点像“秘密”属性，但还是可以直接获取它的值。  
  
至于for...in循环和Object.keys方法的区别，在于前者包括对象继承自原型对象的属性，而后者只包括对象本身的属性。如果需要获取对象自身的所有属性，不管enumerable的值，可以使用Object.getOwnPropertyNames方法。  
  
可枚举属性是指那些内部 “可枚举” 标志设置为 true 的属性。对于通过直接的赋值和属性初始化的属性，该标识值默认为即为 true。但是对于通过 Object.defineProperty 等定义的属性，该标识值默认为 false。  
# forEach 中能否使用 await ？  
```javascript  
function test() {  
  let arr = [3, 2, 1];  
  arr.forEach(async (item) => {  
    const res = await fetch(item);  
    console.log(res);  
  });  
  console.log("end");  
}  
  
function fetch(x) {  
  return new Promise((resolve, reject) => {  
    setTimeout(() => {  
      resolve(x);  
    }, 500 * x);  
  });  
}  
  
test();  
```  
  
上面代码的输出结果是：  
  
```javascript  
end  
1  
2  
3  
```  
  
## 为什么  
  
其实原因很简单，那就是 forEach 只支持同步代码。  
  
我们可以参考下 Polyfill 版本的 forEach，简化以后类似就是这样的伪代码  
  
```javascript  
while (index < arr.length) {  
	callback(item, index)   //也就是我们传入的回调函数  
}  
```  
  
从上述代码中我们可以发现，forEach 只是简单的执行了下回调函数而已，并不会去处理异步的情况。 并且即使你在 callback 中使用 break 也并不能结束遍历。  
  
## 怎么解决  
  
一般来说解决的办法有2种：  
  
* for...of  
  
因为 for...of 内部处理的机制和 forEach 不同，forEach 是直接调用回调函数，for...of 是通过迭代器的方式去遍历。  
  
```javascript  
async function test() {  
  let arr = [3, 2, 1];  
  for (const item of arr) {  
    const res = await fetch(item);  
    console.log(res);  
  }  
  console.log("end");  
}  
```  
  
* for循环  
  
```javascript  
async function test() {  
  let arr = [3, 2, 1];  
  for (var i = 0; i < arr.length; i++) {  
    const res = await fetch(arr[i]);  
    console.log(res);  
  }  
  console.log("end");  
}  
  
function fetch(x) {  
  return new Promise((resolve, reject) => {  
    setTimeout(() => {  
      resolve(x);  
    }, 500 * x);  
  });  
}  
  
test();  
```  
  
  
  
  
  
  
# 如何中断Promise？  
Promise 有个缺点就是一旦创建就无法取消，所以本质上 Promise 是无法被终止的，但我们在开发过程中可能会遇到下面两个需求：  
  
* 中断调用链  
  
就是在某个 then/catch 执行之后，不想让后续的链式调用继续执行了。  
  
```  
somePromise  
  .then(() => {})  
  .then(() => {  
    // 终止 Promise 链，让下面的 then、catch 和 finally 都不执行  
  })  
  .then(() => console.log('then'))  
  .catch(() => console.log('catch'))  
  .finally(() => console.log('finally'))  
```  
  
一种方法是在then中直接抛错, 这样就不会执行后面的then, 直接跳到catch方法打印err(但此方法并没有实际中断)。但如果链路中对错误进行了捕获，后面的then函数还是会继续执行。  
  
Promise的then方法接收两个参数：  
```javascript  
Promise.prototype.then(onFulfilled, onRejected)  
```  
  
若onFulfilled或onRejected是一个函数，当函数返回一个新Promise对象时，原Promise对象的状态将跟新对象保持一致，详见Promises/A+标准。  
  
因此，当新对象保持“pending”状态时，原Promise链将会中止执行。  
  
```javascript  
Promise.resolve().then(() => {  
    console.log('then 1')  
    return new Promise(() => {})  
}).then(() => {  
    console.log('then 2')  
}).then(() => {  
    console.log('then 3')  
}).catch((err) => {  
    console.log(err)  
})  
```  
  
* 中断Promise  
  
注意这里是中断而不是终止，因为 Promise 无法终止，这个中断的意思是：在合适的时候，把 pending 状态的 promise 给 reject 掉。例如一个常见的应用场景就是希望给网络请求设置超时时间，一旦超时就就中断，我们这里用定时器模拟一个网络请求，随机 3 秒之内返回。  
  
```javascript  
function timeoutWrapper(p, timeout = 2000) {  
  const wait = new Promise((resolve, reject) => {  
    setTimeout(() => {  
      reject('请求超时')  
    }, timeout)  
  })  
  return Promise.race([p, wait])  
}  
```  
  
  
# 堆与栈有什么区别？  
堆（Heap）与栈（Stack）是开发人员必须面对的两个概念，在理解这两个概念时，需要放到具体的场景下，因为不同场景下，堆与栈代表不同的含义。一般情况下，有两层含义：  
  
- 程序内存布局场景下，堆与栈表示两种内存管理方式；  
- 数据结构场景下，堆与栈表示两种常用的数据结构。  
  
## 程序内存分区中的堆与栈  
  
### 栈简介  
栈由操作系统自动分配释放 ，用于存放函数的参数值、局部变量等，其操作方式类似于数据结构中的栈。  
  
其中函数中定义的局部变量按照先后定义的顺序依次压入栈中，也就是说相邻变量的地址之间不会存在其它变量。栈的内存地址生长方向与堆相反，由高到底，所以后定义的变量地址低于先定义的变量，比如上面代码中变量 s 的地址小于变量 b 的地址，p2 地址小于 s 的地址。栈中存储的数据的生命周期随着函数的执行完成而结束。  
  
### 堆简介  
  
堆由开发人员分配和释放， 若开发人员不释放，程序结束时由 OS 回收，分配方式类似于链表。  
  
堆的内存地址生长方向与栈相反，由低到高，但需要注意的是，后申请的内存空间并不一定在先申请的内存空间的后面，即 p2 指向的地址并不一定大于 p1 所指向的内存地址，原因是先申请的内存空间一旦被释放，后申请的内存空间则会利用先前被释放的内存，从而导致先后分配的内存空间在地址上不存在先后关系。堆中存储的数据若未释放，则其生命周期等同于程序的生命周期。  
  
关于堆上内存空间的分配过程，首先应该知道操作系统有一个记录空闲内存地址的链表，当系统收到程序的申请时，会遍历该链表，寻找第一个空间大于所申请空间的堆节点，然后将该节点从空闲节点链表中删除，并将该节点的空间分配给程序。另外，对于大多数系统，会在这块内存空间中的首地址处记录本次分配的大小，这样，代码中的delete语句才能正确地释放本内存空间。由于找到的堆节点的大小不一定正好等于申请的大小，系统会自动地将多余的那部分重新放入空闲链表。  
  
### 堆与栈区别  
  
堆与栈实际上是操作系统对进程占用的内存空间的两种管理方式，主要有如下几种区别：  
  
（1）管理方式不同。栈由操作系统自动分配释放，无需我们手动控制；堆的申请和释放工作由程序员控制，容易产生内存泄漏；  
  
（2）空间大小不同。每个进程拥有的栈的大小要远远小于堆的大小。理论上，程序员可申请的堆大小为虚拟内存的大小，进程栈的大小 64bits 的 Windows 默认 1MB，64bits 的 Linux 默认 10MB；  
  
（3）生长方向不同。堆的生长方向向上，内存地址由低到高；栈的生长方向向下，内存地址由高到低。  
  
（4）分配方式不同。堆都是动态分配的，没有静态分配的堆。栈有2种分配方式：静态分配和动态分配。静态分配是由操作系统完成的，比如局部变量的分配。动态分配由alloca函数进行分配，但是栈的动态分配和堆是不同的，他的动态分配是由操作系统进行释放，无需我们手工实现。  
  
（5）分配效率不同。栈由操作系统自动分配，会在硬件层级对栈提供支持：分配专门的寄存器存放栈的地址，压栈出栈都有专门的指令执行，这就决定了栈的效率比较高。堆则是由C/C++提供的库函数或运算符来完成申请与管理，实现机制较为复杂，频繁的内存申请容易产生内存碎片。显然，堆的效率比栈要低得多。  
  
（6）存放内容不同。栈存放的内容，函数返回地址、相关参数、局部变量和寄存器内容等。当主函数调用另外一个函数的时候，要对当前函数执行断点进行保存，需要使用栈来实现，首先入栈的是主函数下一条语句的地址，即扩展指针寄存器的内容（EIP），然后是当前栈帧的底部地址，即扩展基址指针寄存器内容（EBP），再然后是被调函数的实参等，一般情况下是按照从右向左的顺序入栈，之后是被调函数的局部变量，注意静态变量是存放在数据段或者BSS段，是不入栈的。出栈的顺序正好相反，最终栈顶指向主函数下一条语句的地址，主程序又从该地址开始执行。堆，一般情况堆顶使用一个字节的空间来存放堆的大小，而堆中具体存放内容是由程序员来填充的。  
  
从以上可以看到，堆和栈相比，由于大量malloc()/free()或new/delete的使用，容易造成大量的内存碎片，并且可能引发用户态和核心态的切换，效率较低。栈相比于堆，在程序中应用较为广泛，最常见的是函数的调用过程由栈来实现，函数返回地址、EBP、实参和局部变量都采用栈的方式存放。虽然栈有众多的好处，但是由于和堆相比不是那么灵活，有时候分配大量的内存空间，主要还是用堆。  
  
无论是堆还是栈，在内存使用时都要防止非法越界，越界导致的非法内存访问可能会摧毁程序的堆、栈数据，轻则导致程序运行处于不确定状态，获取不到预期结果，重则导致程序异常崩溃，这些都是我们编程时与内存打交道时应该注意的问题。  
  
## 数据结构中的堆与栈  
  
数据结构中，堆与栈是两个常见的数据结构，理解二者的定义、用法与区别，能够利用堆与栈解决很多实际问题。  
  
### 栈简介  
  
栈是一种运算受限的线性表，其限制是指只仅允许在表的一端进行插入和删除操作，这一端被称为栈顶（Top），相对地，把另一端称为栈底（Bottom）。把新元素放到栈顶元素的上面，使之成为新的栈顶元素称作进栈、入栈或压栈（Push）；把栈顶元素删除，使其相邻的元素成为新的栈顶元素称作出栈或退栈（Pop）。这种受限的运算使栈拥有“先进后出”的特性（First In Last Out），简称FILO。  
  
栈分顺序栈和链式栈两种。栈是一种线性结构，所以可以使用数组或链表（单向链表、双向链表或循环链表）作为底层数据结构。使用数组实现的栈叫做顺序栈，使用链表实现的栈叫做链式栈，二者的区别是顺序栈中的元素地址连续，链式栈中的元素地址不连续。  
  
栈的基本操作包括初始化、判断栈是否为空、入栈、出栈以及获取栈顶元素等。  
  
### 堆简介  
  
堆是一种常用的树形结构，是一种特殊的完全二叉树，当且仅当满足所有节点的值总是不大于或不小于其父节点的值的完全二叉树被称之为堆。堆的这一特性称之为堆序性。因此，在一个堆中，根节点是最大（或最小）节点。如果根节点最小，称之为小顶堆（或小根堆），如果根节点最大，称之为大顶堆（或大根堆）。堆的左右孩子没有大小的顺序。  
  
堆的存储一般都用数组来存储堆，i节点的父节点下标就为( i – 1 ) / 2 (i – 1) / 2(i–1)/2。它的左右子节点下标分别为 2 ∗ i + 1 2 * i + 12∗i+1 和 2 ∗ i + 2 2 * i + 22∗i+2。如第0个节点左右子节点下标分别为1和2。  
  
# “严格模式”是什么？  
除了正常运行模式，ECMAscript 5添加了第二种运行模式："严格模式"（strict mode）。顾名思义，这种模式使得Javascript在更严格的条件下运行。  
  
设立"严格模式"的目的，主要有以下几个：  
  
```  
- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;  
- 消除代码运行的一些不安全之处，保证代码运行的安全；  
- 提高编译器效率，增加运行速度；  
- 为未来新版本的Javascript做好铺垫。  
```  
  
"严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。  
  
另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。  
# Object.create 和 new 有什么区别？  
js中创建对象的方式一般有两种Object.create和new  
  
```javascript  
const Base = function(){};  
const o1 = Object.create(Base);  
const o2 = new Base();  
```  
  
在讲述两者区别之前，我们需要知道：  
  
* 构造函数Foo的原型属性Foo.prototype指向了原型对象。  
* 原型对象保存着实例共享的方法，有一个指针constructor指回构造函数。  
* js中只有函数有 prototype 属性，所有的对象只有 __proto__ 隐式属性。  
  
那这样到底有什么不一样呢？  
  
## Object.create  
  
先来看看 `Object.create` 的实现方式  
  
```javascript  
Object.create =  function (o) {  
    var F = function () {};  
    F.prototype = o;  
    return new F();  
};  
```  
  
可以看出来。Object.create是内部定义一个对象，并且让F.prototype对象 赋值为引进的对象/函数 o，并return出一个新的对象。  
  
## new  
  
再看看 `const o2 = new Base()` 的时候，new做了什么。  
  
```javascript  
var o1 = new Object();  
o1.[[Prototype]] = Base.prototype;  
Base.call(o1);  
```  
  
new做法是新建一个obj对象o1，并且让o1的__proto__指向了Base.prototype对象。并且使用 call 进行强转作用环境。从而实现了实例的创建。  
  
## 区别  
  
看似是一样的。我们对原来的代码进行改进一下。  
  
```javascript  
var Base = function () {  
    this.a = 2  
}  
var o1 = new Base();  
var o2 = Object.create(Base);  
console.log(o1.a); // 2  
console.log(o2.a); // undefined  
```  
  
可以看到Object.create 失去了原来对象的属性的访问。  
  
再进行下改造：  
```javascript  
var Base = function () {  
    this.a = 2  
}  
Base.prototype.a = 3;  
var o1 = new Base();  
var o2 = Object.create(Base);  
console.log(o1.a); // 2  
console.log(o2.a); // undefined  
```  
  
## 小结  
  
小结  
  
|比较|new|Object.create|  
|--|--|--|  
|构造函数|保留原构造函数属性|丢失原构造函数属性|  
|原型链|原构造函数prototype属性|原构造函数/（对象）本身|  
|作用对象|function|function和object|  
  
  
  
# 为什么部分请求中，参数需要使用 encodeURIComponent 进行转码？  
一般来说，URL只能使用英文字母、阿拉伯数字和某些标点符号，不能使用其他文字和符号。  
  
这是因为网络标准RFC 1738做了硬性规定：  
  
> "...Only alphanumerics [0-9a-zA-Z], the special characters "$-_.+!*'()," [not including the quotes - ed], and reserved characters used for their reserved purposes may be used unencoded within a URL."  
  
这意味着，如果URL中有汉字，就必须编码后使用。但是麻烦的是，RFC 1738没有规定具体的编码方法，而是交给应用程序（浏览器）自己决定。这导致"URL编码"成为了一个混乱的领域。  
  
不同的操作系统、不同的浏览器、不同的网页字符集，将导致完全不同的编码结果。如果程序员要把每一种结果都考虑进去，是不是太恐怖了？有没有办法，能够保证客户端只用一种编码方法向服务器发出请求？  
  
就是使用Javascript先对URL编码，然后再向服务器提交，不要给浏览器插手的机会。因为Javascript的输出总是一致的，所以就保证了服务器得到的数据是格式统一的。  
  
Javascript语言用于编码的函数，一共有三个，最古老的一个就是escape()。虽然这个函数现在已经不提倡使用了，但是由于历史原因，很多地方还在使用它，所以有必要先从它讲起。  
  
它的具体规则是，除了ASCII字母、数字、标点符号"@ * _ + - . /"以外，对其他所有字符进行编码。  
  
encodeURI()是Javascript中真正用来对URL编码的函数。  
  
它着眼于对整个URL进行编码，因此除了常见的符号以外，对其他一些在网址中有特殊含义的符号"; / ? : @ & = + $ , #"，也不进行编码。编码后，它输出符号的utf-8形式，并且在每个字节前加上%。  
  
最后一个Javascript编码函数是encodeURIComponent()。与encodeURI()的区别是，它用于对URL的组成部分进行个别编码，而不用于对整个URL进行编码。  
  
因此，"; / ? : @ & = + $ , #"，这些在encodeURI()中不被编码的符号，在encodeURIComponent()中统统会被编码。至于具体的编码方法，两者是一样。  
  
它对应的解码函数是decodeURIComponent()。  
# JS代码中的use strict是什么意思？  
use strict是一种ECMAscript5添加的(严格）运行模式，这种模式使得Javascript 在更严格的条件下运行。  
  
设立"严格模式"的目的，主要有以下几个:  
  
* 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;消除代码运行的一些不安全之处，保证代码运行的安全;  
* 提高编译器效率，增加运行速度;  
* 为未来新版本的Javascript 做好铺垫。  
  
区别:  
  
* 禁止使用with语句。  
* 禁止this关键字指向全局对象。  
* 对象不能有重名的属性。  
# 什么是变量提升  
函数在运行的时候，会首先创建执行上下文，然后将执行上下文入栈，然后当此执行上下文处于栈顶时，开始运行执行上下文。  
  
在创建执行上下文的过程中会做三件事：创建变量对象，创建作用域链，确定 this 指向，其中创建变量对象的过程中，首先会为 arguments 创建一个属性，值为 arguments，然后会扫码 function 函数声明，创建一个同名属性，值为函数的引用，接着会扫码 var 变量声明，创建一个同名属性，值为 undefined，这就是变量提升。  
# 箭头函数和普通函数有啥区别？箭头函数能当构造函数吗？  
## 什么是箭头函数？  
  
ES6中允许使用箭头=>来定义箭头函数，具体语法，我们来看一个简单的例子：  
  
```js  
// 箭头函数  
let fun = (name) => {  
    // 函数体  
    return `Hello ${name} !`;  
};  
  
// 等同于  
let fun = function (name) {  
    // 函数体  
    return `Hello ${name} !`;  
};  
```  
  
可以看出，定义箭头函在数语法上要比普通函数简洁得多。箭头函数省去了function关键字，采用箭头=>来定义函数。函数的参数放在=>前面的括号中，函数体跟在=>后的花括号中。  
  
## 箭头函数与普通函数的区别  
  
1、语法更加简洁、清晰  
  
从上面的基本语法示例中可以看出，箭头函数的定义要比普通函数定义简洁、清晰得多，很快捷。  
  
2、箭头函数不会创建自己的this（重要！！深入理解！！）  
  
我们先来看看MDN上对箭头函数this的解释。  
  
> 箭头函数不会创建自己的this，所以它没有自己的this，它只会从自己的作用域链的上一层继承this。  
  
箭头函数没有自己的this，它会捕获自己在定义时（注意，是定义时，不是调用时）所处的外层执行环境的this，并继承这个this值。所以，箭头函数中this的指向在它被定义的时候就已经确定了，之后永远不会改变。  
  
3、箭头函数继承而来的this指向永远不变（重要！！深入理解！！）  
  
上面的例子，就完全可以说明箭头函数继承而来的this指向永远不变。对象obj的方法b是使用箭头函数定义的，这个函数中的this就永远指向它定义时所处的全局执行环境中的this，即便这个函数是作为对象obj的方法调用，this依旧指向Window对象。  
  
4、.call()/.apply()/.bind()无法改变箭头函数中this的指向  
  
.call()/.apply()/.bind()方法可以用来动态修改函数执行时this的指向，但由于箭头函数的this定义时就已经确定且永远不会改变。所以使用这些方法永远也改变不了箭头函数this的指向，虽然这么做代码不会报错。  
  
5、箭头函数不能作为构造函数使用  
  
我们先了解一下构造函数的new都做了些什么？简单来说，分为四步：   
  
① JS内部首先会先生成一个对象；   
② 再把函数中的this指向该对象；  
③ 然后执行构造函数中的语句；  
④ 最终返回该对象实例。  
  
但是！！因为箭头函数没有自己的this，它的this其实是继承了外层执行环境中的this，且this指向永远不会随在哪里调用、被谁调用而改变，所以箭头函数不能作为构造函数使用，或者说构造函数不能定义成箭头函数，否则用new调用时会报错！  
  
6、箭头函数没有自己的arguments  
  
箭头函数没有自己的arguments对象。在箭头函数中访问arguments实际上获得的是外层局部（函数）执行环境中的值。  
  
7、箭头函数没有原型prototype  
  
```js  
let sayHi = () => {  
    console.log('Hello World !')  
};  
console.log(sayHi.prototype); // undefined  
```  
  
8、箭头函数不能用作Generator函数，不能使用yeild关键字  
  
  
# WebSocket 中的心跳是为了解决什么问题？  
* 为了定时发送消息，使连接不超时自动断线，避免后端设了超时时间自动断线。所以需要定时发送消息给后端，让后端服务器知道连接还在通消息不能断。  
  
* 为了检测在正常连接的状态下，后端是否正常。如果我们发了一个定时检测给后端，后端按照约定要下发一个检测消息给前端，这样才是正常的。如果后端没有正常下发，就要根据设定的超时进行重连。  
  
  
  
  
# 说说对 WebSocket 的了解  
## 什么是WebSocket  
  
HTML5开始提供的一种浏览器与服务器进行全双工通讯的网络技术，属于应用层协议。它基于TCP传输协议，并复用HTTP的握手通道。  
  
## 优点   
  
说到优点，这里的对比参照物是HTTP协议，概括地说就是：支持双向通信，更灵活，更高效，可扩展性更好。  
  
* 支持双向通信，实时性更强。  
* 更好的二进制支持。  
* 较少的控制开销。连接创建后，ws客户端、服务端进行数据交换时，协议控制的数据包头部较小。在不包含头部的情况下，服务端到客户端的包头只有2~10字节（取决于数据包长度），客户端到服务端的的话，需要加上额外的4字节的掩码。而HTTP协议每次通信都需要携带完整的头部。  
* 支持扩展。ws协议定义了扩展，用户可以扩展协议，或者实现自定义的子协议。（比如支持自定义压缩算法等）  
  
  
  
  
# Service worker是什么？  
service worker是PWA的重要组成部分，W3C 组织早在 2014 年 5 月就提出过 Service Worker 这样的一个 HTML5 API ，主要用来做持久的离线缓存，也是Web Worker的升级版。  
  
Service worker (简称 SW) 是一个注册在指定源和路径下的事件驱动 Worker。它采用 JavaScript 控制关联的页面或者网站，拦截并修改访问和资源请求，细粒度地缓存资源。你可以完全控制应用在特定情形（最常见的情形是网络不可用）下的表现。  
  
  
# 什么是 PWA？  
PWA的中文名叫做渐进式网页应用，早在2014年， W3C 公布过 Service Worker 的相关草案，但是其在生产环境被 Chrome 支持是在 2015 年。因此，如果我们把 PWA 的关键技术之一 Service Worker 的出现作为 PWA 的诞生时间，那就应该是 2015 年。  
  
自 2015 年以来，PWA 相关的技术不断升级优化，在用户体验和用户留存两方面都提供了非常好的解决方案。PWA 可以将 Web 和 App 各自的优势融合在一起：渐进式、可响应、可离线、实现类似 App 的交互、即时更新、安全、可以被搜索引擎检索、可推送、可安装、可链接。  
  
需要特别说明的是，PWA 不是特指某一项技术，而是应用了多项技术的 Web App。其核心技术包括 App Manifest、Service Worker、Web Push，等等。  
# 如何判断一个对象是不是空对象？  
```js  
// 方法1  
Object.keys(obj).length === 0  
  
// 方法2  
JSON.stringify(obj) === '{}'  
```  
# NaN 是什么，用 typeof 会输出什么？  
NaN：Not a Number，表示非数字  
  
typeof NaN === 'number'  
# async/await 和 Promise 有什么关系？  
## Promise  
  
> Promise 对象是一个代理对象（代理一个值），被代理的值在Promise对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的promise对象  
  
## async/await  
  
es2017的新语法，async/await就是generator + promise的语法糖  
  
async/await 和 Promise 的关系非常的巧妙，await必须在async内使用，并装饰一个Promise对象，async返回的也是一个Promise对象。  
  
async/await中的return/throw会代理自己返回的Promise的resolve/reject，而一个Promise的resolve/reject会使得await得到返回值或抛出异常。  
  
* 如果方法内无await节点  
	* return 一个字面量则会得到一个{PromiseStatus: resolved}的Promise。  
	* throw 一个Error则会得到一个{PromiseStatus: rejected}的Promise。  
  
* 如果方法内有await节点  
	* async会返回一个{PromiseStatus: pending}的Promise（发生切换，异步等待Promise的执行结果）。  
	* Promise的resolve会使得await的代码节点获得相应的返回结果，并继续向下执行。  
	* Promise的reject 会使得await的代码节点自动抛出相应的异常，终止向下继续执行。  
#  Promise中，resolve后面的语句是否还会执行？  
会被执行。如果不需要执行，需要在 resolve 语句前加上 return。  
# 写一个 LRU 缓存函数  
关于缓存，有个常见的例子是，当用户访问不同站点时，浏览器需要缓存在对应站点的一些信息，这样当下次访问同一个站点的时候，就可以使访问速度变快（因为一部分数据可以直接从缓存读取）。 但是想想内存空间是有限的，所以必须有一些规则来管理缓存的使用，而LRU（Least Recently Used） Cache就是其中之一，直接翻译就是“最不经常使用的数据，重要性是最低的，应该优先删除”。  
  
## 需求分析  
  
假设我们要实现一个简化版的这个功能，先整理下需求：  
  
* 需要提供put方法，用于写入不同的缓存数据，假设每条数据形式是{'域名','info'},例如{'https://segmentfault.com': '一些关键信息'}（如果是同一站点重复写入，就覆盖）;  
* 当缓存达到上限时， 调用put写入缓存之前, 要删除最近最少使用的数据；  
* 提供get方法，用于读取缓存数据，同时需要把被读取的数据，移动到最近使用数据 ；  
* 考虑到读取性能，希望get操作的复杂度是O(1)（简单理解就是，读取缓存时不能去遍历所有数据）  
  
## 数据选型  
  
首先题目里很明显的提到了，需要能够标记数据的插入或使用顺序， 所以肯定不能简单使用object实现，需要借助数组，或者es6的Map和Set实现(Map和Set数据遍历是有序的，遍历顺序即插入顺序)；  
  
其次需要实现O(1)复杂度，那就也无法用单纯使用数组来实现，所以可以考虑的只有Map和Set，那么最后再考虑下数据重复性的问题，会发现这道题不太需要考虑这个场景，所以我们可以先使用Map来实现。  
  
由于Map的特性是：新插入的数据排在后面，旧数据放在前面， 所以我们只要专注于维持这个逻辑就好了:  
  
* 如果遇到要删除数据，则优先从前面删除, 因为最前面的必定是最不常用数据；  
* 如果读取某条数据，则应该把数据放到末尾，保证该数据变为最近使用数据；  
  
## 算法实现  
  
接下来就可以一步步是实现代码了，首先是最基本的 构造函数:  
  
```js  
// 第一步代码  
class LRUCache {  
    constructor(n){  
        this.size = n; // 初始化最大缓存数据条数n  
        this.data = new Map(); // 初始化缓存空间map  
    }  
}  
```  
  
接下来是put方法，put方法要处理3个逻辑：  
  
1、如果待写入的域名，已存在于内存之中，直接更新数据并移动到末尾；  
2、如果当前未达到缓存数量上限，直接写入新数据；  
3、如果当前已经达到缓存数量上限， 要先删除最不经常使用的数据，再写入数据；  
  
  
其他都可以直接操作，移动到末尾这个行为，可以拆成"先删除该数据，再从末尾重新插入一条该数据"，这样就简单多了。所以我们继续更新代码：  
```js  
// 第一步代码  
class LRUCache {  
    constructor(n){  
        this.size = n; // 初始化最大缓存数据条数n  
        this.data = new Map(); // 初始化缓存空间map  
    }  
    // 第二步代码  
    put(domain, info){  
        if(this.data.has(domain)){  
            this.data.delete(domain); // 移除数据  
            this.data.set(domain, info)// 在末尾重新插入数据  
            return;  
        }  
        if(this.data.size >= this.size) {  
            // 删除最不常用数据  
            const firstKey= this.data.keys().next().value; // 不必当心data为空，因为this.size 一般不会取0，满足this.data.size >= this.size时，this.data自然也不为空。  
            this.data.delete(firstKey);  
        }  
        this.data.set(domain, info) // 写入数据  
    }  
}  
```  
  
接着就只剩下get方法了，get方法同样也要处理2种逻辑：  
  
1、根据给定的key，查找是否有对应的信息，若不存在则返回false；  
2、若第一步结果存在，则把被访问数据移动到末尾；  
  
```js  
// 第一步代码  
class LRUCache {  
    constructor(n){  
        this.size = n; // 初始化最大缓存数据条数n  
        this.data = new Map(); // 初始化缓存空间map  
    }  
      
    // 第二步代码  
    put(domain, info){  
        if(this.data.size >= this.size) {  
        // 删除最不常用数据  
        const firstKey= [...this.data.keys()][0];// 次数不必当心data为空，因为this.size 一般不会取0，满足this.data.size >= this.size时，this.data自然也不为空。  
        this.data.delete(firstKey);  
        }  
        this.data.set(domain, info) // 写入数据  
    }  
  
    // 第三步代码  
    get(domain) {  
        if(!this.data.has(domain)){  
            return false;  
        }  
        const info = this.data.get(domain); //获取结果  
        this.data.delete(domain); // 移除数据  
        this.data.set(domain, info); // 重新添加该数据  
        return info;  
    }  
}  
```  
  
这一步要稍微注意的是，我们是先移除数据后添加数据，严格遵循最大数量不超过n。  
  
  
  
# JSBridge是什么？  
JSBridge是给 JavaScript 提供调用 Native 功能的接口，让混合开发中的前端部分可以方便地使用 Native 的功能（例如：地址位置、摄像头）。  
  
实际上，JSBridge 就像其名称中的Bridge的意义一样，是 Native 和非 Native 之间的桥梁，它的核心是构建 Native 和非 Native 间消息通信的通道，而且这个通信的通道是双向的。  
  
```  
双向通信的通道:  
  
JS 向 Native 发送消息: 调用相关功能、通知 Native 当前 JS 的相关状态等。  
Native 向 JS 发送消息: 回溯调用结果、消息推送、通知 JS 当前 Native 的状态等。  
```  
# Babel 是什么？  
Babel 是一个 JavaScript 编译器。  
  
Babel 是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。  
# npm 是什么？  
npm是Node.js的包管理工具，它的诞生也极大的促进了前端的发展，在现代前端开发中都离不开npm的身影。  
  
常见的使用场景有以下几种：  
  
* 允许用户从NPM服务器下载别人编写的第三方包到本地使用。  
* 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。  
* 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。  
  
# CSR和SSR分别是什么？  
对于html的加载，以React为例，我们习惯的做法是加载js文件中的React代码，去生成页面渲染，同时，js也完成页面交互事件的绑定，这样的一个过程就是CSR（客户端渲染）。  
  
但如果这个js文件比较大的话，加载起来就会比较慢，到达页面渲染的时间就会比较长，导致首屏白屏。这时候，SSR（服务端渲染）就出来了：由服务端直接生成html内容返回给浏览器渲染首屏内容。  
  
但是服务端渲染的页面交互能力有限，如果要实现复杂交互，还是要通过引入js文件来辅助实现，我们把页面的展示内容和交互写在一起，让代码执行两次，这种方式就叫同构。  
  
CSR和SSR的区别在于，最终的html代码是从客户端添加的还是从服务端。  
  
  
  
  
  
  
# 微前端中的应用隔离是什么，一般是怎么实现的？  
  
应用隔离问题主要分为主应用和微应用，微应用和微应用之间的JavaScript执行环境隔离，CSS样式隔离。  
  
## CSS隔离  
  
当主应用和微应用同屏渲染时，就可能会有一些样式会相互污染，如果要彻底隔离CSS污染，可以采用CSS Module 或者命名空间的方式，给每个微应用模块以特定前缀，即可保证不会互相干扰，可以采用webpack的postcss插件，在打包时添加特定的前缀。  
  
而对于微应用与微应用之间的CSS隔离就非常简单，在每次应用加载时，将该应用所有的link和style 内容进行标记。在应用卸载后，同步卸载页面上对应的link和style即可。  
  
## JavaScript隔离  
  
每当微应用的JavaScript被加载并运行时，它的核心实际上是对全局对象Window的修改以及一些全局事件的改变，例如jQuery这个js运行后，会在Window上挂载一个window.$对象，对于其他库React，Vue也不例外。  
  
为此，需要在加载和卸载每个微应用的同时，尽可能消除这种冲突和影响，最普遍的做法是采用沙箱机制（SandBox）。  
  
沙箱机制的核心是让局部的JavaScript运行时，对外部对象的访问和修改处在可控的范围内，即无论内部怎么运行，都不会影响外部的对象。通常在Node.js端可以采用vm模块，而对于浏览器，则需要结合with关键字和window.Proxy对象来实现浏览器端的沙箱。  
# 实现微前端有哪些技术方案？  
单纯根据对概念的理解，很容易想到实现微前端的重要思想就是将应用进行拆解和整合，通常是一个父应用加上一些子应用，那么使用类似Nginx配置不同应用的转发，或是采用iframe来将多个应用整合到一起等等这些其实都属于微前端的实现方案：  
  
* Nginx路由转发	  
  
通过Nginx配置反向代理来实现不同路径映射到不同应用，例如www.abc.com/app1对应app1，www.abc.com/app2对应app2，这种方案本身并不属于前端层面的改造，更多的是运维的配置。	  
  
**优点**：简单，快速，易配置  
  
**缺点**：在切换应用时会触发浏览器刷新，影响体验  
  
* iframe嵌套	  
  
父应用单独是一个页面，每个子应用嵌套一个iframe，父子通信可采用postMessage或者contentWindow方式	  
  
**优点**：实现简单，子应用之间自带沙箱，天然隔离，互不影响	  
  
**缺点**：iframe的样式显示、兼容性等都具有局限性；太过简单而显得low  
  
* Web Components	  
  
每个子应用需要采用纯Web Components技术编写组件，是一套全新的开发模式	  
  
**优点**：每个子应用拥有独立的script和css，也可单独部署	  
  
**缺点**：对于历史系统改造成本高，子应用通信较为复杂易踩坑  
  
* 组合式应用路由分发	  
  
每个子应用独立构建和部署，运行时由父应用来进行路由管理，应用加载，启动，卸载，以及通信机制	  
  
**优点**：纯前端改造，体验良好，可无感知切换，子应用相互隔离	  
  
**缺点**：需要设计和开发，由于父子应用处于同一页面运行，需要解决子应用的样式冲突，变量对象污染，通信机制等技术点  
  
# 微前端可以解决什么问题？  
任何新技术的产生都是为了解决现有场景和需求下的技术痛点，微前端也不例外：  
  
* 拆分和细化  
  
当下前端领域，单页面应用（SPA）是非常流行的项目形态之一，而随着时间的推移以及应用功能的丰富，单页应用变得不再单一而是越来越庞大也越来越难以维护，往往是改一处而动全身，由此带来的发版成本也越来越高。微前端的意义就是将这些庞大应用进行拆分，并随之解耦，每个部分可以单独进行维护和部署，提升效率。  
  
* 整合历史系统  
  
在不少的业务中，或多或少会存在一些历史项目，这些项目大多以采用老框架类似（Backbone.js，Angular.js 1）的B端管理系统为主，介于日常运营，这些系统需要结合到新框架中来使用还不能抛弃，对此我们也没有理由浪费时间和精力重写旧的逻辑。而微前端可以将这些系统进行整合，在基本不修改来逻辑的同时来同时兼容新老两套系统并行运行。  
  
## 微前端架构具备以下几个核心价值：  
  
* 技术栈无关  
  
主框架不限制接入应用的技术栈，微应用具备完全自主权  
  
* 独立开发、独立部署  
  
微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新  
  
* 增量升级  
  
在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略  
  
* 独立运行时  
  
每个微应用之间状态隔离，运行时状态不共享  
  
# 什么是微前端？  
微前端（Micro-Frontends）是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。  
  
各个前端应用还可以独立运行、独立开发、独立部署。  
  
微前端不是单纯的前端框架或者工具，而是一套架构体系，  
# SSR是什么？Vue中怎么实现？  
  
 ![](https://static.vue-js.com/84bd83f0-4986-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、是什么  
  
`Server-Side Rendering` 我们称其为`SSR`，意为服务端渲染  
  
指由服务侧完成页面的 `HTML` 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程  
  
先来看看`Web`3个阶段的发展史：  
  
- 传统服务端渲染SSR  
- 单页面应用SPA  
- 服务端渲染SSR  
  
### **传统web开发**  
  
网页内容在服务端渲染完成，⼀次性传输到浏览器  
  
![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4d666b24e784fd09e565458c7753b54~tplv-k3u1fbpfcp-watermark.image)  
  
打开页面查看源码，浏览器拿到的是全部的`dom`结构  
  
### **单页应用SPA**  
  
单页应用优秀的用户体验，使其逐渐成为主流，页面内容由`JS`渲染出来，这种方式称为客户端渲染  
  
![img](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e8e524a8e7d44cba73e0c3416690087~tplv-k3u1fbpfcp-watermark.image)  
  
打开页面查看源码，浏览器拿到的仅有宿主元素`#app`，并没有内容  
  
### 服务端渲染SSR  
  
`SSR`解决方案，后端渲染出完整的首屏的`dom`结构返回，前端拿到的内容包括首屏及完整`spa`结构，应用激活后依然按照`spa`方式运行  
  
![img](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1604e7cfad7431f99920e8ab833bc37~tplv-k3u1fbpfcp-watermark.image)  
  
  
  
看完前端发展，我们再看看`Vue`官方对`SSR`的解释：  
  
> Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序  
>  
> 服务器渲染的 Vue.js 应用程序也可以被认为是"同构"或"通用"，因为应用程序的大部分代码都可以在服务器和客户端上运行  
  
我们从上门解释得到以下结论：  
  
- `Vue SSR`是一个在`SPA`上进行改良的服务端渲染  
- 通过`Vue SSR`渲染的页面，需要在客户端激活才能实现交互  
- `Vue SSR`将包含两部分：服务端渲染的首屏，包含交互的`SPA`  
  
  
  
## 二、解决了什么  
  
SSR主要解决了以下两种问题：  
  
- seo：搜索引擎优先爬取页面`HTML`结构，使用`ssr`时，服务端已经生成了和业务想关联的`HTML`，有利于`seo`  
- 首屏呈现渲染：用户无需等待页面所有`js`加载完成就可以看到页面视图（压力来到了服务器，所以需要权衡哪些用服务端渲染，哪些交给客户端）  
  
但是使用`SSR`同样存在以下的缺点：  
  
- 复杂度：整个项目的复杂度  
  
- 库的支持性，代码兼容  
  
- 性能问题  
  
  - 每个请求都是`n`个实例的创建，不然会污染，消耗会变得很大  
  
  - 缓存 `node serve `、 `ngin`x判断当前用户有没有过期，如果没过期的话就缓存，用刚刚的结果。  
  - 降级：监控`cpu`、内存占用过多，就`spa`，返回单个的壳  
  
- 服务器负载变大，相对于前后端分离务器只需要提供静态资源来说，服务器负载更大，所以要慎重使用  
  
所以在我们选择是否使用`SSR`前，我们需要慎重问问自己这些问题：  
  
1. 需要`SEO`的页面是否只是少数几个，这些是否可以使用预渲染（Prerender SPA Plugin）实现  
2. 首屏的请求响应逻辑是否复杂，数据返回是否大量且缓慢  
  
## 三、如何实现  
  
对于同构开发，我们依然使用`webpack`打包，我们要解决两个问题：服务端首屏渲染和客户端激活  
  
这里需要生成一个服务器`bundle`文件用于服务端首屏渲染和一个客户端`bundle`文件用于客户端激活  
  
 ![](https://static.vue-js.com/9dcd12c0-4986-11eb-85f6-6fac77c0c9b3.png)  
  
代码结构 除了两个不同入口之外，其他结构和之前`vue`应用完全相同  
  
```js  
src  
├── router  
├────── index.js # 路由声明  
├── store  
├────── index.js # 全局状态  
├── main.js # ⽤于创建vue实例  
├── entry-client.js # 客户端⼊⼝，⽤于静态内容“激活”  
└── entry-server.js # 服务端⼊⼝，⽤于⾸屏内容渲染  
```  
  
路由配置  
  
```js  
import Vue from "vue";  
import Router from "vue-router";  
  
Vue.use(Router);  
//导出⼯⼚函数  
  
export function createRouter() {  
    return new Router({  
        mode: 'history',  
        routes: [  
            // 客户端没有编译器，这⾥要写成渲染函数  
            { path: "/", component: { render: h => h('div', 'index page') } },  
            { path: "/detail", component: { render: h => h('div', 'detail page') } }  
        ]  
    });  
}  
```  
  
主文件main.js  
  
跟之前不同，主文件是负责创建`vue`实例的工厂，每次请求均会有独立的`vue`实例创建  
  
```js  
import Vue from "vue";  
import App from "./App.vue";  
import { createRouter } from "./router";  
// 导出Vue实例⼯⼚函数，为每次请求创建独⽴实例  
// 上下⽂⽤于给vue实例传递参数  
export function createApp(context) {  
    const router = createRouter();  
    const app = new Vue({  
        router,  
        context,  
        render: h => h(App)  
    });  
    return { app, router };  
}  
```  
  
编写服务端入口`src/entry-server.js`  
  
它的任务是创建`Vue`实例并根据传入`url`指定首屏  
  
```js  
import { createApp } from "./main";  
// 返回⼀个函数，接收请求上下⽂，返回创建的vue实例  
export default context => {  
    // 这⾥返回⼀个Promise，确保路由或组件准备就绪  
    return new Promise((resolve, reject) => {  
        const { app, router } = createApp(context);  
        // 跳转到⾸屏的地址  
        router.push(context.url);  
        // 路由就绪，返回结果  
        router.onReady(() => {  
            resolve(app);  
        }, reject);  
    });  
};  
```  
  
编写客户端入口`entry-client.js`  
  
客户端入口只需创建`vue`实例并执行挂载，这⼀步称为激活  
  
```js  
import { createApp } from "./main";  
// 创建vue、router实例  
const { app, router } = createApp();  
// 路由就绪，执⾏挂载  
router.onReady(() => {  
    app.$mount("#app");  
});  
```  
  
对`webpack`进行配置  
  
安装依赖  
  
```js  
npm install webpack-node-externals lodash.merge -D  
```  
  
对`vue.config.js`进行配置  
  
```js  
// 两个插件分别负责打包客户端和服务端  
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");  
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");  
const nodeExternals = require("webpack-node-externals");  
const merge = require("lodash.merge");  
// 根据传⼊环境变量决定⼊⼝⽂件和相应配置项  
const TARGET_NODE = process.env.WEBPACK_TARGET === "node";  
const target = TARGET_NODE ? "server" : "client";  
module.exports = {  
    css: {  
        extract: false  
    },  
    outputDir: './dist/'+target,  
    configureWebpack: () => ({  
        // 将 entry 指向应⽤程序的 server / client ⽂件  
        entry: `./src/entry-${target}.js`,  
        // 对 bundle renderer 提供 source map ⽀持  
        devtool: 'source-map',  
        // target设置为node使webpack以Node适⽤的⽅式处理动态导⼊，  
        // 并且还会在编译Vue组件时告知`vue-loader`输出⾯向服务器代码。  
        target: TARGET_NODE ? "node" : "web",  
        // 是否模拟node全局变量  
        node: TARGET_NODE ? undefined : false,  
        output: {  
            // 此处使⽤Node⻛格导出模块  
            libraryTarget: TARGET_NODE ? "commonjs2" : undefined  
        },  
        // https://webpack.js.org/configuration/externals/#function  
        // https://github.com/liady/webpack-node-externals  
        // 外置化应⽤程序依赖模块。可以使服务器构建速度更快，并⽣成较⼩的打包⽂件。  
        externals: TARGET_NODE  
        ? nodeExternals({  
            // 不要外置化webpack需要处理的依赖模块。  
            // 可以在这⾥添加更多的⽂件类型。例如，未处理 *.vue 原始⽂件，  
            // 还应该将修改`global`（例如polyfill）的依赖模块列⼊⽩名单  
            whitelist: [/\.css$/]  
        })  
        : undefined,  
        optimization: {  
            splitChunks: undefined  
        },  
        // 这是将服务器的整个输出构建为单个 JSON ⽂件的插件。  
        // 服务端默认⽂件名为 `vue-ssr-server-bundle.json`  
        // 客户端默认⽂件名为 `vue-ssr-client-manifest.json`。  
        plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new  
                  VueSSRClientPlugin()]  
    }),  
    chainWebpack: config => {  
        // cli4项⽬添加  
        if (TARGET_NODE) {  
            config.optimization.delete('splitChunks')  
        }  
  
        config.module  
            .rule("vue")  
            .use("vue-loader")  
            .tap(options => {  
            merge(options, {  
                optimizeSSR: false  
            });  
        });  
    }  
};  
```  
  
对脚本进行配置，安装依赖  
  
```js  
npm i cross-env -D  
```  
  
定义创建脚本`package.json`  
  
```js  
"scripts": {  
 "build:client": "vue-cli-service build",  
 "build:server": "cross-env WEBPACK_TARGET=node vue-cli-service build",  
 "build": "npm run build:server && npm run build:client"  
}  
```  
  
> 执行打包：npm run build  
  
最后修改宿主文件`/public/index.html`  
  
```html  
<!DOCTYPE html>  
<html lang="en">  
    <head>  
        <meta charset="utf-8">  
        <meta http-equiv="X-UA-Compatible" content="IE=edge">  
        <meta name="viewport" content="width=device-width,initial-scale=1.0">  
        <title>Document</title>  
    </head>  
    <body>  
        <!--vue-ssr-outlet-->  
    </body>  
</html>  
```  
  
> <!--vue-ssr-outlet-->   是服务端渲染入口位置，注意不能为了好看而在前后加空格  
  
  
  
安装`vuex`  
  
```js  
npm install -S vuex  
```  
  
创建`vuex`工厂函数  
  
```js  
import Vue from 'vue'  
import Vuex from 'vuex'  
Vue.use(Vuex)  
export function createStore () {  
    return new Vuex.Store({  
        state: {  
            count:108  
        },  
        mutations: {  
            add(state){  
                state.count += 1;  
            }  
        }  
    })  
}  
```  
  
在`main.js`文件中挂载`store`  
  
```js  
import { createStore } from './store'  
export function createApp (context) {  
    // 创建实例  
    const store = createStore()  
    const app = new Vue({  
        store, // 挂载  
        render: h => h(App)  
    })  
    return { app, router, store }  
}  
```  
  
服务器端渲染的是应用程序的"快照"，如果应用依赖于⼀些异步数据，那么在开始渲染之前，需要先预取和解析好这些数据  
  
在`store`进行一步数据获取  
  
```js  
export function createStore() {  
    return new Vuex.Store({  
        mutations: {  
            // 加⼀个初始化  
            init(state, count) {  
                state.count = count;  
            },  
        },  
        actions: {  
            // 加⼀个异步请求count的action  
            getCount({ commit }) {  
                return new Promise(resolve => {  
                    setTimeout(() => {  
                        commit("init", Math.random() * 100);  
                        resolve();  
                    }, 1000);  
                });  
            },  
        },  
    });  
}  
```  
  
组件中的数据预取逻辑  
  
```js  
export default {  
    asyncData({ store, route }) { // 约定预取逻辑编写在预取钩⼦asyncData中  
        // 触发 action 后，返回 Promise 以便确定请求结果  
        return store.dispatch("getCount");  
    }  
};  
```  
  
服务端数据预取，`entry-server.js`  
  
```js  
import { createApp } from "./app";  
export default context => {  
    return new Promise((resolve, reject) => {  
        // 拿出store和router实例  
        const { app, router, store } = createApp(context);  
        router.push(context.url);  
        router.onReady(() => {  
            // 获取匹配的路由组件数组  
            const matchedComponents = router.getMatchedComponents();  
  
            // 若⽆匹配则抛出异常  
            if (!matchedComponents.length) {  
                return reject({ code: 404 });  
            }  
  
            // 对所有匹配的路由组件调⽤可能存在的`asyncData()`  
            Promise.all(  
                matchedComponents.map(Component => {  
                    if (Component.asyncData) {  
                        return Component.asyncData({  
                            store,  
                            route: router.currentRoute,  
                        });  
                    }  
                }),  
            )  
                .then(() => {  
                // 所有预取钩⼦ resolve 后，  
                // store 已经填充⼊渲染应⽤所需状态  
                // 将状态附加到上下⽂，且 `template` 选项⽤于 renderer 时，  
                // 状态将⾃动序列化为 `window.__INITIAL_STATE__`，并注⼊ HTML  
                context.state = store.state;  
  
                resolve(app);  
            })  
                .catch(reject);  
        }, reject);  
    });  
};  
```  
  
客户端在挂载到应用程序之前，`store` 就应该获取到状态，`entry-client.js`  
  
```js  
// 导出store  
const { app, router, store } = createApp();  
// 当使⽤ template 时，context.state 将作为 window.__INITIAL_STATE__ 状态⾃动嵌⼊到最终的 HTML   
// 在客户端挂载到应⽤程序之前，store 就应该获取到状态：  
if (window.__INITIAL_STATE__) {  
    store.replaceState(window.__INITIAL_STATE__);  
}  
```  
  
客户端数据预取处理，`main.js`  
  
```js  
Vue.mixin({  
    beforeMount() {  
        const { asyncData } = this.$options;  
        if (asyncData) {  
            // 将获取数据操作分配给 promise  
            // 以便在组件中，我们可以在数据准备就绪后  
            // 通过运⾏ `this.dataPromise.then(...)` 来执⾏其他任务  
            this.dataPromise = asyncData({  
                store: this.$store,  
                route: this.$route,  
            });  
        }  
    },  
});  
```  
  
修改服务器启动文件  
  
```js  
// 获取⽂件路径  
const resolve = dir => require('path').resolve(__dirname, dir)  
// 第 1 步：开放dist/client⽬录，关闭默认下载index⻚的选项，不然到不了后⾯路由  
app.use(express.static(resolve('../dist/client'), {index: false}))  
// 第 2 步：获得⼀个createBundleRenderer  
const { createBundleRenderer } = require("vue-server-renderer");  
// 第 3 步：服务端打包⽂件地址  
const bundle = resolve("../dist/server/vue-ssr-server-bundle.json");  
// 第 4 步：创建渲染器  
const renderer = createBundleRenderer(bundle, {  
    runInNewContext: false, // https://ssr.vuejs.org/zh/api/#runinnewcontext  
    template: require('fs').readFileSync(resolve("../public/index.html"), "utf8"), // 宿主⽂件  
    clientManifest: require(resolve("../dist/client/vue-ssr-clientmanifest.json")) // 客户端清单  
});  
app.get('*', async (req,res)=>{  
    // 设置url和title两个重要参数  
    const context = {  
        title:'ssr test',  
        url:req.url  
    }  
    const html = await renderer.renderToString(context);  
    res.send(html)  
})  
```  
  
  
  
### 小结  
  
- 使用`ssr`不存在单例模式，每次用户请求都会创建一个新的`vue`实例  
- 实现`ssr`需要实现服务端首屏渲染和客户端激活  
- 服务端异步获取数据`asyncData`可以分为首屏异步获取和切换组件获取  
  - 首屏异步获取数据，在服务端预渲染的时候就应该已经完成  
  - 切换组件通过`mixin`混入，在`beforeMount`钩子完成数据获取  
  
# [] == ![]结果是什么？  
== 中，左右两边都需要转换为数字然后进行比较。  
  
[]转换为数字为0。  
  
![] 首先是转换为布尔值，由于[]作为一个引用类型转换为布尔值为true, 因此![]为false，进而在转换成数字，变为0。 0 == 0 ， 结果为true  
# forEach中return有效果吗？如何中断forEach循环？  
在forEach中用return不会返回，函数会继续执行。  
  
## 中断方法  
  
* 使用try监视代码块，在需要中断的地方抛出异常。  
* 官方推荐方法（替换方法）：用every和some替代forEach函数。  
	* every在碰到return false的时候，中止循环。  
    * some在碰到return true的时候，中止循环。  
```js  
for(var i = 1; i <= 5; i ++){  
  setTimeout(function timer(){  
  	console.log(i)  
  }, 0)  
}  
```  
# 下面执行后输出什么？  
结论： 输出5个6。  
  
因为setTimeout为宏任务，由于JS中单线程eventLoop机制，在主线程同步任务执行完后才去执行宏任  
务，因此循环结束后setTimeout中的回调才依次执行，但输出i的时候当前作用域没有，往上一级再找，发现了i,此时循环已经结束，i变成了6。因此会全部输出6。  
for(var i = 1; i <= 5; i ++){  
  setTimeout(function timer(){  
  	console.log(i)  
  }, 0)  
}  
# 改造下面的代码，让它输出1，2，3，4，5  
解决方法：  
  
* 利用IIFE(立即执行函数表达式)当每次for循环时，把此时的i变量传递到定时器中  
  
```js  
for(var i = 1;i <= 5;i++){  
  (function(j){  
    setTimeout(function timer(){  
    	console.log(j)  
    }, 0)  
  })(i)  
}  
  
```  
  
* 给定时器传入第三个参数, 作为timer函数的第一个函数参数  
  
```js  
for(var i=1;i<=5;i++){  
  setTimeout(function timer(j){  
  	console.log(j)  
  }, 0, i)  
}  
```  
  
* 使用ES6中的let  
```js  
for(let i = 1; i <= 5; i++){  
  setTimeout(function timer(){  
 	 console.log(i)  
  },0)  
}  
  
```  
let使JS发生革命性的变化，让JS有函数作用域变为了块级作用域，用let后作用域链不复存在。  
  
  
# Object.is和===有什么区别？  
Object在严格等于的基础上修复了一些特殊情况下的失误，具体来说就是+0和-0，NaN和NaN。   
  
源码如下：  
```js  
function is(x, y) {  
if (x === y) {  
//运行到1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不  
一样的  
return x !== 0 || y !== 0 || 1 / x === 1 / y;  
} else {  
//NaN===NaN是false,这是不对的，我们在这里做一个拦截，x !== x，那么一定是 NaN, y 同理  
//两个都是NaN的时候返回true  
return x !== x && y !== y;  
}  
  
```  
  
  
# instanceof能否判断基本数据类型？  
能。比如下面这种方式:  
  
```js  
class PrimitiveNumber {  
    static [Symbol.hasInstance](x) {  
        return typeof x === 'number'  
    }  
}  
console.log(111 instanceof PrimitiveNumber) // true  
  
```  
  
其实就是自定义instanceof行为的一种方式，这里将原有的instanceof方法重定义，换成了typeof，因此能够判断基本数据类型。  
  
  
# typeof 是否能正确判断类型？  
对于原始类型来说，除了 null 都可以调用typeof显示正确的类型。  
  
```js  
typeof 1 // 'number'  
typeof '1' // 'string'  
typeof undefined // 'undefined'  
typeof true // 'boolean'  
typeof Symbol() // 'symbol'  
  
```  
  
但对于引用数据类型，除了函数之外，都会显示"object"。  
  
  
  
```js  
typeof [] // 'object'  
typeof {} // 'object'  
typeof console.log // 'function'  
  
```  
  
因此采用typeof判断对象数据类型是不合适的，采用instanceof会更好，instanceof的原理是基于原型链的查询，只要处于原型链中，判断永远为true  
  
  
  
```js  
  
const Person = function() {}  
const p1 = new Person()  
p1 instanceof Person // true  
var str1 = 'hello world'  
str1 instanceof String // false  
var str2 = new String('hello world')  
str2 instanceof String // true  
  
```  
# 什么是BigInt?  
BigInt是一种新的数据类型，用于当整数值大于Number数据类型支持的范围时。这种数据类型允许我们安全地对 大整数 执行算术操作，表示高分辨率的时间戳，使用大整数id，等等，而不需要使用库。  
  
  
# 0.1+0.2为什么不等于0.3？  
0.1和0.2在转换成二进制后会无限循环，由于标准位数的限制后面多余的位数会被截掉，此时就已经出现了精度的损失，相加后因浮点数小数位的限制而截断的二进制数字在转换为十进制就会变成 0.30000000000000004。  
# '1'.toString()为什么不会报错？  
其实在这个语句运行的过程中做了这样几件事情：  
  
```js  
var s = new Object('1');  
s.toString();  
s = null;  
```  
  
* 第一步: 创建Object类实例。注意为什么不是String ？ 由于Symbol和BigInt的出现，对它们调用new都会报错，目前ES6规范也不建议用new来创建基本类型的包装类。  
* 第二步: 调用实例方法。  
* 第三步: 执行完方法立即销毁这个实例。  
  
整个过程体现了 `基本包装类型` 的性质，而基本包装类型恰恰属于基本数据类型，包括Boolean, Number和String。  
# null是对象吗？为什么？  
null不是对象。  
  
虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象然而 null 表示为全零，所以将它错误的判断为 object 。  
# 什么是内存泄漏？什么原因会导致呢？  
内存泄露的解释：程序中己动态分配的堆内存由于某种原因未释放或无法释放。  
  
* 根据JS的垃圾回收机制，当内存中引用的次数为0的时候内存才会被回收  
* 全局执行上下文中的对象被标记为不再使用才会被释放  
  
## 内存泄露的几种场景  
  
* 全局变量过多。**通常是变量未被定义或者胡乱引用了全局变量**  
```js  
// main.js  
// 场景1  
function a(){  
    b=10;  
}  
a();  
b++;  
  
// 场景2  
setTimeout(()=>{  
    console.log(b)  
},1000)  
```  
  
* 闭包。 未手动解决必包遗留的内存引用。**定义了闭包就要消除闭包带来的副作用**。  
  
```js  
  
function closuer (){  
    const b = 0;  
    return (c)=> b + c  
}  
  
const render = closuer();  
  
render();  
render = null; // 手动设置为null，GC会自己去清除  
```  
  
* 事件监听未被移除  
```js  
  
function addEvent (){  
 const node =  document.getElementById('warp');  
    node.addEventListener('touchmove',()=>{  
        console.log('In Move');  
    })  
}  
  
const onTouchEnd = (){  
   const node =  document.getElementById('warp');  
   node.  
}  
  
useEffect(()=>()=>{  
     const node =  document.getElementById('warp');  
     node.removeEventListener('touchmove');  
}) // 类似react 生命周期函数： componentWillUnmount  
render(<div id='warp' onTouchEnd={onTouchEnd}>  
 // code...  
</div>)  
```  
  
* 缓存。建议所有缓存都设置好过期时间。  
  
  
# webSocket如何兼容低浏览器  
  
* Adobe Flash Socket；  
* ActiveX HTMLFile (IE) ；  
* 基于 multipart 编码发送 XHR；  
* 基于长轮询的 XHR；  
# Vue3.0 所采用的 Composition Api 与 Vue2.x 使用的 Options Api 有什么不同？  

  

  
 ![](https://static.vue-js.com/8d6dd7b0-6048-11eb-85f6-6fac77c0c9b3.png)
  
 
  
## 开始之前
  
`Composition API` 可以说是`Vue3`的最大特点，那么为什么要推出`Composition Api`，解决了什么问题？
  

  
通常使用`Vue2`开发的项目，普遍会存在以下问题：
  

  
- 代码的可读性随着组件变大而变差
  
- 每一种代码复用的方式，都存在缺点
  
- TypeScript支持有限
  

  
以上通过使用`Composition Api`都能迎刃而解
  

  
## 正文
  
### 一、Options Api
  

  
`Options API`，即大家常说的选项API，即以`vue`为后缀的文件，通过定义`methods`，`computed`，`watch`，`data`等属性与方法，共同处理页面逻辑
  

  
如下图：
  

  
 ![](https://static.vue-js.com/9bf6d9d0-6048-11eb-85f6-6fac77c0c9b3.png)
  

  
可以看到`Options`代码编写方式，如果是组件状态，则写在`data`属性上，如果是方法，则写在`methods`属性上...
  

  
用组件的选项 (`data`、`computed`、`methods`、`watch`) 组织逻辑在大多数情况下都有效
  

  
然而，当组件变得复杂，导致对应属性的列表也会增长，这可能会导致组件难以阅读和理解
  

  

  
### 二、Composition Api 
  

  
在 Vue3 Composition API 中，组件根据逻辑功能来组织的，一个功能所定义的所有 API 会放在一起（更加的高内聚，低耦合）
  

  
即使项目很大，功能很多，我们都能快速的定位到这个功能所用到的所有 API
  

  

  
 ![](https://static.vue-js.com/acee9200-6048-11eb-ab90-d9ae814b240d.png)
  

  

  

  
### 三、对比
  

  
下面对`Composition Api `与`Options Api`进行两大方面的比较
  

  
- 逻辑组织
  
- 逻辑复用
  

  

  

  
#### 逻辑组织
  

  
##### Options API
  

  
假设一个组件是一个大型组件，其内部有很多处理逻辑关注点（对应下图不用颜色）
  

  
 ![](https://static.vue-js.com/dc83d070-6048-11eb-ab90-d9ae814b240d.png)
  

  

  

  
可以看到，这种碎片化使得理解和维护复杂组件变得困难
  

  
选项的分离掩盖了潜在的逻辑问题。此外，在处理单个逻辑关注点时，我们必须不断地“跳转”相关代码的选项块
  

  

  

  
##### Compostion API
  

  
而`Compositon API`正是解决上述问题，将某个逻辑关注点相关的代码全都放在一个函数里，这样当需要修改一个功能时，就不再需要在文件中跳来跳去
  

  
下面举个简单例子，将处理`count`属性相关的代码放在同一个函数了
  

  
```js
  
function useCount() {
  
    let count = ref(10);
  
    let double = computed(() => {
  
        return count.value * 2;
  
    });
  

  
    const handleConut = () => {
  
        count.value = count.value * 2;
  
    };
  

  
    console.log(count);
  

  
    return {
  
        count,
  
        double,
  
        handleConut,
  
    };
  
}
  
```
  

  
组件上中使用`count`
  

  
```js
  
export default defineComponent({
  
    setup() {
  
        const { count, double, handleConut } = useCount();
  
        return {
  
            count,
  
            double,
  
            handleConut
  
        }
  
    },
  
});
  
```
  

  
再来一张图进行对比，可以很直观地感受到 `Composition API `在逻辑组织方面的优势，以后修改一个属性功能的时候，只需要跳到控制该属性的方法中即可
  

  
![](https://static.vue-js.com/e5804bc0-5c58-11eb-85f6-6fac77c0c9b3.png)
  

  

  

  

  

  
#### 逻辑复用
  

  
在`Vue2`中，我们是用过`mixin`去复用相同的逻辑
  

  
下面举个例子，我们会另起一个`mixin.js`文件
  

  
```js
  
export const MoveMixin = {
  
  data() {
  
    return {
  
      x: 0,
  
      y: 0,
  
    };
  
  },
  

  
  methods: {
  
    handleKeyup(e) {
  
      console.log(e.code);
  
      // 上下左右 x y
  
      switch (e.code) {
  
        case "ArrowUp":
  
          this.y--;
  
          break;
  
        case "ArrowDown":
  
          this.y++;
  
          break;
  
        case "ArrowLeft":
  
          this.x--;
  
          break;
  
        case "ArrowRight":
  
          this.x++;
  
          break;
  
      }
  
    },
  
  },
  

  
  mounted() {
  
    window.addEventListener("keyup", this.handleKeyup);
  
  },
  

  
  unmounted() {
  
    window.removeEventListener("keyup", this.handleKeyup);
  
  },
  
};
  

  
```
  

  
然后在组件中使用
  

  
```js
  
<template>
  
  <div>
  
    Mouse position: x {{ x }} / y {{ y }}
  
  </div>
  
</template>
  
<script>
  
import mousePositionMixin from './mouse'
  
export default {
  
  mixins: [mousePositionMixin]
  
}
  
</script>
  
```
  

  
使用单个` mixin `似乎问题不大，但是当我们一个组件混入大量不同的 `mixins` 的时候
  

  
```js
  
mixins: [mousePositionMixin, fooMixin, barMixin, otherMixin]
  
```
  

  
会存在两个非常明显的问题：
  

  
- 命名冲突
  
- 数据来源不清晰
  

  

  
现在通过`Compositon API`这种方式改写上面的代码
  

  
```js
  
import { onMounted, onUnmounted, reactive } from "vue";
  
export function useMove() {
  
  const position = reactive({
  
    x: 0,
  
    y: 0,
  
  });
  

  
  const handleKeyup = (e) => {
  
    console.log(e.code);
  
    // 上下左右 x y
  
    switch (e.code) {
  
      case "ArrowUp":
  
        // y.value--;
  
        position.y--;
  
        break;
  
      case "ArrowDown":
  
        // y.value++;
  
        position.y++;
  
        break;
  
      case "ArrowLeft":
  
        // x.value--;
  
        position.x--;
  
        break;
  
      case "ArrowRight":
  
        // x.value++;
  
        position.x++;
  
        break;
  
    }
  
  };
  

  
  onMounted(() => {
  
    window.addEventListener("keyup", handleKeyup);
  
  });
  

  
  onUnmounted(() => {
  
    window.removeEventListener("keyup", handleKeyup);
  
  });
  

  
  return { position };
  
}
  
```
  

  
在组件中使用
  

  
```js
  
<template>
  
  <div>
  
    Mouse position: x {{ x }} / y {{ y }}
  
  </div>
  
</template>
  

  
<script>
  
import { useMove } from "./useMove";
  
import { toRefs } from "vue";
  
export default {
  
  setup() {
  
    const { position } = useMove();
  
    const { x, y } = toRefs(position);
  
    return {
  
      x,
  
      y,
  
    };
  

  
  },
  
};
  
</script>
  
```
  

  
可以看到，整个数据来源清晰了，即使去编写更多的 hook 函数，也不会出现命名冲突的问题
  

  

  
### 小结
  

  
- 在逻辑组织和逻辑复用方面，`Composition API`是优于`Options  API`
  
- 因为`Composition API`几乎是函数，会有更好的类型推断。
  
- `Composition API `对 `tree-shaking` 友好，代码也更容易压缩
  
- `Composition API`中见不到`this`的使用，减少了`this`指向不明的情况
  
- 如果是小型组件，可以继续使用`Options API`，也是十分友好的  
# Vue3.0里为什么要用 Proxy API 替代 defineProperty API ？  
  
 ![](https://static.vue-js.com/57aa5c80-5f7f-11eb-ab90-d9ae814b240d.png)  
  
  
## 一、Object.defineProperty  
  
定义：`Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象  
  
##### 为什么能实现响应式  
  
通过`defineProperty` 两个属性，`get`及`set`  
  
- get   
  
属性的 getter 函数，当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值  
  
- set   
  
属性的 setter 函数，当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。默认为 undefined  
  
下面通过代码展示：  
  
定义一个响应式函数`defineReactive`  
  
```js  
function update() {  
    app.innerText = obj.foo  
}  
  
function defineReactive(obj, key, val) {  
    Object.defineProperty(obj, key, {  
        get() {  
            console.log(`get ${key}:${val}`);  
            return val  
        },  
        set(newVal) {  
            if (newVal !== val) {  
                val = newVal  
                update()  
            }  
        }  
    })  
}  
```  
  
调用`defineReactive`，数据发生变化触发`update`方法，实现数据响应式  
  
```js  
const obj = {}  
defineReactive(obj, 'foo', '')  
setTimeout(()=>{  
    obj.foo = new Date().toLocaleTimeString()  
},1000)  
```  
  
在对象存在多个`key`情况下，需要进行遍历  
  
```js  
function observe(obj) {  
    if (typeof obj !== 'object' || obj == null) {  
        return  
    }  
    Object.keys(obj).forEach(key => {  
        defineReactive(obj, key, obj[key])  
    })  
}  
```  
  
如果存在嵌套对象的情况，还需要在`defineReactive`中进行递归  
  
```js  
function defineReactive(obj, key, val) {  
    observe(val)  
    Object.defineProperty(obj, key, {  
        get() {  
            console.log(`get ${key}:${val}`);  
            return val  
        },  
        set(newVal) {  
            if (newVal !== val) {  
                val = newVal  
                update()  
            }  
        }  
    })  
}  
```  
  
当给`key`赋值为对象的时候，还需要在`set`属性中进行递归  
  
```js  
set(newVal) {  
    if (newVal !== val) {  
        observe(newVal) // 新值是对象的情况  
        notifyUpdate()  
    }  
}  
```  
  
上述例子能够实现对一个对象的基本响应式，但仍然存在诸多问题  
  
现在对一个对象进行删除与添加属性操作，无法劫持到  
  
```js  
const obj = {  
    foo: "foo",  
    bar: "bar"  
}  
observe(obj)  
delete obj.foo // no ok  
obj.jar = 'xxx' // no ok  
```  
  
当我们对一个数组进行监听的时候，并不那么好使了  
  
```js  
const arrData = [1,2,3,4,5];  
arrData.forEach((val,index)=>{  
    defineProperty(arrData,index,val)  
})  
arrData.push() // no ok  
arrData.pop()  // no ok  
arrDate[0] = 99 // ok  
```  
  
可以看到数据的`api`无法劫持到，从而无法实现数据响应式，  
  
所以在`Vue2`中，增加了`set`、`delete` API，并且对数组`api`方法进行一个重写  
  
还有一个问题则是，如果存在深层的嵌套对象关系，需要深层的进行监听，造成了性能的极大问题  
  
### 小结  
  
- 检测不到对象属性的添加和删除  
- 数组`API`方法无法监听到  
- 需要对每个属性进行遍历监听，如果嵌套对象，需要深层监听，造成性能问题  
  
  
  
## 二、proxy  
  
`Proxy`的监听是针对一个对象的，那么对这个对象的所有操作会进入监听操作，这就完全可以代理所有属性了  
  
在`ES6`系列中，我们详细讲解过`Proxy`的使用，就不再述说了  
  
下面通过代码进行展示：  
  
定义一个响应式方法`reactive`  
  
```js  
function reactive(obj) {  
    if (typeof obj !== 'object' && obj != null) {  
        return obj  
    }  
    // Proxy相当于在对象外层加拦截  
    const observed = new Proxy(obj, {  
        get(target, key, receiver) {  
            const res = Reflect.get(target, key, receiver)  
            console.log(`获取${key}:${res}`)  
            return res  
        },  
        set(target, key, value, receiver) {  
            const res = Reflect.set(target, key, value, receiver)  
            console.log(`设置${key}:${value}`)  
            return res  
        },  
        deleteProperty(target, key) {  
            const res = Reflect.deleteProperty(target, key)  
            console.log(`删除${key}:${res}`)  
            return res  
        }  
    })  
    return observed  
}  
```  
  
测试一下简单数据的操作，发现都能劫持  
  
```js  
const state = reactive({  
    foo: 'foo'  
})  
// 1.获取  
state.foo // ok  
// 2.设置已存在属性  
state.foo = 'fooooooo' // ok  
// 3.设置不存在属性  
state.dong = 'dong' // ok  
// 4.删除属性  
delete state.dong // ok  
```  
  
再测试嵌套对象情况，这时候发现就不那么 OK 了  
  
```js  
const state = reactive({  
    bar: { a: 1 }  
})  
  
// 设置嵌套对象属性  
state.bar.a = 10 // no ok  
```  
  
如果要解决，需要在`get`之上再进行一层代理  
  
```js  
function reactive(obj) {  
    if (typeof obj !== 'object' && obj != null) {  
        return obj  
    }  
    // Proxy相当于在对象外层加拦截  
    const observed = new Proxy(obj, {  
        get(target, key, receiver) {  
            const res = Reflect.get(target, key, receiver)  
            console.log(`获取${key}:${res}`)  
            return isObject(res) ? reactive(res) : res  
        },  
    return observed  
}  
```  
  
  
## 三、总结  
  
`Object.defineProperty`只能遍历对象属性进行劫持  
  
```js  
function observe(obj) {  
    if (typeof obj !== 'object' || obj == null) {  
        return  
    }  
    Object.keys(obj).forEach(key => {  
        defineReactive(obj, key, obj[key])  
    })  
}  
```  
  
`Proxy`直接可以劫持整个对象，并返回一个新对象，我们可以只操作新的对象达到响应式目的  
  
```js  
function reactive(obj) {  
    if (typeof obj !== 'object' && obj != null) {  
        return obj  
    }  
    // Proxy相当于在对象外层加拦截  
    const observed = new Proxy(obj, {  
        get(target, key, receiver) {  
            const res = Reflect.get(target, key, receiver)  
            console.log(`获取${key}:${res}`)  
            return res  
        },  
        set(target, key, value, receiver) {  
            const res = Reflect.set(target, key, value, receiver)  
            console.log(`设置${key}:${value}`)  
            return res  
        },  
        deleteProperty(target, key) {  
            const res = Reflect.deleteProperty(target, key)  
            console.log(`删除${key}:${res}`)  
            return res  
        }  
    })  
    return observed  
}  
```  
  
`Proxy`可以直接监听数组的变化（`push`、`shift`、`splice`）  
  
```js  
const obj = [1,2,3]  
const proxtObj = reactive(obj)  
obj.psuh(4) // ok  
```  
  
`Proxy`有多达13种拦截方法,不限于`apply`、`ownKeys`、`deleteProperty`、`has`等等，这是`Object.defineProperty`不具备的  
  
正因为`defineProperty`自身的缺陷，导致`Vue2`在实现响应式过程需要实现其他的方法辅助（如重写数组方法、增加额外`set`、`delete`方法）  
  
```js  
// 数组重写  
const originalProto = Array.prototype  
const arrayProto = Object.create(originalProto)  
['push', 'pop', 'shift', 'unshift', 'splice', 'reverse', 'sort'].forEach(method => {  
  arrayProto[method] = function () {  
    originalProto[method].apply(this.arguments)  
    dep.notice()  
  }  
});  
  
// set、delete  
Vue.set(obj,'bar','newbar')  
Vue.delete(obj),'bar')  
```  
  
`Proxy` 不兼容IE，也没有 `polyfill`, `defineProperty` 能支持到IE9  
  
# Vue3.0 性能提升主要是通过哪几方面体现的？  
  
  
 ![](https://static.vue-js.com/2aac1020-5ed0-11eb-ab90-d9ae814b240d.png)  
  
  
  
## 一、编译阶段  
  
回顾`Vue2`，我们知道每个组件实例都对应一个 `watcher` 实例，它会在组件渲染的过程中把用到的数据`property`记录为依赖，当依赖发生改变，触发`setter`，则会通知`watcher`，从而使关联的组件重新渲染  
  
 ![](https://static.vue-js.com/39066120-5ed0-11eb-85f6-6fac77c0c9b3.png)  
  
试想一下，一个组件结构如下图  
  
```html  
<template>  
    <div id="content">  
        <p class="text">静态文本</p>  
        <p class="text">静态文本</p>  
        <p class="text">{{ message }}</p>  
        <p class="text">静态文本</p>  
        ...  
        <p class="text">静态文本</p>  
    </div>  
</template>  
```  
  
可以看到，组件内部只有一个动态节点，剩余一堆都是静态节点，所以这里很多 `diff` 和遍历其实都是不需要的，造成性能浪费  
  
因此，`Vue3`在编译阶段，做了进一步优化。主要有如下：  
  
- diff算法优化  
- 静态提升  
- 事件监听缓存  
- SSR优化  
  
  
  
#### diff算法优化  
  
`vue3`在`diff`算法中相比`vue2`增加了静态标记  
  
关于这个静态标记，其作用是为了会发生变化的地方添加一个`flag`标记，下次发生变化的时候直接找该地方进行比较  
  
下图这里，已经标记静态节点的`p`标签在`diff`过程中则不会比较，把性能进一步提高  
  
 ![](https://static.vue-js.com/c732e150-5c58-11eb-ab90-d9ae814b240d.png)  
  
关于静态类型枚举如下  
  
```js  
export const enum PatchFlags {  
  TEXT = 1,// 动态的文本节点  
  CLASS = 1 << 1,  // 2 动态的 class  
  STYLE = 1 << 2,  // 4 动态的 style  
  PROPS = 1 << 3,  // 8 动态属性，不包括类名和样式  
  FULL_PROPS = 1 << 4,  // 16 动态 key，当 key 变化时需要完整的 diff 算法做比较  
  HYDRATE_EVENTS = 1 << 5,  // 32 表示带有事件监听器的节点  
  STABLE_FRAGMENT = 1 << 6,   // 64 一个不会改变子节点顺序的 Fragment  
  KEYED_FRAGMENT = 1 << 7, // 128 带有 key 属性的 Fragment  
  UNKEYED_FRAGMENT = 1 << 8, // 256 子节点没有 key 的 Fragment  
  NEED_PATCH = 1 << 9,   // 512  
  DYNAMIC_SLOTS = 1 << 10,  // 动态 solt  
  HOISTED = -1,  // 特殊标志是负整数表示永远不会用作 diff  
  BAIL = -2 // 一个特殊的标志，指代差异算法  
}  
```  
  
  
  
#### 静态提升  
  
`Vue3`中对不参与更新的元素，会做静态提升，只会被创建一次，在渲染时直接复用  
  
这样就免去了重复的创建节点，大型应用会受益于这个改动，免去了重复的创建操作，优化了运行时候的内存占用  
  
```js  
<span>你好</span>  
  
<div>{{ message }}</div>  
```  
  
没有做静态提升之前  
  
```js  
export function render(_ctx, _cache, $props, $setup, $data, $options) {  
  return (_openBlock(), _createBlock(_Fragment, null, [  
    _createVNode("span", null, "你好"),  
    _createVNode("div", null, _toDisplayString(_ctx.message), 1 /* TEXT */)  
  ], 64 /* STABLE_FRAGMENT */))  
}  
```  
  
做了静态提升之后  
  
```js  
const _hoisted_1 = /*#__PURE__*/_createVNode("span", null, "你好", -1 /* HOISTED */)  
  
export function render(_ctx, _cache, $props, $setup, $data, $options) {  
  return (_openBlock(), _createBlock(_Fragment, null, [  
    _hoisted_1,  
    _createVNode("div", null, _toDisplayString(_ctx.message), 1 /* TEXT */)  
  ], 64 /* STABLE_FRAGMENT */))  
}  
  
// Check the console for the AST  
```  
  
静态内容`_hoisted_1`被放置在`render` 函数外，每次渲染的时候只要取 `_hoisted_1` 即可  
  
同时 `_hoisted_1` 被打上了 `PatchFlag` ，静态标记值为 -1 ，特殊标志是负整数表示永远不会用于 Diff  
  
  
  
#### 事件监听缓存  
  
默认情况下绑定事件行为会被视为动态绑定，所以每次都会去追踪它的变化  
  
```text  
<div>  
  <button @click = 'onClick'>点我</button>  
</div>  
```  
  
没开启事件监听器缓存  
  
```js  
export const render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {  
  return (_openBlock(), _createBlock("div", null, [  
    _createVNode("button", { onClick: _ctx.onClick }, "点我", 8 /* PROPS */, ["onClick"])  
                                             // PROPS=1<<3,// 8 //动态属性，但不包含类名和样式  
  ]))  
})  
```  
  
开启事件侦听器缓存后  
  
```js  
export function render(_ctx, _cache, $props, $setup, $data, $options) {  
  return (_openBlock(), _createBlock("div", null, [  
    _createVNode("button", {  
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onClick(...args)))  
    }, "点我")  
  ]))  
}  
```  
  
上述发现开启了缓存后，没有了静态标记。也就是说下次`diff`算法的时候直接使用  
  
  
  
#### SSR优化  
  
当静态内容大到一定量级时候，会用`createStaticVNode`方法在客户端去生成一个static node，这些静态`node`，会被直接`innerHtml`，就不需要创建对象，然后根据对象渲染  
  
```js  
div>  
	<div>  
		<span>你好</span>  
	</div>  
	...  // 很多个静态属性  
	<div>  
		<span>{{ message }}</span>  
	</div>  
</div>  
```  
  
编译后  
  
```js  
import { mergeProps as _mergeProps } from "vue"  
import { ssrRenderAttrs as _ssrRenderAttrs, ssrInterpolate as _ssrInterpolate } from "@vue/server-renderer"  
  
export function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {  
  const _cssVars = { style: { color: _ctx.color }}  
  _push(`<div${  
    _ssrRenderAttrs(_mergeProps(_attrs, _cssVars))  
  }><div><span>你好</span>...<div><span>你好</span><div><span>${  
    _ssrInterpolate(_ctx.message)  
  }</span></div></div>`)  
}  
```  
  
  
  
## 二、源码体积  
  
相比`Vue2`，`Vue3`整体体积变小了，除了移出一些不常用的API，再重要的是`Tree shanking`  
  
任何一个函数，如`ref`、`reavtived`、`computed`等，仅仅在用到的时候才打包，没用到的模块都被摇掉，打包的整体体积变小  
  
```js  
import { computed, defineComponent, ref } from 'vue';  
export default defineComponent({  
    setup(props, context) {  
        const age = ref(18)  
  
        let state = reactive({  
            name: 'test'  
        })  
  
        const readOnlyAge = computed(() => age.value++) // 19  
  
        return {  
            age,  
            state,  
            readOnlyAge  
        }  
    }  
});  
```  
  
  
  
## 三、响应式系统  
  
`vue2`中采用 `defineProperty`来劫持整个对象，然后进行深度遍历所有属性，给每个属性添加`getter`和`setter`，实现响应式  
  
`vue3`采用`proxy`重写了响应式系统，因为`proxy`可以对整个对象进行监听，所以不需要深度遍历  
  
- 可以监听动态属性的添加  
- 可以监听到数组的索引和数组`length`属性  
- 可以监听删除属性  
  
关于这两个 API 具体的不同，我们下篇文章会进行一个更加详细的介绍  
  
# Vue3.0的设计目标是什么？做了哪些优化?  
 ![](https://static.vue-js.com/b93b49c0-5c58-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、设计目标  
  
不以解决实际业务痛点的更新都是耍流氓，下面我们来列举一下`Vue3`之前我们或许会面临的问题  
  
- 随着功能的增长，复杂组件的代码变得越来越难以维护  
  
- 缺少一种比较「干净」的在多个组件之间提取和复用逻辑的机制  
  
- 类型推断不够友好  
  
- `bundle`的时间太久了  
  
而 `Vue3` 经过长达两三年时间的筹备，做了哪些事情？  
  
我们从结果反推  
  
- 更小  
- 更快  
- TypeScript支持  
- API设计一致性  
- 提高自身可维护性  
- 开放更多底层功能  
  
一句话概述，就是更小更快更友好了  
  
  
### 更小  
  
`Vue3`移除一些不常用的 `API`  
  
引入`tree-shaking`，可以将无用模块“剪辑”，仅打包需要的，使打包的整体体积变小了  
  
  
  
### 更快  
  
主要体现在编译方面：  
  
- diff算法优化  
- 静态提升  
- 事件监听缓存  
- SSR优化  
  
下篇文章我们会进一步介绍  
  
  
  
### 更友好  
  
`vue3`在兼顾`vue2`的`options API`的同时还推出了`composition API`，大大增加了代码的逻辑组织和代码复用能力  
  
这里代码简单演示下：  
  
存在一个获取鼠标位置的函数  
  
```js  
import { toRefs, reactive } from 'vue';  
function useMouse(){  
    const state = reactive({x:0,y:0});  
    const update = e=>{  
        state.x = e.pageX;  
        state.y = e.pageY;  
    }  
    onMounted(()=>{  
        window.addEventListener('mousemove',update);  
    })  
    onUnmounted(()=>{  
        window.removeEventListener('mousemove',update);  
    })  
  
    return toRefs(state);  
}  
```  
  
我们只需要调用这个函数，即可获取`x`、`y`的坐标，完全不用关注实现过程  
  
试想一下，如果很多类似的第三方库，我们只需要调用即可，不必关注实现过程，开发效率大大提高  
  
同时，`VUE3`是基于`typescipt`编写的，可以享受到自动的类型定义提示  
  
  
  
## 三、优化方案  
  
`vue3`从很多层面都做了优化，可以分成三个方面：  
  
- 源码  
- 性能  
- 语法 API  
  
  
  
### 源码  
  
源码可以从两个层面展开：  
  
- 源码管理  
- TypeScript  
  
  
  
#### 源码管理  
  
`vue3`整个源码是通过 `monorepo `的方式维护的，根据功能将不同的模块拆分到`packages `目录下面不同的子目录中  
  
 ![](https://static.vue-js.com/d7c32520-5c58-11eb-ab90-d9ae814b240d.png)  
  
这样使得模块拆分更细化，职责划分更明确，模块之间的依赖关系也更加明确，开发人员也更容易阅读、理解和更改所有模块源码，提高代码的可维护性  
  
另外一些 `package`（比如 `reactivity` 响应式库）是可以独立于 `Vue` 使用的，这样用户如果只想使用 `Vue3 `的响应式能力，可以单独依赖这个响应式库而不用去依赖整个 `Vue`  
  
  
  
#### TypeScript  
  
`Vue3`是基于`typeScript`编写的，提供了更好的类型检查，能支持复杂的类型推导  
  
  
  
### 性能  
  
`vue3`是从什么哪些方面对性能进行进一步优化呢？  
  
- 体积优化  
- 编译优化  
- 数据劫持优化  
  
这里讲述数据劫持：  
  
在`vue2`中，数据劫持是通过`Object.defineProperty `，这个 API 有一些缺陷，并不能检测对象属性的添加和删除  
  
```js  
Object.defineProperty(data, 'a',{  
  get(){  
    // track  
  },  
  set(){  
    // trigger  
  }  
})  
```  
  
尽管` Vue`为了解决这个问题提供了 `set `和`delete `实例方法，但是对于用户来说，还是增加了一定的心智负担  
  
同时在面对嵌套层级比较深的情况下，就存在性能问题  
  
```js  
default {  
  data: {  
    a: {  
      b: {  
          c: {  
          d: 1  
        }  
      }  
    }  
  }  
}  
```  
  
相比之下，`vue3`是通过`proxy`监听整个对象，那么对于删除还是监听当然也能监听到  
  
同时`Proxy ` 并不能监听到内部深层次的对象变化，而 `Vue3` 的处理方式是在` getter` 中去递归响应式，这样的好处是真正访问到的内部对象才会变成响应式，而不是无脑递归  
  
  
  
### 语法 API  
  
这里当然说的就是`composition API`，其两大显著的优化：  
  
- 优化逻辑组织  
- 优化逻辑复用  
  
  
  
#### 逻辑组织  
  
一张图，我们可以很直观地感受到 `Composition API `在逻辑组织方面的优势  
  
 ![](https://static.vue-js.com/e5804bc0-5c58-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
相同功能的代码编写在一块，而不像`options API`那样，各个功能的代码混成一块  
  
  
  
#### 逻辑复用  
  
在`vue2`中，我们是通过`mixin`实现功能混合，如果多个`mixin`混合，会存在两个非常明显的问题：命名冲突和数据来源不清晰  
  
而通过`composition`这种形式，可以将一些复用的代码抽离出来作为一个函数，只要的使用的地方直接进行调用即可  
  
同样是上文的获取鼠标位置的例子  
  
```js  
import { toRefs, reactive, onUnmounted, onMounted } from 'vue';  
function useMouse(){  
    const state = reactive({x:0,y:0});  
    const update = e=>{  
        state.x = e.pageX;  
        state.y = e.pageY;  
    }  
    onMounted(()=>{  
        window.addEventListener('mousemove',update);  
    })  
    onUnmounted(()=>{  
        window.removeEventListener('mousemove',update);  
    })  
  
    return toRefs(state);  
}  
```  
  
组件使用  
  
```js  
import useMousePosition from './mouse'  
export default {  
    setup() {  
        const { x, y } = useMousePosition()  
        return { x, y }  
    }  
}  
```  
  
可以看到，整个数据来源清晰了，即使去编写更多的` hook `函数，也不会出现命名冲突的问题  
  
# 你是怎么处理vue项目中的错误的？  
![](https://static.vue-js.com/3cafe4f0-4fd9-11eb-ab90-d9ae814b240d.png)  
  
## 一、错误类型  
  
任何一个框架，对于错误的处理都是一种必备的能力  
  
在`Vue` 中，则是定义了一套对应的错误处理规则给到使用者，且在源代码级别，对部分必要的过程做了一定的错误处理。  
  
主要的错误来源包括：  
  
- 后端接口错误  
- 代码中本身逻辑错误  
  
  
  
## 二、如何处理  
  
### 后端接口错误  
  
通过`axios`的`interceptor`实现网络请求的`response`先进行一层拦截  
  
```js  
apiClient.interceptors.response.use(  
  response => {  
    return response;  
  },  
  error => {  
    if (error.response.status == 401) {  
      router.push({ name: "Login" });  
    } else {  
      message.error("出错了");  
      return Promise.reject(error);  
    }  
  }  
);  
```  
  
  
  
### 代码逻辑问题  
  
#### 全局设置错误处理  
  
设置全局错误处理函数  
  
```js  
Vue.config.errorHandler = function (err, vm, info) {  
  // handle error  
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子  
  // 只在 2.2.0+ 可用  
}  
```  
  
`errorHandler`指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 `Vue` 实例  
  
不过值得注意的是，在不同` Vue` 版本中，该全局 `API` 作用的范围会有所不同：  
  
> 从 2.2.0 起，这个钩子也会捕获组件生命周期钩子里的错误。同样的，当这个钩子是 `undefined` 时，被捕获的错误会通过 `console.error` 输出而避免应用崩  
  
> 从 2.4.0 起，这个钩子也会捕获 Vue 自定义事件处理函数内部的错误了  
  
> 从 2.6.0 起，这个钩子也会捕获 `v-on` DOM 监听器内部抛出的错误。另外，如果任何被覆盖的钩子或处理函数返回一个 Promise 链 (例如 async 函数)，则来自其 Promise 链的错误也会被处理  
  
  
  
#### 生命周期钩子  
  
`errorCaptured`是 2.5.0 新增的一个生命钩子函数，当捕获到一个来自子孙组件的错误时被调用  
  
基本类型  
  
```js  
(err: Error, vm: Component, info: string) => ?boolean  
```  
  
此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 `false` 以阻止该错误继续向上传播  
  
参考官网，错误传播规则如下：  
  
- 默认情况下，如果全局的 `config.errorHandler` 被定义，所有的错误仍会发送它，因此这些错误仍然会向单一的分析服务的地方进行汇报  
- 如果一个组件的继承或父级从属链路中存在多个 `errorCaptured` 钩子，则它们将会被相同的错误逐个唤起。  
- 如果此 `errorCaptured` 钩子自身抛出了一个错误，则这个新错误和原本被捕获的错误都会发送给全局的 `config.errorHandler`  
- 一个 `errorCaptured` 钩子能够返回 `false` 以阻止错误继续向上传播。本质上是说“这个错误已经被搞定了且应该被忽略”。它会阻止其它任何会被这个错误唤起的 `errorCaptured` 钩子和全局的 `config.errorHandler`  
  
下面来看个例子  
  
定义一个父组件`cat`  
  
```js  
Vue.component('cat', {  
    template:`  
        <div>  
			<h1>Cat: </h1>  
        	<slot></slot>  
        </div>`,  
    props:{  
        name:{  
            required:true,  
            type:String  
        }  
    },  
    errorCaptured(err,vm,info) {  
        console.log(`cat EC: ${err.toString()}\ninfo: ${info}`);   
        return false;  
    }  
  
});  
```  
  
定义一个子组件`kitten`，其中`dontexist()`并没有定义，存在错误  
  
```js  
Vue.component('kitten', {  
    template:'<div><h1>Kitten: {{ dontexist() }}</h1></div>',  
    props:{  
        name:{  
            required:true,  
            type:String  
        }  
    }  
});  
```  
  
页面中使用组件  
  
```html  
<div id="app" v-cloak>  
    <cat name="my cat">  
        <kitten></kitten>  
    </cat>  
</div>  
```  
  
在父组件的`errorCaptured`则能够捕获到信息  
  
```js  
cat EC: TypeError: dontexist is not a function  
info: render  
```  
  
  
  
### 三、源码分析  
  
异常处理源码  
  
源码位置：/src/core/util/error.js  
  
```js  
// Vue 全局配置,也就是上面的Vue.config  
import config from '../config'  
import { warn } from './debug'  
// 判断环境  
import { inBrowser, inWeex } from './env'  
// 判断是否是Promise，通过val.then === 'function' && val.catch === 'function', val ！=== null && val !== undefined  
import { isPromise } from 'shared/util'  
// 当错误函数处理错误时，停用deps跟踪以避免可能出现的infinite rendering  
// 解决以下出现的问题https://github.com/vuejs/vuex/issues/1505的问题  
import { pushTarget, popTarget } from '../observer/dep'  
  
export function handleError (err: Error, vm: any, info: string) {  
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.  
    pushTarget()  
    try {  
        // vm指当前报错的组件实例  
        if (vm) {  
            let cur = vm  
            // 首先获取到报错的组件，之后递归查找当前组件的父组件，依次调用errorCaptured 方法。  
            // 在遍历调用完所有 errorCaptured 方法、或 errorCaptured 方法有报错时，调用 globalHandleError 方法  
            while ((cur = cur.$parent)) {  
                const hooks = cur.$options.errorCaptured  
                // 判断是否存在errorCaptured钩子函数  
                if (hooks) {  
                    // 选项合并的策略，钩子函数会被保存在一个数组中  
                    for (let i = 0; i < hooks.length; i++) {  
                        // 如果errorCaptured 钩子执行自身抛出了错误，  
                        // 则用try{}catch{}捕获错误，将这个新错误和原本被捕获的错误都会发送给全局的config.errorHandler  
                        // 调用globalHandleError方法  
                        try {  
                            // 当前errorCaptured执行，根据返回是否是false值  
                            // 是false，capture = true，阻止其它任何会被这个错误唤起的 errorCaptured 钩子和全局的 config.errorHandler  
                            // 是true capture = fale，组件的继承或父级从属链路中存在的多个 errorCaptured 钩子，会被相同的错误逐个唤起  
                            // 调用对应的钩子函数，处理错误  
                            const capture = hooks[i].call(cur, err, vm, info) === false  
                            if (capture) return  
                        } catch (e) {  
                            globalHandleError(e, cur, 'errorCaptured hook')  
                        }  
                    }  
                }  
            }  
        }  
        // 除非禁止错误向上传播，否则都会调用全局的错误处理函数  
        globalHandleError(err, vm, info)  
    } finally {  
        popTarget()  
    }  
}  
// 异步错误处理函数  
export function invokeWithErrorHandling (  
handler: Function,  
 context: any,  
 args: null | any[],  
    vm: any,  
        info: string  
        ) {  
            let res  
            try {  
                // 根据参数选择不同的handle执行方式  
                res = args ? handler.apply(context, args) : handler.call(context)  
                // handle返回结果存在  
                // res._isVue an flag to avoid this being observed，如果传入值的_isVue为ture时(即传入的值是Vue实例本身)不会新建observer实例  
                // isPromise(res) 判断val.then === 'function' && val.catch === 'function', val ！=== null && val !== undefined  
                // !res._handled  _handle是Promise 实例的内部变量之一，默认是false，代表onFulfilled,onRejected是否被处理  
                if (res && !res._isVue && isPromise(res) && !res._handled) {  
                    res.catch(e => handleError(e, vm, info + ` (Promise/async)`))  
                    // avoid catch triggering multiple times when nested calls  
                    // 避免嵌套调用时catch多次的触发  
                    res._handled = true  
                }  
            } catch (e) {  
                // 处理执行错误  
                handleError(e, vm, info)  
            }  
            return res  
        }  
  
//全局错误处理  
function globalHandleError (err, vm, info) {  
    // 获取全局配置，判断是否设置处理函数，默认undefined  
    // 已配置  
    if (config.errorHandler) {  
        // try{}catch{} 住全局错误处理函数  
        try {  
            // 执行设置的全局错误处理函数，handle error 想干啥就干啥💗  
            return config.errorHandler.call(null, err, vm, info)  
        } catch (e) {  
            // 如果开发者在errorHandler函数中手动抛出同样错误信息throw err  
            // 判断err信息是否相等，避免log两次  
            // 如果抛出新的错误信息throw err Error('你好毒')，将会一起log输出  
            if (e !== err) {  
                logError(e, null, 'config.errorHandler')  
            }  
        }  
    }  
    // 未配置常规log输出  
    logError(err, vm, info)  
}  
  
// 错误输出函数  
function logError (err, vm, info) {  
    if (process.env.NODE_ENV !== 'production') {  
        warn(`Error in ${info}: "${err.toString()}"`, vm)  
    }  
    /* istanbul ignore else */  
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {  
        console.error(err)  
    } else {  
        throw err  
    }  
}  
```  
  
### 小结  
  
- `handleError`在需要捕获异常的地方调用，首先获取到报错的组件，之后递归查找当前组件的父组件，依次调用`errorCaptured` 方法，在遍历调用完所有 `errorCaptured` 方法或 `errorCaptured` 方法有报错时，调用 `globalHandleError` 方法  
- `globalHandleError `调用全局的 `errorHandler` 方法，再通过`logError`判断环境输出错误信息  
- `invokeWithErrorHandling`更好的处理异步错误信息  
- `logError`判断环境，选择不同的抛错方式。非生产环境下，调用`warn`方法处理错误  
  
  
  
# Vue项目中如何解决跨域问题？  
解决跨域的方法有很多，下面列举了三种：  
  
- JSONP  
- CORS  
- Proxy  
  
而在`vue`项目中，我们主要针对`CORS`或`Proxy`这两种方案进行展开  
  
### CORS  
  
CORS （Cross-Origin Resource Sharing，跨域资源共享）是一个系统，它由一系列传输的HTTP头组成，这些HTTP头决定浏览器是否阻止前端 JavaScript 代码获取跨域请求的响应  
  
`CORS` 实现起来非常方便，只需要增加一些 `HTTP` 头，让服务器能声明允许的访问来源  
  
只要后端实现了 `CORS`，就实现了跨域  
  
 ![](https://static.vue-js.com/140deb80-4e32-11eb-ab90-d9ae814b240d.png)  
  
以` koa`框架举例  
  
添加中间件，直接设置`Access-Control-Allow-Origin`请求头  
  
```js  
app.use(async (ctx, next)=> {  
  ctx.set('Access-Control-Allow-Origin', '*');  
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');  
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');  
  if (ctx.method == 'OPTIONS') {  
    ctx.body = 200;   
  } else {  
    await next();  
  }  
})  
```  
  
ps: `Access-Control-Allow-Origin` 设置为*其实意义不大，可以说是形同虚设，实际应用中，上线前我们会将`Access-Control-Allow-Origin` 值设为我们目标`host`  
  
### Proxy  
代理（Proxy）也称网络代理，是一种特殊的网络服务，允许一个（一般为客户端）通过这个服务与另一个网络终端（一般为服务器）进行非直接的连接。一些网关、路由器等网络设备具备网络代理功能。一般认为代理服务有利于保障网络终端的隐私或安全，防止攻击  
  
  
**方案一**  
  
如果是通过`vue-cli`脚手架工具搭建项目，我们可以通过`webpack`为我们起一个本地服务器作为请求的代理对象  
  
通过该服务器转发请求至目标服务器，得到结果再转发给前端，但是最终发布上线时如果web应用和接口服务器不在一起仍会跨域  
  
在`vue.config.js`文件，新增以下代码  
  
```js  
amodule.exports = {  
    devServer: {  
        host: '127.0.0.1',  
        port: 8084,  
        open: true,// vue项目启动时自动打开浏览器  
        proxy: {  
            '/api': { // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的  
                target: "http://xxx.xxx.xx.xx:8080", //目标地址，一般是指后台服务器地址  
                changeOrigin: true, //是否跨域  
                pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替  
                    '^/api': ""   
                }  
            }  
        }  
    }  
}  
```  
  
通过`axios`发送请求中，配置请求的根路径  
  
```js  
axios.defaults.baseURL = '/api'  
```  
  
  
  
**方案二**  
  
此外，还可通过服务端实现代理请求转发  
  
以`express`框架为例  
  
```js  
var express = require('express');  
const proxy = require('http-proxy-middleware')  
const app = express()  
app.use(express.static(__dirname + '/'))  
app.use('/api', proxy({ target: 'http://localhost:4000', changeOrigin: false  
                      }));  
module.exports = app  
```  
  
  
  
**方案三**  
  
通过配置`nginx`实现代理  
  
```js  
server {  
    listen    80;  
    # server_name www.josephxia.com;  
    location / {  
        root  /var/www/html;  
        index  index.html index.htm;  
        try_files $uri $uri/ /index.html;  
    }  
    location /api {  
        proxy_pass  http://127.0.0.1:3000;  
        proxy_redirect   off;  
        proxy_set_header  Host       $host;  
        proxy_set_header  X-Real-IP     $remote_addr;  
        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;  
    }  
}  
```  
# 什么是跨域？  
跨域本质是浏览器基于**同源策略**的一种安全手段  
  
同源策略（Sameoriginpolicy），是一种约定，它是浏览器最核心也最基本的安全功能  
  
所谓同源（即指在同一个域）具有以下三个相同点  
- 协议相同（protocol）  
- 主机相同（host）  
- 端口相同（port）  
  
反之非同源请求，也就是协议、端口、主机其中一项不相同的时候，这时候就会产生跨域  
  
>一定要注意跨域是浏览器的限制，你用抓包工具抓取接口数据，是可以看到接口已经把数据返回回来了，只是浏览器的限制，你获取不到数据。用postman请求接口能够请求到数据。这些再次印证了跨域是浏览器的限制。  
  
# Vue怎么实现权限管理？控制到按钮级别的权限怎么做？  
  
 ![](https://static.vue-js.com/397e1fa0-4dad-11eb-ab90-d9ae814b240d.png)  
  
## 一、是什么  
  
权限是对特定资源的访问许可，所谓权限控制，也就是确保用户只能访问到被分配的资源  
  
而前端权限归根结底是请求的发起权，请求的发起可能有下面两种形式触发  
  
- 页面加载触发  
- 页面上的按钮点击触发  
  
总的来说，所有的请求发起都触发自前端路由或视图  
  
所以我们可以从这两方面入手，对触发权限的源头进行控制，最终要实现的目标是：  
  
- 路由方面，用户登录后只能看到自己有权访问的导航菜单，也只能访问自己有权访问的路由地址，否则将跳转 `4xx` 提示页  
  
- 视图方面，用户只能看到自己有权浏览的内容和有权操作的控件  
  
- 最后再加上请求控制作为最后一道防线，路由可能配置失误，按钮可能忘了加权限，这种时候请求控制可以用来兜底，越权请求将在前端被拦截  
  
  
  
## 二、如何做  
  
前端权限控制可以分为四个方面：  
  
- 接口权限  
- 按钮权限  
- 菜单权限  
- 路由权限  
  
  
  
### 接口权限  
  
接口权限目前一般采用`jwt`的形式来验证，没有通过的话一般返回`401`，跳转到登录页面重新进行登录  
  
登录完拿到`token`，将`token`存起来，通过`axios`请求拦截器进行拦截，每次请求的时候头部携带`token`  
  
```js  
axios.interceptors.request.use(config => {  
    config.headers['token'] = cookie.get('token')  
    return config  
})  
axios.interceptors.response.use(res=>{},{response}=>{  
    if (response.data.code === 40099 || response.data.code === 40098) { //token过期或者错误  
        router.push('/login')  
    }  
})  
```  
  
  
  
### 路由权限控制  
  
**方案一**  
  
初始化即挂载全部路由，并且在路由上标记相应的权限信息，每次路由跳转前做校验  
  
```js  
const routerMap = [  
  {  
    path: '/permission',  
    component: Layout,  
    redirect: '/permission/index',  
    alwaysShow: true, // will always show the root menu  
    meta: {  
      title: 'permission',  
      icon: 'lock',  
      roles: ['admin', 'editor'] // you can set roles in root nav  
    },  
    children: [{  
      path: 'page',  
      component: () => import('@/views/permission/page'),  
      name: 'pagePermission',  
      meta: {  
        title: 'pagePermission',  
        roles: ['admin'] // or you can only set roles in sub nav  
      }  
    }, {  
      path: 'directive',  
      component: () => import('@/views/permission/directive'),  
      name: 'directivePermission',  
      meta: {  
        title: 'directivePermission'  
        // if do not set roles, means: this page does not require permission  
      }  
    }]  
  }]  
  
```  
  
这种方式存在以下四种缺点：  
  
- 加载所有的路由，如果路由很多，而用户并不是所有的路由都有权限访问，对性能会有影响。  
  
- 全局路由守卫里，每次路由跳转都要做权限判断。  
  
- 菜单信息写死在前端，要改个显示文字或权限信息，需要重新编译  
  
- 菜单跟路由耦合在一起，定义路由的时候还有添加菜单显示标题，图标之类的信息，而且路由不一定作为菜单显示，还要多加字段进行标识  
  
  
  
**方案二**  
  
初始化的时候先挂载不需要权限控制的路由，比如登录页，404等错误页。如果用户通过URL进行强制访问，则会直接进入404，相当于从源头上做了控制  
  
登录后，获取用户的权限信息，然后筛选有权限访问的路由，在全局路由守卫里进行调用`addRoutes`添加路由  
  
```js  
import router from './router'  
import store from './store'  
import { Message } from 'element-ui'  
import NProgress from 'nprogress' // progress bar  
import 'nprogress/nprogress.css'// progress bar style  
import { getToken } from '@/utils/auth' // getToken from cookie  
  
NProgress.configure({ showSpinner: false })// NProgress Configuration  
  
// permission judge function  
function hasPermission(roles, permissionRoles) {  
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly  
  if (!permissionRoles) return true  
  return roles.some(role => permissionRoles.indexOf(role) >= 0)  
}  
  
const whiteList = ['/login', '/authredirect']// no redirect whitelist  
  
router.beforeEach((to, from, next) => {  
  NProgress.start() // start progress bar  
  if (getToken()) { // determine if there has token  
    /* has token*/  
    if (to.path === '/login') {  
      next({ path: '/' })  
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it  
    } else {  
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息  
        store.dispatch('GetUserInfo').then(res => { // 拉取user_info  
          const roles = res.data.roles // note: roles must be a array! such as: ['editor','develop']  
          store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表  
            router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表  
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record  
          })  
        }).catch((err) => {  
          store.dispatch('FedLogOut').then(() => {  
            Message.error(err || 'Verification failed, please login again')  
            next({ path: '/' })  
          })  
        })  
      } else {  
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓  
        if (hasPermission(store.getters.roles, to.meta.roles)) {  
          next()//  
        } else {  
          next({ path: '/401', replace: true, query: { noGoBack: true }})  
        }  
        // 可删 ↑  
      }  
    }  
  } else {  
    /* has no token*/  
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入  
      next()  
    } else {  
      next('/login') // 否则全部重定向到登录页  
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it  
    }  
  }  
})  
  
router.afterEach(() => {  
  NProgress.done() // finish progress bar  
})  
  
```  
  
按需挂载，路由就需要知道用户的路由权限，也就是在用户登录进来的时候就要知道当前用户拥有哪些路由权限  
  
这种方式也存在了以下的缺点：  
  
- 全局路由守卫里，每次路由跳转都要做判断  
- 菜单信息写死在前端，要改个显示文字或权限信息，需要重新编译  
- 菜单跟路由耦合在一起，定义路由的时候还有添加菜单显示标题，图标之类的信息，而且路由不一定作为菜单显示，还要多加字段进行标识  
  
  
  
### 菜单权限  
  
菜单权限可以理解成将页面与理由进行解耦  
  
#### 方案一  
  
菜单与路由分离，菜单由后端返回  
  
前端定义路由信息  
  
```js  
{  
    name: "login",  
    path: "/login",  
    component: () => import("@/pages/Login.vue")  
}  
```  
  
`name`字段都不为空，需要根据此字段与后端返回菜单做关联，后端返回的菜单信息中必须要有`name`对应的字段，并且做唯一性校验  
  
全局路由守卫里做判断  
  
```js  
function hasPermission(router, accessMenu) {  
  if (whiteList.indexOf(router.path) !== -1) {  
    return true;  
  }  
  let menu = Util.getMenuByName(router.name, accessMenu);  
  if (menu.name) {  
    return true;  
  }  
  return false;  
  
}  
  
Router.beforeEach(async (to, from, next) => {  
  if (getToken()) {  
    let userInfo = store.state.user.userInfo;  
    if (!userInfo.name) {  
      try {  
        await store.dispatch("GetUserInfo")  
        await store.dispatch('updateAccessMenu')  
        if (to.path === '/login') {  
          next({ name: 'home_index' })  
        } else {  
          //Util.toDefaultPage([...routers], to.name, router, next);  
          next({ ...to, replace: true })//菜单权限更新完成,重新进一次当前路由  
        }  
      }    
      catch (e) {  
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入  
          next()  
        } else {  
          next('/login')  
        }  
      }  
    } else {  
      if (to.path === '/login') {  
        next({ name: 'home_index' })  
      } else {  
        if (hasPermission(to, store.getters.accessMenu)) {  
          Util.toDefaultPage(store.getters.accessMenu,to, routes, next);  
        } else {  
          next({ path: '/403',replace:true })  
        }  
      }  
    }  
  } else {  
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入  
      next()  
    } else {  
      next('/login')  
    }  
  }  
  let menu = Util.getMenuByName(to.name, store.getters.accessMenu);  
  Util.title(menu.title);  
});  
  
Router.afterEach((to) => {  
  window.scrollTo(0, 0);  
});  
```  
  
每次路由跳转的时候都要判断权限，这里的判断也很简单，因为菜单的`name`与路由的`name`是一一对应的，而后端返回的菜单就已经是经过权限过滤的  
  
如果根据路由`name`找不到对应的菜单，就表示用户有没权限访问  
  
如果路由很多，可以在应用初始化的时候，只挂载不需要权限控制的路由。取得后端返回的菜单后，根据菜单与路由的对应关系，筛选出可访问的路由，通过`addRoutes`动态挂载  
  
这种方式的缺点：  
  
- 菜单需要与路由做一一对应，前端添加了新功能，需要通过菜单管理功能添加新的菜单，如果菜单配置的不对会导致应用不能正常使用  
- 全局路由守卫里，每次路由跳转都要做判断  
  
  
  
#### 方案二  
  
菜单和路由都由后端返回  
  
前端统一定义路由组件  
  
```js  
const Home = () => import("../pages/Home.vue");  
const UserInfo = () => import("../pages/UserInfo.vue");  
export default {  
    home: Home,  
    userInfo: UserInfo  
};  
```  
  
后端路由组件返回以下格式  
  
```js  
[  
    {  
        name: "home",  
        path: "/",  
        component: "home"  
    },  
    {  
        name: "home",  
        path: "/userinfo",  
        component: "userInfo"  
    }  
]  
```  
  
在将后端返回路由通过`addRoutes`动态挂载之间，需要将数据处理一下，将`component`字段换为真正的组件  
  
如果有嵌套路由，后端功能设计的时候，要注意添加相应的字段，前端拿到数据也要做相应的处理  
  
这种方法也会存在缺点：  
  
- 全局路由守卫里，每次路由跳转都要做判断  
- 前后端的配合要求更高  
  
  
  
### 按钮权限  
  
#### 方案一  
  
按钮权限也可以用`v-if`判断  
  
但是如果页面过多，每个页面页面都要获取用户权限`role`和路由表里的`meta.btnPermissions`，然后再做判断  
  
这种方式就不展开举例了  
  
  
  
#### 方案二  
  
通过自定义指令进行按钮权限的判断  
  
首先配置路由  
  
```js  
{  
    path: '/permission',  
    component: Layout,  
    name: '权限测试',  
    meta: {  
        btnPermissions: ['admin', 'supper', 'normal']  
    },  
    //页面需要的权限  
    children: [{  
        path: 'supper',  
        component: _import('system/supper'),  
        name: '权限测试页',  
        meta: {  
            btnPermissions: ['admin', 'supper']  
        } //页面需要的权限  
    },  
    {  
        path: 'normal',  
        component: _import('system/normal'),  
        name: '权限测试页',  
        meta: {  
            btnPermissions: ['admin']  
        } //页面需要的权限  
    }]  
}  
```  
  
自定义权限鉴定指令  
  
```js  
import Vue from 'vue'  
/**权限指令**/  
const has = Vue.directive('has', {  
    bind: function (el, binding, vnode) {  
        // 获取页面按钮权限  
        let btnPermissionsArr = [];  
        if(binding.value){  
            // 如果指令传值，获取指令参数，根据指令参数和当前登录人按钮权限做比较。  
            btnPermissionsArr = Array.of(binding.value);  
        }else{  
            // 否则获取路由中的参数，根据路由的btnPermissionsArr和当前登录人按钮权限做比较。  
            btnPermissionsArr = vnode.context.$route.meta.btnPermissions;  
        }  
        if (!Vue.prototype.$_has(btnPermissionsArr)) {  
            el.parentNode.removeChild(el);  
        }  
    }  
});  
// 权限检查方法  
Vue.prototype.$_has = function (value) {  
    let isExist = false;  
    // 获取用户按钮权限  
    let btnPermissionsStr = sessionStorage.getItem("btnPermissions");  
    if (btnPermissionsStr == undefined || btnPermissionsStr == null) {  
        return false;  
    }  
    if (value.indexOf(btnPermissionsStr) > -1) {  
        isExist = true;  
    }  
    return isExist;  
};  
export {has}  
```  
  
在使用的按钮中只需要引用`v-has`指令  
  
```js  
<el-button @click='editClick' type="primary" v-has>编辑</el-button>  
```  
  
  
  
### 小结  
  
关于权限如何选择哪种合适的方案，可以根据自己项目的方案项目，如考虑路由与菜单是否分离  
  
权限需要前后端结合，前端尽可能的去控制，更多的需要后台判断  
  
  
# 大型项目中，Vue项目怎么划分结构和划分组件比较合理呢？  
  
 ![](https://static.vue-js.com/b6cd6a60-4aba-11eb-ab90-d9ae814b240d.png)  
  
## 一、为什么要划分  
  
使用`vue`构建项目，项目结构清晰会提高开发效率，熟悉项目的各种配置同样会让开发效率更高  
  
在划分项目结构的时候，需要遵循一些基本的原则：  
  
- 文件夹和文件夹内部文件的语义一致性  
- 单一入口/出口  
- 就近原则，紧耦合的文件应该放到一起，且应以相对路径引用  
- 公共的文件应该以绝对路径的方式从根目录引用  
- `/src` 外的文件不应该被引入  
  
  
  
### 文件夹和文件夹内部文件的语义一致性  
  
我们的目录结构都会有一个文件夹是按照路由模块来划分的，如`pages`文件夹，这个文件夹里面应该包含我们项目所有的路由模块，并且仅应该包含路由模块，而不应该有别的其他的非路由模块的文件夹  
  
这样做的好处在于一眼就从 `pages`文件夹看出这个项目的路由有哪些  
  
  
  
### 单一入口/出口  
  
举个例子，在`pages`文件夹里面存在一个`seller`文件夹，这时候`seller` 文件夹应该作为一个独立的模块由外部引入，并且 `seller/index.js` 应该作为外部引入 seller 模块的唯一入口  
  
```js  
// 错误用法  
import sellerReducer from 'src/pages/seller/reducer'  
  
// 正确用法  
import { reducer as sellerReducer } from 'src/pages/seller'  
```  
  
这样做的好处在于，无论你的模块文件夹内部有多乱，外部引用的时候，都是从一个入口文件引入，这样就很好的实现了隔离，如果后续有重构需求，你就会发现这种方式的优点  
  
  
  
  
  
### 就近原则，紧耦合的文件应该放到一起，且应以相对路径引用  
  
使用相对路径可以保证模块内部的独立性  
  
```js  
// 正确用法  
import styles from './index.module.scss'  
// 错误用法  
import styles from 'src/pages/seller/index.module.scss'  
```  
  
举个例子  
  
假设我们现在的 seller 目录是在 `src/pages/seller`，如果我们后续发生了路由变更，需要加一个层级，变成 `src/pages/user/seller`。  
  
如果我们采用第一种相对路径的方式，那就可以直接将整个文件夹拖过去就好，`seller` 文件夹内部不需要做任何变更。  
  
但是如果我们采用第二种绝对路径的方式，移动文件夹的同时，还需要对每个 `import` 的路径做修改  
  
  
  
### 公共的文件应该以绝对路径的方式从根目录引用  
  
公共指的是多个路由模块共用，如一些公共的组件，我们可以放在`src/components`下  
  
在使用到的页面中，采用绝对路径的形式引用  
  
```js  
// 错误用法  
import Input from '../../components/input'  
// 正确用法  
import Input from 'src/components/input'  
```  
  
同样的，如果我们需要对文件夹结构进行调整。将 `/src/components/input` 变成 `/src/components/new/input`，如果使用绝对路径，只需要全局搜索替换  
  
再加上绝对路径有全局的语义，相对路径有独立模块的语义  
  
  
  
### /src 外的文件不应该被引入  
  
`vue-cli`脚手架已经帮我们做了相关的约束了，正常我们的前端项目都会有个` src `文件夹，里面放着所有的项目需要的资源，`js`,` css`, `png`, `svg` 等等。`src` 外会放一些项目配置，依赖，环境等文件  
  
这样的好处是方便划分项目代码文件和配置文件  
  
  
  
## 二、目录结构  
  
单页面目录结构  
  
```js  
project  
│  .browserslistrc  
│  .env.production  
│  .eslintrc.js  
│  .gitignore  
│  babel.config.js  
│  package-lock.json  
│  package.json  
│  README.md  
│  vue.config.js  
│  yarn-error.log  
│  yarn.lock  
│  
├─public  
│      favicon.ico  
│      index.html  
│  
|-- src  
    |-- components  
        |-- input  
            |-- index.js  
            |-- index.module.scss  
    |-- pages  
        |-- seller  
            |-- components  
                |-- input  
                    |-- index.js  
                    |-- index.module.scss  
            |-- reducer.js  
            |-- saga.js  
            |-- index.js  
            |-- index.module.scss  
        |-- buyer  
            |-- index.js  
        |-- index.js  
```  
  
多页面目录结构  
  
```js  
my-vue-test:.  
│  .browserslistrc  
│  .env.production  
│  .eslintrc.js  
│  .gitignore  
│  babel.config.js  
│  package-lock.json  
│  package.json  
│  README.md  
│  vue.config.js  
│  yarn-error.log  
│  yarn.lock  
│  
├─public  
│      favicon.ico  
│      index.html  
│  
└─src  
    ├─apis //接口文件根据页面或实例模块化  
    │      index.js  
    │      login.js  
    │  
    ├─components //全局公共组件  
    │  └─header  
    │          index.less  
    │          index.vue  
    │  
    ├─config //配置（环境变量配置不同passid等）  
    │      env.js  
    │      index.js  
    │  
    ├─contant //常量  
    │      index.js  
    │  
    ├─images //图片  
    │      logo.png  
    │  
    ├─pages //多页面vue项目，不同的实例  
    │  ├─index //主实例  
    │  │  │  index.js  
    │  │  │  index.vue  
    │  │  │  main.js  
    │  │  │  router.js  
    │  │  │  store.js  
    │  │  │  
    │  │  ├─components //业务组件  
    │  │  └─pages //此实例中的各个路由  
    │  │      ├─amenu  
    │  │      │      index.vue  
    │  │      │  
    │  │      └─bmenu  
    │  │              index.vue  
    │  │  
    │  └─login //另一个实例  
    │          index.js  
    │          index.vue  
    │          main.js  
    │  
    ├─scripts //包含各种常用配置，工具函数  
    │  │  map.js  
    │  │  
    │  └─utils  
    │          helper.js  
    │  
    ├─store //vuex仓库  
    │  │  index.js  
    │  │  
    │  ├─index  
    │  │      actions.js  
    │  │      getters.js  
    │  │      index.js  
    │  │      mutation-types.js  
    │  │      mutations.js  
    │  │      state.js  
    │  │  
    │  └─user  
    │          actions.js  
    │          getters.js  
    │          index.js  
    │          mutation-types.js  
    │          mutations.js  
    │          state.js  
    │  
    └─styles //样式统一配置  
        │  components.less  
        │  
        ├─animation  
        │      index.less  
        │      slide.less  
        │  
        ├─base  
        │      index.less  
        │      style.less  
        │      var.less  
        │      widget.less  
        │  
        └─common  
                index.less  
                reset.less  
                style.less  
                transition.less  
```  
  
  
  
### 小结  
  
项目的目录结构很重要，因为目录结构能体现很多东西，怎么规划目录结构可能每个人有自己的理解，但是按照一定的规范去进行目录的设计，能让项目整个架构看起来更为简洁，更加易用  
  
  
# Axios的原理是什么？  

  

  
 ![](https://static.vue-js.com/1564f7d0-4662-11eb-ab90-d9ae814b240d.png)
  

  
## 一、axios的使用
  

  
关于`axios`的基本使用，上篇文章已经有所涉及，这里再稍微回顾下：
  

  
**发送请求**
  

  
```js
  
import axios from 'axios';
  

  
axios(config) // 直接传入配置
  
axios(url[, config]) // 传入url和配置
  
axios[method](url[, option]) // 直接调用请求方式方法，传入url和配置
  
axios[method](url[, data[, option]]) // 直接调用请求方式方法，传入data、url和配置
  
axios.request(option) // 调用 request 方法
  

  
const axiosInstance = axios.create(config)
  
// axiosInstance 也具有以上 axios 的能力
  

  
axios.all([axiosInstance1, axiosInstance2]).then(axios.spread(response1, response2))
  
// 调用 all 和传入 spread 回调
  

  
```
  

  

  

  
**请求拦截器**
  

  
```js
  
axios.interceptors.request.use(function (config) {
  
    // 这里写发送请求前处理的代码
  
    return config;
  
}, function (error) {
  
    // 这里写发送请求错误相关的代码
  
    return Promise.reject(error);
  
});
  
```
  

  

  

  
**响应拦截器**
  

  
```js
  
axios.interceptors.response.use(function (response) {
  
    // 这里写得到响应数据后处理的代码
  
    return response;
  
}, function (error) {
  
    // 这里写得到错误响应处理的代码
  
    return Promise.reject(error);
  
});
  
```
  

  

  

  
**取消请求**
  

  
```js
  
// 方式一
  
const CancelToken = axios.CancelToken;
  
const source = CancelToken.source();
  

  
axios.get('xxxx', {
  
  cancelToken: source.token
  
})
  
// 取消请求 (请求原因是可选的)
  
source.cancel('主动取消请求');
  

  
// 方式二
  
const CancelToken = axios.CancelToken;
  
let cancel;
  

  
axios.get('xxxx', {
  
  cancelToken: new CancelToken(function executor(c) {
  
    cancel = c;
  
  })
  
});
  
cancel('主动取消请求');
  
```
  

  

  

  

  

  
## 二、实现一个简易版axios
  

  
构建一个`Axios`构造函数，核心代码为`request`
  

  
```js
  
class Axios {
  
    constructor() {
  

  
    }
  

  
    request(config) {
  
        return new Promise(resolve => {
  
            const {url = '', method = 'get', data = {}} = config;
  
            // 发送ajax请求
  
            const xhr = new XMLHttpRequest();
  
            xhr.open(method, url, true);
  
            xhr.onload = function() {
  
                console.log(xhr.responseText)
  
                resolve(xhr.responseText);
  
            }
  
            xhr.send(data);
  
        })
  
    }
  
}
  
```
  

  
导出`axios`实例
  

  
```js
  
// 最终导出axios的方法，即实例的request方法
  
function CreateAxiosFn() {
  
    let axios = new Axios();
  
    let req = axios.request.bind(axios);
  
    return req;
  
}
  

  
// 得到最后的全局变量axios
  
let axios = CreateAxiosFn();
  
```
  

  
上述就已经能够实现`axios({ })`这种方式的请求
  

  
下面是来实现下`axios.method()`这种形式的请求
  

  
```js
  
// 定义get,post...方法，挂在到Axios原型上
  
const methodsArr = ['get', 'delete', 'head', 'options', 'put', 'patch', 'post'];
  
methodsArr.forEach(met => {
  
    Axios.prototype[met] = function() {
  
        console.log('执行'+met+'方法');
  
        // 处理单个方法
  
        if (['get', 'delete', 'head', 'options'].includes(met)) { // 2个参数(url[, config])
  
            return this.request({
  
                method: met,
  
                url: arguments[0],
  
                ...arguments[1] || {}
  
            })
  
        } else { // 3个参数(url[,data[,config]])
  
            return this.request({
  
                method: met,
  
                url: arguments[0],
  
                data: arguments[1] || {},
  
                ...arguments[2] || {}
  
            })
  
        }
  

  
    }
  
})
  
```
  

  
将`Axios.prototype`上的方法搬运到`request`上
  

  
首先实现个工具类，实现将`b`方法混入到`a`，并且修改`this`指向
  

  
```js
  
const utils = {
  
  extend(a,b, context) {
  
    for(let key in b) {
  
      if (b.hasOwnProperty(key)) {
  
        if (typeof b[key] === 'function') {
  
          a[key] = b[key].bind(context);
  
        } else {
  
          a[key] = b[key]
  
        }
  
      }
  
      
  
    }
  
  }
  
}
  
```
  

  
修改导出的方法
  

  
```js
  
function CreateAxiosFn() {
  
  let axios = new Axios();
  
  
  
  let req = axios.request.bind(axios);
  
  // 增加代码
  
  utils.extend(req, Axios.prototype, axios)
  
  
  
  return req;
  
}
  
```
  

  

  

  
构建拦截器的构造函数
  

  
```js
  
class InterceptorsManage {
  
  constructor() {
  
    this.handlers = [];
  
  }
  

  
  use(fullfield, rejected) {
  
    this.handlers.push({
  
      fullfield,
  
      rejected
  
    })
  
  }
  
}
  
```
  

  
实现`axios.interceptors.response.use`和`axios.interceptors.request.use`
  

  
```js
  
class Axios {
  
    constructor() {
  
        // 新增代码
  
        this.interceptors = {
  
            request: new InterceptorsManage,
  
            response: new InterceptorsManage
  
        }
  
    }
  

  
    request(config) {
  
 		...
  
    }
  
}
  
```
  

  
执行语句`axios.interceptors.response.use`和`axios.interceptors.request.use`的时候，实现获取`axios`实例上的`interceptors`对象，然后再获取`response`或`request`拦截器，再执行对应的拦截器的`use`方法
  

  
把`Axios`上的方法和属性搬到`request`过去
  

  
```js
  
function CreateAxiosFn() {
  
  let axios = new Axios();
  
  
  
  let req = axios.request.bind(axios);
  
  // 混入方法， 处理axios的request方法，使之拥有get,post...方法
  
  utils.extend(req, Axios.prototype, axios)
  
  // 新增代码
  
  utils.extend(req, axios)
  
  return req;
  
}
  
```
  

  
现在`request`也有了`interceptors`对象，在发送请求的时候，会先获取`request`拦截器的`handlers`的方法来执行
  

  
首先将执行`ajax`的请求封装成一个方法
  

  
```js
  
request(config) {
  
    this.sendAjax(config)
  
}
  
sendAjax(config){
  
    return new Promise(resolve => {
  
        const {url = '', method = 'get', data = {}} = config;
  
        // 发送ajax请求
  
        console.log(config);
  
        const xhr = new XMLHttpRequest();
  
        xhr.open(method, url, true);
  
        xhr.onload = function() {
  
            console.log(xhr.responseText)
  
            resolve(xhr.responseText);
  
        };
  
        xhr.send(data);
  
    })
  
}
  
```
  

  
获得`handlers`中的回调
  

  
```js
  
request(config) {
  
    // 拦截器和请求组装队列
  
    let chain = [this.sendAjax.bind(this), undefined] // 成对出现的，失败回调暂时不处理
  

  
    // 请求拦截
  
    this.interceptors.request.handlers.forEach(interceptor => {
  
        chain.unshift(interceptor.fullfield, interceptor.rejected)
  
    })
  

  
    // 响应拦截
  
    this.interceptors.response.handlers.forEach(interceptor => {
  
        chain.push(interceptor.fullfield, interceptor.rejected)
  
    })
  

  
    // 执行队列，每次执行一对，并给promise赋最新的值
  
    let promise = Promise.resolve(config);
  
    while(chain.length > 0) {
  
        promise = promise.then(chain.shift(), chain.shift())
  
    }
  
    return promise;
  
}
  
```
  

  
`chains`大概是`['fulfilled1','reject1','fulfilled2','reject2','this.sendAjax','undefined','fulfilled2','reject2','fulfilled1','reject1']`这种形式
  

  
这样就能够成功实现一个简易版`axios`
  

  

  

  
## 三、源码分析
  

  
首先看看目录结构
  

  
 ![](https://static.vue-js.com/9d90eaa0-48b6-11eb-85f6-6fac77c0c9b3.png)
  

  

  

  
`axios`发送请求有很多实现的方法，实现入口文件为`axios.js `
  

  
```js
  
function createInstance(defaultConfig) {
  
  var context = new Axios(defaultConfig);
  

  
  // instance指向了request方法，且上下文指向context，所以可以直接以 instance(option) 方式调用 
  
  // Axios.prototype.request 内对第一个参数的数据类型判断，使我们能够以 instance(url, option) 方式调用
  
  var instance = bind(Axios.prototype.request, context);
  

  
  // 把Axios.prototype上的方法扩展到instance对象上，
  
  // 并指定上下文为context，这样执行Axios原型链上的方法时，this会指向context
  
  utils.extend(instance, Axios.prototype, context);
  

  
  // Copy context to instance
  
  // 把context对象上的自身属性和方法扩展到instance上
  
  // 注：因为extend内部使用的forEach方法对对象做for in 遍历时，只遍历对象本身的属性，而不会遍历原型链上的属性
  
  // 这样，instance 就有了  defaults、interceptors 属性。
  
  utils.extend(instance, context);
  
  return instance;
  
}
  

  
// Create the default instance to be exported 创建一个由默认配置生成的axios实例
  
var axios = createInstance(defaults);
  

  
// Factory for creating new instances 扩展axios.create工厂函数，内部也是 createInstance
  
axios.create = function create(instanceConfig) {
  
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
  
};
  

  
// Expose all/spread
  
axios.all = function all(promises) {
  
  return Promise.all(promises);
  
};
  

  
axios.spread = function spread(callback) {
  
  return function wrap(arr) {
  
    return callback.apply(null, arr);
  
  };
  
};
  
module.exports = axios;
  
```
  

  
主要核心是 `Axios.prototype.request`，各种请求方式的调用实现都是在 `request` 内部实现的， 简单看下 `request` 的逻辑
  

  
```js
  
Axios.prototype.request = function request(config) {
  
  // Allow for axios('example/url'[, config]) a la fetch API
  
  // 判断 config 参数是否是 字符串，如果是则认为第一个参数是 URL，第二个参数是真正的config
  
  if (typeof config === 'string') {
  
    config = arguments[1] || {};
  
    // 把 url 放置到 config 对象中，便于之后的 mergeConfig
  
    config.url = arguments[0];
  
  } else {
  
    // 如果 config 参数是否是 字符串，则整体都当做config
  
    config = config || {};
  
  }
  
  // 合并默认配置和传入的配置
  
  config = mergeConfig(this.defaults, config);
  
  // 设置请求方法
  
  config.method = config.method ? config.method.toLowerCase() : 'get';
  
  /*
  
    something... 此部分会在后续拦截器单独讲述
  
  */
  
};
  

  
// 在 Axios 原型上挂载 'delete', 'get', 'head', 'options' 且不传参的请求方法，实现内部也是 request
  
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  
  Axios.prototype[method] = function(url, config) {
  
    return this.request(utils.merge(config || {}, {
  
      method: method,
  
      url: url
  
    }));
  
  };
  
});
  

  
// 在 Axios 原型上挂载 'post', 'put', 'patch' 且传参的请求方法，实现内部同样也是 request
  
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  
  Axios.prototype[method] = function(url, data, config) {
  
    return this.request(utils.merge(config || {}, {
  
      method: method,
  
      url: url,
  
      data: data
  
    }));
  
  };
  
});
  
```
  

  
`request`入口参数为`config`，可以说`config`贯彻了`axios`的一生
  

  
`axios` 中的 `config `主要分布在这几个地方：
  

  
- 默认配置 `defaults.js`
  
- `config.method`默认为 `get`
  
- 调用 `createInstance` 方法创建 `axios `实例，传入的`config`
  
- 直接或间接调用 `request` 方法，传入的 `config`
  

  
```js
  
// axios.js
  
// 创建一个由默认配置生成的axios实例
  
var axios = createInstance(defaults);
  

  
// 扩展axios.create工厂函数，内部也是 createInstance
  
axios.create = function create(instanceConfig) {
  
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
  
};
  

  
// Axios.js
  
// 合并默认配置和传入的配置
  
config = mergeConfig(this.defaults, config);
  
// 设置请求方法
  
config.method = config.method ? config.method.toLowerCase() : 'get';
  

  
```
  

  
从源码中，可以看到优先级：默认配置对象`default` < `method:get` < `Axios`的实例属性`this.default` < `request`参数
  

  
下面重点看看`request`方法
  

  
```js
  
Axios.prototype.request = function request(config) {
  
  /*
  
    先是 mergeConfig ... 等，不再阐述
  
  */
  
  // Hook up interceptors middleware 创建拦截器链. dispatchRequest 是重中之重，后续重点
  
  var chain = [dispatchRequest, undefined];
  

  
  // push各个拦截器方法 注意：interceptor.fulfilled 或 interceptor.rejected 是可能为undefined
  
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
  
    // 请求拦截器逆序 注意此处的 forEach 是自定义的拦截器的forEach方法
  
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  
  });
  

  
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
  
    // 响应拦截器顺序 注意此处的 forEach 是自定义的拦截器的forEach方法
  
    chain.push(interceptor.fulfilled, interceptor.rejected);
  
  });
  

  
  // 初始化一个promise对象，状态为resolved，接收到的参数为已经处理合并过的config对象
  
  var promise = Promise.resolve(config);
  

  
  // 循环拦截器的链
  
  while (chain.length) {
  
    promise = promise.then(chain.shift(), chain.shift()); // 每一次向外弹出拦截器
  
  }
  
  // 返回 promise
  
  return promise;
  
};
  
```
  

  
拦截器`interceptors`是在构建`axios`实例化的属性
  

  
```js
  
function Axios(instanceConfig) {
  
  this.defaults = instanceConfig;
  
  this.interceptors = {
  
    request: new InterceptorManager(), // 请求拦截
  
    response: new InterceptorManager() // 响应拦截
  
  };
  
}
  
```
  

  
`InterceptorManager`构造函数
  

  
```js
  
// 拦截器的初始化 其实就是一组钩子函数
  
function InterceptorManager() {
  
  this.handlers = [];
  
}
  

  
// 调用拦截器实例的use时就是往钩子函数中push方法
  
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  
  this.handlers.push({
  
    fulfilled: fulfilled,
  
    rejected: rejected
  
  });
  
  return this.handlers.length - 1;
  
};
  

  
// 拦截器是可以取消的，根据use的时候返回的ID，把某一个拦截器方法置为null
  
// 不能用 splice 或者 slice 的原因是 删除之后 id 就会变化，导致之后的顺序或者是操作不可控
  
InterceptorManager.prototype.eject = function eject(id) {
  
  if (this.handlers[id]) {
  
    this.handlers[id] = null;
  
  }
  
};
  

  
// 这就是在 Axios的request方法中 中循环拦截器的方法 forEach 循环执行钩子函数
  
InterceptorManager.prototype.forEach = function forEach(fn) {
  
  utils.forEach(this.handlers, function forEachHandler(h) {
  
    if (h !== null) {
  
      fn(h);
  
    }
  
  });
  
}
  
```
  

  
请求拦截器方法是被 `unshift`到拦截器中，响应拦截器是被`push`到拦截器中的。最终它们会拼接上一个叫`dispatchRequest`的方法被后续的 `promise` 顺序执行
  

  
```js
  
var utils = require('./../utils');
  
var transformData = require('./transformData');
  
var isCancel = require('../cancel/isCancel');
  
var defaults = require('../defaults');
  
var isAbsoluteURL = require('./../helpers/isAbsoluteURL');
  
var combineURLs = require('./../helpers/combineURLs');
  

  
// 判断请求是否已被取消，如果已经被取消，抛出已取消
  
function throwIfCancellationRequested(config) {
  
  if (config.cancelToken) {
  
    config.cancelToken.throwIfRequested();
  
  }
  
}
  

  
module.exports = function dispatchRequest(config) {
  
  throwIfCancellationRequested(config);
  

  
  // 如果包含baseUrl, 并且不是config.url绝对路径，组合baseUrl以及config.url
  
  if (config.baseURL && !isAbsoluteURL(config.url)) {
  
    // 组合baseURL与url形成完整的请求路径
  
    config.url = combineURLs(config.baseURL, config.url);
  
  }
  

  
  config.headers = config.headers || {};
  

  
  // 使用/lib/defaults.js中的transformRequest方法，对config.headers和config.data进行格式化
  
  // 比如将headers中的Accept，Content-Type统一处理成大写
  
  // 比如如果请求正文是一个Object会格式化为JSON字符串，并添加application/json;charset=utf-8的Content-Type
  
  // 等一系列操作
  
  config.data = transformData(
  
    config.data,
  
    config.headers,
  
    config.transformRequest
  
  );
  

  
  // 合并不同配置的headers，config.headers的配置优先级更高
  
  config.headers = utils.merge(
  
    config.headers.common || {},
  
    config.headers[config.method] || {},
  
    config.headers || {}
  
  );
  

  
  // 删除headers中的method属性
  
  utils.forEach(
  
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
  
    function cleanHeaderConfig(method) {
  
      delete config.headers[method];
  
    }
  
  );
  

  
  // 如果config配置了adapter，使用config中配置adapter的替代默认的请求方法
  
  var adapter = config.adapter || defaults.adapter;
  

  
  // 使用adapter方法发起请求（adapter根据浏览器环境或者Node环境会有不同）
  
  return adapter(config).then(
  
    // 请求正确返回的回调
  
    function onAdapterResolution(response) {
  
      // 判断是否以及取消了请求，如果取消了请求抛出以取消
  
      throwIfCancellationRequested(config);
  

  
      // 使用/lib/defaults.js中的transformResponse方法，对服务器返回的数据进行格式化
  
      // 例如，使用JSON.parse对响应正文进行解析
  
      response.data = transformData(
  
        response.data,
  
        response.headers,
  
        config.transformResponse
  
      );
  

  
      return response;
  
    },
  
    // 请求失败的回调
  
    function onAdapterRejection(reason) {
  
      if (!isCancel(reason)) {
  
        throwIfCancellationRequested(config);
  

  
        if (reason && reason.response) {
  
          reason.response.data = transformData(
  
            reason.response.data,
  
            reason.response.headers,
  
            config.transformResponse
  
          );
  
        }
  
      }
  
      return Promise.reject(reason);
  
    }
  
  );
  
};
  
```
  

  
再来看看`axios`是如何实现取消请求的，实现文件在`CancelToken.js`
  

  
```js
  
function CancelToken(executor) {
  
  if (typeof executor !== 'function') {
  
    throw new TypeError('executor must be a function.');
  
  }
  
  // 在 CancelToken 上定义一个 pending 状态的 promise ，将 resolve 回调赋值给外部变量 resolvePromise
  
  var resolvePromise;
  
  this.promise = new Promise(function promiseExecutor(resolve) {
  
    resolvePromise = resolve;
  
  });
  

  
  var token = this;
  
  // 立即执行 传入的 executor函数，将真实的 cancel 方法通过参数传递出去。
  
  // 一旦调用就执行 resolvePromise 即前面的 promise 的 resolve，就更改promise的状态为 resolve。
  
  // 那么xhr中定义的 CancelToken.promise.then方法就会执行, 从而xhr内部会取消请求
  
  executor(function cancel(message) {
  
    // 判断请求是否已经取消过，避免多次执行
  
    if (token.reason) {
  
      return;
  
    }
  
    token.reason = new Cancel(message);
  
    resolvePromise(token.reason);
  
  });
  
}
  

  
CancelToken.source = function source() {
  
  // source 方法就是返回了一个 CancelToken 实例，与直接使用 new CancelToken 是一样的操作
  
  var cancel;
  
  var token = new CancelToken(function executor(c) {
  
    cancel = c;
  
  });
  
  // 返回创建的 CancelToken 实例以及取消方法
  
  return {
  
    token: token,
  
    cancel: cancel
  
  };
  
};
  
```
  

  
实际上取消请求的操作是在 `xhr.js` 中也有响应的配合的
  

  
```js
  
if (config.cancelToken) {
  
    config.cancelToken.promise.then(function onCanceled(cancel) {
  
        if (!request) {
  
            return;
  
        }
  
        // 取消请求
  
        request.abort();
  
        reject(cancel);
  
    });
  
}
  
```
  

  
巧妙的地方在 `CancelToken`中 `executor` 函数，通过`resolve`函数的传递与执行，控制`promise`的状态
  

  

  

  
### 小结
  

  
 ![](https://static.vue-js.com/b1d2ebd0-48b6-11eb-ab90-d9ae814b240d.png)
  

  

  

  

  

  
## 参考文献
  

  
- https://juejin.cn/post/6856706569263677447#heading-4
  
- https://juejin.cn/post/6844903907500490766
  
- https://github.com/axios/axios  
# Vue项目中有封装过axios吗？怎么封装的？  
 ![](https://static.vue-js.com/2bf1e460-45a7-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、axios是什么  
  
`axios` 是一个轻量的 `HTTP`客户端  
  
基于 `XMLHttpRequest` 服务来执行 `HTTP` 请求，支持丰富的配置，支持 `Promise`，支持浏览器端和 `Node.js` 端。自`Vue`2.0起，尤大宣布取消对 `vue-resource` 的官方推荐，转而推荐 `axios`。现在 `axios` 已经成为大部分 `Vue` 开发者的首选  
  
### 特性  
  
- 从浏览器中创建 `XMLHttpRequests`  
- 从 `node.js` 创建 `http`请求  
- 支持 `Promise` API  
- 拦截请求和响应  
- 转换请求数据和响应数据  
- 取消请求  
- 自动转换` JSON` 数据  
- 客户端支持防御`XSRF`  
  
### 基本使用  
  
安装  
  
```js  
// 项目中安装  
npm install axios --S  
// cdn 引入  
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>  
```  
  
导入  
  
```js  
import axios from 'axios'  
```  
  
发送请求  
  
```js  
axios({          
  url:'xxx',    // 设置请求的地址  
  method:"GET", // 设置请求方法  
  params:{      // get请求使用params进行参数凭借,如果是post请求用data  
    type: '',  
    page: 1  
  }  
}).then(res => {    
  // res为后端返回的数据  
  console.log(res);     
})  
```  
  
  
  
并发请求`axios.all([])`  
  
```js  
function getUserAccount() {  
    return axios.get('/user/12345');  
}  
  
function getUserPermissions() {  
    return axios.get('/user/12345/permissions');  
}  
  
axios.all([getUserAccount(), getUserPermissions()])  
    .then(axios.spread(function (res1, res2) {   
    // res1第一个请求的返回的内容，res2第二个请求返回的内容  
    // 两个请求都执行完成才会执行  
}));  
```  
  
  
  
## 二、为什么要封装  
  
`axios` 的 API 很友好，你完全可以很轻松地在项目中直接使用。  
  
不过随着项目规模增大，如果每发起一次`HTTP`请求，就要把这些比如设置超时时间、设置请求头、根据项目环境判断使用哪个请求地址、错误处理等等操作，都需要写一遍  
  
这种重复劳动不仅浪费时间，而且让代码变得冗余不堪，难以维护。为了提高我们的代码质量，我们应该在项目中二次封装一下 `axios` 再使用  
  
举个例子：  
  
```js  
axios('http://localhost:3000/data', {  
  // 配置代码  
  method: 'GET',  
  timeout: 1000,  
  withCredentials: true,  
  headers: {  
    'Content-Type': 'application/json',  
    Authorization: 'xxx',  
  },  
  transformRequest: [function (data, headers) {  
    return data;  
  }],  
  // 其他请求配置...  
})  
.then((data) => {  
  // todo: 真正业务逻辑代码  
  console.log(data);  
}, (err) => {  
  // 错误处理代码    
  if (err.response.status === 401) {  
  // handle authorization error  
  }  
  if (err.response.status === 403) {  
  // handle server forbidden error  
  }  
  // 其他错误处理.....  
  console.log(err);  
});  
```  
  
如果每个页面都发送类似的请求，都要写一堆的配置与错误处理，就显得过于繁琐了  
  
这时候我们就需要对`axios`进行二次封装，让使用更为便利  
  
  
  
## 三、如何封装  
  
封装的同时，你需要和 后端协商好一些约定，请求头，状态码，请求超时时间.......  
  
设置接口请求前缀：根据开发、测试、生产环境的不同，前缀需要加以区分  
  
请求头 :  来实现一些具体的业务，必须携带一些参数才可以请求(例如：会员业务)  
  
状态码:   根据接口返回的不同`status` ， 来执行不同的业务，这块需要和后端约定好  
  
请求方法：根据`get`、`post`等方法进行一个再次封装，使用起来更为方便  
  
请求拦截器:  根据请求的请求头设定，来决定哪些请求可以访问  
  
响应拦截器： 这块就是根据 后端`返回来的状态码判定执行不同业务  
  
  
  
### 设置接口请求前缀  
  
利用`node`环境变量来作判断，用来区分开发、测试、生产环境  
  
```js  
if (process.env.NODE_ENV === 'development') {  
  axios.defaults.baseURL = 'http://dev.xxx.com'  
} else if (process.env.NODE_ENV === 'production') {  
  axios.defaults.baseURL = 'http://prod.xxx.com'  
}  
```  
  
在本地调试的时候，还需要在`vue.config.js`文件中配置`devServer`实现代理转发，从而实现跨域  
  
```js  
devServer: {  
    proxy: {  
      '/proxyApi': {  
        target: 'http://dev.xxx.com',  
        changeOrigin: true,  
        pathRewrite: {  
          '/proxyApi': ''  
        }  
      }  
    }  
  }  
```  
  
  
  
### 设置请求头与超时时间  
  
大部分情况下，请求头都是固定的，只有少部分情况下，会需要一些特殊的请求头，这里将普适性的请求头作为基础配置。当需要特殊请求头时，将特殊请求头作为参数传入，覆盖基础配置  
  
```js  
const service = axios.create({  
    ...  
    timeout: 30000,  // 请求 30s 超时  
	  headers: {  
        get: {  
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'  
          // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来  
        },  
        post: {  
          'Content-Type': 'application/json;charset=utf-8'  
          // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来  
        }  
  },  
})  
```  
  
  
  
### 封装请求方法  
  
先引入封装好的方法，在要调用的接口重新封装成一个方法暴露出去  
  
```js  
// get 请求  
export function httpGet({  
  url,  
  params = {}  
}) {  
  return new Promise((resolve, reject) => {  
    axios.get(url, {  
      params  
    }).then((res) => {  
      resolve(res.data)  
    }).catch(err => {  
      reject(err)  
    })  
  })  
}  
  
// post  
// post请求  
export function httpPost({  
  url,  
  data = {},  
  params = {}  
}) {  
  return new Promise((resolve, reject) => {  
    axios({  
      url,  
      method: 'post',  
      transformRequest: [function (data) {  
        let ret = ''  
        for (let it in data) {  
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'  
        }  
        return ret  
      }],  
      // 发送的数据  
      data,  
      // url参数  
      params  
  
    }).then(res => {  
      resolve(res.data)  
    })  
  })  
}  
```  
  
把封装的方法放在一个`api.js`文件中  
  
```js  
import { httpGet, httpPost } from './http'  
export const getorglist = (params = {}) => httpGet({ url: 'apps/api/org/list', params })  
```  
  
页面中就能直接调用  
  
```js  
// .vue  
import { getorglist } from '@/assets/js/api'  
  
getorglist({ id: 200 }).then(res => {  
  console.log(res)  
})  
```  
  
这样可以把`api`统一管理起来，以后维护修改只需要在`api.js`文件操作即可  
  
  
  
### 请求拦截器  
  
请求拦截器可以在每个请求里加上token，做了统一处理后维护起来也方便  
  
```js  
// 请求拦截器  
axios.interceptors.request.use(  
  config => {  
    // 每次发送请求之前判断是否存在token  
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况，此处token一般是用户完成登录后储存到localstorage里的  
    token && (config.headers.Authorization = token)  
    return config  
  },  
  error => {  
    return Promise.error(error)  
  })  
```  
  
  
  
### 响应拦截器  
  
响应拦截器可以在接收到响应后先做一层操作，如根据状态码判断登录状态、授权  
  
```js  
// 响应拦截器  
axios.interceptors.response.use(response => {  
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据  
  // 否则的话抛出错误  
  if (response.status === 200) {  
    if (response.data.code === 511) {  
      // 未授权调取授权接口  
    } else if (response.data.code === 510) {  
      // 未登录跳转登录页  
    } else {  
      return Promise.resolve(response)  
    }  
  } else {  
    return Promise.reject(response)  
  }  
}, error => {  
  // 我们可以在这里对异常状态作统一处理  
  if (error.response.status) {  
    // 处理请求失败的情况  
    // 对不同返回码对相应处理  
    return Promise.reject(error.response)  
  }  
})  
```  
  
  
  
### 小结  
  
- 封装是编程中很有意义的手段，简单的`axios`封装，就可以让我们可以领略到它的魅力  
- 封装 `axios` 没有一个绝对的标准，只要你的封装可以满足你的项目需求，并且用起来方便，那就是一个好的封装方案  
  
  
# 什么是虚拟DOM？如何实现一个虚拟DOM？说说你的思路  
  
  
 ![](https://static.vue-js.com/770b9670-442c-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、什么是虚拟DOM  
  
虚拟 DOM （`Virtual DOM` ）这个概念相信大家都不陌生，从 `React` 到 `Vue` ，虚拟 `DOM` 为这两个框架都带来了跨平台的能力（`React-Native` 和 `Weex`）  
  
实际上它只是一层对真实`DOM`的抽象，以`JavaScript` 对象 (`VNode` 节点) 作为基础的树，用对象的属性来描述节点，最终可以通过一系列操作使这棵树映射到真实环境上  
  
在`Javascript`对象中，虚拟`DOM` 表现为一个 `Object `对象。并且最少包含标签名 (`tag`)、属性 (`attrs`) 和子元素对象 (`children`) 三个属性，不同框架对这三个属性的名命可能会有差别  
  
创建虚拟`DOM`就是为了更好将虚拟的节点渲染到页面视图中，所以虚拟`DOM`对象的节点与真实`DOM`的属性一一照应  
  
在`vue`中同样使用到了虚拟`DOM`技术  
  
定义真实`DOM`  
  
```html  
<div id="app">  
    <p class="p">节点内容</p>  
    <h3>{{ foo }}</h3>  
</div>  
```  
  
实例化`vue`  
  
```js  
const app = new Vue({  
    el:"#app",  
    data:{  
        foo:"foo"  
    }  
})  
```  
  
观察`render`的`render`，我们能得到虚拟`DOM`  
  
```js  
(function anonymous(  
) {  
	with(this){return _c('div',{attrs:{"id":"app"}},[_c('p',{staticClass:"p"},  
					  [_v("节点内容")]),_v(" "),_c('h3',[_v(_s(foo))])])}})  
```  
  
通过`VNode`，`vue`可以对这颗抽象树进行创建节点,删除节点以及修改节点的操作， 经过`diff`算法得出一些需要修改的最小单位,再更新视图，减少了`dom`操作，提高了性能  
  
## 二、为什么需要虚拟DOM  
  
`DOM`是很慢的，其元素非常庞大，页面的性能问题，大部分都是由`DOM`操作引起的  
  
真实的`DOM`节点，哪怕一个最简单的`div`也包含着很多属性，可以打印出来直观感受一下：  
 ![](https://static.vue-js.com/cc95c7f0-442c-11eb-ab90-d9ae814b240d.png)  
  
由此可见，操作`DOM`的代价仍旧是昂贵的，频繁操作还是会出现页面卡顿，影响用户的体验  
  
**举个例子：**  
  
你用传统的原生`api`或`jQuery`去操作`DOM`时，浏览器会从构建`DOM`树开始从头到尾执行一遍流程  
  
当你在一次操作时，需要更新10个`DOM`节点，浏览器没这么智能，收到第一个更新`DOM`请求后，并不知道后续还有9次更新操作，因此会马上执行流程，最终执行10次流程  
  
而通过`VNode`，同样更新10个`DOM`节点，虚拟`DOM`不会立即操作`DOM`，而是将这10次更新的`diff`内容保存到本地的一个`js`对象中，最终将这个`js`对象一次性`attach`到`DOM`树上，避免大量的无谓计算  
  
> 很多人认为虚拟 DOM 最大的优势是 diff 算法，减少 JavaScript 操作真实 DOM 的带来的性能消耗。虽然这一个虚拟 DOM 带来的一个优势，但并不是全部。虚拟 DOM 最大的优势在于抽象了原本的渲染过程，实现了跨平台的能力，而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，可以是近期很火热的小程序，也可以是各种GUI  
  
  
## 三、如何实现虚拟DOM  
  
首先可以看看`vue`中`VNode`的结构  
  
源码位置：src/core/vdom/vnode.js  
  
```js  
export default class VNode {  
  tag: string | void;  
  data: VNodeData | void;  
  children: ?Array<VNode>;  
  text: string | void;  
  elm: Node | void;  
  ns: string | void;  
  context: Component | void; // rendered in this component's scope  
  functionalContext: Component | void; // only for functional component root nodes  
  key: string | number | void;  
  componentOptions: VNodeComponentOptions | void;  
  componentInstance: Component | void; // component instance  
  parent: VNode | void; // component placeholder node  
  raw: boolean; // contains raw HTML? (server only)  
  isStatic: boolean; // hoisted static node  
  isRootInsert: boolean; // necessary for enter transition check  
  isComment: boolean; // empty comment placeholder?  
  isCloned: boolean; // is a cloned node?  
  isOnce: boolean; // is a v-once node?  
  
  constructor (  
    tag?: string,  
    data?: VNodeData,  
    children?: ?Array<VNode>,  
    text?: string,  
    elm?: Node,  
    context?: Component,  
    componentOptions?: VNodeComponentOptions  
  ) {  
    /*当前节点的标签名*/  
    this.tag = tag  
    /*当前节点对应的对象，包含了具体的一些数据信息，是一个VNodeData类型，可以参考VNodeData类型中的数据信息*/  
    this.data = data  
    /*当前节点的子节点，是一个数组*/  
    this.children = children  
    /*当前节点的文本*/  
    this.text = text  
    /*当前虚拟节点对应的真实dom节点*/  
    this.elm = elm  
    /*当前节点的名字空间*/  
    this.ns = undefined  
    /*编译作用域*/  
    this.context = context  
    /*函数化组件作用域*/  
    this.functionalContext = undefined  
    /*节点的key属性，被当作节点的标志，用以优化*/  
    this.key = data && data.key  
    /*组件的option选项*/  
    this.componentOptions = componentOptions  
    /*当前节点对应的组件的实例*/  
    this.componentInstance = undefined  
    /*当前节点的父节点*/  
    this.parent = undefined  
    /*简而言之就是是否为原生HTML或只是普通文本，innerHTML的时候为true，textContent的时候为false*/  
    this.raw = false  
    /*静态节点标志*/  
    this.isStatic = false  
    /*是否作为跟节点插入*/  
    this.isRootInsert = true  
    /*是否为注释节点*/  
    this.isComment = false  
    /*是否为克隆节点*/  
    this.isCloned = false  
    /*是否有v-once指令*/  
    this.isOnce = false  
  }  
  
  // DEPRECATED: alias for componentInstance for backwards compat.  
  /* istanbul ignore next https://github.com/answershuto/learnVue*/  
  get child (): Component | void {  
    return this.componentInstance  
  }  
}  
```  
  
这里对`VNode`进行稍微的说明：  
  
- 所有对象的 `context` 选项都指向了 `Vue` 实例  
- `elm` 属性则指向了其相对应的真实 `DOM` 节点  
  
`vue`是通过`createElement`生成`VNode`  
  
源码位置：src/core/vdom/create-element.js  
  
```js  
export function createElement (  
  context: Component,  
  tag: any,  
  data: any,  
  children: any,  
  normalizationType: any,  
  alwaysNormalize: boolean  
): VNode | Array<VNode> {  
  if (Array.isArray(data) || isPrimitive(data)) {  
    normalizationType = children  
    children = data  
    data = undefined  
  }  
  if (isTrue(alwaysNormalize)) {  
    normalizationType = ALWAYS_NORMALIZE  
  }  
  return _createElement(context, tag, data, children, normalizationType)  
}  
```  
  
上面可以看到`createElement` 方法实际上是对 `_createElement` 方法的封装，对参数的传入进行了判断  
  
```javascript  
export function _createElement(  
    context: Component,  
    tag?: string | Class<Component> | Function | Object,  
    data?: VNodeData,  
    children?: any,  
    normalizationType?: number  
): VNode | Array<VNode> {  
    if (isDef(data) && isDef((data: any).__ob__)) {  
        process.env.NODE_ENV !== 'production' && warn(  
            `Avoid using observed data object as vnode data: ${JSON.stringify(data)}\n` +  
            'Always create fresh vnode data objects in each render!',  
            context`  
        )  
        return createEmptyVNode()  
    }  
    // object syntax in v-bind  
    if (isDef(data) && isDef(data.is)) {  
        tag = data.is  
    }  
    if (!tag) {  
        // in case of component :is set to falsy value  
        return createEmptyVNode()  
    }  
    ...   
    // support single function children as default scoped slot  
    if (Array.isArray(children) &&  
        typeof children[0] === 'function'  
    ) {  
        data = data || {}  
        data.scopedSlots = { default: children[0] }  
        children.length = 0  
    }  
    if (normalizationType === ALWAYS_NORMALIZE) {  
        children = normalizeChildren(children)  
    } else if ( === SIMPLE_NORMALIZE) {  
        children = simpleNormalizeChildren(children)  
    }  
	// 创建VNode  
    ...  
}  
```  
  
可以看到`_createElement`接收5个参数：  
  
- `context` 表示 `VNode` 的上下文环境，是 `Component` 类型  
- tag 表示标签，它可以是一个字符串，也可以是一个 `Component`  
  
- `data` 表示 `VNode` 的数据，它是一个 `VNodeData` 类型  
  
- `children` 表示当前 `VNode `的子节点，它是任意类型的  
  
- `normalizationType` 表示子节点规范的类型，类型不同规范的方法也就不一样，主要是参考 `render` 函数是编译生成的还是用户手写的  
  
根据`normalizationType` 的类型，`children`会有不同的定义  
  
```js  
if (normalizationType === ALWAYS_NORMALIZE) {  
    children = normalizeChildren(children)  
} else if ( === SIMPLE_NORMALIZE) {  
    children = simpleNormalizeChildren(children)  
}  
```  
  
`simpleNormalizeChildren`方法调用场景是 `render` 函数是编译生成的  
  
`normalizeChildren`方法调用场景分为下面两种：  
  
-  `render` 函数是用户手写的  
- 编译 `slot`、`v-for` 的时候会产生嵌套数组  
  
无论是`simpleNormalizeChildren`还是`normalizeChildren`都是对`children`进行规范（使`children` 变成了一个类型为 `VNode` 的 `Array`），这里就不展开说了  
  
规范化`children`的源码位置在：src/core/vdom/helpers/normalzie-children.js  
  
在规范化`children`后，就去创建`VNode`  
  
```js  
let vnode, ns  
// 对tag进行判断  
if (typeof tag === 'string') {  
  let Ctor  
  ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag)  
  if (config.isReservedTag(tag)) {  
    // 如果是内置的节点，则直接创建一个普通VNode  
    vnode = new VNode(  
      config.parsePlatformTagName(tag), data, children,  
      undefined, undefined, context  
    )  
  } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {  
    // component  
    // 如果是component类型，则会通过createComponent创建VNode节点  
    vnode = createComponent(Ctor, data, context, children, tag)  
  } else {  
    vnode = new VNode(  
      tag, data, children,  
      undefined, undefined, context  
    )  
  }  
} else {  
  // direct component options / constructor  
  vnode = createComponent(tag, data, context, children)  
}  
```  
  
`createComponent`同样是创建`VNode`  
  
源码位置：src/core/vdom/create-component.js  
  
```js  
export function createComponent (  
  Ctor: Class<Component> | Function | Object | void,  
  data: ?VNodeData,  
  context: Component,  
  children: ?Array<VNode>,  
  tag?: string  
): VNode | Array<VNode> | void {  
  if (isUndef(Ctor)) {  
    return  
  }  
 // 构建子类构造函数   
  const baseCtor = context.$options._base  
  
  // plain options object: turn it into a constructor  
  if (isObject(Ctor)) {  
    Ctor = baseCtor.extend(Ctor)  
  }  
  
  // if at this stage it's not a constructor or an async component factory,  
  // reject.  
  if (typeof Ctor !== 'function') {  
    if (process.env.NODE_ENV !== 'production') {  
      warn(`Invalid Component definition: ${String(Ctor)}`, context)  
    }  
    return  
  }  
  
  // async component  
  let asyncFactory  
  if (isUndef(Ctor.cid)) {  
    asyncFactory = Ctor  
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context)  
    if (Ctor === undefined) {  
      return createAsyncPlaceholder(  
        asyncFactory,  
        data,  
        context,  
        children,  
        tag  
      )  
    }  
  }  
  
  data = data || {}  
  
  // resolve constructor options in case global mixins are applied after  
  // component constructor creation  
  resolveConstructorOptions(Ctor)  
  
  // transform component v-model data into props & events  
  if (isDef(data.model)) {  
    transformModel(Ctor.options, data)  
  }  
  
  // extract props  
  const propsData = extractPropsFromVNodeData(data, Ctor, tag)  
  
  // functional component  
  if (isTrue(Ctor.options.functional)) {  
    return createFunctionalComponent(Ctor, propsData, data, context, children)  
  }  
  
  // extract listeners, since these needs to be treated as  
  // child component listeners instead of DOM listeners  
  const listeners = data.on  
  // replace with listeners with .native modifier  
  // so it gets processed during parent component patch.  
  data.on = data.nativeOn  
  
  if (isTrue(Ctor.options.abstract)) {  
    const slot = data.slot  
    data = {}  
    if (slot) {  
      data.slot = slot  
    }  
  }  
  
  // 安装组件钩子函数，把钩子函数合并到data.hook中  
  installComponentHooks(data)  
  
  //实例化一个VNode返回。组件的VNode是没有children的  
  const name = Ctor.options.name || tag  
  const vnode = new VNode(  
    `vue-component-${Ctor.cid}${name ? `-${name}` : ''}`,  
    data, undefined, undefined, undefined, context,  
    { Ctor, propsData, listeners, tag, children },  
    asyncFactory  
  )  
  if (__WEEX__ && isRecyclableComponent(vnode)) {  
    return renderRecyclableComponentTemplate(vnode)  
  }  
  
  return vnode  
}  
```  
  
稍微提下`createComponent`生成`VNode`的三个关键流程：  
  
- 构造子类构造函数`Ctor `  
- `installComponentHooks`安装组件钩子函数  
- 实例化 `vnode`  
  
### 小结  
  
`createElement` 创建 `VNode` 的过程，每个 `VNode` 有 `children`，`children` 每个元素也是一个`VNode`，这样就形成了一个虚拟树结构，用于描述真实的`DOM`树结构  
  
# 说说你对Vue中 keep-alive 的理解  
 ![](https://static.vue-js.com/2c217260-4021-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、Keep-alive 是什么  
  
`keep-alive`是`vue`中的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染`DOM`  
  
`keep-alive` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们  
  
`keep-alive`可以设置以下`props`属性：  
  
- `include` - 字符串或正则表达式。只有名称匹配的组件会被缓存  
- `exclude` - 字符串或正则表达式。任何名称匹配的组件都不会被缓存  
- `max` - 数字。最多可以缓存多少组件实例  
  
关于`keep-alive`的基本用法：  
  
```js  
<keep-alive>  
  <component :is="view"></component>  
</keep-alive>  
```  
  
使用`includes`和`exclude`：  
  
```js  
<keep-alive include="a,b">  
  <component :is="view"></component>  
</keep-alive>  
  
<!-- 正则表达式 (使用 `v-bind`) -->  
<keep-alive :include="/a|b/">  
  <component :is="view"></component>  
</keep-alive>  
  
<!-- 数组 (使用 `v-bind`) -->  
<keep-alive :include="['a', 'b']">  
  <component :is="view"></component>  
</keep-alive>  
```  
  
匹配首先检查组件自身的 `name` 选项，如果 `name` 选项不可用，则匹配它的局部注册名称 (父组件 `components` 选项的键值)，匿名组件不能被匹配  
  
设置了 keep-alive 缓存的组件，会多出两个生命周期钩子（`activated`与`deactivated`）：  
  
- 首次进入组件时：`beforeRouteEnter` > `beforeCreate` > `created`> `mounted` > `activated` > ... ... > `beforeRouteLeave` > `deactivated`  
  
- 再次进入组件时：`beforeRouteEnter` >`activated` > ... ... > `beforeRouteLeave` > `deactivated`  
  
## 二、使用场景  
  
使用原则：当我们在某些场景下不需要让页面重新加载时我们可以使用`keepalive`  
  
举个栗子:  
  
当我们从`首页`–>`列表页`–>`商详页`–>`再返回`，这时候列表页应该是需要`keep-alive`  
  
从`首页`–>`列表页`–>`商详页`–>`返回到列表页(需要缓存)`–>`返回到首页(需要缓存)`–>`再次进入列表页(不需要缓存)`，这时候可以按需来控制页面的`keep-alive`  
  
在路由中设置`keepAlive`属性判断是否需要缓存  
  
```js  
{  
  path: 'list',  
  name: 'itemList', // 列表页  
  component (resolve) {  
    require(['@/pages/item/list'], resolve)  
 },  
 meta: {  
  keepAlive: true,  
  title: '列表页'  
 }  
}  
```  
  
使用`<keep-alive>`  
  
```js  
<div id="app" class='wrapper'>  
    <keep-alive>  
        <!-- 需要缓存的视图组件 -->   
        <router-view v-if="$route.meta.keepAlive"></router-view>  
     </keep-alive>  
      <!-- 不需要缓存的视图组件 -->  
     <router-view v-if="!$route.meta.keepAlive"></router-view>  
</div>  
```  
  
  
## 三、原理分析  
  
`keep-alive`是`vue`中内置的一个组件  
  
源码位置：src/core/components/keep-alive.js  
  
```js  
export default {  
  name: 'keep-alive',  
  abstract: true,  
  
  props: {  
    include: [String, RegExp, Array],  
    exclude: [String, RegExp, Array],  
    max: [String, Number]  
  },  
  
  created () {  
    this.cache = Object.create(null)  
    this.keys = []  
  },  
  
  destroyed () {  
    for (const key in this.cache) {  
      pruneCacheEntry(this.cache, key, this.keys)  
    }  
  },  
  
  mounted () {  
    this.$watch('include', val => {  
      pruneCache(this, name => matches(val, name))  
    })  
    this.$watch('exclude', val => {  
      pruneCache(this, name => !matches(val, name))  
    })  
  },  
  
  render() {  
    /* 获取默认插槽中的第一个组件节点 */  
    const slot = this.$slots.default  
    const vnode = getFirstComponentChild(slot)  
    /* 获取该组件节点的componentOptions */  
    const componentOptions = vnode && vnode.componentOptions  
  
    if (componentOptions) {  
      /* 获取该组件节点的名称，优先获取组件的name字段，如果name不存在则获取组件的tag */  
      const name = getComponentName(componentOptions)  
  
      const { include, exclude } = this  
      /* 如果name不在inlcude中或者存在于exlude中则表示不缓存，直接返回vnode */  
      if (  
        (include && (!name || !matches(include, name))) ||  
        // excluded  
        (exclude && name && matches(exclude, name))  
      ) {  
        return vnode  
      }  
  
      const { cache, keys } = this  
      /* 获取组件的key值 */  
      const key = vnode.key == null  
        // same constructor may get registered as different local components  
        // so cid alone is not enough (#3269)  
        ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')  
        : vnode.key  
     /*  拿到key值后去this.cache对象中去寻找是否有该值，如果有则表示该组件有缓存，即命中缓存 */  
      if (cache[key]) {  
        vnode.componentInstance = cache[key].componentInstance  
        // make current key freshest  
        remove(keys, key)  
        keys.push(key)  
      }  
        /* 如果没有命中缓存，则将其设置进缓存 */  
        else {  
        cache[key] = vnode  
        keys.push(key)  
        // prune oldest entry  
        /* 如果配置了max并且缓存的长度超过了this.max，则从缓存中删除第一个 */  
        if (this.max && keys.length > parseInt(this.max)) {  
          pruneCacheEntry(cache, keys[0], keys, this._vnode)  
        }  
      }  
  
      vnode.data.keepAlive = true  
    }  
    return vnode || (slot && slot[0])  
  }  
}  
```  
  
可以看到该组件没有`template`，而是用了`render`，在组件渲染的时候会自动执行`render`函数  
  
`this.cache`是一个对象，用来存储需要缓存的组件，它将以如下形式存储：  
  
```js  
this.cache = {  
    'key1':'组件1',  
    'key2':'组件2',  
    // ...  
}  
```  
  
在组件销毁的时候执行`pruneCacheEntry`函数  
  
```js  
function pruneCacheEntry (  
  cache: VNodeCache,  
  key: string,  
  keys: Array<string>,  
  current?: VNode  
) {  
  const cached = cache[key]  
  /* 判断当前没有处于被渲染状态的组件，将其销毁*/  
  if (cached && (!current || cached.tag !== current.tag)) {  
    cached.componentInstance.$destroy()  
  }  
  cache[key] = null  
  remove(keys, key)  
}  
```  
  
在`mounted`钩子函数中观测 `include` 和 `exclude` 的变化，如下：  
  
```javascript  
mounted () {  
    this.$watch('include', val => {  
        pruneCache(this, name => matches(val, name))  
    })  
    this.$watch('exclude', val => {  
        pruneCache(this, name => !matches(val, name))  
    })  
}  
```  
  
如果`include` 或`exclude` 发生了变化，即表示定义需要缓存的组件的规则或者不需要缓存的组件的规则发生了变化，那么就执行`pruneCache`函数，函数如下：  
  
```javascript  
function pruneCache (keepAliveInstance, filter) {  
  const { cache, keys, _vnode } = keepAliveInstance  
  for (const key in cache) {  
    const cachedNode = cache[key]  
    if (cachedNode) {  
      const name = getComponentName(cachedNode.componentOptions)  
      if (name && !filter(name)) {  
        pruneCacheEntry(cache, key, keys, _vnode)  
      }  
    }  
  }  
}  
```  
  
在该函数内对`this.cache`对象进行遍历，取出每一项的`name`值，用其与新的缓存规则进行匹配，如果匹配不上，则表示在新的缓存规则下该组件已经不需要被缓存，则调用`pruneCacheEntry`函数将其从`this.cache`对象剔除即可  
  
关于`keep-alive`的最强大缓存功能是在`render`函数中实现  
  
首先获取组件的`key`值：  
  
```javascript  
const key = vnode.key == null?   
componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')  
: vnode.key  
```  
  
拿到`key`值后去`this.cache`对象中去寻找是否有该值，如果有则表示该组件有缓存，即命中缓存，如下：  
  
```javascript  
/* 如果命中缓存，则直接从缓存中拿 vnode 的组件实例 */  
if (cache[key]) {  
    vnode.componentInstance = cache[key].componentInstance  
    /* 调整该组件key的顺序，将其从原来的地方删掉并重新放在最后一个 */  
    remove(keys, key)  
    keys.push(key)  
}   
```  
  
直接从缓存中拿 `vnode` 的组件实例，此时重新调整该组件`key`的顺序，将其从原来的地方删掉并重新放在`this.keys`中最后一个  
  
`this.cache`对象中没有该`key`值的情况，如下：  
  
```javascript  
/* 如果没有命中缓存，则将其设置进缓存 */  
else {  
    cache[key] = vnode  
    keys.push(key)  
    /* 如果配置了max并且缓存的长度超过了this.max，则从缓存中删除第一个 */  
    if (this.max && keys.length > parseInt(this.max)) {  
        pruneCacheEntry(cache, keys[0], keys, this._vnode)  
    }  
}  
```  
  
表明该组件还没有被缓存过，则以该组件的`key`为键，组件`vnode`为值，将其存入`this.cache`中，并且把`key`存入`this.keys`中  
  
此时再判断`this.keys`中缓存组件的数量是否超过了设置的最大缓存数量值`this.max`，如果超过了，则把第一个缓存组件删掉  
  
  
  
## 四、思考题：缓存后如何获取数据  
  
解决方案可以有以下两种：  
  
- beforeRouteEnter  
- actived  
  
### beforeRouteEnter  
  
每次组件渲染的时候，都会执行`beforeRouteEnter`  
  
```js  
beforeRouteEnter(to, from, next){  
    next(vm=>{  
        console.log(vm)  
        // 每次进入路由执行  
        vm.getData()  // 获取数据  
    })  
},  
```  
  
### actived  
  
在`keep-alive`缓存的组件被激活的时候，都会执行`actived`钩子  
  
```js  
activated(){  
	  this.getData() // 获取数据  
},  
```  
  
注意：服务器端渲染期间`avtived`不被调用  
  
  
# Vue.observable是什么？  
 ![](https://static.vue-js.com/193782e0-3e7b-11eb-ab90-d9ae814b240d.png)    
  
## 一、Observable 是什么  
  
`Observable` 翻译过来我们可以理解成**可观察的**  
  
我们先来看一下其在`Vue`中的定义  
  
> `Vue.observable`，让一个对象变成响应式数据。`Vue` 内部会用它来处理 `data` 函数返回的对象  
  
返回的对象可以直接用于渲染函数和计算属性内，并且会在发生变更时触发相应的更新。也可以作为最小化的跨组件状态存储器  
  
```js  
Vue.observable({ count : 1})  
```  
  
其作用等同于  
  
```js  
new vue({ count : 1})  
```  
  
在 `Vue 2.x` 中，被传入的对象会直接被 `Vue.observable` 变更，它和被返回的对象是同一个对象  
  
在 `Vue 3.x` 中，则会返回一个可响应的代理，而对源对象直接进行变更仍然是不可响应的  
  
## 二、使用场景  
  
在非父子组件通信时，可以使用通常的`bus`或者使用`vuex`，但是实现的功能不是太复杂，而使用上面两个又有点繁琐。这时，`observable`就是一个很好的选择  
  
创建一个`js`文件  
  
```js  
// 引入vue  
import Vue from 'vue  
// 创建state对象，使用observable让state对象可响应  
export let state = Vue.observable({  
  name: '张三',  
  'age': 38  
})  
// 创建对应的方法  
export let mutations = {  
  changeName(name) {  
    state.name = name  
  },  
  setAge(age) {  
    state.age = age  
  }  
}  
```  
  
在`.vue`文件中直接使用即可  
  
```js  
<template>  
  <div>  
    姓名：{{ name }}  
    年龄：{{ age }}  
    <button @click="changeName('李四')">改变姓名</button>  
    <button @click="setAge(18)">改变年龄</button>  
  </div>  
</template>  
import { state, mutations } from '@/store  
export default {  
  // 在计算属性中拿到值  
  computed: {  
    name() {  
      return state.name  
    },  
    age() {  
      return state.age  
    }  
  },  
  // 调用mutations里面的方法，更新数据  
  methods: {  
    changeName: mutations.changeName,  
    setAge: mutations.setAge  
  }  
}  
```  
  
## 三、原理分析  
  
源码位置：src\core\observer\index.js  
  
```js  
export function observe (value: any, asRootData: ?boolean): Observer | void {  
  if (!isObject(value) || value instanceof VNode) {  
    return  
  }  
  let ob: Observer | void  
  // 判断是否存在__ob__响应式属性  
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {  
    ob = value.__ob__  
  } else if (  
    shouldObserve &&  
    !isServerRendering() &&  
    (Array.isArray(value) || isPlainObject(value)) &&  
    Object.isExtensible(value) &&  
    !value._isVue  
  ) {  
    // 实例化Observer响应式对象  
    ob = new Observer(value)  
  }  
  if (asRootData && ob) {  
    ob.vmCount++  
  }  
  return ob  
}  
```  
  
`Observer`类  
  
```js  
export class Observer {  
    value: any;  
    dep: Dep;  
    vmCount: number; // number of vms that have this object as root $data  
  
    constructor (value: any) {  
        this.value = value  
        this.dep = new Dep()  
        this.vmCount = 0  
        def(value, '__ob__', this)  
        if (Array.isArray(value)) {  
            if (hasProto) {  
                protoAugment(value, arrayMethods)  
            } else {  
                copyAugment(value, arrayMethods, arrayKeys)  
            }  
            this.observeArray(value)  
        } else {  
            // 实例化对象是一个对象，进入walk方法  
            this.walk(value)  
        }  
}  
```  
  
`walk`函数  
  
```js  
walk (obj: Object) {  
    const keys = Object.keys(obj)  
    // 遍历key，通过defineReactive创建响应式对象  
    for (let i = 0; i < keys.length; i++) {  
        defineReactive(obj, keys[i])  
    }  
}  
```  
  
`defineReactive`方法  
  
```js  
export function defineReactive (  
  obj: Object,  
  key: string,  
  val: any,  
  customSetter?: ?Function,  
  shallow?: boolean  
) {  
  const dep = new Dep()  
  
  const property = Object.getOwnPropertyDescriptor(obj, key)  
  if (property && property.configurable === false) {  
    return  
  }  
  
  // cater for pre-defined getter/setters  
  const getter = property && property.get  
  const setter = property && property.set  
  if ((!getter || setter) && arguments.length === 2) {  
    val = obj[key]  
  }  
  
  let childOb = !shallow && observe(val)  
  // 接下来调用Object.defineProperty()给对象定义响应式属性  
  Object.defineProperty(obj, key, {  
    enumerable: true,  
    configurable: true,  
    get: function reactiveGetter () {  
      const value = getter ? getter.call(obj) : val  
      if (Dep.target) {  
        dep.depend()  
        if (childOb) {  
          childOb.dep.depend()  
          if (Array.isArray(value)) {  
            dependArray(value)  
          }  
        }  
      }  
      return value  
    },  
    set: function reactiveSetter (newVal) {  
      const value = getter ? getter.call(obj) : val  
      /* eslint-disable no-self-compare */  
      if (newVal === value || (newVal !== newVal && value !== value)) {  
        return  
      }  
      /* eslint-enable no-self-compare */  
      if (process.env.NODE_ENV !== 'production' && customSetter) {  
        customSetter()  
      }  
      // #7981: for accessor properties without setter  
      if (getter && !setter) return  
      if (setter) {  
        setter.call(obj, newVal)  
      } else {  
        val = newVal  
      }  
      childOb = !shallow && observe(newVal)  
      // 对观察者watchers进行通知,state就成了全局响应式对象  
      dep.notify()  
    }  
  })  
}  
```  
  
  
# 说说你对slot的理解？slot使用场景有哪些？  
 ![](https://static.vue-js.com/141ca660-3dbc-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、slot是什么  
  
在HTML中 `slot` 元素 ，作为 `Web Components` 技术套件的一部分，是Web组件内的一个占位符  
  
该占位符可以在后期使用自己的标记语言填充  
  
举个栗子  
```html  
<template id="element-details-template">  
  <slot name="element-name">Slot template</slot>  
</template>  
<element-details>  
  <span slot="element-name">1</span>  
</element-details>  
<element-details>  
  <span slot="element-name">2</span>  
</element-details>  
```  
`template`不会展示到页面中，需要用先获取它的引用，然后添加到`DOM`中，  
  
```js  
customElements.define('element-details',  
  class extends HTMLElement {  
    constructor() {  
      super();  
      const template = document  
        .getElementById('element-details-template')  
        .content;  
      const shadowRoot = this.attachShadow({mode: 'open'})  
        .appendChild(template.cloneNode(true));  
  }  
})  
```  
  
在`Vue`中的概念也是如此  
  
`Slot` 艺名插槽，花名“占坑”，我们可以理解为`solt`在组件模板中占好了位置，当使用该组件标签时候，组件标签里面的内容就会自动填坑（替换组件模板中`slot`位置），作为承载分发内容的出口  
  
可以将其类比为插卡式的FC游戏机，游戏机暴露卡槽（插槽）让用户插入不同的游戏磁条（自定义内容）  
  
放张图感受一下  
![](https://static.vue-js.com/63c0dff0-3dbd-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
## 二、使用场景  
  
通过插槽可以让用户可以拓展组件，去更好地复用组件和对其做定制化处理  
  
如果父组件在使用到一个复用组件的时候，获取这个组件在不同的地方有少量的更改，如果去重写组件是一件不明智的事情  
  
通过`slot`插槽向组件内部指定位置传递内容，完成这个复用组件在不同场景的应用  
  
比如布局组件、表格列、下拉选、弹框显示内容等  
  
## 三、分类  
  
`slot`可以分来以下三种：  
  
- 默认插槽  
- 具名插槽  
- 作用域插槽  
  
  
  
### 默认插槽  
  
子组件用`<slot>`标签来确定渲染的位置，标签里面可以放`DOM`结构，当父组件使用的时候没有往插槽传入内容，标签内`DOM`结构就会显示在页面  
  
父组件在使用的时候，直接在子组件的标签内写入内容即可  
  
子组件`Child.vue`  
  
```js  
<template>  
    <slot>  
      <p>插槽后备的内容</p>  
    </slot>  
</template>  
```  
  
父组件  
  
```js  
<Child>  
  <div>默认插槽</div>    
</Child>  
```  
  
  
  
### 具名插槽  
  
子组件用`name`属性来表示插槽的名字，不传为默认插槽  
  
父组件中在使用时在默认插槽的基础上加上`slot`属性，值为子组件插槽`name`属性值  
  
子组件`Child.vue`  
  
```js  
<template>  
    <slot>插槽后备的内容</slot>  
  <slot name="content">插槽后备的内容</slot>  
</template>  
```  
  
父组件  
  
```js  
<child>  
    <template v-slot:default>具名插槽</template>  
    <!-- 具名插槽⽤插槽名做参数 -->  
    <template v-slot:content>内容...</template>  
</child>  
```  
  
  
  
### 作用域插槽  
  
子组件在作用域上绑定属性来将子组件的信息传给父组件使用，这些属性会被挂在父组件`v-slot`接受的对象上  
  
父组件中在使用时通过`v-slot:`（简写：#）获取子组件的信息，在内容中使用  
  
子组件`Child.vue`  
  
```js  
<template>   
  <slot name="footer" testProps="子组件的值">  
          <h3>没传footer插槽</h3>  
    </slot>  
</template>  
```  
  
父组件  
  
```js  
<child>   
    <!-- 把v-slot的值指定为作⽤域上下⽂对象 -->  
    <template v-slot:default="slotProps">  
      来⾃⼦组件数据：{{slotProps.testProps}}  
    </template>  
  <template #default="slotProps">  
      来⾃⼦组件数据：{{slotProps.testProps}}  
    </template>  
</child>  
```  
  
  
  
### 小结：  
  
- `v-slot`属性只能在`<template>`上使用，但在只有默认插槽时可以在组件标签上使用  
- 默认插槽名为`default`，可以省略default直接写`v-slot`  
- 缩写为`#`时不能不写参数，写成`#default`  
- 可以通过解构获取`v-slot={user}`，还可以重命名`v-slot="{user: newName}"`和定义默认值`v-slot="{user = '默认值'}"`  
  
  
  
## 四、原理分析  
  
`slot`本质上是返回`VNode`的函数，一般情况下，`Vue`中的组件要渲染到页面上需要经过`template -> render function -> VNode -> DOM` 过程，这里看看`slot`如何实现：  
  
编写一个`buttonCounter`组件，使用匿名插槽  
  
```js  
Vue.component('button-counter', {  
  template: '<div> <slot>我是默认内容</slot></div>'  
})  
```  
  
使用该组件  
  
```js  
new Vue({  
    el: '#app',  
    template: '<button-counter><span>我是slot传入内容</span></button-counter>',  
    components:{buttonCounter}  
})  
```  
  
获取`buttonCounter`组件渲染函数  
  
```js  
(function anonymous(  
) {  
with(this){return _c('div',[_t("default",[_v("我是默认内容")])],2)}  
})  
```  
  
`_v`表示穿件普通文本节点，`_t`表示渲染插槽的函数  
  
渲染插槽函数`renderSlot`（做了简化）  
  
```js  
function renderSlot (  
  name,  
  fallback,  
  props,  
  bindObject  
) {  
  // 得到渲染插槽内容的函数      
  var scopedSlotFn = this.$scopedSlots[name];  
  var nodes;  
  // 如果存在插槽渲染函数，则执行插槽渲染函数，生成nodes节点返回  
  // 否则使用默认值  
  nodes = scopedSlotFn(props) || fallback;  
  return nodes;  
}  
```  
  
`name`属性表示定义插槽的名字，默认值为`default`，`fallback`表示子组件中的`slot`节点的默认值  
  
关于`this.$scopredSlots`是什么，我们可以先看看`vm.slot`  
  
```js  
function initRender (vm) {  
  ...  
  vm.$slots = resolveSlots(options._renderChildren, renderContext);  
  ...  
}  
```  
  
`resolveSlots`函数会对`children`节点做归类和过滤处理，返回`slots`  
  
```js  
function resolveSlots (  
    children,  
    context  
  ) {  
    if (!children || !children.length) {  
      return {}  
    }  
    var slots = {};  
    for (var i = 0, l = children.length; i < l; i++) {  
      var child = children[i];  
      var data = child.data;  
      // remove slot attribute if the node is resolved as a Vue slot node  
      if (data && data.attrs && data.attrs.slot) {  
        delete data.attrs.slot;  
      }  
      // named slots should only be respected if the vnode was rendered in the  
      // same context.  
      if ((child.context === context || child.fnContext === context) &&  
        data && data.slot != null  
      ) {  
        // 如果slot存在(slot="header") 则拿对应的值作为key  
        var name = data.slot;  
        var slot = (slots[name] || (slots[name] = []));  
        // 如果是tempalte元素 则把template的children添加进数组中，这也就是为什么你写的template标签并不会渲染成另一个标签到页面  
        if (child.tag === 'template') {  
          slot.push.apply(slot, child.children || []);  
        } else {  
          slot.push(child);  
        }  
      } else {  
        // 如果没有就默认是default  
        (slots.default || (slots.default = [])).push(child);  
      }  
    }  
    // ignore slots that contains only whitespace  
    for (var name$1 in slots) {  
      if (slots[name$1].every(isWhitespace)) {  
        delete slots[name$1];  
      }  
    }  
    return slots  
}  
```  
  
`_render`渲染函数通过`normalizeScopedSlots`得到`vm.$scopedSlots`  
  
```js  
vm.$scopedSlots = normalizeScopedSlots(  
  _parentVnode.data.scopedSlots,  
  vm.$slots,  
  vm.$scopedSlots  
);  
```  
  
作用域插槽中父组件能够得到子组件的值是因为在`renderSlot`的时候执行会传入`props`，也就是上述`_t`第三个参数，父组件则能够得到子组件传递过来的值  
  
# 说说你对vue的mixin的理解，以及有哪些应用场景？  
 ![](https://static.vue-js.com/8a739c90-3b7f-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、mixin是什么  
  
`Mixin`是面向对象程序设计语言中的类，提供了方法的实现。其他类可以访问`mixin`类的方法而不必成为其子类  
  
`Mixin`类通常作为功能模块使用，在需要该功能时“混入”，有利于代码复用又避免了多继承的复杂  
  
### Vue中的mixin  
先来看一下官方定义  
> `mixin`（混入），提供了一种非常灵活的方式，来分发 `Vue` 组件中的可复用功能。  
  
本质其实就是一个`js`对象，它可以包含我们组件中任意功能选项，如`data`、`components`、`methods `、`created`、`computed`等等  
  
我们只要将共用的功能以对象的方式传入 `mixins`选项中，当组件使用 `mixins`对象时所有`mixins`对象的选项都将被混入该组件本身的选项中来  
  
在`Vue`中我们可以**局部混入**跟**全局混入**  
  
### 局部混入  
  
定义一个`mixin`对象，有组件`options`的`data`、`methods`属性  
  
```js  
var myMixin = {  
  created: function () {  
    this.hello()  
  },  
  methods: {  
    hello: function () {  
      console.log('hello from mixin!')  
    }  
  }  
}  
```  
  
组件通过`mixins`属性调用`mixin`对象  
  
```js  
Vue.component('componentA',{  
  mixins: [myMixin]  
})  
```  
  
该组件在使用的时候，混合了`mixin`里面的方法，在自动执行`create`生命钩子，执行`hello`方法  
  
### 全局混入  
  
通过`Vue.mixin()`进行全局的混入  
  
```js  
Vue.mixin({  
  created: function () {  
      console.log("全局混入")  
    }  
})  
```  
  
使用全局混入需要特别注意，因为它会影响到每一个组件实例（包括第三方组件）  
  
PS：全局混入常用于插件的编写  
  
### 注意事项：  
  
当组件存在与`mixin`对象相同的选项的时候，进行递归合并的时候组件的选项会覆盖`mixin`的选项  
  
但是如果相同选项为生命周期钩子的时候，会合并成一个数组，先执行`mixin`的钩子，再执行组件的钩子  
  
  
  
## 二、使用场景  
  
在日常的开发中，我们经常会遇到在不同的组件中经常会需要用到一些相同或者相似的代码，这些代码的功能相对独立  
  
这时，可以通过`Vue`的`mixin`功能将相同或者相似的代码提出来  
  
举个例子  
  
定义一个`modal`弹窗组件，内部通过`isShowing`来控制显示  
  
```js  
const Modal = {  
  template: '#modal',  
  data() {  
    return {  
      isShowing: false  
    }  
  },  
  methods: {  
    toggleShow() {  
      this.isShowing = !this.isShowing;  
    }  
  }  
}  
```  
  
定义一个`tooltip`提示框，内部通过`isShowing`来控制显示  
  
```js  
const Tooltip = {  
  template: '#tooltip',  
  data() {  
    return {  
      isShowing: false  
    }  
  },  
  methods: {  
    toggleShow() {  
      this.isShowing = !this.isShowing;  
    }  
  }  
}  
```  
  
通过观察上面两个组件，发现两者的逻辑是相同，代码控制显示也是相同的，这时候`mixin`就派上用场了  
  
首先抽出共同代码，编写一个`mixin`  
  
```js  
const toggle = {  
  data() {  
    return {  
      isShowing: false  
    }  
  },  
  methods: {  
    toggleShow() {  
      this.isShowing = !this.isShowing;  
    }  
  }  
}  
```  
  
两个组件在使用上，只需要引入`mixin`  
  
```js  
const Modal = {  
  template: '#modal',  
  mixins: [toggle]  
};  
   
const Tooltip = {  
  template: '#tooltip',  
  mixins: [toggle]  
}  
```  
  
通过上面小小的例子，让我们知道了`Mixin`对于封装一些可复用的功能如此有趣、方便、实用  
  
  
  
## 三、源码分析  
  
首先从`Vue.mixin`入手  
  
源码位置：/src/core/global-api/mixin.js  
  
```js  
export function initMixin (Vue: GlobalAPI) {  
  Vue.mixin = function (mixin: Object) {  
    this.options = mergeOptions(this.options, mixin)  
    return this  
  }  
}  
```  
  
主要是调用`merOptions`方法  
  
源码位置：/src/core/util/options.js  
  
```js  
export function mergeOptions (  
  parent: Object,  
  child: Object,  
  vm?: Component  
): Object {  
  
if (child.mixins) { // 判断有没有mixin 也就是mixin里面挂mixin的情况 有的话递归进行合并  
    for (let i = 0, l = child.mixins.length; i < l; i++) {  
    parent = mergeOptions(parent, child.mixins[i], vm)  
    }  
}  
  
  const options = {}   
  let key  
  for (key in parent) {  
    mergeField(key) // 先遍历parent的key 调对应的strats[XXX]方法进行合并  
  }  
  for (key in child) {  
    if (!hasOwn(parent, key)) { // 如果parent已经处理过某个key 就不处理了  
      mergeField(key) // 处理child中的key 也就parent中没有处理过的key  
    }  
  }  
  function mergeField (key) {  
    const strat = strats[key] || defaultStrat  
    options[key] = strat(parent[key], child[key], vm, key) // 根据不同类型的options调用strats中不同的方法进行合并  
  }  
  return options  
}  
```  
从上面的源码，我们得到以下几点：  
  
- 优先递归处理 `mixins`  
- 先遍历合并`parent` 中的`key`，调用`mergeField`方法进行合并，然后保存在变量`options`  
- 再遍历 `child`，合并补上 `parent` 中没有的`key`，调用`mergeField`方法进行合并，保存在变量`options`  
- 通过 `mergeField` 函数进行了合并  
  
下面是关于`Vue`的几种类型的合并策略  
  
- 替换型  
- 合并型  
- 队列型  
- 叠加型  
  
### 替换型  
  
替换型合并有`props`、`methods`、`inject`、`computed`  
  
```js  
strats.props =  
strats.methods =  
strats.inject =  
strats.computed = function (  
  parentVal: ?Object,  
  childVal: ?Object,  
  vm?: Component,  
  key: string  
): ?Object {  
  if (!parentVal) return childVal // 如果parentVal没有值，直接返回childVal  
  const ret = Object.create(null) // 创建一个第三方对象 ret  
  extend(ret, parentVal) // extend方法实际是把parentVal的属性复制到ret中  
  if (childVal) extend(ret, childVal) // 把childVal的属性复制到ret中  
  return ret  
}  
strats.provide = mergeDataOrFn  
```  
  
同名的`props`、`methods`、`inject`、`computed`会被后来者代替  
  
### 合并型  
  
和并型合并有：`data`  
  
```js  
strats.data = function(parentVal, childVal, vm) {      
    return mergeDataOrFn(  
        parentVal, childVal, vm  
    )  
};  
  
function mergeDataOrFn(parentVal, childVal, vm) {      
    return function mergedInstanceDataFn() {          
        var childData = childVal.call(vm, vm) // 执行data挂的函数得到对象  
        var parentData = parentVal.call(vm, vm)          
        if (childData) {              
            return mergeData(childData, parentData) // 将2个对象进行合并                                   
        } else {              
            return parentData // 如果没有childData 直接返回parentData  
        }  
    }  
}  
  
function mergeData(to, from) {      
    if (!from) return to      
    var key, toVal, fromVal;      
    var keys = Object.keys(from);     
    for (var i = 0; i < keys.length; i++) {  
        key = keys[i];  
        toVal = to[key];  
        fromVal = from[key];      
        // 如果不存在这个属性，就重新设置  
        if (!to.hasOwnProperty(key)) {  
            set(to, key, fromVal);  
        }        
        // 存在相同属性，合并对象  
        else if (typeof toVal =="object" && typeof fromVal =="object") {  
            mergeData(toVal, fromVal);  
        }  
    }      
    return to  
}  
```  
  
`mergeData`函数遍历了要合并的 data 的所有属性，然后根据不同情况进行合并：  
  
- 当目标 data 对象不包含当前属性时，调用 `set` 方法进行合并（set方法其实就是一些合并重新赋值的方法）  
- 当目标 data 对象包含当前属性并且当前值为纯对象时，递归合并当前对象值，这样做是为了防止对象存在新增属性  
  
### 队列性  
  
队列性合并有：全部生命周期和`watch`  
  
```js  
function mergeHook (  
  parentVal: ?Array<Function>,  
  childVal: ?Function | ?Array<Function>  
): ?Array<Function> {  
  return childVal  
    ? parentVal  
      ? parentVal.concat(childVal)  
      : Array.isArray(childVal)  
        ? childVal  
        : [childVal]  
    : parentVal  
}  
  
LIFECYCLE_HOOKS.forEach(hook => {  
  strats[hook] = mergeHook  
})  
  
// watch  
strats.watch = function (  
  parentVal,  
  childVal,  
  vm,  
  key  
) {  
  // work around Firefox's Object.prototype.watch...  
  if (parentVal === nativeWatch) { parentVal = undefined; }  
  if (childVal === nativeWatch) { childVal = undefined; }  
  /* istanbul ignore if */  
  if (!childVal) { return Object.create(parentVal || null) }  
  {  
    assertObjectType(key, childVal, vm);  
  }  
  if (!parentVal) { return childVal }  
  var ret = {};  
  extend(ret, parentVal);  
  for (var key$1 in childVal) {  
    var parent = ret[key$1];  
    var child = childVal[key$1];  
    if (parent && !Array.isArray(parent)) {  
      parent = [parent];  
    }  
    ret[key$1] = parent  
      ? parent.concat(child)  
      : Array.isArray(child) ? child : [child];  
  }  
  return ret  
};  
```  
  
生命周期钩子和`watch`被合并为一个数组，然后正序遍历一次执行  
  
### 叠加型  
  
叠加型合并有：`component`、`directives`、`filters`  
  
```js  
strats.components=  
strats.directives=  
  
strats.filters = function mergeAssets(  
    parentVal, childVal, vm, key  
) {      
    var res = Object.create(parentVal || null);      
    if (childVal) {   
        for (var key in childVal) {  
            res[key] = childVal[key];  
        }     
    }   
    return res  
}  
```  
  
叠加型主要是通过原型链进行层层的叠加  
  
  
  
### 小结：  
  
- 替换型策略有`props`、`methods`、`inject`、`computed`，就是将新的同名参数替代旧的参数  
- 合并型策略是`data`, 通过`set`方法进行合并和重新赋值  
- 队列型策略有生命周期函数和`watch`，原理是将函数存入一个数组，然后正序遍历依次执行  
- 叠加型有`component`、`directives`、`filters`，通过原型链进行层层的叠加  
  
  
# Vue中的$nextTick有什么作用？  
![](https://static.vue-js.com/76484d30-3aba-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、NextTick是什么  
  
官方对其的定义  
  
> 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM  
  
什么意思呢？  
  
我们可以理解成，`Vue` 在更新 `DOM` 时是异步执行的。当数据发生变化，`Vue`将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新  
  
举例一下  
  
`Html`结构  
  
```html  
<div id="app"> {{ message }} </div>  
```  
  
构建一个`vue`实例  
  
```js  
const vm = new Vue({  
  el: '#app',  
  data: {  
    message: '原始值'  
  }  
})  
```  
  
修改`message`  
  
```js  
this.message = '修改后的值1'  
this.message = '修改后的值2'  
this.message = '修改后的值3'  
```  
  
这时候想获取页面最新的`DOM`节点，却发现获取到的是旧值  
  
```js  
console.log(vm.$el.textContent) // 原始值  
```  
  
这是因为`message`数据在发现变化的时候，`vue`并不会立刻去更新`Dom`，而是将修改数据的操作放在了一个异步操作队列中  
  
如果我们一直修改相同数据，异步操作队列还会进行去重  
  
等待同一事件循环中的所有数据变化完成之后，会将队列中的事件拿来进行处理，进行`DOM`的更新  
  
#### 为什么要有nexttick  
  
举个例子  
```js  
{{num}}  
for(let i=0; i<100000; i++){  
    num = i  
}  
```  
如果没有 `nextTick` 更新机制，那么 `num` 每次更新值都会触发视图更新(上面这段代码也就是会更新10万次视图)，有了`nextTick`机制，只需要更新一次，所以`nextTick`本质是一种优化策略  
  
## 二、使用场景  
  
如果想要在修改数据后立刻得到更新后的`DOM`结构，可以使用`Vue.nextTick()`  
  
第一个参数为：回调函数（可以获取最近的`DOM`结构）  
  
第二个参数为：执行函数上下文  
  
```js  
// 修改数据  
vm.message = '修改后的值'  
// DOM 还没有更新  
console.log(vm.$el.textContent) // 原始的值  
Vue.nextTick(function () {  
  // DOM 更新了  
  console.log(vm.$el.textContent) // 修改后的值  
})  
```  
  
组件内使用 `vm.$nextTick()` 实例方法只需要通过`this.$nextTick()`，并且回调函数中的 `this` 将自动绑定到当前的 `Vue` 实例上  
  
```js  
this.message = '修改后的值'  
console.log(this.$el.textContent) // => '原始的值'  
this.$nextTick(function () {  
    console.log(this.$el.textContent) // => '修改后的值'  
})  
```  
  
`$nextTick()` 会返回一个 `Promise` 对象，可以是用`async/await`完成相同作用的事情  
  
```js  
this.message = '修改后的值'  
console.log(this.$el.textContent) // => '原始的值'  
await this.$nextTick()  
console.log(this.$el.textContent) // => '修改后的值'  
```  
  
## 三、实现原理  
  
  
  
源码位置：`/src/core/util/next-tick.js`  
  
`callbacks`也就是异步操作队列  
  
`callbacks`新增回调函数后又执行了`timerFunc`函数，`pending`是用来标识同一个时间只能执行一次  
  
```js  
export function nextTick(cb?: Function, ctx?: Object) {  
  let _resolve;  
  
  // cb 回调函数会经统一处理压入 callbacks 数组  
  callbacks.push(() => {  
    if (cb) {  
      // 给 cb 回调函数执行加上了 try-catch 错误处理  
      try {  
        cb.call(ctx);  
      } catch (e) {  
        handleError(e, ctx, 'nextTick');  
      }  
    } else if (_resolve) {  
      _resolve(ctx);  
    }  
  });  
  
  // 执行异步延迟函数 timerFunc  
  if (!pending) {  
    pending = true;  
    timerFunc();  
  }  
  
  // 当 nextTick 没有传入函数参数的时候，返回一个 Promise 化的调用  
  if (!cb && typeof Promise !== 'undefined') {  
    return new Promise(resolve => {  
      _resolve = resolve;  
    });  
  }  
}  
```  
  
`timerFunc`函数定义，这里是根据当前环境支持什么方法则确定调用哪个，分别有：  
  
`Promise.then`、`MutationObserver`、`setImmediate`、`setTimeout`  
  
通过上面任意一种方法，进行降级操作  
  
```js  
export let isUsingMicroTask = false  
if (typeof Promise !== 'undefined' && isNative(Promise)) {  
  //判断1：是否原生支持Promise  
  const p = Promise.resolve()  
  timerFunc = () => {  
    p.then(flushCallbacks)  
    if (isIOS) setTimeout(noop)  
  }  
  isUsingMicroTask = true  
} else if (!isIE && typeof MutationObserver !== 'undefined' && (  
  isNative(MutationObserver) ||  
  MutationObserver.toString() === '[object MutationObserverConstructor]'  
)) {  
  //判断2：是否原生支持MutationObserver  
  let counter = 1  
  const observer = new MutationObserver(flushCallbacks)  
  const textNode = document.createTextNode(String(counter))  
  observer.observe(textNode, {  
    characterData: true  
  })  
  timerFunc = () => {  
    counter = (counter + 1) % 2  
    textNode.data = String(counter)  
  }  
  isUsingMicroTask = true  
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {  
  //判断3：是否原生支持setImmediate  
  timerFunc = () => {  
    setImmediate(flushCallbacks)  
  }  
} else {  
  //判断4：上面都不行，直接用setTimeout  
  timerFunc = () => {  
    setTimeout(flushCallbacks, 0)  
  }  
}  
```  
  
无论是微任务还是宏任务，都会放到`flushCallbacks`使用  
  
这里将`callbacks`里面的函数复制一份，同时`callbacks`置空  
  
依次执行`callbacks`里面的函数  
  
```js  
function flushCallbacks () {  
  pending = false  
  const copies = callbacks.slice(0)  
  callbacks.length = 0  
  for (let i = 0; i < copies.length; i++) {  
    copies[i]()  
  }  
}  
```  
  
**小结：**  
  
1. 把回调函数放入callbacks等待执行  
2. 将执行函数放到微任务或者宏任务中  
3. 事件循环到了微任务或者宏任务，执行函数依次执行callbacks中的回调  
  
# Vue中组件和插件有什么区别？  
  
 ![image.png](https://static.vue-js.com/683475e0-3acc-11eb-ab90-d9ae814b240d.png)  
  
## 一、组件是什么  
  
回顾以前对组件的定义：  
  
组件就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式，在`Vue`中每一个`.vue`文件都可以视为一个组件  
  
组件的优势  
  
- 降低整个系统的耦合度，在保持接口不变的情况下，我们可以替换不同的组件快速完成需求，例如输入框，可以替换为日历、时间、范围等组件作具体的实现  
  
- 调试方便，由于整个系统是通过组件组合起来的，在出现问题的时候，可以用排除法直接移除组件，或者根据报错的组件快速定位问题，之所以能够快速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单  
  
- 提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级  
  
## 二、插件是什么  
  
插件通常用来为 `Vue` 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：  
  
- 添加全局方法或者属性。如: `vue-custom-element`  
- 添加全局资源：指令/过滤器/过渡等。如 `vue-touch`  
- 通过全局混入来添加一些组件选项。如` vue-router`  
- 添加 `Vue` 实例方法，通过把它们添加到 `Vue.prototype` 上实现。  
- 一个库，提供自己的 `API`，同时提供上面提到的一个或多个功能。如` vue-router`  
  
## 三、两者的区别  
  
两者的区别主要表现在以下几个方面：  
  
- 编写形式  
- 注册形式  
- 使用场景  
  
  
### 编写形式  
  
#### 编写组件  
  
编写一个组件，可以有很多方式，我们最常见的就是`vue`单文件的这种格式，每一个`.vue`文件我们都可以看成是一个组件  
  
`vue`文件标准格式  
  
```vue  
<template>  
</template>  
<script>  
export default{   
    ...  
}  
</script>  
<style>  
</style>  
```  
  
我们还可以通过`template`属性来编写一个组件，如果组件内容多，我们可以在外部定义`template`组件内容，如果组件内容并不多，我们可直接写在`template`属性上  
  
```js  
<template id="testComponent">     // 组件显示的内容  
    <div>component!</div>     
</template>  
  
Vue.component('componentA',{   
    template: '#testComponent'    
    template: `<div>component</div>`  // 组件内容少可以通过这种形式  
})  
```  
  
#### 编写插件  
`vue`插件的实现应该暴露一个 `install` 方法。这个方法的第一个参数是 `Vue` 构造器，第二个参数是一个可选的选项对象  
  
```js  
MyPlugin.install = function (Vue, options) {  
  // 1. 添加全局方法或 property  
  Vue.myGlobalMethod = function () {  
    // 逻辑...  
  }  
  
  // 2. 添加全局资源  
  Vue.directive('my-directive', {  
    bind (el, binding, vnode, oldVnode) {  
      // 逻辑...  
    }  
    ...  
  })  
  
  // 3. 注入组件选项  
  Vue.mixin({  
    created: function () {  
      // 逻辑...  
    }  
    ...  
  })  
  
  // 4. 添加实例方法  
  Vue.prototype.$myMethod = function (methodOptions) {  
    // 逻辑...  
  }  
}  
```  
  
  
### 注册形式  
  
#### 组件注册  
  
`vue`组件注册主要分为全局注册与局部注册  
  
全局注册通过`Vue.component`方法，第一个参数为组件的名称，第二个参数为传入的配置项  
  
```js  
Vue.component('my-component-name', { /* ... */ })  
```  
  
局部注册只需在用到的地方通过`components`属性注册一个组件  
  
```  
const component1 = {...} // 定义一个组件  
  
export default {  
	components:{  
		component1   // 局部注册  
	}  
}  
```  
  
  
#### 插件注册  
插件的注册通过`Vue.use()`的方式进行注册（安装），第一个参数为插件的名字，第二个参数是可选择的配置项  
  
```  
Vue.use(插件名字,{ /* ... */} )  
```  
  
注意的是：  
  
注册插件的时候，需要在调用 `new Vue()` 启动应用之前完成  
  
`Vue.use`会自动阻止多次注册相同插件，只会注册一次  
  
  
  
### 使用场景  
  
具体的其实在插件是什么章节已经表述了，这里在总结一下  
  
组件 `(Component)` 是用来构成你的 `App` 的业务模块，它的目标是 `App.vue`  
  
插件 `(Plugin)` 是用来增强你的技术栈的功能模块，它的目标是 `Vue` 本身  
  
简单来说，插件就是指对`Vue`的功能的增强或补充  
  
# 为什么Vue中的data属性是一个函数而不是一个对象？  
## 面试官：为什么data属性是一个函数而不是一个对象？
  

  

  
 ![image.png](https://static.vue-js.com/83e51560-3acc-11eb-85f6-6fac77c0c9b3.png)
  

  

  
## 一、实例和组件定义data的区别
  

  
`vue`实例的时候定义`data`属性既可以是一个对象，也可以是一个函数
  

  
```js
  
const app = new Vue({
  
    el:"#app",
  
    // 对象格式
  
    data:{
  
        foo:"foo"
  
    },
  
    // 函数格式
  
    data(){
  
        return {
  
             foo:"foo"
  
        }
  
    }
  
})
  
```
  

  
组件中定义`data`属性，只能是一个函数
  

  
如果为组件`data`直接定义为一个对象
  

  
```js
  
Vue.component('component1',{
  
    template:`<div>组件</div>`,
  
    data:{
  
        foo:"foo"
  
    }
  
})
  
```
  

  
则会得到警告信息
  

  

  
 ![image.png](https://static.vue-js.com/8e6fc0c0-3acc-11eb-ab90-d9ae814b240d.png)
  

  

  
警告说明：返回的`data`应该是一个函数在每一个组件实例中
  

  
## 二、组件data定义函数与对象的区别
  

  
上面讲到组件`data`必须是一个函数，不知道大家有没有思考过这是为什么呢？
  

  
在我们定义好一个组件的时候，`vue`最终都会通过`Vue.extend()`构成组件实例
  

  
这里我们模仿组件构造函数，定义`data`属性，采用对象的形式
  

  
```js
  
function Component(){
  
 
  
}
  
Component.prototype.data = {
  
	count : 0
  
}
  
```
  

  
创建两个组件实例
  

  
```
  
const componentA = new Component()
  
const componentB = new Component()
  
```
  

  
修改`componentA`组件`data`属性的值，`componentB`中的值也发生了改变
  

  
```js
  
console.log(componentB.data.count)  // 0
  
componentA.data.count = 1
  
console.log(componentB.data.count)  // 1
  
```
  

  
产生这样的原因这是两者共用了同一个内存地址，`componentA`修改的内容，同样对`componentB`产生了影响
  

  
如果我们采用函数的形式，则不会出现这种情况（函数返回的对象内存地址并不相同）
  

  
```js
  
function Component(){
  
	this.data = this.data()
  
}
  
Component.prototype.data = function (){
  
    return {
  
   		count : 0
  
    }
  
}
  
```
  

  
修改`componentA`组件`data`属性的值，`componentB`中的值不受影响
  

  
```js
  
console.log(componentB.data.count)  // 0
  
componentA.data.count = 1
  
console.log(componentB.data.count)  // 0
  
```
  

  
`vue`组件可能会有很多个实例，采用函数返回一个全新`data`形式，使每个实例对象的数据不会受到其他实例对象数据的污染
  

  
## 三、原理分析
  

  
首先可以看看`vue`初始化`data`的代码，`data`的定义可以是函数也可以是对象
  

  
源码位置：`/vue-dev/src/core/instance/state.js`
  

  
```js
  
function initData (vm: Component) {
  
  let data = vm.$options.data
  
  data = vm._data = typeof data === 'function'
  
    ? getData(data, vm)
  
    : data || {}
  
    ...
  
}
  
```
  
`data`既能是`object`也能是`function`，那为什么还会出现上文警告呢？
  

  
别急，继续看下文
  

  
组件在创建的时候，会进行选项的合并
  

  
源码位置：`/vue-dev/src/core/util/options.js`
  

  
自定义组件会进入`mergeOptions`进行选项合并
  

  
```js
  
Vue.prototype._init = function (options?: Object) {
  
    ...
  
    // merge options
  
    if (options && options._isComponent) {
  
      // optimize internal component instantiation
  
      // since dynamic options merging is pretty slow, and none of the
  
      // internal component options needs special treatment.
  
      initInternalComponent(vm, options)
  
    } else {
  
      vm.$options = mergeOptions(
  
        resolveConstructorOptions(vm.constructor),
  
        options || {},
  
        vm
  
      )
  
    }
  
    ...
  
  }
  
```
  

  
定义`data`会进行数据校验
  

  
源码位置：`/vue-dev/src/core/instance/init.js`
  

  
这时候`vm`实例为`undefined`，进入`if`判断，若`data`类型不是`function`，则出现警告提示
  

  
```js
  
strats.data = function (
  
  parentVal: any,
  
  childVal: any,
  
  vm?: Component
  
): ?Function {
  
  if (!vm) {
  
    if (childVal && typeof childVal !== "function") {
  
      process.env.NODE_ENV !== "production" &&
  
        warn(
  
          'The "data" option should be a function ' +
  
            "that returns a per-instance value in component " +
  
            "definitions.",
  
          vm
  
        );
  

  
      return parentVal;
  
    }
  
    return mergeDataOrFn(parentVal, childVal);
  
  }
  
  return mergeDataOrFn(parentVal, childVal, vm);
  
};
  
```
  

  
### 四、结论
  

  
- 根实例对象`data`可以是对象也可以是函数（根实例是单例），不会产生数据污染情况
  
- 组件实例对象`data`必须为函数，目的是为了防止多个组件实例对象之间共用一个`data`，产生数据污染。采用函数的形式，`initData`时会将其作为工厂函数都会返回全新`data`对象  
# SPA（单页应用）首屏加载速度慢怎么解决？  
 ![image.png](https://static.vue-js.com/24617c00-3acc-11eb-ab90-d9ae814b240d.png)  
  
  
## 一、什么是首屏加载  
  
首屏时间（First Contentful Paint），指的是浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容  
  
首屏加载可以说是用户体验中**最重要**的环节  
  
### 关于计算首屏时间  
利用`performance.timing`提供的数据：  
  
 ![image.png](https://static.vue-js.com/2e2491a0-3acc-11eb-85f6-6fac77c0c9b3.png)  
  
通过`DOMContentLoad`或者`performance`来计算出首屏时间  
  
```js  
// 方案一：  
document.addEventListener('DOMContentLoaded', (event) => {  
    console.log('first contentful painting');  
});  
// 方案二：  
performance.getEntriesByName("first-contentful-paint")[0].startTime  
  
// performance.getEntriesByName("first-contentful-paint")[0]  
// 会返回一个 PerformancePaintTiming的实例，结构如下：  
{  
  name: "first-contentful-paint",  
  entryType: "paint",  
  startTime: 507.80000002123415,  
  duration: 0,  
};  
```  
  
## 二、加载慢的原因  
  
在页面渲染的过程，导致加载速度慢的因素可能如下：  
  
- 网络延时问题  
- 资源文件体积是否过大  
- 资源是否重复发送请求去加载了  
- 加载脚本的时候，渲染内容堵塞了  
  
  
  
## 三、解决方案  
  
常见的几种SPA首屏优化方式  
  
- 减小入口文件积  
- 静态资源本地缓存  
- UI框架按需加载  
- 图片资源的压缩  
- 组件重复打包  
- 开启GZip压缩  
- 使用SSR  
  
  
  
### 减小入口文件体积  
  
常用的手段是路由懒加载，把不同路由对应的组件分割成不同的代码块，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加  
  
 ![image.png](https://static.vue-js.com/486cee90-3acc-11eb-ab90-d9ae814b240d.png)  
  
在`vue-router`配置路由的时候，采用动态加载路由的形式  
  
```js  
routes:[   
    path: 'Blogs',  
    name: 'ShowBlogs',  
    component: () => import('./components/ShowBlogs.vue')  
]  
```  
  
以函数的形式加载路由，这样就可以把各自的路由文件分别打包，只有在解析给定的路由时，才会加载路由组件  
  
  
  
### 静态资源本地缓存  
  
后端返回资源问题：  
  
- 采用`HTTP`缓存，设置`Cache-Control`，`Last-Modified`，`Etag`等响应头  
  
- 采用`Service Worker`离线缓存  
  
前端合理利用`localStorage`  
  
  
  
### UI框架按需加载  
  
在日常使用`UI`框架，例如`element-UI`、或者`antd`，我们经常性直接饮用整个`UI`库  
  
```js  
import ElementUI from 'element-ui'  
Vue.use(ElementUI)  
```  
  
但实际上我用到的组件只有按钮，分页，表格，输入与警告 所以我们要按需引用  
  
```js  
import { Button, Input, Pagination, Table, TableColumn, MessageBox } from 'element-ui';  
Vue.use(Button)  
Vue.use(Input)  
Vue.use(Pagination)  
```  
  
  
  
### 组件重复打包  
  
假设`A.js`文件是一个常用的库，现在有多个路由使用了`A.js`文件，这就造成了重复下载  
  
解决方案：在`webpack`的`config`文件中，修改`CommonsChunkPlugin`的配置  
  
```js  
minChunks: 3  
```  
  
`minChunks`为3表示会把使用3次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件  
  
  
  
### 图片资源的压缩  
  
图片资源虽然不在编码过程中，但它却是对页面性能影响最大的因素  
  
对于所有的图片资源，我们可以进行适当的压缩  
  
对页面上使用到的`icon`，可以使用在线字体图标，或者雪碧图，将众多小图标合并到同一张图上，用以减轻`http`请求压力。  
  
  
  
### 开启GZip压缩  
  
拆完包之后，我们再用`gzip`做一下压缩 安装`compression-webpack-plugin`  
  
```js  
cnmp i compression-webpack-plugin -D  
```  
  
在`vue.congig.js`中引入并修改`webpack`配置  
  
```js  
const CompressionPlugin = require('compression-webpack-plugin')  
  
configureWebpack: (config) => {  
        if (process.env.NODE_ENV === 'production') {  
            // 为生产环境修改配置...  
            config.mode = 'production'  
            return {  
                plugins: [new CompressionPlugin({  
                    test: /\.js$|\.html$|\.css/, //匹配文件名  
                    threshold: 10240, //对超过10k的数据进行压缩  
                    deleteOriginalAssets: false //是否删除原文件  
                })]  
            }  
        }  
```  
  
在服务器我们也要做相应的配置 如果发送请求的浏览器支持`gzip`，就发送给它`gzip`格式的文件 我的服务器是用`express`框架搭建的 只要安装一下`compression`就能使用  
  
```  
const compression = require('compression')  
app.use(compression())  // 在其他中间件使用之前调用  
```  
  
  
  
### 使用SSR  
  
SSR（Server side ），也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器  
  
从头搭建一个服务端渲染是很复杂的，`vue`应用建议使用`Nuxt.js`实现服务端渲染  
  
  
  
### 小结：  
  
减少首屏渲染时间的方法有很多，总的来讲可以分成两大部分 ：资源加载优化 和 页面渲染优化  
  
下图是更为全面的首屏优化的方案  
  
 ![image.png](https://static.vue-js.com/4fafe900-3acc-11eb-85f6-6fac77c0c9b3.png)  
  
  
大家可以根据自己项目的情况选择各种方式进行首屏渲染的优化  
  
  
# 说说你对Vue生命周期的理解  
 ![](https://static.vue-js.com/3a119e10-3aca-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、生命周期是什么    
  
生命周期`（Life Cycle）`的概念应用很广泛，特别是在政治、经济、环境、技术、社会等诸多领域经常出现，其基本涵义可以通俗地理解为“从摇篮到坟墓”`（Cradle-to-Grave）`的整个过程在`Vue`中实例从创建到销毁的过程就是生命周期，即指从创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程我们可以把组件比喻成工厂里面的一条流水线，每个工人（生命周期）站在各自的岗位，当任务流转到工人身边的时候，工人就开始工作PS：在`Vue`生命周期钩子会自动绑定 `this` 上下文到实例中，因此你可以访问数据，对 `property` 和方法进行运算这意味着**你不能使用箭头函数来定义一个生命周期方法** \(例如 `created: () => this.fetchTodos()`\)  
  
## 二、生命周期有哪些  
  
Vue生命周期总共可以分为8个阶段：创建前后, 载入前后,更新前后,销毁前销毁后，以及一些特殊场景的生命周期  
  
| 生命周期 | 描述 |  
| :-- | :-- |  
| beforeCreate | 组件实例被创建之初 |  
| created | 组件实例已经完全创建 |  
| beforeMount | 组件挂载之前 |  
| mounted | 组件挂载到实例上去之后 |  
| beforeUpdate | 组件数据发生变化，更新之前 |  
| updated | 数据数据更新之后 |  
| beforeDestroy | 组件实例销毁之前 |  
| destroyed | 组件实例销毁之后 |  
| activated | keep-alive 缓存的组件激活时 |  
| deactivated | keep-alive 缓存的组件停用时调用 |  
| errorCaptured | 捕获一个来自子孙组件的错误时被调用 |  
  
## 三、生命周期整体流程  
  
`Vue`生命周期流程图  
  
 ![](https://static.vue-js.com/44114780-3aca-11eb-85f6-6fac77c0c9b3.png)  
  
#### 具体分析  
  
**beforeCreate -> created**  
  
- 初始化`vue`实例，进行数据观测  
  
**created**  
  
- 完成数据观测，属性与方法的运算，`watch`、`event`事件回调的配置  
- 可调用`methods`中的方法，访问和修改data数据触发响应式渲染`dom`，可通过`computed`和`watch`完成数据计算  
- 此时`vm.$el` 并没有被创建  
  
**created -> beforeMount**  
  
- 判断是否存在`el`选项，若不存在则停止编译，直到调用`vm.$mount(el)`才会继续编译  
- 优先级：`render` > `template` > `outerHTML`  
- `vm.el`获取到的是挂载`DOM`的  
  
**beforeMount**  
  
- 在此阶段可获取到`vm.el`  
- 此阶段`vm.el`虽已完成DOM初始化，但并未挂载在`el`选项上  
  
**beforeMount -> mounted**  
  
- 此阶段`vm.el`完成挂载，`vm.$el`生成的`DOM`替换了`el`选项所对应的`DOM`  
  
**mounted**  
  
- `vm.el`已完成`DOM`的挂载与渲染，此刻打印`vm.$el`，发现之前的挂载点及内容已被替换成新的DOM  
  
**beforeUpdate**  
  
- 更新的数据必须是被渲染在模板上的（`el`、`template`、`rende`r之一）  
- 此时`view`层还未更新  
- 若在`beforeUpdate`中再次修改数据，不会再次触发更新方法  
  
**updated**  
  
- 完成`view`层的更新  
- 若在`updated`中再次修改数据，会再次触发更新方法（`beforeUpdate`、`updated`）  
  
**beforeDestroy**  
  
- 实例被销毁前调用，此时实例属性与方法仍可访问  
  
**destroyed**  
  
- 完全销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器  
- 并不能清除DOM，仅仅销毁实例  
  
    
  
**使用场景分析**  
  
    
  
| 生命周期 | 描述 |  
| :-- | :-- |  
| beforeCreate | 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务 |  
| created | 组件初始化完毕，各种数据可以使用，常用于异步数据获取 |  
| beforeMount | 未执行渲染、更新，dom未创建 |  
| mounted | 初始化结束，dom已创建，可用于获取访问数据和dom元素 |  
| beforeUpdate | 更新前，可用于获取更新前各种状态 |  
| updated | 更新后，所有状态已是最新 |  
| beforeDestroy | 销毁前，可用于一些定时器或订阅的取消 |  
| destroyed | 组件已销毁，作用同上 |  
  
## 四、题外话：数据请求在created和mouted的区别  
  
`created`是在组件实例一旦创建完成的时候立刻调用，这时候页面`dom`节点并未生成`mounted`是在页面`dom`节点渲染完毕之后就立刻执行的触发时机上`created`是比`mounted`要更早的两者相同点：都能拿到实例对象的属性和方法讨论这个问题本质就是触发的时机，放在`mounted`请求有可能导致页面闪动（页面`dom`结构已经生成），但如果在页面加载前完成则不会出现此情况建议：放在`create`生命周期当中  
# Vue实例挂载的过程中发生了什么？  
 ![](https://static.vue-js.com/63194810-3a09-11eb-85f6-6fac77c0c9b3.png)  
   
  
## 一、思考  
  
我们都听过知其然知其所以然这句话  
  
那么不知道大家是否思考过`new Vue()`这个过程中究竟做了些什么？  
  
过程中是如何完成数据的绑定，又是如何将数据渲染到视图的等等  
  
## 一、分析  
  
首先找到`vue`的构造函数  
  
源码位置：src\core\instance\index.js  
  
```js  
function Vue (options) {  
  if (process.env.NODE_ENV !== 'production' &&  
    !(this instanceof Vue)  
  ) {  
    warn('Vue is a constructor and should be called with the `new` keyword')  
  }  
  this._init(options)  
}  
```  
  
`options`是用户传递过来的配置项，如`data、methods`等常用的方法  
  
`vue`构建函数调用`_init`方法，但我们发现本文件中并没有此方法，但仔细可以看到文件下方定定义了很多初始化方法  
  
```js  
initMixin(Vue);     // 定义 _init  
stateMixin(Vue);    // 定义 $set $get $delete $watch 等  
eventsMixin(Vue);   // 定义事件  $on  $once $off $emit  
lifecycleMixin(Vue);// 定义 _update  $forceUpdate  $destroy  
renderMixin(Vue);   // 定义 _render 返回虚拟dom  
```  
  
首先可以看`initMixin`方法，发现该方法在`Vue`原型上定义了`_init`方法  
  
源码位置：src\core\instance\init.js  
  
```js  
Vue.prototype._init = function (options?: Object) {  
    const vm: Component = this  
    // a uid  
    vm._uid = uid++  
    let startTag, endTag  
    /* istanbul ignore if */  
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {  
      startTag = `vue-perf-start:${vm._uid}`  
      endTag = `vue-perf-end:${vm._uid}`  
      mark(startTag)  
    }  
  
    // a flag to avoid this being observed  
    vm._isVue = true  
    // merge options  
    // 合并属性，判断初始化的是否是组件，这里合并主要是 mixins 或 extends 的方法  
    if (options && options._isComponent) {  
      // optimize internal component instantiation  
      // since dynamic options merging is pretty slow, and none of the  
      // internal component options needs special treatment.  
      initInternalComponent(vm, options)  
    } else { // 合并vue属性  
      vm.$options = mergeOptions(  
        resolveConstructorOptions(vm.constructor),  
        options || {},  
        vm  
      )  
    }  
    /* istanbul ignore else */  
    if (process.env.NODE_ENV !== 'production') {  
      // 初始化proxy拦截器  
      initProxy(vm)  
    } else {  
      vm._renderProxy = vm  
    }  
    // expose real self  
    vm._self = vm  
    // 初始化组件生命周期标志位  
    initLifecycle(vm)  
    // 初始化组件事件侦听  
    initEvents(vm)  
    // 初始化渲染方法  
    initRender(vm)  
    callHook(vm, 'beforeCreate')  
    // 初始化依赖注入内容，在初始化data、props之前  
    initInjections(vm) // resolve injections before data/props  
    // 初始化props/data/method/watch/methods  
    initState(vm)  
    initProvide(vm) // resolve provide after data/props  
    callHook(vm, 'created')  
  
    /* istanbul ignore if */  
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {  
      vm._name = formatComponentName(vm, false)  
      mark(endTag)  
      measure(`vue ${vm._name} init`, startTag, endTag)  
    }  
    // 挂载元素  
    if (vm.$options.el) {  
      vm.$mount(vm.$options.el)  
    }  
  }  
```  
  
仔细阅读上面的代码，我们得到以下结论：  
  
- 在调用`beforeCreate`之前，数据初始化并未完成，像`data`、`props`这些属性无法访问到  
  
- 到了`created`的时候，数据已经初始化完成，能够访问`data`、`props`这些属性，但这时候并未完成`dom`的挂载，因此无法访问到`dom`元素  
- 挂载方法是调用`vm.$mount`方法  
  
`initState`方法是完成`props/data/method/watch/methods`的初始化  
  
源码位置：src\core\instance\state.js  
  
```js  
export function initState (vm: Component) {  
  // 初始化组件的watcher列表  
  vm._watchers = []  
  const opts = vm.$options  
  // 初始化props  
  if (opts.props) initProps(vm, opts.props)  
  // 初始化methods方法  
  if (opts.methods) initMethods(vm, opts.methods)  
  if (opts.data) {  
    // 初始化data    
    initData(vm)  
  } else {  
    observe(vm._data = {}, true /* asRootData */)  
  }  
  if (opts.computed) initComputed(vm, opts.computed)  
  if (opts.watch && opts.watch !== nativeWatch) {  
    initWatch(vm, opts.watch)  
  }  
}  
```  
  
我们和这里主要看初始化`data`的方法为`initData`，它与`initState`在同一文件上  
  
```js  
function initData (vm: Component) {  
  let data = vm.$options.data  
  // 获取到组件上的data  
  data = vm._data = typeof data === 'function'  
    ? getData(data, vm)  
    : data || {}  
  if (!isPlainObject(data)) {  
    data = {}  
    process.env.NODE_ENV !== 'production' && warn(  
      'data functions should return an object:\n' +  
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',  
      vm  
    )  
  }  
  // proxy data on instance  
  const keys = Object.keys(data)  
  const props = vm.$options.props  
  const methods = vm.$options.methods  
  let i = keys.length  
  while (i--) {  
    const key = keys[i]  
    if (process.env.NODE_ENV !== 'production') {  
      // 属性名不能与方法名重复  
      if (methods && hasOwn(methods, key)) {  
        warn(  
          `Method "${key}" has already been defined as a data property.`,  
          vm  
        )  
      }  
    }  
    // 属性名不能与state名称重复  
    if (props && hasOwn(props, key)) {  
      process.env.NODE_ENV !== 'production' && warn(  
        `The data property "${key}" is already declared as a prop. ` +  
        `Use prop default value instead.`,  
        vm  
      )  
    } else if (!isReserved(key)) { // 验证key值的合法性  
      // 将_data中的数据挂载到组件vm上,这样就可以通过this.xxx访问到组件上的数据  
      proxy(vm, `_data`, key)  
    }  
  }  
  // observe data  
  // 响应式监听data是数据的变化  
  observe(data, true /* asRootData */)  
}  
```  
  
仔细阅读上面的代码，我们可以得到以下结论：  
  
- 初始化顺序：`props`、`methods`、`data`  
  
- `data`定义的时候可选择函数形式或者对象形式（组件只能为函数形式）  
  
关于数据响应式在这就不展开详细说明  
  
上文提到挂载方法是调用`vm.$mount`方法  
  
源码位置：  
  
```js  
Vue.prototype.$mount = function (  
  el?: string | Element,  
  hydrating?: boolean  
): Component {  
  // 获取或查询元素  
  el = el && query(el)  
  
  /* istanbul ignore if */  
  // vue 不允许直接挂载到body或页面文档上  
  if (el === document.body || el === document.documentElement) {  
    process.env.NODE_ENV !== 'production' && warn(  
      `Do not mount Vue to <html> or <body> - mount to normal elements instead.`  
    )  
    return this  
  }  
  
  const options = this.$options  
  // resolve template/el and convert to render function  
  if (!options.render) {  
    let template = options.template  
    // 存在template模板，解析vue模板文件  
    if (template) {  
      if (typeof template === 'string') {  
        if (template.charAt(0) === '#') {  
          template = idToTemplate(template)  
          /* istanbul ignore if */  
          if (process.env.NODE_ENV !== 'production' && !template) {  
            warn(  
              `Template element not found or is empty: ${options.template}`,  
              this  
            )  
          }  
        }  
      } else if (template.nodeType) {  
        template = template.innerHTML  
      } else {  
        if (process.env.NODE_ENV !== 'production') {  
          warn('invalid template option:' + template, this)  
        }  
        return this  
      }  
    } else if (el) {  
      // 通过选择器获取元素内容  
      template = getOuterHTML(el)  
    }  
    if (template) {  
      /* istanbul ignore if */  
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {  
        mark('compile')  
      }  
      /**  
       *  1.将temmplate解析ast tree  
       *  2.将ast tree转换成render语法字符串  
       *  3.生成render方法  
       */  
      const { render, staticRenderFns } = compileToFunctions(template, {  
        outputSourceRange: process.env.NODE_ENV !== 'production',  
        shouldDecodeNewlines,  
        shouldDecodeNewlinesForHref,  
        delimiters: options.delimiters,  
        comments: options.comments  
      }, this)  
      options.render = render  
      options.staticRenderFns = staticRenderFns  
  
      /* istanbul ignore if */  
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {  
        mark('compile end')  
        measure(`vue ${this._name} compile`, 'compile', 'compile end')  
      }  
    }  
  }  
  return mount.call(this, el, hydrating)  
}  
```  
  
阅读上面代码，我们能得到以下结论：  
  
- 不要将根元素放到`body`或者`html`上  
  
- 可以在对象中定义`template/render`或者直接使用`template`、`el`表示元素选择器  
  
- 最终都会解析成`render`函数，调用`compileToFunctions`，会将`template`解析成`render`函数  
  
对`template`的解析步骤大致分为以下几步：  
  
- 将`html`文档片段解析成`ast`描述符  
  
- 将`ast`描述符解析成字符串  
  
- 生成`render`函数  
  
  
  
生成`render`函数，挂载到`vm`上后，会再次调用`mount`方法  
  
源码位置：src\platforms\web\runtime\index.js  
  
```js  
// public mount method  
Vue.prototype.$mount = function (  
  el?: string | Element,  
  hydrating?: boolean  
): Component {  
  el = el && inBrowser ? query(el) : undefined  
  // 渲染组件  
  return mountComponent(this, el, hydrating)  
}  
```  
  
调用`mountComponent`渲染组件  
  
```js  
export function mountComponent (  
  vm: Component,  
  el: ?Element,  
  hydrating?: boolean  
): Component {  
  vm.$el = el  
  // 如果没有获取解析的render函数，则会抛出警告  
  // render是解析模板文件生成的  
  if (!vm.$options.render) {  
    vm.$options.render = createEmptyVNode  
    if (process.env.NODE_ENV !== 'production') {  
      /* istanbul ignore if */  
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||  
        vm.$options.el || el) {  
        warn(  
          'You are using the runtime-only build of Vue where the template ' +  
          'compiler is not available. Either pre-compile the templates into ' +  
          'render functions, or use the compiler-included build.',  
          vm  
        )  
      } else {  
        // 没有获取到vue的模板文件  
        warn(  
          'Failed to mount component: template or render function not defined.',  
          vm  
        )  
      }  
    }  
  }  
  // 执行beforeMount钩子  
  callHook(vm, 'beforeMount')  
  
  let updateComponent  
  /* istanbul ignore if */  
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {  
    updateComponent = () => {  
      const name = vm._name  
      const id = vm._uid  
      const startTag = `vue-perf-start:${id}`  
      const endTag = `vue-perf-end:${id}`  
  
      mark(startTag)  
      const vnode = vm._render()  
      mark(endTag)  
      measure(`vue ${name} render`, startTag, endTag)  
  
      mark(startTag)  
      vm._update(vnode, hydrating)  
      mark(endTag)  
      measure(`vue ${name} patch`, startTag, endTag)  
    }  
  } else {  
    // 定义更新函数  
    updateComponent = () => {  
      // 实际调⽤是在lifeCycleMixin中定义的_update和renderMixin中定义的_render  
      vm._update(vm._render(), hydrating)  
    }  
  }  
  // we set this to vm._watcher inside the watcher's constructor  
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child  
  // component's mounted hook), which relies on vm._watcher being already defined  
  // 监听当前组件状态，当有数据变化时，更新组件  
  new Watcher(vm, updateComponent, noop, {  
    before () {  
      if (vm._isMounted && !vm._isDestroyed) {  
        // 数据更新引发的组件更新  
        callHook(vm, 'beforeUpdate')  
      }  
    }  
  }, true /* isRenderWatcher */)  
  hydrating = false  
  
  // manually mounted instance, call mounted on self  
  // mounted is called for render-created child components in its inserted hook  
  if (vm.$vnode == null) {  
    vm._isMounted = true  
    callHook(vm, 'mounted')  
  }  
  return vm  
}  
```  
  
阅读上面代码，我们得到以下结论：  
  
- 会触发`boforeCreate`钩子  
- 定义`updateComponent`渲染页面视图的方法  
- 监听组件数据，一旦发生变化，触发`beforeUpdate`生命钩子  
  
`updateComponent`方法主要执行在`vue`初始化时声明的`render`，`update`方法  
  
`render`的作用主要是生成`vnode`  
  
源码位置：src\core\instance\render.js  
  
```js  
// 定义vue 原型上的render方法  
Vue.prototype._render = function (): VNode {  
    const vm: Component = this  
    // render函数来自于组件的option  
    const { render, _parentVnode } = vm.$options  
  
    if (_parentVnode) {  
        vm.$scopedSlots = normalizeScopedSlots(  
            _parentVnode.data.scopedSlots,  
            vm.$slots,  
            vm.$scopedSlots  
        )  
    }  
  
    // set parent vnode. this allows render functions to have access  
    // to the data on the placeholder node.  
    vm.$vnode = _parentVnode  
    // render self  
    let vnode  
    try {  
        // There's no need to maintain a stack because all render fns are called  
        // separately from one another. Nested component's render fns are called  
        // when parent component is patched.  
        currentRenderingInstance = vm  
        // 调用render方法，自己的独特的render方法， 传入createElement参数，生成vNode  
        vnode = render.call(vm._renderProxy, vm.$createElement)  
    } catch (e) {  
        handleError(e, vm, `render`)  
        // return error render result,  
        // or previous vnode to prevent render error causing blank component  
        /* istanbul ignore else */  
        if (process.env.NODE_ENV !== 'production' && vm.$options.renderError) {  
            try {  
                vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)  
            } catch (e) {  
                handleError(e, vm, `renderError`)  
                vnode = vm._vnode  
            }  
        } else {  
            vnode = vm._vnode  
        }  
    } finally {  
        currentRenderingInstance = null  
    }  
    // if the returned array contains only a single node, allow it  
    if (Array.isArray(vnode) && vnode.length === 1) {  
        vnode = vnode[0]  
    }  
    // return empty vnode in case the render function errored out  
    if (!(vnode instanceof VNode)) {  
        if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {  
            warn(  
                'Multiple root nodes returned from render function. Render function ' +  
                'should return a single root node.',  
                vm  
            )  
        }  
        vnode = createEmptyVNode()  
    }  
    // set parent  
    vnode.parent = _parentVnode  
    return vnode  
}  
```  
  
`_update`主要功能是调用`patch`，将`vnode`转换为真实`DOM`，并且更新到页面中  
  
源码位置：src\core\instance\lifecycle.js  
  
```js  
Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {  
    const vm: Component = this  
    const prevEl = vm.$el  
    const prevVnode = vm._vnode  
    // 设置当前激活的作用域  
    const restoreActiveInstance = setActiveInstance(vm)  
    vm._vnode = vnode  
    // Vue.prototype.__patch__ is injected in entry points  
    // based on the rendering backend used.  
    if (!prevVnode) {  
      // initial render  
      // 执行具体的挂载逻辑  
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)  
    } else {  
      // updates  
      vm.$el = vm.__patch__(prevVnode, vnode)  
    }  
    restoreActiveInstance()  
    // update __vue__ reference  
    if (prevEl) {  
      prevEl.__vue__ = null  
    }  
    if (vm.$el) {  
      vm.$el.__vue__ = vm  
    }  
    // if parent is an HOC, update its $el as well  
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {  
      vm.$parent.$el = vm.$el  
    }  
    // updated hook is called by the scheduler to ensure that children are  
    // updated in a parent's updated hook.  
  }  
```  
  
  
  
## 三、结论  
  
- `new Vue`的时候调用会调用`_init`方法  
  - 定义 `$set`、` $get` 、`$delete`、`$watch` 等方法  
  - 定义 `$on`、`$off`、`$emit`、`$off `等事件  
  - 定义 `_update`、`$forceUpdate`、`$destroy`生命周期  
  
- 调用`$mount`进行页面的挂载  
- 挂载的时候主要是通过`mountComponent`方法  
- 定义`updateComponent`更新函数  
- 执行`render`生成虚拟`DOM`  
- `_update`将虚拟`DOM`生成真实`DOM`结构，并且渲染到页面中  
  
  
  
# Vue中的 v-show 和 v-if 有什么区别  
 ![](https://static.vue-js.com/d21c3c50-3acb-11eb-85f6-6fac77c0c9b3.png)  
  
  
## 一、v-show与v-if的共同点  
  
我们都知道在 `vue` 中 `v-show ` 与 `v-if` 的作用效果是相同的(不含v-else)，都能控制元素在页面是否显示  
  
在用法上也是相同的  
  
```js  
<Model v-show="isShow" />  
<Model v-if="isShow" />  
```  
  
- 当表达式为`true`的时候，都会占据页面的位置  
- 当表达式都为`false`时，都不会占据页面位置  
  
  
## 二、v-show与v-if的区别  
  
- 控制手段不同  
- 编译过程不同  
- 编译条件不同  
  
控制手段：`v-show`隐藏则是为该元素添加`css--display:none`，`dom`元素依旧还在。`v-if`显示隐藏是将`dom`元素整个添加或删除  
  
编译过程：`v-if`切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；`v-show`只是简单的基于css切换  
  
编译条件：`v-if`是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。只有渲染条件为假时，并不做操作，直到为真才渲染  
  
- `v-show` 由`false`变为`true`的时候不会触发组件的生命周期  
  
- `v-if`由`false`变为`true`的时候，触发组件的`beforeCreate`、`create`、`beforeMount`、`mounted`钩子，由`true`变为`false`的时候触发组件的`beforeDestory`、`destoryed`方法  
  
性能消耗：`v-if`有更高的切换消耗；`v-show`有更高的初始渲染消耗；  
  
## 三、v-show与v-if原理分析  
  
具体解析流程这里不展开讲，大致流程如下  
- 将模板`template`转为`ast`结构的`JS`对象  
- 用`ast`得到的`JS`对象拼装`render`和`staticRenderFns`函数  
- `render`和`staticRenderFns`函数被调用后生成虚拟`VNODE`节点，该节点包含创建`DOM`节点所需信息  
- `vm.patch`函数通过虚拟`DOM`算法利用`VNODE`节点创建真实`DOM`节点  
  
### v-show原理  
  
不管初始条件是什么，元素总是会被渲染  
  
我们看一下在`vue`中是如何实现的  
  
代码很好理解，有`transition`就执行`transition`，没有就直接设置`display`属性  
  
```js  
// https://github.com/vuejs/vue-next/blob/3cd30c5245da0733f9eb6f29d220f39c46518162/packages/runtime-dom/src/directives/vShow.ts  
export const vShow: ObjectDirective<VShowElement> = {  
  beforeMount(el, { value }, { transition }) {  
    el._vod = el.style.display === 'none' ? '' : el.style.display  
    if (transition && value) {  
      transition.beforeEnter(el)  
    } else {  
      setDisplay(el, value)  
    }  
  },  
  mounted(el, { value }, { transition }) {  
    if (transition && value) {  
      transition.enter(el)  
    }  
  },  
  updated(el, { value, oldValue }, { transition }) {  
    // ...  
  },  
  beforeUnmount(el, { value }) {  
    setDisplay(el, value)  
  }  
}  
```  
  
### v-if原理  
  
`v-if`在实现上比`v-show`要复杂的多，因为还有`else` `else-if` 等条件需要处理，这里我们也只摘抄源码中处理 `v-if` 的一小部分  
  
返回一个`node`节点，`render`函数通过表达式的值来决定是否生成`DOM`  
  
```js  
// https://github.com/vuejs/vue-next/blob/cdc9f336fd/packages/compiler-core/src/transforms/vIf.ts  
export const transformIf = createStructuralDirectiveTransform(  
  /^(if|else|else-if)$/,  
  (node, dir, context) => {  
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {  
      // ...  
      return () => {  
        if (isRoot) {  
          ifNode.codegenNode = createCodegenNodeForBranch(  
            branch,  
            key,  
            context  
          ) as IfConditionalExpression  
        } else {  
          // attach this branch's codegen node to the v-if root.  
          const parentCondition = getParentCondition(ifNode.codegenNode!)  
          parentCondition.alternate = createCodegenNodeForBranch(  
            branch,  
            key + ifNode.branches.length - 1,  
            context  
          )  
        }  
      }  
    })  
  }  
)  
```  
  
## 四、v-show与v-if的使用场景  
  
`v-if` 与 `v-show` 都能控制`dom`元素在页面的显示  
  
`v-if` 相比 `v-show` 开销更大的（直接操作`dom`节点增加与删除）   
  
如果需要非常频繁地切换，则使用 v-show 较好  
  
如果在运行时条件很少改变，则使用 v-if 较好  
  
# 谈谈对Vue中双向绑定的理解  
 ![](https://static.vue-js.com/cef7dcc0-3ac9-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、什么是双向绑定  
  
我们先从单向绑定切入单向绑定非常简单，就是把`Model`绑定到`View`，当我们用`JavaScript`代码更新`Model`时，`View`就会自动更新双向绑定就很容易联想到了，在单向绑定的基础上，用户更新了`View`，`Model`的数据也自动被更新了，这种情况就是双向绑定举个栗子  
  
 ![](https://static.vue-js.com/d65738d0-3ac9-11eb-ab90-d9ae814b240d.png)  
  
当用户填写表单时，`View`的状态就被更新了，如果此时可以自动更新`Model`的状态，那就相当于我们把`Model`和`View`做了双向绑定关系图如下  
  
 ![](https://static.vue-js.com/dcc1d4a0-3ac9-11eb-ab90-d9ae814b240d.png)  
  
## 二、双向绑定的原理是什么  
  
我们都知道 `Vue` 是数据双向绑定的框架，双向绑定由三个重要部分构成  
  
- 数据层（Model）：应用的数据及业务逻辑  
- 视图层（View）：应用的展示效果，各类UI组件  
- 业务逻辑层（ViewModel）：框架封装的核心，它负责将数据与视图关联起来  
  
而上面的这个分层的架构方案，可以用一个专业术语进行称呼：`MVVM`这里的控制层的核心功能便是 “数据双向绑定” 。自然，我们只需弄懂它是什么，便可以进一步了解数据绑定的原理  
  
### 理解ViewModel  
  
它的主要职责就是：  
  
- 数据变化后更新视图  
- 视图变化后更新数据  
  
当然，它还有两个主要部分组成  
  
- 监听器（Observer）：对所有数据的属性进行监听  
- 解析器（Compiler）：对每个元素节点的指令进行扫描跟解析,根据指令模板替换数据,以及绑定相应的更新函数  
  
### 三、实现双向绑定  
  
我们还是以`Vue`为例，先来看看`Vue`中的双向绑定流程是什么的  
  
1.  `new Vue()`首先执行初始化，对`data`执行响应化处理，这个过程发生`Observe`中  
2.  同时对模板执行编译，找到其中动态绑定的数据，从`data`中获取并初始化视图，这个过程发生在`Compile`中  
3.  同时定义⼀个更新函数和`Watcher`，将来对应数据变化时`Watcher`会调用更新函数  
4.  由于`data`的某个`key`在⼀个视图中可能出现多次，所以每个`key`都需要⼀个管家`Dep`来管理多个`Watcher`  
5.  将来data中数据⼀旦发生变化，会首先找到对应的`Dep`，通知所有`Watcher`执行更新函数  
  
流程图如下：  
  
 ![](https://static.vue-js.com/e5369850-3ac9-11eb-85f6-6fac77c0c9b3.png)  
  
### 实现  
  
先来一个构造函数：执行初始化，对`data`执行响应化处理  
  
```js  
class Vue {    
  constructor(options) {    
    this.$options = options;    
    this.$data = options.data;    
          
    // 对data选项做响应式处理    
    observe(this.$data);    
          
    // 代理data到vm上    
    proxy(this);    
          
    // 执行编译    
    new Compile(options.el, this);    
  }    
}    
```  
  
对`data`选项执行响应化具体操作  
  
```js  
function observe(obj) {    
  if (typeof obj !== "object" || obj == null) {    
    return;    
  }    
  new Observer(obj);    
}    
    
class Observer {    
  constructor(value) {    
    this.value = value;    
    this.walk(value);    
  }    
  walk(obj) {    
    Object.keys(obj).forEach((key) => {    
      defineReactive(obj, key, obj[key]);    
    });    
  }    
}    
```  
  
#### 编译`Compile`  
  
对每个元素节点的指令进行扫描跟解析,根据指令模板替换数据,以及绑定相应的更新函数  
  
 ![](https://static.vue-js.com/f27e19c0-3ac9-11eb-85f6-6fac77c0c9b3.png)  
  
```  
class Compile {    
  constructor(el, vm) {    
    this.$vm = vm;    
    this.$el = document.querySelector(el);  // 获取dom    
    if (this.$el) {    
      this.compile(this.$el);    
    }    
  }    
  compile(el) {    
    const childNodes = el.childNodes;     
    Array.from(childNodes).forEach((node) => { // 遍历子元素    
      if (this.isElement(node)) {   // 判断是否为节点    
        console.log("编译元素" + node.nodeName);    
      } else if (this.isInterpolation(node)) {    
        console.log("编译插值⽂本" + node.textContent);  // 判断是否为插值文本 {{}}    
      }    
      if (node.childNodes && node.childNodes.length > 0) {  // 判断是否有子元素    
        this.compile(node);  // 对子元素进行递归遍历    
      }    
    });    
  }    
  isElement(node) {    
    return node.nodeType == 1;    
  }    
  isInterpolation(node) {    
    return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent);    
  }    
}    
    
```  
  
#### 依赖收集  
  
视图中会用到`data`中某`key`，这称为依赖。同⼀个`key`可能出现多次，每次都需要收集出来用⼀个`Watcher`来维护它们，此过程称为依赖收集多个`Watcher`需要⼀个`Dep`来管理，需要更新时由`Dep`统⼀通知  
  
 ![](https://static.vue-js.com/fa191f40-3ac9-11eb-ab90-d9ae814b240d.png)  
  
实现思路  
  
 1. `defineReactive`时为每⼀个`key`创建⼀个`Dep`实例  
 2. 初始化视图时读取某个`key`，例如`name1`，创建⼀个`watcher1`  
 3. 由于触发`name1`的`getter`方法，便将`watcher1`添加到`name1`对应的Dep中  
 4. 当`name1`更新，`setter`触发时，便可通过对应`Dep`通知其管理所有`Watcher`更新  
  
```js  
// 负责更新视图    
class Watcher {    
  constructor(vm, key, updater) {    
    this.vm = vm    
    this.key = key    
    this.updaterFn = updater    
    
    // 创建实例时，把当前实例指定到Dep.target静态属性上    
    Dep.target = this    
    // 读一下key，触发get    
    vm[key]    
    // 置空    
    Dep.target = null    
  }    
    
  // 未来执行dom更新函数，由dep调用的    
  update() {    
    this.updaterFn.call(this.vm, this.vm[this.key])    
  }    
}    
```  
  
声明`Dep`  
  
```js  
class Dep {    
  constructor() {    
    this.deps = [];  // 依赖管理    
  }    
  addDep(dep) {    
    this.deps.push(dep);    
  }    
  notify() {     
    this.deps.forEach((dep) => dep.update());    
  }    
}    
```  
  
创建`watcher`时触发`getter`  
  
```js  
class Watcher {    
  constructor(vm, key, updateFn) {    
    Dep.target = this;    
    this.vm[this.key];    
    Dep.target = null;    
  }    
}    
    
```  
  
依赖收集，创建`Dep`实例  
  
```js  
function defineReactive(obj, key, val) {    
  this.observe(val);    
  const dep = new Dep();    
  Object.defineProperty(obj, key, {    
    get() {    
      Dep.target && dep.addDep(Dep.target);// Dep.target也就是Watcher实例    
      return val;    
    },    
    set(newVal) {    
      if (newVal === val) return;    
      dep.notify(); // 通知dep执行更新方法    
    },    
  });    
}    
```  
  
# 说说你对vue的理解?  
Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的开源JavaScript框架，也是一个创建单页应用的Web应用框架。  
  
Vue 是一套用于构建用户界面的渐进式MVVM框架。那怎么理解渐进式呢？渐进式含义：强制主张最少。  
  
Vue.js包含了声明式渲染、组件化系统、客户端路由、大规模状态管理、构建工具、数据持久化、跨平台支持等，但在实际开发中，并没有强制要求开发者之后某一特定功能，而是根据需求逐渐扩展。  
  
Vue所关注的核心是MVC模式中的视图层，同时，它也能方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互。  
  
Vue.js的核心库只关心视图渲染，且由于渐进式的特性，Vue.js便于与第三方库或既有项目整合。Vue.js 实现了一套声明式渲染引擎，并在runtime或者预编译时将声明式的模板编译成渲染函数，挂载在观察者 Watcher 中，在渲染函数中（touch），响应式系统使用响应式数据的getter方法对观察者进行依赖收集（Collect as Dependency），使用响应式数据的setter方法通知（notify）所有观察者进行更新，此时观察者 Watcher 会触发组件的渲染函数（Trigger re-render），组件执行的 render 函数，生成一个新的 Virtual DOM Tree，此时 Vue 会对新老 Virtual DOM Tree 进行 Diff，查找出需要操作的真实 DOM 并对其进行更新。  
  
  
  
# web常见的攻击方式有哪些，以及如何进行防御？  
![](https://static.vue-js.com/d0892930-8d1d-11eb-ab90-d9ae814b240d.png)  
  
## 一、是什么  
  
Web攻击（WebAttack）是针对用户上网行为或网站服务器等设备进行攻击的行为  
  
如植入恶意代码，修改网站权限，获取网站用户隐私信息等等  
  
Web应用程序的安全性是任何基于Web业务的重要组成部分  
  
确保Web应用程序安全十分重要，即使是代码中很小的 bug 也有可能导致隐私信息被泄露  
  
站点安全就是为保护站点不受未授权的访问、使用、修改和破坏而采取的行为或实践  
  
我们常见的Web攻击方式有  
  
- XSS (Cross Site Scripting) 跨站脚本攻击  
- CSRF（Cross-site request forgery）跨站请求伪造  
- SQL注入攻击  
  
  
## 二、XSS  
  
XSS，跨站脚本攻击，允许攻击者将恶意代码植入到提供给其它用户使用的页面中  
  
`XSS`涉及到三方，即攻击者、客户端与`Web`应用  
  
`XSS`的攻击目标是为了盗取存储在客户端的`cookie`或者其他网站用于识别客户端身份的敏感信息。一旦获取到合法用户的信息后，攻击者甚至可以假冒合法用户与网站进行交互  
  
举个例子：  
  
一个搜索页面，根据`url`参数决定关键词的内容  
  
```html  
<input type="text" value="<%= getParameter("keyword") %>">  
<button>搜索</button>  
<div>  
  您搜索的关键词是：<%= getParameter("keyword") %>  
</div>  
```  
  
这里看似并没有问题，但是如果不按套路出牌呢？  
  
用户输入`"><script>alert('XSS');</script>`，拼接到 HTML 中返回给浏览器。形成了如下的 HTML：  
  
```html  
<input type="text" value=""><script>alert('XSS');</script>">  
<button>搜索</button>  
<div>  
  您搜索的关键词是："><script>alert('XSS');</script>  
</div>  
```  
  
浏览器无法分辨出 `<script>alert('XSS');</script>` 是恶意代码，因而将其执行，试想一下，如果是获取`cookie`发送对黑客服务器呢？  
  
根据攻击的来源，`XSS`攻击可以分成：  
  
- 存储型  
- 反射型  
- DOM 型  
  
  
  
### 存储型  
  
存储型 XSS 的攻击步骤：  
  
1. 攻击者将恶意代码提交到目标网站的数据库中  
2. 用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在 HTML 中返回给浏览器  
3. 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行  
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作  
  
这种攻击常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等  
  
  
  
### 反射型 XSS  
  
反射型 XSS 的攻击步骤：  
  
1. 攻击者构造出特殊的 URL，其中包含恶意代码  
2. 用户打开带有恶意代码的 URL 时，网站服务端将恶意代码从 URL 中取出，拼接在 HTML 中返回给浏览器  
3. 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行  
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作  
  
反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。  
  
反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。  
  
由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。  
  
POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见  
  
  
  
### DOM 型 XSS  
  
DOM 型 XSS 的攻击步骤：  
  
1. 攻击者构造出特殊的 URL，其中包含恶意代码  
2. 用户打开带有恶意代码的 URL  
3. 用户浏览器接收到响应后解析执行，前端 JavaScript 取出 URL 中的恶意代码并执行  
4. 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作  
  
DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞  
  
  
  
### XSS的预防  
  
通过前面介绍，看到`XSS`攻击的两大要素：  
  
- 攻击者提交而恶意代码  
- 浏览器执行恶意代码  
  
针对第一个要素，我们在用户输入的过程中，过滤掉用户输入的恶劣代码，然后提交给后端，但是如果攻击者绕开前端请求，直接构造请求就不能预防了  
  
而如果在后端写入数据库前，对输入进行过滤，然后把内容给前端，但是这个内容在不同地方就会有不同显示  
  
例如：  
  
一个正常的用户输入了 `5 < 7` 这个内容，在写入数据库前，被转义，变成了 `5 < 7`  
  
在客户端中，一旦经过了 `escapeHTML()`，客户端显示的内容就变成了乱码( `5 < 7` )  
  
在前端中，不同的位置所需的编码也不同。  
  
- 当 `5 < 7` 作为 HTML 拼接页面时，可以正常显示：  
  
```html  
<div title="comment">5 &lt; 7</div>  
```  
  
- 当 `5 < 7` 通过 Ajax 返回，然后赋值给 JavaScript 的变量时，前端得到的字符串就是转义后的字符。这个内容不能直接用于 Vue 等模板的展示，也不能直接用于内容长度计算。不能用于标题、alert 等  
  
  
  
可以看到，过滤并非可靠的，下面就要通过防止浏览器执行恶意代码：  
  
在使用 `.innerHTML`、`.outerHTML`、`document.write()` 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 `.textContent`、`.setAttribute()` 等  
  
如果用 `Vue/React` 技术栈，并且不使用 `v-html`/`dangerouslySetInnerHTML` 功能，就在前端 `render` 阶段避免 `innerHTML`、`outerHTML` 的 XSS 隐患  
  
DOM 中的内联事件监听器，如 `location`、`onclick`、`onerror`、`onload`、`onmouseover` 等，`<a>` 标签的 `href` 属性，JavaScript 的 `eval()`、`setTimeout()`、`setInterval()` 等，都能把字符串作为代码运行。如果不可信的数据拼接到字符串中传递给这些 API，很容易产生安全隐患，请务必避免  
  
```js  
<!-- 链接内包含恶意代码 -->  
< a href=" ">1</ a>  
  
<script>  
// setTimeout()/setInterval() 中调用恶意代码  
setTimeout("UNTRUSTED")  
setInterval("UNTRUSTED")  
  
// location 调用恶意代码  
location.href = 'UNTRUSTED'  
  
// eval() 中调用恶意代码  
eval("UNTRUSTED")  
```  
  
  
  
  
  
## 三、CSRF  
  
CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求  
  
利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目  
  
一个典型的CSRF攻击有着如下的流程：  
  
- 受害者登录a.com，并保留了登录凭证（Cookie）  
- 攻击者引诱受害者访问了b.com  
- b.com 向 a.com 发送了一个请求：a.com/act=xx。浏览器会默认携带a.com的Cookie  
- a.com接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求  
- a.com以受害者的名义执行了act=xx  
- 攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执行了自己定义的操作  
  
`csrf`可以通过`get`请求，即通过访问`img`的页面后，浏览器自动访问目标地址，发送请求  
  
同样，也可以设置一个自动提交的表单发送`post`请求，如下：  
  
```js  
<form action="http://bank.example/withdraw" method=POST>  
    <input type="hidden" name="account" value="xiaoming" />  
    <input type="hidden" name="amount" value="10000" />  
    <input type="hidden" name="for" value="hacker" />  
</form>  
<script> document.forms[0].submit(); </script>   
```  
  
访问该页面后，表单会自动提交，相当于模拟用户完成了一次`POST`操作  
  
还有一种为使用`a`标签的，需要用户点击链接才会触发  
  
访问该页面后，表单会自动提交，相当于模拟用户完成了一次POST操作  
  
```html  
< a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank">  
    重磅消息！！  
<a/>  
```  
  
  
  
### CSRF的特点  
  
- 攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生  
- 攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据  
- 整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”  
- 跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪  
  
  
  
### CSRF的预防    
  
CSRF通常从第三方网站发起，被攻击的网站无法防止攻击发生，只能通过增强自己网站针对CSRF的防护能力来提升安全性  
  
防止`csrf`常用方案如下：  
  
- 阻止不明外域的访问  
  - 同源检测  
  - Samesite Cookie  
- 提交时要求附加本域才能获取的信息  
  - CSRF Token  
  - 双重Cookie验证  
  
  
  
这里主要讲讲`token`这种形式，流程如下：  
  
- 用户打开页面的时候，服务器需要给这个用户生成一个Token  
- 对于GET请求，Token将附在请求地址之后。对于 POST 请求来说，要在 form 的最后加上  
  
```html  
<input type=”hidden” name=”csrftoken” value=”tokenvalue”/>  
```  
  
- 当用户从客户端得到了Token，再次提交给服务器的时候，服务器需要判断Token的有效性  
  
  
  
## 四、SQL注入  
  
Sql 注入攻击，是通过将恶意的 `Sql `查询或添加语句插入到应用的输入参数中，再在后台 `Sql `服务器上解析执行进行的攻击  
  
 ![](https://static.vue-js.com/ead52fa0-8d1d-11eb-85f6-6fac77c0c9b3.png)  
  
流程如下所示：  
  
- 找出SQL漏洞的注入点  
  
- 判断数据库的类型以及版本  
- 猜解用户名和密码  
- 利用工具查找Web后台管理入口  
- 入侵和破坏  
  
预防方式如下：  
  
- 严格检查输入变量的类型和格式  
- 过滤和转义特殊字符  
- 对访问数据库的Web应用程序采用Web应用防火墙  
  
上述只是列举了常见的`web`攻击方式，实际开发过程中还会遇到很多安全问题，对于这些问题， 切记不可忽视  
  
  
# 什么是单点登录，以及如何进行实现？  
![](https://static.vue-js.com/8a25a760-8c83-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、是什么  
  
单点登录（Single Sign On），简称为 SSO，是目前比较流行的企业业务整合的解决方案之一  
  
SSO的定义是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统  
  
SSO 一般都需要一个独立的认证中心（passport），子系统的登录均得通过`passport`，子系统本身将不参与登录操作  
  
当一个系统成功登录以后，`passport`将会颁发一个令牌给各个子系统，子系统可以拿着令牌会获取各自的受保护资源，为了减少频繁认证，各个子系统在被`passport`授权以后，会建立一个局部会话，在一定时间内可以无需再次向`passport`发起认证  
  
 ![](https://static.vue-js.com/2b9b0e70-8c4b-11eb-85f6-6fac77c0c9b3.png)  
  
上图有四个系统，分别是`Application1`、`Application2`、`Application3`、和`SSO`，当`Application1`、`Application2`、`Application3`需要登录时，将跳到`SSO`系统，`SSO`系统完成登录，其他的应用系统也就随之登录了  
  
#### 举个例子  
  
淘宝、天猫都属于阿里旗下，当用户登录淘宝后，再打开天猫，系统便自动帮用户登录了天猫，这种现象就属于单点登录  
  
  
## 二、如何实现  
  
### 同域名下的单点登录  
  
`cookie`的`domin`属性设置为当前域的父域，并且父域的`cookie`会被子域所共享。`path`属性默认为`web`应用的上下文路径  
  
利用 `Cookie` 的这个特点，没错，我们只需要将` Cookie `的` domain`属性设置为父域的域名（主域名），同时将 `Cookie `的` path `属性设置为根路径，将 `Session ID`（或 `Token`）保存到父域中。这样所有的子域应用就都可以访问到这个` Cookie `  
  
不过这要求应用系统的域名需建立在一个共同的主域名之下，如 `tieba.baidu.com` 和 `map.baidu.com`，它们都建立在 `baidu.com `这个主域名之下，那么它们就可以通过这种方式来实现单点登录  
  
  
  
### 不同域名下的单点登录(一)  
  
如果是不同域的情况下，`Cookie`是不共享的，这里我们可以部署一个认证中心，用于专门处理登录请求的独立的 `Web `服务  
  
用户统一在认证中心进行登录，登录成功后，认证中心记录用户的登录状态，并将 `token` 写入 `Cookie`（注意这个 `Cookie `是认证中心的，应用系统是访问不到的）  
  
应用系统检查当前请求有没有 `Token`，如果没有，说明用户在当前系统中尚未登录，那么就将页面跳转至认证中心  
  
由于这个操作会将认证中心的 `Cookie` 自动带过去，因此，认证中心能够根据 `Cookie` 知道用户是否已经登录过了  
  
如果认证中心发现用户尚未登录，则返回登录页面，等待用户登录  
  
如果发现用户已经登录过了，就不会让用户再次登录了，而是会跳转回目标 `URL `，并在跳转前生成一个 `Token`，拼接在目标` URL` 的后面，回传给目标应用系统  
  
应用系统拿到 `Token `之后，还需要向认证中心确认下 `Token` 的合法性，防止用户伪造。确认无误后，应用系统记录用户的登录状态，并将 `Token `写入` Cookie`，然后给本次访问放行。（注意这个 `Cookie` 是当前应用系统的）当用户再次访问当前应用系统时，就会自动带上这个 `Token`，应用系统验证 Token 发现用户已登录，于是就不会有认证中心什么事了  
  
此种实现方式相对复杂，支持跨域，扩展性好，是单点登录的标准做法  
  
  
  
### 不同域名下的单点登录(二)  
  
可以选择将 `Session ID` （或 `Token` ）保存到浏览器的 `LocalStorage` 中，让前端在每次向后端发送请求时，主动将` LocalStorage `的数据传递给服务端  
  
这些都是由前端来控制的，后端需要做的仅仅是在用户登录成功后，将 `Session ID `（或 `Token `）放在响应体中传递给前端  
  
单点登录完全可以在前端实现。前端拿到 `Session ID `（或 `Token` ）后，除了将它写入自己的 `LocalStorage` 中之外，还可以通过特殊手段将它写入多个其他域下的 `LocalStorage` 中  
  
关键代码如下：  
  
```js  
// 获取 token  
var token = result.data.token;  
   
// 动态创建一个不可见的iframe，在iframe中加载一个跨域HTML  
var iframe = document.createElement("iframe");  
iframe.src = "http://app1.com/localstorage.html";  
document.body.append(iframe);  
// 使用postMessage()方法将token传递给iframe  
setTimeout(function () {  
    iframe.contentWindow.postMessage(token, "http://app1.com");  
}, 4000);  
setTimeout(function () {  
    iframe.remove();  
}, 6000);  
   
// 在这个iframe所加载的HTML中绑定一个事件监听器，当事件被触发时，把接收到的token数据写入localStorage  
window.addEventListener('message', function (event) {  
    localStorage.setItem('token', event.data)  
}, false);  
```  
  
前端通过 `iframe`+`postMessage()` 方式，将同一份 `Token` 写入到了多个域下的 `LocalStorage` 中，前端每次在向后端发送请求之前，都会主动从 `LocalStorage` 中读取` Token `并在请求中携带，这样就实现了同一份` Token` 被多个域所共享  
  
此种实现方式完全由前端控制，几乎不需要后端参与，同样支持跨域  
  
  
  
## 三、流程  
  
单点登录的流程图如下所示：  
  
 ![](https://static.vue-js.com/2422bc40-8c84-11eb-ab90-d9ae814b240d.png)  
  
- 用户访问系统1的受保护资源，系统1发现用户未登录，跳转至sso认证中心，并将自己的地址作为参数  
  
- sso认证中心发现用户未登录，将用户引导至登录页面  
- 用户输入用户名密码提交登录申请  
- sso认证中心校验用户信息，创建用户与sso认证中心之间的会话，称为全局会话，同时创建授权令牌  
- sso认证中心带着令牌跳转会最初的请求地址（系统1）  
- 系统1拿到令牌，去sso认证中心校验令牌是否有效  
- sso认证中心校验令牌，返回有效，注册系统1  
- 系统1使用该令牌创建与用户的会话，称为局部会话，返回受保护资源  
- 用户访问系统2的受保护资源  
- 系统2发现用户未登录，跳转至sso认证中心，并将自己的地址作为参数  
- sso认证中心发现用户已登录，跳转回系统2的地址，并附上令牌  
- 系统2拿到令牌，去sso认证中心校验令牌是否有效  
- sso认证中心校验令牌，返回有效，注册系统2  
- 系统2使用该令牌创建与用户的局部会话，返回受保护资源  
  
用户登录成功之后，会与`sso`认证中心及各个子系统建立会话，用户与`sso`认证中心建立的会话称为全局会话  
  
用户与各个子系统建立的会话称为局部会话，局部会话建立之后，用户访问子系统受保护资源将不再通过`sso`认证中心  
  
全局会话与局部会话有如下约束关系：  
  
- 局部会话存在，全局会话一定存在  
- 全局会话存在，局部会话不一定存在  
- 全局会话销毁，局部会话必须销毁  
  
  
# 如何实现上拉加载，下拉刷新？  
![](https://static.vue-js.com/89cd1850-8adc-11eb-ab90-d9ae814b240d.png)  
  
## 一、前言  
  
下拉刷新和上拉加载这两种交互方式通常出现在移动端中  
  
本质上等同于PC网页中的分页，只是交互形式不同  
  
开源社区也有很多优秀的解决方案，如`iscroll`、`better-scroll`、`pulltorefresh.js`库等等  
  
这些第三方库使用起来非常便捷  
  
我们通过原生的方式实现一次上拉加载，下拉刷新，有助于对第三方库有更好的理解与使用  
  
## 二、实现原理  
  
上拉加载及下拉刷新都依赖于用户交互  
  
最重要的是要理解在什么场景，什么时机下触发交互动作  
  
### 上拉加载  
  
首先可以看一张图  
  
 ![](https://static.vue-js.com/df498a00-8ae3-11eb-ab90-d9ae814b240d.png)  
  
上拉加载的本质是页面触底，或者快要触底时的动作  
  
判断页面触底我们需要先了解一下下面几个属性  
  
- `scrollTop`：滚动视窗的高度距离`window`顶部的距离，它会随着往上滚动而不断增加，初始值是0，它是一个变化的值  
  
- `clientHeight`:它是一个定值，表示屏幕可视区域的高度；  
- `scrollHeight`：页面不能滚动时是不存在的，`body`长度超过`window`时才会出现，所表示`body`所有元素的长度  
  
综上我们得出一个触底公式：  
  
```js  
scrollTop + clientHeight >= scrollHeight  
```  
  
简单实现  
  
```js  
let clientHeight  = document.documentElement.clientHeight; //浏览器高度  
let scrollHeight = document.body.scrollHeight;  
let scrollTop = document.documentElement.scrollTop;  
   
let distance = 50;  //距离视窗还用50的时候，开始触发；  
  
if ((scrollTop + clientHeight) >= (scrollHeight - distance)) {  
    console.log("开始加载数据");  
}  
```  
  
  
### 下拉刷新  
  
下拉刷新的本质是页面本身置于顶部时，用户下拉时需要触发的动作  
  
关于下拉刷新的原生实现，主要分成三步：  
  
- 监听原生`touchstart`事件，记录其初始位置的值，`e.touches[0].pageY`；  
- 监听原生`touchmove`事件，记录并计算当前滑动的位置值与初始位置值的差值，大于`0`表示向下拉动，并借助CSS3的`translateY`属性使元素跟随手势向下滑动对应的差值，同时也应设置一个允许滑动的最大值；  
- 监听原生`touchend`事件，若此时元素滑动达到最大值，则触发`callback`，同时将`translateY`重设为`0`，元素回到初始位置  
  
举个例子：  
  
`Html`结构如下：  
  
```js  
<main>  
    <p class="refreshText"></p >  
    <ul id="refreshContainer">  
        <li>111</li>  
        <li>222</li>  
        <li>333</li>  
        <li>444</li>  
        <li>555</li>  
        ...  
    </ul>  
</main>  
```  
  
监听`touchstart`事件，记录初始的值  
  
```js  
var _element = document.getElementById('refreshContainer'),  
    _refreshText = document.querySelector('.refreshText'),  
    _startPos = 0,  // 初始的值  
    _transitionHeight = 0; // 移动的距离  
  
_element.addEventListener('touchstart', function(e) {  
    _startPos = e.touches[0].pageY; // 记录初始位置  
    _element.style.position = 'relative';  
    _element.style.transition = 'transform 0s';  
}, false);  
```  
  
监听`touchmove`移动事件，记录滑动差值  
  
```js  
_element.addEventListener('touchmove', function(e) {  
    // e.touches[0].pageY 当前位置  
    _transitionHeight = e.touches[0].pageY - _startPos; // 记录差值  
  
    if (_transitionHeight > 0 && _transitionHeight < 60) {   
        _refreshText.innerText = '下拉刷新';   
        _element.style.transform = 'translateY('+_transitionHeight+'px)';  
  
        if (_transitionHeight > 55) {  
            _refreshText.innerText = '释放更新';  
        }  
    }                  
}, false);  
```  
  
最后，就是监听`touchend`离开的事件  
  
```js  
_element.addEventListener('touchend', function(e) {  
    _element.style.transition = 'transform 0.5s ease 1s';  
    _element.style.transform = 'translateY(0px)';  
    _refreshText.innerText = '更新中...';  
    // todo...  
  
}, false);  
```  
  
从上面可以看到，在下拉到松手的过程中，经历了三个阶段：  
  
- 当前手势滑动位置与初始位置差值大于零时，提示正在进行下拉刷新操作  
- 下拉到一定值时，显示松手释放后的操作提示  
- 下拉到达设定最大值松手时，执行回调，提示正在进行更新操作  
  
  
  
## 三、案例  
  
在实际开发中，我们更多的是使用第三方库，下面以`better-scroll`进行举例：  
  
HTML结构  
  
```js  
<div id="position-wrapper">  
    <div>  
        <p class="refresh">下拉刷新</p >  
        <div class="position-list">  
   <!--列表内容-->  
        </div>  
        <p class="more">查看更多</p >  
    </div>  
</div>  
```  
  
实例化上拉下拉插件，通过`use`来注册插件  
  
```js  
import BScroll from "@better-scroll/core";  
import PullDown from "@better-scroll/pull-down";  
import PullUp from '@better-scroll/pull-up';  
BScroll.use(PullDown);  
BScroll.use(PullUp);  
```  
  
实例化`BetterScroll`，并传入相关的参数  
  
```js  
let pageNo = 1,pageSize = 10,dataList = [],isMore = true;    
var scroll= new BScroll("#position-wrapper",{  
    scrollY:true,//垂直方向滚动  
    click:true,//默认会阻止浏览器的原生click事件，如果需要点击，这里要设为true  
    pullUpLoad:true,//上拉加载更多  
    pullDownRefresh:{  
        threshold:50,//触发pullingDown事件的位置  
        stop:0//下拉回弹后停留的位置  
    }  
});  
//监听下拉刷新  
scroll.on("pullingDown",pullingDownHandler);  
//监测实时滚动  
scroll.on("scroll",scrollHandler);  
//上拉加载更多  
scroll.on("pullingUp",pullingUpHandler);  
  
async function pullingDownHandler(){  
    dataList=[];  
    pageNo=1;  
    isMore=true;  
    $(".more").text("查看更多");  
    await getlist();//请求数据  
    scroll.finishPullDown();//每次下拉结束后，需要执行这个操作  
    scroll.refresh();//当滚动区域的dom结构有变化时，需要执行这个操作  
}  
async function pullingUpHandler(){  
    if(!isMore){  
        $(".more").text("没有更多数据了");  
        scroll.finishPullUp();//每次上拉结束后，需要执行这个操作  
        return;  
    }  
    pageNo++;  
    await this.getlist();//请求数据  
    scroll.finishPullUp();//每次上拉结束后，需要执行这个操作  
    scroll.refresh();//当滚动区域的dom结构有变化时，需要执行这个操作      
}  
function scrollHandler(){  
    if(this.y>50) $('.refresh').text("松手开始加载");  
    else $('.refresh').text("下拉刷新");  
}  
function getlist(){  
    //返回的数据  
    let result=....;  
    dataList=dataList.concat(result);  
    //判断是否已加载完  
    if(result.length<pageSize) isMore=false;  
    //将dataList渲染到html内容中  
}      
```  
  
注意点：  
  
使用`better-scroll `实现下拉刷新、上拉加载时要注意以下几点：  
  
- `wrapper`里必须只有一个子元素  
- 子元素的高度要比`wrapper`要高  
- 使用的时候，要确定`DOM`元素是否已经生成，必须要等到`DOM`渲染完成后，再`new BScroll()`  
- 滚动区域的`DOM`元素结构有变化后，需要执行刷新 `refresh() `  
- 上拉或者下拉，结束后，需要执行`finishPullUp()`或者`finishPullDown()`，否则将不会执行下次操作  
- `better-scroll`，默认会阻止浏览器的原生`click`事件，如果滚动内容区要添加点击事件，需要在实例化属性里设置`click:true`  
  
### 小结  
  
下拉刷新、上拉加载原理本身都很简单，真正复杂的是封装过程中，要考虑的兼容性、易用性、性能等诸多细节  
  
# 大文件怎么实现断点续传？  
![](https://static.vue-js.com/3ccb0e90-8ba4-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、是什么  
  
不管怎样简单的需求，在量级达到一定层次时，都会变得异常复杂  
  
文件上传简单，文件变大就复杂  
  
上传大文件时，以下几个变量会影响我们的用户体验  
  
- 服务器处理数据的能力  
- 请求超时  
- 网络波动  
  
上传时间会变长，高频次文件上传失败，失败后又需要重新上传等等  
  
为了解决上述问题，我们需要对大文件上传单独处理  
  
这里涉及到分片上传及断点续传两个概念  
  
#### 分片上传  
  
分片上传，就是将所要上传的文件，按照一定的大小，将整个文件分隔成多个数据块（Part）来进行分片上传  
  
如下图  
  
 ![](https://static.vue-js.com/21db7520-8ba4-11eb-85f6-6fac77c0c9b3.png)  
  
上传完之后再由服务端对所有上传的文件进行汇总整合成原始的文件  
  
大致流程如下：  
  
1. 将需要上传的文件按照一定的分割规则，分割成相同大小的数据块；  
2. 初始化一个分片上传任务，返回本次分片上传唯一标识；  
3. 按照一定的策略（串行或并行）发送各个分片数据块；  
4. 发送完成后，服务端根据判断数据上传是否完整，如果完整，则进行数据块合成得到原始文件  
  
#### 断点续传  
  
断点续传指的是在下载或上传时，将下载或上传任务人为的划分为几个部分  
  
每一个部分采用一个线程进行上传或下载，如果碰到网络故障，可以从已经上传或下载的部分开始继续上传下载未完成的部分，而没有必要从头开始上传下载。用户可以节省时间，提高速度  
  
一般实现方式有两种：  
  
- 服务器端返回，告知从哪开始  
- 浏览器端自行处理  
  
上传过程中将文件在服务器写为临时文件，等全部写完了（文件上传完），将此临时文件重命名为正式文件即可  
  
如果中途上传中断过，下次上传的时候根据当前临时文件大小，作为在客户端读取文件的偏移量，从此位置继续读取文件数据块，上传到服务器从此偏移量继续写入文件即可  
  
## 二、实现思路  
  
整体思路比较简单，拿到文件，保存文件唯一性标识，切割文件，分段上传，每次上传一段，根据唯一性标识判断文件上传进度，直到文件的全部片段上传完毕  
  
![](https://static.vue-js.com/465d2920-8ba4-11eb-85f6-6fac77c0c9b3.png)  
  
下面的内容都是伪代码  
  
读取文件内容：  
  
```js  
const input = document.querySelector('input');  
input.addEventListener('change', function() {  
    var file = this.files[0];  
});  
```  
  
可以使用`md5`实现文件的唯一性  
  
```js  
const md5code = md5(file);  
```  
  
然后开始对文件进行分割  
  
```js  
var reader = new FileReader();  
reader.readAsArrayBuffer(file);  
reader.addEventListener("load", function(e) {  
    //每10M切割一段,这里只做一个切割演示，实际切割需要循环切割，  
    var slice = e.target.result.slice(0, 10*1024*1024);  
});  
```  
  
h5上传一个（一片）  
  
```js  
const formdata = new FormData();  
formdata.append('0', slice);  
//这里是有一个坑的，部分设备无法获取文件名称，和文件类型，这个在最后给出解决方案  
formdata.append('filename', file.filename);  
var xhr = new XMLHttpRequest();  
xhr.addEventListener('load', function() {  
    //xhr.responseText  
});  
xhr.open('POST', '');  
xhr.send(formdata);  
xhr.addEventListener('progress', updateProgress);  
xhr.upload.addEventListener('progress', updateProgress);  
  
function updateProgress(event) {  
    if (event.lengthComputable) {  
        //进度条  
    }  
}  
```  
  
这里给出常见的图片和视频的文件类型判断  
  
```js  
function checkFileType(type, file, back) {  
/**  
* type png jpg mp4 ...  
* file input.change=> this.files[0]  
* back callback(boolean)  
*/  
    var args = arguments;  
    if (args.length != 3) {  
        back(0);  
    }  
    var type = args[0]; // type = '(png|jpg)' , 'png'  
    var file = args[1];  
    var back = typeof args[2] == 'function' ? args[2] : function() {};  
    if (file.type == '') {  
        // 如果系统无法获取文件类型，则读取二进制流，对二进制进行解析文件类型  
        var imgType = [  
            'ff d8 ff', //jpg  
            '89 50 4e', //png  
  
            '0 0 0 14 66 74 79 70 69 73 6F 6D', //mp4  
            '0 0 0 18 66 74 79 70 33 67 70 35', //mp4  
            '0 0 0 0 66 74 79 70 33 67 70 35', //mp4  
            '0 0 0 0 66 74 79 70 4D 53 4E 56', //mp4  
            '0 0 0 0 66 74 79 70 69 73 6F 6D', //mp4  
  
            '0 0 0 18 66 74 79 70 6D 70 34 32', //m4v  
            '0 0 0 0 66 74 79 70 6D 70 34 32', //m4v  
  
            '0 0 0 14 66 74 79 70 71 74 20 20', //mov  
            '0 0 0 0 66 74 79 70 71 74 20 20', //mov  
            '0 0 0 0 6D 6F 6F 76', //mov  
  
            '4F 67 67 53 0 02', //ogg  
            '1A 45 DF A3', //ogg  
  
            '52 49 46 46 x x x x 41 56 49 20', //avi (RIFF fileSize fileType LIST)(52 49 46 46,DC 6C 57 09,41 56 49 20,4C 49 53 54)  
        ];  
        var typeName = [  
            'jpg',  
            'png',  
            'mp4',  
            'mp4',  
            'mp4',  
            'mp4',  
            'mp4',  
            'm4v',  
            'm4v',  
            'mov',  
            'mov',  
            'mov',  
            'ogg',  
            'ogg',  
            'avi',  
        ];  
        var sliceSize = /png|jpg|jpeg/.test(type) ? 3 : 12;  
        var reader = new FileReader();  
        reader.readAsArrayBuffer(file);  
        reader.addEventListener("load", function(e) {  
            var slice = e.target.result.slice(0, sliceSize);  
            reader = null;  
            if (slice && slice.byteLength == sliceSize) {  
                var view = new Uint8Array(slice);  
                var arr = [];  
                view.forEach(function(v) {  
                    arr.push(v.toString(16));  
                });  
                view = null;  
                var idx = arr.join(' ').indexOf(imgType);  
                if (idx > -1) {  
                    back(typeName[idx]);  
                } else {  
                    arr = arr.map(function(v) {  
                        if (i > 3 && i < 8) {  
                            return 'x';  
                        }  
                        return v;  
                    });  
                    var idx = arr.join(' ').indexOf(imgType);  
                    if (idx > -1) {  
                        back(typeName[idx]);  
                    } else {  
                        back(false);  
                    }  
  
                }  
            } else {  
                back(false);  
            }  
  
        });  
    } else {  
        var type = file.name.match(/\.(\w+)$/)[1];  
        back(type);  
    }  
}  
```  
  
调用方法如下  
  
```js  
checkFileType('(mov|mp4|avi)',file,function(fileType){  
    // fileType = mp4,  
    // 如果file的类型不在枚举之列，则返回false  
});  
```  
  
上面上传文件的一步，可以改成：  
  
```js  
formdata.append('filename', md5code+'.'+fileType);  
```  
  
有了切割上传后，也就有了文件唯一标识信息，断点续传变成了后台的一个小小的逻辑判断  
  
后端主要做的内容为：根据前端传给后台的`md5`值，到服务器磁盘查找是否有之前未完成的文件合并信息（也就是未完成的半成品文件切片），取到之后根据上传切片的数量，返回数据告诉前端开始从第几节上传  
  
如果想要暂停切片的上传，可以使用`XMLHttpRequest `的 `abort `方法  
  
  
## 三、使用场景  
  
- 大文件加速上传：当文件大小超过预期大小时，使用分片上传可实现并行上传多个 Part， 以加快上传速度  
- 网络环境较差：建议使用分片上传。当出现上传失败的时候，仅需重传失败的Part  
- 流式上传：可以在需要上传的文件大小还不确定的情况下开始上传。这种场景在视频监控等行业应用中比较常见  
  
## 小结  
  
当前的伪代码，只是提供一个简单的思路，想要把事情做到极致，我们还需要考虑到更多场景，比如  
  
- 切片上传失败怎么办  
- 上传过程中刷新页面怎么办  
- 如何进行并行上传  
- 切片什么时候按数量切，什么时候按大小切  
- 如何结合 Web Work 处理大文件上传  
- 如何实现秒传  
  
人生又何尝不是如此，极致的人生体验有无限可能，越是后面才发现越是精彩 ~_~  
  
# 如何判断一个元素是否在可视区域中？  
![](https://static.vue-js.com/d848c790-8a05-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、用途  
  
可视区域即我们浏览网页的设备肉眼可见的区域，如下图  
  
 ![](https://static.vue-js.com/9c5bbb10-8a56-11eb-85f6-6fac77c0c9b3.png)  
  
在日常开发中，我们经常需要判断目标元素是否在视窗之内或者和视窗的距离小于一个值（例如 100 px），从而实现一些常用的功能，例如：  
  
- 图片的懒加载  
- 列表的无限滚动  
- 计算广告元素的曝光情况  
- 可点击链接的预加载  
  
  
## 二、实现方式  
  
判断一个元素是否在可视区域，我们常用的有三种办法：  
  
- offsetTop、scrollTop  
  
- getBoundingClientRect   
- Intersection Observer  
  
  
  
### offsetTop、scrollTop  
  
`offsetTop`，元素的上外边框至包含元素的上内边框之间的像素距离，其他`offset`属性如下图所示：  
  
 ![](https://static.vue-js.com/b4b63ca0-8a54-11eb-85f6-6fac77c0c9b3.png)  
  
下面再来了解下`clientWidth`、`clientHeight`：  
  
- `clientWidth`：元素内容区宽度加上左右内边距宽度，即`clientWidth = content + padding`  
- `clientHeight`：元素内容区高度加上上下内边距高度，即`clientHeight = content + padding`  
  
这里可以看到`client`元素都不包括外边距  
  
最后，关于`scroll`系列的属性如下：  
  
- `scrollWidth` 和 `scrollHeight` 主要用于确定元素内容的实际大小  
  
- `scrollLeft` 和 `scrollTop` 属性既可以确定元素当前滚动的状态，也可以设置元素的滚动位置  
  
- - 垂直滚动 `scrollTop > 0`  
  - 水平滚动 `scrollLeft > 0`  
  
- 将元素的 `scrollLeft` 和 `scrollTop` 设置为 0，可以重置元素的滚动位置  
  
#### 注意  
  
- 上述属性都是只读的，每次访问都要重新开始  
  
  
  
下面再看看如何实现判断：  
  
公式如下：  
  
```js  
el.offsetTop - document.documentElement.scrollTop <= viewPortHeight  
```  
  
代码实现：  
  
```js  
function isInViewPortOfOne (el) {  
    // viewPortHeight 兼容所有浏览器写法  
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight   
    const offsetTop = el.offsetTop  
    const scrollTop = document.documentElement.scrollTop  
    const top = offsetTop - scrollTop  
    return top <= viewPortHeight  
}  
```  
  
### getBoundingClientRect   
  
返回值是一个 `DOMRect`对象，拥有`left`, `top`, `right`, `bottom`, `x`, `y`, `width`, 和 `height`属性  
  
```js  
const target = document.querySelector('.target');  
const clientRect = target.getBoundingClientRect();  
console.log(clientRect);  
  
// {  
//   bottom: 556.21875,  
//   height: 393.59375,  
//   left: 333,  
//   right: 1017,  
//   top: 162.625,  
//   width: 684  
// }  
```  
  
属性对应的关系图如下所示：  
  
 ![](https://static.vue-js.com/e34ac5d0-8a05-11eb-85f6-6fac77c0c9b3.png)  
  
当页面发生滚动的时候，`top`与`left`属性值都会随之改变  
  
如果一个元素在视窗之内的话，那么它一定满足下面四个条件：  
  
- top 大于等于 0  
- left 大于等于 0  
- bottom 小于等于视窗高度  
- right 小于等于视窗宽度  
  
实现代码如下：  
  
```js  
function isInViewPort(element) {  
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;  
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;  
  const {  
    top,  
    right,  
    bottom,  
    left,  
  } = element.getBoundingClientRect();  
  
  return (  
    top >= 0 &&  
    left >= 0 &&  
    right <= viewWidth &&  
    bottom <= viewHeight  
  );  
}  
```  
  
  
  
### Intersection Observer  
  
`Intersection Observer` 即重叠观察者，从这个命名就可以看出它用于判断两个元素是否重叠，因为不用进行事件的监听，性能方面相比`getBoundingClientRect `会好很多  
  
  
  
使用步骤主要分为两步：创建观察者和传入被观察者  
  
#### 创建观察者  
  
```js  
const options = {  
  // 表示重叠面积占被观察者的比例，从 0 - 1 取值，  
  // 1 表示完全被包含  
  threshold: 1.0,   
  root:document.querySelector('#scrollArea') // 必须是目标元素的父级元素  
};  
  
const callback = (entries, observer) => { ....}  
  
const observer = new IntersectionObserver(callback, options);  
```  
  
通过`new IntersectionObserver`创建了观察者 `observer`，传入的参数 `callback` 在重叠比例超过 `threshold` 时会被执行`  
  
关于`callback`回调函数常用属性如下：  
  
```js  
// 上段代码中被省略的 callback  
const callback = function(entries, observer) {   
    entries.forEach(entry => {  
        entry.time;               // 触发的时间  
        entry.rootBounds;         // 根元素的位置矩形，这种情况下为视窗位置  
        entry.boundingClientRect; // 被观察者的位置举行  
        entry.intersectionRect;   // 重叠区域的位置矩形  
        entry.intersectionRatio;  // 重叠区域占被观察者面积的比例（被观察者不是矩形时也按照矩形计算）  
        entry.target;             // 被观察者  
    });  
};  
```  
  
#### 传入被观察者  
  
通过 `observer.observe(target)` 这一行代码即可简单的注册被观察者  
  
```js  
const target = document.querySelector('.target');  
observer.observe(target);  
```  
  
  
  
### 三、案例分析  
  
实现：创建了一个十万个节点的长列表，当节点滚入到视窗中时，背景就会从红色变为黄色  
  
`Html`结构如下：  
  
```js  
<div class="container"></div>  
```  
  
`css`样式如下：  
  
```css  
.container {  
    display: flex;  
    flex-wrap: wrap;  
}  
.target {  
    margin: 5px;  
    width: 20px;  
    height: 20px;  
    background: red;  
}  
```  
  
往`container`插入1000个元素  
  
```js  
const $container = $(".container");  
  
// 插入 100000 个 <div class="target"></div>  
function createTargets() {  
  const htmlString = new Array(100000)  
    .fill('<div class="target"></div>')  
    .join("");  
  $container.html(htmlString);  
}  
```  
  
这里，首先使用`getBoundingClientRect `方法进行判断元素是否在可视区域  
  
```js  
function isInViewPort(element) {  
    const viewWidth = window.innerWidth || document.documentElement.clientWidth;  
    const viewHeight =  
          window.innerHeight || document.documentElement.clientHeight;  
    const { top, right, bottom, left } = element.getBoundingClientRect();  
  
    return top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight;  
}  
```  
  
然后开始监听`scroll`事件，判断页面上哪些元素在可视区域中，如果在可视区域中则将背景颜色设置为`yellow`  
  
```js  
$(window).on("scroll", () => {  
    console.log("scroll !");  
    $targets.each((index, element) => {  
        if (isInViewPort(element)) {  
            $(element).css("background-color", "yellow");  
        }  
    });  
});  
```  
  
通过上述方式，可以看到可视区域颜色会变成黄色了，但是可以明显看到有卡顿的现象，原因在于我们绑定了`scroll`事件，`scroll`事件伴随了大量的计算，会造成资源方面的浪费  
  
下面通过`Intersection Observer`的形式同样实现相同的功能  
  
首先创建一个观察者  
  
```js  
const observer = new IntersectionObserver(getYellow, { threshold: 1.0 });  
```  
  
`getYellow`回调函数实现对背景颜色改变，如下：  
  
```js  
function getYellow(entries, observer) {  
    entries.forEach(entry => {  
        $(entry.target).css("background-color", "yellow");  
    });  
}  
```  
  
最后传入观察者，即`.target`元素  
  
```js  
$targets.each((index, element) => {  
    observer.observe(element);  
});  
```  
  
可以看到功能同样完成，并且页面不会出现卡顿的情况  
  
# 说说 Javascript 为什么会存在数字精度丢失的问题，以及如何进行解决？  
![](https://static.vue-js.com/09646a10-86f4-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、场景复现  
  
一个经典的面试题  
  
```js  
0.1 + 0.2 === 0.3 // false  
```  
  
为什么是`false`呢?  
  
先看下面这个比喻  
  
比如一个数 1÷3=0.33333333......   
  
3会一直无限循环，数学可以表示，但是计算机要存储，方便下次取出来再使用，但0.333333...... 这个数无限循环，再大的内存它也存不下，所以不能存储一个相对于数学来说的值，只能存储一个近似值，当计算机存储后再取出时就会出现精度丢失问题  
  
## 二、浮点数  
  
“浮点数”是一种表示数字的标准，整数也可以用浮点数的格式来存储  
  
我们也可以理解成，浮点数就是小数  
  
在`JavaScript`中，现在主流的数值类型是`Number`，而`Number`采用的是`IEEE754`规范中64位双精度浮点数编码  
  
这样的存储结构优点是可以归一化处理整数和小数，节省存储空间  
  
对于一个整数，可以很轻易转化成十进制或者二进制。但是对于一个浮点数来说，因为小数点的存在，小数点的位置不是固定的。解决思路就是使用科学计数法，这样小数点位置就固定了  
  
而计算机只能用二进制（0或1）表示，二进制转换为科学记数法的公式如下：  
  
 ![](https://static.vue-js.com/1b4b1620-86f4-11eb-ab90-d9ae814b240d.png)  
  
其中，`a`的值为0或者1，e为小数点移动的位置  
  
举个例子：  
  
27.0转化成二进制为11011.0 ，科学计数法表示为：  
  
 ![](https://static.vue-js.com/37007090-86f4-11eb-ab90-d9ae814b240d.png)  
  
前面讲到，`javaScript`存储方式是双精度浮点数，其长度为8个字节，即64位比特  
  
64位比特又可分为三个部分：  
  
- 符号位S：第 1 位是正负数符号位（sign），0代表正数，1代表负数  
- 指数位E：中间的 11 位存储指数（exponent），用来表示次方数，可以为正负数。在双精度浮点数中，指数的固定偏移量为1023  
- 尾数位M：最后的 52 位是尾数（mantissa），超出的部分自动进一舍零  
  
如下图所示：  
  
 ![](https://static.vue-js.com/430d0100-86f4-11eb-85f6-6fac77c0c9b3.png)  
  
举个例子：  
  
27.5 转换为二进制11011.1  
  
11011.1转换为科学记数法 ![[公式]](https://www.zhihu.com/equation?tex=1.10111%2A2%5E4)  
  
符号位为1(正数)，指数位为4+，1023+4，即1027  
  
因为它是十进制的需要转换为二进制，即 `10000000011`，小数部分为`10111`，补够52位即： 1011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000`  
  
所以27.5存储为计算机的二进制标准形式（符号位+指数位+小数部分 (阶数)），既下面所示  
  
0+10000000011+011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000`  
  
  
## 二、问题分析  
  
再回到问题上  
  
```js  
0.1 + 0.2 === 0.3 // false  
```  
  
通过上面的学习，我们知道，在`javascript`语言中，0.1 和 0.2 都转化成二进制后再进行运算  
  
```js  
// 0.1 和 0.2 都转化成二进制后再进行运算  
0.00011001100110011001100110011001100110011001100110011010 +  
0.0011001100110011001100110011001100110011001100110011010 =  
0.0100110011001100110011001100110011001100110011001100111  
  
// 转成十进制正好是 0.30000000000000004  
```  
  
所以输出`false`  
  
再来一个问题，那么为什么`x=0.1`得到`0.1`？  
  
主要是存储二进制时小数点的偏移量最大为52位，最多可以表达的位数是`2^53=9007199254740992`，对应科学计数尾数是 `9.007199254740992`，这也是 JS 最多能表示的精度  
  
它的长度是 16，所以可以使用 `toPrecision(16)` 来做精度运算，超过的精度会自动做凑整处理  
  
```js  
.10000000000000000555.toPrecision(16)  
// 返回 0.1000000000000000，去掉末尾的零后正好为 0.1  
```  
  
但看到的 `0.1` 实际上并不是 `0.1`。不信你可用更高的精度试试：  
  
```js  
0.1.toPrecision(21) = 0.100000000000000005551  
```  
  
如果整数大于 `9007199254740992` 会出现什么情况呢？  
  
由于指数位最大值是1023，所以最大可以表示的整数是 `2^1024 - 1`，这就是能表示的最大整数。但你并不能这样计算这个数字，因为从 `2^1024` 开始就变成了 `Infinity`  
  
```  
> Math.pow(2, 1023)  
8.98846567431158e+307  
  
> Math.pow(2, 1024)  
Infinity  
```  
  
那么对于 `(2^53, 2^63)` 之间的数会出现什么情况呢？  
  
- `(2^53, 2^54)` 之间的数会两个选一个，只能精确表示偶数  
- `(2^54, 2^55)` 之间的数会四个选一个，只能精确表示4个倍数  
- ... 依次跳过更多2的倍数  
  
要想解决大数的问题你可以引用第三方库 `bignumber.js`，原理是把所有数字当作字符串，重新实现了计算逻辑，缺点是性能比原生差很多  
  
### 小结  
  
计算机存储双精度浮点数需要先把十进制数转换为二进制的科学记数法的形式，然后计算机以自己的规则{符号位+(指数位+指数偏移量的二进制)+小数部分}存储二进制的科学记数法  
  
因为存储时有位数限制（64位），并且某些十进制的浮点数在转换为二进制数时会出现无限循环，会造成二进制的舍入操作(0舍1入)，当再转换为十进制时就造成了计算误差  
  
  
## 三、解决方案  
  
理论上用有限的空间来存储无限的小数是不可能保证精确的，但我们可以处理一下得到我们期望的结果  
  
当你拿到 `1.4000000000000001` 这样的数据要展示时，建议使用 `toPrecision` 凑整并 `parseFloat` 转成数字后再显示，如下：  
  
```  
parseFloat(1.4000000000000001.toPrecision(12)) === 1.4  // True  
```  
  
封装成方法就是：  
  
```js  
function strip(num, precision = 12) {  
  return +parseFloat(num.toPrecision(precision));  
}  
```  
  
对于运算类操作，如 `+-*/`，就不能使用 `toPrecision` 了。正确的做法是把小数转成整数后再运算。以加法为例：  
  
```js  
/**  
 * 精确加法  
 */  
function add(num1, num2) {  
  const num1Digits = (num1.toString().split('.')[1] || '').length;  
  const num2Digits = (num2.toString().split('.')[1] || '').length;  
  const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));  
  return (num1 * baseNum + num2 * baseNum) / baseNum;  
}  
```  
  
最后还可以使用第三方库，如`Math.js`、`BigDecimal.js`  
  
# Javascript中如何实现函数缓存？函数缓存有哪些应用场景？  
![](https://static.vue-js.com/2ae9dda0-85fa-11eb-ab90-d9ae814b240d.png)  
  
  
  
## 一、是什么  
  
函数缓存，就是将函数运算过的结果进行缓存  
  
本质上就是用空间（缓存存储）换时间（计算过程）  
  
常用于缓存数据计算结果和缓存对象  
  
```js  
const add = (a,b) => a+b;  
const calc = memoize(add); // 函数缓存  
calc(10,20);// 30  
calc(10,20);// 30 缓存  
```  
  
缓存只是一个临时的数据存储，它保存数据，以便将来对该数据的请求能够更快地得到处理  
  
  
  
## 二、如何实现  
  
实现函数缓存主要依靠闭包、柯里化、高阶函数，这里再简单复习下：  
  
### 闭包  
  
闭包可以理解成，函数 + 函数体内可访问的变量总和  
  
```js  
(function() {  
    var a = 1;  
    function add() {  
        const b = 2  
        let sum = b + a  
        console.log(sum); // 3  
    }  
    add()  
})()  
```  
  
`add `函数本身，以及其内部可访问的变量，即 `a = 1 `，这两个组合在⼀起就形成了闭包  
  
  
  
### 柯里化  
  
把接受多个参数的函数转换成接受一个单一参数的函数  
  
```js  
// 非函数柯里化  
var add = function (x,y) {  
    return x+y;  
}  
add(3,4) //7  
  
// 函数柯里化  
var add2 = function (x) {  
    //**返回函数**  
    return function (y) {  
        return x+y;  
    }  
}  
add2(3)(4) //7  
```  
  
将一个二元函数拆分成两个一元函数  
  
  
  
### 高阶函数  
  
通过接收其他函数作为参数或返回其他函数的函数  
  
```js  
function foo(){  
  var a = 2;  
  
  function bar() {  
    console.log(a);  
  }  
  return bar;  
}  
var baz = foo();  
baz();//2  
```  
  
函数 `foo` 如何返回另一个函数 `bar`，`baz` 现在持有对 `foo` 中定义的`bar` 函数的引用。由于闭包特性，`a`的值能够得到  
  
  
  
下面再看看如何实现函数缓存，实现原理也很简单，把参数和对应的结果数据存在一个对象中，调用时判断参数对应的数据是否存在，存在就返回对应的结果数据，否则就返回计算结果  
  
如下所示  
  
```js  
const memoize = function (func, content) {  
  let cache = Object.create(null)  
  content = content || this  
  return (...key) => {  
    if (!cache[key]) {  
      cache[key] = func.apply(content, key)  
    }  
    return cache[key]  
  }  
}  
```  
  
调用方式也很简单  
  
```js  
const calc = memoize(add);  
const num1 = calc(100,200)  
const num2 = calc(100,200) // 缓存得到的结果  
```  
  
过程分析：  
  
- 在当前函数作用域定义了一个空对象，用于缓存运行结果  
- 运用柯里化返回一个函数，返回的函数由于闭包特性，可以访问到`cache`  
- 然后判断输入参数是不是在`cache`的中。如果已经存在，直接返回`cache`的内容，如果没有存在，使用函数`func`对输入参数求值，然后把结果存储在`cache`中  
  
  
  
## 三、应用场景  
  
虽然使用缓存效率是非常高的，但并不是所有场景都适用，因此千万不要极端的将所有函数都添加缓存  
  
以下几种情况下，适合使用缓存：  
  
- 对于昂贵的函数调用，执行复杂计算的函数  
- 对于具有有限且高度重复输入范围的函数  
- 对于具有重复输入值的递归函数  
- 对于纯函数，即每次使用特定输入调用时返回相同输出的函数  
  
  
# Javascript本地存储的方式有哪些，有什么区别，及有哪些应用场景？  
![](https://static.vue-js.com/68dccf20-849f-11eb-ab90-d9ae814b240d.png)  
  
## 一、方式  
  
`javaScript`本地缓存的方法我们主要讲述以下四种：  
  
- cookie  
- sessionStorage  
- localStorage  
- indexedDB  
  
  
### cookie  
  
`Cookie`，类型为「小型文本文件」，指某些网站为了辨别用户身份而储存在用户本地终端上的数据。是为了解决 `HTTP `无状态导致的问题  
  
作为一段一般不超过 4KB 的小型文本数据，它由一个名称（Name）、一个值（Value）和其它几个用于控制 `cookie `有效期、安全性、使用范围的可选属性组成  
  
但是`cookie`在每次请求中都会被发送，如果不使用 `HTTPS `并对其加密，其保存的信息很容易被窃取，导致安全风险。举个例子，在一些使用 `cookie `保持登录态的网站上，如果 `cookie `被窃取，他人很容易利用你的 `cookie `来假扮成你登录网站  
  
关于`cookie`常用的属性如下：  
  
- Expires 用于设置 Cookie 的过期时间  
  
```js  
Expires=Wed, 21 Oct 2015 07:28:00 GMT  
```  
  
- Max-Age 用于设置在 Cookie 失效之前需要经过的秒数（优先级比`Expires`高）  
  
```js  
Max-Age=604800  
```  
  
- `Domain `指定了 `Cookie` 可以送达的主机名  
- `Path `指定了一个 `URL `路径，这个路径必须出现在要请求的资源的路径中才可以发送 `Cookie` 首部  
  
```js  
Path=/docs   # /docs/Web/ 下的资源会带 Cookie 首部  
```  
  
- 标记为 `Secure `的 `Cookie `只应通过被`HTTPS`协议加密过的请求发送给服务端  
  
通过上述，我们可以看到`cookie`又开始的作用并不是为了缓存而设计出来，只是借用了`cookie`的特性实现缓存  
  
关于`cookie`的使用如下：  
  
```js  
document.cookie = '名字=值';  
```  
  
关于`cookie`的修改，首先要确定`domain`和`path`属性都是相同的才可以，其中有一个不同得时候都会创建出一个新的`cookie`  
  
```js  
Set-Cookie:name=aa; domain=aa.net; path=/  # 服务端设置  
document.cookie =name=bb; domain=aa.net; path=/  # 客户端设置  
```  
  
最后`cookie`的删除，最常用的方法就是给`cookie`设置一个过期的事件，这样`cookie`过期后会被浏览器删除  
  
  
  
### localStorage  
  
`HTML5`新方法，IE8及以上浏览器都兼容  
  
### 特点  
  
- 生命周期：持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的  
- 存储的信息在同一域中是共享的  
- 当本页操作（新增、修改、删除）了`localStorage`的时候，本页面不会触发`storage`事件,但是别的页面会触发`storage`事件。  
- 大小：5M（跟浏览器厂商有关系）  
- `localStorage`本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡  
- 受同源策略的限制  
  
下面再看看关于`localStorage`的使用  
  
设置  
  
```js  
localStorage.setItem('username','cfangxu');  
```  
  
获取  
  
```js  
localStorage.getItem('username')  
```  
  
获取键名  
  
```js  
localStorage.key(0) //获取第一个键名  
```  
  
删除  
  
```js  
localStorage.removeItem('username')  
```  
  
一次性清除所有存储  
  
```js  
localStorage.clear()  
```  
  
`localStorage` 也不是完美的，它有两个缺点：  
  
- 无法像` Cookie `一样设置过期时间  
- 只能存入字符串，无法直接存对象  
  
```js  
localStorage.setItem('key', {name: 'value'});  
console.log(localStorage.getItem('key')); // '[object, Object]'  
```  
  
  
  
### sessionStorage  
  
`sessionStorage `和 `localStorage `使用方法基本一致，唯一不同的是生命周期，一旦页面（会话）关闭，`sessionStorage` 将会删除数据  
  
  
  
### 扩展的前端存储方式  
  
`indexedDB `是一种低级API，用于客户端存储大量结构化数据(包括, 文件/ blobs)。该API使用索引来实现对该数据的高性能搜索  
  
虽然 `Web Storage `对于存储较少量的数据很有用，但对于存储更大量的结构化数据来说，这种方法不太有用。`IndexedDB`提供了一个解决方案  
  
#### 优点：  
  
- 储存量理论上没有上限  
- 所有操作都是异步的，相比 `LocalStorage` 同步操作性能更高，尤其是数据量较大时  
- 原生支持储存` JS `的对象  
- 是个正经的数据库，意味着数据库能干的事它都能干  
  
#### 缺点：  
  
- 操作非常繁琐  
- 本身有一定门槛  
  
关于`indexedDB`的使用基本使用步骤如下：  
  
- 打开数据库并且开始一个事务  
  
- 创建一个 `object store`  
- 构建一个请求来执行一些数据库操作，像增加或提取数据等。  
- 通过监听正确类型的 `DOM` 事件以等待操作完成。  
- 在操作结果上进行一些操作（可以在 `request `对象中找到）  
  
关于使用`indexdb`的使用会比较繁琐，大家可以通过使用`Godb.js`库进行缓存，最大化的降低操作难度  
  
  
  
  
## 二、区别  
  
关于`cookie`、`sessionStorage`、`localStorage`三者的区别主要如下：  
  
- 存储大小：` cookie`数据大小不能超过`4k`，`sessionStorage`和`localStorage `虽然也有存储大小的限制，但比`cookie`大得多，可以达到5M或更大  
  
- 有效时间：` localStorage   `存储持久数据，浏览器关闭后数据不丢失除非主动删除数据； `sessionStorage  `数据在当前浏览器窗口关闭后自动删除；` cookie `设置的`cookie`过期时间之前一直有效，即使窗口或浏览器关闭  
  
- 数据与服务器之间的交互方式，`  cookie`的数据会自动的传递到服务器，服务器端也可以写`cookie`到客户端； `sessionStorage`和`localStorage`不会自动把数据发给服务器，仅在本地保存  
  
  
  
## 三、应用场景  
  
在了解了上述的前端的缓存方式后，我们可以看看针对不对场景的使用选择：  
  
- 标记用户与跟踪用户行为的情况，推荐使用`cookie`  
- 适合长期保存在本地的数据（令牌），推荐使用`localStorage`  
- 敏感账号一次性登录，推荐使用`sessionStorage`  
- 存储大量数据的情况、在线文档（富文本编辑器）保存编辑历史的情况，推荐使用`indexedDB`  
  
  
# 说说 JavaScript 中内存泄漏有哪几种情况？  
![](https://static.vue-js.com/19f76b30-824d-11eb-ab90-d9ae814b240d.png)  
  
## 一、是什么  
  
内存泄漏（Memory leak）是在计算机科学中，由于疏忽或错误造成程序未能释放已经不再使用的内存  
  
并非指内存在物理上的消失，而是应用程序分配某段内存后，由于设计错误，导致在释放该段内存之前就失去了对该段内存的控制，从而造成了内存的浪费  
  
程序的运行需要内存。只要程序提出要求，操作系统或者运行时就必须供给内存  
  
对于持续运行的服务进程，必须及时释放不再用到的内存。否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃  
  
 ![](https://static.vue-js.com/56d4bd90-821c-11eb-ab90-d9ae814b240d.png)  
  
在`C`语言中，因为是手动管理内存，内存泄露是经常出现的事情。  
  
```clang  
char * buffer;  
buffer = (char*) malloc(42);  
  
// Do something with buffer  
  
free(buffer);  
```  
  
上面是 C 语言代码，`malloc`方法用来申请内存，使用完毕之后，必须自己用`free`方法释放内存。  
  
这很麻烦，所以大多数语言提供自动内存管理，减轻程序员的负担，这被称为"垃圾回收机制"  
  
  
## 二、垃圾回收机制  
  
Javascript 具有自动垃圾回收机制（GC：Garbage Collecation），也就是说，执行环境会负责管理代码执行过程中使用的内存  
  
原理：垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存  
  
通常情况下有两种实现方式：  
  
- 标记清除  
- 引用计数  
  
  
  
### 标记清除  
  
`JavaScript`最常用的垃圾收回机制  
  
当变量进入执行环境是，就标记这个变量为“进入环境“。进入环境的变量所占用的内存就不能释放，当变量离开环境时，则将其标记为“离开环境“  
  
垃圾回收程序运行的时候，会标记内存中存储的所有变量。然后，它会将所有在上下文中的变量，以及被在上下文中的变量引用的变量的标记去掉  
  
在此之后再被加上标记的变量就是待删除的了，原因是任何在上下文中的变量都访问不到它们了  
  
随后垃圾回收程序做一次内存清理，销毁带标记的所有值并收回它们的内存  
  
举个例子：  
  
```js  
var m = 0,n = 19 // 把 m,n,add() 标记为进入环境。  
add(m, n) // 把 a, b, c标记为进入环境。  
console.log(n) // a,b,c标记为离开环境，等待垃圾回收。  
function add(a, b) {  
  a++  
  var c = a + b  
  return c  
}  
```  
  
  
  
### 引用计数  
  
语言引擎有一张"引用表"，保存了内存里面所有的资源（通常是各种值）的引用次数。如果一个值的引用次数是`0`，就表示这个值不再用到了，因此可以将这块内存释放  
  
如果一个值不再需要了，引用数却不为`0`，垃圾回收机制无法释放这块内存，从而导致内存泄漏  
  
```javascript  
const arr = [1, 2, 3, 4];  
console.log('hello world');  
```  
  
面代码中，数组`[1, 2, 3, 4]`是一个值，会占用内存。变量`arr`是仅有的对这个值的引用，因此引用次数为`1`。尽管后面的代码没有用到`arr`，它还是会持续占用内存  
  
如果需要这块内存被垃圾回收机制释放，只需要设置如下：  
  
```js  
arr = null  
```  
  
通过设置`arr`为`null`，就解除了对数组`[1,2,3,4]`的引用，引用次数变为 0，就被垃圾回收了  
  
  
  
### 小结  
  
有了垃圾回收机制，不代表不用关注内存泄露。那些很占空间的值，一旦不再用到，需要检查是否还存在对它们的引用。如果是的话，就必须手动解除引用  
  
  
  
## 三、常见内存泄露情况  
  
意外的全局变量  
  
```js  
function foo(arg) {  
    bar = "this is a hidden global variable";  
}  
```  
  
另一种意外的全局变量可能由 `this` 创建：  
  
```js  
function foo() {  
    this.variable = "potential accidental global";  
}  
// foo 调用自己，this 指向了全局对象（window）  
foo();  
```  
  
上述使用严格模式，可以避免意外的全局变量  
  
定时器也常会造成内存泄露  
  
```js  
var someResource = getData();  
setInterval(function() {  
    var node = document.getElementById('Node');  
    if(node) {  
        // 处理 node 和 someResource  
        node.innerHTML = JSON.stringify(someResource));  
    }  
}, 1000);  
```  
  
如果`id`为Node的元素从`DOM`中移除，该定时器仍会存在，同时，因为回调函数中包含对`someResource`的引用，定时器外面的`someResource`也不会被释放  
  
包括我们之前所说的闭包，维持函数内局部变量，使其得不到释放  
  
```js  
function bindEvent() {  
  var obj = document.createElement('XXX');  
  var unused = function () {  
    console.log(obj, '闭包内引用obj obj不会被释放');  
  };  
  obj = null; // 解决方法  
}  
```  
  
没有清理对`DOM`元素的引用同样造成内存泄露  
  
```js  
const refA = document.getElementById('refA');  
document.body.removeChild(refA); // dom删除了  
console.log(refA, 'refA'); // 但是还存在引用能console出整个div 没有被回收  
refA = null;  
console.log(refA, 'refA'); // 解除引用  
```  
  
包括使用事件监听`addEventListener`监听的时候，在不监听的情况下使用`removeEventListener`取消对事件监听  
  
# 说说你对BOM的理解，以及常见的BOM对象有哪些？  
 ![](https://static.vue-js.com/3e191c40-8089-11eb-85f6-6fac77c0c9b3.png)
  
## 一、是什么
  

  
`BOM` (Browser Object Model)，浏览器对象模型，提供了独立于内容与浏览器窗口进行交互的对象
  

  
其作用就是跟浏览器做一些交互效果,比如如何进行页面的后退，前进，刷新，浏览器的窗口发生变化，滚动条的滚动，以及获取客户的一些信息如：浏览器品牌版本，屏幕分辨率
  

  
浏览器的全部内容可以看成`DOM`，整个浏览器可以看成`BOM`。区别如下：
  

  
![](https://static.vue-js.com/482f33e0-8089-11eb-85f6-6fac77c0c9b3.png)
  
## 二、window
  

  
`Bom`的核心对象是`window`，它表示浏览器的一个实例
  

  
在浏览器中，`window`对象有双重角色，即是浏览器窗口的一个接口，又是全局对象
  

  
因此所有在全局作用域中声明的变量、函数都会变成`window`对象的属性和方法
  

  
```js
  
var name = 'js每日一题';
  
function lookName(){
  
  alert(this.name);
  
}
  

  
console.log(window.name);  //js每日一题
  
lookName();                //js每日一题
  
window.lookName();         //js每日一题
  
```
  

  
关于窗口控制方法如下：
  

  
- `moveBy(x,y)`：从当前位置水平移动窗体x个像素，垂直移动窗体y个像素，x为负数，将向左移动窗体，y为负数，将向上移动窗体
  
- `moveTo(x,y)`：移动窗体左上角到相对于屏幕左上角的(x,y)点
  
- `resizeBy(w,h)`：相对窗体当前的大小，宽度调整w个像素，高度调整h个像素。如果参数为负值，将缩小窗体，反之扩大窗体
  
- `resizeTo(w,h)`：把窗体宽度调整为w个像素，高度调整为h个像素
  
- `scrollTo(x,y)`：如果有滚动条，将横向滚动条移动到相对于窗体宽度为x个像素的位置，将纵向滚动条移动到相对于窗体高度为y个像素的位置
  
- `scrollBy(x,y)`： 如果有滚动条，将横向滚动条向左移动x个像素，将纵向滚动条向下移动y个像素
  

  
 `window.open()` 既可以导航到一个特定的`url`，也可以打开一个新的浏览器窗口
  

  
如果 `window.open()` 传递了第二个参数，且该参数是已有窗口或者框架的名称，那么就会在目标窗口加载第一个参数指定的URL
  

  
```js
  
window.open('htttp://www.vue3js.cn','topFrame')
  
==> < a href=" " target="topFrame"></ a>
  
```
  

  
`window.open()` 会返回新窗口的引用，也就是新窗口的 `window` 对象
  

  
```js
  
const myWin = window.open('http://www.vue3js.cn','myWin')
  
```
  

  
`window.close()` 仅用于通过 `window.open()` 打开的窗口
  

  
新创建的 `window` 对象有一个 `opener` 属性，该属性指向打开他的原始窗口对象
  

  

  
## 三、location
  

  
`url`地址如下：
  

  
```js
  
http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q=javascript#contents
  
```
  

  
`location`属性描述如下：
  

  
| 属性名   | 例子                                                   | 说明                                |
  
| -------- | ------------------------------------------------------ | ----------------------------------- |
  
| hash     | "#contents"                                            | utl中#后面的字符，没有则返回空串    |
  
| host     | www.wrox.com:80                                        | 服务器名称和端口号                  |
  
| hostname | www.wrox.com                                           | 域名，不带端口号                    |
  
| href     | http://www.wrox.com:80/WileyCDA/?q=javascript#contents | 完整url                             |
  
| pathname | "/WileyCDA/"                                           | 服务器下面的文件路径                |
  
| port     | 80                                                     | url的端口号，没有则为空             |
  
| protocol | http:                                                  | 使用的协议                          |
  
| search   | ?q=javascript                                          | url的查询字符串，通常为？后面的内容 |
  

  
除了 `hash `之外，只要修改` location `的一个属性，就会导致页面重新加载新` URL`
  

  
`location.reload()`，此方法可以重新刷新当前页面。这个方法会根据最有效的方式刷新页面，如果页面自上一次请求以来没有改变过，页面就会从浏览器缓存中重新加载
  

  
如果要强制从服务器中重新加载，传递一个参数`true`即可
  

  
## 四、navigator
  

  
`navigator` 对象主要用来获取浏览器的属性，区分浏览器类型。属性较多，且兼容性比较复杂
  

  
下表列出了`navigator`对象接口定义的属性和方法：
  

  
 ![](https://static.vue-js.com/6797ab40-8089-11eb-ab90-d9ae814b240d.png)
  

  
 ![](https://static.vue-js.com/74096620-8089-11eb-ab90-d9ae814b240d.png)
  

  

  

  
## 五、screen
  

  
保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息，比如像素宽度和像素高度
  

  
 ![](https://static.vue-js.com/7d6b21e0-8089-11eb-85f6-6fac77c0c9b3.png)
  

  

  

  
## 六、history
  

  
`history`对象主要用来操作浏览器`URL`的历史记录，可以通过参数向前，向后，或者向指定`URL`跳转
  

  
常用的属性如下：
  

  
- `history.go()`
  

  
接收一个整数数字或者字符串参数：向最近的一个记录中包含指定字符串的页面跳转，
  

  
```js
  
history.go('maixaofei.com')
  
```
  

  
当参数为整数数字的时候，正数表示向前跳转指定的页面，负数为向后跳转指定的页面
  

  
```js
  
history.go(3) //向前跳转三个记录
  
history.go(-1) //向后跳转一个记录
  
```
  

  
- `history.forward()`：向前跳转一个页面
  
- `history.back()`：向后跳转一个页面
  
- `history.length`：获取历史记录数
  
  
# 谈谈你知道的DOM常见的操作  
![](https://static.vue-js.com/a89c99a0-7fdc-11eb-ab90-d9ae814b240d.png)  
  
## 一、DOM  
  
文档对象模型 (DOM) 是 `HTML` 和 `XML` 文档的编程接口  
  
它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容  
  
任何 `HTML `或` XML `文档都可以用 `DOM `表示为一个由节点构成的层级结构  
  
节点分很多类型，每种类型对应着文档中不同的信息和（或）标记，也都有自己不同的特性、数据和方法，而且与其他类型有某种关系，如下所示：  
  
```html  
<html>  
    <head>  
        <title>Page</title>  
    </head>  
    <body>  
        <p>Hello World!</p >  
    </body>  
</html>  
```  
  
`DOM`像原子包含着亚原子微粒那样，也有很多类型的`DOM`节点包含着其他类型的节点。接下来我们先看看其中的三种：  
  
```html  
<div>  
    <p title="title">  
        content  
    </p >  
</div>  
```  
  
上述结构中，`div`、`p`就是元素节点，`content`就是文本节点，`title`就是属性节点  
  
  
  
## 二、操作  
  
日常前端开发，我们都离不开`DOM`操作  
  
在以前，我们使用`Jquery`，`zepto`等库来操作`DOM`，之后在`vue`，`Angular`，`React`等框架出现后，我们通过操作数据来控制`DOM`（绝大多数时候），越来越少的去直接操作`DOM`  
  
但这并不代表原生操作不重要。相反，`DOM`操作才能有助于我们理解框架深层的内容  
  
下面就来分析`DOM`常见的操作，主要分为：  
  
- 创建节点  
- 查询节点  
- 更新节点  
- 添加节点  
- 删除节点  
  
  
  
### 创建节点  
  
#### createElement  
  
创建新元素，接受一个参数，即要创建元素的标签名  
  
```js  
const divEl = document.createElement("div");  
```  
  
  
  
#### createTextNode  
  
创建一个文本节点  
  
```js  
const textEl = document.createTextNode("content");  
```  
  
  
  
#### createDocumentFragment  
  
用来创建一个文档碎片，它表示一种轻量级的文档，主要是用来存储临时节点，然后把文档碎片的内容一次性添加到`DOM`中  
  
```js  
const fragment = document.createDocumentFragment();  
```  
  
当请求把一个`DocumentFragment` 节点插入文档树时，插入的不是 `DocumentFragment `自身，而是它的所有子孙节点  
  
  
  
#### createAttribute  
  
创建属性节点，可以是自定义属性  
  
```js  
const dataAttribute = document.createAttribute('custom');  
consle.log(dataAttribute);  
```  
  
  
  
### 获取节点  
  
#### querySelector  
  
传入任何有效的` css` 选择器，即可选中单个 `DOM `元素（首个）：  
  
```js  
document.querySelector('.element')  
document.querySelector('#element')  
document.querySelector('div')  
document.querySelector('[name="username"]')  
document.querySelector('div + p > span')  
```  
  
如果页面上没有指定的元素时，返回 `null`  
  
  
  
#### querySelectorAll  
  
返回一个包含节点子树内所有与之相匹配的`Element`节点列表，如果没有相匹配的，则返回一个空节点列表  
  
```js  
const notLive = document.querySelectorAll("p");  
```  
  
需要注意的是，该方法返回的是一个 `NodeList `的静态实例，它是一个静态的“快照”，而非“实时”的查询  
  
  
  
  
  
关于获取`DOM`元素的方法还有如下，就不一一述说  
  
```js  
document.getElementById('id属性值');返回拥有指定id的对象的引用  
document.getElementsByClassName('class属性值');返回拥有指定class的对象集合  
document.getElementsByTagName('标签名');返回拥有指定标签名的对象集合  
document.getElementsByName('name属性值'); 返回拥有指定名称的对象结合  
document/element.querySelector('CSS选择器');  仅返回第一个匹配的元素  
document/element.querySelectorAll('CSS选择器');   返回所有匹配的元素  
document.documentElement;  获取页面中的HTML标签  
document.body; 获取页面中的BODY标签  
document.all[''];  获取页面中的所有元素节点的对象集合型  
```  
  
除此之外，每个`DOM`元素还有`parentNode`、`childNodes`、`firstChild`、`lastChild`、`nextSibling`、`previousSibling`属性，关系图如下图所示  
  
 ![](https://static.vue-js.com/c100f450-7fdc-11eb-ab90-d9ae814b240d.png)  
  
  
  
### 更新节点  
  
#### innerHTML  
  
不但可以修改一个`DOM`节点的文本内容，还可以直接通过`HTML`片段修改`DOM`节点内部的子树  
  
```js  
// 获取<p id="p">...</p >  
var p = document.getElementById('p');  
// 设置文本为abc:  
p.innerHTML = 'ABC'; // <p id="p">ABC</p >  
// 设置HTML:  
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';  
// <p>...</p >的内部结构已修改  
```  
  
  
  
#### innerText、textContent  
  
自动对字符串进行`HTML`编码，保证无法设置任何`HTML`标签  
  
```  
// 获取<p id="p-id">...</p >  
var p = document.getElementById('p-id');  
// 设置文本:  
p.innerText = '<script>alert("Hi")</script>';  
// HTML被自动编码，无法设置一个<script>节点:  
// <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p >  
```  
  
两者的区别在于读取属性时，`innerText`不返回隐藏元素的文本，而`textContent`返回所有文本  
  
  
  
#### style  
  
`DOM`节点的`style`属性对应所有的`CSS`，可以直接获取或设置。遇到`-`需要转化为驼峰命名  
  
```js  
// 获取<p id="p-id">...</p >  
const p = document.getElementById('p-id');  
// 设置CSS:  
p.style.color = '#ff0000';  
p.style.fontSize = '20px'; // 驼峰命名  
p.style.paddingTop = '2em';  
```  
  
  
  
  
  
### 添加节点  
  
#### innerHTML  
  
如果这个DOM节点是空的，例如，`<div></div>`，那么，直接使用`innerHTML = '<span>child</span>'`就可以修改`DOM`节点的内容，相当于添加了新的`DOM`节点  
  
如果这个DOM节点不是空的，那就不能这么做，因为`innerHTML`会直接替换掉原来的所有子节点  
  
  
  
#### appendChild  
  
把一个子节点添加到父节点的最后一个子节点  
  
举个例子  
  
```js  
<!-- HTML结构 -->  
<p id="js">JavaScript</p >  
<div id="list">  
    <p id="java">Java</p >  
    <p id="python">Python</p >  
    <p id="scheme">Scheme</p >  
</div>  
```  
  
添加一个`p`元素  
  
```js  
const js = document.getElementById('js')  
js.innerHTML = "JavaScript"  
const list = document.getElementById('list');  
list.appendChild(js);  
```  
  
现在`HTML`结构变成了下面  
  
```js  
<!-- HTML结构 -->  
<div id="list">  
    <p id="java">Java</p >  
    <p id="python">Python</p >  
    <p id="scheme">Scheme</p >  
    <p id="js">JavaScript</p >  <!-- 添加元素 -->  
</div>  
```  
  
上述代码中，我们是获取`DOM`元素后再进行添加操作，这个`js`节点是已经存在当前文档树中，因此这个节点首先会从原先的位置删除，再插入到新的位置  
  
如果动态添加新的节点，则先创建一个新的节点，然后插入到指定的位置  
  
```js  
const list = document.getElementById('list'),  
const haskell = document.createElement('p');  
haskell.id = 'haskell';  
haskell.innerText = 'Haskell';  
list.appendChild(haskell);  
```  
  
  
  
#### insertBefore  
  
把子节点插入到指定的位置，使用方法如下：  
  
```js  
parentElement.insertBefore(newElement, referenceElement)  
```  
  
子节点会插入到`referenceElement`之前  
  
  
  
#### setAttribute  
  
在指定元素中添加一个属性节点，如果元素中已有该属性改变属性值  
  
```js  
const div = document.getElementById('id')  
div.setAttribute('class', 'white');//第一个参数属性名，第二个参数属性值。  
```  
  
  
  
### 删除节点  
  
删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的`removeChild`把自己删掉  
  
```js  
// 拿到待删除节点:  
const self = document.getElementById('to-be-removed');  
// 拿到父节点:  
const parent = self.parentElement;  
// 删除:  
const removed = parent.removeChild(self);  
removed === self; // true  
```  
  
删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置  
  
# 说说你对事件循环的理解  
![](https://static.vue-js.com/50f062d0-7cb8-11eb-ab90-d9ae814b240d.png)
  

  
## 一、是什么
  
`JavaScript` 在设计之初便是单线程，即指程序运行时，只有一个线程存在，同一时间只能做一件事
  

  
为什么要这么设计，跟`JavaScript`的应用场景有关
  

  
`JavaScript` 初期作为一门浏览器脚本语言，通常用于操作 `DOM` ，如果是多线程，一个线程进行了删除 `DOM` ，另一个添加 `DOM`，此时浏览器该如何处理？
  

  
为了解决单线程运行阻塞问题，`JavaScript`用到了计算机系统的一种运行机制，这种机制就叫做事件循环（Event Loop）
  

  
#### 事件循环（Event Loop）
  

  
在`JavaScript`中，所有的任务都可以分为
  

  
- 同步任务：立即执行的任务，同步任务一般会直接进入到主线程中执行
  

  
- 异步任务：异步执行的任务，比如`ajax`网络请求，`setTimeout `定时函数等
  

  
同步任务与异步任务的运行流程图如下：
  

  
 ![](https://static.vue-js.com/61efbc20-7cb8-11eb-85f6-6fac77c0c9b3.png)
  

  
从上面我们可以看到，同步任务进入主线程，即主执行栈，异步任务进入任务队列，主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行。上述过程的不断重复就是事件循环
  

  

  

  
## 二、宏任务与微任务
  

  
如果将任务划分为同步任务和异步任务并不是那么的准确，举个例子：
  

  
```js
  
console.log(1)
  

  
setTimeout(()=>{
  
    console.log(2)
  
}, 0)
  

  
new Promise((resolve, reject)=>{
  
    console.log('new Promise')
  
    resolve()
  
}).then(()=>{
  
    console.log('then')
  
})
  

  
console.log(3)
  
```
  

  
如果按照上面流程图来分析代码，我们会得到下面的执行步骤：
  

  
- `console.log(1) `，同步任务，主线程中执行
  
- `setTimeout()` ，异步任务，放到 `Event Table`，0 毫秒后`console.log(2) `回调推入 `Event Queue` 中
  
- `new Promise` ，同步任务，主线程直接执行
  
- `.then` ，异步任务，放到 `Event Table`
  
- `console.log(3)`，同步任务，主线程执行
  

  
所以按照分析，它的结果应该是 `1` => `'new Promise'` => `3` => `2` => `'then'`
  

  
但是实际结果是：`1`=>`'new Promise'`=> `3` => `'then'` => `2`
  

  
出现分歧的原因在于异步任务执行顺序，事件队列其实是一个“先进先出”的数据结构，排在前面的事件会优先被主线程读取
  

  
例子中 `setTimeout`回调事件是先进入队列中的，按理说应该先于 `.then` 中的执行，但是结果却偏偏相反
  

  
原因在于异步任务还可以细分为微任务与宏任务
  

  
### 微任务
  

  
一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前
  

  
常见的微任务有：
  

  
- Promise.then
  

  
- MutaionObserver
  

  
- Object.observe（已废弃；Proxy 对象替代）
  

  
- process.nextTick（Node.js）
  

  
  
  

  
### 宏任务
  

  
宏任务的时间粒度比较大，执行的时间间隔是不能精确控制的，对一些高实时性的需求就不太符合
  

  
常见的宏任务有：
  

  
- script (可以理解为外层同步代码) 
  
- setTimeout/setInterval 
  
- UI rendering/UI事件 
  
- postMessage、MessageChannel 
  
- setImmediate、I/O（Node.js）
  

  

  

  
这时候，事件循环，宏任务，微任务的关系如图所示
  

  
 ![](https://static.vue-js.com/6e80e5e0-7cb8-11eb-85f6-6fac77c0c9b3.png)
  

  
按照这个流程，它的执行机制是：
  

  
- 执行一个宏任务，如果遇到微任务就将它放到微任务的事件队列中
  
- 当前宏任务执行完成后，会查看微任务的事件队列，然后将里面的所有微任务依次执行完
  

  

  

  
回到上面的题目
  

  
```js
  
console.log(1)
  
setTimeout(()=>{
  
    console.log(2)
  
}, 0)
  
new Promise((resolve, reject)=>{
  
    console.log('new Promise')
  
    resolve()
  
}).then(()=>{
  
    console.log('then')
  
})
  
console.log(3)
  
```
  

  
流程如下
  

  
```js
  
// 遇到 console.log(1) ，直接打印 1
  
// 遇到定时器，属于新的宏任务，留着后面执行
  
// 遇到 new Promise，这个是直接执行的，打印 'new Promise'
  
// .then 属于微任务，放入微任务队列，后面再执行
  
// 遇到 console.log(3) 直接打印 3
  
// 好了本轮宏任务执行完毕，现在去微任务列表查看是否有微任务，发现 .then 的回调，执行它，打印 'then'
  
// 当一次宏任务执行完，再去执行新的宏任务，这里就剩一个定时器的宏任务了，执行它，打印 2
  
```
  

  

  

  
## 三、async与await
  

  
`async` 是异步的意思，`await `则可以理解为等待
  

  
放到一起可以理解` async `就是用来声明一个异步方法，而 `await `是用来等待异步方法执行
  

  
### async
  

  
`async`函数返回一个`promise`对象，下面两种方法是等效的
  

  
```js
  
function f() {
  
    return Promise.resolve('TEST');
  
}
  

  
// asyncF is equivalent to f!
  
async function asyncF() {
  
    return 'TEST';
  
}
  
```
  

  
### await
  

  
正常情况下，`await`命令后面是一个 `Promise `对象，返回该对象的结果。如果不是 `Promise `对象，就直接返回对应的值
  

  
```js
  
async function f(){
  
    // 等同于
  
    // return 123
  
    return await 123
  
}
  
f().then(v => console.log(v)) // 123
  
```
  

  
不管`await`后面跟着的是什么，`await`都会阻塞后面的代码
  

  
```js
  
async function fn1 (){
  
    console.log(1)
  
    await fn2()
  
    console.log(2) // 阻塞
  
}
  

  
async function fn2 (){
  
    console.log('fn2')
  
}
  

  
fn1()
  
console.log(3)
  
```
  

  
上面的例子中，`await` 会阻塞下面的代码（即加入微任务队列），先执行 `async `外面的同步代码，同步代码执行完，再回到 `async` 函数中，再执行之前阻塞的代码
  

  
所以上述输出结果为：`1`，`fn2`，`3`，`2`
  

  

  

  
## 四、流程分析
  

  
通过对上面的了解，我们对`JavaScript`对各种场景的执行顺序有了大致的了解
  

  
这里直接上代码：
  

  
```js
  
async function async1() {
  
    console.log('async1 start')
  
    await async2()
  
    console.log('async1 end')
  
}
  
async function async2() {
  
    console.log('async2')
  
}
  
console.log('script start')
  
setTimeout(function () {
  
    console.log('settimeout')
  
})
  
async1()
  
new Promise(function (resolve) {
  
    console.log('promise1')
  
    resolve()
  
}).then(function () {
  
    console.log('promise2')
  
})
  
console.log('script end')
  
```
  

  
分析过程：
  

  
1. 执行整段代码，遇到 `console.log('script start')` 直接打印结果，输出 `script start`
  
2. 遇到定时器了，它是宏任务，先放着不执行
  
3. 遇到 `async1()`，执行 `async1` 函数，先打印 `async1 start`，下面遇到` await `怎么办？先执行 `async2`，打印 `async2`，然后阻塞下面代码（即加入微任务列表），跳出去执行同步代码
  
4. 跳到 `new Promise` 这里，直接执行，打印 `promise1`，下面遇到 `.then()`，它是微任务，放到微任务列表等待执行
  
5. 最后一行直接打印 `script end`，现在同步代码执行完了，开始执行微任务，即 `await `下面的代码，打印 `async1 end`
  
6. 继续执行下一个微任务，即执行 `then` 的回调，打印 `promise2`
  
7. 上一个宏任务所有事都做完了，开始下一个宏任务，就是定时器，打印 `settimeout`
  

  
所以最后的结果是：`script start`、`async1 start`、`async2`、`promise1`、`script end`、`async1 end`、`promise2`、`settimeout`  
# 正则表达式是什么，有哪些应用场景？  
![](https://static.vue-js.com/55388a40-7f1d-11eb-ab90-d9ae814b240d.png)  
  
## 一、是什么  
  
正则表达式是一种用来匹配字符串的强有力的武器  
  
它的设计思想是用一种描述性的语言定义一个规则，凡是符合规则的字符串，我们就认为它“匹配”了，否则，该字符串就是不合法的  
  
在 `JavaScript`中，正则表达式也是对象，构建正则表达式有两种方式：  
  
1. 字面量创建，其由包含在斜杠之间的模式组成  
  
```js  
const re = /\d+/g;  
```  
  
2. 调用`RegExp`对象的构造函数  
  
```js  
const re = new RegExp("\\d+","g");  
  
const rul = "\\d+"  
const re1 = new RegExp(rul,"g");  
```  
  
使用构建函数创建，第一个参数可以是一个变量，遇到特殊字符`\`需要使用`\\`进行转义  
  
  
  
## 二、匹配规则  
  
常见的校验规则如下：  
  
| 规则        | 描述                                                  |  
| ----------- | ----------------------------------------------------- |  
| \           | 转义                                                  |  
| ^           | 匹配输入的开始                                        |  
| $           | 匹配输入的结束                                        |  
| *           | 匹配前一个表达式 0 次或多次                           |  
| +           | 匹配前面一个表达式 1 次或者多次。等价于 `{1,}`        |  
| ?           | 匹配前面一个表达式 0 次或者 1 次。等价于`{0,1}`       |  
| .           | 默认匹配除换行符之外的任何单个字符                    |  
| x(?=y)      | 匹配'x'仅仅当'x'后面跟着'y'。这种叫做先行断言         |  
| (?<=y)x     | 匹配'x'仅当'x'前面是'y'.这种叫做后行断言              |  
| x(?!y)      | 仅仅当'x'后面不跟着'y'时匹配'x'，这被称为正向否定查找 |  
| (?<!*y*)*x* | 仅仅当'x'前面不是'y'时匹配'x'，这被称为反向否定查找   |  
| x\|y        | 匹配‘x’或者‘y’                                        |  
| {n}         | n 是一个正整数，匹配了前面一个字符刚好出现了 n 次     |  
| {n,}        | n是一个正整数，匹配前一个字符至少出现了n次            |  
| {n,m}       | n 和 m 都是整数。匹配前面的字符至少n次，最多m次       |  
| [xyz\]      | 一个字符集合。匹配方括号中的任意字符                  |  
| [^xyz\]     | 匹配任何没有包含在方括号中的字符                      |  
| \b          | 匹配一个词的边界，例如在字母和空格之间                |  
| \B          | 匹配一个非单词边界                                    |  
| \d          | 匹配一个数字                                          |  
| \D          | 匹配一个非数字字符                                    |  
| \f          | 匹配一个换页符                                        |  
| \n          | 匹配一个换行符                                        |  
| \r          | 匹配一个回车符                                        |  
| \s          | 匹配一个空白字符，包括空格、制表符、换页符和换行符    |  
| \S          | 匹配一个非空白字符                                    |  
| \w          | 匹配一个单字字符（字母、数字或者下划线）              |  
| \W          | 匹配一个非单字字符                                    |  
  
### 正则表达式标记  
  
| 标志 | 描述                                                      |  
| :--- | :-------------------------------------------------------- |  
| `g`  | 全局搜索。                                                |  
| `i`  | 不区分大小写搜索。                                        |  
| `m`  | 多行搜索。                                                |  
| `s`  | 允许 `.` 匹配换行符。                                     |  
| `u`  | 使用`unicode`码的模式进行匹配。                           |  
| `y`  | 执行“粘性(`sticky`)”搜索,匹配从目标字符串的当前位置开始。 |  
  
使用方法如下：  
  
```js  
var re = /pattern/flags;  
var re = new RegExp("pattern", "flags");  
```  
  
在了解下正则表达式基本的之外，还可以掌握几个正则表达式的特性：  
  
### 贪婪模式  
  
在了解贪婪模式前，首先举个例子：  
  
```js  
const reg = /ab{1,3}c/  
```  
  
在匹配过程中，尝试可能的顺序是从多往少的方向去尝试。首先会尝试`bbb`，然后再看整个正则是否能匹配。不能匹配时，吐出一个`b`，即在`bb`的基础上，再继续尝试，以此重复  
  
如果多个贪婪量词挨着，则深度优先搜索  
  
```js  
const string = "12345";  
const regx = /(\d{1,3})(\d{1,3})/;  
console.log( string.match(reg) );  
// => ["12345", "123", "45", index: 0, input: "12345"]  
```  
  
其中，前面的`\d{1,3}`匹配的是"123"，后面的`\d{1,3}`匹配的是"45"  
  
### 懒惰模式  
  
惰性量词就是在贪婪量词后面加个问号。表示尽可能少的匹配  
  
```js  
var string = "12345";  
var regex = /(\d{1,3}?)(\d{1,3})/;  
console.log( string.match(regex) );  
// => ["1234", "1", "234", index: 0, input: "12345"]  
```  
  
其中`\d{1,3}?`只匹配到一个字符"1"，而后面的`\d{1,3}`匹配了"234"  
  
### 分组  
  
分组主要是用过`()`进行实现，比如`beyond{3}`，是匹配`d`字母3次。而`(beyond){3}`是匹配`beyond`三次  
  
在`()`内使用`|`达到或的效果，如`(abc | xxx)`可以匹配`abc`或者`xxx`  
  
反向引用，巧用`$`分组捕获  
  
```js  
let str = "John Smith";  
  
// 交换名字和姓氏  
console.log(str.replace(/(john) (smith)/i, '$2, $1')) // Smith, John  
```  
  
  
  
  
  
## 三、匹配方法  
  
正则表达式常被用于某些方法，我们可以分成两类：  
  
- 字符串（str）方法：`match`、`matchAll`、`search`、`replace`、`split`  
- 正则对象下（regexp）的方法：`test`、`exec`  
  
| 方法     | 描述                                                         |  
| :------- | :----------------------------------------------------------- |  
| exec     | 一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回 null）。 |  
| test     | 一个在字符串中测试是否匹配的RegExp方法，它返回 true 或 false。 |  
| match    | 一个在字符串中执行查找匹配的String方法，它返回一个数组，在未匹配到时会返回 null。 |  
| matchAll | 一个在字符串中执行查找所有匹配的String方法，它返回一个迭代器（iterator）。 |  
| search   | 一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。 |  
| replace  | 一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。 |  
| split    | 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 `String` 方法。 |  
  
  
  
### str.match(regexp)  
  
`str.match(regexp)` 方法在字符串 `str` 中找到匹配 `regexp` 的字符  
  
如果 `regexp` 不带有 `g` 标记，则它以数组的形式返回第一个匹配项，其中包含分组和属性 `index`（匹配项的位置）、`input`（输入字符串，等于 `str`）  
  
```js  
let str = "I love JavaScript";  
  
let result = str.match(/Java(Script)/);  
  
console.log( result[0] );     // JavaScript（完全匹配）  
console.log( result[1] );     // Script（第一个分组）  
console.log( result.length ); // 2  
  
// 其他信息：  
console.log( result.index );  // 7（匹配位置）  
console.log( result.input );  // I love JavaScript（源字符串）  
```  
  
如果 `regexp` 带有 `g` 标记，则它将所有匹配项的数组作为字符串返回，而不包含分组和其他详细信息  
  
```js  
let str = "I love JavaScript";  
  
let result = str.match(/Java(Script)/g);  
  
console.log( result[0] ); // JavaScript  
console.log( result.length ); // 1  
```  
  
如果没有匹配项，则无论是否带有标记 `g` ，都将返回 `null`  
  
```js  
let str = "I love JavaScript";  
  
let result = str.match(/HTML/);  
  
console.log(result); // null  
```  
  
  
  
### str.matchAll(regexp)  
  
返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器  
  
```js  
const regexp = /t(e)(st(\d?))/g;  
const str = 'test1test2';  
  
const array = [...str.matchAll(regexp)];  
  
console.log(array[0]);  
// expected output: Array ["test1", "e", "st1", "1"]  
  
console.log(array[1]);  
// expected output: Array ["test2", "e", "st2", "2"]  
```  
  
  
  
  
  
  
  
### str.search(regexp)  
  
返回第一个匹配项的位置，如果未找到，则返回 `-1`  
  
```js  
let str = "A drop of ink may make a million think";  
  
console.log( str.search( /ink/i ) ); // 10（第一个匹配位置）  
```  
  
这里需要注意的是，`search` 仅查找第一个匹配项  
  
  
  
  
  
  
  
## str.replace(regexp)  
  
替换与正则表达式匹配的子串，并返回替换后的字符串。在不设置全局匹配`g`的时候，只替换第一个匹配成功的字符串片段  
  
```js  
const reg1=/javascript/i;  
const reg2=/javascript/ig;  
console.log('hello Javascript Javascript Javascript'.replace(reg1,'js'));  
//hello js Javascript Javascript  
console.log('hello Javascript Javascript Javascript'.replace(reg2,'js'));  
//hello js js js  
```  
  
  
  
### str.split(regexp)  
  
使用正则表达式（或子字符串）作为分隔符来分割字符串  
  
```js  
console.log('12, 34, 56'.split(/,\s*/)) // 数组 ['12', '34', '56']  
```  
  
  
  
### regexp.exec(str)  
  
`regexp.exec(str)` 方法返回字符串 `str` 中的 `regexp` 匹配项，与以前的方法不同，它是在正则表达式而不是字符串上调用的  
  
根据正则表达式是否带有标志 `g`，它的行为有所不同  
  
如果没有 `g`，那么 `regexp.exec(str)` 返回的第一个匹配与 `str.match(regexp)` 完全相同  
  
如果有标记 `g`，调用 `regexp.exec(str)` 会返回第一个匹配项，并将紧随其后的位置保存在属性`regexp.lastIndex` 中。 下一次同样的调用会从位置 `regexp.lastIndex` 开始搜索，返回下一个匹配项，并将其后的位置保存在 `regexp.lastIndex` 中  
  
```js  
let str = 'More about JavaScript at https://javascript.info';  
let regexp = /javascript/ig;  
  
let result;  
  
while (result = regexp.exec(str)) {  
  console.log( `Found ${result[0]} at position ${result.index}` );  
  // Found JavaScript at position 11  
  // Found javascript at position 33  
}  
```  
  
  
  
### regexp.test(str)  
  
查找匹配项，然后返回 `true/false` 表示是否存在  
  
```js  
let str = "I love JavaScript";  
  
// 这两个测试相同  
console.log( /love/i.test(str) ); // true  
```  
  
  
  
  
  
## 四、应用场景  
  
通过上面的学习，我们对正则表达式有了一定的了解  
  
下面再来看看正则表达式一些案例场景：  
  
验证QQ合法性（5~15位、全是数字、不以0开头）：  
  
```js  
const reg = /^[1-9][0-9]{4,14}$/  
const isvalid = patrn.exec(s)  
```  
  
校验用户账号合法性（只能输入5-20个以字母开头、可带数字、“_”、“.”的字串）：  
  
```js  
var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;  
const isvalid = patrn.exec(s)  
```  
  
将`url`参数解析为对象  
  
```js  
const protocol = '(?<protocol>https?:)';  
const host = '(?<host>(?<hostname>[^/#?:]+)(?::(?<port>\\d+))?)';  
const path = '(?<pathname>(?:\\/[^/#?]+)*\\/?)';  
const search = '(?<search>(?:\\?[^#]*)?)';  
const hash = '(?<hash>(?:#.*)?)';  
const reg = new RegExp(`^${protocol}\/\/${host}${path}${search}${hash}$`);  
function execURL(url){  
    const result = reg.exec(url);  
    if(result){  
        result.groups.port = result.groups.port || '';  
        return result.groups;  
    }  
    return {  
        protocol:'',host:'',hostname:'',port:'',  
        pathname:'',search:'',hash:'',  
    };  
}  
  
console.log(execURL('https://localhost:8080/?a=b#xxxx'));  
protocol: "https:"  
host: "localhost:8080"  
hostname: "localhost"  
port: "8080"  
pathname: "/"  
search: "?a=b"  
hash: "#xxxx"  
```  
  
再将上面的`search`和`hash`进行解析  
  
```js  
function execUrlParams(str){  
    str = str.replace(/^[#?&]/,'');  
    const result = {};  
    if(!str){ //如果正则可能配到空字符串，极有可能造成死循环，判断很重要  
        return result;   
    }  
    const reg = /(?:^|&)([^&=]*)=?([^&]*?)(?=&|$)/y  
    let exec = reg.exec(str);  
    while(exec){  
        result[exec[1]] = exec[2];  
        exec = reg.exec(str);  
    }  
    return result;  
}  
console.log(execUrlParams('#'));// {}  
console.log(execUrlParams('##'));//{'#':''}  
console.log(execUrlParams('?q=3606&src=srp')); //{q: "3606", src: "srp"}  
console.log(execUrlParams('test=a=b=c&&==&a='));//{test: "a=b=c", "": "=", a: ""}  
```  
  
# 说说ajax的原理，以及如何实现？  
![](https://static.vue-js.com/a35a2950-7b2a-11eb-ab90-d9ae814b240d.png)
  

  
## 一、是什么
  

  
`AJAX `全称(Async Javascript and XML)
  

  
即异步的` JavaScript` 和` XML`，是一种创建交互式网页应用的网页开发技术，可以在不重新加载整个网页的情况下，与服务器交换数据，并且更新部分网页
  

  
`Ajax`的原理简单来说通过`XmlHttpRequest`对象来向服务器发异步请求，从服务器获得数据，然后用`JavaScript`来操作`DOM`而更新页面
  

  
流程图如下：
  

  
 ![](https://static.vue-js.com/af42de10-7b2a-11eb-85f6-6fac77c0c9b3.png)
  

  
下面举个例子：
  

  
领导想找小李汇报一下工作，就委托秘书去叫小李，自己就接着做其他事情，直到秘书告诉他小李已经到了，最后小李跟领导汇报工作
  

  
`Ajax`请求数据流程与“领导想找小李汇报一下工作”类似，上述秘书就相当于`XMLHttpRequest`对象，领导相当于浏览器，响应数据相当于小李
  

  
浏览器可以发送`HTTP`请求后，接着做其他事情，等收到`XHR`返回来的数据再进行操作
  

  

  

  
## 二、实现过程
  

  
实现 `Ajax `异步交互需要服务器逻辑进行配合，需要完成以下步骤：
  

  
- 创建 `Ajax `的核心对象 `XMLHttpRequest `对象
  

  
- 通过 `XMLHttpRequest` 对象的 `open()` 方法与服务端建立连接
  

  
- 构建请求所需的数据内容，并通过` XMLHttpRequest` 对象的 `send()` 方法发送给服务器端
  

  
- 通过 `XMLHttpRequest` 对象提供的 `onreadystatechange` 事件监听服务器端你的通信状态
  

  
- 接受并处理服务端向客户端响应的数据结果
  

  
- 将处理结果更新到 `HTML `页面中
  

  

  

  
### 创建XMLHttpRequest对象
  

  
通过`XMLHttpRequest()` 构造函数用于初始化一个 `XMLHttpRequest` 实例对象
  

  
```js
  
const xhr = new XMLHttpRequest();
  
```
  

  

  

  
### 与服务器建立连接
  

  
通过 `XMLHttpRequest` 对象的 `open()` 方法与服务器建立连接
  

  
```js
  
xhr.open(method, url, [async][, user][, password])
  
```
  

  
参数说明：
  

  
- `method`：表示当前的请求方式，常见的有`GET`、`POST`
  

  
- `url`：服务端地址
  

  
- `async`：布尔值，表示是否异步执行操作，默认为`true`
  

  
-  `user`: 可选的用户名用于认证用途；默认为`null
  

  

  
- `password`: 可选的密码用于认证用途，默认为`null
  

  

  

  
### 给服务端发送数据
  

  
通过 `XMLHttpRequest` 对象的 `send()` 方法，将客户端页面的数据发送给服务端
  

  
```js
  
xhr.send([body])
  
```
  

  
`body`: 在 `XHR` 请求中要发送的数据体，如果不传递数据则为 `null`
  

  
如果使用`GET`请求发送数据的时候，需要注意如下：
  

  
- 将请求数据添加到`open()`方法中的`url`地址中
  
- 发送请求数据中的`send()`方法中参数设置为`null`
  

  

  

  
### 绑定onreadystatechange事件
  

  
`onreadystatechange` 事件用于监听服务器端的通信状态，主要监听的属性为`XMLHttpRequest.readyState` ,
  

  
关于`XMLHttpRequest.readyState`属性有五个状态，如下图显示
  

  
![](https://static.vue-js.com/9782fc90-7b31-11eb-ab90-d9ae814b240d.png)
  

  
只要 `readyState `属性值一变化，就会触发一次 `readystatechange` 事件
  

  
`XMLHttpRequest.responseText`属性用于接收服务器端的响应结果
  

  
举个例子：
  

  
```js
  
const request = new XMLHttpRequest()
  
request.onreadystatechange = function(e){
  
    if(request.readyState === 4){ // 整个请求过程完毕
  
        if(request.status >= 200 && request.status <= 300){
  
            console.log(request.responseText) // 服务端返回的结果
  
        }else if(request.status >=400){
  
            console.log("错误信息：" + request.status)
  
        }
  
    }
  
}
  
request.open('POST','http://xxxx')
  
request.send()
  
```
  

  

  

  

  

  
## 三、封装
  

  
通过上面对`XMLHttpRequest `对象的了解，下面来封装一个简单的`ajax`请求
  

  
```js
  
//封装一个ajax请求
  
function ajax(options) {
  
    //创建XMLHttpRequest对象
  
    const xhr = new XMLHttpRequest()
  

  

  
    //初始化参数的内容
  
    options = options || {}
  
    options.type = (options.type || 'GET').toUpperCase()
  
    options.dataType = options.dataType || 'json'
  
    const params = options.data
  

  
    //发送请求
  
    if (options.type === 'GET') {
  
        xhr.open('GET', options.url + '?' + params, true)
  
        xhr.send(null)
  
    } else if (options.type === 'POST') {
  
        xhr.open('POST', options.url, true)
  
        xhr.send(params)
  

  
    //接收请求
  
    xhr.onreadystatechange = function () {
  
        if (xhr.readyState === 4) {
  
            let status = xhr.status
  
            if (status >= 200 && status < 300) {
  
                options.success && options.success(xhr.responseText, xhr.responseXML)
  
            } else {
  
                options.fail && options.fail(status)
  
            }
  
        }
  
    }
  
}
  
```
  

  
使用方式如下
  

  
```js
  
ajax({
  
    type: 'post',
  
    dataType: 'json',
  
    data: {},
  
    url: 'https://xxxx',
  
    success: function(text,xml){//请求成功后的回调函数
  
        console.log(text)
  
    },
  
    fail: function(status){////请求失败后的回调函数
  
        console.log(status)
  
    }
  
})
  
```  
# 说说new操作符具体干了什么？  
![](https://static.vue-js.com/880d0010-7a39-11eb-85f6-6fac77c0c9b3.png)
  

  
## 一、是什么
  

  
在`JavaScript`中，`new`操作符用于创建一个给定构造函数的实例对象
  

  
例子
  

  
```js
  
function Person(name, age){
  
    this.name = name;
  
    this.age = age;
  
}
  
Person.prototype.sayName = function () {
  
    console.log(this.name)
  
}
  
const person1 = new Person('Tom', 20)
  
console.log(person1)  // Person {name: "Tom", age: 20}
  
t.sayName() // 'Tom'
  
```
  

  
从上面可以看到：
  

  
- `new` 通过构造函数 `Person` 创建出来的实例可以访问到构造函数中的属性
  
- `new` 通过构造函数 `Person` 创建出来的实例可以访问到构造函数原型链中的属性（即实例与构造函数通过原型链连接了起来）
  

  
现在在构建函数中显式加上返回值，并且这个返回值是一个原始类型
  

  
```js
  
function Test(name) {
  
  this.name = name
  
  return 1
  
}
  
const t = new Test('xxx')
  
console.log(t.name) // 'xxx'
  
```
  

  
可以发现，构造函数中返回一个原始值，然而这个返回值并没有作用
  

  
下面在构造函数中返回一个对象
  

  
```js
  
function Test(name) {
  
  this.name = name
  
  console.log(this) // Test { name: 'xxx' }
  
  return { age: 26 }
  
}
  
const t = new Test('xxx')
  
console.log(t) // { age: 26 }
  
console.log(t.name) // 'undefined'
  
```
  

  
从上面可以发现，构造函数如果返回值为一个对象，那么这个返回值会被正常使用
  

  

  

  
## 二、流程
  

  
从上面介绍中，我们可以看到`new`关键字主要做了以下的工作：
  

  
- 创建一个新的对象`obj`
  
- 将对象与构建函数通过原型链连接起来
  
- 将构建函数中的`this`绑定到新建的对象`obj`上
  

  
- 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理
  

  
举个例子：
  

  
```js
  
function Person(name, age){
  
    this.name = name;
  
    this.age = age;
  
}
  
const person1 = new Person('Tom', 20)
  
console.log(person1)  // Person {name: "Tom", age: 20}
  
t.sayName() // 'Tom'
  
```
  

  
流程图如下：
  

  
 ![](https://static.vue-js.com/b429b990-7a39-11eb-85f6-6fac77c0c9b3.png)
  

  

  

  
## 三、手写new操作符
  

  
现在我们已经清楚地掌握了`new`的执行过程
  

  
那么我们就动手来实现一下`new`
  

  
```js
  
function mynew(Func, ...args) {
  
    // 1.创建一个新对象
  
    const obj = {}
  
    // 2.新对象原型指向构造函数原型对象
  
    obj.__proto__ = Func.prototype
  
    // 3.将构建函数的this指向新对象
  
    let result = Func.apply(obj, args)
  
    // 4.根据返回值判断
  
    return result instanceof Object ? result : obj
  
}
  
```
  

  
测试一下
  

  
```js
  
function mynew(func, ...args) {
  
    const obj = {}
  
    obj.__proto__ = func.prototype
  
    let result = func.apply(obj, args)
  
    return result instanceof Object ? result : obj
  
}
  
function Person(name, age) {
  
    this.name = name;
  
    this.age = age;
  
}
  
Person.prototype.say = function () {
  
    console.log(this.name)
  
}
  

  
let p = mynew(Person, "huihui", 123)
  
console.log(p) // Person {name: "huihui", age: 123}
  
p.say() // huihui
  
```
  

  
可以发现，代码虽然很短，但是能够模拟实现`new`  
# 什么是事件代理，以及它的应用场景有哪些？  
![](https://static.vue-js.com/a33f0ab0-797e-11eb-ab90-d9ae814b240d.png)
  

  
## 一、是什么
  

  
事件代理，俗地来讲，就是把一个元素响应事件（`click`、`keydown`......）的函数委托到另一个元素
  

  
前面讲到，事件流的都会经过三个阶段： 捕获阶段 -> 目标阶段 -> 冒泡阶段，而事件委托就是在冒泡阶段完成
  

  
事件委托，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，而不是目标元素
  

  
当事件响应到目标元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数
  

  
下面举个例子：
  

  
比如一个宿舍的同学同时快递到了，一种笨方法就是他们一个个去领取
  

  
较优方法就是把这件事情委托给宿舍长，让一个人出去拿好所有快递，然后再根据收件人一一分发给每个同学
  

  
在这里，取快递就是一个事件，每个同学指的是需要响应事件的 `DOM `元素，而出去统一领取快递的宿舍长就是代理的元素
  

  
所以真正绑定事件的是这个元素，按照收件人分发快递的过程就是在事件执行中，需要判断当前响应的事件应该匹配到被代理元素中的哪一个或者哪几个
  

  

  

  
## 二、应用场景
  

  
如果我们有一个列表，列表之中有大量的列表项，我们需要在点击列表项的时候响应一个事件
  

  
```js
  
<ul id="list">
  
  <li>item 1</li>
  
  <li>item 2</li>
  
  <li>item 3</li>
  
  ......
  
  <li>item n</li>
  
</ul>
  
```
  

  
如果给每个列表项一一都绑定一个函数，那对于内存消耗是非常大的
  

  
```js
  
// 获取目标元素
  
const lis = document.getElementsByTagName("li")
  
// 循环遍历绑定事件
  
for (let i = 0; i < lis.length; i++) {
  
    lis[i].onclick = function(e){
  
        console.log(e.target.innerHTML)
  
    }
  
}
  
```
  

  
这时候就可以事件委托，把点击事件绑定在父级元素`ul`上面，然后执行事件的时候再去匹配目标元素
  

  
```js
  
// 给父层元素绑定事件
  
document.getElementById('list').addEventListener('click', function (e) {
  
    // 兼容性处理
  
    var event = e || window.event;
  
    var target = event.target || event.srcElement;
  
    // 判断是否匹配目标元素
  
    if (target.nodeName.toLocaleLowerCase === 'li') {
  
        console.log('the content is: ', target.innerHTML);
  
    }
  
});
  
```
  

  
还有一种场景是上述列表项并不多，我们给每个列表项都绑定了事件
  

  
但是如果用户能够随时动态的增加或者去除列表项元素，那么在每一次改变的时候都需要重新给新增的元素绑定事件，给即将删去的元素解绑事件
  

  
如果用了事件委托就没有这种麻烦了，因为事件是绑定在父层的，和目标元素的增减是没有关系的，执行到目标元素是在真正响应执行事件函数的过程中去匹配的
  

  
举个例子：
  

  
下面`html`结构中，点击`input`可以动态添加元素
  

  
```html
  
<input type="button" name="" id="btn" value="添加" />
  
<ul id="ul1">
  
    <li>item 1</li>
  
    <li>item 2</li>
  
    <li>item 3</li>
  
    <li>item 4</li>
  
</ul>
  
```
  

  
使用事件委托
  

  
```js
  
const oBtn = document.getElementById("btn");
  
const oUl = document.getElementById("ul1");
  
const num = 4;
  

  
//事件委托，添加的子元素也有事件
  
oUl.onclick = function (ev) {
  
    ev = ev || window.event;
  
    const target = ev.target || ev.srcElement;
  
    if (target.nodeName.toLowerCase() == 'li') {
  
        console.log('the content is: ', target.innerHTML);
  
    }
  

  
};
  

  
//添加新节点
  
oBtn.onclick = function () {
  
    num++;
  
    const oLi = document.createElement('li');
  
    oLi.innerHTML = `item ${num}`;
  
    oUl.appendChild(oLi);
  
};
  
```
  

  
可以看到，使用事件委托，在动态绑定事件的情况下是可以减少很多重复工作的
  

  

  

  
## 三、总结
  

  
适合事件委托的事件有：`click`，`mousedown`，`mouseup`，`keydown`，`keyup`，`keypress`
  

  
从上面应用场景中，我们就可以看到使用事件委托存在两大优点：
  

  
- 减少整个页面所需的内存，提升整体性能
  
- 动态绑定，减少重复工作
  

  
但是使用事件委托也是存在局限性：
  

  
- `focus`、`blur `这些事件没有事件冒泡机制，所以无法进行委托绑定事件
  

  
- `mousemove`、`mouseout `这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的
  

  
如果把所有事件都用事件代理，可能会出现事件误判，即本不该被触发的事件被绑定上了事件  
# typeof 与 instanceof 有什么区别  
![](https://static.vue-js.com/3fc158f0-7710-11eb-ab90-d9ae814b240d.png)
  

  

  

  
## 一、typeof
  

  
`typeof` 操作符返回一个字符串，表示未经计算的操作数的类型
  

  
使用方法如下：
  

  
```js
  
typeof operand
  
typeof(operand)
  
```
  

  
`operand`表示对象或原始值的表达式，其类型将被返回
  

  
举个例子
  

  
```js
  
typeof 1 // 'number'
  
typeof '1' // 'string'
  
typeof undefined // 'undefined'
  
typeof true // 'boolean'
  
typeof Symbol() // 'symbol'
  
typeof null // 'object'
  
typeof [] // 'object'
  
typeof {} // 'object'
  
typeof console // 'object'
  
typeof console.log // 'function'
  
```
  

  
从上面例子，前6个都是基础数据类型。虽然`typeof null`为`object`，但这只是` JavaScript` 存在的一个悠久 `Bug`，不代表`null `就是引用数据类型，并且`null `本身也不是对象
  

  
所以，`null `在 `typeof `之后返回的是有问题的结果，不能作为判断` null `的方法。如果你需要在 `if` 语句中判断是否为 `null`，直接通过`===null`来判断就好
  

  
同时，可以发现引用类型数据，用`typeof`来判断的话，除了`function`会被识别出来之外，其余的都输出`object`
  

  
如果我们想要判断一个变量是否存在，可以使用`typeof`：(不能使用`if(a)`， 若`a`未声明，则报错)
  

  
```js
  
if(typeof a != 'undefined'){
  
    //变量存在
  
}
  
```
  

  

  

  
## 二、instanceof
  

  
`instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上
  

  
使用如下：
  

  
```js
  
object instanceof constructor
  
```
  

  
`object`为实例对象，`constructor`为构造函数
  

  
构造函数通过`new`可以实例对象，`instanceof `能判断这个对象是否是之前那个构造函数生成的对象
  

  
```js
  
// 定义构建函数
  
let Car = function() {}
  
let benz = new Car()
  
benz instanceof Car // true
  
let car = new String('xxx')
  
car instanceof String // true
  
let str = 'xxx'
  
str instanceof String // false
  
```
  

  
关于`instanceof`的实现原理，可以参考下面：
  

  
```js
  
function myInstanceof(left, right) {
  
    // 这里先用typeof来判断基础数据类型，如果是，直接返回false
  
    if(typeof left !== 'object' || left === null) return false;
  
    // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
  
    let proto = Object.getPrototypeOf(left);
  
    while(true) {                  
  
        if(proto === null) return false;
  
        if(proto === right.prototype) return true;//找到相同原型对象，返回true
  
        proto = Object.getPrototypeof(proto);
  
    }
  
}
  
```
  

  
也就是顺着原型链去找，直到找到相同的原型对象，返回`true`，否则为`false`
  

  

  

  
## 三、区别
  

  
`typeof`与`instanceof`都是判断数据类型的方法，区别如下：
  

  
- `typeof`会返回一个变量的基本类型，`instanceof`返回的是一个布尔值
  

  
- `instanceof` 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型
  
- 而` typeof` 也存在弊端，它虽然可以判断基础数据类型（`null` 除外），但是引用数据类型中，除了` function` 类型以外，其他的也无法判断
  

  
可以看到，上述两种方法都有弊端，并不能满足所有场景的需求
  

  
如果需要通用检测数据类型，可以采用`Object.prototype.toString`，调用该方法，统一返回格式`“[object Xxx]” `的字符串
  

  
如下
  

  
```js
  
Object.prototype.toString({})       // "[object Object]"
  
Object.prototype.toString.call({})  // 同上结果，加上call也ok
  
Object.prototype.toString.call(1)    // "[object Number]"
  
Object.prototype.toString.call('1')  // "[object String]"
  
Object.prototype.toString.call(true)  // "[object Boolean]"
  
Object.prototype.toString.call(function(){})  // "[object Function]"
  
Object.prototype.toString.call(null)   //"[object Null]"
  
Object.prototype.toString.call(undefined) //"[object Undefined]"
  
Object.prototype.toString.call(/123/g)    //"[object RegExp]"
  
Object.prototype.toString.call(new Date()) //"[object Date]"
  
Object.prototype.toString.call([])       //"[object Array]"
  
Object.prototype.toString.call(document)  //"[object HTMLDocument]"
  
Object.prototype.toString.call(window)   //"[object Window]"
  
```
  

  
了解了`toString`的基本用法，下面就实现一个全局通用的数据类型判断方法
  

  
```js
  
function getType(obj){
  
  let type  = typeof obj;
  
  if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
  
    return type;
  
  }
  
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1'); 
  
}
  
```
  

  
使用如下
  

  
```js
  
getType([])     // "Array" typeof []是object，因此toString返回
  
getType('123')  // "string" typeof 直接返回
  
getType(window) // "Window" toString返回
  
getType(null)   // "Null"首字母大写，typeof null是object，需toString来判断
  
getType(undefined)   // "undefined" typeof 直接返回
  
getType()            // "undefined" typeof 直接返回
  
getType(function(){}) // "function" typeof能判断，因此首字母小写
  
getType(/123/g)      //"RegExp" toString返回
  
```  
# JavaScript中的事件模型有哪些  
![](https://static.vue-js.com/32a182f0-74cf-11eb-85f6-6fac77c0c9b3.png)
  

  
## 一、事件与事件流
  

  
`javascript`中的事件，可以理解就是在`HTML`文档或者浏览器中发生的一种交互操作，使得网页具备互动性， 常见的有加载事件、鼠标事件、自定义事件等
  

  
由于`DOM`是一个树结构，如果在父子节点绑定事件时候，当触发子节点的时候，就存在一个顺序问题，这就涉及到了事件流的概念
  

  
事件流都会经历三个阶段：
  

  
- 事件捕获阶段(capture phase)
  
- 处于目标阶段(target phase)
  
- 事件冒泡阶段(bubbling phase)
  

  
 ![](https://static.vue-js.com/3e9a6450-74cf-11eb-85f6-6fac77c0c9b3.png)
  

  
事件冒泡是一种从下往上的传播方式，由最具体的元素（触发节点）然后逐渐向上传播到最不具体的那个节点，也就是`DOM`中最高层的父节点
  

  
```html
  
<!DOCTYPE html>
  
<html lang="en">
  
    <head>
  
        <meta charset="UTF-8">
  
        <title>Event Bubbling</title>
  
    </head>
  
    <body>
  
        <button id="clickMe">Click Me</button>
  
    </body>
  
</html>
  
```
  

  
然后，我们给`button`和它的父元素，加入点击事件
  

  
```js
  
var button = document.getElementById('clickMe');
  

  
button.onclick = function() {
  
  console.log('1.Button');
  
};
  
document.body.onclick = function() {
  
  console.log('2.body');
  
};
  
document.onclick = function() {
  
  console.log('3.document');
  
};
  
window.onclick = function() {
  
  console.log('4.window');
  
};
  
```
  

  
点击按钮，输出如下
  

  
```js
  
1.button
  
2.body
  
3.document
  
4.window
  
```
  

  
点击事件首先在`button`元素上发生，然后逐级向上传播
  

  
事件捕获与事件冒泡相反，事件最开始由不太具体的节点最早接受事件, 而最具体的节点（触发节点）最后接受事件
  

  

  

  
## 二、事件模型
  

  
事件模型可以分为三种：
  

  
- 原始事件模型（DOM0级）
  
- 标准事件模型（DOM2级）
  
- IE事件模型（基本不用）
  

  

  

  
### 原始事件模型
  

  
事件绑定监听函数比较简单, 有两种方式：
  

  
- HTML代码中直接绑定
  

  
```js
  
<input type="button" onclick="fun()">
  
```
  

  
- 通过`JS`代码绑定
  

  
```js
  
var btn = document.getElementById('.btn');
  
btn.onclick = fun;
  
```
  

  
#### 特性
  

  
- 绑定速度快
  

  
`DOM0`级事件具有很好的跨浏览器优势，会以最快的速度绑定，但由于绑定速度太快，可能页面还未完全加载出来，以至于事件可能无法正常运行
  

  
- 只支持冒泡，不支持捕获
  

  
- 同一个类型的事件只能绑定一次
  

  
```js
  
<input type="button" id="btn" onclick="fun1()">
  

  
var btn = document.getElementById('.btn');
  
btn.onclick = fun2;
  
```
  

  
如上，当希望为同一个元素绑定多个同类型事件的时候（上面的这个`btn`元素绑定2个点击事件），是不被允许的，后绑定的事件会覆盖之前的事件
  

  
删除 `DOM0` 级事件处理程序只要将对应事件属性置为`null`即可
  

  
```js
  
btn.onclick = null;
  
```
  

  

  

  

  

  
### 标准事件模型
  

  
在该事件模型中，一次事件共有三个过程:
  

  
- 事件捕获阶段：事件从`document`一直向下传播到目标元素, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行
  
- 事件处理阶段：事件到达目标元素, 触发目标元素的监听函数
  
- 事件冒泡阶段：事件从目标元素冒泡到`document`, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行
  

  
事件绑定监听函数的方式如下:
  

  
```
  
addEventListener(eventType, handler, useCapture)
  
```
  

  
事件移除监听函数的方式如下:
  

  
```
  
removeEventListener(eventType, handler, useCapture)
  
```
  

  
参数如下：
  

  
- `eventType`指定事件类型(不要加on)
  
- `handler`是事件处理函数
  
- `useCapture`是一个`boolean`用于指定是否在捕获阶段进行处理，一般设置为`false`与IE浏览器保持一致
  

  
举个例子：
  

  
```js
  
var btn = document.getElementById('.btn');
  
btn.addEventListener(‘click’, showMessage, false);
  
btn.removeEventListener(‘click’, showMessage, false);
  
```
  

  
#### 特性
  

  
- 可以在一个`DOM`元素上绑定多个事件处理器，各自并不会冲突
  

  
```js
  
btn.addEventListener(‘click’, showMessage1, false);
  
btn.addEventListener(‘click’, showMessage2, false);
  
btn.addEventListener(‘click’, showMessage3, false);
  
```
  

  
- 执行时机
  

  
当第三个参数(`useCapture`)设置为`true`就在捕获过程中执行，反之在冒泡过程中执行处理函数
  

  
下面举个例子：
  

  
```js
  
<div id='div'>
  
    <p id='p'>
  
        <span id='span'>Click Me!</span>
  
    </p >
  
</div>
  
```
  

  
设置点击事件
  

  
```js
  
var div = document.getElementById('div');
  
var p = document.getElementById('p');
  

  
function onClickFn (event) {
  
    var tagName = event.currentTarget.tagName;
  
    var phase = event.eventPhase;
  
    console.log(tagName, phase);
  
}
  

  
div.addEventListener('click', onClickFn, false);
  
p.addEventListener('click', onClickFn, false);
  
```
  

  
上述使用了`eventPhase`，返回一个代表当前执行阶段的整数值。1为捕获阶段、2为事件对象触发阶段、3为冒泡阶段
  

  
点击`Click Me!`，输出如下
  

  
```js
  
P 3
  
DIV 3
  
```
  

  
可以看到，`p`和`div`都是在冒泡阶段响应了事件，由于冒泡的特性，裹在里层的`p`率先做出响应
  

  
如果把第三个参数都改为`true`
  

  
```js
  
div.addEventListener('click', onClickFn, true);
  
p.addEventListener('click', onClickFn, true);
  
```
  

  
输出如下
  

  
```js
  
DIV 1
  
P 1
  
```
  

  
两者都是在捕获阶段响应事件，所以`div`比`p`标签先做出响应
  

  

  

  
### IE事件模型
  

  
IE事件模型共有两个过程:
  

  
- 事件处理阶段：事件到达目标元素, 触发目标元素的监听函数。
  
- 事件冒泡阶段：事件从目标元素冒泡到`document`, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行
  

  
事件绑定监听函数的方式如下:
  

  
```
  
attachEvent(eventType, handler)
  
```
  

  
事件移除监听函数的方式如下:
  

  
```
  
detachEvent(eventType, handler)
  
```
  

  
举个例子：
  

  
```js
  
var btn = document.getElementById('.btn');
  
btn.attachEvent(‘onclick’, showMessage);
  
btn.detachEvent(‘onclick’, showMessage);
  
```  
# JavaScript中执行上下文和执行栈是什么？  
![](https://static.vue-js.com/8652b710-74c1-11eb-85f6-6fac77c0c9b3.png)  
  
  
## 一、执行上下文  
  
简单的来说，执行上下文是一种对`Javascript`代码执行环境的抽象概念，也就是说只要有`Javascript`代码运行，那么它就一定是运行在执行上下文中  
  
执行上下文的类型分为三种：  
  
- 全局执行上下文：只有一个，浏览器中的全局对象就是 `window `对象，`this` 指向这个全局对象  
- 函数执行上下文：存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文  
- Eval 函数执行上下文： 指的是运行在 `eval` 函数中的代码，很少用而且不建议使用  
  
下面给出全局上下文和函数上下文的例子：  
  
 ![](https://static.vue-js.com/90dd3b60-74c1-11eb-85f6-6fac77c0c9b3.png)  
  
紫色框住的部分为全局上下文，蓝色和橘色框起来的是不同的函数上下文。只有全局上下文（的变量）能被其他任何上下文访问  
  
可以有任意多个函数上下文，每次调用函数创建一个新的上下文，会创建一个私有作用域，函数内部声明的任何变量都不能在当前函数作用域外部直接访问  
  
  
  
## 二、生命周期  
  
执行上下文的生命周期包括三个阶段：创建阶段 → 执行阶段 → 回收阶段  
  
### 创建阶段  
  
创建阶段即当函数被调用，但未执行任何其内部代码之前  
  
创建阶段做了三件事：  
  
- 确定 this 的值，也被称为 `This Binding`  
- LexicalEnvironment（词法环境） 组件被创建  
- VariableEnvironment（变量环境） 组件被创建  
  
伪代码如下：  
  
```js  
ExecutionContext = {    
  ThisBinding = <this value>,     // 确定this   
  LexicalEnvironment = { ... },   // 词法环境  
  VariableEnvironment = { ... },  // 变量环境  
}  
```  
  
  
  
#### This Binding  
  
确定`this`的值我们前面讲到，`this`的值是在执行的时候才能确认，定义的时候不能确认  
  
  
#### 词法环境  
  
词法环境有两个组成部分：  
  
- 全局环境：是一个没有外部环境的词法环境，其外部环境引用为` null`，有一个全局对象，`this` 的值指向这个全局对象  
  
- 函数环境：用户在函数中定义的变量被存储在环境记录中，包含了`arguments` 对象，外部环境的引用可以是全局环境，也可以是包含内部函数的外部函数环境  
  
伪代码如下：  
  
```js  
GlobalExectionContext = {  // 全局执行上下文  
  LexicalEnvironment: {       // 词法环境  
    EnvironmentRecord: {     // 环境记录  
      Type: "Object",           // 全局环境  
      // 标识符绑定在这里   
      outer: <null>           // 对外部环境的引用  
  }    
}  
  
FunctionExectionContext = { // 函数执行上下文  
  LexicalEnvironment: {     // 词法环境  
    EnvironmentRecord: {    // 环境记录  
      Type: "Declarative",      // 函数环境  
      // 标识符绑定在这里      // 对外部环境的引用  
      outer: <Global or outer function environment reference>    
  }    
}  
```  
  
  
  
#### 变量环境  
  
变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性  
  
在 ES6 中，词法环境和变量环境的区别在于前者用于存储函数声明和变量（ `let` 和 `const` ）绑定，而后者仅用于存储变量（ `var` ）绑定  
  
举个例子  
  
```js  
let a = 20;    
const b = 30;    
var c;  
  
function multiply(e, f) {    
 var g = 20;    
 return e * f * g;    
}  
  
c = multiply(20, 30);  
```  
  
执行上下文如下：  
  
```js  
GlobalExectionContext = {  
  
  ThisBinding: <Global Object>,  
  
  LexicalEnvironment: {  // 词法环境  
    EnvironmentRecord: {    
      Type: "Object",    
      // 标识符绑定在这里    
      a: < uninitialized >,    
      b: < uninitialized >,    
      multiply: < func >    
    }    
    outer: <null>    
  },  
  
  VariableEnvironment: {  // 变量环境  
    EnvironmentRecord: {    
      Type: "Object",    
      // 标识符绑定在这里    
      c: undefined,    
    }    
    outer: <null>    
  }    
}  
  
FunctionExectionContext = {    
     
  ThisBinding: <Global Object>,  
  
  LexicalEnvironment: {    
    EnvironmentRecord: {    
      Type: "Declarative",    
      // 标识符绑定在这里    
      Arguments: {0: 20, 1: 30, length: 2},    
    },    
    outer: <GlobalLexicalEnvironment>    
  },  
  
  VariableEnvironment: {    
    EnvironmentRecord: {    
      Type: "Declarative",    
      // 标识符绑定在这里    
      g: undefined    
    },    
    outer: <GlobalLexicalEnvironment>    
  }    
}  
```  
  
留意上面的代码，`let`和`const`定义的变量`a`和`b`在创建阶段没有被赋值，但`var`声明的变量从在创建阶段被赋值为`undefined`  
  
这是因为，创建阶段，会在代码中扫描变量和函数声明，然后将函数声明存储在环境中  
  
但变量会被初始化为`undefined`(`var`声明的情况下)和保持`uninitialized`(未初始化状态)(使用`let`和`const`声明的情况下)  
  
这就是变量提升的实际原因  
  
  
  
### 执行阶段  
  
在这阶段，执行变量赋值、代码执行  
  
如果 `Javascript` 引擎在源代码中声明的实际位置找不到变量的值，那么将为其分配 `undefined` 值  
  
  
  
### 回收阶段  
  
执行上下文出栈等待虚拟机回收执行上下文  
  
  
  
## 二、执行栈  
  
执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文  
  
 ![](https://static.vue-js.com/9eda0310-74c1-11eb-ab90-d9ae814b240d.png)  
  
当`Javascript`引擎开始执行你第一行脚本代码的时候，它就会创建一个全局执行上下文然后将它压到执行栈中  
  
每当引擎碰到一个函数的时候，它就会创建一个函数执行上下文，然后将这个执行上下文压到执行栈中  
  
引擎会执行位于执行栈栈顶的执行上下文(一般是函数执行上下文)，当该函数执行结束后，对应的执行上下文就会被弹出，然后控制流程到达执行栈的下一个执行上下文  
  
举个例子：  
  
```js  
let a = 'Hello World!';  
function first() {  
  console.log('Inside first function');  
  second();  
  console.log('Again inside first function');  
}  
function second() {  
  console.log('Inside second function');  
}  
first();  
console.log('Inside Global Execution Context');  
```  
  
转化成图的形式  
  
 ![](https://static.vue-js.com/ac11a600-74c1-11eb-ab90-d9ae814b240d.png)  
  
简单分析一下流程：  
  
- 创建全局上下文请压入执行栈  
- `first`函数被调用，创建函数执行上下文并压入栈  
- 执行`first`函数过程遇到`second`函数，再创建一个函数执行上下文并压入栈  
- `second`函数执行完毕，对应的函数执行上下文被推出执行栈，执行下一个执行上下文`first`函数  
- `first`函数执行完毕，对应的函数执行上下文也被推出栈中，然后执行全局上下文  
- 所有代码执行完毕，全局上下文也会被推出栈中，程序结束  
  
  
# Javascript如何实现继承？  
![](https://static.vue-js.com/5d9c4450-72a3-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、是什么  
  
继承（inheritance）是面向对象软件技术当中的一个概念。  
  
如果一个类别B“继承自”另一个类别A，就把这个B称为“A的子类”，而把A称为“B的父类别”也可以称“A是B的超类”  
  
- 继承的优点   
  
继承可以使得子类具有父类别的各种属性和方法，而不需要再次编写相同的代码  
  
在子类别继承父类别的同时，可以重新定义某些属性，并重写某些方法，即覆盖父类别的原有属性和方法，使其获得与父类别不同的功能  
  
虽然`JavaScript`并不是真正的面向对象语言，但它天生的灵活性，使应用场景更加丰富  
  
关于继承，我们举个形象的例子：  
  
定义一个类（Class）叫汽车，汽车的属性包括颜色、轮胎、品牌、速度、排气量等  
  
```js  
class Car{  
    constructor(color,speed){  
        this.color = color  
        this.speed = speed  
        // ...  
    }  
}  
```  
  
由汽车这个类可以派生出“轿车”和“货车”两个类，在汽车的基础属性上，为轿车添加一个后备厢、给货车添加一个大货箱  
  
```js  
// 货车  
class Truck extends Car{  
    constructor(color,speed){  
        super(color,speed)  
        this.Container = true // 货箱  
    }  
}  
```  
  
这样轿车和货车就是不一样的，但是二者都属于汽车这个类，汽车、轿车继承了汽车的属性，而不需要再次在“轿车”中定义汽车已经有的属性  
  
在“轿车”继承“汽车”的同时，也可以重新定义汽车的某些属性，并重写或覆盖某些属性和方法，使其获得与“汽车”这个父类不同的属性和方法  
  
```js  
class Truck extends Car{  
    constructor(color,speed){  
        super(color,speed)  
        this.color = "black" //覆盖  
        this.Container = true // 货箱  
    }  
}  
```  
  
从这个例子中就能详细说明汽车、轿车以及卡车之间的继承关系  
  
  
  
## 二、实现方式  
  
下面给出`JavaScripy`常见的继承方式：  
  
- 原型链继承  
  
- 构造函数继承（借助 call）  
- 组合继承  
- 原型式继承  
- 寄生式继承  
- 寄生组合式继承  
  
  
  
### 原型链继承  
  
原型链继承是比较常见的继承方式之一，其中涉及的构造函数、原型和实例，三者之间存在着一定的关系，即每一个构造函数都有一个原型对象，原型对象又包含一个指向构造函数的指针，而实例则包含一个原型对象的指针  
  
举个例子  
  
```js  
 function Parent() {  
    this.name = 'parent1';  
    this.play = [1, 2, 3]  
  }  
  function Child() {  
    this.type = 'child2';  
  }  
  Child1.prototype = new Parent();  
  console.log(new Child())  
```  
  
上面代码看似没问题，实际存在潜在问题  
  
```js  
var s1 = new Child2();  
var s2 = new Child2();  
s1.play.push(4);  
console.log(s1.play, s2.play); // [1,2,3,4]  
```  
  
改变`s1`的`play`属性，会发现`s2`也跟着发生变化了，这是因为两个实例使用的是同一个原型对象，内存空间是共享的  
  
  
  
### 构造函数继承  
  
借助 `call `调用`Parent`函数  
  
```js  
function Parent(){  
    this.name = 'parent1';  
}  
  
Parent.prototype.getName = function () {  
    return this.name;  
}  
  
function Child(){  
    Parent1.call(this);  
    this.type = 'child'  
}  
  
let child = new Child();  
console.log(child);  // 没问题  
console.log(child.getName());  // 会报错  
```  
  
可以看到，父类原型对象中一旦存在父类之前自己定义的方法，那么子类将无法继承这些方法  
  
相比第一种原型链继承方式，父类的引用属性不会被共享，优化了第一种继承方式的弊端，但是只能继承父类的实例属性和方法，不能继承原型属性或者方法  
  
  
  
### 组合继承  
  
前面我们讲到两种继承方式，各有优缺点。组合继承则将前两种方式继承起来  
  
```js  
function Parent3 () {  
    this.name = 'parent3';  
    this.play = [1, 2, 3];  
}  
  
Parent3.prototype.getName = function () {  
    return this.name;  
}  
function Child3() {  
    // 第二次调用 Parent3()  
    Parent3.call(this);  
    this.type = 'child3';  
}  
  
// 第一次调用 Parent3()  
Child3.prototype = new Parent3();  
// 手动挂上构造器，指向自己的构造函数  
Child3.prototype.constructor = Child3;  
var s3 = new Child3();  
var s4 = new Child3();  
s3.play.push(4);  
console.log(s3.play, s4.play);  // 不互相影响  
console.log(s3.getName()); // 正常输出'parent3'  
console.log(s4.getName()); // 正常输出'parent3'  
```  
  
这种方式看起来就没什么问题，方式一和方式二的问题都解决了，但是从上面代码我们也可以看到` Parent3` 执行了两次，造成了多构造一次的性能开销  
  
  
  
### 原型式继承  
  
这里主要借助`Object.create`方法实现普通对象的继承  
  
同样举个例子  
  
```js  
let parent4 = {  
    name: "parent4",  
    friends: ["p1", "p2", "p3"],  
    getName: function() {  
      return this.name;  
    }  
  };  
  
  let person4 = Object.create(parent4);  
  person4.name = "tom";  
  person4.friends.push("jerry");  
  
  let person5 = Object.create(parent4);  
  person5.friends.push("lucy");  
  
  console.log(person4.name); // tom  
  console.log(person4.name === person4.getName()); // true  
  console.log(person5.name); // parent4  
  console.log(person4.friends); // ["p1", "p2", "p3","jerry","lucy"]  
  console.log(person5.friends); // ["p1", "p2", "p3","jerry","lucy"]  
```  
  
这种继承方式的缺点也很明显，因为`Object.create `方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能  
  
  
  
### 寄生式继承  
  
寄生式继承在上面继承基础上进行优化，利用这个浅拷贝的能力再进行增强，添加一些方法  
  
```js  
let parent5 = {  
    name: "parent5",  
    friends: ["p1", "p2", "p3"],  
    getName: function() {  
        return this.name;  
    }  
};  
  
function clone(original) {  
    let clone = Object.create(original);  
    clone.getFriends = function() {  
        return this.friends;  
    };  
    return clone;  
}  
  
let person5 = clone(parent5);  
  
console.log(person5.getName()); // parent5  
console.log(person5.getFriends()); // ["p1", "p2", "p3"]  
```  
  
其优缺点也很明显，跟上面讲的原型式继承一样  
  
  
  
### 寄生组合式继承  
  
寄生组合式继承，借助解决普通对象的继承问题的` Object.create` 方法，在亲全面几种继承方式的优缺点基础上进行改造，这也是所有继承方式里面相对最优的继承方式  
  
```js  
function clone (parent, child) {  
    // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程  
    child.prototype = Object.create(parent.prototype);  
    child.prototype.constructor = child;  
}  
  
function Parent6() {  
    this.name = 'parent6';  
    this.play = [1, 2, 3];  
}  
Parent6.prototype.getName = function () {  
    return this.name;  
}  
function Child6() {  
    Parent6.call(this);  
    this.friends = 'child5';  
}  
  
clone(Parent6, Child6);  
  
Child6.prototype.getFriends = function () {  
    return this.friends;  
}  
  
let person6 = new Child6();   
console.log(person6); //{friends:"child5",name:"child5",play:[1,2,3],__proto__:Parent6}  
console.log(person6.getName()); // parent6  
console.log(person6.getFriends()); // child5  
```  
  
可以看到 person6 打印出来的结果，属性都得到了继承，方法也没问题  
  
  
  
文章一开头，我们是使用`ES6` 中的`extends `关键字直接实现 `JavaScript `的继承  
  
```js  
class Person {  
  constructor(name) {  
    this.name = name  
  }  
  // 原型方法  
  // 即 Person.prototype.getName = function() { }  
  // 下面可以简写为 getName() {...}  
  getName = function () {  
    console.log('Person:', this.name)  
  }  
}  
class Gamer extends Person {  
  constructor(name, age) {  
    // 子类中存在构造函数，则需要在使用“this”之前首先调用 super()。  
    super(name)  
    this.age = age  
  }  
}  
const asuna = new Gamer('Asuna', 20)  
asuna.getName() // 成功访问到父类的方法  
```  
  
利用`babel`工具进行转换，我们会发现`extends`实际采用的也是寄生组合继承方式，因此也证明了这种方式是较优的解决继承的方式  
  
  
  
## 三、总结  
  
下面以一张图作为总结：  
  
 ![](https://static.vue-js.com/0df74700-731c-11eb-ab90-d9ae814b240d.png)  
  
通过`Object.create` 来划分不同的继承方式，最后的寄生式组合继承方式是通过组合继承改造之后的最优继承方式，而 `extends` 的语法糖和寄生组合继承的方式基本类似  
  
# JavaScript中的原型，原型链分别是什么?   
 ![](https://static.vue-js.com/4500e170-725e-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、原型  
  
`JavaScript` 常被描述为一种基于原型的语言——每个对象拥有一个原型对象  
  
当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾  
  
准确地说，这些属性和方法定义在Object的构造器函数（constructor functions）之上的`prototype`属性上，而非实例对象本身  
  
下面举个例子：  
  
函数可以有属性。 每个函数都有一个特殊的属性叫作原型`prototype`   
  
```js  
function doSomething(){}  
console.log( doSomething.prototype );  
```  
  
控制台输出  
  
```js  
{  
    constructor: ƒ doSomething(),  
    __proto__: {  
        constructor: ƒ Object(),  
        hasOwnProperty: ƒ hasOwnProperty(),  
        isPrototypeOf: ƒ isPrototypeOf(),  
        propertyIsEnumerable: ƒ propertyIsEnumerable(),  
        toLocaleString: ƒ toLocaleString(),  
        toString: ƒ toString(),  
        valueOf: ƒ valueOf()  
    }  
}  
```  
  
上面这个对象，就是大家常说的原型对象  
  
可以看到，原型对象有一个自有属性`constructor`，这个属性指向该函数，如下图关系展示  
  
 ![](https://static.vue-js.com/56d87250-725e-11eb-ab90-d9ae814b240d.png)  
  
  
  
  
  
## 二、原型链  
  
原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法  
  
在对象实例和它的构造器之间建立一个链接（它是`__proto__`属性，是从构造函数的`prototype`属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法  
  
下面举个例子：  
  
```js  
function Person(name) {  
    this.name = name;  
    this.age = 18;  
    this.sayName = function() {  
        console.log(this.name);  
    }  
}  
// 第二步 创建实例  
var person = new Person('person')  
```  
  
根据代码，我们可以得到下图  
  
 ![](https://static.vue-js.com/60825aa0-725e-11eb-85f6-6fac77c0c9b3.png)  
  
下面分析一下：  
  
- 构造函数`Person`存在原型对象`Person.prototype`  
- 构造函数生成实例对象`person`，`person`的`__proto__`指向构造函数`Person`原型对象  
- `Person.prototype.__proto__` 指向内置对象，因为 `Person.prototype` 是个对象，默认是由 `Object `函数作为类创建的，而 `Object.prototype` 为内置对象  
  
- `Person.__proto__` 指向内置匿名函数 `anonymous`，因为 Person 是个函数对象，默认由 Function 作为类创建  
  
- `Function.prototype` 和 `Function.__proto__ `同时指向内置匿名函数 `anonymous`，这样原型链的终点就是 `null`  
  
  
  
## 三、总结  
  
下面首先要看几个概念：  
  
`__proto__`作为不同对象之间的桥梁，用来指向创建它的构造函数的原型对象的  
  
 ![](https://static.vue-js.com/6a742160-725e-11eb-ab90-d9ae814b240d.png)  
  
每个对象的`__proto__`都是指向它的构造函数的原型对象`prototype`的  
  
```js  
person1.__proto__ === Person.prototype  
```  
  
构造函数是一个函数对象，是通过 `Function `构造器产生的  
  
```js  
Person.__proto__ === Function.prototype  
```  
  
原型对象本身是一个普通对象，而普通对象的构造函数都是`Object`  
  
```js  
Person.prototype.__proto__ === Object.prototype  
```  
  
刚刚上面说了，所有的构造器都是函数对象，函数对象都是 `Function `构造产生的  
  
```js  
Object.__proto__ === Function.prototype  
```  
  
`Object `的原型对象也有`__proto__`属性指向`null`，`null`是原型链的顶端  
  
```js  
Object.prototype.__proto__ === null  
```  
  
下面作出总结：  
  
- 一切对象都是继承自`Object`对象，`Object` 对象直接继承根源对象` null`  
  
- 一切的函数对象（包括 `Object` 对象），都是继承自 `Function` 对象  
  
- `Object` 对象直接继承自 `Function` 对象  
  
- `Function`对象的`__proto__`会指向自己的原型对象，最终还是继承自`Object`对象  
  
  
# == 和 ===有什么区别，分别在什么情况使用？  
![](https://static.vue-js.com/51b208f0-68df-11eb-85f6-6fac77c0c9b3.png)
  

  
## 一、等于操作符
  

  
等于操作符用两个等于号（ == ）表示，如果操作数相等，则会返回 `true`
  

  
前面文章，我们提到在`JavaScript`中存在隐式转换。等于操作符（==）在比较中会先进行类型转换，再确定操作数是否相等
  

  
遵循以下规则：
  

  
如果任一操作数是布尔值，则将其转换为数值再比较是否相等
  

  
```js
  
let result1 = (true == 1); // true
  
```
  

  
如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等
  

  
```js
  
let result1 = ("55" == 55); // true
  
```
  

  
如果一个操作数是对象，另一个操作数不是，则调用对象的 `valueOf() `方法取得其原始值，再根据前面的规则进行比较
  

  
```js
  
let obj = {valueOf:function(){return 1}}
  
let result1 = (obj == 1); // true
  
```
  

  
`null `和` undefined `相等
  

  
```js
  
let result1 = (null == undefined ); // true
  
```
  

  
如果有任一操作数是 `NaN` ，则相等操作符返回 `false` 
  

  
```js
  
let result1 = (NaN == NaN ); // false
  
```
  

  
如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回` true `
  

  
```
  
let obj1 = {name:"xxx"}
  
let obj2 = {name:"xxx"}
  
let result1 = (obj1 == obj2 ); // false
  
```
  

  
下面进一步做个小结：
  

  
- 两个都为简单类型，字符串和布尔值都会转换成数值，再比较
  
- 简单类型与引用类型比较，对象转化成其原始类型的值，再比较
  

  
- 两个都为引用类型，则比较它们是否指向同一个对象
  

  
- null 和 undefined 相等
  
- 存在 NaN 则返回 false
  

  

  

  
## 二、全等操作符
  

  
全等操作符由 3 个等于号（ === ）表示，只有两个操作数在不转换的前提下相等才返回 `true`。即类型相同，值也需相同
  

  
```js
  
let result1 = ("55" === 55); // false，不相等，因为数据类型不同
  
let result2 = (55 === 55); // true，相等，因为数据类型相同值也相同
  
```
  

  
`undefined` 和 `null` 与自身严格相等
  

  
```js
  
let result1 = (null === null)  //true
  
let result2 = (undefined === undefined)  //true
  
```
  

  

  

  
## 三、区别
  

  
相等操作符（==）会做类型转换，再进行值的比较，全等运算符不会做类型转换
  

  
```js
  
let result1 = ("55" === 55); // false，不相等，因为数据类型不同
  
let result2 = (55 === 55); // true，相等，因为数据类型相同值也相同
  
```
  

  
`null` 和 `undefined` 比较，相等操作符（==）为`true`，全等为`false`
  

  
```js
  
let result1 = (null == undefined ); // true
  
let result2 = (null  === undefined); // false
  
```
  

  

  

  
### 小结
  

  
相等运算符隐藏的类型转换，会带来一些违反直觉的结果
  

  
```js
  
'' == '0' // false
  
0 == '' // true
  
0 == '0' // true
  

  
false == 'false' // false
  
false == '0' // true
  

  
false == undefined // false
  
false == null // false
  
null == undefined // true
  

  
' \t\r\n' == 0 // true
  
```
  

  
但在比较`null`的情况的时候，我们一般使用相等操作符`==`
  

  
```js
  
const obj = {};
  

  
if(obj.x == null){
  
  console.log("1");  //执行
  
}
  
```
  

  
等同于下面写法
  

  
```js
  
if(obj.x === null || obj.x === undefined) {
  
    ...
  
}
  
```
  

  
使用相等操作符（==）的写法明显更加简洁了
  

  
所以，除了在比较对象属性为`null`或者`undefined`的情况下，我们可以使用相等操作符（==），其他情况建议一律使用全等操作符（===）
  

  

  

  
  
# 谈谈 Javascript 中的类型转换机制  
 ![](https://static.vue-js.com/2abd00a0-6692-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、概述  
  
`JS `中有六种简单数据类型：`undefined`、`null`、`boolean`、`string`、`number`、`symbol`（`BigInt`处理stage-4阶段，不考虑），以及引用类型：`object`  
  
但是我们在声明的时候只有一种数据类型，只有到运行期间才会确定当前类型  
  
```js  
let x = y ? 1 : a;  
```  
  
上面代码中，`x`的值在编译阶段是无法获取的，只有等到程序运行时才能知道  
  
虽然变量的数据类型是不确定的，但是各种运算符对数据类型是有要求的，如果运算子的类型与预期不符合，就会触发类型转换机制  
  
常见的类型转换有：  
  
- 强制转换（显示转换）  
- 自动转换（隐式转换）  
  
  
  
## 二、显示转换  
  
显示转换，即我们很清楚可以看到这里发生了类型的转变，常见的方法有：  
  
- Number()  
- parseInt()  
- String()  
- Boolean()  
  
  
  
### Number()  
  
将任意类型的值转化为数值  
  
先给出类型转换规则：  
  
 ![](https://static.vue-js.com/915b7300-6692-11eb-ab90-d9ae814b240d.png)  
  
实践一下：  
  
```js  
Number(324) // 324  
  
// 字符串：如果可以被解析为数值，则转换为相应的数值  
Number('324') // 324  
  
// 字符串：如果不可以被解析为数值，返回 NaN  
Number('324abc') // NaN  
  
// 空字符串转为0  
Number('') // 0  
  
// 布尔值：true 转成 1，false 转成 0  
Number(true) // 1  
Number(false) // 0  
  
// undefined：转成 NaN  
Number(undefined) // NaN  
  
// null：转成0  
Number(null) // 0  
  
// 对象：通常转换成NaN(除了只包含单个数值的数组)  
Number({a: 1}) // NaN  
Number([1, 2, 3]) // NaN  
Number([5]) // 5  
```  
  
从上面可以看到，`Number`转换的时候是很严格的，只要有一个字符无法转成数值，整个字符串就会被转为`NaN`  
  
  
  
### parseInt()  
  
`parseInt`相比`Number`，就没那么严格了，`parseInt`函数逐个解析字符，遇到不能转换的字符就停下来  
  
```js  
parseInt('32a3') //32  
```  
  
  
  
### String()  
  
可以将任意类型的值转化成字符串  
  
给出转换规则图：  
  
   ![](https://static.vue-js.com/48dd8eb0-6692-11eb-85f6-6fac77c0c9b3.png)  
  
实践一下：  
  
```js  
// 数值：转为相应的字符串  
String(1) // "1"  
  
//字符串：转换后还是原来的值  
String("a") // "a"  
  
//布尔值：true转为字符串"true"，false转为字符串"false"  
String(true) // "true"  
  
//undefined：转为字符串"undefined"  
String(undefined) // "undefined"  
  
//null：转为字符串"null"  
String(null) // "null"  
  
//对象  
String({a: 1}) // "[object Object]"  
String([1, 2, 3]) // "1,2,3"  
```  
  
  
  
### Boolean()  
  
可以将任意类型的值转为布尔值，转换规则如下：  
  
 ![](https://static.vue-js.com/53bdad10-6692-11eb-ab90-d9ae814b240d.png)  
  
实践一下：  
  
```js  
Boolean(undefined) // false  
Boolean(null) // false  
Boolean(0) // false  
Boolean(NaN) // false  
Boolean('') // false  
Boolean({}) // true  
Boolean([]) // true  
Boolean(new Boolean(false)) // true  
```  
  
  
  
## 三、隐式转换  
  
在隐式转换中，我们可能最大的疑惑是 ：何时发生隐式转换？  
  
我们这里可以归纳为两种情况发生隐式转换的场景：  
  
- 比较运算（`==`、`!=`、`>`、`<`）、`if`、`while`需要布尔值地方  
- 算术运算（`+`、`-`、`*`、`/`、`%`）  
  
除了上面的场景，还要求运算符两边的操作数不是同一类型  
  
  
  
### 自动转换为布尔值  
  
在需要布尔值的地方，就会将非布尔值的参数自动转为布尔值，系统内部会调用`Boolean`函数  
  
可以得出个小结：  
  
- undefined   
- null   
- false   
- +0   
- -0  
- NaN  
- ""  
  
除了上面几种会被转化成`false`，其他都换被转化成`true`  
  
  
  
### 自动转换成字符串  
  
遇到预期为字符串的地方，就会将非字符串的值自动转为字符串  
  
具体规则是：先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串  
  
常发生在`+`运算中，一旦存在字符串，则会进行字符串拼接操作  
  
```js  
'5' + 1 // '51'  
'5' + true // "5true"  
'5' + false // "5false"  
'5' + {} // "5[object Object]"  
'5' + [] // "5"  
'5' + function (){} // "5function (){}"  
'5' + undefined // "5undefined"  
'5' + null // "5null"  
```  
  
  
  
### 自动转换成数值  
  
除了`+`有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值  
  
```js  
'5' - '2' // 3  
'5' * '2' // 10  
true - 1  // 0  
false - 1 // -1  
'1' - 1   // 0  
'5' * []    // 0  
false / '5' // 0  
'abc' - 1   // NaN  
null + 1 // 1  
undefined + 1 // NaN  
```  
  
`null`转为数值时，值为`0` 。`undefined`转为数值时，值为`NaN`  
# Javascript字符串的常用方法有哪些？  
 ![](https://static.vue-js.com/ceb6ebc0-65c1-11eb-ab90-d9ae814b240d.png)
  

  
## 一、操作方法
  

  
我们也可将字符串常用的操作方法归纳为增、删、改、查，需要知道字符串的特点是一旦创建了，就不可变
  

  

  

  
### 增
  

  
这里增的意思并不是说直接增添内容，而是创建字符串的一个副本，再进行操作
  

  
除了常用`+`以及`${}`进行字符串拼接之外，还可通过`concat`
  

  
#### concat
  

  
用于将一个或多个字符串拼接成一个新字符串
  

  
```js
  
let stringValue = "hello ";
  
let result = stringValue.concat("world");
  
console.log(result); // "hello world"
  
console.log(stringValue); // "hello"
  
```
  

  

  

  
### 删
  

  
这里的删的意思并不是说删除原字符串的内容，而是创建字符串的一个副本，再进行操作
  

  
常见的有：
  

  
- slice()
  
- substr()
  
- substring()
  

  
这三个方法都返回调用它们的字符串的一个子字符串，而且都接收一或两个参数。
  

  
```js
  
let stringValue = "hello world";
  
console.log(stringValue.slice(3)); // "lo world"
  
console.log(stringValue.substring(3)); // "lo world"
  
console.log(stringValue.substr(3)); // "lo world"
  
console.log(stringValue.slice(3, 7)); // "lo w"
  
console.log(stringValue.substring(3,7)); // "lo w"
  
console.log(stringValue.substr(3, 7)); // "lo worl"
  
```
  

  

  

  
### 改
  

  
这里改的意思也不是改变原字符串，而是创建字符串的一个副本，再进行操作
  

  
常见的有：
  

  
- trim()、trimLeft()、trimRight()
  

  
- repeat()
  
- padStart()、padEnd()
  
- toLowerCase()、 toUpperCase()
  

  

  

  
#### trim()、trimLeft()、trimRight()
  

  
删除前、后或前后所有空格符，再返回新的字符串
  

  
```js
  
let stringValue = " hello world ";
  
let trimmedStringValue = stringValue.trim();
  
console.log(stringValue); // " hello world "
  
console.log(trimmedStringValue); // "hello world"
  
```
  

  

  

  
#### repeat()
  

  
接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果
  

  
```js
  
let stringValue = "na ";
  
let copyResult = stringValue.repeat(2) // na na 
  
```
  

  

  

  
#### padEnd()
  

  
复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件
  

  
```js
  
let stringValue = "foo";
  
console.log(stringValue.padStart(6)); // " foo"
  
console.log(stringValue.padStart(9, ".")); // "......foo"
  
```
  

  

  

  
### toLowerCase()、 toUpperCase()
  

  
大小写转化
  

  
```js
  
let stringValue = "hello world";
  
console.log(stringValue.toUpperCase()); // "HELLO WORLD"
  
console.log(stringValue.toLowerCase()); // "hello world"
  
```
  

  

  

  
### 查
  

  
除了通过索引的方式获取字符串的值，还可通过：
  

  
- chatAt()
  

  
- indexOf()
  

  
- startWith()
  

  
- includes()
  

  
  
  

  
#### charAt()
  

  
返回给定索引位置的字符，由传给方法的整数参数指定
  

  
```js
  
let message = "abcde";
  
console.log(message.charAt(2)); // "c"
  
```
  

  

  

  
#### indexOf()
  

  
从字符串开头去搜索传入的字符串，并返回位置（如果没找到，则返回 -1 ）
  

  
```js
  
let stringValue = "hello world";
  
console.log(stringValue.indexOf("o")); // 4
  
```
  

  

  

  
#### startWith()、includes()
  

  
从字符串中搜索传入的字符串，并返回一个表示是否包含的布尔值
  

  
```js
  
let message = "foobarbaz";
  
console.log(message.startsWith("foo")); // true
  
console.log(message.startsWith("bar")); // false
  
console.log(message.includes("bar")); // true
  
console.log(message.includes("qux")); // false
  
```
  

  

  

  

  

  
## 二、转换方法
  

  
### split
  

  
把字符串按照指定的分割符，拆分成数组中的每一项
  

  
```js
  
let str = "12+23+34"
  
let arr = str.split("+") // [12,23,34]
  
```
  

  

  

  
## 三、模板匹配方法
  

  
针对正则表达式，字符串设计了几个方法：
  

  
- match()
  
- search()
  
- replace()
  

  

  

  
### match()
  

  
接收一个参数，可以是一个正则表达式字符串，也可以是一个` RegExp `对象，返回数组
  

  
```js
  
let text = "cat, bat, sat, fat";
  
let pattern = /.at/;
  
let matches = text.match(pattern);
  
console.log(matches[0]); // "cat"
  
```
  

  

  

  
### search()
  

  
接收一个参数，可以是一个正则表达式字符串，也可以是一个` RegExp `对象，找到则返回匹配索引，否则返回 -1
  

  
```js
  
let text = "cat, bat, sat, fat";
  
let pos = text.search(/at/);
  
console.log(pos); // 1
  
```
  

  

  

  
### replace()
  

  
接收两个参数，第一个参数为匹配的内容，第二个参数为替换的元素（可用函数）
  

  
```js
  
let text = "cat, bat, sat, fat";
  
let result = text.replace("at", "ond");
  
console.log(result); // "cond, bat, sat, fat"
  
```  
# 你是怎么理解ES6中 Decorator 的？使用场景有哪些？  
  
  
 ![](https://static.vue-js.com/7df43560-5ba5-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
## 一、介绍  
  
Decorator，即装饰器，从名字上很容易让我们联想到装饰者模式  
  
简单来讲，装饰者模式就是一种在不改变原类和使用继承的情况下，动态地扩展对象功能的设计理论。  
  
`ES6`中`Decorator`功能亦如此，其本质也不是什么高大上的结构，就是一个普通的函数，用于扩展类属性和类方法  
  
这里定义一个士兵，这时候他什么装备都没有  
  
```js  
class soldier{   
}  
```  
  
定义一个得到 AK 装备的函数，即装饰器  
  
```js  
function strong(target){  
    target.AK = true  
}  
```  
  
使用该装饰器对士兵进行增强  
  
```js  
@strong  
class soldier{  
}  
```  
  
这时候士兵就有武器了  
  
```js  
soldier.AK // true  
```  
  
上述代码虽然简单，但也能够清晰看到了使用`Decorator`两大优点：  
  
- 代码可读性变强了，装饰器命名相当于一个注释  
- 在不改变原有代码情况下，对原来功能进行扩展  
  
  
  
## 二、用法  
  
`Docorator`修饰对象为下面两种：  
  
- 类的装饰  
- 类属性的装饰  
  
### 类的装饰  
  
当对类本身进行装饰的时候，能够接受一个参数，即类本身  
  
将装饰器行为进行分解，大家能够有个更深入的了解  
  
```js  
@decorator  
class A {}  
  
// 等同于  
  
class A {}  
A = decorator(A) || A;  
```  
  
下面`@testable`就是一个装饰器，`target`就是传入的类，即`MyTestableClass`，实现了为类添加静态属性  
  
```js  
@testable  
class MyTestableClass {  
  // ...  
}  
  
function testable(target) {  
  target.isTestable = true;  
}  
  
MyTestableClass.isTestable // true  
```  
  
如果想要传递参数，可以在装饰器外层再封装一层函数  
  
```js  
function testable(isTestable) {  
  return function(target) {  
    target.isTestable = isTestable;  
  }  
}  
  
@testable(true)  
class MyTestableClass {}  
MyTestableClass.isTestable // true  
  
@testable(false)  
class MyClass {}  
MyClass.isTestable // false  
```  
  
  
  
### 类属性的装饰  
  
当对类属性进行装饰的时候，能够接受三个参数：  
  
- 类的原型对象  
- 需要装饰的属性名  
- 装饰属性名的描述对象  
  
首先定义一个`readonly`装饰器  
  
```js  
function readonly(target, name, descriptor){  
  descriptor.writable = false; // 将可写属性设为false  
  return descriptor;  
}  
```  
  
使用`readonly`装饰类的`name`方法  
  
```javascript  
class Person {  
  @readonly  
  name() { return `${this.first} ${this.last}` }  
}  
```  
  
相当于以下调用  
  
```js  
readonly(Person.prototype, 'name', descriptor);  
```  
  
如果一个方法有多个装饰器，就像洋葱一样，先从外到内进入，再由内到外执行  
  
```javascript  
function dec(id){  
    console.log('evaluated', id);  
    return (target, property, descriptor) =>console.log('executed', id);  
}  
  
class Example {  
    @dec(1)  
    @dec(2)  
    method(){}  
}  
// evaluated 1  
// evaluated 2  
// executed 2  
// executed 1  
```  
  
外层装饰器`@dec(1)`先进入，但是内层装饰器`@dec(2)`先执行  
  
  
  
### 注意  
  
装饰器不能用于修饰函数，因为函数存在变量声明情况  
  
```js  
var counter = 0;  
  
var add = function () {  
  counter++;  
};  
  
@add  
function foo() {  
}  
```  
  
编译阶段，变成下面  
  
```js  
var counter;  
var add;  
  
@add  
function foo() {  
}  
  
counter = 0;  
  
add = function () {  
  counter++;  
};  
```  
  
意图是执行后`counter`等于 1，但是实际上结果是`counter`等于 0  
  
  
  
## 三、使用场景  
  
基于`Decorator`强大的作用，我们能够完成各种场景的需求，下面简单列举几种：  
  
使用`react-redux`的时候，如果写成下面这种形式，既不雅观也很麻烦  
  
```js  
class MyReactComponent extends React.Component {}  
  
export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent);  
```  
  
通过装饰器就变得简洁多了  
  
```js  
@connect(mapStateToProps, mapDispatchToProps)  
export default class MyReactComponent extends React.Component {}  
```  
  
将`mixins`，也可以写成装饰器，让使用更为简洁了  
  
```js  
function mixins(...list) {  
  return function (target) {  
    Object.assign(target.prototype, ...list);  
  };  
}  
  
// 使用  
const Foo = {  
  foo() { console.log('foo') }  
};  
  
@mixins(Foo)  
class MyClass {}  
  
let obj = new MyClass();  
obj.foo() // "foo"  
```  
  
  
  
下面再讲讲`core-decorators.js`几个常见的装饰器  
  
#### @antobind  
  
`autobind`装饰器使得方法中的`this`对象，绑定原始对象  
  
```javascript  
import { autobind } from 'core-decorators';  
  
class Person {  
  @autobind  
  getPerson() {  
    return this;  
  }  
}  
  
let person = new Person();  
let getPerson = person.getPerson;  
  
getPerson() === person;  
// true  
```  
  
  
  
#### @readonly  
  
`readonly`装饰器使得属性或方法不可写  
  
```javascript  
import { readonly } from 'core-decorators';  
  
class Meal {  
  @readonly  
  entree = 'steak';  
}  
  
var dinner = new Meal();  
dinner.entree = 'salmon';  
// Cannot assign to read only property 'entree' of [object Object]  
```  
  
  
  
  
  
#### @deprecate  
  
`deprecate`或`deprecated`装饰器在控制台显示一条警告，表示该方法将废除  
  
```javascript  
import { deprecate } from 'core-decorators';  
  
class Person {  
  @deprecate  
  facepalm() {}  
  
  @deprecate('功能废除了')  
  facepalmHard() {}  
}  
  
let person = new Person();  
  
person.facepalm();  
// DEPRECATION Person#facepalm: This function will be removed in future versions.  
  
person.facepalmHard();  
// DEPRECATION Person#facepalmHard: 功能废除了  
  
```  
  
  
# 你是怎么理解ES6中Module的？使用场景有哪些？  
  
  
 ![](https://static.vue-js.com/b6d19be0-5adb-11eb-ab90-d9ae814b240d.png)  
  
  
  
## 一、介绍  
  
模块，（Module），是能够单独命名并独立地完成一定功能的程序语句的**集合（即程序代码和数据结构的集合体）**。  
  
两个基本的特征：外部特征和内部特征  
  
- 外部特征是指模块跟外部环境联系的接口（即其他模块或程序调用该模块的方式，包括有输入输出参数、引用的全局变量）和模块的功能  
  
- 内部特征是指模块的内部环境具有的特点（即该模块的局部数据和程序代码）  
  
### 为什么需要模块化  
  
- 代码抽象  
- 代码封装  
- 代码复用  
- 依赖管理  
  
如果没有模块化，我们代码会怎样？  
  
- 变量和方法不容易维护，容易污染全局作用域  
- 加载资源的方式通过script标签从上到下。  
- 依赖的环境主观逻辑偏重，代码较多就会比较复杂。  
- 大型项目资源难以维护，特别是多人合作的情况下，资源的引入会让人奔溃  
  
因此，需要一种将` JavaScript `程序模块化的机制，如  
  
- CommonJs (典型代表：node.js早期)  
- AMD (典型代表：require.js)  
- CMD (典型代表：sea.js)  
  
  
### AMD  
  
`Asynchronous ModuleDefinition`（AMD），异步模块定义，采用异步方式加载模块。所有依赖模块的语句，都定义在一个回调函数中，等到模块加载完成之后，这个回调函数才会运行  
  
代表库为`require.js`  
  
```js  
/** main.js 入口文件/主模块 **/  
// 首先用config()指定各模块路径和引用名  
require.config({  
  baseUrl: "js/lib",  
  paths: {  
    "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js  
    "underscore": "underscore.min",  
  }  
});  
// 执行基本操作  
require(["jquery","underscore"],function($,_){  
  // some code here  
});  
```  
  
  
  
### CommonJs  
  
`CommonJS` 是一套 `Javascript` 模块规范，用于服务端  
  
```js  
// a.js  
module.exports={ foo , bar}  
  
// b.js  
const { foo,bar } = require('./a.js')  
```  
  
其有如下特点：  
  
- 所有代码都运行在模块作用域，不会污染全局作用域  
- 模块是同步加载的，即只有加载完成，才能执行后面的操作  
- 模块在首次执行后就会缓存，再次加载只返回缓存结果，如果想要再次执行，可清除缓存  
- `require`返回的值是被输出的值的拷贝，模块内部的变化也不会影响这个值  
  
  
既然存在了`AMD`以及`CommonJs`机制，`ES6`的`Module`又有什么不一样？  
  
ES6 在语言标准的层面上，实现了`Module`，即模块功能，完全可以取代 `CommonJS `和 `AMD `规范，成为浏览器和服务器通用的模块解决方案  
  
`CommonJS` 和` AMD` 模块，都只能在运行时确定这些东西。比如，`CommonJS `模块就是对象，输入时必须查找对象属性  
  
```javascript  
// CommonJS模块  
let { stat, exists, readfile } = require('fs');  
  
// 等同于  
let _fs = require('fs');  
let stat = _fs.stat;  
let exists = _fs.exists;  
let readfile = _fs.readfile;  
```  
  
`ES6`设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量  
  
```js  
// ES6模块  
import { stat, exists, readFile } from 'fs';  
```  
  
上述代码，只加载3个方法，其他方法不加载，即 `ES6` 可以在编译时就完成模块加载  
  
由于编译加载，使得静态分析成为可能。包括现在流行的`typeScript`也是依靠静态分析实现功能  
  
  
  
## 二、使用  
  
`ES6`模块内部自动采用了严格模式，这里就不展开严格模式的限制，毕竟这是`ES5`之前就已经规定好  
  
模块功能主要由两个命令构成：  
  
- `export`：用于规定模块的对外接口  
- `import`：用于输入其他模块提供的功能  
  
  
  
### export  
  
一个模块就是一个独立的文件，该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用`export`关键字输出该变量  
  
```javascript  
// profile.js  
export var firstName = 'Michael';  
export var lastName = 'Jackson';  
export var year = 1958;  
  
或   
// 建议使用下面写法，这样能瞬间确定输出了哪些变量  
var firstName = 'Michael';  
var lastName = 'Jackson';  
var year = 1958;  
  
export { firstName, lastName, year };  
```  
  
输出函数或类  
  
```js  
export function multiply(x, y) {  
  return x * y;  
};  
```  
  
通过`as`可以进行输出变量的重命名  
  
```js  
function v1() { ... }  
function v2() { ... }  
  
export {  
  v1 as streamV1,  
  v2 as streamV2,  
  v2 as streamLatestVersion  
};  
```  
  
  
  
### import  
  
使用`export`命令定义了模块的对外接口以后，其他 JS 文件就可以通过`import`命令加载这个模块  
  
```javascript  
// main.js  
import { firstName, lastName, year } from './profile.js';  
  
function setName(element) {  
  element.textContent = firstName + ' ' + lastName;  
}  
```  
  
同样如果想要输入变量起别名，通过`as`关键字  
  
```javascript  
import { lastName as surname } from './profile.js';  
```  
  
当加载整个模块的时候，需要用到星号`*`  
  
```js  
// circle.js  
export function area(radius) {  
  return Math.PI * radius * radius;  
}  
  
export function circumference(radius) {  
  return 2 * Math.PI * radius;  
}  
  
// main.js  
import * as circle from './circle';  
console.log(circle)   // {area:area,circumference:circumference}  
```  
  
输入的变量都是只读的，不允许修改，但是如果是对象，允许修改属性  
  
```js  
import {a} from './xxx.js'  
  
a.foo = 'hello'; // 合法操作  
a = {}; // Syntax Error : 'a' is read-only;  
```  
  
不过建议即使能修改，但我们不建议。因为修改之后，我们很难差错  
  
`import`后面我们常接着`from`关键字，`from`指定模块文件的位置，可以是相对路径，也可以是绝对路径  
  
```js  
import { a } from './a';  
```  
  
如果只有一个模块名，需要有配置文件，告诉引擎模块的位置  
  
```javascript  
import { myMethod } from 'util';  
```  
  
在编译阶段，`import`会提升到整个模块的头部，首先执行  
  
```javascript  
foo();  
  
import { foo } from 'my_module';  
```  
  
多次重复执行同样的导入，只会执行一次  
  
```js  
import 'lodash';  
import 'lodash';  
```  
  
上面的情况，大家都能看到用户在导入模块的时候，需要知道加载的变量名和函数，否则无法加载  
  
如果不需要知道变量名或函数就完成加载，就要用到`export default`命令，为模块指定默认输出  
  
```js  
// export-default.js  
export default function () {  
    console.log('foo');  
}  
```  
  
加载该模块的时候，`import`命令可以为该函数指定任意名字  
  
```js  
// import-default.js  
import customName from './export-default';  
customName(); // 'foo'  
```  
  
  
  
### 动态加载  
  
允许您仅在需要时动态加载模块，而不必预先加载所有模块，这存在明显的性能优势  
  
这个新功能允许您将`import()`作为函数调用，将其作为参数传递给模块的路径。 它返回一个 `promise`，它用一个模块对象来实现，让你可以访问该对象的导出  
  
```js  
import('/modules/myModule.mjs')  
  .then((module) => {  
    // Do something with the module.  
  });  
```  
  
  
  
### 复合写法  
  
如果在一个模块之中，先输入后输出同一个模块，`import`语句可以与`export`语句写在一起  
  
```javascript  
export { foo, bar } from 'my_module';  
  
// 可以简单理解为  
import { foo, bar } from 'my_module';  
export { foo, bar };  
```  
  
同理能够搭配`as`、`*`搭配使用  
  
  
  
## 三、使用场景  
  
如今，`ES6`模块化已经深入我们日常项目开发中，像`vue`、`react`项目搭建项目，组件化开发处处可见，其也是依赖模块化实现  
  
`vue`组件  
  
```js  
<template>  
  <div class="App">  
      组件化开发 ---- 模块化  
  </div>  
</template>  
  
<script>  
export default {  
  name: 'HelloWorld',  
  props: {  
    msg: String  
  }  
}  
</script>  
```  
  
`react`组件  
  
```js  
function App() {  
  return (  
    <div className="App">  
		组件化开发 ---- 模块化  
    </div>  
  );  
}  
  
export default App;  
```  
  
包括完成一些复杂应用的时候，我们也可以拆分成各个模块  
  
# 你是怎么理解ES6中Proxy的？使用场景有哪些?  
## 你是怎么理解ES6中Proxy的？使用场景?  
  
 ![](https://static.vue-js.com/6f656e30-59f5-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
## 一、介绍  
  
**定义：** 用于定义基本操作的自定义行为  
  
**本质：** 修改的是程序默认形为，就形同于在编程语言层面上做修改，属于元编程`(meta programming)`  
  
元编程（Metaprogramming，又译超编程，是指某类计算机程序的编写，这类计算机程序编写或者操纵其它程序（或者自身）作为它们的数据，或者在运行时完成部分本应在编译时完成的工作  
  
一段代码来理解  
```bash  
#!/bin/bash  
# metaprogram  
echo '#!/bin/bash' >program  
for ((I=1; I<=1024; I++)) do  
    echo "echo $I" >>program  
done  
chmod +x program  
```  
这段程序每执行一次能帮我们生成一个名为`program`的文件，文件内容为1024行`echo`，如果我们手动来写1024行代码，效率显然低效  
  
- 元编程优点：与手工编写全部代码相比，程序员可以获得更高的工作效率，或者给与程序更大的灵活度去处理新的情形而无需重新编译  
  
`Proxy` 亦是如此，用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）  
  
  
## 二、用法  
  
`Proxy`为 构造函数，用来生成 `Proxy `实例  
  
```javascript  
var proxy = new Proxy(target, handler)  
```  
  
### 参数  
  
`target`表示所要拦截的目标对象（任何类型的对象，包括原生数组，函数，甚至另一个代理））  
  
`handler`通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 `p` 的行为  
  
  
  
### handler解析  
  
关于`handler`拦截属性，有如下：  
  
- get(target,propKey,receiver)：拦截对象属性的读取  
- set(target,propKey,value,receiver)：拦截对象属性的设置  
- has(target,propKey)：拦截`propKey in proxy`的操作，返回一个布尔值  
- deleteProperty(target,propKey)：拦截`delete proxy[propKey]`的操作，返回一个布尔值  
- ownKeys(target)：拦截`Object.keys(proxy)`、`for...in`等循环，返回一个数组  
- getOwnPropertyDescriptor(target, propKey)：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象  
- defineProperty(target, propKey, propDesc)：拦截`Object.defineProperty(proxy, propKey, propDesc）`，返回一个布尔值  
- preventExtensions(target)：拦截`Object.preventExtensions(proxy)`，返回一个布尔值  
- getPrototypeOf(target)：拦截`Object.getPrototypeOf(proxy)`，返回一个对象  
- isExtensible(target)：拦截`Object.isExtensible(proxy)`，返回一个布尔值  
- setPrototypeOf(target, proto)：拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值  
- apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作  
- construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作  
  
  
  
  
  
### Reflect  
  
若需要在`Proxy`内部调用对象的默认行为，建议使用`Reflect`，其是`ES6`中操作对象而提供的新 `API`  
  
基本特点：  
  
- 只要`Proxy`对象具有的代理方法，`Reflect`对象全部具有，以静态方法的形式存在  
- 修改某些`Object`方法的返回结果，让其变得更合理（定义不存在属性行为的时候不报错而是返回`false`）  
- 让`Object`操作都变成函数行为        
  
  
  
下面我们介绍`proxy`几种用法：  
  
### get()  
  
`get`接受三个参数，依次为目标对象、属性名和 `proxy` 实例本身，最后一个参数可选  
  
```javascript  
var person = {  
  name: "张三"  
};  
  
var proxy = new Proxy(person, {  
  get: function(target, propKey) {  
    return Reflect.get(target,propKey)  
  }  
});  
  
proxy.name // "张三"  
```  
  
`get`能够对数组增删改查进行拦截，下面是试下你数组读取负数的索引  
  
```js  
function createArray(...elements) {  
  let handler = {  
    get(target, propKey, receiver) {  
      let index = Number(propKey);  
      if (index < 0) {  
        propKey = String(target.length + index);  
      }  
      return Reflect.get(target, propKey, receiver);  
    }  
  };  
  
  let target = [];  
  target.push(...elements);  
  return new Proxy(target, handler);  
}  
  
let arr = createArray('a', 'b', 'c');  
arr[-1] // c  
```  
  
注意：如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则会报错  
  
```js  
const target = Object.defineProperties({}, {  
  foo: {  
    value: 123,  
    writable: false,  
    configurable: false  
  },  
});  
  
const handler = {  
  get(target, propKey) {  
    return 'abc';  
  }  
};  
  
const proxy = new Proxy(target, handler);  
  
proxy.foo  
// TypeError: Invariant check failed  
```  
  
  
  
### set()  
  
`set`方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 `Proxy` 实例本身  
  
假定`Person`对象有一个`age`属性，该属性应该是一个不大于 200 的整数，那么可以使用`Proxy`保证`age`的属性值符合要求  
  
```js  
let validator = {  
  set: function(obj, prop, value) {  
    if (prop === 'age') {  
      if (!Number.isInteger(value)) {  
        throw new TypeError('The age is not an integer');  
      }  
      if (value > 200) {  
        throw new RangeError('The age seems invalid');  
      }  
    }  
  
    // 对于满足条件的 age 属性以及其他属性，直接保存  
    obj[prop] = value;  
  }  
};  
  
let person = new Proxy({}, validator);  
  
person.age = 100;  
  
person.age // 100  
person.age = 'young' // 报错  
person.age = 300 // 报错  
```  
  
如果目标对象自身的某个属性，不可写且不可配置，那么`set`方法将不起作用  
  
```javascript  
const obj = {};  
Object.defineProperty(obj, 'foo', {  
  value: 'bar',  
  writable: false,  
});  
  
const handler = {  
  set: function(obj, prop, value, receiver) {  
    obj[prop] = 'baz';  
  }  
};  
  
const proxy = new Proxy(obj, handler);  
proxy.foo = 'baz';  
proxy.foo // "bar"  
```  
  
注意，严格模式下，`set`代理如果没有返回`true`，就会报错  
  
```javascript  
'use strict';  
const handler = {  
  set: function(obj, prop, value, receiver) {  
    obj[prop] = receiver;  
    // 无论有没有下面这一行，都会报错  
    return false;  
  }  
};  
const proxy = new Proxy({}, handler);  
proxy.foo = 'bar';  
// TypeError: 'set' on proxy: trap returned falsish for property 'foo'  
```  
  
  
  
### deleteProperty()  
  
`deleteProperty`方法用于拦截`delete`操作，如果这个方法抛出错误或者返回`false`，当前属性就无法被`delete`命令删除  
  
```javascript  
var handler = {  
  deleteProperty (target, key) {  
    invariant(key, 'delete');  
    Reflect.deleteProperty(target,key)  
    return true;  
  }  
};  
function invariant (key, action) {  
  if (key[0] === '_') {  
    throw new Error(`无法删除私有属性`);  
  }  
}  
  
var target = { _prop: 'foo' };  
var proxy = new Proxy(target, handler);  
delete proxy._prop  
// Error: 无法删除私有属性  
```  
  
注意，目标对象自身的不可配置（configurable）的属性，不能被`deleteProperty`方法删除，否则报错  
  
  
  
### 取消代理  
  
```  
Proxy.revocable(target, handler);  
```  
  
## 三、使用场景  
  
`Proxy`其功能非常类似于设计模式中的代理模式，常用功能如下：  
  
- 拦截和监视外部对对象的访问  
- 降低函数或类的复杂度  
- 在复杂操作前对操作进行校验或对所需资源进行管理  
  
  
  
使用 `Proxy` 保障数据类型的准确性  
  
```js  
let numericDataStore = { count: 0, amount: 1234, total: 14 };  
numericDataStore = new Proxy(numericDataStore, {  
    set(target, key, value, proxy) {  
        if (typeof value !== 'number') {  
            throw Error("属性只能是number类型");  
        }  
        return Reflect.set(target, key, value, proxy);  
    }  
});  
  
numericDataStore.count = "foo"  
// Error: 属性只能是number类型  
  
numericDataStore.count = 333  
// 赋值成功  
```  
  
声明了一个私有的 `apiKey`，便于 `api` 这个对象内部的方法调用，但不希望从外部也能够访问 `api._apiKey`  
  
```js  
let api = {  
    _apiKey: '123abc456def',  
    getUsers: function(){ },  
    getUser: function(userId){ },  
    setUser: function(userId, config){ }  
};  
const RESTRICTED = ['_apiKey'];  
api = new Proxy(api, {  
    get(target, key, proxy) {  
        if(RESTRICTED.indexOf(key) > -1) {  
            throw Error(`${key} 不可访问.`);  
        } return Reflect.get(target, key, proxy);  
    },  
    set(target, key, value, proxy) {  
        if(RESTRICTED.indexOf(key) > -1) {  
            throw Error(`${key} 不可修改`);  
        } return Reflect.get(target, key, value, proxy);  
    }  
});  
  
console.log(api._apiKey)  
api._apiKey = '987654321'  
// 上述都抛出错误  
```  
  
还能通过使用`Proxy`实现观察者模式  
  
观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行  
  
`observable`函数返回一个原始对象的 `Proxy` 代理，拦截赋值操作，触发充当观察者的各个函数  
  
```javascript  
const queuedObservers = new Set();  
  
const observe = fn => queuedObservers.add(fn);  
const observable = obj => new Proxy(obj, {set});  
  
function set(target, key, value, receiver) {  
  const result = Reflect.set(target, key, value, receiver);  
  queuedObservers.forEach(observer => observer());  
  return result;  
}  
```  
  
观察者函数都放进`Set`集合，当修改`obj`的值，在会`set`函数中拦截，自动执行`Set`所有的观察者  
  
# 怎么理解ES6中 Generator的？使用场景有哪些？  
  
  
 ![](https://static.vue-js.com/7db499b0-5947-11eb-ab90-d9ae814b240d.png)  
  
## 一、介绍  
  
Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同  
  
回顾下上文提到的解决异步的手段：  
  
- 回调函数  
- promise  
  
那么，上文我们提到`promsie`已经是一种比较流行的解决异步方案，那么为什么还出现`Generator`？甚至`async/await`呢？  
  
该问题我们留在后面再进行分析，下面先认识下`Generator`  
  
### Generator函数  
  
执行 `Generator` 函数会返回一个遍历器对象，可以依次遍历 `Generator` 函数内部的每一个状态  
  
形式上，`Generator `函数是一个普通函数，但是有两个特征：  
  
- `function`关键字与函数名之间有一个星号  
- 函数体内部使用`yield`表达式，定义不同的内部状态  
  
```javascript  
function* helloWorldGenerator() {  
  yield 'hello';  
  yield 'world';  
  return 'ending';  
}  
```  
  
  
  
## 二、使用  
  
`Generator` 函数会返回一个遍历器对象，即具有`Symbol.iterator`属性，并且返回给自己  
  
```javascript  
function* gen(){  
  // some code  
}  
  
var g = gen();  
  
g[Symbol.iterator]() === g  
// true  
```  
  
通过`yield`关键字可以暂停`generator`函数返回的遍历器对象的状态  
  
```javascript  
function* helloWorldGenerator() {  
  yield 'hello';  
  yield 'world';  
  return 'ending';  
}  
var hw = helloWorldGenerator();  
```  
  
上述存在三个状态：`hello`、`world`、`return`  
  
通过`next`方法才会遍历到下一个内部状态，其运行逻辑如下：  
  
- 遇到`yield`表达式，就暂停执行后面的操作，并将紧跟在`yield`后面的那个表达式的值，作为返回的对象的`value`属性值。  
- 下一次调用`next`方法时，再继续往下执行，直到遇到下一个`yield`表达式  
- 如果没有再遇到新的`yield`表达式，就一直运行到函数结束，直到`return`语句为止，并将`return`语句后面的表达式的值，作为返回的对象的`value`属性值。  
- 如果该函数没有`return`语句，则返回的对象的`value`属性值为`undefined`  
  
```javascript  
hw.next()  
// { value: 'hello', done: false }  
  
hw.next()  
// { value: 'world', done: false }  
  
hw.next()  
// { value: 'ending', done: true }  
  
hw.next()  
// { value: undefined, done: true }  
```  
  
`done`用来判断是否存在下个状态，`value`对应状态值  
  
`yield`表达式本身没有返回值，或者说总是返回`undefined`  
  
通过调用`next`方法可以带一个参数，该参数就会被当作上一个`yield`表达式的返回值  
  
```javascript  
function* foo(x) {  
  var y = 2 * (yield (x + 1));  
  var z = yield (y / 3);  
  return (x + y + z);  
}  
  
var a = foo(5);  
a.next() // Object{value:6, done:false}  
a.next() // Object{value:NaN, done:false}  
a.next() // Object{value:NaN, done:true}  
  
var b = foo(5);  
b.next() // { value:6, done:false }  
b.next(12) // { value:8, done:false }  
b.next(13) // { value:42, done:true }  
```  
  
正因为`Generator `函数返回`Iterator`对象，因此我们还可以通过`for...of`进行遍历  
```javascript  
function* foo() {  
  yield 1;  
  yield 2;  
  yield 3;  
  yield 4;  
  yield 5;  
  return 6;  
}  
  
for (let v of foo()) {  
  console.log(v);  
}  
// 1 2 3 4 5  
```  
  
原生对象没有遍历接口，通过`Generator `函数为它加上这个接口，就能使用`for...of`进行遍历了  
  
```javascript  
function* objectEntries(obj) {  
  let propKeys = Reflect.ownKeys(obj);  
  
  for (let propKey of propKeys) {  
    yield [propKey, obj[propKey]];  
  }  
}  
  
let jane = { first: 'Jane', last: 'Doe' };  
  
for (let [key, value] of objectEntries(jane)) {  
  console.log(`${key}: ${value}`);  
}  
// first: Jane  
// last: Doe  
```  
  
  
  
## 三、异步解决方案  
  
回顾之前展开异步解决的方案：  
  
- 回调函数  
- Promise 对象  
- generator 函数  
- async/await  
  
  
  
这里通过文件读取案例，将几种解决异步的方案进行一个比较：  
  
### 回调函数  
  
所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，再调用这个函数  
  
```javascript  
fs.readFile('/etc/fstab', function (err, data) {  
  if (err) throw err;  
  console.log(data);  
  fs.readFile('/etc/shells', function (err, data) {  
    if (err) throw err;  
    console.log(data);  
  });  
});  
```  
  
`readFile`函数的第三个参数，就是回调函数，等到操作系统返回了`/etc/passwd`这个文件以后，回调函数才会执行  
  
  
  
### Promise  
  
`Promise`就是为了解决回调地狱而产生的，将回调函数的嵌套，改成链式调用  
  
```js  
const fs = require('fs');  
  
const readFile = function (fileName) {  
  return new Promise(function (resolve, reject) {  
    fs.readFile(fileName, function(error, data) {  
      if (error) return reject(error);  
      resolve(data);  
    });  
  });  
};  
  
  
readFile('/etc/fstab').then(data =>{  
    console.log(data)  
    return readFile('/etc/shells')  
}).then(data => {  
    console.log(data)  
})  
```  
  
这种链式操作形式，使异步任务的两段执行更清楚了，但是也存在了很明显的问题，代码变得冗杂了，语义化并不强  
  
  
  
### generator  
  
`yield`表达式可以暂停函数执行，`next`方法用于恢复函数执行，这使得`Generator`函数非常适合将异步任务同步化  
  
```javascript  
const gen = function* () {  
  const f1 = yield readFile('/etc/fstab');  
  const f2 = yield readFile('/etc/shells');  
  console.log(f1.toString());  
  console.log(f2.toString());  
};  
```  
  
  
  
  
  
### async/await  
  
将上面`Generator`函数改成`async/await`形式，更为简洁，语义化更强了  
  
```js  
const asyncReadFile = async function () {  
  const f1 = await readFile('/etc/fstab');  
  const f2 = await readFile('/etc/shells');  
  console.log(f1.toString());  
  console.log(f2.toString());  
};  
```  
  
  
  
### 区别：  
  
通过上述代码进行分析，将`promise`、`Generator`、`async/await`进行比较：  
  
- `promise`和`async/await`是专门用于处理异步操作的  
- `Generator`并不是为异步而设计出来的，它还有其他功能（对象迭代、控制输出、部署`Interator`接口...）  
- `promise`编写代码相比`Generator`、`async`更为复杂化，且可读性也稍差  
  
- `Generator`、`async`需要与`promise`对象搭配处理异步情况  
- `async`实质是`Generator`的语法糖，相当于会自动执行`Generator`函数  
- `async`使用上更为简洁，将异步代码以同步的形式进行编写，是处理异步编程的最终方案  
  
  
  
## 四、使用场景  
  
`Generator`是异步解决的一种方案，最大特点则是将异步操作同步化表达出来  
  
```js  
function* loadUI() {  
  showLoadingScreen();  
  yield loadUIDataAsynchronously();  
  hideLoadingScreen();  
}  
var loader = loadUI();  
// 加载UI  
loader.next()  
  
// 卸载UI  
loader.next()  
```  
  
包括`redux-saga `中间件也充分利用了`Generator`特性  
  
```js  
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'  
import Api from '...'  
  
function* fetchUser(action) {  
   try {  
      const user = yield call(Api.fetchUser, action.payload.userId);  
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});  
   } catch (e) {  
      yield put({type: "USER_FETCH_FAILED", message: e.message});  
   }  
}  
  
function* mySaga() {  
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);  
}  
  
function* mySaga() {  
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);  
}  
  
export default mySaga;  
```  
  
还能利用`Generator`函数，在对象上实现`Iterator`接口  
  
```js  
function* iterEntries(obj) {  
  let keys = Object.keys(obj);  
  for (let i=0; i < keys.length; i++) {  
    let key = keys[i];  
    yield [key, obj[key]];  
  }  
}  
  
let myObj = { foo: 3, bar: 7 };  
  
for (let [key, value] of iterEntries(myObj)) {  
  console.log(key, value);  
}  
  
// foo 3  
// bar 7  
```  
  
  
  
# 你是怎么理解ES6中 Promise的？使用场景有哪些？  
  
  
 ![](https://static.vue-js.com/f033b160-5811-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
## 一、介绍  
  
`Promise `，译为承诺，是异步编程的一种解决方案，比传统的解决方案（回调函数）更加合理和更加强大  
  
在以往我们如果处理多层异步操作，我们往往会像下面那样编写我们的代码  
  
```js  
doSomething(function(result) {  
  doSomethingElse(result, function(newResult) {  
    doThirdThing(newResult, function(finalResult) {  
      console.log('得到最终结果: ' + finalResult);  
    }, failureCallback);  
  }, failureCallback);  
}, failureCallback);  
```  
  
阅读上面代码，是不是很难受，上述形成了经典的回调地狱  
  
现在通过`Promise`的改写上面的代码  
  
```js  
doSomething().then(function(result) {  
  return doSomethingElse(result);  
})  
.then(function(newResult) {  
  return doThirdThing(newResult);  
})  
.then(function(finalResult) {  
  console.log('得到最终结果: ' + finalResult);  
})  
.catch(failureCallback);  
```  
  
瞬间感受到`promise`解决异步操作的优点：  
  
- 链式操作减低了编码难度  
- 代码可读性明显增强  
  
  
  
下面我们正式来认识`promise`：  
  
### 状态  
  
`promise`对象仅有三种状态  
  
- `pending`（进行中）  
- `fulfilled`（已成功）  
- `rejected`（已失败）  
  
### 特点  
  
- 对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态  
- 一旦状态改变（从`pending`变为`fulfilled`和从`pending`变为`rejected`），就不会再变，任何时候都可以得到这个结果  
  
  
  
### 流程  
  
认真阅读下图，我们能够轻松了解`promise`整个流程  
  
 ![](https://static.vue-js.com/1b02ae90-58a9-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
## 二、用法  
  
`Promise`对象是一个构造函数，用来生成`Promise`实例  
  
```javascript  
const promise = new Promise(function(resolve, reject) {});  
```  
  
`Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`  
  
- `resolve`函数的作用是，将`Promise`对象的状态从“未完成”变为“成功”  
- `reject`函数的作用是，将`Promise`对象的状态从“未完成”变为“失败”  
  
  
  
### 实例方法  
  
`Promise`构建出来的实例存在以下方法：  
  
- then()  
- then()  
- catch()  
- finally()  
  
  
  
#### then()  
  
`then`是实例状态发生改变时的回调函数，第一个参数是`resolved`状态的回调函数，第二个参数是`rejected`状态的回调函数  
  
`then`方法返回的是一个新的`Promise`实例，也就是`promise`能链式书写的原因  
  
```javascript  
getJSON("/posts.json").then(function(json) {  
  return json.post;  
}).then(function(post) {  
  // ...  
});  
```  
  
  
  
#### catch  
  
`catch()`方法是`.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数  
  
```javascript  
getJSON('/posts.json').then(function(posts) {  
  // ...  
}).catch(function(error) {  
  // 处理 getJSON 和 前一个回调函数运行时发生的错误  
  console.log('发生错误！', error);  
});  
```  
  
`Promise `对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止  
  
```javascript  
getJSON('/post/1.json').then(function(post) {  
  return getJSON(post.commentURL);  
}).then(function(comments) {  
  // some code  
}).catch(function(error) {  
  // 处理前面三个Promise产生的错误  
});  
```  
  
一般来说，使用`catch`方法代替`then()`第二个参数  
  
`Promise `对象抛出的错误不会传递到外层代码，即不会有任何反应  
  
```js  
const someAsyncThing = function() {  
  return new Promise(function(resolve, reject) {  
    // 下面一行会报错，因为x没有声明  
    resolve(x + 2);  
  });  
};  
```  
  
浏览器运行到这一行，会打印出错误提示`ReferenceError: x is not defined`，但是不会退出进程  
  
`catch()`方法之中，还能再抛出错误，通过后面`catch`方法捕获到  
  
  
  
#### finally()  
  
`finally()`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作  
  
```javascript  
promise  
.then(result => {···})  
.catch(error => {···})  
.finally(() => {···});  
```  
  
  
  
### 构造函数方法  
  
`Promise`构造函数存在以下方法：  
  
- all()  
- race()  
- allSettled()  
- resolve()  
- reject()  
- try()  
  
  
  
### all()  
  
`Promise.all()`方法用于将多个 `Promise `实例，包装成一个新的 `Promise `实例  
  
```javascript  
const p = Promise.all([p1, p2, p3]);  
```  
  
接受一个数组（迭代对象）作为参数，数组成员都应为`Promise`实例  
  
实例`p`的状态由`p1`、`p2`、`p3`决定，分为两种：  
  
- 只有`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数  
- 只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数  
  
注意，如果作为参数的 `Promise` 实例，自己定义了`catch`方法，那么它一旦被`rejected`，并不会触发`Promise.all()`的`catch`方法  
  
```javascript  
const p1 = new Promise((resolve, reject) => {  
  resolve('hello');  
})  
.then(result => result)  
.catch(e => e);  
  
const p2 = new Promise((resolve, reject) => {  
  throw new Error('报错了');  
})  
.then(result => result)  
.catch(e => e);  
  
Promise.all([p1, p2])  
.then(result => console.log(result))  
.catch(e => console.log(e));  
// ["hello", Error: 报错了]  
```  
  
如果`p2`没有自己的`catch`方法，就会调用`Promise.all()`的`catch`方法  
  
```javascript  
const p1 = new Promise((resolve, reject) => {  
  resolve('hello');  
})  
.then(result => result);  
  
const p2 = new Promise((resolve, reject) => {  
  throw new Error('报错了');  
})  
.then(result => result);  
  
Promise.all([p1, p2])  
.then(result => console.log(result))  
.catch(e => console.log(e));  
// Error: 报错了  
```  
  
  
  
### race()  
  
`Promise.race()`方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例  
  
```javascript  
const p = Promise.race([p1, p2, p3]);  
```  
  
只要`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变  
  
率先改变的 Promise 实例的返回值则传递给`p`的回调函数  
  
```javascript  
const p = Promise.race([  
  fetch('/resource-that-may-take-a-while'),  
  new Promise(function (resolve, reject) {  
    setTimeout(() => reject(new Error('request timeout')), 5000)  
  })  
]);  
  
p  
.then(console.log)  
.catch(console.error);  
```  
  
  
  
### allSettled()  
  
`Promise.allSettled()`方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例  
  
只有等到所有这些参数实例都返回结果，不管是`fulfilled`还是`rejected`，包装实例才会结束  
  
```javascript  
const promises = [  
  fetch('/api-1'),  
  fetch('/api-2'),  
  fetch('/api-3'),  
];  
  
await Promise.allSettled(promises);  
removeLoadingIndicator();  
```  
  
  
  
#### resolve()  
  
将现有对象转为 `Promise `对象  
  
```javascript  
Promise.resolve('foo')  
// 等价于  
new Promise(resolve => resolve('foo'))  
```  
  
参数可以分成四种情况，分别如下：  
  
- 参数是一个 Promise 实例，`promise.resolve`将不做任何修改、原封不动地返回这个实例  
- 参数是一个`thenable`对象，`promise.resolve`会将这个对象转为 `Promise `对象，然后就立即执行`thenable`对象的`then()`方法  
- 参数不是具有`then()`方法的对象，或根本就不是对象，`Promise.resolve()`会返回一个新的 Promise 对象，状态为`resolved`  
- 没有参数时，直接返回一个`resolved`状态的 Promise 对象  
  
  
  
#### reject()  
  
`Promise.reject(reason)`方法也会返回一个新的 Promise 实例，该实例的状态为`rejected`  
  
```javascript  
const p = Promise.reject('出错了');  
// 等同于  
const p = new Promise((resolve, reject) => reject('出错了'))  
  
p.then(null, function (s) {  
  console.log(s)  
});  
// 出错了  
```  
  
`Promise.reject()`方法的参数，会原封不动地变成后续方法的参数  
  
```javascript  
Promise.reject('出错了')  
.catch(e => {  
  console.log(e === '出错了')  
})  
// true  
```  
  
  
  
## 三、使用场景  
  
将图片的加载写成一个`Promise`，一旦加载完成，`Promise`的状态就发生变化  
  
```javascript  
const preloadImage = function (path) {  
  return new Promise(function (resolve, reject) {  
    const image = new Image();  
    image.onload  = resolve;  
    image.onerror = reject;  
    image.src = path;  
  });  
};  
```  
  
通过链式操作，将多个渲染数据分别给个`then`，让其各司其职。或当下个异步请求依赖上个请求结果的时候，我们也能够通过链式操作友好解决问题  
  
```js  
// 各司其职  
getInfo().then(res=>{  
    let { bannerList } = res  
    //渲染轮播图  
    console.log(bannerList)  
    return res  
}).then(res=>{  
      
    let { storeList } = res  
    //渲染店铺列表  
    console.log(storeList)  
    return res  
}).then(res=>{  
    let { categoryList } = res  
    console.log(categoryList)  
    //渲染分类列表  
    return res  
})  
```  
  
通过`all()`实现多个请求合并在一起，汇总所有请求结果，只需设置一个`loading`即可  
  
```js  
function initLoad(){  
    // loading.show() //加载loading  
    Promise.all([getBannerList(),getStoreList(),getCategoryList()]).then(res=>{  
        console.log(res)  
        loading.hide() //关闭loading  
    }).catch(err=>{  
        console.log(err)  
        loading.hide()//关闭loading  
    })  
}  
//数据初始化      
initLoad()  
```  
  
通过`race`可以设置图片请求超时  
  
```js  
//请求某个图片资源  
function requestImg(){  
    var p = new Promise(function(resolve, reject){  
        var img = new Image();  
        img.onload = function(){  
           resolve(img);  
        }  
        //img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"; 正确的  
        img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg1";  
    });  
    return p;  
}  
  
//延时函数，用于给请求计时  
function timeout(){  
    var p = new Promise(function(resolve, reject){  
        setTimeout(function(){  
            reject('图片请求超时');  
        }, 5000);  
    });  
    return p;  
}  
  
Promise  
.race([requestImg(), timeout()])  
.then(function(results){  
    console.log(results);  
})  
.catch(function(reason){  
    console.log(reason);  
});  
```  
# ES6中函数新增了哪些扩展?  
 ![](https://static.vue-js.com/54a04a10-5569-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
## 一、参数  
  
`ES6`允许为函数的参数设置默认值  
  
```js  
function log(x, y = 'World') {  
  console.log(x, y);  
}  
  
console.log('Hello') // Hello World  
console.log('Hello', 'China') // Hello China  
console.log('Hello', '') // Hello  
```  
  
函数的形参是默认声明的，不能使用`let`或`const`再次声明  
  
```js  
function foo(x = 5) {  
    let x = 1; // error  
    const x = 2; // error  
}  
```  
  
参数默认值可以与解构赋值的默认值结合起来使用  
  
```js  
function foo({x, y = 5}) {  
  console.log(x, y);  
}  
  
foo({}) // undefined 5  
foo({x: 1}) // 1 5  
foo({x: 1, y: 2}) // 1 2  
foo() // TypeError: Cannot read property 'x' of undefined  
```  
  
上面的`foo`函数，当参数为对象的时候才能进行解构，如果没有提供参数的时候，变量`x`和`y`就不会生成，从而报错，这里设置默认值避免  
  
```js  
function foo({x, y = 5} = {}) {  
  console.log(x, y);  
}  
  
foo() // undefined 5  
```  
  
参数默认值应该是函数的尾参数，如果不是非尾部的参数设置默认值，实际上这个参数是没发省略的  
  
```javascript  
function f(x = 1, y) {  
  return [x, y];  
}  
  
f() // [1, undefined]  
f(2) // [2, undefined]  
f(, 1) // 报错  
f(undefined, 1) // [1, 1]  
```  
  
  
  
## 二、属性  
  
### 函数的length属性  
  
`length`将返回没有指定默认值的参数个数  
  
```js  
(function (a) {}).length // 1  
(function (a = 5) {}).length // 0  
(function (a, b, c = 5) {}).length // 2  
```  
  
`rest` 参数也不会计入`length`属性  
  
```js  
(function(...args) {}).length // 0  
```  
  
如果设置了默认值的参数不是尾参数，那么`length`属性也不再计入后面的参数了  
  
```js  
(function (a = 0, b, c) {}).length // 0  
(function (a, b = 1, c) {}).length // 1  
```  
  
  
  
### name属性  
  
返回该函数的函数名  
  
```js  
var f = function () {};  
  
// ES5  
f.name // ""  
  
// ES6  
f.name // "f"  
```  
  
如果将一个具名函数赋值给一个变量，则 `name`属性都返回这个具名函数原本的名字  
  
```js  
const bar = function baz() {};  
bar.name // "baz"  
```  
  
`Function`构造函数返回的函数实例，`name`属性的值为`anonymous`  
  
```javascript  
(new Function).name // "anonymous"  
```  
  
`bind`返回的函数，`name`属性值会加上`bound`前缀  
  
```javascript  
function foo() {};  
foo.bind({}).name // "bound foo"  
  
(function(){}).bind({}).name // "bound "  
```  
  
  
  
## 三、作用域  
  
一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域  
  
等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的  
  
下面例子中，`y=x`会形成一个单独作用域，`x`没有被定义，所以指向全局变量`x`  
  
```js  
let x = 1;  
  
function f(y = x) {   
  // 等同于 let y = x    
  let x = 2;   
  console.log(y);  
}  
  
f() // 1  
```  
  
  
  
## 四、严格模式  
  
只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错  
  
```js  
// 报错  
function doSomething(a, b = a) {  
  'use strict';  
  // code  
}  
  
// 报错  
const doSomething = function ({a, b}) {  
  'use strict';  
  // code  
};  
  
// 报错  
const doSomething = (...a) => {  
  'use strict';  
  // code  
};  
  
const obj = {  
  // 报错  
  doSomething({a, b}) {  
    'use strict';  
    // code  
  }  
};  
```  
  
  
  
## 五、箭头函数  
  
使用“箭头”（`=>`）定义函数  
  
```js  
var f = v => v;  
  
// 等同于  
var f = function (v) {  
  return v;  
};  
```  
  
如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分  
  
```js  
var f = () => 5;  
// 等同于  
var f = function () { return 5 };  
  
var sum = (num1, num2) => num1 + num2;  
// 等同于  
var sum = function(num1, num2) {  
  return num1 + num2;  
};  
```  
  
如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用`return`语句返回  
  
```js  
var sum = (num1, num2) => { return num1 + num2; }  
```  
  
如果返回对象，需要加括号将对象包裹  
  
```js  
let getTempItem = id => ({ id: id, name: "Temp" });  
```  
  
注意点：  
  
- 函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象  
- 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误  
- 不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替  
- 不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数  
  
# ES6中对象新增了哪些扩展?  
  
  
 ![](https://static.vue-js.com/4da4dd40-5427-11eb-ab90-d9ae814b240d.png)  
  
  
  
## 一、属性的简写  
  
ES6中，当对象键名与对应值名相等的时候，可以进行简写  
  
```js  
const baz = {foo:foo}  
  
// 等同于  
const baz = {foo}  
```  
  
方法也能够进行简写  
  
```js  
const o = {  
  method() {  
    return "Hello!";  
  }  
};  
  
// 等同于  
  
const o = {  
  method: function() {  
    return "Hello!";  
  }  
}  
```  
  
在函数内作为返回值，也会变得方便很多  
  
```js  
function getPoint() {  
  const x = 1;  
  const y = 10;  
  return {x, y};  
}  
  
getPoint()  
// {x:1, y:10}  
```  
  
注意：简写的对象方法不能用作构造函数，否则会报错  
  
```js  
const obj = {  
  f() {  
    this.foo = 'bar';  
  }  
};  
  
new obj.f() // 报错  
```  
  
  
  
## 二、属性名表达式  
  
ES6 允许字面量定义对象时，将表达式放在括号内  
  
```js  
let lastWord = 'last word';  
  
const a = {  
  'first word': 'hello',  
  [lastWord]: 'world'  
};  
  
a['first word'] // "hello"  
a[lastWord] // "world"  
a['last word'] // "world"  
```  
  
表达式还可以用于定义方法名  
  
```js  
let obj = {  
  ['h' + 'ello']() {  
    return 'hi';  
  }  
};  
  
obj.hello() // hi  
```  
  
注意，属性名表达式与简洁表示法，不能同时使用，会报错  
  
```js  
// 报错  
const foo = 'bar';  
const bar = 'abc';  
const baz = { [foo] };  
  
// 正确  
const foo = 'bar';  
const baz = { [foo]: 'abc'};  
```  
  
注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串`[object Object]`  
  
```js  
const keyA = {a: 1};  
const keyB = {b: 2};  
  
const myObject = {  
  [keyA]: 'valueA',  
  [keyB]: 'valueB'  
};  
  
myObject // Object {[object Object]: "valueB"}  
```  
  
  
  
## 三、super关键字  
  
`this`关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字`super`，指向当前对象的原型对象  
  
```javascript  
const proto = {  
  foo: 'hello'  
};  
  
const obj = {  
  foo: 'world',  
  find() {  
    return super.foo;  
  }  
};  
  
Object.setPrototypeOf(obj, proto); // 为obj设置原型对象  
obj.find() // "hello"  
```  
  
  
  
## 四、扩展运算符的应用  
  
在解构赋值中，未被读取的可遍历的属性，分配到指定的对象上面  
  
```js  
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };  
x // 1  
y // 2  
z // { a: 3, b: 4 }  
```  
  
注意：解构赋值必须是最后一个参数，否则会报错  
  
解构赋值是浅拷贝  
  
```js  
let obj = { a: { b: 1 } };  
let { ...x } = obj;  
obj.a.b = 2; // 修改obj里面a属性中键值  
x.a.b // 2，影响到了结构出来x的值  
```  
  
对象的扩展运算符等同于使用`Object.assign()`方法  
  
  
  
## 五、属性的遍历  
  
ES6 一共有 5 种方法可以遍历对象的属性。  
  
- for...in：循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）  
  
- Object.keys(obj)：返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名  
  
- Object.getOwnPropertyNames(obj)：回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名  
  
- Object.getOwnPropertySymbols(obj)：返回一个数组，包含对象自身的所有 Symbol 属性的键名  
  
- Reflect.ownKeys(obj)：返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举  
  
上述遍历，都遵守同样的属性遍历的次序规则：  
  
- 首先遍历所有数值键，按照数值升序排列  
- 其次遍历所有字符串键，按照加入时间升序排列  
- 最后遍历所有 Symbol 键，按照加入时间升序排  
  
```js  
Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })  
// ['2', '10', 'b', 'a', Symbol()]  
```  
  
  
  
  
  
## 六、对象新增的方法  
  
关于对象新增的方法，分别有以下：  
  
- Object.is()  
- Object.assign()  
- Object.getOwnPropertyDescriptors()  
- Object.setPrototypeOf()，Object.getPrototypeOf()  
- Object.keys()，Object.values()，Object.entries()  
- Object.fromEntries()  
  
  
  
### Object.is()  
  
严格判断两个值是否相等，与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是`+0`不等于`-0`，二是`NaN`等于自身  
  
```js  
+0 === -0 //true  
NaN === NaN // false  
  
Object.is(+0, -0) // false  
Object.is(NaN, NaN) // true  
```  
  
  
  
### Object.assign()  
  
`Object.assign()`方法用于对象的合并，将源对象`source`的所有可枚举属性，复制到目标对象`target`  
  
`Object.assign()`方法的第一个参数是目标对象，后面的参数都是源对象  
  
```javascript  
const target = { a: 1, b: 1 };  
  
const source1 = { b: 2, c: 2 };  
const source2 = { c: 3 };  
  
Object.assign(target, source1, source2);  
target // {a:1, b:2, c:3}  
```  
  
注意：`Object.assign()`方法是浅拷贝，遇到同名属性会进行替换  
  
  
  
### Object.getOwnPropertyDescriptors()  
  
返回指定对象所有自身属性（非继承属性）的描述对象  
  
```js  
const obj = {  
  foo: 123,  
  get bar() { return 'abc' }  
};  
  
Object.getOwnPropertyDescriptors(obj)  
// { foo:  
//    { value: 123,  
//      writable: true,  
//      enumerable: true,  
//      configurable: true },  
//   bar:  
//    { get: [Function: get bar],  
//      set: undefined,  
//      enumerable: true,  
//      configurable: true } }  
```  
  
  
  
### Object.setPrototypeOf()  
  
`Object.setPrototypeOf`方法用来设置一个对象的原型对象  
  
```js  
Object.setPrototypeOf(object, prototype)  
  
// 用法  
const o = Object.setPrototypeOf({}, null);  
```  
  
  
  
### Object.getPrototypeOf()  
  
用于读取一个对象的原型对象  
  
```js  
Object.getPrototypeOf(obj);  
```  
  
  
  
### Object.keys()  
  
返回自身的（不含继承的）所有可遍历（enumerable）属性的键名的数组  
  
```js  
var obj = { foo: 'bar', baz: 42 };  
Object.keys(obj)  
// ["foo", "baz"]  
```  
  
  
  
### Object.values()  
  
返回自身的（不含继承的）所有可遍历（enumerable）属性的键对应值的数组  
  
```js  
const obj = { foo: 'bar', baz: 42 };  
Object.values(obj)  
// ["bar", 42]  
```  
  
  
  
### Object.entries()  
  
返回一个对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对的数组  
  
```js  
const obj = { foo: 'bar', baz: 42 };  
Object.entries(obj)  
// [ ["foo", "bar"], ["baz", 42] ]  
```  
  
  
  
### Object.fromEntries()  
  
用于将一个键值对数组转为对象  
  
```js  
Object.fromEntries([  
  ['foo', 'bar'],  
  ['baz', 42]  
])  
// { foo: "bar", baz: 42 }  
```  
  
