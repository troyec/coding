// 要将虚拟DOM转换为真实DOM，通常使用以下步骤：
// 1. 创建一个空的真实DOM根节点，通常是一个空的`<div>`元素。
// 2. 遍历虚拟DOM树，对每个虚拟DOM节点执行以下操作：
//    - 创建对应的真实DOM节点，可以使用`document.createElement()`方法。
//    - 将虚拟DOM节点的属性设置到真实DOM节点上，可以使用`element.setAttribute()`方法。
//    - 递归处理虚拟DOM节点的子节点，将它们转换为真实DOM节点，并将它们添加到当前真实DOM节点的子节点列表中。
// 3. 将根节点的真实DOM节点插入到文档中的适当位置，可以使用`document.appendChild()`或其他DOM操作方法。
var container = document.getElementById("app");
function render(vnode) {
    // 创建根节点的真实DOM节点
    const node = document.createElement(vnode.type);

    // 设置虚拟DOM节点的属性到真实DOM节点上
    for (let prop in vnode.props) {
      if (prop !== "children") {
        node.setAttribute(prop, vnode.props[prop]);
      }
    }

    // 递归处理虚拟DOM节点的子节点
    if (vnode.props.children) {
      vnode.props.children.forEach(child => {
        if (typeof child === "string") {
          // 如果子节点是文本节点，创建文本节点并添加到当前真实DOM节点的子节点列表中
          const textNode = document.createTextNode(child);
          node.appendChild(textNode);
        } else {
          // 如果子节点是虚拟DOM节点，递归调用render()函数将其转换为真实DOM节点并添加到当前真实DOM节点的子节点列表中
          node.appendChild(render(child));
        }
      });
  }
  return node;
}
// 将根节点的真实DOM节点插入到容器中
container.appendChild(render(vnode));