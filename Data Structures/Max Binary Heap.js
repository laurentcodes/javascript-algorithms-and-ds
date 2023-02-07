class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	// BubbleUp -> swap element with parent if its greater
	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];

		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex];

			if (element <= parent) break;

			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}

	// Sink Down -> swap element with children
	sinkDown() {
		let index = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIndex = 2 * index + 1;
			let rightChildIndex = 2 * index + 2;

			let leftChild, rightChild;

			let swap = null;

			if (leftChildIndex < length) {
				leftChild = this.values[leftChildIndex];

				if (leftChild > element) {
					swap = leftChildIndex;
				}
			}

			if (rightChildIndex < length) {
				rightChild = this.values[rightChildIndex];

				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rightChildIndex;
				}
			}

			if (swap === null) break;

			this.values[index] = this.values[swap];
			this.values[swap] = element;

			index = swap;
		}
	}

	// Insert -> insert element into heap
	insert(el) {
		this.values.push(el);
		this.bubbleUp();
	}

	// Extract Max -> get maximum element and remove
	extractMax() {
		const max = this.values[0];
		const end = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}

		return max;
	}
}

const heap = new MaxBinaryHeap();

heap.insert(10);
heap.insert(12);
heap.insert(14);
heap.insert(1);
heap.insert(15);
heap.insert(32);

// console.log(heap.extractMax());

console.log(heap);
