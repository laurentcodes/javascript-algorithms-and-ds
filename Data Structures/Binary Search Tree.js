class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	// Insert -> add value into tree
	insert(val) {
		let newNode = new Node(val);

		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		let current = this.root;

		while (true) {
			if (val === current.val) return undefined;

			if (val < current.val) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				} else {
					current = current.left;
				}
			} else if (val > current.val) {
				if (current.right === null) {
					current.right = newNode;
					return this;
				} else {
					current = current.right;
				}
			}
		}
	}

	// Find -> find value in tree
	find(val) {
		if (this.root === null) return false;

		let current = this.root,
			found = false;

		while (current && !found) {
			if (val < current.val) {
				current = current.left;
			} else if (val > current.val) {
				current = current.right;
			} else {
				found = true;
			}
		}

		if (!found) return false;

		return current;
	}

	// Breadth First Search -> horizontal visitation of nodes
	BFS() {
		let data = [],
			queue = [];
		let node = this.root;

		queue.push(this.root);

		while (queue.length) {
			node = queue.shift();
			data.push(node.val);

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		return data;
	}

	// Depth First Search - Pre Order
	DFSPreOrder() {
		let data = [];
		let current = this.root;

		function traverse(node) {
			data.push(node.val);

			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}

		traverse(current);

		return data;
	}

	// Depth First Search - Post Order
	DFSPostOrder() {
		let data = [];
		let current = this.root;

		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);

			data.push(node.val);
		}

		traverse(current);

		return data;
	}

	// Depth First Search - In Order
	DFSInOrder() {
		let data = [];
		let current = this.root;

		function traverse(node) {
			if (node.left) traverse(node.left);
			data.push(node.val);
			if (node.right) traverse(node.right);
		}

		traverse(current);

		return data;
	}
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(1);
tree.insert(12);
tree.insert(15);
tree.insert(11);

// console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());

// console.log(tree);
