// compose函数
// 实现一个compose函数，compose可以将多个函数组合成一个函数，从右到左执行（管道pipe从左到右）
// compose(fn1, fn2, fn3, fn4) 等价于 (...args) => fn1(fn2(fn3(fn4(...args))))
// 例如：
// const add = (x) => x + 1 
// const multiply = (x, y) => x * y
// const multiplyAdd = compose(add, multiply)
// console.log(multiplyAdd(3, 4)) // 13
const compose = (...fns) => {
  return fns.reduce((pre, cur) => {
    return (...args) => {
      console.log(args);
      return pre(cur(...args))
    }
    // 初始时为一个函数
  },(val)=>val)
}
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a);
console.log(a(1)); // 1+4+3+2+1=11
