var http = require("http");
var manong = require('./manong.js');

console.log(manong);

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World333");
  response.end();
}).listen(8888);