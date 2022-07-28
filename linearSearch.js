// Write a function take an array and a value. Find the value from the array and return the index of where find the value.

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element == value) return i;
    // if (element == value) return `The position of ${value} is ${i}`;
  }
  return -1;
}

console.log(linearSearch([2, 3, 5, 6], 6));
