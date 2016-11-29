//console.log('Hello Node !!')

var http = require('http');    // require -- to load modules

var server = http.createServer(function (request,response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World\n");
})

server.listen(7000);