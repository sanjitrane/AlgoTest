const {duplicateCharacterCount} = require('./duplicate-character-count');

describe('Duplicate character count function checks', ()=>{
  it('duplicateCharacterCount is a function', ()=>{
    expect(typeof duplicateCharacterCount).toEqual('function')
  })
  it('Returns empty object for an empty string', ()=>{
    const str ='' 
    expect(duplicateCharacterCount(str)).toEqual({});
  })
  it('Returns empty object for string with no duplicate characters', ()=>{
    const str = 'empty'
    expect(duplicateCharacterCount(str)).toEqual({})
  })
  it('Returns an object with duplicate characters with their occurrence count', ()=>{
    const str = "Combination"
    expect(duplicateCharacterCount(str)).toEqual({o:2, i:2, n:2})
  })
  it('Returns an object with duplicate characters with their occurrence count', ()=>{
    const str = "mississippi"
    expect(duplicateCharacterCount(str)).toEqual({i:4, s:4, p:2})
  })
  it('Converts uppercase characters to lowercase and count its occurrence',()=>{
    const str = "Sets"
    expect(duplicateCharacterCount(str)).toEqual({s:2});
  })
})