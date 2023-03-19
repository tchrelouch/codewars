/*
Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.
*/
let equality = w => w.split("").map(l=>l.charCodeAt()).reduce((a,b)=>a+b,0);

function grabscrab(anagram, dictionary) {
  let letterReg = anagram.split("").map(l=>`(?=.*${l})`).join("");
  let initial = dictionary.filter(word=>(new RegExp("^"+letterReg+"\\w+$","gi")).test(word));
  
  return initial.filter(w=>w.length===anagram.length&&equality(w)===equality(anagram))
}
