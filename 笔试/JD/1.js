const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let str = await readline();
  function maxCandyCount(colors) {
    let maxCount = 1;
    for (let i = 1; i < colors.length; i++) {
      if (colors[i] === colors[i - 1]) {
        return maxCount;
      } else {
        maxCount++;
      }
    }
    return maxCount;
  }
  console.log(maxCandyCount(str));
})();
