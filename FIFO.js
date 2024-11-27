class Queue {
  constructor() {
    this.items = [];
  }

  add(value) {
    this.items.push(value);
  }

  delete() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return null;
    }
    return this.items.shift(); 
  }

  get(index) {
    if (index < 0 || index >= this.items.length) {
      console.log("Index out of range.");
      return null;
    }
    return this.items[index];
  }

  update(index, newValue) {
    if (index < 0 || index >= this.items.length) {
      console.log("Index out of range.");
      return false;
    }
    this.items[index] = newValue;
    return true;
  }

  traverse() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
      return;
    }
    console.log(this.items.join(' <- ')); 
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();
