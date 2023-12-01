// Generated from XtkLexer.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class XtkLexer extends Lexer {
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
	public static readonly EOF = Token.EOF;
	public static readonly XPATH = 1;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "XPATH", ];

	public static readonly ruleNames: string[] = [
		"CHAR_ESCAPED", "CHAR_SQUOTED", "CHAR_DQUOTED", "TRUE", "FALSE", "STRING", 
		"INT", "PAR_OPEN", "PAR_CLOSE", "NUM1", "NUM2", "DOUBLE", "DATEPART", 
		"TIMEPART", "DATE", "TIME", "DATETIME", "ALPHA", "DIGIT", "NOT_IN", "NOT", 
		"IS_NULL", "IS_NOT_NULL", "IS", "IN", "NULL", "OR", "AND", "AND_NOT", 
		"LIKE", "NOT_LIKE", "CONCAT", "ATTRIBUTE", "IDENTIFIER", "START_VARIABLE", 
		"LT", "GT", "LE", "GE", "EQ", "EQ_2", "NEQ", "NEQ_2", "PLUS", "MINUS", 
		"TIMES", "DIV", "AMP", "PIPE", "PERCENT", "EXCLAMATION", "COMMA", "COLON", 
		"DOT", "WS", "BRAC_OPEN", "X_BRAC_OPEN", "X_BRAC_CLOSE", "X_INT", "X_STRING", 
		"X_NCNAME", "X_SEP", "X_COLON", "X_PARENT", "X_CURRENT", "X_ATTR", "X_EQ",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, XtkLexer._ATN, XtkLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "XtkLexer.g4"; }

	public get literalNames(): (string | null)[] { return XtkLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return XtkLexer.symbolicNames; }
	public get ruleNames(): string[] { return XtkLexer.ruleNames; }

	public get serializedATN(): number[] { return XtkLexer._serializedATN; }

	public get channelNames(): string[] { return XtkLexer.channelNames; }

	public get modeNames(): string[] { return XtkLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,58,491,6,-1,6,-1,
	2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,
	2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,
	7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,
	23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,
	2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,
	38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
	7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
	52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,
	2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,1,
	0,1,0,1,0,1,1,1,1,3,1,142,8,1,1,2,1,2,3,2,146,8,2,1,3,1,3,1,3,1,3,1,3,1,
	3,1,3,1,3,3,3,156,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,168,8,
	4,1,5,1,5,5,5,172,8,5,10,5,12,5,175,9,5,1,5,1,5,1,5,5,5,180,8,5,10,5,12,
	5,183,9,5,1,5,3,5,186,8,5,1,6,4,6,189,8,6,11,6,12,6,190,1,7,1,7,1,8,1,8,
	1,9,4,9,198,8,9,11,9,12,9,199,1,9,1,9,4,9,204,8,9,11,9,12,9,205,3,9,208,
	8,9,1,9,1,9,3,9,212,8,9,1,9,4,9,215,8,9,11,9,12,9,216,3,9,219,8,9,1,10,
	5,10,222,8,10,10,10,12,10,225,9,10,1,10,1,10,4,10,229,8,10,11,10,12,10,
	230,1,10,1,10,3,10,235,8,10,1,10,4,10,238,8,10,11,10,12,10,239,3,10,242,
	8,10,1,11,1,11,3,11,246,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
	12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
	1,13,3,13,272,8,13,1,13,3,13,275,8,13,1,14,1,14,3,14,279,8,14,1,14,1,14,
	1,15,1,15,3,15,285,8,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,
	17,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,
	1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,
	25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,29,
	1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,32,3,
	32,354,8,32,1,32,1,32,1,32,5,32,359,8,32,10,32,12,32,362,9,32,1,33,1,33,
	3,33,366,8,33,1,33,1,33,1,33,5,33,371,8,33,10,33,12,33,374,9,33,1,34,1,
	34,1,35,1,35,1,36,1,36,1,37,1,37,1,37,1,38,1,38,1,38,1,39,1,39,1,40,1,40,
	1,40,1,41,1,41,1,41,1,42,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,
	46,1,47,1,47,1,48,1,48,1,49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,53,1,53,
	1,54,4,54,422,8,54,11,54,12,54,423,1,54,1,54,1,55,1,55,1,55,1,55,1,56,1,
	56,1,56,1,56,1,57,1,57,1,57,1,57,1,58,4,58,441,8,58,11,58,12,58,442,1,59,
	1,59,1,59,1,59,5,59,449,8,59,10,59,12,59,452,9,59,1,59,1,59,1,59,1,59,1,
	59,5,59,459,8,59,10,59,12,59,462,9,59,1,59,3,59,465,8,59,1,60,1,60,3,60,
	469,8,60,1,60,1,60,1,60,5,60,474,8,60,10,60,12,60,477,9,60,1,61,1,61,1,
	62,1,62,1,63,1,63,1,63,1,64,1,64,1,65,1,65,1,66,1,66,0,0,67,2,0,4,0,6,0,
	8,1,10,2,12,3,14,4,16,5,18,6,20,0,22,0,24,7,26,0,28,0,30,8,32,9,34,10,36,
	0,38,0,40,11,42,12,44,13,46,14,48,15,50,16,52,17,54,18,56,19,58,20,60,21,
	62,22,64,23,66,24,68,25,70,26,72,27,74,28,76,29,78,30,80,31,82,32,84,33,
	86,34,88,35,90,36,92,37,94,38,96,39,98,40,100,41,102,42,104,43,106,44,108,
	45,110,46,112,47,114,48,116,49,118,50,120,51,122,52,124,53,126,54,128,55,
	130,56,132,57,134,58,2,0,1,24,10,0,34,34,39,39,63,63,92,92,97,98,102,102,
	110,110,114,114,116,116,118,118,4,0,10,10,13,13,39,39,92,92,4,0,10,10,13,
	13,34,34,92,92,2,0,69,69,101,101,2,0,43,43,45,45,2,0,45,45,47,47,3,0,9,
	9,32,32,84,84,5,0,65,90,97,122,192,214,223,246,248,255,1,0,48,57,2,0,78,
	78,110,110,2,0,79,79,111,111,2,0,84,84,116,116,2,0,73,73,105,105,2,0,83,
	83,115,115,2,0,85,85,117,117,2,0,76,76,108,108,2,0,82,82,114,114,2,0,65,
	65,97,97,2,0,68,68,100,100,2,0,75,75,107,107,3,0,9,10,13,13,32,32,1,0,34,
	34,2,0,39,39,94,94,2,0,45,46,95,95,523,0,8,1,0,0,0,0,10,1,0,0,0,0,12,1,
	0,0,0,0,14,1,0,0,0,0,16,1,0,0,0,0,18,1,0,0,0,0,24,1,0,0,0,0,30,1,0,0,0,
	0,32,1,0,0,0,0,34,1,0,0,0,0,40,1,0,0,0,0,42,1,0,0,0,0,44,1,0,0,0,0,46,1,
	0,0,0,0,48,1,0,0,0,0,50,1,0,0,0,0,52,1,0,0,0,0,54,1,0,0,0,0,56,1,0,0,0,
	0,58,1,0,0,0,0,60,1,0,0,0,0,62,1,0,0,0,0,64,1,0,0,0,0,66,1,0,0,0,0,68,1,
	0,0,0,0,70,1,0,0,0,0,72,1,0,0,0,0,74,1,0,0,0,0,76,1,0,0,0,0,78,1,0,0,0,
	0,80,1,0,0,0,0,82,1,0,0,0,0,84,1,0,0,0,0,86,1,0,0,0,0,88,1,0,0,0,0,90,1,
	0,0,0,0,92,1,0,0,0,0,94,1,0,0,0,0,96,1,0,0,0,0,98,1,0,0,0,0,100,1,0,0,0,
	0,102,1,0,0,0,0,104,1,0,0,0,0,106,1,0,0,0,0,108,1,0,0,0,0,110,1,0,0,0,0,
	112,1,0,0,0,1,114,1,0,0,0,1,116,1,0,0,0,1,118,1,0,0,0,1,120,1,0,0,0,1,122,
	1,0,0,0,1,124,1,0,0,0,1,126,1,0,0,0,1,128,1,0,0,0,1,130,1,0,0,0,1,132,1,
	0,0,0,1,134,1,0,0,0,2,136,1,0,0,0,4,141,1,0,0,0,6,145,1,0,0,0,8,155,1,0,
	0,0,10,167,1,0,0,0,12,185,1,0,0,0,14,188,1,0,0,0,16,192,1,0,0,0,18,194,
	1,0,0,0,20,197,1,0,0,0,22,223,1,0,0,0,24,245,1,0,0,0,26,247,1,0,0,0,28,
	258,1,0,0,0,30,276,1,0,0,0,32,282,1,0,0,0,34,288,1,0,0,0,36,294,1,0,0,0,
	38,296,1,0,0,0,40,298,1,0,0,0,42,302,1,0,0,0,44,306,1,0,0,0,46,310,1,0,
	0,0,48,316,1,0,0,0,50,319,1,0,0,0,52,322,1,0,0,0,54,327,1,0,0,0,56,330,
	1,0,0,0,58,334,1,0,0,0,60,338,1,0,0,0,62,343,1,0,0,0,64,347,1,0,0,0,66,
	350,1,0,0,0,68,365,1,0,0,0,70,375,1,0,0,0,72,377,1,0,0,0,74,379,1,0,0,0,
	76,381,1,0,0,0,78,384,1,0,0,0,80,387,1,0,0,0,82,389,1,0,0,0,84,392,1,0,
	0,0,86,395,1,0,0,0,88,398,1,0,0,0,90,400,1,0,0,0,92,402,1,0,0,0,94,404,
	1,0,0,0,96,406,1,0,0,0,98,408,1,0,0,0,100,410,1,0,0,0,102,412,1,0,0,0,104,
	414,1,0,0,0,106,416,1,0,0,0,108,418,1,0,0,0,110,421,1,0,0,0,112,427,1,0,
	0,0,114,431,1,0,0,0,116,435,1,0,0,0,118,440,1,0,0,0,120,464,1,0,0,0,122,
	468,1,0,0,0,124,478,1,0,0,0,126,480,1,0,0,0,128,482,1,0,0,0,130,485,1,0,
	0,0,132,487,1,0,0,0,134,489,1,0,0,0,136,137,5,92,0,0,137,138,7,0,0,0,138,
	3,1,0,0,0,139,142,8,1,0,0,140,142,3,2,0,0,141,139,1,0,0,0,141,140,1,0,0,
	0,142,5,1,0,0,0,143,146,8,2,0,0,144,146,3,2,0,0,145,143,1,0,0,0,145,144,
	1,0,0,0,146,7,1,0,0,0,147,148,5,84,0,0,148,149,5,82,0,0,149,150,5,85,0,
	0,150,156,5,69,0,0,151,152,5,116,0,0,152,153,5,114,0,0,153,154,5,117,0,
	0,154,156,5,101,0,0,155,147,1,0,0,0,155,151,1,0,0,0,156,9,1,0,0,0,157,158,
	5,70,0,0,158,159,5,65,0,0,159,160,5,76,0,0,160,161,5,83,0,0,161,168,5,69,
	0,0,162,163,5,102,0,0,163,164,5,97,0,0,164,165,5,108,0,0,165,166,5,115,
	0,0,166,168,5,101,0,0,167,157,1,0,0,0,167,162,1,0,0,0,168,11,1,0,0,0,169,
	173,5,34,0,0,170,172,3,6,2,0,171,170,1,0,0,0,172,175,1,0,0,0,173,171,1,
	0,0,0,173,174,1,0,0,0,174,176,1,0,0,0,175,173,1,0,0,0,176,186,5,34,0,0,
	177,181,5,39,0,0,178,180,3,4,1,0,179,178,1,0,0,0,180,183,1,0,0,0,181,179,
	1,0,0,0,181,182,1,0,0,0,182,184,1,0,0,0,183,181,1,0,0,0,184,186,5,39,0,
	0,185,169,1,0,0,0,185,177,1,0,0,0,186,13,1,0,0,0,187,189,3,38,18,0,188,
	187,1,0,0,0,189,190,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,15,1,0,
	0,0,192,193,5,40,0,0,193,17,1,0,0,0,194,195,5,41,0,0,195,19,1,0,0,0,196,
	198,3,38,18,0,197,196,1,0,0,0,198,199,1,0,0,0,199,197,1,0,0,0,199,200,1,
	0,0,0,200,207,1,0,0,0,201,203,5,46,0,0,202,204,3,38,18,0,203,202,1,0,0,
	0,204,205,1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,0,206,208,1,0,0,0,207,201,
	1,0,0,0,207,208,1,0,0,0,208,218,1,0,0,0,209,211,7,3,0,0,210,212,7,4,0,0,
	211,210,1,0,0,0,211,212,1,0,0,0,212,214,1,0,0,0,213,215,3,38,18,0,214,213,
	1,0,0,0,215,216,1,0,0,0,216,214,1,0,0,0,216,217,1,0,0,0,217,219,1,0,0,0,
	218,209,1,0,0,0,218,219,1,0,0,0,219,21,1,0,0,0,220,222,3,38,18,0,221,220,
	1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,226,1,0,0,0,
	225,223,1,0,0,0,226,228,5,46,0,0,227,229,3,38,18,0,228,227,1,0,0,0,229,
	230,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,241,1,0,0,0,232,234,7,3,
	0,0,233,235,7,4,0,0,234,233,1,0,0,0,234,235,1,0,0,0,235,237,1,0,0,0,236,
	238,3,38,18,0,237,236,1,0,0,0,238,239,1,0,0,0,239,237,1,0,0,0,239,240,1,
	0,0,0,240,242,1,0,0,0,241,232,1,0,0,0,241,242,1,0,0,0,242,23,1,0,0,0,243,
	246,3,20,9,0,244,246,3,22,10,0,245,243,1,0,0,0,245,244,1,0,0,0,246,25,1,
	0,0,0,247,248,3,38,18,0,248,249,3,38,18,0,249,250,3,38,18,0,250,251,3,38,
	18,0,251,252,7,5,0,0,252,253,3,38,18,0,253,254,3,38,18,0,254,255,7,5,0,
	0,255,256,3,38,18,0,256,257,3,38,18,0,257,27,1,0,0,0,258,259,3,38,18,0,
	259,260,3,38,18,0,260,261,5,58,0,0,261,262,3,38,18,0,262,263,3,38,18,0,
	263,264,5,58,0,0,264,265,3,38,18,0,265,271,3,38,18,0,266,267,5,46,0,0,267,
	268,3,38,18,0,268,269,3,38,18,0,269,270,3,38,18,0,270,272,1,0,0,0,271,266,
	1,0,0,0,271,272,1,0,0,0,272,274,1,0,0,0,273,275,5,90,0,0,274,273,1,0,0,
	0,274,275,1,0,0,0,275,29,1,0,0,0,276,278,5,35,0,0,277,279,3,26,12,0,278,
	277,1,0,0,0,278,279,1,0,0,0,279,280,1,0,0,0,280,281,5,35,0,0,281,31,1,0,
	0,0,282,284,5,35,0,0,283,285,3,28,13,0,284,283,1,0,0,0,284,285,1,0,0,0,
	285,286,1,0,0,0,286,287,5,35,0,0,287,33,1,0,0,0,288,289,5,35,0,0,289,290,
	3,26,12,0,290,291,7,6,0,0,291,292,3,28,13,0,292,293,5,35,0,0,293,35,1,0,
	0,0,294,295,7,7,0,0,295,37,1,0,0,0,296,297,7,8,0,0,297,39,1,0,0,0,298,299,
	3,42,20,0,299,300,3,110,54,0,300,301,3,50,24,0,301,41,1,0,0,0,302,303,7,
	9,0,0,303,304,7,10,0,0,304,305,7,11,0,0,305,43,1,0,0,0,306,307,3,48,23,
	0,307,308,3,110,54,0,308,309,3,52,25,0,309,45,1,0,0,0,310,311,3,48,23,0,
	311,312,3,110,54,0,312,313,3,42,20,0,313,314,3,110,54,0,314,315,3,52,25,
	0,315,47,1,0,0,0,316,317,7,12,0,0,317,318,7,13,0,0,318,49,1,0,0,0,319,320,
	7,12,0,0,320,321,7,9,0,0,321,51,1,0,0,0,322,323,7,9,0,0,323,324,7,14,0,
	0,324,325,7,15,0,0,325,326,7,15,0,0,326,53,1,0,0,0,327,328,7,10,0,0,328,
	329,7,16,0,0,329,55,1,0,0,0,330,331,7,17,0,0,331,332,7,9,0,0,332,333,7,
	18,0,0,333,57,1,0,0,0,334,335,3,56,27,0,335,336,3,110,54,0,336,337,3,42,
	20,0,337,59,1,0,0,0,338,339,7,15,0,0,339,340,7,12,0,0,340,341,7,19,0,0,
	341,342,7,3,0,0,342,61,1,0,0,0,343,344,3,42,20,0,344,345,3,110,54,0,345,
	346,3,60,29,0,346,63,1,0,0,0,347,348,5,124,0,0,348,349,5,124,0,0,349,65,
	1,0,0,0,350,353,5,64,0,0,351,354,3,36,17,0,352,354,5,95,0,0,353,351,1,0,
	0,0,353,352,1,0,0,0,354,360,1,0,0,0,355,359,3,36,17,0,356,359,3,38,18,0,
	357,359,5,95,0,0,358,355,1,0,0,0,358,356,1,0,0,0,358,357,1,0,0,0,359,362,
	1,0,0,0,360,358,1,0,0,0,360,361,1,0,0,0,361,67,1,0,0,0,362,360,1,0,0,0,
	363,366,3,36,17,0,364,366,5,95,0,0,365,363,1,0,0,0,365,364,1,0,0,0,366,
	372,1,0,0,0,367,371,3,36,17,0,368,371,3,38,18,0,369,371,5,95,0,0,370,367,
	1,0,0,0,370,368,1,0,0,0,370,369,1,0,0,0,371,374,1,0,0,0,372,370,1,0,0,0,
	372,373,1,0,0,0,373,69,1,0,0,0,374,372,1,0,0,0,375,376,5,36,0,0,376,71,
	1,0,0,0,377,378,5,60,0,0,378,73,1,0,0,0,379,380,5,62,0,0,380,75,1,0,0,0,
	381,382,5,60,0,0,382,383,5,61,0,0,383,77,1,0,0,0,384,385,5,62,0,0,385,386,
	5,61,0,0,386,79,1,0,0,0,387,388,5,61,0,0,388,81,1,0,0,0,389,390,5,61,0,
	0,390,391,5,61,0,0,391,83,1,0,0,0,392,393,5,33,0,0,393,394,5,61,0,0,394,
	85,1,0,0,0,395,396,5,60,0,0,396,397,5,62,0,0,397,87,1,0,0,0,398,399,5,43,
	0,0,399,89,1,0,0,0,400,401,5,45,0,0,401,91,1,0,0,0,402,403,5,42,0,0,403,
	93,1,0,0,0,404,405,5,47,0,0,405,95,1,0,0,0,406,407,5,38,0,0,407,97,1,0,
	0,0,408,409,5,124,0,0,409,99,1,0,0,0,410,411,5,37,0,0,411,101,1,0,0,0,412,
	413,5,33,0,0,413,103,1,0,0,0,414,415,5,44,0,0,415,105,1,0,0,0,416,417,5,
	58,0,0,417,107,1,0,0,0,418,419,5,46,0,0,419,109,1,0,0,0,420,422,7,20,0,
	0,421,420,1,0,0,0,422,423,1,0,0,0,423,421,1,0,0,0,423,424,1,0,0,0,424,425,
	1,0,0,0,425,426,6,54,0,0,426,111,1,0,0,0,427,428,5,91,0,0,428,429,1,0,0,
	0,429,430,6,55,1,0,430,113,1,0,0,0,431,432,5,91,0,0,432,433,1,0,0,0,433,
	434,6,56,1,0,434,115,1,0,0,0,435,436,5,93,0,0,436,437,1,0,0,0,437,438,6,
	57,2,0,438,117,1,0,0,0,439,441,3,38,18,0,440,439,1,0,0,0,441,442,1,0,0,
	0,442,440,1,0,0,0,442,443,1,0,0,0,443,119,1,0,0,0,444,450,5,34,0,0,445,
	446,5,34,0,0,446,449,5,34,0,0,447,449,8,21,0,0,448,445,1,0,0,0,448,447,
	1,0,0,0,449,452,1,0,0,0,450,448,1,0,0,0,450,451,1,0,0,0,451,453,1,0,0,0,
	452,450,1,0,0,0,453,465,5,34,0,0,454,460,5,39,0,0,455,456,5,39,0,0,456,
	459,5,39,0,0,457,459,8,22,0,0,458,455,1,0,0,0,458,457,1,0,0,0,459,462,1,
	0,0,0,460,458,1,0,0,0,460,461,1,0,0,0,461,463,1,0,0,0,462,460,1,0,0,0,463,
	465,5,39,0,0,464,444,1,0,0,0,464,454,1,0,0,0,465,121,1,0,0,0,466,469,3,
	36,17,0,467,469,5,95,0,0,468,466,1,0,0,0,468,467,1,0,0,0,469,475,1,0,0,
	0,470,474,3,36,17,0,471,474,3,38,18,0,472,474,7,23,0,0,473,470,1,0,0,0,
	473,471,1,0,0,0,473,472,1,0,0,0,474,477,1,0,0,0,475,473,1,0,0,0,475,476,
	1,0,0,0,476,123,1,0,0,0,477,475,1,0,0,0,478,479,5,47,0,0,479,125,1,0,0,
	0,480,481,5,58,0,0,481,127,1,0,0,0,482,483,5,46,0,0,483,484,5,46,0,0,484,
	129,1,0,0,0,485,486,5,46,0,0,486,131,1,0,0,0,487,488,5,64,0,0,488,133,1,
	0,0,0,489,490,5,61,0,0,490,135,1,0,0,0,42,0,1,141,145,155,167,173,181,185,
	190,199,205,207,211,216,218,223,230,234,239,241,245,271,274,278,284,353,
	358,360,365,370,372,423,442,448,450,458,460,464,468,473,475,3,6,0,0,5,1,
	0,4,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XtkLexer.__ATN) {
			XtkLexer.__ATN = new ATNDeserializer().deserialize(XtkLexer._serializedATN);
		}

		return XtkLexer.__ATN;
	}


	static DecisionsToDFA = XtkLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}