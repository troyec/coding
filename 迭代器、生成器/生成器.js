// 生成器函数提供了一个强大的选择：它允许你定义一个包含自有迭代算法的函数，同时它可以自动维护自己的状态。
function* simple() {
  for (let i = 0; i < 3; i++){
    // 使用 yield 控制暂停迭代
    yield console.log(i);
  }
}
const s = simple()
s.next()
s.next()
s.next()
s.next()

// yield 相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次 next方法，执行一段代码
function* add(){
  console.log('开始');
  // yield 后面的内容被叫做 value，并且 yield 包含返回值
  const value1 = yield "请输入第一次的值"
  console.log(`第一次的值为${value1}`);
  const value2 = yield "请输入第二次的值"
  console.log(`第二次得值为${value2}`);
  return value1+value2
}
// next 方法可以传递实参，作为 yield 语句的返回值
let result
const gen = add()
// 开始
result = gen.next()
console.log(result);
// 第一次输入值
result = gen.next(35)
console.log(result);
// 第二次输入值
result = gen.next(7)
console.log(result);
