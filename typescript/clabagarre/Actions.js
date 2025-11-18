"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsRange = exports.Actions = void 0;
var Actions = /** @class */ (function () {
    function Actions(name, range) {
        this.name = name;
        this.range = range;
    }
    Actions.prototype.getName = function () {
        return this.name;
    };
    Actions.prototype.getRange = function () {
        return this.range;
    };
    return Actions;
}());
exports.Actions = Actions;
var ActionsRange = /** @class */ (function () {
    function ActionsRange(min, max) {
        if (max === void 0) { max = min; }
        this.min = min;
        this.max = max;
    }
    ActionsRange.prototype.getMin = function () {
        return this.min;
    };
    ActionsRange.prototype.getMax = function () {
        return this.max;
    };
    return ActionsRange;
}());
exports.ActionsRange = ActionsRange;
