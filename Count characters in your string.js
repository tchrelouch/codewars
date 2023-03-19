// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.
function count (string) {  
if(string.length === 0) return {};
let count = {};
for(let letter of string){
  count[`${letter}`] = count[`${letter}`] + 1 || 1;
}
return count;
}
