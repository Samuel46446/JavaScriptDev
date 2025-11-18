"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntityRegistry = require("./EntityRegistry");
var E1 = EntityRegistry.warrior;
var E2 = EntityRegistry.archer;
console.log("Battle Start: ".concat(E1.getId(), " vs ").concat(E2.getId()));
console.log("".concat(E1.getId(), " Health: ").concat(E1.getHealth(), " | ").concat(E2.getId(), " Health: ").concat(E2.getHealth()));
while (E1.isAlive() && E2.isAlive()) {
    var _a = EntityRegistry.determineAttackOrder(E1, E2), first = _a.first, second = _a.second;
    first.performTurn(second);
    console.log("".concat(first.getId(), " attacks ").concat(second.getId(), " with ").concat(first.getActions()[first.getOldestActionIndex()].getName()));
    if (second.getHealth() <= 0) {
        console.log("".concat(first.getId(), " wins!"));
        break;
    }
    second.performTurn(first);
    console.log("".concat(second.getId(), " attacks ").concat(first.getId(), " with ").concat(second.getActions()[second.getOldestActionIndex()].getName()));
    if (first.getHealth() <= 0) {
        console.log("".concat(second.getId(), " wins!"));
        break;
    }
    console.log("".concat(E1.getId(), " Health: ").concat(E1.getHealth(), " | ").concat(E2.getId(), " Health: ").concat(E2.getHealth()));
}
