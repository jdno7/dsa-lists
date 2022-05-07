/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;


  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const node = new Node(val)
    if(!this.first) {
      this.first = node
      this.size = 1
      return
    }
    this.last.next = node
    node.previous = this.last
    this.last = node
    this.length = this.length +1
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Queue;
