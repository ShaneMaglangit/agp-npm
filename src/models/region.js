"use strict";
exports.__esModule = true;
exports.binRegionMap = exports.Region = void 0;
/** Represents the region origin of a given Axie. A region can either be Global or Japan. */
var Region;
(function (Region) {
    Region["Global"] = "global";
    Region["Japan"] = "japan";
})(Region = exports.Region || (exports.Region = {}));
exports.binRegionMap = new Map([['00000', Region.Global], ['00001', Region.Japan]]);
