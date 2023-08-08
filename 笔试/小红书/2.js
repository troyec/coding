var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt

// 输入处理
var lines = []
while((line = read_line()) !== ''){
  lines.push(line)
}
let n = parseInt(lines[0])
let line2 = lines[1].split(' ').map(item=>parseInt(item))
let T = line2[0],H = line2[1]
let tasks = lines.slice(2).map(item=>item.split(' ').map(item=>parseInt(item)))

const getMaxHappiness = (T,H,tasks)=>{
  const dp = Array.from(Array(T+1),()=>Array(H+1).fill(0))
  for(const task of tasks){
    const [t,h,a] = task
    for (let i = T; i >= t; i--) {
      for (let j = H; j >= h; j--) {
        dp[i][j] = Math.max(dp[i][j],dp[i-t][j-h]+a)
      }
    }
  }
  return dp[T][H]
}
console.log(getMaxHappiness(T,H,tasks));