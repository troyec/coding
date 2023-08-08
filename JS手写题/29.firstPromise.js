/**
 *  问题：业务需求中，经常有 只需要请求一次，以防止用户重复点击行为导致的触发重复请求
 *  传递 请求方法（执行后返回promise），返回一个新方法。
 *  连续触发时，只执行第一次
 * params: fn {Function} 请求方法（执行后返回promise）
 */
const firstPromise = (fn) => {
  let p = null;
  return (...args) => {
    return p ? p : (p = fn.apply(this, args).finally(() => p = null));
  };
}

let count = 1;
let promiseFunction = () =>
  new Promise((rs) =>
    setTimeout(() => {
      rs(count++);
    }, 1000)
  );
let firstFn = firstPromise(promiseFunction);
firstFn().then(console.log); // 1
firstFn().then(console.log); // 1
firstFn().then(console.log); // 1

setTimeout(() => {
  firstFn().then(console.log); // 2
  firstFn().then(console.log); // 2
  firstFn().then(console.log); // 2
}, 3000);