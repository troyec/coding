/**
 * 递归实现树转链表
 * 
 */

const tree2list = (tree,res = []) => {
  res.push(tree);
  if (tree.children && tree.children.length > 0) {
    for(item of tree.children) {
      tree2list(item,res);
    }
  }
  return res;
}

const tree = {
  id: 1,
  name: "部门1",
  pid: 0,
  children: [
    {
      id: 2,
      name: "部门2",
      pid: 1,
      children: []
    },
    {
      id: 3,
      name: "部门3",
      pid: 1,
      children: [
        {
          id: 4,
          name: "部门4",
          pid: 3,
          children: [
            {
              id: 5,
              name: "部门5",
              pid:4,
              children: []
            }
          ]
        }
      ]
    }
  ]
}

console.log(tree2list(tree));