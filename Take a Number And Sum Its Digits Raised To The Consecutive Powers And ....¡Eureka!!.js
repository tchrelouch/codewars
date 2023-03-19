// Task
// We need a function to collect these numbers, that may receive two integers a,b that define the range
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
// Examples
// Let's see some cases (input -> output):
// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// [a,b] the function should output an empty list.
// 90, 100 --> []
function sumDigPow(a, b) {
  let answer = [];
  for(let i = a; i <= b; i++){
    if(powerUp(i).reduce((a,b)=>a+b,0)===i){
      answer.push(i);
    }
  }
  return answer;
}


let powerUp = n => n.toString().split("").map((n,i)=> Math.pow(+n,i+1))
