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

export type SyntaxErrorListener = (line: number, column: number) => void;

class SyntaxErrorListenerWrapper extends ErrorListener<void> {
  listener: SyntaxErrorListener;
  constructor(listener: SyntaxErrorListener) {
    super();
    this.listener = listener;
  }
  syntaxError(_0: any, _1: any, line: number, column: number, _2: string, _3: any): void {
    this.listener(line, column);
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
 * The options to customize the behavior of the parser
 */
export type ParserOptions = {
  /**
   * If true, the parser will raise an exception on the first syntax error
   */
  exceptionOnError?: boolean;
  /**
   * A listener to be called on each syntax error
   */
  errorListener?: SyntaxErrorListener;
};

/**
 * Run the XTK parser on the provided expression and returns the parsing tree
 * @param {string} expr The expression
 * @param {ParserOptions} options Supplementary options passed to the parser
 * @returns A parsing tree
 * @throws {SyntaxErrorException} Raised at the first error of syntax
 */
export const runXtkParser = (expr: string, options?: ParserOptions): UnitContext => {
  if (!expr) {
    return undefined;
  }
  const inputStream = new CharStream(expr);
  const lexer = new XtkLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new XtkParser(tokenStream);
  (parser as any).removeErrorListeners();
  if (
    (options?.exceptionOnError === undefined && options?.errorListener === undefined) ||
    options.exceptionOnError === true
  ) {
    (parser as any).addErrorListener(new SyntaxError());
  }
  if (options?.errorListener) {
    (parser as any).addErrorListener(new SyntaxErrorListenerWrapper(options.errorListener));
  }
  return parser.unit();
};
