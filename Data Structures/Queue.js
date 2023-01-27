class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	// Add value to end of queue
	enqueue(val) {
		let newNode = new Node(val);

		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		return ++this.size;
	}

	// Remove value from start of queue
	dequeue() {
		if (!this.first) return null;

		let temp = this.first;

		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next;
		this.size--;

		return temp.val;
	}
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);
