// Generated from XtkParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var XtkParserListener = require('./XtkParserListener').XtkParserListener;
var XtkParserVisitor = require('./XtkParserVisitor').XtkParserVisitor;

var grammarFileName = "XtkParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00038\u00e6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003<\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003C\n\u0003\u0007\u0003E\n\u0003\f\u0003",
    "\u000e\u0003H\u000b\u0003\u0003\u0003\u0005\u0003K\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005R\n\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "Y\n\u0006\f\u0006\u000e\u0006\\\u000b\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007a\n\u0007\f\u0007\u000e\u0007d\u000b\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u0081",
    "\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f",
    "\u0087\n\u000f\u0003\u0010\u0005\u0010\u008a\n\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0007\u0010\u008f\n\u0010\f\u0010\u000e\u0010\u0092",
    "\u000b\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0096\n\u0010\u0003",
    "\u0010\u0005\u0010\u0099\n\u0010\u0003\u0011\u0005\u0011\u009c\n\u0011",
    "\u0003\u0011\u0003\u0011\u0007\u0011\u00a0\n\u0011\f\u0011\u000e\u0011",
    "\u00a3\u000b\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00a7\n\u0011",
    "\u0003\u0012\u0003\u0012\u0007\u0012\u00ab\n\u0012\f\u0012\u000e\u0012",
    "\u00ae\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u00bb\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0007\u0015\u00c0\n\u0015\f\u0015\u000e\u0015\u00c3\u000b\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u00c8\n\u0016\f\u0016\u000e",
    "\u0016\u00cb\u000b\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u00da\n\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0005\u0018\u00e4\n\u0018\u0003\u0018\u0002\u0002",
    "\u0019\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"$&(*,.\u0002\u000b\u0003\u0002\u0013\u0015\u0004\u0002",
    "#$\'(\u0004\u0002%&))\u0003\u0002\u001b\"\u0003\u0002\u000e\u000f\u0003",
    "\u0002\u0016\u0017\u0004\u0002\f\f\u0011\u0011\u0003\u0002\u0018\u0019",
    "\u0004\u00020022\u0002\u00f6\u00020\u0003\u0002\u0002\u0002\u0004J\u0003",
    "\u0002\u0002\u0002\u0006L\u0003\u0002\u0002\u0002\bN\u0003\u0002\u0002",
    "\u0002\nU\u0003\u0002\u0002\u0002\f]\u0003\u0002\u0002\u0002\u000ee",
    "\u0003\u0002\u0002\u0002\u0010g\u0003\u0002\u0002\u0002\u0012k\u0003",
    "\u0002\u0002\u0002\u0014m\u0003\u0002\u0002\u0002\u0016p\u0003\u0002",
    "\u0002\u0002\u0018r\u0003\u0002\u0002\u0002\u001av\u0003\u0002\u0002",
    "\u0002\u001c\u0086\u0003\u0002\u0002\u0002\u001e\u0089\u0003\u0002\u0002",
    "\u0002 \u00a6\u0003\u0002\u0002\u0002\"\u00ac\u0003\u0002\u0002\u0002",
    "$\u00b1\u0003\u0002\u0002\u0002&\u00ba\u0003\u0002\u0002\u0002(\u00bc",
    "\u0003\u0002\u0002\u0002*\u00c9\u0003\u0002\u0002\u0002,\u00d9\u0003",
    "\u0002\u0002\u0002.\u00e3\u0003\u0002\u0002\u000201\u0005\u0004\u0003",
    "\u000212\u0007\u0002\u0002\u00032\u0003\u0003\u0002\u0002\u00023K\u0005",
    "\u001c\u000f\u00024K\u0005,\u0017\u00025K\u0007\u001a\u0002\u000267",
    "\u0007*\u0002\u00027K\u0005\u0004\u0003\u00028<\u0005\u0010\t\u0002",
    "9<\u0005\u0014\u000b\u0002:<\u0005\u0018\r\u0002;8\u0003\u0002\u0002",
    "\u0002;9\u0003\u0002\u0002\u0002;:\u0003\u0002\u0002\u0002<F\u0003\u0002",
    "\u0002\u0002=B\u0005\u0006\u0004\u0002>C\u0005\u0010\t\u0002?C\u0005",
    "\u0014\u000b\u0002@C\u0005\u0018\r\u0002AC\u0005\u001a\u000e\u0002B",
    ">\u0003\u0002\u0002\u0002B?\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002",
    "\u0002BA\u0003\u0002\u0002\u0002CE\u0003\u0002\u0002\u0002D=\u0003\u0002",
    "\u0002\u0002EH\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002FG\u0003",
    "\u0002\u0002\u0002GK\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002\u0002",
    "IK\u0005\n\u0006\u0002J3\u0003\u0002\u0002\u0002J4\u0003\u0002\u0002",
    "\u0002J5\u0003\u0002\u0002\u0002J6\u0003\u0002\u0002\u0002J;\u0003\u0002",
    "\u0002\u0002JI\u0003\u0002\u0002\u0002K\u0005\u0003\u0002\u0002\u0002",
    "LM\t\u0002\u0002\u0002M\u0007\u0003\u0002\u0002\u0002NO\u0007\u0019",
    "\u0002\u0002OQ\u0007\u0006\u0002\u0002PR\u0005*\u0016\u0002QP\u0003",
    "\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002",
    "ST\u0007\u0007\u0002\u0002T\t\u0003\u0002\u0002\u0002UZ\u0005\f\u0007",
    "\u0002VW\t\u0003\u0002\u0002WY\u0005\f\u0007\u0002XV\u0003\u0002\u0002",
    "\u0002Y\\\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002Z[\u0003",
    "\u0002\u0002\u0002[\u000b\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002",
    "\u0002]b\u0005.\u0018\u0002^_\t\u0004\u0002\u0002_a\u0005.\u0018\u0002",
    "`^\u0003\u0002\u0002\u0002ad\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002",
    "\u0002bc\u0003\u0002\u0002\u0002c\r\u0003\u0002\u0002\u0002db\u0003",
    "\u0002\u0002\u0002ef\t\u0005\u0002\u0002f\u000f\u0003\u0002\u0002\u0002",
    "gh\u0005\n\u0006\u0002hi\u0005\u000e\b\u0002ij\u0005\n\u0006\u0002j",
    "\u0011\u0003\u0002\u0002\u0002kl\t\u0006\u0002\u0002l\u0013\u0003\u0002",
    "\u0002\u0002mn\u0005\n\u0006\u0002no\u0005\u0012\n\u0002o\u0015\u0003",
    "\u0002\u0002\u0002pq\t\u0007\u0002\u0002q\u0017\u0003\u0002\u0002\u0002",
    "rs\u0005\n\u0006\u0002st\u0005\u0016\f\u0002tu\u0005\n\u0006\u0002u",
    "\u0019\u0003\u0002\u0002\u0002vw\u0005\n\u0006\u0002wx\t\b\u0002\u0002",
    "xy\u0007\u0006\u0002\u0002yz\u0005(\u0015\u0002z{\u0007\u0007\u0002",
    "\u0002{\u001b\u0003\u0002\u0002\u0002|\u0080\t\t\u0002\u0002}~\u0007",
    "-\u0002\u0002~\u007f\u00070\u0002\u0002\u007f\u0081\u0007/\u0002\u0002",
    "\u0080}\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002",
    "\u0081\u0087\u0003\u0002\u0002\u0002\u0082\u0083\u0007-\u0002\u0002",
    "\u0083\u0084\u0005\u001e\u0010\u0002\u0084\u0085\u0007/\u0002\u0002",
    "\u0085\u0087\u0003\u0002\u0002\u0002\u0086|\u0003\u0002\u0002\u0002",
    "\u0086\u0082\u0003\u0002\u0002\u0002\u0087\u001d\u0003\u0002\u0002\u0002",
    "\u0088\u008a\u00073\u0002\u0002\u0089\u0088\u0003\u0002\u0002\u0002",
    "\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002",
    "\u008b\u0090\u0005 \u0011\u0002\u008c\u008d\u00073\u0002\u0002\u008d",
    "\u008f\u0005 \u0011\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008f",
    "\u0092\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0090",
    "\u0091\u0003\u0002\u0002\u0002\u0091\u0098\u0003\u0002\u0002\u0002\u0092",
    "\u0090\u0003\u0002\u0002\u0002\u0093\u0095\u00074\u0002\u0002\u0094",
    "\u0096\u00077\u0002\u0002\u0095\u0094\u0003\u0002\u0002\u0002\u0095",
    "\u0096\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097",
    "\u0099\u0005\"\u0012\u0002\u0098\u0093\u0003\u0002\u0002\u0002\u0098",
    "\u0099\u0003\u0002\u0002\u0002\u0099\u001f\u0003\u0002\u0002\u0002\u009a",
    "\u009c\u00077\u0002\u0002\u009b\u009a\u0003\u0002\u0002\u0002\u009b",
    "\u009c\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d",
    "\u00a1\u0005\"\u0012\u0002\u009e\u00a0\u0005$\u0013\u0002\u009f\u009e",
    "\u0003\u0002\u0002\u0002\u00a0\u00a3\u0003\u0002\u0002\u0002\u00a1\u009f",
    "\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a7",
    "\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a4\u00a7",
    "\u00076\u0002\u0002\u00a5\u00a7\u00075\u0002\u0002\u00a6\u009b\u0003",
    "\u0002\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a5\u0003",
    "\u0002\u0002\u0002\u00a7!\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007",
    "2\u0002\u0002\u00a9\u00ab\u00074\u0002\u0002\u00aa\u00a8\u0003\u0002",
    "\u0002\u0002\u00ab\u00ae\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003\u0002",
    "\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00af\u0003\u0002",
    "\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00af\u00b0\t\n\u0002",
    "\u0002\u00b0#\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007.\u0002\u0002",
    "\u00b2\u00b3\u0005&\u0014\u0002\u00b3\u00b4\u0007/\u0002\u0002\u00b4",
    "%\u0003\u0002\u0002\u0002\u00b5\u00bb\u00070\u0002\u0002\u00b6\u00b7",
    "\u0005\u001e\u0010\u0002\u00b7\u00b8\u00078\u0002\u0002\u00b8\u00b9",
    "\u00071\u0002\u0002\u00b9\u00bb\u0003\u0002\u0002\u0002\u00ba\u00b5",
    "\u0003\u0002\u0002\u0002\u00ba\u00b6\u0003\u0002\u0002\u0002\u00bb\'",
    "\u0003\u0002\u0002\u0002\u00bc\u00c1\u0005\u0004\u0003\u0002\u00bd\u00be",
    "\u0007+\u0002\u0002\u00be\u00c0\u0005\u0004\u0003\u0002\u00bf\u00bd",
    "\u0003\u0002\u0002\u0002\u00c0\u00c3\u0003\u0002\u0002\u0002\u00c1\u00bf",
    "\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2)",
    "\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c5",
    "\u0005\u0004\u0003\u0002\u00c5\u00c6\u0007+\u0002\u0002\u00c6\u00c8",
    "\u0003\u0002\u0002\u0002\u00c7\u00c4\u0003\u0002\u0002\u0002\u00c8\u00cb",
    "\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00c9\u00ca",
    "\u0003\u0002\u0002\u0002\u00ca\u00cc\u0003\u0002\u0002\u0002\u00cb\u00c9",
    "\u0003\u0002\u0002\u0002\u00cc\u00cd\u0005\u0004\u0003\u0002\u00cd+",
    "\u0003\u0002\u0002\u0002\u00ce\u00da\u0007\u0003\u0002\u0002\u00cf\u00da",
    "\u0007\u0004\u0002\u0002\u00d0\u00d1\u0007$\u0002\u0002\u00d1\u00da",
    "\u0007\u0004\u0002\u0002\u00d2\u00da\u0007\b\u0002\u0002\u00d3\u00d4",
    "\u0007$\u0002\u0002\u00d4\u00da\u0007\b\u0002\u0002\u00d5\u00da\u0007",
    "\u0005\u0002\u0002\u00d6\u00da\u0007\t\u0002\u0002\u00d7\u00da\u0007",
    "\n\u0002\u0002\u00d8\u00da\u0007\u000b\u0002\u0002\u00d9\u00ce\u0003",
    "\u0002\u0002\u0002\u00d9\u00cf\u0003\u0002\u0002\u0002\u00d9\u00d0\u0003",
    "\u0002\u0002\u0002\u00d9\u00d2\u0003\u0002\u0002\u0002\u00d9\u00d3\u0003",
    "\u0002\u0002\u0002\u00d9\u00d5\u0003\u0002\u0002\u0002\u00d9\u00d6\u0003",
    "\u0002\u0002\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9\u00d8\u0003",
    "\u0002\u0002\u0002\u00da-\u0003\u0002\u0002\u0002\u00db\u00e4\u0005",
    ",\u0017\u0002\u00dc\u00e4\u0005\b\u0005\u0002\u00dd\u00e4\u0005\u001c",
    "\u000f\u0002\u00de\u00e4\u0007\u001a\u0002\u0002\u00df\u00e0\u0007\u0006",
    "\u0002\u0002\u00e0\u00e1\u0005\n\u0006\u0002\u00e1\u00e2\u0007\u0007",
    "\u0002\u0002\u00e2\u00e4\u0003\u0002\u0002\u0002\u00e3\u00db\u0003\u0002",
    "\u0002\u0002\u00e3\u00dc\u0003\u0002\u0002\u0002\u00e3\u00dd\u0003\u0002",
    "\u0002\u0002\u00e3\u00de\u0003\u0002\u0002\u0002\u00e3\u00df\u0003\u0002",
    "\u0002\u0002\u00e4/\u0003\u0002\u0002\u0002\u0018;BFJQZb\u0080\u0086",
    "\u0089\u0090\u0095\u0098\u009b\u00a1\u00a6\u00ac\u00ba\u00c1\u00c9\u00d9",
    "\u00e3"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, "'('", "')'", null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, "'<'", "'>'", 
                     "'<='", "'>='", null, "'=='", "'!='", "'<>'", "'+'", 
                     "'-'", "'*'", null, "'&'", "'|'", "'%'", "'!'", "','", 
                     null, null, null, "']'", null, null, null, null, "':'", 
                     "'..'", "'.'", "'@'" ];

var symbolicNames = [ null, "STRING", "INT", "BOOLEAN", "PAR_OPEN", "PAR_CLOSE", 
                      "DOUBLE", "DATE", "TIME", "DATETIME", "NOT_IN", "NOT", 
                      "IS_NULL", "IS_NOT_NULL", "IS", "IN", "NULL", "OR", 
                      "AND", "AND_NOT", "LIKE", "NOT_LIKE", "ATTRIBUTE", 
                      "IDENTIFIER", "VARIABLE", "LT", "GT", "LE", "GE", 
                      "EQ", "EQ_2", "NEQ", "NEQ_2", "PLUS", "MINUS", "TIMES", 
                      "DIV", "AMP", "PIPE", "PERCENT", "EXCLAMATION", "COMMA", 
                      "WS", "BRAC_OPEN", "X_BRAC_OPEN", "X_BRAC_CLOSE", 
                      "X_INT", "X_STRING", "X_NCNAME", "X_SEP", "X_COLON", 
                      "X_PARENT", "X_CURRENT", "X_ATTR", "X_EQ" ];

var ruleNames =  [ "unit", "expression", "logicalOperator", "functionCall", 
                   "addingExpression", "multiplyingExpression", "comparisonOperator", 
                   "relationalExpression", "unaryOperator", "unaryExpression", 
                   "likeOperator", "likeExpression", "includedInExpression", 
                   "xpath", "xpath_locationPath", "xpath_step", "xpath_qname", 
                   "xpath_predicate", "xpath_expr", "list", "parameters", 
                   "literal", "computableAtom" ];

function XtkParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

XtkParser.prototype = Object.create(antlr4.Parser.prototype);
XtkParser.prototype.constructor = XtkParser;

Object.defineProperty(XtkParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

XtkParser.EOF = antlr4.Token.EOF;
XtkParser.STRING = 1;
XtkParser.INT = 2;
XtkParser.BOOLEAN = 3;
XtkParser.PAR_OPEN = 4;
XtkParser.PAR_CLOSE = 5;
XtkParser.DOUBLE = 6;
XtkParser.DATE = 7;
XtkParser.TIME = 8;
XtkParser.DATETIME = 9;
XtkParser.NOT_IN = 10;
XtkParser.NOT = 11;
XtkParser.IS_NULL = 12;
XtkParser.IS_NOT_NULL = 13;
XtkParser.IS = 14;
XtkParser.IN = 15;
XtkParser.NULL = 16;
XtkParser.OR = 17;
XtkParser.AND = 18;
XtkParser.AND_NOT = 19;
XtkParser.LIKE = 20;
XtkParser.NOT_LIKE = 21;
XtkParser.ATTRIBUTE = 22;
XtkParser.IDENTIFIER = 23;
XtkParser.VARIABLE = 24;
XtkParser.LT = 25;
XtkParser.GT = 26;
XtkParser.LE = 27;
XtkParser.GE = 28;
XtkParser.EQ = 29;
XtkParser.EQ_2 = 30;
XtkParser.NEQ = 31;
XtkParser.NEQ_2 = 32;
XtkParser.PLUS = 33;
XtkParser.MINUS = 34;
XtkParser.TIMES = 35;
XtkParser.DIV = 36;
XtkParser.AMP = 37;
XtkParser.PIPE = 38;
XtkParser.PERCENT = 39;
XtkParser.EXCLAMATION = 40;
XtkParser.COMMA = 41;
XtkParser.WS = 42;
XtkParser.BRAC_OPEN = 43;
XtkParser.X_BRAC_OPEN = 44;
XtkParser.X_BRAC_CLOSE = 45;
XtkParser.X_INT = 46;
XtkParser.X_STRING = 47;
XtkParser.X_NCNAME = 48;
XtkParser.X_SEP = 49;
XtkParser.X_COLON = 50;
XtkParser.X_PARENT = 51;
XtkParser.X_CURRENT = 52;
XtkParser.X_ATTR = 53;
XtkParser.X_EQ = 54;

XtkParser.RULE_unit = 0;
XtkParser.RULE_expression = 1;
XtkParser.RULE_logicalOperator = 2;
XtkParser.RULE_functionCall = 3;
XtkParser.RULE_addingExpression = 4;
XtkParser.RULE_multiplyingExpression = 5;
XtkParser.RULE_comparisonOperator = 6;
XtkParser.RULE_relationalExpression = 7;
XtkParser.RULE_unaryOperator = 8;
XtkParser.RULE_unaryExpression = 9;
XtkParser.RULE_likeOperator = 10;
XtkParser.RULE_likeExpression = 11;
XtkParser.RULE_includedInExpression = 12;
XtkParser.RULE_xpath = 13;
XtkParser.RULE_xpath_locationPath = 14;
XtkParser.RULE_xpath_step = 15;
XtkParser.RULE_xpath_qname = 16;
XtkParser.RULE_xpath_predicate = 17;
XtkParser.RULE_xpath_expr = 18;
XtkParser.RULE_list = 19;
XtkParser.RULE_parameters = 20;
XtkParser.RULE_literal = 21;
XtkParser.RULE_computableAtom = 22;


function UnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_unit;
    return this;
}

UnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnitContext.prototype.constructor = UnitContext;

UnitContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

UnitContext.prototype.EOF = function() {
    return this.getToken(XtkParser.EOF, 0);
};

UnitContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterUnit(this);
	}
};

UnitContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitUnit(this);
	}
};

UnitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitUnit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.UnitContext = UnitContext;

XtkParser.prototype.unit = function() {

    var localctx = new UnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, XtkParser.RULE_unit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.expression();
        this.state = 47;
        this.match(XtkParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.xpath = function() {
    return this.getTypedRuleContext(XpathContext,0);
};

ExpressionContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ExpressionContext.prototype.VARIABLE = function() {
    return this.getToken(XtkParser.VARIABLE, 0);
};

ExpressionContext.prototype.EXCLAMATION = function() {
    return this.getToken(XtkParser.EXCLAMATION, 0);
};

ExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionContext.prototype.relationalExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RelationalExpressionContext);
    } else {
        return this.getTypedRuleContext(RelationalExpressionContext,i);
    }
};

ExpressionContext.prototype.unaryExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UnaryExpressionContext);
    } else {
        return this.getTypedRuleContext(UnaryExpressionContext,i);
    }
};

ExpressionContext.prototype.likeExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LikeExpressionContext);
    } else {
        return this.getTypedRuleContext(LikeExpressionContext,i);
    }
};

ExpressionContext.prototype.logicalOperator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LogicalOperatorContext);
    } else {
        return this.getTypedRuleContext(LogicalOperatorContext,i);
    }
};

ExpressionContext.prototype.includedInExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncludedInExpressionContext);
    } else {
        return this.getTypedRuleContext(IncludedInExpressionContext,i);
    }
};

ExpressionContext.prototype.addingExpression = function() {
    return this.getTypedRuleContext(AddingExpressionContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.ExpressionContext = ExpressionContext;

XtkParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, XtkParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.state = 72;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 49;
            this.xpath();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 50;
            this.literal();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 51;
            this.match(XtkParser.VARIABLE);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 52;
            this.match(XtkParser.EXCLAMATION);
            this.state = 53;
            this.expression();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 57;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 54;
                this.relationalExpression();
                break;

            case 2:
                this.state = 55;
                this.unaryExpression();
                break;

            case 3:
                this.state = 56;
                this.likeExpression();
                break;

            }
            this.state = 68;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << XtkParser.OR) | (1 << XtkParser.AND) | (1 << XtkParser.AND_NOT))) !== 0)) {
                this.state = 59;
                this.logicalOperator();
                this.state = 64;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 60;
                    this.relationalExpression();
                    break;

                case 2:
                    this.state = 61;
                    this.unaryExpression();
                    break;

                case 3:
                    this.state = 62;
                    this.likeExpression();
                    break;

                case 4:
                    this.state = 63;
                    this.includedInExpression();
                    break;

                }
                this.state = 70;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 71;
            this.addingExpression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LogicalOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_logicalOperator;
    return this;
}

LogicalOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicalOperatorContext.prototype.constructor = LogicalOperatorContext;

LogicalOperatorContext.prototype.OR = function() {
    return this.getToken(XtkParser.OR, 0);
};

LogicalOperatorContext.prototype.AND = function() {
    return this.getToken(XtkParser.AND, 0);
};

LogicalOperatorContext.prototype.AND_NOT = function() {
    return this.getToken(XtkParser.AND_NOT, 0);
};

LogicalOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterLogicalOperator(this);
	}
};

LogicalOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitLogicalOperator(this);
	}
};

LogicalOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitLogicalOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.LogicalOperatorContext = LogicalOperatorContext;

XtkParser.prototype.logicalOperator = function() {

    var localctx = new LogicalOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, XtkParser.RULE_logicalOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << XtkParser.OR) | (1 << XtkParser.AND) | (1 << XtkParser.AND_NOT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.IDENTIFIER = function() {
    return this.getToken(XtkParser.IDENTIFIER, 0);
};

FunctionCallContext.prototype.PAR_OPEN = function() {
    return this.getToken(XtkParser.PAR_OPEN, 0);
};

FunctionCallContext.prototype.PAR_CLOSE = function() {
    return this.getToken(XtkParser.PAR_CLOSE, 0);
};

FunctionCallContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitFunctionCall(this);
	}
};

FunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.FunctionCallContext = FunctionCallContext;

XtkParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, XtkParser.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.match(XtkParser.IDENTIFIER);
        this.state = 77;
        this.match(XtkParser.PAR_OPEN);
        this.state = 79;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << XtkParser.STRING) | (1 << XtkParser.INT) | (1 << XtkParser.BOOLEAN) | (1 << XtkParser.PAR_OPEN) | (1 << XtkParser.DOUBLE) | (1 << XtkParser.DATE) | (1 << XtkParser.TIME) | (1 << XtkParser.DATETIME) | (1 << XtkParser.ATTRIBUTE) | (1 << XtkParser.IDENTIFIER) | (1 << XtkParser.VARIABLE))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (XtkParser.MINUS - 34)) | (1 << (XtkParser.EXCLAMATION - 34)) | (1 << (XtkParser.BRAC_OPEN - 34)))) !== 0)) {
            this.state = 78;
            this.parameters();
        }

        this.state = 81;
        this.match(XtkParser.PAR_CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AddingExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_addingExpression;
    return this;
}

AddingExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddingExpressionContext.prototype.constructor = AddingExpressionContext;

AddingExpressionContext.prototype.multiplyingExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MultiplyingExpressionContext);
    } else {
        return this.getTypedRuleContext(MultiplyingExpressionContext,i);
    }
};

AddingExpressionContext.prototype.PLUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XtkParser.PLUS);
    } else {
        return this.getToken(XtkParser.PLUS, i);
    }
};


AddingExpressionContext.prototype.MINUS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XtkParser.MINUS);
    } else {
        return this.getToken(XtkParser.MINUS, i);
    }
};


AddingExpressionContext.prototype.AMP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XtkParser.AMP);
    } else {
        return this.getToken(XtkParser.AMP, i);
    }
};


AddingExpressionContext.prototype.PIPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XtkParser.PIPE);
    } else {
        return this.getToken(XtkParser.PIPE, i);
    }
};


AddingExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterAddingExpression(this);
	}
};

AddingExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitAddingExpression(this);
	}
};

AddingExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitAddingExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.AddingExpressionContext = AddingExpressionContext;

XtkParser.prototype.addingExpression = function() {

    var localctx = new AddingExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, XtkParser.RULE_addingExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.multiplyingExpression();
        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (XtkParser.PLUS - 33)) | (1 << (XtkParser.MINUS - 33)) | (1 << (XtkParser.AMP - 33)) | (1 << (XtkParser.PIPE - 33)))) !== 0)) {
            this.state = 84;
            _la = this._input.LA(1);
            if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (XtkParser.PLUS - 33)) | (1 << (XtkParser.MINUS - 33)) | (1 << (XtkParser.AMP - 33)) | (1 << (XtkParser.PIPE - 33)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 85;
            this.multiplyingExpression();
            this.state = 90;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultiplyingExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_multiplyingExpression;
    return this;
}

MultiplyingExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplyingExpressionContext.prototype.constructor = MultiplyingExpressionContext;

MultiplyingExpressionContext.prototype.computableAtom = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComputableAtomContext);
    } else {
        return this.getTypedRuleContext(ComputableAtomContext,i);
    }
};

MultiplyingExpressionContext.prototype.TIMES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XtkParser.TIMES);
    } else {
        return this.getToken(XtkParser.TIMES, i);
    }
};


MultiplyingExpressionContext.prototype.DIV = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XtkParser.DIV);
    } else {
        return this.getToken(XtkParser.DIV, i);
    }
};


MultiplyingExpressionContext.prototype.PERCENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XtkParser.PERCENT);
    } else {
        return this.getToken(XtkParser.PERCENT, i);
    }
};


MultiplyingExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterMultiplyingExpression(this);
	}
};

MultiplyingExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitMultiplyingExpression(this);
	}
};

MultiplyingExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitMultiplyingExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.MultiplyingExpressionContext = MultiplyingExpressionContext;

XtkParser.prototype.multiplyingExpression = function() {

    var localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, XtkParser.RULE_multiplyingExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.computableAtom();
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (XtkParser.TIMES - 35)) | (1 << (XtkParser.DIV - 35)) | (1 << (XtkParser.PERCENT - 35)))) !== 0)) {
            this.state = 92;
            _la = this._input.LA(1);
            if(!(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (XtkParser.TIMES - 35)) | (1 << (XtkParser.DIV - 35)) | (1 << (XtkParser.PERCENT - 35)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 93;
            this.computableAtom();
            this.state = 98;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ComparisonOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_comparisonOperator;
    return this;
}

ComparisonOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparisonOperatorContext.prototype.constructor = ComparisonOperatorContext;

ComparisonOperatorContext.prototype.LT = function() {
    return this.getToken(XtkParser.LT, 0);
};

ComparisonOperatorContext.prototype.LE = function() {
    return this.getToken(XtkParser.LE, 0);
};

ComparisonOperatorContext.prototype.GT = function() {
    return this.getToken(XtkParser.GT, 0);
};

ComparisonOperatorContext.prototype.GE = function() {
    return this.getToken(XtkParser.GE, 0);
};

ComparisonOperatorContext.prototype.EQ = function() {
    return this.getToken(XtkParser.EQ, 0);
};

ComparisonOperatorContext.prototype.EQ_2 = function() {
    return this.getToken(XtkParser.EQ_2, 0);
};

ComparisonOperatorContext.prototype.NEQ = function() {
    return this.getToken(XtkParser.NEQ, 0);
};

ComparisonOperatorContext.prototype.NEQ_2 = function() {
    return this.getToken(XtkParser.NEQ_2, 0);
};

ComparisonOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterComparisonOperator(this);
	}
};

ComparisonOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitComparisonOperator(this);
	}
};

ComparisonOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitComparisonOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.ComparisonOperatorContext = ComparisonOperatorContext;

XtkParser.prototype.comparisonOperator = function() {

    var localctx = new ComparisonOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, XtkParser.RULE_comparisonOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        _la = this._input.LA(1);
        if(!(((((_la - 25)) & ~0x1f) == 0 && ((1 << (_la - 25)) & ((1 << (XtkParser.LT - 25)) | (1 << (XtkParser.GT - 25)) | (1 << (XtkParser.LE - 25)) | (1 << (XtkParser.GE - 25)) | (1 << (XtkParser.EQ - 25)) | (1 << (XtkParser.EQ_2 - 25)) | (1 << (XtkParser.NEQ - 25)) | (1 << (XtkParser.NEQ_2 - 25)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RelationalExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_relationalExpression;
    return this;
}

RelationalExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelationalExpressionContext.prototype.constructor = RelationalExpressionContext;

RelationalExpressionContext.prototype.addingExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AddingExpressionContext);
    } else {
        return this.getTypedRuleContext(AddingExpressionContext,i);
    }
};

RelationalExpressionContext.prototype.comparisonOperator = function() {
    return this.getTypedRuleContext(ComparisonOperatorContext,0);
};

RelationalExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterRelationalExpression(this);
	}
};

RelationalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitRelationalExpression(this);
	}
};

RelationalExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitRelationalExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.RelationalExpressionContext = RelationalExpressionContext;

XtkParser.prototype.relationalExpression = function() {

    var localctx = new RelationalExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, XtkParser.RULE_relationalExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.addingExpression();
        this.state = 102;
        this.comparisonOperator();
        this.state = 103;
        this.addingExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UnaryOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_unaryOperator;
    return this;
}

UnaryOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryOperatorContext.prototype.constructor = UnaryOperatorContext;

UnaryOperatorContext.prototype.IS_NULL = function() {
    return this.getToken(XtkParser.IS_NULL, 0);
};

UnaryOperatorContext.prototype.IS_NOT_NULL = function() {
    return this.getToken(XtkParser.IS_NOT_NULL, 0);
};

UnaryOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterUnaryOperator(this);
	}
};

UnaryOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitUnaryOperator(this);
	}
};

UnaryOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitUnaryOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.UnaryOperatorContext = UnaryOperatorContext;

XtkParser.prototype.unaryOperator = function() {

    var localctx = new UnaryOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, XtkParser.RULE_unaryOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        _la = this._input.LA(1);
        if(!(_la===XtkParser.IS_NULL || _la===XtkParser.IS_NOT_NULL)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UnaryExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_unaryExpression;
    return this;
}

UnaryExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryExpressionContext.prototype.constructor = UnaryExpressionContext;

UnaryExpressionContext.prototype.addingExpression = function() {
    return this.getTypedRuleContext(AddingExpressionContext,0);
};

UnaryExpressionContext.prototype.unaryOperator = function() {
    return this.getTypedRuleContext(UnaryOperatorContext,0);
};

UnaryExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterUnaryExpression(this);
	}
};

UnaryExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitUnaryExpression(this);
	}
};

UnaryExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitUnaryExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.UnaryExpressionContext = UnaryExpressionContext;

XtkParser.prototype.unaryExpression = function() {

    var localctx = new UnaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, XtkParser.RULE_unaryExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.addingExpression();
        this.state = 108;
        this.unaryOperator();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LikeOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_likeOperator;
    return this;
}

LikeOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LikeOperatorContext.prototype.constructor = LikeOperatorContext;

LikeOperatorContext.prototype.LIKE = function() {
    return this.getToken(XtkParser.LIKE, 0);
};

LikeOperatorContext.prototype.NOT_LIKE = function() {
    return this.getToken(XtkParser.NOT_LIKE, 0);
};

LikeOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterLikeOperator(this);
	}
};

LikeOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitLikeOperator(this);
	}
};

LikeOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitLikeOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.LikeOperatorContext = LikeOperatorContext;

XtkParser.prototype.likeOperator = function() {

    var localctx = new LikeOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, XtkParser.RULE_likeOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        _la = this._input.LA(1);
        if(!(_la===XtkParser.LIKE || _la===XtkParser.NOT_LIKE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LikeExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_likeExpression;
    return this;
}

LikeExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LikeExpressionContext.prototype.constructor = LikeExpressionContext;

LikeExpressionContext.prototype.addingExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AddingExpressionContext);
    } else {
        return this.getTypedRuleContext(AddingExpressionContext,i);
    }
};

LikeExpressionContext.prototype.likeOperator = function() {
    return this.getTypedRuleContext(LikeOperatorContext,0);
};

LikeExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterLikeExpression(this);
	}
};

LikeExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitLikeExpression(this);
	}
};

LikeExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitLikeExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.LikeExpressionContext = LikeExpressionContext;

XtkParser.prototype.likeExpression = function() {

    var localctx = new LikeExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, XtkParser.RULE_likeExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.addingExpression();
        this.state = 113;
        this.likeOperator();
        this.state = 114;
        this.addingExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IncludedInExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_includedInExpression;
    return this;
}

IncludedInExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludedInExpressionContext.prototype.constructor = IncludedInExpressionContext;

IncludedInExpressionContext.prototype.addingExpression = function() {
    return this.getTypedRuleContext(AddingExpressionContext,0);
};

IncludedInExpressionContext.prototype.PAR_OPEN = function() {
    return this.getToken(XtkParser.PAR_OPEN, 0);
};

IncludedInExpressionContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

IncludedInExpressionContext.prototype.PAR_CLOSE = function() {
    return this.getToken(XtkParser.PAR_CLOSE, 0);
};

IncludedInExpressionContext.prototype.IN = function() {
    return this.getToken(XtkParser.IN, 0);
};

IncludedInExpressionContext.prototype.NOT_IN = function() {
    return this.getToken(XtkParser.NOT_IN, 0);
};

IncludedInExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterIncludedInExpression(this);
	}
};

IncludedInExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitIncludedInExpression(this);
	}
};

IncludedInExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitIncludedInExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.IncludedInExpressionContext = IncludedInExpressionContext;

XtkParser.prototype.includedInExpression = function() {

    var localctx = new IncludedInExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, XtkParser.RULE_includedInExpression);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.addingExpression();
        this.state = 117;
        _la = this._input.LA(1);
        if(!(_la===XtkParser.NOT_IN || _la===XtkParser.IN)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 118;
        this.match(XtkParser.PAR_OPEN);
        this.state = 119;
        this.list();
        this.state = 120;
        this.match(XtkParser.PAR_CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function XpathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_xpath;
    return this;
}

XpathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
XpathContext.prototype.constructor = XpathContext;

XpathContext.prototype.ATTRIBUTE = function() {
    return this.getToken(XtkParser.ATTRIBUTE, 0);
};

XpathContext.prototype.IDENTIFIER = function() {
    return this.getToken(XtkParser.IDENTIFIER, 0);
};

XpathContext.prototype.BRAC_OPEN = function() {
    return this.getToken(XtkParser.BRAC_OPEN, 0);
};

XpathContext.prototype.X_INT = function() {
    return this.getToken(XtkParser.X_INT, 0);
};

XpathContext.prototype.X_BRAC_CLOSE = function() {
    return this.getToken(XtkParser.X_BRAC_CLOSE, 0);
};

XpathContext.prototype.xpath_locationPath = function() {
    return this.getTypedRuleContext(Xpath_locationPathContext,0);
};

XpathContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterXpath(this);
	}
};

XpathContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitXpath(this);
	}
};

XpathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitXpath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.XpathContext = XpathContext;

XtkParser.prototype.xpath = function() {

    var localctx = new XpathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, XtkParser.RULE_xpath);
    var _la = 0; // Token type
    try {
        this.state = 132;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case XtkParser.ATTRIBUTE:
        case XtkParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 122;
            _la = this._input.LA(1);
            if(!(_la===XtkParser.ATTRIBUTE || _la===XtkParser.IDENTIFIER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 126;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===XtkParser.BRAC_OPEN) {
                this.state = 123;
                this.match(XtkParser.BRAC_OPEN);
                this.state = 124;
                this.match(XtkParser.X_INT);
                this.state = 125;
                this.match(XtkParser.X_BRAC_CLOSE);
            }

            break;
        case XtkParser.BRAC_OPEN:
            this.enterOuterAlt(localctx, 2);
            this.state = 128;
            this.match(XtkParser.BRAC_OPEN);
            this.state = 129;
            this.xpath_locationPath();
            this.state = 130;
            this.match(XtkParser.X_BRAC_CLOSE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Xpath_locationPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_xpath_locationPath;
    return this;
}

Xpath_locationPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Xpath_locationPathContext.prototype.constructor = Xpath_locationPathContext;

Xpath_locationPathContext.prototype.xpath_step = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Xpath_stepContext);
    } else {
        return this.getTypedRuleContext(Xpath_stepContext,i);
    }
};

Xpath_locationPathContext.prototype.X_SEP = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XtkParser.X_SEP);
    } else {
        return this.getToken(XtkParser.X_SEP, i);
    }
};


Xpath_locationPathContext.prototype.X_COLON = function() {
    return this.getToken(XtkParser.X_COLON, 0);
};

Xpath_locationPathContext.prototype.xpath_qname = function() {
    return this.getTypedRuleContext(Xpath_qnameContext,0);
};

Xpath_locationPathContext.prototype.X_ATTR = function() {
    return this.getToken(XtkParser.X_ATTR, 0);
};

Xpath_locationPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterXpath_locationPath(this);
	}
};

Xpath_locationPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitXpath_locationPath(this);
	}
};

Xpath_locationPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitXpath_locationPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.Xpath_locationPathContext = Xpath_locationPathContext;

XtkParser.prototype.xpath_locationPath = function() {

    var localctx = new Xpath_locationPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, XtkParser.RULE_xpath_locationPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===XtkParser.X_SEP) {
            this.state = 134;
            this.match(XtkParser.X_SEP);
        }

        this.state = 137;
        this.xpath_step();
        this.state = 142;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===XtkParser.X_SEP) {
            this.state = 138;
            this.match(XtkParser.X_SEP);
            this.state = 139;
            this.xpath_step();
            this.state = 144;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===XtkParser.X_COLON) {
            this.state = 145;
            this.match(XtkParser.X_COLON);
            this.state = 147;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===XtkParser.X_ATTR) {
                this.state = 146;
                this.match(XtkParser.X_ATTR);
            }

            this.state = 149;
            this.xpath_qname();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Xpath_stepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_xpath_step;
    return this;
}

Xpath_stepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Xpath_stepContext.prototype.constructor = Xpath_stepContext;

Xpath_stepContext.prototype.xpath_qname = function() {
    return this.getTypedRuleContext(Xpath_qnameContext,0);
};

Xpath_stepContext.prototype.X_ATTR = function() {
    return this.getToken(XtkParser.X_ATTR, 0);
};

Xpath_stepContext.prototype.xpath_predicate = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Xpath_predicateContext);
    } else {
        return this.getTypedRuleContext(Xpath_predicateContext,i);
    }
};

Xpath_stepContext.prototype.X_CURRENT = function() {
    return this.getToken(XtkParser.X_CURRENT, 0);
};

Xpath_stepContext.prototype.X_PARENT = function() {
    return this.getToken(XtkParser.X_PARENT, 0);
};

Xpath_stepContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterXpath_step(this);
	}
};

Xpath_stepContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitXpath_step(this);
	}
};

Xpath_stepContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitXpath_step(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.Xpath_stepContext = Xpath_stepContext;

XtkParser.prototype.xpath_step = function() {

    var localctx = new Xpath_stepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, XtkParser.RULE_xpath_step);
    var _la = 0; // Token type
    try {
        this.state = 164;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case XtkParser.X_INT:
        case XtkParser.X_NCNAME:
        case XtkParser.X_ATTR:
            this.enterOuterAlt(localctx, 1);
            this.state = 153;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===XtkParser.X_ATTR) {
                this.state = 152;
                this.match(XtkParser.X_ATTR);
            }

            this.state = 155;
            this.xpath_qname();
            this.state = 159;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===XtkParser.X_BRAC_OPEN) {
                this.state = 156;
                this.xpath_predicate();
                this.state = 161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case XtkParser.X_CURRENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 162;
            this.match(XtkParser.X_CURRENT);
            break;
        case XtkParser.X_PARENT:
            this.enterOuterAlt(localctx, 3);
            this.state = 163;
            this.match(XtkParser.X_PARENT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Xpath_qnameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_xpath_qname;
    return this;
}

Xpath_qnameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Xpath_qnameContext.prototype.constructor = Xpath_qnameContext;

Xpath_qnameContext.prototype.X_NCNAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XtkParser.X_NCNAME);
    } else {
        return this.getToken(XtkParser.X_NCNAME, i);
    }
};


Xpath_qnameContext.prototype.X_INT = function() {
    return this.getToken(XtkParser.X_INT, 0);
};

Xpath_qnameContext.prototype.X_COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XtkParser.X_COLON);
    } else {
        return this.getToken(XtkParser.X_COLON, i);
    }
};


Xpath_qnameContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterXpath_qname(this);
	}
};

Xpath_qnameContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitXpath_qname(this);
	}
};

Xpath_qnameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitXpath_qname(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.Xpath_qnameContext = Xpath_qnameContext;

XtkParser.prototype.xpath_qname = function() {

    var localctx = new Xpath_qnameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, XtkParser.RULE_xpath_qname);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 166;
                this.match(XtkParser.X_NCNAME);
                this.state = 167;
                this.match(XtkParser.X_COLON); 
            }
            this.state = 172;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

        this.state = 173;
        _la = this._input.LA(1);
        if(!(_la===XtkParser.X_INT || _la===XtkParser.X_NCNAME)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Xpath_predicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_xpath_predicate;
    return this;
}

Xpath_predicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Xpath_predicateContext.prototype.constructor = Xpath_predicateContext;

Xpath_predicateContext.prototype.X_BRAC_OPEN = function() {
    return this.getToken(XtkParser.X_BRAC_OPEN, 0);
};

Xpath_predicateContext.prototype.xpath_expr = function() {
    return this.getTypedRuleContext(Xpath_exprContext,0);
};

Xpath_predicateContext.prototype.X_BRAC_CLOSE = function() {
    return this.getToken(XtkParser.X_BRAC_CLOSE, 0);
};

Xpath_predicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterXpath_predicate(this);
	}
};

Xpath_predicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitXpath_predicate(this);
	}
};

Xpath_predicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitXpath_predicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.Xpath_predicateContext = Xpath_predicateContext;

XtkParser.prototype.xpath_predicate = function() {

    var localctx = new Xpath_predicateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, XtkParser.RULE_xpath_predicate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 175;
        this.match(XtkParser.X_BRAC_OPEN);
        this.state = 176;
        this.xpath_expr();
        this.state = 177;
        this.match(XtkParser.X_BRAC_CLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Xpath_exprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_xpath_expr;
    return this;
}

Xpath_exprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Xpath_exprContext.prototype.constructor = Xpath_exprContext;

Xpath_exprContext.prototype.X_INT = function() {
    return this.getToken(XtkParser.X_INT, 0);
};

Xpath_exprContext.prototype.xpath_locationPath = function() {
    return this.getTypedRuleContext(Xpath_locationPathContext,0);
};

Xpath_exprContext.prototype.X_EQ = function() {
    return this.getToken(XtkParser.X_EQ, 0);
};

Xpath_exprContext.prototype.X_STRING = function() {
    return this.getToken(XtkParser.X_STRING, 0);
};

Xpath_exprContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterXpath_expr(this);
	}
};

Xpath_exprContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitXpath_expr(this);
	}
};

Xpath_exprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitXpath_expr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.Xpath_exprContext = Xpath_exprContext;

XtkParser.prototype.xpath_expr = function() {

    var localctx = new Xpath_exprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, XtkParser.RULE_xpath_expr);
    try {
        this.state = 184;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 179;
            this.match(XtkParser.X_INT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 180;
            this.xpath_locationPath();
            this.state = 181;
            this.match(XtkParser.X_EQ);
            this.state = 182;
            this.match(XtkParser.X_STRING);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XtkParser.COMMA);
    } else {
        return this.getToken(XtkParser.COMMA, i);
    }
};


ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitList(this);
	}
};

ListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.ListContext = ListContext;

XtkParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, XtkParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.expression();
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===XtkParser.COMMA) {
            this.state = 187;
            this.match(XtkParser.COMMA);
            this.state = 188;
            this.expression();
            this.state = 193;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ParametersContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(XtkParser.COMMA);
    } else {
        return this.getToken(XtkParser.COMMA, i);
    }
};


ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitParameters(this);
	}
};

ParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.ParametersContext = ParametersContext;

XtkParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, XtkParser.RULE_parameters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 194;
                this.expression();
                this.state = 195;
                this.match(XtkParser.COMMA); 
            }
            this.state = 201;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
        }

        this.state = 202;
        this.expression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.STRING = function() {
    return this.getToken(XtkParser.STRING, 0);
};

LiteralContext.prototype.INT = function() {
    return this.getToken(XtkParser.INT, 0);
};

LiteralContext.prototype.MINUS = function() {
    return this.getToken(XtkParser.MINUS, 0);
};

LiteralContext.prototype.DOUBLE = function() {
    return this.getToken(XtkParser.DOUBLE, 0);
};

LiteralContext.prototype.BOOLEAN = function() {
    return this.getToken(XtkParser.BOOLEAN, 0);
};

LiteralContext.prototype.DATE = function() {
    return this.getToken(XtkParser.DATE, 0);
};

LiteralContext.prototype.TIME = function() {
    return this.getToken(XtkParser.TIME, 0);
};

LiteralContext.prototype.DATETIME = function() {
    return this.getToken(XtkParser.DATETIME, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.LiteralContext = LiteralContext;

XtkParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, XtkParser.RULE_literal);
    try {
        this.state = 215;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 204;
            this.match(XtkParser.STRING);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 205;
            this.match(XtkParser.INT);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 206;
            this.match(XtkParser.MINUS);
            this.state = 207;
            this.match(XtkParser.INT);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 208;
            this.match(XtkParser.DOUBLE);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 209;
            this.match(XtkParser.MINUS);
            this.state = 210;
            this.match(XtkParser.DOUBLE);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 211;
            this.match(XtkParser.BOOLEAN);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 212;
            this.match(XtkParser.DATE);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 213;
            this.match(XtkParser.TIME);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 214;
            this.match(XtkParser.DATETIME);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ComputableAtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = XtkParser.RULE_computableAtom;
    return this;
}

ComputableAtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComputableAtomContext.prototype.constructor = ComputableAtomContext;

ComputableAtomContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ComputableAtomContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

ComputableAtomContext.prototype.xpath = function() {
    return this.getTypedRuleContext(XpathContext,0);
};

ComputableAtomContext.prototype.VARIABLE = function() {
    return this.getToken(XtkParser.VARIABLE, 0);
};

ComputableAtomContext.prototype.PAR_OPEN = function() {
    return this.getToken(XtkParser.PAR_OPEN, 0);
};

ComputableAtomContext.prototype.addingExpression = function() {
    return this.getTypedRuleContext(AddingExpressionContext,0);
};

ComputableAtomContext.prototype.PAR_CLOSE = function() {
    return this.getToken(XtkParser.PAR_CLOSE, 0);
};

ComputableAtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.enterComputableAtom(this);
	}
};

ComputableAtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof XtkParserListener ) {
        listener.exitComputableAtom(this);
	}
};

ComputableAtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof XtkParserVisitor ) {
        return visitor.visitComputableAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




XtkParser.ComputableAtomContext = ComputableAtomContext;

XtkParser.prototype.computableAtom = function() {

    var localctx = new ComputableAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, XtkParser.RULE_computableAtom);
    try {
        this.state = 225;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            this.literal();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 218;
            this.functionCall();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 219;
            this.xpath();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 220;
            this.match(XtkParser.VARIABLE);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 221;
            this.match(XtkParser.PAR_OPEN);
            this.state = 222;
            this.addingExpression();
            this.state = 223;
            this.match(XtkParser.PAR_CLOSE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.XtkParser = XtkParser;
exports.UnitContext = UnitContext;
XtkParser.UnitContext = UnitContext;
exports.ExpressionContext = ExpressionContext;
XtkParser.ExpressionContext = ExpressionContext;
exports.LogicalOperatorContext = LogicalOperatorContext;
XtkParser.LogicalOperatorContext = LogicalOperatorContext;
exports.FunctionCallContext = FunctionCallContext;
XtkParser.FunctionCallContext = FunctionCallContext;
exports.AddingExpressionContext = AddingExpressionContext;
XtkParser.AddingExpressionContext = AddingExpressionContext;
exports.MultiplyingExpressionContext = MultiplyingExpressionContext;
XtkParser.MultiplyingExpressionContext = MultiplyingExpressionContext;
exports.ComparisonOperatorContext = ComparisonOperatorContext;
XtkParser.ComparisonOperatorContext = ComparisonOperatorContext;
exports.RelationalExpressionContext = RelationalExpressionContext;
XtkParser.RelationalExpressionContext = RelationalExpressionContext;
exports.UnaryOperatorContext = UnaryOperatorContext;
XtkParser.UnaryOperatorContext = UnaryOperatorContext;
exports.UnaryExpressionContext = UnaryExpressionContext;
XtkParser.UnaryExpressionContext = UnaryExpressionContext;
exports.LikeOperatorContext = LikeOperatorContext;
XtkParser.LikeOperatorContext = LikeOperatorContext;
exports.LikeExpressionContext = LikeExpressionContext;
XtkParser.LikeExpressionContext = LikeExpressionContext;
exports.IncludedInExpressionContext = IncludedInExpressionContext;
XtkParser.IncludedInExpressionContext = IncludedInExpressionContext;
exports.XpathContext = XpathContext;
XtkParser.XpathContext = XpathContext;
exports.Xpath_locationPathContext = Xpath_locationPathContext;
XtkParser.Xpath_locationPathContext = Xpath_locationPathContext;
exports.Xpath_stepContext = Xpath_stepContext;
XtkParser.Xpath_stepContext = Xpath_stepContext;
exports.Xpath_qnameContext = Xpath_qnameContext;
XtkParser.Xpath_qnameContext = Xpath_qnameContext;
exports.Xpath_predicateContext = Xpath_predicateContext;
XtkParser.Xpath_predicateContext = Xpath_predicateContext;
exports.Xpath_exprContext = Xpath_exprContext;
XtkParser.Xpath_exprContext = Xpath_exprContext;
exports.ListContext = ListContext;
XtkParser.ListContext = ListContext;
exports.ParametersContext = ParametersContext;
XtkParser.ParametersContext = ParametersContext;
exports.LiteralContext = LiteralContext;
XtkParser.LiteralContext = LiteralContext;
exports.ComputableAtomContext = ComputableAtomContext;
XtkParser.ComputableAtomContext = ComputableAtomContext;
