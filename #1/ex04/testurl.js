//ex09.js
var http=require("http");
var fs=require("fs");
var url=require("url");
var server=http.createServer(function(request,response){
 console.log(request.url);
 var filename=url.parse(request.url).pathname;
 if (filename=="/favicon.ico") return;
 if(filename=="/") filename="/index.html";
 filename="."+filename;
 fs.exists(filename, function(exists){
 if (!exists) filename="404.html";
 var file=fs.createReadStream(filename);
 file.pipe(response);
 })

});
server.listen(3000); 

/*
tester les URL suivantes
http://localhost:3000/ contenu de index.html
http://localhost:3000/pipo contenu de 404.html
créer un fichier statique index2.html
http://localhost:3000/index2.html contenu de index2.html 
*/