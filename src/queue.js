const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  top = null;
  end = null;

  getUnderlyingList() {
   return this.top;
  }

  enqueue(value) {
    if(this.end) {
      let newEnd = {
        value,
        next: null
      };
      this.end.next = newEnd;
      this.end = newEnd;
    } else {
      let newTop = {
        value,
        next: null
      };
      this.top = newTop;
      this.end = newTop;
    }
  }

  dequeue() {
    if(!this.top) {
      return;
    }
    const result = this.top.value;
    this.top = this.top.next;
    return result;
  }
}

module.exports = {
  Queue
};
