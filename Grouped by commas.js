/*
Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647
*/
function groupByCommas(n) {
  return n.toString().replace(/\d(?=(\d{3})+$)/g, "$&,");
}
