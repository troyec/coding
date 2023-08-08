/**
 * 核心要点:
1）回调函数的参数有哪些，返回值如何处理。
2）不修改原来的数组。
 * @param {*} fn
 * @param {*} args
 * @returns  {object}
 */
Array.prototype.myMap = function (fn, context) {
  let arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn.call(context, arr[i], i, arr));
  }
  return res;
}

let arr = [1, 2, 3];
let arr2 = arr.myMap((item, index, arr) => {
  return item * 2;
});
console.log(arr2); // [2, 4, 6]