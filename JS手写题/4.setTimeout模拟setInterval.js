// setTimeOut->setInterval
// 使用递归
function simulatedSetInterval(callback, delay) {
  function intervalHandler() {
    // 执行回调函数
    callback();
    // 设置一个新的setTimeout来实现循环调用
    timerId = setTimeout(intervalHandler, delay);
  }

  // 首次触发定时循环
  let timerId = setTimeout(intervalHandler, delay);

  // 返回一个函数来清除定时器
  return function () {
    clearTimeout(timerId);
  };
}

// 使用示例
console.log("Start");
const clearSimulatedInterval = simulatedSetInterval(() => {
  console.log("Delayed message every 2000ms");
}, 2000);

// 一段时间后，停止定时循环
setTimeout(() => {
  console.log("Stop the simulated interval.");
  clearSimulatedInterval(); // 调用这个函数来清除定时器
}, 10000); // 停止定时循环前等待10秒