// 题目： 输入一个字符串，找到第一个不重复字符的下标
//
// 输入： 'abcabcde'
//
// 输出： 6

function findOneStr(str) {
  if (!str) return -1
  const map = new Map()
  const arr = str.split("")
  arr.forEach((item) => {
    let val = map.get(item)
    if (val) {
      map.set(item, val + 1) // 哈希中存在，则计数加1
    } else {
      map.set(item, 1) // 哈希中不存在，则设定数量为1
    }
  })
  // 遍历哈希,查找哈希中数量为1的key，则为第一个不重复字符
  for (let i=0; i< arr.length;i++) {
    if (map.get(arr[i]) === 1) return i
  }
  return -1
}

console.log(findOneStr('abcabcde'))
//
// const object = {
//   'a': 1,
//   'b': 2,
//   'c': 3
// }
// const arr = ['a', 'v', 'c']
// for (let key of arr) {
//   console.log(key)
// }
