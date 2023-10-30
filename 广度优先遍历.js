// 题目： 以横向的维度对树进行遍历，从第一个节点开始，依次遍历其所有的兄弟节点，再遍历第一个节点的子节点，一层层向下遍历
//
// 输入： 上文第11题生成的tree
//
// 输出： [1, 2, 3, 4, 5]

// 队列
function rangeTree(tree) {
    if (!tree && !tree.length) return
    const arr = []
    const queue = [tree]
    while (queue.length) {
        const node = queue.shift()
        arr.push(node.id)
        if (node.children && node.children.length) {
            queue.push(...node.children)
        }
    }
    return arr
}