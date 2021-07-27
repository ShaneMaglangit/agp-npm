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