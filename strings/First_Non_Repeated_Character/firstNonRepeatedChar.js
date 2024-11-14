/**How do you print the first non-repeated character from a string */
/**Time: O(n), Space: O(n) */

const firstNonRepeatedChar = (str)=>{
  const charMap = {}
  for(let char of str){
    charMap[char] = (charMap[char] || 0) + 1
  }

  for(const char in charMap){
    if(charMap[char] === 1){
      return char;
    }
  }
  return null;
}

module.exports={firstNonRepeatedChar};