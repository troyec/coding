function findTriplet( arr ,  target ) {
  // write code here
  const res= [],len = arr.length
  arr.sort((a,b) => a - b)
  for(let i = 0;i < len;i++) {
    let left = i + 1,right = len - 1,iNum = arr[i]
    if(iNum > target) return res
    if(iNum === arr[i - 1]) continue
    while(left < right) {
      let lNum = arr[left],rNum = arr[right],threeSum = iNum + lNum + rNum
      if(threeSum < target) {
        left++
      }else if(threeSum > target) {
        right--
      }else {
        res.push([iNum,lNum,rNum])
        while(left < right && arr[left] === arr[left + 1]) {
          left++
        }
        while(left < right && arr[right] === arr[right - 1]) {
          right--
        }
        left++
        right--
      }
    }
  }
  return res
}
module.exports = {
  findTriplet : findTriplet
};