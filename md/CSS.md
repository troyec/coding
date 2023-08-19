# 如何实现单行／多行文本溢出的省略样式？  
## 一、前言  
  
在日常开发展示页面，如果一段文本的数量过长，受制于元素宽度的因素，有可能不能完全显示，为了提高用户的使用体验，这个时候就需要我们把溢出的文本显示成省略号  
  
对于文本的溢出，我们可以分成两种形式：  
  
- 单行文本溢出  
- 多行文本溢出  
  
  
  
## 二、实现方式  
  
  
  
### 单行文本溢出省略  
  
理解也很简单，即文本在一行内显示，超出部分以省略号的形式展现  
  
实现方式也很简单，涉及的`css`属性有：  
  
- text-overflow：规定当文本溢出时，显示省略符号来代表被修剪的文本  
- white-space：设置文字在一行显示，不能换行  
- overflow：文字长度超出限定宽度，则隐藏超出的内容  
  
`overflow`设为`hidden`，普通情况用在块级元素的外层隐藏内部溢出元素，或者配合下面两个属性实现文本溢出省略  
  
`white-space:nowrap`，作用是设置文本不换行，是`overflow:hidden`和`text-overflow：ellipsis`生效的基础  
  
`text-overflow`属性值有如下：  
  
- clip：当对象内文本溢出部分裁切掉  
- ellipsis：当对象内文本溢出时显示省略标记（...）  
  
`text-overflow`只有在设置了`overflow:hidden`和`white-space:nowrap`才能够生效的  
  
举个例子  
  
```html  
<style>  
    p{  
        overflow: hidden;  
        line-height: 40px;  
        width:400px;  
        height:40px;  
        border:1px solid red;  
        text-overflow: ellipsis;  
        white-space: nowrap;  
    }  
</style>  
<p 这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本</p >  
```  
  
效果如下：  
  
 ![](https://static.vue-js.com/bb3048e0-a0e9-11eb-85f6-6fac77c0c9b3.png)  
  
可以看到，设置单行文本溢出较为简单，并且省略号显示的位置较好  
  
  
  
### 多行文本溢出省略  
  
多行文本溢出的时候，我们可以分为两种情况：  
  
- 基于高度截断  
- 基于行数截断  
  
  
  
#### 基于高度截断  
  
#### 伪元素 + 定位  
  
核心的`css`代码结构如下：  
  
- position: relative：为伪元素绝对定位  
- overflow: hidden：文本溢出限定的宽度就隐藏内容）  
- position: absolute：给省略号绝对定位  
- line-height: 20px：结合元素高度,高度固定的情况下,设定行高, 控制显示行数  
- height: 40px：设定当前元素高度  
- ::after {} ：设置省略号样式  
  
代码如下所示：  
  
```html  
<style>  
    .demo {  
        position: relative;  
        line-height: 20px;  
        height: 40px;  
        overflow: hidden;  
    }  
    .demo::after {  
        content: "...";  
        position: absolute;  
        bottom: 0;  
        right: 0;  
        padding: 0 20px 0 10px;  
    }  
</style>  
  
<body>  
    <div class='demo'>这是一段很长的文本</div>  
</body>  
```  
  
实现原理很好理解，就是通过伪元素绝对定位到行尾并遮住文字，再通过 `overflow: hidden` 隐藏多余文字  
  
这种实现具有以下优点：  
  
- 兼容性好，对各大主流浏览器有好的支持  
- 响应式截断，根据不同宽度做出调整  
  
一般文本存在英文的时候，可以设置`word-break: break-all`使一个单词能够在换行时进行拆分  
  
  
  
#### 基于行数截断  
  
纯`css`实现也非常简单，核心的`css`代码如下：  
  
- -webkit-line-clamp: 2：用来限制在一个块元素显示的文本的行数，为了实现该效果，它需要组合其他的WebKit属性）  
- display: -webkit-box：和1结合使用，将对象作为弹性伸缩盒子模型显示   
- -webkit-box-orient: vertical：和1结合使用 ，设置或检索伸缩盒对象的子元素的排列方式   
- overflow: hidden：文本溢出限定的宽度就隐藏内容  
- text-overflow: ellipsis：多行文本的情况下，用省略号“…”隐藏溢出范围的文本  
  
```html  
<style>  
    p {  
        width: 400px;  
        border-radius: 1px solid red;  
        -webkit-line-clamp: 2;  
        display: -webkit-box;  
        -webkit-box-orient: vertical;  
        overflow: hidden;  
        text-overflow: ellipsis;  
    }  
</style>  
<p>  
    这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本  
    这是一些文本这是一些文本这是一些文本这是一些文本这是一些文本  
</p >  
```  
  
可以看到，上述使用了`webkit`的`CSS`属性扩展，所以兼容浏览器范围是`PC`端的`webkit`内核的浏览器，由于移动端大多数是使用`webkit`，所以移动端常用该形式  
  
需要注意的是，如果文本为一段很长的英文或者数字，则需要添加`word-wrap: break-word`属性  
  
还能通过使用`javascript`实现配合`css`，实现代码如下所示：  
  
css结构如下：  
  
```css  
p {  
    position: relative;  
    width: 400px;  
    line-height: 20px;  
    overflow: hidden;  
  
}  
.p-after:after{  
    content: "...";   
    position: absolute;   
    bottom: 0;   
    right: 0;   
    padding-left: 40px;  
    background: -webkit-linear-gradient(left, transparent, #fff 55%);  
    background: -moz-linear-gradient(left, transparent, #fff 55%);  
    background: -o-linear-gradient(left, transparent, #fff 55%);  
    background: linear-gradient(to right, transparent, #fff 55%);  
}  
```  
  
javascript代码如下：  
  
```js  
$(function(){  
 //获取文本的行高，并获取文本的高度，假设我们规定的行数是五行，那么对超过行数的部分进行限制高度，并加上省略号  
   $('p').each(function(i, obj){  
        var lineHeight = parseInt($(this).css("line-height"));  
        var height = parseInt($(this).height());  
        if((height / lineHeight) >3 ){  
            $(this).addClass("p-after")  
            $(this).css("height","60px");  
        }else{  
            $(this).removeClass("p-after");  
        }  
    });  
})  
```  
  
# CSS中，有哪些方式可以隐藏页面元素？有什么区别?  
## 一、前言  
  
在平常的样式排版中，我们经常遇到将某个模块隐藏的场景  
  
通过`css`隐藏元素的方法有很多种，它们看起来实现的效果是一致的  
  
但实际上每一种方法都有一丝轻微的不同，这些不同决定了在一些特定场合下使用哪一种方法  
  
## 二、实现方式  
  
通过`css`实现隐藏元素方法有如下：  
  
- display:none  
- visibility:hidden  
- opacity:0  
- 设置height、width模型属性为0  
- position:absolute  
- clip-path  
  
### display:none  
  
设置元素的`display`为`none`是最常用的隐藏元素的方法  
  
```css  
.hide {  
    display:none;  
}  
```  
  
将元素设置为`display:none`后，元素在页面上将彻底消失  
  
元素本身占有的空间就会被其他元素占有，也就是说它会导致浏览器的重排和重绘  
  
消失后，自身绑定的事件不会触发，也不会有过渡效果  
  
特点：元素不可见，不占据空间，无法响应点击事件  
  
### visibility:hidden  
  
设置元素的`visibility`为`hidden`也是一种常用的隐藏元素的方法  
  
从页面上仅仅是隐藏该元素，DOM结果均会存在，只是当时在一个不可见的状态，不会触发重排，但是会触发重绘  
  
```css  
.hidden{  
    visibility:hidden  
}  
```  
  
给人的效果是隐藏了，所以他自身的事件不会触发  
  
特点：元素不可见，占据页面空间，无法响应点击事件  
  
  
### opacity:0  
  
`opacity`属性表示元素的透明度，将元素的透明度设置为0后，在我们用户眼中，元素也是隐藏的  
  
不会引发重排，一般情况下也会引发重绘  
  
> 如果利用 animation 动画，对 opacity 做变化（animation会默认触发GPU加速），则只会触发 GPU 层面的 composite，不会触发重绘  
  
```css  
.transparent {  
    opacity:0;  
}  
```  
  
由于其仍然是存在于页面上的，所以他自身的的事件仍然是可以触发的，但被他遮挡的元素是不能触发其事件的  
  
需要注意的是：其子元素不能设置opacity来达到显示的效果  
  
特点：改变元素透明度，元素不可见，占据页面空间，可以响应点击事件  
  
  
  
### 设置height、width属性为0  
  
将元素的`margin`，`border`，`padding`，`height`和`width`等影响元素盒模型的属性设置成0，如果元素内有子元素或内容，还应该设置其`overflow:hidden`来隐藏其子元素  
  
```css  
.hiddenBox {  
    margin:0;       
    border:0;  
    padding:0;  
    height:0;  
    width:0;  
    overflow:hidden;  
}  
```  
  
特点：元素不可见，不占据页面空间，无法响应点击事件  
  
  
  
### position:absolute  
  
将元素移出可视区域  
  
```css  
.hide {  
   position: absolute;  
   top: -9999px;  
   left: -9999px;  
}  
```  
  
特点：元素不可见，不影响页面布局  
  
  
### clip-path  
  
通过裁剪的形式  
  
```css  
.hide {  
  clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);  
}  
```  
  
特点：元素不可见，占据页面空间，无法响应点击事件  
  
  
### 小结  
  
最常用的还是`display:none`和`visibility:hidden`，其他的方式只能认为是奇招，它们的真正用途并不是用于隐藏元素，所以并不推荐使用它们  
  
  
## 三、区别  
  
关于`display: none`、`  visibility: hidden`、`opacity: 0`的区别，如下表所示：  
  
|                        | display: none | visibility: hidden | opacity: 0 |  
| :--------------------- | :------------ | :----------------- | ---------- |  
| 页面中                 | 不存在        | 存在               | 存在       |  
| 重排                   | 会            | 不会               | 不会       |  
| 重绘                   | 会            | 会                 | 不一定     |  
| 自身绑定事件           | 不触发        | 不触发             | 可触发     |  
| transition             | 不支持        | 支持               | 支持       |  
| 子元素可复原           | 不能          | 能                 | 不能       |  
| 被遮挡的元素可触发事件 | 能            | 能                 | 不能       |  
  
  
```js  
const vnode = {  
    tag: 'DIV',  
    attrs: {  
        id: 'app'  
    },  
    children: [{  
            tag: 'SPAN',  
            children: [{  
                tag: 'A',  
                children: []  
            }]  
        },  
        {  
            tag: 'SPAN',  
            children: [{  
                    tag: 'A',  
                    children: []  
                },  
                {  
                    tag: 'A',  
                    children: []  
                }  
            ]  
        }  
    ]  
}  
  
function render(vnode) {  
  
}  
```  
# CSS3 中 transition 和 animation 的属性分别有哪些？  
在 CSS3 中，`transition` 和 `animation` 是两种用于实现动画效果的属性。它们分别用于不同的动画需求和实现方式。  
  
### Transition 属性：  
  
`transition` 属性用于定义元素在状态改变时从一个样式转换到另一个样式的过渡效果。它包含以下几个属性：  
  
- `transition-property`：指定过渡效果应用的 CSS 属性名称，多个属性可以用逗号分隔。  
- `transition-duration`：指定过渡效果的持续时间，单位可以是秒(s)或毫秒(ms)。  
- `transition-timing-function`：指定过渡效果的时间曲线，也就是过渡的速度变化函数。  
- `transition-delay`：指定过渡效果开始之前的延迟时间，单位可以是秒(s)或毫秒(ms)。  
  
示例：  
```css  
/* 定义一个简单的过渡效果 */  
.box {  
  width: 100px;  
  height: 100px;  
  background-color: red;  
  transition: width 1s ease-in-out;  
}  
  
.box:hover {  
  width: 200px;  
}  
```  
  
在上面的示例中，当鼠标悬停在 `.box` 元素上时，宽度从 100px 过渡到 200px，过渡持续时间为 1 秒，过渡速度为 ease-in-out。  
  
### Animation 属性：  
  
`animation` 属性用于定义复杂的动画效果，可以自定义关键帧（keyframes）来实现更复杂的动画效果。它包含以下几个属性：  
  
- `animation-name`：指定定义动画的关键帧名称。  
- `animation-duration`：指定动画的持续时间，单位可以是秒(s)或毫秒(ms)。  
- `animation-timing-function`：指定动画的时间曲线，也就是动画的速度变化函数。  
- `animation-delay`：指定动画开始之前的延迟时间，单位可以是秒(s)或毫秒(ms)。  
- `animation-iteration-count`：指定动画的重复次数，可以使用一个整数值或 `infinite`（表示无限循环）。  
- `animation-direction`：指定动画的播放方向，可以是 `normal`（默认），`reverse`（反向播放），`alternate`（正向再反向循环），或 `alternate-reverse`（反向再正向循环）。  
- `animation-fill-mode`：指定动画在非运行时的样式，可以是 `none`（默认），`forwards`（保持最后一帧的样式），`backwards`（应用第一帧的样式），或 `both`（同时应用第一帧和最后一帧的样式）。  
- `animation-play-state`：指定动画的播放状态，可以是 `running`（默认，动画正在播放）或 `paused`（动画暂停）。  
  
示例：  
```css  
/* 定义一个简单的动画 */  
@keyframes slide-in {  
  0% {  
    transform: translateX(-100%);  
  }  
  100% {  
    transform: translateX(0);  
  }  
}  
  
.box {  
  width: 100px;  
  height: 100px;  
  background-color: red;  
  animation: slide-in 1s ease-in-out infinite alternate;  
}  
```  
  
在上面的示例中，`.box` 元素会应用一个名为 `slide-in` 的动画，从左侧滑动进入容器，动画持续时间为 1 秒，以 ease-in-out 时间曲线播放，无限循环，并且往返运动。  
# 行内元素和块级元素有什么区别  
主要区别如下：  
  
1. **盒模型**：块级元素会生成一个块级盒子，而行内元素不会。块级盒子会在水平方向上占据整个可用空间，并且垂直方向上会按照内容的高度自动调整。而行内元素则只会包裹着文字或其他行内元素。  
  
2. **布局**：块级元素通常是页面布局的基础，因为它们可以通过设置宽度、高度、边距和填充等属性来控制其位置和尺寸。而行内元素则更适合用于包裹文本或其他行内元素，并且不能设置宽度、高度等布局相关属性。  
  
3. **默认样式**：块级元素和行内元素的默认样式也有所不同。例如，块级元素的 `display` 属性默认值为 `block`，而行内元素的默认值为 `inline`；块级元素的 `margin` 和 `padding` 属性默认值为非零值，而行内元素的默认值为 0。  
  
# 说说对 CSS 预编语言的理解，以及它们之间的区别  
CSS 预编语言是一种基于 CSS 的扩展语言，可以更加方便和高效地编写 CSS 代码。其主要作用是为 CSS 提供了变量、函数、嵌套、继承、混合等功能，以及更加易于维护和组织的代码结构。  
  
常见的 CSS 预编语言有 Sass、Less 和 Stylus 等，它们之间的区别如下：  
  
1. 语法不同：Sass 和 Less 使用类似于 CSS 的语法规则，而 Stylus 则使用了更加简洁和灵活的缩进式语法。  
  
2. 变量定义方式不同：Sass 使用 `$` 符号来定义变量，Less 使用 `@` 符号，Stylus 则直接使用变量名即可。  
  
3. 操作符和函数库不同：Sass 和 Less 支持常见的操作符和函数库，例如运算符、颜色处理、字符串处理等，而 Stylus 的函数库更加强大，支持更多的特性和功能。  
  
4. 编译方式不同：Sass 和 Less 都需要通过编译器进行编译，可以将预编译的代码转换成标准的 CSS 代码。而 Stylus 则可以直接在浏览器中解析和执行，可以动态调整样式和布局。  
  
总之，CSS 预编语言是一种非常有用的工具，可以提高 CSS 开发的效率和可维护性。选择哪种预编语言取决于项目需求和个人喜好，需要根据具体情况来进行选择。  
# html和css中的图片加载与渲染规则是什么样的？  
Web浏览器先会把获取到的HTML代码解析成一个DOM树，HTML中的每个标签都是DOM树中的一个节点，包括`display: none`隐藏的标签，还有JavaScript动态添加的元素等。  
  
浏览器会获取到所有样式，并会把所有样式解析成样式规则，在解析的过程中会去掉浏览器不能识别的样式。  
  
浏览器将会把DOM树和样式规则组合在一起（DOM元素和样式规则匹配）后将会合建一个渲染树（Render Tree），渲染树类似于DOM树，但两者别还是很大的：  
  
渲染树能识别样式，渲染树中每个节点（NODE）都有自己的样式，而且渲染树不包含隐藏的节点（比如display:none的节点，还有</head>内的一些节点），因为这些节点不会用于渲染，也不会影响节点的渲染，因此不会包含到渲染树中。一旦渲染树构建完毕后，浏览器就可以根据渲染树来绘制页面了。  
  
简单的归纳就是浏览器渲染Web页面大约会经过六个过程：  
  
* 解析HTML，构成DOM树  
* 解析加载的样式，构建样式规则树  
* 加载JavaScript，执行JavaScript代码  
* DOM树和样式规则树进行匹配，构成渲染树  
* 计算元素位置进行页面布局  
* 绘制页面，最终在浏览器中呈现  
  
是不是会感觉这个和我们图像加载渲染没啥关系一样，事实并非如此，因为img、picture或者background-image都是DOM树或样式规则中的一部分，那么咱们套用进来，图片加载和渲染的时机有可能是下面这样：  
  
* 解析HTML时，如果遇到img或picture标签，将会加载图片  
* 解析加载的样式，遇到background-image时，并不会加载图片，而会构建样式规则树  
* 加载JavaScript，执行JavaScript代码，如果代码中有创建img元素之类，会添加到DOM树中；如查有添加background-image规则，将会添加到样式规则树中  
* DOM树和样式规则匹配时构建渲染树，如果DOM树节点匹配到样式规则中的backgorund-image，则会加载背景图片  
* 计算元素（图片）位置进行布局  
* 开始渲染图片，浏览器将呈现渲染出来的图片  
  
上面套用浏览器渲染页面的机制，但图片加载与渲染还是有一定的规则。因为，页面中不是所有的`<img>`（或picture）元素引入的图片和background-image引入的背景图片都会加载的。那么就引发出新问题了，什么时候会真正的加载，加载规则又是什么？  
  
先概括一点：  
  
> Web页面中不是所有的图片都会加载和渲染！  
  
我们可以归纳为：  
  
* `<img>`、`<picture>`和设置background-image的元素遇到display:none时，图片不会渲染，也不会加载。  
    * 当一个元素设置了 `display: none` 样式后，该元素和其子元素都不会显示在页面上，布局也不会占据空间。浏览器会判断这些元素是否需要渲染，并且会优化性能以减少资源的浪费，因此不会去加载它们所包含的图片资源。这样做可以提高网页的加载速度，减轻服务器的负担，同时也有助于防止篡改或盗用图片等不良行为。  
     * 部分旧版本的浏览器中可能会加载图片，但是不渲染  
* `<img>`、`<picture>`和设置background-image的元素祖先元素设置display:none时，background-image不会渲染也不会加载，而img和picture引入的图片不会渲染但会加载  
* `<img>`、`<picture>`和background-image引入相同路径相同图片文件名时，图片只会加载一次  
* 样式文件中background-image引入的图片，如果匹配不到DOM元素，图片不会加载  
* 伪类引入的background-image，比如:hover，只有当伪类被触发时，图片才会加载  
  
# 说说你对 CSS 模块化的理解  
## CSS 发展  
  
我们在书写 css 的时候其实经历了以下几个阶段：  
  
* 手写源生 CSS  
* 使用预处理器 Sass/Less  
* 使用后处理器 PostCSS  
* 使用 css modules  
* 使用 css in js  
  
### 手写源生 CSS  
  
在我们最初学习写页面的时候，大家都学过怎么去写 css，也就以下几种情况：  
  
* 行内样式，即直接在 html 中的 style 属性里编写 css 代码。  
* 内嵌样式，即在 html h 中的 style 标签内编写 class，提供给当前页面使用。  
* 导入样式，即在内联样式中 通过 @import 方法，导入其他样式，提供给当前页面使用。  
* 外部样式，即使用 html 中的 link 标签，加载样式，提供给当前页面使用。  
  
我们在不断摸索中，逐渐形成了以编写**内嵌样式**和**外部样式**为主要的编写习惯。  
  
读到这里大家肯定有所疑问，为什么不建议使用行内样式？  
  
> 使用行内样式的缺点  
>   
> * 样式不能复用。  
> * 样式权重太高，样式不好覆盖。  
> * 表现层与结构层没有分离。  
> * 不能进行缓存，影响加载效率。  
  
然后我们继续剖析一下，为什么不建议使用导入样式？  
  
经测试，在 css 中使用 @import 会有以下两种情况：  
  
1、在 IE6-8 下，@import 声明指向的样式表并不会与页面其他资源并发加载，而是等页面所有资源加载完成后才开始下载。  
  
2、如果在 link 标签中去 @import 其他 css，页面会等到所有资源加载完成后，才开始解析 link 标签中 @import 的 css。  
  
> 使用导入样式的缺点  
>   
> * 导入样式，只能放在 style 标签的第一行，放其他行则会无效。  
> * @import 声明的样式表不能充分利用浏览器并发请求资源的行为，其加载行为往往会延后触发或被其他资源加载挂起。  
> * 由于 @import 样式表的延后加载，可能会导致页面样式闪烁。  
  
### 使用预处理器 Sass/Less  
  
随着时间的不断发展，我们逐渐发现，编写源生的 css 其实并不友好，例如：源生的 css 不支持变量，不支持嵌套，不支持父选择器等等，这些种种问题，催生出了像 sass/less 这样的预处理器。  
  
预处理器主要是强化了 css 的语法，弥补了上文说了这些问题，但本质上，打包出来的结果和源生的 css 都是一样的，只是对开发者友好，写起来更顺滑。  
  
### 后处理器 PostCSS  
  
随着前端工程化的不断发展，越来越多的工具被前端大佬们开发出来，愿景是把所有的重复性的工作都交给机器去做，在 css 领域就产生了 postcss。  
  
postcss 可以称作为 css 界的 babel，它的实现原理是通过 ast 去分析我们的 css 代码，然后将分析的结果进行处理，从而衍生出了许多种处理 css 的使用场景。  
  
常用的 postcss 使用场景有：  
  
* 配合 stylelint 校验 css 语法  
* 自动增加浏览器前缀 autoprefixer  
* 编译 css next 的语法  
  
### CSS 模块化迅速发展  
  
随着 react、vue 等基于模块化的框架的普及使用，我们编写源生 css 的机会也越来越少。我们常常将页面拆分成许多个小组件，然后像搭积木一样将多个小组件组成最终呈现的页面。  
  
但是我们知道，css 是根据类名去匹配元素的，如果有两个组件使用了一个相同的类名，后者就会把前者的样式给覆盖掉，看来解决样式命名的冲突是个大问题。  
  
为了解决这个问题，产生出了 CSS 模块化的概念。  
  
## CSS 模块化定义  
  
* 你是否为 class 命名而感到苦恼？  
* 你是否有怕跟别人使用同样 class 名而感到担忧？  
* 你是否因层级结构不清晰而感到烦躁？  
* 你是否因代码难以复用而感到不爽？  
* 你是否因为 common.css 的庞大而感到恐惧？  
  
你如果遇到如上问题，那么就很有必要使用 css 模块化。  
  
## CSS 模块化的实现方式  
  
### BEM 命名规范  
  
BEM 的意思就是块（block）、元素（element）、修饰符（modifier）。是由 Yandex 团队提出的一种前端命名方法论。这种巧妙的命名方法让你的 css 类对其他开发者来说更加透明而且更有意义。  
  
BEM 的命名规范如下：  
  
```awk  
/* 块即是通常所说的 Web 应用开发中的组件或模块。每个块在逻辑上和功能上都是相互独立的。 */  
.block {  
}  
  
/* 元素是块中的组成部分。元素不能离开块来使用。BEM 不推荐在元素中嵌套其他元素。 */  
.block__element {  
}  
  
/* 修饰符用来定义块或元素的外观和行为。同样的块在应用不同的修饰符之后，会有不同的外观 */  
.block--modifier {  
}复制代码  
```  
  
通过 bem 的命名方式，可以让我们的 css 代码层次结构清晰，通过严格的命名也可以解决命名冲突的问题，但也不能完全避免，毕竟只是一个命名约束，不按规范写照样能运行。  
  
### CSS Modules  
  
CSS Modules 指的是我们像 import js 一样去引入我们的 css 代码，代码中的每一个类名都是引入对象的一个属性，通过这种方式，即可在使用时明确指定所引用的 css 样式。  
  
并且 CSS Modules 在打包的时候会自动将类名转换成 hash 值，完全杜绝 css 类名冲突的问题。  
  
使用方式如下：  
  
1、定义 css 文件。  
  
```css  
.className {  
  color: green;  
}  
/* 编写全局样式 */  
:global(.className) {  
  color: red;  
}  
  
/* 样式复用 */  
.otherClassName {  
  composes: className;  
  color: yellow;  
}  
  
.otherClassName {  
  composes: className from "./style.css";  
}  
```  
  
2、在 js 模块中导入 css 文件。  
  
```applescript  
import styles from "./style.css";  
  
element.innerHTML = '<div class="' + styles.className + '">';  
```  
  
3、配置 css-loader 打包。  
  
CSS Modules 不能直接使用，而是需要进行打包，一般通过配置 css-loader 中的 modules 属性即可完成 css modules 的配置。  
  
```awk  
// webpack.config.js  
module.exports = {  
  module: {  
    rules: [  
      {  
        test: /\.css$/,  
        use:{  
          loader: 'css-loader',  
          options: {  
            modules: {  
              // 自定义 hash 名称  
              localIdentName: '[path][name]__[local]--[hash:base64:5]',  
            }  
          }  
       }  
    ]  
  }  
};  
  
```  
  
4、最终打包出来的 css 类名就是由一长串 hash 值生成。  
  
```processing  
._2DHwuiHWMnKTOYG45T0x34 {  
  color: red;  
}  
  
._10B-buq6_BEOTOl9urIjf8 {  
  background-color: blue;  
}  
```  
  
### CSS In JS  
  
CSS in JS，意思就是使用 js 语言写 css，完全不需要些单独的 css 文件，所有的 css 代码全部放在组件内部，以实现 css 的模块化。  
  
CSS in JS 其实是一种编写思想，目前已经有超过 40 多种方案的实现，最出名的是 styled-components。  
  
使用方式如下：  
  
```pgsql  
import React from "react";  
import styled from "styled-components";  
  
// 创建一个带样式的 h1 标签  
const Title = styled.h1`  
  font-size: 1.5em;  
  text-align: center;  
  color: palevioletred;  
`;  
  
// 创建一个带样式的 section 标签  
const Wrapper = styled.section`  
  padding: 4em;  
  background: papayawhip;  
`;  
  
// 通过属性动态定义样式  
const Button = styled.button`  
  background: ${props => (props.primary ? "palevioletred" : "white")};  
  color: ${props => (props.primary ? "white" : "palevioletred")};  
  
  font-size: 1em;  
  margin: 1em;  
  padding: 0.25em 1em;  
  border: 2px solid palevioletred;  
  border-radius: 3px;  
`;  
  
// 样式复用  
const TomatoButton = styled(Button)`  
  color: tomato;  
  border-color: tomato;  
`;  
  
<Wrapper>  
  <Title>Hello World, this is my first styled component!</Title>  
  <Button primary>Primary</Button>  
</Wrapper>;  
```  
  
可以看到，我们直接在 js 中编写 css，案例中在定义源生 html 时就创建好了样式，在使用的时候就可以渲染出带样式的组件了。  
  
除此之外，还有其他比较出名的库：  
  
* emotion  
* radium  
* glamorous  
  
## 总结  
  
最后放一张总结好的图。  
  
![css-modules](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/30/16f5477372d2bee3~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)  
  
# ::before 和::after 中双冒号和单冒号有什么区别、作用？  
在 CSS 中伪类一直用 : 表示，如 :hover, :active 等  
  
伪元素在 CSS1 中已存在，当时语法是用 `:` 表示，如 `:before` 和 `:after`  
  
后来在 CSS3 中修订，伪元素用 `::` 表示，如 `::before` 和 `::after`，以此区分伪元素和伪类  
  
由于低版本 IE 对双冒号不兼容，开发者为了兼容性各浏览器，可以继续使用 `:after` 这种老语法表示伪元素  
  
* 单冒号（:）用于 css3 的伪类  
* 双冒号（::）用于 css3 的伪元素  
  
作用：`::before` 和 `::after` 的主要作用是在元素内容前后加上指定内容。  
  
另外，伪类与伪元素的区别有：  
* 伪类与伪元素都是用于向选择器加特殊效果  
* 伪类与伪元素的本质区别就是是否抽象创造了新元素  
* 伪类只要不是互斥可以叠加使用  
* 伪元素在一个选择器中只能出现一次，并且只能出现在末尾  
* 伪类与伪元素优先级分别与类、标签优先级相同  
  
# 怎么理解回流跟重绘？什么场景下会触发？  
 ![](https://static.vue-js.com/1ed5d340-9cdc-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、是什么  
  
在`HTML`中，每个元素都可以理解成一个盒子，在浏览器解析过程中，会涉及到回流与重绘：  
  
- 回流：布局引擎会根据各种样式计算每个盒子在页面上的大小与位置  
  
- 重绘：当计算好盒模型的位置、大小及其他属性后，浏览器根据每个盒子特性进行绘制  
  
具体的浏览器解析渲染机制如下所示：  
  
 ![](https://static.vue-js.com/2b56a950-9cdc-11eb-ab90-d9ae814b240d.png)  
  
- 解析HTML，生成DOM树，解析CSS，生成CSSOM树  
  
- 将DOM树和CSSOM树结合，生成渲染树(Render Tree)  
- Layout(回流):根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）  
- Painting(重绘):根据渲染树以及回流得到的几何信息，得到节点的绝对像素  
- Display:将像素发送给GPU，展示在页面上  
  
  
  
在页面初始渲染阶段，回流不可避免的触发，可以理解成页面一开始是空白的元素，后面添加了新的元素使页面布局发生改变  
  
当我们对 `DOM` 的修改引发了 `DOM `几何尺寸的变化（比如修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性，然后再将计算的结果绘制出来  
  
当我们对 `DOM `的修改导致了样式的变化（`color`或`background-color`），却并未影响其几何属性时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式，这里就仅仅触发了重绘  
  
  
## 二、如何触发  
  
要想减少回流和重绘的次数，首先要了解回流和重绘是如何触发的  
  
### 回流触发时机  
  
回流这一阶段主要是计算节点的位置和几何信息，那么当页面布局和几何信息发生变化的时候，就需要回流，如下面情况：  
  
- 添加或删除可见的DOM元素  
- 元素的位置发生变化  
- 元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）  
- 内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代  
- 页面一开始渲染的时候（这避免不了）  
- 浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）  
  
还有一些容易被忽略的操作：获取一些特定属性的值  
  
> offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight  
  
这些属性有一个共性，就是需要通过即时计算得到。因此浏览器为了获取这些值，也会进行回流  
  
除此还包括`getComputedStyle `方法，原理是一样的  
  
  
  
### 重绘触发时机  
  
触发回流一定会触发重绘  
  
可以把页面理解为一个黑板，黑板上有一朵画好的小花。现在我们要把这朵从左边移到了右边，那我们要先确定好右边的具体位置，画好形状（回流），再画上它原有的颜色（重绘）  
  
除此之外还有一些其他引起重绘行为：  
  
- 颜色的修改  
  
- 文本方向的修改  
- 阴影的修改  
  
  
  
### 浏览器优化机制  
  
由于每次重排都会造成额外的计算消耗，因此大多数浏览器都会通过队列化修改并批量执行来优化重排过程。浏览器会将修改操作放入到队列里，直到过了一段时间或者操作达到了一个阈值，才清空队列  
  
当你获取布局信息的操作的时候，会强制队列刷新，包括前面讲到的`offsetTop`等方法都会返回最新的数据  
  
因此浏览器不得不清空队列，触发回流重绘来返回正确的值  
  
  
  
## 三、如何减少  
  
我们了解了如何触发回流和重绘的场景，下面给出避免回流的经验：  
  
- 如果想设定元素的样式，通过改变元素的 `class` 类名 (尽可能在 DOM 树的最里层)  
- 避免设置多项内联样式  
- 应用元素的动画，使用 `position` 属性的 `fixed` 值或 `absolute` 值(如前文示例所提)  
- 避免使用 `table` 布局，`table` 中每个元素的大小以及内容的改动，都会导致整个 `table` 的重新计算  
- 对于那些复杂的动画，对其设置 `position: fixed/absolute`，尽可能地使元素脱离文档流，从而减少对其他元素的影响  
- 使用css3硬件加速，可以让`transform`、`opacity`、`filters`这些动画不会引起回流重绘  
- 避免使用 CSS 的 `JavaScript` 表达式   
  
在使用 `JavaScript` 动态插入多个节点时, 可以使用`DocumentFragment`. 创建后一次插入. 就能避免多次的渲染性能  
  
但有时候，我们会无可避免地进行回流或者重绘，我们可以更好使用它们  
  
例如，多次修改一个把元素布局的时候，我们很可能会如下操作  
  
```js  
const el = document.getElementById('el')  
for(let i=0;i<10;i++) {  
    el.style.top  = el.offsetTop  + 10 + "px";  
    el.style.left = el.offsetLeft + 10 + "px";  
}  
```  
  
每次循环都需要获取多次`offset`属性，比较糟糕，可以使用变量的形式缓存起来，待计算完毕再提交给浏览器发出重计算请求  
  
```js  
// 缓存offsetLeft与offsetTop的值  
const el = document.getElementById('el')   
let offLeft = el.offsetLeft, offTop = el.offsetTop  
  
// 在JS层面进行计算  
for(let i=0;i<10;i++) {  
  offLeft += 10  
  offTop  += 10  
}  
  
// 一次性将计算结果应用到DOM上  
el.style.left = offLeft + "px"  
el.style.top = offTop  + "px"  
```  
  
我们还可避免改变样式，使用类名去合并样式  
  
```js  
const container = document.getElementById('container')  
container.style.width = '100px'  
container.style.height = '200px'  
container.style.border = '10px solid red'  
container.style.color = 'red'  
```  
  
使用类名去合并样式  
  
```html  
<style>  
    .basic_style {  
        width: 100px;  
        height: 200px;  
        border: 10px solid red;  
        color: red;  
    }  
</style>  
<script>  
    const container = document.getElementById('container')  
    container.classList.add('basic_style')  
</script>  
```  
  
前者每次单独操作，都去触发一次渲染树更改（新浏览器不会），  
  
都去触发一次渲染树更改，从而导致相应的回流与重绘过程  
  
合并之后，等于我们将所有的更改一次性发出  
  
我们还可以通过通过设置元素属性`display: none`，将其从页面上去掉，然后再进行后续操作，这些后续操作也不会触发回流与重绘，这个过程称为离线操作  
  
```js  
const container = document.getElementById('container')  
container.style.width = '100px'  
container.style.height = '200px'  
container.style.border = '10px solid red'  
container.style.color = 'red'  
```  
  
离线操作后  
  
```js  
let container = document.getElementById('container')  
container.style.display = 'none'  
container.style.width = '100px'  
container.style.height = '200px'  
container.style.border = '10px solid red'  
container.style.color = 'red'  
...（省略了许多类似的后续操作）  
container.style.display = 'block'  
```  
  
# z-index属性在什么情况下会失效？  
  
通常 z-index 的使用是在有两个重叠的标签，在一定的情况下控制其中一个在另一个的上方或者下方出现。z-index值越大就越是在上层。z-index元素的position属性需要是relative，absolute或是fixed。  
  
z-index属性在下列情况下会失效：  
  
- 父元素position为relative时，子元素的z-index失效。解决：父元素position改为absolute或static；  
- 元素没有设置position属性为非static属性。解决：设置该元素的position属性为relative，absolute或是fixed中的一种；  
- 元素在设置z-index的同时还设置了float浮动。解决：float去除，改为`display：inline-block`；  
  
20230116，有小伙伴补充：  
  
* 在手机端 `iOS 13` 系统中，`-webkit-overflow-scrolling:touch` 也会使 `z-index` 失效，将 `touch` 换成 `unset`  
  
具体原因可参考这篇文章： [为什么我的 z-index 又不生效了？](https://mp.weixin.qq.com/s?__biz=Mzk0NTI2NDgxNQ==&mid=2247485708&idx=1&sn=e0bbc4755dc078402697a075ff3c0d05&chksm=c31948ccf46ec1da01851d7c8e585e07e0bb5088996cf60bf1ef779b4a54d7c8584a17da4796#rd)  
  
# 使用原生js实现以下效果：点击容器内的图标，图标边框变成border:1px solid red，点击空白处重置  
 ```js  
   
const box = document.getElementById('box');  
  
function isIcon(target) {  
  return target.className.includes('icon');  
}  
  
box.onclick = function(e) {  
  e.stopPropagation();  
  const target = e.target;  
  if (isIcon(target)) {  
    target.style.border = '1px solid red';  
  }  
}  
  
const doc = document;  
  
doc.onclick = function(e) {  
  const children = box.children;  
  for(let i = 0; i < children.length; i++) {  
    if (isIcon(children[i])) {  
      children[i].style.border = 'none';  
    }  
  }  
}  
```
# position: fixed 一定是相对于浏览器窗口进行定位吗？  
不一定。  
  
`position:fixed;`的元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置，元素的位置在屏幕滚动时不会改变。`fixed` 属性会创建新的层叠上下文。  
  
当元素祖先的 `transform`, `perspective` 或 `filter` 属性`非 none` 时，容器由视口改为该祖先。  
# css选择器有哪些？优先级分别是什么？哪些属性可以继承？  
## 一、选择器  
  
CSS选择器是CSS规则的第一部分  
  
它是元素和其他部分组合起来告诉浏览器哪个HTML元素应当是被选为应用规则中的CSS属性值的方式  
  
选择器所选择的元素，叫做“选择器的对象”  
  
我们从一个`Html`结构开始  
  
```html  
<div id="box">  
	<div class="one">  
	    <p class="one_1"></p>  
	    <p class="one_1"></p>  
	</div>  
	<div class="two"></div>  
	<div class="two"></div>  
	<div class="two"></div>  
</div>  
```  
  
关于`css`属性选择器常用的有：  
  
```css  
- id选择器（#box），选择id为box的元素  
- 类选择器（.one），选择类名为one的所有元素  
- 标签选择器（div），选择标签为div的所有元素  
- 后代选择器（#box div），选择id为box元素内部所有的div元素  
- 子选择器（.one>one_1），选择父元素为.one的所有.one_1的元素  
- 相邻同胞选择器（.one+.two），选择紧接在.one之后的所有.two元素  
- 群组选择器（div,p），选择div、p的所有元素  
```  
  
还有一些使用频率相对没那么多的选择器：  
  
- 伪类选择器  
  
```css  
:link ：选择未被访问的链接  
:visited：选取已被访问的链接  
:active：选择活动链接  
:hover ：鼠标指针浮动在上面的元素  
:focus ：选择具有焦点的  
:first-child：父元素的首个子元素  
```  
- 伪元素选择器  
  
```css  
:first-letter ：用于选取指定选择器的首字母  
:first-line ：选取指定选择器的首行  
:before : 选择器在被选元素的内容前面插入内容  
:after : 选择器在被选元素的内容后面插入内容  
```  
  
- 属性选择器  
  
```css  
[attribute] 选择带有attribute属性的元素  
[attribute=value] 选择所有使用attribute=value的元素  
[attribute~=value] 选择attribute属性包含value的元素  
[attribute|=value]：选择attribute属性以value开头的元素  
```  
在`CSS3`中新增的选择器有如下：  
  
- 层次选择器（p~ul），选择前面有p元素的每个ul元素  
- 伪类选择器  
  
```css  
:first-of-type 父元素的首个元素  
:last-of-type 父元素的最后一个元素  
:only-of-type 父元素的特定类型的唯一子元素  
:only-child 父元素中唯一子元素  
:nth-child(n) 选择父元素中第N个子元素  
:nth-last-of-type(n) 选择父元素中第N个子元素，从后往前  
:last-child 父元素的最后一个元素  
:root 设置HTML文档  
:empty 指定空的元素  
:enabled 选择被禁用元素  
:disabled 选择被禁用元素  
:checked 选择选中的元素  
:not(selector) 选择非 <selector> 元素的所有元素  
```  
  
- 属性选择器  
  
```css  
[attribute*=value]：选择attribute属性值包含value的所有元素  
[attribute^=value]：选择attribute属性开头为value的所有元素  
[attribute$=value]：选择attribute属性结尾为value的所有元素  
```  
  
## 二、优先级  
  
相信大家对`CSS`选择器的优先级都不陌生：  
  
> 内联 > ID选择器 > 类选择器 > 标签选择器  
  
到具体的计算层⾯，优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：  
  
- 如果存在内联样式，那么 A = 1, 否则 A = 0  
- B的值等于 ID选择器出现的次数  
- C的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数  
- D 的值等于 标签选择器 和 伪元素 出现的总次数  
  
这里举个例子：  
  
 
`nav-global > ul > li > a.nav-link  `
```  

套用上面的算法，依次求出 `A` `B` `C` `D` 的值：  
  
- 因为没有内联样式 ，所以 A = 0  
- ID选择器总共出现了1次， B = 1  
- 类选择器出现了1次， 属性选择器出现了0次，伪类选择器出现0次，所以 C = (1 + 0 + 0) = 1  
- 标签选择器出现了3次， 伪元素出现了0次，所以 D = (3 + 0) = 3  
  
上面算出的`A` 、 `B`、`C`、`D` 可以简记作：`(0, 1, 1, 3)`  
  
知道了优先级是如何计算之后，就来看看比较规则：  
  
- 从左往右依次进行比较 ，较大者优先级更高  
- 如果相等，则继续往右移动一位进行比较  
- 如果4位全部相等，则后面的会覆盖前面的  
  
经过上面的优先级计算规则，我们知道内联样式的优先级最高，如果外部样式需要覆盖内联样式，就需要使用`!important`  
## 三、继承属性  
  
在`css`中，继承是指的是给父元素设置一些属性，后代元素会自动拥有这些属性  
关于继承属性，可以分成：  
  
- 字体系列属性  

```css  
font:组合字体  
font-family:规定元素的字体系列  
font-weight:设置字体的粗细  
font-size:设置字体的尺寸  
font-style:定义字体的风格  
font-variant:偏大或偏小的字体  
```  
  
- 文本系列属性  
  
```css  
text-indent：文本缩进  
text-align：文本水平对齐  
line-height：行高  
word-spacing：增加或减少单词间的空白  
letter-spacing：增加或减少字符间的空白  
text-transform：控制文本大小写  
direction：规定文本的书写方向  
color：文本颜色  
```  
  
- 元素可见性  
  
```css  
visibility  
```  
  
- 表格布局属性  
  
```css  
caption-side：定位表格标题位置  
border-collapse：合并表格边框  
border-spacing：设置相邻单元格的边框间的距离  
empty-cells：单元格的边框的出现与消失  
table-layout：表格的宽度由什么决定  
```  
  
- 列表属性  
  
```css  
list-style-type：文字前面的小点点样式  
list-style-position：小点点位置  
list-style：以上的属性可通过这属性集合  
```  
  
- 引用  
  
```css  
quotes：设置嵌套引用的引号类型  
```  
  
- 光标属性  
  
```css  
cursor：箭头可以变成需要的形状  
```  
  
继承中比较特殊的几点：  
  
- a 标签的字体颜色不能被继承  
- h1-h6标签字体的大下也是不能被继承的  
  
## 无继承的属性  
  
- display  
- 文本属性：vertical-align、text-decoration  
- 盒子模型的属性：宽度、高度、内外边距、边框等  
- 背景属性：背景图片、颜色、位置等  
- 定位属性：浮动、清除浮动、定位position等  
- 生成内容属性：content、counter-reset、counter-increment  
- 轮廓样式属性：outline-style、outline-width、outline-color、outline  
- 页面样式属性：size、page-break-before、page-break-after  
  
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
# 单行文本怎么实现两端对齐？  
说起两端对齐，大家首先想到的可能是 `text-align: justify;`，但justify对最后一行无效。  
  
通常这样的排版对整段文字是极好的，我们并不希望当最后一行只有两个字时也两端对齐，毕竟这是不便于阅读的，那么当我们只有一行文本，但要实现单行文本两端对齐怎么解决？  
  
## 方法一：添加一行  
  
根据justify对最后一行无效，我们可以新增一行，使该行文本不是最后一行，实现如下：  
  
```html  
//html  
<div class="item">  
    <span class="label" >{{item.label}}</span>：  
    <span class="value">{{item.value}}</span>  
</div>  
```  
  
```css  
//scss  
.item {  
    height: 32px;  
    line-height: 32px;  
    margin-bottom: 8px;  
    .label {  
        display: inline-block;  
        height: 100%;  
        width: 100px;  
        text-align: justify;  
        vertical-align: top;  
        &::after {  
            display: inline-block;  
            width: 100%;  
            content: '';  
            height: 0;  
        }  
    }  
    .value {  
        padding-right: 10px;  
    }  
}  
```  
  
## 方法二： text-align-last  
  
text-align-last，该属性定义的是一段文本中最后一行在被强制换行之前的对齐规则。  
  
```css  
//scss  
.item {  
    margin-bottom: 8px;  
    .label {  
        display: inline-block;  
        height: 100%;  
        min-width: 100px;  
        text-align: justify;  
        text-align-last: justify;  
    }  
    .value {  
        padding-right: 10px;  
    }  
}  
```  
  
现在的浏览器基本都支持该属性。  
  
![](https://dd-static.jd.com/ddimg/jfs/t1/202500/3/24647/56174/630b6592Ec84c3b3b/f6ca20716ef8aa30.png)  
  
  
# 使用css实现一个无限循环动画  
想要实现CSS动画的无限循环，其实主要就是要使用`animation-iteration-count`这个属性，将其设置为`infinite`，动画就会一直循环播放。  
  
例如：  
  
```html  
<image class="anima" mode="widthFix" @click="nav" src="@/static/1_btn.png"></image>  
```  
  
```css  
.anima {  
  animation-name: likes; // 动画名称  
  animation-direction: alternate; // 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。  
  animation-timing-function: linear; // 动画执行方式，linear：匀速；ease：先慢再快后慢；ease-in：由慢速开始；ease-out：由慢速结束；ease-in-out：由慢速开始和结束；  
  animation-delay: 0s; // 动画延迟时间  
  animation-iteration-count: infinite; //  动画播放次数，infinite：一直播放  
  animation-duration: 1s; // 动画完成时间  
}  
  
@keyframes likes {  
  0%{  
  	transform: scale(1);  
  }  
  25%{  
  	transform: scale(0.9);  
  }  
  50%{  
  	transform: scale(0.85);  
  }  
  75%{  
  	transform: scale(0.9);  
  }  
  100%{  
  	transform: scale(1);  
  }  
}  
```  
  
# 怎么触发BFC，BFC有什么应用场景？  
## 文档流  
  
在介绍BFC之前，需要先给大家介绍一下文档流。  
  
我们常说的文档流其实分为`定位流`、`浮动流`、`普通流`三种。  
  
## 绝对定位(Absolute positioning)  
  
如果元素的属性 `position` 为 `absolute` 或 `fixed`，它就是一个绝对定位元素。  
  
在绝对定位布局中，元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响，而元素具体的位置由绝对定位的坐标决定。  
  
它的定位相对于它的包含块，相关CSS属性：`top`、`bottom`、`left`、`right`；  
  
对于 `position: absolute`，元素定位将相对于上级元素中最近的一个`relative、fixed、absolute`，如果没有则相对于body；  
  
对于 `position:fixed`，正常来说是相对于浏览器窗口定位的，但是当**元素祖先的 `transform` 属性非 `none` 时，会相对于该祖先进行定位**。  
  
## 浮动 (float)  
  
在浮动布局中，元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移，其效果与印刷排版中的文本环绕相似。  
  
## 普通流 (normal flow)  
  
普通流其实就是指BFC中的FC。FC(`Formatting Context`)，直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。  
  
在普通流中，元素按照其在 HTML 中的先后位置至上而下布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行。块级元素则会被渲染为完整的一个新行。  
  
除非另外指定，否则所有元素默认都是普通流定位，也可以说，普通流中元素的位置由该元素在 HTML 文档中的位置决定。  
  
## BFC 概念  
  
先看下MDN上关于BFC的定义：  
  
> 块格式化上下文（`Block Formatting Context`，`BFC`） 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。  
  
具有 `BFC` 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 `BFC` 具有普通容器所没有的一些特性。  
  
通俗一点来讲，可以把 `BFC` 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。  
  
除了 BFC，还有：  
  
* `IFC`（行级格式化上下文）- `inline` 内联  
* `GFC`（网格布局格式化上下文）- `display: grid`  
* `FFC`（自适应格式化上下文）- `display: flex`或`display: inline-flex`  
  
**注意**：同一个元素不能同时存在于两个 `BFC` 中。  
  
## BFC的触发方式  
  
MDN上对于[BFC的触发条件](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)写的很多，总结一下常见的触发方式有（只需要满足一个条件即可触发 BFC 的特性）：  
  
* 根元素，即 `<html>`  
* 浮动元素：`float` 值为 `left` 、`right`  
* `overflow` 值不为 `visible`，即为 `auto`、`scroll`、`hidden`  
* `display` 值为 `inline-block`、`table-cell`、`table-caption`、`table`、`inline-table`、`flex`、`inline-flex`、`grid`、`inline-grid`  
* 绝对定位元素：`position` 值为 `absolute`、`fixed`  
  
## BFC的特性  
  
* BFC 是页面上的一个独立容器，容器里面的子元素不会影响外面的元素。  
* BFC 内部的块级盒会在垂直方向上一个接一个排列  
* 同一 BFC 下的相邻块级元素可能发生外边距折叠，创建新的 BFC 可以避免外边距折叠  
* 每个元素的外边距盒（`margin box`）的左边与包含块边框盒（`border box`）的左边相接触（从右向左的格式的话，则相反），即使存在浮动  
* 浮动盒的区域不会和 BFC 重叠  
* 计算 BFC 的高度时，浮动元素也会参与计算  
  
## 应用  
  
BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。我们可以利用BFC的这个特性来做很多事。  
  
### 自适应两列布局  
  
左列浮动（定宽或不定宽都可以），给右列开启 BFC。  
  
```html  
<div>  
    <div class="left">浮动元素，无固定宽度</div>  
    <div class="right">自适应</div>  
</div>  
```  
  
```css  
* {  
    margin: 0;  
    padding: 0;  
}  
.left {  
    float: left;  
    height: 200px;  
    margin-right: 10px;  
    background-color: red;  
}  
.right {  
    overflow: hidden;  
    height: 200px;  
    background-color: yellow;  
}  
```  
  
效果：  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/859b155d1cf2455b9de7e53b4101a954~tplv-k3u1fbpfcp-zoom-1.image)  
  
* 将左列设为左浮动，将自身高度塌陷，使得其它块级元素可以和它占据同一行的位置。  
* 右列为 div 块级元素，利用其自身的流特性占满整行。  
* 右列设置overflow: hidden,触发 BFC 特性，使其自身与左列的浮动元素隔离开，不占满整行。  
  
这即是上面说的 BFC 的特性之一：**浮动盒的区域不会和 BFC 重叠**  
  
### 防止外边距（margin）重叠  
  
兄弟元素之间的外边距重叠  
  
```html  
<div>  
    <div class="child1"></div>  
    <div class="child2"></div>  
</div>  
```  
  
```css  
* {  
    margin: 0;  
    padding: 0;  
}  
.child1 {  
    width: 100px;  
    height: 100px;  
    margin-bottom: 10px;  
    background-color: red;  
}  
.child2 {  
    width: 100px;  
    height: 100px;  
    margin-top: 20px;  
    background-color: green;  
}  
```  
  
效果：  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1040574a6d96465fa4b9cee30c5529b9~tplv-k3u1fbpfcp-zoom-1.image)  
  
两个块级元素，红色 div 距离底部 10px，绿色 div 距离顶部 20px，按道理应该两个块级元素相距 30px 才对，但实际却是取距离较大的一个，即 20px。  
  
> 块级元素的上外边距和下外边距有时会合并（或折叠）为一个外边距，其大小取其中的较大者，这种行为称为外边距折叠（重叠），注意这个是发生在属于同一 BFC 下的块级元素之间  
  
根据 BFC 特性，创建一个新的 BFC 就不会发生 margin 折叠了。比如我们在他们两个 div 外层再包裹一层容器，加属性 `overflow: hidden`，触发 BFC，那么两个 div 就不属于同个 BFC 了。  
  
```html  
<div>  
    <div class="parent">  
        <div class="child1"></div>  
    </div>  
    <div class="parent">  
        <div class="child2"></div>  
    </div>  
</div>  
```  
  
```css  
.parent {  
    overflow: hidden;  
}  
  
/* ... */  
```  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/36b3bf28843443ddb101c72d1f8555dd~tplv-k3u1fbpfcp-zoom-1.image)  
  
这个关于兄弟元素外边距叠加的问题，除了触发 BFC 也有其他方案，比如你统一只用上边距或下边距，就不会有上面的问题。  
  
### 父子元素的外边距重叠  
  
这种情况存在父元素与其第一个或最后一个子元素之间（嵌套元素）。  
  
如果在父元素与其第一个/最后一个子元素之间不存在边框、内边距、行内内容，也没有创建块格式化上下文、或者清除浮动将两者的外边距 分开，此时子元素的外边距会“溢出”到父元素的外面。  
  
```html  
<div id="parent">  
  <div id="child"></div>  
</div>  
```  
```css  
* {  
    margin: 0;  
    padding: 0;  
}  
#parent {  
    width: 200px;  
    height: 200px;  
    background-color: green;  
    margin-top: 20px;  
}  
#child {  
    width: 100px;  
    height: 100px;  
    background-color: red;  
    margin-top: 30px;  
}  
```  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53aa33c438f549c58157d6fe0dd56cfd~tplv-k3u1fbpfcp-zoom-1.image)  
  
如上图，红色的 div 在绿色的 div 内部，且设置了 `margin-top` 为 30px，但我们发现红色 div 的顶部与绿色 div 顶部重合，并没有距离顶部 30px，而是溢出到父元素的外面计算。即本来父元素距离顶部只有 20px，被子元素溢出影响，外边距重叠，取较大的值，则距离顶部 30px。  
  
解决办法：  
* 给父元素触发 BFC（如添加overflow: hidden）  
* 给父元素添加 border  
* 给父元素添加 padding  
  
这样就能实现我们期望的效果了：  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/60c62099cf1148d786e57426cc8459a7~tplv-k3u1fbpfcp-zoom-1.image)  
  
### 清除浮动解决令父元素高度坍塌的问题  
  
当容器内子元素设置浮动时，脱离了文档流，容器中总父元素高度只有边框部分高度。  
  
```html  
<div class="parent">  
  <div class="child"></div>  
</div>  
```  
  
```css  
* {  
    margin: 0;  
    padding: 0;  
}  
.parent {  
    border: 4px solid red;  
}  
.child {  
    float: left;  
    width: 200px;  
    height: 200px;  
    background-color: blue;  
}  
```  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e7091173b7d24c99abfab182e6614b1b~tplv-k3u1fbpfcp-zoom-1.image)  
  
解决办法：给父元素触发 BFC，使其有 BFC 特性：**计算 BFC 的高度时，浮动元素也会参与计算**   
  
```css  
.parent {  
    overflow: hidden;  
    border: 4px solid red;  
}  
```  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c53c35af324642bf9481a2b949c0beb4~tplv-k3u1fbpfcp-zoom-1.image)  
  
上面我们都是用的 `overflow: hidden` 触发 BFC，因为确实常用，但是触发 BFC 也不止是只有这一种方法。  
  
如上面写的所示，可以设置`float: left;`，`float: right;`，`display: inline-block;`，`overflow: auto;`，`display: flex;`，`display: table;`，`position` 为 `absolute` 或 `fixed` 等等，这些都可以触发，不过父元素宽度表现不一定相同，但父元素高度都被撑出来了。  
  
当然实际运用可不是随便挑一个走，还是根据场景选择。  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
# 怎么实现一个宽高自适应的正方形？  
  
- 利用vw来实现：  
  
```css  
.square {  
  width: 10%;  
  height: 10vw;  
  background: tomato;  
}  
```  
  
- 利用元素的margin/padding百分比是相对父元素width的性质来实现：  
  
```css  
.square {  
  width: 20%;  
  height: 0;  
  padding-top: 20%;  
  background: orange;  
}  
```  
  
- 利用子元素的margin-top的值来实现：  
  
```css  
.square {  
  width: 30%;  
  overflow: hidden;  
  background: yellow;  
}  
.square::after {  
  content: '';  
  display: block;  
  margin-top: 100%;  
}  
```  
# 说说对 CSS 工程化的理解  
  
CSS 工程化是为了解决以下问题：  
  
1. **宏观设计**：CSS 代码如何组织、如何拆分、模块结构怎样设计？  
2. **编码优化**：怎样写出更好的 CSS？  
3. **构建**：如何处理我的 CSS，才能让它的打包结果最优？  
4. **可维护性**：代码写完了，如何最小化它后续的变更成本？如何确保任何一个同事都能轻松接手？  
  
  
  
以下三个方向都是时下比较流行的、普适性非常好的 CSS 工程化实践：  
  
- 预处理器：Less、 Sass 等；  
- 重要的工程化插件： PostCss；  
- Webpack loader 等 。  
  
  
  
基于这三个方向，可以衍生出一些具有典型意义的子问题，这里我们逐个来看：  
  
**（1）预处理器：为什么要用预处理器？它的出现是为了解决什么问题？**  
  
预处理器，其实就是 CSS 世界的“轮子”。预处理器支持我们写一种类似 CSS、但实际并不是 CSS 的语言，然后把它编译成 CSS 代码：  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d58c5313e884e38b1545a5896613250~tplv-k3u1fbpfcp-zoom-1.image)  
  
那为什么写 CSS 代码写得好好的，偏偏要转去写“类 CSS”呢？这就和本来用 JS 也可以实现所有功能，但最后却写 React 的 jsx 或者 Vue 的模板语法一样。  
  
随着前端业务复杂度的提高，前端工程中对 CSS 提出了以下的诉求：  
  
1. 宏观设计上：我们希望能优化 CSS 文件的目录结构，对现有的 CSS 文件实现复用；  
2. 编码优化上：我们希望能写出结构清晰、简明易懂的 CSS，需要它具有一目了然的嵌套层级关系，而不是无差别的一铺到底写法；我们希望它具有变量特征、计算能力、循环能力等等更强的可编程性，这样我们可以少写一些无用的代码；  
3. 可维护性上：更强的可编程性意味着更优质的代码结构，实现复用意味着更简单的目录结构和更强的拓展能力，这两点如果能做到，自然会带来更强的可维护性。  
  
这三点是传统 CSS 所做不到的，也正是预处理器所解决掉的问题。预处理器普遍会具备这样的特性：  
  
- 嵌套代码的能力，通过嵌套来反映不同 css 属性之间的层级关系 ；  
- 支持定义 css 变量；  
- 提供计算函数；  
- 允许对代码片段进行 extend 和 mixin；  
- 支持循环语句的使用；  
- 支持将 CSS 文件模块化，实现复用。  
  
**（2）PostCss：PostCss 是如何工作的？我们在什么场景下会使用 PostCss？**  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2911f98bbacf4b1cbffbb9e1527a4977~tplv-k3u1fbpfcp-zoom-1.image)  
  
它和预处理器的不同就在于，预处理器处理的是 类CSS，而 PostCss 处理的就是 CSS 本身。Babel 可以将高版本的 JS 代码转换为低版本的 JS 代码。PostCss 做的是类似的事情：它可以编译尚未被浏览器广泛支持的先进的 CSS 语法，还可以自动为一些需要额外兼容的语法增加前缀。更强的是，由于 PostCss 有着强大的插件机制，支持各种各样的扩展，极大地强化了 CSS 的能力。  
  
  
PostCss 在业务中的使用场景非常多：  
  
- 提高 CSS 代码的可读性：PostCss 其实可以做类似预处理器能做的工作；  
- 当我们的 CSS 代码需要适配低版本浏览器时，PostCss 的 [Autoprefixer](https://github.com/postcss/autoprefixer) 插件可以帮助我们自动增加浏览器前缀；  
- 允许我们编写面向未来的 CSS：PostCss 能够帮助我们编译 CSS next 代码；  
  
**（3）Webpack 能处理 CSS 吗？如何实现？**  
  
- **Webpack 在裸奔的状态下，是不能处理 CSS 的**，Webpack 本身是一个面向 JavaScript 且只能处理 JavaScript 代码的模块化打包工具；  
- Webpack 在 loader 的辅助下，是可以处理 CSS 的。  
  
  
如何用 Webpack 实现对 CSS 的处理：  
  
- Webpack 中操作 CSS 需要使用的两个关键的 loader：css-loader 和 style-loader  
- 注意，答出“用什么”有时候可能还不够，面试官会怀疑你是不是在背答案，所以你还需要了解每个 loader 都做了什么事情：  
  - css-loader：导入 CSS 模块，对 CSS 代码进行编译处理；  
  - style-loader：创建style标签，把 CSS 内容写入标签。  
  
  
在实际使用中，**css-loader 的执行顺序一定要安排在 style-loader 的前面**。因为只有完成了编译过程，才可以对 css 代码进行插入；若提前插入了未编译的代码，那么 webpack 是无法理解这坨东西的，它会无情报错。  
  
# Sass、Less 是什么？为什么要使用他们？   
  
他们都是 CSS 预处理器，是 CSS 上的一种抽象层。他们是一种特殊的语法/语言编译成 CSS。 例如 Less 是一种动态样式语言，将 CSS 赋予了动态语言的特性，如变量，继承，运算， 函数，LESS 既可以在客户端上运行 (支持 IE 6+, Webkit, Firefox)，也可以在服务端运行 (借助 Node.js)。   
  
  
**为什么要使用它们？**  
  
- 结构清晰，便于扩展。 可以方便地屏蔽浏览器私有语法差异。封装对浏览器语法差异的重复处理， 减少无意义的机械劳动。   
- 可以轻松实现多重继承。 完全兼容 CSS 代码，可以方便地应用到老项目中。LESS 只是在 CSS 语法上做了扩展，所以老的 CSS 代码也可以与 LESS 代码一同编译。  
  
# CSS预处理器/后处理器是什么？为什么要使用它们？  
  
**预处理器，** 如：`less`，`sass`，`stylus`，用来预编译`sass`或者`less`，增加了`css`代码的复用性。层级，`mixin`， 变量，循环， 函数等对编写以及开发UI组件都极为方便。  
  
  
**后处理器，** 如： `postCss`，通常是在完成的样式表中根据`css`规范处理`css`，让其更加有效。目前最常做的是给`css`属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。  
  
  
`css`预处理器为`css`增加一些编程特性，无需考虑浏览器的兼容问题，可以在`CSS`中使用变量，简单的逻辑程序，函数等在编程语言中的一些基本的性能，可以让`css`更加的简洁，增加适应性以及可读性，可维护性等。  
  
  
其它`css`预处理器语言：`Sass（Scss）`, `Less`, `Stylus`, `Turbine`, `Swithch css`, `CSS Cacheer`, `DT Css`。  
  
  
使用原因：  
  
- 结构清晰， 便于扩展  
- 可以很方便的屏蔽浏览器私有语法的差异  
- 可以轻松实现多重继承  
- 完美的兼容了`CSS`代码，可以应用到老项目中  
# 为什么有时候⽤translate来改变位置⽽不是使用position进行定位？  
translate 是 transform 属性的⼀个值。  
  
改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。  
  
⽽改变绝对定位会触发重新布局，进⽽触发重绘和复合。  
  
transform使浏览器为元素创建⼀个 GPU 图层，但改变绝对定位会使⽤到 CPU。   
  
因此translate()更⾼效，可以缩短平滑动画的绘制时间。   
  
⽽translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发⽣这种情况。  
  
具体的原理可查看 [【前端基础系列】CSS篇-带你搞懂“硬件加速”](https://mp.weixin.qq.com/s?__biz=Mzk0NTI2NDgxNQ==&mid=2247484939&idx=1&sn=229467c549cec5e3980671f488a4d89e&chksm=c31947cbf46ecedd13f930b44e9bc2a25ce706a8d30fce56c54584598015640338a6e075b8ff#rd)  
# transition和animation的区别  
* transition是过度属性，强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于flash的补间动画，设置一个开始关键帧，一个结束关键帧。  
* animation是动画属性，它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于flash的补间动画，但是它可以设置多个关键帧（用@keyframe定义）完成动画。  
```html  
<!DOCTYPE html>  
<html lang="en">  
  <head>  
    <meta charset="UTF-8" />  
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />  
    <title>Static Template</title>  
  
    <style>  
      .parent {  
        display: flex;  
        flex-direction: column;  
        height: 600px;  
        width: 300px;  
        background: yellow;  
      }  
      div {  
        width: 100%;  
      }  
      .header {  
        height: 200px;  
        background: red;  
      }  
      .content {  
        height: 100%;  
        background: blue;  
      }  
      .footer {  
        height: 200px;  
        background: black;  
      }  
    </style>  
  </head>  
  <body>  
    <div class="parent">  
      <div class="header"></div>  
      <div class="content"></div>  
      <div class="footer"></div>  
    </div>  
  </body>  
</html>  
```  
# 下面这段代码中，class为content的元素，实际高度是100px吗？  
答案： 不是  
  
首先，content元素的 height 设置为 “100%”，在父级的高度为固定值时，直接继承该高度，也就是600px。  
  
但父级设置了 display:flex ，在高度固定的前提下，子元素的高度会按比例进行缩放，所以content元素最后的高度应该是 600 * (600/(200+600+200)) = 360px  
  
在线demo可访问查看： https://codesandbox.io/s/strange-curran-3kci7i?file=/index.html  
  
> 本题目答案由“前端面试题宝典”整理，PC端可访问 https://fe.ecool.fun/   
# 说说 Vue 中 CSS scoped 的原理  
## 前言  
  
在日常的Vue项目开发过程中，为了让项目更好的维护一般都会使用模块化开发的方式进行。也就是每个组件维护独立的`template`，`script`，`style`。今天主要介绍一下使用`<style scoped>`为什么在页面渲染完后样式之间并不会造成污染。  
  
## 示例  
  
搭建一个简单的Vue项目测试一下：  
  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/9/1715cc286d639f17~tplv-t2oaga2asx-image.image)  
  
给个目录结构吧，代码并不是我们讲解的重点，如果需要源码测试的话后续我放到github上去。    
终端执行`npx webpack`输出dist目录，我们在浏览器打开index.html调试一下看看现象：  
  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/9/1715ccab4b543081~tplv-t2oaga2asx-image.image)  
  
1. 每个组件都会拥有一个`[data-v-hash:8]`插入HTML标签，子组件标签上也具体父组件`[data-v-hash:8]`;  
2. 如果style标签加了`scoped属性`，里面的选择器都会变成`(Attribute Selector) [data-v-hash:8]`;  
3. 如果子组件选择器跟父组件选择器完全一样，那么就会出现子组件样式被父组件覆盖，因为`子组件会优先于父组件mounted`，有兴趣可以测试一下哦。  
  
## webpack.config.js配置  
  
我们先看看在`webpack.config.js`中的配置：  
  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/7/171538289cdb0b59~tplv-t2oaga2asx-image.image)  
  
## vue-loader工作流  
  
以下就是vue-loader工作大致的处理流程：  
  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/9/1715e3645c082cc7~tplv-t2oaga2asx-image.image)  
  
开启`node调试模式`进行查看阅读，package.json中配置如下：  
  
```  
"scripts": {    
    "debug": "node --inspect-brk ./node_modules/webpack/bin/webpack.js"    
 },  
  
```  
  
## VueLoaderPlugin  
  
先从入口文件`lib/index.js`开始分析，因为我的Webpack是4.x版本，所以`VueLoaderPlugin = require('./plugin-webpack4')`，重点来看看这个`lib/plugin-webpack4.js`文件:  
  
```  
const qs = require('querystring')  
const RuleSet = require('webpack/lib/RuleSet')  
  
const id = 'vue-loader-plugin'  
const NS = 'vue-loader'  
// 很明显这就是一个webpack插件写法  
class VueLoaderPlugin {  
  apply (compiler) {  
    if (compiler.hooks) {  
      // 编译创建之后，执行插件  
      compiler.hooks.compilation.tap(id, compilation => {  
        const normalModuleLoader = compilation.hooks.normalModuleLoader  
        normalModuleLoader.tap(id, loaderContext => {  
          loaderContext[NS] = true  
        })  
      })  
    } else {  
      // webpack < 4  
      compiler.plugin('compilation', compilation => {  
        compilation.plugin('normal-module-loader', loaderContext => {  
          loaderContext[NS] = true  
        })  
      })  
    }  
  
    // webpack.config.js 中配置好的 module.rules  
    const rawRules = compiler.options.module.rules  
    // 对 rawRules 做 normlized  
    const { rules } = new RuleSet(rawRules)  
  
    // 从 rawRules 中检查是否有规则去匹配 .vue 或 .vue.html   
    let vueRuleIndex = rawRules.findIndex(createMatcher(`foo.vue`))  
    if (vueRuleIndex < 0) {  
      vueRuleIndex = rawRules.findIndex(createMatcher(`foo.vue.html`))  
    }  
    const vueRule = rules[vueRuleIndex]  
    if (!vueRule) {  
      throw new Error(  
        `[VueLoaderPlugin Error] No matching rule for .vue files found.\n` +  
        `Make sure there is at least one root-level rule that matches .vue or .vue.html files.`  
      )  
    }  
    if (vueRule.oneOf) {  
      throw new Error(  
        `[VueLoaderPlugin Error] vue-loader 15 currently does not support vue rules with oneOf.`  
      )  
    }  
  
    // 检查 normlized rawRules 中 .vue 规则中是否具有 vue-loader  
    const vueUse = vueRule.use  
    const vueLoaderUseIndex = vueUse.findIndex(u => {  
      return /^vue-loader|(\/|\\|@)vue-loader/.test(u.loader)  
    })  
  
    if (vueLoaderUseIndex < 0) {  
      throw new Error(  
        `[VueLoaderPlugin Error] No matching use for vue-loader is found.\n` +  
        `Make sure the rule matching .vue files include vue-loader in its use.`  
      )  
    }  
  
    // make sure vue-loader options has a known ident so that we can share  
    // options by reference in the template-loader by using a ref query like  
    // template-loader??vue-loader-options  
    const vueLoaderUse = vueUse[vueLoaderUseIndex]  
    vueLoaderUse.ident = 'vue-loader-options'  
    vueLoaderUse.options = vueLoaderUse.options || {}  
  
    // 过滤出 .vue 规则，其他规则调用 cloneRule 方法重写了 resource 和 resourceQuery 配置  
    // 用于编译vue文件后匹配依赖路径 query 中需要的loader  
    const clonedRules = rules  
      .filter(r => r !== vueRule)  
      .map(cloneRule)  
  
    // 加入全局 pitcher-loader，路径query有vue字段就给loader添加pitch方法  
    const pitcher = {  
      loader: require.resolve('./loaders/pitcher'),  
      resourceQuery: query => {  
        const parsed = qs.parse(query.slice(1))  
        return parsed.vue != null  
      },  
      options: {  
        cacheDirectory: vueLoaderUse.options.cacheDirectory,  
        cacheIdentifier: vueLoaderUse.options.cacheIdentifier  
      }  
    }  
  
    // 修改原始的 module.rules 配置  
    compiler.options.module.rules = [  
      pitcher,  
      ...clonedRules,  
      ...rules  
    ]  
  }  
}  
  
```  
  
以上大概就是`VueLoaderPlugin`所做的事情。也就是说`VueLoaderPlugin`主要就是修改module.rules的配置。总的来说就是对vue单文件编写做的一个扩展(比如我们可以写less文件，在vue style中也可以写less)  
  
## vue-loader  
  
继续来看看`vue-loader`是如何操作.vue文件的，目前只关心`style`部分，逻辑在`lib/index.js`：  
  
### vue文件解析  
  
```  
// 很明显这就是一个loader写法  
module.exports = function (source) {  
    const loaderContext = this  
    // ...  
    const {  
        target,  
        request, // 请求资源路径  
        minimize,  
        sourceMap,   
        rootContext, // 根路径  
        resourcePath, // vue文件的路径  
        resourceQuery // vue文件的路径 query 参数  
      } = loaderContext  
    // ...  
      
    // 解析 vue 文件，descriptor 是AST抽象语法树的描述  
    const descriptor = parse({  
        source,  
        compiler: options.compiler || loadTemplateCompiler(loaderContext),  
        filename,  
        sourceRoot,  
        needMap: sourceMap  
    })  
    /**  
    *  
    */  
    // hash(文件路径 + 开发环境 ？文件内容 : "")生成 id  
    const id = hash(  
        isProduction  
          ? (shortFilePath + '\n' + source)  
          : shortFilePath  
    )  
    // descriptor.styles 解析后是否具有 attrs: {scoped: true}  
    const hasScoped = descriptor.styles.some(s => s.scoped)  
    /**  
    *  
    */  
    let stylesCode = ``  
    if (descriptor.styles.length) {  
        // 最终生成一个import依赖请求  
        stylesCode = genStylesCode(  
            loaderContext,  
            descriptor.styles,  
            id,  
            resourcePath,  
            stringifyRequest,  
            needsHotReload,  
            isServer || isShadow // needs explicit injection?  
        )  
    }  
}  
  
```  
  
可以看到解析完vue文件的结果大概就是这样的：  
  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/9/1715cedd2e458619~tplv-t2oaga2asx-image.image)  
  
### 依赖解析  
  
vue文件解析完之后template，script，style等都有个依赖的路径，后续可以通过配置的loader进行解析了，因为我们已经在`VuePluginLoader`中修改了module.rules的配置，而且依赖的路径中query中都拥有vue字段，所以会先走到pitcher-loader,现在来分析`lib/loaders/pitcher.js`中的逻辑：  
  
```  
/**  
 *  
*/  
module.exports = code => code  
  
module.exports.pitch = function (remainingRequest) {  
    const options = loaderUtils.getOptions(this)  
    const { cacheDirectory, cacheIdentifier } = options  
    const query = qs.parse(this.resourceQuery.slice(1))  
  
    let loaders = this.loaders  
    if (query.type) {  
        if (/\.vue$/.test(this.resourcePath)) {  
            // 过滤eslint-loader  
            loaders = loaders.filter(l => !isESLintLoader(l))  
        } else {  
            loaders = dedupeESLintLoader(loaders)  
        }  
    }  
    // 过滤pitcher-loader  
    loaders = loaders.filter(isPitcher)  
      
    const genRequest = loaders => {  
        const seen = new Map()  
        const loaderStrings = []  
  
        loaders.forEach(loader => {  
          const identifier = typeof loader === 'string'  
            ? loader  
            : (loader.path + loader.query)  
          const request = typeof loader === 'string' ? loader : loader.request  
          if (!seen.has(identifier)) {  
            seen.set(identifier, true)  
            // loader.request contains both the resolved loader path and its options  
            // query (e.g. ??ref-0)  
            loaderStrings.push(request)  
          }  
        })  
  
        return loaderUtils.stringifyRequest(this, '-!' + [  
          ...loaderStrings,  
          this.resourcePath + this.resourceQuery  
        ].join('!'))  
    }  
      
      
    if (query.type === `style`) {  
        const cssLoaderIndex = loaders.findIndex(isCSSLoader)  
        // 调整loader执行顺序  
        if (cssLoaderIndex > -1) {  
            const afterLoaders = loaders.slice(0, cssLoaderIndex + 1)  
            const beforeLoaders = loaders.slice(cssLoaderIndex + 1)  
            const request = genRequest([  
                ...afterLoaders, // [style-loader,css-loader]  
                stylePostLoaderPath, // style-post-loader  
                ...beforeLoaders // [vue-loader]  
            ])  
            return `import mod from ${request}; export default mod; export * from ${request}`  
        }  
   }  
   /**  
   *  
   */  
   const request = genRequest(loaders)  
   return `import mod from ${request}; export default mod; export * from ${request}`  
}  
  
```  
  
可以看到解析带scoped属性的style的结果大概就是这样的：  
  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/9/1715e11bc86e5a36~tplv-t2oaga2asx-image.image)  
  
### 新的依赖解析  
  
分析`{tyep：style}`的处理流程顺序：  
  
* vue-loader、style-post-loader、css-loader、style-loader。  
  
处理资源的时候先走的是`vue-loader`，这时vue-loader中的处理逻辑与第一次解析vue文件不一样了：  
  
```  
const incomingQuery = qs.parse(rawQuery)  
// 拥有{type:style}  
if (incomingQuery.type) {  
    return selectBlock(  
      descriptor,  
      loaderContext,  
      incomingQuery,  
      !!options.appendExtension  
    )  
 }  
   
   
 // lib/select.js  
 module.exports = function selectBlock (  
  descriptor,  
  loaderContext,  
  query,  
  appendExtension  
) {  
   // ...  
  if (query.type === `style` && query.index != null) {  
    const style = descriptor.styles[query.index]  
    if (appendExtension) {  
      loaderContext.resourcePath += '.' + (style.lang || 'css')  
    }  
    loaderContext.callback(  
      null,  
      style.content,  
      style.map  
    )  
    return  
  }  
  
```  
  
> **可以看到vue-loader处理完后返回的就是style.content，也就是style标签下的内容，然后交给后续的loader继续处理**  
  
再来看一下`style-post-loader`是如何生成`data-v-hash:8`的,逻辑主要在`lib/loaders/stylePostLoaders.js`中：  
  
```  
const qs = require('querystring')  
const { compileStyle } = require('@vue/component-compiler-utils')  
  
module.exports = function (source, inMap) {  
  const query = qs.parse(this.resourceQuery.slice(1))  
  const { code, map, errors } = compileStyle({  
    source,  
    filename: this.resourcePath,  
    id: `data-v-${query.id}`,  
    map: inMap,  
    scoped: !!query.scoped,  
    trim: true  
  })  
  
  if (errors.length) {  
    this.callback(errors[0])  
  } else {  
    this.callback(null, code, map)  
  }  
}  
  
```  
  
处理最终返回的code是这样的：  
  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/9/1715e40c4ac7c36e~tplv-t2oaga2asx-image.image)  
# 硬件加速的原理是什么？  
面试中可能会经常会碰到怎么解决动画卡顿的问题，然后会引导到硬件加速。那么究竟什么是硬件加速，为什么它可以提高咱们的动画效率？我们今天就来一探究竟。  
  
首先，我们先从 CPU 和 GPU 开始了解。  
  
## CPU 和 GPU 的区别  
  
`CPU` 即中央处理器，`GPU` 即图形处理器。  
  
`CPU`是计算机的大脑，它提供了一套指令集，我们写的程序最终会通过 `CPU` 指令来控制的计算机的运行。它会对指令进行译码，然后通过逻辑电路执行该指令。整个执行的流程分为了多个阶段，叫做流水线。指令流水线包括取`指令、译码、执行、取数、写回`五步，这是一个指令周期。`CPU`会不断的执行指令周期来完成各种任务。  
  
`GPU`，是`Graphics ProcessingUnit`的简写，是现代显卡中非常重要的一个部分，其地位与`CPU`在主板上的地位一致，主要负责的任务是加速图形处理速度。GPU是显卡的“大脑”，它决定了该显卡的档次和大部分性能，同时也是2D显示卡和3D显示卡的区别依据。2D显示芯片在处理3D图像和特效时主要依赖CPU的处理能力，称为“软加速”。3D显示芯片是将三维图像和特效处理功能集中在显示芯片内，也即所谓的“硬件加速”功能。  
  
要解释两者的区别，要先明白两者的相同之处：两者都有总线和外界联系，有自己的缓存体系，以及数字和逻辑运算单元。  
  
一句话，两者都为了完成计算任务而设计。  
  
两者的区别在于存在于片内的缓存体系和数字逻辑运算单元的结构差异：  
  
* `CPU`虽然有多核，但总数没有超过两位数，每个核都有足够大的缓存和足够多的数字和逻辑运算单元，并辅助有很多加速分支判断甚至更复杂的逻辑判断的硬件；  
* `GPU` 的核数远超`CPU`，被称为众核（NVIDIA Fermi有512个核）。每个核拥有的缓存大小相对小，数字逻辑运算单元也少而简单（`GPU`初始时在浮点计算上一直弱于`CPU`）。  
  
从结果上导致`CPU`擅长处理具有复杂计算步骤和复杂数据依赖的计算任务，如分布式计算，数据压缩，人工智能，物理模拟，以及其他很多很多计算任务等。  
  
`GPU`由于历史原因，是为了视频游戏而产生的（至今其主要驱动力还是不断增长的视频游戏市场），在三维游戏中常常出现的一类操作是对海量数据进行相同的操作，如：对每一个顶点进行同样的坐标变换，对每一个顶点按照同样的光照模型计算颜色值。  
  
GPU的众核架构非常适合把同样的指令流并行发送到众核上，采用不同的输入数据执行。在通用计算领域有广泛应用，包括：数值分析，海量数据处理（排序，Map-Reduce等），金融分析等等。  
  
简而言之，当程序员为CPU编写程序时，他们倾向于利用复杂的逻辑结构优化算法从而减少计算任务的运行时间，即 `Latency`。当程序员为GPU编写程序时，则利用其处理海量数据的优势，通过提高总的数据吞吐量（`Throughput`）来掩盖 `Lantency`。  
  
目前，`CPU` 和 `GPU` 的区别正在逐渐缩小，因为GPU也在处理不规则任务和线程间通信方面有了长足的进步。  
  
## 每一帧的执行步骤  
  
一般浏览器的刷新率为60HZ，即1秒钟刷新60次。  
  
1000ms / 60hz = 16.6 ，也就是大概每过 `16.6ms` 浏览器就会渲染一帧画面。  
  
浏览器对每一帧画面的渲染工作都要在 16ms 内完成，超出这个时间，页面的渲染就会出现卡顿现象，影响用户体验。  
  
简单概括下，浏览器在每一帧里会依次执行以下这些动作：  
  
* `JavaScript`：JavaScript 实现动画效果，DOM 元素操作等。  
* `Style`（计算样式）：确定每个 DOM 元素应该应用什么 CSS 规则。  
* `Layout`（布局）：计算每个 DOM 元素在最终屏幕上显示的大小和位置。由于 web 页面的元素布局是相对的，所以其中任意一个元素的位置发生变化，都会联动的引起其他元素发生变化，这个过程叫 reflow。  
* `Paint`（绘制）：在多个层上绘制 DOM 元素的的文字、颜色、图像、边框和阴影等。  
* `Composite`（渲染层合并）：按照合理的顺序合并图层然后显示到屏幕上。  
  
减少或者避免 `layout`，`paint` 可以让页面减少卡顿，动画效果更加流畅。  
  
## 完整的渲染流程  
  
更具体一些，一个完整的渲染步骤大致可总结为如下：  
  
* 渲染进程将HTML内容转换为能够读懂的DOM树结构。  
* 渲染引擎将CSS样式表转化为浏览器可以理解的 `styleSheets` ，计算出DOM节点的样式。  
* 创建布局树，并计算元素的布局信息。  
* 对布局树进行分层，并生成分层树。  
* 为每个图层生成绘制列表，并将其提交到合成线程。  
* 合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。  
* 合成线程发送绘制图块命令DrawQuad给浏览器进程。  
* 浏览器进程根据DrawQuad消息生成页面，并显示到显示器上  
  
## 普通图层和复合图层  
  
上面的介绍中，提到了 `composite` 概念。  
  
可以简单的这样理解，浏览器渲染的图层一般包含两大类：`渲染图层（普通图层）`以及`复合图层`  
  
* 渲染图层：又称默认复合层，是页面普通的文档流。我们虽然可以通过绝对定位，相对定位，浮动定位脱离文档流，但它仍然属于默认复合层，共用同一个绘图上下文对象（`GraphicsContext`）。  
* 复合图层，它会单独分配资源（当然也会脱离普通文档流，这样一来，不管这个复合图层中怎么变化，也不会影响默认复合层里的回流重绘）  
  
某些特殊的渲染层会被提升为复合成层（`Compositing Layers`），复合图层拥有单独的 `GraphicsLayer`，而其他不是复合图层的渲染层，则和其第一个拥有 `GraphicsLayer` 父层共用一个。  
  
每个 `GraphicsLayer` 都有一个 `GraphicsContext`，`GraphicsContext` 会负责输出该层的位图，位图是存储在共享内存中，作为纹理上传到 GPU 中，最后由 GPU 将多个位图进行合成，然后 draw 到屏幕上，此时，我们的页面也就展现到了屏幕上。  
  
可以 `Chrome源码调试 -> More Tools -> Rendering -> Layer borders`中看到，黄色的就是复合图层信息。  
  
## 硬件加速  
  
硬件加速，直观上说就是依赖 GPU 实现图形绘制加速，软硬件加速的区别主要是图形的绘制究竟是 GPU 来处理还是 CPU，如果是 GPU，就认为是硬件加速绘制，反之，则为软件绘制。  
  
一般一个元素开启硬件加速后会变成复合图层，可以独立于普通文档流中，改动后可以避免整个页面重绘，提升性能。  
  
常用的硬件加速方法有：  
  
* 最常用的方式：`translate3d`、`translateZ`  
* `opacity` 属性/过渡动画（需要动画执行的过程中才会创建合成层，动画没有开始或结束后元素还会回到之前的状态）  
* `will-change`属性（这个知识点比较冷僻），一般配合 `opacity` 与 `translate` 使用（而且经测试，除了上述可以引发硬件加速的属性外，其它属性并不会变成复合层），作用是提前告诉浏览器要变化，这样浏览器会开始做一些优化工作（这个最好用完后就释放）  
* `<video>`、`<iframe>`、`<canvas>`、`<webgl>`等元素  
* 其它，譬如以前的 `flash` 插件  
  
当然，有的时候我们想强制触发硬件渲染，就可以通过上面的属性，比如  
  
```css  
will-change: transform;   
```  
或者  
```css  
transform:translate3d(0, 0, 0);  
```  
  
## 使用硬件加速的注意事项  
  
使用硬件加速并不是十全十美的事情，比如：  
  
* 内存。如果GPU加载了大量的纹理，那么很容易就会发生内容问题，这一点在移动端浏览器上尤为明显，所以，一定要牢记不要让页面的每个元素都使用硬件加速。  
* 使用GPU渲染会影响字体的抗锯齿效果。这是因为GPU和CPU具有不同的渲染机制。即使最终硬件加速停止了，文本还是会在动画期间显示得很模糊。  
  
所以不要大量使用复合图层，否则由于资源消耗过度，页面可能会变的更加卡顿。  
  
同时，在使用硬件加速时，尽可能的使用`z-index`，防止浏览器默认给后续的元素创建复合层渲染。  
  
具体的原理是这样的：  
  
> webkit CSS3中，如果一个元素添加了硬件加速，并且`z-index`层级比较低，那么在这个元素的后面其它元素（层级比这个元素高的，或者相同的，并且`releative`或`absolute`属性相同的），会默认变为复合层渲染，如果处理不当会极大的影响性能。  
  
简单点理解，其实可以认为是一个隐式合成的概念：如果a是一个复合图层，而且b在a上面，那么b也会被隐式转为一个复合图层，这点需要特别注意。  
  
  
# 什么是硬件加速？  
硬件加速就是将浏览器的渲染过程交给GPU处理，而不是使用自带的比较慢的渲染器。这样就可以使得 `animation` 与 `transition` 更加顺畅。  
  
我们可以在浏览器中用css开启硬件加速，使GPU (Graphics Processing Unit) 发挥功能，从而提升性能。  
  
现在大多数电脑的显卡都支持硬件加速。鉴于此，我们可以发挥GPU的力量，从而使我们的网站或应用表现的更为流畅。  
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
```html  
<style type="text/css">  
     #parent p { background-color: red;  }  
      div .a.b.c.d.e.f.g.h.i.j.k p{ background-color: green;    
</style>  
......  
<div id="parent">  
     <div class="a b c d e f g h i j k">  
         <p>xxxx</p>  
     </div>  
</div>  
  
```  
# 下面代码中，p标签的背景色是什么？  
大家需要注意，权重是按优先级进行比较的，而不是相加规则。  
  
答案是 `red`。  
```css  
body#god div.dad span.son {width: 200px;}  
body#god span#test {width: 250px;}  
```  
# 假设下面样式都作用于同一个节点元素`span`，判断下面哪个样式会生效  
本题考察css的样式优先级权重，大家需要记住：  
  
当两个权值进行比较的时候，是从高到低逐级将等级位上的权重值（如 权值 1,0,0,0 对应--> 第一等级权重值，第二等级权重值，第三等级权重值，第四等级权重值）来进行比较的，而不是简单的 1000个数 + 100个数 + 10个数 + 1个数 的总和来进行比较的，换句话说，低等级的选择器，个数再多也不会越等级超过高等级的选择器的优先级的。  
  
所以本题的分析思路是：  
* 先比较高权重位，即第一个样式的高权重为 `#god` = 100  
* 第二个样式的高权重为 `#god` + `#text` = 200  
* 100 < 200  
* 所以最终计算结果是取 `width: 250px;`  
* 若两个样式的高权重数量一样的话，则需要比较下一较高权重！  
  
答案是  `width: 250px;`  
# 为何CSS不支持父选择器？  
这个问题的答案和“为何CSS相邻兄弟选择器只支持后面的元素，而不支持前面的兄弟元素？”是一样的。  
  
浏览器解析HTML文档，是从前往后，由外及里的。所以，我们时常会看到页面先出现头部然后主体内容再出现的加载情况。  
  
但是，如果CSS支持了父选择器，那就必须要页面所有子元素加载完毕才能渲染HTML文档，因为所谓“父选择器”，就是后代元素影响祖先元素，如果后代元素还没加载处理，如何影响祖先元素的样式？于是，网页渲染呈现速度就会大大减慢，浏览器会出现长时间的白板。加载多少HTML就可以渲染多少HTML，在网速不是很快的时候，就显得尤为的必要。比方说你现在看的这篇文章，只要文章内容加载出来就可以了，就算后面的广告脚本阻塞了后续HTML文档的加载，我们也是可以阅读和体验。但是，如果支持父选择器，则整个文档不能有阻塞，页面的可访问性则要大大降低。  
  
有人可能会说，要不采取加载到哪里就渲染到哪里的策略？这样子问题更大，因为会出现加载到子元素的时候，父元素本来渲染的样式突然变成了另外一个样式的情况，体验非常不好。  
  
“相邻选择器只能选择后面的元素”也是一样的道理，不可能说后面的HTML加载好了，还会影响前面HTML的样式。  
  
所以，从这一点来讲，CSS支持“父选择器”或者“前兄弟选择器”的可能性要比其他炫酷的CSS特性要低，倒不是技术层面，而是CSS和HTML本身的渲染机制决定的。当然，以后的事情谁都说不准，说不定以后网速都是每秒几个G的，网页加载速度完全就忽略不计，说不定就会支持了。  
# 脱离文档流有哪些方法？  
## 一、什么是文档流？  
  
将窗体自上而下分成一行一行，并在每行中按从左至右依次排放元素，称为文档流，也称为普通流。  
  
这个应该不难理解，HTML中全部元素都是盒模型，盒模型占用一定的空间，依次排放在HTML中，形成了文档流。  
  
## 二、什么是脱离文档流？  
  
元素脱离文档流之后，将不再在文档流中占据空间，而是处于浮动状态（可以理解为漂浮在文档流的上方）。脱离文档流的元素的定位基于正常的文档流，当一个元素脱离文档流后，依然在文档流中的其他元素将忽略该元素并填补其原先的空间。  
  
## 三、怎么脱离文档流？  
  
### float  
  
使用float可以脱离文档流。  
  
注意！！！：使用float脱离文档流时，其他盒子会无视这个元素，但其他盒子内的文本依然会为这个元素让出位置，环绕在该元素的周围。  
  
### absolute  
  
absolute称为绝对定位，其实博主觉得应该称为相对定位，因为使用absolute脱离文档流后的元素，是相对于该元素的父类（及以上，如果直系父类元素不满足条件则继续向上查询）元素进行定位的，并且这个父类元素的position必须是非static定位的（static是默认定位方式）。  
  
### fixed  
  
完全脱离文档流，相对于浏览器窗口进行定位。（相对于浏览器窗口就是相对于html）。  
  
```html  
<div class="container">  
    <div style="height: 100px"></div>  
    <div style="min-height: 10px"></div>  
</div>  
<style>  
    .container{  
        display: flex;  
    }  
    .container > div {  
        width: 100px;  
    }  
</style>  
```  
# 第二个子元素的高度是多少  
答案：100px  
  
Flex 布局会默认：  
  
* 把所有子项变成水平排列。  
* 默认不自动换行。  
* 让子项与其内容等宽，并把所有子项的高度变为最高子项的高度。  
  
> 本答案由“前端面试题宝典”收集整理，PC端访问请前往： https://fe.ecool.fun/   
# 如何从html元素继承box-sizing？  
在大多数情况下我们在设置元素的 border 和 padding 并不希望改变元素的 width,height值，这个时候我们就可以为该元素设置 `box-sizing:border-box;`。  
  
如果不希望每次都重写一遍，而是希望他是继承而来的，那么我们可以使用如下代码：  
  
```css  
html {  
  box-sizing: border-box;  
}  
*, *:before, *:after {  
  box-sizing: inherit;  
}  
```  
  
这样的好处在于他不会覆盖其他组件的 box-sizing 值，又无需为每一个元素重复设置 box-sizing:border-box;  
# js和css是如何影响DOM树构建的？  
先做个总结，然后再进行具体的分析：  
  
CSS不会阻塞DOM的解析，但是会影响JAVAScript的运行，javaSscript会阻止DOM树的解析，最终css（CSSOM）会影响DOM树的渲染，也可以说最终会影响渲染树的生成。  
  
接下来我们先看javascript对DOM树构建和渲染是如何造成影响的，分成三种类型来讲解：  
  
## JavaScript脚本在html页面中  
  
```html  
<html>  
  <body>  
    <div>1</div>  
    <script>  
      let div1 = document.getElementsByTagName('div')[0]  
      div1.innerText = 'time.geekbang'  
    </script>  
    <div>test</div>  
  </body>  
</html>  
```  
  
两段div中间插入一段JavaScript脚本，这段脚本的解析过程就有点不一样了。  
  
当解析到script脚本标签时，HTML解析器暂停工作，javascript引擎介入，并执行script标签中的这段脚本。  
  
因为这段javascript脚本修改了DOM中第一个div中的内容，所以执行这段脚本之后，div节点内容已经修改为time.geekbang了。脚本执行完成之后，HTML解析器回复解析过程，继续解析后续的内容，直至生成最终的DOM。  
  
## html页面中引入javaScript文件  
  
```js  
//foo.js  
let div1 = document.getElementsByTagName('div')[0]  
div1.innerText = 'time.geekbang'  
```  
  
```html  
<html>  
  <body>  
    <div>1</div>  
    <script type="text/javascript" src='foo.js'></script>  
    <div>test</div>  
  </body>  
</html>  
```  
  
这段代码的功能还是和前面那段代码是一样的，只是把内嵌JavaScript脚本修改成了通过javaScript文件加载。  
  
其整个执行流程还是一样的，执行到JAVAScript标签时，暂停整个DOM的解析，执行javascript代码，不过这里执行javascript时，需要现在在这段代码。这里需要重点关注下载环境，因为javascript文件的下载过程会阻塞DOM解析，而通常下载又是非常耗时的，会受到网络环境、javascript文件大小等因素的影响。  
  
优化机制：  
  
谷歌浏览器做了很多优化，其中一个主要的优化就是预解析操作。当渲染引擎收到字节流之后，会开启一个预解析线程，用来分析HTML文件中包含的JavaScript、CSS等相关文件，解析到相关文件之后，会开启一个预解析线程，用来分析HTML文件中包含的javascprit、css等相关文件、解析到相关文件之后，预解析线程会提前下载这些文件。  
  
再回到 DOM 解析上，我们知道引入 JavaScript 线程会阻塞 DOM，不过也有一些相关的策略来规避，比如使用 CDN 来加速 JavaScript 文件的加载，压缩 JavaScript 文件的体积。  
  
另外，如果 JavaScript 文件中没有操作 DOM 相关代码，就可以将该 JavaScript 脚本设置为异步加载，通过 async 或 defer 来标记代码，使用方式如下所示：  
  
```  
<script async type="text/javascript" src='foo.js'></script>  
<script defer type="text/javascript" src='foo.js'></script>  
```  
  
async和defer区别：  
  
* async：脚本并行加载，加载完成之后立即执行，执行时机不确定，仍有可能阻塞HTML解析，执行时机在load事件派发之前。  
* defer：脚本并行加载，等待HTML解析完成之后，按照加载顺序执行脚本，执行时机DOMContentLoaded事件派发之前。  
  
## html页面中有css样式  
  
```css  
//theme.css  
div {color:blue}  
```  
  
```html  
<html>  
<head>  
    <style src='theme.css'></style>  
</head>  
<body>  
  <div>1</div>  
  <script>  
      let div1 = document.getElementsByTagName('div')[0]  
      div1.innerText = 'time.geekbang' // 需要 DOM  
      div1.style.color = 'red' // 需要 CSSOM  
  </script>  
  <div>test</div>  
</body>  
</html>  
```  
  
该示例中，JavaScript 代码出现了 `div1.style.color = ‘red’` 的语句，它是用来操纵 CSSOM 的，所以在执行 JavaScript 之前，需要先解析 JavaScript 语句之上所有的CSS 样式。所以如果代码里引用了外部的 CSS 文件，那么在执行 JavaScript 之前，还需要等待外部的 CSS 文件下载完成，并解析生成 CSSOM 对象之后，才能执行 JavaScript 脚本。  
  
而 JavaScript 引擎在解析 JavaScript 之前，是不知道 JavaScript 是否操纵了 CSSOM的，所以渲染引擎在遇到 JavaScript 脚本时，不管该脚本是否操纵了 CSSOM，都会执行CSS 文件下载，解析操作，再执行 JavaScript 脚本。所以说 JavaScript 脚本是依赖样式表的，这又多了一个阻塞过程。  
  
总结：通过上面三点的分析，我们知道了 JavaScript 会阻塞 DOM 生成，而样式文件又会阻塞js的执行。  
# CSSOM树和DOM树是同时解析的吗？  
浏览器会下下载HTML解析页面生成DOM树，遇到CSS标签就开始解析CSS，这个过程不会阻塞，但是如果遇到了JS脚本，此时假如CSSOM还没有构建完，需要等待CSSOM构建完，再去执行JS脚本，然后再执行DOM解析，此时会阻塞。  
# 怎么实现样式隔离？  
> 本文主要讲css各种解决方案，包括，`BEM`、`css modules`、`Css in Js`、`预处理器`、`Shadow DOM`，`Vue Scoped`通过分析各项方案的**产生背景、带来的好处以及存在的一些问题**来帮助大家判断自己的`项目中适合使用哪种那方案`  
  
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7db1aa96587544189fe051561fbebef4~tplv-k3u1fbpfcp-watermark.image?)  
  
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed3cf9e346434949b63c5d1e4b02c38b~tplv-k3u1fbpfcp-watermark.image?)  
  
## 零：CSS的原生问题  
在讲解各种解决方案之前，我们先回顾下日常开发中我们遇到的css问题，待着这些问题，我们在讲解各种解决方案，并分析各个解决方案是否可以解决如下问题  
### 0.1 无作用域样式污染  
CSS有一个被大家诟病的问题就是`没有本地作用域`，所有声明的样式都是`全局的（global styles）`  
  
换句话来说页面上任意元素只要匹配上某个选择器的规则，这个规则就会被应用上，而且规则和规则之间可以`叠加作用（cascading）`  
  
`SPA应用`流行了之后这个问题变得更加突出了，因为对于SPA应用来说所有页面的样式代码都会加载到同一个环境中，样式冲突的概率会大大加大。由于这个问题的存在，我们在日常开发中会遇到以下这些问题：  
  
- **很难为选择器起名字**：为了避免和页面上其他元素的样式发生冲突，我们在起选择器名的时候一定要深思熟虑，起的名字一定不能太普通。举个例子，假如你为页面上某个作为标题的DOM节点定义一个叫做`.title`的样式名，这个类名很大概率已经或者将会和页面上的其他选择器发生冲突，所以你不得不**手动**为这个类名添加一些前缀，例如`.home-page-title`来避免这个问题  
- **团队多人合作困难**：当多个人一起开发同一个项目的时候，特别是多个分支同时开发的时候，大家各自取的选择器名字可能有会冲突，可是在本地独立开发的时候这个问题几乎发现不了。当大家的代码合并到同一个分支的时候，一些样式的问题就会随之出现  
  
### 0.2 无用的CSS样式堆积  
进行过大型Web项目开发的同学应该都有经历过这个情景：在开发新的功能或者进行代码重构的时候，由于`HTML代码和CSS样式之间没有显式的一一对应关系`，我们很难辨认出项目中哪些CSS样式代码是有用的哪些是无用的，这就导致了我们不敢轻易删除代码中可能是无用的样式。这样随着时间的推移，项目中的CSS样式只会增加而不会减少([append-only stylesheets](https://link.zhihu.com/?target=https%3A//css-tricks.com/oh-no-stylesheet-grows-grows-grows-append-stylesheet-problem/)）。无用的样式代码堆积会导致以下这些问题：  
  
- **项目变得越来越重量级**：加载到浏览器的CSS样式会越来越多，会造成一定的性能影响  
- **开发成本越来越高**：开发者发现他们很难理解项目中的样式代码，甚至可能被大量的样式代码吓到，这就导致了开发效率的降低以及一些奇奇怪怪的样式问题的出现  
  
### 0.3 基于状态的样式定义  
对于SPA应用来说，特别是一些交互复杂的页面，页面的样式通常要根据组件的状态变化而发生变化  
  
最常用的方式是通过不同的状态定义不同的`className名`，这种方案代码看起来十分冗余和繁琐，通常需要同时改动`js代码和css代码`  
  
> `这个CSS重写一遍比修改老文件快`，这样的念头几乎所有人都曾有过，css虽然看似简单，但是以上问题很容易写着写着就出现了，这在于提前没有选好方案  
  
  
## 一、BEM  
### 1.1 简介  
BEM是`一种css命名方法论`，意思是块（Block）、元素（Element）、修饰符（Modifier）的简写  
  
这种命名方法让[CSS](https://baike.baidu.com/item/CSS/5457)便于统一团队开发规范和方便维护  
  
以 `.block__element--modifier`或者说`block-name__element-name--modifier-name`形式命名，命名有含义，也就是`模块名 + 元素名 + 修饰器名`  
  
如`.dropdown-menu__item--active`  
  
社区里面对BEM命名的褒贬不一，但是对其的思想基本上还是认同的，所以可以`用它的思想，不一定要用它的命名方式`  
  
### 1.2 应用场景  
BEM思想通常用于`组件库`，业务代码中`结合less等预处理器`  
  
### 1.3 优缺点分析  
#### 优点：  
1. 人为严格遵守BEM规范，可以解决无作用域样式污染问题  
2. 可读性好，一目了然是那个dom节点，对于无用css删除，删除了相应dom节点后，对应的css也能比较放心的删除，不会影响到其他元素样式  
#### 缺点  
1. 命名太长（个人开发习惯、部分人会觉得，我认为命名长提高了可读性，能解决一些问题，也不叫缺点），至于体积增大，gzip可忽略  
  
> 个人比较喜欢BEM，其思想对编码好处远大于坏处，有兴趣的可以在项目中使用，更多可看[知乎：如何看待 CSS 中 BEM 的命名方式？](https://www.zhihu.com/question/21935157)  
  
## 二、CSS modules  
### 2.1 简介  
什么是`CSS Modules`？  
  
顾名思义，`css-modules 将 css 代码模块化`，可以避免`本模块样式被污染`，并且可以很方便的复用 css 代码  
  
根据`CSS Modules`在Gihub上的[项目](https://github.com/css-modules/css-modules)，它被解释为：  
  
> 所有的类名和动画名称默认都有各自的作用域的CSS文件。  
  
所以`CSS Modules`既不是官方标准，也不是浏览器的特性，而是**在构建步骤（例如使用Webpack，记住css-loader）中对CSS类名和选择器`限定作用域`的一种方式**（类似于命名空间）  
  
依赖`webpack css-loader`，配置如下，现在webpack已经默认开启CSS modules功能了  
```js  
{  
    test: /.css$/,  
    loader: "style-loader!css-loader?modules"  
}  
```  
  
我们先看一个示例：  
  
将`CSS`文件`style.css`引入为`style`对象后，通过`style.title`的方式使用`title class`：  
  
```jsx  
import style from './style.css';  
  
export default () => {  
  return (  
    <p className={style.title}>  
      I am KaSong.  
    </p>  
  );  
};  
```  
  
对应`style.css`：  
  
```css  
.title {  
  color: red;  
}  
```  
打包工具会将`style.title`编译为`带哈希的字符串`  
```jsx  
<h1 class="_3zyde4l1yATCOkgn-DBWEL">  
  Hello World  
</h1>  
```  
同时`style.css`也会编译：  
```css  
._3zyde4l1yATCOkgn-DBWEL {  
  color: red;  
}  
```  
  
这样，就产生了独一无二的`class`，解决了`CSS`模块化的问题  
  
使用了 CSS Modules 后，就相当于给每个 class 名外加加了一个 `:local`，以此来实现样式的局部化，如果你想切换到全局模式，使用对应的 `:global`。  
  
`:local` 与 `:global` 的区别是 CSS Modules 只会对 `:local` 块的 class 样式做 `localIdentName` 规则处理，`:global` 的样式编译后不变  
```css  
.title {  
  color: red;  
}  
  
:global(.title) {  
  color: green;  
}  
```  
可以看到，依旧使用CSS，但使用JS来管理样式依赖，  
最大化地结合现有 CSS 生态和 JS 模块化能力，发布时依旧编译出单独的 JS 和 CSS  
  
### 2.2 优缺点分析  
#### 优点  
- 能100%解决css无作用域样式污染问题  
- 学习成本低：API简洁到几乎零学习成本  
#### 缺点  
- 写法没有传统开发流程，如果你不想频繁的输入 `styles.**`，可以试一下 [react-css-modules]([gajus/react-css-modules · GitHub](https://link.zhihu.com/?target=https%3A//github.com/gajus/react-css-modules))，它通过高阶函数的形式来避免重复输入 `styles.**`  
- 没有变量，通常要结合预处理器  
- 代码可读性差，hash值不方便debug  
  
> css modules通常结合less等预处理器在react中使用，更多可参考[CSS Modules 详解及 React 中实践](https://zhuanlan.zhihu.com/p/20495964)  
  
## 三、CSS in JS  
  
### 3.1 简介  
`CSS in JS`是2014年推出的一种**设计模式**，它的核心思想是`把CSS直接写到各自组件中`，也就是说`用JS去写CSS`，而不是单独的样式文件里  
  
这跟传统的前端开发思维不一样，传统的原则是`关注点分离`，如常说的`不写行内样式`、`不写行内脚本`，如下代码  
```html  
<h1 style="color:red;font-size:46px;"  onclick="alert('Hi')">  
  Hello World  
</h1>  
```  
  
`CSS-in-JS`不是一种很新的技术，可是它在国内普及度好像并不是很高，它当初的出现是因为一些`component-based`的`Web`框架（例如 `React`，`Vue` 和 `Angular`）的逐渐流行，使得开发者也想`将组件的CSS样式也一块封装到组件中去`以**解决原生CSS写法的一系列问题**  
  
>CSS-in-JS在`React社区`的热度是最高的，这是因为React本身不会管用户怎么去为组件定义样式的问题，而Vue和Angular都有属于框架自己的一套定义样式的方案  
  
上面的例子使用 `React` 改写如下  
  
```jsx  
const style = {  
  'color': 'red',  
  'fontSize': '46px'  
};  
  
const clickHandler = () => alert('hi');   
  
ReactDOM.render(  
  <h1 style={style} onclick={clickHandler}>  
     Hello, world!  
  </h1>,  
  document.getElementById('example')  
);  
```  
上面代码在一个文件里面，封装了**结构、样式和逻辑**，完全`违背了"关注点分离"的原则`  
  
但是，这`有利于组件的隔离`。每个组件包含了所有需要用到的代码，不依赖外部，组件之间没有耦合，很方便复用。所以，随着 React 的走红和组件模式深入人心，这种"`关注点混合`"的新写法逐渐成为主流  
  
### 3.2 实现CSS in JS的库汇总  
实现了`CSS-in-JS`的库有很多，[据统计](https://link.zhihu.com/?target=https%3A//github.com/MicheleBertoli/css-in-js)现在已经超过了61种。虽然每个库解决的问题都差不多，可是它们的实现方法和语法却大相径庭  
  
从实现方法上区分大体分为两种：  
- `唯一CSS选择器`，代表库：[styled-components](https://github.com/styled-components/styled-components)  
- `内联样式`（Unique Selector VS Inline Styles）  
  
不同的`CSS in JS`实现除了生成的`CSS样式和编写语法`有所区别外，它们实现的功能也不尽相同，除了一些最基本的诸如CSS局部作用域的功能，下面这些功能有的实现会包含而有的却不支持：  
-   自动生成浏览器引擎前缀 - built-in vendor prefix  
-   支持抽取独立的CSS样式表 - extract css file  
-   自带支持动画 - built-in support for animations  
-   伪类 - pseudo classes  
-   媒体查询 - media query  
-   其他  
  
  
### 3.3 [styled-components](https://github.com/styled-components/styled-components)示例  
[Styled-components](https://github.com/styled-components/styled-components) 是`CSS in JS`最热门的一个库了，到目前为止github的star数已经超过了`35k`  
  
通过`styled-components`，可以使用ES6的[标签模板字符串](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)语法（Tagged Templates）为需要`styled`的`Component`定义一系列`CSS`属性  
  
当该组件的`JS代码被解析执行`的时候，`styled-components会动态生成一个CSS选择器`，并把对应的`CSS`样式通过`style`标签的形式插入到`head`标签里面。动态生成的`CSS`选择器会有一小段`哈希值来保证全局唯一性`来避免样式发生冲突  
  
[CSS-in-JS Playground](https://link.zhihu.com/?target=https%3A//www.cssinjsplayground.com/)是一个可以快速尝试不同CSS-in-JS实现的网站，上面有一个简单的用`styled-components`实现表单的例子：  
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc1c95acd5ff4b87b0d3a97326510b45~tplv-k3u1fbpfcp-watermark.image?)  
  
从上面的例子可以看出，`styled-components`不需要你为需要设置样式的DOM节点设置一个`样式名`，使用完标签模板字符串定义后你会得到一个`styled`好的`Component`，直接在`JSX`中使用这个`Component`就可以了  
  
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c65d76ba48234451a0b22e15f6bdd4c2~tplv-k3u1fbpfcp-watermark.image?)  
可以看到截图里面框出来的样式生成了一段`hash值`，实现了`局部CSS作用域`的效果（scoping styles），`各个组件的样式不会发生冲突`  
  
### 3.4 [Radium](https://formidable.com/open-source/radium/)示例  
`Radium`和`styled-components`的最大区别是它生成的是`标签内联样式（inline styles）`  
  
由于标签内联样式在处理诸如`media query`以及`:hover`，`:focus`，`:active`等和浏览器状态相关的样式的时候非常不方便，所以`radium`为这些样式封装了一些标准的接口以及抽象  
  
再来看一下`radium`在[CSS-in-JS Playground](https://www.cssinjsplayground.com/?activeModule=index&library=radium)的例子：  
  
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/668ec69c9681461face360b8afbd96cd~tplv-k3u1fbpfcp-watermark.image?)  
从上面的例子可以看出`radium`定义样式的语法和`styled-components`有很大的区别，它要求你使用`style`属性为`DOM`添加相应的样式  
  
直接在标签内生成内联样式，内联样式相比于CSS选择器的方法有以下的优点： `自带局部样式作用域的效果`，无需额外的操作  
  
### 3.5 CSS in JS 与"CSS 预处理器"（比如 Less 和 [Sass](https://www.ruanyifeng.com/blog/2012/06/sass.html)，包括 PostCSS）有什么区别  
`CSS in JS` 使用 `JavaScript` 的语法，**是 JavaScript 脚本的一部分**，不用从头学习一套专用的 API，也不会多一道编译步骤，但是通常会在运行时动态生成CSS，造成一定运行时开销  
  
### 3.6 优缺点分析  
#### 优点  
- **没有无作用域问题样式污染问题**  
      
    通过唯一CSS选择器或者行内样式解决  
- **没有无用的CSS样式堆积问题**  
      
    CSS-in-JS会把样式和组件绑定在一起，当这个组件要被删除掉的时候，直接把这些代码删除掉就好了，不用担心删掉的样式代码会对项目的其他组件样式产生影响。而且由于CSS是写在JavaScript里面的，我们还可以利用JS显式的变量定义，模块引用等语言特性来追踪样式的使用情况，这大大方便了我们对样式代码的更改或者重构  
      
- **更好的基于状态的样式定义**  
  
    CSS-in-JS会直接将CSS样式写在JS文件里面，所以样式复用以及逻辑判断都十分方便  
  
#### 缺点：  
- **一定的学习成本**  
- **代码可读性差**  
      
    大多数CSS-in-JS实现会通过生成唯一的CSS选择器来达到CSS局部作用域的效果。这些自动生成的选择器会大大降低代码的可读性，给开发人员debug造成一定的影响  
- **运行时消耗**  
  
    由于大多数的CSS-in-JS的库都是在动态生成CSS的。这会有两方面的影响。首先你发送到客户端的代码会包括使用到的CSS-in-JS运行时（runtime）代码，这些代码一般都不是很小，例如styled-components的runtime大小是`12.42kB min + gzip`，如果你希望你首屏加载的代码很小，你得考虑这个问题。其次大多数CSS-in-JS实现都是在客户端动态生成CSS的，这就意味着会有一定的性能代价。不同的CSS-in-JS实现由于具体的实现细节不一样，所以它们的性能也会有很大的区别，你可以通过[这个工具](https://link.zhihu.com/?target=http%3A//necolas.github.io/react-native-web/benchmarks/)来查看和衡量各个实现的性能差异  
      
- 不能结合成熟的CSS预处理器（或后处理器）Sass/Less/PostCSS，`:hover` 和 `:active` 伪类处理起来复杂  
      
> 可以看到优点多，缺点也不少，选择需慎重，更多可阅读阮一峰老师写的[CSS in JS简介](http://www.ruanyifeng.com/blog/2017/04/css_in_js.html)，[知乎CSS in JS的好与坏](https://zhuanlan.zhihu.com/p/103522819)  
## 四、预处理器  
### 4.1 简介  
**CSS 预处理器**是一个能让你通过预处理器自己独有的语法的程序  
  
市面上有很多CSS预处理器可供选择，且绝大多数CSS预处理器**会增加一些原生CSS不具备的特性**，例如  
- 代码混合  
- 嵌套选择器  
- 继承选择器  
  
这些特性让CSS的结构`更加具有可读性且易于维护`  
  
要使用CSS预处理器，你必须在web服务中安装CSS`编译工具`  
  
我们常见的预处理器：  
-   [Sass](https://sass-lang.com/)  
-   [LESS](https://lesscss.org/)  
-   [Stylus](http://stylus-lang.com/)  
-   [PostCSS](http://postcss.org/)  
  
### 4.2 优缺点分析  
  
#### 优点：  
1. 利用嵌套，人为严格遵守嵌套首类名不一致，可以解决无作用域样式污染问题  
2. 可读性好，一目了然是那个dom节点，对于无用css删除，删除了相应dom节点后，对应的css也能比较放心的删除，不会影响到其他元素样式  
#### 缺点  
1. 需要借助相关的编译工具处理  
  
> 预处理器是现代web开发中必备，`结合BEM规范`，利用预处理器，可以极大的`提高开发效率，可读性，复用性`  
  
## 五、Shadow DOM  
### 5.1 简介  
熟悉`web Components`的一定知道`Shadow DOM`可以实现样式隔离，由浏览器原生支持  
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0444ea0c1ab4d54b6552f4f4d559bd0~tplv-k3u1fbpfcp-watermark.image?)  
  
我们经常在微前端领域看到`Shadow DOM`，如下创建一个子应用  
```js  
const shadow = document.querySelector('#hostElement').attachShadow({mode: 'open'});  
shadow.innerHTML = '<sub-app>Here is some new text</sub-app><link rel="stylesheet" href="//unpkg.com/antd/antd.min.css">';  
```  
  
由于子应用的样式作用域仅在 `shadow` 元素下，那么一旦子应用中出现运行时越界跑到外面构建 DOM 的场景，必定会导致构建出来的 DOM 无法应用子应用的样式的情况。  
  
比如 `sub-app` 里调用了 `antd modal` 组件，由于 `modal` 是动态挂载到 `document.body` 的，而由于 `Shadow DOM` 的特性 `antd` 的样式只会在 `shadow` 这个作用域下生效，结果就是弹出框无法应用到 `antd` 的样式。解决的办法是把 `antd` 样式上浮一层，丢到主文档里，但这么做意味着子应用的样式直接泄露到主文档了  
  
  
### 5.2 优缺点分析  
#### 优点  
- 浏览器原生支持  
- 严格意义上的样式隔离，如iframe一样  
#### 缺点  
- 浏览器兼容问题  
- 只对一定范围内的dom结构起作用，上面微前端场景已经说明  
  
> 普通业务开发我们还是用框架、如Vue、React；Shadow DOM适用于特殊场景，如微前端  
  
  
  
  
  
  
## 六、vue scoped  
当 `<style>` 标签有 `scoped` 属性时，它的 `CSS` 只作用于当前组件中的元素  
  
通过使用 `PostCSS` 来实现以下转换：  
  
```html  
<style scoped>  
.example {  
  color: red;  
}  
</style>  
  
<template>  
  <div class="example">hi</div>  
</template>  
```  
转换结果：  
```html  
<style>  
.example[data-v-f3f3eg9] {  
  color: red;  
}  
</style>  
  
<template>  
  <div class="example" data-v-f3f3eg9>hi</div>  
</template>  
```  
使用 `scoped` 后，**父组件的样式将不会渗透到子组件中**  
  
不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式，父租价利用`深度作用选择器`影响子组件样式  
  
可以使用 `>>>` 操作符：  
```html  
<style scoped>  
.a >>> .b { /* ... */ }  
</style>  
```  
上述代码将会编译成：  
  
```html  
.a[data-v-f3f3eg9] .b { /* ... */ }  
```  
有些像 `Sass` 之类的预处理器无法正确解析 `>>>`。这种情况下你可以使用 `/deep/` 或 `::v-deep` 操作符取而代之——两者都是 `>>>` 的别名，同样可以正常工作  
  
  
## 总结  
  
六种方案对比如下，社区通常的样式隔离方案，以下两种  
- `BEM+预处理器`  
- `CSS Moduls + 预处理器`  
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed3cf9e346434949b63c5d1e4b02c38b~tplv-k3u1fbpfcp-watermark.image?)  
  
  
# position：absolute绝对定位，是相对于谁的定位？  
CSS position属性用于指定一个元素在文档中的定位方式。top，right，bottom 和 left 属性则决定了该元素的最终位置。  
  
absolute的元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的 **非 static 定位祖先元素** 的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。  
# 怎么做移动端的样式适配？  
 在移动端虽然整体来说大部分浏览器内核都是 webkit，而且大部分都支持 css3 的所有语法。但是，由于手机屏幕尺寸不一样，分辨率不一样，或者你需要考虑横竖屏的问题，或者考虑到各式各样的移动端兼容性问题。这时候你也就不得不解决在不同手机上，不同情况下的展示效果，所以就需要一个开箱即用并且行之有效的移动端适配方案。  
  
  
  
## 一、基本知识点  
工欲善其事必先利其器，在具体介绍适配方案前，在本章我们会学习下适配相关的知识点，便于后续适配方案的直接上手接收。  
### 1.1、响应式设计 - 像素  
像素单位有设备像素、逻辑像素、CSS 像素 3 种。  
#### 1.1.1、设备像素、设备分辨率  
设备像素（device pixels）也叫物理像素，指的是显示器上的真实像素，每个像素的大小是屏幕固有的属性，屏幕出厂以后就不会再改变。                
设备分辨率描述的就是这个显示器的宽和高分别是多少个设备像素，例如常见的显示器的分辨率为 1920 * 1080。                  
设备像素和设备分辨率是由操作系统来管理的，浏览器不知道、也不必知道设备分辨率的大小，它主要根据逻辑分别率（下一小节介绍）来计算的。  
​  
  
#### 1.1.2、设备独立像素、逻辑分辨率  
设备独立像素（device independent pixels）是操作系统定义的一种像素单位，应用程序将设备独立像素告诉操作系统，操作系统再将设备独立像素转化为设备像素，从而控制屏幕上真正的物理像素点。      
为什么需要在应用程序与设备像素之间定义这么一种单位呢？为什么应用程序不应该直接使用设备像素？        
例如原先在 1280×720 设备分辨率的显示屏中，显示高度为 12 个设备像素的字体，现在放到设备分辨率为 2560 ×1440 的显示屏中，如果要想得到原先的大小，则需要 24 个设备像素，如果应用程序直接使用设备像素，那么编写应用程序则将变得非常困难，需要编写应用程序逻辑：字体在一些屏幕上高度为 12 个设备像素，在另一些屏幕上却需要 24 个设备像素。                                                           
因此操作系统定义了一个单位：设备独立像素。操作系统保证：用设备独立像素定义的尺寸，不管屏幕的参数如何，都能以合适的大小显示（这也是设备独立像素名字的由来）。操作系统是如何做到的呢？对于那些像素密度高的屏幕，将多个设备像素划分为一个逻辑像素。至于将多少设备像素划分为一个逻辑像素，这由操作系统决定。          
对于上面的例子：“原本高度为 12 个设备像素的字体，现在高度为 24 个设备像素才能得到相同的大小”，操作系统会将一个逻辑像素定义为 2*2个 真实像素，从而设备独立像素尺寸不需要改变，而且不管在新、旧设备上，显示的尺寸大致相同。  
> 设备独立像素与设备像素之间的比例是多少，显示器厂商和操作系统厂商会通过调查研究来得出最利于观看的比例。普遍规律是，屏幕的像素密度越高，就需要更多的设备像素来显示一个设备独立像素。  
  
​  
  
逻辑分辨率用屏幕的 宽*高 来表示（单位：设备独立像素），我们通过操作系统的分辨率设置来改变设备独立像素的大小。例如屏幕的设备分辨率是1920*1200（单位：设备像素），我们可以在当前的分辨率下设置逻辑分辨率是1280*800（单位：设备独立像素）。那么横、纵方向的设备像素数量恰好是设备独立像素的1.5倍。这也意味着，设备独立像素的边长是设备像素边长的1.5倍。  
​  
  
#### 1.1.3、CSS 像素  
在 CSS 中使用的 px 都是指 css 像素，比如 width: 128px。css 像素的大小是很容易变化的，当我们缩放页面的时候，元素的 css 像素数量不会改变，改变的只是每个 css 像素的大小。也就是说 width: 128px 的元素在缩放200% 以后，宽度依然是 128 个 css 像素，只不过每个 css 像素的宽度和高度变为原来的两倍。如果原本元素宽度为 128 个设备独立像素，那么缩放 200% 以后元素宽度为 256 个设备独立像素。  
​  
  
**（1）css 像素与设备独立像素的关系**  
  
- 缩放比例就是 css 像素边长/设备独立像素边长；                                
- 在缩放比例为 100% 的情况下，1 个 css 像素大小等于 1 个设备独立像素；         
- 在缩放比例为 200% 的情况下，1 个 css 像素大小等于 (2 * 2)  个设备独立像素；  
  
**（2）css 像素与设备像素的关系**  
  
window.devicePixelRatio 设备像素比，devicePixelRatio = （在相同长度的直线上）设备像素的数量 / CSS 像素的数量。这个比例也等价于 CSS 像素边长/设备像素边长。如 devicePixelRatio = 2，表示在相同长度的直线上，设备像素的数量是 CSS 像素数量的 2 倍，因此 CSS 像素的边长是设备像素的 2 倍。缩放会导致 CSS 像素边长的改变，从而导致 window.devicePixelRatio 的改变！  
###   
### 1.2、响应式设计 - viewport  
  
viewport 表示浏览器的可视区域，也就是浏览器中用来显示网页的那部分区域。存在三种 viewport 分别为 layout viewport、visual viewport 以及 ideal viewport，我们接下来分别介绍三种。  
  
#### 1.2.1、layout viewport  
layout viewport 为布局视口，即网页布局的区域，它是 html 元素的父容器，只要不在 css 中修改 <html> 元素的宽度，<html> 元素的宽度就会撑满 layout viewport 的宽度。                                                                 
很多时候浏览器窗口没有办法显示出 layout viewport 的全貌，但是它确实是已经被加载出来了，这个时候滚动条就出现了，你需要通过滚动条来浏览 layout viewport 其他的部分。           
layout viewport 用 css 像素来衡量尺寸，在缩放、调整浏览器窗口的时候不会改变。缩放、调整浏览器窗口改变的只是 visual viewport。  
​  
  
在桌面浏览器中，缩放100% 的时候，Layout Viewport 宽度等于内容窗口的宽度。（你几乎不会在电脑上见过横向滚动条，除非你调整缩放）                     
但是在移动端，缩放为 100% 的时候，Layout Viewport 不一定等于内容窗口的大小。当你用手机浏览浏览宽大的网页（这些网页没有采用响应式设计）的时候，你只能一次浏览网页的一个部分，然后通过手指滑动浏览其他部分。这就说明整个网页（Layout Viewport）已经加载出来了，只不过你要一部分一部分地看。  
  
![1.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/345849662c534da4be0057c251fe62c3~tplv-k3u1fbpfcp-watermark.image?)  
​  
  
#### 1.2.2、visual viewport  
visual viewport 为视觉视口，就是显示在屏幕上的网页区域，它往往只显示 layout viewport 的一部分。                                      
visual viewport 就像一台摄像机，layout viewport 就像一张纸，摄像机对准纸的哪个部分，你就能看见哪个部分。你可以改变摄像机的拍摄区域大小（调整浏览器窗口大小），也可以调整摄像机的距离（调整缩放比例），这些方法都可以改变 visual viewport，但是 layout viewport 始终不变。  
  
![2.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e1f0215038d64edb88d900d1b5e8ecad~tplv-k3u1fbpfcp-watermark.image?)  
  
#### 1.2.3、ideal viewport  
ideal viewport 为理想视口，不同的设备有自己不同的 ideal viewport，ideal viewport 的宽度等于移动设备的屏幕宽度，所以其是最适合移动设备的 viewport。只要在 css 中把某一元素的宽度设为 ideal viewport 的宽度(单位用 px )，那么这个元素的宽度就是设备屏幕的宽度了，也就是宽度为100% 的效果。                     ideal viewport 的意义在于，无论在何种分辨率的屏幕下，那些针对ideal viewport 而设计的网站，不需要用户手动缩放，也不需要出现横向滚动条，都可以完美的呈现给用户。  
  
#### 1.2.4、利用 meta 标签对 viewport 进行控制  
移动设备默认的 viewport 是 layout viewport，也就是那个比屏幕要宽的 viewport，但在进行移动设备网站的开发时，我们需要的是 ideal viewport。那么怎么才能得到 ideal viewport 呢？                                
我们在开发 h5 页面时，最经常见的标签如下所示  
```javascript  
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">  
```  
该 meta 标签的作用是让当前 viewport 的宽度等于设备的宽度，同时不允许用户手动缩放。如果你不这样的设定的话，那就会使用那个比屏幕宽的默认 viewport（layout viewport），也就是说会出现横向滚动条。                                     
相关的属性意义如下所示  
  
| width | 设置 layout viewport  的宽度，为一个正整数，或字符串 "width-device" |  
| --- | --- |  
| height | 设置页面的初始缩放值，为一个数字，可以带小数 |  
| initial-scale | 允许用户的最小缩放值，为一个数字，可以带小数 |  
| minimum-scale | 允许用户的最大缩放值，为一个数字，可以带小数 |  
| maximum-scale | 设置 layout viewport  的高度，这个属性对我们并不重要，很少使用 |  
| user-scalable | 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes 代表允许 |  
  
  
  
## 二、方案选择  
在前端滚滚潮流的历史发展中的不同时期分别出现了一些极具代表性的适配方案，以下分别进行简单介绍。  
### 2.1、使用 css 的媒体查询 @media  
基于 css 的媒体查询属性 @media  分别为不同屏幕尺寸的移动设备编写不同尺寸的 css 属性，示例如下所示。虽然此方法能在一定程度上解决移动设备适配的问题，但我们也可以看出其存在以下问题，所以其已几乎被历史潮流淘汰。  
  
- 页面上所有的元素都得在不同的 @media 中定义一遍不同的尺寸，这个代价有点高；  
- 如果再多一种屏幕尺寸，就得多写一个 @media 查询块；  
```css  
@media only screen and (min-width: 375px) {  
  .logo {  
    width : 62.5px;  
  }  
}  
  
@media only screen and (min-width: 360px) {  
  .logo {  
    width : 60px;  
  }  
}  
  
@media only screen and (min-width: 320px) {  
  .logo {  
    width : 53.3333px;  
  }  
}  
```  
  
  
  
### 2.2、使用 rem 单位  
  
rem（font size of the root element）是指相对于根元素的字体大小的单位，如果我们设置 html 的 font-size 为 16px，则如果需要设置元素字体大小为 16px，则写为 1rem。但是其还是必须得借助 @media 属性来为不同大小的设备设置不同的 font-size，相对上一种方案，可以减少重复编写相同属性的代价，简单示例如下所示。                
我们也能看到该方案存在以下问题：  
  
- 不同的尺寸需要写多个 @media；  
- 所有涉及到使用 rem 的地方，全部都需要调用方法 calc() ，这个也挺麻烦的；  
```css  
@media only screen and (min-width: 375px) {  
  html {  
    font-size : 375px;  
  }  
}  
  
@media only screen and (min-width: 360px) {  
  html {  
    font-size : 360px;  
  }  
}  
  
@media only screen and (min-width: 320px) {  
  html {  
    font-size : 320px;  
  }  
}  
  
//定义方法：calc  
@function calc($val){  
    @return $val / 1080;  
}  
  
.logo{  
	width : calc(180rem);  
}  
```  
  
  
  
### 2.3、flexible 适配方案   
  
在 rem 方案上进行改进，我们可以使用 js 动态来设置根字体，这种方案的典型代表就是 [flexible 适配方案](https://github.com/amfe/lib-flexible)。  
#### 2.3.1、 使用 rem 模拟 vw 特性适配多种屏幕尺寸  
它的核心代码如下所示  
```javascript  
// set 1rem = viewWidth / 10  
function setRemUnit () {  
    var rem = docEl.clientWidth / 10  
    docEl.style.fontSize = rem + 'px'  
}  
setRemUnit();  
```  
上面的代码中，将 html 节点的 font-size 设置为页面 clientWidth(布局视口)的 1/10，即 1rem 就等于页面布局视口的 1/10，这就意味着我们后面使用的 rem 都是按照页面比例来计算的。  
#### 2.3.2、控制 viewport 的 width 和 scale 值适配高倍屏显示  
设置 viewport 的 width 为 device-width，改变浏览器 viewport（布局视口和视觉视口）的默认宽度为理想视口宽度，从而使得用户可以在理想视口内看到完整的布局视口的内容。                 
等比设置 viewport 的 initial-scale、maximum-scale、minimum-scale 的值，从而实现 1 物理像素=1 css像素，以适配高倍屏的显示效果（就是在这个地方规避了大家熟知的“1px 问题”）  
```javascript  
var metaEL= doc.querySelector('meta[name="viewport"]');  
var dpr = window.devicePixelRatio;  
var scale = 1 / dpr  
metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');   
```  
#### 2.3.3、flexible 的缺陷  
不可否认 flexible 在兼容性不友好的某个时期还是极大帮助来成千上万的开发者，但是该方案自身是存在一些问题的。  
- 由于其缩放的缘故，video 标签的视频频播放器的样式在不同 dpr 的设备上展示差异很大；  
- 如果你去研究过 lib-flexible 的源码，那你一定知道 lib-flexible 对安卓手机的特殊处理，即：一律按 dpr  = 1 处理；  
```javascript  
if (isIPhone) {  
  // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案  
  if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                  
    dpr = 3;  
  } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){  
    dpr = 2;  
  } else {  
    dpr = 1;  
  }  
} else {  
  // 其他设备下，仍旧使用1倍的方案  
  dpr = 1;  
}  
```  
- 不再兼容 @media 的响应式布局，因为 @media 语法中涉及到的尺寸查询语句，查询的尺寸依据是当前设备的物理像素，和 flexible 的布局理论（即针对不同 dpr 设备等比缩放视口的 scale 值，从而同时改变布局视口和视觉视口大小）相悖，因此响应式布局在“等比缩放视口大小”的情境下是无法正常工作的；  
  
其实 flexible 方案是在 模拟 viewport 功能，只是随着浏览器的发展及兼容性增强，viewport 已经能兼容绝大部分主流浏览器，并且 flexible 方案自身存在的问题，所有其也已几乎退出历史潮流。引用 [lib-flexible](https://github.com/amfe/lib-flexible) 的 github 主页的原话：  
> 由于 viewport 单位得到众多浏览器的兼容，lib-flexible 这个过渡方案已经可以放弃使用，不管是现在的版本还是以前的版本，都存有一定的问题。建议大家开始使用 viewport 来替代此方案。  
  
  
  
### 2.4、viewport 适配方案  
由于 viewport 单位得到众多浏览器的兼容，所以目前基于 viewport 的移动端适配方案被各大厂团队所采用。  
  
vw 作为布局单位，从底层根本上解决了不同尺寸屏幕的适配问题，因为每个屏幕的百分比是固定的、可预测、可控制的。 viewport 相关概念如下：  
  
- vw：是 viewport's width 的简写，1vw 等于 window.innerWidth 的 1%；  
- vh：和 vw 类似，是 viewport's height 的简写，1vh 等于 window.innerHeihgt 的 1%；  
- vmin：vmin 的值是当前 vw 和 vh 中较小的值；  
- vmax：vmax 的值是当前 vw 和 vh 中较大的值；  
  
  
  
假设我们拿到的视觉稿宽度为 750px，视觉稿中某个字体大小为 75px，则我们的 css 属性只要如下这么写，不需要额外的去用 js 进行设置，也不需要去缩放屏幕等；  
```css  
.logo {  
  font-size: 10vw; // 1vw = 750px * 1% = 7.5px  
}  
```  
##   
#### 2.4.1、设置 meta 标签  
在 html 头部设置 mata 标签如下所示，让当前 viewport 的宽度等于设备的宽度，同时不允许用户手动缩放。  
```javascript  
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">  
```  
​  
  
#### 2.4.2、px 自动转换为 vw  
设计师一般给宽度大小为 375px 或 750px 的视觉稿，我们采用 vw 方案的话，需要将对应的元素大小单位 px 转换为 vw 单位，这是一项影响开发效率（需要手动计算将 px 转换为 vw）且不利于后续代码维护（css 代码中一堆 vw 单位，不如 px 看的直观）的事情；好在社区提供了 [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 插件，来将 px 自动转换为 vw，相关配置步骤如下：  
  
**（1） 安装插件**  
  
```javascript  
npm install postcss-px-to-viewport --save-dev  
```  
**（2）webpack 配置**  
  
官网是使用 glup 进行配置，但是我们项目模版中是使用 webpack 进行 postcss 插件以及相关样式插件的配置，所以我们就使用 webpack 进行配置使用，不需要额外引入 gulp 编译；webpack 相关配置如下，且每个属性表示的意义进行了备注：  
```javascript  
module.exports = {  
  plugins: {  
    // ...  
    'postcss-px-to-viewport': {  
      // options  
      unitToConvert: 'px',    // 需要转换的单位，默认为"px"  
      viewportWidth: 750,     // 设计稿的视窗宽度  
      unitPrecision: 5,       // 单位转换后保留的精度  
      propList: ['*', '!font-size'],        // 能转化为 vw 的属性列表  
      viewportUnit: 'vw',     // 希望使用的视窗单位  
      fontViewportUnit: 'vw', // 字体使用的视窗单位  
      selectorBlackList: [],  // 需要忽略的 CSS 选择器，不会转为视窗单位，使用原有的 px 等单位  
      minPixelValue: 1,       // 设置最小的转换数值，如果为 1 的话，只有大于 1 的值会被转换  
      mediaQuery: false,      // 媒体查询里的单位是否需要转换单位  
      replace: true,          // 是否直接更换属性值，而不添加备用属性  
      exclude: undefined,     // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件  
      include: /\/src\//,     // 如果设置了include，那将只有匹配到的文件才会被转换  
      landscape: false,       // 是否添加根据 landscapeWidth 生成的媒体查询条件  
      landscapeUnit: 'vw',    // 横屏时使用的单位  
      landscapeWidth: 1125,   // 横屏时使用的视窗宽度  
    },  
  },  
};  
```  
相关配置属性，通过注释一目了然其作用，其中需要强调的点为 propList 属性，我们配置了 font-size 不进行转换 vw，也就是说在不同手机屏幕尺寸下的字体大小是一样的。  
其中 font-size 是否需要根据屏幕大小做适配，或者怎么做，一直是个争论不休的话题；考虑到我们移动端没有平板的需求，且咨询过团队业务设计师的意见，所以对模版进行以上默认配置；当然如果你的视觉要求你的项目要做字体大小适配，修改 propList 属性的配置即可。  
  
  
**（3）效果展示**  
我们在项目代码中，进行如下 css 编码：  
```css  
.hello {  
  color: #333;  
  font-size: 28px;  
}  
```  
启动项目，我们可以看到浏览器渲染的页面中，postcss-px-to-viewport 已经帮我们做进行了 px -> vw 的转换；如下所示：  
  
![3.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3696c5428084457b86d3911f45d89c27~tplv-k3u1fbpfcp-watermark.image?)  
  
  
  
#### 2.4.3、标注不需要转换的属性  
在项目中，如果设计师要求某一场景不做自适配，需为固定的宽高或大小，这时我们就需要利用 postcss-px-to-viewport 插件的 Ignoring 特性，对不需要转换的 css 属性进行标注，示例如下所示：  
  
- /* px-to-viewport-ignore-next */  —> 下一行不进行转换.  
- /* px-to-viewport-ignore */  —> 当前行不进行转换  
```css  
/* example input: */  
.class {  
  /* px-to-viewport-ignore-next */  
  width: 10px;  
  padding: 10px;  
  height: 10px; /* px-to-viewport-ignore */  
}  
  
/* example output: */  
.class {  
  width: 10px;   
  padding: 3.125vw;  
  height: 10px;  
}  
```  
####   
#### 2.4.4、Retina 屏预留坑位  
考虑 Retina 屏场景，可能对图片的高清程度、1px 等场景有需求，所以我们预留判断 Retina 屏坑位。  
相关方案如下：在入口的 html 页面进行 dpr 判断，以及 data-dpr 的设置；然后在项目的 css 文件中就可以根据 data-dpr 的值根据不同的 dpr 写不同的样式类；  
  
**（1）index.html 文件**  
```javascript  
// index.html 文件  
const dpr = devicePixelRatio >= 3? 3: devicePixelRatio >= 2? 2: 1;  
document.documentElement.setAttribute('data-dpr', dpr);  
```  
**（2）样式文件**  
```css  
[data-dpr="1"] .hello {  
  background-image: url(image@1x.jpg);  
  
[data-dpr="2"] .hello {  
  background-image: url(image@2x.jpg);  
}  
    
[data-dpr="3"] .hello {  
  background-image: url(image@3x.jpg);  
}  
```  
##   
## 三、若干特定场景最佳实践  
### 3.1、行内样式的场景  
**场景**：当你需要写行内样式的代码（style）时，[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 插件 无法进行 px 单位无法转换，需要自己手动计算好 vw；  
  
**最佳实践**：通过添加、修改、删除 className 的方式进行处理此类场景，不直接操作行内样式，这更符合将 js 和 css 隔离开的更佳实践。  
​  
  
### 3.2、1px 的问题  
retina 屏下 1px 问题是个常谈的问题，相比较普通屏，retina 屏的 1px 线会显得比较粗，设计美感欠缺；在视觉设计师眼里的 1px 是指设备像素 1px，而如果我们直接写 css 的大小 1px，那在 dpr = 2 时，则等于 2px 设备像素，dpr = 3 时，等于 3px 设备像素。所以对于要求处理 1px 的场景，我们要进行特殊处理。                  
以下介绍常用的几种方法  
#### 3.2.1、transform: scale(0.5)  
可以使用 transform: scale(0.5) 进行 X、Y 轴的缩放，如下示例所示  
```css  
.class1 {  
  height: 1px;   
  transform: scaleY(0.5);  
}  
```  
优点是编写简单，但是如果实现上下左右四条边框会比较难搞，并且如果有嵌套存在的话，会对包含的元素产生影响，所以结合 :before 和 :after 来使用。  
​  
  
#### 3.2.2、transform: scale(0.5) + :before / :after （推荐）  
此种方式能解决例如 标签上下左右边框 1px 的场景，以及有嵌套元素存在的场景，比较通用，示例如下所示  
```css  
.calss1 {  
  position: relative;  
  &::after {  
    content:"";  
    position: absolute;  
    bottom:0px;  
    left:0px;  
    right:0px;  
    border-top:1px solid #666;  
    transform: scaleY(0.5);  
  }  
}  
```  
  
  
#### 3.2.3、box-shadow  
  
利用 css 对阴影处理来模拟边框，示例如下所示，底部一条线，缺点是存在阴影不好看。  
```css  
  .class1 {  
    box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.5);  
  }  
```  
  
  
#### 3.2.4、其它  
  
还有如下等方式处理 1px 问题，但不推荐，了解即可  
  
- viewport: 将页面进行缩小处理；  
- border-image：切个 1px 图片来模拟；  
- background-image：切个 1px 图片来模拟；  
- linear-gradient：通过线性渐变，来实现移动端 1px 的线；  
- svg：基于矢量图形(svg) 在不同设备屏幕特性下具有伸缩性。  
  
  
  
### 3.3、图片高清的问题  
图片高清的问题：  
- 适用普通屏的图片在 retina 屏中，图片展示就会显得模糊；  
- 适用 retina 屏的图片在普通屏中，图片展示就会缺少色差、没有锐利度，并且浪费带宽；  
所以如果对性能、美观要求很高的场景，需要根据 dpr 区分使用对应的图片，我们在文章 viewport 适配方案中针对 retina 屏预留了 dpr 方案，相关 css 写法如下：  
```css  
[data-dpr="1"] .hello {  
  background-image: url(image@1x.jpg);  
  
[data-dpr="2"] .hello {  
  background-image: url(image@2x.jpg);  
}  
    
[data-dpr="3"] .hello {  
  background-image: url(image@3x.jpg);  
}  
```  
​  
  
## 四、iPhoneX 适配方案  
iPhoneX 取消了物理按键，改成底部小黑条，这一改动导致网页出现了比较尴尬的屏幕适配问题。对于网页而言，顶部（刘海部位）的适配问题浏览器已经做了处理，所以我们只需要关注底部与小黑条的适配问题即可（即常见的吸底导航、返回顶部等各种相对底部 fixed 定位的元素）。  
比如一些需要贴在底部的按钮，和呼起的tabBar和底部弹出框，在iphoneX上就会出现被小黑条遮挡内容，或者页面上出现白色空隙的问题。处理前后截图如下所示  
  
![4.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a5dde98d37464465a50c29986acc5f98~tplv-k3u1fbpfcp-watermark.image?)  
  
  
### 4.1、适配之前需要了解的几个新知识  
  
#### 4.1.1、安全区域  
安全区域指的是一个可视窗口范围，处于安全区域的内容不受圆角（corners）、齐刘海（sensor housing）、小黑条（Home Indicator）影响，如下图蓝色区域：  
  
![5.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/650bafe34e09419eaffdb4d90093d564~tplv-k3u1fbpfcp-watermark.image?)  
  
也就是说，我们要做好适配，必须保证页面可视、可操作区域是在安全区域内。  
更详细说明，参考文档：[Human Interface Guidelines - iPhoneX](https://developer.apple.com/ios/human-interface-guidelines/overview/iphone-x/)  
#### 4.1.2、viewport-fit  
iOS11 新增特性，苹果公司为了适配 iPhoneX 对现有 viewport meta 标签的一个扩展，用于设置网页在可视窗口的布局方式，可设置三个值。​  
  
- contain: 可视窗口完全包含网页内容（左图）  
- cover：网页内容完全覆盖可视窗口（右图）  
- auto：默认值，跟 contain 表现一致  
  
需要注意：网页默认不添加扩展的表现是 viewport-fit=contain，需要适配 iPhoneX 必须设置 viewport-fit=cover，这是适配的关键步骤。更详细说明，参考文档：[viewport-fit-descriptor](https://www.w3.org/TR/css-round-display-1/#viewport-fit-descriptor)  
  
![6.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76364ca95b4742c5b210d89db88f7746~tplv-k3u1fbpfcp-watermark.image?)  
#### 4.1.3、env() 和 constant()  
iOS11 新增特性，Webkit 的一个 CSS 函数，用于设定安全区域与边界的距离，有四个预定义的变量：  
  
- safe-area-inset-left：安全区域距离左边边界距离  
- safe-area-inset-right：安全区域距离右边边界距离  
- safe-area-inset-top：安全区域距离顶部边界距离  
- safe-area-inset-bottom：安全区域距离底部边界距离  
  
这里我们只需要关注 safe-area-inset-bottom 这个变量，因为它对应的就是小黑条的高度（横竖屏时值不一样）。  
  
注意：当 viewport-fit=contain 时 env() 是不起作用的，必须要配合 viewport-fit=cover 使用。对于不支持 env() 的浏览器，浏览器将会忽略它。  
  
需要注意的是之前使用的 constant() 在 iOS11.2 之后就不能使用的，但我们还是需要做向后兼容，像这样：  
```css  
padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */  
padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */  
```  
注意：env() 跟 constant() 需要同时存在，而且顺序不能换。  
更详细说明，参考文档：[Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/?hmsr=funteas.com&utm_medium=funteas.com&utm_source=funteas.com)  
###   
### 4.2、适配步骤  
  
#### **4.2.1、设置网页在可视窗口的布局方式**  
新增 viweport-fit 属性，使得页面内容完全覆盖整个窗口，前面也有提到过，只有设置了 viewport-fit=cover，才能使用 env()  
```css  
	<meta name="viewport" content="width=device-width, viewport-fit=cover">  
```  
#### **4.2.2、fixed 完全吸底元素场景的适配**  
可以通过加内边距 padding 扩展高度：  
```css  
{  
  padding-bottom: constant(safe-area-inset-bottom);  
  padding-bottom: env(safe-area-inset-bottom);  
}  
```  
或者通过计算函数 calc 覆盖原来高度：  
```css  
{  
  height: calc(60px(假设值) + constant(safe-area-inset-bottom));  
  height: calc(60px(假设值) + env(safe-area-inset-bottom));  
}  
```  
注意，这个方案需要吸底条必须是有背景色的，因为扩展的部分背景是跟随外容器的，否则出现镂空情况。  
  
还有一种方案就是，可以通过新增一个新的元素（空的颜色块，主要用于小黑条高度的占位），然后吸底元素可以不改变高度只需要调整位置，像这样：  
```css  
{  
  margin-bottom: constant(safe-area-inset-bottom);  
  margin-bottom: env(safe-area-inset-bottom);  
}  
```  
空的颜色块：  
```css  
{  
  position: fixed;  
  bottom: 0;  
  width: 100%;  
  height: constant(safe-area-inset-bottom);  
  height: env(safe-area-inset-bottom);  
  background-color: #fff;  
}  
```  
  
  
#### **4.2.3、fixed 非完全吸底元素场景的适配**  
像这种只是位置需要对应向上调整，可以仅通过下外边距 margin-bottom 来处理  
```css  
{  
  margin-bottom: constant(safe-area-inset-bottom);  
  margin-bottom: env(safe-area-inset-bottom);  
}  
```  
或者，你也可以通过计算函数 calc 覆盖原来 bottom 值：  
```css  
{  
  bottom: calc(50px(假设值) + constant(safe-area-inset-bottom));  
  bottom: calc(50px(假设值) + env(safe-area-inset-bottom));  
}  
```  
  
  
  
## 五、VW 兼容方案  
  
Android 4.4 之下和 iOS 8 以下的版本有一定的兼容性问题（ps:几乎绝迹，大家可以统计下你们的用户使用的系统版本占比），但是社区提供了兼容性解决方案，其为 viewport 的 buggyfill：[Viewport Units Buggyfill](https://github.com/rodneyrehm/viewport-units-buggyfill?spm=ata.13261165.0.0.5c016ef2PzyaPL)，可以访问其 github 官网查看。    
我们也做了对应的实践，但是考虑到性能，我们项目模版中不会进行引入，有兴趣的同学可以查看以下实践总结；  
### 5.1、Viewport Units Buggyfill 引入  
viewport-units-buggyfill 主要有两个 JavaScript 文件：viewport-units-buggyfill.js 和 viewport-units-buggyfill.hacks.js。你只需要在你的 HTML 文件中引入这两个文件，比如在 react 项目中的 index.html 引入它们；  
```javascript  
<script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>  
```  
第二步，在HTML文件中调用 viewport-units-buggyfill，比如：  
```javascript  
<script>  
    window.onload = function () {  
        window.viewportUnitsBuggyfill.init({  
            hacks: window.viewportUnitsBuggyfillHacks  
        });  
    }  
</script>  
```  
但是为保证 Viewport Units Buggyfill 起作用，我们必须在我们样式文件中用到了viewport 的单位（vw、vh、vmin 或 vmax ）地方添加 content，如下所示：  
```javascript  
.my-viewport-units-using-thingie {  
  width: 50vmin;  
  height: 50vmax;  
  top: calc(50vh - 100px);  
  left: calc(50vw - 100px);  
  
  /* hack to engage viewport-units-buggyfill */  
  content: 'viewport-units-buggyfill; width: 50vmin; height: 50vmax; top: calc(50vh - 100px); left: calc(50vw - 100px);';  
}  
```  
  
  
### 5.2、postcss-viewport-units 引入  
  
在 1 步骤中，我们人肉引入 content 属性，效率是非常低下的，好在社区提供了 postcss-viewport-units 插件，帮我们自动处理 content：  
#### 5.2.1、postcss-viewport-units 安装配置  
我们执行以下命令，进行 postcss-viewport-units 插件的安装：  
```javascript  
tnpm i postcss-viewport-units --save-dev  
```  
在我们的项目配置文件 webpack.config.js 中进行对应的插件引入配置：  
```javascript  
{  
  loader: 'postcss-loader',  
  options: {  
    ident: 'postcss',  
    plugins: () => [  
      // 我们加的配置  
      require('postcss-viewport-units'),  
    ],  
    sourceMap: isProductionEnv,  
  },  
},  
```  
#### 5.2.2、效果展示  
我们在项目代码中，进行如下编码：  
```css  
.hello {  
  color: #333;  
  font-size: 28px;  
}  
```  
展示的页面中，postcss-viewport-units 已经帮我们添加了 content 属性；如下所示：  
  
![7.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/364c7baf93054abbb2a50ff2d3ee2691~tplv-k3u1fbpfcp-watermark.image?)  
  
# CSS 垂直居中有哪些实现方式？  
我们在布局一个页面时，通常都会用到水平居中和垂直居中，处理水平居中很好处理，不外乎就是设定margin:0 auto;或是text-align:center;,就可以轻松解决掉水平居中的问题，但一直以来最麻烦对齐问题就是「垂直居中」，以下将介绍几种单纯利用CSS垂直居中的方式，只需要理解背后的原理就可以轻松应用。  
  
下面为公共代码：  
  
```html  
<div class="box">  
    <div class="small">small</div>  
</div>  
```  
  
```css  
.box {  
    width: 300px;  
    height: 300px;  
    background: #ddd;  
}  
.small {  
    background: red;  
}  
  
```  
  
## absolute + margin实现  
  
方法一：  
  
```css  
.box {  
    position: relative;  
}  
.small {  
    position: absolute;  
    top: 50%;  
    left: 50%;  
    margin: -50px 0 0 -50px;  
    width: 100px;  
    height: 100px;  
}  
```  
  
方法二：  
  
```css  
.box {  
    position: relative;  
}  
.small {  
    position: absolute;  
    top: 0;  
    right: 0;  
    bottom: 0;  
    left: 0;  
    margin: auto;  
    width: 100px;  
    height: 100px;  
}  
```  
  
## absolute + calc 实现  
  
```css  
.box {  
    position: relative;  
}  
.small {  
    position: absolute;  
    top: calc(50% - 50px);  
    left: calc(50% - 50px);  
    width: 100px;  
    height: 100px;  
}  
```  
  
## absolute + transform 实现  
  
```css  
.box {  
    position: relative;  
}  
.small {  
    position: absolute;  
    top: 50%;  
    left: 50%;  
    transform: translate3d(-50%,-50%,0);  
    width: 100px;  
    height: 100px;  
}  
  
```  
  
## 转行内元素  
  
```css  
.box {  
    line-height: 300px;  
    text-align: center;  
    font-size: 0px;  
}  
.small {  
    padding: 6px 10px;  
    font-size: 16px;  
    display: inline-block;  
    vertical-align: middle;  
    line-height: 16px;  
}  
```  
  
## table-cell  
  
```  
.box {  
    display: table-cell;  
    text-align: center;  
    vertical-align: middle;  
}  
.small {  
    padding: 6px 10px;  
    display: inline-block;  
}  
```  
  
## flex  
  
方法一：  
  
```css  
.box {  
    display: flex;  
    justify-content: center;  
    align-items: center;  
}  
```  
  
方法二：  
  
```css  
.box {  
    display: flex;  
    justify-content: center;  
}  
.small {  
    align-self: center;  
}  
```  
  
  
## 08 grid  
  
网格布局（Grid）是最强大的 CSS 布局方案。  
  
它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。  
  
下面是4种使用grid实现水平垂直居中的例子。  
  
方法一：  
  
```css  
.box {  
    display: grid;  
    justify-items: center;  
    align-items: center;  
}  
```  
  
方法二：  
  
```css  
.box {  
    display: grid;  
}  
.small {  
    justify-self: center;  
    align-self: center;  
}  
```  
  
方法三：  
  
```css  
.box {  
    display: grid;  
    justify-items: center;  
}  
.small {  
    align-self: center;  
}  
  
```  
  
方法四：  
  
```css  
.box {  
    display: grid;  
    align-items: center;  
}  
.small {  
    justify-self: center;  
}  
```  
  
## justify-content对齐问题描述  
  
在CSS flex布局中，justify-content属性可以控制列表的水平对齐方式，例如space-between值可以实现两端对齐。  
  
但是，如果最后一行的列表的个数不满，则就会出现最后一行没有完全垂直对齐的问题。  
  
如下代码：  
  
```css  
.container {  
    display: flex;  
    justify-content: space-between;  
    flex-wrap: wrap;  
}  
.list {  
    width: 24%; height: 100px;  
    background-color: skyblue;  
    margin-top: 15px;  
}  
```  
  
```html  
<div class="container">  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
</div>  
```  
  
![image.png](https://ae04.alicdn.com/kf/Hf1a4fff1d2894f1e9abe1106afa1ebd9R.png)  
  
怎么让最后一行左对齐呢？  
# 怎么让CSS flex布局最后一行列表左对齐？  
### 如果每一行列数是固定的  
  
如果每一行列数是固定的，则下面两种方法可以实现最后一行左对齐。  
  
#### 方法一：模拟space-between和间隙  
  
也就是我们不使用`justify-content:space-between`声明在模拟两端对齐效果。中间的gap间隙我们使用margin进行控制。  
  
例如：  
  
```css  
.container {  
    display: flex;  
    flex-wrap: wrap;  
}  
.list {  
    width: 24%; height: 100px;  
    background-color: skyblue;  
    margin-top: 15px;  
}  
.list:not(:nth-child(4n)) {  
    margin-right: calc(4% / 3);  
}  
```  
  
#### 方法二：根据个数最后一个元素动态margin  
  
由于每一列的数目都是固定的，因此，我们可以计算出不同个数列表应当多大的`margin`值才能保证完全左对齐。  
  
例如，假设每行4个元素，结果最后一行只有3个元素，则最后一个元素的`margin-right`大小是“列表宽度+间隙大小”的话，那最后3个元素也是可以完美左对齐的。  
  
然后，借助树结构伪类数量匹配技术，我们可以知道最后一行有几个元素。  
  
例如：  
  
*   `.list:last-child:nth-child(4n - 1)`说明最后一行，要么3个元素，要么7个元素……  
*   `.list:last-child:nth-child(4n - 2)`说明最后一行，要么2个元素，要么6个元素……  
  
在本例中，一行就4个元素，因此，我们可以有如下CSS设置：  
  
```css  
.container {  
    display: flex;  
    /* 两端对齐 */  
    justify-content: space-between;  
    flex-wrap: wrap;  
}  
.list {  
    width: 24%; height: 100px;  
    background-color: skyblue;  
    margin-top: 15px;  
}  
/* 如果最后一行是3个元素 */  
.list:last-child:nth-child(4n - 1) {  
    margin-right: calc(24% + 4% / 3);  
}  
/* 如果最后一行是2个元素 */  
.list:last-child:nth-child(4n - 2) {  
    margin-right: calc(48% + 8% / 3);  
}  
```  
  
### 如果每一子项宽度不固定  
  
有时候，每一个flex子项的宽度都是不固定的，这个时候希望最后一行左对齐该如何实现呢？  
  
由于此时间隙的大小不固定，对齐不严格，因此，我们可以直接让最后一行左对齐即可。具体方法有两个：  
  
#### 方法一：最后一项margin-right:auto  
  
CSS代码如下：  
  
```css  
.container {  
    display: flex;  
    justify-content: space-between;  
    flex-wrap: wrap;  
}  
.list {  
    background-color: skyblue;  
    margin: 10px;  
}  
/* 最后一项margin-right:auto */  
.list:last-child {  
    margin-right: auto;  
}  
```  
  
#### 方法二：创建伪元素并设置flex:auto或flex:1  
  
CSS代码如下：  
  
```css  
.container {  
    display: flex;  
    justify-content: space-between;  
    flex-wrap: wrap;  
}  
.list {  
    background-color: skyblue;  
    margin: 10px;  
}  
/* 使用伪元素辅助左对齐 */  
.container::after {  
    content: '';  
    flex: auto;    /* 或者flex: 1 */  
}  
```  
  
### 如果每一行列数不固定  
  
如果每一行的列数不固定，则上面的这些方法均不适用，需要使用其他技巧来实现最后一行左对齐。  
  
这个方法其实很简单，也很好理解，就是使用足够的空白标签进行填充占位，具体的占位数量是由最多列数的个数决定的，例如这个布局最多7列，那我们可以使用7个空白标签进行填充占位，最多10列，那我们需要使用10个空白标签。  
  
如下HTML示意：  
  
```html  
<div class="container">  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
    <i></i><i></i><i></i><i></i><i></i>  
</div>  
```  
  
相关CSS如下，实现的关键就是占位的`&lt;i&gt;`元素宽度和`margin`大小设置得和`.list`列表元素一样即可，其他样式都不需要写。  
  
```css  
.container {  
    display: flex;  
    justify-content: space-between;  
    flex-wrap: wrap;  
    margin-right: -10px;  
}  
.list {  
    width: 100px; height:100px;  
    background-color: skyblue;  
    margin: 15px 10px 0 0;  
}  
/* 和列表一样的宽度和margin值 */  
.container > i {  
    width: 100px;  
    margin-right: 10px;  
}  
```  
  
由于`<i>`元素高度为0，因此，并不会影响垂直方向上的布局呈现。  
  
### 如果列数不固定HTML又不能调整  
  
然而有时候，由于客观原因，前端重构人员没有办法去调整html结构，同时布局的列表个数又不固定，这个时候该如何实现我们最后一行左对齐效果呢？  
  
我们不妨可以试试使用Grid布局。  
  
Grid布局天然有gap间隙，且天然格子对齐排布，因此，实现最后一行左对齐可以认为是天生的效果。  
  
CSS代码如下：  
  
```css  
.container {  
    display: grid;  
    justify-content: space-between;  
    grid-template-columns: repeat(auto-fill, 100px);  
    grid-gap: 10px;  
}  
.list {  
    width: 100px; height:100px;  
    background-color: skyblue;  
    margin-top: 5px;  
}  
```  
  
可以看到CSS代码非常简洁。  
  
HTML代码就是非常规整非常普通的代码片段：  
  
```html  
<div class="container">  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
    <div class="list"></div>  
</div>  
```  
  
### 这几种实现方法点评  
  
首先最后一行需要左对齐的布局更适合使用CSS grid布局实现，但是，`repeat()`函数兼容性有些要求，IE浏览器并不支持。如果项目需要兼容IE，则此方法需要斟酌。  
  
然后，适用范围最广的方法是使用空的元素进行占位，此方法不仅适用于列表个数不固定的场景，对于列表个数固定的场景也可以使用这个方法。但是有些人代码洁癖，看不惯这种空的占位的html标签，则可以试试一开始的两个方法，一是动态计算margin，模拟两端对齐，另外一个是根据列表的个数，动态控制最后一个列表元素的margin值实现左对齐。  
  
> by zhangxinxu  
>  
> 原文地址： https://www.zhangxinxu.com/wordpress/?p=8855  
# 相邻的两个inline-block节点为什么会出现间隔，该如何解决？  
  
### 一、现象描述  
  
真正意义上的inline-block水平呈现的元素间，换行显示或空格分隔的情况下会有间距，很简单的个例子：  
  
```html  
<input /> <input type="submit" />  
```  
  
间距就来了~~  
  
![image.png](https://ae03.alicdn.com/kf/H9025a1fdfd824425a4ec2637e144e1a4k.png)  
  
我们使用CSS更改非inline-block水平元素为inline-block水平，也会有该问题：  
  
```css  
.space a {  
    display: inline-block;  
    padding: .5em 1em;  
    background-color: #cad5eb;  
}  
```  
  
```html  
<div class="space">  
    <a href="##">惆怅</a>  
    <a href="##">淡定</a>  
    <a href="##">热血</a>  
</div>  
```  
  
![image.png](https://ae01.alicdn.com/kf/H095ea2ba25c340c39b5c57613113df1c5.png)  
  
  
这种表现是符合规范的应该有的表现。  
  
元素被当成行内元素排版的时候，元素之间的空白符（空格、回车换行等）都会被浏览器处理，根据white-space的处理方式（默认是normal，合并多余空白），原来HTML代码中的回车换行被转成一个空白符，在字体不为0的情况下，空白符占据一定宽度，所以inline-block的元素之间就出现了空隙。这些元素之间的间距会随着字体的大小而变化，当行内元素font-size:16px时，间距为8px。  
  
不过，这类间距有时会对我们布局，或是兼容性处理产生影响，以下展示N种方法去掉。  
  
### 二、方法之移除空格  
  
元素间留白间距出现的原因就是标签段之间的空格，因此，去掉HTML中的空格，自然间距就木有了。考虑到代码可读性，显然连成一行的写法是不可取的，我们可以：  
  
```html  
<div class="space">  
    <a href="##">  
    惆怅</a><a href="##">  
    淡定</a><a href="##">  
    热血</a>  
</div>  
```  
  
或者是：  
  
```html  
<div class="space">  
    <a href="##">惆怅</a  
    ><a href="##">淡定</a  
    ><a href="##">热血</a>  
</div>  
```  
  
或者是借助HTML注释：  
  
```html  
<div class="space">  
    <a href="##">惆怅</a><!--  
    --><a href="##">淡定</a><!--  
    --><a href="##">热血</a>  
</div>  
```  
  
等。  
  
### 三、使用margin负值  
  
```css  
.space a {  
    display: inline-block;  
    margin-right: -3px;  
}  
```  
  
margin负值的大小与上下文的字体和文字大小相关：  
  
![image.png](https://ae01.alicdn.com/kf/H51d0ccb7893842379f8fda6772f86eecs.png)  
  
例如，对于12像素大小的上下文，Arial字体的`margin`负值为`-3`像素，Tahoma和Verdana就是`-4`像素，而Geneva为`-6`像素。  
  
由于外部环境的不确定性，以及最后一个元素多出的父margin值等问题，这个方法不适合大规模使用。  
  
### 四、让闭合标签吃胶囊  
  
如下处理：  
  
```html  
<div class="space">  
    <a href="##">惆怅  
    <a href="##">淡定  
    <a href="##">热血</a>  
</div>  
```  
  
注意，为了向下兼容IE6/IE7等喝蒙牛长大的浏览器，最后一个列表的标签的结束（闭合）标签不能丢。  
  
在HTML5中，我们直接：  
  
```html  
<div class="space">  
    <a href="##">惆怅  
    <a href="##">淡定  
    <a href="##">热血  
</div>  
```  
  
好吧，虽然感觉上有点怪怪的，但是，这是OK的。  
  
![image.png](https://ae04.alicdn.com/kf/H91cdd7d8e97943719f8f05ea7aac44c89.png)  
  
### 五、使用font-size:0  
  
类似下面的代码：  
  
```css  
.space {  
    font-size: 0;  
}  
.space a {  
    font-size: 12px;  
}  
```  
  
这个方法，基本上可以解决大部分浏览器下inline-block元素之间的间距(IE7等浏览器有时候会有1像素的间距)。  
  
### 六、使用letter-spacing  
  
类似下面的代码：  
  
```css  
.space {  
    letter-spacing: -3px;  
}  
.space a {  
    letter-spacing: 0;  
}  
```  
  
根据我去年的测试，该方法可以搞定基本上所有浏览器。  
  
### 七、使用word-spacing  
  
类似下面代码：  
  
```css  
.space {  
    word-spacing: -6px;  
}  
.space a {  
    word-spacing: 0;  
}  
```  
  
一个是字符间距(`letter-spacing`)一个是单词间距(`word-spacing`)，大同小异。据我测试，`word-spacing`的负值只要大到一定程度，其兼容性上的差异就可以被忽略。因为，貌似，`word-spacing`即使负值很大，也不会发生重叠。  
  
与上面demo一样的效果，这里就不截图展示了。如果您使用Chrome浏览器，可能看到的是间距依旧存在。确实是有该问题，原因我是不清楚，不过我知道，可以添加`display: table;`或`display:inline-table;`让Chrome浏览器也变得乖巧。  
  
```css  
.space {  
    display: inline-table;  
    word-spacing: -6px;  
}  
```  
  
### 八、其他成品方法  
  
下面展示的是YUI 3 CSS Grids 使用`letter-spacing`和`word-spacing`去除格栅单元见间隔方法（注意，其针对的是block水平的元素，因此对IE8-浏览器做了hack处理）：  
  
```css  
.yui3-g {  
    letter-spacing: -0.31em; /* webkit */  
    *letter-spacing: normal; /* IE < 8 重置 */  
    word-spacing: -0.43em; /* IE < 8 && gecko */  
}  
  
.yui3-u {  
    display: inline-block;  
    zoom: 1; *display: inline; /* IE < 8: 伪造 inline-block */  
    letter-spacing: normal;  
    word-spacing: normal;  
    vertical-align: top;  
}  
```  
  
以下是一个名叫RayM的人提供的方法：  
  
```css  
li {  
    display:inline-block;  
    background: orange;  
    padding:10px;  
    word-spacing:0;  
    }  
ul {  
    width:100%;  
    display:table;  /* 调教webkit*/  
    word-spacing:-1em;  
}  
  
.nav li { *display:inline;}  
```  
  
也就是上面一系列CSS方法的组组合合。  
  
>by zhangxinxu from http://www.zhangxinxu.com  
>  
>本文地址：http://www.zhangxinxu.com/wordpress/?p=2357  
  
  
# display 有哪些取值？  
display 属性可以设置元素的内部和外部显示类型。  
  
* 元素的外部显示类型将决定该元素在流式布局中的表现（块级或内联元素）；  
* 元素的内部显示类型可以控制其子元素的布局（例如：flow layout，grid 或 flex）。  
  
以下是一些关于display比较常用的属性值：  
  
| 值 | 描述 |  
|--|--|  
|none|元素不会显示|  
|block|此元素将显示为块级元素，此元素前后会带有换行符。|  
|inline|默认。此元素会被显示为内联元素，元素前后没有换行符。|  
|inline-block|行内块元素。（CSS2.1 新增的值）[IE6/7不支持]|  
|inline-table|此元素会作为内联表格来显示（类似 table），表格前后没有换行符。|  
|table|此元素会作为块级表格来显示（类似 table），表格前后带有换行符。|  
|inherit|规定应该从父元素继承 display 属性的值。|  
|grid|网格布局（Grid）是最强大的CSS 布局方案。 它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。 |  
|flex|弹性布局，用来为盒状模型提供最大的灵活性。|  
  
从大的分类来讲，`display`的`32`种写法可以分为`6`个大类，再加上`1`个全局类，一共是`7`大类：  
  
*   [外部值](#外部值)  
*   [内部值](#内部值)  
*   [列表值](#列表值)  
*   [属性值](#属性值)  
*   [显示值](#显示值)  
*   [混合值](#混合值)  
*   [全局值](#全局值)  
  
## 外部值  
  
所谓外部值，就是说这些值只会直接影响一个元素的外部表现，而不影响元素里面的儿子级孙子级元素的表现。  
  
### display: block  
  
这个值大家不陌生，我们最熟悉的`<div>`缺省就是这个值，最基本的块级元素，属于`css`入门初学者都知道的概念，只要是容器类型的元素基本都是这个值。除`<div>`之外，还有`<h1>`到`<h6>`，`<p>`，`<form>`，`<header>`，`<footer>`，`<section>`，`<article>`天生都是这个值。  
  
### display: inline  
  
这个值大家也不陌生，行内元素嘛，只要是个行内元素都是这个值，最典型的是`<span>`，还有`<a>`，`<img>`，以及古代`html`语言当中的`<b>`，`<i>`都属于这一类型。  
  
### display: run-in  
  
这个值有点奇怪，通常没人用它，但你可以知道它。因为除了`IE`和`Opera`支持它以外，其他所有主流浏览器包括`Chrome`, `Safari`, `Firefox`全都对它置若罔闻。这东西说白了也没什么神秘，它的意思就是说如果我们命令一个元素`run-in`，中文意思就是『`闯入`』！那么这个元素就直接闯入下一行。比如说这样：  
  
![image.png](https://ae05.alicdn.com/kf/Hfac52b1018a84c89bb753b1aa76ffdd28.png)  
  
写起来大概就是这样：  
  
```html  
<div class="a">aaa</div>  
<div class="b">bbb</div>  
```  
  
```css  
.a {  
  font-size: 36px;  
  display: run-in;  
}  
```  
  
这有什么用呢？我们拿`span`设置`font-size`一样可以实现这个效果，就让`IE`自己跟自己玩去吧！说实话，在人力资源如此宝贵的今天，`IE`的产品经理不知脑子是不是进水了，不派工程师去实现那么多比这重要的多得多的特性，却花时间做这么个没用的玩意儿，难道工程师的时间不是金钱吗？难怪市场占有率连年下滑。  
  
## 内部值  
  
谈完了外部值，我们来看看内部值。这一组值比较有意思了，在`css3`如火如荼的今天，你要玩不转这些值，怕是哪儿也找不到工作的。内部值主要是用来管束自己下属的儿子级元素的排布的，规定它们或者排成`S`形，或者排成`B`形这样的。  
  
### display: flow  
  
含义不清，实验室阶段产品，`Chrome`不支持。如果还不够说服你暂时不要碰它的话，试着理解以下英文原文：  
  
> If its outer display type is inline or run-in, and it is participating in a block or inline formatting context, then it generates an inline box. Otherwise it generates a block container box.  
  
### display: flow-root  
  
不同于刚才谈到的`flow`，现在用`flow-root`的渐渐多起来了，因为它可以撑起被你`float`掉的块级元素的高度。外容器本来是有高度的，就像这样：  
  
![image.png](https://ae04.alicdn.com/kf/H1279ab9d1471446a9453e611ef2f8dfdm.png)  
  
```html  
<div class="container container1">  
  <div class="item"></div>  
  Example one  
</div>  
```  
  
```css  
.container {  
  border: 2px solid #3bc9db;  
  border-radius: 5px;  
  background-color: #e3fafc;  
  width: 400px;  
  padding: 5px;  
}  
.item {  
  height: 100px;  
  width: 100px;  
  background-color: #1098ad;  
  border: 1px solid #0b7285;  
  border-radius: 5px;  
}  
```  
  
结果因为你想让那一行字上去，于是你给`.item`加了一个`float: left;`结果就成这样了，外容器高度掉了，这不是很多人常犯的错误吗？  
  
![image.png](https://ae05.alicdn.com/kf/Ha62da79923e44dc58313e820e5f5e115C.png)  
  
现在我们给`.container`加上`display: flow-root;`再看一下：  
  
![image.png](https://ae03.alicdn.com/kf/H74b71e75f6df46febd28a0242921481fX.png)  
  
喏，外容器高度又回来了，这效果是不是杠杠的？  
  
可能就有同学要说了，我们用`clear: both;`不是一样可以达到这效果吗？  
  
```css  
.container::after {  
  content: '';  
  clear: both;  
  display: table;  
}  
```  
  
小明，请你出去！我们在讲`display: flow-root;`，不是在讲`clear: both;`！  
  
### display: table  
  
这一个属性，以及下面的另外`8`个与`table`相关的属性，都是用来控制如何把`div`显示成`table`样式的，因为我们不喜欢`<table>`这个标签嘛，所以我们想把所有的`<table>`标签都换成`<div>`标签。`<div>`有什么好？无非就是能自动换行而已，但其实你完全可以做一个`<table><tr><td>`标签，把它全都替换成`display: block;`也可以自动折行，只不过略微麻烦而已。  
  
关于`display: table;`的详细用法，大家可以参考mdn上的文章，这里就不细说了。  
  
### display: flex  
  
敲黑板，划重点！作为新一代的前端工程师，这个属性你必须烂熟于胸中。`display: flex;`以及与它相关联的一系列属性：`flex-direction`, `flex-wrap`, `flex-flow`, `justify-content`, `align-items`, `align-content`，并且包括所有这些属性的取值，都是你需要反复研磨的。`2009`年诞生的这个属性可以说是不亚于`css`界一场蒸汽机诞生一样的工业革命，它的诞生标志着马车一样的`float`被彻底抛进历史的垃圾堆。  
  
没有一张图能完整地展现`flex`的神韵，就放这张我比较喜欢的图片吧：  
  
![image.png](https://ae05.alicdn.com/kf/Hcbbceeb26e2447e1baacc59bfff86b43X.png)  
  
### display: grid  
  
会`flex`很吊吗？会`grid`更吊哦！也许这就是下次前端面试的重点哦！  
  
![image.png](https://ae05.alicdn.com/kf/H08a6a5b9e51c4a6db16642651a2c0c3f2.png)  
  
`grid`布局，中文翻译为`网格布局`。学习`grid`布局有两个重点：一个重点是`grid`布局引入了一个全新的单位：`fr`，它是`fraction`（`分数`）的缩写，所以从此以后，你的兵器库里除了`px`, `em`, `rem`, `百分比`这些常见兵器以及`vw`, `vh`这些新式武器之外，又多了一样旁门暗器`fr`，要想用好`grid`，必须充分掌握`fr`。另一个重点是`斜杠操作符`，这可不是`分数`哦。它表示的是`起始位置`和`结束位置`。比如说`3 / 4`，这可不是`四分之三`的意思，这是指一个元素从第`3`行开始，到第`4`行结束，但又不包括第`4`行。  
  
同样，与`grid`相关联的也有一大堆旁门属性，是在学习`display: grid;`的同时必须掌握的。包括`grid`, `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end`, `grid-template`, `grid-template-columns`, `grid-template-rows`, `grid-template-areas`, `grid-gap`, `grid-column-gap`, `grid-row-gap`, `grid-auto-columns`, `grid-auto-rows`, `grid-auto-flow`, `grid-column`, `grid-row`。不能详述，关于这个写起来又是一大篇文章。详情还是参考 csstrick 上[这篇文章](https://css-tricks.com/snippets/css/complete-guide-grid/)，讲得非常细致非常清楚。  
  
### display: ruby  
  
`ruby`这个取值对于我们亚洲人来说其实是非常有用的一个东西，但是目前除了`Firefox`以外其它浏览器对它的支持都不太好。简而言之，`display: ruby;`的作用就是可以做出下面这样的东西：  
  
![image.png](https://ae03.alicdn.com/kf/H99202b80c6c44f758bc0a64871be0387Q.png)  
  
很好的东西，对吧？如果可以用的话，对我国的小学教育可以有极大的促进。但可惜我们现在暂时还用不了。  
  
`ruby`这个词在英语里的意思是`红宝石`，但在日语里是`ルビ`，翻译成中文是`旁注标记`的意思，我们中文的旁注标记就是汉语拼音。可以想见，这个标准的制定者肯定是日本人，如果是我们中国人的话，那这个标签就不是`ruby`，而是`pinyin`了。还有一个`ruby`语言，发明者也是一个日本人，和`html`里这个`ruby`是两码事，不要搞混了。  
  
`ruby`的语法大致如下：  
  
![image.png](https://ae04.alicdn.com/kf/H11830a70e7a54962a330dae9daacb5c2p.png)  
  
### display: subgrid  
  
`subgrid`总的思想是说大网格里还可以套小网格，互相不影响。但如果`grid`里可以再套`subgrid`的话，那我`subgrid`里还想再套`subgrid`怎么办？`subsubgrid`吗？况且，到底是`grid: subgrid;`还是`display: subgrid;`这个也没有达成共识。  
  
## 列表值  
  
### display: list-item  
  
`display: list-item;`和`display: table;`一样，也是一帮痛恨各种`html`标签，而希望只使用`<div>`来写遍一切`html`的家伙搞出来的鬼东西，实际使用极少，效果就是这样：  
  
![image.png](https://ae05.alicdn.com/kf/H95d50abeae06444f84bb8874283b5443t.png)  
  
看，你用`<ul><li>`能实现的效果，他可以用`<div>`实现出来，就是这个作用。  
  
## 属性值  
  
属性值一般是附属于主值的，比如主值里设置了`display: table;`，就可以在子元素里使用`display: table-row-group;`等等属性，不过并不绝对。关于它们的作用，主要参考主值就够了。  
  
### display: table-row-group  
  
详情参考[display: table;](#display-table)。  
  
### display: table-header-group  
  
详情参考[display: table;](#display-table)。  
  
### display: table-footer-group  
  
详情参考[display: table;](#display-table)。  
  
### display: table-row  
  
详情参考[display: table;](#display-table)。  
  
### display: table-cell  
  
详情参考[display: table;](#display-table)。这个属性有必要详细说说，因为它完全可以单独应用，用在高度不固定元素的垂直居中上。效果如下图所示：  
  
![image.png](https://ae02.alicdn.com/kf/H26a4916b21684cc3baedea4c5f168ca4o.png)  
  
### display: table-column-group  
  
详情参考[display: table;](#display-table)。  
  
### display: table-column  
  
详情参考[display: table;](#display-table)。  
  
### display: table-caption  
  
详情参考[display: table;](#display-table)。  
  
### display: ruby-base  
  
详情参考[display: ruby;](#display-ruby)。  
  
### display: ruby-text  
  
详情参考[display: ruby;](#display-ruby)。  
  
### display: ruby-base-container  
  
详情参考[display: ruby;](#display-ruby)。  
  
### display: ruby-text-container  
  
详情参考[display: ruby;](#display-ruby)。  
  
## 显示值  
  
`MDN`里把它叫做`<display-box> values`（`盒子值`），我把它叫做`显示值`，主要是为了便于理解。  
  
### display: contents  
  
![image.png](https://ae03.alicdn.com/kf/H814a04b3819044c2a32f0e3be754531fo.png)  
  
你给中间那个`div`加上`display: contents;`之后，它就变成这样了：  
  
![image.png](https://ae01.alicdn.com/kf/H7af8624e80b84054945bad6b68a3821dK.png)  
  
这就是`display: contents;`的作用，它让子元素拥有和父元素一样的布局方式，仅此而已。  
  
### display: none  
  
这么著名的值还用多说吗？  
  
## 混合值  
  
### display: inline-block  
  
关于`display: inline-block;`的作用恐怕只要做过`3`天以上前端的工程师都应该知道。什么也不说了，上一张著名的图片作总结吧：  
  
![image.png](https://ae01.alicdn.com/kf/Hde4aa3e723e5487eb20e550f1d6320d1Q.png)  
  
### display: inline-table  
  
你要能理解`inline-block`，你就能理解`inline-table`。在行内显示一个表格，就像这样：  
  
![image.png](https://ae05.alicdn.com/kf/H86419f9046a14a69aeb0fae749205ac6w.png)  
  
### display: inline-flex  
  
这个就不用多说了吧？跟上面一样，在行内进行弹性布局，参考[display: flex;](#display-flex)。  
  
### display: inline-grid  
  
同上，在行内进行网格布局，参考[display: grid;](#display-grid)。  
  
## 全局值  
  
这些值不是`display`属性的专利，几乎其它任意属性都可以用，列在这里凑个数。  
  
### display: inherit  
  
继承父元素的`display`属性。  
  
### display: initial  
  
不管父元素怎么设定，恢复到浏览器最初始时的`display`属性。  
  
### display: unset  
  
`unset`混合了`inherit`和`initial`。如果父元素设值了，就用父元素的设定，如果父元素没设值，就用浏览器的缺省设定。直接看图最明白：  
  
![image.png](https://ae02.alicdn.com/kf/H9b5ec0efe3f84c8e84c897919abb8167y.png)  
  
## 总结  
  
以上就是在`css`里`display`的`32`种写法。谈了这么多，不知道你记住了多少呢？其实，单纯理解每一个`display`属性的取值都不难，难的是融会贯通，在恰当的地方运用恰当的值，毕竟我们的目的是为了把代码写短，而不是把代码写长。  
  
  
  
  
  
  
  
  
# 如何使用css来实现禁止移动端页面的左右划动手势？  
CSS属性 `touch-action` 用于设置触摸屏用户如何操纵元素的区域(例如，浏览器内置的缩放功能)。  
  
最简单方法是：  
  
```css  
html{  
 touch-action: none;  
 touch-action: pan-y;  
}  
```  
  
还可以直接指定对应元素的宽度和overflow：  
  
```css  
html{  
 width: 100vw;  
 overflow-x: hidden;  
}  
```  
# 如何检测浏览器所支持的最小字体大小？  
可以使用 JS 设置 DOM 的字体为某一个值，然后再取出来，如果值设置成功，就说明支持。  
  
# Js 动画与 CSS 动画区别及相应实现  
* CSS3 的动画的优点  
	* 在性能上会稍微好一些，浏览器会对 CSS3 的动画做一些优化  
	* 代码相对简单  
* 缺点  
	* 在动画控制上不够灵活  
	* 兼容性不好  
  
JavaScript 的动画正好弥补了这两个缺点，控制能力很强，可以单帧的控制、变换，同时写得好完全可以兼容 IE6，并且功能强大。对于一些复杂控制的动画，使用 javascript 会比较靠谱。而在实现一些小的交互动效的时候，就多考虑考虑 CSS 吧  
# IconFont 的原理是什么  
IconFont 的使用原理来自于 css 的 `@font-face` 属性。  
  
这个属性用来定义一个新的字体，基本用法如下：  
  
```css  
@font-face {  
  font-family: <YourFontName>;  
  src: <url> [<format>],[<source> [<format>]], *;  
  [font-weight: <weight>];  
  [font-style: <style>];  
}  
```  
  
* font-family：为载入的字体取名字。  
* src：[url]加载字体，可以是相对路径，可以是绝对路径，也可以是网络地址。[format]定义的字体的格式，用来帮助浏览器识别。主要取值为：【truetype(.ttf)、opentype（.otf）、truetype-aat、embedded-opentype(.eot)、svg(.svg)、woff(.woff)】。  
* font-weight：定义加粗样式。  
* font-style：定义字体样式。  
  
  
# css sprites是什么，怎么使用？  
## 是什么  
  
CSS Sprites是一种网页图片应用处理方式，就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位。  
  
## 优点  
  
其优点在于：  
  
* 减少网页的http请求，提高性能，这也是CSS Sprites最大的优点，也是其被广泛传播和应用的主要原因；  
* 减少图片的字节：多张图片合并成1张图片的字节小于多张图片的字节总和；  
* 减少了命名困扰：只需对一张集合的图片命名，不需要对每一个小元素进行命名提高制作效率；  
* 更换风格方便：只需要在一张或少张图片上修改图片的颜色或样式，整个网页的风格就可以改变，维护起来更加方便。  
  
## 缺点  
  
诚然CSS Sprites是如此的强大，但是也存在一些不可忽视的缺点：  
  
* 图片合成比较麻烦；  
* 背景设置时，需要得到每一个背景单元的精确位置；  
* 维护合成图片时，最好只是往下加图片，而不要更改已有图片。  
# display:none与visibility:hidden 有什么区别？  
## 表现上  
  
* display:none是彻底消失，不在文档流中占位，浏览器也不会解析该元素；  
* visibility:hidden是视觉上消失了，可以理解为透明度为0的效果，在文档流中占位，浏览器会解析该元素；  
  
## 性能上  
  
* 使用visibility:hidden比display:none性能上要好，display:none切换显示时，页面产生回流（当页面中的一部分元素需要改变规模尺寸、布局、显示隐藏等，页面重新构建，此时就是回流。所有页面第一次加载时需要产生一次回流），而visibility切换是否显示时则不会引起回流。  
# 你知道哪些css模块化的方案？  
目前主流的 css 模块化分为 css modules 和 css in js 两种方案。  
  
## css modules  
  
> CSS Modules 指的是我们像 import js 一样去引入我们的 css 代码，代码中的每一个类名都是引入对象的一个属性, 编译时会将 css 类名 加上唯一 hash。  
  
css module 需要 webpack 配置 css-loader 或者 scss-loader , module 为 true  
  
```  
{  
    loader: 'css-loader',  
    options: {  
        modules: true, // 开启模块化  
        localIdentName: '[path][name]-[local]-[hash:base64:5]'  
    }  
}  
```  
  
### localIdentName  
  
介绍下 localIdentName 自定义生成的类名格式，可选参数有：  
  
* [path]表示样式表相对于项目根目录所在的路径(默认不拼接)  
* [name] 表示样式表文件名称  
* [local] 表示样式表的类名定义名称  
* [hash:length] 表示 32 位的 hash 值  
  
注意：只有类名选择器和 ID 选择器才会被模块化控制，类似 `body`、`h2`、`span` 这些标签选择器不会被模块化控制。  
  
### css module 作用域  
  
* 作用域默认为 local 即只在当前模块生效  
* global：被 `:global` 包裹起来的类名，不会被模块化  
  
```css  
/* 加上 :global 会全局样式 */  
:global(.global-color) {  
  color: blue;  
  :global(.common-width) {  
    width: 200px;  
  }  
}  
```  
  
### css module 高级使用  
  
* 和外部样式混用  
  
```js  
import classNames from 'classnames';  
  
// 使用classNames  
const wrapperClassNames = classNames({  
  'common-show': visible,  
  'common-hide': !visible,  
  [styles1['view-wrapper']]: true  
});  
<div className={wrapperClassNames}></div>;  
  
// 使用模板字符串  
<div className={`${styles1.content} ${styles1.color} common-show`}>  
  我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容  
</div>;  
```  
  
* 覆盖第三方 UI 库  
  
```  
{/* 覆盖第三方UI库 样式*/}  
<div className={styles1['am-button-custom-wrapper']}>  
  <Button type={'primary'} onClick={() => toggle()}>  
     {visible ? '隐藏' : '显示'}  
  </Button>  
</div>  
  
//  覆盖第三方UI库的 样式  
.am-button-custom-wrapper {  
  :global {  
    .am-button-primary {  
      color: red;  
    }  
  }  
}  
```  
  
## css in js  
  
CSS-in-JS是一种技术（technique），而不是一个具体的库实现（library）。  
  
简单来说CSS-in-JS就是将应用的CSS样式写在JavaScript文件里面，而不是独立为一些.css，.scss或者less之类的文件，这样你就可以在CSS中使用一些属于JS的诸如模块声明，变量定义，函数调用和条件判断等语言特性来提供灵活的可扩展的样式定义。  
  
值得一提的是，虽然CSS-in-JS不是一种很新的技术，它当初的出现是因为一些component-based的Web框架（例如React，Vue和Angular）的逐渐流行，使得开发者也想将组件的CSS样式也一块封装到组件中去以解决原生CSS写法的一系列问题。  
  
还有就是CSS-in-JS在React社区的热度是最高的，这是因为React本身不会管用户怎么去为组件定义样式的问题，而Vue和Angular都有属于框架自己的一套定义样式的方案。  
  
实现了CSS-in-JS的库有很多，虽然每个库解决的问题都差不多，可是它们的实现方法和语法却大相径庭。  
  
从实现方法上区分大体分为两种：唯一CSS选择器和内联样式（Unique Selector VS Inline Styles）。  
  
接下来我们来分别看一下对应于这两种实现方式的两个比较有代表性的实现：styled-components和radium。  
  
### Styled-components  
  
通过styled-components，你可以使用ES6的标签模板字符串语法（Tagged Templates）为需要styled的Component定义一系列CSS属性，当该组件的JS代码被解析执行的时候，styled-components会动态生成一个CSS选择器，并把对应的CSS样式通过style标签的形式插入到head标签里面。  
  
动态生成的CSS选择器会有一小段哈希值来保证全局唯一性来避免样式发生冲突。  
  
```jsx  
const DivWrapper = styled.div`  
  width: '100%';  
  height: 300;  
  background-color: ${(props) => props.color};  
`;  
  
// 封装第三方组件库  
const AntdButtonWrapper = styled(Button)`  
  color: 'red';  
`;  
  
// 通过属性动态定义样式  
const MyButton = styled.button`  
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};  
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};  
  
  font-size: 1em;  
  margin: 1em;  
  padding: 0.25em 1em;  
  border: 2px solid palevioletred;  
  border-radius: 3px;  
`;  
  
// 样式复用  
const TomatoButton = styled(MyButton)`  
  color: tomato;  
  border-color: tomato;  
`;  
  
// 创建关键帧  
const rotate = keyframes`  
  from {  
    transform: rotate(0deg);  
  }  
  
  to {  
    transform: rotate(360deg);  
  }  
  `;  
  
// 创建动画组件  
const Rotate = styled.div`  
  display: inline-block;  
  animation: ${rotate} 2s linear infinite;  
  padding: 2rem 1rem;  
  font-size: 1.2rem;  
`;  
```  
  
styled-components 优势: 支持将 props 以插值的方式传递给组件,以调整组件样式, 跨平台可在 RN 和 next 中使用。 缺点： 预处理器和后处理器不兼容。  
  
### Radium  
  
Radium和styled-components的最大区别是它生成的是标签内联样式（inline styles）。  
  
由于标签内联样式在处理诸如media query以及:hover，:focus，:active等和浏览器状态相关的样式的时候非常不方便，所以radium为这些样式封装了一些标准的接口以及抽象。  
  
```jsx  
import Radium from 'radium';  
  
const Button = () => (  
    <button  
        style={styles.base}>  
        {this.props.children}  
    </button>;  
)  
  
var styles = {  
  red: {  
    backgroundColor: 'red'  
  }  
};  
  
Button = Radium(Button);  
```  
  
内联样式相比于CSS选择器的方法有以下的优点：   
  
* 自带局部样式作用域的效果，无需额外的操作  
* 内联样式的权重（specificity）是最高的，可以避免权重冲突的烦恼   
* 由于样式直接写在HTML中，十分方便开发者调试  
# CSS中的 “flex:1;” 是什么意思？  
flex 是 flex-grow, flex-shrink 和 flex-basis的简写。  
  
除了auto (1 1 auto) 和 none (0 0 auto)这两个快捷值外，还有以下设置方式：  
  
* 当 flex 取值为一个非负数字，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%，如下是等同的：  
  
```css  
.item {flex: 1;}  
.item {  
    flex-grow: 1;  
    flex-shrink: 1;  
    flex-basis: 0%;  
}  
```  
  
* 当 flex 取值为 0 时，对应的三个值分别为 0 1 0%  
  
```css  
.item {flex: 0;}  
.item {  
    flex-grow: 0;  
    flex-shrink: 1;  
    flex-basis: 0%;  
}  
```  
  
* 当 flex 取值为一个长度或百分比，则视为 flex-basis 值，flex-grow 取 1，flex-shrink 取 1，有如下等同情况（注意 0% 是一个百分比而不是一个非负数字）  
  
```css  
.item-1 {flex: 0%;}  
.item-1 {  
    flex-grow: 1;  
    flex-shrink: 1;  
    flex-basis: 0%;  
}  
  
.item-2 {flex: 24px;}  
.item-2 {  
    flex-grow: 1;  
    flex-shrink: 1;  
    flex-basis: 24px;  
}  
```  
  
* 当 flex 取值为两个非负数字，则分别视为 flex-grow 和 flex-shrink 的值，flex-basis 取 0%，如下是等同的：  
  
```css  
.item {flex: 2 3;}  
.item {  
    flex-grow: 2;  
    flex-shrink: 3;  
    flex-basis: 0%;  
}  
```  
  
* 当 flex 取值为一个非负数字和一个长度或百分比，则分别视为 flex-grow 和 flex-basis 的值，flex-shrink 取 1，如下是等同的：  
  
```  
.item {flex: 11 32px;}  
.item {  
    flex-grow: 11;  
    flex-shrink: 1;  
    flex-basis: 32px;  
}  
```  
  
# 什么是BFC？  
BFC：block formatting context，块级格式化上下文。  
  
BFC是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。  
  
定位方案：  
  
* 内部的Box会在垂直方向上一个接一个放置。  
* Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。  
* 每个元素的margin box 的左边，与包含块border box的左边相接触。  
* BFC的区域不会与float box重叠。  
* BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。  
* 计算BFC的高度时，浮动元素也会参与计算。  
  
满足下列条件之一就可触发BFC:  
  
* 根元素，即html  
* float的值不为none（默认）  
* overflow的值不为visible（默认）  
* display的值为table-cell, table-caption, inline-block, flex, 或者 inline-flex 中的其中一个  
* position的值为absolute或fixed  
# 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景  
## 结构  
  
display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击，  
visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击  
opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击  
  
## 继承  
display: none和opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。  
visibility: hidden：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。  
  
## 性能  
  
displaynone : 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大  
visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取visibility: hidden元素内容  
opacity: 0 ：修改元素会造成重绘，性能消耗较少  
#  Atom CSS 是什么？  
Atom CSS：原子CSS，意思是一个类只干一件事。  
  
不同于大家常用的BEM这类规则，原子css就是拆分，所有 CSS 类都有一个唯一的 CSS 规则。例如如下  
  
```css  
.w-full{  
  width:100%;  
}  
.h-full{  
  height:100%;  
}  
```  
  
而像这种就不是  
```  
.w&h-full{  
  width:100%;  
  height:100%;  
}  
```  
  
当我们使用的时候，直接写class名就可以  
  
```html  
<html>  
	<body>  
    	<div id="app" class="w-full h-full">  
        </div>  
	</body>  
</html>  
  
```  
  
## 原子CSS的优缺点  
  
* 优点  
	* 减少了css体积，提高了css复用  
	* 减少起名的复杂度  
* 缺点  
	* 增加了记忆成本。将css拆分为原子之后，你势必要记住一些class才能书写，哪怕tailwindcss提供了完善的工具链，你写background，也要记住开头是bg。  
    * 增加了html结构的复杂性。当整个dom都是这样class名，势必会带来调试的麻烦，有的时候很难定位具体css问题  
    * 你仍需要起class名。对于大部分属性而言，你可以只用到center,auto，100%，这些值，但是有时候你仍需要设定不一样的参数值，例如left，top，这时候你还需要起一个class名  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
# CSS中的1像素问题是什么？有哪些解决方案？  
## 1px 边框问题的由来  
  
苹果 iPhone4 首次提出了 Retina Display（视网膜屏幕）的概念，在 iPhone4 使用的视网膜屏幕中，把 2x2 个像素当 1 个物理像素使用，即使用 2x2 个像素显示原来 1 个物理像素显示的内容，从而让 UI 显示更精致清晰，这 2x2 个像素叫做逻辑像素。  
  
像这种像素比（像素比（即dpr）＝ 物理像素 / 逻辑像素）为 2 的视网膜屏幕也被称为二倍屏，目前市面上还有像素比更高的三倍屏、四倍屏。  
  
而 CSS 中 1px 指的是物理像素，因此，设置为 1px 的边框在 dpr = 2 的视网膜屏幕中实际占用了 2 个逻辑像素的宽度，这就导致了界面边框变粗的视觉体验。  
  
## 使用 transform 解决  
  
通过设置元素的 box-sizing 为 border-box，然后构建伪元素，再使用 CSS3 的 transform 缩放，这是目前市面上最受推崇的解决方法。这种方法可以满足所有的场景，而且修改灵活，唯一的缺陷是，对于已使用伪元素的元素要多嵌套一个无用元素。具体的实现如下：  
  
```css  
.one-pixel-border {  
  position: relative;  
  box-sizing: border-box;  
}  
  
.one-pixel-border::before {  
  display: block;  
  content: "";  
  position: absolute;  
  top: 50%;  
  left: 50%;  
  width: 200%;  
  height: 200%;  
  border: 1px solid red;  
  transform: translate(-50%, -50%) scale(0.5, 0.5);  
}  
```  
  
这样就可以得到 0.5px 的边框。  
  
还可以结合媒体查询（@media）解决不同 dpr 值屏幕的边框问题，如下：  
  
```css  
@media screen and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {  
  ...  
}  
  
@media screen and (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx) {  
  ...  
}  
```  
  
当然还有不少其他的解决方案：border-image、background-image、viewport + rem + js、box-shadow等，但都有各自的缺点，不进行推荐，此处也不做详细介绍。  
  
# css加载会造成阻塞吗？  
先说下结论：  
  
* css加载不会阻塞DOM树的解析  
* css加载会阻塞DOM树的渲染  
* css加载会阻塞后面js语句的执行  
  
为了避免让用户看到长时间的白屏时间，我们应该尽可能的提高css加载速度，比如可以使用以下几种方法:  
  
* 使用CDN(因为CDN会根据你的网络状况，替你挑选最近的一个具有缓存内容的节点为你提供资源，因此可以减少加载时间)  
* 对css进行压缩(可以用很多打包工具，比如webpack,gulp等，也可以通过开启gzip压缩)  
* 合理的使用缓存(设置cache-control,expires,以及E-tag都是不错的，不过要注意一个问题，就是文件更新后，你要避免缓存而带来的影响。其中一个解决防范是在文件名字后面加一个版本号)  
* 减少http请求数，将多个css文件合并，或者是干脆直接写成内联样式(内联样式的一个缺点就是不能缓存)  
  
## 原理解析  
  
浏览器渲染的流程如下：  
  
* HTML解析文件，生成DOM Tree，解析CSS文件生成CSSOM Tree  
* 将Dom Tree和CSSOM Tree结合，生成Render Tree(渲染树)  
* 根据Render Tree渲染绘制，将像素渲染到屏幕上。  
  
从流程我们可以看出来:  
  
* DOM解析和CSS解析是两个并行的进程，所以这也解释了为什么CSS加载不会阻塞DOM的解析。  
* 然而，由于Render Tree是依赖于DOM Tree和CSSOM Tree的，所以他必须等待到CSSOM Tree构建完成，也就是CSS资源加载完成(或者CSS资源加载失败)后，才能开始渲染。因此，CSS加载是会阻塞Dom的渲染的。  
* 由于js可能会操作之前的Dom节点和css样式，因此浏览器会维持html中css和js的顺序。因此，样式表会在后面的js执行前先加载执行完毕。所以css会阻塞后面js的执行。  
  
  
# CSS 中有哪几种定位方式？  
* Static  
  
这个是元素的默认定位方式，元素出现在正常的文档流中，会占用页面空间。  
  
* Relative  
  
相对定位方式，相对于其父级元素（无论父级元素此时为何种定位方式）进行定位，准确地说是相对于其父级元素所剩余的未被占用的空间进行定位（在父元素由多个相对定位的子元素时可以看出），且会占用该元素在文档中初始的页面空间，即在使用top，bottom，left，right进行移动位置之后依旧不会改变其所占用空间的位置。可以使用z-index进行在z轴方向上的移动。  
  
  
* Absolute  
  
绝对定位方式，脱离文档流，不会占用页面空间。以最近的不是static定位的父级元素作为参考进行定位，如果其所有的父级元素都是static定位，那么此元素最终则是以当前窗口作为参考进行定位。  
  
可以使用top，bottom，left，right进行位置移动，亦可使用z-index在z轴上面进行移动。当元素为此定位时，如果该元素为内联元素，则会变为块级元素，即可以直接设置其宽和高的值；如果该元素为块级元素，则其宽度会由初始的100%变为auto。  
  
注意：当元素设置为绝对定位时，在没有指定top，bottom，left，right的值时，他们的值并不是0，这几个值是有默认值的，默认值就是该元素设置为绝对定位前所处的正常文档流中的位置。  
  
* Fixed  
  
绝对定位方式，直接以浏览器窗口作为参考进行定位。其它特性同absolute定位。  
  
当父元素使用了transform的时候，会以父元素定位。  
  
* sticky  
  
粘性定位，可以简单理解为relative和fixed布局的混合。  
  
当粘性约束矩形在可视范围内为relative，反之，则为fixed粘性定位元素如果和它的父元素一样高，则垂直滚动的时候，粘性定位效果是不会出现的它的定位效果完全受限于父级元素们。  
  
如果父元素的overflow属性设置了scroll，auto,overlay值，那么，粘性定位将会失效同一容器中多个粘贴定位元素独立偏移，因此可能重叠；位置上下靠在一起的不同容器中的粘贴定位元素则会鸠占鹊巢，挤开原来的元素，形成依次占位的效果。  
  
# 什么是CSS Sprites？  
将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的 `background-image`，`background-repeat`，`background-position` 的组合进行背景定位。  
利用`CSS Sprites`能很好地减少网页的http请求，从而大大的提高页面的性能。  
# style标签写在body后与body前有什么区别？  
页面加载自上而下 当然是先加载样式。  
  
写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）  
  
  
# 两个同级的相邻元素之间，有看不见的空白间隔，是什么原因引起的？有什么解决办法？  
行框的排列会受到中间空白（回车空格）等的影响，因为空格也属于字符,这些空白也会被应用样式，占据空间，所以会有间隔，把字符大小设为0，就没有空格了。  
  
解决方法：  
  
* 相邻元素代码代码全部写在一排  
* 浮动元素，float:left;  
* 在父级元素中用font-size:0;  
# 如果需要手动写动画，你认为最小时间间隔是多久，为什么？  
多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms。  
# ::before 和 :after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用  
* 单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。  
* ::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。  
  
:before 和 :after 这两个伪元素，是在CSS2.1里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before ::after  
# 元素竖向的百分比设定是相对于容器的高度吗？  
当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性，例如 padding-top , padding-bottom , margin-top , margin-bottom 等，当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。  
# CSS优化、提高性能的方法有哪些？  
* 避免过度约束  
* 避免后代选择符  
* 避免链式选择符  
* 使用紧凑的语法  
* 避免不必要的命名空间  
* 避免不必要的重复  
* 最好使用表示语义的名字。一个好的类名应该是描述他是什么而不是像什么  
* 避免！important，可以选择其他选择器  
* 尽可能的精简规则，你可以合并不同类里的重复规则  
# margin和padding分别适合什么场景使用？  
何时使用margin：  
  
* 需要在border外侧添加空白  
* 空白处不需要背景色  
* 上下相连的两个盒子之间的空白，需要相互抵消时。  
  
何时使用padding：  
  
* 需要在border内侧添加空白  
* 空白处需要背景颜色  
* 上下相连的两个盒子的空白，希望为两者之和。  
  
# 什么是CSS媒体查询?  
媒体查询(Media Queries)早在在css2时代就存在,经过css3的洗礼后变得更加强大bootstrap的响应式特性就是从此而来的.  
  
简单的来讲媒体查询是一种用于修饰css何时起作用的语法.  
  
> Media Queries 的引入，其作用就是允许添加表达式用以确定媒体的环境情况，以此来应用不同的样式表。换句话说，其允许我们在不改变内容的情况下，改变页面的布局以精确适应不同的设备。  
# 为什么会出现浮动？什么时候需要清除浮动？清除浮动的方式有哪些？  
浮动元素碰到包含它的边框或者浮动元素的边框停留。由于浮动元素不在文档流中，所以文档流的块框表现得就像浮动框不存在一样。浮动元素会漂浮在文档流的块框上。  
  
浮动带来的问题：  
  
* 父元素的高度无法被撑开，影响与父元素同级的元素  
* 与浮动元素同级的非浮动元素（内联元素）会跟随其后  
* 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。  
  
清除浮动的方式：  
  
* 父级div定义height  
* 最后一个浮动元素后加空div标签 并添加样式clear:both。  
* 包含浮动元素的父标签添加样式overflow为hidden或auto。  
* 父级div定义zoom  
  
# CSS3新增伪类有那些？  
* p:first-of-type 选择属于其父元素的首个元素  
* p:last-of-type 选择属于其父元素的最后元素  
* p:only-of-type 选择属于其父元素唯一的元素  
* p:only-child 选择属于其父元素的唯一子元素  
* p:nth-child(2) 选择属于其父元素的第二个子元素  
* :enabled :disabled 表单控件的禁用状态。  
* :checked 单选框或复选框被选中。  
  
  
# CSS中，box-sizing属性值有什么用？  
用来控制元素的盒子模型的解析模式，默认为content-box  
  
* context-box：W3C的标准盒子模型，设置元素的 height/width 属性指的是content部分的高/宽  
* border-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽  
# 前端项目中为什么要初始化CSS样式？  
因为浏览器的兼容问题，不同浏览器对标签的默认值是不同的，如果没有对浏览器的CSS初始化，会造成相同页面在不同浏览器的显示存在差异。  
# 页面导入样式时，使用link和@import有什么区别？  
link属于HTML标签，而@import是css提供的；  
  
页面被加载时，link会同时被加载，而@import引用的css会等到页面被加载完再加载；  
  
@import只在IE5以上才能识别，而link是XHTML标签，无兼容问题；  
  
link方式的样式的权重高于@import的权重。  
# CSS匹配规则顺序是怎么样的？  
相信大多数初学者都会认为CSS匹配是左向右的，其实恰恰相反。  
  
CSS匹配发生在Render Tree构建时（Chrome Dev Tools将其归属于Layout过程）。此时浏览器构建出了DOM，而且拿到了CSS样式，此时要做的就是把样式跟DOM上的节点对应上，浏览器为了提高性能需要做的就是快速匹配。  
  
首先要明确一点，浏览器此时是给一个"可见"节点找对应的规则，这和jQuery选择器不同，后者是使用一个规则去找对应的节点，这样从左到右或许更快。但是对于前者，由于CSS的庞大，一个CSS文件中或许有上千条规则，而且对于当前节点来说，大多数规则是匹配不上的，稍微想一下就知道，如果从右开始匹配（也是从更精确的位置开始），能更快排除不合适的大部分节点，而如果从左开始，只有深入了才会发现匹配失败，如果大部分规则层级都比较深，就比较浪费资源了。  
  
除了上面这点，我们前面还提到DOM构建是"循序渐进的"，而且DOM不阻塞Render Tree构建（只有CSSOM阻塞），这样也是为了能让页面更早有元素呈现。  
  
考虑如下情况，如果我们此时构建的只是部分DOM，而CSSOM构建完成，浏览器就会构建Render Tree。  
  
这个时候对每一个节点，如果找到一条规则从右向左匹配，我们只需要逐层观察该节点父节点是否匹配，而此时其父节点肯定已经在DOM上。  
  
但是反过来，我们可能会匹配到一个DOM上尚未存在的节点，此时的匹配过程就浪费了资源。  
# canvas在标签上设置宽高，与在style中设置宽高有什么区别？  
canvas标签的width和height是画布实际宽度和高度，绘制的图形都是在这个上面。  
  
而style的width和height是canvas在浏览器中被渲染的高度和宽度。  
  
如果canvas的width和height没指定或值不正确，就被设置成默认值。  
# 如何使用css完成视差滚动效果?  
  
 ![](https://static.vue-js.com/1b2d33e0-a18d-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、是什么  
  
视差滚动（Parallax Scrolling）是指多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验  
  
我们可以把网页解刨成：背景层、内容层、悬浮层  
  
 ![](https://static.vue-js.com/57c942a0-a1cc-11eb-85f6-6fac77c0c9b3.png)  
  
当滚动鼠标滑轮的时候，各个图层以不同的速度移动，形成视觉差的效果  
  
 ![image.png](https://static.vue-js.com/e57ab280-a1dd-11eb-ab90-d9ae814b240d.png)  
  
  
## 二、实现方式  
  
  
使用`css`形式实现视觉差滚动效果的方式有：  
  
- background-attachment  
- transform:translate3D  
  
  
### background-attachment  
  
作用是设置背景图像是否固定或者随着页面的其余部分滚动  
  
值分别有如下：  
  
- scroll：默认值，背景图像会随着页面其余部分的滚动而移动  
- fixed：当页面的其余部分滚动时，背景图像不会移动  
- inherit：继承父元素background-attachment属性的值  
  
完成滚动视觉差就需要将`background-attachment`属性设置为`fixed`，让背景相对于视口固定。及时一个元素有滚动机制，背景也不会随着元素的内容而滚动  
  
也就是说，背景一开始就已经被固定在初始的位置  
  
核心的`css`代码如下：  
  
```css  
section {  
    height: 100vh;  
}  
  
.g-img {  
    background-image: url(...);  
    background-attachment: fixed;  
    background-size: cover;  
    background-position: center center;  
}  
```  
  
整体例子如下：  
  
```html  
<style>  
div {  
            height: 100vh;  
            background: rgba(0, 0, 0, .7);  
            color: #fff;  
            line-height: 100vh;  
            text-align: center;  
            font-size: 20vh;  
        }  
  
        .a-img1 {  
            background-image: url(https://images.pexels.com/photos/1097491/pexels-photo-1097491.jpeg);  
            background-attachment: fixed;  
            background-size: cover;  
            background-position: center center;  
        }  
  
        .a-img2 {  
            background-image: url(https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg);  
            background-attachment: fixed;  
            background-size: cover;  
            background-position: center center;  
        }  
  
        .a-img3 {  
            background-image: url(https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg);  
            background-attachment: fixed;  
            background-size: cover;  
            background-position: center center;  
        }  
</style>  
 <div class="a-text">1</div>  
    <div class="a-img1">2</div>  
    <div class="a-text">3</div>  
    <div class="a-img2">4</div>  
    <div class="a-text">5</div>  
    <div class="a-img3">6</div>  
    <div class="a-text">7</div>  
```  
  
  
  
  
  
### transform:translate3D  
  
同样，让我们先来看一下两个概念`transform`和`perspective`：  
  
- transform: css3 属性，可以对元素进行变换(2d/3d)，包括平移 translate,旋转 rotate,缩放 scale,等等  
- perspective: css3 属性，当元素涉及 3d 变换时，perspective 可以定义我们眼睛看到的 3d 立体效果，即空间感  
  
`3D`视角示意图如下所示：  
  
 ![](https://static.vue-js.com/24f37dd0-a18d-11eb-85f6-6fac77c0c9b3.png)  
  
  
举个例子：  
  
```html  
<style>  
    html {  
        overflow: hidden;  
        height: 100%  
    }  
  
    body {  
        /* 视差元素的父级需要3D视角 */  
        perspective: 1px;  
        transform-style: preserve-3d;   
        height: 100%;  
        overflow-y: scroll;  
        overflow-x: hidden;  
    }  
    #app{  
        width: 100vw;  
        height:200vh;  
        background:skyblue;  
        padding-top:100px;  
    }  
    .one{  
        width:500px;  
        height:200px;  
        background:#409eff;  
        transform: translateZ(0px);  
        margin-bottom: 50px;  
    }  
    .two{  
        width:500px;  
        height:200px;  
        background:#67c23a;  
        transform: translateZ(-1px);  
        margin-bottom: 150px;  
    }  
    .three{  
        width:500px;  
        height:200px;  
        background:#e6a23c;  
        transform: translateZ(-2px);  
        margin-bottom: 150px;  
    }  
</style>  
<div id="app">  
    <div class="one">one</div>  
    <div class="two">two</div>  
    <div class="three">three</div>  
</div>  
```  
  
  
而这种方式实现视觉差动的原理如下：  
  
- 容器设置上 transform-style: preserve-3d 和 perspective: xpx，那么处于这个容器的子元素就将位于3D空间中，  
  
- 子元素设置不同的 transform: translateZ()，这个时候，不同元素在 3D Z轴方向距离屏幕（我们的眼睛）的距离也就不一样  
  
- 滚动滚动条，由于子元素设置了不同的 transform: translateZ()，那么他们滚动的上下距离 translateY 相对屏幕（我们的眼睛），也是不一样的，这就达到了滚动视差的效果  
  
# 怎么使用 CSS 如何画一个三角形  
  
![](https://static.vue-js.com/bd310120-a279-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、前言  
  
在前端开发的时候，我们有时候会需要用到一个三角形的形状，比如地址选择或者播放器里面播放按钮  
  
 ![](https://static.vue-js.com/d6d8ff60-a279-11eb-85f6-6fac77c0c9b3.png)  
  
通常情况下，我们会使用图片或者`svg`去完成三角形效果图，但如果单纯使用`css`如何完成一个三角形呢？  
  
实现过程似乎也并不困难，通过边框就可完成  
  
  
## 二、实现过程  
  
在以前也讲过盒子模型，默认情况下是一个矩形，实现也很简单  
  
```html  
<style>  
    .border {  
        width: 50px;  
        height: 50px;  
        border: 2px solid;  
        border-color: #96ceb4 #ffeead #d9534f #ffad60;  
    }  
</style>  
<div class="border"></div>  
```  
  
效果如下图所示：  
  
 ![](https://static.vue-js.com/e3f244e0-a279-11eb-ab90-d9ae814b240d.png)  
  
将`border`设置`50px`，效果图如下所示：  
  
 ![](https://static.vue-js.com/ee0b42b0-a279-11eb-ab90-d9ae814b240d.png)  
  
白色区域则为`width`、`height`，这时候只需要你将白色区域部分宽高逐渐变小，最终变为0，则变成如下图所示：  
  
 ![](https://static.vue-js.com/2afaa030-a27a-11eb-85f6-6fac77c0c9b3.png)  
  
这时候就已经能够看到4个不同颜色的三角形，如果需要下方三角形，只需要将上、左、右边框设置为0就可以得到下方的红色三角形  
  
 ![](https://static.vue-js.com/2afaa030-a27a-11eb-85f6-6fac77c0c9b3.png)  
  
但这种方式，虽然视觉上是实现了三角形，但实际上，隐藏的部分任然占据部分高度，需要将上方的宽度去掉  
  
最终实现代码如下：  
  
```css  
.border {  
    width: 0;  
    height: 0;  
    border-style:solid;  
    border-width: 0 50px 50px;  
    border-color: transparent transparent #d9534f;  
}  
```  
  
如果想要实现一个只有边框是空心的三角形，由于这里不能再使用`border`属性，所以最直接的方法是利用伪类新建一个小一点的三角形定位上去  
  
```css  
.border {  
    width: 0;  
    height: 0;  
    border-style:solid;  
    border-width: 0 50px 50px;  
    border-color: transparent transparent #d9534f;  
    position: relative;  
}  
.border:after{  
    content: '';  
    border-style:solid;  
    border-width: 0 40px 40px;  
    border-color: transparent transparent #96ceb4;  
    position: absolute;  
    top: 0;  
    left: 0;  
}  
```  
  
效果图如下所示：  
  
 ![i](https://static.vue-js.com/59f4d720-a27a-11eb-85f6-6fac77c0c9b3.png)  
  
伪类元素定位参照对象的内容区域宽高都为0，则内容区域即可以理解成中心一点，所以伪元素相对中心这点定位  
  
将元素定位进行微调以及改变颜色，就能够完成下方效果图：  
  
 ![](https://static.vue-js.com/653a6e10-a27a-11eb-85f6-6fac77c0c9b3.png)  
  
最终代码如下：  
  
```css  
.border:after {  
    content: '';  
    border-style: solid;  
    border-width: 0 40px 40px;  
    border-color: transparent transparent #96ceb4;  
    position: absolute;  
    top: 6px;  
    left: -40px;  
}  
```  
  
  
  
## 三、原理分析  
  
可以看到，边框是实现三角形的部分，边框实际上并不是一个直线，如果我们将四条边设置不同的颜色，将边框逐渐放大，可以得到每条边框都是一个梯形  
  
 ![](https://static.vue-js.com/78d4bd90-a27a-11eb-85f6-6fac77c0c9b3.png)  
  
当分别取消边框的时候，发现下面几种情况：  
  
- 取消一条边的时候，与这条边相邻的两条边的接触部分会变成直的  
- 当仅有邻边时， 两个边会变成对分的三角  
- 当保留边没有其他接触时，极限情况所有东西都会消失  
  
 ![](https://static.vue-js.com/84586ef0-a27a-11eb-85f6-6fac77c0c9b3.png)  
  
通过上图的变化规则，利用旋转、隐藏，以及设置内容宽高等属性，就能够实现其他类型的三角形  
  
如设置直角三角形，如上图倒数第三行实现过程，我们就能知道整个实现原理  
  
实现代码如下：  
  
```css  
.box {  
    /* 内部大小 */  
    width: 0px;  
    height: 0px;  
    /* 边框大小 只设置两条边*/  
    border-top: #4285f4 solid;  
    border-right: transparent solid;  
    border-width: 85px;   
    /* 其他设置 */  
    margin: 50px;  
}  
```  
  
# flexbox（弹性盒布局模型）是什么，适用什么场景？  
  
 ![](https://static.vue-js.com/ef25b0a0-9837-11eb-ab90-d9ae814b240d.png)  
  
## 一、是什么  
  
`Flexible Box` 简称 `flex`，意为”弹性布局”，可以简便、完整、响应式地实现各种页面布局  
  
采用Flex布局的元素，称为`flex`容器`container`  
  
它的所有子元素自动成为容器成员，称为`flex`项目`item`  
  
 ![](https://static.vue-js.com/fbc5f590-9837-11eb-ab90-d9ae814b240d.png)  
  
容器中默认存在两条轴，主轴和交叉轴，呈90度关系。项目默认沿主轴排列，通过`flex-direction`来决定主轴的方向  
  
每根轴都有起点和终点，这对于元素的对齐非常重要  
  
  
  
## 二、属性  
  
关于`flex`常用的属性，我们可以划分为容器属性和容器成员属性  
  
容器属性有：  
  
- flex-direction  
- flex-wrap  
- flex-flow  
- justify-content  
- align-items  
- align-content  
  
  
  
### flex-direction  
  
决定主轴的方向(即项目的排列方向)  
  
```css  
.container {     
    flex-direction: row | row-reverse | column | column-reverse;    
}   
```  
  
属性对应如下：  
  
- row（默认值）：主轴为水平方向，起点在左端  
- row-reverse：主轴为水平方向，起点在右端  
- column：主轴为垂直方向，起点在上沿。  
- column-reverse：主轴为垂直方向，起点在下沿  
  
如下图所示：  
  
 ![](https://static.vue-js.com/0c9abc70-9838-11eb-ab90-d9ae814b240d.png)  
  
  
  
### flex-wrap  
  
弹性元素永远沿主轴排列，那么如果主轴排不下，通过`flex-wrap`决定容器内项目是否可换行  
  
```css  
.container {    
    flex-wrap: nowrap | wrap | wrap-reverse;  
}    
```  
  
属性对应如下：  
  
- nowrap（默认值）：不换行  
- wrap：换行，第一行在上方  
- wrap-reverse：换行，第一行在下方  
  
默认情况是不换行，但这里也不会任由元素直接溢出容器，会涉及到元素的弹性伸缩  
  
  
  
### flex-flow  
  
是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`  
  
```css  
.box {  
  flex-flow: <flex-direction> || <flex-wrap>;  
}  
```  
  
  
  
### justify-content  
  
定义了项目在主轴上的对齐方式  
  
```css  
.box {  
    justify-content: flex-start | flex-end | center | space-between | space-around;  
}  
```  
  
属性对应如下：  
  
- flex-start（默认值）：左对齐  
- flex-end：右对齐  
- center：居中  
- space-between：两端对齐，项目之间的间隔都相等  
- space-around：两个项目两侧间隔相等  
  
效果图如下：  
  
 ![](https://static.vue-js.com/2d5ca950-9838-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
### align-items  
  
定义项目在交叉轴上如何对齐  
  
```css  
.box {  
  align-items: flex-start | flex-end | center | baseline | stretch;  
}  
```  
  
属性对应如下：  
  
- flex-start：交叉轴的起点对齐  
- flex-end：交叉轴的终点对齐  
- center：交叉轴的中点对齐  
- baseline: 项目的第一行文字的基线对齐  
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度  
  
  
  
### align-content  
  
定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用  
  
```css  
.box {  
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;  
}  
```  
  
属性对应如吓：  
  
- flex-start：与交叉轴的起点对齐  
- flex-end：与交叉轴的终点对齐  
- center：与交叉轴的中点对齐  
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布  
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍  
- stretch（默认值）：轴线占满整个交叉轴  
  
效果图如下：  
  
 ![](https://static.vue-js.com/39bcb0f0-9838-11eb-ab90-d9ae814b240d.png)  
  
  
  
容器成员属性如下：  
  
- `order`  
- `flex-grow`  
- `flex-shrink`  
- `flex-basis`  
- `flex`  
- `align-self`  
  
  
  
### order  
  
定义项目的排列顺序。数值越小，排列越靠前，默认为0  
  
```css  
.item {  
    order: <integer>;  
}  
```  
  
  
  
### flex-grow  
  
上面讲到当容器设为`flex-wrap: nowrap;`不换行的时候，容器宽度有不够分的情况，弹性元素会根据`flex-grow`来决定  
  
定义项目的放大比例（容器宽度>元素总宽度时如何伸展）  
  
默认为`0`，即如果存在剩余空间，也不放大  
  
```css  
.item {  
    flex-grow: <number>;  
}  
```  
  
如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）  
  
 ![](https://static.vue-js.com/48c8c5c0-9838-11eb-ab90-d9ae814b240d.png)  
  
如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍  
  
 ![](https://static.vue-js.com/5b822b20-9838-11eb-ab90-d9ae814b240d.png)  
  
弹性容器的宽度正好等于元素宽度总和，无多余宽度，此时无论`flex-grow`是什么值都不会生效  
  
  
  
### flex-shrink  
  
定义了项目的缩小比例（容器宽度<元素总宽度时如何收缩），默认为1，即如果空间不足，该项目将缩小  
  
```css  
.item {  
    flex-shrink: <number>; /* default 1 */  
}  
```  
  
如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小  
  
如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小  
  
 ![](https://static.vue-js.com/658c5be0-9838-11eb-85f6-6fac77c0c9b3.png)  
  
在容器宽度有剩余时，`flex-shrink`也是不会生效的  
  
  
  
  
  
### flex-basis  
  
设置的是元素在主轴上的初始尺寸，所谓的初始尺寸就是元素在`flex-grow`和`flex-shrink`生效前的尺寸  
  
浏览器根据这个属性，计算主轴是否有多余空间，默认值为`auto`，即项目的本来大小，如设置了`width`则元素尺寸由`width/height`决定（主轴方向），没有设置则由内容决定  
  
 ```css  
.item {  
    flex-basis: <length> | auto; /* default auto */  
}  
 ```  
  
当设置为0的是，会根据内容撑开  
  
它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间  
  
  
  
### flex  
  
`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`，也是比较难懂的一个复合属性  
  
 ```css  
 .item {  
   flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]  
 }  
 ```  
  
一些属性有：  
  
- flex: 1 = flex: 1 1 0%  
- flex: 2 = flex: 2 1 0%  
- flex: auto = flex: 1 1 auto  
- flex: none = flex: 0 0 auto，常用于固定尺寸不伸缩  
  
  
  
`flex:1` 和 `flex:auto` 的区别，可以归结于`flex-basis:0`和`flex-basis:auto`的区别  
  
当设置为0时（绝对弹性元素），此时相当于告诉`flex-grow`和`flex-shrink`在伸缩的时候不需要考虑我的尺寸  
  
当设置为`auto`时（相对弹性元素），此时则需要在伸缩时将元素尺寸纳入考虑  
  
注意：建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值  
  
  
  
### align-self  
  
允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性  
  
默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`  
  
```css  
.item {  
    align-self: auto | flex-start | flex-end | center | baseline | stretch;  
}  
```  
  
效果图如下：  
  
 ![](https://static.vue-js.com/6f8304a0-9838-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
## 三、应用场景  
  
在以前的文章中，我们能够通过`flex`简单粗暴的实现元素水平垂直方向的居中，以及在两栏三栏自适应布局中通过`flex`完成，这里就不再展开代码的演示  
  
包括现在在移动端、小程序这边的开发，都建议使用`flex`进行布局  
  
  
# 什么是响应式设计？响应式设计的基本原理是什么？如何进行实现？  
  
 ![](https://static.vue-js.com/a57e2e40-9dba-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、是什么  
  
响应式网站设计（Responsive Web design）是一种网络页面设计布局，页面的设计与开发应当根据用户行为以及设备环境(系统平台、屏幕尺寸、屏幕定向等)进行相应的响应和调整  
  
描述响应式界面最著名的一句话就是“Content is like water”  
  
大白话便是“如果将屏幕看作容器，那么内容就像水一样”  
  
响应式网站常见特点：  
  
- 同时适配PC + 平板 + 手机等  
  
- 标签导航在接近手持终端设备时改变为经典的抽屉式导航  
  
- 网站的布局会根据视口来调整模块的大小和位置  
  
 ![](https://static.vue-js.com/ae68be30-9dba-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
## 二、实现方式  
  
响应式设计的基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理，为了处理移动端，页面头部必须有`meta`声明`viewport`  
  
```html  
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no”>  
```  
  
属性对应如下：  
  
- width=device-width: 是自适应手机屏幕的尺寸宽度  
  
- maximum-scale:是缩放比例的最大值  
  
- inital-scale:是缩放的初始化  
  
- user-scalable:是用户的可以缩放的操作  
  
  
  
实现响应式布局的方式有如下：  
  
- 媒体查询  
- 百分比  
- vw/vh  
- rem  
  
  
  
### 媒体查询  
  
`CSS3 `中的增加了更多的媒体查询，就像`if`条件表达式一样，我们可以设置不同类型的媒体条件，并根据对应的条件，给相应符合条件的媒体调用相对应的样式表  
  
使用`@Media`查询，可以针对不同的媒体类型定义不同的样式，如：  
  
```css  
@media screen and (max-width: 1920px) { ... }  
```  
  
当视口在375px - 600px之间，设置特定字体大小18px  
  
```css  
@media screen (min-width: 375px) and (max-width: 600px) {  
  body {  
    font-size: 18px;  
  }  
}  
```  
  
通过媒体查询，可以通过给不同分辨率的设备编写不同的样式来实现响应式的布局，比如我们为不同分辨率的屏幕，设置不同的背景图片  
  
比如给小屏幕手机设置@2x图，为大屏幕手机设置@3x图，通过媒体查询就能很方便的实现  
  
  
  
### 百分比  
  
通过百分比单位 " % " 来实现响应式的效果  
  
 比如当浏览器的宽度或者高度发生变化时，通过百分比单位，可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果  
  
`height`、`width`属性的百分比依托于父标签的宽高，但是其他盒子属性则不完全依赖父元素：  
  
- 子元素的top/left和bottom/right如果设置百分比，则相对于直接非static定位(默认定位)的父元素的高度/宽度  
  
- 子元素的padding如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的width，而与父元素的height无关。  
  
- 子元素的margin如果设置成百分比，不论是垂直方向还是水平方向，都相对于直接父元素的width  
  
- border-radius不一样，如果设置border-radius为百分比，则是相对于自身的宽度  
  
可以看到每个属性都使用百分比，会照成布局的复杂度，所以不建议使用百分比来实现响应式  
  
  
  
  
  
### vw/vh  
  
`vw`表示相对于视图窗口的宽度，`vh`表示相对于视图窗口高度。 任意层级元素，在使用`vw`单位的情况下，`1vw`都等于视图宽度的百分之一  
  
与百分比布局很相似，在以前文章提过与`%`的区别，这里就不再展开述说  
  
  
  
### rem  
  
在以前也讲到，`rem`是相对于根元素`html`的`font-size`属性，默认情况下浏览器字体大小为`16px`，此时`1rem = 16px`  
  
可以利用前面提到的媒体查询，针对不同设备分辨率改变`font-size`的值，如下：  
  
```css  
@media screen and (max-width: 414px) {  
  html {  
    font-size: 18px  
  }  
}  
  
@media screen and (max-width: 375px) {  
  html {  
    font-size: 16px  
  }  
}  
  
@media screen and (max-width: 320px) {  
  html {  
    font-size: 12px  
  }  
}  
```  
  
为了更准确监听设备可视窗口变化，我们可以在`css`之前插入`script`标签，内容如下：  
  
```js  
//动态为根元素设置字体大小  
function init () {  
    // 获取屏幕宽度  
    var width = document.documentElement.clientWidth  
    // 设置根元素字体大小。此时为宽的10等分  
    document.documentElement.style.fontSize = width / 10 + 'px'  
}  
  
//首次加载应用，设置一次  
init()  
// 监听手机旋转的事件的时机，重新设置  
window.addEventListener('orientationchange', init)  
// 监听手机窗口变化，重新设置  
window.addEventListener('resize', init)  
```  
  
无论设备可视窗口如何变化，始终设置`rem`为`width`的1/10，实现了百分比布局  
  
除此之外，我们还可以利用主流`UI`框架，如：`element ui`、`antd`提供的栅格布局实现响应式  
  
  
  
### 小结  
  
响应式设计实现通常会从以下几方面思考：  
  
- 弹性盒子（包括图片、表格、视频）和媒体查询等技术  
- 使用百分比布局创建流式布局的弹性UI，同时使用媒体查询限制元素的尺寸和内容变更范围  
- 使用相对单位使得内容自适应调节  
- 选择断点，针对不同断点实现不同布局和内容展示  
  
  
  
## 三、总结  
  
响应式布局优点可以看到：  
  
- 面对不同分辨率设备灵活性强  
- 能够快捷解决多设备显示适应问题  
  
缺点：  
  
- 仅适用布局、信息、框架并不复杂的部门类型网站  
- 兼容各种设备工作量大，效率低下  
- 代码累赘，会出现隐藏无用的元素，加载时间加长  
- 其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果  
- 一定程度上改变了网站原有的布局结构，会出现用户混淆的情况  
  
  
# 怎么让Chrome支持小于12px 的文字？  
  
![](https://static.vue-js.com/62945fd0-a334-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、背景  
  
Chrome 中文版浏览器会默认设定页面的最小字号是12px，英文版没有限制  
  
原由 Chrome 团队认为汉字小于12px就会增加识别难度  
  
- 中文版浏览器  
  
与网页语言无关，取决于用户在Chrome的设置里（chrome://settings/languages）把哪种语言设置为默认显示语言  
  
- 系统级最小字号  
  
浏览器默认设定页面的最小字号，用户可以前往 chrome://settings/fonts 根据需求更改  
  
而我们在实际项目中，不能奢求用户更改浏览器设置  
  
对于文本需要以更小的字号来显示，就需要用到一些小技巧  
  
  
## 二、解决方案  
  
常见的解决方案有：  
  
- zoom  
- -webkit-transform:scale()  
- -webkit-text-size-adjust:none  
  
### Zoom  
  
`zoom` 的字面意思是“变焦”，可以改变页面上元素的尺寸，属于真实尺寸  
  
其支持的值类型有：  
  
- zoom:50%，表示缩小到原来的一半  
- zoom:0.5，表示缩小到原来的一半  
  
使用 `zoom` 来”支持“ 12px 以下的字体  
  
代码如下：  
  
```html  
<style type="text/css">  
    .span1{  
        font-size: 12px;  
        display: inline-block;  
        zoom: 0.8;  
    }  
    .span2{  
        display: inline-block;  
        font-size: 12px;  
    }  
</style>  
<body>  
    <span class="span1">测试10px</span>  
    <span class="span2">测试12px</span>  
</body>  
```  
  
效果如下：  
  
 ![](https://static.vue-js.com/d5243980-a334-11eb-ab90-d9ae814b240d.png)  
  
> 需要注意的是，`Zoom` 并不是标准属性，需要考虑其兼容性  
  
 ![image.png](https://static.vue-js.com/3defe3c0-a343-11eb-85f6-6fac77c0c9b3.png)  
  
  
### -webkit-transform:scale()  
  
针对`chrome`浏览器,加`webkit`前缀，用`transform:scale()`这个属性进行放缩  
  
注意的是，使用`scale`属性只对可以定义宽高的元素生效，所以，下面代码中将`span`元素转为行内块元素  
  
实现代码如下：  
  
```html  
<style type="text/css">  
    .span1{  
        font-size: 12px;  
        display: inline-block;  
        -webkit-transform:scale(0.8);  
    }  
    .span2{  
        display: inline-block;  
        font-size: 12px;  
    }  
</style>  
<body>  
    <span class="span1">测试10px</span>  
    <span class="span2">测试12px</span>  
</body>  
```  
  
效果如下：  
  
 ![](https://static.vue-js.com/d5243980-a334-11eb-ab90-d9ae814b240d.png)  
  
  
### -webkit-text-size-adjust:none  
  
该属性用来设定文字大小是否根据设备(浏览器)来自动调整显示大小  
  
属性值：  
  
- percentage：字体显示的大小；  
- auto：默认，字体大小会根据设备/浏览器来自动调整；  
- none:字体大小不会自动调整  
  
```css  
html { -webkit-text-size-adjust: none; }  
```  
  
这样设置之后会有一个问题，就是当你放大网页时，一般情况下字体也会随着变大，而设置了以上代码后，字体只会显示你当前设置的字体大小，不会随着网页放大而变大了  
  
所以，我们不建议全局应用该属性，而是单独对某一属性使用  
  
> 需要注意的是，自从`chrome 27`之后，就取消了对这个属性的支持。同时，该属性只对英文、数字生效，对中文不生效  
  
## 三、总结  
  
`Zoom` 非标属性，有兼容问题，缩放会改变了元素占据的空间大小，触发重排  
  
`-webkit-transform:scale()` 大部分现代浏览器支持，并且对英文、数字、中文也能够生效，缩放不会改变了元素占据的空间大小，页面布局不会发生变化  
  
`-webkit-text-size-adjust`对谷歌浏览器有版本要求，在27之后，就取消了该属性的支持，并且只对英文、数字生效  
  
# grid网格布局是什么？  
  
 ![](https://static.vue-js.com/4d73e3d0-9a94-11eb-85f6-6fac77c0c9b3.png)  
  
  
## 一、是什么  
  
`Grid` 布局即网格布局，是一个二维的布局方式，由纵横相交的两组网格线形成的框架性布局结构，能够同时处理行与列  
  
擅长将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系  
  
 ![](https://static.vue-js.com/59680a40-9a94-11eb-85f6-6fac77c0c9b3.png)  
  
这与之前讲到的`flex`一维布局不相同  
  
设置`display:grid/inline-grid`的元素就是网格布局容器，这样就能出发浏览器渲染引擎的网格布局算法  
  
```js  
<div class="container">  
    <div class="item item-1">  
        <p class="sub-item"></p >  
 </div>  
    <div class="item item-2"></div>  
    <div class="item item-3"></div>  
</div>   
```  
  
上述代码实例中，`.container`元素就是网格布局容器，`.item`元素就是网格的项目，由于网格元素只能是容器的顶层子元素，所以`p`元素并不是网格元素  
  
这里提一下，网格线概念，有助于下面对`grid-column`系列属性的理解  
  
网格线，即划分网格的线，如下图所示：  
  
 ![](https://static.vue-js.com/61be7080-9a94-11eb-ab90-d9ae814b240d.png)  
  
上图是一个 2 x 3 的网格，共有3根水平网格线和4根垂直网格线  
  
  
## 二、属性  
  
同样，`Grid` 布局属性可以分为两大类：  
  
- 容器属性，  
- 项目属性  
  
  
  
关于容器属性有如下：  
  
### display 属性  
  
文章开头讲到，在元素上设置`display：grid` 或 `display：inline-grid` 来创建一个网格容器  
  
- display：grid 则该容器是一个块级元素  
  
- display: inline-grid 则容器元素为行内元素  
  
  
  
### grid-template-columns 属性，grid-template-rows 属性  
  
`grid-template-columns` 属性设置列宽，`grid-template-rows` 属性设置行高  
  
```css  
.wrapper {  
  display: grid;  
  /*  声明了三列，宽度分别为 200px 200px 200px */  
  grid-template-columns: 200px 200px 200px;  
  grid-gap: 5px;  
  /*  声明了两行，行高分别为 50px 50px  */  
  grid-template-rows: 50px 50px;  
}  
```  
  
以上表示固定列宽为 200px 200px 200px，行高为 50px 50px  
  
上述代码可以看到重复写单元格宽高，通过使用`repeat()`函数，可以简写重复的值  
  
- 第一个参数是重复的次数  
- 第二个参数是重复的值  
  
所以上述代码可以简写成  
  
```css  
.wrapper {  
  display: grid;  
  grid-template-columns: repeat(3,200px);  
  grid-gap: 5px;  
  grid-template-rows:repeat(2,50px);  
}  
```  
  
除了上述的`repeact`关键字，还有：  
  
- auto-fill：示自动填充，让一行（或者一列）中尽可能的容纳更多的单元格  
  
>`grid-template-columns: repeat(auto-fill, 200px)` 表示列宽是 200 px，但列的数量是不固定的，只要浏览器能够容纳得下，就可以放置元素  
  
- fr：片段，为了方便表示比例关系  
  
>`grid-template-columns: 200px 1fr 2fr` 表示第一个列宽设置为 200px，后面剩余的宽度分为两部分，宽度分别为剩余宽度的 1/3 和 2/3  
  
- minmax：产生一个长度范围，表示长度就在这个范围之中都可以应用到网格项目中。第一个参数就是最小值，第二个参数就是最大值  
  
>`minmax(100px, 1fr)`表示列宽不小于`100px`，不大于`1fr`  
  
- auto：由浏览器自己决定长度  
  
>`grid-template-columns: 100px auto 100px` 表示第一第三列为 100px，中间由浏览器决定长度  
  
  
  
### grid-row-gap 属性， grid-column-gap 属性， grid-gap 属性  
  
`grid-row-gap` 属性、`grid-column-gap` 属性分别设置行间距和列间距。`grid-gap` 属性是两者的简写形式  
  
`grid-row-gap: 10px` 表示行间距是 10px  
  
`grid-column-gap: 20px` 表示列间距是 20px  
  
`grid-gap: 10px 20px` 等同上述两个属性  
  
  
  
### grid-template-areas 属性  
  
用于定义区域，一个区域由一个或者多个单元格组成  
  
```css  
.container {  
  display: grid;  
  grid-template-columns: 100px 100px 100px;  
  grid-template-rows: 100px 100px 100px;  
  grid-template-areas: 'a b c'  
                       'd e f'  
                       'g h i';  
}  
```  
  
上面代码先划分出9个单元格，然后将其定名为`a`到`i`的九个区域，分别对应这九个单元格。  
  
多个单元格合并成一个区域的写法如下  
  
 ```css  
 grid-template-areas: 'a a a'  
                      'b b b'  
                      'c c c';  
 ```  
  
上面代码将9个单元格分成`a`、`b`、`c`三个区域  
  
如果某些区域不需要利用，则使用"点"（`.`）表示  
  
  
  
### grid-auto-flow 属性  
  
划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。  
  
顺序就是由`grid-auto-flow`决定，默认为行，代表"先行后列"，即先填满第一行，再开始放入第二行  
  
 ![](https://static.vue-js.com/70fb3240-9a94-11eb-ab90-d9ae814b240d.png)  
  
当修改成`column`后，放置变为如下：  
  
![](https://static.vue-js.com/7c26ffa0-9a94-11eb-ab90-d9ae814b240d.png)  
  
  
  
### justify-items 属性， align-items 属性， place-items 属性  
  
`justify-items` 属性设置单元格内容的水平位置（左中右），`align-items` 属性设置单元格的垂直位置（上中下）  
  
两者属性的值完成相同  
  
```css  
.container {  
  justify-items: start | end | center | stretch;  
  align-items: start | end | center | stretch;  
}  
```  
  
属性对应如下：  
  
- start：对齐单元格的起始边缘  
- end：对齐单元格的结束边缘  
- center：单元格内部居中  
- stretch：拉伸，占满单元格的整个宽度（默认值）  
  
`place-items`属性是`align-items`属性和`justify-items`属性的合并简写形式  
  
  
  
### justify-content 属性， align-content 属性， place-content 属性  
  
`justify-content`属性是整个内容区域在容器里面的水平位置（左中右），`align-content`属性是整个内容区域的垂直位置（上中下）  
  
```css  
.container {  
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;  
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}  
```  
  
两个属性的写法完全相同，都可以取下面这些值：  
  
- start - 对齐容器的起始边框  
- end - 对齐容器的结束边框  
- center - 容器内部居中  
  
 ![](https://static.vue-js.com/9d1ec990-9a94-11eb-ab90-d9ae814b240d.png)  
  
- space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍  
  
- space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔  
  
- space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔  
  
- stretch - 项目大小没有指定时，拉伸占据整个网格容器  
  
 ![](https://static.vue-js.com/a620b210-9a94-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
### grid-auto-columns 属性和 grid-auto-rows 属性  
  
有时候，一些项目的指定位置，在现有网格的外部，就会产生显示网格和隐式网格  
  
比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。超出的部分就是隐式网格  
  
而`grid-auto-rows`与`grid-auto-columns`就是专门用于指定隐式网格的宽高  
  
  
  
  
  
关于项目属性，有如下：  
  
  
### grid-column-start 属性、grid-column-end 属性、grid-row-start 属性以及grid-row-end 属性  
  
指定网格项目所在的四个边框，分别定位在哪根网格线，从而指定项目的位置  
  
- grid-column-start 属性：左边框所在的垂直网格线  
- grid-column-end 属性：右边框所在的垂直网格线  
- grid-row-start 属性：上边框所在的水平网格线  
- grid-row-end 属性：下边框所在的水平网格线  
  
举个例子：  
  
```html  
<style>  
    #container{  
        display: grid;  
        grid-template-columns: 100px 100px 100px;  
        grid-template-rows: 100px 100px 100px;  
    }  
    .item-1 {  
        grid-column-start: 2;  
        grid-column-end: 4;  
    }  
</style>  
  
<div id="container">  
    <div class="item item-1">1</div>  
    <div class="item item-2">2</div>  
    <div class="item item-3">3</div>  
</div>  
```  
  
通过设置`grid-column`属性，指定1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线  
  
 ![](https://static.vue-js.com/b7925530-9a94-11eb-ab90-d9ae814b240d.png)  
  
  
  
  
  
### grid-area 属性  
  
`grid-area` 属性指定项目放在哪一个区域  
  
```css  
.item-1 {  
  grid-area: e;  
}  
```  
  
意思为将1号项目位于`e`区域  
  
与上述讲到的`grid-template-areas`搭配使用  
  
  
  
### justify-self 属性、align-self 属性以及 place-self 属性  
  
`justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。  
  
`align-self`属性设置单元格内容的垂直位置（上中下），跟`align-items`属性的用法完全一致，也是只作用于单个项目  
  
 ```css  
 .item {  
   justify-self: start | end | center | stretch;  
   align-self: start | end | center | stretch;  
 }  
 ```  
  
这两个属性都可以取下面四个值。  
  
 - start：对齐单元格的起始边缘。  
  - end：对齐单元格的结束边缘。  
 - center：单元格内部居中。  
 - stretch：拉伸，占满单元格的整个宽度（默认值）  
  
  
  
## 三、应用场景  
  
文章开头就讲到，`Grid`是一个强大的布局，如一些常见的 CSS 布局，如居中，两列布局，三列布局等等是很容易实现的，在以前的文章中，也有使用`Grid`布局完成对应的功能  
  
关于兼容性问题，结果如下：  
  
 ![](https://static.vue-js.com/c24a2b10-9a94-11eb-85f6-6fac77c0c9b3.png)  
  
总体兼容性还不错，但在 IE 10 以下不支持  
  
目前，`Grid`布局在手机端支持还不算太友好  
  
  
# 如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？  
  
 ![](https://static.vue-js.com/f335d400-976e-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、背景  
  
在日常布局中，无论是两栏布局还是三栏布局，使用的频率都非常高  
  
### 两栏布局  
  
两栏布局实现效果就是将页面分割成左右宽度不等的两列，宽度较小的列设置为固定宽度，剩余宽度由另一列撑满，  
  
比如 `Ant Design` 文档，蓝色区域为主要内容布局容器，侧边栏为次要内容布局容器  
  
> 这里称宽度较小的列父元素为次要布局容器，宽度较大的列父元素为主要布局容器  
  
 ![](https://static.vue-js.com/fcb8ac50-976e-11eb-85f6-6fac77c0c9b3.png)  
  
这种布局适用于内容上具有明显主次关系的网页  
  
  
  
### 三栏布局  
  
三栏布局按照左中右的顺序进行排列，通常中间列最宽，左右两列次之  
  
大家最常见的就是`github`：  
  
 ![](https://static.vue-js.com/0bf016e0-976f-11eb-ab90-d9ae814b240d.png)  
  
  
  
## 二、双栏布局  
  
双栏布局非常常见，往往是以一个定宽栏和一个自适应的栏并排展示存在  
  
实现思路也非常的简单：  
  
- 使用 float 左浮左边栏  
- 右边模块使用 margin-left 撑出内容块做内容展示  
- 为父级元素添加BFC，防止下方元素飞到上方内容  
  
代码如下：  
  
```html  
<style>  
    .box{  
        overflow: hidden; 添加BFC  
    }  
    .left {  
        float: left;  
        width: 200px;  
        background-color: gray;  
        height: 400px;  
    }  
    .right {  
        margin-left: 210px;  
        background-color: lightgray;  
        height: 200px;  
    }  
</style>  
<div class="box">  
    <div class="left">左边</div>  
    <div class="right">右边</div>  
</div>  
```  
  
还有一种更为简单的使用则是采取：flex弹性布局  
  
  
  
### flex弹性布局  
  
```html  
<style>  
    .box{  
        display: flex;  
    }  
    .left {  
        width: 100px;  
    }  
    .right {  
        flex: 1;  
    }  
</style>  
<div class="box">  
    <div class="left">左边</div>  
    <div class="right">右边</div>  
</div>  
```  
  
`flex`可以说是最好的方案了，代码少，使用简单  
  
注意的是，`flex`容器的一个默认属性值:`align-items: stretch;`  
  
这个属性导致了列等高的效果。 为了让两个盒子高度自动，需要设置: `align-items: flex-start`  
  
  
## 三、三栏布局  
  
实现三栏布局中间自适应的布局方式有：  
  
- 两边使用 float，中间使用 margin  
- 两边使用 absolute，中间使用 margin  
- 两边使用 float 和负 margin  
- display: table 实现  
- flex实现  
- grid网格布局  
  
  
  
### 两边使用 float，中间使用 margin  
  
需要将中间的内容放在`html`结构最后，否则右侧会臣在中间内容的下方  
  
实现代码如下：  
  
```html  
<style>  
    .wrap {  
        background: #eee;  
        overflow: hidden; <!-- 生成BFC，计算高度时考虑浮动的元素 -->  
        padding: 20px;  
        height: 200px;  
    }  
    .left {  
        width: 200px;  
        height: 200px;  
        float: left;  
        background: coral;  
    }  
    .right {  
        width: 120px;  
        height: 200px;  
        float: right;  
        background: lightblue;  
    }  
    .middle {  
        margin-left: 220px;  
        height: 200px;  
        background: lightpink;  
        margin-right: 140px;  
    }  
</style>  
<div class="wrap">  
    <div class="left">左侧</div>  
    <div class="right">右侧</div>  
    <div class="middle">中间</div>  
</div>  
```  
  
原理如下：  
  
- 两边固定宽度，中间宽度自适应。  
- 利用中间元素的margin值控制两边的间距  
- 宽度小于左右部分宽度之和时，右侧部分会被挤下去  
  
这种实现方式存在缺陷：  
  
- 主体内容是最后加载的。  
  
- 右边在主体内容之前，如果是响应式设计，不能简单的换行展示  
  
  
  
### 两边使用 absolute，中间使用 margin  
  
基于绝对定位的三栏布局：注意绝对定位的元素脱离文档流，相对于最近的已经定位的祖先元素进行定位。无需考虑HTML中结构的顺序  
  
```html  
<style>  
  .container {  
    position: relative;  
  }  
    
  .left,  
  .right,  
  .main {  
    height: 200px;  
    line-height: 200px;  
    text-align: center;  
  }  
  
  .left {  
    position: absolute;  
    top: 0;  
    left: 0;  
    width: 100px;  
    background: green;  
  }  
  
  .right {  
    position: absolute;  
    top: 0;  
    right: 0;  
    width: 100px;  
    background: green;  
  }  
  
  .main {  
    margin: 0 110px;  
    background: black;  
    color: white;  
  }  
</style>  
  
<div class="container">  
  <div class="left">左边固定宽度</div>  
  <div class="right">右边固定宽度</div>  
  <div class="main">中间自适应</div>  
</div>  
```  
  
实现流程：  
  
- 左右两边使用绝对定位，固定在两侧。  
- 中间占满一行，但通过 margin和左右两边留出10px的间隔  
  
  
  
  
  
### 两边使用 float 和负 margin  
  
```html  
<style>  
  .left,  
  .right,  
  .main {  
    height: 200px;  
    line-height: 200px;  
    text-align: center;  
  }  
  
  .main-wrapper {  
    float: left;  
    width: 100%;  
  }  
  
  .main {  
    margin: 0 110px;  
    background: black;  
    color: white;  
  }  
  
  .left,  
  .right {  
    float: left;  
    width: 100px;  
    margin-left: -100%;  
    background: green;  
  }  
  
  .right {  
    margin-left: -100px; /* 同自身宽度 */  
  }  
</style>  
  
<div class="main-wrapper">  
  <div class="main">中间自适应</div>  
</div>  
<div class="left">左边固定宽度</div>  
<div class="right">右边固定宽度</div>  
```  
  
实现过程：  
  
- 中间使用了双层标签，外层是浮动的，以便左中右能在同一行展示  
- 左边通过使用负 margin-left:-100%，相当于中间的宽度，所以向上偏移到左侧  
- 右边通过使用负 margin-left:-100px，相当于自身宽度，所以向上偏移到最右侧  
  
   
  
缺点：  
  
- 增加了 .main-wrapper 一层，结构变复杂  
- 使用负 margin，调试也相对麻烦  
  
  
  
### 使用 display: table 实现  
  
`<table>` 标签用于展示行列数据，不适合用于布局。但是可以使用 `display: table` 来实现布局的效果  
  
```html  
<style>  
  .container {  
    height: 200px;  
    line-height: 200px;  
    text-align: center;  
    display: table;  
    table-layout: fixed;  
    width: 100%;  
  }  
  
  .left,  
  .right,  
  .main {  
    display: table-cell;  
  }  
  
  .left,  
  .right {  
    width: 100px;  
    background: green;  
  }  
  
  .main {  
    background: black;  
    color: white;  
    width: 100%;  
  }  
</style>  
  
<div class="container">  
  <div class="left">左边固定宽度</div>  
  <div class="main">中间自适应</div>  
  <div class="right">右边固定宽度</div>  
</div>  
```  
  
实现原理：  
  
- 层通过 display: table设置为表格，设置 table-layout: fixed`表示列宽自身宽度决定，而不是自动计算。  
- 内层的左中右通过 display: table-cell设置为表格单元。  
- 左右设置固定宽度，中间设置 width: 100% 填充剩下的宽度  
  
  
  
  
  
### 使用flex实现  
  
利用`flex`弹性布局，可以简单实现中间自适应  
  
代码如下：  
  
```html  
<style type="text/css">  
    .wrap {  
        display: flex;  
        justify-content: space-between;  
    }  
  
    .left,  
    .right,  
    .middle {  
        height: 100px;  
    }  
  
    .left {  
        width: 200px;  
        background: coral;  
    }  
  
    .right {  
        width: 120px;  
        background: lightblue;  
    }  
  
    .middle {  
        background: #555;  
        width: 100%;  
        margin: 0 20px;  
    }  
</style>  
<div class="wrap">  
    <div class="left">左侧</div>  
    <div class="middle">中间</div>  
    <div class="right">右侧</div>  
</div>  
```  
  
实现过程：  
  
- 仅需将容器设置为`display:flex;`，  
- 盒内元素两端对其，将中间元素设置为`100%`宽度，或者设为`flex:1`，即可填充空白  
- 盒内元素的高度撑开容器的高度  
  
优点：  
  
- 结构简单直观  
- 可以结合 flex的其他功能实现更多效果，例如使用 order属性调整显示顺序，让主体内容优先加载，但展示在中间  
  
  
  
### grid网格布局  
  
代码如下：  
  
```html  
<style>  
    .wrap {  
        display: grid;  
        width: 100%;  
        grid-template-columns: 300px auto 300px;  
    }  
  
    .left,  
    .right,  
    .middle {  
        height: 100px;  
    }  
  
    .left {  
        background: coral;  
    }  
  
    .right {  
        width: 300px;  
        background: lightblue;  
    }  
  
    .middle {  
        background: #555;  
    }  
</style>  
<div class="wrap">  
    <div class="left">左侧</div>  
    <div class="middle">中间</div>  
    <div class="right">右侧</div>  
</div>  
```  
  
跟`flex`弹性布局一样的简单  
  
# CSS3新增了哪些特性？  
  
 ![](https://static.vue-js.com/d58f6df0-9b5e-11eb-ab90-d9ae814b240d.png)  
  
  
## 一、是什么  
  
`css`，即层叠样式表（Cascading Style Sheets）的简称，是一种标记语言，由浏览器解释执行用来使页面变得更美观  
  
`css3`是`css`的最新标准，是向后兼容的，`CSS1/2 `的特性在` CSS3` 里都是可以使用的  
  
而` CSS3` 也增加了很多新特性，为开发带来了更佳的开发体验  
  
  
## 二、选择器  
  
`css3`中新增了一些选择器，主要为如下图所示：  
  
 ![](https://static.vue-js.com/e368cf20-9b5e-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
## 三、新样式  
  
### 边框  
  
`css3`新增了三个边框属性，分别是：  
  
- border-radius：创建圆角边框  
- box-shadow：为元素添加阴影  
  
- border-image：使用图片来绘制边框  
  
  
  
#### box-shadow  
  
设置元素阴影，设置属性如下：  
  
- 水平阴影  
- 垂直阴影  
- 模糊距离(虚实)  
- 阴影尺寸(影子大小)  
- 阴影颜色  
- 内/外阴影  
  
其中水平阴影和垂直阴影是必须设置的  
  
  
### 背景  
  
新增了几个关于背景的属性，分别是`background-clip`、`background-origin`、`background-size`和`background-break`  
  
  
  
#### background-clip  
  
用于确定背景画区，有以下几种可能的属性：  
  
- background-clip: border-box; 背景从border开始显示  
- background-clip: padding-box; 背景从padding开始显示  
- background-clip: content-box; 背景显content区域开始显示  
- background-clip: no-clip; 默认属性，等同于border-box  
  
通常情况，背景都是覆盖整个元素的，利用这个属性可以设定背景颜色或图片的覆盖范围  
  
  
  
#### background-origin  
  
当我们设置背景图片时，图片是会以左上角对齐，但是是以`border`的左上角对齐还是以`padding`的左上角或者`content`的左上角对齐? `border-origin`正是用来设置这个的  
  
- background-origin: border-box; 从border开始计算background-position  
- background-origin: padding-box; 从padding开始计算background-position  
- background-origin: content-box; 从content开始计算background-position  
  
默认情况是`padding-box`，即以`padding`的左上角为原点  
  
  
  
#### background-size  
  
background-size属性常用来调整背景图片的大小，主要用于设定图片本身。有以下可能的属性：  
  
- background-size: contain; 缩小图片以适合元素（维持像素长宽比）  
- background-size: cover; 扩展元素以填补元素（维持像素长宽比）  
- background-size: 100px 100px; 缩小图片至指定的大小  
- background-size: 50% 100%; 缩小图片至指定的大小，百分比是相对包 含元素的尺寸  
  
  
  
### background-break  
  
元素可以被分成几个独立的盒子（如使内联元素span跨越多行），`background-break` 属性用来控制背景怎样在这些不同的盒子中显示  
  
- background-break: continuous; 默认值。忽略盒之间的距离（也就是像元素没有分成多个盒子，依然是一个整体一样）  
- background-break: bounding-box; 把盒之间的距离计算在内；  
- background-break: each-box; 为每个盒子单独重绘背景  
  
  
  
### 文字  
  
### word-wrap  
  
语法：`word-wrap: normal|break-word`  
  
- normal：使用浏览器默认的换行  
- break-all：允许在单词内换行  
  
  
  
### text-overflow  
  
` text-overflow`设置或检索当当前行超过指定容器的边界时如何显示，属性有两个值选择：  
  
- clip：修剪文本  
- ellipsis：显示省略符号来代表被修剪的文本  
  
  
  
### text-shadow  
  
`text-shadow`可向文本应用阴影。能够规定水平阴影、垂直阴影、模糊距离，以及阴影的颜色  
  
  
  
### text-decoration  
  
CSS3里面开始支持对文字的更深层次的渲染，具体有三个属性可供设置：  
  
- text-fill-color: 设置文字内部填充颜色  
  
- text-stroke-color: 设置文字边界填充颜色  
  
- text-stroke-width: 设置文字边界宽度  
  
  
  
### 颜色  
  
`css3`新增了新的颜色表示方式`rgba`与`hsla`  
  
- rgba分为两部分，rgb为颜色值，a为透明度  
- hala分为四部分，h为色相，s为饱和度，l为亮度，a为透明度  
  
  
  
## 四、transition 过渡  
  
`transition`属性可以被指定为一个或多个` CSS `属性的过渡效果，多个属性之间用逗号进行分隔，必须规定两项内容：  
  
- 过度效果  
- 持续时间  
  
语法如下：  
  
```css  
transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0)  
```  
  
上面为简写模式，也可以分开写各个属性  
  
```css  
transition-property: width;   
transition-duration: 1s;  
transition-timing-function: linear;  
transition-delay: 2s;  
```  
  
  
  
### 五、transform 转换  
  
`transform`属性允许你旋转，缩放，倾斜或平移给定元素  
  
`transform-origin`：转换元素的位置（围绕那个点进行转换），默认值为`(x,y,z):(50%,50%,0)`  
  
使用方式：  
  
- transform: translate(120px, 50%)：位移  
- transform: scale(2, 0.5)：缩放  
- transform: rotate(0.5turn)：旋转  
- transform: skew(30deg, 20deg)：倾斜  
  
  
  
### 六、animation 动画  
  
动画这个平常用的也很多，主要是做一个预设的动画。和一些页面交互的动画效果，结果和过渡应该一样，让页面不会那么生硬  
  
animation也有很多的属性  
  
- animation-name：动画名称  
- animation-duration：动画持续时间  
- animation-timing-function：动画时间函数  
- animation-delay：动画延迟时间  
- animation-iteration-count：动画执行次数，可以设置为一个整数，也可以设置为infinite，意思是无限循环  
- animation-direction：动画执行方向  
- animation-paly-state：动画播放状态  
- animation-fill-mode：动画填充模式  
  
  
  
## 七、渐变  
  
颜色渐变是指在两个颜色之间平稳的过渡，`css3`渐变包括  
  
- linear-gradient：线性渐变  
  
> background-image: linear-gradient(direction, color-stop1, color-stop2, ...);  
  
- radial-gradient：径向渐变  
  
> linear-gradient(0deg, red, green);   
  
  
  
## 八、其他  
  
关于`css3`其他的新特性还包括`flex`弹性布局、`Grid`栅格布局，这两个布局在以前就已经讲过，这里就不再展示  
  
除此之外，还包括多列布局、媒体查询、混合模式等等......  
  
  
# 如果使用CSS提高页面性能？  
  
 ![](https://static.vue-js.com/c071c820-9fa3-11eb-ab90-d9ae814b240d.png)  
  
## 一、前言  
  
每一个网页都离不开`css`，但是很多人又认为，`css`主要是用来完成页面布局的，像一些细节或者优化，就不需要怎么考虑，实际上这种想法是不正确的  
  
作为页面渲染和内容展现的重要环节，`css`影响着用户对整个网站的第一体验  
  
因此，在整个产品研发过程中，`css`性能优化同样需要贯穿全程  
  
  
  
## 二、实现方式  
  
  
  
实现方式有很多种，主要有如下：  
  
- 内联首屏关键CSS  
- 异步加载CSS  
- 资源压缩  
- 合理使用选择器  
- 减少使用昂贵的属性  
- 不要使用@import  
  
### 内联首屏关键CSS  
  
在打开一个页面，页面首要内容出现在屏幕的时间影响着用户的体验，而通过内联`css`关键代码能够使浏览器在下载完`html`后就能立刻渲染  
  
而如果外部引用`css`代码，在解析`html`结构过程中遇到外部`css`文件，才会开始下载`css`代码，再渲染  
  
所以，`CSS`内联使用使渲染时间提前  
  
注意：但是较大的`css`代码并不合适内联（初始拥塞窗口、没有缓存），而其余代码则采取外部引用方式  
  
  
  
### 异步加载CSS  
  
在`CSS`文件请求、下载、解析完成之前，`CSS`会阻塞渲染，浏览器将不会渲染任何已处理的内容  
  
前面加载内联代码后，后面的外部引用`css`则没必要阻塞浏览器渲染。这时候就可以采取异步加载的方案，主要有如下：  
  
- 使用javascript将link标签插到head标签最后  
  
```js  
// 创建link标签  
const myCSS = document.createElement( "link" );  
myCSS.rel = "stylesheet";  
myCSS.href = "mystyles.css";  
// 插入到header的最后位置  
document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );  
```  
  
- 设置link标签media属性为noexis，浏览器会认为当前样式表不适用当前类型，会在不阻塞页面渲染的情况下再进行下载。加载完成后，将`media`的值设为`screen`或`all`，从而让浏览器开始解析CSS  
  
```html  
<link rel="stylesheet" href="mystyles.css" media="noexist" onload="this.media='all'">  
```  
  
- 通过rel属性将link元素标记为alternate可选样式表，也能实现浏览器异步加载。同样别忘了加载完成之后，将rel设回stylesheet  
  
```html  
<link rel="alternate stylesheet" href="mystyles.css" onload="this.rel='stylesheet'">  
```  
  
  
  
### 资源压缩  
  
利用`webpack`、`gulp/grunt`、`rollup`等模块化工具，将`css`代码进行压缩，使文件变小，大大降低了浏览器的加载时间  
  
  
  
### 合理使用选择器  
  
`css`匹配的规则是从右往左开始匹配，例如`#markdown .content h3`匹配规则如下：  
  
- 先找到h3标签元素  
- 然后去除祖先不是.content的元素  
- 最后去除祖先不是#markdown的元素  
  
如果嵌套的层级更多，页面中的元素更多，那么匹配所要花费的时间代价自然更高  
  
所以我们在编写选择器的时候，可以遵循以下规则：  
  
- 不要嵌套使用过多复杂选择器，最好不要三层以上  
- 使用id选择器就没必要再进行嵌套  
- 通配符和属性选择器效率最低，避免使用  
  
  
  
### 减少使用昂贵的属性  
  
在页面发生重绘的时候，昂贵属性如`box-shadow`/`border-radius`/`filter`/透明度/`:nth-child`等，会降低浏览器的渲染性能  
  
  
  
### 不要使用@import  
  
css样式文件有两种引入方式，一种是`link`元素，另一种是`@import`  
  
`@import`会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时  
  
而且多个`@import`可能会导致下载顺序紊乱  
  
比如一个css文件`index.css`包含了以下内容：`@import url("reset.css")`  
  
那么浏览器就必须先把`index.css`下载、解析和执行后，才下载、解析和执行第二个文件`reset.css`  
  
  
  
### 其他  
  
- 减少重排操作，以及减少不必要的重绘  
- 了解哪些属性可以继承而来，避免对这些属性重复编写  
- cssSprite，合成所有icon图片，用宽高加上backgroud-position的背景图方式显现出我们要的icon图，减少了http请求  
- 把小的icon图片转成base64编码  
- CSS3动画或者过渡尽量使用transform和opacity来实现动画，不要使用left和top属性  
  
  
  
## 三、总结  
  
`css`实现性能的方式可以从选择器嵌套、属性特性、减少`http`这三面考虑，同时还要注意`css`代码的加载顺序  
  
  
# 怎么使用 CSS3 实现动画？  
  
 ![](https://static.vue-js.com/d12e2380-9c0a-11eb-ab90-d9ae814b240d.png)  
  
## 一、是什么  
  
CSS动画（CSS Animations）是为层叠样式表建议的允许可扩展标记语言（XML）元素使用CSS的动画的模块  
  
即指元素从一种样式逐渐过渡为另一种样式的过程  
  
常见的动画效果有很多，如平移、旋转、缩放等等，复杂动画则是多个简单动画的组合  
  
`css`实现动画的方式，有如下几种：  
  
- transition 实现渐变动画  
- transform 转变动画  
- animation 实现自定义动画  
  
  
## 二、实现方式  
  
### transition 实现渐变动画  
  
`transition`的属性如下：  
  
- property:填写需要变化的css属性  
- duration:完成过渡效果需要的时间单位(s或者ms)  
- timing-function:完成效果的速度曲线  
- delay: 动画效果的延迟触发时间  
  
其中`timing-function`的值有如下：  
  
| 值                            | 描述                                                         |  
| ----------------------------- | ------------------------------------------------------------ |  
| linear                        | 匀速（等于 cubic-bezier(0,0,1,1)）                           |  
| ease                          | 从慢到快再到慢（cubic-bezier(0.25,0.1,0.25,1)）              |  
| ease-in                       | 慢慢变快（等于 cubic-bezier(0.42,0,1,1)）                    |  
| ease-out                      | 慢慢变慢（等于 cubic-bezier(0,0,0.58,1)）                    |  
| ease-in-out                   | 先变快再到慢（等于 cubic-bezier(0.42,0,0.58,1)），渐显渐隐效果 |  
| cubic-bezier(*n*,*n*,*n*,*n*) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值 |  
  
注意：并不是所有的属性都能使用过渡的，如`display:none<->display:block`  
  
举个例子，实现鼠标移动上去发生变化动画效果  
  
```html  
<style>  
       .base {  
            width: 100px;  
            height: 100px;  
            display: inline-block;  
            background-color: #0EA9FF;  
            border-width: 5px;  
            border-style: solid;  
            border-color: #5daf34;  
            transition-property: width, height, background-color, border-width;  
            transition-duration: 2s;  
            transition-timing-function: ease-in;  
            transition-delay: 500ms;  
        }  
  
        /*简写*/  
        /*transition: all 2s ease-in 500ms;*/  
        .base:hover {  
            width: 200px;  
            height: 200px;  
            background-color: #5daf34;  
            border-width: 10px;  
            border-color: #3a8ee6;  
        }  
</style>  
<div class="base"></div>  
```  
  
### transform 转变动画  
  
包含四个常用的功能：  
  
- translate：位移  
- scale：缩放  
- rotate：旋转  
- skew：倾斜  
  
一般配合`transition`过度使用  
  
注意的是，`transform`不支持`inline`元素，使用前把它变成`block`  
  
举个例子  
  
```html  
<style>  
    .base {  
        width: 100px;  
        height: 100px;  
        display: inline-block;  
        background-color: #0EA9FF;  
        border-width: 5px;  
        border-style: solid;  
        border-color: #5daf34;  
        transition-property: width, height, background-color, border-width;  
        transition-duration: 2s;  
        transition-timing-function: ease-in;  
        transition-delay: 500ms;  
    }  
    .base2 {  
        transform: none;  
        transition-property: transform;  
        transition-delay: 5ms;  
    }  
  
    .base2:hover {  
        transform: scale(0.8, 1.5) rotate(35deg) skew(5deg) translate(15px, 25px);  
    }  
</style>  
 <div class="base base2"></div>  
```  
  
可以看到盒子发生了旋转，倾斜，平移，放大  
  
  
  
### animation 实现自定义动画  
  
`animation`是由 8 个属性的简写，分别如下：  
  
| 属性                                   | 描述                                                         | 属性值                                        |  
| -------------------------------------- | ------------------------------------------------------------ | --------------------------------------------- |  
| animation-duration                     | 指定动画完成一个周期所需要时间，单位秒（s）或毫秒（ms），默认是 0 |                                               |  
| animation-timing-function              | 指定动画计时函数，即动画的速度曲线，默认是 "ease"            | linear、ease、ease-in、ease-out、ease-in-out  |  
| animation-delay                        | 指定动画延迟时间，即动画何时开始，默认是 0                   |                                               |  
| animation-iteration-count              | 指定动画播放的次数，默认是 1                                 |                                               |  
| animation-direction 指定动画播放的方向 | 默认是 normal                                                | normal、reverse、alternate、alternate-reverse |  
| animation-fill-mode                    | 指定动画填充模式。默认是 none                                | forwards、backwards、both                     |  
| animation-play-state                   | 指定动画播放状态，正在运行或暂停。默认是 running             | running、pauser                               |  
| animation-name                         | 指定 @keyframes 动画的名称                                   |                                               |  
  
`CSS` 动画只需要定义一些关键的帧，而其余的帧，浏览器会根据计时函数插值计算出来，  
  
通过 `@keyframes` 来定义关键帧  
  
因此，如果我们想要让元素旋转一圈，只需要定义开始和结束两帧即可：  
  
```css  
@keyframes rotate{  
    from{  
        transform: rotate(0deg);  
    }  
    to{  
        transform: rotate(360deg);  
    }  
}  
```  
  
`from` 表示最开始的那一帧，`to` 表示结束时的那一帧  
  
也可以使用百分比刻画生命周期  
  
```css  
@keyframes rotate{  
    0%{  
        transform: rotate(0deg);  
    }  
    50%{  
        transform: rotate(180deg);  
    }  
    100%{  
        transform: rotate(360deg);  
    }  
}  
```  
  
定义好了关键帧后，下来就可以直接用它了：  
  
```css  
animation: rotate 2s;  
```  
  
  
  
  
  
## 三、总结  
  
| 属性               | 含义                                                         |  
| ------------------ | ------------------------------------------------------------ |  
| transition（过度） | 用于设置元素的样式过度，和animation有着类似的效果，但细节上有很大的不同 |  
| transform（变形）  | 用于元素进行旋转、缩放、移动或倾斜，和设置样式的动画并没有什么关系，就相当于color一样用来设置元素的“外表” |  
| translate（移动）  | 只是transform的一个属性值，即移动                            |  
| animation（动画）  | 用于设置动画属性，他是一个简写的属性，包含6个属性            |  
  
# 设备像素、css像素、设备独立像素、dpr、ppi 之间有什么区别？  
 ![](https://static.vue-js.com/c4d9bfd0-91f2-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、背景  
  
在`css`中我们通常使用px作为单位，在PC浏览器中`css`的1个像素都是对应着电脑屏幕的1个物理像素  
  
这会造成一种错觉，我们会认为`css`中的像素就是设备的物理像素  
  
但实际情况却并非如此，`css`中的像素只是一个抽象的单位，在不同的设备或不同的环境中，`css`中的1px所代表的设备物理像素是不同的  
  
当我们做移动端开发时，同为1px的设置，在不同分辨率的移动设备上显示效果却有很大差异  
  
这背后就涉及了css像素、设备像素、设备独立像素、dpr、ppi的概念  
  
## 二、介绍  
  
### CSS像素  
  
CSS像素（css pixel, px）: 适用于web编程，在 CSS 中以 px 为后缀，是一个长度单位  
  
在 CSS 规范中，长度单位可以分为两类，绝对单位以及相对单位  
  
px是一个相对单位，相对的是设备像素（device pixel）  
  
一般情况，页面缩放比为1，1个CSS像素等于1个设备独立像素  
  
`CSS`像素又具有两个方面的相对性：  
  
- 在同一个设备上，每1个 CSS 像素所代表的设备像素是可以变化的（比如调整屏幕的分辨率）  
- 在不同的设备之间，每1个 CSS 像素所代表的设备像素是可以变化的（比如两个不同型号的手机）  
  
在页面进行缩放操作也会 引起`css`中`px`的变化，假设页面放大一倍，原来的 1px 的东西变成 2px，在实际宽度不变的情况下1px 变得跟原来的 2px 的长度（长宽）一样了（元素会占据更多的设备像素）  
  
假设原来需要 320px 才能填满的宽度现在只需要 160px  
  
px会受到下面的因素的影响而变化：  
  
- 每英寸像素（PPI）  
- 设备像素比（DPR）  
  
  
### 设备像素  
  
设备像素（device pixels），又称为物理像素  
  
指设备能控制显示的最小物理单位，不一定是一个小正方形区块，也没有标准的宽高，只是用于显示丰富色彩的一个“点”而已  
  
可以参考公园里的景观变色彩灯，一个彩灯(物理像素)由红、蓝、绿小灯组成，三盏小灯不同的亮度混合出各种色彩  
  
 ![](https://static.vue-js.com/cffc6570-91f2-11eb-ab90-d9ae814b240d.png)  
  
从屏幕在工厂生产出的那天起，它上面设备像素点就固定不变了，单位为`pt`  
  
  
  
### 设备独立像素  
  
设备独立像素（Device Independent Pixel）：与设备无关的逻辑像素，代表可以通过程序控制使用的虚拟像素，是一个总体概念，包括了CSS像素  
  
在`javaScript`中可以通过`window.screen.width/ window.screen.height` 查看  
  
比如我们会说“电脑屏幕在 2560x1600分辨率下不适合玩游戏，我们把它调为 1440x900”，这里的“分辨率”（非严谨说法）指的就是设备独立像素  
  
一个设备独立像素里可能包含1个或者多个物理像素点，包含的越多则屏幕看起来越清晰  
  
至于为什么出现设备独立像素这种虚拟像素单位概念，下面举个例子：  
  
iPhone 3GS 和 iPhone 4/4s 的尺寸都是 3.5 寸，但 iPhone 3GS 的分辨率是 320x480，iPhone 4/4s 的分辨率是 640x960  
  
这意味着，iPhone 3GS 有 320 个物理像素，iPhone 4/4s 有 640 个物理像素  
  
如果我们按照真实的物理像素进行布局，比如说我们按照 320 物理像素进行布局，到了 640 物理像素的手机上就会有一半的空白，为了避免这种问题，就产生了虚拟像素单位  
  
我们统一 iPhone 3GS 和 iPhone 4/4s 都是 320 个虚拟像素，只是在 iPhone 3GS 上，最终 1 个虚拟像素换算成 1 个物理像素，在 iphone 4s 中，1 个虚拟像素最终换算成 2 个物理像素  
  
至于 1 个虚拟像素被换算成几个物理像素，这个数值我们称之为设备像素比，也就是下面介绍的`dpr`  
  
  
### dpr  
  
dpr（device pixel ratio），设备像素比，代表设备独立像素到设备像素的转换关系，在`JavaScript`中可以通过 `window.devicePixelRatio` 获取  
  
计算公式如下：  
  
 ![](https://static.vue-js.com/dd45e2b0-91f2-11eb-ab90-d9ae814b240d.png)  
  
当设备像素比为1:1时，使用1（1×1）个设备像素显示1个CSS像素  
  
当设备像素比为2:1时，使用4（2×2）个设备像素显示1个CSS像素  
  
当设备像素比为3:1时，使用9（3×3）个设备像素显示1个CSS像素  
  
如下图所示：  
  
![](https://static.vue-js.com/e63cceb0-91f2-11eb-ab90-d9ae814b240d.png)  
  
当`dpr`为3，那么`1px`的`CSS`像素宽度对应`3px`的物理像素的宽度，1px的`CSS`像素高度对应`3px`的物理像素高度  
  
  
  
### ppi  
  
ppi （pixel per inch），每英寸像素，表示每英寸所包含的像素点数目，更确切的说法应该是像素密度。数值越高，说明屏幕能以更高密度显示图像  
  
计算公式如下：  
  
 ![](https://static.vue-js.com/f734adf0-91f2-11eb-ab90-d9ae814b240d.png)  
  
  
  
## 三、总结  
  
无缩放情况下，1个CSS像素等于1个设备独立像素  
  
设备像素由屏幕生产之后就不发生改变，而设备独立像素是一个虚拟单位会发生改变  
  
PC端中，1个设备独立像素 = 1个设备像素 （在100%，未缩放的情况下）  
  
在移动端中，标准屏幕（160ppi）下 1个设备独立像素 = 1个设备像素  
  
设备像素比（dpr） = 设备像素 / 设备独立像素  
  
每英寸像素（ppi），值越大，图像越清晰  
  
# em/px/rem/vh/vw 这些单位有什么区别？  
![](https://static.vue-js.com/51b036e0-9131-11eb-85f6-6fac77c0c9b3.png)  
## 一、介绍  
  
传统的项目开发中，我们只会用到`px`、`%`、`em`这几个单位，它可以适用于大部分的项目开发，且拥有比较良好的兼容性  
  
从`CSS3`开始，浏览器对计量单位的支持又提升到了另外一个境界，新增了`rem`、`vh`、`vw`、`vm`等一些新的计量单位  
  
利用这些新的单位开发出比较良好的响应式页面，适应多种不同分辨率的终端，包括移动设备等  
  
## 二、单位  
  
在`css`单位中，可以分为长度单位、绝对单位，如下表所指示  
  
| CSS单位      |                                        |  
| ------------ | -------------------------------------- |  
| 相对长度单位 | em、ex、ch、rem、vw、vh、vmin、vmax、% |  
| 绝对长度单位 | cm、mm、in、px、pt、pc                 |  
  
这里我们主要讲述px、em、rem、vh、vw  
  
### px  
  
px，表示像素，所谓像素就是呈现在我们显示器上的一个个小点，每个像素点都是大小等同的，所以像素为计量单位被分在了绝对长度单位中  
  
有些人会把`px`认为是相对长度，原因在于在移动端中存在设备像素比，`px`实际显示的大小是不确定  
  
这里之所以认为`px`为绝对单位，在于`px`的大小和元素的其他属性无关  
  
### em  
  
em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸（`1em = 16px`）  
  
为了简化 `font-size` 的换算，我们需要在` css `中的 `body` 选择器中声明` font-size `= `62.5%`，这就使 em 值变为 `16px*62.5% = 10px`  
  
这样 `12px = 1.2em`, `10px = 1em`, 也就是说只需要将你的原来的` px` 数值除以 10，然后换上 `em `作为单位就行了  
  
特点：  
  
- em 的值并不是固定的  
- em 会继承父级元素的字体大小  
- em 是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸  
- 任意浏览器的默认字体高都是 16px  
  
举个例子  
  
```html  
<div class="big">  
    我是14px=1.4rem  
    <div class="small">我是12px=1.2rem</div>  
</div>  
```  
  
样式为  
  
```css  
<style>  
html {font-size: 10px;  } /*  公式16px*62.5%=10px  */    
.big{font-size: 1.4rem}  
.small{font-size: 1.2rem}  
</style>  
```  
  
这时候`.big`元素的`font-size`为14px，而`.small`元素的`font-size`为12px  
  
### rem  
  
rem，相对单位，相对的只是HTML根元素`font-size`的值  
  
同理，如果想要简化`font-size`的转化，我们可以在根元素`html`中加入`font-size: 62.5%`  
  
```css  
html {font-size: 62.5%;  } /*  公式16px*62.5%=10px  */   
```  
  
这样页面中1rem=10px、1.2rem=12px、1.4rem=14px、1.6rem=16px;使得视觉、使用、书写都得到了极大的帮助  
  
特点：  
  
- rem单位可谓集相对大小和绝对大小的优点于一身  
- 和em不同的是rem总是相对于根元素，而不像em一样使用级联的方式来计算尺寸  
  
### vh、vw  
  
vw ，就是根据窗口的宽度，分成100等份，100vw就表示满宽，50vw就表示一半宽。（vw 始终是针对窗口的宽），同理，`vh`则为窗口的高度  
  
这里的窗口分成几种情况：  
  
- 在桌面端，指的是浏览器的可视区域  
- 移动端指的就是布局视口  
  
像`vw`、`vh`，比较容易混淆的一个单位是`%`，不过百分比宽泛的讲是相对于父元素：  
  
对于普通定位元素就是我们理解的父元素  
- 对于position: absolute;的元素是相对于已定位的父元素  
- 对于position: fixed;的元素是相对于 ViewPort（可视窗口）  
  
## 三、总结  
  
**px**：绝对单位，页面按精确像素展示  
  
**em**：相对单位，基准点为父节点字体的大小，如果自身定义了`font-size`按自身来计算，整个页面内`1em`不是一个固定的值  
  
**rem**：相对单位，可理解为`root em`, 相对根节点`html`的字体大小来计算  
  
**vh、vw**：主要用于页面视口大小布局，在页面布局上更加方便简单  
# 说说你对盒子模型的理解  
![](https://static.vue-js.com/8d0e9ca0-8f9b-11eb-ab90-d9ae814b240d.png)  
  
## 一、是什么  
  
当对一个文档进行布局（layout）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）  
  
一个盒子由四个部分组成：`content`、`padding`、`border`、`margin`  
  
![](https://static.vue-js.com/976789a0-8f9b-11eb-85f6-6fac77c0c9b3.png)\r\n\r\n`content`，即实际内容，显示文本和图像  
  
* `boreder`，即边框，围绕元素内容的内边距的一条或多条线，由粗细、样式、颜色三部分组成  
* `padding`，即内边距，清除内容周围的区域，内边距是透明的，取值不能为负，受盒子的`background`属性影响  
* `margin`，即外边距，在元素外创建额外的空白，空白通常指不能放其他元素的区域  
  
上述是一个从二维的角度观察盒子，下面再看看看三维图：  
  
![](https://static.vue-js.com/b2548b00-8f9b-11eb-ab90-d9ae814b240d.png)  
  
下面来段代码：  
```html  
<style>  
.box {  
	width: 200px;  
	height: 100px;  
	padding: 20px;  
}  
</style>  
  
<div class=\"box\">  
盒子模型  
</div>  
```  
  
当我们在浏览器查看元素时，却发现元素的大小变成了`240px`  
  
这是因为，在`CSS`中，盒子模型可以分成：  
  
- W3C 标准盒子模型  
- IE 怪异盒子模型  
  
默认情况下，盒子模型为`W3C` 标准盒子模型  
  
## 二、标准盒子模型  
  
标准盒子模型，是浏览器默认的盒子模型  
  
下面看看标准盒子模型的模型图：  
  
![](https://static.vue-js.com/c0e1d2e0-8f9b-11eb-85f6-6fac77c0c9b3.png)  
  
从上图可以看到：  
  
- 盒子总宽度 = width + padding + border + margin;  
- 盒子总高度 = height + padding + border + margin  
  
也就是，`width/height` 只是内容高度，不包含 `padding` 和 `border `值  
  
所以上面问题中，设置`width`为200px，但由于存在`padding`，但实际上盒子的宽度有240px  
  
## 三、IE 怪异盒子模型  
  
同样看看IE 怪异盒子模型的模型图：  
  
![](https://static.vue-js.com/cfbb3ef0-8f9b-11eb-ab90-d9ae814b240d.png)  
  
从上图可以看到：  
  
- 盒子总宽度 = width + margin;  
- 盒子总高度 = height + margin;  
  
也就是，`width/height` 包含了 `padding `和 `border `值  
  
## Box-sizing  
  
CSS 中的 box-sizing 属性定义了引擎应该如何计算一个元素的总宽度和总高度  
  
语法：  
  
```css  
box-sizing: content-box|border-box|inherit;  
```  
  
- content-box 默认值，元素的 width/height 不包含padding，border，与标准盒子模型表现一致  
- border-box 元素的 width/height 包含 padding，border，与怪异盒子模型表现一致  
- inherit 指定 box-sizing 属性的值，应该从父元素继承  
  
回到上面的例子里，设置盒子为 border-box 模型  
  
```html  
<style>  
.box {  
	width: 200px;  
	height: 100px;  
    padding: 20px;  
    box-sizing: border-box;  
}  
</style>  
<div class=\"box\">  
盒子模型  
</div>  
```  
  
这时候，就可以发现盒子的所占据的宽度为200px  
