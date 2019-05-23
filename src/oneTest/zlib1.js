var fs = require('fs');
var path = require('path');
var zlib = require('zlib');
fs.createReadStream(path.join(__dirname, '../../doc/oneTest/input.txt'))
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream(path.join(__dirname, '../../doc/oneTest/input.txt.gz')));
console.log('文件压缩完成...');