class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const newNode = new Node(value);
    
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  delete(value) {
    if (!this.head) return; 

    let current = this.head;

    if (current.value === value) {
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return;
    }

    while (current) {
      if (current.value === value) {
        if (current === this.tail) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        return;
      }
      current = current.next;
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

  traverseForward() {
    let current = this.head;
    const values = [];
    
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' <-> '));
  }

  traverseBackward() {
    let current = this.tail;
    const values = [];
    
    while (current) {
      values.push(current.value);
      current = current.prev;
    }
    console.log(values.join(' <-> '));
  }
}

const list = new DoublyLinkedList();
