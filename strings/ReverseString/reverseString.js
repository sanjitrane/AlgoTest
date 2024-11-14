/**How can a given string be reversed using recursion */

//Time: O(n2) due to arr.slice, space: O(n) n is the length of input string
const reverseUsingRecursion = (str)=>{
  //base case
  if(str.length <=1){
    return str
  }
  return reverseUsingRecursion(str.slice(1)) + str[0];
}

//Time: O(n), space: O(n)
const reverse = (str)=>{
  return str.split('').reverse().join('');
}

module.exports={reverseUsingRecursion, reverse};