/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { evaluate } from '../src/evaluator';

describe('Test xpath evaluator', () => {
  it('should manage xpath', () => {
    expect(() => evaluate("'abc' + @path")).toThrow();
    expect(evaluate("'abc' + @path", { xpathConverter: (str) => str.substring(1) })).toEqual('abcpath');
    expect(evaluate("'abc' + @path + @next", { xpathConverter: (str) => str.substring(1) })).toEqual('abcpathnext');
    expect(evaluate("'abc' + ( @path + @next )", { xpathConverter: (str) => str.substring(1) })).toEqual('abcpathnext');
  });

  it('should manage escaping and unicode in xpath', () => {
    expect(evaluate('@été', { xpathConverter: () => 'value' })).toBe('value');
  });

  it('should manage xpath returning integer', () => {
    expect(evaluate('@x + @y', { xpathConverter: (xpath) => (xpath === '@x' ? 2 : 3) })).toBe(5);
  });
});
