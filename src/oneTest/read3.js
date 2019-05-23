var fs = require('fs');
var path = require('path');
var data = '';
//创建一个可读取流
var readStream = fs.createReadStream(path.join(__dirname, '../../doc/oneTest/input.txt'));
readStream.setEncoding('UTF8');
readStream.on('data', function(chunk){
    data+=chunk;
});
readStream.on('end', function(){
    console.log(data);
});
readStream.on('error', function(err){
    console.error(err.stack);
});
console.log('程序执行完毕...');