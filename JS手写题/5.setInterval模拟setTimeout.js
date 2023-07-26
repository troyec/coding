// setInterval->setTimeOut
const mySetTimeout = (fn, timeout) => {
  let timer = null;
  timer = setInterval(()=>{
    // 执行回调函数
    fn();
    // 清除interval以停止循环执行
    clearInterval(timer);
  },timeout)
}

// 使用示例
console.log("Start");
mySetTimeout(() => {
  console.log("Delayed message after 2000ms");
}, 2000);