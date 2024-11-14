/**How do you check if two strings are a rotation of each other */
/**Time:O(n) ,Space:O(n) */

const isRotation = (str1, str2)=>{
  if(str1.length !== str2.length){
    return false;
  }
  const concatenated = str1+str1;
  return concatenated.includes(str2)
}

module.exports = {isRotation};