const countDown = (num) => {
	if (num <= 0) {
		console.log('All done!');
		return;
	}

	num--;

	countDown(num);
};

const sumRange = (num) => {
	if (num === 1) return 1;

	return num + sumRange(num - 1);
};

const fib = (num) => {
	if (num <= 2) return 1;

	return fib(num - 1) + fib(num - 2);
};

const res = fib(10);

console.log(res);
