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

import { runXtkParser } from './parser';
import { createPreprocessor } from './preprocessorImpl';
import { EvaluatorOptions } from './utils';

/**
 * Preprocess an expression, substituting variables with their values and return an expression
 * @param {string} expr The XTK expression
 * @param {EvaluatorOptions} options Evaluator options used to provide external values required for evaluation
 * @returns {Literal} A literal value
 */
export function preprocess(expr: string, options?: EvaluatorOptions): string {
  const ctx = runXtkParser(expr);
  return ctx.accept(createPreprocessor(options));
}
