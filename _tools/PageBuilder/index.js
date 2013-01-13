var fs = require("fs");
var jshtml = require("jshtml");

var output = "";
var write = function(lineStr) {
	console.log(lineStr + ':rf');
	output += lineStr.replace(/\r\n\t/g, '');
}
var end = function() {
	console.log(output);
}

var templateValue = fs.readFileSync(__dirname + '/../../_views/blogs/list.jshtml', 'utf8');
jshtml.renderAsync(write, end, templateValue, {});