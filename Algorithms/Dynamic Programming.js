// Fibonacci - Memoization
const fibMemo = (num, memo = []) => {
	if (memo[num] !== undefined) return memo[num];

	if (num <= 2) return 1;

	let res = fibMemo(num - 1, memo) + fibMemo(num - 2, memo);

	memo[num] = res;

	return res;
};

const fibMemo2 = (num, memo = [undefined, 1, 1]) => {
	if (memo[num] !== undefined) return memo[num];

	let res = fibMemo2(num - 1, memo) + fibMemo2(num - 2, memo);

	memo[num] = res;

	return res;
};

// Fibonacci - Tabulation
const fibTabulation = (num) => {
	if (num <= 2) return 1;
	let fibNums = [0, 1, 1];

	for (let i = 3; i <= num; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}

	return fibNums[num];
};

const res = fibTabulation(8);

console.log(res);
