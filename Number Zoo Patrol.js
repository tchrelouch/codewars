// Task:
// Write a function that takes a shuffled list of unique numbers from 1 to n with one element missing (which can be any number including n). Return this missing number.

// Note: huge lists will be tested.

// Examples:
// [1, 3, 4]  =>  2
// [1, 2, 3]  =>  4
// [4, 2, 3]  =>  1
function findNumber(array) {
  return (1+array.length+1)/2*(array.length+1) - array.reduce((a,b)=>a+b,0)
}
