var fs = require("fs");

buffObj = fs.readFileSync(process.argv[2]);
strObj = buffObj.toString();
nrNewLines = strObj.split('\n');

console.log(nrNewLines.length - 1);
