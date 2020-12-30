/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Mfy
 * @Date: 2020-12-18 18:27:51
 * @LastEditors: Mfy
 * @LastEditTime: 2020-12-18 18:32:38
 */
Function.prototype.myCall=function(context){
  var context = context || window;
  context.fn = this;
  //取出当前的this
  var args =[...arguments].slice(1);
  //调用当前的函数
  var result = context.fn(...args);
  //删除挂在实例上的方法
  delete context.fn;
  //返回调用的结果值
  return result;
}

var data = {a:22}
function list(){
  console.log(this.a)
}
list.myCall(data)