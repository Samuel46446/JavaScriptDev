var mysql = require('mysql');
var mysqlConnexion = mysql.createConnection({ //MySQL Laragon
 host: "imhotep.turgot-paris.fr",   // ← Ton serveur MySQL distant
 port: 10022,                        // ← Change le port si nécessaire
 user: "sturpin",
 password: "oCI2end0sZu14I3e",
 database: "sturpin_client_nodejs"
});
mysqlConnexion.connect(function(err) {
 if (err) throw err;
 mysqlConnexion.query("SELECT id,nom,prenom,entreprise FROM client;",
function (err, result, fields) {
 if (err) throw err;
 console.log(result); //un tableau de rowDataPacket
//conversion du tableau
 result= JSON.parse(JSON.stringify(result)); //un tableau d'objets JSON
 console.log(result);
 mysqlConnexion.end(function(err) {
 if (err) throw err;
 });
 });
});