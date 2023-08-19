# title与h1的区别、b与strong的区别、i与em的区别？  
在 HTML 中，title、h1、b、strong、i 和 em 都是文本相关的标记，它们之间有一些相似之处，但也有一些重要的区别。  
  
## title 和 h1 的区别  
  
1. 用途不同：title 标签用于定义 HTML 文档的标题，通常会显示在浏览器的标签页上或者窗口的标题栏上，对于搜索引擎优化（SEO）也非常重要。而 h1 标签用于表示文档的主标题，通常显示在页面内容区域的顶部。  
  
2. 所在位置不同：title 标签应该放在 `<head>` 标签内，而 h1 标签则应该放在 `<body>` 标签内。  
  
3. 格式和样式不同：title 标签中的文本通常比较短，并且不需要进行格式化、排版等操作；而 h1 标签中的文本通常比较长，并且需要进行合适的格式化、排版和样式设置，以便使其适应页面布局和设计风格。  
  
## b 和 strong 的区别  
  
b 标记用于指定文本加粗的外观效果，通常只是为了强调关键词或短语，没有特别强的语义化含义。而 strong 标记则表示文本的强调重点，具有更强的语义化含义，并且可以改变文本的语调和读音等方面。  
  
## i 和 em 的区别  
  
i 标记用于指定文本斜体的外观效果，通常只是为了强调关键词或短语，没有特别强的语义化含义。而 em 标记则表示文本的重要性，具有更强的语义化含义，并且可以改变文本的语调和读音等方面。  
  
## 最后  
  
需要注意的是，在 HTML5 中，b 和 i 标记已经被废弃，推荐使用 strong 和 em 标记来代替。同时，随着搜索引擎的发展和语义化网页的兴起，h1-h6 标记也被赋予了更重要的语义化含义，应该根据具体情况来选择使用不同的标记。  
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
  
# script 标签为什么建议放在 body 标签的底部（defer、async）  
因为浏览器在渲染html的时候是从上到下执行的，当遇到js文件的时候就会停止当前页面的渲染，转而去下载js文件。  
  
如果将script标签放在头部，在文件很大的情况下将导致首屏加载时间延长，影响用户体验。  
  
## 解决办法  
  
* 将script标签放在body的底部  
* 通过defer、async属性将js文件转为异步加载  
  
# 说说你对 SSG 的理解  
SSG（Static Site Generation，静态网站生成）是指在构建时预先生成静态页面，并将这些页面部署到 CDN 或者其他存储服务中，以提升 Web 应用的性能和用户体验。  
  
具体来说，SSG 的实现方式通常包括以下几个步骤：  
  
1. 在开发阶段，使用模板引擎等技术创建静态页面模板；  
2. 将需要展示的数据从后台 API 中获取或者通过其他渠道获取，并将其填充到静态页面模板中，生成完整的 HTML 页面；  
3. 使用构建工具（例如 Gatsby、Next.js 等）对静态页面进行构建，生成静态 HTML、CSS 和 JavaScript 文件；  
4. 部署生成好的静态文件到服务器或者 CDN 上，以供用户访问。  
  
相比于传统的动态网页，SSG 具有如下优势：  
  
1. 加载速度快：由于不需要每次请求都动态地渲染页面，SSG 可以减少页面加载时间，从而提高用户体验和搜索引擎排名；  
2. 安全性高：由于没有后台代码和数据库，SSG 不容易受到 SQL 注入等攻击；  
3. 成本低：由于不需要动态服务器等设备，SSG 可以降低网站的运维成本和服务器负担。  
  
需要注意的是，SSG 不适用于频繁更新的内容和动态交互等场景，但对于内容较为稳定和更新较少的网站则是一个性能优化的好选择。  
# 跨域时怎么处理 cookie？  
一个请求从发出到返回，需要浏览器和服务端的协调配合。浏览器要把自己的请求参数带给服务端，服务端校验参数之后，除了返回数据，也可能会顺便把请求是否缓存，cookie等信息告诉浏览器。当请求是跨域请求的时候，这个过程还要复杂一些。接下来咱们就看看跨域会有什么问题，又需要前后端进行怎样的配合。  
  
### 普通跨域  
  
我有一个朋友，叫小王。前端小王和后端同事小马准备联调一个登录的api。假设是`/login`;小王在把登录账号和密码都准备好之后，愉快的发起了post提交。结果很意外，请求的响应被浏览器拦截了，浏览器还贴心的在console上抛出了一个错误。    
  
![image](https://pic.rmb.bdstatic.com/bjh/43f9059f0a8e824e492b2d05bb12f066.png)    
  
小王翻译了一下，原来是被CORS策略拦截掉了。这个策略大概意思是说，服务端如果允许不同origin的请求，那就需要在返回的response header里面带上`Access-Control-Allow-Origin`这个header。否则浏览器在拿到响应并发现响应头里没有这个header时，就会把响应给吞掉，而不会交给js进行下一步处理。  
  
小王把这个事情告诉了小马，然后小马在返回的header中加上了  
  
```makefile  
Access-Control-Allow-Origin: *  
```  
  
现在小王终于可以拿到返回的结果了。  
  
> 这里要注意，浏览器不是在请求阶段就对请求进行拦截，而是正常发出请求，拿到服务端的响应之后，开始查看响应header里面有没有`Access-Control-Allow-Origin`这个header，如果没有，响应的结果就不会到js那里去。  
  
### 非简单请求的跨域  
  
后来小王觉得在post中发送表单格式的body太麻烦，希望使用JSON格式的请求体提交。小马觉得就是几行代码的事，就同意了。但是小王改成JSON的消息体之后发现又被CORS拦截了，并抛出了下面的错误：    
  
![image](https://pic.rmb.bdstatic.com/bjh/4e5331af46fd53f9e16744139fd15728.png)  
  
在上面的报错中，我们看到了 preflight 的单词。那这又是怎么回事呢？原来，修改请求体之后，这个跨域请求不再是简单请求了，需要在发起请求之前先进行 preflight 请求。那么什么是简单请求呢？  
  
* 请求方法包括`GET`, `HEAD`, `POST`  
* response header里面不能包含[cors安全header](https://fetch.spec.whatwg.org/#cors-safelisted-request-header)以外的header。  
* Content-Type 只限于`text/plain`, `multipart/form-data`, `application/x-www-form-urlencoded`  
  
由于json数据的content-type导致这个post请求不再是简单请求，而对于非简单请求，之前允许所有域名跨域访问是被禁止的。所以还是要修改`Access-Control-Allow-Origin`为特定的请求域名。在开发模式下，可能是`http://localhost:3000`之类的。  
  
小马在重新修改`Access-Control-Allow-Origin`，小王又拿到了登录成功的结果。可以联调下一个api了。  
  
### 带cookie的跨域  
  
登录是基于session的，也就是说，登录成功后，server会通过`set-cookie`，将cookie设置到浏览器中，这样，下次访问同源下的api时，cookie就会被带上。  
  
然而，奇怪的是，小王发现登录成功后，调用别的接口，cookie并没有被带上，导致server无法识别出用户信息，最终返回错误（状态码为401）。  
  
### withCredentials  
  
原来，浏览器发起**跨域请求**的时候，是不会主动带上cookie的，如果一个请求需要cookie，需要开发者设置一个选项，以fetch api为例：  
  
```js  
fetch('http://baidu.com:3000', {  
    // ...  
	credentials: 'include'  
})  
  
```  
  
如果使用xhr api来请求，则需要这样写：  
  
```js  
var invocation = new XMLHttpRequest();  
var url = 'http://bar.other/resources/credentialed-content/';  
  
function callOtherDomain(){  
  if(invocation) {  
    invocation.open('GET', url, true);  
    invocation.withCredentials = true; // 带上cookie  
    invocation.onreadystatechange = handler;  
    invocation.send();  
  }  
}  
  
```  
  
小王在设置请求之后又发起了一次请求。却发现cookie还是没有带上去。小王只好在MDN继续查看资料，发现在set-cookie时需要带一个sameSite的属性。  
  
### sameSite  
  
sameSite是为了防止csrf攻击而产生的属性，如果不知道啥是CSRF攻击，可以自己先去查一下。  
  
由于我们需要在请求中带上cookie，所以需要在set-cookie时将cookie的sameSite设置为none；又由于将sameSite设置为none时，也需要将Secure设置上，所以请求需要基于https;  
  
小王最后一次请求小马对api进行了上诉更改，服务器终于认出请求来自谁，并返回了正确的结果，跨域的踩坑之旅算是告一段落。  
  
### 总结  
  
很多时候，我们可能只会关注请求体是什么，响应有没有正确返回，而忽略了header部分。殊不知，header在缓存，web安全，浏览器正确解析结果中发挥了重要的作用，比如本文中的一系列`Access-Control-Allow-*`的header。  
  
为了让web更安全，CORS还在不断地更新，比如这个[提案](https://web.dev/cors-rfc1918-feedback/)，规定从公网到私网，或者从私网访问local network时，需要设置跨域头，`Access-Control-Allow-Private-Network`。  
  
# 什么是HTML5，以及和HTML的区别是什么？  
HTML5是HTML的新标准，其主要目标是无需任何额外的插件如Flash、Silverlight等，就可以传输所有内容。它囊括了动画、视频、丰富的图形用户界面等。  
  
HTML5是由万维网联盟（W3C）和 `Web Hypertext Application Technology Working Group` 合作创建的HTML新版本。  
  
## 区别  
  
从文档声明类型上看：  
  
HTML是很长的一段代码，很难记住。如下代码：  
```html  
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">  
<html xmlns="http://www.w3.org/1999/xhtml">  
```  
  
HTML5却只有简简单单的声明，方便记忆。如下：  
  
```  
<!DOCTYPE html>  
```  
  
从语义结构上看：  
  
* HTML4.0：没有体现结构语义化的标签，通常都是这样来命名的 `<div id="header"></div>`，这样表示网站的头部。  
* HTML5：在语义上却有很大的优势。提供了一些新的标签，比如：`<header><article><footer>`。  
  
## 拓展  
  
不输入<!DOCTYPE html>，浏览器将无法识别html文件，因此html将无法正常工作。  
# 说说你对 Dom 树的理解  
## 什么是 DOM  
  
从网络传给渲染引擎的 HTML 文件字节流是无法直接被渲染引擎理解的，所以要将其转化为渲染引擎能够理解的内部结构，这个结构就是 DOM。  
  
DOM 提供了对 HTML 文档结构化的表述。  
  
在渲染引擎中，DOM 有三个层面的作用：  
  
* 从页面的视角来看，DOM 是生成页面的基础数据结构。  
* 从 JavaScript 脚本视角来看，DOM 提供给 JavaScript 脚本操作的接口，通过这套接口，JavaScript 可以对 DOM 结构进行访问，从而改变文档的结构、样式和内容。  
* 从安全视角来看，DOM 是一道安全防护线，一些不安全的内容在 DOM 解析阶段就被拒之门外了。  
  
简言之，DOM 是表述 HTML 的内部数据结构，它会将 Web 页面和 JavaScript 脚本连接起来，并过滤一些不安全的内容。  
  
## DOM树如何生成  
  
HTML 解析器（HTMLParser）： 负责将 HTML 字节流转换为 DOM 结构。  
  
那么网络进程是如何将数据传给HTML解析器的呢？  
  
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab3155a080d04fb49db24c63ca7cff0a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)  
  
从图中我们可以知道，网络进程和渲染进程之间有一个共享数据通道，网络进程加载了多少数据， 就将数据传给HTML解析器进行解析。  
  
HTML解析器接收到数据（字节流）之后，字节流将转化成DOM，过程如下：  
  
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1538923ce3454674ab011fafc57ba7d4~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)  
  
**有三个阶段**：  
  
1、通过分词器将字节流转化为Token。 分词器先将字节流转换为一个个 Token，分为 Tag Token 和文本 Token。  
  
注意，这里的Token并不是我们之前理解的Token，这里就是一个片段。  
  
2、Token解析为DOM节点。  
  
3、将 DOM节点添加到DOM树中。  
  
## JavaScript影响DOM的生成  
  
我们知道，JavaScript可以修改DOM，它也会影响DOM的生成。  
  
1、内嵌 JavaScript 脚本 比如我们嵌入了一段`<script>`标签的代码，之前的解析过程都一样，但是解析到script标签时， 渲染引擎判断这是一段脚本，此时 HTML 解析器就会**暂停 DOM 的解析**， 因为接下来的 JavaScript 可能要修改当前已经生成的 DOM 结构。  
  
暂停解析之后，JavaScript 引擎介入，并**执行`<script>`标签中的这段脚本**。 脚本执行完成之后，HTML 解析器恢复解析过程，继续解析后续的内容，直至生成最终的 DOM。  
  
2、引入 JavaScript 文件 基本上跟之前是一致的，不同点在于，暂停解析之后执行JavaScript 代码，需要**先下载这段 JavaScript 代码**。  
  
# 什么是渐进增强和优雅降级？  
渐进增强（progressive enhancement）：主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再针对高级浏览器进行效果，交互等方面的改进和追加功能，以达到更好的用户体验。  
  
优雅降级 graceful degradation： 一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。  
  
## 区别  
  
* 优雅降级是从复杂的现状开始的，并试图减少用户体验的供给；而渐进增强是从一个非常基础的，能够起作用的版本开始的，并在此基础上不断扩充，以适应未来环境的需要；  
* 优雅降级（功能衰竭）意味着往回看，而渐进增强则意味着往前看，同时保证其根基处于安全地带。  
  
# Node 和 Element 是什么关系？  
## Node与Element的关系  
  
Node与Element的关系，从继承方面思考可能清晰很多。  
  
Element 继承于 Node，具有Node的方法，同时又拓展了很多自己的特有方法。  
  
在Element的一些方法里，是明确区分了Node和Element的。比如说：childNodes与 children, parentNode与parentElement等方法。  
  
Node的一些方法，返回值为Node，比如说文本节点，注释节点之类的，而Element的一些方法，返回值则一定是Element。  
  
区分清楚这点了，也能避免很多低级问题。  
  
简单的说就是Node是一个基类，DOM中的`Element`，`Text和Comment`都继承于它。换句话说，`Element`，`Text`和`Comment`是三种特殊的Node，它们分别叫做`ELEMENT_NODE`,`TEXT_NODE`和`COMMENT_NODE`。  
  
所以我们平时使用的 html上的元素，即`Element`，是类型为`ELEMENT_NODE`的`Node`。  
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
# 如何控制 input 输入框的输入字数？  
  
 一般是通过 maxlength 属性进行限制：  
   
 ```js  
 <input maxlength="5" />  
 ```  
   
 另外还可以通过监听 `οninput` 事件，对输入值进行处理。  
# 渐进式jpg有了解过吗？  
渐进式 JPEG（Progressive JPEG），即PJPEG，是该标准的三种流行压缩模式之一。  
  
渐进式 JPEG 以特定方式压缩照片和图形，与基线 JPEG 不同，PJPEG 在 Web 浏览器中呈现时，会首先给出模糊图像的外观。然后一点一点地开始图片渲染，直到它显示完全渲染的图像。浏览器实际上是逐行解释图像，但在占位符中提供了完整图像的模糊预览。随着 Web 浏览器的渲染引擎处理数据，图像的对比度开始变得更清晰、更详细。直到最后渲染完毕，用户将看到完整的清晰图像。  
  
PJPEG 能够起到一种很有意义的心理效果，让用户有东西可看，而不必坐着干等大型图像慢慢显示在屏幕上。  
  
PJPEG 适用于大部分常用的浏览器，包括 `Chrome`、`Firefox` 和 `Internet Explorer 9` 及更高版本。旧版本的 Internet Explorer 在显示渐进式 JPEG 时存在一些问题，不过这只是很小一部分用户。而不支持渐进式 JPEG 格式的浏览器会像普通 JPEG 一样加载照片。  
# 假设我要上传图片，怎么在选择图片后，通过浏览器预览待上传的图片？  
实现预览有两种方式：  
  
* 一种是用 `window.URL.createObjectURl` 方法对选择的图片数据（可以勉强理解为input的value）生成一个blob对象路径  
* 第二种是使用 `FileReader` 读取器  
  
那么无论那种方法，首先都得得到文件数据，获得文件数据是从files集合中获取。  
  
先来看下 `window.URL.createObjectURl` 的实现方法：  
  
```js  
function imgChange(img) {  
 document.querySelector("img").src=window.URL.cteateObejectURL(img.files[0]);  
}  
```  
  
而使用	`FileRader` 读取文件.可分为四步；  
  
1. 创建 `FileReader` 对像；  
2. 调用 `readAsDataURL` 方法读取文件；  
3. 调用 `onload` 事件监听。因为我们需要拿到完整的数据，但我们又不知道文件何时读完，所以需要第三步监听；  
4. 通过 `FileReader` 的 `result` 属性拿到读取结果。  
  
```js  
function imgChange(img) {  
    // 生成一个文件读取的对象  
    const reader = new FileReader();  
    reader.onload = function (ev) {  
        document.querySelector("img").src = imgFile;  
    }  
    //发起异步读取文件请求，读取结果为data:url的字符串形式，  
    reader.readAsDataURL(img.files[0]);  
}  
```  
  
# 怎么实现“点击回到顶部”的功能？  
 下面介绍5种方法进行实现。  
   
## 1、锚点  
  
使用锚点链接是一种简单的返回顶部的功能实现。  
  
该实现主要在页面顶部放置一个指定名称的锚点链接，然后在页面下方放置一个返回到该锚点的链接，用户点击该链接即可返回到该锚点所在的顶部位置。  
  
```html  
<body style="height:2000px;">  
    <div id="topAnchor"></div>  
    <a href="#topAnchor" style="position:fixed;right:0;bottom:0">回到顶部</a>  
</body>  
```  
  
## 2、scrollTop  
  
scrollTop属性表示被隐藏在内容区域上方的像素数。  
  
元素未滚动时，scrollTop的值为0，如果元素被垂直滚动了，scrollTop的值大于0，且表示元素上方不可见内容的像素宽度  
  
由于scrollTop是可写的，可以利用scrollTop来实现回到顶部的功能  
  
```html  
<body style="height:2000px;">  
    <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>  
    <script>  
        test.onclick = function(){  
            document.body.scrollTop = document.documentElement.scrollTop = 0;  
        }  
    </script>  
</body>  
```  
  
## 3、scrollTo  
  
scrollTo(x,y)方法滚动当前window中显示的文档，让文档中由坐标x和y指定的点位于显示区域的左上角  
  
设置scrollTo(0,0)可以实现回到顶部的效果  
  
```html  
<body style="height:2000px;">  
    <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>  
    <script>  
        test.onclick = function(){  
            scrollTo(0,0);  
        }  
    </script>  
</body>  
```  
  
## 4、scrollBy()  
  
scrollBy(x,y)方法滚动当前window中显示的文档，x和y指定滚动的相对量  
  
只要把当前页面的滚动长度作为参数，逆向滚动，则可以实现回到顶部的效果  
  
```html  
<body style="height:2000px;">  
    <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>  
    <script>  
        test.onclick = function(){  
            var top = document.body.scrollTop || document.documentElement.scrollTop  
            scrollBy(0,-top);  
        }  
    </script>  
</body>  
```  
  
## 5、scrollIntoView()  
  
Element.scrollIntoView方法滚动当前元素，进入浏览器的可见区域　  
  
该方法可以接受一个布尔值作为参数。如果为true，表示元素的顶部与当前区域的可见部分的顶部对齐（前提是当前区域可滚动）；如果为false，表示元素的底部与当前区域的可见部分的尾部对齐（前提是当前区域可滚动）。如果没有提供该参数，默认为true  
  
使用该方法的原理与使用锚点的原理类似，在页面最上方设置目标元素，当页面滚动时，目标元素被滚动到页面区域以外，点击回到顶部按钮，使目标元素重新回到原来位置，则达到预期效果  
  
```html  
<body style="height:2000px;">  
    <div id="target"></div>  
    <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>  
    <script>  
        test.onclick = function(){  
            target.scrollIntoView();  
        }  
    </script>  
</body>  
```  
  
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
# SPA应用怎么进行SEO？  
## 概述  
  
SPA全名是`Single Page Application`，指的是单页面应用。  
  
SEO全称为`Search Engine Optimization`，指的是搜索引擎优化。  
  
SPA技术将产出html的逻辑从服务器转移到了客户端，在进入React, Vue等UI框架进行开发时，我们开发的页面更多的是在客户端进行脚本执行、数据请求和UI动态装载。  
  
那么搜索引擎爬虫在抓取这样的页面的时，在未做任何优化的情况下，通常拿到的是类似下面的字符文本：  
  
```js  
<!DOCTYPE html>  
<html lang="zh-CN">  
<head>  
    <meta charset="UTF-8">  
    <title>title</title>  
</head>  
<body>  
<div id="root"></div>  
<script src="index.js"></script>  
</body>  
</html>  
```  
  
除了可以事先定义的title（可能title也不能事先确定），在SPA下很多内容需要通过ajax请求server拿到数据通过脚本执行产生。通常爬虫不会有类似浏览器的执行环境去产生这些内容。  
  
那么如何让爬虫拿到的数据和用户通过浏览器看到的数据尽量是一致？  
  
## SPA的优缺点  
  
优点：用户体验好，前后端代码分离，利于后期的维护  
  
缺点：seo不好，首次加载时长比较久，导航需要自己去实现前进后退。  
  
## SPA如何解决SEO的问题  
  
* SSR 服务端渲染  
  
优点：首屏加载快(因为服务器返回的网页已经包含数据, 所以之下载完JS/CSS就可以直接渲染)。每次请求返回的都是一个独立完成的网页, 更利于SEO。  
  
缺点就是服务器压力会比较大，对网络要求比较大，  
  
## 预渲染  
  
无需服务器实时动态编译，采用预渲染，在构建时针对特定路由简单的生成静态HTML文件  
  
本质就是客户端渲染, 只不过和SPA不同的是预渲染有多个界面  
  
最大优点: 由于有多个界面, 所以更利于SEO  
  
最大缺点: 首屏加载慢, 预编译会非常的慢  
  
  
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
  
# 如何实现SEO优化  
SEO主要分为内部和外部两个方向。  
  
## 一、内部优化  
  
* META 标签优化：例如：TITLE，KEYWORDS，DESCRIPTION （TDK）等的优化  
* 内部链接的优化，包括相关性链接（Tag 标签），锚文本链接，各导航链接，及图片链接  
* 网站内容更新：每天保持站内的更新(主要是文章的更新等)  
* 服务器端渲染（SSR）  
  
## 二、外部优化  
  
* 外部链接类别：博客、论坛、B2B、新闻、分类信息、贴吧、知道、百科、相关信息网等尽量保持链接的多样性  
* 外链运营：每天添加一定数量的外部链接，使关键词排名稳定提升。  
* 外链选择：与一些和你网站相关性比较高,整体质量比较好的网站交换友情链接,巩固稳定关键词排名  
  
# SEO是什么？  
SEO（Search Engine Optimization），汉译为搜索引擎优化。  
  
搜索引擎优化是一种利用搜索引擎的搜索规则来提高目前网站在有关搜索引擎内的自然排名的方式。  
  
SEO是指为了从搜索引擎中获得更多的免费流量，从网站结构、内容建设方案、用户互动传播、页面等角度进行合理规划，使网站更适合搜索引擎的索引原则的行为。  
  
# SEO的原理是什么？  
搜索引擎排名大致上可以分为四个步骤。  
  
## 爬行和抓取  
  
搜索引擎派出一个能够在网上发现新网页并抓取文件的程序，这个程序通常被称为蜘蛛或机器人。  
  
搜索引擎蜘蛛从数据库中已知的网页开始出发，就像正常用户的浏览器一样访问这些网页并抓取文件。  
  
并且搜索引擎蜘蛛会跟踪网页上的链接，访问更多网页，这个过程就叫爬行。  
  
当通过链接发现有新的网址时，蜘蛛将把新网址记录入数据库等待抓取。  
  
跟踪网页链接是搜索引擎蜘蛛发现新网址的最基本方法，所以反向链接成为搜索引擎优化的最基本因素之一。  
  
没有反向链接，搜索引擎连页面都发现不了，就更谈不上排名了。  
  
搜索引擎蜘蛛抓取的页面文件与用户浏览器得到的完全一样，抓取的文件存入数据库。  
  
## 索引  
  
搜索引擎索引程序把蜘蛛抓取的网页文件分解、分析，并以巨大表格的形式存入数据库，这个过程就是索引。在索引数据库中，网页文字内容，关键词出现的位置、字体、颜色、加粗、斜体等相关信息都有相应记录。  
  
搜索引擎索引数据库存储巨量数据，主流搜索引擎通常都存有几十亿级别的网页。  
  
## 搜索词处理  
  
用户在搜索引擎界面输入关键词，单击“搜索”按钮后，搜索引擎程序即对输入的搜索词进行处理，如中文特有的分词处理，对关键词词序的分别，去除停止词，判断是否需要启动整合搜索，判断是否有拼写错误或错别字等情况。搜索词的处理必须十分快速。  
  
## 排序  
  
对搜索词进行处理后，搜索引擎排序程序开始工作，从索引数据库中找出所有包含搜索词的网页，并且根据排名计算法计算出哪些网页应该排在前面，然后按一定格式返回“搜索”页面。  
  
排序过程虽然在一两秒之内就完成返回用户所要的搜索结果，实际上这是一个非常复杂的过程。排名算法需要实时从索引数据库中找出所有相关页面，实时计算相关性，加入过滤算法，其复杂程度是外人无法想象的。搜索引擎是当今规模最大、最复杂的计算系统之一。  
  
但是即使最好的搜素引擎在鉴别网页上也还无法与人相比，这就是为什么网站需要搜索引擎优化。没有 SEO 的帮助，搜索引擎常常并不能正确返回最相关、最权威、最有用的信息。  
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
# DNS 预解析是什么？怎么实现？  
## DNS优化  
  
在介绍`dns-prefetch`之前，先要提下当前对于DNS优化主流方法。     
  
一般来说，一次DNS解析需要耗费 20-120ms，所以为了优化DNS，我们可以考虑两个方向：  
1. 减少DNS请求次数  
2. 缩短DNS解析时间`dns-prefetch`  
  
## 什么是dns-prefetch？  
`dns-prefetch`(**DNS预获取**)是前端网络性能优化的一种措施。它根据浏览器定义的规则，**提前解析**之后可能会用到的域名，使解析结果**缓存到系统缓存**中，缩短DNS解析时间，进而提高网站的访问速度。  
  
## 为什么要用dns-prefetch？  
每当浏览器从（第三方）服务器发送一次请求时，都要先通过**DNS解析**将该跨域域名解析为 IP地址，然后浏览器才能发出请求。    
  
如果某一时间内，有多个请求都发送给同一个服务器，那么DNS解析会多次并且重复触发。这样会导致整体的网页加载有延迟的情况。    
  
我们知道，虽然DNS解析占用不了多大带宽，但是它会产生很高的延迟，尤其是对于移动网络会更为明显。    
  
因此，为了减少DNS解析产生的延迟，我们可以通过`dns-prefetch`预解析技术有效地缩短DNS解析时间。  
  
```  
<link rel="dns-prefetch" href="https://baidu.com/">   
```  
## dns-prefetch背后原理  
当浏览器访问一个域名的时候，需要解析一次DNS，获得对应域名的ip地址。  
在解析过程中，按照:  
- 浏览器缓存  
- 系统缓存   
- 路由器缓存   
- ISP(运营商)DNS缓存   
- 根域名服务器   
- 顶级域名服务器   
- 主域名服务器  
  
的顺序逐步读取缓存，直到拿到IP地址。  
  
`dns-prefetch`就是在**将解析后的IP缓存在系统中**。    
  
这样，`dns-prefetch`就有效地缩短了DNS解析时间。因为，在本地操作系统做了DNS缓存，使得DNS在解析的过程中，提前在系统缓存中找到了对应IP。     
  
这样一来， 后续的解析步骤就不用执行了，进而也就缩短了DNS解析时间。  
  
假如浏览器**首次将一个域名解析为IP地址**，并**缓存至操作系统**，那么下一次DNS解析时间可以低至**0-1ms**。     
  
倘若结果不缓存在系统，那么就需要读取**路由器的缓存**，进而后续的解析时间最小也要约**15ms**。    
  
如果路由器缓存也不存在，则需要读取**ISP（运营商）DNS缓存**，一般像`taobao.com`、`baidu.com`这些常见的域名，读取ISP（运营商）DNS缓存需要的时间在**80-120ms**，如果是不常见的域名，平均需要**200-300ms**。    
  
一般来说，大部分的网站到运营商这块都能找到IP。    
  
那也就是说，`dns-prefetch`可以给DNS解析过程带来15-300ms的提升，尤其是一些大量引用很多其他域名资源的网站，提升效果就更加明显了  
  
## 浏览器DNS缓存与dns-prefetch  
  
现代浏览器为了优化DNS解析，也设有了浏览器DNS缓存。    
  
每当在首次DNS解析后会对其IP进行缓存。至于缓存时长，每种浏览器都不一样，比如Chrome的过期时间是1分钟，在这个期限内不会重新请求DNS。  
> Tip:    
> 每当Chrome浏览器启动的时候，就会自动的快速解析浏览器最近一次启动时记录的前10个域名。所以经常访问的网址就不存在DNS解析的延迟，进而打开速度更快。  
  
而`dns-prefetch` 相当于在浏览器缓存之后，在本地操作系统中做了DNS缓存，个人理解，为的是给浏览器缓存做保障，尽量让DNS解析出本地，以此来做了又一层DNS解析优化。    
  
一般来说，DNS在系统的缓存时间是大于浏览器的。  
  
### 浏览器与系统DNS缓存时间  
  
> TTL(Time-To-Live)，就是一条域名解析记录在DNS服务器中的存留时间    
>  
- **浏览器DNS缓存的时间跟DNS服务器返回的TTL值无关**, 它的缓存时间取决于浏览器自身设置。    
  
- **系统缓存会参考DNS服务器响应的TTL值，但是不完全等于TTL值**。  
  
国内和国际上很多平台的TTL值都是以秒为单位的，很多的默认值都是3600，也就是默认缓存1小时。  
  
## `dns-prefetch`缺点  
  
`dns-prefetch`最大的缺点就是使用它太多。    
  
过多的预获取会导致过量的DNS解析，对网络是一种负担。  
  
  
## 最佳实践  
  
请记住以下三点：  
  
1. `dns-prefetch` 仅对[跨域](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)域上的 DNS查找有效，因此请避免使用它来指向相同域。这是因为，到浏览器看到提示时，您站点域背后的IP已经被解析。  
  
2. 除了link 还可以通过使用 [HTTP链接字段](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Link)将 `dns-prefetch`（以及其他资源提示）指定为 [HTTP标头](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)：  
  
```  
Link: <https://fonts.gstatic.com/>; rel=dns-prefetch  
```  
  
3. 考虑将 `dns-prefetch` 与 `preconnect(`预连接`)`提示配对。  
  
由于`dns-prefetch` 仅执行 DNS查找，不像`preconnect` 会建立与服务器的连接。    
  
如果站点是通过HTTPS服务的，两者的组合会涵盖DNS解析，建立TCP连接以及执行TLS握手。将两者结合起来可提供进一步减少[跨域请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)的感知延迟的机会。如下所示：  
  
```  
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>  
<link rel="dns-prefetch" href="https://fonts.gstatic.com/">  
```  
  
**Note**: 如果页面需要建立与许多第三方域的连接，则将它们预先连接会适得其反。 `preconnect` 提示最好仅用于最关键的连接。对于其他的，只需使用 `<link rel="dns-prefetch">` 即可节省第一步的时间DNS查找。  
  
# HTML5 有哪些 drag 相关的 API ？  
  
  
- dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发。   
- darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。   
- dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。   
- dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。   
- dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。   
- drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。   
- dragend：事件主体是被拖放元素，在整个拖放操作结束时触发。  
# 浏览器乱码的原因是什么？如何解决？  
  
**产生乱码的原因：**  
  
- 网页源代码是`gbk`的编码，而内容中的中文字是`utf-8`编码的，这样浏览器打开即会出现`html`乱码，反之也会出现乱码；  
- `html`网页编码是`gbk`，而程序从数据库中调出呈现是`utf-8`编码的内容也会造成编码乱码；  
- 浏览器不能自动检测网页编码，造成网页乱码。  
  
  
  
**解决办法：**  
  
- 使用软件编辑HTML网页内容；  
- 如果网页设置编码是`gbk`，而数据库储存数据编码格式是`UTF-8`，此时需要程序查询数据库数据显示数据前进程序转码；  
- 如果浏览器浏览时候出现网页乱码，在浏览器中找到转换编码的菜单进行转换。  
  
# Canvas和SVG有什么区别？  
  
**（1）SVG：**  
SVG可缩放矢量图形（Scalable Vector Graphics）是基于可扩展标记语言XML描述的2D图形的语言，SVG基于XML就意味着SVG DOM中的每个元素都是可用的，可以为某个元素附加Javascript事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。  
  
  
其特点如下：  
  
- 不依赖分辨率  
- 支持事件处理器  
- 最适合带有大型渲染区域的应用程序（比如谷歌地图）  
- 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）  
- 不适合游戏应用  
  
  
  
**（2）Canvas：**  
Canvas是画布，通过Javascript来绘制2D图形，是逐像素进行渲染的。其位置发生改变，就会重新进行绘制。  
  
  
其特点如下：  
  
- 依赖分辨率  
- 不支持事件处理器  
- 弱的文本渲染能力  
- 能够以 .png 或 .jpg 格式保存结果图像  
- 最适合图像密集型的游戏，其中的许多对象会被频繁重绘  
  
  
  
注：矢量图，也称为面向对象的图像或绘图图像，在数学上定义为一系列由线连接的点。矢量文件中的图形元素称为对象。每个对象都是一个自成一体的实体，它具有颜色、形状、轮廓、大小和屏幕位置等属性。  
  
# 浏览器是如何对 HTML5 的离线储存资源进行管理和加载？  
  
- **在线的情况下**，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问页面 ，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过页面并且资源已经进行离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，就会重新下载文件中的资源并进行离线存储。  
- **离线的情况下**，浏览器会直接使用离线存储的资源。  
  
# HTML5的离线储存怎么使用，它的工作原理是什么  
  
离线存储指的是：在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。  
  
  
**原理：**HTML5的离线存储是基于一个新建的 `.appcache` 文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示  
  
  
**使用方法：**  
（1）创建一个和 html 同名的 manifest 文件，然后在页面头部加入 manifest 属性：  
  
```html  
<html lang="en" manifest="index.manifest">  
```  
  
（2）在 `cache.manifest` 文件中编写需要离线存储的资源：  
  
```html  
CACHE MANIFEST  
    #v0.11  
    CACHE:  
    js/app.js  
    css/style.css  
    NETWORK:  
    resourse/logo.png  
    FALLBACK:  
    / /offline.html  
```  
  
- **CACHE**: 表示需要离线存储的资源列表，由于包含 manifest 文件的页面将被自动离线存储，所以不需要把页面自身也列出来。  
- **NETWORK**: 表示在它下面列出来的资源只有在在线的情况下才能访问，他们不会被离线存储，所以在离线情况下无法使用这些资源。不过，如果在 CACHE 和 NETWORK 中有一个相同的资源，那么这个资源还是会被离线存储，也就是说 CACHE 的优先级更高。  
- **FALLBACK**: 表示如果访问第一个资源失败，那么就使用第二个资源来替换他，比如上面这个文件表示的就是如果访问根目录下任何一个资源失败了，那么就去访问 offline.html 。  
  
（3）在离线状态时，操作 `window.applicationCache` 进行离线缓存的操作。  
  
  
**如何更新缓存：**  
  
（1）更新 manifest 文件  
   
 （2）通过 javascript 操作  
   
 （3）清除浏览器缓存  
  
  
**注意事项：**  
   
 （1）浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是每个站点 5MB）。  
   
 （2）如果 manifest 文件，或者内部列举的某一个文件不能正常下载，整个更新过程都将失败，浏览器继续全部使用老的缓存。  
   
 （3）引用 manifest 的 html 必须与 manifest 文件同源，在同一个域下。  
   
 （4）FALLBACK 中的资源必须和 manifest 文件同源。  
   
 （5）当一个资源被缓存后，该浏览器直接请求这个绝对路径也会访问缓存中的资源。  
   
 （6）站点中的其他页面即使没有设置 manifest 属性，请求的资源如果在缓存中也从缓存中访问。  
  
（7）当 manifest 文件发生改变时，资源请求本身也会触发更新。  
  
# img的srcset属性的作⽤？  
  
响应式页面中经常用到根据屏幕密度设置不同的图片。这时就用到了 img 标签的srcset属性。srcset属性用于设置不同屏幕密度下，img 会自动加载不同的图片。用法如下：  
  
```html  
<img src="image-128.png" srcset="image-256.png 2x" />  
```  
  
使用上面的代码，就能实现在屏幕密度为1x的情况下加载image-128.png, 屏幕密度为2x时加载image-256.png。  
  
  
按照上面的实现，不同的屏幕密度都要设置图片地址，目前的屏幕密度有1x,2x,3x,4x四种，如果每一个图片都设置4张图片，加载就会很慢。所以就有了新的srcset标准。代码如下：  
  
```html  
<img src="image-128.png"  
     srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"  
     sizes="(max-width: 360px) 340px, 128px" />  
```  
  
其中srcset指定图片的地址和对应的图片质量。sizes用来设置图片的尺寸零界点。对于 srcset 中的 w 单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用。浏览器会自动选择一个最小的可用图片。  
  
  
sizes语法如下：  
  
```html  
sizes="[media query] [length], [media query] [length] ... "  
```  
  
sizes就是指默认显示128px, 如果视区宽度大于360px, 则显示340px。  
  
# label标签有什么用？  
label标签来定义表单控制间的关系。当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。  
  
```html  
<label for="Name">Number:</label>  
<input type='text' name="Name" id="Name"/>  
  
<label>Date:<input type="text" name="B"/></label>  
```  
  
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
  
  
  
  
# 说说你对以下几个页面生命周期事件的理解：DOMContentLoaded，load，beforeunload，unload  
HTML 页面的生命周期包含三个重要事件：  
  
* DOMContentLoaded —— 浏览器已完全加载 HTML，并构建了 DOM 树，但像 `<img> `和样式表之类的外部资源可能尚未加载完成。  
* load —— 浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等。  
* beforeunload/unload —— 当用户正在离开页面时。  
  
每个事件都是有用的：  
  
* DOMContentLoaded 事件 —— DOM 已经就绪，因此处理程序可以查找 DOM 节点，并初始化接口。  
* load 事件 —— 外部资源已加载完成，样式已被应用，图片大小也已知了。  
* beforeunload 事件 —— 用户正在离开：我们可以检查用户是否保存了更改，并询问他是否真的要离开。  
* unload 事件 —— 用户几乎已经离开了，但是我们仍然可以启动一些操作，例如发送统计数据。  
  
## DOMContentLoaded 和脚本  
  
当浏览器处理一个 HTML 文档，并在文档中遇到` <script> `标签时，就会在继续构建 DOM 之前运行它。这是一种防范措施，因为脚本可能想要修改 DOM，甚至对其执行 document.write 操作，所以 DOMContentLoaded 必须等待脚本执行结束。  
  
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
  
  
  
# 使用input标签上传图片时，怎样触发默认拍照功能？  
capture 属性用于指定文件上传控件中媒体拍摄的方式。  
  
  
可选值：  
* user 前置  
* environment 后置  
* camera 相机  
* camcorder 摄像机  
* microphone 录音  
  
```html  
<input type='file' accept='image/*;' capture='camera'>  
```  
# input上传文件可以同时选择多张吗？怎么设置？  
可以，通过给input标签设置multiple属性。  
  
```html  
<input type="file" name="files" multiple/>  
```  
# 如何禁止input展示输入的历史记录？  
在输入input时会提示原来输入过的内容，还会出现下拉的历史记录，禁止这种情况只需在input中加入： autocomplete=“off”  
  
```html  
<input type="text"  autocomplete="off" />  
```  
  
autocomplete 属性是用来规定输入字段是否启用自动完成的功能。  
  
# 能否使用自闭合script标签引入脚本文件?  
  
不能。自闭合标签来自于XML语法，而不是HTML语法。  
  
根据现在的HTML语法，只有不需要结束标签的void element（如img之类的），或者是外部元素（如svg）可以使用自闭合。script标签显然不在此列。  
  
 ```html  
 // 正确写法  
 <script src="..."></script>  
   
 // 错误写法  
 <!-- <script src="..."/>   -->
 ```  
# iconfont是什么？有什么优缺点？  
## 什么是 IconFont  
  
> 顾名思义，IconFont 就是字体图标。严格地说，就是一种字体，但是，它们不包含字母或数字，而是包含符号和字形。您可以使用 CSS 设置样式，就像设置常规文本一样，这使得 IconFont 成为 Web 开发时图标的热门选择。  
  
## 优点  
  
* 可以方便地将任何 CSS 效果应用于它们。  
* 因为它们是矢量图形，所以它们是可伸缩的。这意味着我们可以在不降低质量的情况下伸缩它们。  
* 我们只需要发送一个或少量 HTTP 请求来加载它们，而不是像图片，可能需要多个 HTTP 请求。  
* 由于尺寸小，它们加载速度快。  
* 它们在所有浏览器中都得到支持（甚至支持到 IE6）。  
  
## 不足  
  
* 不能用来显示复杂图像  
* 通常只限于一种颜色，除非应用一些 CSS 技巧  
* 字体图标通常是根据特定的网格设计的，例如 16x16, 32×32, 48×48等。如果由于某种原因将网格系统改为25×25，可能不会得到清晰的结果  
# 页面统计数据中，常用的 PV、UV 指标分别是什么？  
## PV(页面访问量)  
  
即页面浏览量或点击量，用户每1次对网站中的每个网页访问均被记录1个PV。  
  
用户对同一页面的多次访问，访问量累计，用以衡量网站用户访问的网页数量。  
  
##  UV(独立访客)  
  
是指通过互联网访问、浏览这个网页的自然人。访问您网站的一台电脑客户端为一个访客。  
  
00:00-24:00内相同的客户端只被计算一次。  
  
  
  
  
# 什么是 DOM 和 BOM？  
* DOM 指的是文档对象模型，它指的是把文档当做一个对象，这个对象主要定义了处理网页内容的方法和接口。  
* BOM 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的法和接口。BOM的核心是 window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个 Global（全局）对象。这意味着在网页中定义的任何对象，变量和函数，都作为全局对象的一个属性或者方法存在。window 对象含有 location 对象、navigator 对象、screen 对象等子对象，并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对象的子对象。  
  
# 一台设备的dpr，是否是可变的？  
`devicePixelRatio`，中文名称是设备像素比。这个概念在移动开发的时候会被特别关注，因为它关系到了整个画面的观感、布局甚至是清晰度。在JavaScript BOM中，它是window全局对象下的一个属性，它的定义如下：  
  
> dpr = 设备像素 / CSS像素  
  
也有文章把设备像素称为物理像素，把CSS像素称为独立像素（DIPs），但所指的都是同样概念：  
  
(1) 首先说设备像素。举手机的例子来说，设备像素也就是在手机广告上经常会看到的1920*1080像素或1280*720像素，也就是常说的分辨率为1080p或720p。它所指的是设备上有多少个能够显示一种特定颜色的最小区域，在任何设备中这个数值都是不会变的。  
  
(2) 再说CSS像素，它的一种更广义的叫法是独立像素。CSS像素是为web开发者所打造的，是在CSS和JavaScript中使用的一个抽象的层，我们在CSS中定义的width: 100px;、font-size: 16px;等属性都是指CSS像素。而相对于CSS像素，设备像素这个概念在前端中几乎用不上（除了screen.width/height）。  
  
那么，从定义来看，dpr的意义就是：在一个设备（的每个方向）上，每个CSS像素会被多少个实际的物理像素来显示。  
  
![image.png](https://i.loli.net/2021/08/15/nD9KeYyGqO6tk7b.png)  
  
上图中，一个蓝色方块代表一个设备像素，一个黄色方块代表一个CSS像素。我们可以通过这张图来理清dpr的概念：  
  
* 如图左，一个设备像素覆盖了多个CSS像素，dpr < 1，对应用户的缩小操作；  
* 如图右，一个CSS像素覆盖了多个设备像素，dpr > 1，对应用户的放大操作。  
  
由于**用户的缩放操作会改变dpr**，所以设备dpr是在默认缩放为100%的情况下定义的。  
  
  
# mete标签中的viewport 有什么用？  
## 什么是 Viewport?  
  
viewport 是用户网页的可视区域。  
  
viewport 翻译为中文可以叫做"视区"。  
  
手机浏览器是把页面放在一个虚拟的"窗口"（viewport）中，通常这个虚拟的"窗口"（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。  
  
## 设置 Viewport  
  
一个常用的针对移动网页优化过的页面的 viewport meta 标签大致如下：  
  
```html  
<meta name="viewport" content="width=device-width, initial-scale=1.0">  
```  
  
* width：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。  
* height：和 width 相对应，指定高度。  
* initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。  
* maximum-scale：允许用户缩放到的最大比例。  
* minimum-scale：允许用户缩放到的最小比例。  
* user-scalable：用户是否可以手动缩放。  
# style标签写在body后与body前有什么区别？  
页面加载自上而下 当然是先加载样式。  
  
写在body标签后由于浏览器以逐行方式对HTML文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在windows的IE下可能会出现FOUC现象（即样式失效导致的页面闪烁问题）  
  
  
# 前端该如何选择图片的格式？  
##图片的类型  
  
图片的类型目前就分为两种：  
  
* 位图  
* 矢量图  
  
### 位图  
  
所谓位图就是用像素点拼起来的图也叫点阵图，平时我们用到的png、jpg等图片就是位图。  
  
### 矢量图  
  
矢量图，也叫做向量图。矢量图并不纪录画面上每一点的信息，而是纪录了元素形状及颜色的算法，当你打开一幅矢量图的时候，软件对图形对应的函数进行运算，将运算结果图形的形状和颜色显示给你看。  
  
无论显示画面是大还是小，画面上的对象对应的算法是不变的，所以，即使对画面进行倍数相当大的缩放，它也不会像位图那样会失真。  
  
常见的就是svg格式的。  
  
## 图片的压缩类型  
  
* 无压缩  
* 有损压缩  
* 无损压缩  
  
### 无压缩  
  
无压缩的图片格式不对图片数据进行压缩处理，能准确地呈现原图片。例如BMP格式的图片。  
  
### 有损压缩  
  
指在压缩文件大小的过程中，损失了一部分图片的信息，也即降低了图片的质量（即图片被压糊了），并且这种损失是不可逆的。  
  
常见的有损压缩手段是按照一定的算法将临近的像素点进行合并。压缩算法不会对图片所有的数据进行编码压缩，而是在压缩的时候，去除了人眼无法识别的图片细节。因此有损压缩可以在同等图片质量的情况下大幅降低图片的体积。例如jpg格式的图片使用的就是有损压缩。  
  
### 无损压缩  
  
在压缩图片的过程中，图片的质量没有任何损耗。我们任何时候都可以从无损压缩过的图片中恢复出原来的信息。  
  
压缩算法对图片的所有的数据进行编码压缩，能在保证图片的质量的同时降低图片的体积。例如png、gif使用的就是无损压缩。  
  
## 图片位数  
  
图片位数通常分为8、16、24、32  
  
* 图片位数越大，能表示的颜色越多，同时占用的体积也约大。例如8位图片支持256种颜色，即2的8次方。  
* 图片位数越大，颜色过渡也就越细腻，携带的色彩信息可以更加丰富。  
* 32位跟24位的区别就是多了一个Alpha通道，用来支持半透明，其他的跟24位基本一样。  
  
## 常见的图片的格式  
  
### GIF  
  
GIF的全称是`Graphics Interchange Format`，可译为图形交换格式，是在1987年由Compu Serve公司为了填补跨平台图像格式的空白而发展起来的。  
  
GIF采用的是Lempel-Zev-Welch（LZW）压缩算法，最高支持256种颜色。由于这种特性，GIF比较适用于色彩较少的图片，比如卡通造型、公司标志等等。如果碰到需要用24位真彩色的场合，那么GIF的表现力就有限了。  
  
GIF格式图片最大的特性是帧动画，相比古老的bmp格式，尺寸较小，而且支持透明(不支持半透明，因为不支持 Alpha 透明通道 )和动画。  
  
优点：  
  
* 体积小  
* 支持动画  
  
缺点：  
  
* 由于采用了8位压缩，最多只能处理256种颜色  
  
### JPEG/JPG  
  
JPEG是`Joint Photographic Experts Group`(联合图像专家组)的缩写，文件后辍名为"．jpg"或"．jpeg"，是常用的图像文件格式，由一个软件开发联合会组织制定，是一种有损压缩格式，能够将图像压缩在很小的储存空间，图像中重复或不重要的资料会被丢失，因此容易造成图像数据的损伤。尤其是使用过高的压缩比例，将使最终解压缩后恢复的图像质量明显降低，如果追求高品质图像，不宜采用过高压缩比例。  
  
优点：  
  
* 采用有损压缩，压缩后体积更小  
* 支持24位真彩色  
* 支持渐进式加载  
  
缺点：  
  
* 有损压缩会损坏图片的质量  
* 不支持透明/半透明  
  
### 渐进式jpeg(progressive jpeg)  
  
渐进式jpg文件包含多次扫描，这些扫描顺寻的存储在jpg文件中。打开文件过程中，会先显示整个图片的模糊轮廓，随着扫描次数的增加，图片变得越来越清晰。  
  
### PNG  
  
png，即便携式网络图形是一种无损压缩的位图片形格式，其设计目的是试图替代GIF和TIFF文件格式，同时增加一些GIF文件格式所不具备的特性。PNG使用从LZ77派生的无损数据压缩算法，一般应用于JAVA程序、网页或S60程序中，原因是它压缩比高，生成文件体积小。  
  
png支持8位、24位、32位3种，我们通常叫它们png8、png24、png32。  
  
优点：  
  
* 无损压缩  
* 支持透明、半透明  
* 最高支持24位真彩色图像以及8位灰度图像，从而彻底地消除锯齿边缘。  
  
缺点：  
  
* 与jpg的有损耗压缩相比，png提供的压缩量较少  
* 不支持动画，如需支持动画还得使用apng  
  
### APNG  
  
APNG（Animated Portable Network Graphics）是一个基于PNG（Portable Network Graphics）的位图动画格式。实际上就是多张png组成的动图。MAC电脑打开可以看到组成apng的每一张图。  
  
优点：  
  
* 支持png的所有优点  
* 支持动画  
  
缺点：  
  
* 浏览器支持情况较差  
  
### WEBP  
  
WebP是由Google最初在2010年发布，目标是减少文件大小。它能同时支持无损压缩和有损压缩。  
  
它几乎集成了以上所有图片的优点，并且能够拥有更高的压缩率，但是浏览器支持率还不够理想。  
  
### SVG  
  
SVG是一种用XML定义的语言，用来描述二维矢量及矢量/栅格图形。SVG提供了3种类型的图形对象：矢量图形（例如：由直线和曲线组成的路径）、图象、文本。图形对象还可进行分组、添加样式、变换、组合等操作，特征集包括嵌套变换、剪切路径、alpha蒙板、滤镜效果、模板对象和其它扩展。  
  
SVG图形是可交互的和动态的，可以在SVG文件中嵌入动画元素或通过脚本来定义动画。  
  
SVG与上面图片不同的是它是矢量图，无论你怎么放大，它都不会失真；同时，SVG文件通常要比比JPEG和PNG格式的文件要小很多。  
  
优点：  
  
* SVG 可被非常多的工具读取和修改（比如记事本）  
* SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。  
* SVG 是可伸缩  
* SVG 图像可在任何的分辨率下被高质量地打印  
* SVG 可在图像质量不下降的情况下被放大  
* SVG 可以与 JavaScript 技术一起运行  
* SVG 文件是纯粹的 XML  
  
缺点：  
  
* 渲染成本相对于其他格式图片比较高，对于性能有影响。  
* 需要学习成本，因为SVG是一种用XML定义的语言。  
  
## 如何选择图片的格式  
  
![image.png](https://i.loli.net/2021/07/04/Aq1IQVw4Ni7jD5C.png)  
  
  
# webSocket如何兼容低浏览器  
  
* Adobe Flash Socket；  
* ActiveX HTMLFile (IE) ；  
* 基于 multipart 编码发送 XHR；  
* 基于长轮询的 XHR；  
# 说说 HTML、XML、XHTML 的区别  
* HTML：超文本标记语言，是语法较为松散的、不严格的Web语言；  
* XML：可扩展的标记语言，主要用于存储数据和结构，可扩展；  
* XHTML：可扩展的超文本标记语言，基于XML，作用与HTML类似，但语法更严格。  
  
# 标签上title属性与alt属性的区别是什么？  
* alt 是为了在图片未能正常显示时（屏幕阅读器）给予文字说明。且长度必须少于100个英文字符或者用户必须保证替换文字尽可能的短。  
* title 属性为设置该属性的元素提供建议性的信息。使用title属性提供非本质的额外信息。  
# 页面导入样式时，使用link和@import有什么区别？  
link属于HTML标签，而@import是css提供的；  
  
页面被加载时，link会同时被加载，而@import引用的css会等到页面被加载完再加载；  
  
@import只在IE5以上才能识别，而link是XHTML标签，无兼容问题；  
  
link方式的样式的权重高于@import的权重。  
# 简单描述从输入网址到页面显示的过程  
很多大公司面试喜欢问这样一道面试题，输入URL到看见页面发生了什么？  
  
简单来说，共有以下几个过程：  
  
* DNS解析  
* 发起TCP连接  
* 发送HTTP请求  
* 服务器处理请求并返回HTTP报文  
* 浏览器解析渲染页面  
* 连接结束  
  
下面我们来看看具体的细节。  
  
## DNS解析  
  
DNS解析实际上就是寻找你所需要的资源的过程。假设你输入www.baidu.com，而这个网址并不是百度的真实地址，互联网中每一台机器都有唯一标识的IP地址，这个才是关键，但是它不好记，乱七八糟一串数字谁记得住啊，所以就需要一个网址和IP地址的转换，也就是DNS解析。  
  
DNS解析其实是一个递归的过程。  
  
输入www.google.com网址后，首先在本地的域名服务器中查找，没找到去根域名服务器查找，没有再去com顶级域名服务器查找，，如此的类推下去，直到找到IP地址，然后把它记录在本地，供下次使用。大致过程就是.-> .com ->google.com. -> www.google.com.。 (最后这个.对应的就是根域名服务器，默认情况下所有的网址的最后一位都是.，为了方便用户，通常都会省略，浏览器在请求DNS的时候会自动加上)  
  
### DNS优化  
  
既然已经懂得了解析的具体过程，我们可以看到上述一共经过了N个过程，每个过程有一定的消耗和时间的等待，因此我们得想办法解决一下这个问题！  
  
* DNS缓存  
  
DNS存在着多级缓存，从离浏览器的距离排序的话，有以下几种: 浏览器缓存，系统缓存，路由器缓存，IPS服务器缓存，根域名服务器缓存，顶级域名服务器缓存，主域名服务器缓存。  
  
* DNS负载均衡  
  
比如访问baidu.com的时候，每次响应的并非是同一个服务器（IP地址不同），一般大公司都有成百上千台服务器来支撑访问。DNS可以返回一个合适的机器的IP给用户，例如可以根据每台机器的负载量，该机器离用户地理位置的距离等等，这种过程就是DNS负载均衡。  
  
## 发起TCP连接  
  
TCP提供一种可靠的传输，这个过程涉及到三次握手，四次挥手。  
  
### 三次握手  
  
![三次握手示意图](https://i.loli.net/2021/07/04/aG5WH4zdPXQnwpf.png)  
  
* 第一次握手：  
  
客户端发送syn包(Seq=x)到服务器，并进入SYN_SEND状态，等待服务器确认；  
  
* 第二次握手：  
  
服务器收到syn包，必须确认客户的SYN（ack=x+1），同时自己也发送一个SYN包（Seq=y），即SYN+ACK包，此时服务器进入SYN_RECV状态；  
  
* 第三次握手：  
  
客户端收到服务器的SYN＋ACK包，向服务器发送确认包ACK(ack=y+1)，此包发送完毕，客户端和服务器进入ESTABLISHED状态，完成三次握手。  
  
握手过程中传送的包里不包含数据，三次握手完毕后，客户端与服务器才正式开始传送数据。理想状态下，TCP连接一旦建立，在通信双方中的任何一方主动关闭连接之前，TCP 连接都将被一直保持下去。  
  
### 四次挥手  
  
数据传输完毕后，双方都可释放连接。最开始的时候，客户端和服务器都是处于ESTABLISHED状态，假设客户端主动关闭，服务器被动关闭。  
  
![四次挥手示意图](https://i.loli.net/2021/07/04/96LM2FZmOhRUxbP.png)  
  
* 第一次挥手：  
  
客户端发送一个FIN，用来关闭客户端到服务器的数据传送，也就是客户端告诉服务器：我已经不 会再给你发数据了(当然，在fin包之前发送出去的数据，如果没有收到对应的ack确认报文，客户端依然会重发这些数据)，但是，此时客户端还可以接受数据。  
  
FIN=1，其序列号为seq=u（等于前面已经传送过来的数据的最后一个字节的序号加1），此时，客户端进入FIN-WAIT-1（终止等待1）状态。 TCP规定，FIN报文段即使不携带数据，也要消耗一个序号。  
  
* 第二次挥手：  
  
服务器收到FIN包后，发送一个ACK给对方并且带上自己的序列号seq，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号）。此时，服务端就进入了CLOSE-WAIT（关闭等待）状态。TCP服务器通知高层的应用进程，客户端向服务器的方向就释放了，这时候处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受。这个状态还要持续一段时间，也就是整个CLOSE-WAIT状态持续的时间。  
  
此时，客户端就进入FIN-WAIT-2（终止等待2）状态，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最后的数据）。  
  
* 第三次挥手：  
  
服务器发送一个FIN，用来关闭服务器到客户端的数据传送，也就是告诉客户端，我的数据也发送完了，不会再给你发数据了。由于在半关闭状态，服务器很可能又发送了一些数据，假定此时的序列号为seq=w，此时，服务器就进入了LAST-ACK（最后确认）状态，等待客户端的确认。  
  
* 第四次挥手：  
  
主动关闭方收到FIN后，发送一个ACK给被动关闭方，确认序号为收到序号+1，此时，客户端就进入了TIME-WAIT（时间等待）状态。注意此时TCP连接还没有释放，必须经过2∗MSL（最长报文段寿命）的时间后，当客户端撤销相应的TCB后，才进入CLOSED状态。  
  
服务器只要收到了客户端发出的确认，立即进入CLOSED状态。同样，撤销TCB后，就结束了这次的TCP连接。可以看到，服务器结束TCP连接的时间要比客户端早一些。  
  
至此，完成四次挥手。  
  
## 发送HTTP请求  
  
发送HTTP请求，就是构建HTTP请求报文，并通过TCP协议，发送到服务器指定端口。  
  
请求报文由`请求行`，`请求报头`，`请求正文`组成。  
  
## 服务器处理请求并返回HTTP报文  
  
对TCP连接进行处理，对HTTP协议进行解析，并按照报文格式进一步封装成HTTP Request对象，供上层使用。这一部分工作一般是由Web服务器去进行，比如Tomcat, Nginx和Apache等Web服务器。  
  
HTTP报文也分成三段：`状态码`，`响应报头`和`响应报文`。  
  
## 浏览器解析渲染页面  
  
![渲染页面的过程](https://i.loli.net/2021/07/04/kK39pXjgDdJ75Ux.png)  
  
这个图就是Webkit解析渲染页面的过程。  
  
* 解析HTML形成DOM树  
* 解析CSS形成CSSOM 树  
* 合并DOM树和CSSOM树形成渲染树  
* 浏览器开始渲染并绘制页面  
  
  
  
  
  
  
  
  
  
  
  
  
# 简述 html 页面渲染过程  
整个渲染过程其实就是将URL对应的各种资源，通过浏览器渲染引擎的解析，输出可视化的图像。  
  
## 基本概念  
  
* HTML解释器：解释HTML语言的解释器，本质是将HTML文本解释成DOM树（文档对象模型）。  
* CSS解释器：解释样式表的解释器，其作用是将DOM中的各个元素对象加上样式信息，从而为计算最后结果的布局提供依据。  
* 布局：将DOM和css样式信息结合起来，计算它们的大小位置等布局信息，形成一个能够表示这所有信息的内部表示模型即渲染树。  
* JavaScript引擎：JavaScript可以修改网页的内容，也能修改CSS的信息，JavaScript引擎解释JavaScript代码并把代码的逻辑和对DOM和CSS的改动信息应用到布局中去，从而改变渲染的结果。  
  
## 基本过程  
  
* 1.解析HTML文件，创建DOM树  
  
浏览器解析html源码，然后创建一个 DOM树。并行请求 css/image/js在DOM树中，每一个HTML标签都有一个对应的节点，并且每一个文本也都会有一个对应的文本节点。DOM树的根节点就是 documentElement，对应的是html标签。  
  
* 2.解析CSS,形成CSS对象模型  
  
浏览器解析CSS代码，计算出最终的样式数据。构建CSSOM树。对CSS代码中非法的语法它会直接忽略掉。解析CSS的时候会按照如下顺序来定义优先级：  
  
> 浏览器默认设置 < 用户设置 < 外链样式 < 内联样式 < html中的style。  
  
* 3.将CSS与DOM合并，构建渲染树（renderingtree）  
  
DOM Tree + CSSOM –> 渲染树（rendering tree）。渲染树和DOM树有点像，但是是有区别的。DOM树完全和html标签一一对应，但是渲染树会忽略掉不需要渲染的元素，比如head、display:none的元素等。而且一大段文本中的每一个行在渲染树中都是独立的一个节点。渲染树中的每一个节点都存储有对应的css属性。  
  
* 4.布局和绘制  
  
一旦渲染树创建好了，浏览器就可以根据渲染树直接把页面绘制到屏幕上。  
  
以上四个步骤并不是一次性顺序完成的。如果DOM或者CSSOM被修改，以上过程会被重复执行。实际上，CSS和JavaScript往往会多次修改DOM或者CSSOM。  
  
### Repaint(重绘)  
  
重绘是改变不影响元素在网页中的位置的元素样式时，譬如background-color(背景色)， border-color(边框色)，visibility(可见性)，浏览器会根据元素的新属性重新绘制一次(这就是重绘，或者说重新构造样式)，使元素呈现新的外观。  
  
重绘不会带来重新布局，所以并不一定伴随重排。  
  
### Reflow（重排）  
  
渲染对象在创建完成并添加到渲染树时，并不包含位置和大小信息。计算这些值的过程称为布局或重排。  
  
"重绘"不一定需要"重排"，比如改变某个网页元素的颜色，就只会触发"重绘"，不会触发"重排"，因为布局没有改变。  
  
但是，"重排"必然导致"重绘"，比如改变一个网页元素的位置，就会同时触发"重排"和"重绘"，因为布局改变了。  
  
  
## 引申问题：浏览器如何优化渲染？  
  
* 将多次改变样式属性的操作合并成一次操作  
* 将需要多次重排的元素，position属性设为absolute或fixed，这样此元素就脱离了文档流，它的变化不会影响到其他元素。例如有动画效果的元素就最好设置为绝对定位。  
* 由于display属性为none的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排。如果要对一个元素进行复杂的操作时，可以先隐藏它，操作完成后再显示。这样只在隐藏和显示时触发2次重排。  
# HTML5 有哪些新特性？  
* 新增语义化标签：nav、header、footer、aside、section、article  
* 音频、视频标签：audio、video  
* 数据存储：localStorage、sessionStorage  
* canvas（画布）、Geolocation（地理定位）、websocket（通信协议）  
* input标签新增属性：placeholder、autocomplete、autofocus、required  
* history API  
	* go、forward、back、pushstate  
  
# DOCTYPE 标签有什么用？  
DOCTYPE声明于文档最前面，告诉浏览器以何种方式来渲染页面。  
  
HTML5中的声明方式如下：  
```html  
<!DOCTYPE html>  
```  
  
  
# HTML 标签中的 src 和 href 有什么区别  
* href 是超文本引用，它是指向资源的位置，建立与目标文件的联系；  
* src 目的是把资源下载到页面中；  
  
浏览器解析 href 不会阻塞对文档的处理（这就是官方建议使用 link 引入而不是 @ import 的原因），src 会阻塞对文档的处理。  
# iframe是什么？有哪些优缺点？  
iframe 可以在一个网站里面嵌入另一个网站的内容。  
  
## iframe的优点  
  
* iframe能够原封不动的把嵌入的网页展现出来。  
* 如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。  
* 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。  
* 如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。  
  
## iframe的缺点  
  
* 会产生很多页面，不容易管理。  
* iframe框架结构有时会让人感到迷惑，如果框架个数多的话，可能会出现上下、左右滚动条，会分散访问者的注意力，用户体验度差。 * 代码复杂，无法被一些搜索引擎索引到，这一点很关键，现在的搜索引擎爬虫还不能很好的处理iframe中的内容，所以使用iframe会不利于搜索引擎优化。  
* 很多的移动设备（PDA 手机）无法完全显示框架，设备兼容性差。  
* iframe 里面的样式、脚本资源，会增加请求次数，对于大型网站是不可取的。  
* iframe 会阻碍页面的 onload 事件，给用户页面加载很慢的感觉。  
  
iframe 已经渐渐的退出了前端开发的舞台。  
  
# canvas在标签上设置宽高，与在style中设置宽高有什么区别？  
canvas标签的width和height是画布实际宽度和高度，绘制的图形都是在这个上面。  
  
而style的width和height是canvas在浏览器中被渲染的高度和宽度。  
  
如果canvas的width和height没指定或值不正确，就被设置成默认值。  
# 如何禁用a标签跳转页面或定位链接?  
当页面中a标签不需要任何跳转时，从原理上来讲，可分如下两种方法：  
  
* 标签属性href，使其指向空或不返回任何内容。如：  
  
```html  
<a href="javascript:void(0);" >点此无反应javascript:void(0)</a>  
  
<a href="javascript:;" >点此无反应javascript:</a>  
```  
  
* 从标签事件入手，阻止其默认行为。如：  
  
html方法：  
  
```html  
<a href="" onclick="return false;">return false;</a>  
<a href="#" onclick="return false;">return false;</a>  
```   
  
或者在js文件中阻止默认点击事件：  
  
```javascript  
Event.preventDefault()  
```  
  
还可以在css文件中处理点击，不响应任何鼠标事件：  
```css  
pointer-events: none;  
```  
# 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？  
CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。  
  
* 常用的块状元素有：  
  
```html  
<div>、<p>、<h1>...<h6>、<ol>、<ul>、<dl>、<table>、<address>、<blockquote> 、<form>  
```  
  
* 常用的内联元素有：  
  
```html  
<a>、<span>、<br>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code>  
```  
  
* 常用的内联块状元素有：  
  
```html  
<img>、<input>  
```  
  
* 知名的空元素：  
  
```html  
<br/> <hr/> <img/> <input/> <link/> <meta/> <br />  
```  
  
# 什么是 HTML 语义化？  
先看下什么是HTML：  
  
> 超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。  
> HTML元素是构建网站的基石。HTML允许嵌入图像与对象，并且可以用于创建交互式表单，它被用来结构化信息——例如标题、段落和列表等等，也可用来在一定程度上描述文档的外观和语义。  
  
  
那么如何理解 Web 语义化？  
  
通俗的来讲就是从代码上来展示页面的结构，而不是从最终视觉上来展示结构。  
  
单纯的HTML代码是不带任何样式的只是用来标记这一段是标题、这一块是代码、那一个是要强调的内容等等。  
  
但是为什么我们只写HTML在浏览器中不同的标签也是有不同的样式呢？  
  
那是因为各个浏览器都自带的有相应标签的默认样式，为了方便在没有设定样式的情况下友好的展示页面。  
  
良好的语义化代码可以直接从代码上就能看出来那一块到底是要表达什么内容。  
  
## 为什么要使用语义化标签？  
  
有伙伴会认为，我用DIV+CSS也能做出来一样的效果，虽然单纯看实现效果，两者并没有什么区别。  
  
但是页面不止是给人看的，机器也要看爬虫也要看，网页结构更清晰方便开发维护。  
  
特别是在网络或其他原因页面样式文件丢失的时候，良好语义结构组成的页面，肯定比全是div的页面对用户更友好。  
  
总结下语义化的优点：  
  
* 标签语义化有助于构架良好的HTML结构，有利于搜索引擎的建立索引、抓取。简单来说。  
* 有利于不同设备的解析（屏幕阅读器，盲人阅读器等）  
* 有利于构建清晰的机构，有利于团队的开发、维护  
  
  
  
  
  
  
# script 标签中， async 和 defer 两个属性有什么用途和区别？  
在 HTML 中会遇到以下三类 script：  
  
```  
<script src='xxx'></script>  
<script src='xxx' async></script>  
<script src='xxx' defer></script>  
```  
  
script标签用于加载脚本与执行脚本，直接使用script脚本时，html会按照顺序来加载并执行脚本，在脚本加载&执行的过程中，会阻塞后续的DOM渲染。  
  
比如现在大家习惯于在页面中引用各种第三方脚本，但如果第三方服务商出现了一些小问题，比如延迟之类的，就会使得页面白屏。  
  
针对上述情况，script标签提供了两种方式来解决问题，就是加入属性async以及defer，这两个属性使得script标签加载都不会阻塞DOM的渲染。  
  
```  
defer：此布尔属性被设置为向浏览器指示脚本在文档被解析后执行。  
async：设置此布尔属性，以指示浏览器如果可能的话，应异步执行脚本。  
```  
  
## defer  
  
如果script标签设置了defer属性，则浏览器会异步下载该文件并且不会影响后续DOM的渲染。  
  
如果有多个设置了defer属性的script标签存在，则会按照顺序执行所有的script，defer脚本会在文档渲染完毕后，DOMContentLoaded事件调用前执行。  
  
## async  
  
async属性会使得script脚本异步的加载并在允许的情况下执行，而async的执行并不会按照script标签在页面中的顺序来执行，而是谁先加载完谁先执行。  
# 常用的 meta 元素有哪些？  
> 作者：tonytony  
> 来源：掘金  
  
> The <meta> tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable.  
  
<meta> 元素标签是提供有关HTML文档的元数据，元数据不会显示在页面上，但是能够被机器识别。  
  
总而言之, meta标签是用来让机器识别的，同时它对SEO起着重要的作用。  
  
## charset  
  
指定了html文档的编码格式，常用的是utf-8(Unicode的字符编码)，还有ISO-8859-1(拉丁字母的字符编码)。当然还有其他的，但是一般不常用也就不介绍了  
  
```html  
<meta charset="utf-8">  
```  
  
## name & content  
  
指定元数据的名称(这部分对SEO非常有用)  
  
* author——定义了页面的作者  
  
```html  
<meta name="author" content="Tony">  
```  
  
* keywords——为搜索引擎提供关键字  
  
```html  
<meta name="keywords" content="HTML, CSS, JavaScript">  
```  
  
* description——对网页整体的描述  
  
```html  
<meta name="description" content="My tutorials on HTML, CSS and JavaScript">  
```  
  
* viewport——对页面视图相关进行定义  
  
```  
width=device-width——将页面宽度设置为跟随屏幕宽度变化而变化  
initial-scale=1.0——设置浏览器首次加载页面时的初始缩放比例(0.0-10.0正数)  
maximum-scale=1.0——允许用户缩放的最大比例(0.0-10.0正数)，必须大于等于minimum-scale  
minimum-scale=1.0——允许用户缩放的最小比例(0.0-10.0正数)，必须小于等于maximum-scale  
user-scalable=no——是否允许用户手动缩放(yes或者no)  
```  
  
``` html  
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minmum-scale=1.0">  
```  
  
* generator——包含生成页面软件的标识符  
  
> which contains the identifier of the software that generated the page.  
  
```html  
<meta name="generator" content="Hexo 3.8.0">  
```  
  
* theme-color——定义主题颜色  
  
```html  
<meta name="theme-color" content="#222">  
```  
  
* http-equiv & content  
  
> Provides an HTTP header for the information/value of the content attribute  
  
* refresh——每30s刷新一次文档  
  
```html  
<meta http-equiv="refresh" content="30">  
```  
  
* X-UA-Compatible——告知浏览器以何种版本渲染界面。下面的例子有限使用IE最新版本  
  
```html  
<meta http-equiv="X-UA-Compatible" content="ie=edge">  
```  
  
关于是否有必要使用这一条在stack overflow尚且有争议。个人认为如果不想兼容低版本的IE，可以直接忽略这一条。  
  
* Cache-Control——请求和响应遵循的缓存机制，可以声明缓存的内容，修改过期时间，可多次声明  
  
> no-transform——不得对资源进行转换或转变。  
> no-siteapp——禁止百度进行转码  
  
```html  
<meta http-equiv="Cache-Control" content="no-transform">  
<meta http-equiv="Cache-Control" content="no-siteapp">  
```  
  
* property & content  
  
可以让网页成为一个富媒体对象，同意网页内容被其他网站引用，同时在应用的时候不会只是一个链接，会提取相应的信息展现给用户。  
  
```html  
<meta property="og:type" content="website">  
<meta property="og:url" content="https://zjgyb.github.io/index.html">  
<meta property="og:site_name" content="tony's blog">  
```  
  
