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
		let _la: number;
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
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
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42) {
					{
					this.state = 72;
					this.match(XtkParser.EXCLAMATION);
					}
				}

				this.state = 75;
				this.match(XtkParser.PAR_OPEN);
				this.state = 76;
				this.expression();
				this.state = 77;
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
			this.state = 81;
			this.andExpression();
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===18) {
				{
				{
				this.state = 82;
				this.match(XtkParser.OR);
				this.state = 83;
				this.andExpression();
				}
				}
				this.state = 88;
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
			this.singleExpression();
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===19 || _la===20) {
				{
				{
				this.state = 90;
				this.andOperator();
				this.state = 91;
				this.singleExpression();
				}
				}
				this.state = 97;
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
			this.state = 110;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42) {
					{
					this.state = 98;
					this.match(XtkParser.EXCLAMATION);
					}
				}

				this.state = 101;
				this.computableAtom();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 102;
				this.relationalExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 103;
				this.unaryExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 104;
				this.likeExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 105;
				this.includedInExpression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 106;
				this.match(XtkParser.PAR_OPEN);
				this.state = 107;
				this.orExpression();
				this.state = 108;
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
			this.state = 112;
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
			this.state = 114;
			this.match(XtkParser.IDENTIFIER);
			this.state = 115;
			this.match(XtkParser.PAR_OPEN);
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117573566) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 2113) !== 0)) {
				{
				this.state = 116;
				this.parameters();
				}
			}

			this.state = 119;
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
			this.state = 121;
			this.multiplyingExpression();
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 208897) !== 0)) {
				{
				{
				this.state = 122;
				this.addingOperator();
				this.state = 123;
				this.multiplyingExpression();
				}
				}
				this.state = 129;
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
			this.state = 130;
			this.computableAtom();
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 19) !== 0)) {
				{
				{
				this.state = 131;
				this.multiplyOperator();
				this.state = 132;
				this.computableAtom();
				}
				}
				this.state = 138;
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
			this.state = 139;
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
			this.state = 141;
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
			this.state = 143;
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
			this.state = 145;
			this.addingExpression();
			this.state = 148;
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
				this.state = 146;
				this.comparisonOperator();
				}
				break;
			case 26:
				{
				this.state = 147;
				this.variable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 150;
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
			this.state = 152;
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
			this.state = 154;
			this.addingExpression();
			this.state = 155;
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
			this.state = 157;
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
			this.state = 159;
			this.addingExpression();
			this.state = 160;
			this.likeOperator();
			this.state = 161;
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
			this.state = 163;
			this.addingExpression();
			this.state = 164;
			_la = this._input.LA(1);
			if(!(_la===11 || _la===16)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 165;
			this.match(XtkParser.PAR_OPEN);
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117573566) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 2113) !== 0)) {
				{
				this.state = 166;
				this.list();
				}
			}

			this.state = 169;
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
			this.state = 186;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
			case 25:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 171;
				_la = this._input.LA(1);
				if(!(_la===24 || _la===25)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===47) {
					{
					this.state = 172;
					this.match(XtkParser.BRAC_OPEN);
					this.state = 173;
					this.match(XtkParser.X_INT);
					this.state = 174;
					this.match(XtkParser.X_BRAC_CLOSE);
					}
				}

				}
				break;
			case 47:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 177;
				this.match(XtkParser.BRAC_OPEN);
				this.state = 181;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 178;
					this.xpath_schema();
					this.state = 179;
					this.match(XtkParser.X_COLON);
					}
					break;
				}
				this.state = 183;
				this.xpath_locationPath();
				this.state = 184;
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
			this.state = 188;
			this.match(XtkParser.X_NCNAME);
			this.state = 189;
			this.match(XtkParser.X_COLON);
			this.state = 190;
			this.match(XtkParser.X_NCNAME);
			this.state = 193;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 191;
				this.match(XtkParser.X_COLON);
				this.state = 192;
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
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 195;
				this.match(XtkParser.X_SEP);
				}
			}

			this.state = 198;
			this.xpath_step();
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===53) {
				{
				{
				this.state = 199;
				this.match(XtkParser.X_SEP);
				this.state = 200;
				this.xpath_step();
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===50 || _la===52) {
				{
				this.state = 206;
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
			this.state = 221;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 50:
			case 52:
			case 57:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===57) {
					{
					this.state = 209;
					this.match(XtkParser.X_ATTR);
					}
				}

				this.state = 212;
				this.xpath_qname();
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===48) {
					{
					{
					this.state = 213;
					this.xpath_predicate();
					}
					}
					this.state = 218;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 56:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 219;
				this.match(XtkParser.X_CURRENT);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 220;
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
			this.state = 227;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 223;
					this.match(XtkParser.X_NCNAME);
					this.state = 224;
					this.match(XtkParser.X_COLON);
					}
					}
				}
				this.state = 229;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 230;
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
			this.state = 232;
			this.match(XtkParser.X_BRAC_OPEN);
			this.state = 233;
			this.xpath_expr();
			this.state = 234;
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
			this.state = 241;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 236;
				this.match(XtkParser.X_INT);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 237;
				this.xpath_locationPath();
				this.state = 238;
				this.match(XtkParser.X_EQ);
				this.state = 239;
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
			this.state = 243;
			this.expression();
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===43) {
				{
				{
				this.state = 244;
				this.match(XtkParser.COMMA);
				this.state = 245;
				this.expression();
				}
				}
				this.state = 250;
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
			this.state = 256;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 251;
					this.expression();
					this.state = 252;
					this.match(XtkParser.COMMA);
					}
					}
				}
				this.state = 258;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			}
			this.state = 259;
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
			this.state = 265;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 261;
					this.match(XtkParser.IDENTIFIER);
					this.state = 262;
					this.match(XtkParser.DIV);
					}
					}
				}
				this.state = 267;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 268;
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
			this.state = 274;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 270;
				this.match(XtkParser.IDENTIFIER);
				this.state = 271;
				_la = this._input.LA(1);
				if(!(_la===44 || _la===45)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 272;
				this.match(XtkParser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 273;
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
			this.state = 276;
			this.match(XtkParser.START_VARIABLE);
			this.state = 277;
			this.match(XtkParser.PAR_OPEN);
			this.state = 278;
			this.variableIdentifier();
			this.state = 279;
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
			this.state = 281;
			this.match(XtkParser.START_VARIABLE);
			this.state = 282;
			this.match(XtkParser.IDENTIFIER);
			this.state = 283;
			this.match(XtkParser.PAR_OPEN);
			this.state = 284;
			this.variableIdentifier();
			this.state = 285;
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
			this.state = 300;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 287;
				this.match(XtkParser.STRING);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 288;
				this.match(XtkParser.INT);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 289;
				this.match(XtkParser.MINUS);
				this.state = 290;
				this.match(XtkParser.INT);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 291;
				this.match(XtkParser.DOUBLE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 292;
				this.match(XtkParser.MINUS);
				this.state = 293;
				this.match(XtkParser.DOUBLE);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 294;
				this.match(XtkParser.TRUE);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 295;
				this.match(XtkParser.FALSE);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 296;
				this.match(XtkParser.DATE);
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 297;
				this.match(XtkParser.TIME);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 298;
				this.match(XtkParser.DATETIME);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 299;
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
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 302;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 303;
				this.functionCall();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 304;
				this.xpath();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 305;
				this.variable();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 306;
				this.castVariable();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 307;
				this.match(XtkParser.PAR_OPEN);
				this.state = 308;
				this.addingExpression();
				this.state = 309;
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

	public static readonly _serializedATN: number[] = [4,1,58,314,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,1,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,74,8,1,1,1,1,1,1,1,1,1,3,1,80,
	8,1,1,2,1,2,1,2,5,2,85,8,2,10,2,12,2,88,9,2,1,3,1,3,1,3,1,3,5,3,94,8,3,
	10,3,12,3,97,9,3,1,4,3,4,100,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,
	4,111,8,4,1,5,1,5,1,6,1,6,1,6,3,6,118,8,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,126,
	8,7,10,7,12,7,129,9,7,1,8,1,8,1,8,1,8,5,8,135,8,8,10,8,12,8,138,9,8,1,9,
	1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,12,3,12,149,8,12,1,12,1,12,1,13,1,13,
	1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,3,17,168,
	8,17,1,17,1,17,1,18,1,18,1,18,1,18,3,18,176,8,18,1,18,1,18,1,18,1,18,3,
	18,182,8,18,1,18,1,18,1,18,3,18,187,8,18,1,19,1,19,1,19,1,19,1,19,3,19,
	194,8,19,1,20,3,20,197,8,20,1,20,1,20,1,20,5,20,202,8,20,10,20,12,20,205,
	9,20,1,20,3,20,208,8,20,1,21,3,21,211,8,21,1,21,1,21,5,21,215,8,21,10,21,
	12,21,218,9,21,1,21,1,21,3,21,222,8,21,1,22,1,22,5,22,226,8,22,10,22,12,
	22,229,9,22,1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,3,24,
	242,8,24,1,25,1,25,1,25,5,25,247,8,25,10,25,12,25,250,9,25,1,26,1,26,1,
	26,5,26,255,8,26,10,26,12,26,258,9,26,1,26,1,26,1,27,1,27,5,27,264,8,27,
	10,27,12,27,267,9,27,1,27,1,27,1,28,1,28,1,28,1,28,3,28,275,8,28,1,29,1,
	29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,
	1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,301,8,31,1,32,1,32,1,32,1,
	32,1,32,1,32,1,32,1,32,1,32,3,32,312,8,32,1,32,0,0,33,0,2,4,6,8,10,12,14,
	16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
	64,0,10,1,0,19,20,3,0,23,23,35,36,39,40,1,0,27,34,2,0,37,38,41,41,1,0,13,
	14,1,0,21,22,2,0,11,11,16,16,1,0,24,25,2,0,50,50,52,52,1,0,44,45,329,0,
	66,1,0,0,0,2,79,1,0,0,0,4,81,1,0,0,0,6,89,1,0,0,0,8,110,1,0,0,0,10,112,
	1,0,0,0,12,114,1,0,0,0,14,121,1,0,0,0,16,130,1,0,0,0,18,139,1,0,0,0,20,
	141,1,0,0,0,22,143,1,0,0,0,24,145,1,0,0,0,26,152,1,0,0,0,28,154,1,0,0,0,
	30,157,1,0,0,0,32,159,1,0,0,0,34,163,1,0,0,0,36,186,1,0,0,0,38,188,1,0,
	0,0,40,196,1,0,0,0,42,221,1,0,0,0,44,227,1,0,0,0,46,232,1,0,0,0,48,241,
	1,0,0,0,50,243,1,0,0,0,52,256,1,0,0,0,54,265,1,0,0,0,56,274,1,0,0,0,58,
	276,1,0,0,0,60,281,1,0,0,0,62,300,1,0,0,0,64,311,1,0,0,0,66,67,3,2,1,0,
	67,68,5,0,0,1,68,1,1,0,0,0,69,80,3,64,32,0,70,80,3,4,2,0,71,80,3,14,7,0,
	72,74,5,42,0,0,73,72,1,0,0,0,73,74,1,0,0,0,74,75,1,0,0,0,75,76,5,5,0,0,
	76,77,3,2,1,0,77,78,5,6,0,0,78,80,1,0,0,0,79,69,1,0,0,0,79,70,1,0,0,0,79,
	71,1,0,0,0,79,73,1,0,0,0,80,3,1,0,0,0,81,86,3,6,3,0,82,83,5,18,0,0,83,85,
	3,6,3,0,84,82,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,5,1,
	0,0,0,88,86,1,0,0,0,89,95,3,8,4,0,90,91,3,10,5,0,91,92,3,8,4,0,92,94,1,
	0,0,0,93,90,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,7,1,0,
	0,0,97,95,1,0,0,0,98,100,5,42,0,0,99,98,1,0,0,0,99,100,1,0,0,0,100,101,
	1,0,0,0,101,111,3,64,32,0,102,111,3,24,12,0,103,111,3,28,14,0,104,111,3,
	32,16,0,105,111,3,34,17,0,106,107,5,5,0,0,107,108,3,4,2,0,108,109,5,6,0,
	0,109,111,1,0,0,0,110,99,1,0,0,0,110,102,1,0,0,0,110,103,1,0,0,0,110,104,
	1,0,0,0,110,105,1,0,0,0,110,106,1,0,0,0,111,9,1,0,0,0,112,113,7,0,0,0,113,
	11,1,0,0,0,114,115,5,25,0,0,115,117,5,5,0,0,116,118,3,52,26,0,117,116,1,
	0,0,0,117,118,1,0,0,0,118,119,1,0,0,0,119,120,5,6,0,0,120,13,1,0,0,0,121,
	127,3,16,8,0,122,123,3,18,9,0,123,124,3,16,8,0,124,126,1,0,0,0,125,122,
	1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,127,128,1,0,0,0,128,15,1,0,0,0,
	129,127,1,0,0,0,130,136,3,64,32,0,131,132,3,22,11,0,132,133,3,64,32,0,133,
	135,1,0,0,0,134,131,1,0,0,0,135,138,1,0,0,0,136,134,1,0,0,0,136,137,1,0,
	0,0,137,17,1,0,0,0,138,136,1,0,0,0,139,140,7,1,0,0,140,19,1,0,0,0,141,142,
	7,2,0,0,142,21,1,0,0,0,143,144,7,3,0,0,144,23,1,0,0,0,145,148,3,14,7,0,
	146,149,3,20,10,0,147,149,3,58,29,0,148,146,1,0,0,0,148,147,1,0,0,0,149,
	150,1,0,0,0,150,151,3,14,7,0,151,25,1,0,0,0,152,153,7,4,0,0,153,27,1,0,
	0,0,154,155,3,14,7,0,155,156,3,26,13,0,156,29,1,0,0,0,157,158,7,5,0,0,158,
	31,1,0,0,0,159,160,3,14,7,0,160,161,3,30,15,0,161,162,3,14,7,0,162,33,1,
	0,0,0,163,164,3,14,7,0,164,165,7,6,0,0,165,167,5,5,0,0,166,168,3,50,25,
	0,167,166,1,0,0,0,167,168,1,0,0,0,168,169,1,0,0,0,169,170,5,6,0,0,170,35,
	1,0,0,0,171,175,7,7,0,0,172,173,5,47,0,0,173,174,5,50,0,0,174,176,5,49,
	0,0,175,172,1,0,0,0,175,176,1,0,0,0,176,187,1,0,0,0,177,181,5,47,0,0,178,
	179,3,38,19,0,179,180,5,54,0,0,180,182,1,0,0,0,181,178,1,0,0,0,181,182,
	1,0,0,0,182,183,1,0,0,0,183,184,3,40,20,0,184,185,5,49,0,0,185,187,1,0,
	0,0,186,171,1,0,0,0,186,177,1,0,0,0,187,37,1,0,0,0,188,189,5,52,0,0,189,
	190,5,54,0,0,190,193,5,52,0,0,191,192,5,54,0,0,192,194,5,50,0,0,193,191,
	1,0,0,0,193,194,1,0,0,0,194,39,1,0,0,0,195,197,5,53,0,0,196,195,1,0,0,0,
	196,197,1,0,0,0,197,198,1,0,0,0,198,203,3,42,21,0,199,200,5,53,0,0,200,
	202,3,42,21,0,201,199,1,0,0,0,202,205,1,0,0,0,203,201,1,0,0,0,203,204,1,
	0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,206,208,3,44,22,0,207,206,1,0,0,0,
	207,208,1,0,0,0,208,41,1,0,0,0,209,211,5,57,0,0,210,209,1,0,0,0,210,211,
	1,0,0,0,211,212,1,0,0,0,212,216,3,44,22,0,213,215,3,46,23,0,214,213,1,0,
	0,0,215,218,1,0,0,0,216,214,1,0,0,0,216,217,1,0,0,0,217,222,1,0,0,0,218,
	216,1,0,0,0,219,222,5,56,0,0,220,222,5,55,0,0,221,210,1,0,0,0,221,219,1,
	0,0,0,221,220,1,0,0,0,222,43,1,0,0,0,223,224,5,52,0,0,224,226,5,54,0,0,
	225,223,1,0,0,0,226,229,1,0,0,0,227,225,1,0,0,0,227,228,1,0,0,0,228,230,
	1,0,0,0,229,227,1,0,0,0,230,231,7,8,0,0,231,45,1,0,0,0,232,233,5,48,0,0,
	233,234,3,48,24,0,234,235,5,49,0,0,235,47,1,0,0,0,236,242,5,50,0,0,237,
	238,3,40,20,0,238,239,5,58,0,0,239,240,5,51,0,0,240,242,1,0,0,0,241,236,
	1,0,0,0,241,237,1,0,0,0,242,49,1,0,0,0,243,248,3,2,1,0,244,245,5,43,0,0,
	245,247,3,2,1,0,246,244,1,0,0,0,247,250,1,0,0,0,248,246,1,0,0,0,248,249,
	1,0,0,0,249,51,1,0,0,0,250,248,1,0,0,0,251,252,3,2,1,0,252,253,5,43,0,0,
	253,255,1,0,0,0,254,251,1,0,0,0,255,258,1,0,0,0,256,254,1,0,0,0,256,257,
	1,0,0,0,257,259,1,0,0,0,258,256,1,0,0,0,259,260,3,2,1,0,260,53,1,0,0,0,
	261,262,5,25,0,0,262,264,5,38,0,0,263,261,1,0,0,0,264,267,1,0,0,0,265,263,
	1,0,0,0,265,266,1,0,0,0,266,268,1,0,0,0,267,265,1,0,0,0,268,269,7,7,0,0,
	269,55,1,0,0,0,270,271,5,25,0,0,271,272,7,9,0,0,272,275,5,25,0,0,273,275,
	3,54,27,0,274,270,1,0,0,0,274,273,1,0,0,0,275,57,1,0,0,0,276,277,5,26,0,
	0,277,278,5,5,0,0,278,279,3,56,28,0,279,280,5,6,0,0,280,59,1,0,0,0,281,
	282,5,26,0,0,282,283,5,25,0,0,283,284,5,5,0,0,284,285,3,56,28,0,285,286,
	5,6,0,0,286,61,1,0,0,0,287,301,5,3,0,0,288,301,5,4,0,0,289,290,5,36,0,0,
	290,301,5,4,0,0,291,301,5,7,0,0,292,293,5,36,0,0,293,301,5,7,0,0,294,301,
	5,1,0,0,295,301,5,2,0,0,296,301,5,8,0,0,297,301,5,9,0,0,298,301,5,10,0,
	0,299,301,5,17,0,0,300,287,1,0,0,0,300,288,1,0,0,0,300,289,1,0,0,0,300,
	291,1,0,0,0,300,292,1,0,0,0,300,294,1,0,0,0,300,295,1,0,0,0,300,296,1,0,
	0,0,300,297,1,0,0,0,300,298,1,0,0,0,300,299,1,0,0,0,301,63,1,0,0,0,302,
	312,3,62,31,0,303,312,3,12,6,0,304,312,3,36,18,0,305,312,3,58,29,0,306,
	312,3,60,30,0,307,308,5,5,0,0,308,309,3,14,7,0,309,310,5,6,0,0,310,312,
	1,0,0,0,311,302,1,0,0,0,311,303,1,0,0,0,311,304,1,0,0,0,311,305,1,0,0,0,
	311,306,1,0,0,0,311,307,1,0,0,0,312,65,1,0,0,0,29,73,79,86,95,99,110,117,
	127,136,148,167,175,181,186,193,196,203,207,210,216,221,227,241,248,256,
	265,274,300,311];

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
