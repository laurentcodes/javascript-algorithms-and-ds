const recursiveRange = (num) => {
	if (num === 0) return 0;

	return num + recursiveRange(num - 1);
};

const res = recursiveRange(10);

console.log(res);
