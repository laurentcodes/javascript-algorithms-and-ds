const getDigitCount = (num) => {
	if (num === 0) return 1;

	return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const getDigitCount2 = (num) => {
	if (typeof num === 'undefined') return 0;

	let str = num.toString();

	if (str[0] === '-') {
		str = str.slice(1);
	}

	return Number(str.length);
};

const res = getDigitCount2(102111);

console.log(res);
