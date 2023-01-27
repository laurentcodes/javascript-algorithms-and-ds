const obj = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: 'yup',
		},
	},
};

const nestedEvenSum = (obj, sum = 0) => {
	for (let key in obj) {
		if (typeof obj[key] === 'object') {
			sum += nestedEvenSum(obj[key]);
		} else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
			sum += obj[key];
		}
	}

	return sum;
};

const res = nestedEvenSum(obj);

console.log(res);
