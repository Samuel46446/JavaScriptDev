var http=require("http");
console.log(http);
//ex05.js
var http = require("http");
var server = http.createServer()
server.on("request", function (request, response) {
 response.setHeader("Content-Type", "text/html");
 var html="";
 html+="<html><head><meta charset=utf-8></head>";
 html+="<body><h3>ex05 Bonjour de Node.js</h3></body>";
 html+="</html>";
 response.end(html);
});
server.listen(3000);
console.log("serveur HTTP démarré sur le port 3000. URL http://127.0.0.1:3000");
console.log("CTRL+C pour arrêter le service"); 
