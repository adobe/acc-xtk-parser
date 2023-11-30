// Generated from XtkParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import XtkParserListener from "./XtkParserListener.js";
import XtkParserVisitor from "./XtkParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class XtkParser extends Parser {
	public static readonly STRING = 1;
	public static readonly INT = 2;
	public static readonly BOOLEAN = 3;
	public static readonly PAR_OPEN = 4;
	public static readonly PAR_CLOSE = 5;
	public static readonly DOUBLE = 6;
	public static readonly DATE = 7;
	public static readonly TIME = 8;
	public static readonly DATETIME = 9;
	public static readonly NOT_IN = 10;
	public static readonly NOT = 11;
	public static readonly IS_NULL = 12;
	public static readonly IS_NOT_NULL = 13;
	public static readonly IS = 14;
	public static readonly IN = 15;
	public static readonly NULL = 16;
	public static readonly OR = 17;
	public static readonly AND = 18;
	public static readonly AND_NOT = 19;
	public static readonly LIKE = 20;
	public static readonly NOT_LIKE = 21;
	public static readonly CONCAT = 22;
	public static readonly ATTRIBUTE = 23;
	public static readonly IDENTIFIER = 24;
	public static readonly START_VARIABLE = 25;
	public static readonly LT = 26;
	public static readonly GT = 27;
	public static readonly LE = 28;
	public static readonly GE = 29;
	public static readonly EQ = 30;
	public static readonly EQ_2 = 31;
	public static readonly NEQ = 32;
	public static readonly NEQ_2 = 33;
	public static readonly PLUS = 34;
	public static readonly MINUS = 35;
	public static readonly TIMES = 36;
	public static readonly DIV = 37;
	public static readonly AMP = 38;
	public static readonly PIPE = 39;
	public static readonly PERCENT = 40;
	public static readonly EXCLAMATION = 41;
	public static readonly COMMA = 42;
	public static readonly COLON = 43;
	public static readonly DOT = 44;
	public static readonly WS = 45;
	public static readonly BRAC_OPEN = 46;
	public static readonly X_BRAC_OPEN = 47;
	public static readonly X_BRAC_CLOSE = 48;
	public static readonly X_INT = 49;
	public static readonly X_STRING = 50;
	public static readonly X_NCNAME = 51;
	public static readonly X_SEP = 52;
	public static readonly X_COLON = 53;
	public static readonly X_PARENT = 54;
	public static readonly X_CURRENT = 55;
	public static readonly X_ATTR = 56;
	public static readonly X_EQ = 57;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_unit = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_orExpression = 2;
	public static readonly RULE_andExpression = 3;
	public static readonly RULE_functionCall = 4;
	public static readonly RULE_addingExpression = 5;
	public static readonly RULE_multiplyingExpression = 6;
	public static readonly RULE_addingOperator = 7;
	public static readonly RULE_comparisonOperator = 8;
	public static readonly RULE_multiplyOperator = 9;
	public static readonly RULE_relationalExpression = 10;
	public static readonly RULE_unaryOperator = 11;
	public static readonly RULE_unaryExpression = 12;
	public static readonly RULE_likeOperator = 13;
	public static readonly RULE_likeExpression = 14;
	public static readonly RULE_includedInExpression = 15;
	public static readonly RULE_xpath = 16;
	public static readonly RULE_xpath_schema = 17;
	public static readonly RULE_xpath_locationPath = 18;
	public static readonly RULE_xpath_step = 19;
	public static readonly RULE_xpath_qname = 20;
	public static readonly RULE_xpath_predicate = 21;
	public static readonly RULE_xpath_expr = 22;
	public static readonly RULE_list = 23;
	public static readonly RULE_parameters = 24;
	public static readonly RULE_variablePath = 25;
	public static readonly RULE_variableIdentifier = 26;
	public static readonly RULE_variable = 27;
	public static readonly RULE_castVariable = 28;
	public static readonly RULE_literal = 29;
	public static readonly RULE_computableAtom = 30;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            "'('", "')'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'||'", null, 
                                                            null, "'$'", 
                                                            "'<'", "'>'", 
                                                            "'<='", "'>='", 
                                                            null, "'=='", 
                                                            "'!='", "'<>'", 
                                                            "'+'", "'-'", 
                                                            "'*'", null, 
                                                            "'&'", "'|'", 
                                                            "'%'", "'!'", 
                                                            "','", null, 
                                                            null, null, 
                                                            null, null, 
                                                            "']'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'..'", null, 
                                                            "'@'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "STRING", 
                                                             "INT", "BOOLEAN", 
                                                             "PAR_OPEN", 
                                                             "PAR_CLOSE", 
                                                             "DOUBLE", "DATE", 
                                                             "TIME", "DATETIME", 
                                                             "NOT_IN", "NOT", 
                                                             "IS_NULL", 
                                                             "IS_NOT_NULL", 
                                                             "IS", "IN", 
                                                             "NULL", "OR", 
                                                             "AND", "AND_NOT", 
                                                             "LIKE", "NOT_LIKE", 
                                                             "CONCAT", "ATTRIBUTE", 
                                                             "IDENTIFIER", 
                                                             "START_VARIABLE", 
                                                             "LT", "GT", 
                                                             "LE", "GE", 
                                                             "EQ", "EQ_2", 
                                                             "NEQ", "NEQ_2", 
                                                             "PLUS", "MINUS", 
                                                             "TIMES", "DIV", 
                                                             "AMP", "PIPE", 
                                                             "PERCENT", 
                                                             "EXCLAMATION", 
                                                             "COMMA", "COLON", 
                                                             "DOT", "WS", 
                                                             "BRAC_OPEN", 
                                                             "X_BRAC_OPEN", 
                                                             "X_BRAC_CLOSE", 
                                                             "X_INT", "X_STRING", 
                                                             "X_NCNAME", 
                                                             "X_SEP", "X_COLON", 
                                                             "X_PARENT", 
                                                             "X_CURRENT", 
                                                             "X_ATTR", "X_EQ" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"unit", "expression", "orExpression", "andExpression", "functionCall", 
		"addingExpression", "multiplyingExpression", "addingOperator", "comparisonOperator", 
		"multiplyOperator", "relationalExpression", "unaryOperator", "unaryExpression", 
		"likeOperator", "likeExpression", "includedInExpression", "xpath", "xpath_schema", 
		"xpath_locationPath", "xpath_step", "xpath_qname", "xpath_predicate", 
		"xpath_expr", "list", "parameters", "variablePath", "variableIdentifier", 
		"variable", "castVariable", "literal", "computableAtom",
	];
	public get grammarFileName(): string { return "XtkParser.g4"; }
	public get literalNames(): (string | null)[] { return XtkParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return XtkParser.symbolicNames; }
	public get ruleNames(): string[] { return XtkParser.ruleNames; }
	public get serializedATN(): number[] { return XtkParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, XtkParser._ATN, XtkParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public unit(): UnitContext {
		let localctx: UnitContext = new UnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, XtkParser.RULE_unit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 62;
			this.expression();
			this.state = 63;
			this.match(XtkParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, XtkParser.RULE_expression);
		try {
			this.state = 74;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 65;
				this.computableAtom();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 66;
				this.match(XtkParser.EXCLAMATION);
				this.state = 67;
				this.expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 68;
				this.orExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 69;
				this.addingExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 70;
				this.match(XtkParser.PAR_OPEN);
				this.state = 71;
				this.expression();
				this.state = 72;
				this.match(XtkParser.PAR_CLOSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orExpression(): OrExpressionContext {
		let localctx: OrExpressionContext = new OrExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, XtkParser.RULE_orExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			this.andExpression();
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===17) {
				{
				{
				this.state = 77;
				this.match(XtkParser.OR);
				this.state = 78;
				this.andExpression();
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public andExpression(): AndExpressionContext {
		let localctx: AndExpressionContext = new AndExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, XtkParser.RULE_andExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 89;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 84;
				this.computableAtom();
				}
				break;
			case 2:
				{
				this.state = 85;
				this.relationalExpression();
				}
				break;
			case 3:
				{
				this.state = 86;
				this.unaryExpression();
				}
				break;
			case 4:
				{
				this.state = 87;
				this.likeExpression();
				}
				break;
			case 5:
				{
				this.state = 88;
				this.includedInExpression();
				}
				break;
			}
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18 || _la===19) {
				{
				{
				this.state = 91;
				_la = this._input.LA(1);
				if(!(_la===18 || _la===19)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 101;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 92;
					this.computableAtom();
					}
					break;
				case 2:
					{
					this.state = 93;
					this.relationalExpression();
					}
					break;
				case 3:
					{
					this.state = 94;
					this.unaryExpression();
					}
					break;
				case 4:
					{
					this.state = 95;
					this.likeExpression();
					}
					break;
				case 5:
					{
					this.state = 96;
					this.includedInExpression();
					}
					break;
				case 6:
					{
					this.state = 97;
					this.match(XtkParser.PAR_OPEN);
					this.state = 98;
					this.orExpression();
					this.state = 99;
					this.match(XtkParser.PAR_CLOSE);
					}
					break;
				}
				}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, XtkParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
			this.match(XtkParser.IDENTIFIER);
			this.state = 109;
			this.match(XtkParser.PAR_OPEN);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 58721246) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2113) !== 0)) {
				{
				this.state = 110;
				this.parameters();
				}
			}

			this.state = 113;
			this.match(XtkParser.PAR_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public addingExpression(): AddingExpressionContext {
		let localctx: AddingExpressionContext = new AddingExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, XtkParser.RULE_addingExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 115;
			this.multiplyingExpression();
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & 208897) !== 0)) {
				{
				{
				this.state = 116;
				this.addingOperator();
				this.state = 117;
				this.multiplyingExpression();
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiplyingExpression(): MultiplyingExpressionContext {
		let localctx: MultiplyingExpressionContext = new MultiplyingExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, XtkParser.RULE_multiplyingExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 124;
			this.computableAtom();
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 19) !== 0)) {
				{
				{
				this.state = 125;
				this.multiplyOperator();
				this.state = 126;
				this.computableAtom();
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public addingOperator(): AddingOperatorContext {
		let localctx: AddingOperatorContext = new AddingOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, XtkParser.RULE_addingOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 133;
			_la = this._input.LA(1);
			if(!(((((_la - 22)) & ~0x1F) === 0 && ((1 << (_la - 22)) & 208897) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, XtkParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 135;
			_la = this._input.LA(1);
			if(!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & 255) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiplyOperator(): MultiplyOperatorContext {
		let localctx: MultiplyOperatorContext = new MultiplyOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, XtkParser.RULE_multiplyOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 137;
			_la = this._input.LA(1);
			if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 19) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let localctx: RelationalExpressionContext = new RelationalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, XtkParser.RULE_relationalExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 139;
			this.addingExpression();
			this.state = 140;
			this.comparisonOperator();
			this.state = 141;
			this.addingExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let localctx: UnaryOperatorContext = new UnaryOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, XtkParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 143;
			_la = this._input.LA(1);
			if(!(_la===12 || _la===13)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, XtkParser.RULE_unaryExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 145;
			this.addingExpression();
			this.state = 146;
			this.unaryOperator();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public likeOperator(): LikeOperatorContext {
		let localctx: LikeOperatorContext = new LikeOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, XtkParser.RULE_likeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 148;
			_la = this._input.LA(1);
			if(!(_la===20 || _la===21)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public likeExpression(): LikeExpressionContext {
		let localctx: LikeExpressionContext = new LikeExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, XtkParser.RULE_likeExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 150;
			this.addingExpression();
			this.state = 151;
			this.likeOperator();
			this.state = 152;
			this.addingExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public includedInExpression(): IncludedInExpressionContext {
		let localctx: IncludedInExpressionContext = new IncludedInExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, XtkParser.RULE_includedInExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 154;
			this.addingExpression();
			this.state = 155;
			_la = this._input.LA(1);
			if(!(_la===10 || _la===15)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 156;
			this.match(XtkParser.PAR_OPEN);
			this.state = 157;
			this.list();
			this.state = 158;
			this.match(XtkParser.PAR_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public xpath(): XpathContext {
		let localctx: XpathContext = new XpathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, XtkParser.RULE_xpath);
		let _la: number;
		try {
			this.state = 175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 23:
			case 24:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 160;
				_la = this._input.LA(1);
				if(!(_la===23 || _la===24)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===46) {
					{
					this.state = 161;
					this.match(XtkParser.BRAC_OPEN);
					this.state = 162;
					this.match(XtkParser.X_INT);
					this.state = 163;
					this.match(XtkParser.X_BRAC_CLOSE);
					}
				}

				}
				break;
			case 46:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 166;
				this.match(XtkParser.BRAC_OPEN);
				this.state = 170;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 167;
					this.xpath_schema();
					this.state = 168;
					this.match(XtkParser.X_COLON);
					}
					break;
				}
				this.state = 172;
				this.xpath_locationPath();
				this.state = 173;
				this.match(XtkParser.X_BRAC_CLOSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public xpath_schema(): Xpath_schemaContext {
		let localctx: Xpath_schemaContext = new Xpath_schemaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, XtkParser.RULE_xpath_schema);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 177;
			this.match(XtkParser.X_NCNAME);
			this.state = 178;
			this.match(XtkParser.X_COLON);
			this.state = 179;
			this.match(XtkParser.X_NCNAME);
			this.state = 182;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 180;
				this.match(XtkParser.X_COLON);
				this.state = 181;
				this.match(XtkParser.X_INT);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public xpath_locationPath(): Xpath_locationPathContext {
		let localctx: Xpath_locationPathContext = new Xpath_locationPathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, XtkParser.RULE_xpath_locationPath);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 184;
				this.match(XtkParser.X_SEP);
				}
			}

			this.state = 187;
			this.xpath_step();
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===52) {
				{
				{
				this.state = 188;
				this.match(XtkParser.X_SEP);
				this.state = 189;
				this.xpath_step();
				}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49 || _la===51) {
				{
				this.state = 195;
				this.xpath_qname();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public xpath_step(): Xpath_stepContext {
		let localctx: Xpath_stepContext = new Xpath_stepContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, XtkParser.RULE_xpath_step);
		let _la: number;
		try {
			this.state = 210;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 49:
			case 51:
			case 56:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===56) {
					{
					this.state = 198;
					this.match(XtkParser.X_ATTR);
					}
				}

				this.state = 201;
				this.xpath_qname();
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===47) {
					{
					{
					this.state = 202;
					this.xpath_predicate();
					}
					}
					this.state = 207;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 208;
				this.match(XtkParser.X_CURRENT);
				}
				break;
			case 54:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 209;
				this.match(XtkParser.X_PARENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public xpath_qname(): Xpath_qnameContext {
		let localctx: Xpath_qnameContext = new Xpath_qnameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, XtkParser.RULE_xpath_qname);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 216;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 212;
					this.match(XtkParser.X_NCNAME);
					this.state = 213;
					this.match(XtkParser.X_COLON);
					}
					}
				}
				this.state = 218;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 219;
			_la = this._input.LA(1);
			if(!(_la===49 || _la===51)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public xpath_predicate(): Xpath_predicateContext {
		let localctx: Xpath_predicateContext = new Xpath_predicateContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, XtkParser.RULE_xpath_predicate);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 221;
			this.match(XtkParser.X_BRAC_OPEN);
			this.state = 222;
			this.xpath_expr();
			this.state = 223;
			this.match(XtkParser.X_BRAC_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public xpath_expr(): Xpath_exprContext {
		let localctx: Xpath_exprContext = new Xpath_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, XtkParser.RULE_xpath_expr);
		try {
			this.state = 230;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 225;
				this.match(XtkParser.X_INT);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 226;
				this.xpath_locationPath();
				this.state = 227;
				this.match(XtkParser.X_EQ);
				this.state = 228;
				this.match(XtkParser.X_STRING);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public list(): ListContext {
		let localctx: ListContext = new ListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, XtkParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 232;
			this.expression();
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===42) {
				{
				{
				this.state = 233;
				this.match(XtkParser.COMMA);
				this.state = 234;
				this.expression();
				}
				}
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let localctx: ParametersContext = new ParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, XtkParser.RULE_parameters);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 245;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 240;
					this.expression();
					this.state = 241;
					this.match(XtkParser.COMMA);
					}
					}
				}
				this.state = 247;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 248;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variablePath(): VariablePathContext {
		let localctx: VariablePathContext = new VariablePathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, XtkParser.RULE_variablePath);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 254;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 250;
					this.match(XtkParser.IDENTIFIER);
					this.state = 251;
					this.match(XtkParser.DIV);
					}
					}
				}
				this.state = 256;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 257;
			_la = this._input.LA(1);
			if(!(_la===23 || _la===24)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableIdentifier(): VariableIdentifierContext {
		let localctx: VariableIdentifierContext = new VariableIdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, XtkParser.RULE_variableIdentifier);
		let _la: number;
		try {
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 259;
				this.match(XtkParser.IDENTIFIER);
				this.state = 260;
				_la = this._input.LA(1);
				if(!(_la===43 || _la===44)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 261;
				this.match(XtkParser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 262;
				this.variablePath();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let localctx: VariableContext = new VariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, XtkParser.RULE_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 265;
			this.match(XtkParser.START_VARIABLE);
			this.state = 266;
			this.match(XtkParser.PAR_OPEN);
			this.state = 267;
			this.variableIdentifier();
			this.state = 268;
			this.match(XtkParser.PAR_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public castVariable(): CastVariableContext {
		let localctx: CastVariableContext = new CastVariableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, XtkParser.RULE_castVariable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 270;
			this.match(XtkParser.START_VARIABLE);
			this.state = 271;
			this.match(XtkParser.IDENTIFIER);
			this.state = 272;
			this.match(XtkParser.PAR_OPEN);
			this.state = 273;
			this.variableIdentifier();
			this.state = 274;
			this.match(XtkParser.PAR_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, XtkParser.RULE_literal);
		try {
			this.state = 287;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 276;
				this.match(XtkParser.STRING);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 277;
				this.match(XtkParser.INT);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 278;
				this.match(XtkParser.MINUS);
				this.state = 279;
				this.match(XtkParser.INT);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 280;
				this.match(XtkParser.DOUBLE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 281;
				this.match(XtkParser.MINUS);
				this.state = 282;
				this.match(XtkParser.DOUBLE);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 283;
				this.match(XtkParser.BOOLEAN);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 284;
				this.match(XtkParser.DATE);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 285;
				this.match(XtkParser.TIME);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 286;
				this.match(XtkParser.DATETIME);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public computableAtom(): ComputableAtomContext {
		let localctx: ComputableAtomContext = new ComputableAtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, XtkParser.RULE_computableAtom);
		try {
			this.state = 298;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 289;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 290;
				this.functionCall();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 291;
				this.xpath();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 292;
				this.variable();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 293;
				this.castVariable();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 294;
				this.match(XtkParser.PAR_OPEN);
				this.state = 295;
				this.addingExpression();
				this.state = 296;
				this.match(XtkParser.PAR_CLOSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,57,301,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,1,0,
	1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,75,8,1,1,2,1,2,1,2,5,2,80,8,
	2,10,2,12,2,83,9,2,1,3,1,3,1,3,1,3,1,3,3,3,90,8,3,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,3,3,102,8,3,5,3,104,8,3,10,3,12,3,107,9,3,1,4,1,4,1,4,
	3,4,112,8,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,120,8,5,10,5,12,5,123,9,5,1,6,1,
	6,1,6,1,6,5,6,129,8,6,10,6,12,6,132,9,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,
	10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,15,
	1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,3,16,165,8,16,1,16,1,16,1,
	16,1,16,3,16,171,8,16,1,16,1,16,1,16,3,16,176,8,16,1,17,1,17,1,17,1,17,
	1,17,3,17,183,8,17,1,18,3,18,186,8,18,1,18,1,18,1,18,5,18,191,8,18,10,18,
	12,18,194,9,18,1,18,3,18,197,8,18,1,19,3,19,200,8,19,1,19,1,19,5,19,204,
	8,19,10,19,12,19,207,9,19,1,19,1,19,3,19,211,8,19,1,20,1,20,5,20,215,8,
	20,10,20,12,20,218,9,20,1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,
	22,1,22,3,22,231,8,22,1,23,1,23,1,23,5,23,236,8,23,10,23,12,23,239,9,23,
	1,24,1,24,1,24,5,24,244,8,24,10,24,12,24,247,9,24,1,24,1,24,1,25,1,25,5,
	25,253,8,25,10,25,12,25,256,9,25,1,25,1,25,1,26,1,26,1,26,1,26,3,26,264,
	8,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,
	29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,288,8,29,1,30,1,30,1,30,
	1,30,1,30,1,30,1,30,1,30,1,30,3,30,299,8,30,1,30,0,0,31,0,2,4,6,8,10,12,
	14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
	0,10,1,0,18,19,3,0,22,22,34,35,38,39,1,0,26,33,2,0,36,37,40,40,1,0,12,13,
	1,0,20,21,2,0,10,10,15,15,1,0,23,24,2,0,49,49,51,51,1,0,43,44,317,0,62,
	1,0,0,0,2,74,1,0,0,0,4,76,1,0,0,0,6,89,1,0,0,0,8,108,1,0,0,0,10,115,1,0,
	0,0,12,124,1,0,0,0,14,133,1,0,0,0,16,135,1,0,0,0,18,137,1,0,0,0,20,139,
	1,0,0,0,22,143,1,0,0,0,24,145,1,0,0,0,26,148,1,0,0,0,28,150,1,0,0,0,30,
	154,1,0,0,0,32,175,1,0,0,0,34,177,1,0,0,0,36,185,1,0,0,0,38,210,1,0,0,0,
	40,216,1,0,0,0,42,221,1,0,0,0,44,230,1,0,0,0,46,232,1,0,0,0,48,245,1,0,
	0,0,50,254,1,0,0,0,52,263,1,0,0,0,54,265,1,0,0,0,56,270,1,0,0,0,58,287,
	1,0,0,0,60,298,1,0,0,0,62,63,3,2,1,0,63,64,5,0,0,1,64,1,1,0,0,0,65,75,3,
	60,30,0,66,67,5,41,0,0,67,75,3,2,1,0,68,75,3,4,2,0,69,75,3,10,5,0,70,71,
	5,4,0,0,71,72,3,2,1,0,72,73,5,5,0,0,73,75,1,0,0,0,74,65,1,0,0,0,74,66,1,
	0,0,0,74,68,1,0,0,0,74,69,1,0,0,0,74,70,1,0,0,0,75,3,1,0,0,0,76,81,3,6,
	3,0,77,78,5,17,0,0,78,80,3,6,3,0,79,77,1,0,0,0,80,83,1,0,0,0,81,79,1,0,
	0,0,81,82,1,0,0,0,82,5,1,0,0,0,83,81,1,0,0,0,84,90,3,60,30,0,85,90,3,20,
	10,0,86,90,3,24,12,0,87,90,3,28,14,0,88,90,3,30,15,0,89,84,1,0,0,0,89,85,
	1,0,0,0,89,86,1,0,0,0,89,87,1,0,0,0,89,88,1,0,0,0,90,105,1,0,0,0,91,101,
	7,0,0,0,92,102,3,60,30,0,93,102,3,20,10,0,94,102,3,24,12,0,95,102,3,28,
	14,0,96,102,3,30,15,0,97,98,5,4,0,0,98,99,3,4,2,0,99,100,5,5,0,0,100,102,
	1,0,0,0,101,92,1,0,0,0,101,93,1,0,0,0,101,94,1,0,0,0,101,95,1,0,0,0,101,
	96,1,0,0,0,101,97,1,0,0,0,102,104,1,0,0,0,103,91,1,0,0,0,104,107,1,0,0,
	0,105,103,1,0,0,0,105,106,1,0,0,0,106,7,1,0,0,0,107,105,1,0,0,0,108,109,
	5,24,0,0,109,111,5,4,0,0,110,112,3,48,24,0,111,110,1,0,0,0,111,112,1,0,
	0,0,112,113,1,0,0,0,113,114,5,5,0,0,114,9,1,0,0,0,115,121,3,12,6,0,116,
	117,3,14,7,0,117,118,3,12,6,0,118,120,1,0,0,0,119,116,1,0,0,0,120,123,1,
	0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,11,1,0,0,0,123,121,1,0,0,0,124,
	130,3,60,30,0,125,126,3,18,9,0,126,127,3,60,30,0,127,129,1,0,0,0,128,125,
	1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,13,1,0,0,0,
	132,130,1,0,0,0,133,134,7,1,0,0,134,15,1,0,0,0,135,136,7,2,0,0,136,17,1,
	0,0,0,137,138,7,3,0,0,138,19,1,0,0,0,139,140,3,10,5,0,140,141,3,16,8,0,
	141,142,3,10,5,0,142,21,1,0,0,0,143,144,7,4,0,0,144,23,1,0,0,0,145,146,
	3,10,5,0,146,147,3,22,11,0,147,25,1,0,0,0,148,149,7,5,0,0,149,27,1,0,0,
	0,150,151,3,10,5,0,151,152,3,26,13,0,152,153,3,10,5,0,153,29,1,0,0,0,154,
	155,3,10,5,0,155,156,7,6,0,0,156,157,5,4,0,0,157,158,3,46,23,0,158,159,
	5,5,0,0,159,31,1,0,0,0,160,164,7,7,0,0,161,162,5,46,0,0,162,163,5,49,0,
	0,163,165,5,48,0,0,164,161,1,0,0,0,164,165,1,0,0,0,165,176,1,0,0,0,166,
	170,5,46,0,0,167,168,3,34,17,0,168,169,5,53,0,0,169,171,1,0,0,0,170,167,
	1,0,0,0,170,171,1,0,0,0,171,172,1,0,0,0,172,173,3,36,18,0,173,174,5,48,
	0,0,174,176,1,0,0,0,175,160,1,0,0,0,175,166,1,0,0,0,176,33,1,0,0,0,177,
	178,5,51,0,0,178,179,5,53,0,0,179,182,5,51,0,0,180,181,5,53,0,0,181,183,
	5,49,0,0,182,180,1,0,0,0,182,183,1,0,0,0,183,35,1,0,0,0,184,186,5,52,0,
	0,185,184,1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,192,3,38,19,0,188,
	189,5,52,0,0,189,191,3,38,19,0,190,188,1,0,0,0,191,194,1,0,0,0,192,190,
	1,0,0,0,192,193,1,0,0,0,193,196,1,0,0,0,194,192,1,0,0,0,195,197,3,40,20,
	0,196,195,1,0,0,0,196,197,1,0,0,0,197,37,1,0,0,0,198,200,5,56,0,0,199,198,
	1,0,0,0,199,200,1,0,0,0,200,201,1,0,0,0,201,205,3,40,20,0,202,204,3,42,
	21,0,203,202,1,0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,0,206,
	211,1,0,0,0,207,205,1,0,0,0,208,211,5,55,0,0,209,211,5,54,0,0,210,199,1,
	0,0,0,210,208,1,0,0,0,210,209,1,0,0,0,211,39,1,0,0,0,212,213,5,51,0,0,213,
	215,5,53,0,0,214,212,1,0,0,0,215,218,1,0,0,0,216,214,1,0,0,0,216,217,1,
	0,0,0,217,219,1,0,0,0,218,216,1,0,0,0,219,220,7,8,0,0,220,41,1,0,0,0,221,
	222,5,47,0,0,222,223,3,44,22,0,223,224,5,48,0,0,224,43,1,0,0,0,225,231,
	5,49,0,0,226,227,3,36,18,0,227,228,5,57,0,0,228,229,5,50,0,0,229,231,1,
	0,0,0,230,225,1,0,0,0,230,226,1,0,0,0,231,45,1,0,0,0,232,237,3,2,1,0,233,
	234,5,42,0,0,234,236,3,2,1,0,235,233,1,0,0,0,236,239,1,0,0,0,237,235,1,
	0,0,0,237,238,1,0,0,0,238,47,1,0,0,0,239,237,1,0,0,0,240,241,3,2,1,0,241,
	242,5,42,0,0,242,244,1,0,0,0,243,240,1,0,0,0,244,247,1,0,0,0,245,243,1,
	0,0,0,245,246,1,0,0,0,246,248,1,0,0,0,247,245,1,0,0,0,248,249,3,2,1,0,249,
	49,1,0,0,0,250,251,5,24,0,0,251,253,5,37,0,0,252,250,1,0,0,0,253,256,1,
	0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,257,1,0,0,0,256,254,1,0,0,0,257,
	258,7,7,0,0,258,51,1,0,0,0,259,260,5,24,0,0,260,261,7,9,0,0,261,264,5,24,
	0,0,262,264,3,50,25,0,263,259,1,0,0,0,263,262,1,0,0,0,264,53,1,0,0,0,265,
	266,5,25,0,0,266,267,5,4,0,0,267,268,3,52,26,0,268,269,5,5,0,0,269,55,1,
	0,0,0,270,271,5,25,0,0,271,272,5,24,0,0,272,273,5,4,0,0,273,274,3,52,26,
	0,274,275,5,5,0,0,275,57,1,0,0,0,276,288,5,1,0,0,277,288,5,2,0,0,278,279,
	5,35,0,0,279,288,5,2,0,0,280,288,5,6,0,0,281,282,5,35,0,0,282,288,5,6,0,
	0,283,288,5,3,0,0,284,288,5,7,0,0,285,288,5,8,0,0,286,288,5,9,0,0,287,276,
	1,0,0,0,287,277,1,0,0,0,287,278,1,0,0,0,287,280,1,0,0,0,287,281,1,0,0,0,
	287,283,1,0,0,0,287,284,1,0,0,0,287,285,1,0,0,0,287,286,1,0,0,0,288,59,
	1,0,0,0,289,299,3,58,29,0,290,299,3,8,4,0,291,299,3,32,16,0,292,299,3,54,
	27,0,293,299,3,56,28,0,294,295,5,4,0,0,295,296,3,10,5,0,296,297,5,5,0,0,
	297,299,1,0,0,0,298,289,1,0,0,0,298,290,1,0,0,0,298,291,1,0,0,0,298,292,
	1,0,0,0,298,293,1,0,0,0,298,294,1,0,0,0,299,61,1,0,0,0,26,74,81,89,101,
	105,111,121,130,164,170,175,182,185,192,196,199,205,210,216,230,237,245,
	254,263,287,298];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XtkParser.__ATN) {
			XtkParser.__ATN = new ATNDeserializer().deserialize(XtkParser._serializedATN);
		}

		return XtkParser.__ATN;
	}


	static DecisionsToDFA = XtkParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class UnitContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(XtkParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_unit;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterUnit) {
	 		listener.enterUnit(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitUnit) {
	 		listener.exitUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitUnit) {
			return visitor.visitUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public computableAtom(): ComputableAtomContext {
		return this.getTypedRuleContext(ComputableAtomContext, 0) as ComputableAtomContext;
	}
	public EXCLAMATION(): TerminalNode {
		return this.getToken(XtkParser.EXCLAMATION, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public orExpression(): OrExpressionContext {
		return this.getTypedRuleContext(OrExpressionContext, 0) as OrExpressionContext;
	}
	public addingExpression(): AddingExpressionContext {
		return this.getTypedRuleContext(AddingExpressionContext, 0) as AddingExpressionContext;
	}
	public PAR_OPEN(): TerminalNode {
		return this.getToken(XtkParser.PAR_OPEN, 0);
	}
	public PAR_CLOSE(): TerminalNode {
		return this.getToken(XtkParser.PAR_CLOSE, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_expression;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrExpressionContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public andExpression_list(): AndExpressionContext[] {
		return this.getTypedRuleContexts(AndExpressionContext) as AndExpressionContext[];
	}
	public andExpression(i: number): AndExpressionContext {
		return this.getTypedRuleContext(AndExpressionContext, i) as AndExpressionContext;
	}
	public OR_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.OR);
	}
	public OR(i: number): TerminalNode {
		return this.getToken(XtkParser.OR, i);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_orExpression;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterOrExpression) {
	 		listener.enterOrExpression(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitOrExpression) {
	 		listener.exitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitOrExpression) {
			return visitor.visitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public computableAtom_list(): ComputableAtomContext[] {
		return this.getTypedRuleContexts(ComputableAtomContext) as ComputableAtomContext[];
	}
	public computableAtom(i: number): ComputableAtomContext {
		return this.getTypedRuleContext(ComputableAtomContext, i) as ComputableAtomContext;
	}
	public relationalExpression_list(): RelationalExpressionContext[] {
		return this.getTypedRuleContexts(RelationalExpressionContext) as RelationalExpressionContext[];
	}
	public relationalExpression(i: number): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, i) as RelationalExpressionContext;
	}
	public unaryExpression_list(): UnaryExpressionContext[] {
		return this.getTypedRuleContexts(UnaryExpressionContext) as UnaryExpressionContext[];
	}
	public unaryExpression(i: number): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, i) as UnaryExpressionContext;
	}
	public likeExpression_list(): LikeExpressionContext[] {
		return this.getTypedRuleContexts(LikeExpressionContext) as LikeExpressionContext[];
	}
	public likeExpression(i: number): LikeExpressionContext {
		return this.getTypedRuleContext(LikeExpressionContext, i) as LikeExpressionContext;
	}
	public includedInExpression_list(): IncludedInExpressionContext[] {
		return this.getTypedRuleContexts(IncludedInExpressionContext) as IncludedInExpressionContext[];
	}
	public includedInExpression(i: number): IncludedInExpressionContext {
		return this.getTypedRuleContext(IncludedInExpressionContext, i) as IncludedInExpressionContext;
	}
	public AND_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.AND);
	}
	public AND(i: number): TerminalNode {
		return this.getToken(XtkParser.AND, i);
	}
	public AND_NOT_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.AND_NOT);
	}
	public AND_NOT(i: number): TerminalNode {
		return this.getToken(XtkParser.AND_NOT, i);
	}
	public PAR_OPEN_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.PAR_OPEN);
	}
	public PAR_OPEN(i: number): TerminalNode {
		return this.getToken(XtkParser.PAR_OPEN, i);
	}
	public orExpression_list(): OrExpressionContext[] {
		return this.getTypedRuleContexts(OrExpressionContext) as OrExpressionContext[];
	}
	public orExpression(i: number): OrExpressionContext {
		return this.getTypedRuleContext(OrExpressionContext, i) as OrExpressionContext;
	}
	public PAR_CLOSE_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.PAR_CLOSE);
	}
	public PAR_CLOSE(i: number): TerminalNode {
		return this.getToken(XtkParser.PAR_CLOSE, i);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_andExpression;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterAndExpression) {
	 		listener.enterAndExpression(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitAndExpression) {
	 		listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(XtkParser.IDENTIFIER, 0);
	}
	public PAR_OPEN(): TerminalNode {
		return this.getToken(XtkParser.PAR_OPEN, 0);
	}
	public PAR_CLOSE(): TerminalNode {
		return this.getToken(XtkParser.PAR_CLOSE, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_functionCall;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddingExpressionContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiplyingExpression_list(): MultiplyingExpressionContext[] {
		return this.getTypedRuleContexts(MultiplyingExpressionContext) as MultiplyingExpressionContext[];
	}
	public multiplyingExpression(i: number): MultiplyingExpressionContext {
		return this.getTypedRuleContext(MultiplyingExpressionContext, i) as MultiplyingExpressionContext;
	}
	public addingOperator_list(): AddingOperatorContext[] {
		return this.getTypedRuleContexts(AddingOperatorContext) as AddingOperatorContext[];
	}
	public addingOperator(i: number): AddingOperatorContext {
		return this.getTypedRuleContext(AddingOperatorContext, i) as AddingOperatorContext;
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_addingExpression;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterAddingExpression) {
	 		listener.enterAddingExpression(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitAddingExpression) {
	 		listener.exitAddingExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitAddingExpression) {
			return visitor.visitAddingExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplyingExpressionContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public computableAtom_list(): ComputableAtomContext[] {
		return this.getTypedRuleContexts(ComputableAtomContext) as ComputableAtomContext[];
	}
	public computableAtom(i: number): ComputableAtomContext {
		return this.getTypedRuleContext(ComputableAtomContext, i) as ComputableAtomContext;
	}
	public multiplyOperator_list(): MultiplyOperatorContext[] {
		return this.getTypedRuleContexts(MultiplyOperatorContext) as MultiplyOperatorContext[];
	}
	public multiplyOperator(i: number): MultiplyOperatorContext {
		return this.getTypedRuleContext(MultiplyOperatorContext, i) as MultiplyOperatorContext;
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_multiplyingExpression;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterMultiplyingExpression) {
	 		listener.enterMultiplyingExpression(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitMultiplyingExpression) {
	 		listener.exitMultiplyingExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitMultiplyingExpression) {
			return visitor.visitMultiplyingExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddingOperatorContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PLUS(): TerminalNode {
		return this.getToken(XtkParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(XtkParser.MINUS, 0);
	}
	public AMP(): TerminalNode {
		return this.getToken(XtkParser.AMP, 0);
	}
	public PIPE(): TerminalNode {
		return this.getToken(XtkParser.PIPE, 0);
	}
	public CONCAT(): TerminalNode {
		return this.getToken(XtkParser.CONCAT, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_addingOperator;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterAddingOperator) {
	 		listener.enterAddingOperator(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitAddingOperator) {
	 		listener.exitAddingOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitAddingOperator) {
			return visitor.visitAddingOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(XtkParser.LT, 0);
	}
	public LE(): TerminalNode {
		return this.getToken(XtkParser.LE, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(XtkParser.GT, 0);
	}
	public GE(): TerminalNode {
		return this.getToken(XtkParser.GE, 0);
	}
	public EQ(): TerminalNode {
		return this.getToken(XtkParser.EQ, 0);
	}
	public EQ_2(): TerminalNode {
		return this.getToken(XtkParser.EQ_2, 0);
	}
	public NEQ(): TerminalNode {
		return this.getToken(XtkParser.NEQ, 0);
	}
	public NEQ_2(): TerminalNode {
		return this.getToken(XtkParser.NEQ_2, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_comparisonOperator;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterComparisonOperator) {
	 		listener.enterComparisonOperator(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitComparisonOperator) {
	 		listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplyOperatorContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TIMES(): TerminalNode {
		return this.getToken(XtkParser.TIMES, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(XtkParser.DIV, 0);
	}
	public PERCENT(): TerminalNode {
		return this.getToken(XtkParser.PERCENT, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_multiplyOperator;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterMultiplyOperator) {
	 		listener.enterMultiplyOperator(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitMultiplyOperator) {
	 		listener.exitMultiplyOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitMultiplyOperator) {
			return visitor.visitMultiplyOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public addingExpression_list(): AddingExpressionContext[] {
		return this.getTypedRuleContexts(AddingExpressionContext) as AddingExpressionContext[];
	}
	public addingExpression(i: number): AddingExpressionContext {
		return this.getTypedRuleContext(AddingExpressionContext, i) as AddingExpressionContext;
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getTypedRuleContext(ComparisonOperatorContext, 0) as ComparisonOperatorContext;
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_relationalExpression;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterRelationalExpression) {
	 		listener.enterRelationalExpression(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitRelationalExpression) {
	 		listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IS_NULL(): TerminalNode {
		return this.getToken(XtkParser.IS_NULL, 0);
	}
	public IS_NOT_NULL(): TerminalNode {
		return this.getToken(XtkParser.IS_NOT_NULL, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_unaryOperator;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterUnaryOperator) {
	 		listener.enterUnaryOperator(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitUnaryOperator) {
	 		listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public addingExpression(): AddingExpressionContext {
		return this.getTypedRuleContext(AddingExpressionContext, 0) as AddingExpressionContext;
	}
	public unaryOperator(): UnaryOperatorContext {
		return this.getTypedRuleContext(UnaryOperatorContext, 0) as UnaryOperatorContext;
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_unaryExpression;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterUnaryExpression) {
	 		listener.enterUnaryExpression(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitUnaryExpression) {
	 		listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeOperatorContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LIKE(): TerminalNode {
		return this.getToken(XtkParser.LIKE, 0);
	}
	public NOT_LIKE(): TerminalNode {
		return this.getToken(XtkParser.NOT_LIKE, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_likeOperator;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterLikeOperator) {
	 		listener.enterLikeOperator(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitLikeOperator) {
	 		listener.exitLikeOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitLikeOperator) {
			return visitor.visitLikeOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LikeExpressionContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public addingExpression_list(): AddingExpressionContext[] {
		return this.getTypedRuleContexts(AddingExpressionContext) as AddingExpressionContext[];
	}
	public addingExpression(i: number): AddingExpressionContext {
		return this.getTypedRuleContext(AddingExpressionContext, i) as AddingExpressionContext;
	}
	public likeOperator(): LikeOperatorContext {
		return this.getTypedRuleContext(LikeOperatorContext, 0) as LikeOperatorContext;
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_likeExpression;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterLikeExpression) {
	 		listener.enterLikeExpression(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitLikeExpression) {
	 		listener.exitLikeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitLikeExpression) {
			return visitor.visitLikeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludedInExpressionContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public addingExpression(): AddingExpressionContext {
		return this.getTypedRuleContext(AddingExpressionContext, 0) as AddingExpressionContext;
	}
	public PAR_OPEN(): TerminalNode {
		return this.getToken(XtkParser.PAR_OPEN, 0);
	}
	public list(): ListContext {
		return this.getTypedRuleContext(ListContext, 0) as ListContext;
	}
	public PAR_CLOSE(): TerminalNode {
		return this.getToken(XtkParser.PAR_CLOSE, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(XtkParser.IN, 0);
	}
	public NOT_IN(): TerminalNode {
		return this.getToken(XtkParser.NOT_IN, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_includedInExpression;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterIncludedInExpression) {
	 		listener.enterIncludedInExpression(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitIncludedInExpression) {
	 		listener.exitIncludedInExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitIncludedInExpression) {
			return visitor.visitIncludedInExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class XpathContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTRIBUTE(): TerminalNode {
		return this.getToken(XtkParser.ATTRIBUTE, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(XtkParser.IDENTIFIER, 0);
	}
	public BRAC_OPEN(): TerminalNode {
		return this.getToken(XtkParser.BRAC_OPEN, 0);
	}
	public X_INT(): TerminalNode {
		return this.getToken(XtkParser.X_INT, 0);
	}
	public X_BRAC_CLOSE(): TerminalNode {
		return this.getToken(XtkParser.X_BRAC_CLOSE, 0);
	}
	public xpath_locationPath(): Xpath_locationPathContext {
		return this.getTypedRuleContext(Xpath_locationPathContext, 0) as Xpath_locationPathContext;
	}
	public xpath_schema(): Xpath_schemaContext {
		return this.getTypedRuleContext(Xpath_schemaContext, 0) as Xpath_schemaContext;
	}
	public X_COLON(): TerminalNode {
		return this.getToken(XtkParser.X_COLON, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_xpath;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterXpath) {
	 		listener.enterXpath(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitXpath) {
	 		listener.exitXpath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitXpath) {
			return visitor.visitXpath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xpath_schemaContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public X_NCNAME_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.X_NCNAME);
	}
	public X_NCNAME(i: number): TerminalNode {
		return this.getToken(XtkParser.X_NCNAME, i);
	}
	public X_COLON_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.X_COLON);
	}
	public X_COLON(i: number): TerminalNode {
		return this.getToken(XtkParser.X_COLON, i);
	}
	public X_INT(): TerminalNode {
		return this.getToken(XtkParser.X_INT, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_xpath_schema;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterXpath_schema) {
	 		listener.enterXpath_schema(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitXpath_schema) {
	 		listener.exitXpath_schema(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitXpath_schema) {
			return visitor.visitXpath_schema(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xpath_locationPathContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public xpath_step_list(): Xpath_stepContext[] {
		return this.getTypedRuleContexts(Xpath_stepContext) as Xpath_stepContext[];
	}
	public xpath_step(i: number): Xpath_stepContext {
		return this.getTypedRuleContext(Xpath_stepContext, i) as Xpath_stepContext;
	}
	public X_SEP_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.X_SEP);
	}
	public X_SEP(i: number): TerminalNode {
		return this.getToken(XtkParser.X_SEP, i);
	}
	public xpath_qname(): Xpath_qnameContext {
		return this.getTypedRuleContext(Xpath_qnameContext, 0) as Xpath_qnameContext;
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_xpath_locationPath;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterXpath_locationPath) {
	 		listener.enterXpath_locationPath(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitXpath_locationPath) {
	 		listener.exitXpath_locationPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitXpath_locationPath) {
			return visitor.visitXpath_locationPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xpath_stepContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public xpath_qname(): Xpath_qnameContext {
		return this.getTypedRuleContext(Xpath_qnameContext, 0) as Xpath_qnameContext;
	}
	public X_ATTR(): TerminalNode {
		return this.getToken(XtkParser.X_ATTR, 0);
	}
	public xpath_predicate_list(): Xpath_predicateContext[] {
		return this.getTypedRuleContexts(Xpath_predicateContext) as Xpath_predicateContext[];
	}
	public xpath_predicate(i: number): Xpath_predicateContext {
		return this.getTypedRuleContext(Xpath_predicateContext, i) as Xpath_predicateContext;
	}
	public X_CURRENT(): TerminalNode {
		return this.getToken(XtkParser.X_CURRENT, 0);
	}
	public X_PARENT(): TerminalNode {
		return this.getToken(XtkParser.X_PARENT, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_xpath_step;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterXpath_step) {
	 		listener.enterXpath_step(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitXpath_step) {
	 		listener.exitXpath_step(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitXpath_step) {
			return visitor.visitXpath_step(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xpath_qnameContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public X_NCNAME_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.X_NCNAME);
	}
	public X_NCNAME(i: number): TerminalNode {
		return this.getToken(XtkParser.X_NCNAME, i);
	}
	public X_INT(): TerminalNode {
		return this.getToken(XtkParser.X_INT, 0);
	}
	public X_COLON_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.X_COLON);
	}
	public X_COLON(i: number): TerminalNode {
		return this.getToken(XtkParser.X_COLON, i);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_xpath_qname;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterXpath_qname) {
	 		listener.enterXpath_qname(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitXpath_qname) {
	 		listener.exitXpath_qname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitXpath_qname) {
			return visitor.visitXpath_qname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xpath_predicateContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public X_BRAC_OPEN(): TerminalNode {
		return this.getToken(XtkParser.X_BRAC_OPEN, 0);
	}
	public xpath_expr(): Xpath_exprContext {
		return this.getTypedRuleContext(Xpath_exprContext, 0) as Xpath_exprContext;
	}
	public X_BRAC_CLOSE(): TerminalNode {
		return this.getToken(XtkParser.X_BRAC_CLOSE, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_xpath_predicate;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterXpath_predicate) {
	 		listener.enterXpath_predicate(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitXpath_predicate) {
	 		listener.exitXpath_predicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitXpath_predicate) {
			return visitor.visitXpath_predicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Xpath_exprContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public X_INT(): TerminalNode {
		return this.getToken(XtkParser.X_INT, 0);
	}
	public xpath_locationPath(): Xpath_locationPathContext {
		return this.getTypedRuleContext(Xpath_locationPathContext, 0) as Xpath_locationPathContext;
	}
	public X_EQ(): TerminalNode {
		return this.getToken(XtkParser.X_EQ, 0);
	}
	public X_STRING(): TerminalNode {
		return this.getToken(XtkParser.X_STRING, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_xpath_expr;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterXpath_expr) {
	 		listener.enterXpath_expr(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitXpath_expr) {
	 		listener.exitXpath_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitXpath_expr) {
			return visitor.visitXpath_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(XtkParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_list;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterList) {
	 		listener.enterList(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitList) {
	 		listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(XtkParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_parameters;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterParameters) {
	 		listener.enterParameters(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitParameters) {
	 		listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariablePathContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTRIBUTE(): TerminalNode {
		return this.getToken(XtkParser.ATTRIBUTE, 0);
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(XtkParser.IDENTIFIER, i);
	}
	public DIV_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.DIV);
	}
	public DIV(i: number): TerminalNode {
		return this.getToken(XtkParser.DIV, i);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_variablePath;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterVariablePath) {
	 		listener.enterVariablePath(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitVariablePath) {
	 		listener.exitVariablePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitVariablePath) {
			return visitor.visitVariablePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableIdentifierContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(XtkParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(XtkParser.IDENTIFIER, i);
	}
	public COLON(): TerminalNode {
		return this.getToken(XtkParser.COLON, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(XtkParser.DOT, 0);
	}
	public variablePath(): VariablePathContext {
		return this.getTypedRuleContext(VariablePathContext, 0) as VariablePathContext;
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_variableIdentifier;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterVariableIdentifier) {
	 		listener.enterVariableIdentifier(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitVariableIdentifier) {
	 		listener.exitVariableIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitVariableIdentifier) {
			return visitor.visitVariableIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public START_VARIABLE(): TerminalNode {
		return this.getToken(XtkParser.START_VARIABLE, 0);
	}
	public PAR_OPEN(): TerminalNode {
		return this.getToken(XtkParser.PAR_OPEN, 0);
	}
	public variableIdentifier(): VariableIdentifierContext {
		return this.getTypedRuleContext(VariableIdentifierContext, 0) as VariableIdentifierContext;
	}
	public PAR_CLOSE(): TerminalNode {
		return this.getToken(XtkParser.PAR_CLOSE, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_variable;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterVariable) {
	 		listener.enterVariable(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitVariable) {
	 		listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastVariableContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public START_VARIABLE(): TerminalNode {
		return this.getToken(XtkParser.START_VARIABLE, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(XtkParser.IDENTIFIER, 0);
	}
	public PAR_OPEN(): TerminalNode {
		return this.getToken(XtkParser.PAR_OPEN, 0);
	}
	public variableIdentifier(): VariableIdentifierContext {
		return this.getTypedRuleContext(VariableIdentifierContext, 0) as VariableIdentifierContext;
	}
	public PAR_CLOSE(): TerminalNode {
		return this.getToken(XtkParser.PAR_CLOSE, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_castVariable;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterCastVariable) {
	 		listener.enterCastVariable(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitCastVariable) {
	 		listener.exitCastVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitCastVariable) {
			return visitor.visitCastVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(XtkParser.STRING, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(XtkParser.INT, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(XtkParser.MINUS, 0);
	}
	public DOUBLE(): TerminalNode {
		return this.getToken(XtkParser.DOUBLE, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(XtkParser.BOOLEAN, 0);
	}
	public DATE(): TerminalNode {
		return this.getToken(XtkParser.DATE, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(XtkParser.TIME, 0);
	}
	public DATETIME(): TerminalNode {
		return this.getToken(XtkParser.DATETIME, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_literal;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComputableAtomContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public xpath(): XpathContext {
		return this.getTypedRuleContext(XpathContext, 0) as XpathContext;
	}
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
	}
	public castVariable(): CastVariableContext {
		return this.getTypedRuleContext(CastVariableContext, 0) as CastVariableContext;
	}
	public PAR_OPEN(): TerminalNode {
		return this.getToken(XtkParser.PAR_OPEN, 0);
	}
	public addingExpression(): AddingExpressionContext {
		return this.getTypedRuleContext(AddingExpressionContext, 0) as AddingExpressionContext;
	}
	public PAR_CLOSE(): TerminalNode {
		return this.getToken(XtkParser.PAR_CLOSE, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_computableAtom;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterComputableAtom) {
	 		listener.enterComputableAtom(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitComputableAtom) {
	 		listener.exitComputableAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitComputableAtom) {
			return visitor.visitComputableAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
