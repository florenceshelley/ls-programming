/* Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines. */

const logOddNumbers = (start, end) => {
	let counter = start;
	while (counter <= end) {
		if (counter % 2 !== 0) console.log(counter);
		counter++;
	}
};

logOddNumbers(1, 99);
