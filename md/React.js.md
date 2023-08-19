```js  
function layerSum(root) {  
  
}  
  
const res = layerSum({  
    value: 2,  
    children: [  
        { value: 6, children: [ { value: 1 } ] },  
        { value: 3, children: [ { value: 2 }, { value: 3 }, { value: 4 } ] },  
        { value: 5, children: [ { value: 7 }, { value: 8 } ] }  
    ]  
});  
  
console.log(res);  
  
```  
# useMemo 和 useCallback 有什么区别？  
 在 React 中，`useMemo` 和 `useCallback` 都是用来优化性能的钩子函数，但它们的用途和作用稍有不同。  
  
1. **useMemo**:  
`useMemo` 的主要作用是在组件重新渲染时，用来缓存计算结果，以避免不必要的重复计算。它接收两个参数：一个回调函数和一个依赖数组。回调函数用于进行计算，而依赖数组用于指定在数组中列出的依赖项发生变化时，才重新计算并返回新的值，否则会返回上一次缓存的值。  
  
```jsx  
const memoizedValue = useMemo(() => {  
  // 进行耗时的计算  
  return someValue;  
}, [dependency1, dependency2]);  
```  
  
在上面的示例中，只有当 `dependency1` 或者 `dependency2` 发生变化时，`useMemo` 才会重新计算并返回新的值，否则会复用之前的值。  
  
2. **useCallback**:  
`useCallback` 的作用是在组件重新渲染时，返回一个记忆化的回调函数，以避免不必要的函数重新创建。它也接收两个参数：一个回调函数和一个依赖数组。当依赖项发生变化时，会返回一个新的回调函数，否则会复用之前的回调函数。  
  
```jsx  
const memoizedCallback = useCallback(() => {  
  // 处理事件的回调函数  
}, [dependency1, dependency2]);  
```  
  
在这个示例中，只有当 `dependency1` 或者 `dependency2` 发生变化时，`useCallback` 才会返回一个新的回调函数，否则会返回之前的回调函数。  
  
总结区别：  
- `useMemo` 主要用于缓存计算结果，适用于任何需要缓存值的场景。  
- `useCallback` 主要用于缓存回调函数，适用于需要传递给子组件的事件处理函数，以避免不必要的重新渲染。  
  
另外，在大多数情况下，你不必在每个函数组件中都使用 `useMemo` 或 `useCallback`。  
  
只有当你在性能测试中发现了性能问题，或者在特定情况下需要优化函数的创建和计算时，再考虑使用这些钩子。  
# 怎么在代码中判断一个 React 组件是 class component 还是 function component？  
可以使用JavaScript的`typeof`运算符和React的`Component`类来进行判断。  
  
下面是一个示例的判断方法：  
  
```javascript  
function isClassComponent(component) {  
  return (  
    typeof component === 'function' &&  
    !!component.prototype.isReactComponent  
  );  
}  
  
// 示例用法  
const MyComponent = () => <div>Hello, I'm a function component!</div>;  
const MyClassComponent = class extends React.Component {  
  render() {  
    return <div>Hello, I'm a class component!</div>;  
  }  
};  
  
console.log(isClassComponent(MyComponent)); // false  
console.log(isClassComponent(MyClassComponent)); // true  
```  
  
上面定义了一个名为`isClassComponent`的函数，它接受一个组件作为参数。函数内部使用`typeof`运算符来判断该组件是否为函数类型，并通过检查`component.prototype.isReactComponent`属性来确定是否为Class组件。  
# useRef / ref / forwardsRef 的区别是什么?  
useRef 和 ref 都是 React 中用于操作 DOM 元素或自定义组件实例的工具，而 forwardRef 则是用于访问嵌套子组件中的 DOM 元素或自定义组件实例。  
  
它们之间的区别如下：  
  
1. useRef 是一个 hook 函数，可以在函数组件中使用；ref 是一个对象属性，只能在类组件中使用。  
2. useRef 返回一个可变的 ref 对象，可以在组件的整个生命周期内保持不变，也就是说不会因为重新渲染而改变。而 ref 每次渲染都会被重新创建。  
3. useRef 主要用于存储和更新组件内部状态，以及操作 DOM 元素。而 ref 主要用于获取 DOM 元素或自定义组件实例。  
4. forwardRef 是用于将 ref 属性“向下传递”给一个函数式子组件或自定义组件的工具函数。它允许父组件调用子组件中的 DOM 元素或自定义组件实例。  
  
综上所述，useRef 和 ref 都是用于操作 DOM 元素或自定义组件实例的工具，与之相比，forwardRef 则是一个更高级的工具，用于处理专门的情况，即访问嵌套子组件中的 DOM 元素或自定义组件实例。  
# useEffect 的第二个参数, 传空数组和传依赖数组有什么区别？  
在 React 中，useEffect 是一个常用的 Hook，它用于处理组件生命周期中的副作用。  
  
useEffect 接收两个参数，第一个是要执行的函数，第二个是依赖数组（可选）。  
  
当传递空数组 [] 时，useEffect 只会在组件挂载和卸载时调用一次。这种情况下，useEffect 不会监听任何变量，并且不会对组件进行重新渲染。  
  
```js  
useEffect(() => {  
  // 只在挂载和卸载时执行  
}, []);  
```  
  
当传递依赖数组时，useEffect 会在组件挂载和依赖项更新时调用。当依赖项中的任何一个值发生变化时，useEffect 都将被重新调用。如果依赖数组为空，则每次组件重新渲染时都会调用 useEffect。  
  
```js  
useEffect(() => {  
  // 在挂载、依赖列表变化及卸载时执行  
}, [dep1, dep2]);  
```  
  
下面是这两种情况的总结：  
  
- 当传递空数组 [] 时，useEffect 只会在组件挂载和卸载时调用一次，不会对组件进行重新渲染。  
- 当传递依赖数组时，useEffect 会在组件挂载和依赖项更新时调用，每次更新时都会检查依赖项列表是否有变化，如果有变化则重新执行。  
  
如果 useEffect 中使用了闭包函数，则应该确保所有引用的变量都在依赖项中被显示声明，否则可能会导致不必要的重新渲染或者无法获取最新的状态。  
# 如果在 useEffect 的第一个参数中 return 了一个函数，那么第二个参数分别传空数组和传依赖数组，该函数分别是在什么时候执行？  
在 React 中，当 useEffect 第一个参数中返回一个函数时，这个函数会在组件卸载时执行。当传递空数组 [] 时，useEffect 只会在组件挂载和卸载时调用一次，因此返回的函数也只会在组件卸载时执行一次。  
  
```js  
useEffect(() => {  
  // 在挂载时执行  
  
  return () => {  
    // 在卸载时执行  
  }  
}, []);  
```  
  
当传递依赖数组时，useEffect 会在组件挂载和依赖项更新时调用，因此返回的函数也会随着组件更新而执行。每次组件重新渲染时都会检查依赖项列表是否有变化，如果有变化则重新执行 useEffect，并在执行新的 useEffect 前先执行上一个 useEffect 返回的函数（如果存在）。  
  
```js  
useEffect(() => {  
  // 在挂载、依赖列表变化及卸载时执行  
  
  return () => {  
    // 在下一次 useEffect 执行前执行  
  }  
}, [dep1, dep2]);  
```  
  
需要注意，这个函数的作用通常是清除 effect 留下的副作用，例如取消定时器、取消订阅等等。在函数中应该清理掉之前设置的任何 effect，在组件卸载时避免不必要的内存泄漏和资源浪费。  
# 讲讲 React.memo 和 JS 的 memorize 函数的区别  
React.memo() 和 JS 的 memorize 函数都是用来对函数进行结果缓存，提高函数的性能表现。不过，它们之间还是有一些区别的：  
  
1. **适用范围不同**：React.memo() 主要适用于优化 React 组件的性能表现，而 memorize 函数可以用于任何 JavaScript 函数的结果缓存。  
2. **实现方式不同**：React.memo() 是一个 React 高阶组件（HOC），通过浅层比较 props 是否发生变化来决定是否重新渲染组件。而 memorize 函数则是通过将函数的输入参数及其计算结果保存到一个缓存对象中，以避免重复计算相同的结果。  
3. **缓存策略不同**：React.memo() 的缓存策略是浅比较（shallow compare），只比较props 的第一层属性值是否相等，不会递归比较深层嵌套对象或数组的内容。而 memorize 函数的缓存策略是将输入参数转换成字符串后，作为缓存的键值。如果传入的参数不是基本类型时，则需要自己实现缓存键值的计算。  
4. **应用场景不同**：React.memo() 主要适用于对不经常变化的组件进行性能优化，而 memorize 函数则主要适用于对计算量大、执行时间长的函数进行结果缓存。例如，对于状态不变的组件或纯函数，可以使用 React.memo() 进行优化；对于递归计算、复杂数学运算等耗时操作，可以使用 memorize 函数进行结果缓存。  
  
综上所述，React.memo() 和 JS 的 memorize 函数虽然都是用于提高函数的性能表现，但其适用范围、实现方式、缓存策略和应用场景等方面还是有一定的区别。开发者需要根据具体情况来选择合适的性能优化手段，以提高应用程序的性能和响应速度。  
# 怎么判断一个对象是否是 React 元素？  
如果想要判断一个对象是否是 React 元素，可以使用 `React.isValidElement()` 方法进行判断。该方法接收一个参数，返回一个布尔值，用于表示指定的对象是否是 React 元素。  
  
以下是一个示例代码：  
  
```javascript  
import React from 'react';  
  
const MyComponent = () => {  
  return <div>Hello, world!</div>;  
}  
  
const elem = <MyComponent />;  
  
console.log(React.isValidElement(elem)); // true  
console.log(React.isValidElement({}));   // false  
```  
  
在上述代码中，定义了一个简单的组件 `MyComponent`，并通过 JSX 语法创建了一个 React 元素 `elem`。然后，使用 `React.isValidElement()` 方法对 `elem` 和一个普通对象 `{}` 进行判断，并输出结果。  
  
需要注意的是，`React.isValidElement()` 方法只能用于判断是否为 React 元素，并不能判断元素的类型和其他属性。如果需要获取元素的类型或其他属性，可以直接访问元素的属性，例如 `type`、`props`、`key` 等。  
# 说说对 React 中Element、Component、Node、Instance 四个概念的理解  
在 React 中，Element、Component、Node、Instance 是四个重要的概念。  
  
1. Element：Element 是 React 应用中最基本的构建块，它是一个普通的 JavaScript 对象，用来描述 UI 的一部分。Element 可以是原生的 DOM 元素，也可以是自定义的组件。它的作用是用来向 React 描述开发者想在页面上 render 什么内容。Element 是不可变的，一旦创建就不能被修改。  
  
2. Component：Component 是 React 中的一个概念，它是由 Element 构成的，可以是函数组件或者类组件。Component 可以接收输入的数据（props），并返回一个描述 UI 的 Element。Component 可以被复用，可以在应用中多次使用。分为 `Class Component` 以及 `Function Component`。  
  
3. Node：Node 是指 React 应用中的一个虚拟节点，它是 Element 的实例。Node 包含了 Element 的所有信息，包括类型、属性、子节点等。Node 是 React 内部用来描述 UI 的一种数据结构，它可以被渲染成真实的 DOM 元素。  
  
4. Instance：Instance 是指 React 应用中的一个组件实例，它是 Component 的实例。每个 Component 在应用中都会有一个对应的 Instance，它包含了 Component 的所有状态和方法。Instance 可以被用来操作组件的状态，以及处理用户的交互事件等。  
  
  
# React 和 Vue 在技术层面有哪些区别？  
React 和 Vue 是当前比较流行的前端框架，它们在技术层面有以下区别：  
  
- 组件化方式不同：React 是基于组件实现的，组件包含了状态和行为，所有组件共享一个状态树。Vue 也是基于组件实现的，但是每个组件都有自己的状态，并且可以很容易地将数据和行为绑定在一起。  
  
- 数据驱动方式不同：React 使用单向数据流来管理数据，即从父组件到子组件的传递，所以 React 中组件之间的数据交互相对更加复杂。Vue 则使用双向数据绑定来管理数据，使得组件之间的数据交互更加简洁。  
  
- 模板语法不同：React 使用 JSX 语法，将 HTML 和 JavaScript 结合在一起，使得编写组件更加直观和灵活。Vue 则使用模板语法，并且支持模板内的表达式和指令，使得编写组件具有更高的可读性和可维护性。  
  
- 生命周期不同：React 组件的生命周期分为三个阶段：初始化、更新和卸载。Vue 组件的生命周期分为八个阶段：创建、挂载、更新、销毁等。  
  
- 状态管理方式不同：React 使用 Redux 或者 MobX 来管理应用程序的状态。Vue 则提供了自己的状态管理库 Vuex，可以更方便地管理组件之间的共享状态。  
  
- 性能优化方式不同：React 使用虚拟 DOM 技术来实现高效的渲染性能，可以减少每次渲染时需要操作真实 DOM 的次数。Vue 则使用模板编译和响应式系统来实现高效的渲染性能，并且还提供了一些优化技术，例如懒加载和缓存等。  
  
开发人员可以根据项目需求和个人喜好选择合适的框架。  
# 实现 useUpdate 方法，调用时强制组件重新渲染  
可以利用 `useReducer` 每次调用 `updateReducer` 方法，来达到强制组件重新渲染的目的。  
  
```js  
import { useReducer } from 'react';  
  
const updateReducer = (num: number): number => (num + 1) % 1_000_000;  
  
export default function useUpdate(): () => void {  
  const [, update] = useReducer(updateReducer, 0);  
  
  return update;  
}  
```  
# taro 的实现原理是怎么样的？  
  
  
Taro 是一个多端统一开发框架，可以使用一套代码编译成微信小程序、支付宝小程序、百度智能小程序、字节跳动小程序、QQ 小程序、快应用、H5 等多个平台的应用。  
  
Taro 的实现原理主要基于以下几个方面：  
  
1. **JSX 转换**：Taro 使用 Babel 插件将类似 HTML 的语法转换为 React 组件。在编译过程中，Taro 还会对 JSX 语法进行优化和压缩，以避免生成不必要的代码。  
  
2. **多端适配**：Taro 通过封装原生 API 和提供不同的 Polyfill 实现多端适配。例如，在微信小程序中，Taro 封装了 wx 对象，使得可以使用类似 React Native 的组件化开发方式；在 H5 中，Taro 则提供了针对浏览器的 Polyfill。  
  
3. **跨端样式处理**：Taro 通过 CSS Modules 技术和 PostCSS 插件来处理 CSS 样式。在编译过程中，Taro 会将样式文件转换为 JavaScript 对象，并按需导入到组件中。同时，Taro 提供了 @import 指令或 scss 语法等方式来支持复杂的样式表达。  
  
4. **构建系统**：Taro 使用 webpack 构建工具来打包编译后的代码，并提供了一系列开箱即用的插件、规则和配置项，例如自动化导入组件、静态资源压缩、TypeScript 支持等。  
  
5. **运行时性能优化**：Taro 在运行时对代码进行了一些优化，例如使用字典树实现 JSX 解析、避免使用内置事件监听器、减少对原生 API 的调用等方式来优化性能。  
  
Taro 利用 Babel、React、Webpack 等技术，通过封装原生 API 和提供不同的 Polyfill 实现了多端适配，同时也支持复杂的样式表达和自动化导入组件等特性。这些技术的应用使得 Taro 框架在性能、可维护性、跨平台等方面都表现出色。  
# taro 2.x 和 taro 3 最大区别是什么？  
`Taro 2.x` 和 `Taro 3` 的最大区别可以总结为以下几个方面：  
  
1. **编译方式**：Taro 2.x 使用 Gulp 构建工具进行编译，而 Taro 3 改为使用 Webpack 进行构建。这使得 Taro 3 在编译速度、可扩展性、构建配置等方面有了更好的表现。  
  
2. **React 版本升级**：Taro 2.x 使用的是 React 16 版本，而 Taro 3 升级到了 React 17 版本。React 17 引入了一些新特性，例如以初始渲染器为基础的事件处理、重新设计的事件系统等，从而提高了性能和稳定性。  
  
3. **API 改进**：Taro 3 对 API 进行了改进，并引入了新的特性。例如，在 JSX 中可以使用 class 关键字来定义 CSS 样式；增加 useReady 钩子函数在小程序生命周期 onReady 被触发时执行；引入了快应用和 H5 等新平台的支持等。  
  
4. **插件机制**：Taro 3 引入了插件机制，使得开发者可以通过插件实现更多的功能和特性，例如对 TypeScript 支持的扩展、国际化支持等。  
  
5. **性能优化**：Taro 3 在性能方面进行了优化，例如使用虚拟 DOM 进行局部更新，减少对原生 API 的调用等。同时，Taro 3 可以根据平台的不同生成更小的代码包。  
  
`Taro 3` 引入了一些新特性和优化，并提高了性能、可扩展性和稳定性。  
  
如果需要使用 Taro 框架开发多端应用，建议选择 Taro 3。  
  
  
  
  
  
  
  
# 单页应用如何提高加载速度？  
  
* 使用代码分割：将代码拆分成小块并按需加载（懒加载），以避免不必要的网络请求和减少加载时间。  
* 缓存资源：利用浏览器缓存来存储重复使用的文件，例如 CSS 和 JS 文件、图片等。  
* 预加载关键资源：在首次渲染之前，先提前加载关键资源，例如首页所需的 JS、CSS 或数据，以保证关键内容的快速呈现。  
* 使用合适的图片格式：选择合适的图片格式（例如 JPEG、PNG、WebP 等），并根据需要进行压缩以减少文件大小。对于一些小图标，可以使用 `iconfont` 等字体文件来代替。  
* 启用 Gzip 压缩：使用服务器端的 Gzip 压缩算法对文件进行压缩，以减少传输时间和带宽消耗。  
* 使用 CDN：使用内容分发网络（CDN）来缓存和传递文件，以提高文件的下载速度和可靠性。  
* 优化 API 请求：尽可能地减少 API 调用的数量，并使用缓存和延迟加载等技术来优化 API 请求的效率。  
* 使用服务器端渲染：使用服务器端渲染（SSR）来生成 HTML，以减少客户端渲染所需的时间和资源。但需要注意，SSR 也可能增加了服务器的负担并使网站更复杂。  
# React 中的 ref 有什么用？  
使用 refs 获取。组件被调用时会新建一个该组件的实例。refs 会指向这个实例，可以是一个回调函数，回调函数会在组件被挂载后立即执行。  
  
如果把 refs 放到原生 DOM 组件的 input 中，我们就可以通过 refs 得到 DOM 节点；如果把 refs 放到 React 组件中，那么我们获得的就是组件的实例，因此就可以调用实例的方法（如果想访问该组件的真实 DOM，那么可以用 React.findDOMNode 来找到 DOM 节点，但是不推崇此方法）。  
  
refs 无法用于无状态组件，无状态组件挂载时只是方法调用，没有新建实例。在 v16 之后，可以使用 useRef。  
# react-router 里的 <Link> 标签和 <a> 标签有什么区别？  
对比 <a> 标签, Link 避免了不必要的重新渲染。  
  
react-router是伴随着react框架出现的路由系统，它也是公认的一种优秀的路由解决方案。在使用react-router时候，我们常常会使用其自带的路径跳转组件Link,通过实现跳转；  
  
react-router 接管了其默认的链接跳转行为，与传统的页面跳转有区别的是，Link 的 **“跳转”** 行为只会触发相匹配的对应的页面内容更新，而不会刷新整个页面。  
  
Link 跳转做了三件事情：  
  
* 有onclick那就执行onclick  
* click的时候阻止a标签默认事件  
* 根据跳转 href，用 history 跳转，此时只是链接变了，并没有刷新页面  
  
而 a 标签就是普通的超链接了，用于从当前页面跳转到href指向的另一个页面（非锚点情况）。  
  
# 说说React Jsx转换成真实DOM过程？  
## 一、是什么  
  
`react`通过将组件编写的`JSX`映射到屏幕，以及组件中的状态发生了变化之后 `React`会将这些「变化」更新到屏幕上  
  
在前面文章了解中，`JSX`通过`babel`最终转化成`React.createElement`这种形式，例如：  
  
```jsx  
<div>  
  <img src="avatar.png" className="profile" />  
  <Hello />  
</div>  
```  
  
会被`babel`转化成如下：  
  
```jsx  
React.createElement(  
  "div",  
  null,  
  React.createElement("img", {  
    src: "avatar.png",  
    className: "profile"  
  }),  
  React.createElement(Hello, null)  
);  
```  
  
在转化过程中，`babel`在编译时会判断 JSX 中组件的首字母：  
  
- 当首字母为小写时，其被认定为原生 `DOM` 标签，`createElement` 的第一个变量被编译为字符串  
  
- 当首字母为大写时，其被认定为自定义组件，createElement 的第一个变量被编译为对象  
  
最终都会通过`RenderDOM.render(...)`方法进行挂载，如下：  
  
```jsx  
ReactDOM.render(<App />,  document.getElementById("root"));  
```  
  
  
  
## 二、过程  
  
在`react`中，节点大致可以分成四个类别：  
  
- 原生标签节点  
- 文本节点  
- 函数组件  
- 类组件  
  
如下所示：  
  
```jsx  
class ClassComponent extends Component {  
  static defaultProps = {  
    color: "pink"  
  };  
  render() {  
    return (  
      <div className="border">  
        <h3>ClassComponent</h3>  
        <p className={this.props.color}>{this.props.name}</p >  
      </div>  
    );  
  }  
}  
  
function FunctionComponent(props) {  
  return (  
    <div className="border">  
      FunctionComponent  
      <p>{props.name}</p >  
    </div>  
  );  
}  
  
const jsx = (  
  <div className="border">  
    <p>xx</p >  
    < a href=" ">xxx</ a>  
    <FunctionComponent name="函数组件" />  
    <ClassComponent name="类组件" color="red" />  
  </div>  
);  
```  
  
这些类别最终都会被转化成`React.createElement`这种形式  
  
`React.createElement`其被调用时会传⼊标签类型`type`，标签属性`props`及若干子元素`children`，作用是生成一个虚拟`Dom`对象，如下所示：  
  
```js  
function createElement(type, config, ...children) {  
    if (config) {  
        delete config.__self;  
        delete config.__source;  
    }  
    // ! 源码中做了详细处理，⽐如过滤掉key、ref等  
    const props = {  
        ...config,  
        children: children.map(child =>  
   typeof child === "object" ? child : createTextNode(child)  
  )  
    };  
    return {  
        type,  
        props  
    };  
}  
function createTextNode(text) {  
    return {  
        type: TEXT,  
        props: {  
            children: [],  
            nodeValue: text  
        }  
    };  
}  
export default {  
    createElement  
};  
```  
  
`createElement`会根据传入的节点信息进行一个判断：  
  
- 如果是原生标签节点， type 是字符串，如div、span  
- 如果是文本节点， type就没有，这里是 TEXT  
- 如果是函数组件，type 是函数名  
- 如果是类组件，type 是类名  
  
虚拟`DOM`会通过`ReactDOM.render`进行渲染成真实`DOM`，使用方法如下：  
  
```jsx  
ReactDOM.render(element, container[, callback])  
```  
  
当首次调用时，容器节点里的所有 `DOM` 元素都会被替换，后续的调用则会使用 `React` 的 `diff`算法进行高效的更新  
  
如果提供了可选的回调函数`callback`，该回调将在组件被渲染或更新之后被执行  
  
`render`大致实现方法如下：  
  
```js  
function render(vnode, container) {  
    console.log("vnode", vnode); // 虚拟DOM对象  
    // vnode _> node  
    const node = createNode(vnode, container);  
    container.appendChild(node);  
}  
  
// 创建真实DOM节点  
function createNode(vnode, parentNode) {  
    let node = null;  
    const {type, props} = vnode;  
    if (type === TEXT) {  
        node = document.createTextNode("");  
    } else if (typeof type === "string") {  
        node = document.createElement(type);  
    } else if (typeof type === "function") {  
        node = type.isReactComponent  
            ? updateClassComponent(vnode, parentNode)  
        : updateFunctionComponent(vnode, parentNode);  
    } else {  
        node = document.createDocumentFragment();  
    }  
    reconcileChildren(props.children, node);  
    updateNode(node, props);  
    return node;  
}  
  
// 遍历下子vnode，然后把子vnode->真实DOM节点，再插入父node中  
function reconcileChildren(children, node) {  
    for (let i = 0; i < children.length; i++) {  
        let child = children[i];  
        if (Array.isArray(child)) {  
            for (let j = 0; j < child.length; j++) {  
                render(child[j], node);  
            }  
        } else {  
            render(child, node);  
        }  
    }  
}  
function updateNode(node, nextVal) {  
    Object.keys(nextVal)  
        .filter(k => k !== "children")  
        .forEach(k => {  
        if (k.slice(0, 2) === "on") {  
            let eventName = k.slice(2).toLocaleLowerCase();  
            node.addEventListener(eventName, nextVal[k]);  
        } else {  
            node[k] = nextVal[k];  
        }  
    });  
}  
  
// 返回真实dom节点  
// 执行函数  
function updateFunctionComponent(vnode, parentNode) {  
    const {type, props} = vnode;  
    let vvnode = type(props);  
    const node = createNode(vvnode, parentNode);  
    return node;  
}  
  
// 返回真实dom节点  
// 先实例化，再执行render函数  
function updateClassComponent(vnode, parentNode) {  
    const {type, props} = vnode;  
    let cmp = new type(props);  
    const vvnode = cmp.render();  
    const node = createNode(vvnode, parentNode);  
    return node;  
}  
export default {  
    render  
};  
```  
  
  
  
  
  
## 三、总结  
  
在`react`源码中，虚拟`Dom`转化成真实`Dom`整体流程如下图所示：  
  
 ![](https://static.vue-js.com/28824fa0-f00a-11eb-ab90-d9ae814b240d.png)  
  
其渲染流程如下所示：  
  
- 使用React.createElement或JSX编写React组件，实际上所有的 JSX 代码最后都会转换成React.createElement(...) ，Babel帮助我们完成了这个转换的过程。  
- createElement函数对key和ref等特殊的props进行处理，并获取defaultProps对默认props进行赋值，并且对传入的孩子节点进行处理，最终构造成一个虚拟DOM对象  
- ReactDOM.render将生成好的虚拟DOM渲染到指定容器上，其中采用了批处理、事务等机制并且对特定浏览器进行了性能优化，最终转换为真实DOM  
  
  
# 说说你对React Router的理解？常用的Router组件有哪些？  
## 一、是什么  
  
`react-router`等前端路由的原理大致相同，可以实现无刷新的条件下切换显示不同的页面  
  
路由的本质就是页面的`URL`发生改变时，页面的显示结果可以根据`URL`的变化而变化，但是页面不会刷新  
  
因此，可以通过前端路由可以实现单页(SPA)应用  
  
`react-router`主要分成了几个不同的包：  
  
- react-router: 实现了路由的核心功能  
- react-router-dom： 基于 react-router，加入了在浏览器运行环境下的一些功能  
- react-router-native：基于 react-router，加入了 react-native 运行环境下的一些功能  
  
- react-router-config: 用于配置静态路由的工具库  
  
  
  
  
  
## 二、有哪些  
  
这里主要讲述的是`react-router-dom`的常用`API`，主要是提供了一些组件：  
  
- BrowserRouter、HashRouter  
- Route  
- Link、NavLink  
- switch  
- redirect  
  
  
  
### BrowserRouter、HashRouter  
  
`Router`中包含了对路径改变的监听，并且会将相应的路径传递给子组件  
  
`BrowserRouter`是`history`模式，`HashRouter`模式  
  
使用两者作为最顶层组件包裹其他组件  
  
```jsx  
import { BrowserRouter as Router } from "react-router-dom";  
  
export default function App() {  
  return (  
    <Router>  
      <main>  
        <nav>  
          <ul>  
            <li>  
              < a href=" ">Home</ a>  
            </li>  
            <li>  
              < a href="/about">About</ a>  
            </li>  
            <li>  
              < a href="/contact">Contact</ a>  
            </li>  
          </ul>  
        </nav>  
      </main>  
    </Router>  
  );  
}  
```  
  
  
  
### Route  
  
`Route`用于路径的匹配，然后进行组件的渲染，对应的属性如下：  
  
- path 属性：用于设置匹配到的路径  
- component 属性：设置匹配到路径后，渲染的组件  
- render 属性：设置匹配到路径后，渲染的内容  
- exact 属性：开启精准匹配，只有精准匹配到完全一致的路径，才会渲染对应的组件  
  
```jsx  
import { BrowserRouter as Router, Route } from "react-router-dom";  
  
export default function App() {  
  return (  
    <Router>  
      <main>  
        <nav>  
          <ul>  
            <li>  
              < a href="/">Home</ a>  
            </li>  
            <li>  
              < a href="/about">About</ a>  
            </li>  
            <li>  
              < a href="/contact">Contact</ a>  
            </li>  
          </ul>  
        </nav>  
        <Route path="/" render={() => <h1>Welcome!</h1>} />  
      </main>  
    </Router>  
  );  
}  
```  
  
  
  
  
  
### Link、NavLink  
  
通常路径的跳转是使用`Link`组件，最终会被渲染成`a`元素，其中属性`to`代替`a`标题的`href`属性  
  
`NavLink`是在`Link`基础之上增加了一些样式属性，例如组件被选中时，发生样式变化，则可以设置`NavLink`的一下属性：  
  
- activeStyle：活跃时（匹配时）的样式  
- activeClassName：活跃时添加的class  
  
如下：  
  
```js  
<NavLink to="/" exact activeStyle={{color: "red"}}>首页</NavLink>  
<NavLink to="/about" activeStyle={{color: "red"}}>关于</NavLink>  
<NavLink to="/profile" activeStyle={{color: "red"}}>我的</NavLink>  
```  
  
如果需要实现`js`实现页面的跳转，那么可以通过下面的形式：  
  
通过`Route`作为顶层组件包裹其他组件后,页面组件就可以接收到一些路由相关的东西，比如`props.history`  
  
```jsx  
const Contact = ({ history }) => (  
  <Fragment>  
    <h1>Contact</h1>  
    <button onClick={() => history.push("/")}>Go to home</button>  
    <FakeText />  
  </Fragment>  
);  
```  
  
`props `中接收到的`history`对象具有一些方便的方法，如`goBack`，`goForward`,`push`  
  
  
  
### redirect  
  
用于路由的重定向，当这个组件出现时，就会执行跳转到对应的`to`路径中，如下例子：  
  
```js  
const About = ({  
  match: {  
    params: { name },  
  },  
}) => (  
  // props.match.params.name  
  <Fragment>  
    {name !== "tom" ? <Redirect to="/" /> : null}  
    <h1>About {name}</h1>  
    <FakeText />  
  </Fragment>  
)  
```  
  
上述组件当接收到的路由参数`name` 不等于 `tom` 的时候，将会自动重定向到首页  
  
  
  
  
  
### switch  
  
`swich`组件的作用适用于当匹配到第一个组件的时候，后面的组件就不应该继续匹配  
  
如下例子：  
  
```jsx  
<Switch>  
  <Route exact path="/" component={Home} />  
  <Route path="/about" component={About} />  
  <Route path="/profile" component={Profile} />  
  <Route path="/:userid" component={User} />  
  <Route component={NoMatch} />  
</Switch>  
```  
  
如果不使用`switch`组件进行包裹，相同 path 的就会被匹配到，然后一起展示。  
  
  
除了一些路由相关的组件之外，`react-router`还提供一些`hooks`，如下：  
  
- useHistory  
- useParams  
- useLocation  
  
  
  
### useHistory  
  
`useHistory`可以让组件内部直接访问`history`，无须通过`props`获取  
  
```js  
import { useHistory } from "react-router-dom";  
  
const Contact = () => {  
  const history = useHistory();  
  return (  
    <Fragment>  
      <h1>Contact</h1>  
      <button onClick={() => history.push("/")}>Go to home</button>  
    </Fragment>  
  );  
};  
```  
  
  
  
### useParams  
  
  
  
```jsx  
const About = () => {  
  const { name } = useParams();  
  return (  
    // props.match.params.name  
    <Fragment>  
      {name !== "John Doe" ? <Redirect to="/" /> : null}  
      <h1>About {name}</h1>  
      <Route component={Contact} />  
    </Fragment>  
  );  
};  
```  
  
  
  
### useLocation  
  
`useLocation` 会返回当前 `URL `的 `location `对象  
  
```jsx  
import { useLocation } from "react-router-dom";  
  
const Contact = () => {  
  const { pathname } = useLocation();  
  
  return (  
    <Fragment>  
      <h1>Contact</h1>  
      <p>Current URL: {pathname}</p >  
    </Fragment>  
  );  
};  
```  
  
  
  
  
  
## 三、参数传递  
  
这些路由传递参数主要分成了三种形式：  
  
- 动态路由的方式  
- search传递参数  
- to传入对象  
  
  
  
### 动态路由  
  
动态路由的概念指的是路由中的路径并不会固定  
  
例如将`path`在`Route`匹配时写成`/detail/:id`，那么 `/detail/abc`、`/detail/123`都可以匹配到该`Route`  
  
```jsx  
<NavLink to="/detail/abc123">详情</NavLink>  
  
<Switch>  
    ... 其他Route  
    <Route path="/detail/:id" component={Detail}/>  
    <Route component={NoMatch} />  
</Switch>  
```  
  
获取参数方式如下：  
  
```jsx  
console.log(props.match.params.xxx)  
```  
  
  
  
### search传递参数  
  
在跳转的路径中添加了一些query参数；  
  
```jsx  
<NavLink to="/detail2?name=why&age=18">详情2</NavLink>  
  
<Switch>  
  <Route path="/detail2" component={Detail2}/>  
</Switch>  
```  
  
获取形式如下：  
  
```js  
console.log(props.location.search)  
```  
  
  
  
  
  
### to传入对象  
  
传递方式如下：  
  
```jsx  
<NavLink to={{  
    pathname: "/detail2",   
    query: {name: "kobe", age: 30},  
    state: {height: 1.98, address: "洛杉矶"},  
    search: "?apikey=123"  
  }}>  
  详情2  
</NavLink>  
```  
  
获取参数的形式如下：  
  
```js  
console.log(props.location)  
```  
  
# 说说React Router有几种模式，以及实现原理？  
## 一、是什么  
  
在单页应用中，一个`web`项目只有一个`html`页面，一旦页面加载完成之后，就不用因为用户的操作而进行页面的重新加载或者跳转，其特性如下：  
  
- 改变 url 且不让浏览器向服务器发送请求  
  
- 在不刷新页面的前提下动态改变浏览器地址栏中的URL地址  
  
其中主要分成了两种模式：  
  
- hash 模式：在url后面加上#，如http://127.0.0.1:5500/home/#/page1  
- history 模式：允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录  
  
  
## 二、使用  
  
`React Router`对应的`hash`模式和`history`模式对应的组件为：  
  
- HashRouter  
- BrowserRouter  
  
  
这两个组件的使用都十分的简单，作为最顶层组件包裹其他组件，如下所示  
  
```jsx  
// 1.import { BrowserRouter as Router } from "react-router-dom";  
// 2.import { HashRouter as Router } from "react-router-dom";  
  
import React from 'react';  
import {  
  BrowserRouter as Router,  
  // HashRouter as Router    
  Switch,  
  Route,  
} from "react-router-dom";  
import Home from './pages/Home';  
import Login from './pages/Login';  
import Backend from './pages/Backend';  
import Admin from './pages/Admin';  
  
  
function App() {  
  return (  
    <Router>  
        <Route path="/login" component={Login}/>  
        <Route path="/backend" component={Backend}/>  
        <Route path="/admin" component={Admin}/>  
        <Route path="/" component={Home}/>  
    </Router>  
  );  
}  
  
export default App;  
```  
  
  
  
## 三、实现原理  
  
路由描述了 `URL` 与 `UI `之间的映射关系，这种映射是单向的，即 URL 变化引起 UI 更新（无需刷新页面）  
  
下面以`hash`模式为例子，改变`hash`值并不会导致浏览器向服务器发送请求，浏览器不发出请求，也就不会刷新页面  
  
`hash` 值改变，触发全局 `window` 对象上的 `hashchange` 事件。所以 `hash` 模式路由就是利用 `hashchange` 事件监听 `URL` 的变化，从而进行 `DOM` 操作来模拟页面跳转  
  
`react-router`也是基于这个特性实现路由的跳转  
  
下面以`HashRouter`组件分析进行展开：  
  
  
## HashRouter  
  
`HashRouter`包裹了整应用，  
  
通过`window.addEventListener('hashChange',callback)`监听`hash`值的变化，并传递给其嵌套的组件  
  
然后通过`context`将`location`数据往后代组件传递，如下：  
  
```jsx  
import React, { Component } from 'react';  
import { Provider } from './context'  
// 该组件下Api提供给子组件使用  
class HashRouter extends Component {  
  constructor() {  
    super()  
    this.state = {  
      location: {  
        pathname: window.location.hash.slice(1) || '/'  
      }  
    }  
  }  
  // url路径变化 改变location  
  componentDidMount() {  
    window.location.hash = window.location.hash || '/'  
    window.addEventListener('hashchange', () => {  
      this.setState({  
        location: {  
          ...this.state.location,  
          pathname: window.location.hash.slice(1) || '/'  
        }  
      }, () => console.log(this.state.location))  
    })  
  }  
  render() {  
    let value = {  
      location: this.state.location  
    }  
    return (  
      <Provider value={value}>  
        {  
          this.props.children  
        }  
      </Provider>  
    );  
  }  
}  
  
export default HashRouter;  
  
```  
  
  
### Router  
  
`Router`组件主要做的是通过`BrowserRouter`传过来的当前值，通过`props`传进来的`path`与`context`传进来的`pathname`进行匹配，然后决定是否执行渲染组件  
  
```js  
import React, { Component } from 'react';  
import { Consumer } from './context'  
const { pathToRegexp } = require("path-to-regexp");  
class Route extends Component {  
  render() {  
    return (  
      <Consumer>  
        {  
          state => {  
            console.log(state)  
            let {path, component: Component} = this.props  
            let pathname = state.location.pathname  
            let reg = pathToRegexp(path, [], {end: false})  
            // 判断当前path是否包含pathname  
            if(pathname.match(reg)) {  
              return <Component></Component>  
            }  
            return null  
          }  
        }  
      </Consumer>  
    );  
  }  
}  
export default Route;  
  
```  
  
  
# 使用 useState （const [test, setTest] = useState([])）时，为什么连续调用 setTest({...test, newValue}) 会出现值的丢失？  
useState是异步执行的，也就是执行 setTest 后，不会立即更新 test 的结果，多次调用时，出现了值覆盖的情况。  
  
如果本次的状态更新依赖于上一次最近的状态更新，那么我们可以给 setTest 传递一个函数进去，函数的参数即为最后一次更新的状态的值：  
  
```react  
setTest(prevState => ([  
	...prevState,  
    newValue  
]))  
```  
# React18新特性  
React 团队在 2022 年 3 月 29 日正式发布了 React 的第 18 个版本。 我将在这篇文章里简单介绍 React 18 的新特性，React Concurrent Mode（并发模式）的实现，以及简要的升级指南。  
  
# New Features  
  
## Automatic Batching  
  
早在 React 18 之前，React 就已经可以对 state 更新进行批处理了：  
  
```ts  
function App() {  
  const [count, setCount] = useState(0);  
  
  const [flag, setFlag] = useState(false);  
  
  function handleClick() {  
    setCount((c) => c + 1); // Does not re-render yet  
  
    setFlag((f) => !f); // Does not re-render yet  
  
    // React will only re-render once at the end (that's batching!)  
  }  
  
  return (  
    <div>  
      <div>{count}</div>  
      <button onClick={handleClick}>Next</button>  
    </div>  
  );  
}  
```  
  
上面这个例子中，用户点击按钮时会产生两次 state 的更新，按理来说每次 state 更新都会导致一次 re-render。但是，这两次更新完全可以合成一次，从而减少无谓的 re-render 带来的性能损失。  
  
这种批处理只限于 React 原生事件内部的更新。  
  
在 React 18 中，批处理支持处理的操作范围扩大了：Promise，setTimeout，native event handlers 等这些非 React 原生的事件内部的更新也会得到合并：  
  
```ts  
// Before: only React events were batched.  
  
setTimeout(() => {  
  setCount((c) => c + 1);  
  
  setFlag((f) => !f);  
  
  // React will render twice, once for each state update (no batching)  
}, 1000);  
  
// After: updates inside of timeouts, promises,  
  
// native event handlers or any other event are batched.  
  
setTimeout(() => {  
  setCount((c) => c + 1);  
  
  setFlag((f) => !f);  
  
  // React will only re-render once at the end (that's batching!)  
}, 1000);  
```  
  
## Transitions  
  
Transitions 是 React 中一个用于区分高优更新和非高优更新的新概念。  
  
- 高优的更新/渲染：包括鼠标点击、打字等对实时交互性要求很高的更新场景，卡顿时会影响用户的交互行为，使用户明显感到整个页面卡顿。  
  
- 非高优的更新/渲染：普通的 UI 更新，不与用户的交互相关，一些对更新实时性要求没那么高的场景。  
  
这里有一个 [demo](https://react-fractals-git-react-18-swizec.vercel.app/)，上方是一个滑动条用于控制下方树的倾角，最顶上的扇区展示了当前的掉帧情况，当用户拉动滚动条时，下方的树的每一个节点都会重新渲染，这会带来明显的卡顿，不仅是下方树的渲染卡顿，上方的滚动条也会无法实时跟着用户的交互移动，这会给用户带来明显的卡顿感。  
  
类似场景下常见的做法应该是 `debounce` 或 `throttle` ，React 18 为我们提供了原生的方式来解决这个问题：使用 `starTransition` 和 `useTransition`。  
  
- `starTransition`：用于标记非紧急的更新，用 `starTransition` 包裹起来就是告诉 React，这部分代码渲染的优先级不高，可以优先处理其它更重要的渲染。用法如下：  
  
```ts  
import { startTransition } from "react";  
  
// Urgent  
setSliderValue(input);  
  
// Mark any state updates inside as transitions  
startTransition(() => {  
  // Transition: Show the results, non-urgent  
  setGraphValue(input);  
});  
```  
  
- useTransition：除了能提供 startTransition 以外，还能提供一个变量来跟踪当前渲染的执行状态：  
  
```ts  
import { useTransition } from "react";  
  
const [isPending, startTransition] = useTransition();  
  
return isPending && <Spinner />;  
```  
  
在勾选了 Use startTransition 后 ，滑动条的更新渲染不会再被树的渲染阻塞了，尽管树叶的渲染仍然需要较多的时间，但是用户使用起来不再有之前那么卡顿了。  
  
## Suspense  
  
Suspense 是 React 提供的用于声明 UI 加载状态的 API：  
  
```ts  
<Suspense fallback={<Loading />}>  
  <ComponentThatSuspends />  
  <Sibling />  
</Suspense>  
```  
  
<ComponentThatSuspends />  
  
<Sibling />  
  
</Suspense>  
  
上面这串代码里，组件 `ComponentThatSuspends` 在请求处理数据过程中，React 会在它的位置上展示 Loading 组件。  
  
React 16 和 17 中也已经有 Suspense 了，但是它不是完全体，有许多功能仍未就绪。在 React 团队的计划中，Suspense 的完全体是基于 Concurrent React 的，所以在 React 18，Suspense 相较之前有了一些变化。  
  
### `ComponentThatSuspends` 的兄弟组件会被中断  
  
还是上面那个例子：  
  
```ts  
<Suspense fallback={<Loading />}>  
  <ComponentThatSuspends />  
  <Sibling />  
</Suspense>  
```  
  
<ComponentThatSuspends />  
  
<Sibling />  
  
</Suspense>  
  
- Legacy Suspense 中，同级兄弟组件会立即挂载（mounted）到 DOM，相关的 effects 和生命周期会被触发，最后会隐藏这个组件。具体可以查看 [代码示例](https://codesandbox.io/s/keen-banach-nzut8?file=/src/App.js)。  
  
- Concurrent Suspense 中，同级兄弟组件并不会从 DOM 上卸载，相关的 effects 和生命周期会在 ComponentThatSuspends 处理完成时触发。具体可以查看 [代码示例](https://codesandbox.io/s/romantic-architecture-ht3qi?file=/src/App.js)。  
  
### Suspense 边界之外的 ref  
  
另一个差异是父级 ref 传入的时间：  
  
```ts  
<Suspense fallback={<Loading />}>  
  <ComponentThatSuspends />  
  <Sibling />  
</Suspense>  
```  
  
</Suspense>  
  
- 在 Legacy Suspense 中，在渲染之初 `refPassedFromParent.current` 立即指向 DOM 节点，此时 `ComponentThatSuspends` 还未处理完成。  
  
- 在 Concurrent Suspense 中，在 `ComponentThatSuspends` 完成处理、Suspense 边界解除锁定之前 `refPassedFromParent.current` 一直为 null。  
  
也就是说，在父级代码中访问此类 ref 都需要关注当前 ref 是否已经指向相应的节点。  
  
### Suspense for SSR  
  
React 18 之前的 SSR， 客户端必须一次性的等待 HTML 数据加载到服务器上并且等待所有 JavaScript 加载完毕之后再开始 hydration， 等待所有组件 hydration 后，才能进行交互。即整个过程需要完成从获取数据（服务器）→ 渲染到 HTML（服务器）→ 加载代码（客户端）→ 水合物（客户端）这一套流程。这样的 SSR 并不能使我们的完全可交互变快，只是提高了用户的感知静态页面内容的速度。  
  
React 18 的 Suspense：  
  
- 服务器不需要等待被 Suspense 包裹组件是否加载到完毕，即可发送 HTML，而代替 Suspense 包裹的组件是 fallback 中的内容，一般是一个占位符（spinner），以最小内联 `<script>` 标签标记此 HTML 的位置。等待服务器上组件的数据准备好后，React 再将剩余的 HTML 发送到同一个流中。  
  
- hydration 的过程是逐步的，不需要等待所有的 js 加载完毕再开始 hydration，避免了页面的卡顿。  
  
- React 会提前监听页面上交互事件（如鼠标的点击），对发生交互的区域优先进行 hydration。  
  
## New Client and Server Rendering APIs  
  
### Client  
  
- `createRoot`  
  - 新的 root API，在 React 就版本中都是通过 `ReactDom.render` 将应用组件渲染到页面的根元素，在 React 18 中，只有使用 `ReactDom.createRoot` 才能使用新特性。  
  
```ts  
import * as ReactDOM from "react-dom";  
import App from "./App";  
  
// before React 18  
const root = document.getElementById("app");  
ReactDOM.render(<App />, root);  
  
// React 18  
const root = ReactDOM.createRoot(document.getElementById("app"));  
root.render(<App />, root);  
```  
  
- `hydrateRoot`：同理，用于替代 ReactDOM.hydrate。  
  
### Server  
  
`renderToPipeableStream` 用于 Node 环境，实现流式传输；`renderToReadableStream` 用于 Deno 或 Cloudflare workers 等更现代的运行时中。  
  
## New Hooks  
  
- `useTransition`：见上  
  
- `useDeferredValue`  
  
  - startTransition 可以用来标记低优先的 state 更新；而 useDeferredValue 可以用来标记低优先的变量。  
  
  - 下方代码的具体效果是当 `input` 的值改变时，返回的 `graphValue` 并不会立即改变，会首先返回上一次的 `input` 值，如果当前不存在更紧急的更新，才会变成最新的 `input`，因此可以通过 `graphValue` 是否改变来进行一些低优先级的更新。可以在渲染比较耗时的情况下把优先级滞后，在多数情况不会存在不必要的延迟。在较快的机器上，滞后会更少或者根本不存在，在较慢的机器上，会变得更明显。但不论哪种情况，应用都会保持可响应。  
  
```ts  
import { useDeferredValue } from "react";  
  
const Comp = (input) => {  
  const graphValue = useDeferredValue(input); // ...updating depends on graphValue  
};  
```  
  
### 不常用的 hooks  
  
以下的新 hook 主要用于解决 SSR 相关的问题或者是为第三方库的开发设计的，对于普通 React 应用开发者来说几乎用不到：  
  
- `useId` 用于解决 SSR 时客户端与服务端难以生成统一的 ID 的问题。  
  
- `useSyncExternalStore` 是一个为第三方库编写提供的新 hook，主要用于支持 React 18 在 concurrent rendering 下与第三方 store 的数据同步问题。  
  
- `useInsertionEffect` 主要用于提高第三方 CSS in JS 库渲染过程中样式注入的性能。  
  
# Concurrent Rendering  
  
React 18 最重要的更新就是全面启用了 concurrent rendering。它不能算是新功能，实际上是 React 内部工作方式的重大变化。为了最终实现 concurrent rendering，React 布局已久。  
  
## 问题  
  
在页面元素很多，且需要频繁 re-render 的场景下，React 15 会出现掉帧的现象。其根本原因是大量的同步计算任务阻塞了浏览器的 UI 渲染。JS 运算、页面布局和绘制都是运行在浏览器的主线程当中，他们之间是互斥的。如果 JS 运算持续占用主线程，页面就没法得到及时的更新。当我们更新 state 触发 re-render 时，React 会遍历应用的所有节点，计算出差异，然后再更新 UI。更新一旦开始，中途就无法中断，直到遍历完整棵树，才能释放主线程。如果页面元素很多，整个过程占用的时机就可能超过 16ms，造成浏览器卡顿。  
  
可以看到，React 15 的实现导致浏览器卡顿的关键在于每一次 re-render 开始了就无法停止，所以 React 团队想了一种解决方法：把 re-render 变成 **可中断** 的。  
  
## 实现  
  
### 思路  
  
- 将 re-render 时的 JS 计算拆分成更小粒度的任务，可以随时暂停、继续和丢弃执行的任务。  
  
- 当 JS 计算的时间达到 16 毫秒之后使其暂停，把主线程让给 UI 绘制，防止出现渲染掉帧的问题。  
  
- 在浏览器空闲的时候继续执行之前没执行完的小任务。  
  
### 架构演进  
  
React 15 时期还没有 concurrent 的概念。它主要分为 Reconciler 和 Renderer 两部分：Reconciler 负责生成虚拟 DOM 并进行 diff，找出变动的虚拟 DOM，然后 Renderer 负责将变化的组件渲染到不同的宿主环境中。  
  
React 16 的架构改动较大，多了一层 Scheduler，并且 Reconciler 的部分基于 Fiber 完成了重构。  
  
React 17 相较先前并没有在架构上有大的改动，它是一个用以稳定 concurrent mode 的过渡版本，另外，它使用 Lanes 重构了优先级算法。  
  
### Reconciler  
  
重构以前的 React Reconciler 是基于栈实现的，重构后的 React Reconciler 是基于 Fiber 实现的。  
  
#### Fiber  
  
Fiber 是一种数据结构，源码定义在 [这里](https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js#L66-L193)。简化来讲，它的主要结构如下：  
  
```ts  
{  
    ...  
    stateNode, // 一般为 ReactComponent  
               // 的实例或者 DOM 元素  
    child,     // 子 Fiber 节点  
    sibling,   // 同层的下一个 Fiber 节点  
    return,    // 指向父节点  
    alternate, // 连接 Current Fiber 树和  
               // workInProgress Fiber 树  
    ...  
}  
```  
  
ReactElement，Fiber，DOM 三者的关系：  
  
- ReactElement：所有采用 JSX 语法书写的节点都会被转译，最终会以`React.createElement(...)` 的方式，创建出来一个与之对应的 ReactElement 对象。  
  
- Fiber：Fiber 对象是通过 ReactElement 对象进行创建的，多个 Fiber 对象构成了一棵 Fiber 树，Fiber 树是构造 DOM 树的数据模型，Fiber 树的任何改动，最后都体现到 DOM 树上。  
  
- DOM：将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合，也就是常说的 DOM 树。JS 可以访问和操作存储在 DOM 中的内容，也就是操作 DOM 对象，进而触发 UI 渲染。  
  
开发人员通过编程只能控制 ReactElement 树的结构，ReactElement 树驱动 Fiber 树，Fiber 树再驱动 DOM 树，最后展现到页面上。所以 Fiber 树的构造过程，其核心就是 ReactElement 对象到 Fiber 对象的转换过程。（因为篇幅问题，此处不做过多展开。）  
  
#### 双缓存  
  
React 应用中最多同时存在两棵 Fiber 树。当前屏幕上显示内容对应的 Fiber 树叫做 Current Fiber，正在内存中构建的 Fiber 树叫做 workInProgress Fiber，他们通过 alternate 属性相互连接。当 workInProgress Fiber 树构建好了以后，只需要切换一下 current 指针的指向，这两棵树的身份就会完成互换。  
  
![react-fiber-dual-cache](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f99da506f2a843708adbfdba47fc4c00~tplv-k3u1fbpfcp-zoom-1.image)  
  
在这种双缓存的机制下，我们可以随时暂停或放弃对 workInProgress Fiber 树的修改，这就使得 React 更新的 **中断** 成为了可能。  
  
#### 流程  
  
整个 Reconciliation 的流程可以简单地分为两个阶段：  
  
- Render 阶段：当 React 需要进行 re-render 时，会遍历 Fiber 树的节点，根据 diff 算法将变化应用到 workInProgress 树上，这个阶段是随时可中断的。  
  
- Commit 阶段：当 workInProgress 树构建完成之后，将其作为 Current 树，并把 DOM 变动绘制到页面上，这个阶段是不可中断的，必须一气呵成，类似操作系统中「原语」的概念。  
  
### Scheduler  
  
对于大部分浏览器来说，每 1s 会有 60 帧，所以每一帧差不多是 16.6 ms，如果 Reconciliation 的 Render 阶段的更新时间过长，挤占了主线程其它任务的执行时间，就会导致页面卡顿。  
  
> 思路  
>  
> - 将 re-render 时的 JS 计算拆分成更小粒度的任务，可以随时暂停、继续和丢弃执行的任务。  
>  
> - 当 JS 计算的时间达到 16 毫秒之后使其暂停，把主线程让给 UI 绘制，防止出现渲染掉帧的问题。  
>  
> - 在浏览器空闲的时候继续执行之前没执行完的小任务。  
  
让我们回看一下回看上面的解决思路，React 给出的解决方案是将整次 Render 阶段的长任务拆分成多个小任务：  
  
- 每个任务执行的时间控制在 5ms。  
  
- 把每一帧 5ms 内未执行的任务分配到后面的帧中。  
  
- 给任务划分优先级，同时进行时优先执行高优任务。  
  
这就留下了三个问题。  
  
> 如何把每个任务执行的时间控制在 5ms？  
  
#### 中断 - `shouldYield()`  
  
Reconciler 的设计使 re-render 具备了 可中断 的特性，而 Scheduler 用于控制 何时中断。  
  
在这里先对比一下 [Concurrent Mode](https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L1884-L1889) 和 [非 Concurrent Mode](https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.old.js#L1796-L1801) 下的代码：  
  
```ts  
// Sync Mode，即 React 原本的不可中断的更新模式  
  
function workLoopSync() {  
  // Already timed out, so perform work without checking if we need to yield.  
  
  while (workInProgress !== null) {  
    performUnitOfWork(workInProgress);  
  }  
}  
  
// Concurrent Mode  
  
function workLoopConcurrent() {  
  // Perform work until Scheduler asks us to yield  
  
  while (workInProgress !== null && !shouldYield()) {  
    performUnitOfWork(workInProgress);  
  }  
}  
```  
  
可以看到在每次遍历前，都会通过 Scheduler 提供的 `shouldYield` 方法判断是否需要中断遍历。  
  
Scheduler 提供的 `shouldYield` 方法在 [源码](https://github.com/facebook/react/blob/main/packages/scheduler/src/forks/Scheduler.js#L615) 中叫 [shouldYieldToHost](https://github.com/facebook/react/blob/main/packages/scheduler/src/forks/Scheduler.js#L440-L483)，它通过综合判断已消耗的时间（是否超过 5ms）、是否有用户输入等高优事件来决定是否需要中断遍历，给浏览器渲染和处理其它任务的时间，防止页面卡顿。源码中的注释对于哪些条件/情况下 yield 写得非常清晰。  
  
```ts  
function shouldYieldToHost() {  
  const timeElapsed = getCurrentTime() - startTime;  
  
  if (timeElapsed < frameInterval) {  
    // frameInterval = 5ms  
    // The main thread has only been blocked for a really short amount of time;  
    // smaller than a single frame. Don't yield yet.  
    return false;  
  }  
  // The main thread has been blocked for a non-negligible amount of time. We  
  // may want to yield control of the main thread, so the browser can perform  
  // high priority tasks. The main ones are painting and user input. If there's  
  // a pending paint or a pending input, then we should yield. But if there's  
  // neither, then we can yield less often while remaining responsive. We'll  
  // eventually yield regardless, since there could be a pending paint that  
  // wasn't accompanied by a call to `requestPaint`, or other main thread tasks  
  // like network events.  
  if (enableIsInputPending) {  
    if (needsPaint) {  
      // There's a pending paint (signaled by `requestPaint`). Yield now.  
      return true;  
    }  
    if (timeElapsed < continuousInputInterval) {  
      // We haven't blocked the thread for that long. Only yield if there's a  
      // pending discrete input (e.g. click). It's OK if there's pending  
      // continuous input (e.g. mouseover).  
      if (isInputPending !== null) {  
        return isInputPending();  
      }  
    } else if (timeElapsed < maxInterval) {  
      // Yield if there's either a pending discrete or continuous input.  
      if (isInputPending !== null) {  
        return isInputPending(continuousOptions);  
      }  
    } else {  
      // We've blocked the thread for a long time. Even if there's no pending  
      // input, there may be some other scheduled work that we don't know about,  
      // like a network event. Yield now.  
      return true;  
    }  
  }  
  // `isInputPending` isn't available. Yield now.  
  return true;  
}  
```  
  
如何把每一帧 5ms 内未执行的任务分配到后面的帧中？  
  
#### 时间切片  
  
如果任务的执行因为超过了 5ms 等被中断了，那么 React Scheduler 会借助一种效果接近于 `setTimeout` 的方式来开启一个宏任务，预定下一次的更新：  
  
```ts  
let schedulePerformWorkUntilDeadline;  
  
if (typeof localSetImmediate === "function") {  
  // Node.js and old IE.  
  // There's a few reasons for why we prefer setImmediate.  
  
  // Unlike MessageChannel, it doesn't prevent a Node.js process from exiting.  
  // (Even though this is a DOM fork of the Scheduler, you could get here  
  // with a mix of Node.js 15+, which has a MessageChannel, and jsdom.)  
  // [Bug: using MessageChannel prevents node.js process from exiting · Issue #20756 · facebook/react · GitHub](https://github.com/facebook/react/issues/20756)  
  
  // But also, it runs earlier which is the semantic we want.  
  // If other browsers ever implement it, it's better to use it.  
  // Although both of these would be inferior to native scheduling.  
  schedulePerformWorkUntilDeadline = () => {  
    localSetImmediate(performWorkUntilDeadline);  
  };  
} else if (typeof MessageChannel !== "undefined") {  
  // DOM and Worker environments.  
  // We prefer MessageChannel because of the 4ms setTimeout clamping.  
  const channel = new MessageChannel();  
  const port = channel.port2;  
  channel.port1.onmessage = performWorkUntilDeadline;  
  schedulePerformWorkUntilDeadline = () => {  
    port.postMessage(null);  
  };  
} else {  
  // We should only fallback here in non-browser environments.  
  schedulePerformWorkUntilDeadline = () => {  
    localSetTimeout(performWorkUntilDeadline, 0);  
  };  
}  
```  
  
`requestIdleCallback`？  
  
在其它的很多文章中，都提到了 `requestIdleCallback` 这个 API，然后说 React 团队考虑到兼容性和刷新帧率的问题，没有直接采用它，而是基于 `MessageChannel` 进行了模拟实现。但是从我看到的源码来说，React 是在借助 `MessageChannel` 模拟 `setTimeout` 的行为，将未完成的任务以宏任务的形式发放给浏览器，被动地让浏览器自行安排执行时间，而 `requestIdleCallback` 是主动从浏览器处获取空闲信息并执行任务，个人感觉不太像是一种对 `requestIdleCallback` 的 polyfill。  
  
其它文章大多引用的是 [这部分源码](https://github.com/facebook/react/blob/v17.0.1/packages/scheduler/src/forks/SchedulerHostConfig.default.js)，可以看到这是在 v17 的分支上的，目前最新的 React 源码中已经没有了这个文件，应该是 React 更换了实现方式（[#20025](https://github.com/facebook/react/pull/20025)，[#20915](https://github.com/facebook/react/pull/20915)），那些文章里的说法感觉有些过时？  
  
在 Reconciliation 的 Render 阶段，假设它耗时比较长，为 150ms，那么我们可以把他拆分为单个节点的计算时间之和。单个节点的计算非常快，假设都为 0.1ms。那么可以根据宏任务在帧中执行的特点（一帧里可以执行多个宏任务，同时浏览器还会将宏任务合理分配到不同帧中），将渲染过程改为如下过程：  
  
```shell  
// 假设 Render 阶段的计算拆分为 m 个节点，在第 n 帧结束  
  
第 1 帧开始  
  
宏任务开始  
  
执行第 1 个节点，耗时 0.1ms  
  
执行第 2 个节点，耗时 0.1ms  
  
执行第 3 个节点，耗时 0.1ms  
  
执行第 4 个节点，耗时 0.1ms  
  
...  
  
执行第 50 个节点，耗时 0.1ms  
  
总耗时 5ms，开始下一个宏任务  
  
渲染开始  
  
由于更新是在内存中计算的，节点没有任何更新，那么不进行重新渲染  
  
第 1 帧结束  
  
第 2 帧开始  
  
宏任务开始  
  
执行第 51 个节点，耗时 0.1ms  
  
执行第 52 个节点，耗时 0.1ms  
  
执行第 53 个节点，耗时 0.1ms  
  
...  
  
执行第 100 个节点，耗时 0.1ms  
  
总耗时 5ms，开始下一个宏任务  
  
渲染开始  
  
由于更新是在内存中计算的，节点没有任何更新，那么不进行重新渲染  
  
第 2 帧结束  
  
...  
  
第 n 帧开始  
  
宏任务开始  
  
执行第 m-2 个节点，耗时 0.1 ms  
  
执行第 m-1 个节点，耗时 0.1 ms  
  
执行第 m 个节点，耗时 0.1 ms  
  
所有节点计算完毕！  
  
开始更新创建真实节点  
  
渲染开始  
  
真实节点更新，将其渲染到浏览器上  
  
第 n 帧结束  
```  
  
> 如何给任务划分优先级？  
  
#### 基于 Lanes 的优先级控制  
  
React 17 开始采用基于 Lanes 的优先级控制方案：  
  
不同的 Lanes 可以简单理解为不同的数值，数值越小，表明优先级越高。比如用户事件比较紧急，那么可以对应比较高的优先级如 `SyncLane`；UI 界面过渡的更新不那么紧急，可以对应比较低的优先级如 `TransitionLane`；网络加载的更新也不那么紧急，可以对应低优先级 RetryLane。  
  
通过这种优先级，我们就能判断哪些更新优先执行，哪些更新会被中断滞后执行了。举个例子来讲：假如有两个更新，他们同时对 App 组件的一个 `count` 属性更新：  
  
```ts  
<p>You clicked {count} times</p>  
  
<button onClick={() => setCount(count + 1)}>  
    DefaultLane  
</button>  
  
<button onClick={() => startTransition(() => { setCount(count + 1) })}>  
    TransitionLane1  
</button>  
```  
  
</button>  
  
假设 `TransitionLane1` 按钮先点击， `TransitionLane1` 更新开始，按照之前提到时间切片的形式进行更新。中途触发了 `DefaultLane` 按钮点击，进而触发 `DefaultLane` 更新。那么此时就会通过 lane 进行对比，发现 `DefaultLane` 优先级高于 `TransitionLane1`。此时会中断 `TransitionLane1` 更新，开始 `DefaultLane` 更新。直到 `DefaultLane` 更新完成时，再重新开始 `TransitionLane1` 更新。  
  
# 升级指南  
  
- 改变根节点的挂载方式使用新的 API `createRoot`，使用旧的 API 仍然兼容，只有在使用 `createRoot` 了之后才会有 React 18 的新特性。  
  
- React 18 会启用上面提到的全自动批处理，这算是一个 breaking change，不过 React 也提供了一个 `flushSync` API 用于退出全自动批处理，用法如下：  
  
```tsx  
import { flushSync } from "react-dom";  
  
function handleClick() {  
  flushSync(() => {  
    setCounter((c) => c + 1);  
  });  
  // React has updated the DOM by now  
  
  flushSync(() => {  
    setFlag((f) => !f);  
  });  
  // React has updated the DOM by now  
}  
```  
  
- 如果不用 `flushSync` 的话两个 setState 只会进行一次 re-render，用了之后会触发两次。  
  
- TS 类型定义上的较大变化：如果有用到 children，需要在组件 props 的定义中写明它的类型，这在以往是可以忽略不写的。其它 TS 相关的改动可以见 [这里](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210)。  
  
```ts  
interface MyButtonProps {  
  color: string;  
  
  children?: React.ReactNode;  
}  
```  
  
- React 18 不再支持 IE。  
  
# 实现一个 useTimeout Hook  
`useTimeout` 是可以在函数式组件中，处理 `setTimeout` 计时器函数  
  
## 解决了什么问题？  
  
如果直接在函数式组件中使用 `setTimeout` ，会遇到以下问题：  
  
* 多次调用setTimeout    
  
```js    
 function App() {    
    const [state, setState] = useState(1);    
    setTimeout(() => {    
        setState(state + 1);    
    }, 3000);    
    return (    
        // 我们原本的目的是在页面渲染完3s后修改一下state，但是你会发现当state+1后，触发了页面的重新渲染，就会重新有一个3s的定时器出现来给state+1，既而变成了每3秒+1。    
        <div> {state} </div>    
    );    
  };   
```  
  
* hooks 的闭包缺陷    
  
```js    
function App() {    
  const [count, setCount] = useState(0)    
  const [countTimeout, setCountTimeout] = useState(0)    
  useEffect(() => {    
      setTimeout(() => {    
          setCountTimeout(count)    
      }, 3000)    
      setCount(5)    
  }, [])    
  return (    
       //count发生了变化，但是3s后setTimout的count却还是0    
      <div>    
          Count: {count}    
          <br />    
          setTimeout Count: {countTimeout}    
      </div>    
  )    
}  
```  
  
## useTimeout 实现  
  
```js  
function useTimeout(callback, delay) {  
  const memorizeCallback = useRef();  
  
  useEffect(() => {  
    memorizeCallback.current = callback;  
  }, [callback]);  
  
  useEffect(() => {  
    if (delay !== null) {  
      const timer = setTimeout(() => {  
        memorizeCallback.current();  
      }, delay);  
      return () => {  
        clearTimeout(timer);  
      };  
    }  
  }, [delay]);  
};  
```  
  
## 如何使用  
  
```js  
  // callback 回调函数， delay 延迟时间  
  useTimeout(callback, delay);  
```  
# react 中怎么捕获异常？  
## ErrorBoundary     
  
`EerrorBoundary` 是16版本出来的，之前的 15 版本有`unstable_handleError`。      
  
关于 `ErrorBoundary` 官网介绍比较详细，它能捕捉以下异常：  
  
* 子组件的渲染  
* 生命周期函数  
* 构造函数  
  
```js  
class ErrorBoundary extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { hasError: false };  
  }  
  
  componentDidCatch(error, info) {  
    // Display fallback UI  
    this.setState({ hasError: true });  
    // You can also log the error to an error reporting service  
    logErrorToMyService(error, info);  
  }  
  
  render() {  
    if (this.state.hasError) {  
      // You can render any custom fallback UI  
      return <h1>Something went wrong.</h1>;  
    }  
    return this.props.children;  
  }  
}  
  
  
<ErrorBoundary>  
  <MyWidget />  
</ErrorBoundary>  
```  
  
可以考虑直接使用开源库：[react-error-boundary](https://www.npmjs.com/package/react-error-boundary)，对开发者来说，只需要关心出现错误后的处理。  
  
```js  
import {ErrorBoundary} from 'react-error-boundary'  
  
function ErrorFallback({error, resetErrorBoundary}) {  
  return (  
    <div role="alert">  
      <p>Something went wrong:</p>  
      <pre>{error.message}</pre>  
      <button onClick={resetErrorBoundary}>Try again</button>  
    </div>  
  )  
}  
  
const ui = (  
  <ErrorBoundary  
    FallbackComponent={ErrorFallback}  
    onReset={() => {  
      // reset the state of your app so the error doesn't happen again  
    }}  
  >  
    <ComponentThatMayError />  
  </ErrorBoundary>  
)  
```  
  
遗憾的是，`error boundaries` 并不会捕捉这些错误：  
  
* 事件处理程序  
* 异步代码 (e.g. setTimeout or requestAnimationFrame callbacks)  
* 服务端的渲染代码  
* error boundaries自己抛出的错误  
  
原文可见参见官网[introducing-error-boundaries](https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries)  
  
其实官方也有解决方案：[how-about-event-handlers](https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers)， 就是 try catch.      
  
```js  
  handleClick() {  
    try {  
      // Do something that could throw  
    } catch (error) {  
      this.setState({ error });  
    }  
  }  
```  
  
## Error Boundary 之外  
  
我们先看看一张表格，罗列了我们能捕获异常的手段和范围。  
  
| 异常类型                | 同步方法 | 异步方法 | 资源加载 | Promise |  async/await      
| ---                    | :---:   |:---:    |:---:    |:---:    |:---: |  
| try/catch              | √       |         |         |         |     √|  
| window.onerror         | √       | √       |         |         |      |  
| error             | √       | √       | √       |         |      |  
| unhandledrejection |         |         |         |√        | √    |  
  
 ### try/catch  
   
 可以捕获同步和async/await的异常。   
   
 ### window.onerror , error事件   
   
 ```js  
     window.addEventListener('error', this.onError, true);  
     window.onerror = this.onError  
 ```  
 `window.addEventListener('error')` 这种可以比 `window.onerror` 多捕获资源记载异常.  
   
 请注意最后一个参数是 `true`, `false`的话可能就不如你期望。     
   
 当然你如果问题这第三个参数的含义，我就有点不想理你了。拜。  
   
 ### unhandledrejection  
   
 请注意最后一个参数是 `true`。  
   
 ```js  
 window.removeEventListener('unhandledrejection', this.onReject, true)  
 ```  
   
其捕获未被捕获的Promise的异常。  
  
### XMLHttpRequest 与 fetch  
  
`XMLHttpRequest` 很好处理，自己有onerror事件。  
  
当然你99.99%也不会自己基于`XMLHttpRequest`封装一个库， `axios` 真香，有这完毕的错误处理机制。  
  
至于`fetch`, 自己带着catch跑，不处理就是你自己的问题了。  
  
其实有一个库 [react-error-catch](https://www.npmjs.com/package/react-error-catch) 是基于ErrorBoudary,error与unhandledrejection封装的一个组件。    
  
其核心如下  
  
```js  
   ErrorBoundary.prototype.componentDidMount = function () {  
        // event catch  
        window.addEventListener('error', this.catchError, true);  
        // async code  
        window.addEventListener('unhandledrejection', this.catchRejectEvent, true);  
    };  
```  
  
使用：  
  
```js  
import ErrorCatch from 'react-error-catch'  
  
const App = () => {  
  return (  
  <ErrorCatch  
      app="react-catch"  
      user="cxyuns"  
      delay={5000}  
      max={1}  
      filters={[]}  
      onCatch={(errors) => {  
        console.log('报错咯');  
        // 上报异常信息到后端，动态创建标签方式  
        new Image().src = `http://localhost:3000/log/report?info=${JSON.stringify(errors)}`  
      }}  
    >  
      <Main />  
    </ErrorCatch>)  
}  
  
export default   
```  
  
利用error捕获的错误，其最主要的是提供了错误堆栈信息，对于分析错误相当不友好，尤其打包之后。  
  
## 事件处理程序的异常捕获  
  
### 示例  
  
使用[decorator](http://es6.ruanyifeng.com/#docs/decorator)来重写原来的方法。  
  
先看一下使用：  
  
```js  
  
   @methodCatch({ message: "创建订单失败", toast: true, report:true, log:true })  
    async createOrder() {  
        const data = {...};  
        const res = await createOrder();  
        if (!res || res.errCode !== 0) {  
            return Toast.error("创建订单失败");  
        }  
          
        .......  
        其他可能产生异常的代码  
        .......  
          
       Toast.success("创建订单成功");  
    }  
```  
  
注意四个参数：  
* message： 出现错误时，打印的错误  
* toast： 出现错误，是否Toast  
* report: 出现错误，是否上报  
* log: 使用使用console.error打印  
  
再看一段代码  
  
```js  
  @methodCatch({ message: "创建订单失败", toast: true, report:true, log:true })  
    async createOrder() {  
        const data = {...};  
        const res = await createOrder();  
        if (!res || res.errCode !== 0) {  
            return Toast.error("创建订单失败");  
        }  
         
        .......  
        其他可能产生异常的代码  
        .......  
          
       throw new CatchError("创建订单失败了，请联系管理员", {  
           toast: true,  
           report: true,  
           log: false  
       })  
         
       Toast.success("创建订单成功");  
  
    }  
```  
  
是都，没错，你可以通过抛出 自定义的`CatchError`来覆盖之前的默认选项。    
  
这个`methodCatch`可以捕获，同步和异步的错误，我们来一起看看全部的代码。  
  
### 类型定义  
```typescript  
export interface CatchOptions {  
    report?: boolean;  
    message?: string;  
    log?: boolean;  
    toast?: boolean;  
}  
  
// 这里写到 const.ts更合理  
export const DEFAULT_ERROR_CATCH_OPTIONS: CatchOptions = {  
    report: true,  
    message: "未知异常",  
    log: true,  
    toast: false  
}  
```  
### 自定义的CatchError  
```typescript  
import { CatchOptions, DEFAULT_ERROR_CATCH_OPTIONS } from "@typess/errorCatch";  
  
export class CatchError extends Error {  
  
    public __type__ = "__CATCH_ERROR__";  
    /**  
     * 捕捉到的错误  
     * @param message 消息  
     * @options 其他参数  
     */  
    constructor(message: string, public options: CatchOptions = DEFAULT_ERROR_CATCH_OPTIONS) {  
        super(message);  
    }  
}  
  
```  
  
### 装饰器  
```typescript  
import Toast from "@components/Toast";  
import { CatchOptions, DEFAULT_ERROR_CATCH_OPTIONS } from "@typess/errorCatch";  
import { CatchError } from "@util/error/CatchError";  
  
  
const W_TYPES = ["string", "object"];  
export function methodCatch(options: string | CatchOptions = DEFAULT_ERROR_CATCH_OPTIONS) {  
  
    const type = typeof options;  
  
    let opt: CatchOptions;  
  
      
    if (options == null || !W_TYPES.includes(type)) { // null 或者 不是字符串或者对象  
        opt = DEFAULT_ERROR_CATCH_OPTIONS;  
    } else if (typeof options === "string") {  // 字符串  
        opt = {  
            ...DEFAULT_ERROR_CATCH_OPTIONS,  
            message: options || DEFAULT_ERROR_CATCH_OPTIONS.message,  
        }  
    } else { // 有效的对象  
        opt = { ...DEFAULT_ERROR_CATCH_OPTIONS, ...options }  
    }  
  
    return function (_target: any, _name: string, descriptor: PropertyDescriptor): any {  
  
        const oldFn = descriptor.value;  
  
        Object.defineProperty(descriptor, "value", {  
            get() {  
                async function proxy(...args: any[]) {  
                    try {  
                        const res = await oldFn.apply(this, args);  
                        return res;  
                    } catch (err) {  
                        // if (err instanceof CatchError) {  
                        if(err.__type__ == "__CATCH_ERROR__"){  
                            err = err as CatchError;  
                            const mOpt = { ...opt, ...(err.options || {}) };  
  
                            if (mOpt.log) {  
                                console.error("asyncMethodCatch:", mOpt.message || err.message , err);  
                            }  
  
                            if (mOpt.report) {  
                                // TODO::  
                            }  
  
                            if (mOpt.toast) {  
                                Toast.error(mOpt.message);  
                            }  
  
                        } else {  
                              
                            const message = err.message || opt.message;  
                            console.error("asyncMethodCatch:", message, err);  
  
                            if (opt.toast) {  
                                Toast.error(message);  
                            }  
                        }  
                    }  
                }  
                proxy._bound = true;  
                return proxy;  
            }  
        })  
        return descriptor;  
    }  
}  
```  
  
## 总结一下  
  
1. 利用装饰器重写原方法，达到捕获错误的目的  
2. 自定义错误类，抛出它，就能达到覆盖默认选项的目的。增加了灵活性。  
  
```js  
  @methodCatch({ message: "创建订单失败", toast: true, report:true, log:true })  
    async createOrder() {  
        const data = {...};  
        const res = await createOrder();  
        if (!res || res.errCode !== 0) {  
            return Toast.error("创建订单失败");  
        }  
       Toast.success("创建订单成功");  
         
        .......  
        其他可能产生异常的代码  
        .......  
          
       throw new CatchError("创建订单失败了，请联系管理员", {  
           toast: true,  
           report: true,  
           log: false  
       })  
    }  
```  
  
## 下一步  
  
1. 扩大成果，支持更多类型，以及hooks版本。  
  
```typescript  
  
@XXXCatch  
classs AAA{  
    @YYYCatch  
    method = ()=> {  
    }  
}  
```  
2. 抽象，再抽象，再抽象  
  
**当前方案存在的问题:**     
1. 功能局限  
2. 抽象不够      
    获取选项,代理函数, 错误处理函数完全可以分离，变成通用方法。  
3. 同步方法经过转换后会变为异步方法。       
    所以理论上，要区分同步和异步方案。  
4. 错误处理函数再异常怎么办  
  
之后，我们会围绕着这些问题，继续展开。  
  
  
## Hooks版本  
  
Hook的名字就叫useCatch  
  
```typescript  
  
const TestView: React.FC<Props> = function (props) {  
  
    const [count, setCount] = useState(0);  
  
      
    const doSomething  = useCatch(async function(){  
        console.log("doSomething: begin");  
        throw new CatchError("doSomething error")  
        console.log("doSomething: end");  
    }, [], {  
        toast: true  
    })  
  
    const onClick = useCatch(async (ev) => {  
        console.log(ev.target);  
        setCount(count + 1);  
  
        doSomething();  
  
        const d = delay(3000, () => {  
            setCount(count => count + 1);  
            console.log()  
        });  
        console.log("delay begin:", Date.now())  
  
        await d.run();  
          
        console.log("delay end:", Date.now())  
        console.log("TestView", this)  
        throw new CatchError("自定义的异常，你知道不")  
    },  
        [count],  
        {  
            message: "I am so sorry",  
            toast: true  
        });  
  
    return <div>  
        <div><button onClick={onClick}>点我</button></div>  
        <div>{count}</div>  
    </div>  
}  
  
export default React.memo(TestView);  
```  
  
至于思路，基于`useMemo`,可以先看一下代码：  
  
```typescript  
export function useCatch<T extends (...args: any[]) => any>(callback: T, deps: DependencyList, options: CatchOptions =DEFAULT_ERRPR_CATCH_OPTIONS): T {      
  
    const opt =  useMemo( ()=> getOptions(options), [options]);  
      
    const fn = useMemo((..._args: any[]) => {  
        const proxy = observerHandler(callback, undefined, function (error: Error) {  
            commonErrorHandler(error, opt)  
        });  
        return proxy;  
  
    }, [callback, deps, opt]) as T;  
  
    return fn;  
}  
  
```  
# 使用 redux 有哪些原则？  
### 核心描述  
  
* 单一数据源：整个应用的全局 state 被存储在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。  
* State 是只读的：唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事情的普通对象。  
* 使用纯函数来执行修改：为了描述 action 如何改变 state tree，你需要编写纯的 reducers。  
  
### 知识拓展  
  
* 什么时候应该使用 redux：    
   * 在应用的大量地方，都存在大量的状态    
   * 应用状态会随着时间的推移而频繁更新    
   * 更新该状态的逻辑可能很复杂    
   * 中型和大型代码量的应用，很多人协同开发  
* reducer 是一个函数，接收当前的 state 和一个 action 对象，必要时决定如何更新状态，并返回新状态。reducer 必须符合以下规则：    
   * 仅使用 state 和 action 参数计算新的状态值    
   * 禁止直接修改 state。必须通过复制现有的 state 并对复制的值进行更改的方式来做不可变更新    
   * 禁止任何异步逻辑、依赖随机值或导致其他副作用代码  
* reducer 遵守上述规则的原因：    
   * redux 的目标之一是使代码可预测。当函数的输出仅根据输入参数计算时，更容易理解该代码的工作原理并对其进行测试    
   * 如果一个函数依赖于自身之外的变量，或者随机行为，你永远不知道运行它时会发生什么    
   * 如果一个函数 mutate 了其他对象，比如它的参数，这可能会意外地改变应用程序的工作方式。这可能是错误的常见来源  
* 不可变更新（Immutability），不能在 Redux 中更改 state 的原因：    
   * 会导致bug，例如 UI 未正确更新以显示最新值    
   * 更难理解状态更新的原因和方式    
   * 编写测试变的困难    
   * 打破了正确使用“时间旅行调试”的能力    
   * 违背了 Redux 的预期精神和使用模式  
  
# 简述下 React 的事件代理机制？  
React 并不会把所有的处理函数直接绑定在真实的节点上。而是把所有的事件绑定到结构的最外层，使用一个统一的事件监听器，这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数。  
  
当组件挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象。  
  
当事件发生时，首先被这个统一的事件监听器处理，然后在映射里找到真正的事件处理函数并调用。  
  
这样做的优点是解决了兼容性问题，并且简化了事件处理和回收机制（不需要手动的解绑事件，React 已经在内部处理了）。但是有些事件 React 并没有实现，比如 window 的 resize 事件。  
  
## 2023.2.19更新:  
  
在`React@17.0.3`版本中：  
  
* 所有事件都是委托在`id = root`的DOM元素中（网上很多说是在`document`中，`17`版本不是了）；  
* 在应用中所有节点的事件监听其实都是在`id = root`的DOM元素中触发；  
* `React`自身实现了一套事件冒泡捕获机制；  
* `React`实现了合成事件`SyntheticEvent`；  
* `React`在`17`版本不再使用事件池了（网上很多说使用了对象池来管理合成事件对象的创建销毁，那是`16`版本及之前）；  
* 事件一旦在`id = root`的DOM元素中委托，其实是一直在触发的，只是没有绑定对应的回调函数；  
  
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1de6d95f26c949dbb8f2546cd235fa22~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)   
  
盗用一张官方图，按官方解释，之所以会将事件委托从`document`中移到`id = root`的DOM元素，是为了**可以更加安全地进行新旧版本 React 树的嵌套**。  
  
# 说说React服务端渲染怎么做？原理是什么？  
## 一、是什么  
  
服务端渲染（`Server-Side Rendering` ，简称`SSR`），指由服务侧完成页面的 `HTML` 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程  
  
 ![](https://static.vue-js.com/96dc3e20-f3f7-11eb-85f6-6fac77c0c9b3.png)  
  
其解决的问题主要有两个：  
  
- SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面  
- 加速首屏加载，解决首屏白屏问题  
  
  
## 二、如何做  
  
在`react`中，实现`SSR`主要有两种形式：  
  
- 手动搭建一个 SSR 框架  
- 使用成熟的SSR 框架，如 Next.JS  
  
  
这里主要以手动搭建一个`SSR`框架进行实现  
  
首先通过`express`启动一个`app.js`文件，用于监听3000端口的请求，当请求根目录时，返回`HTML`，如下：  
  
```js  
const express = require('express')  
const app = express()  
app.get('/', (req,res) => res.send(`  
<html>  
   <head>  
       <title>ssr demo</title>  
   </head>  
   <body>  
       Hello world  
   </body>  
</html>  
`))  
  
app.listen(3000, () => console.log('Exampleapp listening on port 3000!'))  
```  
  
然后再服务器中编写`react`代码，在`app.js`中进行应引用  
  
```jsx  
import React from 'react'  
  
const Home = () =>{  
  
    return <div>home</div>  
  
}  
  
export default Home  
```  
  
为了让服务器能够识别`JSX`，这里需要使用`webpakc`对项目进行打包转换，创建一个配置文件`webpack.server.js`并进行相关配置，如下：  
  
```js  
const path = require('path')    //node的path模块  
const nodeExternals = require('webpack-node-externals')  
  
module.exports = {  
    target:'node',  
    mode:'development',           //开发模式  
    entry:'./app.js',             //入口  
    output: {                     //打包出口  
        filename:'bundle.js',     //打包后的文件名  
        path:path.resolve(__dirname,'build')    //存放到根目录的build文件夹  
    },  
    externals: [nodeExternals()],  //保持node中require的引用方式  
    module: {  
        rules: [{                  //打包规则  
           test:   /\.js?$/,       //对所有js文件进行打包  
           loader:'babel-loader',  //使用babel-loader进行打包  
           exclude: /node_modules/,//不打包node_modules中的js文件  
           options: {  
               presets: ['react','stage-0',['env', {   
                                  //loader时额外的打包规则,对react,JSX，ES6进行转换  
                    targets: {  
                        browsers: ['last 2versions']   //对主流浏览器最近两个版本进行兼容  
                    }  
               }]]  
           }  
       }]  
    }  
}  
```  
  
接着借助`react-dom`提供了服务端渲染的 `renderToString`方法，负责把`React`组件解析成`html`  
  
```js  
import express from 'express'  
import React from 'react'//引入React以支持JSX的语法  
import { renderToString } from 'react-dom/server'//引入renderToString方法  
import Home from'./src/containers/Home'  
  
const app= express()  
const content = renderToString(<Home/>)  
app.get('/',(req,res) => res.send(`  
<html>  
   <head>  
       <title>ssr demo</title>  
   </head>  
   <body>  
        ${content}  
   </body>  
</html>  
`))  
  
app.listen(3001, () => console.log('Exampleapp listening on port 3001!'))  
```  
  
上面的过程中，已经能够成功将组件渲染到了页面上  
  
但是像一些事件处理的方法，是无法在服务端完成，因此需要将组件代码在浏览器中再执行一遍，这种服务器端和客户端共用一套代码的方式就称之为**同构**  
  
通俗讲，“同构”就是一套React代码在服务器上运行一遍，到达浏览器又运行一遍：  
  
- 服务端渲染完成页面结构  
- 浏览器端渲染完成事件绑定  
  
浏览器实现事件绑定的方式为让浏览器去拉取`JS`文件执行，让`JS`代码来控制，因此需要引入`script`标签  
  
通过`script`标签为页面引入客户端执行的`react`代码，并通过`express`的`static`中间件为`js`文件配置路由，修改如下：  
  
```js  
import express from 'express'  
import React from 'react'//引入React以支持JSX的语法  
import { renderToString } from'react-dom/server'//引入renderToString方法  
import Home from './src/containers/Home'  
   
const app = express()  
app.use(express.static('public'));  
//使用express提供的static中间件,中间件会将所有静态文件的路由指向public文件夹  
 const content = renderToString(<Home/>)  
   
app.get('/',(req,res)=>res.send(`  
<html>  
   <head>  
       <title>ssr demo</title>  
   </head>  
   <body>  
        ${content}  
   <script src="/index.js"></script>  
   </body>  
</html>  
`))  
  
 app.listen(3001, () =>console.log('Example app listening on port 3001!'))  
```  
  
然后再客户端执行以下`react`代码，新建`webpack.client.js`作为客户端React代码的`webpack`配置文件如下：  
  
```js  
const path = require('path')                    //node的path模块  
  
module.exports = {  
    mode:'development',                         //开发模式  
    entry:'./src/client/index.js',              //入口  
    output: {                                   //打包出口  
        filename:'index.js',                    //打包后的文件名  
        path:path.resolve(__dirname,'public')   //存放到根目录的build文件夹  
    },  
    module: {  
        rules: [{                               //打包规则  
           test:   /\.js?$/,                    //对所有js文件进行打包  
           loader:'babel-loader',               //使用babel-loader进行打包  
           exclude: /node_modules/,             //不打包node_modules中的js文件  
           options: {  
               presets: ['react','stage-0',['env', {       
                    //loader时额外的打包规则,这里对react,JSX进行转换  
                    targets: {  
                        browsers: ['last 2versions']   //对主流浏览器最近两个版本进行兼容  
                    }  
               }]]  
           }  
       }]  
    }  
}  
```  
  
这种方法就能够简单实现首页的`react`服务端渲染，过程对应如下图：  
  
 ![](https://static.vue-js.com/a2894970-f3f7-11eb-85f6-6fac77c0c9b3.png)  
  
在做完初始渲染的时候，一个应用会存在路由的情况，配置信息如下：  
  
```js  
import React from 'react'                   //引入React以支持JSX  
import { Route } from 'react-router-dom'    //引入路由  
import Home from './containers/Home'        //引入Home组件  
  
export default (  
    <div>  
        <Route path="/" exact component={Home}></Route>  
    </div>  
)  
```  
  
然后可以通过`index.js`引用路由信息，如下：  
  
```js  
import React from 'react'  
import ReactDom from 'react-dom'  
import { BrowserRouter } from'react-router-dom'  
import Router from'../Routers'  
  
const App= () => {  
    return (  
        <BrowserRouter>  
           {Router}  
        </BrowserRouter>  
    )  
}  
  
ReactDom.hydrate(<App/>, document.getElementById('root'))  
```  
  
这时候控制台会存在报错信息，原因在于每个`Route`组件外面包裹着一层`div`，但服务端返回的代码中并没有这个`div`  
  
解决方法只需要将路由信息在服务端执行一遍，使用使用`StaticRouter`来替代`BrowserRouter`，通过`context`进行参数传递  
  
```js  
import express from 'express'  
import React from 'react'//引入React以支持JSX的语法  
import { renderToString } from 'react-dom/server'//引入renderToString方法  
import { StaticRouter } from 'react-router-dom'  
import Router from '../Routers'  
   
const app = express()  
app.use(express.static('public'));  
//使用express提供的static中间件,中间件会将所有静态文件的路由指向public文件夹  
  
app.get('/',(req,res)=>{  
    const content  = renderToString((  
        //传入当前path  
        //context为必填参数,用于服务端渲染参数传递  
        <StaticRouter location={req.path} context={{}}>  
           {Router}  
        </StaticRouter>  
    ))  
    res.send(`  
   <html>  
       <head>  
           <title>ssr demo</title>  
       </head>  
       <body>  
       <div id="root">${content}</div>  
       <script src="/index.js"></script>  
       </body>  
   </html>  
    `)  
})  
  
  
app.listen(3001, () => console.log('Exampleapp listening on port 3001!'))  
```  
  
这样也就完成了路由的服务端渲染  
  
  
  
## 三、原理  
  
整体`react`服务端渲染原理并不复杂，具体如下：  
  
`node server` 接收客户端请求，得到当前的请求`url` 路径，然后在已有的路由表内查找到对应的组件，拿到需要请求的数据，将数据作为 `props`、`context`或者`store` 形式传入组件  
  
然后基于 `react` 内置的服务端渲染方法 `renderToString()`把组件渲染为 `html`字符串在把最终的 `html `进行输出前需要将数据注入到浏览器端  
  
浏览器开始进行渲染和节点对比，然后执行完成组件内事件绑定和一些交互，浏览器重用了服务端输出的 `html` 节点，整个流程结束  
  
  
# 使用 React hooks 怎么实现类里面的所有生命周期？  
在 React 16.8 之前，函数组件也称为无状态组件，因为函数组件也不能访问 react 生命周期，也没有自己的状态。react 自 16.8 开始，引入了 Hooks 概念，使得函数组件中也可以拥有自己的状态，并且可以模拟对应的生命周期。  
  
我们应该在什么时候使用 Hooks 呢？  
  
官方并不建议我们把原有的 class 组件，大规模重构成 Hooks，而是有一个渐进过程:  
  
* 首先，原有的函数组件如果需要自己的状态或者需要访问生命周期函数，那么用 Hooks 是再好不过了；  
* 另外就是，我们可以先在一些逻辑较简单的组件上尝试 Hooks ，在使用起来相对较熟悉，且组内人员比较能接受的前提下，再扩大 Hooks 的使用范围。  
  
那么相对于传统class， Hooks 有哪些优势?  
  
* State Hook 使得组件内的状态的设置和更新相对独立，这样便于对这些状态单独测试并复用。  
* Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分，这样使得各个逻辑相对独立和清晰。  
  
### class 生命周期在 Hooks 中的实现  
  
Hooks 组件更接近于实现状态同步，而不是响应生命周期事件。但是，由于我们先熟悉的 class 的生命周期，在写代码时，难免会受此影响，那么 Hooks 中如何模拟 class 的中的生命周期呢：  
  
总结：  
  
| class 组件                 | Hooks 组件                                       |  
| ------------------------ | ---------------------------------------------- |  
| constructor              | useState                                       |  
| getDerivedStateFromProps | useEffect 手动对比 props， 配合 useState 里面 update 函数 |  
| shouldComponentUpdate    | React.memo                                     |  
| render                   | 函数本身                                           |  
| componentDidMount        | useEffect 第二个参数为\[\]                           |  
| componentDidUpdate       | useEffect 配合useRef                             |  
| componentWillUnmount     | useEffect 里面返回的函数                              |  
| componentDidCatch        | 无                                              |  
| getDerivedStateFromError | 无                                              |  
  
代码实现：  
  
```js  
import React, { useState, useEffect, useRef, memo } from 'react';  
  
// 使用 React.memo 实现类似 shouldComponentUpdate 的优化， React.memo 只对 props 进行浅比较  
const UseEffectExample = memo((props) => {  
    console.log("===== UseStateExample render=======");  
    // 声明一个叫 “count” 的 state 变量。  
    const [count, setCount] = useState(0);  
    const [count2, setCount2] = useState(0);  
    const [fatherCount, setFatherCount] = useState(props.fatherCount)  
  
    console.log(props);  
  
    // 模拟 getDerivedStateFromProps  
    useEffect(() => {  
        // props.fatherCount 有更新，才执行对应的修改，没有更新执行另外的逻辑  
        if(props.fatherCount == fatherCount ){  
            console.log("======= 模拟 getDerivedStateFromProps=======");  
            console.log(props.fatherCount, fatherCount);  
        }else{  
            setFatherCount(props.fatherCount);  
            console.log(props.fatherCount, fatherCount);  
        }  
    })  
  
    // 模拟DidMount  
    useEffect(() => {  
        console.log("=======只渲染一次(相当于DidMount)=======");  
        console.log(count);  
    }, [])  
  
    // 模拟DidUpdate  
    const mounted = useRef();  
    useEffect(() => {  
        console.log(mounted);  
        if (!mounted.current) {  
            mounted.current = true;  
          } else {  
            console.log("======count 改变时才执行(相当于DidUpdate)=========");  
            console.log(count);  
          }  
    }, [count])  
  
    // 模拟 Didmount和DidUpdate 、 unmount  
    useEffect(() => {  
    	// 在 componentDidMount，以及 count 更改时 componentDidUpdate 执行的内容  
        console.log("======初始化、或者 count 改变时才执行(相当于Didmount和DidUpdate)=========");  
        console.log(count);  
        return () => {  
        	  
            console.log("====unmount=======");  
            console.log(count);  
        }  
    }, [count])  
  
    return (  
        <div>  
            <p>You clicked {count} times</p>  
            <button onClick={() => setCount(count + 1)}>  
                Click me  
            </button>  
  
            <button onClick={() => setCount2(count2 + 1)}>  
                Click me2  
            </button>  
        </div>  
    );  
});  
  
export default UseEffectExample;  
```  
  
### 注意事项  
  
* useState 只在初始化时执行一次，后面不再执行；  
* useEffect 相当于是 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合，可以通过传参及其他逻辑，分别模拟这三个生命周期函数；  
* useEffect 第二个参数是一个数组，如果数组为空时，则只执行一次（相当于componentDidMount）；如果数组中有值时，则该值更新时，useEffect 中的函数才会执行；如果没有第二个参数，则每次render时，useEffect 中的函数都会执行；  
* React 保证了每次运行 effect 的同时，DOM 都已经更新完毕，也就是说 effect 中的获取的 state 是最新的，但是需要注意的是，effect 中返回的函数（其清除函数）中，获取到的 state 是更新前的。  
* 传递给 useEffect 的函数在每次渲染中都会有所不同，这是刻意为之的。事实上这正是我们可以在 effect 中获取最新的 count 的值，而不用担心其过期的原因。每次我们重新渲染，都会生成新的 effect，替换掉之前的。某种意义上讲，effect 更像是渲染结果的一部分 —— 每个 effect “属于”一次特定的渲染。  
* effect 的清除阶段（返回函数）在每次重新渲染时都会执行，而不是只在卸载组件的时候执行一次。它会在调用一个新的 effect 之前对前一个 effect 进行清理，从而避免了我们手动去处理一些逻辑 。为了说明这一点，下面按时间列出一个可能会产生的订阅和取消订阅操作调用序列：    
```js  
function FriendStatus(props) {    
	// ...    
	useEffect(() => {    
    	// ...    
      	ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);    
    	return () => {    
    		ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);    
    	};    
	});    
      
    // ...  
}  
      
// Mount with { friend: { id: 100 } } props    
ChatAPI.subscribeToFriendStatus(100, handleStatusChange);     // 运行第一个 effect    
  
// Update with { friend: { id: 200 } } props    
ChatAPI.unsubscribeFromFriendStatus(100, handleStatusChange); // 清除上一个 effect    
ChatAPI.subscribeToFriendStatus(200, handleStatusChange);     // 运行下一个 effect    
  
// Update with { friend: { id: 300 } } props    
ChatAPI.unsubscribeFromFriendStatus(200, handleStatusChange); // 清除上一个 effect    
ChatAPI.subscribeToFriendStatus(300, handleStatusChange);     // 运行下一个 effect    
  
// Unmount    
ChatAPI.unsubscribeFromFriendStatus(300, handleStatusChange); // 清除最后一个 effect    
```  
# 说说React事件和原生事件的执行顺序  
我们知道，`React`在内部对事件做了统一的处理，合成事件是一个比较大的概念  
  
### 为什么要有合成事件  
1. 在传统的事件里，不同的浏览器需要兼容不同的写法，在合成事件中`React`提供统一的事件对象，抹平了浏览器的兼容性差异  
2. `React`通过顶层监听的形式，通过事件委托的方式来统一管理所有的事件，可以在事件上区分事件优先级，优化用户体验  
  
`React`在合成事件上对于`16`版本和`17`版本的合成事件有很大不同，我们也会简单聊聊区别。  
  
### 概念  
  
###### 事件委托  
  
事件委托的意思就是可以通过给父元素绑定事件委托，通过事件对象的`target`属性可以获取到当前触发目标阶段的`dom`元素，来进行统一管理  
  
比如写原生`dom`循环渲染的时候，我们要给每一个子元素都添加`dom`事件，这种情况最简单的方式就是通过事件委托在父元素做一次委托，通过`target`属性判断区分做不同的操作  
  
###### 事件监听  
  
事件监听主要用到了`addEventListener`这个函数，具体怎么用可以[点击](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)进行查看  
事件监听和事件绑定的最大区别就是事件监听可以给一个事件监听多个函数操作，而事件绑定只有一次  
  
``` js  
// 可以监听多个，不会被覆盖  
eventTarget.addEventListener('click', () => {});  
eventTarget.addEventListener('click', () => {});  
  
eventTarget.onclick = function () {};  
eventTarget.onclick = function () {}; // 第二个会把第一个覆盖  
```  
  
###### 事件执行顺序  
``` html  
<div>  
  <span>点我</span>  
</div>  
```  
当我们点击`span`标签的时候会经过这么三个过程，在路径内的元素绑定的事件都会进行触发  
> 捕获阶段 => 目标阶段 => 冒泡阶段  
>   
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d048b3ebd23f4161b127eb6565fd15a1~tplv-k3u1fbpfcp-watermark.image?)  
  
### 合成事件  
在看之前先看一下这几个问题  
- 原生事件和合成事件的执行顺序是什么？  
- 合成事件在什么阶段下会被执行？  
- 阻止原生事件的冒泡，会影响到合成事件的执行吗？  
- 阻止合成事件的冒泡，会影响到原生事件的执行吗？  
  
下面一个例子说清楚，[点击在线查看编辑](https://codesandbox.io/s/determined-glitter-oxh8kj?file=/src/App.js)  
  
```jsx  
import React, { useRef, useEffect } from "react";  
import "./styles.css";  
  
const logFunc = (target, isSynthesizer, isCapture = false) => {  
    const info = `${isSynthesizer ? "合成" : "原生"}事件，${  
        isCapture ? "捕获" : "冒泡"}阶段，${target}元素执行了`;  
      
    console.log(info);  
};  
  
const batchManageEvent = (targets, funcs, isRemove = false) => {  
    targets.forEach((target, targetIndex) => {  
        funcs[targetIndex].forEach((func, funcIndex) => {  
            target[isRemove ? "removeEventListener" : "addEventListener"](  
                "click",  
                func,  
                !funcIndex  
            );  
        });  
    });  
};  
  
export default function App() {  
    const divDom = useRef();  
    const h1Dom = useRef();  
    useEffect(() => {  
      
        const docClickCapFunc = () => logFunc("document", false, true);  
        const divClickCapFunc = () => logFunc("div", false, true);  
        const h1ClickCapFunc = () => logFunc("h1", false, true);  
        const docClickFunc = () => logFunc("document", false);  
        const divClickFunc = () => logFunc("div", false);  
        const h1ClickFunc = () => logFunc("h1", false);  
  
        batchManageEvent(  
            [document, divDom.current, h1Dom.current],  
            [  
                [docClickCapFunc, docClickFunc],  
                [divClickCapFunc, divClickFunc],  
                [h1ClickCapFunc, h1ClickFunc]  
            ]  
        );  
  
        return () => {  
            batchManageEvent(  
                   [document, divDom.current, h1Dom.current],  
                [  
                    [docClickCapFunc, docClickFunc],  
                    [divClickCapFunc, divClickFunc],  
                    [h1ClickCapFunc, h1ClickFunc]  
                ],  
                true  
            );  
        };  
    }, []);  
  
    return (  
        <div  
          ref={divDom}  
          className="App1"  
          onClickCapture={() => logFunc("div", true, true)}  
          onClick={() => logFunc("div", true)}  
        >  
          <h1  
            ref={h1Dom}  
            onClickCapture={() => logFunc("h1", true, true)}  
            onClick={() => logFunc("h1", true)}  
          >  
            Hello CodeSandbox  
          </h1>  
        </div>  
    );  
}  
  
```  
看这个例子，当我们点击`h1`的时候  
  
会先执行原生事件事件流，当执行到`document`的冒泡阶段的时候做了个拦截，在这个阶段开始执行合成事件  
  
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/47eac4a858b242a6ab66e832f46019ad~tplv-k3u1fbpfcp-watermark.image?)  
  
我们用一个图简单描述一下  
  
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/31bdf297acad48e1a4934335fceadfb0~tplv-k3u1fbpfcp-watermark.image?)  
  
知道上面的概念，那我们回答开始阶段的后面两个问题  
  
当我们把上面的`demo`的原生`div`的`stopPropagation()`  方法调用阻止捕获和冒泡阶段中当前事件的进一步传播，会阻止后续的所有事件执行  
  
  
``` jsx  
// ...  
const divClickCapFunc = (e) => {  
    e.stopPropagation(); // 增加原生捕获阶段的阻止事件  
    logFunc("div", false, true);  
};  
// ...  
```  
  
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e567409ad3a4da18a7f076d247f9c6a~tplv-k3u1fbpfcp-watermark.image?)  
  
我们可以看到，当阻止之后，我们点击`h1`，事件流运行到`div`的捕获阶段就不触发了，后续的所有的包括合成事件也都不会触发  
  
那当我们给合成事件的事件流中断了会发生什么呢？  
  
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1159431fa32e45b6a9d9bd0c221a2f1f~tplv-k3u1fbpfcp-watermark.image?)  
  
可以看到运行到捕获阶段的`div`之后被阻止传播了，后续的所有合成事件都不会执行了，但是原生的`document`冒泡还是会执行完。  
  
### 模拟阶段  
``` html  
<!DOCTYPE html>  
<html lang="en">  
  <head>  
    <meta charset="utf-8" />  
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, maximum-scale=1, user-scalable=no" />  
    <meta name="theme-color" content="#000000" />  
    <meta name="description" content="Web site created using create-react-app" />  
    <link href="favicon.ico" type="image/x-icon" rel="icon" />  
    <title>浅谈React合成事件</title>  
  </head>  
  <body>  
    <div id="wrapper">  
      <h1 id="content">hello</h1>  
    </div>  
  </body>  
  <script>  
    const logFunc = (target, isSynthesizer, isCapture = false) => {  
      const info = `${isSynthesizer ? '合成' : '原生'}事件，${isCapture ? '捕获' : '冒泡'}阶段，${target}元素执行了`;  
      console.log(info);  
    };  
    // document的派发事件函数  
    const dispatchEvent = currentDom => {  
      let current = currentDom;  
      let eventCallbacks = []; // 存储冒泡事件回调函数  
      let eventCaptureCallbacks = []; // 存储冒泡事件回调函数  
      // 收集事件流一路上的所有回调函数  
      while (current) {  
        if (current.onClick) {  
          eventCallbacks.push(current.onClick);  
        }  
        if (current.onClickCapture) {  
          // 捕获阶段由外到内，所以需要把回调函数放到数组的最前面  
          eventCaptureCallbacks.unshift(current.onClickCapture);  
        }  
        current = current.parentNode;  
      }  
      // 执行调用  
      eventCaptureCallbacks.forEach(callback => callback());  
      eventCallbacks.forEach(callback => callback());  
    };  
    const wrapperDom = document.getElementById('wrapper');  
    const contentDom = document.getElementById('content');  
  
    // 一路上注册原生事件  
    document.addEventListener('click', () => logFunc('document', false, true), true);  
    wrapperDom.addEventListener('click', () => logFunc('div', false, true), true);  
    contentDom.addEventListener('click', () => logFunc('h1', false, true), true);  
    contentDom.addEventListener('click', () => logFunc('h1', false));  
    wrapperDom.addEventListener('click', () => logFunc('div', false));  
    document.addEventListener('click', e => {  
      dispatchEvent(e.target); // 这里收集一路上的事件进行派发  
      logFunc('document', false);  
    });  
  
    // 模拟合成事件  
    wrapperDom.onClick = () => logFunc('div', true);  
    wrapperDom.onClickCapture = () => logFunc('div', true, true);  
    contentDom.onClick = () => logFunc('h1', true);  
    contentDom.onClickCapture = () => logFunc('h1', true, true);  
  </script>  
</html>  
  
```  
点击`h1`可以看到一路上的注册的所有事件已经执行了  
  
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a06e74540764adf8850aa884937058b~tplv-k3u1fbpfcp-watermark.image?)  
  
`React16`给`document`上加的统一的拦截判发事件会在一定情况下出问题，下面举个例子简单说明一下  
  
### 16案例  
  
[点我](https://codesandbox.io/s/practical-lichterman-1lhvb1?file=/src/App.js:0-924)查看在线案例  
  
``` jsx  
import React, { useEffect, useState } from 'react';  
import './styles.css';  
  
const Modal = ({ onClose }) => {  
  useEffect(() => {  
    document.addEventListener('click', onClose);  
    return () => {  
      document.removeEventListener('click', onClose);  
    };  
  }, [onClose]);  
  return (  
    <div  
      style={{ width: 300, height: 300, backgroundColor: 'red' }}  
      onClick={e => {  
        e.stopPropagation();  
        // e.nativeEvent.stopImmediatePropagation();  
      }}  
    >  
      Modal  
    </div>  
  );  
};  
  
function App() {  
  const [visible, setVisible] = useState(false);  
  return (  
    <div className="App">  
      <button  
        onClick={() => {  
          setVisible(true);  
        }}  
      >  
        点我弹出modal  
      </button>  
      {visible && <Modal onClose={() => setVisible(false)} />}  
    </div>  
  );  
}  
export default App;  
```  
  
写完之后点击按钮`Modal`被弹出来, 但是点击`modal`里面的内容`modal`就隐藏了，添加阻止事件流函数还是不行  
  
  
原因就是点击之后，事件冒泡到`document`上，同时也执行了他身上挂载的方法，解决办法就是给点击事件添加  
`e.nativeEvent.stopImmediatePropagation();`  
  
`stopImmediatePropagation`和`stopPropagation`的区别就是，前者会阻止当前节点下所有的事件监听的函数，后者不会  
  
那`react17`及之后做了什么改变呢  
  
### 16和17的区别  
  
在`17`版本中，`React`把事件节点绑定函数绑定在了`render`的根节点上，避免了上述的问题,  
  
用上面的`demo`的在线案例把版本改成17之后，可以发现事件的执行顺序变了  
  
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b3a5ff14e364a90a87ff66a658ef194~tplv-k3u1fbpfcp-watermark.image?)  
  
### 模拟17版本  
``` html  
<!DOCTYPE html>  
<html lang="en">  
  <head>  
    <meta charset="utf-8" />  
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, maximum-scale=1, user-scalable=no" />  
    <meta name="theme-color" content="#000000" />  
    <meta name="description" content="Web site created using create-react-app" />  
    <link href="favicon.ico" type="image/x-icon" rel="icon" />  
    <title>浅谈React合成事件</title>  
  </head>  
  <body>  
    <div id="root">  
      <div id="wrapper">  
        <h1 id="content">hello</h1>  
      </div>  
    </div>  
  </body>  
  <script>  
    const logFunc = (target, isSynthesizer, isCapture = false) => {  
      const info = `${isSynthesizer ? '合成' : '原生'}事件，${isCapture ? '捕获' : '冒泡'}阶段，${target}元素执行了`;  
      console.log(info);  
    };  
    // document的派发事件函数  
    const dispatchEvent = (currentDom, useCapture = false) => {  
      let current = currentDom;  
      let eventCallbacks = []; // 存储冒泡事件回调函数  
      const eventTypeName = useCapture ? 'onClickCapture' : 'onClick'; // 冒泡事件或者捕获事件的名称  
      const actionName = useCapture ? 'unshift' : 'push';  
      while (current) {  
        if (current[eventTypeName]) {  
          eventCallbacks[actionName](current[eventTypeName]);  
        }  
        current = current.parentNode;  
      }  
      eventCallbacks.forEach(callback => callback());  
    };  
    const wrapperDom = document.getElementById('wrapper');  
    const contentDom = document.getElementById('content');  
    const root = document.getElementById('root');  
  
    // 一路上注册原生事件  
    document.addEventListener('click', () => logFunc('document', false, true), true);  
    root.addEventListener(  
      'click',  
      e => {  
        dispatchEvent(e.target, true);  
        logFunc('root', false, true);  
      },  
      true  
    );  
    wrapperDom.addEventListener('click', () => logFunc('div', false, true), true);  
    contentDom.addEventListener('click', () => logFunc('h1', false, true), true);  
    contentDom.addEventListener('click', () => logFunc('h1', false));  
    wrapperDom.addEventListener('click', () => logFunc('div', false));  
    root.addEventListener('click', e => {  
      dispatchEvent(e.target); // 这里收集一路上的事件进行派发  
      logFunc('root', false);  
    });  
    document.addEventListener('click', () => logFunc('document', false));  
    // 模拟合成事件  
    wrapperDom.onClick = () => logFunc('div', true);  
    wrapperDom.onClickCapture = () => logFunc('div', true, true);  
    contentDom.onClick = () => logFunc('h1', true);  
    contentDom.onClickCapture = () => logFunc('h1', true, true);  
  </script>  
</html>  
  
```  
  
区别就是在外层增加了一个`root`模拟根节点，修改了`dispatchEvent`的逻辑  
  
可以看到，效果已经和`17`版本的一样了  
  
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d0f3fd4266548e087c0b50300cf064e~tplv-k3u1fbpfcp-watermark.image?)  
  
回看`16demo`，切换版本到`17`，当我们切换到`17`的时候，用`stopPropagation`就可以解决问题了,  
原因就是他在`root`节点上绑定的事件冒泡函数，`stopPropagation`切断了事件流，不会流向到`document`身上了  
  
### 总结  
* `16`版本先执行原生事件，当冒泡到`document`时，统一执行合成事件，  
* `17`版本在原生事件执行前先执行合成事件捕获阶段，原生事件执行完毕执行冒泡阶段的合成事件,通过根节点来管理所有的事件  
   
原生的阻止事件流会阻断合成事件的执行，合成事件阻止后也会影响到后续的原生执行  
# 说说对Redux中间件的理解？常用的中间件有哪些？实现原理？  
## 一、是什么  
  
中间件（Middleware）是介于应用系统和系统软件之间的一类软件，它使用系统软件所提供的基础服务（功能），衔接网络上应用系统的各个部分或不同的应用，能够达到资源共享、功能共享的目的  
  
在上篇文章中，了解到了`Redux`整个工作流程，当`action`发出之后，`reducer`立即算出`state`，整个过程是一个同步的操作  
  
那么如果需要支持异步操作，或者支持错误处理、日志监控，这个过程就可以用上中间件  
  
`Redux`中，中间件就是放在就是在`dispatch`过程，在分发`action`进行拦截处理，如下图：  
  
 ![](https://static.vue-js.com/57edf750-e699-11eb-ab90-d9ae814b240d.png)  
  
其本质上一个函数，对`store.dispatch`方法进行了改造，在发出 `Action `和执行 `Reducer `这两步之间，添加了其他功能  
  
  
## 二、常用的中间件  
  
有很多优秀的`redux`中间件，如：  
  
- redux-thunk：用于异步操作  
- redux-logger：用于日志记录  
  
上述的中间件都需要通过`applyMiddlewares`进行注册，作用是将所有的中间件组成一个数组，依次执行  
  
然后作为第二个参数传入到`createStore`中  
  
```js  
const store = createStore(  
  reducer,  
  applyMiddleware(thunk, logger)  
);  
```  
  
### redux-thunk  
  
`redux-thunk`是官网推荐的异步处理中间件  
  
默认情况下的`dispatch(action)`，`action`需要是一个`JavaScript`的对象  
  
`redux-thunk`中间件会判断你当前传进来的数据类型，如果是一个函数，将会给函数传入参数值（dispatch，getState）  
  
- dispatch函数用于我们之后再次派发action  
- getState函数考虑到我们之后的一些操作需要依赖原来的状态，用于让我们可以获取之前的一些状态  
  
所以`dispatch`可以写成下述函数的形式：  
  
```js  
const getHomeMultidataAction = () => {  
  return (dispatch) => {  
    axios.get("http://xxx.xx.xx.xx/test").then(res => {  
      const data = res.data.data;  
      dispatch(changeBannersAction(data.banner.list));  
      dispatch(changeRecommendsAction(data.recommend.list));  
    })  
  }  
}  
```  
  
  
  
### redux-logger  
  
  
如果想要实现一个日志功能，则可以使用现成的`redux-logger`  
  
```js  
import { applyMiddleware, createStore } from 'redux';  
import createLogger from 'redux-logger';  
const logger = createLogger();  
  
const store = createStore(  
  reducer,  
  applyMiddleware(logger)  
);  
```  
  
这样我们就能简单通过中间件函数实现日志记录的信息  
  
  
  
## 三、实现原理  
  
首先看看`applyMiddlewares`的源码  
  
```js  
export default function applyMiddleware(...middlewares) {  
  return (createStore) => (reducer, preloadedState, enhancer) => {  
    var store = createStore(reducer, preloadedState, enhancer);  
    var dispatch = store.dispatch;  
    var chain = [];  
  
    var middlewareAPI = {  
      getState: store.getState,  
      dispatch: (action) => dispatch(action)  
    };  
    chain = middlewares.map(middleware => middleware(middlewareAPI));  
    dispatch = compose(...chain)(store.dispatch);  
  
    return {...store, dispatch}  
  }  
}  
```  
  
所有中间件被放进了一个数组`chain`，然后嵌套执行，最后执行`store.dispatch`。可以看到，中间件内部（`middlewareAPI`）可以拿到`getState`和`dispatch`这两个方法  
  
在上面的学习中，我们了解到了`redux-thunk`的基本使用  
  
内部会将`dispatch`进行一个判断，然后执行对应操作，原理如下：  
  
```js  
function patchThunk(store) {  
    let next = store.dispatch;  
  
    function dispatchAndThunk(action) {  
        if (typeof action === "function") {  
            action(store.dispatch, store.getState);  
        } else {  
            next(action);  
        }  
    }  
  
    store.dispatch = dispatchAndThunk;  
}  
```  
  
实现一个日志输出的原理也非常简单，如下：  
  
```js  
let next = store.dispatch;  
  
function dispatchAndLog(action) {  
  console.log("dispatching:", addAction(10));  
  next(addAction(5));  
  console.log("新的state:", store.getState());  
}  
  
store.dispatch = dispatchAndLog;  
```  
  
# React.memo() 和 useMemo() 的用法是什么，有哪些区别？  
在软件开发中，我们通常痴迷于性能提升以及如何使我们的应用程序执行得更快，从而为用户提供更好的体验。  
  
Memoization 是优化性能的方法之一。 在本文中，我们将探讨它在 React 中的工作原理。  
  
# 什么是 memoization？  
在解释这个概念之前，让我们先来看一个简单的斐波那契程序：  
```javascript  
function fibonacci(n){  
  return (n < 2) ? n : fibonacci(n-1) + fibonacci(n-2);  
}  
```  
显然这个算法缓慢的令人绝望，因为做了非常多的冗余计算，这个时候memoization就可以派上用场了！  
  
简单来说，memoization 是一个过程，它允许我们缓存递归/昂贵的函数调用的值，以便下次使用相同的参数调用函数时，返回缓存的值而不必重新计算函数。  
  
这确保了我们的应用程序运行得更快，因为我们通过返回一个已经存储在内存中的值来避免重新执行函数需要的时间。  
  
# 为什么在 React 中使用 memoization？  
在 React 函数组件中，当组件中的 props 发生变化时，默认情况下整个组件都会重新渲染。 换句话说，如果组件中的任何值更新，整个组件将重新渲染，包括尚未更改其 values/props 的函数/组件。  
  
让我们看一个发生这种情况的简单示例。 我们将构建一个基本的应用程序，告诉用户哪种酒最适合与它们选择的奶酪搭配。  
  
我们将从设置两个组件开始。 第一个组件将允许用户选择奶酪。 然后它会显示最适合该奶酪的酒的名称。 第二个组件将是第一个组件的子组件。 在这个组件中，没有任何变化。 我们将使用这个组件来跟踪 React 重新渲染的次数。  
  
> 注意，本示例中使用的 `classNames` 来自 Tailwind CSS。  
  
下面是我们的父组件：`<ParentComponent />`。  
  
```  
// components/parent-component.js  
import Counts from "./counts";  
import Button from "./button";  
import { useState, useEffect } from "react";  
import constants from "../utils";  
const { MOZARELLA, CHEDDAR, PARMESAN, CABERNET, CHARDONAY, MERLOT } = constants;  
  
export default function ParentComponent() {  
  const [cheeseType, setCheeseType] = useState("");  
  const [wine, setWine] = useState("");  
  const whichWineGoesBest = () => {  
    switch (cheeseType) {  
      case MOZARELLA:  
        return setWine(CABERNET);  
      case CHEDDAR:  
        return setWine(CHARDONAY);  
      case PARMESAN:  
        return setWine(MERLOT);  
      default:  
        CHARDONAY;  
    }  
  };  
  useEffect(() => {  
    let mounted = true;  
    if (mounted) {  
      whichWineGoesBest();  
    }  
    return () => (mounted = false);  
  }, [cheeseType]);  
  
  return (  
    <div className="flex flex-col justify-center items-center">  
        <h3 className="text-center dark:text-gray-400 mt-10">  
          Without React.memo() or useMemo()  
        </h3>  
      <h1 className="font-semibold text-2xl dark:text-white max-w-md text-center">  
        Select a cheese and we will tell you which wine goes best!  
      </h1>  
      <div className="flex flex-col gap-4 mt-10">  
        <Button text={MOZARELLA} onClick={() => setCheeseType(MOZARELLA)} />  
        <Button text={CHEDDAR} onClick={() => setCheeseType(CHEDDAR)} />  
        <Button text={PARMESAN} onClick={() => setCheeseType(PARMESAN)} />  
      </div>  
      {cheeseType && (  
        <p className="mt-5 dark:text-green-400 font-semibold">  
          For {cheeseType}, <span className="dark:text-yellow-500">{wine}</span>{" "}  
          goes best.  
        </p>  
      )}  
      <Counts />  
    </div>  
  );  
}  
```  
  
第二个组件是 `<Counts />` 组件，它跟踪整个 `<Parent Component />` 组件重新渲染的次数。  
  
```  
// components/counts.js  
import { useRef } from "react";  
export default function Counts() {  
  const renderCount = useRef(0);  
  return (  
    <div className="mt-3">  
      <p className="dark:text-white">  
        Nothing has changed here but I've now rendered:{" "}  
        <span className="dark:text-green-300 text-grey-900">  
          {(renderCount.current++)} time(s)  
        </span>  
      </p>  
    </div>  
  );  
}  
```  
  
下面的例子是我们点击奶酪名字时的效果:  
  
  
`<ParentComponent />` 中的 `<Counts />` 组件计算了因 `<ParentComponent />` 的更改而强制 `<Counts />` 组件重新渲染的次数。  
  
目前，单击奶酪名字将更新显示下面的奶酪名字以及酒名。 除了 `<ParentComponent />` 会重新渲染，`<Counts />` 组件也会重新渲染，即使其中的任何内容都没有改变。  
  
想象一下，有一个组件显示数以千计的数据，每次用户单击一个按钮时，该组件或树中的每条数据都会在不需要更新时重新渲染。 这就是 `React.memo()` 或 `useMemo()` 为我们提供性能优化所必需的地方。  
  
现在，让我们探索 `React.memo` 以及 `useMemo()`。 之后我们将比较它们之间的差异，并了解何时应该使用一种而不是另一种。  
  
# 什么是 React.memo()？  
`React.memo()` 随 [React v16.6](https://reactjs.org/blog/2018/10/23/react-v-16-6.html) 一起发布。 虽然类组件已经允许您使用 [PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent) 或 [shouldComponentUpdate](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) 来控制重新渲染，但 React 16.6 引入了对函数组件执行相同操作的能力。  
  
`React.memo()` 是一个[高阶组件 (HOC)](https://reactjs.org/docs/higher-order-components.html)，它接收一个组件A作为参数并返回一个组件B，如果组件B的 props（或其中的值）没有改变，则组件 B 会阻止组件 A 重新渲染 。  
  
我们将采用上面相同的示例，但在我们的 `<Counts />` 组件中使用 `React.memo()`。 我们需要做的就是用 `React.memo()` 包裹我们的 `<Counts /> `组件，如下所示：  
  
```  
import { useRef } from "react";  
function Counts() {  
  const renderCount = useRef(0);  
  return (  
    <div className="mt-3">  
      <p className="dark:text-white">  
        Nothing has changed here but I've now rendered:{" "}  
        <span className="dark:text-green-300 text-grey-900">  
          {(renderCount.current ++)} time(s)  
      </span>  
      </p>  
    </div>  
  );  
}  
export default React.memo(Counts);  
```  
  
现在，当我们通过单击选择奶酪类型时，我们的 `<Counts />` 组件将不会重新渲染。  
  
  
# 什么是 useMemo()？  
  
`React.memo()` 是一个 HOC，而 [useMemo()](https://blog.logrocket.com/react-reference-guide-hooks-api/#usememo) 是一个 React Hook。 使用 `useMemo()`，我们可以返回记忆值来避免函数的依赖项没有改变的情况下重新渲染。  
  
为了在我们的代码中使用 `useMemo()`，[React 开发者有一些建议给我们](https://blog.logrocket.com/rethinking-hooks-memoization/)：  
  
- 您可以依赖 `useMemo()` 作为性能优化，而不是语义保证  
- 函数内部引用的每个值也应该出现在依赖项数组中  
  
对于我们的下一个示例，我们将对 `<ParentComponent />` 进行一些更改。 下面的代码仅显示对我们之前创建的 `<ParentComponent />` 的新更改。  
  
```  
// components/parent-component.js  
  
import { useState, useEffect, useRef, useMemo } from "react";  
import UseMemoCounts from "./use-memo-counts";  
  
export default function ParentComponent() {  
  const [times, setTimes] = useState(0);  
  const useMemoRef = useRef(0);  
  
  const incrementUseMemoRef = () => useMemoRef.current++;  
  
  // uncomment the next line to test that <UseMemoCounts /> will re-render every t ime the parent re-renders.  
  // const memoizedValue = useMemoRef.current++;  
  
// the next line ensures that <UseMemoCounts /> only renders when the times value changes  
const memoizedValue = useMemo(() => incrementUseMemoRef(), [times]);  
  
  return (  
    <div className="flex flex-col justify-center items-center border-2 rounded-md mt-5 dark:border-yellow-200 max-w-lg m-auto pb-10 bg-gray-900">  
        <div className="mt-4 text-center">  
          <button  
            className="bg-indigo-200 py-2 px-10 rounded-md"  
            onClick={() => setTimes(times+1)}  
          >  
            Force render  
          </button>  
  
          <UseMemoCounts memoizedValue={memoizedValue} />  
        </div>  
    </div>  
  );  
}  
```  
  
首先，我们引入了非常重要的 `useMemo()` Hook。 我们还引入了 `useRef()` Hook 来帮助我们跟踪在我们的组件中发生了多少次重新渲染。 接下来，我们声明一个 `times` 状态，稍后我们将更新该状态来触发/强制重新渲染。  
  
之后，我们声明一个 `memoizedValue` 变量，用于存储 `useMemo()` Hook 的返回值。` useMemo()` Hook 调用我们的 `incrementUseMemoRef` 函数，它会在每次依赖项发生变化时将我们的 `useMemoRef.current` 值加一，即 `times` 值发生变化。  
  
然后我们创建一个按钮来点击更新`times`的值。 单击此按钮将触发我们的 `useMemo()` Hook，更新 `memoizedValue` 的值，并重新渲染我们的 `<UseMemoCounts />` 组件。  
  
在这个例子中，我们还将 `<Counts />` 组件重命名为 `<UseMemoCounts />`，它现在需要一个 `memoizedValue` 属性。  
  
这是它的样子：  
```  
// components/use-memo-counts.js  
  
function UseMemoCounts({memoizedValue}) {  
  return (  
    <div className="mt-3">  
      <p className="dark:text-white max-w-md">  
        I'll only re-render when you click <span className="font-bold text-indigo-400">Force render.</span>   
        </p>  
      <p className="dark:text-white">I've now rendered: <span className="text-green-400">{memoizedValue} time(s)</span> </p>  
    </div>  
  );  
}  
export default UseMemoCounts;  
```  
  
现在，当我们单击任何奶酪按钮时，我们的 `memoizedValue` 不会更新。 但是当我们单击 **Force render** 按钮时，我们看到 `memoizedValue` 更新并且 `<UseMemoCounts />` 组件重新渲染。  
  
  
如果您注释掉我们当前的 `memoizedValue` 行，并取消注释掉它上面的行：  
```  
const memoizedValue = useMemoRef.current++;  
```  
  
您将看到 `<UseMemoCounts />` 组件在每次 `<ParentComponent />` 渲染时重新渲染。  
  
# 总结：React.memo() 和 useMemo() 的主要区别  
  
从上面的例子中，我们可以看到 `React.memo()` 和 `useMemo()` 之间的主要区别：  
  
- `React.memo()` 是一个高阶组件，我们可以使用它来包装我们不想重新渲染的组件，除非其中的 props 发生变化  
- `useMemo()` 是一个 React Hook，我们可以使用它在组件中包装函数。 我们可以使用它来确保该函数中的值仅在其依赖项之一发生变化时才重新计算  
  
虽然 memoization 似乎是一个可以随处使用的巧妙小技巧，但只有在绝对需要这些性能提升时才应该使用它。 Memoization 会占用运行它的机器上的内存空间，因此可能会导致意想不到的效果。  
# 说说你对 useReducer 的理解  
`useReducer`是React提供的一个高级Hook，它不像useEffect、useState、useRef等必须hook一样，没有它我们也可以正常完成需求的开发，但useReducer可以使我们的代码具有更好的可读性、可维护性、可预测性。  
  
### 什么是reducer  
  
`reducer`的概念是伴随着Redux的出现逐渐在JavaScript中流行起来。但我们并不需要学习Redux去了解Reducer。  
  
简单来说 reducer是一个函数`(state, action) => newState`：接收当前应用的state和触发的动作action，计算并返回最新的state。下面是一段伪代码：  
  
```  
    // 举个栗子 计算器reducer，根据state（当前状态）和action（触发的动作加、减）参数，计算返回newState  
    function countReducer(state, action) {  
        switch(action.type) {  
            case 'add':  
                return state + 1;  
            case 'sub':  
                return state - 1;  
            default:   
                return state;  
        }  
    }  
  
```  
  
上面例子：state是一个number类型的数值，reducer根据action的类型（加、减）对应的修改state，并返回最终的state。为了刚接触到`reducer`概念的小伙伴更容易理解,可以将state改为count，但请始终牢记count仍然是**state**。  
  
```  
    function countReducer(count, action) {  
        switch(action.type) {  
            case 'add':  
                return count + 1;  
            case 'sub':  
                return count - 1;  
            default:   
                return count;  
        }  
    }  
  
```  
  
### reducer 的幂等性  
  
从上面的示例可以看到`reducer`本质是一个纯函数，没有任何UI和副作用。这意味着相同的输入（state、action），reducer函数无论执行多少遍始终会返回相同的输出（newState）。因此通过reducer函数很容易推测state的变化，并且也更加容易单元测试。  
  
```  
    expect(countReducer(1, { type: 'add' })).equal(2); // 成功  
    expect(countReducer(1, { type: 'add' })).equal(2); // 成功  
    expect(countReducer(1, { type: 'sub' })).equal(0); // 成功  
  
```  
  
### state 和 newState 的理解  
  
`state`是当前应用状态对象，可以理解就是我们熟知的React里面的state。  
  
在上面的例子中state是一个基础数据类型，但很多时候state可能会是一个复杂的JavaScript对象，如上例中count有可能只是 state中的一个属性。针对这种场景我们可以使用ES6的结构赋值：  
  
```  
    // 返回一个 newState (newObject)  
    function countReducer(state, action) {  
        switch(action.type) {  
            case 'add':  
                return { ...state, count: state.count + 1; }  
            case 'sub':  
                return { ...state, count: state.count - 1; }  
            default:   
                return count;  
        }  
    }  
  
```  
  
关于上面这段代码有两个重要的点需要我们记住：  
  
1. reducer处理的state对象必须是`immutable`，这意味着永远不要直接修改参数中的state对象，reducer函数应该每次都返回一个新的state object  
2. 既然reducer要求每次都返回一个新的对象，我们可以使用ES6中的[解构赋值方式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread%5Fsyntax)去创建一个新对象，并复写我们需要改变的state属性，如上例。  
  
看上去很完美，但如果我们的state是多层嵌套，解构赋值实现就非常复杂：  
  
```  
    function bookReducer(state, action) {  
        switch(action.type) {  
            // 添加一本书  
            case 'addBook':  
                return {  
                    ...state,  
                    books: {  
                        ...state.books,  
                        [bookId]: book,  
                    }  
                };  
            case 'sub':  
                // ....  
            default:   
                return state;  
        }  
    }  
  
```  
  
对于这种复杂state的场景推荐使用[immer](https://github.com/immerjs/immer)等immutable库解决。  
  
### state为什么需要immutable？  
  
* reducer的幂等性  
  
我们上文提到过reducer需要保持幂等性，更加可预测、可测试。如果每次返回同一个state，就无法保证无论执行多少次都是相同的结果  
  
* React中的state比较方案  
  
React在比较`oldState`和`newState`的时候是使用Object.is函数，如果是同一个对象则不会出发组件的rerender。 可以参考官方文档[bailing-out-of-a-dispatch](https://reactjs.org/docs/hooks-reference.html#bailing-out-of-a-dispatch)。  
  
### action 理解  
  
action：用来表示触发的行为。  
  
1. 用type来表示具体的行为类型(登录、登出、添加用户、删除用户等)  
2. 用payload携带的数据（如增加书籍，可以携带具体的book信息），我们用上面addBook的action为例：  
  
```  
    const action = {  
        type: 'addBook',  
        payload: {  
            book: {  
                bookId,  
                bookName,  
                author,  
            }  
        }  
    }  
    function bookReducer(state, action) {  
        switch(action.type) {  
            // 添加一本书  
            case 'addBook':  
                const { book } = action.payload;  
                return {  
                    ...state,  
                    books: {  
                        ...state.books,  
                        [book.bookId]: book,  
                    }  
                };  
            case 'sub':  
                // ....  
            default:   
                return state;  
        }  
    }  
  
```  
  
## 总结  
  
至此基本介绍完了reducer相关的内容，简单总结一下：`reducer`是一个利用`action`提供的信息，将`state`从A转换到B的一个纯函数，具有一下几个特点：  
  
* 语法：(state, action) => newState  
* Immutable：每次都返回一个newState， 永远不要直接修改state对象  
* Action：一个常规的Action对象通常有type和payload（可选）组成    
   * type： 本次操作的类型，也是 reducer 条件判断的依据    
   * payload： 提供操作附带的数据信息  
  
# 说说你对 React Hook的闭包陷阱的理解，有哪些解决方案？  
本文从 一个hooks中 “奇怪”（其实符合逻辑） 的 “闭包陷阱” 的场景切入，试图讲清楚其背后的因果。同时，在许多 react hooks 奇技淫巧的文章里，也能看到 `useRef` 的身影，那么为什么使用 `useRef` 又能摆脱 这个 “闭包陷阱” ？ 搞清楚这些问题，将能较大的提升对 react hooks 的理解。  
  
react hooks 一出现便受到了许多开发人员的追捧,或许在使用react hooks 的时候遇到 “闭包陷阱” 是每个开发人员在开发的时候都遇到过的事情，有的两眼懵逼、有的则稳如老狗瞬间就定义到了问题出现在何处。  
  
(以下react示范demo，均为react 16.8.3 版本)  
  
你一定遭遇过以下这个场景：  
```js  
function App(){  
    const [count, setCount] = useState(1);  
    useEffect(()=>{  
        setInterval(()=>{  
            console.log(count)  
        }, 1000)  
    }, [])  
}  
```  
在这个定时器里面去打印 `count` 的值，会发现，不管在这个组件中的其他地方使用 `setCount` 将 `count` 设置为任何值，还是设置多少次，打印的都是1。是不是有一种，尽管历经千帆，我记得的还是你当初的模样的感觉？ hhh... 接下来，我将尽力的尝试将我理解的，为什么会发生这么个情况说清楚，并且浅谈一些hooks其他的特性。如果有错误，希望各位同学能救救孩子，不要让我带着错误的认知活下去了。。。  
  
## 1、一个熟悉的闭包场景  
  
首先从一个各位jser都很熟悉的场景入手。  
```js  
for ( var i=0; i<5; i++ ) {  
    setTimeout(()=>{  
        console.log(i)  
    }, 0)  
}  
```  
  
我就不说为什么最终，打印的都是5的原因了。直接贴出使用闭包打印 0...4的代码：  
```js  
for ( var i=0; i<5; i++ ) {  
   (function(i){  
         setTimeout(()=>{  
            console.log(i)  
        }, 0)  
   })(i)  
}  
```  
  
这个原理其实就是使用闭包，定时器的回调函数去引用立即执行函数里定义的变量，形成闭包保存了立即执行函数执行时 i 的值，异步定时器的回调函数才如我们想要的打印了顺序的值。  
  
其实，`useEffect` 的哪个场景的原因，跟这个，简直是一样的，**`useEffect` 闭包陷阱场景的出现，是 react 组件更新流程以及 `useEffect` 的实现的自然而然结果**。  
  
## 2 浅谈hooks原理，理解useEffect 的 “闭包陷阱” 出现原因。  
  
首先，可能都听过react的 Fiber 架构，其实可以认为一个 Fiber节点就对应的是一个组件。对于 `classComponent` 而言，有 `state` 是一件很正常的事情，Fiber对象上有一个 `memoizedState` 用于存放组件的 `state`。ok，现在看 hooks 所针对的 `FunctionComponnet`。 无论开发者怎么折腾，一个对象都只能有一个 `state` 属性或者 `memoizedState`  属性，可是，谁知道可爱的开发者们会在 `FunctionComponent` 里写上多少个 `useState`，`useEffect` 等等 ? 所以，react用了链表这种数据结构来存储 `FunctionComponent` 里面的 hooks。比如：  
  
```js  
function App(){  
    const [count, setCount] = useState(1)  
    const [name, setName] = useState('chechengyi')  
    useEffect(()=>{  
          
    }, [])  
    const text = useMemo(()=>{  
        return 'ddd'  
    }, [])  
}  
```  
在组件第一次渲染的时候，为每个hooks都创建了一个对象  
  
```ts  
type Hook = {  
  memoizedState: any,  
  baseState: any,  
  baseUpdate: Update<any, any> | null,  
  queue: UpdateQueue<any, any> | null,  
  next: Hook | null,  
};  
```  
  
最终形成了一个链表。  
![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/16/172bd37d7a7abc28~tplv-t2oaga2asx-image.image)  
  
这个对象的`memoizedState`属性就是用来存储组件上一次更新后的 `state`,`next`毫无疑问是指向下一个hook对象。在组件更新的过程中，hooks函数执行的顺序是不变的，就可以根据这个链表拿到当前hooks对应的`Hook`对象，函数式组件就是这样拥有了state的能力。当前，具体的实现肯定比这三言两语复杂很多。  
  
所以，知道为什么不能将hooks写到if else语句中了把？因为这样可能会导致顺序错乱，导致当前hooks拿到的不是自己对应的Hook对象。  
  
`useEffect` 接收了两个参数，一个回调函数和一个数组。数组里面就是 `useEffect` 的依赖，当为 [] 的时候，回调函数只会在组件第一次渲染的时候执行一次。如果有依赖其他项，react 会判断其依赖是否改变，如果改变了就会执行回调函数。说回最初的场景：  
```js  
function App(){  
    const [count, setCount] = useState(1);  
    useEffect(()=>{  
        setInterval(()=>{  
            console.log(count)  
        }, 1000)  
    }, [])  
    function click(){ setCount(2) }  
}  
```  
好，开动脑袋开始想象起来，组件第一次渲染执行 `App()`，执行 `useState` 设置了初始状态为1，所以此时的 `count` 为1。然后执行了 `useEffect`，回调函数执行，设置了一个定时器每隔 1s 打印一次 `count`。  
  
接着想象如果 `click` 函数被触发了，调用 `setCount(2)` 肯定会触发react的更新，更新到当前组件的时候也是执行 `App()`，之前说的链表已经形成了哈，此时 `useState` 将 `Hook` 对象 上保存的状态置为2， 那么此时 `count` 也为2了。然后在执行 `useEffect` 由于依赖数组是一个空的数组，所以此时回调并不会被执行。  
  
ok，这次更新的过程中根本就没有涉及到这个定时器，这个定时器还在坚持的，默默的，每隔1s打印一次 `count`。 注意这里打印的 `count` ，是组件第一次渲染的时候 `App()` 时的 `count`， `count`的值为1，**因为在定时器的回调函数里面被引用了，形成了闭包一直被保存**。  
  
  
## 2 难道真的要在依赖数组里写上的值，才能拿到新鲜的值？  
仿佛都习惯性都去认为，只有在依赖数组里写上我们所需要的值，才能在更新的过程中拿到最新鲜的值。那么看一下这个场景：  
```jsx  
function App() {  
  return <Demo1 />  
}  
  
function Demo1(){  
  const [num1, setNum1] = useState(1)  
  const [num2, setNum2] = useState(10)  
  
  const text = useMemo(()=>{  
    return `num1: ${num1} | num2:${num2}`  
  }, [num2])  
  
  function handClick(){  
    setNum1(2)  
    setNum2(20)  
  }  
  
  return (  
    <div>  
      {text}  
      <div><button onClick={handClick}>click!</button></div>  
    </div>  
  )  
}  
```  
`text` 是一个 `useMemo` ，它的依赖数组里面只有num2，没有num1，却同时使用了这两个state。当点击button 的时候，num1和num2的值都改变了。那么，只写明了依赖num2的 text 中能否拿到 num1 最新鲜的值呢？  
  
如果你装了 `react` 的 eslint 插件，这里也许会提示你错误，因为在text中你使用了 num1 却没有在依赖数组中添加它。 但是执行这段代码会发现，是可以正常拿到num1最新鲜的值的。  
  
如果理解了之前第一点说的“闭包陷阱”问题，肯定也能理解这个问题。  
  
为什么呢，再说一遍，这个依赖数组存在的意义，是react为了判定，在**本次更新**中，是否需要执行其中的回调函数，这里依赖了的num2，而num2改变了。回调函数自然会执行， 这时形成的闭包引用的就是最新的num1和num2，所以，自然能够拿到新鲜的值。问题的关键，在于回调函数执行的时机，闭包就像是一个照相机，把回调函数执行的那个时机的那些值保存了下来。之前说的定时器的回调函数我想就像是一个从1000年前穿越到现代的人，虽然来到了现代，但是身上的血液、头发都是1000年前的。  
  
## 3 为什么使用useRef能够每次拿到新鲜的值？  
大白话说：因为初始化的 `useRef` 执行之后，返回的都是同一个对象。写到这里宝宝又不禁回忆起刚学js那会儿，捧着红宝书啃时候的场景了：  
  
```js  
var A = {name: 'chechengyi'}  
var B = A  
B.name = 'baobao'  
console.log(A.name) // baobao  
```  
  
对，这就是这个场景成立的最根本原因。  
  
也就是说，在组件每一次渲染的过程中。 比如 `ref = useRef()` 所返回的都是同一个对象，每次组件更新所生成的`ref`指向的都是同一片内存空间， 那么当然能够每次都拿到最新鲜的值了。犬夜叉看过把？一口古井连接了现代世界与500年前的战国时代，这个同一个对象也将这些个被保存于不同闭包时机的变量了联系了起来。  
  
使用一个例子或许好理解一点：  
```js  
/* 将这些相关的变量写在函数外 以模拟react hooks对应的对象 */  
let isC = false  
let isInit = true; // 模拟组件第一次加载  
let ref = {  
	current: null  
}  
  
function useEffect(cb){  
// 这里用来模拟 useEffect 依赖为 [] 的时候只执行一次。  
if (isC) return  
isC = truet  
cb()  
}  
  
function useRef(value){  
// 组件是第一次加载的话设置值 否则直接返回对象  
	if ( isInit ) {  
		ref.current = value  
		isInit = false  
	}  
	return ref  
}  
  
function App(){  
	let ref_ = useRef(1)  
	ref_.current++  
	useEffect(()=>{  
		setInterval(()=>{  
			console.log(ref.current) // 3  
		}, 2000)  
	})  
}  
  
// 连续执行两次 第一次组件加载 第二次组件更新  
App()  
App()  
```  
  
所以，提出一个合理的设想。只要我们能保证每次组件更新的时候，`useState` 返回的是同一个对象的话？我们也能绕开闭包陷阱这个情景吗？ 试一下吧。  
  
```jsx  
function App() {  
  // return <Demo1 />  
  return <Demo2 />  
}  
  
function Demo2(){  
  const [obj, setObj] = useState({name: 'chechengyi'})  
  
  useEffect(()=>{  
    setInterval(()=>{  
      console.log(obj)  
    }, 2000)  
  }, [])  
    
  function handClick(){  
    setObj((prevState)=> {  
      var nowObj = Object.assign(prevState, {  
        name: 'baobao',  
        age: 24  
      })  
      console.log(nowObj == prevState)  
      return nowObj  
    })  
  }  
  return (  
    <div>  
      <div>  
        <span>name: {obj.name} | age: {obj.age}</span>  
        <div><button onClick={handClick}>click!</button></div>  
      </div>  
    </div>  
  )  
}  
```  
简单说下这段代码，在执行 `setObj` 的时候，传入的是一个函数。这种用法就不用我多说了把？然后 `Object.assign` 返回的就是传入的第一个对象。总儿言之，就是在设置的时候返回了同一个对象。  
  
执行这段代码发现，确实点击button后，定时器打印的值也变成了：  
```js  
{  
    name: 'baobao',  
    age: 24   
}  
```  
  
  
# react是否支持给标签设置自定义的属性，比如给video标签设置webkit-playsinline？  
如果你在react中这么样写：  
  
```js  
// Your code:  
<div mycustomattribute="something" />  
```  
  
在react 15中将被渲染成：  
  
```js  
// React 15 output:  
<div />  
```  
  
在react 16及之后的版本中将被渲染成：  
  
```js  
// React 16 output:  
<div mycustomattribute="something" />  
```  
  
但这个会有限制，如果自定义的属性不是 `string`, `number` 或者 `object`，该属性依然会被忽略。  
  
所以目前可以这样添加 webkit-playsinline 属性：  
  
```js  
<video width="750" height="500" controls webkit-playsinline="true">  
	<source src="https://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4"/>  
</video>  
```  
  
另外，还可以通过 `setAttribute` 进行设置，比如：  
  
```js  
import * as React from 'react';  
import { Component } from 'react';  
  
export class VideoComponent extends Component {  
  videoContainer: HTMLDivElement;  
  componentDidMount() {  
    const video = document.createElement('video');  
    video.autoplay = true;  
    video.loop = true;  
    video.muted = true; // fixes autoplay in chrome  
    video.setAttribute('playsinline', 'true'); // fixes autoplay in webkit (ie. mobile safari)  
  
    const source = document.createElement('source');  
    source.src = '/path/to/your/video.mp4';  
    source.type = 'video/mp4';  
    video.appendChild(source);  
  
    this.videoContainer.appendChild(video);  
  }  
  render() {  
    return (  
      <div ref={(ref) => { this.videoContainer = ref; }} />  
    );  
  }  
}  
  
```  
  
  
# 我们应该在什么场景下使用  useMemo 和 useCallback ？  
## 前言  
  
useMemo 和 useCallback 是 React 的内置 Hook，通常作为优化性能的手段被使用。他们可以用来缓存函数、组件、变量，以避免两次渲染间的重复计算。但是实践过程中，他们经常被过度使用：担心性能的开发者给每个组件、函数、变量、计算过程都套上了 memo，以至于它们在代码里好像失控了一样，无处不在。  
  
本文希望通过分析 useMemo/useCallback 的目的、方式、成本，以及具体使用场景，帮助开发者正确的决定如何适时的使用他们。赶时间的读者可以直接拉到底部看结论。  
  
我们先从 useMemo/useCallback 的目的说起。  
  
## 为什么使用 useMemo 和 useCallback  
  
使用 memo 通常有三个原因：  
  
1. ✅ 防止不必要的 effect。  
2. ❗️防止不必要的 re-render。  
3. ❗️防止不必要的重复计算。  
  
后两种优化往往被误用，导致出现大量的无效优化或冗余优化。下面详细介绍这三个优化方式。  
  
### 防止不必要的 effect  
  
如果一个值被 useEffect 依赖，那它可能需要被缓存，这样可以避免重复执行 effect。  
  
```js  
const Component = () => {  
  // 在 re-renders 之间缓存 a 的引用  
  const a = useMemo(() => ({ test: 1 }), []);  
  
  useEffect(() => {  
    // 只有当 a 的值变化时，这里才会被触发  
    doSomething();  
  }, [a]);  
  
  // the rest of the code  
};  
```  
  
useCallback 同理：  
  
```js  
const Component = () => {  
  // 在 re-renders 之间缓存 fetch 函数  
  const fetch = useCallback(() => {  
    console.log('fetch some data here');  
  }, []);  
  
  useEffect(() => {  
    // 仅fetch函数的值被改变时，这里才会被触发  
    fetch();  
  }, [fetch]);  
  
  // the rest of the code  
  
};  
```  
  
当变量直接或者通过依赖链成为 useEffect 的依赖项时，那它可能需要被缓存。这是 useMemo 和 useCallback 最基本的用法。  
  
### 防止不必要的 re-render  
  
进入重点环节了🔔。正确的阻止 re-render 需要我们明确三个问题：  
  
1. 组件什么时候会 re-render。  
2. 如何防止子组件 re-render。  
3. 如何判断子组件需要缓存。  
  
#### 1\. 组件什么时候会 re-render  
  
三种情况：  
  
1. 当本身的 props 或 state 改变时。  
2. Context value 改变时，使用该值的组件会 re-render。  
3. 当父组件重新渲染时，它所有的子组件都会 re-render，形成一条 re-render 链。  
  
第三个 re-render 时机经常被开发者忽视，**导致代码中存在大量的无效缓存**。  
  
例如：  
  
```js  
const App = () => {  
  const [state, setState] = useState(1);  
  
  const onClick = useCallback(() => {  
    console.log('Do something on click');  
  }, []);  
  
  return (  
	// 无论 onClick 是否被缓存，Page 都会 re-render   
    <Page onClick={onClick} />  
  );  
};  
```  
  
当使用 setState 改变 state 时，App 会 re-render，作为子组件的 Page 也会跟着 re-render。这里 useCallback 是完全无效的，它并不能阻止 Page 的 re-render。  
  
#### 2\. 如何防止子组件 re-render  
  
**必须同时缓存 onClick 和组件本身，才能实现 Page 不触发 re-render。**  
  
```js  
const PageMemoized = React.memo(Page);  
  
const App = () => {  
  const [state, setState] = useState(1);  
  
  const onClick = useCallback(() => {  
    console.log('Do something on click');  
  }, []);  
  
  return (  
    // Page 和 onClick 同时 memorize  
    <PageMemoized onClick={onClick} />  
  );  
};  
```  
  
由于使用了React.memo，PageMemoized 会浅比较 props 的变化后再决定是否 re-render。onClick 被缓存后不会再变化，所以 PageMemoized 不再 re-render。  
  
然而，如果 PageMemoized 再添加一个未被缓存的 props，一切就前功尽弃 🤯 ：  
  
```js  
const PageMemoized = React.memo(Page);  
  
const App = () => {  
  const [state, setState] = useState(1);  
  
  const onClick = useCallback(() => {  
    console.log('Do something on click');  
  }, []);  
  
  return (  
    // page WILL re-render because value is not memoized  
    <PageMemoized onClick={onClick} value={[1, 2, 3]} />  
  );  
};  
```  
  
由于 value 会随着 App 的 re-render 重新定义，引用值发生变化，导致 PageMemoized 仍然会触发 re-render。  
  
现在可以得出结论了，必须同时满足以下两个条件，子组件才不会 re-render：  
  
1. 子组件自身被缓存。  
2. 子组件所有的 prop 都被缓存。  
  
#### 3\. 如何判断子组件需要缓存  
  
我们已经了解，为了防止子组件 re-render，需要以下成本：  
  
1. **开发者工作量的增加**： 一旦使用缓存，就必须保证组件本身以及所有 props 都缓存，后续添加的所有 props 都要缓存。  
2. **代码复杂度和可读性的变化**：代码中出现大量缓存函数，这会增加代码复杂度，并降低易读性。  
  
除此之外还有另外一个成本：**性能成本**。 组件的缓存是在初始化时进行，虽然每个组件缓存的性能耗费很低，通常不足1ms，但大型程序里成百上千的组件如果同时初始化缓存，成本可能会变得很可观。  
  
所以局部使用 memo，比全局使用显的更优雅、性能更好，坏处是需要开发者主动去判断是否需要缓存该子组件。  
  
🤨 那应该什么时候缓存组件，怎么判断一个组件的渲染是昂贵的？  
  
很遗憾，似乎没有一个简单&无侵入&自动的衡量方式。通常来说有两个方式：  
  
1. 人肉判断，开发或者测试人员在研发过程中感知到渲染性能问题，并进行判断。  
2. 通过工具，目前有一些工具协助开发者在查看组件性能:    
   1. 如 [React Dev Tools Profiler](https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fblog%2F2018%2F09%2F10%2Fintroducing-the-react-profiler.html "https://zh-hans.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html")，[这篇文章](https://link.juejin.cn?target=https%3A%2F%2Fmedium.com%2F%40ashr81%2Freact-performance-code-changes-part-i-fc8f2fddb37 "https://medium.com/@ashr81/react-performance-code-changes-part-i-fc8f2fddb37")介绍了使用方式    
   2. 如这个 hooks：[useRenderTimes](https://link.juejin.cn?target=https%3A%2F%2Fecomfe.github.io%2Freact-hooks%2F%23%2Fhook%2Fdebug%2Fuse-render-times "https://ecomfe.github.io/react-hooks/#/hook/debug/use-render-times")  
  
另外，React 在 16.5版本后提供了 [Profiler API](https://link.juejin.cn?target=https%3A%2F%2Freactjs.org%2Fdocs%2Fprofiler.html "https://reactjs.org/docs/profiler.html")：_它可以识别出应用中渲染较慢的部分，或是可以使用类似 memoization 优化的部分_。所以可以通过 puppeteer 或 cypress 在自动化集成中测试组件性能，这很适合核心组件的性能测试。  
  
### 防止不必要的重复计算  
  
如 [React 文档](https://link.juejin.cn?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fdocs%2Fhooks-reference.html%23usememo "https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo")所说，useMemo 的基本作用是，避免在每次渲染时都进行高开销的计算。  
  
🤨 那什么是“高开销的计算”？  
  
高开销的计算其实极少出现，如下示例，对包含 250 个 item 的数组 countries 进行排序、渲染，并计算耗时。  
  
```js  
const List = ({ countries }) => {  
  const before = performance.now();  
  const sortedCountries = orderBy(countries, 'name', sort);  
  // this is the number we're after  
  const after = performance.now() - before;  
  
  return (  
    // same  
  )  
};  
```  
  
![image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/64328a2ae1014c32ab6a5637d8a787c2~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)  
  
结果如图所示，排序耗时仅用了 4 毫秒，而渲染图中的 List 组件（仅仅只是 button + 文字）却用了 20 毫秒，5倍的差距，代码详见 [codesandbox.](https://link.juejin.cn?target=https%3A%2F%2Fcodesandbox.io%2Fs%2Fmeasure-without-memo-tnhggk%3Ffile%3D%2Fsrc%2Fpage.tsx "https://codesandbox.io/s/measure-without-memo-tnhggk?file=/src/page.tsx")。 大部分情况下，我们的计算量要比这个 250 个 item 的数组少，而组件渲染要比这个 List 组件复杂的多，所以真实程序中，计算和渲染的性能差距会更大。  
  
可见，组件渲染才是性能的瓶颈，应该把 useMemo 用在程序里渲染昂贵的组件上，而不是数值计算上。当然，除非这个计算真的很昂贵，比如阶乘计算。  
  
至于为什么不给所有的组件都使用 useMemo，上文已经解释了。useMemo 是有成本的，它会增加整体程序初始化的耗时，并不适合全局全面使用，它更适合做局部的优化。  
  
## 为什么 React 没有把缓存组件作为默认配置？  
  
关于这点 Dan Abramov 在[推文](https://link.juejin.cn?target=https%3A%2F%2Ftwitter.com%2Fdan%5Fabramov%2Fstatus%2F1083897065263034368 "https://twitter.com/dan_abramov/status/1083897065263034368")上也给出了解释（虽然是个类比 😅）：![image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11bda279ba3546ce9a86c963e37c2d25~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)  
  
评论区里 react 的另一位核心开发者 Christopher Chedeau 也参与了[讨论](https://link.juejin.cn?target=https%3A%2F%2Ftwitter.com%2FVjeux%2Fstatus%2F1083902075946205189 "https://twitter.com/Vjeux/status/1083902075946205189")。 简而言之，他们认为：  
  
1. 缓存是有成本的，小的成本可能会累加过高。  
2. 默认缓存无法保证足够的正确性。  
  
> 原因 2 的原文：correctness is not guaranteed for everything because people can mutate things. Christopher Chedeau 未给出进一步解释。或许他是指可能会导致跟 [PureComponent相同的问题](https://link.juejin.cn?target=https%3A%2F%2Freactjs.org%2Fdocs%2Foptimizing-performance.html%23examples "https://reactjs.org/docs/optimizing-performance.html#examples")，即浅比较 mutate things 时，由于浅比较相等，导致组件未能 update 的问题。  
  
## 结论  
  
讲到这里我们可以总结出 useMemo/useCallback 使用准则了：  
  
1. **大部分的 useMemo 和 useCallback 都应该移除**，他们可能没有带来任何性能上的优化，反而增加了程序首次渲染的负担，并增加程序的复杂性。  
2. 使用 useMemo 和 useCallback 优化子组件 re-render 时，**必须同时满足以下条件才有效**。    
   1. 子组件已通过 React.memo 或 useMemo 被缓存    
   2. 子组件所有的 prop 都被缓存  
3. **不推荐默认给所有组件都使用缓存**，大量组件初始化时被缓存，可能导致过多的内存消耗，并影响程序初始化渲染的速度。  
  
> 关于第三点有相反观点，详见：[Why We Memo All the Things](https://link.juejin.cn?target=https%3A%2F%2Fattardi.org%2Fwhy-we-memo-all-the-things%2F%3Futm%5Fsource%3Dttalk.im%26utm%5Fmedium%3Dwebsite%26utm%5Fcampaign%3DTech%252520Talk "https://attardi.org/why-we-memo-all-the-things/?utm_source=ttalk.im&utm_medium=website&utm_campaign=Tech%2520Talk")，作者推荐默认给全部组件都加上 React.memo，并给所有 props 都套上 useMemo。他认为这样可以降低工程师心智负担，让工程师不必再自己判断什么时候使用 memorize。 作者开发了一款 eslint 插件，以强制要求所有组件和 props 都添加缓存：[eslint-plugin-react-memo](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fsteadicat%2Feslint-plugin-react-memo%3Futm%5Fsource%3Dttalk.im%26utm%5Fmedium%3Dwebsite%26utm%5Fcampaign%3DTech%252520Talk "https://github.com/steadicat/eslint-plugin-react-memo?utm_source=ttalk.im&utm_medium=website&utm_campaign=Tech%2520Talk")  
# setState 是同步，还是异步的？  
PS: 2022年10月更新答案  
  
# react18之前。  
  
setState在不同情况下可以表现为异步或同步。  
  
在Promise的状态更新、js原生事件、setTimeout、setInterval..中是同步的。  
  
在react的合成事件中，是异步的。  
  
---  
  
# react18之后。  
  
setState都会表现为异步（即批处理）。    
[官方详细说明。](https://github.com/reactwg/react-18/discussions/21)  
  
---  
  
# react17和react18中setState在setTimeout中的表现  
  
实例代码：  
  
```js  
export default class Test extends Component {  
  state = {  
    num: 0  
  }  
  hClick = () => {  
    setTimeout(() => {  
      console.log('before----', this.state.num)  
      this.setState({num: this.state.num+1})  
      console.log('after----', this.state.num)  
    }, 1000)  
  }  
  render() {  
    return (  
    <div>  
      React 17/18  
      <hr />  
      {this.state.num}  
      <button onClick={this.hClick}>+1</button>  
    </div>)  
  }  
}  
```  
  
同样代码在react17和react18中的表现如下：  
  
![React17.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fdf60adef9d43e6bfa574d616693707~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)  
  
![React18.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88f168d045374f16b1ebb2cf0955d94d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)  
  
---  
  
## react18之前版本的解释  
  
在React中，如果是由React引发的事件处理（比如通过onClick引发的事件处理），调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.state 。所谓“除此之外”，指的是绕过React通过addEventListener直接添加的事件处理函数，还有通过setTimeout/setInterval产生的异步调用。  
  
原因： 在React的setState函数实现中，会根据一个变量isBatchingUpdates判断是直接更新this.state还是放到队列中回头再说，而isBatchingUpdates默认是false，也就表示setState会同步更新this.state，但是，有一个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true，而当React在调用事件处理函数之前就会调用这个batchedUpdates，造成的后果，就是由React控制的事件处理过程setState不会同步更新this.state。  
  
注意： setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。  
  
综上，setState 只在合成事件和 hook() 中是“异步”的，在 原生事件和 setTimeout 中都是同步的。  
  
  
# 说说你对 dangerouslySetInnerHTML 的理解  
本文介绍了在React应用程序中使用`dangerouslySetInnerHTML` 属性的原因，它相当于浏览器DOM中的`innerHTML` 属性。  
  
## 什么是`dangerouslySetInnerHTML` ？  
  
`dangerouslySetInnerHTML` 是一个属性，你可以在 React 应用程序中的 HTML 元素上使用，以编程方式设置其内容。你可以直接在元素上使用这个属性，而不是使用选择器来抓取HTML元素，然后设置其`innerHTML` 。  
  
当使用`dangerouslySetInnerHTML` ，React也知道该特定元素的内容是动态的，对于该节点的子节点，它只是跳过与虚拟DOM的比较，以获得一些额外的性能。  
  
正如该属性的名称所暗示的，使用它可能是危险的，因为它使你的代码容易受到跨站脚本（XSS）攻击。特别是当你从第三方来源获取数据或渲染用户提交的内容时，这就成为一个问题。  
  
## 何时使用`dangerouslySetInnerHTML`  
  
你需要设置DOM元素的HTML内容的一个用例是当你用来自富文本编辑器的数据填充一个`<div>` 。想象一下，你有一个网页，人们可以提交评论，你允许他们使用一个富文本编辑器。在这种情况下，富文本编辑器的输出很可能是带有标签的HTML，如`<p>`,`<b>`, 和`<img>` 。  
  
考虑一下下面的代码片段，它将在不知道其中的`<b>` 标签的情况下渲染字符串--意味着输出的只是字符串本身，没有任何粗体字，就像这样：lorem **ipsum**。  
  
```javascript  
const App = () => {  
  const data = 'lorem <b>ipsum</b>';  
  
  return (  
    <div>  
      {data}  
    </div>  
  );  
}  
  
export default App;  
```  
  
但当使用`dangerouslySetInnerHTML` ，React就会意识到HTML标签，并正确渲染它们。这一次，输出将以粗体文本正确呈现（即lorem**ipsum**）。  
  
```ini  
const App = () => {  
  const data = 'lorem <b>ipsum</b>';  
  
  return (  
    <div  
      dangerouslySetInnerHTML={{__html: data}}  
    />  
  );  
}  
  
export default App;  
```  
  
请注意，它应该是一个带有传递给`__html` 键的对象`dangerouslySetInnerHTML` 。除此之外，你使用`dangerouslySetInnerHTML` 属性的元素不应该有任何孩子，因此要使用`<div>` 元素作为自闭标签。  
  
传递对象的要求只是另一种保障措施，以防止开发者在没有阅读文档和意识到潜在危险的情况下使用它。  
  
## 使用时的消毒`dangerouslySetInnerHTML`  
  
上面的例子在渲染时不会造成危险。然而，在某些情况下，HTML元素可能会执行一个脚本。  
  
考虑一下下面的例子，一个JavaScript事件被附加到一个HTML元素上。虽然这些是无害的例子，但它们是概念的证明，表明一个HTML元素如何被利用来运行恶意脚本。  
  
```ini  
const App = () => {  
  const data = `lorem <b onmouseover="alert('mouseover');">ipsum</b>`;  
  
  return (  
    <div  
      dangerouslySetInnerHTML={{__html: data}}  
    />  
  );  
}  
  
export default App;  
  
  
const App = () => {  
  const data = `lorem ipsum <img src="" onerror="alert('message');" />`;  
  
  return (  
    <div  
      dangerouslySetInnerHTML={{__html: data}}  
    />  
  );  
}  
  
export default App;  
```  
  
幸运的是，有针对HTML的净化工具，可以检测出HTML代码中潜在的恶意部分，然后输出一个干净安全的版本。最受欢迎的HTML净化工具是[DOMPurify](https://github.com/cure53/DOMPurify)。  
  
让我们使用它的[在线演示](https://cure53.de/purify)来对上述HTML代码进行消毒，看看它是如何检测并过滤掉代码中可能在执行时产生危险的部分的。  
  
```less  
Original  
lorem <b onmouseover="alert('mouseover');">ipsum</b>  
  
Sanitized  
lorem <b>ipsum</b>  
```  
  
```ini  
Original  
lorem ipsum <img src="" onerror="alert('message');" />  
  
Sanitized  
lorem ipsum <img src="">  
```  
  
即使在我们信任数据来源的情况下，使用消毒剂也是很好的做法。在使用DOMPurify包的情况下，上面的一个例子会是这样的。  
  
```javascript  
import DOMPurify from 'dompurify'  
  
const App = () => {  
  const data = `lorem <b onmouseover="alert('mouseover');">ipsum</b>`  
  const sanitizedData = () => ({  
    __html: DOMPurify.sanitize(data)  
  })  
  
  return (  
    <div  
      dangerouslySetInnerHTML={sanitizedData()}  
    />  
  );  
}  
  
export default App;  
```  
  
`sanitizedData` 函数返回一个带有`__html` 键的对象，它有一个从`DOMPurify.sanitize` 函数返回的值。  
  
正如预期的那样，当我们将鼠标悬停在粗体字上时，并没有执行警报函数。  
  
请注意，由于DOMPurify需要一个DOM树，而Node环境没有，你要么使用`jsdom` 包来创建一个`window` 对象，并用它来初始化`DOMPurify` ，要么单独使用`isomorphic-dompurify` 包来代替，它同时封装了`DOMPurify` 和`jsdom` 包。  
  
如果你喜欢第一种选择，你可以参考以下来自`DOMPurify` 的文档片段。  
  
```ini  
const createDOMPurify = require('dompurify');  
const { JSDOM } = require('jsdom');  
  
const window = new JSDOM('').window;  
const DOMPurify = createDOMPurify(window);  
  
const clean = DOMPurify.sanitize(dirty);  
```  
  
## 结论  
  
总之，`dangerouslySetInnerHTML` 只不过是React中`innerHTML` 的替代品，应该谨慎使用。虽然这个名字暗示了使用它的危险性，但通过使用一个完善的净化器采取必要的措施，确保代码是干净的，在React节点内呈现时不会运行意外的脚本。  
# 你常用的 React Hooks 有哪些？  
### 1 useState  
  
#### 1.1 类组件中  
  
在类组件中，可以用`this.state`来定义类组件的状态，可以看下以下代码实现  
  
```javascript  
import React from 'react'  
  
class StateClass extends React.Component{  
    constructor(){  
        super()  
        this.state = {  
            name: '类'  
        }  
    }  
  
    render() {  
        return (  
            <div onClick={ this.setName }>  
                这是一个类组件————{ this.state.name }  
            </div>  
        )  
    }  
  
    setName = () => {  
        this.setState({  
            name: '我通过类组件方法变成这样了'  
        })  
    }  
}  
  
export default StateClass  
  
```  
  
#### 1.2 函数组件中  
  
在函数组件中，可以使用`useState`来定义函数组件的状态。使用`useState`来创建状态  
  
* 1.引入  
* 2.接收一个参数作为初始值  
* 3.返回一个数组，第一个值为状态，第二个值为改变状态的函数  
  
看一下同样的功能实现，函数组件的`useState`的代码实现如下。相同的功能，用函数组件的`useState`的写法是不是方便多了呢？接下来我们继续学习另外的`hooks`  
  
```javascript  
import React,{ useState } from 'react'  
  
function StateFunction () {  
    const [name, setName] = useState('函数')  
    //     类名，修改函数名            初始值  
  
    return (  
        <div onClick={ () => setName('我使用hooks变成这样了') }>  
        //	setName也可以写入方法，如setName（ val => val+'xxxx' ）  
            这是一个函数式组件————{name}  
        </div>  
    )  
}  
  
export default StateFunction  
  
```  
  
### 2 useEffect  
  
#### 2.1 简单介绍  
  
`useEffect`又称副作用`hooks`。作用：给没有生命周期的组件，添加结束渲染的信号。执行时机：在渲染结束之后执行  
  
* 什么是副作用？    
   * 副作用 ( side effect ): 数据获取，数据订阅，以及手动更改 React 组件中的 DOM 都属于副作用    
   * 因为我们渲染出的页面都是静态的，任何在其之后的操作都会对他产生影响，所以称之为副作用  
* 使用：    
   * 1.第一个参数，接收一个函数作为参数    
   * 2.第二个参数，接收【依赖列表】，只有依赖更新时，才会执行函数    
   * 3.返回一个函数，先执行返回函数，再执行参数函数  
  
#### 2.2 不接受第二个参数的情况下  
  
如果不接受第二个参数，那么在第一次渲染完成之后和每次更新渲染页面的时候，都会调用`useEffect`的回调函数，所以你要考虑好使用场景。  
  
```javascript  
import React,{ useEffect, useState } from 'react'  
  
function StateFunction () {  
    const [num, setNum] = useState(0)  
      
    useEffect( () => {  
        console.log('2222函数式组件结束渲染')  
    })  
      
    return (  
        <div onClick={ () => setNum( num => num+1 ) }>  
            这是一个函数式组件————{num}  
        </div>  
    )  
}  
  
```  
  
#### 2.3 接受第二个参数的情况下  
  
```javascript  
useEffect( () => {  
    console.log('2222函数式组件结束渲染')  
},[])  
//	改变useEffect第二个参数，其余代码同上  
  
```  
  
在这，我们可以对第二个参数传入一个数组，这个数组表示的是更新执行所依赖的列表，只有依赖列表改变时（当数组中的任意一项变化的时候，useEffect会被重新执行 ），才会触发回调函数  
  
* 传入的为空数组`[]`，那么即告诉`useEffect`不依赖于`state`、`props`中的任意值，`useEffect`就只会运行一次，常用场景为页面获取数据的方法可以写入此处进行调用，以获取页面初始数据  
* 传入一个值构建的数组、或者多个值构建的数组，如`[num]`、`[num,val]`，上述代码变更为如下。那么此时只有当数组中的值（任意一项即可）改变时，才会重新触发回调函数    
```javascript    
useEffect( () => {    
    console.log('2222函数式组件结束渲染')    
},[num])    
useEffect( () => {    
    console.log('2222函数式组件结束渲染')    
},[num,val])    
//	改变useEffect第二个参数，其余代码同上    
```  
  
#### 2.4 清除副作用  
  
上面写的都是一些不需要清除的副作用，只是回调触发一些简单的方法，但是有一些副作用是需要清除的。例如绑定一些`DOM`事件，在这种情况下，清除工作是非常重要的，可以防止引起内存泄露，例如下面给出的代码对比  
  
* ①**未清除副作用的情况下**。此时第一次点击正常输出一次`打印当前位置`，而后每一次`useEffect`调用都会新绑定一个`updateMouse`方法，那么点击一次所触发绑定的方法越来越多，那么之后点击一次就会疯狂打印`打印当前位置`，这也就造成了页面性能、内存泄露等问题    
```javascript    
const [positions,setPositions] = useState({ x:0,y:0 })    
useEffect( () => {    
    console.log('2222函数式组件结束渲染')    
    const updateMouse = (e) => {    
        console.log('打印当前位置')    
        setPositions({ x:e.clientX, y:e.clientY })    
    }    
    document.addEventListener('click',updateMouse)    
})    
return (    
    <div>    
        <p>x:{ positions.x }</p>    
        <p>y:{ positions.y }</p>    
    </div>    
)    
```  
* ②**清除副作用的情况下**（仅修改部分代码，其它代码同上）。例如示例代码    
   * 首次刷新或进入页面会先执行除`return`以外的内容，也就是会执行一个绑定的方法，然后将`updateMouse`方法绑定到`click`事件上    
   * 并将**改次**`useEffect`中的事件清除返回出去，但是此时是并没有执行`return`中的内容的（重点注意）    
   * 然后当你点击第一次的时候，就会打印设置当前鼠标页面坐标，然后先执行上一次`return`返回出去的内容，注意这里是执行上一次`return`中的清除事件绑定方法，然后执行该清除事件绑定方法，当然清除也是清除的上一个`useEffect`中的绑定事件    
   * 然后再开始执行新的`useEffect`中的绑定事件方法，并再次将改次`useEffect`清除事件绑定的方法`return`返回出去，如此就形成了一个链式一样的过程    
   * 当页面卸载的时候，会执行最后一次`return`返回出来的清除事件绑定的方法，这样也就保证了页面卸载的时候，移除了绑定添加的`DOM`事件方法    
   * （上述写的执行过程并没有从原理出发去分析的，只是简单的描述。可能稍微有点乱，如果你理解不了，可以多看几遍并动手执行示例代码结合进行理解）    
```javascript    
useEffect( () => {    
    console.log('2222函数式组件结束渲染')    
    const updateMouse = (e) => {    
        console.log('打印当前位置')    
        setPositions({ x:e.clientX, y:e.clientY })    
    }    
    document.addEventListener('click',updateMouse) //  添加绑定方法事件(要修改依赖，绑定到依赖上)    
    return () => {    
        //  在每次执行useEffect之前都会执行上一次return中内容    
        document.removeEventListener('click',updateMouse)    
        //  移除绑定方法事件(要修改依赖，绑定到依赖上)    
        console.log('1111销毁')    
    }    
})    
```  
  
#### 2.5 useEffect中的异步  
  
每个effect函数都属于一次特定的渲染：  
  
* ①useEffect调度不会阻塞浏览器更新屏幕<异步>  
* ②每次重新渲染都会生成新的effect，替换掉之前的，确保effect中获取的值是最新的，不用担心过期。如下，设置的`3000`毫秒内连续点击三次，那么将会一共打印4次，分别是`0、1、2、3`，`0`是第一次渲染结束之后自动触发的，剩下`1、2、3`则是点击三次每次触发时的`count`值    
```javascript    
function Counter() {    
  const [count, setCount] = useState(0);    
  useEffect(() => {    
    setTimeout(() => {    
      console.log(`${count}`);    
    }, 3000);    
  });    
  return (    
    <div>    
      <p>你点击了{count}次</p>    
      <button onClick={() => setCount(count + 1)}>    
        点击我    
      </button>    
    </div>    
  );    
}    
```    
   * **与类组件进行对比**：如果放到类组件中，则是打印设置的时间内改变的最终值，在类组件中同等代码如下（仅给出关键代码）。打印设置的时间内改变的最终值是什么意思呢？如果你设置3000毫秒，那么渲染结束的瞬间开始计时，3000毫秒内连续点击三次，那么最终就会打印4次`3`，如果先等第一次`componentDidMount`中设置的定时器结束，再突然3000毫秒内连续点击三次，那么就会先打印第一次的`0`，再打印三次`3`，**因为类写法中是共用的同一个`num`状态值**。（如果你将时间设置为`0`毫秒，那么其实你连续点击三次，会跟`useEffect`一样，也是先打印一次`0`，再接着打印`1、2、3`，因为这个变化反应很快，你感觉不到差异，可以自己动手试试哦。）    
   ```javascript    
   this.state = {    
     	num:0    
   }    
   componentDidMount(){    
       setTimeout(() => {    
           console.log(this.state.num)    
       },3000)    
   }    
   componentDidUpdate(){    
       setTimeout(() => {    
           console.log(this.state.num)    
       },3000)    
   }    
   render() {    
       return (    
           <div onClick={ this.setNum }>    
               这是一个类组件————{ this.state.num }    
           </div>    
       )    
   }    
   setNum = () => {    
       this.setState({    
           num: this.state.num+1    
       })    
   }    
   ```  
  
### 3 useLayoutEffect  
  
一般将`useLayoutEffect`称为有`DOM`操作的副作用`hooks`。作用是在`DOM`更新完成之后执行某个操作。执行时机：在`DOM`更新之后执行  
  
与`useEffect`对比  
  
* 相同点    
   * 1.第一个参数，接收一个函数作为参数    
   * 2.第二个参数，接收【依赖列表】，只有依赖更新时，才会执行函数    
   * 3.返回一个函数，先执行返回函数，再执行参数函数    
   * （所以说执行过程的流程是一样的）  
* 不同点    
   * 执行时机不同。`useLayoutEffect`在`DOM`更新之后执行；`useEffect`在`render`渲染结束后执行。执行示例代码会发现`useLayoutEffect`永远比`useEffect`先执行，这是因为`DOM`更新之后，渲染才结束或者渲染还会结束  
  
```javascript  
const [num, setNum] = useState(0)  
//在类组件中用componentWillMount生命周期来实现  
useLayoutEffect( () => {  
    console.log('useLayoutEfffect')  
	//	也可以在此进行事件绑定  
    return () => {  
    	//	也可以在此进行事件绑定移除  
        console.log(1)  
    }  
},[num])  
  
useEffect( () => {  
    console.log('useEffect')  
},[num])  
  
return (  
    <div onClick={ () => setNum( num => num+1 ) }>  
        这是一个函数式组件————{num}  
    </div>  
)  
  
```  
  
### 4 useMemo  
  
使用`useMemo`可以传递一个创建函数和依赖项，创建函数会需要返回一个值，只有在依赖项发生改变的时候，才会重新调用此函数，返回一个新的值。简单来说，作用是让组件中的函数跟随状态更新（即优化函数组件中的功能函数）。  
  
* 使用：    
   * 1.接收一个函数作为参数    
   * 2.同样接收第二个参数作为依赖列表（可以与useEffect、useLayoutEffect进行对比学习）    
   * 3.返回的是一个值。返回值可以是任何，函数、对象等都可以  
  
#### 4.1 复杂计算逻辑优化使用场景  
  
* 未优化前代码如下。当我们点击`div`区域时，此时触发的`setAge`，改变的是`age`，跟`getDoubleNum`方法其实是不相关的，但是如果你看下控制台，能看到打印了多次`获取双倍Num`，说明该方法不断被触发，其实是没必要触发的。如果方法内计算量大、对性能是有一定影响的，所以需要进行优化    
```javascript    
const [num, setNum] = useState(1)    
const [age, setAge] = useState(18)    
function getDoubleNum () {    
    console.log(`获取双倍Num${num}`)    
    return 2 * num  //	假设为复杂计算逻辑    
}    
return (    
  <div onClick={ () => { setAge( age => age+1 )} }>    
      <br></br>    
      这是一个函数式组件————{  getDoubleNum() }    
      <br></br>    
      age的值为————{ age }    
      <br></br>    
  </div>    
)    
```  
* 使用`useMemo`优化后代码如下。此时`getDoubleNum`方法是接收一个返回的值，所以要注意注释里所写的，括号是去掉了的。使用`useMemo`后，再点击`div`区域改变`age`的值，此时执行返回的`return 2*num`以及打印只有在`num`更新时才会去执行，然后返回值给到`getDoubleNum`再渲染到视图上，这样就减少了不必要的计算达到优化的作用    
```javascript    
const [num, setNum] = useState(1)    
const [age, setAge] = useState(18)    
const getDoubleNum = useMemo( () => {    
    console.log(`获取双倍Num${num}`)    
    return 2 * num  //	假设为复杂计算逻辑    
},[num] )    
return (    
    <div onClick={ () => { setAge( age => age+1 ) }  }>    
        <br></br>    
        这是一个函数式组件————num：{  getDoubleNum }  //  注意这里没括号，因为是返回值    
        <br></br>    
        age的值为————{ age }    
        <br></br>    
    </div>    
)    
```  
  
#### 4.2 父子组件重复渲染问题优化使用场景  
  
* 未优化前代码如下。子组件包裹一个`memo`，但是包裹了还是会重新渲染, 为什么呢？因为我们定义的`info`是`const`定义的一个局部变量,每次重新渲染都是重新定义一个新的`info`，然后子组件进行浅层比较时候，`info`永远是不一样的，所以就会重新渲染（可以按照例子点击按钮，会发现子组件不断打印`我是子组件`）。如果子组件比较复杂的情况下，那么就会对页面性能产生影响    
```javascript    
const Child = memo( () => {    
    console.log('我是子组件')    
    return <p>我是子组件</p>    
})    
function Parent() {    
    const [show,setShow] = useState(true)    
    const info = {    
        name: 'Even',    
        age: 22    
    }    
    return(    
        <div>    
            <Child info={ info } />    
            <button onClick={ () => setShow(!show) }>点击更新状态</button>    
        </div>    
    )    
}    
```  
* 使用`useMemo`后代码如下（只给出修改代码，其它代码同上例子）。这样子优化后，子组件只会在初始化状态时渲染一次，当我们点击按钮时，因为`info`其包裹的`useMemo`依赖并没有改变，返回值是同一个值，所以不会造成子组件重新渲染。    
```javascript    
const info = useMemo( () => {    
    return {    
        name: 'Even',    
        age: 22    
    }    
},[])    
```  
  
### 5 useCallback  
  
`useMemo`讲完我们来讲一个跟其很相似的叫`useCallback`，作用也是让某些操作、方法跟随状态的更新而去执行。  
  
与`useMemo`对比。  
  
* 可以简单这样看作，`useMemo(() => Fn,deps)`相当于`useCallback(Fn,deps)`  
  
不同点：  
  
* `useCallback`是对传过来的回调函数优化，返回的是一个函数；`useMemo`返回值可以是任何，函数，对象等都可以  
  
相同点：  
  
* 在使用方法上，`useMemo`与`useCallback`相同。接收一个函数作为参数，也同样接收第二个参数作为依赖列表  
  
#### 5.1 为何说`useCallback`缓存的是一个函数（重要区别）  
  
* `useCallback`虽然与`useMemo`相似，但其返回及缓存的是一个函数，对比以下示例代码。先说①②③三种情况的对比（可以复制代码然后分别注释①②③代码对比）    
   * 当①情况时，只会打印一次`获取双倍Num1`，也就是首次渲染的打印，之后再点击`div`区域改变`age`的值都与其无关，所以不会执行。因为`getDoubleNum`已经获得了`useMemo`中传入的函数执行后返回的值了，获取之后，便将其缓存下来了    
   * 当②情况时，首次渲染会打印一次`获取双倍Num1`，然后每点击一次都会打印`获取双倍Num1`，这是为什么呢？不是说`useCallback`也有缓存的功能吗？这是因为我们前面提到的，`useCallback`返回的是一个函数。因为`useCallback`中的函数是在当前组件内定义的，组件重新渲染，它自然也会重新渲染，这又会有同学说了，可是这也不能说明它缓存的是一个函数啊。那么你可以先看看③的依赖为`[]`情况时，那么你就能明白了。**所以说复杂计算逻辑的场景不适合使用`useCallback`来缓存，因为传入的函数内容会不断执行**。    
   * 当③情况时，我们结合②③处标记代码，`set`只能存入唯一值，我们观察打印的`set`的长度    
         * 当`useCallback`依赖为空`[]`时，我们连续多次点击`div`区域，虽然`useCallback`中的内容会不断执行，但是我们可以看到打印出来的`set`的长度一直都是`2`，这就是因为它不断将同一个函数添加进`set`，所以`set`的长度不变    
         * 而当`useCallback`的依赖为`[num]`时，我们连续多次点击`div`区域，可以看到打印出来的`set`在不断累加，`1、2、3、4、5、6...`。因为`num`在改变，所以每一次缓存的函数都是一个新的函数，所以添加进`set`的函数是不一样的，所以`set`的长度点一次加一次    
```javascript    
const set = new Set()    
export default function StateFunction () {    
    const [num, setNum] = useState(1)    
    const [age, setAge] = useState(18)    
    const getDoubleNum = useMemo( () => {    
        console.log(`获取双倍Num${num}`)    
        return 2 * num  //	①假设为复杂计算逻辑    
    },[] )    
    const getDoubleNum = useCallback( () => {    
        console.log(`获取双倍Num${num}`)    
        return 2 * num  //	②假设为复杂计算逻辑    
    },[] )    
    set.add(getDoubleNum())  //	③注意set打印的长度变化（设置Callback的依赖为[]、[num]进行对比）    
    console.log('set.size：',set.size)    
    return (    
        <div onClick={ () => { setNum( num => num+1 ) }  }>    
            <br></br>    
            这是一个函数式组件————num：{  getDoubleNum } //①useMemo情况下    
            这是一个函数式组件————num：{  getDoubleNum() } //②useCallback情况下    
            <br></br>    
            age的值为————{ age }    
            <br></br>    
        </div>    
    )    
}    
```  
  
#### 5.2 useCallback适用场景  
  
可以对父子组件传参渲染的问题进行优化。简单来说就是，**父组件的传入函数不更新，就不会触发子组件的函数重新执行**  
  
* 通常而言，父组件更新了，那么子组件也会更新。但是如果父组件传入子组件的内容不变，那么子组件某些操作（某些操作是**指需要跟随传入内容的改变而同步进行的操作**）是没必要执行的，这会影响页面性能，所以我们可以对这情况进行优化。  
* 例如示例代码，我们将`getDoubleNum`传入子组件，此时点击`div`区域改变的是`num`的值，我们使用父组件`useCallback`配合子组件的`useEffect`来优化，只有当父组件的`num`改变导致传入子组件的`getDoubleNum`改变的时候，我们才会执行子组件某些需要更新的操作（即注释标注处代码），这样就可以避免子组件一些没必要的更新操作反复执行而影响页面性能  
  
```javascript  
function Parent () {  
  
    const [num, setNum] = useState(1)  
    const [age, setAge] = useState(18)  
  
    const getDoubleNum = useCallback( () => {  
        console.log(`获取双倍Num${num}`)  
        return 2 * num  
    },[num] )  
  
    return (  
        <div onClick={ () => {setNum( num => num+1 )} }>  
            这是一个函数式组件————num:{  getDoubleNum() }  
            <br></br>  
            age的值为————age:{ age }  
            <br></br>  
            set.size:{set.size}  
            <Child callback={ getDoubleNum() }></Child>  
        </div>  
    )  
}  
  
function Child(props) {  
    useEffect( () => {  
        console.log('callback更新了') //这里代表的是需要跟随传入内容的改变而同步进行的操作  
    },[props.callback])  
  
    return (  
        <div>  
            子组件的getDoubleNum{props.callback}  
        </div>  
    )  
}  
  
```  
  
#### 5.3 总结及参考详解文章  
  
简单总结使用场景判断：  
  
* 在子组件不需要父组件的值和函数的情况下，只需要使用`memo`函数包裹子组件即可  
* 如果有函数传递给子组件，使用`useCallback`  
* 缓存一个组件内的复杂计算逻辑需要返回值时，使用`useMemo`  
* 如果有值传递给子组件，使用`useMemo`  
  
### 6 useRef  
  
简单来说`useRef`就是返回一个子元素索引，此索引在整个生命周期中保持不变。作用也就是：长久保存数据。注意事项，保存的对象发生改变，不通知。属性变更不会重新渲染  
  
* 未使用`useRef`，如果我们有这样一个需求如下，需要当某个定时器自增的值达到限制条件后就清除该定时器，如下代码。此时以下的代码其实是没有办法完成给出的需求的，当`num`大于`10`后，会发现不停的打印`大于10了，清除定时器`，而其实是定时器没有清除掉的，所以会一直执行这两个打印内容，但是会发现打印出来的`timer`显示`undefined`，这是为什么呢？因为我们每次渲染都是通过`setInterval`重新返回的`timer`，`timer`也在更新，也就丢失了`timer`这个数据，导致无法准确清除某个需要清除的定时器    
```javascript    
const [num, setNum] = useState(0)    
let timer    
useEffect( () => {    
    timer = setInterval( () => {    
        setNum( num => num+1 )    
    },400 )    
},[] )    
useEffect( () => {    
    if(num > 10){    
        console.log('大于10了，清除定时器')    
        console.log('timer：',timer)    
        //  因为每一个timer都是独立render的，所以获取不到    
        clearTimeout(timer)    
    }    
},[num] )    
return (    
    <div>    
        这是一个函数式组件————num:{  num }    
    </div>    
)    
```  
* 使用`useRef`后，代码如下。我们可以看到`num`自增到`11后`就打印了一次`大于10了，清除定时器`以及`ref.current 1`，然后就停止自增了，因为定时器被清除了。`ref`是一个对象，`ref.current`存储了该定时器在整个生命周期中的`id`值，所以当清除定时器的时候，可以准确清除这个定时器    
   * 保存一个值，在整个生命周期中维持不变    
```javascript    
const [num, setNum] = useState(0)    
const ref = useRef()    
useEffect( () => {    
    ref.current = setInterval( () => {    
        setNum( num => num+1 )    
    },400 )    
    // ref.current = '111'    
},[] )    
useEffect( () => {    
    if(num > 10){    
        console.log('大于10了，清除定时器')    
        console.log('ref.current',ref.current)    
        clearTimeout(ref.current)    
    }    
},[num] )    
return (    
    <div>    
        这是一个函数式组件————num:{  num }    
    </div>    
)    
```    
   * 重新赋值`ref.current`不会主动触发页面重新渲染。当我们将代码修改成下面这样，会在控制台打印发现`ref.current`的值打印为`111`，但是页面视图上显示的还是空，这是因为`ref`保存的对象发生改变，不会主动通知，属性变更不会重新渲染    
```javascript    
const [num, setNum] = useState(0)    
const ref = useRef()    
useEffect( () => {    
    ref.current = '111'    
    console.log('ref.current',ref.current)    
},[] )    
return (    
    <div>    
    	  这是ref.current的值——ref.current:{ ref.current }    
        <br></br>    
        这是一个函数式组件————num:{  num }    
    </div>    
)    
```  
  
### 7 useContext  
  
`useContext`是让子组件之间共享父组件传入的状态的。作用通俗地说是带着子组件去流浪。  
  
* 未使用`useContext`，我们有下列这样一个场景，我们父组件有传入一个值到不同的子组件中，示例给出的代码是`2`个这样的子组件，但是如果我需要添加的子组件特别多呢？总不能总是一个一个这样添加写入吧，而且如果传入的同一个变量名如果发生改变，还得一个个去改，所以我们可以用`useContext`优化一下代码    
```javascript    
function StateFunction () {    
    const [num, setNum] = useState(1)    
    return (    
        <div>    
            <button onClick={ ()=> setNum(num => num+1) }>增加num的值+1</button>    
            <br></br>    
            这是一个函数式组件——num:{  num }    
            <Item1 num={num}></Item1>    
            <Item2 num={num}></Item2>    
            //	......    
        </div>    
    )    
}    
function Item1 (props) {    
    return (    
        <div>    
            子组件1 num：{ props.num }    
        </div>    
    )    
}    
function Item2 (props) {    
    return (    
        <div>    
            子组件2 num：{ props.num }    
        </div>    
    )    
}    
```  
* 使用`useContext`优化后，代码如下，这样我们只需要在子组件中使用`useContext(Context句柄)`来获取数据即可，添加同类子组件时不需要再关注父组件中子组件定义时的`props`传入值，使用方法如下    
   * 需要引入`useContetx`，`createContext`两个内容    
   * 通过`createContext`创建一个context句柄    
   * `Context.Provider`来确定数据共享范围    
   * 通过`value`来分发内容    
   * 在子组件中，通过`useContext(Context句柄)`来获取数据    
   * **注意事项**，上层数据发生改变，肯定会触发重新渲染（点击`button`按钮触发父组件更新传入的`num`值能看到子组件重新渲染）    
```javascript    
const Context = createContext(null)    
function StateFunction () {    
    const [num, setNum] = useState(1)    
    return (    
        <div>    
            <button onClick={ ()=> setNum(num => num+1) }>增加num的值+1</button>    
            <br></br>    
            这是一个函数式组件——num:{  num }    
            <Context.Provider value={num}>    
                <Item3></Item3>    
                <Item4></Item4>    
            </Context.Provider>    
        </div>    
    )    
}    
function Item3 () {    
    const num = useContext(Context)    
    return (    
        <div>    
            子组件3: { num }    
        </div>    
    )    
}    
function Item4 () {    
    const num = useContext(Context)    
    return (    
        <div>    
            子组件4: { num+2 }    
        </div>    
    )    
}    
```  
  
### 8 useReducer  
  
以前是只能在类组件中使用`Redux`，现在我们可以通过`useReducer`在函数式组件中使用`Redux`。作用是可以从状态管理的工具中获取到想要的状态。  
  
* 如何使用`useReducer`。`Redux`必须要有的内容就是仓库`store`和管理者`reducer`。而`useReducer`也是一样的，需要创建数据仓库`store`和管理者`reducer`，即示例代码注释处。然后我们就可以通过`①`处的定义一个数组获取状态和改变状态的动作，触发动作的时候需要传入`type`类型判断要触发`reducer`哪个动作，然后进行数据的修改。需要注意的地方是，在`reducer`中`return`的对象中，需要将`state`解构，否则状态就剩下一个`num`值了    
```javascript    
const store = {    
    age:18,    
    num:1    
}	//	数据仓库    
const reducer = (state, action) => {    
    switch(action.type){    
        case 'add':    
            return {    
                ...state,    
                num: action.num+1    
            }    
        default:    
            return {    
                ...state    
            }    
    }    
} //	管理者    
function StateFunction () {    
    const [state,dispacth] = useReducer(reducer,store)  //	①    
    return (    
        <div>    
            <button onClick={ () => {    
                dispacth({    
                    type: 'add',    
                    num: state.num    
                })    
            } }>    
                增加num的值+1    
            </button>    
            <br></br>    
            这是一个函数式组件——num:{  state.num }    
        </div>    
    )    
}    
```  
# 如何让 useEffect 支持 async/await？  
大家在使用 `useEffect` 的时候，假如回调函数中使用 `async...await...` 的时候，会报错如下。  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7eff9b2e73c6465bbe2edce9ee03870e~tplv-k3u1fbpfcp-zoom-1.image)  
  
  
看报错，我们知道 `effect function` 应该返回一个销毁函数（`return`返回的 `cleanup` 函数），如果 `useEffect` 第一个参数传入 `async`，返回值则变成了 `Promise`，会导致 `react` 在调用销毁函数的时候报错**。  
  
## React 为什么要这么做？  
`useEffect` 作为 `Hooks` 中一个很重要的 `Hooks`，可以让你在函数组件中执行副作用操作。  
  
它能够完成之前 `Class Component` 中的生命周期的职责。它返回的函数的执行时机如下：  
  
- 首次渲染不会进行清理，会在下一次渲染，清除上一次的副作用。  
- 卸载阶段也会执行清除操作。  
  
不管是哪个，我们都不希望这个返回值是异步的，这样我们无法预知代码的执行情况，很容易出现难以定位的 Bug。  
  
所以 React 就直接限制了不能 useEffect 回调函数中不能支持 async...await...  
  
## useEffect 怎么支持 async...await...  
  
竟然 useEffect 的回调函数不能使用 `async...await`，那我直接在它内部使用。  
  
做法一：创建一个异步函数（`async...await` 的方式），然后执行该函数。  
  
```js  
useEffect(() => {  
  const asyncFun = async () => {  
    setPass(await mockCheck());  
  };  
  asyncFun();  
}, []);  
```  
  
做法二：也可以使用 `IIFE`，如下所示：  
  
```js  
useEffect(() => {  
  (async () => {  
    setPass(await mockCheck());  
  })();  
}, []);  
```  
  
## 自定义 hooks  
  
既然知道了怎么解决，我们完全可以将其封装成一个 hook，让使用更加的优雅。我们来看下 ahooks 的 `useAsyncEffect`，它支持所有的异步写法，包括 `generator function`。  
  
思路跟上面一样，入参跟 useEffect 一样，一个回调函数（不过这个回调函数支持异步），另外一个依赖项 deps。**内部还是 useEffect，将异步的逻辑放入到它的回调函数里面。**  
  
```js  
function useAsyncEffect(  
  effect: () => AsyncGenerator<void, void, void> | Promise<void>,  
  // 依赖项  
  deps?: DependencyList,  
) {  
  // 判断是 AsyncGenerator  
  function isAsyncGenerator(  
    val: AsyncGenerator<void, void, void> | Promise<void>,  
  ): val is AsyncGenerator<void, void, void> {  
    // Symbol.asyncIterator: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator  
    // Symbol.asyncIterator 符号指定了一个对象的默认异步迭代器。如果一个对象设置了这个属性，它就是异步可迭代对象，可用于for await...of循环。  
    return isFunction(val[Symbol.asyncIterator]);  
  }  
  useEffect(() => {  
    const e = effect();  
    // 这个标识可以通过 yield 语句可以增加一些检查点  
    // 如果发现当前 effect 已经被清理，会停止继续往下执行。  
    let cancelled = false;  
    // 执行函数  
    async function execute() {  
      // 如果是 Generator 异步函数，则通过 next() 的方式全部执行  
      if (isAsyncGenerator(e)) {  
        while (true) {  
          const result = await e.next();  
          // Generate function 全部执行完成  
          // 或者当前的 effect 已经被清理  
          if (result.done || cancelled) {  
            break;  
          }  
        }  
      } else {  
        await e;  
      }  
    }  
    execute();  
    return () => {  
      // 当前 effect 已经被清理  
      cancelled = true;  
    };  
  }, deps);  
}  
```  
  
`async...await` 我们之前已经提到了，重点看看实现中变量 `cancelled` 的实现的功能。  
它的作用是**中断执行**。  
> 通过 `yield` 语句可以增加一些检查点，如果发现当前 `effect` 已经被清理，会停止继续往下执行。  
  
试想一下，有一个场景，用户频繁的操作，可能现在这一轮操作 a 执行还没完成，就已经开始开始下一轮操作 b。这个时候，操作 a 的逻辑已经失去了作用了，那么我们就可以停止往后执行，直接进入下一轮操作 b 的逻辑执行。这个 `cancelled` 就是用来取消当前正在执行的一个标识符。  
  
## 还可以支持 useEffect 的清除机制么？  
可以看到上面的 `useAsyncEffect`，内部的 `useEffect` 返回函数只返回了如下：  
  
```js  
return () => {  
  // 当前 effect 已经被清理  
  cancelled = true;  
};  
```  
  
这说明，你**通过 useAsyncEffect 没有 useEffect 返回函数中执行清除副作用的功能**。  
  
你可能会觉得，我们将 `effect`(`useAsyncEffect` 的回调函数)的结果，放入到 `useAsyncEffect` 中不就可以了？  
  
实现最终类似如下：  
  
```js  
function useAsyncEffect(effect: () => Promise<void | (() => void)>, dependencies?: any[]) {  
  return useEffect(() => {  
    const cleanupPromise = effect()  
    return () => { cleanupPromise.then(cleanup => cleanup && cleanup()) }  
  }, dependencies)  
}  
```  
  
这种做法在github上也有讨论，上面有个大神的说法我表示很赞同：  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0efffebf113745f698219bc682e32d0c~tplv-k3u1fbpfcp-zoom-1.image)  
  
  
他认为这种**延迟清除机制**是不对的，应该是一种**取消机制**。否则，在钩子已经被取消之后，回调函数仍然有机会对外部状态产生影响。他的实现和例子我也贴一下，跟 `useAsyncEffect` 其实思路是一样的，如下：  
  
实现：  
```  
function useAsyncEffect(effect: (isCanceled: () => boolean) => Promise<void>, dependencies?: any[]) {  
  return useEffect(() => {  
    let canceled = false;  
    effect(() => canceled);  
    return () => { canceled = true; }  
  }, dependencies)  
}  
```  
  
Demo:  
```js  
useAsyncEffect(async (isCanceled) => {  
  const result = await doSomeAsyncStuff(stuffId);  
  if (!isCanceled()) {  
    // TODO: Still OK to do some effect, useEffect hasn't been canceled yet.  
  }  
}, [stuffId]);  
```  
  
其实归根结底，**我们的清除机制不应该依赖于异步函数，否则很容易出现难以定位的 bug**。  
  
  
## 总结与思考  
由于 `useEffect` 是在函数式组件中承担执行副作用操作的职责，它的返回值的执行操作应该是可以预期的，而不能是一个异步函数，所以不支持回调函数 `async...await` 的写法。  
  
我们可以将 `async...await` 的逻辑封装在 `useEffect` 回调函数的内部，这就是 ahooks `useAsyncEffect` 的实现思路，而且它的范围更加广，它支持的是所有的异步函数，包括 `generator function`。  
  
  
# 在 React 中可以做哪些性能优化？  
* 使用 shouldComponentUpdate 避免不需要的渲染，但是如果对 props 和 state 做深比较，代价很大，所以需要根据业务进行些取舍；在有子组件的情况下，为了避免子组件的重复渲染，可以通过父组件来判断子组件是否需要 PureRender。  
  
* 将 props 设置为数组或对象：每次调用 React 组件都会创建新组件，就算传入的数组或对象的值没有改变，他们的引用地址也会发生改变，比如，如果按照如下的写法，那么每次渲染时 style 都是一个新对象  
  
```react.js  
// 不推荐  
<button style={{ color: 'red' }} />  
  
// 推荐  
const style = { color: 'red' }  
<button style={style} />  
  
// 不推荐  
<button style={this.props.style || {} } />    
  
// 推荐  
const defaultStyle = {}  
<button style={this.props.style || defaultStyle } />     
```  
  
* 将函数的绑定移动到构造函数内：可以避免每次都绑定事件。  
* 使用 immutable 不可变数据，在我们项目中使用引用类型时，为了避免对原始数据的影响，一般建议使用 shallowCopy 和 deepCopy 对数据进行处理，但是这样会造成 CPU 和 内存的浪费，所以推荐使用 immutable，优点如下  
	* 降低了“可变”带来的复杂度  
	* 节省内存，immutable 使用结构共享尽量复用内存，没有被引用的对象会被垃圾回收  
	* 可以更好的做撤销/重做，复制/粘贴，时间旅行  
	* 不会有并发问题（因为数据本身就是不可变的）  
	* 拥抱函数式编程  
* 给子组件设置一个唯一的 key，因为在 diff 算法中，会用 key 作为唯一标识优化渲染  
  
# 说说你对自定义hook的理解  
# 自定义Hook  
通过自定义 Hook，可以将组件逻辑提取到可重用的函数中。  
  
可以理解成Hook就是用来放一些重复代码的函数。  
  
下面我将做手动实现一个列表渲染、删除的组件，然后把它做成自定义Hook。  
  
## 示例  
  
定义数据列表  
```js  
const initialState = [  
  { id: 1, name: "qiu" },  
  { id: 2, name: "yan" },  
  { id: 2, name: "xi" }  
];  
```  
创建一个App组件并渲染它  
```js  
function App(props) {  
  const [state, setState] = useState(initialState);  
  const deleteLi = (index) => {  
    setState((state) => {  
      const newState = JSON.parse(JSON.stringify(state));//深拷贝数据  
      newState.splice(index, 1);  
      return newState;  
    });  
  };  
  return (  
    <>  
      <ul>  
        {state  
          ? state.map((v, index) => {  
              return (  
                <li key={index}>  
                  {index + "、"}  
                  {v.name}  
                  <button  
                    onClick={() => {  
                      deleteLi(index);  
                    }}  
                  >  
                    X  
                  </button>  
                </li>  
              );  
            })  
          : \"加载中\"}  
      </ul>  
    </>  
  );  
}  
```  
  
上面的代码，我对一个数组进行渲染+删除操作，当点击按钮时，就会删除数组的对应index的数据，从而执行页面更新  
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f4b99c901f2a4807934d78d74242207b~tplv-k3u1fbpfcp-watermark.image)  
  
## 封装成Hook  
```js  
const useList = () => {  
  const [state, setState] = useState(initialState);  
  const deleteLi = (index) => {  
    setState((state) => {  
      const newState = JSON.parse(JSON.stringify(state));  
      newState.splice(index, 1);  
      return newState;  
    });  
  };  
  return { state, setState, deleteLi };//返回查、改、删  
};  
```  
我把上面的业务逻辑都放在`useList`这个函数中，并将查、改、删的API给放在一个对象中return出去。这样就形成了一个自定义Hook  
  
## 使用自定义Hook  
  
一般可以将自定义Hook给单独放在一个文件中，如果要使用，就引过来  
  
```js  
+ import useList from \"./useList\";  
```  
在需要使用的App组件中执行自定义Hook并接收API  
```js  
function App(props) {  
  const { state, deleteLi } = useList();//这里接收return出来的查、删API  
  return (  
 	... //这里跟最开始的App组件里是一样的，为了页面整洁，就不贴代码了  
  );  
}  
```  
  
# 总结  
  
所谓的自定义Hook，实际上就是把很多重复的逻辑都放在一个函数里面，通过闭包的方式给`return`出来，这是非常高级的方式，程序员崇尚代码简洁，如果说以后业务开发时需要大量的重复代码，我们就可以将它封装成自定义Hook。  
  
# 说说你对 useMemo 的理解  
# Memo  
在class的时代，我们一般是通过pureComponent来对数据进行一次浅比较，引入Hook特性后，我们可以使用Memo进行性能提升。  
  
在此之前，我们来做一个实验  
```js  
import React, { useState } from "react";  
import ReactDOM from "react-dom";  
  
import "./styles.css";  
  
function App() {  
  const [n, setN] = useState(0);  
  const [m, setM] = useState(10);  
  console.log("执行最外层盒子了");  
  return (  
    <>  
      <div>  
        最外层盒子  
        <Child1 value={n} />  
        <Child2 value={m} />  
        <button  
          onClick={() => {  
            setN(n + 1);  
          }}  
        >  
          n+1  
        </button>  
        <button  
          onClick={() => {  
            setM(m + 1);  
          }}  
        >  
          m+1  
        </button>  
      </div>  
    </>  
  );  
}  
function Child1(props) {  
  console.log("执行子组件1了");  
  return <div>子组件1上的n：{props.value}</div>;  
}  
function Child2(props) {  
  console.log("执行子组件2了");  
  return <div>子组件2上的m：{props.value}</div>;  
}  
  
const rootElement = document.getElementById("root");  
ReactDOM.render(<App />, rootElement);  
```  
上面的代码我设置了两个子组件，分别读取父组件上的n跟m，然后父组件上面设置两个点击按钮，当点击后分别让设置的n、m加1。以下是第一次渲染时log控制台的结果  
  
```!  
执行最外层盒子了   
执行子组件1了   
执行子组件2了   
```  
  
跟想象中一样，render时先进入App函数，执行，发现里面的两个child函数，执行，创建虚拟dom，创建实体dom，最后将画面渲染到页面上。  
  
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ee29f9aa15c4ba7af3129028494d2cf~tplv-k3u1fbpfcp-watermark.image)  
  
# 使用Memo优化  
当我点击n+1按钮时，此时state里面的n必然+1，也会重新引发render渲染，并把新的n更新到视图中。  
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f55bac905da45b2bd56bde9836bcf22~tplv-k3u1fbpfcp-watermark.image)  
我们再看控制台  
```!  
执行最外层盒子了   
执行子组件1了   
执行子组件2了   
+ 执行最外层盒子了   
+ 执行子组件1了   
+ 执行子组件2了 //为什么组件2也渲染了，里面的m没有变化   
```  
你会发现子组件2也渲染了，显然react重新把所有的函数都执行了一遍，把未曾有n数据的子组件2也重新执行了。  
  
如何优化？我们可以使用`memo`把子组件改成以下代码  
```js  
const Child1 = React.memo((props) => {  
  console.log("执行子组件1了");  
  return <div>子组件1上的n：{props.value}</div>;  
});  
  
const Child2 = React.memo((props) => {  
  console.log("执行子组件2了");  
  return <div>子组件2上的m：{props.value}</div>;  
});  
```  
再重新点击试试？  
```!  
执行最外层盒子了   
执行子组件1了   
执行子组件2了   
+ 执行最外层盒子了   
+ 执行子组件1了   
```  
会发现没有执行子组件2了  
  
这样的话react就会只执行对应state变化的组件，而没有变化的组件，则复用上一次的函数，也许memo也有memory的意思，代表记忆上一次的函数，不重新执行（我瞎猜的- -！！）  
  
# 出现bug  
上面的代码虽然已经优化好了性能，但是会有一个bug  
  
上面的代码是由父组件控制`<button>`的，如果我把控制state的函数传递给子组件，会怎样呢？  
```html  
 <Child2 value={m} onClick={addM} /> //addM是修改M的函数  
```  
  
点击按钮让n+1  
```!  
执行最外层盒子了   
执行子组件1了   
执行子组件2了   
+ 执行最外层盒子了   
+ 执行子组件1了   
+ 执行子组件2了   
```  
又重新执行子组件2。  
  
为什么会这样？因为App重新执行了，它会修改addM函数的地址（函数是复杂数据类型），而addM又作为props传递给子组件2，那么就会引发子组件2函数的重新执行。  
  
# useMemo  
这时候就要用useMemo解决问题。  
  
`useMemo(()=>{},[])`  
  
useMemo接收两个参数，分别是函数和一个数组（实际上是依赖），函数里return 函数,数组内存放依赖。  
```js  
const addM = useMemo(() => {  
    return () => {  
      setM({ m: m.m + 1 });  
    };  
  }, [m]); //表示监控m变化  
```  
使用方式就跟useEffect似的。  
  
# useCallback  
上面的代码很奇怪有没有  
```js  
useMemo(() => {  
    return () => {  
      setM({ m: m.m + 1 });  
    };  
  }, [m])  
```  
react就给我们准备了语法糖，useCallback。它是这样写的  
```javascript  
  const addM = useCallback(() => {  
    setM({ m: m.m + 1 });  
  }, [m]);  
```  
是不是看上去正常多了？  
  
# 最终代码  
  
```js  
import React, { useCallback, useMemo, useState } from "react";  
import ReactDOM from "react-dom";  
  
import "./styles.css";  
  
function App() {  
  const [n, setN] = useState(0);  
  const [m, setM] = useState({ m: 1 });  
  console.log("执行最外层盒子了");  
  const addN = useMemo(() => {  
    return () => {  
      setN(n + 1);  
    };  
  }, [n]);  
  const addM = useCallback(() => {  
    setM({ m: m.m + 1 });  
  }, [m]);  
  return (  
    <>  
      <div>  
        最外层盒子  
        <Child1 value={n} click={addN} />  
        <Child2 value={m} click={addM} />  
        <button onClick={addN}>n+1</button>  
        <button onClick={addM}>m+1</button>  
      </div>  
    </>  
  );  
}  
const Child1 = React.memo((props) => {  
  console.log("执行子组件1了");  
  return <div>子组件1上的n：{props.value}</div>;  
});  
  
const Child2 = React.memo((props) => {  
  console.log("执行子组件2了");  
  return <div>子组件2上的m：{props.value.m}</div>;  
});  
  
const rootElement = document.getElementById("root");  
ReactDOM.render(<App />, rootElement);  
```  
  
# 总结  
* 使用`memo`可以帮助我们优化性能，让`react`没必要执行不必要的函数  
* 由于复杂数据类型的地址可能发生改变，于是传递给子组件的`props`也会发生变化，这样还是会执行不必要的函数，所以就用到了`useMemo`这个api  
* `useCallback`是`useMemo`的语法糖  
# 说说你对 useContext 的理解  
# 什么是Context  
`context`（上下文）可以看成是扩大版的`props`，它可以将全局的数据通过`provider`接口传递value给局部的组件，让包围在`provider`中的局部组件可以获取到全局数据的读写接口  
  
全局变量可以看成是全局的上下文  
  
而上下文则是局部的全局变量，因为只有包围在`provider`中的局部组件才可以获取到这些全局变量的读写接口  
# 用法  
* 创建context  
* 设置`provider`并通过value接口传递state  
* 局部组件获取读写接口  
  
# 案例理解  
  
案例理解是最快的方式，我在下面的代码中，将设置一个父组件，一个子组件，通过useContext来传递state，并在子组件上设置一个按钮来改变全局state  
  
```js  
import React, { createContext, useContext, useState } from \"react\";  
const initialState = { m: 100, n: 50 }; // 定义初始state  
const X = createContext(); // 创建Context  
let a = 0;  
export default function App() {  
  console.log(`render了${a}次`);//用来检查执行App函数多少次  
  const [state, setState] = useState(initialState); // 创建state读写接口  
  a += 1;  
  return (  
    <X.Provider value={{ state, setState }}> // 通过provider提供value给包围里内部组件，只有包围里的组件才有效  
      <Father></Father>  
    </X.Provider>  
  );  
}  
  
const Father = (props) => {  
  const { state, setState } = useContext(X);//拿到 名字为X的上下文的value，用两个变量来接收读写接口  
  const addN = () => {  
    setState((state) => {  
      return { ...state, n: state.n + 1 };  
    });  
  };  
  const addM = () => {  
    setState((state) => {  
      return { ...state, m: state.m + 1 };  
    });  
  };  
  return (  
    <div>  
      爸爸组件  
      <div>n:{state.n}</div>  
      <Child />  
      <button onClick={addN}>设置n</button>  
      <button onClick={addM}>设置m</button>  
    </div>  
  );  
};  
const Child = (props) => {  
  const { state } = useContext(X); // 读取state  
  return (  
    <div>  
      儿子组件  
      <div>m:{state.m}</div>  
    </div>  
  );  
};  
```  
拿到读写接口的组件就可以控制state数据  
  
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da920a39db1143a2be23383d97e13174~tplv-k3u1fbpfcp-watermark.image)  
  
>tips：注意到最上层的变量a没？这是我用来测试的，我发现点击按钮后会触发App函数并更新页面，说明react下使用`context`来修改数据的时候，都会重新进行全局执行，而不是数据响应式的。  
  
# 总结  
  
我们学习到`Context`上下文的基本概念和作用，并且通过小案例总结得出`context`的使用方法：  
* 使用`creacteContext`创建一个上下文  
* 设置`provider`并通过`value`接口传递`state`数据  
* 局部组件从`value`接口中传递的数据对象中获取读写接口  
# 为什么不能在循环、条件或嵌套函数中调用 Hooks？  
如果在条件语句中使用hooks，React会抛出 error。  
  
这与React Hooks的底层设计的数据结构相关，先抛出结论：**react用链表来严格保证hooks的顺序**。  
  
一个典型的useState使用场景：  
  
```js  
const [name,setName] = useState('leo');  
  
......  
  
setName('Lily');  
```  
  
那么hooks在这两条语句分别作了什么？  
  
![](https://pic.rmb.bdstatic.com/bjh/89d2fa7124b06495bbbfd4b5758bd6e5.png)  
  
上图是 `useState` 首次渲染的路径，其中，跟我们问题相关的是 `mountState` 这个过程，简而言之，这个过程初始化了一个hooks，并且将其追加到链表结尾。  
  
```js  
// 进入 mounState 逻辑  
  
function mountState(initialState) {  
  
  // 将新的 hook 对象追加进链表尾部  
  var hook = mountWorkInProgressHook();  
  
  // initialState 可以是一个回调，若是回调，则取回调执行后的值  
  
  if (typeof initialState === 'function') {  
  
    // $FlowFixMe: Flow doesn't like mixed types  
  
    initialState = initialState();  
  }  
  
  // 创建当前 hook 对象的更新队列，这一步主要是为了能够依序保留 dispatch  
  
  const queue = hook.queue = {  
  
    last: null,  
  
    dispatch: null,  
  
    lastRenderedReducer: basicStateReducer,  
  
    lastRenderedState: (initialState: any),  
  
  };  
  
  // 将 initialState 作为一个“记忆值”存下来  
  
  hook.memoizedState = hook.baseState = initialState;  
  
  // dispatch 是由上下文中一个叫 dispatchAction 的方法创建的，这里不必纠结这个方法具体做了什么  
  
  var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue);  
  
  // 返回目标数组，dispatch 其实就是示例中常常见到的 setXXX 这个函数，想不到吧？哈哈  
  
  return [hook.memoizedState, dispatch];  
}  
  
```  
  
从这段源码中我们可以看出，mounState 的主要工作是初始化 Hooks。在整段源码中，最需要关注的是 `mountWorkInProgressHook` 方法，它为我们道出了 Hooks 背后的数据结构组织形式。以下是 `mountWorkInProgressHook` 方法的源码：  
  
```js  
function mountWorkInProgressHook() {  
  
  // 注意，单个 hook 是以对象的形式存在的  
  var hook = {  
  
    memoizedState: null,  
  
    baseState: null,  
  
    baseQueue: null,  
  
    queue: null,  
  
    next: null  
  
  };  
  
  if (workInProgressHook === null) {  
    // 这行代码每个 React 版本不太一样，但做的都是同一件事：将 hook 作为链表的头节点处理  
    firstWorkInProgressHook = workInProgressHook = hook;  
  } else {  
    // 若链表不为空，则将 hook 追加到链表尾部  
    workInProgressHook = workInProgressHook.next = hook;  
  }  
  // 返回当前的 hook  
  return workInProgressHook;  
}  
  
```  
  
到这里可以看出，hook 相关的所有信息收敛在一个 hook 对象里，而 hook 对象之间以单向链表的形式相互串联。  
  
接着，我们来看更新过程   
  
![](https://pic.rmb.bdstatic.com/bjh/1cc5bd4c72e4f22d1aa828df3c831f2d.png)  
  
上图中，需要注意的是updateState的过程：按顺序去遍历之前构建好的链表，取出对应的数据信息进行渲染。  
  
我们把 mountState 和 updateState 做的事情放在一起来看：mountState（首次渲染）构建链表并渲染；updateState 依次遍历链表并渲染。  
  
hooks 的渲染是通过“依次遍历”来定位每个 hooks 内容的。如果前后两次读到的链表在顺序上出现差异，那么渲染的结果自然是不可控的。  
  
这个现象有点像我们构建了一个长度确定的数组，数组中的每个坑位都对应着一块确切的信息，后续每次从数组里取值的时候，只能够通过索引（也就是位置）来定位数据。也正因为如此，在许多文章里，都会直截了当地下这样的定义：Hooks 的本质就是数组。但读完这一课时的内容你就会知道，Hooks 的本质其实是链表。  
  
我们举个例子：  
  
```js  
    let mounted = false;  
      
    if(!mounted){  
        // eslint-disable-next-line  
        const [name,setName] = useState('leo');  
        const [age,setAge] = useState(18);  
        mounted = true;  
    }  
    const [career,setCareer] = useState('码农');  
    console.log('career',career);  
    ......  
      
    <div onClick={()=>setName('Lily')}>  
    点我点我点我  
    <div>  
```  
  
点击div后，我们期望的输出是 "码农"，然而事实上(尽管会error，但是打印还是执行)打印的为 "Lily"  
  
原因是，三个useState在初始化的时候已经构建好了一个三个节点的链表结构，依次为：  
`name('leo') --> age(18) --> career('码农')`  
  
每个节点都已经派发了一个与之对应的update操作，因此执行setName时候，三个节点就修改为了  
`name('Lily') --> age(18) --> career('码农')`  
  
然后执行update渲染操作，从链表依次取出值，此时，条件语句的不再执行，第一个取值操作会从链表的第一个，也就是name对应的hooks对象进行取值：此时取到的为 `name:Lily`  
  
必须按照顺序调用从根本上来说是因为 useState 这个钩子在设计层面并没有“状态命名”这个动作，也就是说你每生成一个新的状态，React 并不知道这个状态名字叫啥，所以需要通过顺序来索引到对应的状态值  
  
  
  
  
  
  
# react中，父子组件的生命周期执行顺序是怎么样的？  
React的生命周期从广义上分为三个阶段：挂载、渲染、卸载，因此可以把React的生命周期分为两类：挂载卸载过程和更新过程。  
  
## 一、挂载卸载过程  
  
1. constructor，完成了React数据的初始化；  
  
2. componentWillMount，组件初始化数据后，但是还未渲染DOM前；  
  
3. componentDidMount，组件第一次渲染完成，此时dom节点已经生成；  
  
4. componentWillUnmount，组件的卸载和数据的销毁。  
  
## 二、更新过程  
  
1. componentWillReceiveProps (nextProps)，父组件改变后的props需要重新渲染组件时；  
  
2. shouldComponentUpdate(nextProps,nextState)，主要用于性能优化(部分更新)，因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，在这里return false可以阻止组件的更新；  
  
3. componentWillUpdate (nextProps,nextState)，shouldComponentUpdate返回true后，组件进入重新渲染的流程；  
  
4. componentDidUpdate(prevProps,prevState)，组件更新完毕后触发；  
  
5. render()，渲染时触发。  
  
## 三、父子组件加载顺序  
  
观察父子组件的挂载生命周期函数，可以发现挂载时，子组件的挂载钩子先被触发；卸载时，子组件的卸载钩子后被触发。  
  
我们经常在挂载函数上注册监听器，说明此时是可以与页面交互的，也就是说其实所有挂载钩子都是在父组件实际挂载到dom树上才触发的，不过是在父组件挂载后依次触发子组件的 componentDidmount ，最后再触发自身的挂载钩子，说白了，componentDidMount 其实是异步钩子。  
  
相反，卸载的时候父节点先被移除，再从上至下依次触发子组件的卸载钩子；  
  
但是我们也经常在卸载钩子上卸载监听器，这说明 componentWillUnmount 其实在父组件从dom树上卸载前触发的，先触发自身的卸载钩子，但此时并未从dom树上剥离，然后依次尝试触发所有子组件的卸载钩子，最后，父组件从dom树上完成实际卸载。  
  
# react 和 vue 有什么区别？  
# 前言  
  
React 是由Facebook创建的JavaScript UI框架，React推广了 Virtual DOM( 虚拟 DOM )并创造了 JSX 语法。JSX 语法的出现允许我们在 javascript 中书写 HTML 代码。  
  
VUE 是由尤雨溪开发的，VUE 使用了模板系统而不是JSX，因其实模板系统都是用的普通的 HTML，所以对应用的升级更方便、更容易，而不需要整体重构。  
  
VUE 相较于 React 更容易上手，如果是一个有一定开发经验的开发者，甚至都不需要花额外的时间去学习，直接一遍开发一遍查文挡即可。  
  
# VUE 与 React 区别  
  
React 的思路是 HTML in JavaScript 也可以说是 All in JavaScript，通过 JavaScript 来生成 HTML，所以设计了 JSX 语法，还有通过 JS 来操作 CSS，社区的styled-component、JSS等。  
  
Vue 是把 HTML，CSS，JavaScript 组合到一起，用各自的处理方式，Vue 有单文件组件，可以把 HTML、CSS、JS 写到一个文件中，HTML 提供了模板引擎来处理。  
  
React 整体是函数式的思想，在 React 中是单向数据流，推崇结合 immutable 来实现数据不可变。  
  
而 Vue 的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立 Watcher 来监听，当属性变化的时候，响应式的更新对应的虚拟 DOM。  
  
如上，所以 React 的性能优化需要手动去做，而Vue的性能优化是自动的，但是Vue的响应式机制也有问题，就是当 state 特别多的时候，Watcher 会很多，会导致卡顿。  
  
# React 与 VUE 共同点  
  
React 与 Vue 存在很多共同点，例如他们都是 JavaScript 的 UI 框架，专注于创造前端的富应用。不同于早期的 JavaScript 框架“功能齐全”，Reat 与 Vue 只有框架的骨架，其他的功能如路由、状态管理等是框架分离的组件。  
  
## 优势  
  
### React    
  
* 灵活性和响应性：它提供最大的灵活性和响应能力。  
* 丰富的JavaScript库：来自世界各地的贡献者正在努力添加更多功能。  
* 可扩展性：由于其灵活的结构和可扩展性，React已被证明对大型应用程序更好。  
* 不断发展： React得到了Facebook专业开发人员的支持，他们不断寻找改进方法。  
* Web或移动平台： React提供React Native平台，可通过相同的React组件模型为iOS和Android开发本机呈现的应用程序。  
  
### Vue  
  
* 易于使用： Vue.js包含基于HTML的标准模板，可以更轻松地使用和修改现有应用程序。  
* 更顺畅的集成：无论是单页应用程序还是复杂的Web界面，Vue.js都可以更平滑地集成更小的部件，而不会对整个系统产生任何影响。  
* 更好的性能，更小的尺寸：它占用更少的空间，并且往往比其他框架提供更好的性能。  
* 精心编写的文档：通过详细的文档提供简单的学习曲线，无需额外的知识; HTML和JavaScript将完成工作。  
* 适应性：整体声音设计和架构使其成为一种流行的JavaScript框架。  
* 它提供无障碍的迁移，简单有效的结构和可重用的模板。  
  
# 总结  
  
如上所说的 Vue 的响应式机制也有问题，当 state 特别多的时候，Watcher 会很多，会导致卡顿，所以大型应用（状态特别多的）一般用 React，更加可控。  
  
可对于易用性来说，VUE 是更容易上手的，对于项目来说新人更容易接手。  
  
使用 React 的公司：Facebook，Instagram，Netflix，纽约时报，雅虎，WhatsApp，Codecademy，Dropbox，Airbnb，Asana，微软等。  
  
使用 Vue 的公司：Facebook，Netflix，Adobe，Grammarly，Behance，小米，阿里巴巴，Codeship，Gitlab和Laracasts等。  
  
所以，技术没有哪个更好或者是更优秀，只要适合自己的才是最合适的。  
# Redux 和 Vuex 有什么区别，它们有什么共同思想吗？  
## Redux 和 Vuex区别  
  
### 相同点  
  
* state 共享数据  
* 流程一致：定义全局state，触发，修改state  
* 原理相似，通过全局注入store。  
  
### 不同点  
  
* 从实现原理上来说：  
	* Redux 使用的是不可变数据，而Vuex的数据是可变的。Redux每次都是用新的state替换旧的state，而Vuex是直接修改  
	* Redux 在检测数据变化的时候，是通过 diff 的方式比较差异的，而Vuex其实和Vue的原理一样，是通过 getter/setter来比较的  
* 从表现层来说：  
	* vuex定义了state、getter、mutation、action四个对象；redux定义了state、reducer、action。  
	* vuex中state统一存放，方便理解；reduxstate依赖所有reducer的初始值  
	* vuex有getter,目的是快捷得到state；redux没有这层，react-redux mapStateToProps参数做了这个工作。  
	* vuex中mutation只是单纯赋值(很浅的一层)；redux中reducer只是单纯设置新state(很浅的一层)。他俩作用类似，但书写方式不同  
	* vuex中action有较为复杂的异步ajax请求；redux中action中可简单可复杂,简单就直接发送数据对象（{type:xxx, your-data}）,复杂需要调用异步ajax（依赖redux-thunk插件）。  
	* vuex触发方式有两种commit同步和dispatch异步；redux同步和异步都使用dispatch  
  
通俗点理解就是，vuex 弱化 dispatch，通过commit进行 store状态的一次更变；取消了action概念，不必传入特定的 action形式进行指定变更；弱化reducer，基于commit参数直接对数据进行转变，使得框架更加简易;  
  
## 共同思想  
  
* 单一的数据源  
* 变化可以预测  
  
本质上∶ redux与vuex都是对mvvm思想的服务，将数据从视图中抽离的一种方案。  
下面是一个简单的函数组件，有两个按钮：“alert”、“add”。  
  
如果先点击“alert”按钮，再点击一次“add”按钮，那么弹窗框中的值和页面中展示`value`分别是什么？  
  
```js  
const FunctionComponent = () => {  
  const [value, setValue] = useState(1)  
  
  const log = () => {  
    setTimeout(() => {  
      alert(value)  
    }, 3000);  
  }  
  
  return (  
    <div>  
      <p>FunctionComponent</p>  
      <div>value: {value}</div>  
      <button onClick={log}>alert</button>  
      <button onClick={() => setValue(value + 1)}>add</button>  
    </div>  
  )  
}  
```  
# 下面函数组件的输出分别是什么？  
弹出的值是 **1**，页面显示的值是 **2**  
  
我们发现弹出的值和当前页面显示的值不相同。  
  
换句话说：**log 方法内的 value 和点击动作触发那一刻的 value 相同，value 的后续变化不会对 log 方法内的 value 造成影响**。  
  
这种现象被称为“闭包陷阱”或者被叫做“Capture Value” ：函数式组件每次render 都会生产一个新的 log 函数，这个新的 log 函数会产生一个在当前这个阶段 value 值的闭包。  
  
上面例子 “闭包陷阱” 的分析：  
  
1. 初始次渲染，生成一个 log 函数（value = 1）  
2. value 为 1 时，点击 alert 按钮执行 log 函数（value = 1）  
3. 点击按钮增加 value，比如 value 增加到 6，组件 render ，生成一个新的 log 函数（value = 6）  
4. 计时器触发，log 函数（value = 1）弹出闭包内的 value 为 1  
  
如何让弹窗中展示最新的value值呢？  
  
## 使用 useRef 解决闭包陷阱的问题  
  
```js  
const FunctionComponent = () => {  
  const [value, setValue] = useState(1)  
  const countRef = useRef(value)  
  
  const log = () => {  
    setTimeout(() => {  
      alert(countRef.current)  
    }, 3000);  
  }  
  
  useEffect(() => {  
    countRef.current = value  
  }, [value])  
  
  return (  
    <div>  
      <p>FunctionComponent</p>  
      <div>value: {value}</div>  
      <button onClick={log}>alert</button>  
      <button onClick={() => setValue(value + 1)}>add</button>  
    </div>  
  )  
}  
```  
  
**useRef** 每次 render 时都会返回**同一个引用类型的对象**，我们设置值和读取值都在这个对象上处理，这样就能获取到最新的 value 值了。  
# mobx 和 redux 有什么区别？  
## 共同点  
  
* 为了解决状态管理混乱、无法有效同步的问题，统一维护管理应用状态  
* 某一状态只有一个可信数据来源（通常命名为store，指状态容器）  
* 操作更新状态方式统一，并且可控（通常以action方式提供更新状态的途径）  
* 支持将store与React组件连接，如`react-redux`，`mobx-react`  
  
## 区别  
  
Redux更多的是遵循Flux模式的一种实现，是一个 JavaScript 库，它关注点主要是以下几方面∶  
  
* Action∶ 一个JavaScript对象，描述动作相关信息，主要包含type属性和payload属性∶  
* Reducer∶ 定义应用状态如何响应不同动作（action），如何更新状态;  
* Store∶ 管理action和reducer及其关系的对象，主要提供以下功能∶  
	* 维护应用状态并支持访问状态(getState());  
	* 支持监听action的分发，更新状态(dispatch(action));   
    * 支持订阅store的变更(subscribe(listener));  
* 异步流∶ 由于Redux所有对store状态的变更，都应该通过action触发，异步任务（通常都是业务或获取数据任务）也不例外，而为了不将业务或数据相关的任务混入React组件中，就需要使用其他框架配合管理异步任务流程，如redux-thunk，redux-saga等;  
  
Mobx是一个透明函数响应式编程的状态管理库，它使得状态管理简单可伸缩∶  
  
* Action∶定义改变状态的动作函数，包括如何变更状态;  
* Store∶ 集中管理模块状态（State）和动作(action)  
* Derivation（衍生）∶ 从应用状态中派生而出，且没有任何其他影响的数据  
  
## 对比总结  
  
* redux将数据保存在单一的store中，mobx将数据保存在分散的多个store中  
* redux使用`plain object`保存数据，需要手动处理变化后的操作;mobx适用`observable`保存数据，数据变化后自动处理响应的操作  
* redux使用不可变状态，这意味着状态是只读的，不能直接去修改它，而是应该返回一个新的状态，同时使用纯函数;mobx中的状态是可变的，可以直接对其进行修改  
* mobx相对来说比较简单，在其中有很多的抽象，mobx更多的使用面向对象的编程思维;redux会比较复杂，因为其中的函数式编程思想掌握起来不是那么容易，同时需要借助一系列的中间件来处理异步和副作用  
* mobx中有更多的抽象和封装，调试会比较困难，同时结果也难以预测;而redux提供能够进行时间回溯的开发工具，同时其纯函数以及更少的抽象，让调试变得更加的容易  
# React 中怎么实现状态自动保存（KeepAlive）？  
## 什么是状态保存？  
  
假设有下述场景：  
  
移动端中，用户访问了一个列表页，上拉浏览列表页的过程中，随着滚动高度逐渐增加，数据也将采用触底分页加载的形式逐步增加，列表页浏览到某个位置，用户看到了感兴趣的项目，点击查看其详情，进入详情页，从详情页退回列表页时，需要停留在离开列表页时的浏览位置上  
  
类似的数据或场景还有已填写但未提交的表单、管理系统中可切换和可关闭的功能标签等，这类数据随着用户交互逐渐变化或增长，这里理解为状态，在交互过程中，因为某些原因需要临时离开交互场景，则需要对状态进行保存  
  
在 React 中，我们通常会使用路由去管理不同的页面，而在切换页面时，路由将会卸载掉未匹配的页面组件，所以上述列表页例子中，当用户从详情页退回列表页时，会回到列表页顶部，因为列表页组件被路由卸载后重建了，状态被丢失。  
  
## 如何实现 React 中的状态保存  
  
在 Vue 中，我们可以非常便捷地通过 <keep-alive> 标签实现状态的保存，该标签会缓存不活动的组件实例，而不是销毁它们  
  
而在 React 中并没有这个功能，曾经有人在官方提过相关 issue ，但官方认为这个功能容易造成内存泄露，表示暂时不考虑支持，所以我们需要自己想办法了。  
  
## 常见的解决方式：手动保存状态  
  
手动保存状态，是比较常见的解决方式，可以配合 React 组件的 componentWillUnmount 生命周期通过 redux 之类的状态管理层对数据进行保存，通过 componentDidMount 周期进行数据恢复  
  
在需要保存的状态较少时，这种方式可以比较快地实现我们所需功能，但在数据量大或者情况多变时，手动保存状态就会变成一件麻烦事了  
  
作为程序员，当然是尽可能懒啦，为了不需要每次都关心如何对数据进行保存恢复，我们需要研究如何自动保存状态  
  
## 通过路由实现自动状态保存（通常使用 react-router）  
  
既然 React 中状态的丢失是由于路由切换时卸载了组件引起的，那可以尝试从路由机制上去入手，**改变路由对组件的渲染行为**  
  
我们有以下的方式去实现这个功能：  
  
* 重写 <Route> 组件，可参考 [react-live-route](https://github.com/fi3ework/react-live-route)。重写可以实现我们想要的功能，但成本也比较高，需要注意对原始 <Route> 功能的保存，以及多个 react-router 版本的兼容  
* 重写路由库，可参考 [react-keeper](https://github.com/lanistor/react-keeper) 。重写路由库成本是一般开发者无法承受的，且完全替换掉路由方案是一个风险较大的事情，需要较为慎重地考虑。  
* 基于 <Route> 组件现有行为做拓展，可参考 [react-router-cache-route](https://github.com/CJY0208/react-router-cache-route) 。在阅读了 <Route> 的源码后发现，如果使用 component 或者 render 属性，都无法避免路由在不匹配时被卸载掉的命运。但将 children 属性当作方法来使用，我们就有手动控制渲染的行为的可能。  
  
上面几种方案，主要通过路由入手实现自动状态保存的可能，但终究不是真实的、纯粹的 KeepAlive 功能。  
  
## 模拟真实的 <KeepAlive> 功能  
  
以下是期望的使用方式  
  
```js  
function App() {  
  const [show, setShow] = useState(true)  
  
  return (  
    <div>  
      <button onClick={() => setShow(show => !show)}>Toggle</button>  
      {show && (  
        <KeepAlive>  
          <Test />  
        </KeepAlive>  
      )}  
    </div>  
  )  
}  
```  
  
下面简单介绍下 [react-activation](https://github.com/CJY0208/react-activation) 的实现原理：由于 React 会卸载掉处于固有组件层级内的组件，所以我们需要将 <KeepAlive> 中的组件，也就是其 children 属性抽取出来，渲染到一个不会被卸载的组件 <Keeper> 内，再使用 DOM 操作将 <Keeper> 内的真实内容移入对应 <KeepAlive>，就可以实现此功能。  
  
  
  
  
  
  
  
  
  
  
# useEffect 与 useLayoutEffect 有什么区别？  
## 共同点  
  
* 运用效果： useEffect 与 useLayoutEffect 两者都是用于处理副作用，这些副作用包括改变 DOM、设置订阅、操作定时器等。在函数组件内部操作副作用是不被允许的，所以需要使用这两个函数去处理。  
* 使用方式： useEffect 与 useLayoutEffect 两者底层的函数签名是完全一致的，都是调用的 mountEffectImpl方法，在使用上也没什么差异，基本可以直接替换。  
  
## 不同点  
  
* 使用场景： useEffect 在 React 的渲染过程中是被异步调用的，用于绝大多数场景；而 useLayoutEffect 会在所有的 DOM 变更之后同步调用，主要用于处理 DOM 操作、调整样式、避免页面闪烁等问题。也正因为是同步处理，所以需要避免在 useLayoutEffect 做计算量较大的耗时任务从而造成阻塞。  
* 使用效果： useEffect是按照顺序执行代码的，改变屏幕像素之后执行（先渲染，后改变DOM），当改变屏幕内容时可能会产生闪烁；useLayoutEffect是改变屏幕像素之前就执行了（会推迟页面显示的事件，先改变DOM后渲染），不会产生闪烁。useLayoutEffect总是比useEffect先执行。  
  
在未来的趋势上，两个 API 是会长期共存的，暂时没有删减合并的计划，需要开发者根据场景去自行选择。React 团队的建议非常实用，如果实在分不清，先用 useEffect，一般问题不大；如果页面有异常，再直接替换为 useLayoutEffect 即可。  
# React Hooks 在使用上有哪些限制？  
React Hooks 的限制主要有两条：  
  
* 不要在循环、条件或嵌套函数中调用 Hook；  
* 在 React 的函数组件中调用 Hook。  
  
那为什么会有这样的限制呢？就得从 Hooks 的设计说起。Hooks 的设计初衷是为了改进 React 组件的开发模式。在旧有的开发模式下遇到了三个问题。  
  
* 组件之间难以复用状态逻辑。过去常见的解决方案是高阶组件、render props 及状态管理框架。  
* 复杂的组件变得难以理解。生命周期函数与业务逻辑耦合太深，导致关联部分难以拆分。  
* 人和机器都很容易混淆类。常见的有 this 的问题，但在 React 团队中还有类难以优化的问题，他们希望在编译优化层面做出一些改进。  
  
这三个问题在一定程度上阻碍了 React 的后续发展，所以为了解决这三个问题，Hooks 基于函数组件开始设计。然而第三个问题决定了 Hooks 只支持函数组件。  
  
那为什么不要在循环、条件或嵌套函数中调用 Hook 呢？因为 Hooks 的设计是基于数组实现。在调用时按顺序加入数组中，如果使用循环、条件或嵌套函数很有可能导致数组取值错位，执行错误的 Hook。当然，实质上 React 的源码里不是数组，是链表。  
  
这些限制会在编码上造成一定程度的心智负担，新手可能会写错，为了避免这样的情况，可以引入 ESLint 的 Hooks 检查插件进行预防。  
# 为什么 useState 返回的是数组而不是对象？  
useState 的用法：  
  
```js  
const [count, setCount] = useState(0)  
```  
  
可以看到 useState 返回的是一个数组，那么为什么是返回数组而不是返回对象呢？  
  
要回答这个问题得弄明白 ES6 的解构赋值(destructring assignment)语法 , 来看 2 个简单的示例：  
  
* 数组的解构赋值：  
  
```js  
const foo = ['one', 'two', 'three'];  
  
const [red, yellow, green] = foo;  
console.log(red); // "one"  
console.log(yellow); // "two"  
console.log(green); // "three"  
```  
  
* 对象的解构赋值：  
  
```js  
const user = {  
    id: 42,  
    is_verified: true  
};  
  
const { id, is_verified } = user;  
  
console.log(id); // 42  
console.log(is_verified); // true   
```  
  
搞清楚了解构赋值，那上面的问题就比较好解释了。  
  
如果 `useState` 返回数组，那么你可以顺便对数组中的变量命名，代码看起来也比较干净。而如果是对象的话返回的值必须和 `useState` 内部实现返回的对象同名，这样你只能在 `function component` 中使用一次，想要多次使用 `useState` 必须得重命名返回值。  
  
```js  
// 第一次使用  
const { state, setState } = useState(false)  
// 第二次使用  
const { state: counter, setState: setCounter} = useState(0)  
```  
  
当然事情总是有两面性的，使用 array 也存在一些问题：  
  
* 返回值强顺序，灵活性比较低。array[0] 为值，array[1] 为改变值的方法。  
* 返回的值基本都得使用，对于有些返回值不想使用的话代码看起来有些怪，比如只想用 setState, 就得这么写：`const [, setState] = useState(false)`。  
* 返回的参数不能太多，否则处理上面 2 个场景会很麻烦。  
  
如果在自定义的Hook中遇到了以上几个问题，不妨试试返回 object。  
  
简单总结一下，在自定义 hook 的时候可以遵循一个简单原则：当参数大于 2 个的时候返回值的类型返回 `object`， 否则返回数组。  
  
  
# Redux中的connect有什么作用？  
connect负责连接React和Redux  
  
## 获取state  
connect 通过 context获取 Provider 中的 store，通过 store.getState() 获取整个store tree 上所有state  
  
## 包装原组件  
  
将state和action通过props的方式传入到原组件内部 `wrapWithConnect` 返回—个 `ReactComponent` 对象 Connect，Connect重新 render 外部传入的原组件 `WrappedComponent` ，并把 connect 中传入的 `mapStateToProps`，`mapDispatchToProps`与组件上原有的 props 合并后，通过属性的方式传给 `WrappedComponent`  
  
## 监听store tree变化  
  
connect缓存了`store tree`中state的状态，通过当前state状态 和变更前 state 状态进行比较，从而确定是否调用 `this.setState()`方法触发 Connect 及其子组件的重新渲染  
# Redux 状态管理器和变量挂载到 window 中有什么区别？  
两者都是存储数据以供后期使用。但是Redux状态更改可回溯——`Time travel`，数据多了的时候可以很清晰的知道改动在哪里发生，完整的提供了一套状态管理模式。  
  
随着 JavaScript 单页应用开发日趋复杂，JavaScript 需要管理比任何时候都要多的 state （状态）。 这些 state 可能包括服务器响应、缓存数据、本地生成尚未持久化到服务器的数据，也包括 UI状态，如激活的路由，被选中的标签，是否显示加载动效或者分页器等等。  
  
管理不断变化的 state 非常困难。如果一个 model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应 model 以及另一个model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么。state 在什么时候，由于什么原因，如何变化已然不受控制。 当系统变得错综复杂的时候，想重现问题或者添加新功能就会变得举步维艰。  
  
如果这还不够糟糕，考虑一些来自前端开发领域的新需求，如更新调优、服务端渲染、路由跳转前请求数据等等。前端开发者正在经受前所未有的复杂性，难道就这么放弃了吗?当然不是。  
  
这里的复杂性很大程度上来自于：我们总是将两个难以理清的概念混淆在一起：变化和异步。 可以称它们为曼妥思和可乐。如果把二者分开，能做的很好，但混到一起，就变得一团糟。一些库如 React 视图在视图层禁止异步和直接操作 DOM来解决这个问题。美中不足的是，React 依旧把处理 state 中数据的问题留给了你。Redux就是为了帮你解决这个问题。  
  
# Redux 中异步的请求怎么处理  
一般的异步请求，可以在 `componentDidmount` 中直接进⾏请求，⽆须借助redux。  
  
但是在⼀定规模的项⽬中,上述⽅法很难进⾏异步流的管理,通常情况下我们会借助redux的异步中间件进⾏异步处理。  
  
redux异步流中间件其实有很多，当下主流的异步中间件有两种`redux-thunk`、`redux-saga`。  
  
## （1）使用react-thunk中间件  
  
### redux-thunk优点:  
  
* 体积⼩: redux-thunk的实现⽅式很简单，只有不到20⾏代码  
* 使⽤简单: redux-thunk没有引⼊像`redux-saga`或者`redux-observable`额外的范式，上⼿简单  
  
### redux-thunk缺陷:  
  
* 样板代码过多: 与redux本身⼀样,通常⼀个请求需要⼤量的代码,⽽且很多都是重复性质的  
* 耦合严重: 异步操作与redux的action偶合在⼀起,不⽅便管理  
* 功能孱弱: 有⼀些实际开发中常⽤的功能需要⾃⼰进⾏封装  
  
##（2）使用redux-saga中间件  
  
### redux-saga优点:  
  
* 异步解耦: 异步操作被被转移到单独 saga.js 中，不再是掺杂在 action.js 或 component.js 中  
* action摆脱`thunk function`: dispatch 的参数依然是⼀个纯粹的 action (FSA)，⽽不是充满 “⿊魔法” thunk function  
* 异常处理: 受益于 `generator function` 的 saga 实现，代码异常/请求失败 都可以直接通过 `try/catch` 语法直接捕获处理  
* 功能强⼤: `redux-saga`提供了⼤量的 Saga 辅助函数和 Effect 创建器供开发者使⽤,开发者⽆须封装或者简单封装即可使⽤  
* 灵活: redux-saga可以将多个Saga可以串⾏/并⾏组合起来,形成⼀个⾮常实⽤的异步flow  
* 易测试，提供了各种case的测试⽅案，包括mock task，分⽀覆盖等等  
  
### redux-saga缺陷:  
  
* 额外的学习成本: `redux-saga`不仅在使⽤难以理解的 `generator function`，⽽且有数⼗个API，学习成本远超redux-thunk。最重要的是你的额外学习成本是只服务于这个库的，与`redux-observable`不同，`redux-observable`虽然也有额外学习成本但是背后是rxjs和⼀整套思想  
* 体积庞⼤: 体积略⼤,代码近2000⾏，min版25KB左右  
* 功能过剩: 实际上并发控制等功能很难⽤到，但是我们依然需要引⼊这些代码  
* ts⽀持不友好: yield⽆法返回TS类型  
  
`redux-saga`可以捕获action，然后执行一个函数，那么可以把异步代码放在这个函数中。  
# 说说对受控组件和非受控组件的理解，以及应用场景？  
## 一、受控组件  
  
受控组件，简单来讲，就是受我们控制的组件，组件的状态全程响应外部数据  
  
举个简单的例子：  
  
```jsx  
class TestComponent extends React.Component {  
  constructor (props) {  
    super(props);  
    this.state = { username: 'lindaidai' };  
  }  
  render () {  
    return <input name="username" value={this.state.username} />  
  }  
}  
```  
  
这时候当我们在输入框输入内容的时候，会发现输入的内容并无法显示出来，也就是`input`标签是一个可读的状态  
  
这是因为`value`被`this.state.username`所控制住。当用户输入新的内容时，`this.state.username`并不会自动更新，这样的话`input`内的内容也就不会变了  
  
如果想要解除被控制，可以为`input`标签设置`onChange`事件，输入的时候触发事件函数，在函数内部实现`state`的更新，从而导致`input`框的内容页发现改变  
  
因此，受控组件我们一般需要初始状态和一个状态更新事件函数  
  
  
  
## 二、非受控组件  
  
非受控组件，简单来讲，就是不受我们控制的组件  
  
一般情况是在初始化的时候接受外部数据，然后自己在内部存储其自身状态  
  
当需要时，可以使用` ref ` 查询 `DOM `并查找其当前值，如下：  
  
```jsx  
import React, { Component } from 'react';  
  
export class UnControll extends Component {  
  constructor (props) {  
    super(props);  
    this.inputRef = React.createRef();  
  }  
  handleSubmit = (e) => {  
    console.log('我们可以获得input内的值为', this.inputRef.current.value);  
    e.preventDefault();  
  }  
  render () {  
    return (  
      <form onSubmit={e => this.handleSubmit(e)}>  
        <input defaultValue="lindaidai" ref={this.inputRef} />  
        <input type="submit" value="提交" />  
      </form>  
    )  
  }  
}  
```  
  
关于`refs`的详情使用可以参考[之前文章](https://mp.weixin.qq.com/s/ZBKWcslVBi0IKQgz7lYzbA)  
  
  
  
## 三、应用场景  
  
大部分时候推荐使用受控组件来实现表单，因为在受控组件中，表单数据由`React`组件负责处理  
  
如果选择非受控组件的话，控制能力较弱，表单数据就由`DOM`本身处理，但更加方便快捷，代码量少  
  
针对两者的区别，其应用场景如下图所示：  
  
 ![](https://static.vue-js.com/f28aed20-df2f-11eb-ab90-d9ae814b240d.png)  
  
  
# 说说React render方法的原理？在什么时候会被触发？  
  
 ![](https://static.vue-js.com/3d855230-ec6d-11eb-ab90-d9ae814b240d.png)  
  
## 一、原理  
  
首先，`render`函数在`react`中有两种形式：  
  
在类组件中，指的是`render`方法：  
  
```jsx  
class Foo extends React.Component {  
    render() {  
        return <h1> Foo </h1>;  
    }  
}  
```  
  
在函数组件中，指的是函数组件本身：  
  
```js  
function Foo() {  
    return <h1> Foo </h1>;  
}  
```  
  
在`render`中，我们会编写`jsx`，`jsx`通过`babel`编译后就会转化成我们熟悉的`js`格式，如下：  
  
```jsx  
return (  
  <div className='cn'>  
    <Header> hello </Header>  
    <div> start </div>  
    Right Reserve  
  </div>  
)  
```  
  
`babel`编译后：  
  
```js  
return (  
  React.createElement(  
    'div',  
    {  
      className : 'cn'  
    },  
    React.createElement(  
      Header,  
      null,  
      'hello'  
    ),  
    React.createElement(  
      'div',  
      null,  
      'start'  
    ),  
    'Right Reserve'  
  )  
)  
```  
  
从名字上来看，`createElement`方法用来元素的  
  
在`react`中，这个元素就是虚拟`DOM`树的节点，接收三个参数：  
  
- type：标签  
- attributes：标签属性，若无则为null  
  
- children：标签的子节点  
  
这些虚拟`DOM`树最终会渲染成真实`DOM`  
  
在`render`过程中，`React` 将新调用的 `render `函数返回的树与旧版本的树进行比较，这一步是决定如何更新 `DOM` 的必要步骤，然后进行 `diff` 比较，更新 `DOM `树  
  
  
  
  
  
## 二、触发时机  
  
`render`的执行时机主要分成了两部分：  
  
- 类组件调用 setState 修改状态  
  
```jsx  
class Foo extends React.Component {  
  state = { count: 0 };  
  
  increment = () => {  
    const { count } = this.state;  
  
    const newCount = count < 10 ? count + 1 : count;  
  
    this.setState({ count: newCount });  
  };  
  
  render() {  
    const { count } = this.state;  
    console.log("Foo render");  
  
    return (  
      <div>  
        <h1> {count} </h1>  
        <button onClick={this.increment}>Increment</button>  
      </div>  
    );  
  }  
}  
```  
  
点击按钮，则调用`setState`方法，无论`count`发生变化辩护，控制台都会输出`Foo render`，证明`render`执行了  
  
- 函数组件通过`useState hook`修改状态  
  
```jsx  
function Foo() {  
  const [count, setCount] = useState(0);  
  
  function increment() {  
    const newCount = count < 10 ? count + 1 : count;  
    setCount(newCount);  
  }  
  
  console.log("Foo render");  
    
  return (  
    <div>  
      <h1> {count} </h1>  
      <button onClick={increment}>Increment</button>  
    </div>  
  );  
}  
```  
  
函数组件通过`useState`这种形式更新数据，当数组的值不发生改变了，就不会触发`render`  
  
- 类组件重新渲染  
  
```js  
class App extends React.Component {  
  state = { name: "App" };  
  render() {  
    return (  
      <div className="App">  
        <Foo />  
        <button onClick={() => this.setState({ name: "App" })}>  
          Change name  
        </button>  
      </div>  
    );  
  }  
}  
  
function Foo() {  
  console.log("Foo render");  
  
  return (  
    <div>  
      <h1> Foo </h1>  
    </div>  
  );  
}  
```  
  
只要点击了 `App` 组件内的 `Change name` 按钮，不管 `Foo` 具体实现是什么，都会被重新`render`渲染  
  
- 函数组件重新渲染  
  
```jsx  
function App(){  
    const [name,setName] = useState('App')  
  
    return (  
        <div className="App">  
            <Foo />  
            <button onClick={() => setName("aaa")}>  
                { name }  
            </button>  
      </div>  
    )  
}  
  
function Foo() {  
  console.log("Foo render");  
  
  return (  
    <div>  
      <h1> Foo </h1>  
    </div>  
  );  
}  
```  
  
可以发现，使用`useState`来更新状态的时候，只有首次会触发`Foo render`，后面并不会导致`Foo render`  
  
  
  
## 三、总结  
  
`render`函数里面可以编写`JSX`，转化成`createElement`这种形式，用于生成虚拟`DOM`，最终转化成真实`DOM`  
  
在` React` 中，类组件只要执行了 `setState` 方法，就一定会触发 `render` 函数执行，函数组件使用`useState`更改状态不一定导致重新`render`  
  
组件的` props` 改变了，不一定触发 `render` 函数的执行，但是如果 `props` 的值来自于父组件或者祖先组件的 `state`  
  
在这种情况下，父组件或者祖先组件的 `state` 发生了改变，就会导致子组件的重新渲染  
  
所以，一旦执行了`setState`就会执行`render`方法，`useState` 会判断当前值有无发生改变确定是否执行`render`方法，一旦父组件发生渲染，子组件也会渲染  
  
 ![](https://static.vue-js.com/229784b0-ecf5-11eb-ab90-d9ae814b240d.png)  
  
  
# 你在React项目中是如何使用Redux的? 项目结构是如何划分的？  
## 一、背景  
  
`redux`是用于数据状态管理，而`react`是一个视图层面的库  
  
如果将两者连接在一起，可以使用官方推荐`react-redux`库，其具有高效且灵活的特性  
  
`react-redux`将组件分成：  
  
- 容器组件：存在逻辑处理  
- UI 组件：只负责现显示和交互，内部不处理逻辑，状态由外部控制  
  
通过`redux`将整个应用状态存储到`store`中，组件可以派发`dispatch`行为`action`给`store`  
  
其他组件通过订阅`store`中的状态`state`来更新自身的视图  
  
  
## 二、如何做  
  
使用`react-redux`分成了两大核心：  
  
- Provider  
- connection  
  
### Provider  
  
在`redux`中存在一个`store`用于存储`state`，如果将这个`store`存放在顶层元素中，其他组件都被包裹在顶层元素之上  
  
那么所有的组件都能够受到`redux`的控制，都能够获取到`redux`中的数据  
  
使用方式如下：  
  
```js  
<Provider store = {store}>  
    <App />  
<Provider>  
```  
  
  
  
### connection  
  
`connect`方法将`store`上的`getState `和 `dispatch `包装成组件的`props`  
  
导入`conect`如下：  
  
```js  
import { connect } from "react-redux";  
```  
  
用法如下：  
  
```js  
connect(mapStateToProps, mapDispatchToProps)(MyComponent)  
```  
  
可以传递两个参数：  
  
- mapStateToProps  
  
- mapDispatchToProps  
  
  
  
### mapStateToProps  
  
把`redux`中的数据映射到`react`中的`props`中去  
  
如下：  
  
```jsx  
const mapStateToProps = (state) => {  
    return {  
        // prop : state.xxx  | 意思是将state中的某个数据映射到props中  
        foo: state.bar  
    }  
}  
```  
  
组件内部就能够通过`props`获取到`store`中的数据  
  
```cons  
class Foo extends Component {  
    constructor(props){  
        super(props);  
    }  
    render(){  
        return(  
         // 这样子渲染的其实就是state.bar的数据了  
            <div>this.props.foo</div>  
        )  
    }  
}  
Foo = connect()(Foo)  
export default Foo  
```  
  
  
### mapDispatchToProps  
  
将`redux`中的`dispatch`映射到组件内部的`props`中  
  
```jsx  
const mapDispatchToProps = (dispatch) => { // 默认传递参数就是dispatch  
  return {  
    onClick: () => {  
      dispatch({  
        type: 'increatment'  
      });  
    }  
  };  
}  
  
```  
  
```js  
class Foo extends Component {  
    constructor(props){  
        super(props);  
    }  
    render(){  
        return(  
           
             <button onClick = {this.props.onClick}>点击increase</button>  
        )  
    }  
}  
Foo = connect()(Foo);  
export default Foo;  
```  
  
  
### 小结  
  
整体流程图大致如下所示：  
  
 ![](https://static.vue-js.com/3e47db10-e7dc-11eb-85f6-6fac77c0c9b3.png)  
  
  
  
## 三、项目结构  
  
可以根据项目具体情况进行选择，以下列出两种常见的组织结构  
  
#### 按角色组织（MVC）  
  
角色如下：  
  
- reducers   
- actions  
- components   
- containers   
  
参考如下：  
  
```js  
reducers/  
  todoReducer.js  
  filterReducer.js  
actions/  
  todoAction.js  
  filterActions.js  
components/  
  todoList.js  
  todoItem.js  
  filter.js  
containers/  
  todoListContainer.js  
  todoItemContainer.js  
  filterContainer.js  
```  
  
#### 按功能组织  
  
使用`redux`使用功能组织项目，也就是把完成同一应用功能的代码放在一个目录下，一个应用功能包含多个角色的代码  
  
`Redux`中，不同的角色就是`reducer`、`actions`和视图，而应用功能对应的就是用户界面的交互模块  
  
参考如下：  
  
```js  
todoList/  
  actions.js  
  actionTypes.js  
  index.js  
  reducer.js  
  views/  
    components.js  
    containers.js  
filter/  
  actions.js  
  actionTypes.js  
  index.js  
  reducer.js  
  views/  
    components.js  
    container.js  
```  
  
每个功能模块对应一个目录，每个目录下包含同样的角色文件：  
  
- actionTypes.js 定义action类型  
- actions.js 定义action构造函数  
- reducer.js  定义这个功能模块如果响应actions.js定义的动作  
- views 包含功能模块中所有的React组件，包括展示组件和容器组件  
- index.js 把所有的角色导入，统一导出  
  
其中`index`模块用于导出对外的接口  
  
```js  
import * as actions from './actions.js';  
import reducer from './reducer.js';  
import view from './views/container.js';  
  
export { actions, reducer, view };  
```  
  
导入方法如下：  
  
```js  
import { actions, reducer, view as TodoList } from './xxxx'  
```  
  
# 说说你对Redux的理解？其工作原理？  
## 一、是什么  
  
`React`是用于构建用户界面的，帮助我们解决渲染`DOM`的过程  
  
而在整个应用中会存在很多个组件，每个组件的`state`是由自身进行管理，包括组件定义自身的`state`、组件之间的通信通过`props`传递、使用`Context`实现数据共享  
  
如果让每个组件都存储自身相关的状态，理论上来讲不会影响应用的运行，但在开发及后续维护阶段，我们将花费大量精力去查询状态的变化过程  
  
这种情况下，如果将所有的状态进行集中管理，当需要更新状态的时候，仅需要对这个管理集中处理，而不用去关心状态是如何分发到每一个组件内部的  
  
`redux`就是一个实现上述集中管理的容器，遵循三大基本原则：  
  
- 单一数据源  
- state 是只读的  
- 使用纯函数来执行修改  
  
注意的是，`redux`并不是只应用在`react`中，还与其他界面库一起使用，如`Vue`  
  
  
## 二、工作原理  
  
`redux `要求我们把数据都放在 `store `公共存储空间  
  
一个组件改变了 `store` 里的数据内容，其他组件就能感知到 `store `的变化，再来取数据，从而间接的实现了这些数据传递的功能  
  
工作流程图如下所示：  
  
 ![](https://static.vue-js.com/27b2e930-e56b-11eb-85f6-6fac77c0c9b3.png)  
  
根据流程图，可以想象，`React Components` 是借书的用户， `Action Creactor` 是借书时说的话(借什么书)， `Store` 是图书馆管理员，`Reducer` 是记录本(借什么书，还什么书，在哪儿，需要查一下)， `state` 是书籍信息  
  
整个流程就是借书的用户需要先存在，然后需要借书，需要一句话来描述借什么书，图书馆管理员听到后需要查一下记录本，了解图书的位置，最后图书馆管理员会把这本书给到这个借书人  
  
转换为代码是，`React Components` 需要获取一些数据, 然后它就告知 `Store` 需要获取数据，这就是就是 `Action Creactor` , `Store` 接收到之后去 `Reducer` 查一下， `Reducer` 会告诉 `Store` 应该给这个组件什么数据  
  
  
  
## 三、如何使用  
  
创建一个`store`的公共数据区域  
  
```js  
import { createStore } from 'redux' // 引入一个第三方的方法  
const store = createStore() // 创建数据的公共存储区域（管理员）  
```  
  
还需要创建一个记录本去辅助管理数据，也就是`reduecer`，本质就是一个函数，接收两个参数`state`，`action`，返回`state`  
  
```js  
// 设置默认值  
const initialState = {  
  counter: 0  
}  
  
const reducer = (state = initialState, action) => {  
}  
```  
  
然后就可以将记录本传递给`store`，两者建立连接。如下：  
  
```js  
const store = createStore(reducer)  
```  
  
如果想要获取`store`里面的数据，则通过`store.getState()`来获取当前`state`  
  
```js  
console.log(store.getState());  
```  
  
下面再看看如何更改`store`里面数据，是通过`dispatch`来派发`action`，通常`action`中都会有`type`属性，也可以携带其他的数据  
  
```js  
store.dispatch({  
  type: "INCREMENT"  
})  
  
store.dispath({  
  type: "DECREMENT"  
})  
  
store.dispatch({  
  type: "ADD_NUMBER",  
  number: 5  
})  
```  
  
下面再来看看修改`reducer`中的处理逻辑：  
  
```js  
const reducer = (state = initialState, action) => {  
  switch (action.type) {  
    case "INCREMENT":  
      return {...state, counter: state.counter + 1};  
    case "DECREMENT":  
      return {...state, counter: state.counter - 1};  
    case "ADD_NUMBER":  
      return {...state, counter: state.counter + action.number}  
    default:   
      return state;  
  }  
}  
```  
  
注意，`reducer`是一个纯函数，不需要直接修改`state`  
  
这样派发`action`之后，既可以通过`store.subscribe`监听`store`的变化，如下：  
  
```js  
store.subscribe(() => {  
  console.log(store.getState());  
})  
```  
  
在`React`项目中，会搭配`react-redux`进行使用  
  
完整代码如下：  
  
```js  
const redux = require('redux');  
  
const initialState = {  
  counter: 0  
}  
  
// 创建reducer  
const reducer = (state = initialState, action) => {  
  switch (action.type) {  
    case "INCREMENT":  
      return {...state, counter: state.counter + 1};  
    case "DECREMENT":  
      return {...state, counter: state.counter - 1};  
    case "ADD_NUMBER":  
      return {...state, counter: state.counter + action.number}  
    default:   
      return state;  
  }  
}  
  
// 根据reducer创建store  
const store = redux.createStore(reducer);  
  
store.subscribe(() => {  
  console.log(store.getState());  
})  
  
// 修改store中的state  
store.dispatch({  
  type: "INCREMENT"  
})  
// console.log(store.getState());  
  
store.dispatch({  
  type: "DECREMENT"  
})  
// console.log(store.getState());  
  
store.dispatch({  
  type: "ADD_NUMBER",  
  number: 5  
})  
// console.log(store.getState());  
```  
  
  
  
### 小结  
  
- createStore可以帮助创建 store  
- store.dispatch 帮助派发 action , action 会传递给 store  
- store.getState 这个方法可以帮助获取 store 里边所有的数据内容  
- store.subscrible 方法订阅 store 的改变，只要 store 发生改变， store.subscrible 这个函数接收的这个回调函数就会被执行  
  
# 在react中怎么实现组件间的过渡动画？  
## 一、是什么  
  
在日常开发中，页面切换时的转场动画是比较基础的一个场景  
  
当一个组件在显示与消失过程中存在过渡动画，可以很好的增加用户的体验  
  
在`react`中实现过渡动画效果会有很多种选择，如`react-transition-group`，`react-motion`，`Animated`，以及原生的`CSS`都能完成切换动画  
  
  
## 二、如何实现  
  
在`react`中，`react-transition-group`是一种很好的解决方案，其为元素添加`enter`，`enter-active`，`exit`，`exit-active`这一系列勾子  
  
可以帮助我们方便的实现组件的入场和离场动画  
  
其主要提供了三个主要的组件：  
  
- CSSTransition：在前端开发中，结合 CSS 来完成过渡动画效果  
- SwitchTransition：两个组件显示和隐藏切换时，使用该组件  
- TransitionGroup：将多个动画组件包裹在其中，一般用于列表中元素的动画  
  
### CSSTransition  
  
其实现动画的原理在于，当`CSSTransition`的`in`属性置为`true`时，`CSSTransition`首先会给其子组件加上`xxx-enter`、`xxx-enter-active`的`class`执行动画  
  
当动画执行结束后，会移除两个`class`，并且添加`-enter-done`的`class`  
  
所以可以利用这一点，通过`css`的`transition`属性，让元素在两个状态之间平滑过渡，从而得到相应的动画效果  
  
当`in`属性置为`false`时，`CSSTransition`会给子组件加上`xxx-exit`和`xxx-exit-active`的`class`，然后开始执行动画，当动画结束后，移除两个`class`，然后添加`-enter-done`的`class`  
  
如下例子：  
  
```jsx  
export default class App2 extends React.PureComponent {  
  
  state = {show: true};  
  
  onToggle = () => this.setState({show: !this.state.show});  
  
  render() {  
    const {show} = this.state;  
    return (  
      <div className={'container'}>  
        <div className={'square-wrapper'}>  
          <CSSTransition  
            in={show}  
            timeout={500}  
            classNames={'fade'}  
            unmountOnExit={true}  
          >  
            <div className={'square'} />  
          </CSSTransition>  
        </div>  
        <Button onClick={this.onToggle}>toggle</Button>  
      </div>  
    );  
  }  
}  
```  
  
对应`css`样式如下：  
  
```css  
.fade-enter {  
  opacity: 0;  
  transform: translateX(100%);  
}  
  
.fade-enter-active {  
  opacity: 1;  
  transform: translateX(0);  
  transition: all 500ms;  
}  
  
.fade-exit {  
  opacity: 1;  
  transform: translateX(0);  
}  
  
.fade-exit-active {  
  opacity: 0;  
  transform: translateX(-100%);  
  transition: all 500ms;  
}  
```  
  
  
  
### SwitchTransition  
  
`SwitchTransition`可以完成两个组件之间切换的炫酷动画  
  
比如有一个按钮需要在`on`和`off`之间切换，我们希望看到`on`先从左侧退出，`off`再从右侧进入  
  
`SwitchTransition`中主要有一个属性`mode`，对应两个值：  
  
- in-out：表示新组件先进入，旧组件再移除；  
- out-in：表示就组件先移除，新组建再进入  
  
`SwitchTransition`组件里面要有`CSSTransition`，不能直接包裹你想要切换的组件  
  
里面的`CSSTransition`组件不再像以前那样接受`in`属性来判断元素是何种状态，取而代之的是`key`属性  
  
下面给出一个按钮入场和出场的示例，如下：  
  
```jsx  
import { SwitchTransition, CSSTransition } from "react-transition-group";  
  
export default class SwitchAnimation extends PureComponent {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      isOn: true  
    }  
  }  
  
  render() {  
    const {isOn} = this.state;  
  
    return (  
      <SwitchTransition mode="out-in">  
        <CSSTransition classNames="btn"  
                       timeout={500}  
                       key={isOn ? "on" : "off"}>  
          {  
          <button onClick={this.btnClick.bind(this)}>  
            {isOn ? "on": "off"}  
          </button>  
        }  
        </CSSTransition>  
      </SwitchTransition>  
    )  
  }  
  
  btnClick() {  
    this.setState({isOn: !this.state.isOn})  
  }  
}  
```  
  
`css`文件对应如下：  
  
```css  
.btn-enter {  
  transform: translate(100%, 0);  
  opacity: 0;  
}  
  
.btn-enter-active {  
  transform: translate(0, 0);  
  opacity: 1;  
  transition: all 500ms;  
}  
  
.btn-exit {  
  transform: translate(0, 0);  
  opacity: 1;  
}  
  
.btn-exit-active {  
  transform: translate(-100%, 0);  
  opacity: 0;  
  transition: all 500ms;  
}  
```  
  
  
  
### TransitionGroup  
  
当有一组动画的时候，就可将这些`CSSTransition`放入到一个`TransitionGroup`中来完成动画  
  
同样`CSSTransition`里面没有`in`属性，用到了`key`属性  
  
`TransitionGroup`在感知`children`发生变化的时候，先保存移除的节点，当动画结束后才真正移除  
  
其处理方式如下：  
  
- 插入的节点，先渲染dom，然后再做动画  
  
- 删除的节点，先做动画，然后再删除dom  
  
如下：  
  
```jsx  
import React, { PureComponent } from 'react'  
import { CSSTransition, TransitionGroup } from 'react-transition-group';  
  
export default class GroupAnimation extends PureComponent {  
  constructor(props) {  
    super(props);  
  
    this.state = {  
      friends: []  
    }  
  }  
  
  render() {  
    return (  
      <div>  
        <TransitionGroup>  
          {  
            this.state.friends.map((item, index) => {  
              return (  
                <CSSTransition classNames="friend" timeout={300} key={index}>  
                  <div>{item}</div>  
                </CSSTransition>  
              )  
            })  
          }  
        </TransitionGroup>  
        <button onClick={e => this.addFriend()}>+friend</button>  
      </div>  
    )  
  }  
  
  addFriend() {  
    this.setState({  
      friends: [...this.state.friends, "coderwhy"]  
    })  
  }  
}  
```  
  
对应`css`如下：  
  
```css  
.friend-enter {  
    transform: translate(100%, 0);  
    opacity: 0;  
}  
  
.friend-enter-active {  
    transform: translate(0, 0);  
    opacity: 1;  
    transition: all 500ms;  
}  
  
.friend-exit {  
    transform: translate(0, 0);  
    opacity: 1;  
}  
  
.friend-exit-active {  
    transform: translate(-100%, 0);  
    opacity: 0;  
    transition: all 500ms;  
}  
```  
# React构建组件的方式有哪些？有什么区别？  
## 一、是什么  
  
组件就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式  
  
在`React`中，一个类、一个函数都可以视为一个组件  
  
组件所存在的优势：  
  
- 降低整个系统的耦合度，在保持接口不变的情况下，我们可以替换不同的组件快速完成需求，例如输入框，可以替换为日历、时间、范围等组件作具体的实现  
- 调试方便，由于整个系统是通过组件组合起来的，在出现问题的时候，可以用排除法直接移除组件，或者根据报错的组件快速定位问题，之所以能够快速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单  
- 提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级  
  
  
  
## 二、如何构建  
  
在`React`目前来讲，组件的创建主要分成了三种方式：  
  
- 函数式创建  
- 通过 React.createClass 方法创建  
- 继承 React.Component 创建  
  
  
  
### 函数式创建  
  
在`React Hooks`出来之前，函数式组件可以视为无状态组件，只负责根据传入的`props`来展示视图，不涉及对`state`状态的操作  
  
大多数组件可以写为无状态组件，通过简单组合构建其他组件  
  
在`React`中，通过函数简单创建组件的示例如下：  
  
```jsx  
function HelloComponent(props, /* context */) {  
  return <div>Hello {props.name}</div>  
}  
```  
  
  
  
  
  
### 通过 React.createClass 方法创建  
  
`React.createClass`是react刚开始推荐的创建组件的方式，目前这种创建方式已经不怎么用了  
  
像上述通过函数式创建的组件的方式，最终会通过`babel`转化成`React.createClass`这种形式，转化成如下：  
  
```jsx  
function HelloComponent(props) /* context */{  
  return React.createElement(  
    "div",  
    null,  
    "Hello ",  
    props.name  
  );  
}  
```  
  
由于上述的编写方式过于冗杂，目前基本上不使用上  
  
  
  
### 继承 React.Component 创建  
  
同样在`react hooks`出来之前，有状态的组件只能通过继承`React.Component`这种形式进行创建  
  
有状态的组件也就是组件内部存在维护的数据，在类创建的方式中通过`this.state`进行访问  
  
当调用`this.setState`修改组件的状态时，组价会再次会调用`render()`方法进行重新渲染  
  
通过继承`React.Component`创建一个时钟示例如下：  
  
```jsx  
class Timer extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { seconds: 0 };  
  }  
  
  tick() {  
    this.setState(state => ({  
      seconds: state.seconds + 1  
    }));  
  }  
  
  componentDidMount() {  
    this.interval = setInterval(() => this.tick(), 1000);  
  }  
  
  componentWillUnmount() {  
    clearInterval(this.interval);  
  }  
  
  render() {  
    return (  
      <div>  
        Seconds: {this.state.seconds}  
      </div>  
    );  
  }  
}  
```  
  
  
  
## 三、区别  
  
由于`React.createClass `创建的方式过于冗杂，并不建议使用  
  
而像函数式创建和类组件创建的区别主要在于需要创建的组件是否需要为有状态组件：  
  
- 对于一些无状态的组件创建，建议使用函数式创建的方式  
  
- 由于`react hooks`的出现，函数式组件创建的组件通过使用`hooks`方法也能使之成为有状态组件，再加上目前推崇函数式编程，所以这里建议都使用函数式的方式来创建组件  
  
在考虑组件的选择原则上，能用无状态组件则用无状态组件  
  
  
# state 和 props有什么区别？  
## 一、state  
  
一个组件的显示形态可以由数据状态和外部参数所决定，而数据状态就是`state`，一般在 `constructor` 中初始化   
  
当需要修改里面的值的状态需要通过调用`setState`来改变，从而达到更新组件内部数据的作用，并且重新调用组件`render`方法，如下面的例子：  
  
```jsx  
class Button extends React.Component {  
    constructor() {  
        super();  
        this.state = {  
            count: 0,  
        };  
    }  
  
    updateCount() {  
        this.setState((prevState, props) => {  
            return { count: prevState.count + 1 }  
        });  
    }  
  
    render() {  
        return (<button  
                    onClick={() => this.updateCount()}  
                    >  
                Clicked {this.state.count} times  
            </button>);  
    }  
}  
```  
  
`setState`还可以接受第二个参数，它是一个函数，会在`setState`调用完成并且组件开始重新渲染时被调用，可以用来监听渲染是否完成  
  
```js  
this.setState({  
  name:'JS每日一题'  
},()=>console.log('setState finished'))  
```  
  
## 二、props  
  
`React`的核心思想就是组件化思想，页面会被切分成一些独立的、可复用的组件  
  
组件从概念上看就是一个函数，可以接受一个参数作为输入值，这个参数就是`props`，所以可以把`props`理解为从外部传入组件内部的数据  
  
`react`具有单向数据流的特性，所以他的主要作用是从父组件向子组件中传递数据  
  
`props`除了可以传字符串，数字，还可以传递对象，数组甚至是回调函数，如下：  
  
```jsx  
class Welcome extends React.Component {  
  render() {  
    return <h1>Hello {this.props.name}</h1>;  
  }  
}  
  
const element = <Welcome name="Sara" onNameChanged={this.handleName} />;  
```  
  
上述`name`属性与`onNameChanged`方法都能在子组件的`props`变量中访问  
  
在子组件中，`props`在内部不可变的，如果想要改变它看，只能通过外部组件传入新的`props`来重新渲染子组件，否则子组件的`props`和展示形式不会改变  
  
  
  
## 三、区别  
  
相同点：  
  
- 两者都是 JavaScript 对象  
- 两者都是用于保存信息  
- props 和 state 都能触发渲染更新  
  
区别：  
  
- props 是外部传递给组件的，而 state 是在组件内被组件自己管理的，一般在 constructor 中初始化  
- props 在组件内部是不可修改的，但 state 在组件内部可以进行修改  
- state 是多变的、可以修改  
  
# 说说react中引入css的方式有哪几种？区别？  
## 一、是什么  
  
组件式开发选择合适的`css`解决方案尤为重要  
  
通常会遵循以下规则：  
  
- 可以编写局部css，不会随意污染其他组件内的原生；  
- 可以编写动态的css，可以获取当前组件的一些状态，根据状态的变化生成不同的css样式；  
- 支持所有的css特性：伪类、动画、媒体查询等；  
- 编写起来简洁方便、最好符合一贯的css风格特点  
  
在这一方面，`vue`使用`css`起来更为简洁：  
  
- 通过 style 标签编写样式  
- scoped 属性决定编写的样式是否局部有效  
- lang 属性设置预处理器  
- 内联样式风格的方式来根据最新状态设置和改变css  
  
而在`react`中，引入`CSS`就不如`Vue`方便简洁，其引入`css`的方式有很多种，各有利弊  
  
  
## 二、方式  
  
常见的`CSS`引入方式有以下：  
  
- 在组件内直接使用  
- 组件中引入 .css 文件  
- 组件中引入 .module.css 文件  
- CSS in JS  
  
  
### 在组件内直接使用  
  
直接在组件中书写`css`样式，通过`style`属性直接引入，如下：  
  
```js  
import React, { Component } from "react";  
  
const div1 = {  
  width: "300px",  
  margin: "30px auto",  
  backgroundColor: "#44014C",  //驼峰法  
  minHeight: "200px",  
  boxSizing: "border-box"  
};  
  
class Test extends Component {  
  constructor(props, context) {  
    super(props);  
  }  
   
  render() {  
    return (  
     <div>  
       <div style={div1}>123</div>  
       <div style={{backgroundColor:"red"}}>  
     </div>  
    );  
  }  
}  
  
export default Test;  
```  
  
上面可以看到，`css`属性需要转换成驼峰写法  
  
这种方式优点：  
  
- 内联样式, 样式之间不会有冲突  
- 可以动态获取当前state中的状态  
  
缺点：  
  
- 写法上都需要使用驼峰标识  
  
- 某些样式没有提示  
  
- 大量的样式, 代码混乱  
  
- 某些样式无法编写(比如伪类/伪元素)  
  
   
  
### 组件中引入css文件  
  
将`css`单独写在一个`css`文件中，然后在组件中直接引入  
  
`App.css`文件：  
  
```css  
.title {  
  color: red;  
  font-size: 20px;  
}  
  
.desc {  
  color: green;  
  text-decoration: underline;  
}  
```  
  
组件中引入：  
  
```js  
import React, { PureComponent } from 'react';  
  
import Home from './Home';  
  
import './App.css';  
  
export default class App extends PureComponent {  
  render() {  
    return (  
      <div className="app">  
        <h2 className="title">我是App的标题</h2>  
        <p className="desc">我是App中的一段文字描述</p >  
        <Home/>  
      </div>  
    )  
  }  
}  
```  
  
这种方式存在不好的地方在于样式是全局生效，样式之间会互相影响  
  
  
  
### 组件中引入 .module.css 文件  
  
将`css`文件作为一个模块引入，这个模块中的所有`css`，只作用于当前组件。不会影响当前组件的后代组件  
  
这种方式是`webpack`特工的方案，只需要配置`webpack`配置文件中`modules:true`即可  
  
```jsx  
import React, { PureComponent } from 'react';  
  
import Home from './Home';  
  
import './App.module.css';  
  
export default class App extends PureComponent {  
  render() {  
    return (  
      <div className="app">  
        <h2 className="title">我是App的标题</h2>  
        <p className="desc">我是App中的一段文字描述</p >  
        <Home/>  
      </div>  
    )  
  }  
}  
```  
  
这种方式能够解决局部作用域问题，但也有一定的缺陷：  
  
- 引用的类名，不能使用连接符(.xxx-xx)，在 JavaScript 中是不识别的  
- 所有的 className 都必须使用 {style.className} 的形式来编写  
- 不方便动态来修改某些样式，依然需要使用内联样式的方式；  
  
  
  
### CSS in JS  
  
CSS-in-JS， 是指一种模式，其中` CSS `由 `JavaScript `生成而不是在外部文件中定义  
  
此功能并不是 React 的一部分，而是由第三方库提供，例如：  
  
- styled-components  
- emotion  
- glamorous  
  
  
  
下面主要看看`styled-components`的基本使用  
  
本质是通过函数的调用，最终创建出一个组件：  
  
- 这个组件会被自动添加上一个不重复的class  
- styled-components会给该class添加相关的样式  
  
基本使用如下：  
  
创建一个`style.js`文件用于存放样式组件：  
  
```js  
export const SelfLink = styled.div`  
  height: 50px;  
  border: 1px solid red;  
  color: yellow;  
`;  
  
export const SelfButton = styled.div`  
  height: 150px;  
  width: 150px;  
  color: ${props => props.color};  
  background-image: url(${props => props.src});  
  background-size: 150px 150px;  
`;  
```  
  
引入样式组件也很简单：  
  
```jsx  
import React, { Component } from "react";  
  
import { SelfLink, SelfButton } from "./style";  
  
class Test extends Component {  
  constructor(props, context) {  
    super(props);  
  }    
   
  render() {  
    return (  
     <div>  
       <SelfLink title="People's Republic of China">app.js</SelfLink>  
       <SelfButton color="palevioletred" style={{ color: "pink" }} src={fist}>  
          SelfButton  
        </SelfButton>  
     </div>  
    );  
  }  
}  
  
export default Test;  
```  
  
  
  
## 三、区别  
  
通过上面四种样式的引入，可以看到：  
  
- 在组件内直接使用`css`该方式编写方便，容易能够根据状态修改样式属性，但是大量的演示编写容易导致代码混乱  
- 组件中引入 .css 文件符合我们日常的编写习惯，但是作用域是全局的，样式之间会层叠  
- 引入.module.css 文件能够解决局部作用域问题，但是不方便动态修改样式，需要使用内联的方式进行样式的编写  
  
- 通过css in js 这种方法，可以满足大部分场景的应用，可以类似于预处理器一样样式嵌套、定义、修改状态等  
  
至于使用`react`用哪种方案引入`css`，并没有一个绝对的答案，可以根据各自情况选择合适的方案  
  
# 说说你对immutable的理解？如何应用在react项目中？  
## 一、是什么  
  
Immutable，不可改变的，在计算机中，即指一旦创建，就不能再被更改的数据  
  
对 `Immutable `对象的任何修改或添加删除操作都会返回一个新的 `Immutable `对象  
  
`Immutable` 实现的原理是 `Persistent Data Structure`（持久化数据结构）:  
  
- 用一种数据结构来保存数据  
- 当数据被修改时，会返回一个对象，但是新的对象会尽可能的利用之前的数据结构而不会对内存造成浪费  
  
也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变，同时为了避免 `deepCopy `把所有节点都复制一遍带来的性能损耗，`Immutable` 使用了 `Structural Sharing`（结构共享）  
  
如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享  
  
如下图所示：  
  
![](https://pic4.zhimg.com/80/2b4c801a7b40eefcd4ee6767fb984fdf_720w.gif)  
  
  
  
## 二、如何使用  
  
使用`Immutable`对象最主要的库是`immutable.js`  
  
immutable.js 是一个完全独立的库，无论基于什么框架都可以用它  
  
其出现场景在于弥补 Javascript 没有不可变数据结构的问题，通过 structural sharing来解决的性能问题  
  
内部提供了一套完整的 Persistent Data Structure，还有很多易用的数据类型，如`Collection`、`List`、`Map`、`Set`、`Record`、`Seq`，其中：  
  
- List: 有序索引集，类似 JavaScript 中的 Array  
  
- Map: 无序索引集，类似 JavaScript 中的 Object  
  
- Set: 没有重复值的集合  
  
  
  
主要的方法如下：  
  
- fromJS()：将一个js数据转换为Immutable类型的数据  
  
```js  
const obj = Immutable.fromJS({a:'123',b:'234'})  
```  
  
- toJS()：将一个Immutable数据转换为JS类型的数据  
- is()：对两个对象进行比较  
  
```js  
import { Map, is } from 'immutable'  
const map1 = Map({ a: 1, b: 1, c: 1 })  
const map2 = Map({ a: 1, b: 1, c: 1 })  
map1 === map2   //false  
Object.is(map1, map2) // false  
is(map1, map2) // true  
```  
  
- get(key)：对数据或对象取值  
  
- getIn([]) ：对嵌套对象或数组取值，传参为数组，表示位置  
  
```js  
let abs = Immutable.fromJS({a: {b:2}});  
abs.getIn(['a', 'b']) // 2  
abs.getIn(['a', 'c']) // 子级没有值  
  
let arr = Immutable.fromJS([1 ,2, 3, {a: 5}]);  
arr.getIn([3, 'a']); // 5  
arr.getIn([3, 'c']); // 子级没有值  
```  
  
-   
  
如下例子：使用方法如下：  
  
```js  
import Immutable from 'immutable';  
foo = Immutable.fromJS({a: {b: 1}});  
bar = foo.setIn(['a', 'b'], 2);   // 使用 setIn 赋值  
console.log(foo.getIn(['a', 'b']));  // 使用 getIn 取值，打印 1  
console.log(foo === bar);  //  打印 false  
```  
  
如果换到原生的`js`，则对应如下：  
  
```js  
let foo = {a: {b: 1}};  
let bar = foo;  
bar.a.b = 2;  
console.log(foo.a.b);  // 打印 2  
console.log(foo === bar);  //  打印 true  
```  
  
  
  
## 三、在React中应用  
  
使用 `Immutable `可以给 `React` 应用带来性能的优化，主要体现在减少渲染的次数  
  
在做`react`性能优化的时候，为了避免重复渲染，我们会在`shouldComponentUpdate()`中做对比，当返回`true`执行`render`方法  
  
`Immutable`通过`is`方法则可以完成对比，而无需像一样通过深度比较的方式比较  
  
在使用`redux`过程中也可以结合`Immutable`，不使用`Immutable`前修改一个数据需要做一个深拷贝  
  
```jsx  
import '_' from 'lodash';  
  
const Component = React.createClass({  
  getInitialState() {  
    return {  
      data: { times: 0 }  
    }  
  },  
  handleAdd() {  
    let data = _.cloneDeep(this.state.data);  
    data.times = data.times + 1;  
    this.setState({ data: data });  
  }  
}  
```  
  
使用 Immutable 后：  
  
```jsx  
getInitialState() {  
  return {  
    data: Map({ times: 0 })  
  }  
},  
  handleAdd() {  
    this.setState({ data: this.state.data.update('times', v => v + 1) });  
    // 这时的 times 并不会改变  
    console.log(this.state.data.get('times'));  
  }  
```  
  
同理，在`redux`中也可以将数据进行`fromJS`处理  
  
```js  
import * as constants from './constants'  
import {fromJS} from 'immutable'  
const defaultState = fromJS({ //将数据转化成immutable数据  
    home:true,  
    focused:false,  
    mouseIn:false,  
    list:[],  
    page:1,  
    totalPage:1  
})  
export default(state=defaultState,action)=>{  
    switch(action.type){  
        case constants.SEARCH_FOCUS:  
            return state.set('focused',true) //更改immutable数据  
        case constants.CHANGE_HOME_ACTIVE:  
            return state.set('home',action.value)  
        case constants.SEARCH_BLUR:  
            return state.set('focused',false)  
        case constants.CHANGE_LIST:  
            // return state.set('list',action.data).set('totalPage',action.totalPage)  
            //merge效率更高，执行一次改变多个数据  
            return state.merge({  
                list:action.data,  
                totalPage:action.totalPage  
            })  
        case constants.MOUSE_ENTER:  
            return state.set('mouseIn',true)  
        case constants.MOUSE_LEAVE:  
            return state.set('mouseIn',false)  
        case constants.CHANGE_PAGE:  
            return state.set('page',action.page)  
        default:  
            return state  
    }  
}  
```  
  
# 说说你在React项目是如何捕获错误的？  
  
 ![](https://static.vue-js.com/8db1b5c0-f288-11eb-85f6-6fac77c0c9b3.png)  
  
## 一、是什么  
  
错误在我们日常编写代码是非常常见的  
  
举个例子，在`react`项目中去编写组件内`JavaScript`代码错误会导致 `React` 的内部状态被破坏，导致整个应用崩溃，这是不应该出现的现象  
  
作为一个框架，`react`也有自身对于错误的处理的解决方案  
  
  
## 二、如何做  
  
为了解决出现的错误导致整个应用崩溃的问题，`react16`引用了**错误边界**新的概念  
  
错误边界是一种 `React` 组件，这种组件可以捕获发生在其子组件树任何位置的 `JavaScript` 错误，并打印这些错误，同时展示降级 `UI`，而并不会渲染那些发生崩溃的子组件树  
  
错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误  
  
形成错误边界组件的两个条件：  
  
- 使用了  static getDerivedStateFromError()  
- 使用了 componentDidCatch()  
  
抛出错误后，请使用 `static getDerivedStateFromError()` 渲染备用 UI ，使用 `componentDidCatch()` 打印错误信息，如下：  
  
```jsx  
class ErrorBoundary extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { hasError: false };  
  }  
  
  static getDerivedStateFromError(error) {  
    // 更新 state 使下一次渲染能够显示降级后的 UI  
    return { hasError: true };  
  }  
  
  componentDidCatch(error, errorInfo) {  
    // 你同样可以将错误日志上报给服务器  
    logErrorToMyService(error, errorInfo);  
  }  
  
  render() {  
    if (this.state.hasError) {  
      // 你可以自定义降级后的 UI 并渲染  
      return <h1>Something went wrong.</h1>;  
    }  
  
    return this.props.children;   
  }  
}  
```  
  
然后就可以把自身组件的作为错误边界的子组件，如下：  
  
```jsx  
<ErrorBoundary>  
  <MyWidget />  
</ErrorBoundary>  
```  
  
下面这些情况无法捕获到异常：  
  
- 事件处理  
- 异步代码  
- 服务端渲染  
- 自身抛出来的错误  
  
在`react 16`版本之后，会把渲染期间发生的所有错误打印到控制台  
  
除了错误信息和 JavaScript 栈外，React 16 还提供了组件栈追踪。现在你可以准确地查看发生在组件树内的错误信息：  
  
 ![](https://static.vue-js.com/7b2b51d0-f289-11eb-ab90-d9ae814b240d.png)  
  
可以看到在错误信息下方文字中存在一个组件栈，便于我们追踪错误  
  
对于错误边界无法捕获的异常，如事件处理过程中发生问题并不会捕获到，是因为其不会在渲染期间触发，并不会导致渲染时候问题  
  
这种情况可以使用`js`的`try...catch...`语法，如下：  
  
```jsx  
class MyComponent extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { error: null };  
    this.handleClick = this.handleClick.bind(this);  
  }  
  
  handleClick() {  
    try {  
      // 执行操作，如有错误则会抛出  
    } catch (error) {  
      this.setState({ error });  
    }  
  }  
  
  render() {  
    if (this.state.error) {  
      return <h1>Caught an error.</h1>  
    }  
    return <button onClick={this.handleClick}>Click Me</button>  
  }  
}  
```  
  
  
除此之外还可以通过监听`onerror`事件  
  
```js  
window.addEventListener('error', function(event) { ... })  
```  
  
# React 组件间怎么进行通信？  
## 一、是什么  
  
我们将组件间通信可以拆分为两个词：  
  
- 组件  
- 通信  
  
`React`的组件灵活多样，按照不同的方式可以分成很多类型的组件  
  
而通信指的是发送者通过某种媒体以某种格式来传递信息到收信者以达到某个目的，广义上，任何信息的交通都是通信  
  
组件间通信即指组件通过某种方式来传递信息以达到某个目的  
  
  
## 二、如何通信  
  
组件传递的方式有很多种，根据传送者和接收者可以分为如下：  
  
- 父组件向子组件传递  
- 子组件向父组件传递  
- 兄弟组件之间的通信  
- 父组件向后代组件传递  
- 非关系组件传递  
  
  
### 父组件向子组件传递  
  
由于`React`的数据流动为单向的，父组件向子组件传递是最常见的方式  
  
父组件在调用子组件的时候，只需要在子组件标签内传递参数，子组件通过`props`属性就能接收父组件传递过来的参数  
  
```jsx  
function EmailInput(props) {  
  return (  
    <label>  
      Email: <input value={props.email} />  
    </label>  
  );  
}  
  
const element = <EmailInput email="123124132@163.com" />;  
```  
  
  
### 子组件向父组件传递  
  
子组件向父组件通信的基本思路是，父组件向子组件传一个函数，然后通过这个函数的回调，拿到子组件传过来的值  
  
父组件对应代码如下：  
  
```jsx  
class Parents extends Component {  
  constructor() {  
    super();  
    this.state = {  
      price: 0  
    };  
  }  
  
  getItemPrice(e) {  
    this.setState({  
      price: e  
    });  
  }  
  
  render() {  
    return (  
      <div>  
        <div>price: {this.state.price}</div>  
        {/* 向子组件中传入一个函数  */}  
        <Child getPrice={this.getItemPrice.bind(this)} />  
      </div>  
    );  
  }  
}  
```  
  
子组件对应代码如下：  
  
```jsx  
class Child extends Component {  
  clickGoods(e) {  
    // 在此函数中传入值  
    this.props.getPrice(e);  
  }  
  
  render() {  
    return (  
      <div>  
        <button onClick={this.clickGoods.bind(this, 100)}>goods1</button>  
        <button onClick={this.clickGoods.bind(this, 1000)}>goods2</button>  
      </div>  
    );  
  }  
}  
```  
  
  
  
### 兄弟组件之间的通信  
  
如果是兄弟组件之间的传递，则父组件作为中间层来实现数据的互通，通过使用父组件传递  
  
```jsx  
class Parent extends React.Component {  
  constructor(props) {  
    super(props)  
    this.state = {count: 0}  
  }  
  setCount = () => {  
    this.setState({count: this.state.count + 1})  
  }  
  render() {  
    return (  
      <div>  
        <SiblingA  
          count={this.state.count}  
        />  
        <SiblingB  
          onClick={this.setCount}  
        />  
      </div>  
    );  
  }  
}  
```  
  
  
  
### 父组件向后代组件传递  
  
父组件向后代组件传递数据是一件最普通的事情，就像全局数据一样  
  
使用`context`提供了组件之间通讯的一种方式，可以共享数据，其他数据都能读取对应的数据  
  
通过使用`React.createContext`创建一个`context`  
  
```js  
 const PriceContext = React.createContext('price')  
```  
  
`context`创建成功后，其下存在`Provider`组件用于创建数据源，`Consumer`组件用于接收数据，使用实例如下：  
  
`Provider`组件通过`value`属性用于给后代组件传递数据：  
  
```jsx  
<PriceContext.Provider value={100}>  
</PriceContext.Provider>  
```  
  
如果想要获取`Provider`传递的数据，可以通过`Consumer`组件或者或者使用`contextType`属性接收，对应分别如下：  
  
```jsx  
class MyClass extends React.Component {  
  static contextType = PriceContext;  
  render() {  
    let price = this.context;  
    /* 基于这个值进行渲染工作 */  
  }  
}  
```  
  
`Consumer`组件：  
  
````jsx  
<PriceContext.Consumer>  
    { /*这里是一个函数*/ }  
    {  
        price => <div>price：{price}</div>  
    }  
</PriceContext.Consumer>  
````  
  
### 非关系组件传递  
  
如果组件之间关系类型比较复杂的情况，建议将数据进行一个全局资源管理，从而实现通信，例如`redux`。关于`redux`的使用后续再详细介绍  
  
  
## 三、总结  
  
由于`React`是单向数据流，主要思想是组件不会改变接收的数据，只会监听数据的变化，当数据发生变化时它们会使用接收到的新值，而不是去修改已有的值  
  
因此，可以看到通信过程中，数据的存储位置都是存放在上级位置中  
  
# react中懒加载的实现原理是什么？  
随着前端应用体积的扩大，资源加载的优化是我们必须要面对的问题，动态代码加载就是其中的一个方案，webpack 提供了符合 ECMAScript 提案 的 import() 语法 ，让我们来实现动态地加载模块（注：require.ensure 与 import() 均为 webpack 提供的代码动态加载方案，在 webpack 2.x 中，require.ensure 已被 import 取代）。  
  
在 React 16.6 版本中，新增了 React.lazy 函数，它能让你像渲染常规组件一样处理动态引入的组件，配合 webpack 的 Code Splitting ，只有当组件被加载，对应的资源才会导入 ，从而达到懒加载的效果。  
  
## 使用 React.lazy  
  
在实际的使用中，首先是引入组件方式的变化：  
  
```javascript  
// 不使用 React.lazy  
import OtherComponent from './OtherComponent';  
// 使用 React.lazy  
const OtherComponent = React.lazy(() => import('./OtherComponent'))  
```  
  
React.lazy 接受一个函数作为参数，这个函数需要调用 import() 。它需要返回一个 Promise，该 Promise 需要 resolve 一个 defalut export 的 React 组件。  
  
```react.js  
import React, { Suspense } from 'react';  
  
const OtherComponent = React.lazy(() => import('./OtherComponent'));  
  
function MyComponent() {  
  return (  
    <div>  
      <Suspense fallback={<div>Loading...</div>}>  
        <OtherComponent />  
      </Suspense>  
    </div>  
  );  
}  
```  
  
如上代码中，通过 import()、React.lazy 和 Suspense 共同一起实现了 React 的懒加载，也就是我们常说了运行时动态加载，即 OtherComponent 组件文件被拆分打包为一个新的包（bundle）文件，并且只会在 OtherComponent 组件渲染时，才会被下载到本地。  
  
需要注意的一点是，React.lazy 需要配合 Suspense 组件一起使用，在 Suspense 组件中渲染 React.lazy 异步加载的组件。如果单独使用 React.lazy，React 会给出错误提示。  
  
Suspense 可以包裹多个动态加载的组件，这也意味着在加载这两个组件的时候只会有一个 loading 层，因为 loading 的实现实际是 Suspense 这个父组件去完成的，当所有的子组件对象都 resolve 后，再去替换所有子组件。这样也就避免了出现多个 loading 的体验问题。所以 loading 一般不会针对某个子组件，而是针对整体的父组件做 loading 处理。  
  
## Webpack 动态加载  
  
上面使用了 import() 语法，webpack 检测到这种语法会自动代码分割。使用这种动态导入语法代替以前的静态引入，可以让组件在渲染的时候，再去加载组件对应的资源，这个异步加载流程的实现机制是怎么样呢？  
  
### import() 原理  
  
import() 函数是由TS39提出的一种动态加载模块的规范实现，其返回是一个 promise。在浏览器宿主环境中一个import()的参考实现如下：  
  
```javascript  
function import(url) {  
  return new Promise((resolve, reject) => {  
    const script = document.createElement("script");  
    const tempGlobal = "__tempModuleLoadingVariable" + Math.random().toString(32).substring(2);  
    script.type = "module";  
    script.textContent = `import * as m from "${url}"; window.${tempGlobal} = m;`;  
  
    script.onload = () => {  
      resolve(window[tempGlobal]);  
      delete window[tempGlobal];  
      script.remove();  
    };  
  
    script.onerror = () => {  
      reject(new Error("Failed to load module script with URL " + url));  
      delete window[tempGlobal];  
      script.remove();  
    };  
  
    document.documentElement.appendChild(script);  
  });  
}  
```  
  
结合上面的代码来看，webpack 通过创建 script 标签来实现动态加载的，找出依赖对应的 chunk 信息，然后生成 script 标签来动态加载 chunk，每个 chunk 都有对应的状态：未加载 、 加载中、已加载 。  
  
我们可以运行 React.lazy 代码来具体看看 network 的变化，为了方便辨认 chunk。我们可以在 import 里面加入 webpackChunckName 的注释，来指定包文件名称。  
  
## Suspense 组件  
  
Suspense 内部主要通过捕获组件的状态去判断如何加载， React.lazy 创建的动态加载组件具有 Pending、Resolved、Rejected 三种状态，当这个组件的状态为 Pending 时显示的是 Suspense 中 fallback 的内容，只有状态变为 resolve 后才显示组件。  
  
## Error Boundaries 处理资源加载失败场景  
  
如果遇到网络问题或是组件内部错误，页面的动态资源可能会加载失败，为了优雅降级，可以使用 Error Boundaries 来解决这个问题。  
  
Error Boundaries 是一种组件，如果你在组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 生命周期函数，它就会成为一个 Error Boundaries 的组件。  
  
## 总结  
  
React.lazy() 和 React.Suspense 的提出为现代 React 应用的性能优化和工程化提供了便捷之路。   
  
React.lazy 可以让我们像渲染常规组件一样处理动态引入的组件，结合 Suspense 可以更优雅地展现组件懒加载的过渡动画以及处理加载异常的场景。  
  
# React有哪些性能优化的方法？  
React 渲染性能优化的三个方向，其实也适用于其他软件开发领域，这三个方向分别是:  
  
* 减少计算的量。 -> 对应到 React 中就是减少渲染的节点 或者 降低组件渲染的复杂度  
* 利用缓存。-> 对应到 React 中就是如何避免重新渲染，利用函数式编程的 memo 方式来避免组件重新渲染  
* 精确重新计算的范围。 对应到 React 中就是绑定组件和状态关系, 精确判断更新的'时机'和'范围'. 只重新渲染'脏'的组件，或者说降低渲染范围  
  
## 减少渲染的节点/降低渲染计算量(复杂度)  
  
首先从计算的量上下功夫，减少节点渲染的数量或者降低渲染的计算量可以显著的提高组件渲染性能。  
  
### 不要在渲染函数都进行不必要的计算  
  
比如不要在渲染函数(render)中进行数组排序、数据转换、订阅事件、创建事件处理器等等. 渲染函数中不应该放置太多副作用  
  
### 减少不必要的嵌套  
  
有些团队是重度的 styled-components 用户，其实大部分情况下我们都不需要这个玩意，比如纯静态的样式规则，以及需要重度性能优化的场景。除了性能问题，另外一个困扰我们的是它带来的节点嵌套地狱(如上图)。  
  
所以我们需要理性地选择一些工具，比如使用原生的 CSS，减少 React 运行时的负担.  
  
一般不必要的节点嵌套都是滥用高阶组件/RenderProps 导致的。所以还是那句话‘只有在必要时才使用 xxx’。 有很多种方式来代替高阶组件/RenderProps，例如优先使用 props、React Hooks  
  
### 虚拟列表  
  
虚拟列表是常见的‘长列表'和'复杂组件树'优化方式，它优化的本质就是减少渲染的节点。  
  
虚拟列表只渲染当前视口可见元素。  
  
虚拟列表常用于以下组件场景:  
  
* 无限滚动列表，grid, 表格，下拉列表，spreadsheets  
* 无限切换的日历或轮播图  
* 大数据量或无限嵌套的树  
* 聊天窗，数据流(feed), 时间轴  
* 等等  
  
### 惰性渲染  
  
惰性渲染的初衷本质上和虚表一样，也就是说我们只在必要时才去渲染对应的节点。  
  
举个典型的例子，我们常用 Tab 组件，我们没有必要一开始就将所有 Tab 的 panel 都渲染出来，而是等到该 Tab 被激活时才去惰性渲染。  
  
还有很多场景会用到惰性渲染，例如树形选择器，模态弹窗，下拉列表，折叠组件等等。  
  
### 选择合适的样式方案  
  
在样式运行时性能方面大概可以总结为：CSS > 大部分CSS-in-js > inline style  
  
## 避免重新渲染  
  
减少不必要的重新渲染也是 React 组件性能优化的重要方向. 为了避免不必要的组件重新渲染需要在做到两点:  
  
* 保证组件纯粹性。即控制组件的副作用，如果组件有副作用则无法安全地缓存渲染结果  
* 通过shouldComponentUpdate生命周期函数来比对 state 和 props, 确定是否要重新渲染。对于函数组件可以使用React.memo包装  
  
另外这些措施也可以帮助你更容易地优化组件重新渲染:  
  
### 简化 props  
  
如果一个组件的 props 太复杂一般意味着这个组件已经违背了‘单一职责’，首先应该尝试对组件进行拆解. ② 另外复杂的 props 也会变得难以维护, 比如会影响shallowCompare效率, 还会让组件的变动变得难以预测和调试.  
  
简化的 props 更容易理解, 且可以提高组件缓存的命中率  
  
### 不变的事件处理器  
  
避免使用箭头函数形式的事件处理器, 例如:  
  
```javascript  
<ComplexComponent onClick={evt => onClick(evt.id)} otherProps={values} />  
```  
  
假设 ComplexComponent 是一个复杂的 PureComponent, 这里使用箭头函数，其实每次渲染时都会创建一个新的事件处理器，这会导致 ComplexComponent 始终会被重新渲染.  
  
更好的方式是使用实例方法:  
  
```javascript  
class MyComponent extends Component {  
  render() {  
    <ComplexComponent onClick={this.handleClick} otherProps={values} />;  
  }  
  handleClick = () => {  
    /*...*/  
  };  
}  
```  
  
即使现在使用hooks，我依然会使用useCallback来包装事件处理器，尽量给下级组件暴露一个静态的函数:  
  
```javascript  
const handleClick = useCallback(() => {  
  /*...*/  
}, []);  
  
return <ComplexComponent onClick={handleClick} otherProps={values} />;  
```  
  
但是如果useCallback依赖于很多状态，你的useCallback可能会变成这样:  
  
```javascript  
const handleClick = useCallback(() => {  
  /*...*/  
  // 🤭  
}, [foo, bar, baz, bazz, bazzzz]);  
```  
  
这种写法实在让人难以接受，这时候谁还管什么函数式非函数式的。我是这样处理的:  
  
```javascript  
function useRefProps<T>(props: T) {  
  const ref = useRef < T > props;  
  // 每次渲染更新props  
  useEffect(() => {  
    ref.current = props;  
  });  
}  
  
function MyComp(props) {  
  const propsRef = useRefProps(props);  
  
  // 现在handleClick是始终不变的  
  const handleClick = useCallback(() => {  
    const { foo, bar, baz, bazz, bazzzz } = propsRef.current;  
    // do something  
  }, []);  
}  
```  
  
设计更方便处理的 Event Props. 有时候我们会被逼的不得不使用箭头函数来作为事件处理器：  
  
```javascript  
<List>  
  {list.map(i => (  
    <Item key={i.id} onClick={() => handleDelete(i.id)} value={i.value} />  
  ))}  
</List>  
```  
  
上面的 onClick 是一个糟糕的实现，它没有携带任何信息来标识事件来源，所以这里只能使用闭包形式，更好的设计可能是这样的:  
  
```javascript  
// onClick传递事件来源信息  
const handleDelete = useCallback((id: string) => {  
  /*删除操作*/  
}, []);  
  
return (  
  <List>  
    {list.map(i => (  
      <Item key={i.id} id={i.id} onClick={handleDelete} value={i.value} />  
    ))}  
  </List>  
);  
```  
  
如果是第三方组件或者 DOM 组件呢? 实在不行，看能不能传递data-*属性:  
  
```javascript  
const handleDelete = useCallback(event => {  
  const id = event.currentTarget.dataset.id;  
  /*删除操作*/  
}, []);  
  
return (  
  <ul>  
    {list.map(i => (  
      <li key={i.id} data-id={i.id} onClick={handleDelete} value={i.value} />  
    ))}  
  </ul>  
);  
```  
  
### 不可变数据  
  
不可变数据可以让状态变得可预测，也让 shouldComponentUpdate '浅比较'变得更可靠和高效。  
  
相关的工具有Immutable.js、Immer、immutability-helper 以及 seamless-immutable。  
  
### 简化 state  
  
不是所有状态都应该放在组件的 state 中. 例如缓存数据。按照我的原则是：如果需要组件响应它的变动, 或者需要渲染到视图中的数据才应该放到 state 中。这样可以避免不必要的数据变动导致组件重新渲染.  
  
### 使用 recompose 精细化比对  
  
尽管 hooks 出来后，recompose 宣称不再更新了，但还是不影响我们使用 recompose 来控制shouldComponentUpdate方法, 比如它提供了以下方法来精细控制应该比较哪些 props:  
  
```javascript  
 /* 相当于React.memo */  
 pure()  
 /* 自定义比较 */  
 shouldUpdate(test: (props: Object, nextProps: Object) => boolean): HigherOrderComponent  
 /* 只比较指定key */  
 onlyUpdateForKeys( propKeys: Array<string>): HigherOrderComponent  
```  
  
其实还可以再扩展一下，比如omitUpdateForKeys忽略比对某些 key.  
  
## 精细化渲染  
  
  
所谓精细化渲染指的是只有一个数据来源导致组件重新渲染, 比如说 A 只依赖于 a 数据，那么只有在 a 数据变动时才渲染 A, 其他状态变化不应该影响组件 A。  
  
Vue 和 Mobx 宣称自己性能好的一部分原因是它们的'响应式系统', 它允许我们定义一些‘响应式数据’，当这些响应数据变动时，依赖这些响应式数据视图就会重新渲染。  
  
### 响应式数据的精细化渲染  
  
大部分情况下，响应式数据可以实现视图精细化的渲染, 但它还是不能避免开发者写出低效的程序. 本质上还是因为组件违背‘单一职责’.  
  
举个例子，现在有一个 MyComponent 组件，依赖于 A、B、C 三个数据源，来构建一个 vdom 树。现在的问题是什么呢？现在只要 A、B、C 任意一个变动，那么 MyComponent 整个就会重新渲染。  
  
更好的做法是让组件的职责更单一，精细化地依赖响应式数据，或者说对响应式数据进行‘隔离’. 如下图, A、B、C 都抽取各自的组件中了，现在 A 变动只会渲染 A 组件本身，而不会影响父组件和 B、C 组件。  
  
对于 Vue 或者 Mobx 来说，一个组件的渲染函数就是一个依赖收集的上下文。上面 List 组件渲染函数内'访问'了所有的列表项数据，那么 Vue 或 Mobx 就会认为你这个组件依赖于所有的列表项，这样就导致，只要任意一个列表项的属性值变动就会重新渲染整个 List 组件。  
  
解决办法也很简单，就是将数据隔离抽取到单一职责的组件中。对于 Vue 或 Mobx 来说，越细粒度的组件，可以收获更高的性能优化效果。  
  
### 不要滥用 Context  
  
其实 Context 的用法和响应式数据正好相反。笔者也看过不少滥用 Context API 的例子, 说到底还是没有处理好‘状态的作用域问题’.  
  
首先要理解 Context API 的更新特点，它是可以穿透React.memo或者shouldComponentUpdate的比对的，也就是说，一旦 Context 的 Value 变动，所有依赖该 Context 的组件会全部 forceUpdate.  
  
这个和 Mobx 和 Vue 的响应式系统不同，Context API 并不能细粒度地检测哪些组件依赖哪些状态，所以说上节提到的‘精细化渲染’组件模式，在 Context 这里就成为了‘反模式’.  
  
  
  
  
  
  
  
    
  
  
  
# React中的路由懒加载是什么？原理是什么？  
## React.lazy 是什么  
  
随着前端应用体积的扩大，资源加载的优化是我们必须要面对的问题，动态代码加载就是其中的一个方案。  
  
webpack 提供了符合 ECMAScript 提案 的 import() 语法 ，让我们来实现动态地加载模块（注：require.ensure 与 import() 均为 webpack 提供的代码动态加载方案，在 webpack 2.x 中，require.ensure 已被 import 取代）。  
  
在 React 16.6 版本中，新增了 React.lazy 函数，它能让你像渲染常规组件一样处理动态引入的组件，配合 webpack 的 Code Splitting ，只有当组件被加载，对应的资源才会导入 ，从而达到懒加载的效果。  
  
## 使用 React.lazy  
  
在实际的使用中，首先是引入组件方式的变化：  
  
```  
// 不使用 React.lazy  
import OtherComponent from './OtherComponent';  
// 使用 React.lazy  
const OtherComponent = React.lazy(() => import('./OtherComponent'))  
```  
  
React.lazy 接受一个函数作为参数，这个函数需要调用 import() 。它需要返回一个 Promise，该 Promise 需要 resolve 一个 defalut export 的 React 组件。  
  
React.lazy 方法返回的是一个 lazy 组件的对象，类型是 react.lazy，并且 lazy 组件具有 _status 属性，与 Promise 类似它具有 Pending、Resolved、Rejected 三个状态，分别代表组件的加载中、已加载、和加载失败三中状态。  
  
需要注意的一点是，React.lazy 需要配合 Suspense 组件一起使用，在 Suspense 组件中渲染 React.lazy 异步加载的组件。如果单独使用 React.lazy，React 会给出错误提示。  
  
## 实现原理  
  
### Webpack 动态加载  
  
上面使用了 import() 语法，webpack 检测到这种语法会自动代码分割。使用这种动态导入语法代替以前的静态引入，可以让组件在渲染的时候，再去加载组件对应的资源，这个异步加载流程的实现机制是怎么样呢？  
  
webpack 是通过创建 script 标签来实现动态加载的，找出依赖对应的 chunk 信息，然后生成 script 标签来动态加载 chunk，每个 chunk 都有对应的状态：未加载 、 加载中、已加载 。  
  
### Suspense 组件  
  
Suspense 内部主要通过捕获组件的状态去判断如何加载，上面我们提到 React.lazy 创建的动态加载组件具有 Pending、Resolved、Rejected 三种状态，当这个组件的状态为 Pending 时显示的是 Suspense 中 fallback 的内容，只有状态变为 resolve 后才显示组件。  
  
### Error Boundaries 处理资源加载失败场景  
  
如果遇到网络问题或是组件内部错误，页面的动态资源可能会加载失败，为了优雅降级，可以使用 Error Boundaries 来解决这个问题。  
  
Error Boundaries 是一种组件，如果你在组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 生命周期函数，它就会成为一个 Error Boundaries 的组件。  
  
它的用法也非常的简单，可以直接当作一个组件去使用，如下：  
  
```javascript  
<ErrorBoundary>  
  <MyWidget />  
</ErrorBoundary>  
```  
  
## 总结  
  
React.lazy() 和 React.Suspense 的提出为现代 React 应用的性能优化和工程化提供了便捷之路。 React.lazy 可以让我们像渲染常规组件一样处理动态引入的组件，结合 Suspense 可以更优雅地展现组件懒加载的过渡动画以及处理加载异常的场景。  
  
# React Fiber 是如何实现更新过程可控？  
更新过程的可控主要体现在下面几个方面：  
  
* 任务拆分  
* 任务挂起、恢复、终止  
* 任务具备优先级  
  
## 任务拆分  
  
在 React Fiber 机制中，它采用"化整为零"的思想，将调和阶段（Reconciler）递归遍历 VDOM 这个大任务分成若干小任务，每个任务只负责一个节点的处理。  
  
## 任务挂起、恢复、终止  
  
* workInProgress tree  
  
workInProgress 代表当前正在执行更新的 Fiber 树。在 render 或者 setState 后，会构建一颗 Fiber 树，也就是 workInProgress tree，这棵树在构建每一个节点的时候会收集当前节点的副作用，整棵树构建完成后，会形成一条完整的副作用链。  
  
* currentFiber tree  
  
currentFiber 表示上次渲染构建的 Filber 树。在每一次更新完成后 workInProgress 会赋值给 currentFiber。在新一轮更新时 workInProgress tree 再重新构建，新 workInProgress 的节点通过 alternate 属性和 currentFiber 的节点建立联系。  
  
在新 workInProgress tree 的创建过程中，会同 currentFiber 的对应节点进行 Diff 比较，收集副作用。同时也会复用和 currentFiber 对应的节点对象，减少新创建对象带来的开销。也就是说无论是创建还是更新、挂起、恢复以及终止操作都是发生在 workInProgress tree 创建过程中的。workInProgress tree 构建过程其实就是循环的执行任务和创建下一个任务。  
  
### 挂起  
  
当第一个小任务完成后，先判断这一帧是否还有空闲时间，没有就挂起下一个任务的执行，记住当前挂起的节点，让出控制权给浏览器执行更高优先级的任务。  
  
### 恢复  
  
在浏览器渲染完一帧后，判断当前帧是否有剩余时间，如果有就恢复执行之前挂起的任务。如果没有任务需要处理，代表调和阶段完成，可以开始进入渲染阶段。  
  
* 如何判断一帧是否有空闲时间的呢？  
  
使用前面提到的 RIC (RequestIdleCallback) 浏览器原生 API，React 源码中为了兼容低版本的浏览器，对该方法进行了 Polyfill。  
  
* 恢复执行的时候又是如何知道下一个任务是什么呢？  
  
答案是在前面提到的链表。在 React Fiber 中每个任务其实就是在处理一个 FiberNode 对象，然后又生成下一个任务需要处理的 FiberNode。  
  
### 终止  
  
其实并不是每次更新都会走到提交阶段。当在调和过程中触发了新的更新，在执行下一个任务的时候，判断是否有优先级更高的执行任务，如果有就终止原来将要执行的任务，开始新的 workInProgressFiber 树构建过程，开始新的更新流程。这样可以避免重复更新操作。这也是在 React 16 以后生命周期函数 componentWillMount 有可能会执行多次的原因。  
  
![image.png](https://i.loli.net/2021/08/07/zDMJxTkSUA7qQbW.png)  
  
## 任务具备优先级  
  
React Fiber 除了通过挂起，恢复和终止来控制更新外，还给每个任务分配了优先级。具体点就是在创建或者更新 FiberNode 的时候，通过算法给每个任务分配一个到期时间（expirationTime）。在每个任务执行的时候除了判断剩余时间，如果当前处理节点已经过期，那么无论现在是否有空闲时间都必须执行该任务。过期时间的大小还代表着任务的优先级。  
  
任务在执行过程中顺便收集了每个 FiberNode 的副作用，将有副作用的节点通过 firstEffect、lastEffect、nextEffect 形成一条副作用单链表 A1(TEXT)-B1(TEXT)-C1(TEXT)-C1-C2(TEXT)-C2-B1-B2(TEXT)-B2-A。  
  
其实最终都是为了收集到这条副作用链表，有了它，在接下来的渲染阶段就通过遍历副作用链完成 DOM 更新。这里需要注意，更新真实 DOM 的这个动作是一气呵成的，不能中断，不然会造成视觉上的不连贯（commit）。  
  
  
  
  
  
  
# Fiber 为什么是 React 性能的一个飞跃？  
## 什么是 Fiber  
  
Fiber 的英文含义是“纤维”，它是比线程（Thread）更细的线，比线程（Thread）控制得更精密的执行模型。在广义计算机科学概念中，Fiber 又是一种协作的（Cooperative）编程模型（协程），帮助开发者用一种【既模块化又协作化】的方式来编排代码。  
  
在 React 中，Fiber 就是 React 16 实现的一套新的更新机制，让 React 的更新过程变得可控，避免了之前采用递归需要一气呵成影响性能的做法。  
  
## React Fiber 中的时间分片  
  
把一个耗时长的任务分成很多小片，每一个小片的运行时间很短，虽然总时间依然很长，但是在每个小片执行完之后，都给其他任务一个执行的机会，这样唯一的线程就不会被独占，其他任务依然有运行的机会。  
  
React Fiber 把更新过程碎片化，每执行完一段更新过程，就把控制权交还给 React 负责任务协调的模块，看看有没有其他紧急任务要做，如果没有就继续去更新，如果有紧急任务，那就去做紧急任务。  
  
### Stack Reconciler  
  
基于栈的 Reconciler，浏览器引擎会从执行栈的顶端开始执行，执行完毕就弹出当前执行上下文，开始执行下一个函数，直到执行栈被清空才会停止。然后将执行权交还给浏览器。由于 React 将页面视图视作一个个函数执行的结果。每一个页面往往由多个视图组成，这就意味着多个函数的调用。  
  
如果一个页面足够复杂，形成的函数调用栈就会很深。每一次更新，执行栈需要一次性执行完成，中途不能干其他的事儿，只能"一心一意"。结合前面提到的浏览器刷新率，JS 一直执行，浏览器得不到控制权，就不能及时开始下一帧的绘制。如果这个时间超过 16ms，当页面有动画效果需求时，动画因为浏览器不能及时绘制下一帧，这时动画就会出现卡顿。不仅如此，因为事件响应代码是在每一帧开始的时候执行，如果不能及时绘制下一帧，事件响应也会延迟。  
  
### Fiber Reconciler  
  
#### 链表结构  
  
在 React Fiber 中用链表遍历的方式替代了 React 16 之前的栈递归方案。在 React 16 中使用了大量的链表。  
  
* 使用多向链表的形式替代了原来的树结构；  
  
```html  
<div id="A">  
A1  
<div id="B1">  
  B1  
  <div id="C1"></div>  
</div>  
<div id="B2">  
  B2  
</div>  
</div>  
```  
![image.png](https://i.loli.net/2021/08/07/2WZ3j1iHExedXJD.png)  
  
* 副作用单链表；  
  
![image.png](https://i.loli.net/2021/08/07/ogZiFnkjXtPLOdr.png)  
  
* 状态更新单链表；  
  
![image.png](https://i.loli.net/2021/08/07/W4AeV3tJvwqYZD7.png)  
  
链表是一种简单高效的数据结构，它在当前节点中保存着指向下一个节点的指针；遍历的时候，通过操作指针找到下一个元素。  
  
![image.png](https://i.loli.net/2021/08/07/uxPC8M13ckrGfWn.png)  
  
链表相比顺序结构数据格式的好处就是：  
  
* 操作更高效，比如顺序调整、删除，只需要改变节点的指针指向就好了。  
* 不仅可以根据当前节点找到下一个节点，在多向链表中，还可以找到他的父节点或者兄弟节点。  
  
但链表也不是完美的，缺点就是：  
  
* 比顺序结构数据更占用空间，因为每个节点对象还保存有指向下一个对象的指针。  
* 不能自由读取，必须找到他的上一个节点。  
  
React 用空间换时间，更高效的操作可以方便根据优先级进行操作。同时可以根据当前节点找到其他节点，在下面提到的挂起和恢复过程中起到了关键作用。  
  
  
  
  
  
  
  
  
  
# 不同版本的 React 都做过哪些优化？  
React渲染页面的两个阶段：  
  
* 调度阶段（reconciliation）：在这个阶段 React 会更新数据生成新的 Virtual DOM，然后通过Diff算法，快速找出需要更新的元素，放到更新队列中去，得到新的更新队列。  
* 渲染阶段（commit）：这个阶段 React 会遍历更新队列，**将其所有的变更一次性更新到DOM上**。  
  
## React 15 架构  
  
React15架构可以分为两层：  
  
* Reconciler（协调器）—— 负责找出变化的组件；  
* Renderer（渲染器）—— 负责将变化的组件渲染到页面上；  
  
在React15及以前，Reconciler采用递归的方式创建虚拟DOM，递归过程是不能中断的。如果组件树的层级很深，递归会占用线程很多时间，递归更新时间超过了16ms，用户交互就会卡顿。  
  
为了解决这个问题，React16将递归的无法中断的更新重构为异步的可中断更新，由于曾经用于递归的虚拟DOM数据结构已经无法满足需要。于是，全新的Fiber架构应运而生。  
  
## React 16 架构  
  
为了解决同步更新长时间占用线程导致页面卡顿的问题，也为了探索运行时优化的更多可能，React开始重构并一直持续至今。重构的目标是实现Concurrent Mode（并发模式）。  
  
从v15到v16，React团队花了两年时间将源码架构中的Stack Reconciler重构为Fiber Reconciler。  
  
React16架构可以分为三层：  
  
* Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler；  
* Reconciler（协调器）—— 负责找出变化的组件：更新工作从递归变成了可以中断的循环过程。Reconciler内部采用了Fiber的架构；  
* Renderer（渲染器）—— 负责将变化的组件渲染到页面上。  
  
## React 17 优化  
  
React16的expirationTimes模型只能区分是否>=expirationTimes决定节点是否更新。React17的lanes模型可以选定一个更新区间，并且动态的向区间中增减优先级，可以处理更细粒度的更新。  
  
>Lane用二进制位表示任务的优先级，方便优先级的计算（位运算），不同优先级占用不同位置的“赛道”，而且存在批的概念，优先级越低，“赛道”越多。高优先级打断低优先级，新建的任务需要赋予什么优先级等问题都是Lane所要解决的问题。  
  
Concurrent Mode的目的是实现一套可中断/恢复的更新机制。其由两部分组成：  
  
* 一套协程架构：Fiber Reconciler  
* 基于协程架构的启发式更新算法：控制协程架构工作方式的算法  
  
  
  
  
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
  
# React Fiber是什么？  
## Fiber 出现的背景  
  
首先要知道的是，JavaScript 引擎和页面渲染引擎两个线程是互斥的，当其中一个线程执行时，另一个线程只能挂起等待。  
  
在这样的机制下，如果 JavaScript 线程长时间地占用了主线程，那么渲染层面的更新就不得不长时间地等待，界面长时间不更新，会导致页面响应度变差，用户可能会感觉到卡顿。  
  
而这正是 React 15 的 Stack Reconciler 所面临的问题，即是 JavaScript 对主线程的超时占用问题。Stack Reconciler 是一个同步的递归过程，使用的是 JavaScript 引擎自身的函数调用栈，它会一直执行到栈空为止，所以当 React 在渲染组件时，从开始到渲染完成整个过程是一气呵成的。如果渲染的组件比较庞大，js 执行会占据主线程较长时间，会导致页面响应度变差。  
  
而且所有的任务都是按照先后顺序，没有区分优先级，这样就会导致优先级比较高的任务无法被优先执行。  
  
## Fiber 是什么  
  
Fiber 的中文翻译叫纤程，与进程、线程同为程序执行过程，Fiber 就是比线程还要纤细的一个过程。纤程意在对渲染过程实现进行更加精细的控制。  
  
从架构角度来看，Fiber 是对 React 核心算法（即调和过程）的重写。  
  
从编码角度来看，Fiber 是 React 内部所定义的一种数据结构，它是 Fiber 树结构的节点单位，也就是 React 16 新架构下的"虚拟 DOM"。  
  
一个 fiber 就是一个 JavaScript 对象，Fiber 的数据结构如下：  
  
```  
type Fiber = {  
  // 用于标记fiber的WorkTag类型，主要表示当前fiber代表的组件类型如FunctionComponent、ClassComponent等  
  tag: WorkTag,  
  // ReactElement里面的key  
  key: null | string,  
  // ReactElement.type，调用`createElement`的第一个参数  
  elementType: any,  
  // The resolved function/class/ associated with this fiber.  
  // 表示当前代表的节点类型  
  type: any,  
  // 表示当前FiberNode对应的element组件实例  
  stateNode: any,  
  
  // 指向他在Fiber节点树中的`parent`，用来在处理完这个节点之后向上返回  
  return: Fiber | null,  
  // 指向自己的第一个子节点  
  child: Fiber | null,  
  // 指向自己的兄弟结构，兄弟节点的return指向同一个父节点  
  sibling: Fiber | null,  
  index: number,  
  
  ref: null | (((handle: mixed) => void) & { _stringRef: ?string }) | RefObject,  
  
  // 当前处理过程中的组件props对象  
  pendingProps: any,  
  // 上一次渲染完成之后的props  
  memoizedProps: any,  
  
  // 该Fiber对应的组件产生的Update会存放在这个队列里面  
  updateQueue: UpdateQueue<any> | null,  
  
  // 上一次渲染的时候的state  
  memoizedState: any,  
  
  // 一个列表，存放这个Fiber依赖的context  
  firstContextDependency: ContextDependency<mixed> | null,  
  
  mode: TypeOfMode,  
  
  // Effect  
  // 用来记录Side Effect  
  effectTag: SideEffectTag,  
  
  // 单链表用来快速查找下一个side effect  
  nextEffect: Fiber | null,  
  
  // 子树中第一个side effect  
  firstEffect: Fiber | null,  
  // 子树中最后一个side effect  
  lastEffect: Fiber | null,  
  
  // 代表任务在未来的哪个时间点应该被完成，之后版本改名为 lanes  
  expirationTime: ExpirationTime,  
  
  // 快速确定子树中是否有不在等待的变化  
  childExpirationTime: ExpirationTime,  
  
  // fiber的版本池，即记录fiber更新过程，便于恢复  
  alternate: Fiber | null,  
}  
```  
  
## Fiber 如何解决问题的  
  
Fiber 把一个渲染任务分解为多个渲染任务，而不是一次性完成，把每一个分割得很细的任务视作一个"执行单元"，React 就会检查现在还剩多少时间，如果没有时间就将控制权让出去，故任务会被分散到多个帧里面，中间可以返回至主进程控制执行其他任务，最终实现更流畅的用户体验。  
  
即是实现了"增量渲染"，实现了可中断与恢复，恢复后也可以复用之前的中间状态，并给不同的任务赋予不同的优先级，其中每个任务更新单元为 React Element 对应的 Fiber 节点。  
  
## Fiber 实现原理  
  
实现的方式是requestIdleCallback这一 API，但 React 团队 polyfill 了这个 API，使其对比原生的浏览器兼容性更好且拓展了特性。  
  
> window.requestIdleCallback()方法将在浏览器的空闲时段内调用的函数排队。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间 timeout，则有可能为了在超时前执行函数而打乱执行顺序。  
  
requestIdleCallback回调的执行的前提条件是当前浏览器处于空闲状态。  
  
即requestIdleCallback的作用是在浏览器一帧的剩余空闲时间内执行优先度相对较低的任务。首先 React 中任务切割为多个步骤，分批完成。在完成一部分任务之后，将控制权交回给浏览器，让浏览器有时间再进行页面的渲染。等浏览器忙完之后有剩余时间，再继续之前 React 未完成的任务，是一种合作式调度。  
  
简而言之，由浏览器给我们分配执行时间片，我们要按照约定在这个时间内执行完毕，并将控制权还给浏览器。  
  
React 16 的Reconciler基于 Fiber 节点实现，被称为 Fiber Reconciler。  
  
作为静态的数据结构来说，每个 Fiber 节点对应一个 React element，保存了该组件的类型（函数组件/类组件/原生组件等等）、对应的 DOM 节点等信息。  
  
作为动态的工作单元来说，每个 Fiber 节点保存了本次更新中该组件改变的状态、要执行的工作。  
  
每个 Fiber 节点有个对应的 React element，多个 Fiber 节点是如何连接形成树呢？靠如下三个属性：  
  
```js  
// 指向父级Fiber节点  
this.return = null  
// 指向子Fiber节点  
this.child = null  
// 指向右边第一个兄弟Fiber节点  
this.sibling = null  
```  
  
  
  
  
# 为什么不能用数组下标来作为react组件中的key？  
react 使用diff算法，使用key来做同级比对。如果使用数组下标作为key，有以下情况：  
  
* 在数组头部或中部插入或删除元素： 所有key对应的节点的值发生更改，进行重新渲染。造成性能损耗  
* 而如果使用数组中唯一值来作为key：不管是在何处插入或删除节点，其他key对应的节点的值未发生更改，只需插入或删除操作的数组节点。  
# React Hooks当中的useEffect是如何区分生命周期钩子的  
  
useEffect可以看成是 `componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 三者的结合。  
  
useEffect(callback, [source])接收两个参数，调用方式如下：  
  
```react.js  
useEffect(() => {  
   console.log('mounted');  
     
   return () => {  
       console.log('willUnmount');  
   }  
 }, [source]);  
```  
  
生命周期函数的调用主要是通过第二个参数`[source]`来进行控制，有如下几种情况：  
  
* [source]参数不传时，则每次都会优先调用上次保存的函数中返回的那个函数，然后再调用外部那个函数；  
* [source]参数传[]时，则外部的函数只会在初始化时调用一次，返回的那个函数也只会最终在组件卸载时调用一次；  
* [source]参数有值时，则只会监听到数组中的值发生变化后才优先调用返回的那个函数，再调用外部的函数。  
  
# React中，能否直接将 props 的值复制给 state？  
应该避免这种写法：  
  
```react.js  
constructor(props) {  
 super(props);  
 // 不要这样做  
 this.state = { color: props.color };  
}  
```  
  
因为这样做毫无必要（你可以直接使用 this.props.color），同时还产生了 bug（更新 prop 中的 color 时，并不会影响 state）。  
  
只有在你刻意忽略 prop 更新的情况下使用。  
  
此时，应将 prop 重命名为 initialColor 或 defaultColor。必要时，你可以修改它的 key，以强制 **重置** 其内部 state。  
# 简单介绍下React中的 diff 算法  
  
diff 算法主要基于三个规律：  
  
* DOM 节点的跨层级移动的操作特别少，可以忽略不计  
* 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构  
* 对于同一层级的一组子节点，可以通过唯一的 id 进行区分  
  
## tree diff  
  
因为上面的三个策略中的第一点， DOM 节点的跨级操作比较少，那么 diff 算法只会对相同层级的 DOM 节点进行比较。如果发现节点不存在 那么会将该节点以及其子节点完全删除，不会再继续比较。如果出现了 DOM 节点的跨层级的移动操作，那么会删除改节点以及其所有的子节点，然后再移动后的位置重新创建。  
  
## component diff  
  
如果是同一类型的组件，那么会继续对比 VM 数  
  
如果不是同一类型的组件，那么会将其和其子节点完全替换，不会再进行比对  
  
同一类型的组件，有可能 VM 没有任何的变化，如果可以确定的知道这点，那么就可以节省大量的 diff 时间，所以用户可以设置 shouldComponentUpdate() 来判断是否需要进行 diff 算法。  
  
## element diff  
  
当节点处于同一层级的时候时，有三种操作：INSERT_MAKEUP插入、 MOVE_EXISTING 移动、 REMOVE_NODE 删除  
  
这里 React 有一个优化策略，对于同一层级的同组子节点，添加唯一的 key 进行区分。这样的话，就可以判断出来是否是移动节点。通过 key 发现新旧集合中的节点都是相同的节点，就只需要进行移动操作就可以。  
  
  
# 使用React Hooks有什么优势？  
hooks 是react 16.8 引入的特性，他允许你在不写class的情况下操作state 和react的其他特性。  
  
React Hooks 要解决的问题是状态共享，是继 render-props 和 higher-order components 之后的第三种状态共享方案，不会产生 JSX 嵌套地狱问题。  
  
这个状态指的是状态逻辑，所以称为状态逻辑复用会更恰当，因为只共享数据处理逻辑，不会共享数据本身。  
  
  
# 列举几个常见的 Hook?  
* 状态钩子 (useState): 用于定义组件的 State，类似类定义中 this.state 的功能  
* 生命周期钩子 (useEffect): 类定义中有许多生命周期函数，而在 React Hooks 中也提供了一个相应的函数 (useEffect)，这里可以看做componentDidMount、componentDidUpdate和componentWillUnmount的结合。  
* useContext: 获取 context 对象  
* useCallback: 缓存回调函数，避免传入的回调每次都是新的函数实例而导致依赖组件重新渲染，具有性能优化的效果；  
* useMemo: 用于缓存传入的 props，避免依赖的组件每次都重新渲染；  
* useRef: 获取组件的真实节点；  
  
# React Hooks带来了什么便利？  
在没有 hooks 之前，我们使用函数定义的组件中，不能使用 React 的 state、各种生命周期钩子类组件的特性。在 React 16.8 之后，推出了新功能： Hooks，通过 hooks 我们可以再函数定义的组件中使用类组件的特性。  
  
好处:  
  
* 跨组件复用: 其实 render props / HOC 也是为了复用，相比于它们，Hooks 作为官方的底层 API，最为轻量，而且改造成本小，不会影响原来的组件层次结构和传说中的嵌套地狱；  
* 相比而言，类组件的实现更为复杂  
	* 不同的生命周期会使逻辑变得分散且混乱，不易维护和管理；  
	* 时刻需要关注this的指向问题；  
	* 代码复用代价高，高阶组件的使用经常会使整个组件树变得臃肿；  
* 状态与 UI 隔离: 正是由于 Hooks 的特性，状态逻辑会变成更小的粒度，并且极容易被抽象成一个自定义 Hooks，组件中的状态和 UI 变得更为清晰和隔离。  
  
**注意**:  
  
* 避免在 循环/条件判断/嵌套函数 中调用 hooks，保证调用顺序的稳定；  
* 不能在useEffect中使用useState，React 会报错提示；  
* 类组件不会被替换或废弃，不需要强制改造类组件，两种方式能并存  
  
  
# React中的VM 一定会提高性能吗？  
不一定，因为 VM 只是通过 diff 算法避免了一些不需要变更的 DOM 操作，最终还是要操作 DOM 的，并且 diff 的过程也是有成本的。  
  
对于某些场景，比如都是需要变更 DOM 的操作，因为 VM 还会有额外的 diff 算法的成本在里面，所以 VM 的方式并不会提高性能，甚至比原生 DOM 要慢。  
  
但是正如尤大大说的，这是一个性能 vs 可维护性的取舍。  
  
框架的意义在于为你掩盖底层的 DOM 操作，让你用更声明式的方式来描述你的目的，从而让你的代码更容易维护。  
  
没有任何框架可以比纯手动的优化 DOM 操作更快，因为框架的 DOM 操作层需要应对任何上层 API 可能产生的操作，它的实现必须是普适的。  
  
针对任何一个 benchmark，都可以写出比任何框架更快的手动优化，但是那有什么意义呢？在构建一个实际应用的时候，出于可维护性的考虑，不可能在每一个地方都去做手动优化。  
# 为什么React的 VM 可以提高性能？  
  
因为 VM 并不是真实的操作 DOM，通过 diff 算法可以避免一些不变要的 DOM 操作，从而提高了性能。  
# react 的虚拟dom是怎么实现的？  
  
React 是把真实的 DOM 树转换为 JS 对象树，也就是 Virtual DOM。每次数据更新后，重新计算 VM，并和上一次生成的 VM 树进行对比，对发生变化的部分进行批量更新。除了性能之外，VM 的实现最大的好处在于和其他平台的集成。  
  
比如我们一个真是的 DOM 是这样的  
  
```html  
<button class="myButton">  
  <span>this is button</span>  
</button>  
```  
  
那么在转化为 VM 之后就是这样的  
  
```json  
{  
  type: 'button',  
  props: {  
  	className: 'myButton',  
    children: [{  
      type: 'span',  
      props: {  
        type: 'text'  
        children: 'this is button'  
      }  
    }]  
  }  
}  
```  
# 在 shouldComponentUpdate 或 componentWillUpdate 中使用 setState 会发生什么？  
当调用 setState 的时候，实际上会将新的 state 合并到状态更新队列中，并对 partialState 以及 _pendingStateQueue 更新队列进行合并操作。最终通过 enqueueUpdate 执行 state 更新。  
  
如果在 shouldComponentUpdate 或 componentWillUpdate 中使用 setState，会使得 state 队列（_pendingStateQueue）不为 null，从而调用 updateComponent 方法，updateComponent 中会继续调用 shouldComponentUpdate 和 componentWillUpdate，因此造成死循环。  
# setState 之后发生了什么  
  
**简单版本**： React 利用状态队列机制实现了 setState 的“异步”更新，避免频繁的重复更新 state。  
  
首先将新的 state 合并到状态更新队列中，然后根据更新队列和 shouldComponentUpdate 的状态来判断是否需要更新组件。  
  
**复杂版本**：  
  
* enqueueSetState 将 state 放入队列中，并调用 enqueueUpdate 处理要更新的 Component  
* 如果组件当前正处于 update 事务中，则先将 Component 存入 dirtyComponent 中。否则调用batchedUpdates 处理。  
* batchedUpdates 发起一次 transaction.perform() 事务  
* 开始执行事务初始化，运行，结束三个阶段  
	* 初始化：事务初始化阶段没有注册方法，故无方法要执行  
	* 运行：执行 setSate 时传入的 callback 方法  
	* 结束：更新 isBatchingUpdates 为 false，并执行 FLUSH_BATCHED_UPDATES 这个 wrapper 中的close方法，FLUSH_BATCHED_UPDATES在close阶段，会循环遍历所有的 dirtyComponents，调用updateComponent 刷新组件，并执行它的 pendingCallbacks, 也就是 setState 中设置的 callback。  
  
  
# React中为什么要给组件设置 key？  
在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。  
  
在 React Diff 算法中React 会借助元素的 Key 值来判断该元素是新创建的还是被移动而来的元素，从而减少不必要的元素重新渲染。  
  
此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系。  
  
# React 的事件代理机制和原生事件绑定有什么区别？  
  
* 事件传播与阻止事件的传播： React 的合成事件并没有实现事件捕获 只支持了事件冒泡。阻止事件传播 React 做了兼容性处理，只需要 e.preventDefault() 即可，原生存在兼容性问题。  
* 事件类型：React 是 原生事件类型 的一个子集（React 只是实现了 DOM level3 的事件接口，有些事件 React 并没有实现，比如 window 的 resize 事件。）阻止 React 事件冒泡的行为只能用于 React 合成事件系统，但是 在原生事件中的阻止冒泡行为，却可以阻止 React 合成事件的传播。  
* 事件的绑定方式：原生事件系统中支持多种不同的绑定事件的方式，React 中只有一种  
* 事件对象：原生中存在 IE 的兼容性问题，React 做了兼容处理。  
  
# React 的事件代理机制和原生事件绑定混用会有什么问题？  
我们在平时的开发中应该尽可能的避免 React 的事件代理机制和原生事件绑定混用。  
  
React 的合成事件层，并没有将事件直接绑定到 DOM 元素上，所以使用 e.stopPropagation() 来阻止原生 DOM 的冒泡的行为是不行的。阻止 React 事件冒泡的行为只能用于 React 合成事件系统，但是 在原生事件中的阻止冒泡行为，却可以阻止 React 合成事件的传播。  
  
  
# React 中如果绑定事件使用匿名函数有什么影响？  
```react.js  
class Demo {  
  render() {  
    return <button onClick={(e) => {  
      alert('我点击了按钮')  
    }}>  
      按钮  
    </button>  
  }  
}  
  
```  
  
这样的写法，因为使用的是匿名函数，所以组件每次都会认为是一个新的 props，不会使用缓存优化，在性能上会有一定的损耗。  
# 为什么不能直接使用 this.state 改变数据？  
react中不能直接修改state，因为并不会重新触发render。  
  
以如下方式更新状态，组件不会重新渲染。  
  
```react.js  
//Wrong  
This.state.message =”Hello world”;  
```  
  
而是需要使用setState()方法，状态改变时，组件通过重新渲染做出响应。  
  
```react.js  
//Correct  
This.setState({message: ‘Hello World’});  
```  
  
setState通过一个队列机制来实现 state 更新。当执行 setState 的时候，会将需要更新的 state 合并后放入状态队列，而不会立刻更新 this.state。队列机制可以高效的批量更新 state，如果不通过 setState 而直接修改 this.state，那么该 state 将不会被放入状态队列中，当下次调用 setState 并对状态队列进行合并时，将会忽略之前被直接修改的 state，而造成无法预知的错误。  
# 简述下 React 的生命周期？每个生命周期都做了什么？  
![生命周期示意图](https://i.loli.net/2021/07/04/ur5i6B4VbwSd3vU.png)  
  
## 挂载  
  
当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：  
  
* constructor()  
* static getDerivedStateFromProps()  
* render()  
* componentDidMount()  
  
## 更新  
  
当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：  
  
* static getDerivedStateFromProps()  
* shouldComponentUpdate()  
* render()  
* getSnapshotBeforeUpdate()  
* componentDidUpdate()  
  
## 卸载  
  
当组件从 DOM 中移除时会调用如下方法：  
  
* componentWillUnmount()  
  
## 错误处理  
  
渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：  
  
* static getDerivedStateFromError()  
* componentDidCatch()  
  
  
## 具体介绍  
  
### render()  
  
render() 方法是 class 组件中唯一必须实现的方法。  
  
当 render 被调用时，它会检查 this.props 和 this.state 的变化并返回以下类型之一：  
  
* React 元素。通常通过 JSX 创建。例如，<div /> 会被 React 渲染为 DOM 节点，<MyComponent /> 会被 React 渲染为自定义组件，无论是 <div /> 还是 <MyComponent /> 均为 React 元素。  
* 数组或 fragments。 使得 render 方法可以返回多个元素。欲了解更多详细信息，请参阅 fragments 文档。  
* Portals。可以渲染子节点到不同的 DOM 子树中。欲了解更多详细信息，请参阅有关 portals 的文档  
* 字符串或数值类型。它们在 DOM 中会被渲染为文本节点  
* 布尔类型或 null。什么都不渲染。（主要用于支持返回 test && <Child /> 的模式，其中 test 为布尔类型。）  
  
render() 函数应该为纯函数，这意味着在不修改组件 state 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。  
  
如需与浏览器进行交互，请在 componentDidMount() 或其他生命周期方法中执行你的操作。保持 render() 为纯函数，可以使组件更容易思考。  
  
### constructor()  
  
如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。  
  
在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。  
  
通常，在 React 中，构造函数仅用于以下两种情况：  
  
通过给 this.state 赋值对象来初始化内部 state。  
  
* 为事件处理函数绑定实例  
* 在 constructor() 函数中不要调用 setState() 方法。如果你的组件需要使用内部 state，请直接在构造函数中为 this.state 赋值初始 state。  
  
只能在构造函数中直接为 this.state 赋值。如需在其他方法中赋值，你应使用 this.setState() 替代。  
  
要避免在构造函数中引入任何副作用或订阅。如遇到此场景，请将对应的操作放置在 componentDidMount 中。  
  
### componentDidMount()  
  
componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。  
  
这个方法是比较适合添加订阅的地方。如果添加了订阅，请不要忘记在 componentWillUnmount() 里取消订阅  
  
你可以在 componentDidMount() 里直接调用 setState()。它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在 render() 两次调用的情况下，用户也不会看到中间状态。请谨慎使用该模式，因为它会导致性能问题。通常，你应该在 constructor() 中初始化 state。如果你的渲染依赖于 DOM 节点的大小或位置，比如实现 modals 和 tooltips 等情况下，你可以使用此方式处理。  
  
### componentDidUpdate()  
  
componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。  
  
当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求。（例如，当 props 未发生变化时，则不会执行网络请求）。  
  
```react.js  
componentDidUpdate(prevProps) {  
  // 典型用法（不要忘记比较 props）：  
  if (this.props.userID !== prevProps.userID) {  
    this.fetchData(this.props.userID);  
  }  
}  
```  
  
你也可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语句里，正如上述的例子那样进行处理，否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。不要将 props “镜像”给 state，请考虑直接使用 props。 欲了解更多有关内容，请参阅为什么 props 复制给 state 会产生 bug。  
  
如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。  
  
### componentWillUnmount()  
  
componentWillUnmount() 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。  
  
componentWillUnmount() 中不应调用 setState()，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。  
  
### shouldComponentUpdate()  
  
根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。大部分情况下，你应该遵循默认行为。  
  
当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法。  
  
此方法仅作为性能优化的方式而存在。不要企图依靠此方法来“阻止”渲染，因为这可能会产生 bug。你应该考虑使用内置的 PureComponent 组件，而不是手动编写 shouldComponentUpdate()。PureComponent 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。  
  
如果你一定要手动编写此函数，可以将 this.props 与 nextProps 以及 this.state 与nextState 进行比较，并返回 false 以告知 React 可以跳过更新。请注意，返回 false 并不会阻止子组件在 state 更改时重新渲染。  
  
我们不建议在 shouldComponentUpdate() 中进行深层比较或使用 JSON.stringify()。这样非常影响效率，且会损害性能。  
  
目前，如果 shouldComponentUpdate() 返回 false，则不会调用 UNSAFE_componentWillUpdate()，render() 和 componentDidUpdate()。后续版本，React 可能会将 shouldComponentUpdate 视为提示而不是严格的指令，并且，当返回 false 时，仍可能导致组件重新渲染。  
  
### static getDerivedStateFromProps()  
  
getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。  
  
此方法适用于罕见的用例，即 state 的值在任何时候都取决于 props。例如，实现 <Transition> 组件可能很方便，该组件会比较当前组件与下一组件，以决定针对哪些组件进行转场动画。  
  
派生状态会导致代码冗余，并使组件难以维护。 确保你已熟悉这些简单的替代方案：  
  
* 如果你需要执行副作用（例如，数据提取或动画）以响应 props 中的更改，请改用 componentDidUpdate。  
* 如果只想在 prop 更改时重新计算某些数据，请使用 memoization helper 代替。  
* 如果你想在 prop 更改时“重置”某些 state，请考虑使组件完全受控或使用 key 使组件完全不受控代替。  
  
此方法无权访问组件实例。如果你需要，可以通过提取组件 props 的纯函数及 class 之外的状态，在getDerivedStateFromProps()和其他 class 方法之间重用代码。  
  
请注意，不管原因是什么，都会在每次渲染前触发此方法。这与 UNSAFE_componentWillReceiveProps 形成对比，后者仅在父组件重新渲染时触发，而不是在内部调用 setState 时。  
  
### getSnapshotBeforeUpdate()  
  
getSnapshotBeforeUpdate() 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()。  
  
此用法并不常见，但它可能出现在 UI 处理中，如需要以特殊方式处理滚动位置的聊天线程等。  
  
应返回 snapshot 的值（或 null）。  
  
### Error boundaries  
  
Error boundaries 是 React 组件，它会在其子组件树中的任何位置捕获 JavaScript 错误，并记录这些错误，展示降级 UI 而不是崩溃的组件树。Error boundaries 组件会捕获在渲染期间，在生命周期方法以及其整个树的构造函数中发生的错误。  
  
如果 class 组件定义了生命周期方法 static getDerivedStateFromError() 或 componentDidCatch() 中的任何一个（或两者），它就成为了 Error boundaries。通过生命周期更新 state 可让组件捕获树中未处理的 JavaScript 错误并展示降级 UI。  
  
仅使用 Error boundaries 组件来从意外异常中恢复的情况；不要将它们用于流程控制。  
  
### static getDerivedStateFromError()  
  
此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state。  
  
### componentDidCatch()  
  
此生命周期在后代组件抛出错误后被调用。 它接收两个参数：  
  
* error —— 抛出的错误。  
* info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息。  
  
componentDidCatch() 会在“提交”阶段被调用，因此允许执行副作用。 它应该用于记录错误之类的情况。  
  
React 的开发和生产构建版本在 componentDidCatch() 的方式上有轻微差别。  
  
在开发模式下，错误会冒泡至 window，这意味着任何 window.onerror 或 window.addEventListener('error', callback) 会中断这些已经被 componentDidCatch() 捕获的错误。  
  
相反，在生产模式下，错误不会冒泡，这意味着任何根错误处理器只会接受那些没有显式地被 componentDidCatch() 捕获的错误。  
  
  
  
  
  
  
  
  
# 如何在React中应用样式？  
将样式应用于React组件有三种方法。  
  
## 外部样式表  
  
在此方法中，你可以将外部样式表导入到组件使用类中。 但是你应该使用className而不是class来为React元素应用样式, 这里有一个例子。  
  
```react.js  
import React from 'react';  
import './App.css';  
import { Header } from './header/header';  
import { Footer } from './footer/footer';  
import { Dashboard } from './dashboard/dashboard';  
import { UserDisplay } from './userdisplay';  
  
function App() {  
  return (  
    <div className="App">  
      <Header />  
      <Dashboard />  
      <UserDisplay />  
      <Footer />  
    </div>  
  );  
}  
  
export default App;  
```  
  
## 内联样式  
  
在这个方法中，我们可以直接将 props 传递给HTML元素，属性为style。这里有一个例子。这里需要注意的重要一点是，我们将javascript对象传递给style，这就是为什么我们使用 `backgroundColor` 而不是CSS方法`backbackground-color`。  
  
```react.js  
import React from 'react';  
  
export const Header = () => {  
  
    const heading = 'TODO App'  
  
    return(  
        <div style={{backgroundColor:'orange'}}>  
            <h1>{heading}</h1>  
        </div>  
    )  
}  
```  
  
## 定义样式对象并使用它  
  
因为我们将javascript对象传递给style属性，所以我们可以在组件中定义一个style对象并使用它。下面是一个示例，你也可以将此对象作为 props 传递到组件树中。  
  
```react.js  
import React from 'react';  
  
const footerStyle = {  
    width: '100%',  
    backgroundColor: 'green',  
    padding: '50px',  
    font: '30px',  
    color: 'white',  
    fontWeight: 'bold'  
}  
  
export const Footer = () => {  
    return(  
        <div style={footerStyle}>  
            All Rights Reserved 2019  
        </div>  
    )  
}  
```  
  
  
# 什么是 React？  
React是一个简单的javascript UI库，用于构建高效、快速的用户界面。  
  
它是一个轻量级库，因此很受欢迎。它遵循组件设计模式、声明式编程范式和函数式编程概念，以使前端应用程序更高效。  
  
它使用虚拟DOM来有效地操作DOM。  
  
它遵循从高阶组件到低阶组件的单向数据流。  
# React.PureComponent 和 React.Component 有什么区别？  
  
PureComponent 和 Component的区别是：Component需要手动实现 shouldComponentUpdate，而 PureComponent 通过浅对比默认实现了 shouldComponentUpdate 方法。  
  
浅比较(shallowEqual)，即react源码中的一个函数，然后根据下面的方法进行是不是PureComponent的判断，帮我们做了本来应该我们在 shouldComponentUpdate 中做的事情  
  
```js  
if (this._compositeType === CompositeTypes.PureClass) {  
  shouldUpdate = !shallowEqual(prevProps, nextProps) || ! shallowEqual(inst.state, nextState);  
}  
```  
  
注意： 浅比较只比较了第一层，复杂数据结构可能会导致更新问题  
  
总结: PureComponent 不仅会影响本身，而且会影响子组件，所以 PureComponent 最佳情况是展示组件  
# 什么是JSX？  
JSX即JavaScript XML。一种在React组件内部构建标签的类XML语法。JSX为react.js开发的一套语法糖，也是react.js的使用基础。React在不使用JSX的情况下一样可以工作，然而使用JSX可以提高组件的可读性，因此推荐使用JSX。  
  
```react.js  
class MyComponent extends React.Component {  
  render() {  
    let props = this.props;    
    return (  
      <div className="my-component">  
      <a href={props.url}>{props.name}</a>  
      </div>  
    );  
  }  
}  
```  
  
**优点**：  
  
* 允许使用熟悉的语法来定义 HTML 元素树；  
* 提供更加语义化且移动的标签；  
* 程序结构更容易被直观化；  
* 抽象了 React Element 的创建过程；  
* 可以随时掌控 HTML 标签以及生成这些标签的代码；  
* 是原生的 JavaScript。  
  
  
  
# constructor中super与props参数一起使用的目的是什么？  
在调用方法之前，子类构造函数无法使用this引用super()。  
  
在ES6中，在子类的constructor中必须先调用super才能引用this。  
  
在constructor中可以使用this.props  
  
* 使用props：  
  
```react.js  
class MyComponent extends React.Component {  
    constructor(props) {  
        super(props);  
        console.log(this.props);  // Prints { name: 'sudheer',age: 30 }  
    }  
}  
```  
  
* 不使用props：  
  
```react.js  
class MyComponent extends React.Component {  
    constructor(props) {  
        super();  
        console.log(this.props); // Prints undefined  
        // But Props parameter is still available  
        console.log(props); // Prints { name: 'sudheer',age: 30 }  
    }  
  
    render() {  
        // No difference outside constructor  
        console.log(this.props) // Prints { name: 'sudheer',age: 30 }  
    }  
}  
```  
  
上面的代码片段揭示了this.props行为仅在构造函数中有所不同。外部构造函数相同。  
# 什么是高阶组件？  
高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件。基本上，这是从React的组成性质派生的一种模式，我们称它们为“纯”组件， 因为它们可以接受任何动态提供的子组件，但它们不会修改或复制其输入组件的任何行为。  
  
```react.js  
const EnhancedComponent = higherOrderComponent(WrappedComponent);  
```  
  
* 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧  
* 高阶组件的参数为一个组件返回一个新的组件  
* 组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件  
  
# React中的类组件和函数组件之间有什么区别？  
  
## 类组件（Class components）  
  
* 无论是使用函数或是类来声明一个组件，它决不能修改它自己的 props。  
	* 所有 React 组件都必须是纯函数，并禁止修改其自身 props。  
* React是单项数据流，父组件改变了属性，那么子组件视图会更新。  
	* 属性 props是外界传递过来的，状态 state是组件本身的，状态可以在组件中任意修改  
	* 组件的属性和状态改变都会更新视图。  
      
```react.js  
class Welcome extends React.Component {  
  render() {  
    return (  
      <h1>Welcome { this.props.name }</h1>  
    );  
  }  
}  
ReactDOM.render(<Welcome name='react' />, document.getElementById('root'));  
```  
  
## 函数组件（functional component）  
  
函数组件接收一个单一的 props 对象并返回了一个React元素  
  
```react.js  
function Welcome (props) {  
  return <h1>Welcome {props.name}</h1>  
}  
ReactDOM.render(<Welcome name='react' />, document.getElementById('root'));  
```  
  
## 区别  
  
* 语法上  
  
两者最明显的不同就是在语法上，函数组件是一个纯函数，它接收一个props对象返回一个react元素。而类组件需要去继承React.Component并且创建render函数返回react元素，这将会要更多的代码，虽然它们实现的效果相同。  
  
* 状态管理  
  
因为函数组件是一个纯函数，你不能在组件中使用setState()，这也是为什么把函数组件称作为无状态组件。  
  
如果你需要在你的组件中使用state，你可以选择创建一个类组件或者将state提升到你的父组件中，然后通过props对象传递到子组件。  
  
* 生命周期钩子  
  
你不能在函数组件中使用生命周期钩子，原因和不能使用state一样，所有的生命周期钩子都来自于继承的React.Component中。  
  
因此，如果你想使用生命周期钩子，那么需要使用类组件。  
  
**注意**：在react16.8版本中添加了hooks，使得我们可以在函数组件中使用useState钩子去管理state，使用useEffect钩子去使用生命周期函数。因此，2、3两点就不是它们的区别点。从这个改版中我们可以看出作者更加看重函数组件，而且react团队曾提及到在react之后的版本将会对函数组件的性能方面进行提升。  
  
* 调用方式  
  
如果SayHi是一个函数，React需要调用它：  
  
```react.js  
// 你的代码   
function SayHi() {   
    return <p>Hello, React</p>   
}   
// React内部   
const result = SayHi(props) // » <p>Hello, React</p>  
```  
  
如果SayHi是一个类，React需要先用new操作符将其实例化，然后调用刚才生成实例的render方法：  
  
```react.js  
// 你的代码   
class SayHi extends React.Component {   
    render() {   
        return <p>Hello, React</p>   
    }   
}   
// React内部   
const instance = new SayHi(props) // » SayHi {}   
const result = instance.render() // » <p>Hello, React</p>  
```  
  
可想而知，函数组件重新渲染将重新调用组件方法返回新的react元素，类组件重新渲染将new一个新的组件实例，然后调用render类方法返回react元素，这也说明为什么类组件中this是可变的。  
  
  
  
  
# 什么是虚拟DOM？  
虚拟DOM（VDOM）它是真实DOM的内存表示,一种编程概念，一种模式。它会和真实的DOM同步，比如通过ReactDOM这种库，这个同步的过程叫做调和(reconcilation)。  
  
虚拟DOM更多是一种模式，不是一种特定的技术。  

# 什么是受控组件？  
在HTML当中，像`<input>,<textarea>, 和 <select>`这类表单元素会维持自身状态，并根据用户输入进行更新。但在React中，可变的状态通常保存在组件的状态属性中，并且只能用 setState() 方法进行更新。  
  
## 非受控组件  
  
非受控组件，即组件的状态不受React控制的组件，例如下边这个  
  
```react.js  
import React, { Component } from 'react';  
import ReactDOM from 'react-dom';  
  
class Demo1 extends Component {  
    render() {  
        return (  
            <input />  
        )  
    }  
}  
  
ReactDOM.render(<Demo1/>, document.getElementById('content'))  
```  
  
在这个最简单的输入框组件里,我们并没有干涉input中的value展示,即用户输入的内容都会展示在上面。如果我们通过props给组件设置一个初始默认值,defaultValue属性是React内部实现的一个属性,目的类似于input的placeholder属性。  
  
ps: 此处如果使用value代替defaultValue,会发现输入框的值无法改变  
  
## 受控组件  
  
受控组件就是组件的状态受React控制。上面提到过，既然通过设置input的value属性, 无法改变输入框值,那么我们把它和state结合在一起,再绑定onChange事件,实时更新value值就行了。  
  
```react.js  
class Demo1 extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            value: props.value  
        }  
    }  
  
    handleChange(e) {  
        this.setState({  
            value: e.target.value  
        })  
    }  
  
    render() {  
        return (  
            <input value={this.state.value} onChange={e => this.handleChange(e)}/>  
        )  
    }  
}  
```  
