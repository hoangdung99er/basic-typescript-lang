"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
        // this.collection = collection
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // if collection is an array of numbers
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
                // if collection is a string, do this logic instead:
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
