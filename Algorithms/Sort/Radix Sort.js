const arr = [1234, 11, 1, 234];

const getDigit = (num, place) => {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const getDigitCount = (num) => {
	if (num === 0) return 1;

	return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
	let maxDigits = 0;

	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, getDigitCount(nums[i]));
	}

	return maxDigits;
};

const radixSort = (arr) => {
	let maxDigitCount = mostDigits(arr);

	for (let i = 0; i < maxDigitCount; i++) {
		console.log(i);
		let digitBuckets = Array.from({ length: 10 }, () => []);

		for (let j = 0; j < arr.length; j++) {
			let digit = getDigit(arr[j], i);
			digitBuckets[digit].push(arr[j]);
		}

		arr = [].concat(...digitBuckets);
	}

	return arr;
};

const res = radixSort(arr);

console.log(res);
