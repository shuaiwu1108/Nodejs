var fs = require('fs');
var path = require('path');
var data = 'one write...';
//创建一个可写入流
var writerStream = fs.createWriteStream(path.join(__dirname, '../../doc/oneTest/output.txt'));
writerStream.write(data, 'UTF8');
writerStream.end();
writerStream.on('finish', function(){
    console.log('写入完成...');
});
writerStream.on('error', function(err){
    console.error(err.stack);
});
console.log('程序执行完毕...');