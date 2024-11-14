const {reverseWords, reverseAll} = require('./reverseWords')

describe('Reverse Words in a sentence function checks', ()=>{
  it('reverseWords is a function', ()=>{
    expect(typeof reverseWords).toBe('function');
  })
  it('returns empty string if empty string is passed', ()=>{
    expect(reverseWords('')).toBe('');
  })
  it('returns single word if single word is passed', ()=>{
    expect(reverseWords('hello')).toBe('hello');
  })
  it('returns sentence in reverse order', ()=>{
    expect(reverseWords('I love javascript')).toBe('javascript love I');
  })

  it('reverseAll is a function', ()=>{
    expect(typeof reverseAll).toBe('function');
  })
  it('returns empty string if empty string is passed', ()=>{
    expect(reverseAll('')).toBe('');
  })
  it('returns single reversed word if single word is passed', ()=>{
    expect(reverseAll('hello')).toBe('olleh');
  })
  it('returns sentence with reversed words in reverse order', ()=>{
    expect(reverseAll('I love javascript')).toBe('tpircsavaj evol I');
  })
})