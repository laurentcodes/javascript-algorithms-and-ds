const swap = (arr, index1, index2) => {
	[arr[index1], arr[index2]] = [arr[index2], arr[index1]];

	return arr;
};

const swap2 = (arr, index1, index2) => {
	let temp = arr[index1];

	arr[index1] = arr[index2];
	arr[index2] = temp;

	return arr;
};
