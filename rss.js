var http = require("http"),
    url = require("url"),
    port = process.env.PORT || 5000, 
    urls = [
        "http://daily.manong.io/r/069xb",
        "http://feed.feedsky.com/programming_madman",
        "http://feed.feedsky.com/design_craft"
    ];

var template = require("./template.js");


http.createServer(function (req, res) { 
    
    res.writeHead(200, {
        "Content-Type": "text/html"
    });


    var _site = url.parse(req.url,true).query.site;

    template(_site,res);


}).listen(port);

console.log("HTTP Listening on: http://localhost:"+port);

