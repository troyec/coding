function curry(fn, ...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...rest) {
      return curry(fn, ...args, ...rest);
    };
}