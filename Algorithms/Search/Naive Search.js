const str1 = 'lorie lol';
const str2 = 'lo';

const naiveSearch = (long, short) => {
	let match = 0;

	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break;

			if (j === short.length - 1) match++;
		}
	}

	return match;
};

const res = naiveSearch(str1, str2);

console.log(res);
