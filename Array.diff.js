// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
function arrayDiff(arr1, arr2) {
  if(arr2.length === 0) return arr1;
  let newArr = [];
  for(let i = 0; i < arr1.length; i++){
    if((arr2.filter(e=>e ===arr1[i])||[]).length===0){
      newArr.push(arr1[i])
    }
  }
  return newArr;
}
