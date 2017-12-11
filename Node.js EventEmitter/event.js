var EventEmitter = require('events').EventEmitter;
var events = new EventEmitter();

/*events.on('some_event',function(){
	console.log('触发some_event');
})
setTimeout(function(){
	events.emit('some_event');
},1000)

events.on('someEvent',function(arg1,arg2){
	console.log('listener1',arg1,arg2);
})
events.on('someEvent',function(arg1){
	console.log('listener2',arg1);
})
events.emit('someEvent','arg1参数','agr2参数')*/
//监听器 #1
var listener1 = function listener1(){
	console.log('监听器listener1执行');
}
//监听器 #2
var listener2 = function listener2(){
	console.log('监听器listener2执行');
}
//绑定connection事件,处理函数为listener1
events.addListener('connection',listener1);
//绑定connection事件,处理函数为listener2
events.on('connection',listener2);
var eventListeners = require('events').EventEmitter.listenerCount(events,'connection');
console.log(eventListeners+' 个监听器监听连接事件');

//处理connection事件
events.emit('connection');

//移除监听绑定的listener1函数
events.removeListener('connection',listener1);
console.log('listener1不再受监听');

events.removeAllListeners('connection');
console.log('connection所有的监听都失效')
//触发连接事件
events.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(events,'connection');
console.log(eventListeners+' 个监听器监听连接事件');

console.log('程序执行完毕');
// events.emit('error');
