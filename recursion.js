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

// function sumOfNumber(n) {
//   if (n < 0) {
//     return 0;
//   }
//   return n + sumOfNumber(n - 1);
// }
// console.log(sumOfNumber(10));

// 10 + 9
// 19 + 8

function sumOfArraySlow(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let rest = arr.slice(1);

  return arr[0] + sumOfArraySlow(rest);
}

// Time = O(n*n)= n^2
// space = O(n)

function sumOfArrayFast(arr) {
  return helperSum(arr, 0);
}

function helperSum(arr, index) {
  if (arr.length === index) return 0;

  return arr[index] + helperSum(arr, index + 1);
}

// 2 + 3 + 5 = 10
// Time = O(n)
// space = O(n)

let input = new Array(3000).fill(1);

let now = Date.now();
console.log(sumOfArraySlow(input));
let finish = Date.now();
console.log(`time elapsed for slowFunction ${finish - now} ms`);

let start = Date.now();
console.log(sumOfArrayFast(input));
let end = Date.now();
console.log(`time elapsed for fastFunction ${end - start} ms`);
