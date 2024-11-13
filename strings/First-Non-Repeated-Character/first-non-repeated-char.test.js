const { firstNonRepeatedChar } = require('./first-non-repeated-char');

describe('First Non Reeated Char Function checks', ()=>{
  it('firstNonRepeatedChar is a function', ()=>{
    expect(typeof firstNonRepeatedChar).toBe('function')
  })
  it('Returns null for empty string', ()=>{
    expect(firstNonRepeatedChar('')).toBeNull();
  })
  it('Returns the same charater if the string has single character', ()=>{
    expect(firstNonRepeatedChar('a')).toBe('a');
  })
  it('should return null when there are no non-repeated characters', ()=>{
    expect(firstNonRepeatedChar('abcabcc')).toBeNull();
  })
  it('should be case sensitive', ()=>{
    expect(firstNonRepeatedChar('sSis')).toBe('S');
  })
  it('should return the first non-repeated character', ()=>{
    expect(firstNonRepeatedChar('swiss')).toBe('w');
  })
})