// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return false;
// };

// Better than before

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (remaining === nums[j]) {
        return [i, j];
      }
    }
  }
  return false;
};

console.log(twoSum([2, 7, 11, 15], 18));

// target = 6
// [3,2,4]

// Time Complexity = O(n^2)
