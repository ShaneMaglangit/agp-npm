export enum Region {
  Global = 'global',
  Japan = 'japan',
}

export const binRegionMap = new Map([['00000', Region.Global], ['00001', Region.Japan]]);
