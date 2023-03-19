/* I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/

let nextTerm = array => array.slice(-2).reduce((a,b)=>a+b,0);

function nthFibo(n) {
let start = [0,1];
let l = start.length;
for(let i=l; i<n; i++){
start.push(nextTerm(start))
}
return start[n-1];
}
