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

/**
 * Contains the gene information of an Axie. The information are generated based on the hex string provided
 * on the object's constructor call.
 */
export default class AxieGene {
  /** Stores the grouped binary values of the provided hex gene. */
  private geneBinGroup: GeneBinGroup;
  /** Stores the gene details after the binary values are parsed. */
  private readonly _genes: Gene;

  /**
   * Used to initialize an AxieGene object from an hex representation.
   * @param hex hex representation of an Axie's gene.
   */
  constructor(hex: string) {
    // Convert the hex string into binary and divided them to their respective groups.
    this.geneBinGroup = AxieGene.parseHex(hex);
    // Parse the binary values into their gene details.
    this._genes = this.parseGenes();
  }

  /**
   * Getter for all of the Gene details of the Axie.
   * @returns Gene Gene object that contains the set of gene information.
   */
  get genes(): Gene {
    return this._genes;
  }

  /**
   * Getter for the class of the Axie.
   * @returns Cls class of the Axie.
   */
  get cls(): Cls {
    return this._genes.cls;
  }

  /**
   * Getter for the region of the Axie.
   * @returns Region region of the Axie.
   */
  get region(): Region {
    return this._genes.region;
  }

  /**
   * Getter for the tag of the Axie.
   * @returns Tag tag of the Axie.
   */
  get tag(): Tag {
    return this._genes.tag;
  }

  /**
   * Getter for the body skin of the Axie.
   * @returns BodySkin body skin of the Axie.
   */
  get bodySkin(): BodySkin {
    return this._genes.bodySkin;
  }

  /**
   * Getter for the pattern genes of the Axie.
   * @returns PatternGene set of pattern genes of the Axie.
   */
  get pattern(): PatternGene {
    return this._genes.pattern;
  }

  /**
   * Getter for the color genes of the Axie.
   * @returns ColorGene set of color genes of the Axie.
   */
  get color(): ColorGene {
    return this._genes.color;
  }

  /**
   * Getter for the eye genes of the Axie.
   * @returns Part set of eye genes of the Axie.
   */
  get eyes(): Part {
    return this._genes.eyes;
  }

  /**
   * Getter for the ears genes of the Axie.
   * @returns Part set of ears genes of the Axie.
   */
  get ears(): Part {
    return this._genes.ears;
  }

  /**
   * Getter for the horn genes of the Axie.
   * @returns Part set of horn genes of the Axie.
   */
  get horn(): Part {
    return this._genes.horn;
  }

  /**
   * Getter for the mouth genes of the Axie.
   * @returns Part set of mouth genes of the Axie.
   */
  get mouth(): Part {
    return this._genes.mouth;
  }

  /**
   * Getter for the back genes of the Axie.
   * @returns Part set of back genes of the Axie.
   */
  get back(): Part {
    return this._genes.back;
  }

  /**
   * Getter for the tail genes of the Axie.
   * @returns Part set of tail genes of the Axie.
   */
  get tail(): Part {
    return this._genes.tail;
  }

  /**
   * Converts the hex representation of an Axie's gene into binary and divides them into
   * their respective groups
   * @private
   * @static
   * @param hex hex representation of an Axie's gene.
   * @returns GeneBinGroup a collective object that contains the grouped binary representation of the Axie's gene.
   */
  private static parseHex(hex: string): GeneBinGroup {
    let hexBin = '';
    // Remove the hex prefix.
    hex = hex.replace('0x', '');
    // Convert each hex character to its binary equivalent.
    Array.from(hex).forEach((c) => {
      hexBin += parseInt(c, 16).toString(2).padStart(4, '0');
    });
    // Fill the binary values with 0 to form a 256 bit binary values.
    hexBin = hexBin.padStart(256, '0');
    // Divide the binary values into their respective groups.
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

  /**
   * Converts the binary values into a human-readable format in the form of a Gene object.
   * @private
   * @returns Gene Gene object that contains the set of gene information.
   */
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

  /**
   * Parse the class binary values from the GeneBinGroup into a Cls object.
   * @private
   * @returns Cls class of the Axie.
   */
  private parseClass(): Cls {
    const ret = binClassMap.get(this.geneBinGroup.cls);
    if (ret === undefined) {
      throw new Error('cannot recognize class');
    }
    return ret;
  }

  /**
   * Parse the region binary values from the GeneBinGroup into a Region object.
   * @private
   * @returns Region region of the Axie.
   */
  private parseRegion(): Region {
    const ret = binRegionMap.get(this.geneBinGroup.region);
    if (ret === undefined) {
      throw new Error('cannot recognize region');
    }
    return ret;
  }

  /**
   * Parse the tag binary values from the GeneBinGroup into a Tag object.
   * @private
   * @returns Tag tag of the Axie.
   */
  private parseTag(): Tag {
    const ret = binTagMap.get(this.geneBinGroup.tag);
    if (ret === undefined) {
      throw new Error('cannot recognize tag');
    }
    return ret;
  }

  /**
   * Parse the body skin binary values from the GeneBinGroup into a BodySkin object.
   * @private
   * @returns BodySkin body skin of the Axie.
   */
  private parseBodySkin(): BodySkin {
    const ret = binBodySkin.get(this.geneBinGroup.bodySkin);
    if (ret === undefined) {
      throw new Error('cannot recognize body skin');
    }
    return ret;
  }

  /**
   * Parse the pattern gene binary values from the GeneBinGroup into a PatternGene object.
   * @private
   * @returns PatternGene pattern gene of the Axie.
   */
  private parsePatternGenes(): PatternGene {
    return {
      d: this.geneBinGroup.pattern.slice(0, 6),
      r1: this.geneBinGroup.pattern.slice(6, 12),
      r2: this.geneBinGroup.pattern.slice(12, 18),
    };
  }

  /**
   * Parse the color gene binary values from the GeneBinGroup into a ColorGene object.
   * @private
   * @returns ColorGene color gene of the Axie.
   */
  private parseColorGenes(): ColorGene {
    const cls = this.parseClass();
    const d = classColorMap.get(cls)?.get(this.geneBinGroup.color.slice(0, 4));
    const r1 = classColorMap.get(cls)?.get(this.geneBinGroup.color.slice(4, 8));
    const r2 = classColorMap.get(cls)?.get(this.geneBinGroup.color.slice(8, 12));
    if (d === undefined || r1 === undefined || r2 === undefined) throw new Error('cannot recognize color genes');
    else return { d, r1, r2 };
  }

  /**
   * Parse the part gene binary values from the GeneBinGroup into a Part object.
   * @private
   * @param partType part type that will be parsed. A part type refers to an Axie's body part including: Eyes, Ears, Mouth, Back, Horn, Tail
   * @returns Part part gene of the Axie.
   */
  private parsePart(partType: PartType): Part {
    // Get the binary value of the part that will be parsed
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

    // Get the region and skin values needed to parse the correct part gene
    const region = this.parseRegion();
    const skinBin = partBin.slice(0, 2);

    // Get the dominant gene
    const dClass = this.parsePartClass(partBin.slice(2, 6));
    const dBin = partBin.slice(6, 12);
    const dName = this.parsePartName(dClass, partType, region, dBin, skinBin);
    const d = this.parsePartGene(partType, dName);

    // Get the recessive 1 gene
    const r1Class = this.parsePartClass(partBin.slice(12, 16));
    const r1Bin = partBin.slice(16, 22);
    const r1Name = this.parsePartName(r1Class, partType, region, r1Bin);
    const r1 = this.parsePartGene(partType, r1Name);

    // Get the recessive 2 gene
    const r2Class = this.parsePartClass(partBin.slice(22, 26));
    const r2Bin = partBin.slice(26, 32);
    const r2Name = this.parsePartName(r2Class, partType, region, r2Bin);
    const r2 = this.parsePartGene(partType, r2Name);

    return { d, r1, r2, mystic: skinBin === '11' };
  }

  /**
   * Parse the class of the given part into a Cls object.
   * @private
   * @param bin binary representation of an Axie's body part.
   * @returns Cls class of the Axie's body part.
   */
  private parsePartClass(bin: string): Cls {
    const ret = binClassMap.get(bin);
    if (ret === undefined) {
      throw new Error('cannot recognize part class');
    }
    return ret;
  }

  /**
   * Parse the name of an Axie's body part based on its class, part type, region, part binary, and skin binary.
   * @private
   * @param cls class of the Axie's body part.
   * @param partType part type that will be parsed.
   * @param region region of the Axie's body part.
   * @param skinBin binary representation of the body part's skin.
   * @returns Cls class of the Axie.
   */
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

  /**
   * Converts the part type and name into a format used as the partId. A lookup is then performed from the contents
   * of the parts.json file to match the partId with the part gene presets.
   * @private
   * @param partType body part that will be parsed.
   * @param partName name of the specific body part.
   * @returns PartGene an objects that contains the part class, id, name, type, and if it is a special gene.
   */
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

  /**
   * Parses the skin of the part based on its region and skin binary value.
   * @private
   * @param region region of the Axie.
   * @param skinBin skin binary of the Axie.
   * @returns PartSkin skin of the Axie's body part.
   */
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