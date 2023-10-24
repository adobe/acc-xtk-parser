lexer grammar XtkLexer;

fragment CHAR
    :   ~['"\\\r\n]
    |   '\\' ['"?abfnrtv\\]
    ;

STRING
    : '"' CHAR* '"'
    | '\'' CHAR* '\''
    ;

INT          : DIGIT+
;
BOOLEAN      : 'true'|'false'
;
PAR_OPEN     : '('
;
PAR_CLOSE    : ')'
;
fragment NUM1 : DIGIT+ ('.' DIGIT+)? ([eE][-+]?DIGIT+)?
;
fragment NUM2 : DIGIT* '.' DIGIT+ ([eE][-+]?DIGIT+)?
;
DOUBLE       : NUM1 | NUM2
;
fragment DATEPART : DIGIT DIGIT DIGIT DIGIT [/-] DIGIT DIGIT [/-] DIGIT DIGIT
;
fragment TIMEPART : DIGIT DIGIT ':' DIGIT DIGIT ':' DIGIT DIGIT
;
DATE : '#' DATEPART '#'
;
TIME : '#' TIMEPART '#'
;
DATETIME : '#' DATEPART [ \tT] TIMEPART '#'
;
fragment ALPHA : [A-Za-z]
;
fragment DIGIT : [0-9]
;
NOT_IN       : NOT WS IN
;
NOT          : [Nn][Oo][Tt]
;
IS_NULL      : IS WS NULL
;
IS_NOT_NULL  : IS WS NOT WS NULL
;
IS           : [Ii][Ss]
;
IN           : [Ii][Nn]
;
NULL         : [Nn][Uu][Ll][Ll]
;
OR           : [Oo][Rr]
;
AND          : [Aa][Nn][Dd]
;
AND_NOT      : AND WS NOT
;
LIKE         : [Ll][Ii][Kk][Ee]
;
NOT_LIKE     : NOT WS LIKE
;
ATTRIBUTE   : '@' (ALPHA|'_')(ALPHA|DIGIT|'_')*
;
IDENTIFIER   : (ALPHA|'_')(ALPHA|DIGIT|'_')*
;
VARIABLE : '$(' ( IDENTIFIER '/')* ATTRIBUTE ')'
;
LT : '<'
;
GT : '>'
;
LE : '<='
;
GE : '>='
;
EQ : '='
;
EQ_2 : '=='
;
NEQ : '!='
;
NEQ_2 : '<>'
;
PLUS : '+'
;
MINUS : '-'
   ;
TIMES : '*'
;
DIV : '/'
;
AMP : '&'
;
PIPE : '|'
;
PERCENT : '%'
;
EXCLAMATION : '!'
;
COMMA : ','
;
WS : [ \r\n\t] + -> skip
;

BRAC_OPEN: '[' -> pushMode(XPATH);

mode XPATH;

X_BRAC_OPEN : '[' -> pushMode(XPATH);
X_BRAC_CLOSE: ']' -> popMode;

X_INT
    : DIGIT+
    ;

X_STRING
    : '"' ('""' | ~["])* '"'
    | '\'' ('\'\'' | ~[^'])* '\''
    ;

X_NCNAME
    : (ALPHA|'_')(ALPHA|DIGIT|[-_.])*
    ;

X_SEP       : '/';
X_COLON     : ':';
X_PARENT    : '..';
X_CURRENT   : '.';
X_ATTR      : '@';
X_EQ        : '=';
