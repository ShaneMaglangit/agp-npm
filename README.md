# agp-ts

Package `agp-ts` is a gene parsing package for Axie Infinity.

The name agp stands for "Axie Gene Parser" which decodes the hex representation of an Axie's gene into a human readable format.
## Documentation

For more detailed documentation, see [AGP-TS Documentation](https://www.npmjs.com/package/agp-ts).

## Install

agp-ts runs on Node.js and is available as a NPM package.

```sh
npm install typedoc
```

## Usage

To get started, you'll first need to get the gene of an Axie in hex. You may use the [Axie Infinity GraphQL endpoint](https://axie-graphql.web.app/) to get this detail. For this example, let's use the hex `0x11c642400a028ca14a428c20cc011080c61180a0820180604233082`

Let us create an AxieGene object from the hex string that we have.

```typescript
const hex = "0x11c642400a028ca14a428c20cc011080c61180a0820180604233082";
const axieGene = new AxieGene(hex);
```

This object automatically handles the parsing of the hex value for you. You may simply use the accessors of the class to get the gene information that you want.

Here are the properties that you can get from the AxieGene object.

* genes
* cls
* region
* tag
* bodySkin
* pattern
* color
* eyes
* mouth
* ears
* horn
* back
* tail
