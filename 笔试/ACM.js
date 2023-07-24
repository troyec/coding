// 输入
// readline()或者read_line()
var n,m,volumes,s
for(let i=0;i<2;i++){
  let arr = readline().split(' ').map(v=>parseInt(v))
  if(i===0){
    [n,m,s] = arr
  }else{
    volumes = arr
  }
}

let count = 0
while (line = readline()) {
  var lines = line.split(' ');
  var a = parseInt(lines[0]);
  var b = parseInt(lines[1]);
  print(a + b);
  count++
}

// 输出
console.log('输出');
// 有些可以print
print('输出')