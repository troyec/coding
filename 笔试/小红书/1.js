const caculateTime = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i += 2) {
    startTime = new Date(`2023-08-06T${arr[i]}:00`);
    endTime = new Date(`2023-08-06T${arr[i + 1]}:00`);
    if (startTime > endTime) {
      endTime.setDate(endTime.getDate() + 1);
    }
    const time = endTime - startTime;
    total += time / (1000 * 60);
  }
  return total;
};
// var arr
// while(time = read_line()){
//   arr.push(time)

//   print(sum.toFixed(2));
// }
arr = ["09:00", "12:00", "15:00", "17:00"];
console.log(caculateTime(arr));
