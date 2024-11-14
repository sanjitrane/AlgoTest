const {indexOf} = require('./indexOf');

describe('IndexOf function check', ()=>{
  it('IndexOf is a function', ()=>{
    expect(typeof indexOf).toBe('function')
  })
  it('Returns -1 if the string to search length is greater than the actual string ', ()=>{
    expect(indexOf('ab','abc')).toBe(-1);
  })
  it('Returns the index position if the search string is found in the actual string ', ()=>{
    expect(indexOf('babe','ab')).toBe(1);
  })
  it('Returns -1 if the search string is not found in the actual string ', ()=>{
    expect(indexOf('babe','cab')).toBe(-1);
  })

})