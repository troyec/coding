const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function findBeauty(n){
  let permutation = new Array(n);
  let visited = new Array(n+1).fill(false)
  for(let i=0;i<=n;i++){
    let target = n-i+1;
    if(!visited[target]){
      permutation[i-1] = target;
      visited[target] = true
    }else{
      for(let j=1;j<=n;j++){
        if(!visited[j]){
          permutation[i-1] = j
          visited[j] = true
          break
        }
      }
    }
  }
  return permutation
}

void async function () {
    // Write your code here
    let line = await readline()
    n = parseInt(line)
    const result = findBeauty(n)
    console.log(result.join(" "))
}()