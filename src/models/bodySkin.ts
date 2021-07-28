/** Represents the special skin of an Axie's body. This can either be none (default) or Frosty. */
export enum BodySkin {
  Default = '',
  Frosty = 'frosty',
}

export const binBodySkin = new Map([
  ['0000', BodySkin.Default],
  ['0001', BodySkin.Frosty],
]);
