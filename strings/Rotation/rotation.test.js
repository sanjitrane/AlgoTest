const {isRotation} = require('./rotation');

describe('isRotation function check',()=>{
  it('isRotation is a function', ()=>{
    expect(typeof isRotation).toBe('function')
  })
  it('returns false if both the strings are not of the same length', ()=>{
    expect(isRotation('abcde', 'abcd')).toBe(false);
  })
  it('returns true if both the strings are empty', ()=>{
    expect(isRotation('', '')).toBe(true);
  })
  it('returns true if the second string is a rotation of first string', ()=>{
    expect(isRotation('abcde', 'deabc')).toBe(true);
  })
})