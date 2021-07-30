/** Represents the region origin of a given Axie. A region can either be Global or Japan. */
export enum Region {
  Global = 'global',
  Japan = 'japan',
}

export const binRegionMap = new Map([
  // 256 Regions
  ['00000', Region.Global],
  ['00001', Region.Japan],
  // TODO: 512 Regions
  ['000000000000000000', Region.Global],
  ['000000000000000000', Region.Japan],
]);
