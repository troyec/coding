function reload() {
  return new Promise((resovle,reject)=> {
    console.log('进入pending状态');
    setTimeout(()=>{
      resovle('进入fulfilled状态')
    },500)
  })
}

async function start(){
  const result1 = await reload()
  console.log(result1);
  return 'start'
}

const p1 = start()
console.log(p1);

