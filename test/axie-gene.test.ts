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
      d: { partId: 'eyes-chubby', cls: Cls.Beast, specialGenes: '', type: PartType.Eyes, name: 'Chubby' },
      r1: { partId: 'eyes-chubby', cls: Cls.Beast, specialGenes: '', type: PartType.Eyes, name: 'Chubby' },
      r2: { partId: 'eyes-blossom', cls: Cls.Plant, specialGenes: '', type: PartType.Eyes, name: 'Blossom' },
      mystic: false,
    };
    expect(axieGene.eyes).toStrictEqual(want);
  });
  it('parse mouth', () => {
    const want = {
      d: { partId: 'mouth-tiny-turtle', cls: Cls.Reptile, specialGenes: '', type: PartType.Mouth, name: 'Tiny Turtle' },
      r1: { partId: 'mouth-piranha', cls: Cls.Aquatic, specialGenes: '', type: PartType.Mouth, name: 'Piranha' },
      r2: { partId: 'mouth-serious', cls: Cls.Plant, specialGenes: '', type: PartType.Mouth, name: 'Serious' },
      mystic: false,
    };
    expect(axieGene.mouth).toStrictEqual(want);
  });
  it('parse ears', () => {
    const want = {
      d: { partId: 'ears-lotus', cls: Cls.Plant, specialGenes: '', type: PartType.Ears, name: 'Lotus' },
      r1: { partId: 'ears-nut-cracker', cls: Cls.Beast, specialGenes: '', type: PartType.Ears, name: 'Nut Cracker' },
      r2: { partId: 'ears-inkling', cls: Cls.Aquatic, specialGenes: '', type: PartType.Ears, name: 'Inkling' },
      mystic: false,
    };
    expect(axieGene.ears).toStrictEqual(want);
  });
  it('parse horn', () => {
    const want = {
      d: { partId: 'horn-rose-bud', cls: Cls.Plant, specialGenes: '', type: PartType.Horn, name: 'Rose Bud' },
      r1: { partId: 'horn-caterpillars', cls: Cls.Bug, specialGenes: '', type: PartType.Horn, name: 'Caterpillars' },
      r2: { partId: 'horn-dual-blade', cls: Cls.Beast, specialGenes: '', type: PartType.Horn, name: 'Dual Blade' },
      mystic: false,
    };
    expect(axieGene.horn).toStrictEqual(want);
  });
  it('parse back', () => {
    const want = {
      d: { partId: 'back-balloon', cls: Cls.Bird, specialGenes: '', type: PartType.Back, name: 'Balloon' },
      r1: { partId: 'back-jaguar', cls: Cls.Beast, specialGenes: '', type: PartType.Back, name: 'Jaguar' },
      r2: { partId: 'back-jaguar', cls: Cls.Beast, specialGenes: '', type: PartType.Back, name: 'Jaguar' },
      mystic: false,
    };
    expect(axieGene.back).toStrictEqual(want);
  });
  it('parse tail', () => {
    const want = {
      d: { partId: 'tail-ant', cls: Cls.Bug, specialGenes: '', type: PartType.Tail, name: 'Ant' },
      r1: { partId: 'tail-hot-butt', cls: Cls.Plant, specialGenes: '', type: PartType.Tail, name: 'Hot Butt' },
      r2: { partId: 'tail-swallow', cls: Cls.Bird, specialGenes: '', type: PartType.Tail, name: 'Swallow' },
      mystic: false,
    };
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
      d: {
        partId: 'eyes-dokuganryu',
        cls: Cls.Reptile,
        specialGenes: 'japan',
        type: PartType.Eyes,
        name: 'Dokuganryu',
      },
      r1: { partId: 'eyes-mavis', cls: Cls.Bird, specialGenes: '', type: PartType.Eyes, name: 'Mavis' },
      r2: { partId: 'eyes-telescope', cls: Cls.Aquatic, specialGenes: '', type: PartType.Eyes, name: 'Telescope' },
      mystic: false,
    };
    expect(axieGene.eyes).toStrictEqual(want);
  });
  it('parse mouth', () => {
    const want = {
      d: { partId: 'mouth-geisha', cls: Cls.Aquatic, specialGenes: 'japan', type: PartType.Mouth, name: 'Geisha' },
      r1: { partId: 'mouth-peace-maker', cls: Cls.Bird, specialGenes: '', type: PartType.Mouth, name: 'Peace Maker' },
      r2: { partId: 'mouth-peace-maker', cls: Cls.Bird, specialGenes: '', type: PartType.Mouth, name: 'Peace Maker' },
      mystic: false,
    };
    expect(axieGene.mouth).toStrictEqual(want);
  });
  it('parse ears', () => {
    const want = {
      d: { partId: 'ears-maiko', cls: Cls.Plant, specialGenes: 'japan', type: PartType.Ears, name: 'Maiko' },
      r1: { partId: 'ears-maiko', cls: Cls.Plant, specialGenes: 'japan', type: PartType.Ears, name: 'Maiko' },
      r2: { partId: 'ears-puppy', cls: Cls.Beast, specialGenes: '', type: PartType.Ears, name: 'Puppy' },
      mystic: false,
    };
    expect(axieGene.ears).toStrictEqual(want);
  });
  it('parse horn', () => {
    const want = {
      d: { partId: 'horn-kendama', cls: Cls.Beast, specialGenes: 'japan', type: PartType.Horn, name: 'Kendama' },
      r1: { partId: 'horn-parasite', cls: Cls.Bug, specialGenes: '', type: PartType.Horn, name: 'Parasite' },
      r2: { partId: 'horn-kendama', cls: Cls.Beast, specialGenes: 'japan', type: PartType.Horn, name: 'Kendama' },
      mystic: false,
    };
    expect(axieGene.horn).toStrictEqual(want);
  });
  it('parse back', () => {
    const want = {
      d: { partId: 'back-hamaya', cls: Cls.Beast, specialGenes: 'japan', type: PartType.Back, name: 'Hamaya' },
      r1: { partId: 'back-origami', cls: Cls.Bird, specialGenes: 'japan', type: PartType.Back, name: 'Origami' },
      r2: { partId: 'back-jaguar', cls: Cls.Beast, specialGenes: '', type: PartType.Back, name: 'Jaguar' },
      mystic: false,
    };
    expect(axieGene.back).toStrictEqual(want);
  });
  it('parse tail', () => {
    const want = {
      d: { partId: 'tail-maki', cls: Cls.Bug, specialGenes: 'japan', type: PartType.Tail, name: 'Maki' },
      r1: { partId: 'tail-swallow', cls: Cls.Bird, specialGenes: '', type: PartType.Tail, name: 'Swallow' },
      r2: { partId: 'tail-hare', cls: Cls.Beast, specialGenes: '', type: PartType.Tail, name: 'Hare' },
      mystic: false,
    };
    expect(axieGene.tail).toStrictEqual(want);
  });
});

describe('AxieGene_Japan_512bit', () => {
  const axieGene = new AxieGene('0x280000000000010040412090830C0000000101942040440A00010190284082040001018C2061000A000101801021400400010180204080060001018418404008', HexType.Bit512);
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
    expect(axieGene.pattern).toStrictEqual({ d: '100000001', r1: '000001001', r2: '000001001' });
  });
  it('parse color', () => {
    expect(axieGene.color).toStrictEqual({ d: 'fdbcff', r1: 'ef93ff', r2: 'ef93ff' });
  });
  it('parse eyes', () => {
    const want = {
      d: {
        partId: 'eyes-dokuganryu',
        cls: Cls.Reptile,
        specialGenes: 'japan',
        type: PartType.Eyes,
        name: 'Dokuganryu',
      },
      r1: { partId: 'eyes-mavis', cls: Cls.Bird, specialGenes: '', type: PartType.Eyes, name: 'Mavis' },
      r2: { partId: 'eyes-telescope', cls: Cls.Aquatic, specialGenes: '', type: PartType.Eyes, name: 'Telescope' },
      mystic: false,
    };
    expect(axieGene.eyes).toStrictEqual(want);
  });
  it('parse mouth', () => {
    const want = {
      d: { partId: 'mouth-geisha', cls: Cls.Aquatic, specialGenes: 'japan', type: PartType.Mouth, name: 'Geisha' },
      r1: { partId: 'mouth-peace-maker', cls: Cls.Bird, specialGenes: '', type: PartType.Mouth, name: 'Peace Maker' },
      r2: { partId: 'mouth-peace-maker', cls: Cls.Bird, specialGenes: '', type: PartType.Mouth, name: 'Peace Maker' },
      mystic: false,
    };
    expect(axieGene.mouth).toStrictEqual(want);
  });
  it('parse ears', () => {
    const want = {
      d: { partId: 'ears-maiko', cls: Cls.Plant, specialGenes: 'japan', type: PartType.Ears, name: 'Maiko' },
      r1: { partId: 'ears-maiko', cls: Cls.Plant, specialGenes: 'japan', type: PartType.Ears, name: 'Maiko' },
      r2: { partId: 'ears-puppy', cls: Cls.Beast, specialGenes: '', type: PartType.Ears, name: 'Puppy' },
      mystic: false,
    };
    expect(axieGene.ears).toStrictEqual(want);
  });
  it('parse horn', () => {
    const want = {
      d: { partId: 'horn-kendama', cls: Cls.Beast, specialGenes: 'japan', type: PartType.Horn, name: 'Kendama' },
      r1: { partId: 'horn-parasite', cls: Cls.Bug, specialGenes: '', type: PartType.Horn, name: 'Parasite' },
      r2: { partId: 'horn-kendama', cls: Cls.Beast, specialGenes: 'japan', type: PartType.Horn, name: 'Kendama' },
      mystic: false,
    };
    expect(axieGene.horn).toStrictEqual(want);
  });
  it('parse back', () => {
    const want = {
      d: { partId: 'back-hamaya', cls: Cls.Beast, specialGenes: 'japan', type: PartType.Back, name: 'Hamaya' },
      r1: { partId: 'back-origami', cls: Cls.Bird, specialGenes: 'japan', type: PartType.Back, name: 'Origami' },
      r2: { partId: 'back-jaguar', cls: Cls.Beast, specialGenes: '', type: PartType.Back, name: 'Jaguar' },
      mystic: false,
    };
    expect(axieGene.back).toStrictEqual(want);
  });
  it('parse tail', () => {
    const want = {
      d: { partId: 'tail-maki', cls: Cls.Bug, specialGenes: 'japan', type: PartType.Tail, name: 'Maki' },
      r1: { partId: 'tail-swallow', cls: Cls.Bird, specialGenes: '', type: PartType.Tail, name: 'Swallow' },
      r2: { partId: 'tail-hare', cls: Cls.Beast, specialGenes: '', type: PartType.Tail, name: 'Hare' },
      mystic: false,
    };
    expect(axieGene.tail).toStrictEqual(want);
  });
});

// Summer parts and body don't exist in 256bit genes
describe('AxieGene_Summer_WavyBody_256bit', () => {
  const axieGene = new AxieGene('0x800000000a1ca212044408081080080a002118441423300c00c3300800222082');
  it('parse class', () => {
    expect(axieGene.cls).toBe(Cls.Mech);
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
    expect(axieGene.pattern).toStrictEqual({ d: '001010', r1: '000111', r2: '001010' });
  });
  it('parse color', () => {
    expect(axieGene.color).toStrictEqual({ d: 'D9D9D9', r1: '0001', r2: 'D9D9D9' });
  });
  it('parse eyes', () => {
    const want = {
      d: {
        partId: 'eyes-neo',
        cls: Cls.Bug,
        specialGenes: '',
        type: PartType.Eyes,
        name: 'Neo',
      },
      r1: { partId: 'eyes-sleepless', cls: Cls.Aquatic, specialGenes: '', type: PartType.Eyes, name: 'Sleepless' },
      r2: { partId: 'eyes-puppy', cls: Cls.Beast, specialGenes: '', type: PartType.Eyes, name: 'Puppy' },
      mystic: false,
    };
    expect(axieGene.eyes).toStrictEqual(want);
  });
  it('parse mouth', () => {
    const want = {
      d: { partId: 'mouth-risky-fish', cls: Cls.Aquatic, specialGenes: '', type: PartType.Mouth, name: 'Risky Fish' },
      r1: { partId: 'mouth-nut-cracker', cls: Cls.Beast, specialGenes: '', type: PartType.Mouth, name: 'Nut Cracker' },
      r2: { partId: 'mouth-confident', cls: Cls.Beast, specialGenes: '', type: PartType.Mouth, name: 'Confident' },
      mystic: false,
    };
    expect(axieGene.mouth).toStrictEqual(want);
  });
  it('parse ears', () => {
    const want = {
      d: { partId: 'ears-nyan', cls: Cls.Beast, specialGenes: '', type: PartType.Ears, name: 'Nyan' },
      r1: { partId: 'ears-ear-breathing', cls: Cls.Bug, specialGenes: '', type: PartType.Ears, name: 'Ear Breathing' },
      r2: { partId: 'ears-beetle-spike', cls: Cls.Bug, specialGenes: '', type: PartType.Ears, name: 'Beetle Spike' },
      mystic: false,
    };
    expect(axieGene.ears).toStrictEqual(want);
  });
  it('parse horn', () => {
    const want = {
      d: { partId: 'horn-unko', cls: Cls.Reptile, specialGenes: '', type: PartType.Horn, name: 'Unko' },
      r1: { partId: 'horn-watermelon', cls: Cls.Plant, specialGenes: '', type: PartType.Horn, name: 'Watermelon' },
      r2: { partId: 'horn-arco', cls: Cls.Beast, specialGenes: '', type: PartType.Horn, name: 'Arco' },
      mystic: false,
    };
    expect(axieGene.horn).toStrictEqual(want);
  });
  it('parse back', () => {
    const want = {
      d: { partId: 'back-furball', cls: Cls.Beast, specialGenes: '', type: PartType.Back, name: 'Furball' },
      r1: { partId: 'back-pumpkin', cls: Cls.Plant, specialGenes: '', type: PartType.Back, name: 'Pumpkin' },
      r2: { partId: 'back-risky-beast', cls: Cls.Beast, specialGenes: '', type: PartType.Back, name: 'Risky Beast' },
      mystic: false,
    };
    expect(axieGene.back).toStrictEqual(want);
  });
  it('parse tail', () => {
    const want = {
      d: { partId: 'tail-cottontail', cls: Cls.Beast, specialGenes: '', type: PartType.Tail, name: 'Cottontail' },
      r1: { partId: 'tail-cloud', cls: Cls.Bird, specialGenes: '', type: PartType.Tail, name: 'Cloud' },
      r2: { partId: 'tail-swallow', cls: Cls.Bird, specialGenes: '', type: PartType.Tail, name: 'Swallow' },
      mystic: false,
    };
    expect(axieGene.tail).toStrictEqual(want);
  });
});

describe('AxieGene_Summer_WavyBody_512bit', () => {
  const axieGene = new AxieGene('0x800000000000000102c100b0810800000000030410804008000003102000400a000003000820c104000003140861800c00000300306180080000030008410202', HexType.Bit512);
  it('parse class', () => {
    expect(axieGene.cls).toBe(Cls.Mech);
  });
  it('parse region', () => {
    expect(axieGene.region).toBe(Region.Global);
  });
  it('parse tag', () => {
    expect(axieGene.tag).toBe(Tag.Default);
  });
  it('parse body skin', () => {
    expect(axieGene.bodySkin).toBe(BodySkin.Wavy);
  });
  it('parse pattern', () => {
    expect(axieGene.pattern).toStrictEqual({ d: '000001011', r1: '000001000', r2: '000001011' });
  });
  it('parse color', () => {
    expect(axieGene.color).toStrictEqual({ d: 'D9D9D9', r1: '000001', r2: 'D9D9D9' });
  });
  it('parse eyes', () => {
    const want = {
      d: {
        partId: 'eyes-flower-sunglasses',
        cls: Cls.Bug,
        specialGenes: 'summer-2022',
        type: PartType.Eyes,
        name: 'Flower Sunglasses',
      },
      r1: { partId: 'eyes-sleepless', cls: Cls.Aquatic, specialGenes: '', type: PartType.Eyes, name: 'Sleepless' },
      r2: { partId: 'eyes-puppy', cls: Cls.Beast, specialGenes: '', type: PartType.Eyes, name: 'Puppy' },
      mystic: false,
    };
    expect(axieGene.eyes).toStrictEqual(want);
  });
  it('parse mouth', () => {
    const want = {
      d: { partId: 'mouth-bubble-fish', cls: Cls.Aquatic, specialGenes: 'summer-2022', type: PartType.Mouth, name: 'Bubble Fish' },
      r1: { partId: 'mouth-nut-cracker', cls: Cls.Beast, specialGenes: '', type: PartType.Mouth, name: 'Nut Cracker' },
      r2: { partId: 'mouth-confident', cls: Cls.Beast, specialGenes: '', type: PartType.Mouth, name: 'Confident' },
      mystic: false,
    };
    expect(axieGene.mouth).toStrictEqual(want);
  });
  it('parse ears', () => {
    const want = {
      d: { partId: 'ears-coca', cls: Cls.Beast, specialGenes: 'summer-2022', type: PartType.Ears, name: 'Coca' },
      r1: { partId: 'ears-ear-breathing', cls: Cls.Bug, specialGenes: '', type: PartType.Ears, name: 'Ear Breathing' },
      r2: { partId: 'ears-beetle-spike', cls: Cls.Bug, specialGenes: '', type: PartType.Ears, name: 'Beetle Spike' },
      mystic: false,
    };
    expect(axieGene.ears).toStrictEqual(want);
  });
  it('parse horn', () => {
    const want = {
      d: { partId: 'horn-watermelon-ice-cream', cls: Cls.Reptile, specialGenes: 'summer-2022', type: PartType.Horn, name: 'Watermelon Ice Cream' },
      r1: { partId: 'horn-watermelon', cls: Cls.Plant, specialGenes: '', type: PartType.Horn, name: 'Watermelon' },
      r2: { partId: 'horn-arco', cls: Cls.Beast, specialGenes: '', type: PartType.Horn, name: 'Arco' },
      mystic: false,
    };
    expect(axieGene.horn).toStrictEqual(want);
  });
  it('parse back', () => {
    const want = {
      d: { partId: 'back-beach-ball', cls: Cls.Beast, specialGenes: 'summer-2022', type: PartType.Back, name: 'Beach Ball' },
      r1: { partId: 'back-pumpkin', cls: Cls.Plant, specialGenes: '', type: PartType.Back, name: 'Pumpkin' },
      r2: { partId: 'back-risky-beast', cls: Cls.Beast, specialGenes: '', type: PartType.Back, name: 'Risky Beast' },
      mystic: false,
    };
    expect(axieGene.back).toStrictEqual(want);
  });
  it('parse tail', () => {
    const want = {
      d: { partId: 'tail-cotton-candy', cls: Cls.Beast, specialGenes: 'summer-2022', type: PartType.Tail, name: 'Cotton Candy' },
      r1: { partId: 'tail-cloud', cls: Cls.Bird, specialGenes: '', type: PartType.Tail, name: 'Cloud' },
      r2: { partId: 'tail-swallow', cls: Cls.Bird, specialGenes: '', type: PartType.Tail, name: 'Swallow' },
      mystic: false,
    };
    expect(axieGene.tail).toStrictEqual(want);
  });
});

describe('AxieGene_SummerShiny_and_Vanilla_512bit', () => {
  const axieGene = new AxieGene('0x1800000000000100020180b102080000000100141040840a0000031020814004000100081881440a0000041408a0400a0000049428a143060001001408014308', HexType.Bit512);
  it('parse horn', () => {
    const want = {
      d: { partId: 'horn-vanilla-ice-cream', cls: Cls.Reptile, specialGenes: 'summer-2022', type: PartType.Horn, name: 'Vanilla Ice Cream' },
      r1: { partId: 'horn-vanilla-ice-cream', cls: Cls.Reptile, specialGenes: 'summer-2022', type: PartType.Horn, name: 'Vanilla Ice Cream' },
      r2: { partId: 'horn-dual-blade', cls: Cls.Beast, specialGenes: '', type: PartType.Horn, name: 'Dual Blade' },
      mystic: false,
    };
    expect(axieGene.horn).toStrictEqual(want);
  });
  it('parse back', () => {
    const want = {
      d: { partId: 'back-turtle-buoy-shiny', cls: Cls.Reptile, specialGenes: 'summer-2022', type: PartType.Back, name: 'Turtle Buoy✨' },
      r1: { partId: 'back-turtle-buoy-shiny', cls: Cls.Reptile, specialGenes: 'summer-2022', type: PartType.Back, name: 'Turtle Buoy✨' },
      r2: { partId: 'back-bidens', cls: Cls.Plant, specialGenes: '', type: PartType.Back, name: 'Bidens' },
      mystic: false,
    };
    expect(axieGene.back).toStrictEqual(want);
  });
})

describe('AxieGene_StrawberryShiny_512bit', () => {
  const axieGene = new AxieGene('0x10000816021041000000001000028a1420a0001000810008302000100001800420c000005140800840c00010000104080020001000020814504', HexType.Bit512);
  it('parse horn', () => {
    const want = {
      d: { partId: 'horn-strawberry-ice-cream-shiny', cls: Cls.Reptile, specialGenes: 'summer-2022', type: PartType.Horn, name: 'Strawberry Ice Cream✨' },
      r1: { partId: 'horn-imp', cls: Cls.Beast, specialGenes: '', type: PartType.Horn, name: 'Imp' },
      r2: { partId: 'horn-shoal-star', cls: Cls.Aquatic, specialGenes: '', type: PartType.Horn, name: 'Shoal Star' },
      mystic: false,
    };
    expect(axieGene.horn).toStrictEqual(want);
  });
})

describe('AxieGene_Mystic', () => {
  const axieGene = new AxieGene('0x3000400009204433cc231002c4210902c0210882146408860c621944cc221902');
  it('parse eyes', () => {
    expect(axieGene.eyes.mystic).toBe(true);
  });
  it('parse ears', () => {
    expect(axieGene.ears.mystic).toBe(true);
  });
  it('parse mouth', () => {
    expect(axieGene.mouth.mystic).toBe(true);
  });
  it('parse tail', () => {
    expect(axieGene.tail.mystic).toBe(true);
  });
  it('parse mouth', () => {
    expect(axieGene.back.mystic).toBe(false);
  });
  it('parse tail', () => {
    expect(axieGene.horn.mystic).toBe(false);
  });
});

describe('AxieGene_Mystic_512bit', () => {
  const axieGene = new AxieGene('0x180000000000030002812051030C00000000008C086080020000008408204402000000800820420200010014188042060001000C1840C5040000008C0840C402', HexType.Bit512);
  it('parse eyes', () => {
    expect(axieGene.eyes.mystic).toBe(true);
  });
  it('parse ears', () => {
    expect(axieGene.ears.mystic).toBe(true);
  });
  it('parse mouth', () => {
    expect(axieGene.mouth.mystic).toBe(true);
  });
  it('parse tail', () => {
    expect(axieGene.tail.mystic).toBe(true);
  });
  it('parse mouth', () => {
    expect(axieGene.back.mystic).toBe(false);
  });
  it('parse tail', () => {
    expect(axieGene.horn.mystic).toBe(false);
  });
});

describe('AxieGene_Origin', () => {
  const axieGene = new AxieGene('0x300040000B14D23414421004084308C20C221802044418820C42100410240846');
  it('parse tag', () => {
    expect(axieGene.tag).toBe(Tag.Origin);
  });
});

describe('AxieGene_Origin_512bit', () => {
  const axieGene = new AxieGene('0x18000000000003000300C0E083100000000100141040800400010008106043020001000C0840C002000100041080C2020001000C104080040001001008804106', HexType.Bit512);
  it('parse tag', () => {
    expect(axieGene.tag).toBe(Tag.Origin);
  });
});

describe('AxieGene_Quality', () => {
  const axieGeneP6 = new AxieGene('0x50000000021053031443110414a5280814250802146508c414451108146230c2');
  it('gene quality pure 6', () => {
    expect(axieGeneP6.getGeneQuality()).toBe(88);
  });
  const axieGeneP2 = new AxieGene('0x300000000b881322104308c20c2110c40c201908108208ca148120cc10430806');
  it('gene quality pure 2', () => {
    expect(axieGeneP2.getGeneQuality()).toBe(35.33);
  });
})

describe("AxieGene_Kotaro", () => {
  const axieKotaro256 = new AxieGene('0x10000000040b122204a12948044520c40465300808a1284214c1088204610846')
  it('eyes kotaro 256', () => {
    expect(axieKotaro256.eyes.d.partId).toBe("eyes-kotaro?")
  })
})

describe("AxieGene_Agamogenesis", () => {
  const axieKotaro256 = new AxieGene('0x400880000e38e666108421081084210808c2308c50c4310c0481204808a2288a')
  it('horn 5H04L-5T4R 256', () => {
    expect(axieKotaro256.horn.d.partId).toBe("horn-5h04l-5t4r")
  })
})

describe("AxieGene_Agamogenesis_512", () => {
  const axieKotaro256 = new AxieGene('0x200000000000010003c1e0f18618000000010010208104080001001020810408000101883041820c000001103081840c0001000420210108000101882841420a', HexType.Bit512)
  it('horn 5H04L-5T4R 512', () => {
    expect(axieKotaro256.horn.d.partId).toBe("horn-5h04l-5t4r")
  })
})