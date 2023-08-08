/**
 * 实现延时函数
 */
const sleep = (func, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(func())
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
  const age = await sleep(consoleStr(24), 1000)

  console.log(name, sex, age)
}

doFns()