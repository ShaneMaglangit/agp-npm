"use strict";
exports.__esModule = true;
exports.binBodySkin = exports.BodySkin = void 0;
/** Represents the special skin of an Axie's body. This can either be none (default) or Frosty. */
var BodySkin;
(function (BodySkin) {
    BodySkin["Default"] = "";
    BodySkin["Frosty"] = "frosty";
})(BodySkin = exports.BodySkin || (exports.BodySkin = {}));
exports.binBodySkin = new Map([['0000', BodySkin.Default], ['0001', BodySkin.Frosty]]);
