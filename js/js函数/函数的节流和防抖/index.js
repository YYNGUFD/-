/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Mfy
 * @Date: 2020-12-06 14:56:12
 * @LastEditors: Mfy
 * @LastEditTime: 2020-12-06 15:47:46
 */

//防抖

/**
 * 防抖函数 
 * @param {*} fun 传入进去的函数
 * @param {*} wait  等待多少秒执行
 * @param {*} immediate  是否立即执行
 */
function debounce(func, wait = 500, immediate = true) {
  let context, timer, args;
  //延迟执行函数
  const later = () =>
    setTimeout(() => {
      //清除定时器
      timer = null;
      if (!immediate) {
        //执行刚刚调用缓存的上下文
        func.apply(context, args)
        context = args = null
      }
    }, wait)
  return function (...params) {
    //如果当前没有延迟汗水
    if (!timer) {
      //创建立即执行函数
      timer = later();
      //如果是立即执行，则进行执行
      if (immediate) {
        func.apply(this, params)
      } else {
        //如果是缓存 缓存当前函数的上下文
        context = this
        args = params
      }
    } else {
      //如果有延迟函数，调用的时候要清除之前的那个延迟函数，重新调用一次
      clearTimeout(timer)
      timer = later()
    }
  }
}

function _now() {
  return +new Date();
}
/**
 * 节流函数
 * @param {*} func 要执行的函数
 * @param {*} wait 多少次执行一次
 * @param {*} options {
 * leading:true, 忽略开始函数的执行
 * trailing:false,//忽略结束函数的执行
 * }
 */

function throttle(func, wait=2000, options) {
  //局部存储信息
  var context, args, result;
  //之前的时间戳
  var previous = 0;
  var timeout = null;
  // options
  if (!options) options = {};
  //定时器回调函数
  var later = () => {
    previous = options.leading === false ? 0 : _now(); //
    timeout = null;
    result = func.apply(context, args);
    //定时器执行完毕，将当前存储内容变成空
    if (!timeout) context = args = null;
  }
  return function(...params){
    //h获取当前时间戳
    var now = _now(); 
    //如果设置了忽略开头的函数 则重置之前的时间戳
    if(!previous && options.leading==false) previous =now;

    //计算剩余时间
    var remaining = wait - (now - previous);
    console.log(remaining)
    
    context = this;
    args = arguments;
    //当前剩余执行时间小于0或者大于wait，则执行当前函数
    if(remaining <=0 || remaining > wait){
      if(timeout){
        clearTimeout(timeout)
        timeout = null;
      }
      //将当前的定义到当前
      previous = now;
      //立即执行
      result = func.apply(context, args)
     if(!timeout){
       context = args = null;
     } 
    }else if(!timeout && !options.trailing){
      //判断定时器会否设置了 trailing  
      //设置了则延迟执行
      timeout = setTimeout(later, remaining);
    }
    return result; 
  }
}
