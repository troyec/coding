const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    const arr = []
    while(line = await readline()){
        // console.log(line)
        let tokens = line.split(' ')?.map(it=>parseInt(it));
        if(!tokens[0]) break;
        console.log(tokens.slice(1).reduce((pre,cur)=>pre+cur,0))
        // arr.push(tokens.slice(0,-1))
        // let a = parseInt(tokens[0]);
        // let b = parseInt(tokens[1]);
        // console.log(a + b);
    }
    // console.log(arr)
}()