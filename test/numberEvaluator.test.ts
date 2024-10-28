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

describe('Test number evaluator', () => {
  it('should evaluate all numeric types', () => {
    expect(evaluate('1')).toEqual(1);
    expect(evaluate('1.1')).toEqual(1.1);
    expect(evaluate('TRUE')).toEqual(1);
    expect(evaluate('true')).toEqual(1);
    expect(evaluate('FALSE')).toEqual(0);
    expect(evaluate('false')).toEqual(0);
    expect(evaluate('NULL')).toEqual(null);
    expect(evaluate('!1')).toEqual(0);
    expect(evaluate('!0')).toEqual(1);
    expect(evaluate('(1+1)')).toEqual(2);
    expect(evaluate('!(1-1)')).toEqual(1);
  });
  it('should evaluate add and substract', () => {
    expect(evaluate('1+2')).toEqual(3);
    expect(evaluate('1-2')).toEqual(-1);
    expect(evaluate('1+2+3+4')).toEqual(10);
    expect(evaluate('1 & 1')).toEqual(1);
    expect(evaluate('1 | 2')).toEqual(3);
  });
  it('should evaluate multiply and divide', () => {
    expect(evaluate('1*2')).toEqual(2);
    expect(evaluate('2*2*3')).toEqual(12);
    expect(evaluate('2*3/2')).toEqual(3);
    expect(evaluate('-1*1')).toEqual(-1);
    expect(evaluate('(1+1)+(-1*2)')).toEqual(0);
  });
  it('should evaluate with precedence', () => {
    expect(evaluate('1+2*3')).toEqual(7);
    expect(evaluate('(1+2)*3')).toEqual(9);
    expect(evaluate('2*2+3*4')).toEqual(16);
    expect(evaluate('12%5')).toEqual(2);
    expect(evaluate('1+12%5')).toEqual(3);
  });
  it('should evaluate negation of a value', () => {
    expect(evaluate('!TRUE')).toEqual(0);
  });
  it('should evaluate using variable values', () => {
    const variableConverter = (name: string): number => {
      if (name === 'var1') {
        return 10;
      }
      if (name === 'var2') {
        return 20;
      }
    };
    expect(evaluate('$(var1) + $(var2)', { variableConverter: variableConverter })).toEqual(30);
    expect(() => evaluate('$(var1) + $(var2)', { variableConverter: () => ({ key: '' } as any) })).toThrow();
  });
});
