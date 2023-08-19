var result = [];
function getRandomArr(len = 5, min = 2, max = 32) {
    // 递归基准情况：当结果数组长度达到指定长度时，终止递归
    if (result.length === len) {
      return result;
    }
    // 生成随机数
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // 判断随机数是否已存在于结果数组中
    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
    // 递归调用
    return getRandomArr(len, min, max);
  }
console.log(getRandomArr());
