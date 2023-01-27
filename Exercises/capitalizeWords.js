const arr = ['i', 'am', 'learning', 'recursion'];

const capitalizeWords = (arr) => {
	let newArr = [];

	if (arr.length === 0) return '';

	newArr.push(arr[0].toUpperCase());

	return newArr.concat(capitalizeWords(arr.slice(1))).splice(0, arr.length);
};

const capitalizeWords2 = (arr) => {
	if (arr.length === 1) {
		return [arr[0].toUpperCase()];
	}

	let res = capitalizeWords(arr.slice(0, -1));

	res.push(arr.slice(arr.length - 1)[0].toUpperCase());

	return res;
};

const res = capitalizeWords(arr);

console.log(res);
