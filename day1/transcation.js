//  事物 开始的时候做某件事， 结束的时候再做某件事
const perform = (anymethod, wrappers) => {
  wrappers.forEach(wrap => {
    wrap.initlizae()
  })
  anymethod()
  wrappers.forEach(wrap => {
    wrap.close()
  })
}

perform(() => {
  console.log('说话')
}, [
  {
    initlizae() {
      console.log('您好')
    },
    close() {
      console.log('再见')
    }
  }
])
