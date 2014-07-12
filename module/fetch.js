var cheerio = require("../node_modules/cheerio"); 
var server = require("../module/curl"); 

//var url = "http://www.tuicool.com/mags/53ba57b5d91b141eb6152331" 
function fetch(res,url){
	server.download(url, function(data) { 
		if (data) { 
			//console.log(data); 
			var $ = cheerio.load(data); 

			var _title = $("h3.period-title").html();
			res.write(_title);

			
			$(".mag ol").each(function(i,e){
				/*$(e).find("a.title").each(function(n,m){
					res.write($(m).html());	
				})*/
				res.write($(e).html());
				
			})


			console.log("done"); 
		} else { 
			console.log("error"); 
		} 
	});
}

module.exports = fetch;
