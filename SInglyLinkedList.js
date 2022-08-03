class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  isEmply() {
    return this.length === 0;
  }
  push(value) {
    let newNode = {
      value: value,
      next: null,
    };
    if (this.isEmply()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

let list = new SinglyLinkedList();

// console.log(list);
// console.log(list.isEmply());
list.push(6);
list.push(10);
list.push(15);
console.log(list.head.next.next.next);
console.log(list.tail);
// console.log(list.isEmply());
