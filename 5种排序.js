// 冒泡排序
function bubbleSort(arr) {
  for (let i=0;i<arr.length-1;i++) {
    for (let j=0;j<arr.length-1-i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}
// 选择排序
function selectSort(arr) {
  for (let i=0; i<arr.length-1; i++) {
    let index = i
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j
      }
    }
    if (index !== i) {
      [arr[i], arr[index]] = [arr[index], arr[i]]
    }
  }
  return arr
}
// 插入排序
function insertSort(arr) {
  // 从第二个元素开始遍历
  for (let i=1; i<arr.length; i++) {
    let j = i
    let target = arr[j]
    // 从后往前
    while(j>0 && arr[j-1] > target) {
      arr[j] = arr[j-1]
      j--
    }
    arr[j] = target
  }
  return arr
}
//快速排序
function quickSort(arr) {
  // 退出递归
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let base = arr.splice(mid, 1)[0]
  let left = []
  let right = []
  arr.forEach((item) => {
    if (item < base) {
      left.push(item)
    } else {
      right.push(item)
    }
  })
  return quickSort(left).concat(base, quickSort(right))
}
// 归并排序
function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let num = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, num))
  let right = mergeSort(arr.slice(num, arr.length))
  return merge(left, right)
  function merge(left, right) {
    let [l, r] = [0, 0]

    let result = []
    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        result.push(left[l])
        l++
      } else {
        result.push(right[l])
        r++
      }
    }
    result = result.concat(left.slice(1, left.length))
    result = result.concat(right.slice(r, right.length))
    return result
  }
}

const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(testArray));
console.log(selectSort(testArray))
console.log(insertSort(testArray))
console.log(quickSort(testArray))
console.log(mergeSort(testArray))
