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

import { collectXPath } from '../src/xpathCollector';

describe('Test xpath collector', () => {
  it('should not break when there is no path', () => {
    expect(collectXPath('1 + 2 + 3')).toEqual([]);
    expect(collectXPath('')).toEqual([]);
  });
  it('should manage to collect xpath in a basic operation', () => {
    expect(collectXPath('@path1 + @path2')).toEqual(['@path1', '@path2']);
  });
  it('should manage to collect xpath wrapped in function call', () => {
    expect(collectXPath('f(@path1) + f(g(@path2))')).toEqual(['@path1', '@path2']);
  });
  it('should manage to collect xpath inside variables', () => {
    expect(collectXPath('@path1 = $(@path2)')).toEqual(['@path1', '@path2']);
    expect(collectXPath('@path1 = $(env.val)')).toEqual(['@path1']);
    expect(collectXPath('@path1 = $(a/b/@path2)')).toEqual(['@path1', 'a/b/@path2']);
  });
  it('should not break on errors', () => {
    expect(collectXPath('@value IS')).toEqual(['@value']);
    expect(collectXPath('+')).toEqual([]);
  });
});
