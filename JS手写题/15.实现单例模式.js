/**
 * 单例模式：保证一个类仅有一个实例，并提供一个访问它的全局访问点
 * 核心要点: 用闭包和Proxy属性拦截
 * 1. 闭包: 用闭包保存单例对象
 * 2. Proxy属性拦截: 用Proxy拦截对象的属性读取操作，当第一次读取属性时，实例化对象并保存到闭包中，以后再读取属性时直接返回闭包中的对象
 * @param {*} fn
 * @param {*} args
 * @returns  {object}
 */
function proxy(func) {
  let instance = null;
  return new Proxy(func, {
    construct(target, args) {
      if (!instance) {
        instance = Reflect.construct(func, args);
      }
      return instance;
    },
  });
}