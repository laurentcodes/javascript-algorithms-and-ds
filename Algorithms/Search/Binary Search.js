const arr = [1, 4, 5, 8, 9, 10, 13];
const val = 9;

const binarySearch = (arr, val) => {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		let current = arr[middle];

		if (current < val) {
			left = middle + 1;
		} else if (current > val) {
			right = middle - 1;
		} else {
			return middle;
		}
	}

	return -1;
};

// Original Solution
const binarySearch2 = (arr, elem) => {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);

	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}

	if (arr[middle] === elem) {
		return middle;
	}

	return -1;
};

// Refactored Version
const binarySearch3 = (arr, elem) => {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);

	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) end = middle - 1;
		else start = middle + 1;

		middle = Math.floor((start + end) / 2);
	}

	return arr[middle] === elem ? middle : -1;
};

const res = binarySearch3(arr, val);

console.log(res);
