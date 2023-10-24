parser grammar XtkParser;
options { tokenVocab=XtkLexer; }

unit
    : expression EOF
    ;

expression
    : xpath
    | literal
    | VARIABLE
    | EXCLAMATION expression
    | (relationalExpression | unaryExpression | likeExpression ) (logicalOperator (relationalExpression | unaryExpression | likeExpression | includedInExpression))*
    | addingExpression
    ;

logicalOperator
    : OR | AND | AND_NOT
    ;

functionCall
    : IDENTIFIER PAR_OPEN parameters? PAR_CLOSE
    ;

addingExpression
    : multiplyingExpression ((PLUS|MINUS|AMP|PIPE) multiplyingExpression)*
    ;

multiplyingExpression
    : computableAtom ((TIMES|DIV|PERCENT) computableAtom)*
    ;

comparisonOperator
    : LT|LE|GT|GE|EQ|EQ_2|NEQ|NEQ_2
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
    | BRAC_OPEN xpath_locationPath X_BRAC_CLOSE
    ;

xpath_locationPath
    : X_SEP? xpath_step ( X_SEP xpath_step )* (X_COLON X_ATTR? xpath_qname)?
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

literal
    : STRING
    | INT
    | MINUS INT
    | DOUBLE
    | MINUS DOUBLE
    | BOOLEAN
    | DATE
    | TIME
    | DATETIME
    ;

computableAtom
   : literal
   | functionCall
   | xpath
   | VARIABLE
   | PAR_OPEN addingExpression PAR_CLOSE
   ;
