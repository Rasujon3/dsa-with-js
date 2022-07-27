// Time Complexity beshi
function sumOfAll(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Time Complexity kom

// function sumOfAll(n) {
//   return (n * (n + 1)) / 2;
// }

let time1 = performance.now();
console.log(sumOfAll(10000000000));
let time2 = performance.now();

console.log(`Your time ${(time2 - time1) / 1000}`);
