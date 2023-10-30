//题目： 给定一个数组 nums 和一个目标值 target，在该数组中找出和为目标值的两个数
//
// 输入： nums: [8, 2, 6, 5, 4, 1, 3] ； target:7
//
// 输出： [2, 5]

// 哈希
function twoNumAdd(arr, target) {
  // 首先判断是否为数组，如果是数组则进行后续操作，否则返回空数组
  if (Array.isArray(arr)) {
    const map = new Map()
    for (let i=0; i<arr.length;i++) {
      if (map.get(target-arr[i]) !== undefined) {
        return [target-arr[i], arr[i]]
      } else {
        map.set(arr[i], i)
      }
    }
  }
  return []
}

// 暴力
function twoNumAdd2(arr, target) {
  if (Array.isArray(arr)) {
    for (let i=0; i<arr.length;i++) {
      for (let j=i+1; j<arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return [arr[i], arr[j]]
        }
      }
    }
  }
  return []
}

console.log('哈希:' + twoNumAdd([8, 2, 6, 5, 4, 1, 3], 7))
console.log('暴力:' + twoNumAdd2([8, 2, 6, 5, 4, 1, 3], 7))
