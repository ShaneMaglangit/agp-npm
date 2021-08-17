/** Represents the special skin of an Axie's body. This can either be none (default) or Frosty. */
export enum BodySkin {
  Normal = '',
  Frosty = 'frosty',
}

export const binBodySkin = new Map([
  ['0000', BodySkin.Normal],
  ['0001', BodySkin.Frosty]
]);
