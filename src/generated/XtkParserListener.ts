// Generated from XtkParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { UnitContext } from "./XtkParser";
import { ExpressionContext } from "./XtkParser";
import { LogicalOperatorContext } from "./XtkParser";
import { FunctionCallContext } from "./XtkParser";
import { AddingExpressionContext } from "./XtkParser";
import { MultiplyingExpressionContext } from "./XtkParser";
import { AddingOperatorContext } from "./XtkParser";
import { ComparisonOperatorContext } from "./XtkParser";
import { MultiplyOperatorContext } from "./XtkParser";
import { RelationalExpressionContext } from "./XtkParser";
import { UnaryOperatorContext } from "./XtkParser";
import { UnaryExpressionContext } from "./XtkParser";
import { LikeOperatorContext } from "./XtkParser";
import { LikeExpressionContext } from "./XtkParser";
import { IncludedInExpressionContext } from "./XtkParser";
import { XpathContext } from "./XtkParser";
import { Xpath_schemaContext } from "./XtkParser";
import { Xpath_locationPathContext } from "./XtkParser";
import { Xpath_stepContext } from "./XtkParser";
import { Xpath_qnameContext } from "./XtkParser";
import { Xpath_predicateContext } from "./XtkParser";
import { Xpath_exprContext } from "./XtkParser";
import { ListContext } from "./XtkParser";
import { ParametersContext } from "./XtkParser";
import { VariablePathContext } from "./XtkParser";
import { VariableIdentifierContext } from "./XtkParser";
import { VariableContext } from "./XtkParser";
import { CastVariableContext } from "./XtkParser";
import { LiteralContext } from "./XtkParser";
import { ComputableAtomContext } from "./XtkParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `XtkParser`.
 */
export default class XtkParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `XtkParser.unit`.
	 * @param ctx the parse tree
	 */
	enterUnit?: (ctx: UnitContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.unit`.
	 * @param ctx the parse tree
	 */
	exitUnit?: (ctx: UnitContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.logicalOperator`.
	 * @param ctx the parse tree
	 */
	enterLogicalOperator?: (ctx: LogicalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.logicalOperator`.
	 * @param ctx the parse tree
	 */
	exitLogicalOperator?: (ctx: LogicalOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.addingExpression`.
	 * @param ctx the parse tree
	 */
	enterAddingExpression?: (ctx: AddingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.addingExpression`.
	 * @param ctx the parse tree
	 */
	exitAddingExpression?: (ctx: AddingExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.addingOperator`.
	 * @param ctx the parse tree
	 */
	enterAddingOperator?: (ctx: AddingOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.addingOperator`.
	 * @param ctx the parse tree
	 */
	exitAddingOperator?: (ctx: AddingOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.multiplyOperator`.
	 * @param ctx the parse tree
	 */
	enterMultiplyOperator?: (ctx: MultiplyOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.multiplyOperator`.
	 * @param ctx the parse tree
	 */
	exitMultiplyOperator?: (ctx: MultiplyOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.likeOperator`.
	 * @param ctx the parse tree
	 */
	enterLikeOperator?: (ctx: LikeOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.likeOperator`.
	 * @param ctx the parse tree
	 */
	exitLikeOperator?: (ctx: LikeOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.likeExpression`.
	 * @param ctx the parse tree
	 */
	enterLikeExpression?: (ctx: LikeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.likeExpression`.
	 * @param ctx the parse tree
	 */
	exitLikeExpression?: (ctx: LikeExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.includedInExpression`.
	 * @param ctx the parse tree
	 */
	enterIncludedInExpression?: (ctx: IncludedInExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.includedInExpression`.
	 * @param ctx the parse tree
	 */
	exitIncludedInExpression?: (ctx: IncludedInExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.xpath`.
	 * @param ctx the parse tree
	 */
	enterXpath?: (ctx: XpathContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.xpath`.
	 * @param ctx the parse tree
	 */
	exitXpath?: (ctx: XpathContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.xpath_schema`.
	 * @param ctx the parse tree
	 */
	enterXpath_schema?: (ctx: Xpath_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.xpath_schema`.
	 * @param ctx the parse tree
	 */
	exitXpath_schema?: (ctx: Xpath_schemaContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.xpath_locationPath`.
	 * @param ctx the parse tree
	 */
	enterXpath_locationPath?: (ctx: Xpath_locationPathContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.xpath_locationPath`.
	 * @param ctx the parse tree
	 */
	exitXpath_locationPath?: (ctx: Xpath_locationPathContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.xpath_step`.
	 * @param ctx the parse tree
	 */
	enterXpath_step?: (ctx: Xpath_stepContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.xpath_step`.
	 * @param ctx the parse tree
	 */
	exitXpath_step?: (ctx: Xpath_stepContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.xpath_qname`.
	 * @param ctx the parse tree
	 */
	enterXpath_qname?: (ctx: Xpath_qnameContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.xpath_qname`.
	 * @param ctx the parse tree
	 */
	exitXpath_qname?: (ctx: Xpath_qnameContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.xpath_predicate`.
	 * @param ctx the parse tree
	 */
	enterXpath_predicate?: (ctx: Xpath_predicateContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.xpath_predicate`.
	 * @param ctx the parse tree
	 */
	exitXpath_predicate?: (ctx: Xpath_predicateContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.xpath_expr`.
	 * @param ctx the parse tree
	 */
	enterXpath_expr?: (ctx: Xpath_exprContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.xpath_expr`.
	 * @param ctx the parse tree
	 */
	exitXpath_expr?: (ctx: Xpath_exprContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.variablePath`.
	 * @param ctx the parse tree
	 */
	enterVariablePath?: (ctx: VariablePathContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.variablePath`.
	 * @param ctx the parse tree
	 */
	exitVariablePath?: (ctx: VariablePathContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.variableIdentifier`.
	 * @param ctx the parse tree
	 */
	enterVariableIdentifier?: (ctx: VariableIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.variableIdentifier`.
	 * @param ctx the parse tree
	 */
	exitVariableIdentifier?: (ctx: VariableIdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.castVariable`.
	 * @param ctx the parse tree
	 */
	enterCastVariable?: (ctx: CastVariableContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.castVariable`.
	 * @param ctx the parse tree
	 */
	exitCastVariable?: (ctx: CastVariableContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `XtkParser.computableAtom`.
	 * @param ctx the parse tree
	 */
	enterComputableAtom?: (ctx: ComputableAtomContext) => void;
	/**
	 * Exit a parse tree produced by `XtkParser.computableAtom`.
	 * @param ctx the parse tree
	 */
	exitComputableAtom?: (ctx: ComputableAtomContext) => void;
}

