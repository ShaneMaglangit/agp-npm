import { AxieGene, HexType } from '../src/axie-gene';
import { Cls } from '../src/models/cls';
import { BodySkin } from '../src/models/bodySkin';
import { Region } from '../src/models/region';
import { Tag } from '../src/models/tag';
import { PartType } from '../src/models/part';

describe('AxieGene_Global', () => {
  const axieGene = new AxieGene('0x11c642400a028ca14a428c20cc011080c61180a0820180604233082');
  it('parse class', () => {
    expect(axieGene.cls).toBe(Cls.Beast);
  });
  it('parse region', () => {
    expect(axieGene.region).toBe(Region.Global);
  });
  it('parse tag', () => {
    expect(axieGene.tag).toBe(Tag.Default);
  });
  it('parse body skin', () => {
    expect(axieGene.bodySkin).toBe(BodySkin.Normal);
  });
  it('parse pattern', () => {
    expect(axieGene.pattern).toStrictEqual({ d: '000001', r1: '000111', r2: '000110' });
  });
  it('parse color', () => {
    expect(axieGene.color).toStrictEqual({ d: 'f0c66e', r1: 'ffec51', r2: 'f0c66e' });
  });
  it('parse eyes', () => {
    const want = {
      d: {partId: "eyes-chubby", cls: Cls.Beast, specialGenes: "", type: PartType.Eyes, name: "Chubby"},
      r1: {partId: "eyes-chubby", cls: Cls.Beast, specialGenes: "", type: PartType.Eyes, name: "Chubby"},
      r2: {partId: "eyes-blossom", cls: Cls.Plant, specialGenes: "", type: PartType.Eyes, name: "Blossom"},
      mystic: false,
    }
    expect(axieGene.eyes).toStrictEqual(want);
  });
  it('parse mouth', () => {
    const want = {
      d: {partId: "mouth-tiny-turtle", cls: Cls.Reptile, specialGenes: "", type: PartType.Mouth, name: "Tiny Turtle"},
      r1: {partId: "mouth-piranha", cls: Cls.Aquatic, specialGenes: "", type: PartType.Mouth, name: "Piranha"},
      r2: {partId: "mouth-serious", cls: Cls.Plant, specialGenes: "", type: PartType.Mouth, name: "Serious"},
      mystic: false,
    }
    expect(axieGene.mouth).toStrictEqual(want);
  });
  it('parse ears', () => {
    const want = {
      d: {partId: "ears-lotus", cls: Cls.Plant, specialGenes: "", type: PartType.Ears, name: "Lotus"},
      r1: {partId: "ears-nut-cracker", cls: Cls.Beast, specialGenes: "", type: PartType.Ears, name: "Nut Cracker"},
      r2: {partId: "ears-inkling", cls: Cls.Aquatic, specialGenes: "", type: PartType.Ears, name: "Inkling"},
      mystic: false,
    }
    expect(axieGene.ears).toStrictEqual(want);
  });
  it('parse horn', () => {
    const want = {
      d: {partId: "horn-rose-bud", cls: Cls.Plant, specialGenes: "", type: PartType.Horn, name: "Rose Bud"},
      r1: {partId: "horn-caterpillars", cls: Cls.Bug, specialGenes: "", type: PartType.Horn, name: "Caterpillars"},
      r2: {partId: "horn-dual-blade", cls: Cls.Beast, specialGenes: "", type: PartType.Horn, name: "Dual Blade"},
      mystic: false,
    }
    expect(axieGene.horn).toStrictEqual(want);
  });
  it('parse back', () => {
    const want = {
      d: {partId: "back-balloon", cls: Cls.Bird, specialGenes: "", type: PartType.Back, name: "Balloon"},
      r1: {partId: "back-jaguar", cls: Cls.Beast, specialGenes: "", type: PartType.Back, name: "Jaguar"},
      r2: {partId: "back-jaguar", cls: Cls.Beast, specialGenes: "", type: PartType.Back, name: "Jaguar"},
      mystic: false,
    }
    expect(axieGene.back).toStrictEqual(want);
  });
  it('parse tail', () => {
    const want = {
      d: {partId: "tail-ant", cls: Cls.Bug, specialGenes: "", type: PartType.Tail, name: "Ant"},
      r1: {partId: "tail-hot-butt", cls: Cls.Plant, specialGenes: "", type: PartType.Tail, name: "Hot Butt"},
      r2: {partId: "tail-swallow", cls: Cls.Bird, specialGenes: "", type: PartType.Tail, name: "Swallow"},
      mystic: false,
    }
    expect(axieGene.tail).toStrictEqual(want);
  });
});

describe('AxieGene_Japan', () => {
  const axieGene = new AxieGene('0x50080000212082331482090a10a210840c83200a004128040082100604620808');
  it('parse class', () => {
    expect(axieGene.cls).toBe(Cls.Reptile);
  });
  it('parse region', () => {
    expect(axieGene.region).toBe(Region.Japan);
  });
  it('parse tag', () => {
    expect(axieGene.tag).toBe(Tag.Default);
  });
  it('parse body skin', () => {
    expect(axieGene.bodySkin).toBe(BodySkin.Normal);
  });
  it('parse pattern', () => {
    expect(axieGene.pattern).toStrictEqual({ d: '100001', r1: '001000', r2: '001000' });
  });
  it('parse color', () => {
    expect(axieGene.color).toStrictEqual({ d: 'fdbcff', r1: 'ef93ff', r2: 'ef93ff' });
  });
  it('parse eyes', () => {
    const want = {
      d: {partId: "eyes-dokuganryu", cls: Cls.Reptile, specialGenes: "japan", type: PartType.Eyes, name: "Dokuganryu"},
      r1: {partId: "eyes-mavis", cls: Cls.Bird, specialGenes: "", type: PartType.Eyes, name: "Mavis"},
      r2: {partId: "eyes-telescope", cls: Cls.Aquatic, specialGenes: "", type: PartType.Eyes, name: "Telescope"},
      mystic: false,
    }
    expect(axieGene.eyes).toStrictEqual(want);
  });
  it('parse mouth', () => {
    const want = {
      d: {partId: "mouth-geisha", cls: Cls.Aquatic, specialGenes: "japan", type: PartType.Mouth, name: "Geisha"},
      r1: {partId: "mouth-peace-maker", cls: Cls.Bird, specialGenes: "", type: PartType.Mouth, name: "Peace Maker"},
      r2: {partId: "mouth-peace-maker", cls: Cls.Bird, specialGenes: "", type: PartType.Mouth, name: "Peace Maker"},
      mystic: false,
    }
    expect(axieGene.mouth).toStrictEqual(want);
  });
  it('parse ears', () => {
    const want = {
      d: {partId: "ears-maiko", cls: Cls.Plant, specialGenes: "japan", type: PartType.Ears, name: "Maiko"},
      r1: {partId: "ears-maiko", cls: Cls.Plant, specialGenes: "japan", type: PartType.Ears, name: "Maiko"},
      r2: {partId: "ears-puppy", cls: Cls.Beast, specialGenes: "", type: PartType.Ears, name: "Puppy"},
      mystic: false,
    }
    expect(axieGene.ears).toStrictEqual(want);
  });
  it('parse horn', () => {
    const want = {
      d: {partId: "horn-kendama", cls: Cls.Beast, specialGenes: "japan", type: PartType.Horn, name: "Kendama"},
      r1: {partId: "horn-parasite", cls: Cls.Bug, specialGenes: "", type: PartType.Horn, name: "Parasite"},
      r2: {partId: "horn-kendama", cls: Cls.Beast, specialGenes: "japan", type: PartType.Horn, name: "Kendama"},
      mystic: false,
    }
    expect(axieGene.horn).toStrictEqual(want);
  });
  it('parse back', () => {
    const want = {
      d: {partId: "back-hamaya", cls: Cls.Beast, specialGenes: "japan", type: PartType.Back, name: "Hamaya"},
      r1: {partId: "back-origami", cls: Cls.Bird, specialGenes: "japan", type: PartType.Back, name: "Origami"},
      r2: {partId: "back-jaguar", cls: Cls.Beast, specialGenes: "", type: PartType.Back, name: "Jaguar"},
      mystic: false,
    }
    expect(axieGene.back).toStrictEqual(want);
  });
  it('parse tail', () => {
    const want = {
      d: {partId: "tail-maki", cls: Cls.Bug, specialGenes: "japan", type: PartType.Tail, name: "Maki"},
      r1: {partId: "tail-swallow", cls: Cls.Bird, specialGenes: "", type: PartType.Tail, name: "Swallow"},
      r2: {partId: "tail-hare", cls: Cls.Beast, specialGenes: "", type: PartType.Tail, name: "Hare"},
      mystic: false,
    }
    expect(axieGene.tail).toStrictEqual(want);
  });
});