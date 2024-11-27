class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  delete(value) {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  get(index) {
    let current = this.head;
    let count = 0;
    
    while (current) {
      if (count === index) {
        return current.value;
      }
      count++;
      current = current.next;
    }
    return null;
  }

  update(index, newValue) {
    let current = this.head;
    let count = 0;
    
    while (current) {
      if (count === index) {
        current.value = newValue;
        return true;
      }
      count++;
      current = current.next;
    }
    return false;
  }

  traverse() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }
}

const list = new LinkedList();
