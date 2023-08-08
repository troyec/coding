/**
 * 核心要点:
1）创建一个全新的对象，这个对象的proto要指向构造函数的原型对象
2）执行构造函数
3）返回值为object类型则作为new方法的返回值返回，否则返回上述全新对象
  * @param {*} fn
  * @param {*} args
  * @returns  {object}
 */

function myNew(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  return result instanceof Object ? result : obj;
}

let Person = function (name, sex) {
  this.name = name
  this.sex = sex
}

Person.prototype.showInfo = function () {
  console.log(this.name, this.sex)
}

let p1 = myNew(Person, 'troyecc', 'male')
console.log(p1);