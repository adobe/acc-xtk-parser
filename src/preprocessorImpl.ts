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

import {
  AddingExpressionContext,
  AndExpressionContext,
  CastVariableContext,
  ComputableAtomContext,
  ExpressionContext,
  FunctionCallContext,
  IncludedInExpressionContext,
  LikeExpressionContext,
  LikeOperatorContext,
  ListContext,
  LiteralContext,
  MultiplyingExpressionContext,
  OrExpressionContext,
  ParametersContext,
  RelationalExpressionContext,
  SingleExpressionContext,
  UnaryExpressionContext,
  UnaryOperatorContext,
  UnitContext,
  VariableContext,
  VariableIdentifierContext,
  XpathContext,
} from './generated/XtkParser';
import XtkParserVisitor from './generated/XtkParserVisitor';
import { EvaluatorOptions } from './utils';

export function createPreprocessor(options?: EvaluatorOptions) {
  const preprocessor = new XtkParserVisitor<string>();
  preprocessor.visitUnit = (ctx: UnitContext): string => {
    return preprocessor.visitExpression(ctx.expression());
  };
  preprocessor.visitExpression = (ctx: ExpressionContext): string => {
    if (ctx.addingExpression()) {
      return preprocessor.visitAddingExpression(ctx.addingExpression());
    }
    if (ctx.computableAtom()) {
      return preprocessor.visitComputableAtom(ctx.computableAtom());
    }
    if (ctx.orExpression()) {
      return preprocessor.visitOrExpression(ctx.orExpression());
    }
    if (ctx.expression()) {
      const value = preprocessor.visitExpression(ctx.expression());
      if (ctx.PAR_OPEN() && ctx.PAR_CLOSE()) {
        return `(${value})`;
      }
      if (ctx.EXCLAMATION()) {
        return `!${value}`;
      }
    }
    throw 'Unsupported expression';
  };
  preprocessor.visitRelationalExpression = (ctx: RelationalExpressionContext): string => {
    const rawLeftOperand = preprocessor.visitAddingExpression(ctx.addingExpression(0));
    const rawRightOperand = preprocessor.visitAddingExpression(ctx.addingExpression(1));
    if (ctx.comparisonOperator().EQ() || ctx.comparisonOperator().EQ_2()) {
      return `${rawLeftOperand} = ${rawRightOperand}`;
    }
    if (ctx.comparisonOperator().NEQ() || ctx.comparisonOperator().NEQ_2()) {
      return `${rawLeftOperand} != ${rawRightOperand}`;
    }
    if (ctx.comparisonOperator().GE()) {
      return `${rawLeftOperand} >= ${rawRightOperand}`;
    }
    if (ctx.comparisonOperator().GT()) {
      return `${rawLeftOperand} > ${rawRightOperand}`;
    }
    if (ctx.comparisonOperator().LE()) {
      return `${rawLeftOperand} <= ${rawRightOperand}`;
    }
    if (ctx.comparisonOperator().LT()) {
      return `${rawLeftOperand} < ${rawRightOperand}`;
    }
    throw 'Unsupported relation';
  };
  preprocessor.visitSingleExpression = (ctx: SingleExpressionContext): string => {
    if (ctx.computableAtom()) {
      const value = preprocessor.visitComputableAtom(ctx.computableAtom());
      if (ctx.EXCLAMATION()) {
        return `!${value}`;
      }
      return value;
    }
    if (ctx.relationalExpression()) {
      return preprocessor.visitRelationalExpression(ctx.relationalExpression());
    }
    if (ctx.unaryExpression()) {
      return preprocessor.visitUnaryExpression(ctx.unaryExpression());
    }
    if (ctx.likeExpression()) {
      return preprocessor.visitLikeExpression(ctx.likeExpression());
    }
    if (ctx.includedInExpression()) {
      return preprocessor.visitIncludedInExpression(ctx.includedInExpression());
    }
    throw 'Unsupported single expression';
  };
  preprocessor.visitUnaryExpression = (ctx: UnaryExpressionContext): string => {
    const value = preprocessor.visitAddingExpression(ctx.addingExpression());
    const operator = preprocessor.visitUnaryOperator(ctx.unaryOperator());
    return `${value} ${operator}`;
  };
  preprocessor.visitUnaryOperator = (ctx: UnaryOperatorContext): string => {
    if (ctx.IS_NULL()) {
      return 'IS NULL';
    }
    return 'IS NOT NULL';
  };
  preprocessor.visitLikeExpression = (ctx: LikeExpressionContext): string => {
    const leftOperandValue = preprocessor.visitAddingExpression(ctx.addingExpression(0));
    const rightOperandValue = preprocessor.visitAddingExpression(ctx.addingExpression(1));
    const operator = preprocessor.visitLikeOperator(ctx.likeOperator());
    return `${leftOperandValue} ${operator} ${rightOperandValue}`;
  };
  preprocessor.visitLikeOperator = (ctx: LikeOperatorContext): string => {
    if (ctx.LIKE()) {
      return 'LIKE';
    }
    return 'NOT LIKE';
  };
  preprocessor.visitIncludedInExpression = (ctx: IncludedInExpressionContext): string => {
    const leftOperandValue = preprocessor.visitAddingExpression(ctx.addingExpression());
    const listValue = preprocessor.visitList(ctx.list());
    const operator = ctx.IN() ? 'IN' : 'NOT IN';
    return `${leftOperandValue} ${operator} (${listValue})`;
  };
  preprocessor.visitList = (ctx: ListContext): string => {
    let result = '';
    for (const expression of ctx.expression_list()) {
      const value = preprocessor.visitExpression(expression);
      if (result === '') {
        result = value;
      } else {
        result = `${result}, ${value}`;
      }
    }
    result = `${result}`;
    return result;
  };
  preprocessor.visitAndExpression = (ctx: AndExpressionContext): string => {
    let result: string;
    const accumulateValue = (ix: number, value: string): void => {
      if (ix === 0) {
        result = value;
      } else {
        if (ctx.andOperator(ix - 1).AND()) {
          result = `${result} AND ${value}`;
        } else if (ctx.andOperator(ix - 1).AND_NOT()) {
          result = `${result} AND NOT ${value}`;
        }
      }
    };
    ctx.singleExpression_list().forEach((exp, ix) => accumulateValue(ix, preprocessor.visitSingleExpression(exp)));
    return result;
  };
  preprocessor.visitOrExpression = (ctx: OrExpressionContext): string => {
    let result: string;
    for (let i = 0; i < ctx.andExpression_list().length; i++) {
      const value = preprocessor.visitAndExpression(ctx.andExpression(i));
      if (i === 0) {
        result = value;
      } else {
        result = `${result} OR ${value}`;
      }
    }
    return result;
  };
  preprocessor.visitXpath = (ctx: XpathContext): string => {
    return ctx.getText();
  };
  preprocessor.visitLiteral = (ctx: LiteralContext): string => {
    return ctx.getText();
  };
  preprocessor.visitFunctionCall = (ctx: FunctionCallContext): string => {
    const functionName = (ctx.IDENTIFIER() as any).getText();
    const parameterContext = preprocessor.visitParameters(ctx.parameters());
    return `${functionName}(${parameterContext})`;
  };
  preprocessor.visitParameters = (ctx: ParametersContext): string => {
    let result = '';
    for (const expression of ctx.expression_list()) {
      const value = preprocessor.visitExpression(expression);
      if (result.length > 0) {
        result += `, ${value}`;
      } else {
        result = value;
      }
    }
    return result;
  };
  preprocessor.visitVariable = (ctx: VariableContext): string => {
    return preprocessor.visitVariableIdentifier(ctx.variableIdentifier());
  };
  preprocessor.visitVariableIdentifier = (ctx: VariableIdentifierContext): string => {
    const variableName = ctx.getText();
    if (variableName.startsWith('@')) {
      if (!options?.xpathConverter) {
        throw 'No xpath converter provided';
      }
      return options.xpathConverter(variableName) as string;
    }
    if (!options?.variableConverter) {
      throw 'No variable converter provided';
    }
    return options.variableConverter(variableName) as string;
  };
  preprocessor.visitCastVariable = (ctx: CastVariableContext): string => {
    // Ideally we should handle the cast "operator"...
    return preprocessor.visitVariableIdentifier(ctx.variableIdentifier());
  };
  preprocessor.visitComputableAtom = (ctx: ComputableAtomContext): string => {
    if (ctx.literal()) {
      return preprocessor.visitLiteral(ctx.literal());
    }
    if (ctx.xpath()) {
      return preprocessor.visitXpath(ctx.xpath());
    }
    if (ctx.addingExpression()) {
      const value = preprocessor.visitAddingExpression(ctx.addingExpression());
      return `(${value})`;
    }
    if (ctx.functionCall()) {
      return preprocessor.visitFunctionCall(ctx.functionCall());
    }
    if (ctx.variable()) {
      return preprocessor.visitVariable(ctx.variable());
    }
    if (ctx.castVariable()) {
      return preprocessor.visitCastVariable(ctx.castVariable());
    }
    throw 'Atom cannot be evaluated';
  };
  preprocessor.visitMultiplyingExpression = (ctx: MultiplyingExpressionContext): string => {
    let result: string;
    for (let i = 0; i < ctx.computableAtom_list().length; i++) {
      const value = preprocessor.visitComputableAtom(ctx.computableAtom(i));
      if (i === 0) {
        result = value;
      } else {
        const opCtx = ctx.multiplyOperator(i - 1);
        if (opCtx.TIMES()) {
          result = `${result} * ${value}`;
        } else if (opCtx.DIV()) {
          result = `${result} / ${value}`;
        } else if (opCtx.PERCENT()) {
          result = `${result} % ${value}`;
        }
      }
    }
    return result;
  };
  preprocessor.visitAddingExpression = (ctx: AddingExpressionContext): string => {
    let result: string;
    for (let i = 0; i < ctx.multiplyingExpression_list().length; i++) {
      const value = preprocessor.visitMultiplyingExpression(ctx.multiplyingExpression(i));
      if (i === 0) {
        result = value;
      } else {
        const op = ctx.addingOperator(i - 1);
        if (op.PLUS()) {
          result = `${result} + ${value}`;
        } else if (op.MINUS()) {
          result = `${result} - ${value}`;
        } else if (op.AMP()) {
          result = `${result} & ${value}`;
        } else if (op.PIPE()) {
          result = `${result} | ${value}`;
        } else if (op.CONCAT()) {
          result = `${result} || ${value}`;
        } else {
          throw 'Illegal operation between strings';
        }
      }
    }
    return result;
  };
  return preprocessor;
}
