var fs = require('fs');
var path = require('path');
var dirName = process.argv[2];

var filesMatchingGivenExtension = function(fileName) {
	var extention = process.argv[3];
	return path.extname(fileName) === ("." + extention);
}

fs.readdir(dirName, function(err, list) {
	if (!err) {
		list.filter(filesMatchingGivenExtension)
			.forEach(function(fileName) {
				console.log(fileName);
			});
	}
});