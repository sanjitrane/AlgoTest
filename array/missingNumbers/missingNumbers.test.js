const findMissingNumbers = require('./missingNumbers');

it('findMissingNumbers is a function', ()=>{
  expect(typeof findMissingNumbers).toEqual('function');
})

it('Finds missing numbers in a sorted array', ()=>{
  const arr = [1,2,4,6,8,10];
  const result = findMissingNumbers(arr);
  expect(result).toEqual([3,5,7,9])
})

it('Finds missing numbers in a unsorted array', ()=>{
  expect(findMissingNumbers([2,1,4,10,8,6])).toEqual([3,5,7,9])
})