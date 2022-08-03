class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
    let newNode = new Node(value);

    if (this.isEmply()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      let removeNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removeNode;
    }
    let currentNode = this.head;
    let lastNode = this.tail;
    let newLastNode;

    while (currentNode) {
      if (currentNode.next == this.tail) {
        newLastNode = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }

    newLastNode.next = null;
    this.tail = newLastNode;
    this.length--;
    return lastNode;
  }

  shift() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    this.head = currentNode.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentNode;
  }

  unsShift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
}

let list = new SinglyLinkedList();

// console.log(list);
// console.log(list.isEmply());
list.push(5);
list.push(10);
list.push(15);
list.shift();
list.shift();
list.shift();
list.unsShift(120);
list.unsShift(140);

// list.pop();
// list.pop();
// list.pop();
// list.pop();
// console.log(list.head.next.next.next);
// console.log(list.tail);
console.log(list);
// console.log(list.isEmply());
