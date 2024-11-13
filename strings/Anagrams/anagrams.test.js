const {anagram} = require('./anagrams');

describe('Anagram function checks', ()=>{
  it('Anagram is a function', ()=>{
    expect(typeof anagram).toBe('function');
  })
  it('Returns true if both the strings are empty', ()=>{
    expect(anagram('','')).toBe(true);
  })
  it('Returns false if both strings are of different length after removing the spaces and punctuations if any', ()=>{
    expect(anagram('Rail!','Roles')).toBe(false);
  })
  it('Returns true if both the strings share same characters with count', ()=>{
    expect(anagram('RAIL! SAFETY!', 'fairy tales')).toBe(true);
  })
})