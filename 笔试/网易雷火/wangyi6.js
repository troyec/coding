// 输入描述:两个数a和b，且 (a < b,a>=1，b<= 10^6)
// 操作：a=a+1，b=b+1，a=a|b
// 输出描述:输出最少进行多少次上述操作后 (每次只能执行一种操作)，使得 a 和 b相等。
// 输入例子1:3 19
// 输出例子1:1
function findStep(a, b) {
    let count = 0;
    while (a !== b) {
        if (a < b) {
            a = a + 1;
        } else {
            a = a | b;
        }
        count++;
    }
    return count;
}
console.log(findStep(3, 19));