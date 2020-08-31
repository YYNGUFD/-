
// 基本数据类型
// 数字
var isNumber = function (val){
  return typeof val === 'number' && !isNaN(val);
}
// 字符串
var isString = function (val){
   return typeof val == 'string'
}
// 布尔
var isBoolean = function (val){
  return typeof val == 'boolean'
}

// = true
var isTrue = function (val){
  return val ===true
}
// = false
var isFalse = function (val){
 return val ===false
}

// null
var isNull = function (val){
  return val === null;
}

// undefind
var isUndef = function (val){
  return  val ===undefined || val ===null
}

//已经定义
var isDef =function(val){
  return val!==null && val!==undefined
}
// ==isNaN
var isNaN = function(val){
  return 
}

// 复杂数据类型（引用类型）

// 对象 
var isObject= function (obj){
  return obj !== null && typeof obj === 'object'
} 

// 数组
var isArray = function (arr){
  return Array.isArray(arr) 
}

// 函数
var isFun = function (fn){
  return typeof fn == 'function' && !val.then  
} 

// 正则表达式
var isReg = function(reg){ 
  return Object.prototype.toString(reg) =='[object RegExp]'
} 

//Promise 类型 
var isPromise = function(val) {
  return val && typeof val.then === 'function' && val.catch ==='function'
}

// 判断是否是Object
function isPlainObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
} 

var _toString = Object.prototype.toString;
//类型转换 
//转换成字符串
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

//转化成数字
function toNumber (val) {
  var n;
  if(isArray(val)){
    val = val.join("")
  }
  n = parseFloat(val); 
  return isNaN(n) ? val : n
}

//转化成数组
function toArray (list, start) {
  if(isObject(list)) return ; 
  if(isNumber(list)) list = toString(list)
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}
function extend (to, _from) { 
  for (var key in _from) {
    to[key] = _from[key];
  } 
  return to
}

//转换成对象 适用于key-value的形式数组
function toObject(arr){
  var res = {};
  for(var i = 0;i<arr.length;i++){
    if(arr[i]){
       extend(res,arr[i])
    }
  }
  return res
}
