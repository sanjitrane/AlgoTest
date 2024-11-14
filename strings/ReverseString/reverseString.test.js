const {reverseUsingRecursion, reverse} = require('./reverseString')

describe('Reverse function checks', ()=>{
  it('reverseUsingRecursion is a function', ()=>{
    expect(typeof reverseUsingRecursion).toBe('function');
  })
  it('Returns empty string if empty is passed', ()=>{
    expect(reverseUsingRecursion('')).toBe('');
  })
  it('Returns single character if single character is passed', ()=>{
    expect(reverseUsingRecursion('q')).toBe('q');
  })
  it('Returns reverses the passed string', ()=>{
    expect(reverseUsingRecursion('hello')).toBe('olleh');
  })
  it('reverse is a function', ()=>{
    expect(typeof reverse).toBe('function');
  })
  it('Returns empty string if empty is passed', ()=>{
    expect(reverse('')).toBe('');
  })
  it('Returns single character if single character is passed', ()=>{
    expect(reverse('q')).toBe('q');
  })
  it('Returns reverses the passed string', ()=>{
    expect(reverse('hello')).toBe('olleh');
  })
})