var http = require('http');

//匿名函数使用
/*http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":'text/plain'});
	response.write('Hello World');
	response.end();
}).listen(8081);
*/
//传递函数
function onResquest(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello World1 ------");
	response.end();
}

http.createServer(onResquest).listen(8081)