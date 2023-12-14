/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { CommonTokenStream, CharStream, ErrorListener } from 'antlr4';
import XtkLexer from './generated/XtkLexer';
import XtkParser, { UnitContext } from './generated/XtkParser';

class SyntaxError extends ErrorListener<void> {
  syntaxError(_0: any, _1: any, line: number, column: number, _2: string, _3: any): void {
    throw new SyntaxErrorException(line, column);
  }
}

/**
 * Exception raised in case of syntax error
 */
export class SyntaxErrorException extends Error {
  line: number;
  column: number;
  constructor(l: number, c: number) {
    super();
    this.line = l;
    this.column = c;
  }
}

/**
 * Run the XTK parser on the provided expression and returns the parsing tree
 * @param {string} expr The expression
 * @param {boolean} exceptionOnError If false, no exception on syntax errors - maybe result in an incomplete tree
 * @returns A parsing tree
 * @throws {SyntaxErrorException} Raised at the first error of syntax
 */
export const runXtkParser = (expr: string, exceptionOnError = true): UnitContext => {
  if (!expr) {
    return undefined;
  }
  const inputStream = new CharStream(expr);
  const lexer = new XtkLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new XtkParser(tokenStream);
  if (exceptionOnError) {
    (parser as any).removeErrorListeners();
    (parser as any).addErrorListener(new SyntaxError());
  }
  return parser.unit();
};
