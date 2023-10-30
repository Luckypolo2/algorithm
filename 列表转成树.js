// 题目： 输入一组列表如下，转化成树形结构
// 输入：
//     [
//     { id: 1, title: "child1", parentId: 0 },
//         { id: 2, title: "child2", parentId: 0 },
//         { id: 3, title: "child1_1", parentId: 1 },
//         { id: 4, title: "child1_2", parentId: 1 },
//         { id: 5, title: "child2_1", parentId: 2 }
//     ]

function listToTree(data) {
    const map = {}
    const treeData = []
    for (let i=0; i<data.length;i++) {
        map[data[i].id]= data[i]
    }
    for (let i in map) {
        if (map[i].parentId) {
            if (!map[map[i].parentId].children) {
                map[map[i].parentId].children = []
            }
            map[map[i].parentId].children.push(map[i])
        } else {
            treeData.push(map[i])
        }
    }
    return treeData
}

const data = [
    { id: 1, title: "child1", parentId: 0 },
        { id: 2, title: "child2", parentId: 0 },
        { id: 3, title: "child1_1", parentId: 1 },
        { id: 4, title: "child1_2", parentId: 1 },
        { id: 5, title: "child2_1", parentId: 2 }
    ]
console.log(listToTree(data))