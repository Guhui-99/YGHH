 // let requests = require("requests");
 
 // let fs = require("fs");
 
 // let path = require("path");
 
 // requests('https://www.jsdaima.com/Uploads/js/201803/1522376449/js/rollslide.js')
 // .on('data', function (chunk) {
 //   fs.writeFile(path.resolve(__dirname,"rollslide.js"),chunk,()=>{
	//    console.log("保存成功!!");
 //   })
 // })
 
 var str = "var a = 1 + 2;console.log(a);";
 eval(str);