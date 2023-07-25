/**
 * @param {*} Array 深层嵌套数据
 * @returns Array 拍平后的数组
 */
const flat1 = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat1(cur) : cur)
  }, [])
}

const flat = (arr) => {
  return arr.reduce((pre,cur)=>{
    return pre.concat(Array.isArray(cur)? flat(cur):cur)
  },[])
}

let arr1 = [
  1,
  [ 2, 3, 4 ],
  [ 5, [ 6, [ 7, [ 8 ] ] ] ]
]
console.log(flat1(arr1))
console.log(flat(arr1));

// js原生的flat方法
/**
 * 
 * @param {*} array 深层嵌套的数据
 * @returns 新数组
 */
const flat2 = (array) => {
  return array.flat(Infinity)
}

let arr2 = [
  1,
  [ 2, 3, 4 ],
  [ 5, [ 6, [ 7, [ 8 ] ] ] ]
]

console.log(flat2(arr2))

const flat3 = (array)=>{
  const result = []
  const stack = [...array]
  while(stack.length !== 0){
    const val = stack.pop()
    if(Array.isArray(val)){
      stack.push(...val)
    }else{
      result.unshift(val)
    }
  }
  return result
}

let arr3 = [
  1,
  [ 2, 3, 4 ],
  [ 5, [ 6, [ 7, [ 8 ] ] ] ]
]
console.log(flat3(arr3))
