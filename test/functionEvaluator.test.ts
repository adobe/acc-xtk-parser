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

describe('Test function evaluation', () => {
  it('should manage condition using functions', () => {
    expect(evaluate('f() AND g()', { functionConverter: (name) => (name === 'f' ? 1 : 0) })).toEqual(0);
    expect(evaluate('f() OR g()', { functionConverter: (name) => (name === 'f' ? 1 : 1) })).toEqual(1);
  });
  it('should manage function with parameters', () => {
    expect(evaluate('f(1,2)', { functionConverter: (name, p1, p2) => (name === 'f' ? p1 + p2 : 0) })).toEqual(3);
    expect(
      evaluate("f('S1','S2')", { functionConverter: (name, p1, p2) => (name === 'f' ? `${p1}${p2}` : 0) }),
    ).toEqual('S1S2');
  });
});
