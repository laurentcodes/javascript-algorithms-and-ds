const arr = [1, 2, 3];

const productOfArray = (arr) => {
	if (arr.length === 0) return 1;

	return arr[0] * productOfArray(arr.slice(1));
};

const res = productOfArray(arr);

console.log(res);
