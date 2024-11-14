/**check if a String contains another String like indexOf () */
/**Time: O(n * m) (n is length of str, m is the length of search string) , Space: O(1) */
const indexOf = (str, searchStr)=>{
  if(searchStr.length > str.length) return -1;
  let length = str.length;
  let searchLength = searchStr.length;
  let firstChar = searchStr[0];
  for(let i = 0; i < length; i++ ){
    if(str[i] === firstChar){
      const sub = str.substring(i, i + searchLength);
      if(sub === searchStr){
        return i;
      }
    }
  }
  return -1
}

module.exports = {indexOf}
