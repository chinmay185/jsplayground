var fs = require('fs');
var path = require('path');
var dirName = process.argv[2];
var extention = process.argv[3];

fs.readdir(dirName, function(err, list) {
	if (!err) {
		var filesMatchingGivenExt = list.filter(function(fileName) {
			return path.extname(fileName) === ("." + extention);
		});
		filesMatchingGivenExt.forEach(function(fileName) {
			console.log(fileName);
		});
	}
});