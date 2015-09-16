var fs = require("fs");

fs.readFile(process.argv[2], function(err, fileContents) {
	if (err) throw err;
	nrOfNewLines = fileContents.toString().split('\n').length - 1;
	console.log(nrOfNewLines);
});
