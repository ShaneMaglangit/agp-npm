# agp-npm

Package `agp-npm` is a gene parsing package for Axie Infinity.

The name agp stands for "Axie Gene Parser" which decodes the hex representation of an Axie's gene into a human readable
format.

## Documentation

For more detailed documentation, see [agp-npm Documentation](https://shanemaglangit.github.io/agp-npm).

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

```javascript
const { AxieGene } = require("agp-npm-test/dist/src/axie-gene");
const axieGene = new AxieGene("0x11c642400a028ca14a428c20cc011080c61180a0820180604233082");
```

**TypeScript**

```javascript
const axieGene = new AxieGene("0x11c642400a028ca14a428c20cc011080c61180a0820180604233082");
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
