var fs = require('fs');
fs.readFile(process.argv[2], "utf-8", function(err, fileContents) {
	if (!err) {
		var lines = fileContents.split("\n").length - 1;
		console.log(lines);
	}
});