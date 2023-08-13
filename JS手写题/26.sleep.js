/**
 * 实现延时函数(休眠)
 */
const sleep = (func, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(func())
    }, delay)
  })
}
const sleep2 = async (func, delay) => {
  return await new Promise((resovle)=>{
    setTimeout(() =>{
      resovle(func())
    }, delay)
  })
}

const consoleStr = (str) => {
  return () => {
    console.log(str)
    return str
  }
}

const doFns = async () => {
  const name = await sleep(consoleStr('troye'), 1000)
  const sex = await sleep(consoleStr('boy'), 1000)
  const age = await sleep2(consoleStr(24), 1000)

  console.log(name, sex, age)
}

doFns()