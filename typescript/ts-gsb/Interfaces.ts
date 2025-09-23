import { Sector } from "./TypageTest";

interface Personne {
    id: string;
    nom: string;
    email: string;
}

interface Visiteur extends Personne {
    secteur: Sector;
    vehiculePersonnel?: boolean;
}

const visiteurA: Visiteur = {
    id: "1",
    nom: "Dupont",
    email: "dupont@example.com",
    secteur: Sector.NORTH,
    vehiculePersonnel: true
};

console.log(visiteurA);