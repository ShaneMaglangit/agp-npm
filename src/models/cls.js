'use strict';
exports.__esModule = true;
exports.binClassMap = exports.Cls = void 0;
/**
 * Represents the class of a given Axie. A class is among these values:
 * Beast, Bug, Bird, Plant, Aquatic, Reptile, Mech, Dusk, Dawn.
 */
var Cls;
(function (Cls) {
  Cls['Beast'] = 'beast';
  Cls['Bug'] = 'bug';
  Cls['Bird'] = 'bird';
  Cls['Plant'] = 'plant';
  Cls['Aquatic'] = 'aquatic';
  Cls['Reptile'] = 'reptile';
  Cls['Mech'] = 'mech';
  Cls['Dusk'] = 'dusk';
  Cls['Dawn'] = 'dawn';
})((Cls = exports.Cls || (exports.Cls = {})));
exports.binClassMap = new Map([
  ['0000', Cls.Beast],
  ['0001', Cls.Bug],
  ['0010', Cls.Bird],
  ['0011', Cls.Plant],
  ['0100', Cls.Aquatic],
  ['0101', Cls.Reptile],
  ['0111', Cls.Dawn],
  ['1000', Cls.Mech],
  ['1010', Cls.Dusk],
]);
