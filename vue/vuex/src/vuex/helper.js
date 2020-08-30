 
// import { createNamespacedHelpers } from "vuex";

//考虑嵌套问题 可能会影响到
// createNamespacedHelpers
export function mapState(stateArr){
  let obj = {};
  for(var i =0;i<stateArr.length;i++){
   let stateName =  stateArr[i];
   obj[stateName] = function(){
     return this.$store.state[stateName]
   }
  }
  return obj; 
}
export function mapGetters(gettersArr){
  let obj = {};
  for(var i =0;i<gettersArr.length;i++){
   let stateName =  gettersArr[i];
   obj[stateName] = function(){
     return this.$store.getters[stateName]
   }
  }
  return obj; 
}