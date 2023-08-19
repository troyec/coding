function findMaxBeautyValue(arr) {
  const len = arr.length;
  let maxBeauty = -Infinity;
  for (let now = 0; now < len; now++) {
    for (let next = now + 1; next < len; next++) {
      maxBeauty = Math.max(maxBeauty, arr[now] * arr[next]);
    }
  }
  return maxBeauty;
}

console.log(findMaxBeautyValue([2, 0, -1, -4, 0]));