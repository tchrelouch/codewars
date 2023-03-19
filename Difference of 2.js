/*
The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.
*/
function twosDifference(input){
  let container = [];
  let sorted = Array.from(input).sort((a,b)=>a-b);
  length = sorted.length
  for(let i=0; i<length; i++){
    for(let j=i+1; j<length; j++){
      if(Math.abs(sorted[i]-sorted[j])===2){
        container.push([sorted[i],sorted[j]])
      }
    }
  }
  return container;
}
