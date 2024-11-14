const {isPalindrome} = require('./palindrome');

describe('Palindrome function check', ()=>{
  it('isPalindrome is a function', ()=>{
    expect(typeof isPalindrome).toBe('function')
  })
  it('returns true if the string is empty', ()=>{
    expect(isPalindrome('')).toBe(true);
  })
  it('returns true if the string has single character', ()=>{
    expect(isPalindrome('a')).toBe(true);
  })
  it('returns true if the string is Palindrome', ()=>{
    expect(isPalindrome('abba')).toBe(true);
  })
  it('returns false if the string is not a Palindrome', ()=>{
    expect(isPalindrome('abbas')).toBe(false);
  })

})