/**
 * 
 * @param {*} obj 实例对象
 * @param {*} func 构造函数
 * @returns true false
 */
// 函数的prototype属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的p1.__proto__。
const instanceOf1 = (obj, func) => {
  if (!(obj && ['object', 'function'].includes(typeof obj))) {
    return false
  }
  // Returns the prototype of an object.
  let proto = Object.getPrototypeOf(obj)

  if (proto === func.prototype) {
    return true
  } else if (proto === null) {
    return false
  } else {
    return instanceOf1(proto, func)
  }
}

const instanceOf3 = (obj,func) => {
  if(!(obj && ['object','function'].includes(typeof obj))){
    return false
  }
  let proto = Object.getPrototypeOf(obj)
  if(proto === func.prototype){
    return true
  }else if(proto === null){
    return false
  }else{
    return instanceOf3(proto,func)
  }
}
/**
 * 
 * @param {*} obj 实例对象
 * @param {*} func 构造函数
 * @returns true false
 */
const instanceOf2 = (obj, func) => {
  if (!(obj && ['object', 'function'].includes(typeof obj))) {
    return false
  }

  let proto = obj

  while (proto = Object.getPrototypeOf(proto)) {
    if (proto === null) {
      return false
    } else if (proto === func.prototype) {
      return true
    }
  }

  return false

  // while (true) {
  //   if (proto === null) {
  //     return false
  //   } else if (proto === func.prototype) {
  //     return true
  //   } else {
  //     proto = Object.getPrototypeOf(proto)
  //   }
  // }
}


let Fn = function () { }
let p1 = new Fn()

console.log(instanceOf3({}, Object))
console.log(instanceOf1(p1, Fn))
console.log(instanceOf1({}, Fn))
console.log(instanceOf1(null, Fn))
console.log(instanceOf1(1, Fn))
console.log(instanceOf1(function a() {}, Function))

console.log(11111111)


console.log(instanceOf2({}, Object))
console.log(instanceOf2(p1, Fn))
console.log(instanceOf2({}, Fn))
console.log(instanceOf2(null, Fn))
console.log(instanceOf2(1, Fn))
console.log(instanceOf1(function a() {}, Function))