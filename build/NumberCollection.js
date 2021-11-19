"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    NumbersCollection.prototype.compare = function (left, right) {
        return this.data[left] > this.data[right];
    };
    NumbersCollection.prototype.swap = function (left, right) {
        var leftIndex = this.data[left];
        this.data[left] = this.data[right];
        this.data[right] = leftIndex;
    };
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
