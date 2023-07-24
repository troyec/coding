var inorderTraversal = function(root) {
  let res = []
  // 确定递归函数的参数和返回值
  // 定义函数
  const dfs = function(root){
      // 确定终止条件
      if(!root){
          return
      }
      // 确定单层递归逻辑
      dfs(root.left)
      res.push(root.val)
      dfs(root.right)
  }
  //只使用一个参数 使用闭包进行存储结果
  dfs(root)
  return res
};