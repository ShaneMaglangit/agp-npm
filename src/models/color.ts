import { Cls } from './cls';

export interface ColorGene {
  d: string
  r1: string
  r2: string
}

export const classColorMap = new Map([
  [Cls.Beast, new Map([['0010', 'ffec51'], ['0011', 'ffa12a'], ['0100', 'f0c66e'], ['0110', '60afce']])],
  [Cls.Bug, new Map([['0010', 'ff7183'], ['0011', 'ff6d61'], ['0100', 'f74e4e']])],
  [Cls.Bird, new Map([['0010', 'ff9ab8'], ['0011', 'ffb4bb'], ['0100', 'ff778e']])],
  [Cls.Plant, new Map([['0010', 'ccef5e'], ['0011', 'efd636'], ['0100', 'c5ffd9']])],
  [Cls.Aquatic, new Map([['0010', '4cffdf'], ['0011', '2de8f2'], ['0100', '759edb'], ['0110', 'ff5a71']])],
  [Cls.Reptile, new Map([['0010', 'fdbcff'], ['0011', 'ef93ff'], ['0100', 'f5e1ff'], ['0110', '43e27d']])],
  [Cls.Mech, new Map([['0010', 'D9D9D9'], ['0011', 'D9D9D9'], ['0100', 'D9D9D9'], ['0110', 'D9D9D9']])],
  [Cls.Dusk, new Map([['0010', 'D9D9D9'], ['0011', 'D9D9D9'], ['0100', 'D9D9D9'], ['0110', 'D9D9D9']])],
  [Cls.Dawn, new Map([['0010', 'D9D9D9'], ['0011', 'D9D9D9'], ['0100', 'D9D9D9'], ['0110', 'D9D9D9']])],
]);