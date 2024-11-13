const removeDuplicates = require('./removeDuplicates')

it('removeDuplicates is a function', ()=>{
  expect(typeof removeDuplicates).toEqual('function')
})

it('removes duplicates and returns a modified array', ()=>{
  expect(removeDuplicates([1, 2, 3, 4, 2, 3, 1])).toEqual([ 1, 2, 3, 4 ])
})