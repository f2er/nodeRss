
var rssFeed = require('./node_modules/feed-read'),
	urls = [
        "http://daily.manong.io/r/069xb",
        "http://feed.feedsky.com/programming_madman",
        "http://feed.feedsky.com/design_craft"
    ];

function template(_site,res){
	if( _site == "manong" ){
    	rssFeed( urls[0],function(err,data){
    		displayManong(res,data);
    	});
    }

    if( _site == "biancheng" ){
    	rssFeed( urls[1],function(err,data){
    		displayTuicool(res,data);
    	});
    }

    if( _site == "sheji" ){
    	rssFeed( urls[2],function(err,data){
    		displayTuicool(res,data);
    	});
    }
}

function displayManong(res, data) {
	var _template = "";
	for( var i in data ){
	  	_template += "<h2>"+data[i].title+"</h2>";
  		_template += data[i].content;
  		res.write(_template);
	}
}

function displayTuicool(res,data){
	var _template = "";
	_template +="<ul>";
	for( var i in data ){
		_template += '<li><a href="'+data[i].link+'" target="_blank">'+data[i].title+'</a></li>';
	}
	_template +="</ul>";
	res.write(_template);
}


module.exports = template;