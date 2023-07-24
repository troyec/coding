function reload(b) {
  return new Promise((resovle,reject)=> {
    console.log('进入pending状态');
    setTimeout(()=>{
      if(b){
        resovle('进入fulfilled状态')
      }else{
        reject('进入rejected状态')
      }
    },500)
  })
}

const p1 = reload(1)
p1.then((data)=>{
  console.log(data);
}).finally(()=>{
  console.log('p1已敲定');
})

const p2 = reload(false)
p2.catch((data)=>{
  console.log(data);
}).finally(()=>{
  console.log('p2已敲定');
})

console.log('****************');
// 链式调用
const p3 = reload(1)
p3.then((data)=>{
  console.log(data);
  return '进入第二次 promise'
}).then((data)=>{
  console.log(data);
  return '进入第三次 promise'
}).then((data)=>{
  console.log(data);
  console.log('第三次结束');
})