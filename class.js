class Datastructure {
  constructor() {
    this.storage = [];
  }
  insert(value) {
    this.storage.push(value);
    return this.storage;
  }
  insertEnd(value) {
    this.storage.unshift(value);
    return this.storage;
  }
}

let ds = new Datastructure();
console.log(ds.insert(20));
console.log(ds.insert(30));
console.log(ds.insert(50));
console.log(ds.insertEnd(90));
console.log(ds.insert(9000));
