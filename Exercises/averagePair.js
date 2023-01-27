const arr = [1, 3, 3, 5, 6, 7, 10, 12, 19];

const averagePair = (arr, val) => {
	if (arr.length === 0) return false;

	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const average = (arr[left] + arr[right]) / 2;

		if (average === val) {
			return true;
		} else if (average > val) {
			right--;
		} else {
			left++;
		}

		if (average !== val && right === left) {
			return false;
		}
	}
};

const averagePair2 = (arr, val) => {
	let start = 0;
	let end = arr.length - 1;

	while (start < end) {
		let avg = (arr[start] + arr[end]) / 2;

		if (avg === val) return true;
		else if (avg < val) start++;
		else end--;
	}

	return false;
};

const res = averagePair2(arr, 8);

console.log(res);
