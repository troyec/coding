// 伪递归实现
function fab2(n) {
  if (n <= 0) {
    return 0;
  }
  let pre = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    const temp = curr;
    curr = pre + curr;
    pre = temp;
  }
  return curr;
}

// 动态规划
function fab1(n) {
  if (n <= 0) {
    return 0;
  }
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  }
  return dp[n];
}

// 尾递归实现
function fab3(n, pre = 0, curr = 1) {
  if (n === 0) {
    return pre;
  }
  return fab3(n - 1, curr, pre + curr);
}

const n = 10;
console.log(fab1(n));
console.log(fab2(n));
console.log(fab3(n));
