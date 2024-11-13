/**How do you find all pairs of an integer array whose sum is equal to a given number */
/**Time: O(n), Space: O(n) */

const findPairs = (arr, n)=>{
const seen = new Set();
const pairs = [];
for(let num of arr){
  const bal = n - num
  if(seen.has(bal)){
    pairs.push([num, bal])
  }else{
    seen.add(num)
  }
}
return pairs;
}

module.exports = findPairs;