const reverseArray = require('./reverseArray');

it('ReverseArray is a function', ()=>{
  expect(typeof reverseArray).toEqual('function');
})

it('returns the same array with elements reversed in place', ()=>{
  expect(reverseArray([1,2,3,4,5])).toEqual([ 5, 4, 3, 2, 1 ]);
  expect(reverseArray(['s','a','n','j','i','t'])).toEqual([ 't', 'i', 'j', 'n', 'a', 's' ]);
})