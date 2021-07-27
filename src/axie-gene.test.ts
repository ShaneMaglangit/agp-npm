import { AxieGene } from './axie-gene';
import { Cls } from './models/cls';
import { BodySkin } from './models/bodySkin';
import { Region } from './models/region';
import { Tag } from './models/tag';
import { PartType } from './models/part';

describe('AxieGene', () => {
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
    expect(axieGene.bodySkin).toBe(BodySkin.Default);
  });
  it('parse pattern', () => {
    expect(axieGene.pattern).toStrictEqual({ d: '000001', r1: '000111', r2: '000110' });
  });
  it('parse color', () => {
    expect(axieGene.color).toStrictEqual({ d: 'f0c66e', r1: 'ffec51', r2: 'f0c66e' });
  });
  it('parse eyes', () => {
    expect(axieGene.eyes).toStrictEqual({
      d: {partId: "eyes-chubby", cls: Cls.Beast, specialGenes: "", type: PartType.Eyes, name: "Chubby"},
      r1: {partId: "eyes-chubby", cls: Cls.Beast, specialGenes: "", type: PartType.Eyes, name: "Chubby"},
      r2: {partId: "eyes-blossom", cls: Cls.Plant, specialGenes: "", type: PartType.Eyes, name: "Blossom"},
      mystic: false,
    });
  });
  it('parse mouth', () => {
    expect(axieGene.mouth).toStrictEqual({
      d: {partId: "mouth-tiny-turtle", cls: Cls.Reptile, specialGenes: "", type: PartType.Mouth, name: "Tiny Turtle"},
      r1: {partId: "mouth-piranha", cls: Cls.Aquatic, specialGenes: "", type: PartType.Mouth, name: "Piranha"},
      r2: {partId: "mouth-serious", cls: Cls.Plant, specialGenes: "", type: PartType.Mouth, name: "Serious"},
      mystic: false,
    });
  });
  it('parse ears', () => {
    expect(axieGene.ears).toStrictEqual({
      d: {partId: "ears-lotus", cls: Cls.Plant, specialGenes: "", type: PartType.Ears, name: "Lotus"},
      r1: {partId: "ears-nut-cracker", cls: Cls.Beast, specialGenes: "", type: PartType.Ears, name: "Nut Cracker"},
      r2: {partId: "ears-inkling", cls: Cls.Aquatic, specialGenes: "", type: PartType.Ears, name: "Inkling"},
      mystic: false,
    });
  });
  it('parse horn', () => {
    expect(axieGene.horn).toStrictEqual({
      d: {partId: "horn-rose-bud", cls: Cls.Plant, specialGenes: "", type: PartType.Horn, name: "Rose Bud"},
      r1: {partId: "horn-caterpillars", cls: Cls.Bug, specialGenes: "", type: PartType.Horn, name: "Caterpillars"},
      r2: {partId: "horn-dual-blade", cls: Cls.Beast, specialGenes: "", type: PartType.Horn, name: "Dual Blade"},
      mystic: false,
    });
  });
  it('parse back', () => {
    expect(axieGene.back).toStrictEqual({
      d: {partId: "back-balloon", cls: Cls.Bird, specialGenes: "", type: PartType.Back, name: "Balloon"},
      r1: {partId: "back-jaguar", cls: Cls.Beast, specialGenes: "", type: PartType.Back, name: "Jaguar"},
      r2: {partId: "back-jaguar", cls: Cls.Beast, specialGenes: "", type: PartType.Back, name: "Jaguar"},
      mystic: false,
    });
  });
  it('parse tail', () => {
    expect(axieGene.tail).toStrictEqual({
      d: {partId: "tail-ant", cls: Cls.Bug, specialGenes: "", type: PartType.Tail, name: "Ant"},
      r1: {partId: "tail-hot-butt", cls: Cls.Plant, specialGenes: "", type: PartType.Tail, name: "Hot Butt"},
      r2: {partId: "tail-swallow", cls: Cls.Bird, specialGenes: "", type: PartType.Tail, name: "Swallow"},
      mystic: false,
    });
  });
});