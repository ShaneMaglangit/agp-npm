import { GeneBinGroup } from './models/internal/gene-bin-group';
import { binPartSkinMap, Part, PartGene, PartSkin, PartType } from './models/part';
import { classColorMap, ColorGene } from './models/color';
import { binBodySkin, BodySkin } from './models/bodySkin';
import { binClassMap, Cls } from './models/cls';
import { binTagMap, Tag } from './models/tag';
import { Gene } from './models/gene';
import { binRegionMap, Region } from './models/region';
import { PatternGene } from './models/pattern';

import traitsJson = require('./assets/traits.json');
import partsJson = require('./assets/parts.json');

export enum HexType {
  Bit256 = 256,
  Bit512 = 512,
}

/**
 * Stores the gene information of an Axie. These informations are parsed from the provided hex representation of
 * the Axie's gene on its constructor call. Supports both 256 and 512 bit hex genes.
 *
 * **Usage**
 *
 * Javascript
 *
 * ```javascript
 * const { AxieGene } = require("agp-npm-test/dist/src/axie-gene");
 * const axieGene = new AxieGene("0x11c642400a028ca14a428c20cc011080c61180a0820180604233082");
 * ```
 *
 * Typescript
 *
 * ```typescript
 * const axieGene = new AxieGene("0x11c642400a028ca14a428c20cc011080c61180a0820180604233082");
 * ```
 */
export class AxieGene {
  /** Stores the grouped binary values from the hex value. */
  private geneBinGroup: GeneBinGroup;
  /** Stores the gene details from the parsed binary values. */
  private readonly _genes: Gene;
  /** Stores the gene hex type wether its in 256 or 512 bit. */
  private readonly _hexType: HexType;

  /**
   * Used to initialize an AxieGene object from a hex representation of the Axie's gene.
   * @param hex hex representation of the Axie's gene.
   * @param hexType represents if the provided hex gene is in 256 or 512 bit.
   */
  constructor(hex: string, hexType: HexType = HexType.Bit256) {
    this._hexType = hexType;
    // Convert the hex string into binary and divided them to their respective groups.
    this.geneBinGroup = this.parseHex(hex);
    // Parse the binary values into their gene details.
    this._genes = this.parseGenes();
  }

  /**
   * Getter for all of the details of the Axie's gene.
   * @returns Objects that contains all of the details about of the Axie's gene.
   */
  get genes(): Gene {
    return this._genes;
  }

  /**
   * Getter for the class of the Axie.
   * @returns Class of the Axie.
   */
  get cls(): Cls {
    return this._genes.cls;
  }

  /**
   * Getter for the region of the Axie.
   * @returns Region of the Axie.
   */
  get region(): Region {
    return this._genes.region;
  }

  /**
   * Getter for the tag associated with the Axie.
   * @returns Tag associated with the Axie.
   */
  get tag(): Tag {
    return this._genes.tag;
  }

  /**
   * Getter for the body skin of the Axie.
   * @returns Skin of the Axie's body.
   */
  get bodySkin(): BodySkin {
    return this._genes.bodySkin;
  }

  /**
   * Getter for the pattern genes of the Axie.
   * @returns Genes for the Axie's pattern.
   */
  get pattern(): PatternGene {
    return this._genes.pattern;
  }

  /**
   * Getter for the color genes of the Axie.
   * @returns Genes for the Axie's color.
   */
  get color(): ColorGene {
    return this._genes.color;
  }

  /**
   * Getter for the eye genes of the Axie.
   * @returns Genes for the Axie's eye.
   */
  get eyes(): Part {
    return this._genes.eyes;
  }

  /**
   * Getter for the ears genes of the Axie.
   * @returns Genes for the Axie's ears.
   */
  get ears(): Part {
    return this._genes.ears;
  }

  /**
   * Getter for the horn genes of the Axie.
   * @returns Genes for the Axie's horns.
   */
  get horn(): Part {
    return this._genes.horn;
  }

  /**
   * Getter for the mouth genes of the Axie.
   * @returns Genes for the Axie's mouth.
   */
  get mouth(): Part {
    return this._genes.mouth;
  }

  /**
   * Getter for the back genes of the Axie.
   * @returns Genes for the Axie's back.
   */
  get back(): Part {
    return this._genes.back;
  }

  /**
   * Getter for the tail genes of the Axie.
   * @returns Genes for the Axie's tail.
   */
  get tail(): Part {
    return this._genes.tail;
  }

  /**
   * Converts the hex into its binary representation and divides them based on their respective respective groups.
   * Each group represents a part of an Axie.
   * @private
   * @param hex hex representation of an Axie's gene.
   * @returns An object that contains the binary value from the hex. The binary values are divided into their respective
   * group based on the gene detail that they represent.
   */
  private parseHex(hex: string): GeneBinGroup {
    let hexBin = '';
    // Remove the hex prefix.
    hex = hex.replace('0x', '');
    // Convert each hex character to its binary equivalent.
    Array.from(hex).forEach((c) => {
      hexBin += parseInt(c, 16).toString(2).padStart(4, '0');
    });
    // Fill the binary values with leadings 0s.
    hexBin = hexBin.padStart(this._hexType.valueOf(), '0');
    // Divide the binary values into their respective groups.
    return {
      cls:
        this._hexType === HexType.Bit256
          ? hexBin.slice(0, 4)
          : hexBin.slice(0, 5),
      region:
        this._hexType === HexType.Bit256
          ? hexBin.slice(8, 13)
          : hexBin.slice(22, 40),
      tag:
        this._hexType === HexType.Bit256
          ? hexBin.slice(13, 18)
          : hexBin.slice(40, 55),
      bodySkin:
        this._hexType === HexType.Bit256
          ? hexBin.slice(18, 22)
          : hexBin.slice(61, 65),
      xMas: this._hexType === HexType.Bit256 ? hexBin.slice(22, 34) : '',
      pattern:
        this._hexType === HexType.Bit256
          ? hexBin.slice(34, 52)
          : hexBin.slice(65, 92),
      color:
        this._hexType === HexType.Bit256
          ? hexBin.slice(52, 64)
          : hexBin.slice(92, 110),
      eyes:
        this._hexType === HexType.Bit256
          ? hexBin.slice(64, 96)
          : hexBin.slice(143, 192),
      mouth:
        this._hexType === HexType.Bit256
          ? hexBin.slice(96, 128)
          : hexBin.slice(207, 256),
      ears:
        this._hexType === HexType.Bit256
          ? hexBin.slice(128, 160)
          : hexBin.slice(271, 320),
      horn:
        this._hexType === HexType.Bit256
          ? hexBin.slice(160, 192)
          : hexBin.slice(335, 384),
      back:
        this._hexType === HexType.Bit256
          ? hexBin.slice(192, 224)
          : hexBin.slice(399, 448),
      tail:
        this._hexType === HexType.Bit256
          ? hexBin.slice(224, 256)
          : hexBin.slice(463, 512),
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
    const bSize = this.geneBinGroup.pattern.length / 3;
    return {
      d: this.geneBinGroup.pattern.slice(0, bSize),
      r1: this.geneBinGroup.pattern.slice(bSize, bSize * 2),
      r2: this.geneBinGroup.pattern.slice(bSize * 2, bSize * 3),
    };
  }

  /**
   * Parse the color gene binary values from the GeneBinGroup into a ColorGene object.
   * @private
   * @returns ColorGene color gene of the Axie.
   */
  private parseColorGenes(): ColorGene {
    const bSize = this.geneBinGroup.color.length / 3;
    const cls = this.parseClass();
    const d = classColorMap
      .get(cls)
      ?.get(this.geneBinGroup.color.slice(0, bSize));
    const r1 = classColorMap
      .get(cls)
      ?.get(this.geneBinGroup.color.slice(bSize, bSize * 2).slice(-4));
    const r2 = classColorMap
      .get(cls)
      ?.get(this.geneBinGroup.color.slice(bSize * 2, bSize * 3).slice(-4));
    if (d === undefined || r1 === undefined || r2 === undefined)
      throw new Error('cannot recognize color genes');
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
    const regionBin = this.geneBinGroup.region;
    const skinBin = partBin.slice(0, 2);

    // Get the dominant gene
    const dClass = this.parsePartClass(partBin.slice(2, 6));
    const dBin = partBin.slice(6, 12);
    const dName = this.parsePartName(dClass, partType, regionBin, dBin, skinBin);
    const d = this.parsePartGene(partType, dName);

    // Get the recessive 1 gene
    const r1Class = this.parsePartClass(partBin.slice(12, 16));
    const r1Bin = partBin.slice(16, 22);
    const r1Name = this.parsePartName(r1Class, partType, regionBin, r1Bin);
    const r1 = this.parsePartGene(partType, r1Name);

    // Get the recessive 2 gene
    const r2Class = this.parsePartClass(partBin.slice(22, 26));
    const r2Bin = partBin.slice(26, 32);
    const r2Name = this.parsePartName(r2Class, partType, regionBin, r2Bin);
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
  private parsePartName(
    cls: Cls,
    partType: PartType,
    regionBin: string,
    partBin: string,
    skinBin: string = '00'
  ): string {
    const skin = this.parsePartSkin(regionBin, skinBin);
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
    const partId = `${partType}-${partName.toLowerCase()}`
      .replace(' ', '-')
      .replace("'", '');
    // @ts-ignore
    const partJson = partsJson[partId];
    if (partJson === undefined) {
      throw new Error('cannot recognize part gene');
    } else
      return {
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
  private parsePartSkin(regionBin: string, skinBin: string): PartSkin {
    let ret = binPartSkinMap.get(skinBin)
    if (skinBin === '00') {
      if(this.geneBinGroup.xMas === '010101010101') ret = PartSkin.Xmas1;
      else ret = binPartSkinMap.get(regionBin);
    }
    if (ret === undefined) {
      throw new Error('cannot recognize part skin');
    }
    return ret;
  }
}
