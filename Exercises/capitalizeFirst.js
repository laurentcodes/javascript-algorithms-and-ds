const arr = ['car', 'taco', 'banana'];

const capitalizeFirst = (arr) => {
	let newArr = [];

	if (arr.length === 0) return '';

	newArr.push(arr[0][0].toUpperCase().concat(arr[0].slice(1)));

	return newArr.concat(capitalizeFirst(arr.slice(1))).splice(0, arr.length);
};

const capitalizeFirst2 = (arr) => {
	if (arr.length === 1) {
		return [arr[0][0].toUpperCase() + arr[0].substr(1)];
	}

	const res = capitalizeFirst(arr.slice(0, -1));

	const string =
		arr.slice(arr.length - 1)[0][0].toUpperCase() +
		arr.slice(arr.length - 1)[0].substr(1);

	res.push(string);

	return res;
};

const res = capitalizeFirst(arr);

console.log(res);
