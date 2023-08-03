/**
 * 
 * @param {*} context 函数执行上下文this
 * @param  {...any} args 参数列表
 * @returns 函数执行的结果
 */
Function.prototype.myBind = function (context, ...args) {
  if(typeof this !== 'function'){
    throw new TypeError('Bind must be called on a function')
  }
  let self = this
  let fBound = function(){
    self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)))
  }
  fBound.prototype = Object.create(self.prototype)
  return fBound
}

// 测试
// 1. 普通调用
const showName = function (sex, age) {
  console.log(this, sex, age)
}

const Person = function (name) {
  this.name = name
}

Person.prototype.showName = function (age) {
  console.log(this, this.name, age)
}

const bindPerson = Person.bind(null, 'boy')
const p1 = new bindPerson('前端胖头鱼')

p1.showName(100)


showName.myBind({ name: '前端胖头鱼' }, 'boy')(100)