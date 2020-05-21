/**
 * 基本思想：初始化标记low为划分部分的第一个元素位置，high为最后一个元素的位置，然后不断的移动两标记并交换元素
 * 1.high 向前移动找到第一个比pivot小的元素
 * 2.low  向后移动，找到第一个比pivot大的元素
 * 3.交换两个元素的位置，继续移动标记，直到low>high为止
 */

function Partition(array,low,high){
      //为什么 j加一个1，而i没有加1,是因为下面的循环判断是从--j和++i开始的.
      //而基准元素选的array[left],即第一个元素，所以左游标从第二个元素开始比较
      var i = low+1;
      var j = high;
      var pivot = array[low];// pivot 为选取的基准元素（头元素）
      while(true){
          while(i< high && array[i] < pivot){ 
            i++
          }   
          while(j > 0 && array[j] > pivot){
            j-- 
          }
          // 左右游标相遇时候停止， 所以跳出外部while循环
          if(i >= j){
              break;
          }else{
            // 左右游标未相遇时停止, 交换各自所指元素，循环继续
            swap(array, i, j);
          }
      }
      //此时j的前面的数字一定是小于povit 交换位置 
      swap(array, low, j);//基准元素和游标相遇时所指元素交换，为最后一次交换  
     
      return j
}
function swap(a,i,j){
  var temp = a[i];
  a[i] = a[j];
  a[j] =temp;
}
/**
 * 
 * @param {*} arr  要排序的数组
 * @param {*} low  排序的低位置
 * @param {*} high 排序的高位置
 */
function quicklySort(arr,low,high){ 
  if(low < high){
    //首先找到基准位置
    var  position = Partition(arr, low, high);  //找到基准位置
    // 进行迭代对index之前和之后的数组进行相同的操作使整个数组变成有序
    quicklySort(arr, low, position - 1); //排序切分 左侧的元素进行排序
    quicklySort(arr, position + 1, high);  //排序切分 右侧的元素进行排序
    console.log(arr)
  }
  return arr;
}
var arr =[2,3,1,4,1];
var result = quickSort(arr,0,arr.length)
console.log(result)
/**
 * 1.high 向前移动找到第一个比pivot小的元素
 * 2.low  向后移动，找到第一个比pivot大的元素
 * 3.交换两个元素的位置，继续移动标记，直到low>high为止
 * 利用快速排序排 2,3,1,4,1 
 * 
 * 
 */