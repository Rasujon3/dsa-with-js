function uniqueName(arr) {
  let uniqueName = [];
  for (let i = 0; i < arr.length; i++) {
    // O(n+n=n^2) -> Time Complexity -> n^2
    const element = arr[i];
    if (!uniqueName.includes(element)) {
      uniqueName.push(element);
    }
  }
  return uniqueName; // space complexity  -> n
}

// Time Complexity -> n^2
// Space Complexity  -> n

let nameArray = ["rafi", "tasib", "rakib", "rafi", "tasif", "tawrat"];

console.log(uniqueName(nameArray));
