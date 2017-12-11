var express = require('express');
var fs = require('fs');
var app = express();
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

app.listen(8081);