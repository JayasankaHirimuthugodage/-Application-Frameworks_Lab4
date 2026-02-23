console.log("Lab 04 -Initial Setup Successful");


const fs = require('fs'); 
fs.readFile('file.txt', 'utf8', function (err, data) { 
if (err) throw err; 
console.log(data); 
}); 

 
fs.writeFile('file.txt', 'Hello World!', function (err) { 
  if (err) throw err; 
  console.log('File saved!'); 
}); 


const http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

const myModule = require('./my-module.js');
console.log(myModule.myFunction());