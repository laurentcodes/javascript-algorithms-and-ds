const args = [1, 2, 3];

const areThereDuplicates = (arg) => {
	let left = 0;
	let right = arg.length - 1;

	while (left < right) {
		if (arg[left] === arg[right]) {
			return true;
		} else if (arg[left] !== arg[right]) {
			left++;
		} else {
			right--;
		}
	}

	return false;
};

const areThereDuplicates2 = () => {
	let collection = {};

	for (let val in arguments) {
		collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
	}

	for (let key in collection) {
		if (collection[key] > 1) return true;
	}

	return false;
};

const areThereDuplicates3 = (...args) => {
	// Two pointers
	args.sort((a, b) => a > b);

	let start = 0;
	let next = 1;

	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}

		start++;
		next++;
	}

	return false;
};

const areThereDuplicates4 = () => {
	return new Set(arguments).size !== arguments.length;
};

const res = areThereDuplicates(args);

console.log(res);
