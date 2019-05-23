var fs = require('fs');
var path = require('path');
var readerStream = fs.createReadStream(path.join(__dirname, '../../doc/oneTest/input.txt'));
var writerStream = fs.createWriteStream(path.join(__dirname, '../../doc/oneTest/output.txt'));
readerStream.pipe(writerStream);
console.log('程序执行完毕...');