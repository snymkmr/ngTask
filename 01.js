"use strict";
//Write a program to log current date and time. Adopt Interface and inherit it in the implementation class
exports.__esModule = true;
var Module = /** @class */ (function () {
    function Module(updatedTime) {
        this.updatedTime = updatedTime;
    }
    Module.prototype.getUpdatedTime = function () {
        var options = {
            day: "numeric", month: "numeric", year: "numeric",
            hour: "2-digit", minute: "2-digit"
        };
        return this.updatedTime.toLocaleDateString("en-GB", options);
    };
    return Module;
}());
exports.Module = Module;
var date = new Date(); // 09/11/2016 16:16pm (GMT)
var module = new Module(date);
console.log(module.getUpdatedTime());
