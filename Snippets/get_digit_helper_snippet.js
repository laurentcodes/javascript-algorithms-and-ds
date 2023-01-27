const getDigit = (num, place) => {
	return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

const getDigit2 = (num, place) => {
	let str = [...num.toString()].reverse();

	if (place > str.length - 1) return 0;

	return Number(str[place]);
};

const res = getDigit(12345, 0);

console.log(res);
