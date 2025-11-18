"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.archer = exports.mage = exports.warrior = void 0;
exports.getRandomInt = getRandomInt;
exports.determineAttackOrder = determineAttackOrder;
var Actions_1 = require("./Actions");
var BaseEntity_1 = require("./BaseEntity");
// Warrior entity with its actions
var atomic_commit = new Actions_1.Actions("atomic_commit", new Actions_1.ActionsRange(10));
var integrity_destroyer = new Actions_1.Actions("integrity_destroyer", new Actions_1.ActionsRange(20));
var interface_shield = new Actions_1.Actions("interface_shield", new Actions_1.ActionsRange(-1));
var warrior = new BaseEntity_1.BaseEntity("warrior", 150, 80, [atomic_commit, integrity_destroyer, interface_shield]);
exports.warrior = warrior;
// Mage entity with its actions
var contrast = new Actions_1.Actions("contrast", new Actions_1.ActionsRange(12, 15));
var alternate = new Actions_1.Actions("alternate", new Actions_1.ActionsRange(18));
var mage = new BaseEntity_1.BaseEntity("mage", 160, 60, [contrast, alternate]);
exports.mage = mage;
// Archer entity with its actions
var specificity = new Actions_1.Actions("specificity", new Actions_1.ActionsRange(10, 15));
var overflow = new Actions_1.Actions("overflow", new Actions_1.ActionsRange(20));
var archer = new BaseEntity_1.BaseEntity("archer", 150, 50, [specificity, overflow]);
exports.archer = archer;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function determineAttackOrder(p1, p2) {
    // 1. Calculate the probability for p1 to attack first
    var totalSpeed = p1.getAttackSpeed() + p2.getAttackSpeed();
    var p1InitiativeChance = p1.getAttackSpeed() / totalSpeed;
    // 2. "Roll the dice"
    if (Math.random() < p1InitiativeChance) {
        // P1 wins initiative
        return { first: p1, second: p2 };
    }
    else {
        // P2 wins initiative
        return { first: p2, second: p1 };
    }
}
