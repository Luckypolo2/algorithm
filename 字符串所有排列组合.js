// 题目： 输入一个字符串，打印出该字符串中，所有字符的排列组合
//
// 输入： 'abc'
//
// 输出： ['abc', 'acb', 'bca', 'bac', 'cab', 'cba']
/**
 * 利用回溯算法，计算所有字符串的组合
 * @param {string} str - 字符串列表
 * @param {array} result - 最终的结果
 * @param {string} current - 当前的字符串
 * @param {string} temp - 当前固定的字符
 */

function stringGroup(str='', result=[], current='', temp='') {
  current += temp
  const list = [...str]
  if ( list.length === 0) {
    return result.push(current)
  }
  for (let i=0; i<list.length;i++) {
    // 固定第一个字符串
    temp = list.shift()
    // 递归调用 list.join('')转成字符串
    stringGroup(list.join(''), result, current, temp)
    list.push(temp)
  }
  return [...new Set(result)]
}

console.log(stringGroup(list='abc'))
