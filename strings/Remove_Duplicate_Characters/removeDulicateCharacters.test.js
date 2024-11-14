const {removeDuplicates} = require('./removeDuplicateCharacters');

describe('Remove Duplicate Characters function check', ()=>{
  it('removeDuplicates is a function', ()=>{
    expect(typeof removeDuplicates).toBe('function')
  })
  it('Returns empty string when empty string is provided', ()=>{
    expect(removeDuplicates('')).toBe('')
  })
  it('Returns single character when string with single character is provided', ()=>{
    expect(removeDuplicates('a')).toBe('a')
  })
  it('Returns string with duplicate characters removed', ()=>{
    expect(removeDuplicates('bananas')).toBe('bans')
  })
  it('Returns the same string if duplicate characters are not found', ()=>{
    expect(removeDuplicates('abcde')).toBe('abcde')
  })
})