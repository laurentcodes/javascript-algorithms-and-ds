const arr = [4, 8, 2, 1, 5, 7, 6, 3];

const swap = (arr, index1, index2) => {
	let temp = arr[index1];

	arr[index1] = arr[index2];
	arr[index2] = temp;

	return arr;
};

const pivotHelper = (arr, start = 0, end = arr.length + 1) => {
	let pivot = arr[start];
	let swapIndex = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIndex++;

			swap(arr, swapIndex, i);
		}
	}

	swap(arr, start, swapIndex);

	return swapIndex;
};

const res = pivotHelper(arr);

console.log(res);
