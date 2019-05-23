var fs = require('fs');
var path = require('path');
var zlib = require('zlib');
fs.createReadStream(path.join(__dirname, '../../doc/oneTest/input.txt.gz'))
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream(path.join(__dirname, '../../doc/oneTest/input.txt')));
console.log('文件解压完成...');