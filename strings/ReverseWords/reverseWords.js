/**How do you reverse words in a given sentence */

/**Time: O(n), Space: O(n) */
const reverseWords = (sentence)=>{
  return wordsArr = sentence.split(' ').reverse().join(' ')
}

/**Time: O(n), Space: O(n) */
const reverseAll = (sentence)=>{
  const revSent = sentence.split(' ').reverse().join(' ')
  
  return revSent.split(' ').map(word=>word.split('').reverse().join('')).join(' ')
}

module.exports = {reverseWords, reverseAll}