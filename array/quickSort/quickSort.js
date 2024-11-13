/**How is an integer array sorted in place using the quicksort algorithm */

const quickSort = (arr)=>{
  if(arr.length <=1) return arr;
  const pivot = arr.pop();
  const left = [];
  const right = [];
  while(arr.length){
    const curr = arr.shift();
    if(curr < pivot){
      left.push(curr)
    }else if(curr >= pivot){
      right.push(curr)
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([9,10,0,2,7,-6, 1]));