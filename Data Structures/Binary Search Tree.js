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
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(1);
tree.insert(12);
tree.insert(15);
tree.insert(11);
console.log(tree.find(12));

console.log(tree);
