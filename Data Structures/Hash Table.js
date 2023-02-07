class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	// Hashing the key
	_hash(key) {
		let total = 0;
		const PRIME = 31;

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;

			total = (total * PRIME + value) % this.keyMap.length;
		}

		return total;
	}

	// Set -> accepts a key and value and hashes it,
	// and stores it via separate chaining
	set(key, val) {
		let index = this._hash(key);

		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}

		this.keyMap[index].push([key, val]);
	}

	// Get -> accepts key then hashes it and returns it
	get(key) {
		let index = this._hash(key);

		if (this.keyMap[index]) {
			for (let i = 0; i < this.keyMap[index].length; i++) {
				if (this.keyMap[index][i][0] === key) {
					return this.keyMap[index][i][1];
				}
			}
		}

		return undefined;
	}

	// Returns all keys in hash table
	keys() {
		let keys = [];

    // My Solution
		// for (let i = 0; i < this.keyMap.length; i++) {
		// 	if (this.keyMap[i]) {
		// 		if (this.keyMap[i].length > 1) {
		// 			for (let j = 0; j < this.keyMap[i].length; j++) {
		// 				keys.push(this.keyMap[i][j][0]);
		// 			}
		// 		} else {
		// 			keys.push(this.keyMap[i][0][0]);
		// 		}
		// 	}
		// }

    for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!keys.includes(this.keyMap[i][j][0])) {
						keys.push(this.keyMap[i][j][0]);
					}
				}
			}
		}

		return keys;
	}

	// Returns all values in hash table
	values() {
		let values = [];

		//My Solution
		// for (let i = 0; i < this.keyMap.length; i++) {
		// 	if (this.keyMap[i]) {
		// 		if (this.keyMap[i].length > 1) {
		// 			for (let j = 0; j < this.keyMap[i].length; j++) {
		// 				values.push(this.keyMap[i][j][1]);
		// 			}
		// 		} else {
		// 			values.push(this.keyMap[i][0][1]);
		// 		}
		// 	}
		// }

		for (let i = 0; i < this.keyMap.length; i++) {
			if (this.keyMap[i]) {
				for (let j = 0; j < this.keyMap[i].length; j++) {
					if (!values.includes(this.keyMap[i][j][1])) {
						values.push(this.keyMap[i][j][1]);
					}
				}
			}
		}

		return values;
	}
}

let table = new HashTable(17);

table.set('maroon', '#800000');
table.set('yellow', '#ffff00');
table.set('olive', '#808000');
table.set('salmon', '#fa8072');
table.set('lightcoral', '#f08080');
table.set('mediumvioletred', '#c71585');
table.set('plum', '#dda0dd');
table.set('plum', '#dda0dd');

console.log(table.keys());
console.log(table.values());

console.log(table);
