/**
 * 实现trim(去除空格)
 * @param {*} str
 * @returns {string}
 */
function trim(str) {
  return str.replace(/^\s*|\s*$/g, "");
}
console.log(trim("  123  ")); // 123

String.prototype.trim1 = function () {
  return this.replace(/^\s*|\s*$/g, "");
};
console.log("  123  ".trim1()); // 123

// 适合纯11位手机
const splitMobile = (mobile, format = '-') => {
  return String(mobile).replace(/(?=(\d{4})+$)/g, format)
}
// 适合11位以内的分割
const splitMobile2 = (mobile, format = '-') => {
  return String(mobile).replace(/(?<=(\d{3}))/, format).replace(/(?<=([\d\-]{8}))/, format)
}

console.log(splitMobile(18379802267))
console.log(splitMobile2(18379876545))