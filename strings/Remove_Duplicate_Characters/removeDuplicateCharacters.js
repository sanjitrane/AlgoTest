/**How to remove duplicate characters from String */
/**Time: O(n), Space: O(n)  */
const removeDuplicates = (str)=>{
  if(str.length < 2){
    return str;
  }
  const charMap = new Set();
  const length = str.length;
  let result = ''
  for(let char of str){
    if(!charMap[char]){
      result+=char;
      charMap[char] = true
    }
  }
  return result;
}

module.exports={removeDuplicates};

console.log(removeDuplicates('bananas'))