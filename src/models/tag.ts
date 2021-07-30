/** Represents the tag attached to a given Axie. Special Axies may have the title Origin, Meo1, or Meo2 tag. */
export enum Tag {
  Default = '',
  Origin = 'origin',
  Meo1 = 'meo1',
  Meo2 = 'meo2',
}

export const binTagMap = new Map([
  // 256 Tags
  ['00000', Tag.Default],
  ['00001', Tag.Origin],
  ['00011', Tag.Meo1],
  ['00100', Tag.Meo2],
  // 512 Tags
  ['000000000000000', Tag.Default],
  ['000000000000001', Tag.Origin],
  ['000000000000010', Tag.Meo1],
  ['000000000000011', Tag.Meo2],
]);
