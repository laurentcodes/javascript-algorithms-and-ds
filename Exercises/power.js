const power = (base, exp) => {
	if (exp === 0) return 1;

	return base * power(base, exp - 1);
};

const res = power(2, 2);

console.log(res);
