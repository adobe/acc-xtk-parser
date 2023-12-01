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

import { runXtkParser } from './parser';
import { createEvaluator } from './evaluatorImpl';
import { EvaluatorOptions, Literal } from './utils';

/**
 * Evaluate the given expression
 * @param {string} expr The XTK expression
 * @param {EvaluatorOptions} options Evaluator options used to provide external values required for evaluation
 * @returns {string} A string
 */
export function evaluate(expr: string, options?: EvaluatorOptions): Literal {
  const ctx = runXtkParser(expr);
  return ctx.accept(createEvaluator(options));
}
