class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    // not found
    return null;
  }
  insertAt(data, index) {
    // empty list
    if (this.head === null) {
      this.head = new Node(data);
      return this.head;
    }
    if (index === 0) {
      this.insertAtBeginning(data);
    }
    const previous = this.getAt(index - 1);
    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;
    return this.head;
  }
  insertAtEnd() {
    const newNode = new Node(data);
    // when the list is empty
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    // traverse the list to find the tail
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
  }
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }
  deleteFirst() {
    // empty, nothing to delete
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    return this.head;
  }

  deleteLast() {
    if (!this.head) {
      return null;
    }
    // if only one node in the list
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let tail = this.head.next;

    while (tail.next !== null) {
      previous = tail;
      tail = tail.next;
    }
    previous.next = null;
    return this.head;
  }
  deleteAt(index) {
    // when list is empty
    if (!this.head) {
      return;
    }
    // node needs to be deleted from the front of the list i.e. before the head.
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    // else, use getAt() to find the previous node.
    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
    return this.head;
  }
}
