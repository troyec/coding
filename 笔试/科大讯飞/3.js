const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
function countUnique(n,arr1,arr2){
  let subArrays = new Set()
  for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
      let subArrays1 = arr1.slice(i,j+1);
      let subArrays2 = arr2.slice(i,j+1);

      subArrays.add(JSON.stringify(subArrays1));
      subArrays.add(JSON.stringify(subArrays2))
    }
    
  }
  return subArrays.size
}

void async function () {
    // Write your code here
    let line = await readline()
    n = parseInt(line)
    let line2 = await readline()
    let line3 = await readline()
    arr1 = line2.split(' ').map(it=>parseInt(it))
    arr2 = line3.split(' ').map(it=>parseInt(it))
    console.log(countUnique(n,arr1,arr2))
}()