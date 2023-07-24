function miniCost(n,m,volumes,s) {
  const dp = [0]
  for(let i = 1;i<=n;i++){
    dp[i] = Infinity
    let maxVol = 0
    let minVol = Infinity
    for(let j=i;j>0 && i-j+1<=m; j--){
      maxVol = Math.max(maxVol,volumes[j-1])
      minVol = Math.min(minVol,volumes[j-1])
      const cost = (i - j +1)*Math.floor((maxVol+minVol)/2)+s
      dp[i] = Math.min(dp[i],dp[j-1]+cost)
    }
  }
  return dp[n]
}

// 输入输出
var n,m,volumes,s
for(let i=0;i<2;i++){
  let arr = read_line().split(' ').map(v=>parseInt(v))
  if(i===0){
    [n,m,s] = arr
  }else{
    volumes = arr
  }
}

// print(parseInt(miniCost(n,m,volumes,s)))
console.log(parseInt(miniCost(n,m,volumes,s)))
