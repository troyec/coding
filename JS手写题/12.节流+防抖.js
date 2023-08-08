// 现在我们可以把 防抖 和 节流 放到一起，为什么呢？因为防抖有时候触发的太频繁会导致一次响应都没
// 有，我们希望到了固定的时间必须给用户一个响应，事实上很多前端库就是采取了这样的思路。
function throttle(fn, delay) {
  let last = 0, timer = null;
  return function (...rest) {
    let now = Date.now();
    if (now - last < delay) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(this, rest);
      }, delay);
    } else {
      // 这个时候表示时间到了，必须给响应
      last = now;
      fn.apply(this, rest);
    }
  }
}