/**Find the missing number from the given array */

/**
 * 
 * considering array is sorted and starts from 1
 * 
 * The function only uses a few extra variables (sum, size, and actual), which are O(1) in space.
There is no additional space used for data structures that scale with the input size, so the overall space complexity is: 𝑂(1)

Time: O(n), Space: O(1)
 */
const missingNumber = (arr)=>{
  const sum = arr.reduce((acc,val)=>acc+val,0);
  const size = arr.length + 1;
  const actual = size * (size + 1) / 2;
  return actual - sum;
}

module.exports=missingNumber;