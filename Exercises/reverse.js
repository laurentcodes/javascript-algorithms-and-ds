const reverse = (str) => {
	if (str.length <= 1) return str;

	return reverse(str.slice(1)) + str[0];
};

const res = reverse('abc');

console.log(res);
