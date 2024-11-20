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

import { preprocess } from '../src/preprocessor';

describe('Test expression preprocessor', () => {
  it('should not modify an expression with no variable', () => {
    expect(preprocess('1')).toEqual('1');
    expect(preprocess('!(1)')).toEqual('!(1)');

    expect(preprocess("@field = 'abc'")).toEqual("@field = 'abc'");
    expect(preprocess("@field != 'abc'")).toEqual("@field != 'abc'");
    expect(preprocess('@field < 0')).toEqual('@field < 0');
    expect(preprocess('@field <= 0')).toEqual('@field <= 0');
    expect(preprocess('@field > 0')).toEqual('@field > 0');
    expect(preprocess('@field >= 0')).toEqual('@field >= 0');
    expect(preprocess('@field || 0')).toEqual('@field || 0');

    expect(preprocess('1 + 2')).toEqual('1 + 2');
    expect(preprocess('1 - 2')).toEqual('1 - 2');
    expect(preprocess('1 * 2')).toEqual('1 * 2');
    expect(preprocess('1 / 2')).toEqual('1 / 2');
    expect(preprocess('1 % 2')).toEqual('1 % 2');
    expect(preprocess('1 & 2')).toEqual('1 & 2');
    expect(preprocess('1 | 2')).toEqual('1 | 2');

    expect(preprocess('@a or @b or @c')).toEqual('@a OR @b OR @c');
    expect(preprocess('@a and @b and @c')).toEqual('@a AND @b AND @c');
    expect(preprocess('@a and not @b')).toEqual('@a AND NOT @b');

    expect(preprocess('f(1,2,3)')).toEqual('f(1, 2, 3)');

    expect(preprocess('(1+1)*2')).toEqual('(1 + 1) * 2');

    expect(preprocess('@value   is null')).toEqual('@value IS NULL');

    expect(preprocess('@value like "abc"')).toEqual('@value LIKE "abc"');
    expect(preprocess('@value not like "abc"')).toEqual('@value NOT LIKE "abc"');

    expect(preprocess('@value in ("abc", "cde")')).toEqual('@value IN ("abc", "cde")');
    expect(preprocess('@value not in ("abc", "cde")')).toEqual('@value NOT IN ("abc", "cde")');
  });

  it('should preprocess simple variables', () => {
    expect(preprocess('@value = $(VAR1)', { variableConverter: () => '1' })).toEqual('@value = 1');
    expect(preprocess('f(@value + $(VAR1))', { variableConverter: () => '1' })).toEqual('f(@value + 1)');
    expect(() => preprocess('@value = $(VAR1)')).toThrow();
  });

  it('should preprocess nested xpath', () => {
    expect(preprocess('@value = $(@mypath)', { xpathConverter: () => '1' })).toEqual('@value = 1');
    expect(preprocess('@value = $long(@mypath)', { xpathConverter: () => '1' })).toEqual('@value = 1');
    expect(() => preprocess('@value = $(@mypath)')).toThrow();
  });
});
