class Student {
	constructor(firstName, lastName, year) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = year;
		this.tardies = 0;
		this.scores = [];
	}

	// Instance Method
	fullName() {
		return `Your full name is ${this.firstName} ${this.lastName}`;
	}

	// Instance Method
	markLate() {
		this.tardies += 1;
		if (this.tardies >= 3) return 'You are expelled!';
		return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
	}

	// Instance Method
	addScore(score) {
		this.scores.push(score);
		return this.scores;
	}

	// Instance Method
	calculateAverage() {
		let sum = this.scores.reduce((a, b) => a + b);
		return sum / this.scores.length;
	}

	static EnrollStudents() {
		return 'ENROLLING STUDENTS';
	}
}

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	// Static Method
	static distance(a, b) {
		const dx = a.x - b.x;
		const dy = a.y - b.y;

		return Math.hypot(dx, dy);
	}
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
