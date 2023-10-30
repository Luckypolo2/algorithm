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
// 选择排序（Selection Sort）是一种简单直观的排序算法。它的工作原理如下：
// 在未排序的序列中找到最小（或最大）的元素，存放到排序序列的起始位置。
// 从剩余未排序元素中继续寻找最小（或最大）元素，然后放到已排序序列的末尾。
// 以此类推，直到所有元素均排序完毕。
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
//插入排序（Insertion Sort） 是一种简单直观的排序算法。
// 其基本思想是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
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
// 快速排序（Quick Sort） 是由东尼·霍尔所发展的，其主要思想是选择一个基准元素，
// 并将数组分为两部分，使得一部分的所有元素都比基准小，而另一部分的所有元素都比基准大，然后对这两部分再进行排序。
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
//归并排序的工作原理如下：
// 将数组分成两半。
// 递归地对每一半进行排序。
// 合并两个已排序的半部分。
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
      // 将较小的元素添加到result中，然后从较小元素所在的区域内取出下一个元素，继续进行比较；
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
