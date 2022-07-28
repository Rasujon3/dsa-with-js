// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let currentIndex = arr2.indexOf(arr1[i] ** 2);
//     if (currentIndex === -1) {
//       return false;
//     }
//     arr2.splice(currentIndex, 1);
//     // console.log(arr2);
//   }
//   return true;
// }

// // Time Complexity -> n*n= n^2

// console.log(same([2, 3, 6], [9, 4])); // true
// // same([2, 3, 6], [9, 4, 6]); // false
// // same([2, 3], [9, 4, 6]); // false

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let sepuenceCounter1 = {};
  let sepuenceCounter2 = {};

  for (const val of arr1) {
    // n
    sepuenceCounter1[val] = sepuenceCounter1[val] + 1 || 1;
  }
  //   console.log(sepuenceCounter1);
  for (const val of arr2) {
    // n
    sepuenceCounter2[val] = sepuenceCounter2[val] + 1 || 1;
  }
  //   console.log(sepuenceCounter2);
  for (const key in sepuenceCounter1) {
    // n
    // console.log(key, sepuenceCounter2[key ** 2]);
    if (!(key ** 2) in sepuenceCounter2) {
      return false;
    }
    if (sepuenceCounter2[key ** 2] !== sepuenceCounter1[key]) {
      return false;
    }
  }
  return true;
}

// n+n+n = 3n , so time complexity = O(n)

console.log(same([2, 3, 6], [36, 9, 4]));
