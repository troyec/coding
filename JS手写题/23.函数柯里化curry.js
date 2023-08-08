/**
 *函数柯理化
 */
function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  }
  return function (...rest) {
    return curry(fn, ...args, ...rest);
  };
}

function add(a, b, c) {
  return a + b + c;
}

let addCurry = curry(add);
console.log(addCurry(1)(2)(3));
console.log(addCurry(1,2)(3));
console.log(addCurry(1)(2,3));
