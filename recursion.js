// function countDown(n) {
//   //   for (let i = n; i > 0; i--) {
//   //     console.log(i);
//   //   }
//   console.log(n);
//   n--;
//   if (n > 0) {
//     countDown(n);
//   }
// }

// countDown(10);

// let sum = 0; // 10,
// function sumOfNumber(n) {
//   //   for (let i = n; i > 0; i--) {
//   //     sum = sum + i;
//   //   }
//   //   return sum;
//   sum = sum + n;
//   n--;
//   if (n > 0) {
//     sumOfNumber(n);
//   }
//   return sum;
// }

// console.log(sumOfNumber(10));

function sumOfNumber(n) {
  if (n < 0) {
    return 0;
  }
  return n + sumOfNumber(n - 1);
}
console.log(sumOfNumber(10));

// 10 + 9
// 19 + 8
