import traitsJson from '../assets/traits.json';
import partsJson from '../assets/parts.json';

interface GeneBinGroup {
  cls: string;
  reserved: string;
  region: string;
  tag: string;
  bodySkin: string;
  xMas: string;
  pattern: string;
  color: string;
  eyes: string;
  ears: string;
  horn: string;
  mouth: string;
  back: string;
  tail: string;
}

export interface Gene {
  cls: Cls
  region: Region
  tag: Tag
  bodySkin: BodySkin
  pattern: PatternGene
  color: ColorGene
  eyes: Part
  mouth: Part
  ears: Part
  horn: Part
  back: Part
  tail: Part
}

interface PatternGene {
  d: string
  r1: string
  r2: string
}

interface ColorGene {
  d: string
  r1: string
  r2: string
}

interface Part {
  d: PartGene
  r1: PartGene
  r2: PartGene
  mystic: boolean
}

interface PartGene {
  partId: string
  cls: Cls
  specialGenes: string
  type: PartType
  name: string
}

enum Cls {
  Beast = 'beast',
  Bug = 'bug',
  Bird = 'bird',
  Plant = 'plant',
  Aquatic = 'aquatic',
  Reptile = 'reptile',
  Mech = 'mech',
  Dusk = 'dusk',
  Dawn = 'dawn',
}

enum PartType {
  Eyes = 'eyes',
  Ears = 'ears',
  Mouth = 'mouth',
  Horn = 'horn',
  Back = 'back',
  Tail = 'tail',
}

enum PartSkin {
  Global = "global",
  Mystic = "mystic",
  Japan = "japan",
  Xmas = "xmas",
}

enum Region {
  Global = 'global',
  Japan = 'japan',
}

enum Tag {
  Default = '',
  Origin = 'origin',
  Meo1 = 'meo1',
  Meo2 = 'meo2',
}

enum BodySkin {
  Default = '',
  Frosty = 'frosty'
}

const binClassMap = new Map([
  ['0000', Cls.Beast],
  ['0001', Cls.Bug],
  ['0010', Cls.Bird],
  ['0011', Cls.Plant],
  ['0100', Cls.Aquatic],
  ['0101', Cls.Reptile],
  ['0111', Cls.Dawn],
  ['1000', Cls.Mech],
  ['1010', Cls.Dusk],
]);

const binRegionMap = new Map([['00000', Region.Global], ['00001', Region.Japan]]);
const binTagMap = new Map([['00000', Tag.Default], ['00001', Tag.Origin], ['00010', Tag.Meo1], ['00011', Tag.Meo2]]);
const binBodySkin = new Map([['0000', BodySkin.Default], ['0001', BodySkin.Frosty]]);
const classColorMap = new Map([
  [Cls.Beast, new Map([['0010', 'ffec51'], ['0011', 'ffa12a'], ['0100', 'f0c66e'], ['0110', '60afce']])],
  [Cls.Bug, new Map([['0010', 'ff7183'], ['0011', 'ff6d61'], ['0100', 'f74e4e']])],
  [Cls.Bird, new Map([['0010', 'ff9ab8'], ['0011', 'ffb4bb'], ['0100', 'ff778e']])],
  [Cls.Plant, new Map([['0010', 'ccef5e'], ['0011', 'efd636'], ['0100', 'c5ffd9']])],
  [Cls.Aquatic, new Map([['0010', '4cffdf'], ['0011', '2de8f2'], ['0100', '759edb'], ['0110', 'ff5a71']])],
  [Cls.Reptile, new Map([['0010', 'fdbcff'], ['0011', 'ef93ff'], ['0100', 'f5e1ff'], ['0110', '43e27d']])],
  [Cls.Mech, new Map([['0010', 'D9D9D9'], ['0011', 'D9D9D9'], ['0100', 'D9D9D9'], ['0110', 'D9D9D9']])],
  [Cls.Dusk, new Map([['0010', 'D9D9D9'], ['0011', 'D9D9D9'], ['0100', 'D9D9D9'], ['0110', 'D9D9D9']])],
  [Cls.Dawn, new Map([['0010', 'D9D9D9'], ['0011', 'D9D9D9'], ['0100', 'D9D9D9'], ['0110', 'D9D9D9']])],
]);

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
    const ret = part[skin]
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
        if (region === Region.Global) return PartSkin.Global
        else return PartSkin.Japan
      case '10':
        return PartSkin.Xmas;
      case '11':
        return PartSkin.Mystic;
      default:
        throw new Error('cannot recognize part skin');
    }
  }
}