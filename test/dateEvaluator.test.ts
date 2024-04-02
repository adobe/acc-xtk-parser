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

describe('Test date evaluator', () => {
  it('should handle empty date', () => {
    expect(evaluate('##')).toBeNull();
  });
  it('should evaluate a date', () => {
    expect(evaluate('#2024-31-03#')).toBeDefined();
  });
  it('should evaluate a date time', () => {
    expect(evaluate('#2021-09-16 23:00:00.000#')).toBeDefined();
  });
  it('should evaluate a date time marked as UTC', () => {
    expect(evaluate('#2021-09-16 23:00:00.000Z#')).toBeDefined();
  });
});
