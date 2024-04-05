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

describe('Test logical evaluator', () => {
  it.each(['=', '=='])('should evaluate all boolean types', (op) => {
    expect(evaluate(`TRUE ${op} TRUE`)).toEqual(1);
    expect(evaluate(`TRUE ${op} FALSE`)).toEqual(0);
  });
  it.each(['=', '=='])('should evaluate comparison of strings', (op) => {
    expect(evaluate(`'ab' ${op} 'ab'`)).toEqual(1);
  });
  it.each(['=', '=='])('should evaluate comparison of numbers', (op) => {
    expect(evaluate(`10 ${op} 10`)).toEqual(1);
    expect(evaluate(`10 ${op} 2`)).toEqual(0);
  });
  it.each(['!=', '<>'])('should evaluate comparison of numbers', (op) => {
    expect(evaluate(`10 ${op} 10`)).toEqual(0);
    expect(evaluate(`10 ${op} 2`)).toEqual(1);
  });
  it('should evaluate ordering of numbers', () => {
    expect(evaluate('10 < 11')).toEqual(1);
    expect(evaluate('10 <= 11')).toEqual(1);
    expect(evaluate('10 <= 10')).toEqual(1);
    expect(evaluate('10 <= 9')).toEqual(0);
    expect(evaluate('10 < 9')).toEqual(0);

    expect(evaluate('10 > 11')).toEqual(0);
    expect(evaluate('10 >= 11')).toEqual(0);
    expect(evaluate('10 >= 10')).toEqual(1);
    expect(evaluate('10 >= 9')).toEqual(1);
    expect(evaluate('10 > 9')).toEqual(1);
  });
  it('should evaluate ordering of strings', () => {
    expect(evaluate("'ab' != 'bb'")).toEqual(1);
    expect(evaluate("'ab' <> 'bb'")).toEqual(1);

    expect(evaluate("'ab' >= 'ab'")).toEqual(1);
    expect(evaluate("'bb' >= 'ab'")).toEqual(1);

    expect(evaluate("'ab' > 'ab'")).toEqual(0);
    expect(evaluate("'bb' > 'ab'")).toEqual(1);

    expect(evaluate("'ab' <= 'ab'")).toEqual(1);
    expect(evaluate("'ab' <= 'bb'")).toEqual(1);

    expect(evaluate("'ab' < 'ab'")).toEqual(0);
    expect(evaluate("'ab' < 'bb'")).toEqual(1);
  });
  it('should evaluate AND conditions', () => {
    expect(evaluate("'ab' = 'ab' AND 'bb' = 'bb'")).toEqual(1);
    expect(evaluate("'ab' = 'ab' AND 'bb' = 'cc'")).toEqual(0);
    expect(evaluate("'ab' = 'ab' AND NOT 'bb' = 'bb'")).toEqual(0);
    expect(evaluate("'ab' = 'ab' AND NOT 'bb' = 'cc'")).toEqual(1);

    expect(evaluate('1 = 1 AND 2 = 2')).toEqual(1);
    expect(evaluate('1 = 1 AND NOT 2 = 2')).toEqual(0);
  });

  it('should evaluate OR conditions', () => {
    expect(evaluate("'ab' = 'ab' OR 'bb' = 'cc'")).toEqual(1);
    expect(evaluate("'ab' = 'cc' OR 'bb' = 'cc'")).toEqual(0);

    expect(evaluate('1 = 1 OR 2 = 3')).toEqual(1);
    expect(evaluate('1 = 2 OR 2 = 3')).toEqual(0);
  });

  it('should manage precedence of AND over OR', () => {
    expect(evaluate('TRUE OR FALSE AND FALSE')).toEqual(1);
  });
});
