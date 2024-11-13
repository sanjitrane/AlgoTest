/**How do you find the largest and smallest number in an unsorted integer array */
/**Time: O(n), Space: O(1) */

const findMinMax = (arr)=>{
  let min = arr[0];
  let max = arr[0];
  for(let num of arr){
    if(num < min){
      min = num
    }
    if(num > max){
      max = num
    }
  }
  return {min: min, max: max}
}

module.exports = findMinMax;