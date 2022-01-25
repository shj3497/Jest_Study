class Stack {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  }

  push(item) {
    return this.array.push(item);
  }

  pop() {
    if (this.array.length === 0) {
      throw new Error("stack length is zero");
    }
    return this.array.pop();
  }

  peek() {
    if (this.array.length === 0) {
      throw new Error("stack length is zero");
    }
    return this.array[this.array.length - 1];
  }
}

module.exports = Stack;
