export enum Service { DSI="DSI", RH="RH", COMPTA="COMPTA" }
export enum Sector { EAST="EAST", WEST="WEST", NORTH="NORTH", SOUTH="SOUTH", PARIS="PARIS" }

type Employee = {
  id: string;
  name: string;
  service: Service;
};

let employeeA: Employee = {
  id: "E001",
  name: "Alice",
  service: Service.DSI,
};

let employeeB: Employee = {
  id: "E002",
  name: "Bob",
  service: Service.RH,
};

let employeeC: Employee = {
  id: "E003",
    name: "Charlie",
    service: Service.COMPTA,
};

console.log(employeeA);
console.log(employeeB);
console.log(employeeC);

function affecterSecteur(emp: Employee, sector: Sector): string {
  return `L'employé ${emp.name} du service ${emp.service} est affecté au secteur ${sector}.`;
}

console.log(affecterSecteur(employeeA, Sector.EAST));
console.log(affecterSecteur(employeeB, Sector.WEST));
console.log(affecterSecteur(employeeC, Sector.NORTH));