function findTreeNode(tree, func) {
    if (!tree && !tree.length) return null
    for (let i=0; i<tree.length; i++) {
        // 先查找
        if (func(tree[i])) return tree[i]
        if (tree[i].children) {
            const res = findTreeNode(tree[i].children, func)
            // 递归掉用后再检查结果
            if (res) {
                return res
            }
        }
    }
    return null
}