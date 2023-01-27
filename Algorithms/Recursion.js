const countDown = (num) => {
	if (num <= 0) {
		console.log('All done!');
		return;
	}

	console.log(num);
	num--;

	countDown(num);
};

const sumRange = (num) => {
	if (num === 1) return 1;

	return num + sumRange(num - 1);
};

const res = sumRange(3);

console.log(res);
