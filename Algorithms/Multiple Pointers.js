const arr = [-4, -3, -2, -1, 0, 1, 2, 3, 10];
const arr2 = [1, 1, 1, 1, 2, 3, 3, 3, 6, 6, 10, 10, 10];

const sumZero = (arr) => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const sum = arr[left] + arr[right];

		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
};

const countUniqueValues = (arr) => {
	let i = 0;

	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}

	return i + 1;
};

// const res = sumZero(arr);
const res = countUniqueValues(arr2);

console.log(res);
