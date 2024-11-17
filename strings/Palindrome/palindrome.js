/**How do you check if a given string is a palindrome */
/**Time: O(n), Space: O(1) */
const isPalindrome = (str) => {
  if (str.length < 2) {
    return true;
  }
  const length = str.length;
  const mid = Math.floor(length / 2);
  const lastIndex = length - 1;
  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[lastIndex - i]) {
      return false;
    }
  }
  return true;
};

/**find the longest palindrome in a string */

module.exports = { isPalindrome };

console.log(isPalindrome("abba"));
