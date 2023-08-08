var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt

var m;
var sum,n;
var sc

while(sc = read_line()){
	var arr = sc.split(' ');
  n=parseInt(arr[0]);
  m=parseInt(arr[1]);
  sum=0;
  for(var i=0;i<m;i++){
      sum=sum+n;
      n=Math.sqrt(n);
  }
  // console.log(sum.toFixed(2));
}
console.log(sum.toFixed(2));