/**How do you reverse an array in place */
/**Time: O(n), Space: O(1) */
const reverseArray = (arr)=>{
  
  for(let i = 0; i < Math.ceil(arr.length / 2); i++){
    [arr[i], arr[arr.length-i-1]] = [arr[arr.length-i-1],arr[i]]
  }
  return arr;
}

module.exports = reverseArray;