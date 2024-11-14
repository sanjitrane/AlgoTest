/**How do you count the number of vowels and consonants in a given string */
/**
 * Regex: [a-zA-Z] only alphabet characters 
 * Time: O(n), Space: O(1)
 */
const vowelAndConsonantsCount = (str)=>{
  const vowels = 'aeiouAEIOU'
  let vowelCount = 0;
  let consonantCount = 0;
  for(let char of str){
    // check if char is an alphabet letter
    if(/[a-zA-z]/.test(char)){
      if(vowels.includes(char)){
        vowelCount++
      }else{
        consonantCount++
      }
    }
  }
  return {vowels: vowelCount, consonants: consonantCount};
}

module.exports={vowelAndConsonantsCount}
