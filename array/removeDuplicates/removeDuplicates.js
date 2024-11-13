/**How are duplicates removed from a given array */
/**Time: O(n), Space: O(n)  */

const removeDuplicates = (arr)=>{
  const uniqueArr = arr.reduce((acc, val)=>{
    if(!acc.has(val)){
      acc.add(val)
    }
    return acc;
  },new Set())
  return Array.from(uniqueArr)
}

module.exports = removeDuplicates;