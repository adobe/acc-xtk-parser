# Xtk

This project is the implementation of a [grammar](./grammar/XtkParser.g4) for the Xtk expressions. It is based on antlr4 syntax.

 ## Rebuilding the grammar

 This action needs to be run each time the .g4 file is modified to generate the corresponding js.

 ```
yarn run generateParser
```

Both the parsers and a skeleton of visitor for the parsing tree is generated.

## Tips to modify the grammar

Changing the grammar without regression can be challenging, a good tool to quickly test grammars is including in the latest version of Intellij, it displays on the fly the parsing tree generating when the grammar is applied to a piece of code.
