const arr1 = [1, 4, 9, 10, 16, 18];
const arr2 = [2, 3, 8, 14, 20];

const merge = (arr1, arr2) => {
	let results = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			results.push(arr1[i]);
			i++;
		} else {
			results.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		results.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		results.push(arr2[j]);
		j++;
	}

	return results;
};

const res = merge(arr1, arr2);

console.log(res);
