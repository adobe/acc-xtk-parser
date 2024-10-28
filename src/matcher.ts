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

import {
  AddingExpressionContext,
  AndExpressionContext,
  CastVariableContext,
  ComputableAtomContext,
  ExpressionContext,
  FunctionCallContext,
  IncludedInExpressionContext,
  LikeExpressionContext,
  ListContext,
  MultiplyingExpressionContext,
  OrExpressionContext,
  ParametersContext,
  RelationalExpressionContext,
  SingleExpressionContext,
  UnaryExpressionContext,
  UnitContext,
} from './generated/XtkParser';
import XtkParserVisitor from './generated/XtkParserVisitor';
import { runXtkParser } from './parser';
import { Literal, unescapeQuotes, unquote } from './utils';

/**
 * The class of the exception thrown when a pattern is not matched
 */
export class NoMatchFoundException extends Error {}

/**
 * The type describing the object returned upon successful matching
 */
export type Matched = Record<string, Literal>;

/**
 * A utility class to handle a stack
 */
export class Stack<T> {
  data: T[];
  constructor() {
    this.data = [];
  }
  push(item: T): void {
    if (item !== undefined) {
      this.data.push(item);
    }
  }
  pop(): T {
    return this.data.pop();
  }
  last(): T {
    if (this.data.length > 0) {
      return this.data[this.data.length - 1];
    }
    return undefined;
  }
}

function combineResults(result: Matched, newResult: Matched): Matched {
  if (result && newResult) {
    for (const key of Object.keys(newResult)) {
      if (result[key] !== undefined) {
        throw new Error(`The pattern defined has duplicated key ${key}`);
      }
    }
  }
  return { ...result, ...newResult };
}

function matcherImpl(patternCtx: UnitContext, expr: string): Matched {
  const unitContext = runXtkParser(expr);
  const matcher = new XtkParserVisitor<Matched>();
  const stack = new Stack<any>();

  matcher.visitUnit = (ctx: UnitContext): Matched => {
    stack.push(unitContext.expression());
    return matcher.visitExpression(ctx.expression());
  };
  matcher.visitExpression = (ctx: ExpressionContext): Matched => {
    const expressionCtx = stack.last() as ExpressionContext;
    if (ctx.expression() && expressionCtx.expression()) {
      stack.push(expressionCtx.expression());
      const result = matcher.visitExpression(ctx.expression());
      stack.pop();
      return result;
    }
    if (ctx.orExpression() && expressionCtx.orExpression()) {
      stack.push(expressionCtx.orExpression());
      const result = matcher.visitOrExpression(ctx.orExpression());
      stack.pop();
      return result;
    }
    if (ctx.addingExpression() && expressionCtx.addingExpression()) {
      stack.push(expressionCtx.addingExpression());
      const result = matcher.visitAddingExpression(ctx.addingExpression());
      stack.pop();
      return result;
    }
    if (ctx.computableAtom() && expressionCtx.computableAtom()) {
      stack.push(expressionCtx.computableAtom());
      const result = matcher.visitComputableAtom(ctx.computableAtom());
      stack.pop();
      return result;
    }
    throw new NoMatchFoundException();
  };
  matcher.visitOrExpression = (ctx: OrExpressionContext): Matched => {
    const expressionCtx = stack.last() as OrExpressionContext;
    if (
      ctx.andExpression_list().length > 0 &&
      ctx.andExpression_list().length === expressionCtx.andExpression_list().length
    ) {
      let result = {};
      for (let i = 0; i < ctx.andExpression_list().length; i++) {
        stack.push(expressionCtx.andExpression(i));
        const subResult = matcher.visitAndExpression(ctx.andExpression(i));
        result = combineResults(result, subResult);
        stack.pop();
      }
      return result;
    }
    throw new NoMatchFoundException();
  };
  matcher.visitSingleExpression = (ctx: SingleExpressionContext): Matched => {
    const expressionCtx = stack.last() as SingleExpressionContext;
    if (ctx.relationalExpression() && expressionCtx.relationalExpression()) {
      stack.push(expressionCtx.relationalExpression());
      const result = matcher.visitRelationalExpression(ctx.relationalExpression());
      stack.pop();
      return result;
    }
    if (ctx.computableAtom() && expressionCtx.computableAtom()) {
      stack.push(expressionCtx.computableAtom());
      const result = matcher.visitComputableAtom(ctx.computableAtom());
      stack.pop();
      return result;
    }
    if (ctx.unaryExpression() && expressionCtx.unaryExpression()) {
      stack.push(expressionCtx.unaryExpression());
      const result = matcher.visitUnaryExpression(ctx.unaryExpression());
      stack.pop();
      return result;
    }
    if (ctx.likeExpression() && expressionCtx.likeExpression()) {
      stack.push(expressionCtx.likeExpression());
      const result = matcher.visitLikeExpression(ctx.likeExpression());
      stack.pop();
      return result;
    }
    if (ctx.includedInExpression() && expressionCtx.includedInExpression()) {
      stack.push(expressionCtx.includedInExpression());
      const result = matcher.visitIncludedInExpression(ctx.includedInExpression());
      stack.pop();
      return result;
    }
    if (ctx.orExpression() && expressionCtx.orExpression()) {
      stack.push(expressionCtx.orExpression());
      const result = matcher.visitOrExpression(ctx.orExpression());
      stack.pop();
      return result;
    }
    throw new NoMatchFoundException();
  };
  matcher.visitAndExpression = (ctx: AndExpressionContext): Matched => {
    const expressionCtx = stack.last() as AndExpressionContext;
    if (ctx.andOperator_list().length === expressionCtx.andOperator_list().length) {
      for (let i = 0; i < ctx.andOperator_list().length; i++) {
        if ((ctx.andOperator(i) as any).getText() !== (expressionCtx.andOperator(i) as any).getText()) {
          throw new NoMatchFoundException();
        }
      }
      let result = {};
      for (let i = 0; i < ctx.singleExpression_list().length; i++) {
        if (
          (expressionCtx.singleExpression(i).EXCLAMATION() && expressionCtx.singleExpression(i).EXCLAMATION()) ||
          (!expressionCtx.singleExpression(i).EXCLAMATION() && !expressionCtx.singleExpression(i).EXCLAMATION())
        ) {
          stack.push(expressionCtx.singleExpression(i));
          const subResult = matcher.visitSingleExpression(ctx.singleExpression(i));
          result = combineResults(result, subResult);
          stack.pop();
        }
      }
      return result;
    }
    throw new NoMatchFoundException();
  };
  matcher.visitFunctionCall = (ctx: FunctionCallContext): Matched => {
    const expressionCtx = stack.last() as FunctionCallContext;
    if ((ctx.IDENTIFIER() as any).getText() !== (expressionCtx.IDENTIFIER() as any).getText()) {
      throw new NoMatchFoundException();
    }
    stack.push(expressionCtx.parameters());
    const result = matcher.visitParameters(ctx.parameters());
    stack.pop();
    return result;
  };
  matcher.visitAddingExpression = (ctx: AddingExpressionContext): Matched => {
    const expressionCtx = stack.last() as AddingExpressionContext;
    if (
      ctx.multiplyingExpression_list().length > 0 &&
      ctx.multiplyingExpression_list().length === expressionCtx.multiplyingExpression_list().length
    ) {
      let result = {};
      for (let i = 0; i < ctx.multiplyingExpression_list().length; i++) {
        if (
          i > 0 &&
          (ctx.addingOperator(i - 1) as any).getText() !== (expressionCtx.addingOperator(i - 1) as any).getText()
        ) {
          throw new NoMatchFoundException();
        }
        stack.push(expressionCtx.multiplyingExpression(i));
        const subResult = matcher.visitMultiplyingExpression(ctx.multiplyingExpression(i));
        result = combineResults(result, subResult);
        stack.pop();
      }
      return result;
    }
    throw new NoMatchFoundException();
  };
  matcher.visitMultiplyingExpression = (ctx: MultiplyingExpressionContext): Matched => {
    const expressionCtx = stack.last() as MultiplyingExpressionContext;
    if (
      ctx.computableAtom_list().length > 0 &&
      ctx.computableAtom_list().length === expressionCtx.computableAtom_list().length
    ) {
      let result = {};
      for (let i = 0; i < ctx.computableAtom_list().length; i++) {
        if (
          i > 0 &&
          (ctx.multiplyOperator(i - 1) as any).getText() !== (expressionCtx.multiplyOperator(i - 1) as any).getText()
        ) {
          throw new NoMatchFoundException();
        }
        stack.push(expressionCtx.computableAtom(i));
        const subResult = matcher.visitComputableAtom(ctx.computableAtom(i));
        result = combineResults(result, subResult);
        stack.pop();
      }
      return result;
    }
    throw new NoMatchFoundException();
  };
  matcher.visitRelationalExpression = (ctx: RelationalExpressionContext): Matched => {
    const expressionCtx = stack.last() as RelationalExpressionContext;
    if (
      ctx.variable() ||
      (ctx.comparisonOperator() as any).getText() === (expressionCtx.comparisonOperator() as any).getText()
    ) {
      stack.push(expressionCtx.addingExpression(0));
      const leftResult = matcher.visitAddingExpression(ctx.addingExpression(0));
      stack.pop();
      stack.push(expressionCtx.addingExpression(1));
      const rightResult = matcher.visitAddingExpression(ctx.addingExpression(1));
      stack.pop();
      if (ctx.variable()) {
        const outputVariableName = (ctx.variable().variableIdentifier() as any).getText();
        return combineResults(
          combineResults({ [outputVariableName]: (expressionCtx.comparisonOperator() as any).getText() }, leftResult),
          rightResult,
        );
      }
      return combineResults(leftResult, rightResult);
    }
    throw new NoMatchFoundException();
  };
  matcher.visitUnaryExpression = (ctx: UnaryExpressionContext): Matched => {
    const expressionCtx = stack.last() as UnaryExpressionContext;
    if ((ctx.unaryOperator() as any).getText() === (expressionCtx.unaryOperator() as any).getText()) {
      stack.push(expressionCtx.addingExpression());
      const result = matcher.visitAddingExpression(ctx.addingExpression());
      stack.pop();
      return result;
    }
    throw new NoMatchFoundException();
  };
  matcher.visitLikeExpression = (ctx: LikeExpressionContext): Matched => {
    const expressionCtx = stack.last() as LikeExpressionContext;
    if ((ctx.likeOperator() as any).getText() === (expressionCtx.likeOperator() as any).getText()) {
      stack.push(expressionCtx.addingExpression(0));
      const leftResult = matcher.visitAddingExpression(ctx.addingExpression(0));
      stack.pop();
      stack.push(expressionCtx.addingExpression(1));
      const rightResult = matcher.visitAddingExpression(ctx.addingExpression(1));
      stack.pop();
      return combineResults(leftResult, rightResult);
    }
    throw new NoMatchFoundException();
  };
  matcher.visitIncludedInExpression = (ctx: IncludedInExpressionContext): Matched => {
    const expressionCtx = stack.last() as IncludedInExpressionContext;
    if ((ctx.IN() && expressionCtx.IN()) || (ctx.NOT_IN() && expressionCtx.NOT_IN())) {
      stack.push(expressionCtx.addingExpression());
      const leftResult = matcher.visitAddingExpression(ctx.addingExpression());
      stack.pop();
      stack.push(expressionCtx.list());
      const rightResult = matcher.visitList(ctx.list());
      stack.pop();
      return combineResults(leftResult, rightResult);
    }
    throw new NoMatchFoundException();
  };
  matcher.visitList = (ctx: ListContext): Matched => {
    const expressionCtx = stack.last() as ListContext;
    if (!ctx && !expressionCtx) {
      stack.pop();
      return {};
    }
    if (ctx.expression_list().length > 0 && ctx.expression_list().length === expressionCtx.expression_list().length) {
      let result = {};
      for (let i = 0; i < ctx.expression_list().length; i++) {
        stack.push(expressionCtx.expression(i));
        const subResult = matcher.visitExpression(ctx.expression(i));
        result = combineResults(result, subResult);
        stack.pop();
      }
      return result;
    }
    throw new NoMatchFoundException();
  };
  matcher.visitParameters = (ctx: ParametersContext): Matched => {
    const expressionCtx = stack.last() as ParametersContext;
    if (!ctx && !expressionCtx) {
      stack.pop();
      return {};
    }
    if (
      expressionCtx &&
      ctx.expression_list().length > 0 &&
      ctx.expression_list().length === expressionCtx.expression_list().length
    ) {
      let result = {};
      for (let i = 0; i < ctx.expression_list().length; i++) {
        stack.push(expressionCtx.expression(i));
        const subResult = matcher.visitExpression(ctx.expression(i));
        result = combineResults(result, subResult);
        stack.pop();
      }
      return result;
    }
    throw new NoMatchFoundException();
  };
  matcher.visitCastVariable = (ctx: CastVariableContext): Matched => {
    throw new NoMatchFoundException();
  };
  matcher.visitComputableAtom = (ctx: ComputableAtomContext): Matched => {
    const expressionCtx = stack.last() as ComputableAtomContext;

    if (ctx.variable()) {
      const outputVariableName = (ctx.variable().variableIdentifier() as any).getText();
      if (expressionCtx.xpath()) {
        return { [outputVariableName]: (expressionCtx.xpath() as any).getText() };
      }
      if (expressionCtx.literal()) {
        const text = (expressionCtx.literal() as any).getText();
        if (expressionCtx.literal().STRING()) {
          return { [outputVariableName]: unescapeQuotes(unquote(text)) };
        }
        if (expressionCtx.literal().INT()) {
          return { [outputVariableName]: Number.parseInt(text) };
        }
        if (expressionCtx.literal().DOUBLE()) {
          return { [outputVariableName]: Number.parseFloat(text) };
        }
        if (expressionCtx.literal().TRUE()) {
          return { [outputVariableName]: 1 };
        }
        if (expressionCtx.literal().FALSE()) {
          return { [outputVariableName]: 0 };
        }
        if (expressionCtx.literal().NULL()) {
          return { [outputVariableName]: null };
        }
      }
    }

    if (ctx.addingExpression() && expressionCtx.addingExpression()) {
      stack.push(expressionCtx.addingExpression());
      const result = matcher.visitAddingExpression(ctx.addingExpression());
      stack.pop();
      return result;
    }

    if (ctx.literal() && expressionCtx.literal()) {
      if ((ctx.literal() as any).getText() === (expressionCtx.literal() as any).getText()) {
        return {};
      }
    }

    if (ctx.xpath() && expressionCtx.xpath()) {
      if ((ctx.xpath() as any).getText() === (expressionCtx.xpath() as any).getText()) {
        return {};
      }
    }

    if (ctx.functionCall() && expressionCtx.functionCall()) {
      stack.push(expressionCtx.functionCall());
      const result = matcher.visitFunctionCall(ctx.functionCall());
      stack.pop();
      return result;
    }

    throw new NoMatchFoundException();
  };
  return patternCtx.accept(matcher);
}

export class XtkPattern {
  context: UnitContext;
  constructor(expr: string) {
    this.context = runXtkParser(expr);
  }
  /**
   * Match the provided expression against a given pattern
   *
   * For example:
   * pattern:    f($(p1))-1 = g($(p2))
   * expr:       f(@email)-1 = g(@address)
   * returns:    {p1: '@email', p2: '@address'}
   *
   * expr:       f(@email)-1 = h(@address)
   * returns:    undefined
   *
   * @param {string} expr The expression to match
   * @returns {string[]} An array of strings
   */
  match(expr: string): Matched {
    return matcherImpl(this.context, expr);
  }
}
