const http = require("http");

http.createServer(function(req,res){
    console.log("server worked");
    res.setHeader("Content-Type", "text/html, charset=utf-8");
    res.write("<h1>Server response</h1>");
    res.end();
}).listen(5555)
//http.createServer server yaratmaq
//res.setHeader responsenin basligini yazmaq
//res.write response yazib gondermek
//res.end response bitirmek