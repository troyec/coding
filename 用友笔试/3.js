function maxGrade( nums ) {
  // write code here
  var n = nums.length
  if(n===0){
    return -1
  }
  var dp = new Array(n).fill(-1)
  dp[n-1] = nums[n-1]
  for(var i = n-2;i>=0;i--){
    if(nums[i]===0) continue
    for(let j=i+1;j<n&&j<=i+nums[i];j++){
      if(dp[j] !=-1) {
        dp[i] = dp[j] + nums[i]
        break
      }
  }
  return dp[0]
}
module.exports = {
  maxGrade : maxGrade
};