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

/**
 * Remove single or double quotes from a string
 * @param str The string to unquote
 * @returns Unquoted string
 */
export function unquote(str: string): string {
  if (!str || str.length < 2) {
    return '';
  }
  if ((str[0] === "'" && str[str.length - 1] === "'") || (str[0] === '"' && str[str.length - 1] === '"')) {
    return str.substring(1, str.length - 1);
  }
  return str;
}

export const unescapeQuotes = (str: string): string => str.replace(/\\'/g, "'").replace(/\\"/g, '"');

export function assertString(value: any) {
  if (typeof value !== 'string') {
    throw new Error(`Value of type string required, got ${value}`);
  }
}

export function assertNumber(value: any) {
  if (typeof value !== 'number') {
    throw new Error(`Value of type number required, got ${value}`);
  }
}

export function isString(value: any) {
  return typeof value === 'string';
}

export function isNumber(value: any) {
  return typeof value === 'number';
}

export function asInteger(value: boolean): number {
  return value ? 1 : 0;
}

export function asBoolean(value: number): boolean {
  return value === 0 ? false : true;
}

export type Literal = string | number | Date;

export type ExecEvaluateXPath = (xpath: string) => Literal;

export type ExecEvaluateFunction = (name: string, ...args) => Literal;

export type ExecEvaluateVariable = (name: string) => Literal;

export type EvaluatorOptions = {
  xpathConverter?: ExecEvaluateXPath;
  functionConverter?: ExecEvaluateFunction;
  variableConverter?: ExecEvaluateVariable;
};

export function fromDate(value: string): Date {
  const dateValue = value.replace(/#(.*)#/, '$1');
  if (!dateValue) {
    return null;
  }
  return new Date(dateValue);
}
