// 柯里化: 将一个函数拆分为多个函数
// 好处： 可以保留参数

const checkType = type => {
  return content => {
    return Object.prototype.toString.call(content) === `[object ${type}]`
  }
}
let types = ['Number', 'String']
let utils = {}
types.forEach(type => {
  utils['is' + type] = checkType(type)
})
const b = utils.isString('123')
const c = utils.isNumber(123)
console.log(c)
