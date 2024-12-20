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

import XtkParserVisitor from './generated/XtkParserVisitor';
import {
  AddingExpressionContext,
  AndExpressionContext,
  CastVariableContext,
  ComputableAtomContext,
  ExpressionContext,
  FunctionCallContext,
  LiteralContext,
  MultiplyingExpressionContext,
  OrExpressionContext,
  RelationalExpressionContext,
  SingleExpressionContext,
  UnitContext,
  VariableContext,
  XpathContext,
} from './generated/XtkParser';
import {
  EvaluatorOptions,
  Literal,
  asBoolean,
  asInteger,
  assertNumber,
  assertString,
  fromDate,
  fromTime,
  isDate,
  isNull,
  isNumber,
  isString,
  unescapeQuotes,
  unquote,
} from './utils';

const negateIfNeeded = (value: Literal, negate: boolean): Literal => {
  if (!negate) {
    return value;
  }
  if (value === 0) {
    return 1;
  }
  if (value === undefined || value === null) {
    return 1;
  }
  return 0;
};

export function createEvaluator(options?: EvaluatorOptions) {
  const evaluator = new XtkParserVisitor<Literal>();
  evaluator.visitUnit = (ctx: UnitContext): Literal => {
    return evaluator.visitExpression(ctx.expression());
  };
  evaluator.visitExpression = (ctx: ExpressionContext): Literal => {
    if (ctx.addingExpression()) {
      return evaluator.visitAddingExpression(ctx.addingExpression());
    }
    if (ctx.computableAtom()) {
      return evaluator.visitComputableAtom(ctx.computableAtom());
    }
    if (ctx.orExpression()) {
      return evaluator.visitOrExpression(ctx.orExpression());
    }
    throw 'Unsupported expression';
  };
  evaluator.visitRelationalExpression = (ctx: RelationalExpressionContext): Literal => {
    const rawLeftOperand = evaluator.visitAddingExpression(ctx.addingExpression(0));
    const rawRightOperand = evaluator.visitAddingExpression(ctx.addingExpression(1));
    const leftOperand = isNull(rawLeftOperand) ? 0 : rawLeftOperand;
    const rightOperand = isNull(rawRightOperand) ? 0 : rawRightOperand;
    if (isNumber(leftOperand) && isNumber(rightOperand)) {
      if (ctx.comparisonOperator().EQ() || ctx.comparisonOperator().EQ_2()) {
        return asInteger(leftOperand === rightOperand);
      }
      if (ctx.comparisonOperator().NEQ() || ctx.comparisonOperator().NEQ_2()) {
        return asInteger(leftOperand !== rightOperand);
      }
      if (ctx.comparisonOperator().GE()) {
        return asInteger(leftOperand >= rightOperand);
      }
      if (ctx.comparisonOperator().GT()) {
        return asInteger(leftOperand > rightOperand);
      }
      if (ctx.comparisonOperator().LE()) {
        return asInteger(leftOperand <= rightOperand);
      }
      if (ctx.comparisonOperator().LT()) {
        return asInteger(leftOperand < rightOperand);
      }
    }
    if (isString(leftOperand) && isString(rightOperand)) {
      if (ctx.comparisonOperator().EQ() || ctx.comparisonOperator().EQ_2()) {
        return asInteger(leftOperand === rightOperand);
      }
      if (ctx.comparisonOperator().NEQ() || ctx.comparisonOperator().NEQ_2()) {
        return asInteger(leftOperand !== rightOperand);
      }
      if (ctx.comparisonOperator().GE()) {
        return asInteger(leftOperand === rightOperand || String(leftOperand).localeCompare(String(rightOperand)) === 1);
      }
      if (ctx.comparisonOperator().GT()) {
        return asInteger(String(leftOperand).localeCompare(String(rightOperand)) === 1);
      }
      if (ctx.comparisonOperator().LE()) {
        return asInteger(
          leftOperand === rightOperand || String(leftOperand).localeCompare(String(rightOperand)) === -1,
        );
      }
      if (ctx.comparisonOperator().LT()) {
        return asInteger(String(leftOperand).localeCompare(String(rightOperand)) === -1);
      }
    }
    if (isDate(leftOperand) && isDate(rightOperand)) {
      const leftOperandAsDate = leftOperand as Date;
      const rightOperandAsDate = rightOperand as Date;
      if (ctx.comparisonOperator().EQ() || ctx.comparisonOperator().EQ_2()) {
        return asInteger(leftOperandAsDate.getTime() === rightOperandAsDate.getTime());
      }
      if (ctx.comparisonOperator().NEQ() || ctx.comparisonOperator().NEQ_2()) {
        return asInteger(leftOperandAsDate.getTime() !== rightOperandAsDate.getTime());
      }
      if (ctx.comparisonOperator().GE()) {
        return asInteger(
          leftOperandAsDate.getTime() === rightOperandAsDate.getTime() || leftOperandAsDate > rightOperandAsDate,
        );
      }
      if (ctx.comparisonOperator().GT()) {
        return asInteger(leftOperandAsDate > rightOperandAsDate);
      }
      if (ctx.comparisonOperator().LE()) {
        return asInteger(
          leftOperandAsDate.getTime() === rightOperandAsDate.getTime() || leftOperandAsDate < rightOperandAsDate,
        );
      }
      if (ctx.comparisonOperator().LT()) {
        return asInteger(leftOperandAsDate < rightOperandAsDate);
      }
    }
    if (isNull(rawLeftOperand) || isNull(rawRightOperand)) {
      return 0;
    }
    throw 'Unsupported relation';
  };
  evaluator.visitSingleExpression = (ctx: SingleExpressionContext): Literal => {
    if (ctx.computableAtom()) {
      return negateIfNeeded(evaluator.visitComputableAtom(ctx.computableAtom()), !!ctx.EXCLAMATION());
    }
    if (ctx.relationalExpression()) {
      return evaluator.visitRelationalExpression(ctx.relationalExpression());
    }
    throw 'Unsupported single expression';
  };
  evaluator.visitAndExpression = (ctx: AndExpressionContext): Literal => {
    let result: number;
    const accumulateValue = (ix: number, value: Literal): void => {
      if (ix === 0) {
        result = asInteger(asBoolean(value));
      } else {
        if (ctx.andOperator(ix - 1).AND()) {
          result = asInteger(asBoolean(result) && asBoolean(value));
        } else if (ctx.andOperator(ix - 1).AND_NOT()) {
          result = asInteger(asBoolean(result) && !asBoolean(value));
        }
      }
    };
    ctx
      .singleExpression_list()
      .forEach((exp, ix) => accumulateValue(ix, evaluator.visitSingleExpression(exp) as number));
    return result;
  };
  evaluator.visitOrExpression = (ctx: OrExpressionContext): Literal => {
    let result: number;
    for (let i = 0; i < ctx.andExpression_list().length; i++) {
      const value = evaluator.visitAndExpression(ctx.andExpression(i)) as number;
      assertNumber(value);
      if (i === 0) {
        result = value as number;
      } else {
        result = asInteger(asBoolean(result) || asBoolean(value));
      }
    }
    return result;
  };
  evaluator.visitXpath = (ctx: XpathContext): Literal => {
    if (!options?.xpathConverter) {
      throw 'No xpath converter provided';
    }
    return options.xpathConverter((ctx as any).getText());
  };
  evaluator.visitLiteral = (ctx: LiteralContext): Literal => {
    const text = (ctx as any).getText();
    if (ctx.STRING()) {
      return unescapeQuotes(unquote(text));
    }
    if (ctx.DOUBLE()) {
      return Number.parseFloat(text);
    }
    if (ctx.INT()) {
      return Number.parseInt(text);
    }
    if (ctx.TRUE()) {
      return 1;
    }
    if (ctx.FALSE()) {
      return 0;
    }
    if (ctx.NULL()) {
      return null;
    }
    if (ctx.DATE() || ctx.DATETIME()) {
      return fromDate(ctx.getText());
    }
    if (ctx.TIME()) {
      return fromTime(ctx.getText());
    }
    return text;
  };
  evaluator.visitFunctionCall = (ctx: FunctionCallContext): Literal => {
    if (!options?.functionConverter) {
      throw 'No function converter provided';
    }
    const functionName = (ctx.IDENTIFIER() as any).getText();
    const parameterContext = ctx.parameters();
    if (!parameterContext) {
      return options.functionConverter(functionName);
    }
    const params = [];
    for (const expression of parameterContext.expression_list()) {
      params.push(evaluator.visitExpression(expression));
    }
    return options.functionConverter(functionName, ...params);
  };
  evaluator.visitVariable = (ctx: VariableContext): Literal => {
    if (!options?.variableConverter) {
      throw 'No variable converter provided';
    }
    const varName = (ctx.variableIdentifier() as any).getText();
    const value = options.variableConverter(varName);
    if (isString(value) || isNumber(value)) {
      return value as string;
    }
    throw `Invalid type for variable ${varName}`;
  };
  evaluator.visitCastVariable = (ctx: CastVariableContext): Literal => {
    if (!options?.variableConverter) {
      throw 'No variable converter provided';
    }
    const value = options.variableConverter((ctx.variableIdentifier() as any).getText());
    assertString(value);
    return value as string;
  };
  evaluator.visitComputableAtom = (ctx: ComputableAtomContext): Literal => {
    if (ctx.literal()) {
      return evaluator.visitLiteral(ctx.literal());
    }
    if (ctx.xpath()) {
      return evaluator.visitXpath(ctx.xpath());
    }
    if (ctx.addingExpression()) {
      return evaluator.visitAddingExpression(ctx.addingExpression());
    }
    if (ctx.functionCall()) {
      return evaluator.visitFunctionCall(ctx.functionCall());
    }
    if (ctx.variable()) {
      return evaluator.visitVariable(ctx.variable());
    }
    if (ctx.castVariable()) {
      return evaluator.visitCastVariable(ctx.castVariable());
    }
    throw 'Atom cannot be evaluated';
  };
  evaluator.visitMultiplyingExpression = (ctx: MultiplyingExpressionContext): Literal => {
    let result: Literal;
    for (let i = 0; i < ctx.computableAtom_list().length; i++) {
      const value = evaluator.visitComputableAtom(ctx.computableAtom(i));
      if (i === 0) {
        result = value;
      } else {
        assertNumber(value);
        const opCtx = ctx.multiplyOperator(i - 1);
        if (opCtx.TIMES()) {
          result = (result as number) * (value as number);
        } else if (opCtx.DIV()) {
          result = (result as number) / (value as number);
        } else if (opCtx.PERCENT()) {
          result = (result as number) % (value as number);
        }
      }
    }
    return result;
  };
  evaluator.visitAddingExpression = (ctx: AddingExpressionContext): Literal => {
    let result: Literal;
    for (let i = 0; i < ctx.multiplyingExpression_list().length; i++) {
      const value = evaluator.visitMultiplyingExpression(ctx.multiplyingExpression(i));
      if (i === 0) {
        result = value;
      } else {
        const op = ctx.addingOperator(i - 1);
        if (typeof result === 'number') {
          assertNumber(value);
          if (op.PLUS()) {
            result += value as number;
          } else if (op.MINUS()) {
            result -= value as number;
          } else if (op.AMP()) {
            result &= value as number;
          } else if (op.PIPE()) {
            result |= value as number;
          }
        } else {
          if (op.PLUS() || op.CONCAT()) {
            result = `${result}${value}`;
          } else {
            throw 'Illegal operation between strings';
          }
        }
      }
    }
    return result;
  };
  return evaluator;
}
