/**
 * RESTful
 */

var express = require('express');
var app = express();
var fs = require('fs');


// 显示用户列表
app.get('/userList',function(req,res){
	fs.readFile(__dirname+"/"+"users.json",function(err,data){
		res.end(data);
	});
})


//添加用户信息
var user = {
	"user4":{
		"name":"yuefang",
		"age":23,
		"position":'web front development'
	}
};

app.get('/addUser',function(req,res){
	fs.readFile(__dirname+"/"+"users.json",function(err,data){
		var data = JSON.parse(data);
		data['user4'] = user['user4'];
		res.end(JSON.stringify(data));
	})
})

//显示用户详情
app.get('/:id',function(req,res){
	fs.readFile(__dirname+'/'+'users.json',function(err,data){
		data = JSON.parse(data);
		var user = data['user'+req.params.id];
		res.end(JSON.stringify(user));
	})
})

//删除用户信息
app.get('/deleteUser/:id',function(req,res){
	fs.readFile(__dirname+'/'+'users.json',"utf8",function(err,data){
		data = JSON.parse(data);
		delete data['user'+req.params.id];
		res.end(JSON.stringify(data));
	})
})

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('应用实例,访问地址为：http://%s:%s',host,port);
})