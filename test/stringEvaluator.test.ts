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

import { evaluate } from '../src/evaluator';
import { SyntaxErrorException } from '../src/parser';

describe('Test string evaluator', () => {
  it('should report syntax errors', () => {
    expect(() => evaluate("'abc' +")).toThrow(SyntaxErrorException);
  });
  it('should throw an exception when string are concatenated with bad operators', () => {
    expect(() => evaluate("'abc' + 'def' - 'ghi'")).toThrow();
    expect(() => evaluate("!'abc'")).toThrow();
    expect(() => evaluate("'abc' * 'cde'")).toThrow();
  });
  it('should throw an exception when string are mixed with logical operator or comparison operator', () => {
    expect(() => evaluate("'abc' OR 'def'")).toThrow();
    expect(() => evaluate("'abc' AND 'def'")).toThrow();
    expect(() => evaluate("'abc' AND NOT 'def'")).toThrow();
  });
  it('should support concatenation of strings', () => {
    expect(evaluate("'abc' + 'def' + 'ghi'")).toEqual('abcdefghi');
    expect(evaluate("'abc' + 1")).toEqual('abc1');
  });

  it('should manage variables', () => {
    expect(() => evaluate("'abc' + $(var)")).toThrow();
    expect(evaluate("'abc' + $(var)", { variableConverter: () => 'VALUE' })).toEqual('abcVALUE');
  });
  it('should manage variables with cast', () => {
    expect(() => evaluate("'abc' + $string(var)")).toThrow();
    expect(evaluate("'abc' + $string(var)", { variableConverter: () => 'VALUE' })).toEqual('abcVALUE');
  });
  it('should manage escaping and unicode', () => {
    expect(evaluate("'my\\'string\\''")).toEqual("my'string'");
    expect(evaluate("'çàaé'")).toEqual('çàaé');
  });
});
