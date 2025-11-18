"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
var EntityRegistry_1 = require("./EntityRegistry");
var BaseEntity = /** @class */ (function () {
    function BaseEntity(id, health, attackSpeed, actions) {
        this.oldestActionIndex = 0;
        this.id = id;
        this.health = health;
        this.attackSpeed = attackSpeed;
        this.actions = actions;
    }
    BaseEntity.prototype.isAlive = function () {
        return this.health > 0;
    };
    BaseEntity.prototype.getOldestActionIndex = function () {
        return this.oldestActionIndex;
    };
    BaseEntity.prototype.chooseAction = function () {
        if (this.actions.length == this.oldestActionIndex + 1) {
            this.oldestActionIndex = 0;
        }
        else {
            this.oldestActionIndex += 1;
        }
        var action = this.actions[this.oldestActionIndex];
        return action;
    };
    BaseEntity.prototype.takeDamage = function (damage) {
        if (!(this.actions[this.oldestActionIndex].getRange().getMax() < 0) && damage > 0) {
            this.health -= damage;
        }
    };
    BaseEntity.prototype.performTurn = function (target) {
        var action = this.chooseAction();
        var actionRange = action.getRange();
        var damage = (0, EntityRegistry_1.getRandomInt)(actionRange.getMin(), actionRange.getMax());
        target.takeDamage(damage);
    };
    BaseEntity.prototype.getId = function () {
        return this.id;
    };
    BaseEntity.prototype.getHealth = function () {
        return this.health;
    };
    BaseEntity.prototype.getAttackSpeed = function () {
        return this.attackSpeed;
    };
    BaseEntity.prototype.getActions = function () {
        return this.actions;
    };
    return BaseEntity;
}());
exports.BaseEntity = BaseEntity;
