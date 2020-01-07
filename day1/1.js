// 高阶函数
//  1. 一个函数的参数是一个函数， 或者一个函数返回一个函数

Function.prototype.before = function(fn) {
  // 箭头函数中没有this、也没有arguments
  return (...arg) => {
    fn()
    this(...arg)
  }
}
const say = (...arg) => {
  console.log(arg)
}
const newSay = say.before(() => {
  console.log('您好')
})
newSay(1)
