const {findDuplicates, removeDuplicates} = require('./duplicateNumber');

it('findDuplicates is a function', ()=>{
  expect(typeof findDuplicates).toEqual('function');
})

it('Returns list of duplicate numbers found', ()=>{
  expect(findDuplicates([1, 6, 5, 2, 3, 3, 3, 2])).toEqual([2,3])
})

it('removeDuplicates is a function', ()=>{
  expect(typeof removeDuplicates).toEqual('function');
})

it('Returns the modified array with the duplicates removed', ()=>{
  expect(removeDuplicates([1,3,4,2,3,4,2,2,1,5])).toEqual([1,3,4,2,5])
})