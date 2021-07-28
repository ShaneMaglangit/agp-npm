"use strict";
exports.__esModule = true;
exports.binTagMap = exports.Tag = void 0;
/** Represents the tag attached to a given Axie. Special Axies may have the title Origin, Meo1, or Meo2 tag. */
var Tag;
(function (Tag) {
    Tag["Default"] = "";
    Tag["Origin"] = "origin";
    Tag["Meo1"] = "meo1";
    Tag["Meo2"] = "meo2";
})(Tag = exports.Tag || (exports.Tag = {}));
exports.binTagMap = new Map([['00000', Tag.Default], ['00001', Tag.Origin], ['00010', Tag.Meo1], ['00011', Tag.Meo2]]);
