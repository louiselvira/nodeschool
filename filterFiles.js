var fs = require('fs')
var path = require('path')
var dirName = process.argv[2]
var fileExt = "." + process.argv[3]

fs.readdir(dirName, function callback(err, fileList) {
	if (err) throw err
	var matchingFiles = ""
	for (var i = 0; i < fileList.length; i++) {
		if (path.extname(fileList[i]) === fileExt) {
			matchingFiles += fileList[i] + "\n"
		}
	}
	console.log(matchingFiles.slice(0,-1))
})
