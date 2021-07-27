import { Cls } from './cls';

export interface Part {
  d: PartGene
  r1: PartGene
  r2: PartGene
  mystic: boolean
}

export interface PartGene {
  partId: string
  cls: Cls
  specialGenes: string
  type: PartType
  name: string
}

export enum PartType {
  Eyes = 'eyes',
  Ears = 'ears',
  Mouth = 'mouth',
  Horn = 'horn',
  Back = 'back',
  Tail = 'tail',
}

export enum PartSkin {
  Global = 'global',
  Mystic = 'mystic',
  Japan = 'japan',
  Xmas = 'xmas',
}
