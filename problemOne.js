let temperature = [-2, 4, 45, 23, -4, "error", -6, -8, 34, 43];

function getHigherAndLower(arr) {
  // create a higher variable
  let higher = arr[0];
  // create a lower variable
  let lower = arr[0];
  // iterate the whole array
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      continue;
    }
    if (higher < arr[i]) {
      higher = arr[i];
    }
    if (lower > arr[i]) {
      lower = arr[i];
    }
  }
  // let's check is there has any error
  //
  // if higher variable has smaller number than our current number then value will be our current element
  //
  // if lower variable has bigger number than our current number then value will be our current element
  //
  //   return our higher variable and lower variable
  return higher - lower;
}

console.log(getHigherAndLower(temperature));
