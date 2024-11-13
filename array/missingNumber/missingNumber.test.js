const missingNumber = require('./missingNumber');

it('MissingNumber is a function', ()=>{
  expect(typeof missingNumber).toEqual('function');
})

it('Finds the missing number from the given array', ()=>{
  expect(missingNumber([1,2,3,4,6,7,8])).toEqual(5);
})