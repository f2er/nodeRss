
var rssFeed = require('../node_modules/feed-read'),
    url = require("url"),
	urls = [
        "http://daily.manong.io/r/069xb",
        "http://feed.feedsky.com/programming_madman",
        "http://feed.feedsky.com/design_craft",
        "http://news.dbanotes.net/rss",
        "http://javascriptweekly.com/rss/123ij1h9",
        "http://mobilewebweekly.co/rss/25f32i80",
        "http://nodeweekly.com/rss/21h1c7gi",
        "http://html5weekly.com/rss/1nkpfj7c"
    ];

var fetch = require("./fetch.js"); 

function template(_site,res,req){
	if( _site == "manong" ){
    	rssFeed( urls[0],function(err,data){
    		displayManong(res,data);
    	});
    }

    if( _site == "biancheng" ){
        //fetch(res,'http://www.tuicool.com/mags/53ba57b5d91b141eb6152331');
        var args = url.parse(req.url,true).query.num;
    	rssFeed( urls[1],function(err,data){
    		fetch( res,data[args].link);
    	});
        /*rssFeed( urls[1],function(err,data){
            displayTuicool(res,data);
        });*/
    }

    if( _site == "sheji" ){
    	rssFeed( urls[2],function(err,data){
    		displayTuicool(res,data);
    	});
    }
    
    if( _site == "startup" ){
    	rssFeed( urls[3],function(err,data){
    		//displayTuicool(res,data);
            displayTuicool(res,data);
    	});
    }
    
    if( _site == "javascriptweekly" ){
    	rssFeed( urls[4],function(err,data){
    		displayTuicool(res,data);
            //displayTuicool(res,data);
    	});
    }
    
    if( _site == "mobileWeb" ){
    	rssFeed( urls[5],function(err,data){
    		displayTuicool(res,data);
            //displayTuicool(res,data);
    	});
    }
    
    if( _site == "nodeweekly" ){
    	rssFeed( urls[6],function(err,data){
    		displayTuicool(res,data);
            //displayTuicool(res,data);
    	});
    }
    
    if( _site == "html5weekly" ){
    	rssFeed( urls[7],function(err,data){
    		displayTuicool(res,data);
            //displayTuicool(res,data);
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