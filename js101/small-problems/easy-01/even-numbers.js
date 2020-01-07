/* Log all even numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines. */

const logEvenNumbers = (start, end) => {
	let counter = start;
	while (counter <= end) {
		if (counter % 2 === 0) console.log(counter);
		counter++;
	}
};

logEvenNumbers(1, 99);
