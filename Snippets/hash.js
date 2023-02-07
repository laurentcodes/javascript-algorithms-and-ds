const hashOld = (key, arrayLen) => {
	let total = 0;

	for (let char of key) {
		// map 'a' to 1, 'b' to 2, 'c' to 3, etc.
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLen;
	}

	return total;
};

// New improved
const hash = (key, arrayLen) => {
	let total = 0;
	let prime = 31;

	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		// map 'a' to 1, 'b' to 2, 'c' to 3, etc.
		let value = char.charCodeAt(0) - 96;

		total = (total * prime + value) % arrayLen;
	}

	return total;
};

console.log(hash('pink', 13));
console.log(hash('yellow', 13));
console.log(hash('red', 13));
console.log(hash('cyan', 13));
console.log(hash('blue', 13));

console.log(hashOld('pink', 13));
console.log(hashOld('yellow', 13));
console.log(hashOld('red', 13));
console.log(hashOld('cyan', 13));
console.log(hashOld('blue', 13));
