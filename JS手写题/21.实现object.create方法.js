/**
 * 作用：用于创建一个新对象的方法。它的作用是以指定的原型对象作为新对象的原型，从而创建一个继承了指定原型的新对象。
 * 1.创建一个空对象
 * 2.将空对象的原型指向构造函数的原型
 * 3.将空对象赋值给构造函数内部的this
 * 4.判断构造函数的返回值类型，如果是值类型，返回this，如果是引用类型，就返回这个引用类型的对象
 * @param {*} obj
 * @returns {object}
 * 
 */
function create(obj) {
  let F = function () { };
  F.prototype = obj;
  return new F();
}
let obj = {
  a: 1,  
  b: {
    c: 2,
  },
};
let obj2 = create(obj);