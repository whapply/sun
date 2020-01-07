const add = (a, b, c) => {
  return a + b + c
}
const curring = (fn, arr = []) => {
  //  函数的长度 等于 函数参数的个数
  let len = fn.length
  return (...args) => {
    console.log(args)
    arr = arr.concat(args)
    if (arr.length < len) {
      //  没有达到个数 应该返回一个函数 继续执行
      return curring(fn, arr)
    }
    return fn(...arr)
  }
}

let r = curring(add)(1)(2)(3)
console.log(r)
