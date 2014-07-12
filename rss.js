var http = require("http"),
    url = require("url"),
    port = process.env.PORT || 8888;
    

var template = require("./template.js");


http.createServer(function (req, res) { 
    
    res.writeHead(200, {
        "Content-Type": "text/html"
    });


    var _site = url.parse(req.url,true).query.site;

    template(_site,res,req);


}).listen(port);

console.log("HTTP Listening on: http://localhost:"+port);

