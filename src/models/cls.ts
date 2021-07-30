/**
 * Represents the class of a given Axie. A class is among these values:
 * Beast, Bug, Bird, Plant, Aquatic, Reptile, Mech, Dusk, Dawn.
 */
export enum Cls {
  Beast = 'beast',
  Bug = 'bug',
  Bird = 'bird',
  Plant = 'plant',
  Aquatic = 'aquatic',
  Reptile = 'reptile',
  Mech = 'mech',
  Dusk = 'dusk',
  Dawn = 'dawn',
}

export const binClassMap = new Map([
  // 256 Classes
  ['0000', Cls.Beast],
  ['0001', Cls.Bug],
  ['0010', Cls.Bird],
  ['0011', Cls.Plant],
  ['0100', Cls.Aquatic],
  ['0101', Cls.Reptile],
  ['0111', Cls.Dawn],
  ['1000', Cls.Mech],
  ['1010', Cls.Dusk],
  // 512 Classes
  ['00000', Cls.Beast],
  ['00001', Cls.Bug],
  ['00010', Cls.Bird],
  ['00011', Cls.Plant],
  ['00100', Cls.Aquatic],
  ['00101', Cls.Reptile],
  ['10000', Cls.Dawn],
  ['10001', Cls.Mech],
  ['10010', Cls.Dusk],
]);
