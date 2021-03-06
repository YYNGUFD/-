 
/**
 * 际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。一般就会采用下面的写法。
 * ，让同步函数同步执行，异步函数异步执行，并且让它们具有统一的 API 呢？回答是可以的，并且还有两种写法。第一种写法是用async函数来写。
 * 
 */
/**
 * 更好的错误处理：无论同步错误在何处发生，它们会作为拒绝传递下去；
更好的互操作性：无论第三方方法使用什么样的 Promises 实现形式，你都将始终使用你首选的实现形式；
易于浏览：所有代码都水平地处于相同的缩进级别，因此更容易一目了然地看到正在发生的事情。

 */
const Promise = require('./Promise');
Promise.try(()=>{
  throw Error("哈哈啊哈")
}).then(null,err=>{
  console.log(err)
})