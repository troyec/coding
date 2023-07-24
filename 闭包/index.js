// 能够访问其它函数作用域中变量的函数就是闭包函数
// 1.存在函数嵌套；2.访问了其他函数中的变量
// 延长作用域存活时间
function wait(mes) {
  setTimeout(()=>{
    console.log(mes);
  },1000)
}

wait('hello')

// #######################

var fn
function foo(){
  var a = 2
  function baz() {
    console.log(a); 
  }
  fn = baz // 将baz分配给全局变量
}

function bar() {
  fn() // 闭包
}
foo()
bar()