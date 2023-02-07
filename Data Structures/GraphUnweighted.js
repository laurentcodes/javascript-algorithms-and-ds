class GraphUnweighted {
	constructor() {
		this.adjacencyList = {};
	}

	// Adds a vertex (node) to graph using adjacency list
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	// Adds an edge (connection) between two vertices
	addEdge(v1, v2) {
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	// Removes an edge
	removeEdge(v1, v2) {
		this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
	}

	// Removes vertex and all edges
	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();

			this.removeEdge(adjacentVertex, vertex);
		}

		delete this.adjacencyList[vertex];
	}

	// Depth First Traversal -> Recursive version
	DFTRecursive(start) {
		const result = [];
		const visited = {};

		const adjacencyList = this.adjacencyList;

		(function dfs(vertex) {
			if (!vertex) return null;

			visited[vertex] = true;
			result.push(vertex);

			adjacencyList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) return dfs(neighbor);
			});
		})(start);

		return result;
	}

	// Depth First Traversal -> Iterative version
	DFTIterative(start) {
		const stack = [start];
		const result = [];
		const visited = {};

		visited[start] = true;

		while (stack.length) {
			let currentVertex = stack.pop();

			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}

		return result;
	}

	// Breadth First Traversal
	BFT(start) {
		const queue = [start];
		const result = [];
		const visited = {};

		let currentVertex;
		visited[start] = true;

		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}

		return result;
	}
}

const graph = new GraphUnweighted();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.BFT('A'));

console.log(graph);
