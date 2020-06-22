// console.log(11111);

var fs = require("fs");

// fs.writeFile("a.js","console.log('你好,node')",function(err){
// 	if(err){
// 		console.log("写入失败");
// 		return;
// 	}
// 	console.log("写入成功");
// })

fs.readFile("a.js",function(err,data){
	if(err){
		console("读出失败!!!");
		return;
	}
	console.log(data.toString());
})