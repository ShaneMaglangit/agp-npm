"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxieGene = void 0;
const traits_json_1 = __importDefault(require("../assets/traits.json"));
const parts_json_1 = __importDefault(require("../assets/parts.json"));
var Cls;
(function (Cls) {
    Cls["Beast"] = "beast";
    Cls["Bug"] = "bug";
    Cls["Bird"] = "bird";
    Cls["Plant"] = "plant";
    Cls["Aquatic"] = "aquatic";
    Cls["Reptile"] = "reptile";
    Cls["Mech"] = "mech";
    Cls["Dusk"] = "dusk";
    Cls["Dawn"] = "dawn";
})(Cls || (Cls = {}));
var PartType;
(function (PartType) {
    PartType["Eyes"] = "eyes";
    PartType["Ears"] = "ears";
    PartType["Mouth"] = "mouth";
    PartType["Horn"] = "horn";
    PartType["Back"] = "back";
    PartType["Tail"] = "tail";
})(PartType || (PartType = {}));
var PartSkin;
(function (PartSkin) {
    PartSkin["Global"] = "global";
    PartSkin["Mystic"] = "mystic";
    PartSkin["Japan"] = "japan";
    PartSkin["Xmas"] = "xmas";
})(PartSkin || (PartSkin = {}));
var Region;
(function (Region) {
    Region["Global"] = "global";
    Region["Japan"] = "japan";
})(Region || (Region = {}));
var Tag;
(function (Tag) {
    Tag["Default"] = "";
    Tag["Origin"] = "origin";
    Tag["Meo1"] = "meo1";
    Tag["Meo2"] = "meo2";
})(Tag || (Tag = {}));
var BodySkin;
(function (BodySkin) {
    BodySkin["Default"] = "";
    BodySkin["Frosty"] = "frosty";
})(BodySkin || (BodySkin = {}));
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
class AxieGene {
    constructor(hex) {
        this.geneBinGroup = AxieGene.parseHex(hex);
        this._genes = this.parseGenes();
    }
    get genes() {
        return this._genes;
    }
    get cls() {
        return this._genes.cls;
    }
    get region() {
        return this._genes.region;
    }
    get tag() {
        return this._genes.tag;
    }
    get bodySkin() {
        return this._genes.bodySkin;
    }
    get pattern() {
        return this._genes.pattern;
    }
    get color() {
        return this._genes.color;
    }
    get eyes() {
        return this._genes.eyes;
    }
    get ears() {
        return this._genes.ears;
    }
    get horn() {
        return this._genes.horn;
    }
    get mouth() {
        return this._genes.mouth;
    }
    get back() {
        return this._genes.back;
    }
    get tail() {
        return this._genes.tail;
    }
    static parseHex(hex) {
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
    parseGenes() {
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
    parseClass() {
        const ret = binClassMap.get(this.geneBinGroup.cls);
        if (ret === undefined) {
            throw new Error('cannot recognize class');
        }
        return ret;
    }
    parseRegion() {
        const ret = binRegionMap.get(this.geneBinGroup.region);
        if (ret === undefined) {
            throw new Error('cannot recognize region');
        }
        return ret;
    }
    parseTag() {
        const ret = binTagMap.get(this.geneBinGroup.tag);
        if (ret === undefined) {
            throw new Error('cannot recognize tag');
        }
        return ret;
    }
    parseBodySkin() {
        const ret = binBodySkin.get(this.geneBinGroup.bodySkin);
        if (ret === undefined) {
            throw new Error('cannot recognize body skin');
        }
        return ret;
    }
    parsePatternGenes() {
        return {
            d: this.geneBinGroup.pattern.slice(0, 6),
            r1: this.geneBinGroup.pattern.slice(6, 12),
            r2: this.geneBinGroup.pattern.slice(12, 18),
        };
    }
    parseColorGenes() {
        var _a, _b, _c;
        const cls = this.parseClass();
        const d = (_a = classColorMap.get(cls)) === null || _a === void 0 ? void 0 : _a.get(this.geneBinGroup.color.slice(0, 4));
        const r1 = (_b = classColorMap.get(cls)) === null || _b === void 0 ? void 0 : _b.get(this.geneBinGroup.color.slice(4, 8));
        const r2 = (_c = classColorMap.get(cls)) === null || _c === void 0 ? void 0 : _c.get(this.geneBinGroup.color.slice(8, 12));
        if (d === undefined || r1 === undefined || r2 === undefined)
            throw new Error('cannot recognize color genes');
        else
            return {
                d: this.geneBinGroup.color.slice(0, 4),
                r1: this.geneBinGroup.color.slice(4, 8),
                r2: this.geneBinGroup.color.slice(8, 12),
            };
    }
    parsePart(partType) {
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
    parsePartClass(bin) {
        const ret = binClassMap.get(bin);
        if (ret === undefined) {
            throw new Error('cannot recognize part class');
        }
        return ret;
    }
    parsePartName(cls, partType, region, partBin, skinBin = '00') {
        const skin = this.parsePartSkin(region, skinBin);
        // @ts-ignore
        const part = traits_json_1.default[cls][partType][partBin];
        if (part === undefined) {
            throw new Error('cannot recognize part binary');
        }
        const ret = part[skin];
        if (ret === undefined) {
            throw new Error('cannot recognize part skin');
        }
        return ret;
    }
    parsePartGene(partType, partName) {
        const partId = `${partType}-${partName.toLowerCase()}`.replace(' ', '-').replace('\'', '');
        // @ts-ignore
        const partJson = parts_json_1.default[partId];
        if (partJson === undefined) {
            throw new Error('cannot recognize part gene');
        }
        else
            return {
                cls: partJson.class,
                name: partJson.name,
                partId,
                specialGenes: partJson.specialGenes,
                type: partJson.type,
            };
    }
    parsePartSkin(region, skinBin) {
        switch (skinBin) {
            case '00':
                if (region === Region.Global)
                    return PartSkin.Global;
                else
                    return PartSkin.Japan;
            case '10':
                return PartSkin.Xmas;
            case '11':
                return PartSkin.Mystic;
            default:
                throw new Error('cannot recognize part skin');
        }
    }
}
exports.AxieGene = AxieGene;
