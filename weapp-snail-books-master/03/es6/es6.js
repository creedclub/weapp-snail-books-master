let arr = [1,2,3,4]
// 1. 遍历
arr.forEach(v=>{
  // console.log(v)
})
// console.log(arr.map(v=>v*2))
// console.log(arr.every(v=>v>2))
// console.log(arr.filter(v=>v<=3).map(v=>v*3))
// 数组去重
let arr1 = [1,2,3,4,2,3]
let arr2 = [4,3,6,8]
console.log([...new Set(arr1)])
// 并集
// arr1.concat(arr2)
console.log([...new Set([...arr1,...arr2])])
// 淘宝首页到底用了多少种标签
// new Set([...document.querySelectorAll('*')].map(v=>v.nodeName)).size

const obj1 = {
  name:'woniu',
  age:18
}
const obj2 = {
  fullName:'woniu1',
  sex:'male'
}
// Object.keys(obj1).forEach(v=>{
//   console.log(v,obj1[v])
// })
console.log({...obj1,...obj2,job:'fe',age:16})
// for in hasOwnProperty