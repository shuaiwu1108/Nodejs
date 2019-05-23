//异步读取，非阻塞，读取得同时，程序会往下执行流程
var fs = require('fs');
var path = require('path');
fs.readFile(path.join(__dirname, '../../doc/oneTest/input.txt'), function(err, data){
    if(err){
        return console.error(err);
    }
    console.log(data.toString());
});
console.log('程序执行结束');
