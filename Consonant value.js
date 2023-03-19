/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
*/
const a = "abcdefghijklmnopqrstuvwxyz";

function solve(s) {
  return Math.max(...s.match(/[^aeiou]+/g).map(l=>a.length > 1 ? multipleLetters(l) : a.indexOf(l)+1))
}


let multipleLetters = str => str.split("").map(l=>a.indexOf(l)+1).reduce((a,b)=>a+b,0);
