// 隐式迭代器for of
const names = ['张三', '李四', '王五']
for (const iterator of names) {
  console.log(iterator); // 张三、李四、王五
}

// const person = {
//   name: '张三',
//   age: 30
// }
// Uncaught TypeError: person is not iterable
// 普通对象默认不可迭代
// for (const iterator of person) {
//   console.log(iterator);
// }

// 显示迭代器被叫做 Symbol.iterator,每个数组都包含一个 Symbol.iterator 的属性，可以利用该属性获取显示迭代器，它拥有 显示 的 next 方法
const names1 = ['张三', '李四', '王五']
const it = names1[Symbol.iterator]() //返回 iterator 迭代器对象
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

