// 题目： 给定一个数组nums，判断 nums 中是否存在三个元素a，b，c，使得 a + b + c = target，找出所有满足条件且不重复的三元组合
// 输入： nums: [5, 2, 1, 1, 3, 4, 6] ；target:8
// 输出： [[1, 1, 6], [1, 2, 5], [1, 3, 4]]
function findThree(arr, target) {
  let result = []
  // 从小到大排序
  arr.sort((a,b)=> a - b)
  // 给左右指针让位
  for (let i=0; i<arr.length-2; i++) {
    // 遇到重复 跳出循环
    if (i && arr[i] === arr[i-1]) continue
    let left = i + 1
    let right = arr.length - 1

    while(left < right) {
      let sum = arr[i] + arr[left] + arr[right]
      if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      } else {
        result.push([arr[i], arr[left++], arr[right--]]) // 先取arr[left] 再 left++
      }
    }
    // 重复跳过
    while(arr[left] === arr[left - 1] ){
      left++
    }
    while(arr[right] === arr[right + 1]) {
      right--
    }
  }
  return result
}

console.log(findThree([5, 2, 1, 1, 3, 4, 6],8))
