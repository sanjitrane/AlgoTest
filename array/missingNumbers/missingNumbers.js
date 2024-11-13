/** How do you find the missing number in a given integer array of 1 to 100 */

/** More than 1 missing numbers */
//[1,2,4,6,8,10]==> [3,5,7,9]

// Time: O(n+m), Space: O(n+m)
function findMissingNumbers(arr) {
  let st, en
  for(let i = 0; i < arr.length; i++){
    if(!st){
      st = arr[i]
    }else{
      if(arr[i] < st){
        st = arr[i]
      }
    }
    if(!en){
      en = arr[i]
    }else{
      if(arr[i] > en){
        en = arr[i]
      }
    }
  }
  const org = new Set(arr)
  const results = new Set()
  for(let i = st; i <=en; i++ ){
    if(!org.has(i)){
      results.add(i)
    }
  }

  return Array.from(results);
}

const arr = [1,2,4,6,8,10];
const missingNumbers = findMissingNumbers(arr);

module.exports= findMissingNumbers;