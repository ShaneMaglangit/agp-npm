import traitsJson from '../assets/traits.json';
import partsJson from '../assets/parts.json';
import { GeneBinGroup } from './models/internal/gene-bin-group';
import { Part, PartGene, PartSkin, PartType } from './models/part';
import { classColorMap, ColorGene } from './models/color';
import { binBodySkin, BodySkin } from './models/bodySkin';
import { binClassMap, Cls } from './models/cls';
import { binTagMap, Tag } from './models/tag';
import { Gene } from './models/gene';
import { binRegionMap, Region } from './models/region';
import { PatternGene } from './models/pattern';

export class AxieGene {
  private geneBinGroup: GeneBinGroup;
  private readonly _genes: Gene;

  constructor(hex: string) {
    this.geneBinGroup = AxieGene.parseHex(hex);
    this._genes = this.parseGenes();
  }

  get genes(): Gene {
    return this._genes;
  }

  get cls(): Cls {
    return this._genes.cls;
  }

  get region(): Region {
    return this._genes.region;
  }

  get tag(): Tag {
    return this._genes.tag;
  }

  get bodySkin(): BodySkin {
    return this._genes.bodySkin;
  }

  get pattern(): PatternGene {
    return this._genes.pattern;
  }

  get color(): ColorGene {
    return this._genes.color;
  }

  get eyes(): Part {
    return this._genes.eyes;
  }

  get ears(): Part {
    return this._genes.ears;
  }

  get horn(): Part {
    return this._genes.horn;
  }

  get mouth(): Part {
    return this._genes.mouth;
  }

  get back(): Part {
    return this._genes.back;
  }

  get tail(): Part {
    return this._genes.tail;
  }

  private static parseHex(hex: string): GeneBinGroup {
    let hexBin = '';
    hex = hex.replace('0x', '');
    Array.from(hex).forEach((c) => {
      hexBin += parseInt(c, 16).toString(2).padStart(4, '0');
    });
    hexBin = hexBin.padStart(256, '0');
    return {
      cls: hexBin.slice(0, 4),
      reserved: hexBin.slice(4, 8),
      region: hexBin.slice(8, 13),
      tag: hexBin.slice(13, 18),
      bodySkin: hexBin.slice(18, 22),
      xMas: hexBin.slice(22, 34),
      pattern: hexBin.slice(34, 52),
      color: hexBin.slice(52, 64),
      eyes: hexBin.slice(64, 96),
      mouth: hexBin.slice(96, 128),
      ears: hexBin.slice(128, 160),
      horn: hexBin.slice(160, 192),
      back: hexBin.slice(192, 224),
      tail: hexBin.slice(224, 256),
    };
  }

  private parseGenes(): Gene {
    return {
      cls: this.parseClass(),
      region: this.parseRegion(),
      tag: this.parseTag(),
      bodySkin: this.parseBodySkin(),
      pattern: this.parsePatternGenes(),
      color: this.parseColorGenes(),
      eyes: this.parsePart(PartType.Eyes),
      ears: this.parsePart(PartType.Ears),
      horn: this.parsePart(PartType.Horn),
      mouth: this.parsePart(PartType.Mouth),
      back: this.parsePart(PartType.Back),
      tail: this.parsePart(PartType.Tail),
    };
  }

  private parseClass(): Cls {
    const ret = binClassMap.get(this.geneBinGroup.cls);
    if (ret === undefined) {
      throw new Error('cannot recognize class');
    }
    return ret;
  }

  private parseRegion(): Region {
    const ret = binRegionMap.get(this.geneBinGroup.region);
    if (ret === undefined) {
      throw new Error('cannot recognize region');
    }
    return ret;
  }

  private parseTag(): Tag {
    const ret = binTagMap.get(this.geneBinGroup.tag);
    if (ret === undefined) {
      throw new Error('cannot recognize tag');
    }
    return ret;
  }

  private parseBodySkin(): BodySkin {
    const ret = binBodySkin.get(this.geneBinGroup.bodySkin);
    if (ret === undefined) {
      throw new Error('cannot recognize body skin');
    }
    return ret;
  }

  private parsePatternGenes(): PatternGene {
    return {
      d: this.geneBinGroup.pattern.slice(0, 6),
      r1: this.geneBinGroup.pattern.slice(6, 12),
      r2: this.geneBinGroup.pattern.slice(12, 18),
    };
  }

  private parseColorGenes(): ColorGene {
    const cls = this.parseClass();
    const d = classColorMap.get(cls)?.get(this.geneBinGroup.color.slice(0, 4));
    const r1 = classColorMap.get(cls)?.get(this.geneBinGroup.color.slice(4, 8));
    const r2 = classColorMap.get(cls)?.get(this.geneBinGroup.color.slice(8, 12));
    if (d === undefined || r1 === undefined || r2 === undefined) throw new Error('cannot recognize color genes');
    else return {
      d: this.geneBinGroup.color.slice(0, 4),
      r1: this.geneBinGroup.color.slice(4, 8),
      r2: this.geneBinGroup.color.slice(8, 12),
    };
  }

  private parsePart(partType: PartType): Part {
    let partBin;
    switch (partType) {
      case PartType.Eyes:
        partBin = this.geneBinGroup.eyes;
        break;
      case PartType.Ears:
        partBin = this.geneBinGroup.ears;
        break;
      case PartType.Horn:
        partBin = this.geneBinGroup.horn;
        break;
      case PartType.Mouth:
        partBin = this.geneBinGroup.mouth;
        break;
      case PartType.Back:
        partBin = this.geneBinGroup.back;
        break;
      default:
        partBin = this.geneBinGroup.tail;
    }
    const region = this.parseRegion();
    const skinBin = partBin.slice(0, 2);
    const dClass = this.parsePartClass(partBin.slice(2, 6));
    const dBin = partBin.slice(6, 12);
    const dName = this.parsePartName(dClass, partType, region, dBin, skinBin);
    const d = this.parsePartGene(partType, dName);

    const r1Class = this.parsePartClass(partBin.slice(12, 16));
    const r1Bin = partBin.slice(16, 22);
    const r1Name = this.parsePartName(r1Class, partType, region, r1Bin);
    const r1 = this.parsePartGene(partType, r1Name);

    const r2Class = this.parsePartClass(partBin.slice(22, 26));
    const r2Bin = partBin.slice(26, 32);
    const r2Name = this.parsePartName(r2Class, partType, region, r2Bin);
    const r2 = this.parsePartGene(partType, r2Name);

    return { d, r1, r2, mystic: skinBin === '11' };
  }

  private parsePartClass(bin: string): Cls {
    const ret = binClassMap.get(bin);
    if (ret === undefined) {
      throw new Error('cannot recognize part class');
    }
    return ret;
  }

  private parsePartName(cls: Cls, partType: PartType, region: Region, partBin: string, skinBin: string = '00'): string {
    const skin = this.parsePartSkin(region, skinBin);
    // @ts-ignore
    const part = traitsJson[cls][partType][partBin];
    if (part === undefined) {
      throw new Error('cannot recognize part binary');
    }
    const ret = part[skin];
    if (ret === undefined) {
      throw new Error('cannot recognize part skin');
    }
    return ret;
  }

  private parsePartGene(partType: PartType, partName: string): PartGene {
    const partId = `${partType}-${partName.toLowerCase()}`.replace(' ', '-').replace('\'', '');
    // @ts-ignore
    const partJson = partsJson[partId];
    if (partJson === undefined) {
      throw new Error('cannot recognize part gene');
    } else return {
      cls: partJson.class,
      name: partJson.name,
      partId,
      specialGenes: partJson.specialGenes,
      type: partJson.type,
    };
  }

  private parsePartSkin(region: Region, skinBin: string): PartSkin {
    switch (skinBin) {
      case '00':
        if (region === Region.Global) return PartSkin.Global;
        else return PartSkin.Japan;
      case '10':
        return PartSkin.Xmas;
      case '11':
        return PartSkin.Mystic;
      default:
        throw new Error('cannot recognize part skin');
    }
  }
}