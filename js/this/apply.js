/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Mfy
 * @Date: 2020-12-18 18:35:20
 * @LastEditors: Mfy
 * @LastEditTime: 2020-12-18 18:39:02
 */
Function.prototype.myApply=function(context){
  var context = context || window;
  context.fn = this;
  var result = null;
  //判断是否有参数传入
  if(arguments[1]){
    result = context.fn(...arguments[1])
  }else{
    result = context.fn()
  }
  delete context.fn;
  return result;
}

var data ={
  a:223
}
function list(){
  console.log(this.a)
}
list.myApply(data)