/**How do you print duplicate characters from a string */
/**Eg: Combination -> {o:2, n:2, i:2} */
/**Time: O(n), Space: O(n) */

const duplicateCharacterCount = (str)=>{
  str = str.toLowerCase();
  if(!str.length){
    return {}
  }
  const charMap = new Map();
  // generate the char count for each character
  for(const char of str){
    charMap[char] = (charMap[char] || 0) + 1
  }
  // store the charters with occurrence more than 1 in result map
  const resultMap = {};
  for(const char in charMap){
    if(charMap[char] > 1){
      resultMap[char] = charMap[char]
    }
  }
  return resultMap;

}

console.log(duplicateCharacterCount('Sets'))

module.exports={duplicateCharacterCount}