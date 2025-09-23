var Service;
(function (Service) {
    Service["DSI"] = "DSI";
    Service["RH"] = "RH";
    Service["COMPTA"] = "COMPTA";
})(Service || (Service = {}));
var Sector;
(function (Sector) {
    Sector["EAST"] = "EAST";
    Sector["WEST"] = "WEST";
    Sector["NORTH"] = "NORTH";
    Sector["SOUTH"] = "SOUTH";
})(Sector || (Sector = {}));
var employeeA = {
    id: "E001",
    name: "Alice",
    service: Service.DSI,
};
var employeeB = {
    id: "E002",
    name: "Bob",
    service: Service.RH,
};
var employeeC = {
    id: "E003",
    name: "Charlie",
    service: Service.COMPTA,
};
console.log(employeeA);
console.log(employeeB);
console.log(employeeC);
function affecterSecteur(emp, sector) {
    return "L'employ\u00E9 ".concat(emp.name, " du service ").concat(emp.service, " est affect\u00E9 au secteur ").concat(sector, ".");
}
console.log(affecterSecteur(employeeA, Sector.EAST));
console.log(affecterSecteur(employeeB, Sector.WEST));
console.log(affecterSecteur(employeeC, Sector.NORTH));
