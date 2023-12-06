# Adobe Campaign XTK expression parser

This project is the implementation of a [grammar](./grammar/XtkParser.g4) for Adobe Campaign XTK expressions. It is based on antlr4 syntax. The documentation of the API provided by this package can be found [here](./doc/doc.md).

## Installation

Today the generation of the source code based on the g4 grammar files requires antlr4 to be installed. Please follow this [guidelines](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md) to do it.

## Rebuilding the grammar

 This action needs to be run each time the .g4 file is modified to generate the corresponding js.

 ```
yarn run generateParser
```

Both the parsers and a skeleton of visitor for the parsing tree is generated.

## Tips to modify the grammar

Changing the grammar without regression can be challenging, a good tool to quickly test grammars is including in the latest version of Intellij, it displays on the fly the parsing tree generating when the grammar is applied to a piece of code.

# Contributing

Contributions are welcomed! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

# Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
