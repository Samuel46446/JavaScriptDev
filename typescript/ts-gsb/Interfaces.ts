import { Sector } from "./TypageTest.ts";

interface Personne {
    id: string;
    nom: string;
    email: string;
}

interface Visiteur extends Personne {
    secteur: Sector;
    vehiculePersonnel?: boolean;
}

abstract class Value<ClassType> {
    public constructor() {}
    value!: ClassType;
    public get(): ClassType
    {
        return this.value;
    }
};


const visiteurA: Visiteur = {
    id: "1",
    nom: "Dupont",
    email: "dupont@example.com",
    secteur: Sector.NORTH,
    vehiculePersonnel: true
};

const vVal: Value<Visiteur> = {
    value: visiteurA,
    get(): Visiteur { return super.get(); }
};

console.log(visiteurA);
console.log(vVal.get());