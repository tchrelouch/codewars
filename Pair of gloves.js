/*
Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
*/
function numberOfPairs(gloves){
let set = new Set(gloves);
let count = [...set].map(word=>Math.floor((gloves.join(" ").match(new RegExp(word, "gi"))||[]).length/2));
  return count.reduce((a,b)=>a+b,0)
}
