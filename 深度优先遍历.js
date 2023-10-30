// 题目： 对树进行遍历，从第一个节点开始，遍历其子节点，直到它的所有子节点都被遍历完毕，然后再遍历它的兄弟节点
//
// 输入： 上文第11题生成的tree
//
// 输出： [1, 3, 4, 2, 5]

// 递归
function deepTree(tree, arr=[]) {
    if (!tree || !tree.length) return arr
    tree.forEach((data) => {
        arr.push(data.id)
        data.children && deepTree(data.children, arr)
    })
    return arr
}

// 非递归 栈
function deepTree2(tree) {
    if (!tree || !tree.length) return
    let arr = []
    let stack = []
    for (let i=0; i<tree.length; i++) {
        stack.push(tree[i])
    }
    let node
    while (stack.length) {
        node = stack.shift()
        arr.push(node.id)
        if (node.children && node.children.length) {
            stack = node.children.concat(stack)
        }
    }
    return arr
}