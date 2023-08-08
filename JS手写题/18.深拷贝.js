/**
 * 实现深拷贝
 * 1. 递归
 * 2. 用WeakMap解决循环引用问题
 * @param {*} obj
 * @returns {object}
 */
function deepClone(obj, map = new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj === null || typeof obj !== "object") return obj;
  // 处理循环引用
  if (map.has(obj)) return map.get(obj);
  // 处理对象
  let t = new obj.constructor();
  map.set(obj, t);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      t[key] = deepClone(obj[key], map);
    }
  }
  return t;
}
let obj = {
  a: 1,
  b: {
    c: 2,
  },
};
let obj2 = deepClone(obj);
obj2.b.c = 3;
console.log(obj.b.c); // 2