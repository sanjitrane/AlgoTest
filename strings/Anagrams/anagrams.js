/**How do you check if two strings are anagrams of each other*/
/**
 * eg: Saw -> Was, Eat -> tea
 * Only consider characters, not punctuation or spaces 
 * Time: O(n1​+n2), Space: O(n1​+n2)
 */

const anagram = (str1, str2)=>{
  // clean the string of spaces and punctuations
  const cleanString1 = str1.replace(/[^\w]/g, '').toLowerCase()
  const cleanString2 = str2.replace(/[^\w]/g, '').toLowerCase()

  // if both lengths dont match return false
  if(cleanString1.length !== cleanString2.length){
    return false;
  }

  // create charMap for both strings
  const charMap1 = buildMap(cleanString1);
  const charMap2 = buildMap(cleanString2);

  // check if both maps are of same size
  if(charMap1.size !== charMap2.size){
    return false;
  }
  for(const char in charMap1){
    if(charMap1[char] !== charMap2[char]){
      return false
    }
  }
  return true;

}

const buildMap = (str)=>{
  const charMap = new Map()
  for(let char of str){
    charMap[char] = (charMap[char] || 0) + 1
  }
  return charMap
}

module.exports={anagram};
