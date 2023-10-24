import {CommonTokenStream, ParserRuleContext, Token} from 'antlr4';
import {ErrorNode, ParseTreeListener, TerminalNode} from 'antlr4/tree/Tree';

import {UnitContext} from './XtkParser';

import {ExpressionContext} from './XtkParser';

import {LogicalOperatorContext} from './XtkParser';

import {FunctionCallContext} from './XtkParser';

import {AddingExpressionContext} from './XtkParser';

import {MultiplyingExpressionContext} from './XtkParser';

import {ComparisonOperatorContext} from './XtkParser';

import {RelationalExpressionContext} from './XtkParser';

import {UnaryOperatorContext} from './XtkParser';

import {UnaryExpressionContext} from './XtkParser';

import {LikeOperatorContext} from './XtkParser';

import {LikeExpressionContext} from './XtkParser';

import {IncludedInExpressionContext} from './XtkParser';

import {XpathContext} from './XtkParser';

import {Xpath_locationPathContext} from './XtkParser';

import {Xpath_stepContext} from './XtkParser';

import {Xpath_qnameContext} from './XtkParser';

import {Xpath_predicateContext} from './XtkParser';

import {Xpath_exprContext} from './XtkParser';

import {ListContext} from './XtkParser';

import {ParametersContext} from './XtkParser';

import {LiteralContext} from './XtkParser';

import {ComputableAtomContext} from './XtkParser';


export declare class XtkParserListener implements ParseTreeListener {
    constructor();
    
    enterUnit(ctx: UnitContext): void;
    
    exitUnit(ctx: UnitContext): void;
    
    enterExpression(ctx: ExpressionContext): void;
    
    exitExpression(ctx: ExpressionContext): void;
    
    enterLogicalOperator(ctx: LogicalOperatorContext): void;
    
    exitLogicalOperator(ctx: LogicalOperatorContext): void;
    
    enterFunctionCall(ctx: FunctionCallContext): void;
    
    exitFunctionCall(ctx: FunctionCallContext): void;
    
    enterAddingExpression(ctx: AddingExpressionContext): void;
    
    exitAddingExpression(ctx: AddingExpressionContext): void;
    
    enterMultiplyingExpression(ctx: MultiplyingExpressionContext): void;
    
    exitMultiplyingExpression(ctx: MultiplyingExpressionContext): void;
    
    enterComparisonOperator(ctx: ComparisonOperatorContext): void;
    
    exitComparisonOperator(ctx: ComparisonOperatorContext): void;
    
    enterRelationalExpression(ctx: RelationalExpressionContext): void;
    
    exitRelationalExpression(ctx: RelationalExpressionContext): void;
    
    enterUnaryOperator(ctx: UnaryOperatorContext): void;
    
    exitUnaryOperator(ctx: UnaryOperatorContext): void;
    
    enterUnaryExpression(ctx: UnaryExpressionContext): void;
    
    exitUnaryExpression(ctx: UnaryExpressionContext): void;
    
    enterLikeOperator(ctx: LikeOperatorContext): void;
    
    exitLikeOperator(ctx: LikeOperatorContext): void;
    
    enterLikeExpression(ctx: LikeExpressionContext): void;
    
    exitLikeExpression(ctx: LikeExpressionContext): void;
    
    enterIncludedInExpression(ctx: IncludedInExpressionContext): void;
    
    exitIncludedInExpression(ctx: IncludedInExpressionContext): void;
    
    enterXpath(ctx: XpathContext): void;
    
    exitXpath(ctx: XpathContext): void;
    
    enterXpath_locationPath(ctx: Xpath_locationPathContext): void;
    
    exitXpath_locationPath(ctx: Xpath_locationPathContext): void;
    
    enterXpath_step(ctx: Xpath_stepContext): void;
    
    exitXpath_step(ctx: Xpath_stepContext): void;
    
    enterXpath_qname(ctx: Xpath_qnameContext): void;
    
    exitXpath_qname(ctx: Xpath_qnameContext): void;
    
    enterXpath_predicate(ctx: Xpath_predicateContext): void;
    
    exitXpath_predicate(ctx: Xpath_predicateContext): void;
    
    enterXpath_expr(ctx: Xpath_exprContext): void;
    
    exitXpath_expr(ctx: Xpath_exprContext): void;
    
    enterList(ctx: ListContext): void;
    
    exitList(ctx: ListContext): void;
    
    enterParameters(ctx: ParametersContext): void;
    
    exitParameters(ctx: ParametersContext): void;
    
    enterLiteral(ctx: LiteralContext): void;
    
    exitLiteral(ctx: LiteralContext): void;
    
    enterComputableAtom(ctx: ComputableAtomContext): void;
    
    exitComputableAtom(ctx: ComputableAtomContext): void;
    
    visitTerminal(node: TerminalNode): void;

    visitErrorNode(node: ErrorNode): void;

    enterEveryRule(node: ParserRuleContext): void;

    exitEveryRule(node: ParserRuleContext): void;
}
