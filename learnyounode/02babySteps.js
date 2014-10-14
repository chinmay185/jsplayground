var arguments = process.argv.slice(2);

var sumOfNumbers = arguments.reduce(function(arg1, arg2) {
	return +arg1 + +arg2;
});

console.log(sumOfNumbers);