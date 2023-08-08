/**
 * 核心要点:
1）初始值不传怎么处理
2）回调函数的参数有哪些，返回值如何处理。
 * @param {*} fn
  * @param {*} initialValue
  * @returns  {object}
 */
Array.prototype.myReduce = function (fn, initialValue) { 
  let arr = this;
  let res = initialValue ? initialValue : arr[0];
  let startIndex = initialValue ? 0 : 1;
  for (let i = startIndex; i < arr.length; i++) {
    res = fn(res, arr[i], i, arr);
  }
  return res;
}
let arr = [1, 2, 3];
let arr2 = arr.myReduce((prev, cur, index, arr) => {
  return prev + cur;
});
console.log(arr2); // 6