// 1.改变原数组的7个方法
// push、pop、unshift、shift、reverse、sort、splice

// 返回数组长度
var arr = [10, 20, 30, 40]
res = arr.push(20)
console.log(arr);//[10,20,30,40,20]
console.log(res);//5

// 返回弹出末尾的值
var arr = [10, 20, 30, 40] 
res =arr.pop()
console.log(arr);//[10,20,30]
console.log(res);//40

// 返回数组长度
var arr = [10, 20, 30, 40]
res=arr.unshift(99)
console.log(arr);//[99,10,20,30,40]
console.log(res);//5

// 返回删除掉的那个数据
var arr = [10, 20, 30, 40]
res=arr.shift()
console.log(arr);//[20,30,40]
console.log(res);//10

// 返回翻转好的数组
var arr = [10, 20, 30, 40]
res=arr.reverse()
console.log(arr);//[40,30,20,10]
console.log(res);//[40,30,20,10]

// 语法一: 数组名.sort()                       会排序 会按照位排序(unicode排)
// 语法二: 数组名.sort(function (a,b) {return a-b})  会正序排列
// 语法三: 数组名.sort(function (a,b) {return b-a})  会倒序排列
var arr = [2, 63, 48, 5, 4, 75, 69, 11, 23]
var arr1 = arr.sort()
console.log(`排序后的数组：${arr1}`);
console.log(arr);
arr.sort(function(a,b){return(a-b)})
console.log(arr);
arr.sort(function(a,b){return(b-a)})
console.log(arr);

console.log('****************');
// 截取删除：数组名.splice(开始索引,多少个)
// 返回值是一个新数组里面就是你截取出来的数据
var arr = [2, 63, 48, 5, 4, 75]
res = arr.splice(1,2)
console.log(arr);
console.log(res);
//******************************
//splice() 语法二
// 插入：数组名.splice(开始索引,多少个,你要插入的数据)
// 返回值: 是一个新数组 里面就是你截取出来的数据
var arr = [2, 63, 48, 5, 4, 75]
res = arr.splice(1,1,99999,88888)
console.log(arr);
console.log(res);

// 2.不改变原数组的5个方法
// concat、join、slice、indexOf、lastIndexOf

// 合并数组
// 语法: 数组名.concat( 数据)
var arr = [10, 20, 10, 30, 40, 50, 60]
res = arr.concat(20,"小敏",50)
console.log(arr) 
console.log(res);

// 数组转字符串
// 语法: 数组名.join(' 连接符')
var arr = [10, 20, 10, 30, 40, 50, 60]
res = arr.join(",")
console.log(arr)
console.log(res);

// 截取部分数据
// 语法: 数组名.slice( 开始索引, 结束索引)
// 左闭右开
var arr = [10, 20, 10, 30, 40, 50, 60]
res = arr.slice(1,4)
console.log(arr)
console.log(res);

// 从左检查数组中有没有这个数值
// 如果有就返回该数据第一次出现的索引；如果没有返回 -1
var arr = [10, 20, 10, 30, 40, 50, 60]
res = arr.lastIndexOf(50)
console.log(arr) 
console.log(res);
//*************************************
//lastIndexOf 语法二 (从那个位置开始查询)
var arr = [10, 20, 10, 30, 40, 50, 60]
res = arr.lastIndexOf(50,4)
console.log(arr)
console.log(res);

// 从右检查数组中有没有这个数值
var arr = [10, 20, 10, 30, 40, 50, 60]
res = arr.lastIndexOf(50)
console.log(arr) 
console.log(res);
//*************************************
//lastIndexOf 语法二
var arr = [10, 20, 10, 30, 40, 50, 60]
res = arr.lastIndexOf(50,4)
console.log(arr)
console.log(res);



// 3.ES6新增7个方法
// forEach、map、filter、every、some、find

// forEach()   用来循环遍历的 for
// 语法: 数组名.forEach(function (item,index,arr) {})
var arr = [1, 2, 3, 4, 5]
console.log('原始数组 : ', arr);
var res = arr.forEach((item,index,arr)=>{
  console.log(item, "------", index, "-------", arr);
})
console.log(res);//undefined

// map  映射数组的
// 语法: 数组名.map(function (item,index,arr) {})
// 作用: 就是用来映射,由一个数组通过运算得到新的数组
var arr = [1, 2, 3, 4, 5]
console.log('原始数组 : ', arr);
var res = arr.map((item,index,arr)=>{
  return item*100
})
console.log(res);//[ 100, 200, 300, 400, 500 ]

// filter  过滤数组
// 语法: 数组名.filter(function (item,index,arr) {})
// 返回值: 如果有就是过滤(筛选)出来的数据 保存在一个数组中；如果没有返回一个空数组
var arr = [1, 2, 3, 4, 5]
console.log('原始数组 : ', arr);
var res = arr.filter((item,index,arr)=>{
  return item>2
})
console.log(`过滤后的数组为:${res}`);

// every  判断数组是不是满足所有条件
// 语法: 数组名.every(function (item,index,arr) {})
var arr = [1, 2, 3, 4, 5]
console.log('原始数组 : ', arr);
var res = arr.every((item,index,arr)=>{
  return item>0
})
console.log(res);//打印结果  true

// some（） 数组中有没有满足条件的
var arr = [1, 2, 3, 4, 5]
console.log('原始数组 : ', arr);
var res = arr.some(function (item) {
    return item > 3
})
console.log(res);//true

// find（）用来获取数组中满足条件的第一个数据
// 语法: 数组名.find(function (item,index,arr) {})
var arr = [1, 2, 3, 4, 5]
console.log('原始数组 : ', arr);
var res = arr.find(function (item) {
    return item > 3
})
console.log(res)//4

// reduce（）叠加后的效果,很常用
// 语法: 数组名.reduce(function (prev,item,index,arr) {},初始值)
// prev为前一次的结果，item为当前项
var arr = [1, 2, 3, 4, 5]
var res = arr.reduce((pre,item)=>{
  return pre *= item
},1)
console.log(res);