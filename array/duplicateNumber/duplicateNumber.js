/**How do you find the duplicate number on a given integer array */
/**Time: O(n), Space: O(n) */

const findDuplicates = (arr)=>{
  const numMap = {};
  const results = [];
  for(let num of arr){
    numMap[num] = (numMap[num] || 0) + 1;
  }
  for(let key in numMap){
    if(numMap[key] > 1){
      results.push(Number(key))
    }
  }
  return results;
}

/**How do you remove duplicates from an array in place */
/**Time complexity = O(n2) because splice (O(n)) is used inside a loop 
 * Space complexity = O(n) because of the use of Set
 * 
*/
const removeDuplicates = (arr)=>{
  const seen = new Set();
  for(let i = 0; i < arr.length; i++){
    if(seen.has(arr[i])){
      arr.splice(i,1)
      i--;
    }else{
      seen.add(arr[i])
    }
  }
  return arr;
}

module.exports = {findDuplicates, removeDuplicates};