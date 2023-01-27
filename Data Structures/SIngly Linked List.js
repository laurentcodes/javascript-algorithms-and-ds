// Piece of data -> val
// Reference to next node -> next

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	// Push -> add to end
	push(val) {
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;

		return this;
	}

	// Pop -> remove from end
	pop() {
		if (!this.head) return undefined;

		let current = this.head;
		let newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;

		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return current;
	}

	// Shift -> remove from beginning
	shift() {
		if (!this.head) return undefined;

		let currentHead = this.head;

		this.head = currentHead.next;
		this.length--;

		if (this.length === 0) this.tail = null;

		return currentHead;
	}

	// Unshift -> add to beginning
	unshift(val) {
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;

		return this;
	}

	// Get -> return value at passed index
	get(index) {
		if (index < 0 || index >= this.length) return null;

		let counter = 0;
		let current = this.head;

		while (counter !== index) {
			current = current.next;
			counter++;
		}

		return current;
	}

	// Set -> set value of passed index
	set(index, val) {
		let item = this.get(index);

		if (item) {
			item.val = val;
			return true;
		}

		return false;
	}

	// Insert -> insert value to index position
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);

		let newNode = new Node(val);
		let previous = this.get(index - 1);
		let temp = previous.next;

		previous.next = newNode;
		newNode.next = temp;

		this.length++;
		return true;
	}

	// Remove -> remove item at index
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let previous = this.get(index - 1);
		let removed = previous.next;

		previous.next = removed.next;
		this.length--;

		return removed;
	}

	// Reverse -> reverse list items
	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let next;
		let previous = null;

		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = previous;
			previous = node;
			node = next;
		}

		return this;
	}

	// Print -> print helper
	print() {
		let arr = [];
		let current = this.head;

		while (current) {
			arr.push(current.val);
			current = current.next;
		}

		return arr;
	}
}

let list = new SinglyLinkedList();

list.push('Hello');
list.push('World');

console.log(list.print());
