function reversePairs( nums ) {
  // write code here
  if(nums.length === 0) return 0
  return reversePairsRecu(nums,0,nums.length - 1)
}
const reversePairsRecu = (nums,left,right) => {
  if(left === right) {
    return 0
  }else {
    const mid = Math.floor((left + right) / 2)
    const n1 = reversePairsRecu(nums,left,mid)
    const n2 = reversePairsRecu(nums,mid+1,right)
    let ret = n1 + n2

    let i = left
    let j= mid + 1  
    while(i <= mid) {
      while(j <= right && nums[i] > 2 * nums[j]) {
        j++
      }
      ret += j - mid - 1;
      i++
    }
    const sorted = new Array(right - left + 1)
    let p1 = left,p2 = mid + 1
    let p = 0
    while(p1 <= mid || p2 <= right) {
      if(p1 > mid) { 
        sorted[p++] = nums[p2++];
      }else if(p2 > right){
        sorted[p++] = nums[p1++];
      }else {
        if(nums[p1] <nums[p2]){
          sorted[p++] = nums[p1++]
        }else{
          sorted[p++] = nums[p2++]
        }
      }
    }
    for(let i = 0;i < sorted.length;i++) {
      nums[left + i] = sorted[i]
    }
    return ret
  }
}
module.exports = {
  reversePairs : reversePairs
};