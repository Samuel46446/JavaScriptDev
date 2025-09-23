const msg: string = "Bonjour GSB !";
console.log(msg);

const BATIMENT: string = "GSB";
let salle: string = "Réunion RDC";

console.log(`Je suis dans le bâtiment ${BATIMENT}, salle ${salle}.`);

salle = "Réunion Dév 2ème";
console.log(`Je suis dans le bâtiment ${BATIMENT}, salle ${salle}.`);

for (var i: number = 0; i < 5; i++) {
}
console.log(i); // Affiche 5 car 'var' n'a pas de portée de bloc