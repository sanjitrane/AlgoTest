/**How do you check if a string contains only digits */
/**Regex: 
 * entire string (^ to $)
 * only digits (\d)
 */

/**Time: O(n), Space: O(1) */
const isOnlyDigits = (str)=>{
  return /^\d+$/.test(str)
}

module.exports={isOnlyDigits};