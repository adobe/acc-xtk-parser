// Generated from XtkParser.g4 by ANTLR 4.13.2
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
	public static readonly TRUE = 1;
	public static readonly FALSE = 2;
	public static readonly STRING = 3;
	public static readonly INT = 4;
	public static readonly PAR_OPEN = 5;
	public static readonly PAR_CLOSE = 6;
	public static readonly DOUBLE = 7;
	public static readonly DATE = 8;
	public static readonly TIME = 9;
	public static readonly DATETIME = 10;
	public static readonly NOT_IN = 11;
	public static readonly NOT = 12;
	public static readonly IS_NULL = 13;
	public static readonly IS_NOT_NULL = 14;
	public static readonly IS = 15;
	public static readonly IN = 16;
	public static readonly NULL = 17;
	public static readonly OR = 18;
	public static readonly AND = 19;
	public static readonly AND_NOT = 20;
	public static readonly LIKE = 21;
	public static readonly NOT_LIKE = 22;
	public static readonly CONCAT = 23;
	public static readonly ATTRIBUTE = 24;
	public static readonly IDENTIFIER = 25;
	public static readonly START_VARIABLE = 26;
	public static readonly LT = 27;
	public static readonly GT = 28;
	public static readonly LE = 29;
	public static readonly GE = 30;
	public static readonly EQ = 31;
	public static readonly EQ_2 = 32;
	public static readonly NEQ = 33;
	public static readonly NEQ_2 = 34;
	public static readonly PLUS = 35;
	public static readonly MINUS = 36;
	public static readonly TIMES = 37;
	public static readonly DIV = 38;
	public static readonly AMP = 39;
	public static readonly PIPE = 40;
	public static readonly PERCENT = 41;
	public static readonly EXCLAMATION = 42;
	public static readonly COMMA = 43;
	public static readonly COLON = 44;
	public static readonly DOT = 45;
	public static readonly WS = 46;
	public static readonly BRAC_OPEN = 47;
	public static readonly X_BRAC_OPEN = 48;
	public static readonly X_BRAC_CLOSE = 49;
	public static readonly X_INT = 50;
	public static readonly X_STRING = 51;
	public static readonly X_NCNAME = 52;
	public static readonly X_SEP = 53;
	public static readonly X_COLON = 54;
	public static readonly X_PARENT = 55;
	public static readonly X_CURRENT = 56;
	public static readonly X_ATTR = 57;
	public static readonly X_EQ = 58;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_unit = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_orExpression = 2;
	public static readonly RULE_andExpression = 3;
	public static readonly RULE_singleExpression = 4;
	public static readonly RULE_andOperator = 5;
	public static readonly RULE_functionCall = 6;
	public static readonly RULE_addingExpression = 7;
	public static readonly RULE_multiplyingExpression = 8;
	public static readonly RULE_addingOperator = 9;
	public static readonly RULE_comparisonOperator = 10;
	public static readonly RULE_multiplyOperator = 11;
	public static readonly RULE_relationalExpression = 12;
	public static readonly RULE_unaryOperator = 13;
	public static readonly RULE_unaryExpression = 14;
	public static readonly RULE_likeOperator = 15;
	public static readonly RULE_likeExpression = 16;
	public static readonly RULE_includedInExpression = 17;
	public static readonly RULE_xpath = 18;
	public static readonly RULE_xpath_schema = 19;
	public static readonly RULE_xpath_locationPath = 20;
	public static readonly RULE_xpath_step = 21;
	public static readonly RULE_xpath_qname = 22;
	public static readonly RULE_xpath_predicate = 23;
	public static readonly RULE_xpath_expr = 24;
	public static readonly RULE_list = 25;
	public static readonly RULE_parameters = 26;
	public static readonly RULE_variablePath = 27;
	public static readonly RULE_variableIdentifier = 28;
	public static readonly RULE_variable = 29;
	public static readonly RULE_castVariable = 30;
	public static readonly RULE_literal = 31;
	public static readonly RULE_computableAtom = 32;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, "'('", 
                                                            "')'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'||'", 
                                                            null, null, 
                                                            "'$'", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", null, 
                                                            "'=='", "'!='", 
                                                            "'<>'", "'+'", 
                                                            "'-'", "'*'", 
                                                            null, "'&'", 
                                                            "'|'", "'%'", 
                                                            "'!'", "','", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "']'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'..'", 
                                                            null, "'@'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "TRUE", 
                                                             "FALSE", "STRING", 
                                                             "INT", "PAR_OPEN", 
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
		"unit", "expression", "orExpression", "andExpression", "singleExpression", 
		"andOperator", "functionCall", "addingExpression", "multiplyingExpression", 
		"addingOperator", "comparisonOperator", "multiplyOperator", "relationalExpression", 
		"unaryOperator", "unaryExpression", "likeOperator", "likeExpression", 
		"includedInExpression", "xpath", "xpath_schema", "xpath_locationPath", 
		"xpath_step", "xpath_qname", "xpath_predicate", "xpath_expr", "list", 
		"parameters", "variablePath", "variableIdentifier", "variable", "castVariable", 
		"literal", "computableAtom",
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
			this.state = 66;
			this.expression();
			this.state = 67;
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
			this.state = 78;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 69;
				this.computableAtom();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 70;
				this.orExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 71;
				this.addingExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 72;
				this.match(XtkParser.PAR_OPEN);
				this.state = 73;
				this.expression();
				this.state = 74;
				this.match(XtkParser.PAR_CLOSE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 76;
				this.match(XtkParser.EXCLAMATION);
				this.state = 77;
				this.expression();
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
			this.state = 80;
			this.andExpression();
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 81;
				this.match(XtkParser.OR);
				this.state = 82;
				this.andExpression();
				}
				}
				this.state = 87;
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
			this.state = 88;
			this.singleExpression();
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===19 || _la===20) {
				{
				{
				this.state = 89;
				this.andOperator();
				this.state = 90;
				this.singleExpression();
				}
				}
				this.state = 96;
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
	public singleExpression(): SingleExpressionContext {
		let localctx: SingleExpressionContext = new SingleExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, XtkParser.RULE_singleExpression);
		let _la: number;
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42) {
					{
					this.state = 97;
					this.match(XtkParser.EXCLAMATION);
					}
				}

				this.state = 100;
				this.computableAtom();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 101;
				this.relationalExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 102;
				this.unaryExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 103;
				this.likeExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 104;
				this.includedInExpression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 105;
				this.match(XtkParser.PAR_OPEN);
				this.state = 106;
				this.orExpression();
				this.state = 107;
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
	public andOperator(): AndOperatorContext {
		let localctx: AndOperatorContext = new AndOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, XtkParser.RULE_andOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 111;
			_la = this._input.LA(1);
			if(!(_la===19 || _la===20)) {
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
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, XtkParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 113;
			this.match(XtkParser.IDENTIFIER);
			this.state = 114;
			this.match(XtkParser.PAR_OPEN);
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117573566) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 2113) !== 0)) {
				{
				this.state = 115;
				this.parameters();
				}
			}

			this.state = 118;
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
		this.enterRule(localctx, 14, XtkParser.RULE_addingExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 120;
			this.multiplyingExpression();
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 208897) !== 0)) {
				{
				{
				this.state = 121;
				this.addingOperator();
				this.state = 122;
				this.multiplyingExpression();
				}
				}
				this.state = 128;
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
		this.enterRule(localctx, 16, XtkParser.RULE_multiplyingExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 129;
			this.computableAtom();
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 19) !== 0)) {
				{
				{
				this.state = 130;
				this.multiplyOperator();
				this.state = 131;
				this.computableAtom();
				}
				}
				this.state = 137;
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
		this.enterRule(localctx, 18, XtkParser.RULE_addingOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 138;
			_la = this._input.LA(1);
			if(!(((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 208897) !== 0))) {
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
		this.enterRule(localctx, 20, XtkParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 140;
			_la = this._input.LA(1);
			if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 255) !== 0))) {
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
		this.enterRule(localctx, 22, XtkParser.RULE_multiplyOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 142;
			_la = this._input.LA(1);
			if(!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 19) !== 0))) {
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
		this.enterRule(localctx, 24, XtkParser.RULE_relationalExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 144;
			this.addingExpression();
			this.state = 147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 33:
			case 34:
				{
				this.state = 145;
				this.comparisonOperator();
				}
				break;
			case 26:
				{
				this.state = 146;
				this.variable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 149;
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
		this.enterRule(localctx, 26, XtkParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 151;
			_la = this._input.LA(1);
			if(!(_la===13 || _la===14)) {
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
		this.enterRule(localctx, 28, XtkParser.RULE_unaryExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 153;
			this.addingExpression();
			this.state = 154;
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
		this.enterRule(localctx, 30, XtkParser.RULE_likeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 156;
			_la = this._input.LA(1);
			if(!(_la===21 || _la===22)) {
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
		this.enterRule(localctx, 32, XtkParser.RULE_likeExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 158;
			this.addingExpression();
			this.state = 159;
			this.likeOperator();
			this.state = 160;
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
		this.enterRule(localctx, 34, XtkParser.RULE_includedInExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
			this.addingExpression();
			this.state = 163;
			_la = this._input.LA(1);
			if(!(_la===11 || _la===16)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 164;
			this.match(XtkParser.PAR_OPEN);
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117573566) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 2113) !== 0)) {
				{
				this.state = 165;
				this.list();
				}
			}

			this.state = 168;
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
		this.enterRule(localctx, 36, XtkParser.RULE_xpath);
		let _la: number;
		try {
			this.state = 185;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
			case 25:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 170;
				_la = this._input.LA(1);
				if(!(_la===24 || _la===25)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===47) {
					{
					this.state = 171;
					this.match(XtkParser.BRAC_OPEN);
					this.state = 172;
					this.match(XtkParser.X_INT);
					this.state = 173;
					this.match(XtkParser.X_BRAC_CLOSE);
					}
				}

				}
				break;
			case 47:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 176;
				this.match(XtkParser.BRAC_OPEN);
				this.state = 180;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 177;
					this.xpath_schema();
					this.state = 178;
					this.match(XtkParser.X_COLON);
					}
					break;
				}
				this.state = 182;
				this.xpath_locationPath();
				this.state = 183;
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
		this.enterRule(localctx, 38, XtkParser.RULE_xpath_schema);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 187;
			this.match(XtkParser.X_NCNAME);
			this.state = 188;
			this.match(XtkParser.X_COLON);
			this.state = 189;
			this.match(XtkParser.X_NCNAME);
			this.state = 192;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 190;
				this.match(XtkParser.X_COLON);
				this.state = 191;
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
		this.enterRule(localctx, 40, XtkParser.RULE_xpath_locationPath);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 194;
				this.match(XtkParser.X_SEP);
				}
			}

			this.state = 197;
			this.xpath_step();
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===53) {
				{
				{
				this.state = 198;
				this.match(XtkParser.X_SEP);
				this.state = 199;
				this.xpath_step();
				}
				}
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===50 || _la===52) {
				{
				this.state = 205;
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
		this.enterRule(localctx, 42, XtkParser.RULE_xpath_step);
		let _la: number;
		try {
			this.state = 220;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 50:
			case 52:
			case 57:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 209;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 208;
					this.match(XtkParser.X_ATTR);
					}
				}

				this.state = 211;
				this.xpath_qname();
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===48) {
					{
					{
					this.state = 212;
					this.xpath_predicate();
					}
					}
					this.state = 217;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 218;
				this.match(XtkParser.X_CURRENT);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 219;
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
		this.enterRule(localctx, 44, XtkParser.RULE_xpath_qname);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 226;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 222;
					this.match(XtkParser.X_NCNAME);
					this.state = 223;
					this.match(XtkParser.X_COLON);
					}
					}
				}
				this.state = 228;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 229;
			_la = this._input.LA(1);
			if(!(_la===50 || _la===52)) {
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
		this.enterRule(localctx, 46, XtkParser.RULE_xpath_predicate);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 231;
			this.match(XtkParser.X_BRAC_OPEN);
			this.state = 232;
			this.xpath_expr();
			this.state = 233;
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
		this.enterRule(localctx, 48, XtkParser.RULE_xpath_expr);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 235;
				this.match(XtkParser.X_INT);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 236;
				this.xpath_locationPath();
				this.state = 237;
				this.match(XtkParser.X_EQ);
				this.state = 238;
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
		this.enterRule(localctx, 50, XtkParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			this.expression();
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===43) {
				{
				{
				this.state = 243;
				this.match(XtkParser.COMMA);
				this.state = 244;
				this.expression();
				}
				}
				this.state = 249;
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
		this.enterRule(localctx, 52, XtkParser.RULE_parameters);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 255;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 250;
					this.expression();
					this.state = 251;
					this.match(XtkParser.COMMA);
					}
					}
				}
				this.state = 257;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 258;
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
		this.enterRule(localctx, 54, XtkParser.RULE_variablePath);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 264;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 260;
					this.match(XtkParser.IDENTIFIER);
					this.state = 261;
					this.match(XtkParser.DIV);
					}
					}
				}
				this.state = 266;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 267;
			_la = this._input.LA(1);
			if(!(_la===24 || _la===25)) {
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
		this.enterRule(localctx, 56, XtkParser.RULE_variableIdentifier);
		let _la: number;
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 269;
				this.match(XtkParser.IDENTIFIER);
				this.state = 270;
				_la = this._input.LA(1);
				if(!(_la===44 || _la===45)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 271;
				this.match(XtkParser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 272;
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
		this.enterRule(localctx, 58, XtkParser.RULE_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 275;
			this.match(XtkParser.START_VARIABLE);
			this.state = 276;
			this.match(XtkParser.PAR_OPEN);
			this.state = 277;
			this.variableIdentifier();
			this.state = 278;
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
		this.enterRule(localctx, 60, XtkParser.RULE_castVariable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 280;
			this.match(XtkParser.START_VARIABLE);
			this.state = 281;
			this.match(XtkParser.IDENTIFIER);
			this.state = 282;
			this.match(XtkParser.PAR_OPEN);
			this.state = 283;
			this.variableIdentifier();
			this.state = 284;
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
		this.enterRule(localctx, 62, XtkParser.RULE_literal);
		try {
			this.state = 299;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 286;
				this.match(XtkParser.STRING);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 287;
				this.match(XtkParser.INT);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 288;
				this.match(XtkParser.MINUS);
				this.state = 289;
				this.match(XtkParser.INT);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 290;
				this.match(XtkParser.DOUBLE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 291;
				this.match(XtkParser.MINUS);
				this.state = 292;
				this.match(XtkParser.DOUBLE);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 293;
				this.match(XtkParser.TRUE);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 294;
				this.match(XtkParser.FALSE);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 295;
				this.match(XtkParser.DATE);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 296;
				this.match(XtkParser.TIME);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 297;
				this.match(XtkParser.DATETIME);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 298;
				this.match(XtkParser.NULL);
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
		this.enterRule(localctx, 64, XtkParser.RULE_computableAtom);
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 301;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 302;
				this.functionCall();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 303;
				this.xpath();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 304;
				this.variable();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 305;
				this.castVariable();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 306;
				this.match(XtkParser.PAR_OPEN);
				this.state = 307;
				this.addingExpression();
				this.state = 308;
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

	public static readonly _serializedATN: number[] = [4,1,58,313,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,79,8,1,1,
	2,1,2,1,2,5,2,84,8,2,10,2,12,2,87,9,2,1,3,1,3,1,3,1,3,5,3,93,8,3,10,3,12,
	3,96,9,3,1,4,3,4,99,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,110,8,4,
	1,5,1,5,1,6,1,6,1,6,3,6,117,8,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,125,8,7,10,
	7,12,7,128,9,7,1,8,1,8,1,8,1,8,5,8,134,8,8,10,8,12,8,137,9,8,1,9,1,9,1,
	10,1,10,1,11,1,11,1,12,1,12,1,12,3,12,148,8,12,1,12,1,12,1,13,1,13,1,14,
	1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,3,17,167,8,
	17,1,17,1,17,1,18,1,18,1,18,1,18,3,18,175,8,18,1,18,1,18,1,18,1,18,3,18,
	181,8,18,1,18,1,18,1,18,3,18,186,8,18,1,19,1,19,1,19,1,19,1,19,3,19,193,
	8,19,1,20,3,20,196,8,20,1,20,1,20,1,20,5,20,201,8,20,10,20,12,20,204,9,
	20,1,20,3,20,207,8,20,1,21,3,21,210,8,21,1,21,1,21,5,21,214,8,21,10,21,
	12,21,217,9,21,1,21,1,21,3,21,221,8,21,1,22,1,22,5,22,225,8,22,10,22,12,
	22,228,9,22,1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,3,24,
	241,8,24,1,25,1,25,1,25,5,25,246,8,25,10,25,12,25,249,9,25,1,26,1,26,1,
	26,5,26,254,8,26,10,26,12,26,257,9,26,1,26,1,26,1,27,1,27,5,27,263,8,27,
	10,27,12,27,266,9,27,1,27,1,27,1,28,1,28,1,28,1,28,3,28,274,8,28,1,29,1,
	29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,
	1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,300,8,31,1,32,1,32,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,3,32,311,8,32,1,32,0,0,33,0,2,4,6,8,10,12,14,
	16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
	64,0,10,1,0,19,20,3,0,23,23,35,36,39,40,1,0,27,34,2,0,37,38,41,41,1,0,13,
	14,1,0,21,22,2,0,11,11,16,16,1,0,24,25,2,0,50,50,52,52,1,0,44,45,328,0,
	66,1,0,0,0,2,78,1,0,0,0,4,80,1,0,0,0,6,88,1,0,0,0,8,109,1,0,0,0,10,111,
	1,0,0,0,12,113,1,0,0,0,14,120,1,0,0,0,16,129,1,0,0,0,18,138,1,0,0,0,20,
	140,1,0,0,0,22,142,1,0,0,0,24,144,1,0,0,0,26,151,1,0,0,0,28,153,1,0,0,0,
	30,156,1,0,0,0,32,158,1,0,0,0,34,162,1,0,0,0,36,185,1,0,0,0,38,187,1,0,
	0,0,40,195,1,0,0,0,42,220,1,0,0,0,44,226,1,0,0,0,46,231,1,0,0,0,48,240,
	1,0,0,0,50,242,1,0,0,0,52,255,1,0,0,0,54,264,1,0,0,0,56,273,1,0,0,0,58,
	275,1,0,0,0,60,280,1,0,0,0,62,299,1,0,0,0,64,310,1,0,0,0,66,67,3,2,1,0,
	67,68,5,0,0,1,68,1,1,0,0,0,69,79,3,64,32,0,70,79,3,4,2,0,71,79,3,14,7,0,
	72,73,5,5,0,0,73,74,3,2,1,0,74,75,5,6,0,0,75,79,1,0,0,0,76,77,5,42,0,0,
	77,79,3,2,1,0,78,69,1,0,0,0,78,70,1,0,0,0,78,71,1,0,0,0,78,72,1,0,0,0,78,
	76,1,0,0,0,79,3,1,0,0,0,80,85,3,6,3,0,81,82,5,18,0,0,82,84,3,6,3,0,83,81,
	1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,5,1,0,0,0,87,85,1,
	0,0,0,88,94,3,8,4,0,89,90,3,10,5,0,90,91,3,8,4,0,91,93,1,0,0,0,92,89,1,
	0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,7,1,0,0,0,96,94,1,0,
	0,0,97,99,5,42,0,0,98,97,1,0,0,0,98,99,1,0,0,0,99,100,1,0,0,0,100,110,3,
	64,32,0,101,110,3,24,12,0,102,110,3,28,14,0,103,110,3,32,16,0,104,110,3,
	34,17,0,105,106,5,5,0,0,106,107,3,4,2,0,107,108,5,6,0,0,108,110,1,0,0,0,
	109,98,1,0,0,0,109,101,1,0,0,0,109,102,1,0,0,0,109,103,1,0,0,0,109,104,
	1,0,0,0,109,105,1,0,0,0,110,9,1,0,0,0,111,112,7,0,0,0,112,11,1,0,0,0,113,
	114,5,25,0,0,114,116,5,5,0,0,115,117,3,52,26,0,116,115,1,0,0,0,116,117,
	1,0,0,0,117,118,1,0,0,0,118,119,5,6,0,0,119,13,1,0,0,0,120,126,3,16,8,0,
	121,122,3,18,9,0,122,123,3,16,8,0,123,125,1,0,0,0,124,121,1,0,0,0,125,128,
	1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,15,1,0,0,0,128,126,1,0,0,0,
	129,135,3,64,32,0,130,131,3,22,11,0,131,132,3,64,32,0,132,134,1,0,0,0,133,
	130,1,0,0,0,134,137,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,0,136,17,1,0,
	0,0,137,135,1,0,0,0,138,139,7,1,0,0,139,19,1,0,0,0,140,141,7,2,0,0,141,
	21,1,0,0,0,142,143,7,3,0,0,143,23,1,0,0,0,144,147,3,14,7,0,145,148,3,20,
	10,0,146,148,3,58,29,0,147,145,1,0,0,0,147,146,1,0,0,0,148,149,1,0,0,0,
	149,150,3,14,7,0,150,25,1,0,0,0,151,152,7,4,0,0,152,27,1,0,0,0,153,154,
	3,14,7,0,154,155,3,26,13,0,155,29,1,0,0,0,156,157,7,5,0,0,157,31,1,0,0,
	0,158,159,3,14,7,0,159,160,3,30,15,0,160,161,3,14,7,0,161,33,1,0,0,0,162,
	163,3,14,7,0,163,164,7,6,0,0,164,166,5,5,0,0,165,167,3,50,25,0,166,165,
	1,0,0,0,166,167,1,0,0,0,167,168,1,0,0,0,168,169,5,6,0,0,169,35,1,0,0,0,
	170,174,7,7,0,0,171,172,5,47,0,0,172,173,5,50,0,0,173,175,5,49,0,0,174,
	171,1,0,0,0,174,175,1,0,0,0,175,186,1,0,0,0,176,180,5,47,0,0,177,178,3,
	38,19,0,178,179,5,54,0,0,179,181,1,0,0,0,180,177,1,0,0,0,180,181,1,0,0,
	0,181,182,1,0,0,0,182,183,3,40,20,0,183,184,5,49,0,0,184,186,1,0,0,0,185,
	170,1,0,0,0,185,176,1,0,0,0,186,37,1,0,0,0,187,188,5,52,0,0,188,189,5,54,
	0,0,189,192,5,52,0,0,190,191,5,54,0,0,191,193,5,50,0,0,192,190,1,0,0,0,
	192,193,1,0,0,0,193,39,1,0,0,0,194,196,5,53,0,0,195,194,1,0,0,0,195,196,
	1,0,0,0,196,197,1,0,0,0,197,202,3,42,21,0,198,199,5,53,0,0,199,201,3,42,
	21,0,200,198,1,0,0,0,201,204,1,0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,203,
	206,1,0,0,0,204,202,1,0,0,0,205,207,3,44,22,0,206,205,1,0,0,0,206,207,1,
	0,0,0,207,41,1,0,0,0,208,210,5,57,0,0,209,208,1,0,0,0,209,210,1,0,0,0,210,
	211,1,0,0,0,211,215,3,44,22,0,212,214,3,46,23,0,213,212,1,0,0,0,214,217,
	1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,221,1,0,0,0,217,215,1,0,0,0,
	218,221,5,56,0,0,219,221,5,55,0,0,220,209,1,0,0,0,220,218,1,0,0,0,220,219,
	1,0,0,0,221,43,1,0,0,0,222,223,5,52,0,0,223,225,5,54,0,0,224,222,1,0,0,
	0,225,228,1,0,0,0,226,224,1,0,0,0,226,227,1,0,0,0,227,229,1,0,0,0,228,226,
	1,0,0,0,229,230,7,8,0,0,230,45,1,0,0,0,231,232,5,48,0,0,232,233,3,48,24,
	0,233,234,5,49,0,0,234,47,1,0,0,0,235,241,5,50,0,0,236,237,3,40,20,0,237,
	238,5,58,0,0,238,239,5,51,0,0,239,241,1,0,0,0,240,235,1,0,0,0,240,236,1,
	0,0,0,241,49,1,0,0,0,242,247,3,2,1,0,243,244,5,43,0,0,244,246,3,2,1,0,245,
	243,1,0,0,0,246,249,1,0,0,0,247,245,1,0,0,0,247,248,1,0,0,0,248,51,1,0,
	0,0,249,247,1,0,0,0,250,251,3,2,1,0,251,252,5,43,0,0,252,254,1,0,0,0,253,
	250,1,0,0,0,254,257,1,0,0,0,255,253,1,0,0,0,255,256,1,0,0,0,256,258,1,0,
	0,0,257,255,1,0,0,0,258,259,3,2,1,0,259,53,1,0,0,0,260,261,5,25,0,0,261,
	263,5,38,0,0,262,260,1,0,0,0,263,266,1,0,0,0,264,262,1,0,0,0,264,265,1,
	0,0,0,265,267,1,0,0,0,266,264,1,0,0,0,267,268,7,7,0,0,268,55,1,0,0,0,269,
	270,5,25,0,0,270,271,7,9,0,0,271,274,5,25,0,0,272,274,3,54,27,0,273,269,
	1,0,0,0,273,272,1,0,0,0,274,57,1,0,0,0,275,276,5,26,0,0,276,277,5,5,0,0,
	277,278,3,56,28,0,278,279,5,6,0,0,279,59,1,0,0,0,280,281,5,26,0,0,281,282,
	5,25,0,0,282,283,5,5,0,0,283,284,3,56,28,0,284,285,5,6,0,0,285,61,1,0,0,
	0,286,300,5,3,0,0,287,300,5,4,0,0,288,289,5,36,0,0,289,300,5,4,0,0,290,
	300,5,7,0,0,291,292,5,36,0,0,292,300,5,7,0,0,293,300,5,1,0,0,294,300,5,
	2,0,0,295,300,5,8,0,0,296,300,5,9,0,0,297,300,5,10,0,0,298,300,5,17,0,0,
	299,286,1,0,0,0,299,287,1,0,0,0,299,288,1,0,0,0,299,290,1,0,0,0,299,291,
	1,0,0,0,299,293,1,0,0,0,299,294,1,0,0,0,299,295,1,0,0,0,299,296,1,0,0,0,
	299,297,1,0,0,0,299,298,1,0,0,0,300,63,1,0,0,0,301,311,3,62,31,0,302,311,
	3,12,6,0,303,311,3,36,18,0,304,311,3,58,29,0,305,311,3,60,30,0,306,307,
	5,5,0,0,307,308,3,14,7,0,308,309,5,6,0,0,309,311,1,0,0,0,310,301,1,0,0,
	0,310,302,1,0,0,0,310,303,1,0,0,0,310,304,1,0,0,0,310,305,1,0,0,0,310,306,
	1,0,0,0,311,65,1,0,0,0,28,78,85,94,98,109,116,126,135,147,166,174,180,185,
	192,195,202,206,209,215,220,226,240,247,255,264,273,299,310];

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
	public orExpression(): OrExpressionContext {
		return this.getTypedRuleContext(OrExpressionContext, 0) as OrExpressionContext;
	}
	public addingExpression(): AddingExpressionContext {
		return this.getTypedRuleContext(AddingExpressionContext, 0) as AddingExpressionContext;
	}
	public PAR_OPEN(): TerminalNode {
		return this.getToken(XtkParser.PAR_OPEN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public PAR_CLOSE(): TerminalNode {
		return this.getToken(XtkParser.PAR_CLOSE, 0);
	}
	public EXCLAMATION(): TerminalNode {
		return this.getToken(XtkParser.EXCLAMATION, 0);
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
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public andOperator_list(): AndOperatorContext[] {
		return this.getTypedRuleContexts(AndOperatorContext) as AndOperatorContext[];
	}
	public andOperator(i: number): AndOperatorContext {
		return this.getTypedRuleContext(AndOperatorContext, i) as AndOperatorContext;
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


export class SingleExpressionContext extends ParserRuleContext {
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
	public relationalExpression(): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, 0) as RelationalExpressionContext;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public likeExpression(): LikeExpressionContext {
		return this.getTypedRuleContext(LikeExpressionContext, 0) as LikeExpressionContext;
	}
	public includedInExpression(): IncludedInExpressionContext {
		return this.getTypedRuleContext(IncludedInExpressionContext, 0) as IncludedInExpressionContext;
	}
	public PAR_OPEN(): TerminalNode {
		return this.getToken(XtkParser.PAR_OPEN, 0);
	}
	public orExpression(): OrExpressionContext {
		return this.getTypedRuleContext(OrExpressionContext, 0) as OrExpressionContext;
	}
	public PAR_CLOSE(): TerminalNode {
		return this.getToken(XtkParser.PAR_CLOSE, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_singleExpression;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterSingleExpression) {
	 		listener.enterSingleExpression(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitSingleExpression) {
	 		listener.exitSingleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitSingleExpression) {
			return visitor.visitSingleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndOperatorContext extends ParserRuleContext {
	constructor(parser?: XtkParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AND(): TerminalNode {
		return this.getToken(XtkParser.AND, 0);
	}
	public AND_NOT(): TerminalNode {
		return this.getToken(XtkParser.AND_NOT, 0);
	}
    public get ruleIndex(): number {
    	return XtkParser.RULE_andOperator;
	}
	public enterRule(listener: XtkParserListener): void {
	    if(listener.enterAndOperator) {
	 		listener.enterAndOperator(this);
		}
	}
	public exitRule(listener: XtkParserListener): void {
	    if(listener.exitAndOperator) {
	 		listener.exitAndOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: XtkParserVisitor<Result>): Result {
		if (visitor.visitAndOperator) {
			return visitor.visitAndOperator(this);
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
	public variable(): VariableContext {
		return this.getTypedRuleContext(VariableContext, 0) as VariableContext;
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
	public PAR_CLOSE(): TerminalNode {
		return this.getToken(XtkParser.PAR_CLOSE, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(XtkParser.IN, 0);
	}
	public NOT_IN(): TerminalNode {
		return this.getToken(XtkParser.NOT_IN, 0);
	}
	public list(): ListContext {
		return this.getTypedRuleContext(ListContext, 0) as ListContext;
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
	public TRUE(): TerminalNode {
		return this.getToken(XtkParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(XtkParser.FALSE, 0);
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
	public NULL(): TerminalNode {
		return this.getToken(XtkParser.NULL, 0);
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
