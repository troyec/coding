class TreeNode1{
  public val:number
  public left:TreeNode1|null
  public right:TreeNode1|null
  constructor(val?:number,left?:TreeNode1,right?:TreeNode1){
    this.val = (val===undefined ? 0:val)
    this.left = (left===undefined ? null:left)
    this.right = (right===undefined ? null:right)
  }
}