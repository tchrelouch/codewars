// Each time when Pinocchio is not telling the truth his nose should become longer.

// Task:
// Write function which determines if pinocchio is telling the truth.
// function extendPinocchiosNose(words){
//   //return true if lying,false otherwise.
// }
// When pinocchio is lying he stutter a bit.If word1 is followed by word2 where word2 contains whole word1(case insensitive) you can tell that pinocchio is lying.

// //lies examples
// -"I am goo good person" //"good" contains "goo"
// -"In real story they didnt hanged m me" //"me" contains "m"
// -"It is geppetos fault,i would be Good good if not him" //"good" contains "Good"
function extendPinocchioNose(words){
  return /\b(\w+)\s\S*\1/i.test(words)
}
