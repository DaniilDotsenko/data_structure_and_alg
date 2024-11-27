class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head; 
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }

      current.next = newNode;
      newNode.next = this.head; 
    }
  }

  delete(value) {
    if (!this.head) return; 

    let current = this.head;
    let prev = null;

    if (this.head.value === value) {

      if (this.head.next === this.head) {
        this.head = null;
      } else {

        while (current.next !== this.head) {
          current = current.next;
        }

        current.next = this.head.next;
        this.head = this.head.next;
      }
      return;
    }

    do {
      prev = current;
      current = current.next;
      if (current.value === value) {
        prev.next = current.next;
        return;
      }
    } while (current !== this.head);
  }

  get(index) {
    if (!this.head) return null; 

    let current = this.head;
    let count = 0;

    do {
      if (count === index) {
        return current.value;
      }
      current = current.next;
      count++;
    } while (current !== this.head);

    return null;
  }

  update(index, newValue) {
    if (!this.head) return false; 

    let current = this.head;
    let count = 0;

    do {
      if (count === index) {
        current.value = newValue;
        return true;
      }
      current = current.next;
      count++;
    } while (current !== this.head);

    return false; 
  }

  traverse() {
    if (!this.head) return;

    let current = this.head;
    const values = [];
    
    do {
      values.push(current.value);
      current = current.next;
    } while (current !== this.head);

    console.log(values.join(' -> '));
  }
}

const list = new CircularLinkedList();
