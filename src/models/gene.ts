import { ColorGene } from './color';
import { Part } from './part';
import { Region } from './region';
import { BodySkin } from './bodySkin';
import { Cls } from './cls';
import { Tag } from './tag';
import { PatternGene } from './pattern';

/** Contains the overall data about the Axie's gene. */
export interface Gene {
  cls: Cls;
  region: Region;
  tag: Tag;
  bodySkin: BodySkin;
  pattern: PatternGene;
  color: ColorGene;
  eyes: Part;
  mouth: Part;
  ears: Part;
  horn: Part;
  back: Part;
  tail: Part;
}
