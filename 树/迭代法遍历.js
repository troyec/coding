// 利用栈

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 前序遍历：中-左-右
var preorderTraversal = function(root) {
  let res = []
  if(!root) return res
  const stack = [root]
  // 指针
  let cur = null
  while(stack.length){
      cur = stack.pop()
      res.push(cur.val)
      // 右先入栈
      cur.right && stack.push(cur.right)
      cur.left && stack.push(cur.left)
  }
  return res
};

// 后序遍历：中-右-左->翻转
var postorderTraversal = function(root){
  let res = []
  if(!root) return res
  const stack = [root]
  // 指针
  let cur = null
  while(stack.length){
      cur = stack.pop()
      res.push(cur.val)
      // 左先入栈
      cur.left && stack.push(cur.left)
      cur.right && stack.push(cur.right)
  }
  return res.reverse()
}

// 中序遍历不一样
var inorderTraversal = function(root,) {
  let res = []
  const stack = [];
  let cur = root;
  while(stack.length || cur) {
      if(cur) {
          stack.push(cur);
          // 左
          cur = cur.left;
      } else {
          // --> 弹出 中
          cur = stack.pop();
          res.push(cur.val); 
          // 右
          cur = cur.right;
      }
  };
  return res;
};
