class Queue {
  constructor() {
    this.dataSource = [];
  }
  enqueue(item) {
    this.dataSource.push(item);
  }
  dequeue() {
    this.dataSource.shift();
  }
  isEmpty() {
    return this.dataSource.length === 0 ? true : false;
  }
  front() {
    return this.dataSource[0];
  }
  back() {
    return this.dataSource[this.dataSource.length - 1];
  }
  toString() {
    return this.dataSource.reduce((prevValue, currentValue) => {
      return `${prevValue}
      ${currentValue}`;
    }, '');
  }
}
