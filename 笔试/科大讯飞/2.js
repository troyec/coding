const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let line1 = await readline()
    let [n,k] = line1.split(' ').map(it=>parseInt(it))
    let s = await readline()
    let remainingEnergy = k
    
    for(let i=0;i<n-1;i++){
      let currentChar = s[i]
      let nextChar = s[i+1]
      let energyChange = Math.abs(nextChar.charCodeAt()-currentChar.charCodeAt())

      if(nextChar.charCodeAt() > currentChar.charCodeAt()){
        remainingEnergy -= energyChange
      }else{
        remainingEnergy += energyChange
      }

      if(remainingEnergy < 0){
        console.log(-1);
        return
      }
    }
    console.log(remainingEnergy);
}()