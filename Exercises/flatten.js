const arr = [1, 2, 3, [4, 5, [6]]];

const flatten = (oldArr) => {
	let newArr = [];

	for (let i = 0; i < oldArr.length; i++) {
		if (Array.isArray(oldArr[i])) {
			newArr = newArr.concat(flatten(oldArr[i]));
		} else {
			newArr.push(oldArr[i]);
		}
	}

	return newArr;
};

const res = flatten(arr);

console.log(res);
