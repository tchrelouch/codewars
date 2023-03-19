/*
You have to sort the inner content of every word of a string in descending order.

The inner content is the content of a word without first and the last char.

Some examples:

"sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me"        -->  "wiat for me"
"this kata is easy"  -->  "tihs ktaa is esay"
Words are made up of lowercase letters.

The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.
*/
let descending = s => s.split("").sort((a,b)=>b.charCodeAt()-a.charCodeAt()).join("");

function sortTheInnerContent(words){
  return words.replace(/(?<=\b\w)(\w+)(?=\w\b)/g, w=>descending(w));
}
