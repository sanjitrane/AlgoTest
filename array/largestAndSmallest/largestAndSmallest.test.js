const findMinMax = require('./largestAndSmallest');

it('findMinMax is a function', ()=>{
  expect(typeof findMinMax).toEqual('function');
})

it('returns the min and max values', ()=>{
  expect(findMinMax([-20, 34, 21, -87, 92, 2147483647])).toEqual( { min: -87, max: 2147483647 })
})