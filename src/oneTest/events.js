//事件循环模块
var events = require('events');
//新建事件处理对象
var eventEmitter = new events.EventEmitter();
//事件处理程序
var connectHandler = function connected(){
    console.log('连接成功...');

    //触发data_received事件
    eventEmitter.emit('data_received');
}

//绑定事件
eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function(){
    console.log('数据接收成功...');
});

//触发
eventEmitter.emit('connection');

console.log('程序执行完毕...');