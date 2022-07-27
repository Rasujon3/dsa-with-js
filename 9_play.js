// const myObject = {
//   // O(n)
//   Channel: "Code ABC",
//   Instructor: "Shahjalal rafi",
//   videos: [4, 6, 7, 9],
// };

// // console.log(Object.keys(myObject)); // O(n)
// // console.log(Object.values(myObject)); // O(n)
// // console.log(Object.entries(myObject)); // O(n)
// console.log(myObject.hasOwnProperty("Instructo")); // O(1)

let myArray = ["hello", "bello", "cello", "dello"];
myArray.unshift("ello"); // O(n) -> protitate jeye index cng korteche
myArray.shift("ello"); // O(n) -> protitate jeye index cng korteche
myArray.push("ello"); // O(1) -> protitate jeye index cng korteche
myArray.pop("ello"); // O(1) -> protitate jeye index cng korteche

console.log(myArray[3]); // O(1)
