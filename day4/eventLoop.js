//  浏览器的event loop
//  浏览器的event loop

//  调用ajax  settimeout 调用线程
//  js是单线程 代表主进程中只有一个主线程
// 异步代码 需要等待同步代码执行完毕 才开始执行

// script 同步代码是（宏任务）

//  宏任务： script ajax 事件 requestFrameAnimation  UI渲染 定时器 setimmediate(只在IE) messageChannel I/O
//  微任务 Promise.then MutationObserver

setTimeout(() => {
  console.log('time1') //3
  Promise.resolve().then(() => {
    console.log('time3') //4
  })
}, 0)
setTimeout(() => {
  console.log('time2') //5
}, 0)

Promise.resolve().then(() => {
  console.log('then 1') //1
})
Promise.resolve().then(() => {
  console.log('then 2') //2
})

//  当前主栈执行完毕后 ---> 清空微任务 --->  取出一个宏任务
//  ---> 继续清空微任务 ---> 无限循环

// nextTick先查看是否支持promise MutationObserver(浏览器原生方法) setimmediate(只在IE)) settimeout

//  node 10+版本 表现和浏览器一致
