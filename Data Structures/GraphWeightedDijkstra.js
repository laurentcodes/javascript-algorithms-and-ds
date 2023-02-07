// Priority Queue Implementation
class PriorityQueue {
	constructor() {
		this.values = [];
	}

	// Insert -> insert element into heap
	enqueue(val, priority) {
		this.values.push({ val, priority });
		this.sort();
	}

	// Extract Max -> get maximum element and remove
	dequeue() {
		return this.values.shift();
	}

	// Sort
	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

class GraphWeighted {
	constructor() {
		this.adjacencyList = {};
	}

	// Adds a vertex (node) to graph using adjacency list
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	// Adds an edge (connection) between two vertices
	addEdge(v1, v2, weight) {
		this.adjacencyList[v1].push({ node: v2, weight });
		this.adjacencyList[v2].push({ node: v1, weight });
	}

	// Removes an edge
	removeEdge(v1, v2) {
		this.adjacencyList[v1] = this.adjacencyList[v1].filter(
			(v) => v.node !== v2
		);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(
			(v) => v.node !== v1
		);
	}

	// Dijkstra's shortest path algorithm implementation
	Dijkstra(start, finish) {
		const nodes = new PriorityQueue();

		const distances = {};
		const previous = {};

		let smallest;
		let path = [];

		// Build up initial state
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}

			previous[vertex] = null;
		}

		// As long as something to visit exists
		while (nodes.values.length) {
			smallest = nodes.dequeue().val;

			if (smallest === finish) {
				while (previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}

			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbor in this.adjacencyList[smallest]) {
					// Find neighboring node
					let nextNode = this.adjacencyList[smallest][neighbor];

					// Calculate new distance to neighboring node
					let candidate = distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.node;

					if (candidate < distances[nextNeighbor]) {
						// Updating new smallest distance to neighbor
						distances[nextNeighbor] = candidate;

						// Updating previous - how we got to neighbor
						previous[nextNeighbor] = smallest;

						// Enqueue in priority queue with new priority
						nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		}

		return path.concat(smallest).reverse();
	}
}

const graph = new GraphWeighted();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

// console.log(graph);
console.log(graph.Dijkstra('A', 'E'));
