export enum Tag {
  Default = '',
  Origin = 'origin',
  Meo1 = 'meo1',
  Meo2 = 'meo2',
}

export const binTagMap = new Map([['00000', Tag.Default], ['00001', Tag.Origin], ['00010', Tag.Meo1], ['00011', Tag.Meo2]]);
