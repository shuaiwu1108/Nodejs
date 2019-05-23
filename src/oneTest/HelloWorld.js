// var http = require('http');
// http.createServer(function(request, response){
//     response.writeHead(200, {'Content-type':'text/plain'});
//     response.end('Hello World\n');
// }).listen(9000);
// console.log('服务已启动 http://127.0.0.1:9000/');


//将方法暴露到文件之外访问，使用exports
exports.world = function(){
    console.log('HelloWorld...');
}