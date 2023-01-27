const arr = [1, 2, 3];
const isOdd = (val) => val % 2 !== 0;

const someRecursive = (arr, callback) => {
	if (arr.length === 0) return false;
	if (callback(arr[0])) return true;

	return someRecursive(arr.slice(1), callback);
};

const res = someRecursive(arr, isOdd);

console.log(res);
