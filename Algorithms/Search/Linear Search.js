const arr = [1, 4, 5, 8, 10, 9, 2, 13];
const val = 10;

const linearSearch = (arr, val) => {
	for (index in arr) {
		if (arr[index] === val) return Number(index);
	}

	return -1;
};

const res = linearSearch(arr, val);

console.log(res);
