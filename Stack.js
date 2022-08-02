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
// console.log(stack.push(5));
// console.log(stack.push(10));
// console.log(stack.push(15));
// console.log(stack.lookup());
// console.log(stack.pop());

// another stack implementation

class AnotherStack {
  constructor() {
    this.database = {};
    this.count = 0;
  }
  push(value) {
    this.count++;
    this.database[this.count] = value;
    return this.database;
  }
  pop() {
    let deleteItem = this.database[this.count];
    delete this.database[this.count];
    this.count--;
    return deleteItem;
  }
  peak() {
    return this.database[this.count];
  }
}

let stack1 = new AnotherStack();

console.log(stack1.push(10));
console.log(stack1.push(15));
console.log(stack1.pop());
console.log(stack1.peak());
