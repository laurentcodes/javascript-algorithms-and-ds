const arr = [1, 4, 5, 7, 8, 10, 16, 17, 21, 32, 38, 41, 42, 45, 50];

const search = (array, val) => {
	let min = 0;
	let max = array.length - 1; 

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		let current = array[middle];

		if (current < val) {
			min = middle + 1;
		} else if (current > val) {
			max = middle - 1;
		} else {
			return middle;
		}
	}

	return -1;
};

const res = search(arr, 8);

console.log(res);
