

// function ajax(fn){
//   setTimeout(()=>{
//     console.log('你好')
//     fn()
//   },1000)
// }
// 1 callbacl 回调地狱
// ajax(()=>{
//   console.log('执行结束')
//   ajax(()=>{
//     ajax(()=>{
//       ajax(()=>{

//       })
//     })
//     console.log('执行结束2')
//   })
// })

// 1. callback

function delay(word){
  return new Promise((reslove,reject)=>{
    setTimeout(()=>{
      reslove('hello' + word)
    },2000)
  })
}
// async+await一起使用
async function start(){
  const word1 = await delay('孙悟空')
  console.log(word1)
  const word2 = await delay('猪八戒')
  console.log(word2)
  const word3 = await delay('沙悟净')
  console.log(word3)
}
start()

// delay('孙悟空')
//   .then((word)=>{
//     console.log(word)
//     return delay('猪八戒')
//   })
//   .then((word)=>{
//     console.log(word)
//     return delay('沙悟净')
//   })
//   .then((word)=>{
//     console.log(word)
//   })
  // .catch