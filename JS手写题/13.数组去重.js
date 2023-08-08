// 使用Set
const unique1 = (arr) => {
  return [...new Set(arr)]
}
// 使用indexOf
const unique2 = (arr) => {
  let res = [];
  arr.forEach(item=>{
    if(res.indexOf(item) === -1){
      res.push(item);
    }
  })
  return res;
}
// 使用includes
const unique3 = (arr) => {
  let res = [];
  arr.forEach(item=>{
    if(!res.includes(item)){
      res.push(item);
    }
  })
  return res;
}
// 使用filter
const unique4 = (arr) => {
  return arr.filter((item,index)=>{
    return arr.indexOf(item) === index;
  })
}
// 使用reduce
const unique5 = (arr) => {
  return arr.reduce((prev,cur)=>{
    return prev.includes(cur) ? prev : [...prev,cur]
  },[])
}
// 使用Map
const unique6 = (arr) => {
  let map = new Map();
  let res = [];
  arr.forEach(item=>{
    if(!map.has(item)){
      map.set(item,true);
      res.push(item);
    }
  })
  return res;
}


let testArray = [ 1, 2, 3, 1, 2, 3, 4, 5, 6, 5, 6 ]
console.log(unique1(testArray));
console.log(unique2(testArray));
console.log(unique3(testArray));
console.log(unique4(testArray));
console.log(unique5(testArray));
console.log(unique6(testArray));