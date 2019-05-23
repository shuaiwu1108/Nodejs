//同步读取文件，读取时阻塞，后面流程等待读取完毕后执行
var fs = require('fs');
var path = require('path');
var data = fs.readFileSync(path.join(__dirname, '../../doc/oneTest/input.txt'));
console.log(data.toString());
console.log('程序执行结束');