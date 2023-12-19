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
parser grammar XtkParser;
options { tokenVocab=XtkLexer; }

unit
    : expression EOF
    ;

expression
    : computableAtom
    | EXCLAMATION expression
    | orExpression
    | addingExpression
    | PAR_OPEN expression PAR_CLOSE
    ;

orExpression
    : andExpression ( OR andExpression )*
    ;

andExpression
    : singleExpression ( andOperator singleExpression)*
    ;

singleExpression
    : computableAtom
    | relationalExpression
    | unaryExpression
    | likeExpression
    | includedInExpression
    | PAR_OPEN orExpression PAR_CLOSE
    ;

andOperator
    : AND | AND_NOT
    ;

functionCall
    : IDENTIFIER PAR_OPEN parameters? PAR_CLOSE
    ;

addingExpression
    : multiplyingExpression (addingOperator multiplyingExpression)*
    ;

multiplyingExpression
    : computableAtom (multiplyOperator computableAtom)*
    ;

addingOperator
    : PLUS|MINUS|AMP|PIPE|CONCAT
    ;

comparisonOperator
    : LT|LE|GT|GE|EQ|EQ_2|NEQ|NEQ_2
    ;

multiplyOperator
     : TIMES|DIV|PERCENT
     ;

relationalExpression
    : addingExpression comparisonOperator addingExpression
    ;

unaryOperator
    : IS_NULL | IS_NOT_NULL
    ;

unaryExpression
    : addingExpression unaryOperator
    ;

likeOperator
    : LIKE | NOT_LIKE
    ;

likeExpression
    : addingExpression likeOperator addingExpression
    ;

includedInExpression
    : addingExpression (IN | NOT_IN) PAR_OPEN list PAR_CLOSE
    ;

xpath
    : (ATTRIBUTE|IDENTIFIER) (BRAC_OPEN X_INT X_BRAC_CLOSE)?
    | BRAC_OPEN (xpath_schema X_COLON)? xpath_locationPath X_BRAC_CLOSE
    ;

xpath_schema
    : X_NCNAME X_COLON X_NCNAME (X_COLON X_INT)?
    ;

xpath_locationPath
    : X_SEP? xpath_step ( X_SEP xpath_step )* xpath_qname?
    ;

xpath_step
    : X_ATTR? xpath_qname xpath_predicate*
    | X_CURRENT
    | X_PARENT
    ;

xpath_qname
    : (X_NCNAME X_COLON)* ( X_NCNAME | X_INT )
    ;

xpath_predicate
    : X_BRAC_OPEN xpath_expr X_BRAC_CLOSE
    ;

xpath_expr
    : X_INT
    | xpath_locationPath X_EQ X_STRING
    ;

list
    : expression ( COMMA expression )*
    ;

parameters
    : (expression COMMA)* expression
    ;

variablePath
    : (IDENTIFIER DIV)* ( ATTRIBUTE | IDENTIFIER )
    ;

variableIdentifier
    : IDENTIFIER (COLON | DOT) IDENTIFIER
    | variablePath
    ;

variable
    : START_VARIABLE PAR_OPEN variableIdentifier PAR_CLOSE
    ;

castVariable
    : START_VARIABLE IDENTIFIER PAR_OPEN variableIdentifier PAR_CLOSE
    ;

literal
    : STRING
    | INT
    | MINUS INT
    | DOUBLE
    | MINUS DOUBLE
    | TRUE
    | FALSE
    | DATE
    | TIME
    | DATETIME
    ;

computableAtom
   : literal
   | functionCall
   | xpath
   | variable
   | castVariable
   | PAR_OPEN addingExpression PAR_CLOSE
   ;
