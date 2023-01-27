class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	// Push -> push to end of list
	push(val) {
		let newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;

		return this;
	}

	//  Pop -> remove from end of list
	pop() {
		if (!this.head) return undefined;

		let poppedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}

		this.length--;

		return poppedNode;
	}

	// Shift -> remove from beginning of list
	shift() {
		if (!this.head) return undefined;

		let oldHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		this.length--;

		return oldHead;
	}

	// Unshift -> add to beginning of list
	unshift(val) {
		let newNode = new Node(val);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;

		return newNode;
	}

	// Get -> get value of index passed
	get(index) {
		if (index < 0 || index >= this.length) return null;

		let half = Math.floor(this.length / 2);

		let count, current;

		if (index <= half) {
			count = 0;
			current = this.head;

			while (count != index) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;

			while (count != index) {
				current = current.prev;
				count--;
			}
		}

		return current;
	}

	// Set -> update value of index passed
	set(index, val) {
		let node = this.get(index);

		if (node !== null) {
			node.val = val;
			return true;
		}

		return false;
	}

	// Insert -> insert value into index
	insert(index, val) {
		if (index < 0 || index >= this.length) return false;
		if (index === 0) return this.unshift(val);
		if (index === this.length - 1) return this.push(val);

		let newNode = new Node(val);

		let beforeNode = this.get(index - 1);
		let afterNode = beforeNode.next;

		beforeNode.next = newNode;
		newNode.prev = beforeNode;
		newNode.next = afterNode;
		afterNode.prev = newNode;

		this.length++;

		return true;
	}

	// Remove -> remove value from passed index
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift(index);
		if (index === this.length - 1) return this.pop();

		let node = this.get(index);

		let beforeNode = node.prev;
		let afterNode = node.next;

		beforeNode.next = afterNode;
		afterNode.prev = beforeNode;

		node.next = null;
		node.prev = null;

		this.length--;

		return node;
	}

	// Reverse -> reverse list items
	reverse() {
		// If list is empty or only has 1 node, just return the list
		if (this.length < 2) return this;

		let currentNode = this.head;

		this.head = this.tail;
		this.tail = currentNode;

		let currentPrev = null;
		let currentNext = null;

		// Traverse while there is a current node
		while (currentNode) {
			currentPrev = currentNode.prev;
			currentNext = currentNode.next;

			currentNode.prev = currentNext;
			currentNode.next = currentPrev;

			currentNode = currentNext;
		}

		return this;
	}
}

let list = new DoublyLinkedList();

list.push(1);
list.push(12);
list.push(13);
list.push(15);

console.log(list);
