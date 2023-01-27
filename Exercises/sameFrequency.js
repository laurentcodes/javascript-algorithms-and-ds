const sameFrequency = (a, b) => {
	const charA = a.toString();
	const charB = b.toString();

	let counterA = {};
	let counterB = {};

	for (let char in charA) {
		counterA[charA[char]] = (counterA[charA[char]] || 0) + 1;
	}

	for (let char in charB) {
		counterB[charB[char]] = (counterB[charB[char]] || 0) + 1;
	}

	for (key in counterA) {
		if (!key) {
			return false;
		}

		if (counterA[key] !== counterB[key]) {
			return false;
		}
	}

	return true;
};

const res = sameFrequency(3589578, 5879385);

console.log(res);
