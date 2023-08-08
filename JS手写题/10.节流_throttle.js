// 节流的核心思想: 如果在定时器的时间范围内再次触发，则不予理睬，等当前定时器 完成 ，才能启动下
// 一个定时器任务。这就好比公交车，10 分钟一趟，10 分钟内有多少人在公交站等我不管，10 分钟一到
// 我就要发车走人！

// 节流的实现方式有两种，一种是使用时间戳，一种是设置定时器。
// 使用时间戳的实现方式，事件会立刻执行，然后每隔一段时间执行一次，类似于 setInterval。
// 使用定时器的实现方式，事件会在 n 秒后第一次执行，当最后一次事件触发后，还会再执行一次事件，
// 类似于 setTimeout。
function throttle1(fn, delay) {
  let preTime = 0;
  return function (...rest) {
    let nowTime = Date.now();
    if (nowTime - preTime > delay) {
      fn.apply(this, rest);
      preTime = nowTime;
    }
  };
}

function throttle2(fn, delay) {
  let timer = null;
  return function (...rest) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, rest);
        timer = null;
      }, delay);
    }
  };
}