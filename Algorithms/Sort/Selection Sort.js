const arr = [3, 1, 11, 13, 9, 12, 20, 8];

const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}

		if (i <= lowest) {
			let temp = arr[i];

			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}

	console.log(arr);
	return arr;
};

const selectionSort2 = (arr) => {
	const swap = (arr, ind1, ind2) => {
		[arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
	};

	for (let i = 0; i < arr.length; i++) {
		let lowest = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}

		if (i !== lowest) swap(arr, i, lowest);
	}

	console.log(arr);
	return arr;
};

const res = selectionSort2(arr);

console.log(res);
