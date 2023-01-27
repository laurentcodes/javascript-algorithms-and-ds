const arr = [2, 3, 4, 5, 1, 4, 10];
const num = 3;

const maxSubArraySum = (arr, num) => {
	let total = 0;
	let tempTotal = 0;

	if (arr.length < num) return null;

	for (let i = 0; i < num; i++) {
		total += arr[i];
	}

	tempTotal = total;

	for (let i = num; i < arr.length; i++) {
		tempTotal = tempTotal - arr[i - num] + arr[i];
		total = Math.max(total, tempTotal);
	}

	return total;
};

const res = maxSubArraySum(arr, num);

console.log(res);
