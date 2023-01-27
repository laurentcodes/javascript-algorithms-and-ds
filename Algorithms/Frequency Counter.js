const arr1 = [1, 2, 3];
const arr2 = [4, 1, 9];

const str1 = 'sad';
const str2 = 'asd';

const same = (a, b) => {
	let counter1 = {};
	let counter2 = {};

	if (a.length !== b.length) {
		return false;
	}

	for (let i = 0; i < a.length; i++) {
		counter1[a[i]] = (counter1[a[i]] || 0) + 1;
	}

	for (let i = 0; i < b.length; i++) {
		counter2[b[i]] = (counter2[b[i]] || 0) + 1;
	}

	for (let key in counter1) {
		if (!(key ** 2 in counter2)) {
			return false;
		}

		if (counter2[key ** 2] !== counter1[key]) {
			return false;
		}
	}

	return true;
};

const validAnagram = (a, b) => {
	let counter1 = {};
	let counter2 = {};

	if (a.length !== b.length) {
		return false;
	}

	for (index in a) {
		counter1[a[index]] = (counter1[a[index]] || 0) + 1;
	}

	for (index in b) {
		counter2[b[index]] = (counter2[b[index]] || 0) + 1;
	}

	for (key in counter1) {
		if (!(key in counter2)) {
			return false;
		}

		if (counter1[key] !== counter2[key]) {
			return false;
		}
	}

	return true;
};

const validAnagram2 = (a, b) => {
	let counter = {};

	if (a.length !== b.length) {
		return false;
	}

	for (index in a) {
		counter[a[index]] = (counter[a[index]] || 0) + 1;
	}

	for (index in b) {
		if (!(b[index] in counter)) {
			return false;
		} else {
			counter[b[index]] -= 1;
		}
	}

	console.log(counter);
	return true;
};

// const res = same(arr1, arr2);
const res = validAnagram(str1, str2);

console.log(res);
