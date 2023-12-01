/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
lexer grammar XtkLexer;

fragment CHAR_ESCAPED
    : '\\' ['"?abfnrtv\\]
    ;

fragment CHAR_SQUOTED
    :   ~['\\\r\n]
    |   CHAR_ESCAPED
    ;

fragment CHAR_DQUOTED
    :   ~["\\\r\n]
    |   CHAR_ESCAPED
    ;

TRUE: 'TRUE' | 'true'
;

FALSE: 'FALSE' | 'false'
;

STRING
    : '"' CHAR_DQUOTED* '"'
    | '\'' CHAR_SQUOTED* '\''
    ;

INT          : DIGIT+
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
fragment TIMEPART : DIGIT DIGIT ':' DIGIT DIGIT ':' DIGIT DIGIT ('.' DIGIT DIGIT DIGIT)? 'Z'?
;
DATE : '#' DATEPART? '#'
;
TIME : '#' TIMEPART? '#'
;
DATETIME : '#' DATEPART [ \tT] TIMEPART '#'
;
// For now we only allow ascii and latin letters with accents
fragment ALPHA : [A-Za-z\u00C0-\u00D6\u00DF-\u00F6\u00F8-\u00FF]
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
CONCAT       : '||'
;
ATTRIBUTE   : '@' (ALPHA|'_')(ALPHA|DIGIT|'_')*
;
IDENTIFIER   : (ALPHA|'_')(ALPHA|DIGIT|'_')*
;
START_VARIABLE : '$'
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
COLON : ':'
;
DOT : '.'
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
