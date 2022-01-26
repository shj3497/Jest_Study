class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
  }

  size() {
    return this._size;
  }

  push(item) {
    // return this.array.push(item);
    const node = { item, next: this.head };
    this.head = node;
    this._size++;
  }

  pop() {
    if (this.head === null) {
      throw new Error("stack length is zero");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.item;
  }

  peek() {
    if (this.head === null) {
      throw new Error("stack length is zero");
    }
    const node = this.head;
    return node.item;
  }
}

module.exports = Stack;
