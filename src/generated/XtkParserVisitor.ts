// Generated from XtkParser.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { UnitContext } from "./XtkParser";
import { ExpressionContext } from "./XtkParser";
import { OrExpressionContext } from "./XtkParser";
import { AndExpressionContext } from "./XtkParser";
import { AndOperatorContext } from "./XtkParser";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `XtkParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class XtkParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `XtkParser.unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnit?: (ctx: UnitContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.orExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrExpression?: (ctx: OrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.andExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.andOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndOperator?: (ctx: AndOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.addingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddingExpression?: (ctx: AddingExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.addingOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddingOperator?: (ctx: AddingOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.multiplyOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyOperator?: (ctx: MultiplyOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.unaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.likeOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeOperator?: (ctx: LikeOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.likeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeExpression?: (ctx: LikeExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.includedInExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludedInExpression?: (ctx: IncludedInExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.xpath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXpath?: (ctx: XpathContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.xpath_schema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXpath_schema?: (ctx: Xpath_schemaContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.xpath_locationPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXpath_locationPath?: (ctx: Xpath_locationPathContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.xpath_step`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXpath_step?: (ctx: Xpath_stepContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.xpath_qname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXpath_qname?: (ctx: Xpath_qnameContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.xpath_predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXpath_predicate?: (ctx: Xpath_predicateContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.xpath_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXpath_expr?: (ctx: Xpath_exprContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.variablePath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariablePath?: (ctx: VariablePathContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.variableIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableIdentifier?: (ctx: VariableIdentifierContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.castVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastVariable?: (ctx: CastVariableContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `XtkParser.computableAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComputableAtom?: (ctx: ComputableAtomContext) => Result;
}

