// 核心思想: 每次事件触发则删除原来的定时器，建立新的定时器。跟王者荣耀的回城功能类似，你反复触
// 发回城功能，那么只认最后一次，从最后一次触发开始计时。
// 代码实现:
function debounce(fn, wait) {
  let timer = null;
  return function (...rest) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, rest);
    }, wait);
  };
}