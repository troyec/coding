/**
 * 与call方法类似，只是参数的传递方式不同
 * @param {*} context 函数执行上下文this
 * @param  {...any} args 参数列表
 * @returns 函数执行的结果
 */
Function.prototype.myApply = function (context, args) {
  if(!context){
    // 浏览器和nodejs环境下的全局对象
    context = typeof window === 'undefined' ? global : window
  }
  // 处理context为基本数据类型的情况
  context = typeof context === 'object' ? context : Object(context)
  // 生成唯一的key值，防止覆盖原有属性
  const key = Symbol('key')
  // this指向调用call的函数
  context[key] = this
  // 执行函数
  const result = context[key](...args)
  // 删除添加的属性
  delete context[key]
  // 返回执行结果
  return result
}

let fn = function (name, sex) {
  console.log(this, name, sex)
}


// fn.myApply('', ['前端胖头鱼', 'boy'])
fn.myApply({ name: '前端胖头鱼', sex: 'boy' }, ['前端胖头鱼', 'boy'])