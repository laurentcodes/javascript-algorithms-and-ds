const str1 = 'abc';
const str2 = 'abracadabra';

const isSubSequence = (a, b) => {
	let i = 0;
	let j = 0;

	if (!a) return true;

	while (j < b.length) {
		if (b[j] === a[i]) i++;

		if (i === a.length) return true;

		j++;
	}

	return false;
};

const isSubSequence2 = (a, b) => {
	if (a.length === 0) return true;
	if (b.length === 0) return false;

	if (b[0] === a[0]) return isSubSequence(a.slice(1), b.slice(1));

	return isSubsequence(a, b.slice(1));
};

const res = isSubSequence(str1, str2);

console.log(res);
