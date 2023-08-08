var __readline = require('readline-sync')
__readline.setDefaultOptions({prompt: ''})
var read_line = __readline.prompt

// 输入处理
var lines = []
while((line = read_line()) !== ''){
  lines.push(line)
}
let n = parseInt(lines[0])
let weights = lines[1].split(' ').map(item=>parseInt(item))
let lins = lines.slice(2).map(item=>item.split(' ').map(item=>parseInt(item)))
const graph = new Array(n + 1).fill(null).map(() => []);
for (let i = 0; i < n - 1; i++) {
  const [u, v] = lins[i];
  graph[u].push(v);
  graph[v].push(u);
}


// 判断一个数是否为质数
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

// DFS遍历树，计算染红节点数量
function dfs(node, parent, graph, weights) {
  let redNodes = 0;

  for (let neighbor of graph[node]) {
      if (neighbor !== parent) {
          if (isPrime(weights[node - 1] + weights[neighbor - 1])) {
              redNodes++;
          }
          redNodes += dfs(neighbor, node, graph, weights);
      }
  }

  return redNodes;
}

const maxRedNodes = dfs(1, -1, graph, weights);
console.log(maxRedNodes);