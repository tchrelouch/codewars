// Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, 

//returns the string with all the extra characters in a bracket.

// For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

// Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.
function stringParse(string){
  return typeof string === "string" ? string.replace(/(?<=([a-zA-Z]){2})(?<=\1)\1+/g, w=> "[" + w + "]") : "Please enter a valid string"
}
