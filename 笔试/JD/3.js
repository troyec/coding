const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  let [n, m] = (await readline()).split(" ").map(Number);
  let map = [];
  for (let i = 0; i < n; i++) {
    line = (await readline()).split("");
    map.push(line);
  }
  const dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(4000);
  }
  dp[0][0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === "*") {
        continue;
      }
      let lastMin0 = 4000;
      for (let k0 = 0; k0 <= j; k0++) {
        if (map[i][j - k0] === "*") {
          break;
        }
        lastMin0 = Math.min(lastMin0, dp[i][j - k0]);
      }
      let lastMin1 = 4000;
      for (let k0 = 0; k0 <= i; k0++) {
        if (map[i - k0][j] === "*") {
          break;
        }
        lastMin1 = Math.min(lastMin1, dp[i - k0][j]);
      }
      let lastMin2 = 4000;
      for (let k0 = 0; k0 <= i && k0 <= j; k0++) {
        if (map[i - k0][j - k0] === "*") {
          break;
        }
        lastMin2 = Math.min(lastMin2, dp[i - k0][j - k0]);
      }
      dp[i][j] = Math.min(dp[i][j], lastMin0 + 1, lastMin1 + 1, lastMin2 + 1);
    }
  }
  if (dp[n - 1][m - 1] >= 4000) {
    return -1;
  } else {
    return dp[n - 1][m - 1];
  }
})();
