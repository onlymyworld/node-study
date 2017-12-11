var fs = require('fs');

//同步读取
var data = fs.readFileSync('../package.json');
console.log(data.toString());
console.log('同步读取文件结束！')

//异步读取
fs.readFile('../package.json',function(error,data){
	if(error){
		console.log('读取package.json失败')
	}else{
		console.log(data.toString())
	}
})
console.log('异步读取文件结束！')	//因为readFile是异步读取,所有此行代码会先执行输出