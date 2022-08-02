// Stack data Structure implementation
// lifo(Last in First Out)

class Stack {
  constructor() {
    this.arr = [];
  }
  push(value) {
    this.arr.push(value);
    return this.arr;
  }
  pop() {
    this.arr.pop();
    return this.arr;
  }
  lookup() {
    return this.arr[this.arr.length - 1];
  }
}

let stack = new Stack();
console.log(stack.push(5));
console.log(stack.push(10));
console.log(stack.push(15));
console.log(stack.lookup());
console.log(stack.pop());
