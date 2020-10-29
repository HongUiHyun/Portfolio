/**
 * Stack
 *
 */

class Stack {
  constructor() {
    this.count = 0;
    this.storage = [];
  }

  push(item) {
    this.storage[this.count] = item;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  peek() {
    if (this.count === 0) {
      return "stack is empty";
    }
    return this.storage[this.count - 1];
  }

  size() {
    return this.count;
  }

  getBuffer() {
    return this.storage;
  }
}

/**
 * Queue
 */
class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(value) {
    this.storage.push(value);
  }

  dequeue() {
    this.storage.shift();
  }

  getBuffer() {
    return this.storage;
  }

  peek() {
    return this.storage[0];
  }

  size() {
    return this.storage.length;
  }
}

/**
 * Queue made with two stack
 *
 */
function twoStackQueue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}

twoStackQueue.prototype.enqueue = function (value) {
  this.inbox.push(value);
};

twoStackQueue.prototype.dequeue = function (value) {
  if (this.outbox.count == 0) {
    while (this.inbox.count != 0) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
};
