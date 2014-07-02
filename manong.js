var http = require("http");
var MaNongFeed = require('./node_modules/feed-read');

var _template = "";
MaNongFeed("http://daily.manong.io/r/069xb", function(err, data) {
  	if (err) throw err;
  	for( var i in data ){
  		_template += "<h2>"+data[i].title+"</h2>";
  		_template += data[i].content;
  	}
});

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(_template);
  response.end();
}).listen(8888);