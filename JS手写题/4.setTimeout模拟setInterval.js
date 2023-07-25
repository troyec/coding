// setTimeOut->setInterval
function mySetInterval(fn, timeout) {
  let timer = null;
  const interval = () => {
    timer = setTimeout(() => {
      fn();
      interval();
    }, timeout);
  };

  interval();

  return () => {
    clearTimeout(timer);
  }
}
const clear = mySetInterval(() => { 
  console.log('hello world');
}, 1000);

setTimeout(() => {
  clear();
}, 3000);