// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)
function findMissingLetter(a){
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let start = alphabet.indexOf(a[0]);
  let end = start + a.length + 1;
  let correct = alphabet.slice(start,end);
  return correct.split("").filter((e,i)=> !a.join("").includes(correct[i]))[0]
}
