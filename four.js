// function min5log(n) {
//   for (let i = 0; i <= Math.max(5, n); i++) {
//     console.log(i);
//   }
// }
// min5log(3); // O(n)

function max5log(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
max5log(2); // O(1)
