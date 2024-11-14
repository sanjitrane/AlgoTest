const {vowelAndConsonantsCount} = require('./vowelCount');

describe('Vowel and Consonants count function checks', ()=>{
  it('vowelAndConsonantsCount is a function', ()=>{
    expect(typeof vowelAndConsonantsCount).toBe('function')
  })
  it('Returns zero vowels and zero consonants if empty string is passed', ()=>{
    expect(vowelAndConsonantsCount('')).toEqual({ vowels: 0, consonants: 0 })
  })
  it('Returns zero consonants if string containing only vowel charaters is passed', ()=>{
    expect(vowelAndConsonantsCount('aeiou')).toEqual({ vowels: 5, consonants: 0 })
  })
  it('Returns zero vowels and zero consonants if string containing only digits is passed', ()=>{
    expect(vowelAndConsonantsCount('12345')).toEqual({ vowels: 0, consonants: 0 })
  })
  it('Returns the vowels count and consonants count based on passed string', ()=>{
    expect(vowelAndConsonantsCount('Hello World')).toEqual({ vowels: 3, consonants: 7 })
  })

})