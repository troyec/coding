const getType = (s) => {
  const r = Object.prototype.toString.call(s)
  console.log(r);
  return r.replace(/\[object (.*?)\]/, '$1').toLowerCase()
}

console.log(getType())
console.log(getType(null))
console.log(getType(1))
console.log(getType('前端胖头鱼'))
console.log(getType(true))
console.log(getType(Symbol('前端胖头鱼')))
console.log(getType({}))
console.log(getType([]))
console.log(getType(/123/));
console.log(getType(Symbol('123')));