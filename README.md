# agp-npm

[![npm version](https://badge.fury.io/js/agp-npm.svg)](https://badge.fury.io/js/agp-npm)

Package `agp-npm` is a gene parsing package for Axie Infinity.

The name agp stands for "Axie Gene Parser" which decodes the hex representation of an Axie's gene into a human readable
format.

## Documentation

For more detailed documentation, see [agp-npm documentation](https://shanemaglangit.github.io/agp-npm).

## Install

agp-npm runs on Node.js and is available as a NPM package.

```sh
npm install agp-npm
```

## Usage

To get started, you'll first need to get the gene of an Axie in hex. You may use
the [Axie Infinity GraphQL endpoint](https://axie-graphql.web.app/) to get this detail. For this example, let's use the
hex `0x11c642400a028ca14a428c20cc011080c61180a0820180604233082`

Let us create an AxieGene object from the hex string that we have.

**JavaScript**

256 Bit Genes

```javascript
const { AxieGene } = require("agp-npm/dist/axie-gene"); // Defaults to HexType.Bit256
const axieGene = new AxieGene("0x11c642400a028ca14a428c20cc011080c61180a0820180604233082");
```

512 Bit Genes

```javascript
const { AxieGene } = require("agp-npm/dist/axie-gene");
const hex = "0x280000000000010040412090830C0000000101942040440A00010190284082040001018C2061000A000101801021400400010180204080060001018418404008"
const axieGene = new AxieGene(hex, HexType.Bit512);
```

**TypeScript**

256 Bit Genes

```ts
const axieGene = new AxieGene("0x11c642400a028ca14a428c20cc011080c61180a0820180604233082");
```

512 Bit Genes

```ts
const hex = "0x280000000000010040412090830C0000000101942040440A00010190284082040001018C2061000A000101801021400400010180204080060001018418404008"
const axieGene = new AxieGene(hex, HexType.Bit512);
```

## Gene Quality

You may also get the quality of the genes directly through the AxieGene object.
```ts
axieGene.getGeneQuality();
```


This object automatically handles the parsing of the hex value for you. You may simply use the accessors of the class to
get the gene information that you want.

Here are the properties that you can get from the AxieGene object.

* [genes](https://shanemaglangit.github.io/agp-npm/classes/axie_gene.AxieGene.html#genes)
* [cls](https://shanemaglangit.github.io/agp-npm/classes/axie_gene.AxieGene.html#cls)
* [region](https://shanemaglangit.github.io/agp-npm/classes/axie_gene.AxieGene.html#region)
* [tag](https://shanemaglangit.github.io/agp-npm/classes/axie_gene.AxieGene.html#tag)
* [bodySkin](https://shanemaglangit.github.io/agp-npm/classes/axie_gene.AxieGene.html#bodySkin)
* [pattern](https://shanemaglangit.github.io/agp-npm/classes/axie_gene.AxieGene.html#pattern)
* [color](https://shanemaglangit.github.io/agp-npm/classes/axie_gene.AxieGene.html#color)
* [eyes](https://shanemaglangit.github.io/agp-npm/classes/axie_gene.AxieGene.html#eyes)
* [mouth](https://shanemaglangit.github.io/agp-npm/classes/axie_gene.AxieGene.html#mouth)
* [ears](https://shanemaglangit.github.io/agp-npm/classes/axie_gene.AxieGene.html#ears)
* [horn](https://shanemaglangit.github.io/agp-npm/classes/axie_gene.AxieGene.html#horn)
* [back](https://shanemaglangit.github.io/agp-npm/classes/axie_gene.AxieGene.html#back)
* [tail](https://shanemaglangit.github.io/agp-npm/classes/axie_gene.AxieGene.html#tail)

## Go Lang Support

I also released a similar package for Go. [Do check it out!](https://github.com/ShaneMaglangit/agp)

## Support the Author

Love this module? Feel free to buy me a coffee and motivate me to work on more stuffs like this!

**Ronin Address:** ronin:789c9b253eba265f0079e3ebcaaea2503eb31bb3  
**ETH Address:** 0x9F50E3606caf22ff5E0E03F0eb02DE3Fa2786535  
**Paypal:** paypal.me/shanemaglangit

Support does not need to have any monetary value. I would also appreciate if you leave a star!
