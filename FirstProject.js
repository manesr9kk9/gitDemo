const http = require('http');
const url=require("url");
//const fs=require("fs");

 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Hello World!');
 }).listen(8080);