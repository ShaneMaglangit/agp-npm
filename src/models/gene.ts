import { Pattern } from './pattern';
import { Cls } from './cls';
import { ColorGene } from './color';
import { Part } from './part';
import { BodySkin } from './bodySkin';
import { Region } from './region';
import { Tag } from './tag';

export interface Gene {
  cls: Cls
  region: Region
  tag: Tag
  bodySkin: BodySkin
  pattern: Pattern
  color: ColorGene
  eyes: Part
  mouth: Part
  ears: Part
  horn: Part
  back: Part
  tail: Part
}