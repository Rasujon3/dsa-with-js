// function sum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total = total + arr[i];
//   }
//   return total;
// }

// console.log(sum([23, 4, 6])); // O(1)

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

console.log(double([3, 4, 5])); // O(n)
