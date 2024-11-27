class HashNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(size = 50) {
    this.size = size;
    this.table = new Array(this.size); 
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
    }
    return hash % this.size; 
  }

  add(key, value) {
    const index = this.hash(key);
    const newNode = new HashNode(key, value);

    if (!this.table[index]) {
      this.table[index] = newNode;
    } else {
      let current = this.table[index];
      while (current) {
        if (current.key === key) {
          current.value = value;
          return;
        }
        if (!current.next) break;
        current = current.next;
      }
      current.next = newNode;
    }
  }

  delete(key) {
    const index = this.hash(key);

    if (!this.table[index]) return; 
    let current = this.table[index];
    let prev = null;

    while (current) {
      if (current.key === key) {
        if (prev === null) {
          this.table[index] = current.next;
        } else {
          prev.next = current.next;
        }
        return; 
      }
      prev = current;
      current = current.next;
    }
  }

  get(key) {
    const index = this.hash(key);

    let current = this.table[index];
    while (current) {
      if (current.key === key) {
        return current.value; 
      }
      current = current.next;
    }
    return null; 
  }

  update(key, newValue) {
    const index = this.hash(key);

    let current = this.table[index];
    while (current) {
      if (current.key === key) {
        current.value = newValue; 
        return true;
      }
      current = current.next;
    }
    return false; 
  }

  traverse() {
    let allPairs = [];
    
    for (let i = 0; i < this.size; i++) {
      let current = this.table[i];
      while (current) {
        allPairs.push(`${current.key}: ${current.value}`);
        current = current.next;
      }
    }
    
    console.log(allPairs.join(', '));
  }
}

const hashTable = new HashTable();
