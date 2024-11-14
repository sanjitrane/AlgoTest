const {isOnlyDigits} = require('./onlyDigits')

describe('Function to check if only digits are passed in a string', ()=>{
  it('isOnlyDigits is a function', ()=>{
    expect(typeof isOnlyDigits).toBe('function')
  })
  it('Returns false if empty string is passed', ()=>{
    expect(isOnlyDigits('')).toBe(false);
  })
  it('Returns true for a string with only numbers', ()=>{
    expect(isOnlyDigits('1234')).toBe(true);
  })
  it('Returns false if string contains a non-digit character', ()=>{
    expect(isOnlyDigits('123a4')).toBe(false);
  })
  it('Returns false if the string contains any punctuations', ()=>{
    expect(isOnlyDigits('123.4')).toBe(false);
  })
})