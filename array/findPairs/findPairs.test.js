const findPairs = require('./findPairs');

it('findPairs is a function', ()=>{
  expect(typeof findPairs).toEqual('function');
})

it('returns an array of pairs of numbers', ()=>{
  expect(findPairs([1,2, 4, 3, 5, 7, 8, 9, 6], 7)).toEqual([ [ 3, 4 ], [ 5, 2 ], [ 6, 1 ] ])
})