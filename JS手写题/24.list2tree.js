/**
 * map实现list转tree
 */
const list2tree = (list) => {
  const [map, treeData] = [{}, []];
  // 为每一个元素添加一个children属性、id
  for (let i = 0; i < list.length; i++) {
    // map存储id与pid的映射关系
    map[list[i].id] = i;
    list[i].children = [];
  }

  for (let i = 0; i < list.length; i++) {
    const node = list[i];
    if (node.pid && list[map[node.pid]]) {
      list[map[node.pid]].children.push(node);
    } else {
      // 如果没有父节点，就是根节点
      treeData.push(node);
    }
  }
  return treeData;
}

const arr = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 1},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门4', pid: 3},
  {id: 5, name: '部门5', pid: 4},
]

console.log(list2tree(arr));