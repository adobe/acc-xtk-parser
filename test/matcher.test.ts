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

import { Stack, XtkPattern } from '../src/matcher';

describe('Test expression matcher', () => {
  it('should handle a stack', () => {
    const stack = new Stack<string>();
    expect(stack.last()).toBeUndefined();
    stack.push('value');
    expect(stack.last()).toEqual('value');
    expect(stack.pop()).toEqual('value');
    expect(stack.last()).toBeUndefined();
    stack.push(undefined);
    expect(stack.last()).toBeUndefined();
  });
  it('should detect duplicated placeholders', () => {
    const pattern = new XtkPattern('$(p1) = $(p1)');
    expect(() => pattern.match('3 = 4')).toThrow();
  });
  it('should match expression with no variable', () => {
    debugger;
    const pattern = new XtkPattern('@boolean = TRUE');
    const result = pattern.match('@boolean = TRUE');
    expect(result).toEqual({});
  });
  it('should capture integers in relation', () => {
    const pattern = new XtkPattern('$(p1) = $(p2)');
    const result = pattern.match('3 = 4');
    expect(result).toEqual({ p1: 3, p2: 4 });
  });
  it('should handle nested expressions', () => {
    const pattern = new XtkPattern('($(p1) = $(p2))');
    const result = pattern.match('(3 = 4)');
    expect(result).toEqual({ p1: 3, p2: 4 });
  });
  it('should capture integers in addition', () => {
    const pattern = new XtkPattern('$(p1) + $(p2)');
    const result = pattern.match('3 + 4');
    expect(result).toEqual({ p1: 3, p2: 4 });
  });
  it('should not get fooled by additive operator', () => {
    const pattern = new XtkPattern('$(p1) + $(p1) + $(p1)');
    expect(() => pattern.match('3 + 4 - 2')).toThrow();
  });
  it('should capture integers in multiplication', () => {
    const pattern = new XtkPattern('$(p1) * $(p2)');
    const result = pattern.match('3 * 4');
    expect(result).toEqual({ p1: 3, p2: 4 });
  });
  it('should not get fooled by multiplicative operator', () => {
    const pattern = new XtkPattern('$(p1) * $(p2) * $(p3)');
    expect(() => pattern.match('3 * 4 / 2')).toThrow();
    expect(() => pattern.match('3 * 4')).toThrow();
  });
  it('should capture doubles', () => {
    const pattern = new XtkPattern('$(p1) = $(p2)');
    const result = pattern.match('3.1 = 4.1');
    expect(result).toEqual({ p1: 3.1, p2: 4.1 });
    expect(() => pattern.match('3.1 < 4.1')).toThrow();
  });
  it('should capture strings', () => {
    const pattern = new XtkPattern('$(p1) = $(p2)');
    const result = pattern.match("'value1' = 'value2'");
    expect(result).toEqual({ p1: 'value1', p2: 'value2' });
  });
  it('should capture xpath', () => {
    const pattern = new XtkPattern('$(p1) = $(p2)');
    const result = pattern.match('@email = @address');
    expect(result).toEqual({ p1: '@email', p2: '@address' });
  });
  it('should capture boolean', () => {
    const pattern = new XtkPattern('$(p1) = $(p2)');
    const result = pattern.match('TRUE = FALSE');
    expect(result).toEqual({ p1: 1, p2: 0 });
  });
  it('should handle AND', () => {
    const pattern = new XtkPattern('$(p1) = 1 AND $(p2) =2');
    const result = pattern.match('@v = 1 AND @u = 2');
    expect(result).toEqual({ p1: '@v', p2: '@u' });
  });
  it('should handle AND between functions', () => {
    const pattern = new XtkPattern('f($(p1)) AND g($(p2))');
    const result = pattern.match('f(@v) AND g(@u)');
    expect(result).toEqual({ p1: '@v', p2: '@u' });
  });
  it('should handle OR', () => {
    const pattern = new XtkPattern('$(p1) = 1 OR $(p2) =2');
    const result = pattern.match('@v = 1 OR @u = 2');
    expect(result).toEqual({ p1: '@v', p2: '@u' });
  });
  it('should not be fooled by a mix of AND / AND NOT', () => {
    const pattern = new XtkPattern('$(p1) = 1 AND $(p2) = 2 AND NOT $(p3) = 4');
    expect(() => pattern.match('@v = 1 AND @u = 2 AND @z = 4')).toThrow();
  });
  it('should handle function', () => {
    const pattern = new XtkPattern('f($(p1)) = 1 AND f($(p2)) =2');
    const result = pattern.match('f(@v) = 1 AND f(@u) = 2');
    expect(result).toEqual({ p1: '@v', p2: '@u' });
    expect(() => pattern.match('f(@v) = 1 AND g(@u) = 2')).toThrow();
  });
  it('should handle unary operator', () => {
    debugger;
    const pattern = new XtkPattern('$(p1) IS NULL');
    const result = pattern.match('@email IS NULL');
    expect(result).toEqual({ p1: '@email' });
    expect(() => pattern.match('@email IS NOT NULL')).toThrow();
  });
  it.each(['LIKE', 'NOT LIKE'])('should handle LIKE expressions', (op) => {
    debugger;
    const pattern = new XtkPattern(`$(p1) ${op} $(p2) + '%'`);
    const result = pattern.match(`@email ${op} @prefix + '%'`);
    expect(result).toEqual({ p1: '@email', p2: '@prefix' });
  });
  it('should not be fooled by a mix of LIKE / NOT LIKE', () => {
    const pattern = new XtkPattern('$(p1) LIKE $(p2)');
    expect(() => pattern.match('@v NOT LIKE @u')).toThrow();
  });
  it.each(['IN', 'NOT IN'])('should handle IN expressions', (op) => {
    debugger;
    const pattern = new XtkPattern(`$(p1) ${op} (1,$(p2))`);
    const result = pattern.match(`@email ${op}  (1,@prefix)`);
    expect(result).toEqual({ p1: '@email', p2: '@prefix' });
  });
  it('should not be fooled by a mix of IN / NOT IN', () => {
    const pattern = new XtkPattern('$(p1) IN (1,$(p2))');
    expect(() => pattern.match('@v NOT IN (1,@u)')).toThrow();
    expect(() => pattern.match('@v IN (1,@u,2)')).toThrow();
  });
});
