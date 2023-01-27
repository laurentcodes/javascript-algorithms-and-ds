const arr = [1234, 11, 1, 234];

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

const res = mostDigits(arr);

console.log(res);
