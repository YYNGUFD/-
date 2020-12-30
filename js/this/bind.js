 
/**
 * 
 */

Function.prototype.myBind =function(context){
  if(typeof this !='function'){
    throw new TypeError("error")
  }
  var _this = this;
  var args =[...arguments].slice(1) 
  //返回一个函数
  return function F(){
    //因为返回了一个新的函数 所以判断 
    if(this instanceof F){
      return new _this(...args,...arguments)
    }
    return _this.apply(context,args.concat(...arguments))
  }
}
var data = {a:22}
function list(){
  console.log(this.a)
}
list =list.myBind()
list()