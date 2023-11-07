import {CommonTokenStream, Parser, ParserRuleContext, Token} from 'antlr4';
import {TerminalNode} from 'antlr4/tree/Tree';


export declare class UnitContext extends ParserRuleContext {
    
    expression(): ExpressionContext;
    
}

export declare class ExpressionContext extends ParserRuleContext {
    
    xpath(): XpathContext;
    
    literal(): LiteralContext;
    
    EXCLAMATION(): TerminalNode;
    
    expression(): ExpressionContext;
    
    addingExpression(): AddingExpressionContext;
    
    PAR_OPEN(): TerminalNode;
    
    PAR_CLOSE(): TerminalNode;
    
}

export declare class LogicalOperatorContext extends ParserRuleContext {
    
    OR(): TerminalNode;
    
    AND(): TerminalNode;
    
    AND_NOT(): TerminalNode;
    
}

export declare class FunctionCallContext extends ParserRuleContext {
    
    IDENTIFIER(): TerminalNode;
    
    PAR_OPEN(): TerminalNode;
    
    PAR_CLOSE(): TerminalNode;
    
    parameters(): ParametersContext;
    
}

export declare class AddingExpressionContext extends ParserRuleContext {
    
}

export declare class MultiplyingExpressionContext extends ParserRuleContext {
    
}

export declare class ComparisonOperatorContext extends ParserRuleContext {
    
    LT(): TerminalNode;
    
    LE(): TerminalNode;
    
    GT(): TerminalNode;
    
    GE(): TerminalNode;
    
    EQ(): TerminalNode;
    
    EQ_2(): TerminalNode;
    
    NEQ(): TerminalNode;
    
    NEQ_2(): TerminalNode;
    
}

export declare class RelationalExpressionContext extends ParserRuleContext {
    
    comparisonOperator(): ComparisonOperatorContext;
    
}

export declare class UnaryOperatorContext extends ParserRuleContext {
    
    IS_NULL(): TerminalNode;
    
    IS_NOT_NULL(): TerminalNode;
    
}

export declare class UnaryExpressionContext extends ParserRuleContext {
    
    addingExpression(): AddingExpressionContext;
    
    unaryOperator(): UnaryOperatorContext;
    
}

export declare class LikeOperatorContext extends ParserRuleContext {
    
    LIKE(): TerminalNode;
    
    NOT_LIKE(): TerminalNode;
    
}

export declare class LikeExpressionContext extends ParserRuleContext {
    
    likeOperator(): LikeOperatorContext;
    
}

export declare class IncludedInExpressionContext extends ParserRuleContext {
    
    addingExpression(): AddingExpressionContext;
    
    PAR_OPEN(): TerminalNode;
    
    list(): ListContext;
    
    PAR_CLOSE(): TerminalNode;
    
    IN(): TerminalNode;
    
    NOT_IN(): TerminalNode;
    
}

export declare class XpathContext extends ParserRuleContext {
    
    ATTRIBUTE(): TerminalNode;
    
    IDENTIFIER(): TerminalNode;
    
    BRAC_OPEN(): TerminalNode;
    
    X_INT(): TerminalNode;
    
    X_BRAC_CLOSE(): TerminalNode;
    
    xpath_locationPath(): Xpath_locationPathContext;
    
}

export declare class Xpath_locationPathContext extends ParserRuleContext {
    
    X_COLON(): TerminalNode;
    
    xpath_qname(): Xpath_qnameContext;
    
    X_ATTR(): TerminalNode;
    
}

export declare class Xpath_stepContext extends ParserRuleContext {
    
    xpath_qname(): Xpath_qnameContext;
    
    X_ATTR(): TerminalNode;
    
    X_CURRENT(): TerminalNode;
    
    X_PARENT(): TerminalNode;
    
}

export declare class Xpath_qnameContext extends ParserRuleContext {
    
    X_INT(): TerminalNode;
    
}

export declare class Xpath_predicateContext extends ParserRuleContext {
    
    X_BRAC_OPEN(): TerminalNode;
    
    xpath_expr(): Xpath_exprContext;
    
    X_BRAC_CLOSE(): TerminalNode;
    
}

export declare class Xpath_exprContext extends ParserRuleContext {
    
    X_INT(): TerminalNode;
    
    xpath_locationPath(): Xpath_locationPathContext;
    
    X_EQ(): TerminalNode;
    
    X_STRING(): TerminalNode;
    
}

export declare class ListContext extends ParserRuleContext {
    
}

export declare class ParametersContext extends ParserRuleContext {
    
}

export declare class VariablePathContext extends ParserRuleContext {
    
    ATTRIBUTE(): TerminalNode;
    
}

export declare class VariableIdentifierContext extends ParserRuleContext {
    
    COLON(): TerminalNode;
    
    DOT(): TerminalNode;
    
    variablePath(): VariablePathContext;
    
}

export declare class VariableContext extends ParserRuleContext {
    
    START_VARIABLE(): TerminalNode;
    
    PAR_OPEN(): TerminalNode;
    
    variableIdentifier(): VariableIdentifierContext;
    
    PAR_CLOSE(): TerminalNode;
    
}

export declare class CastVariableContext extends ParserRuleContext {
    
    START_VARIABLE(): TerminalNode;
    
    IDENTIFIER(): TerminalNode;
    
    PAR_OPEN(): TerminalNode;
    
    variableIdentifier(): VariableIdentifierContext;
    
    PAR_CLOSE(): TerminalNode;
    
}

export declare class LiteralContext extends ParserRuleContext {
    
    STRING(): TerminalNode;
    
    INT(): TerminalNode;
    
    MINUS(): TerminalNode;
    
    DOUBLE(): TerminalNode;
    
    BOOLEAN(): TerminalNode;
    
    DATE(): TerminalNode;
    
    TIME(): TerminalNode;
    
    DATETIME(): TerminalNode;
    
}

export declare class ComputableAtomContext extends ParserRuleContext {
    
    literal(): LiteralContext;
    
    functionCall(): FunctionCallContext;
    
    xpath(): XpathContext;
    
    variable(): VariableContext;
    
    castVariable(): CastVariableContext;
    
    PAR_OPEN(): TerminalNode;
    
    addingExpression(): AddingExpressionContext;
    
    PAR_CLOSE(): TerminalNode;
    
}


export declare class XtkParser extends Parser {
    readonly ruleNames: string[];
    readonly literalNames: string[];
    readonly symbolicNames: string[];

    constructor(input: CommonTokenStream);
    
    unit(): UnitContext;

    expression(): ExpressionContext;

    logicalOperator(): LogicalOperatorContext;

    functionCall(): FunctionCallContext;

    addingExpression(): AddingExpressionContext;

    multiplyingExpression(): MultiplyingExpressionContext;

    comparisonOperator(): ComparisonOperatorContext;

    relationalExpression(): RelationalExpressionContext;

    unaryOperator(): UnaryOperatorContext;

    unaryExpression(): UnaryExpressionContext;

    likeOperator(): LikeOperatorContext;

    likeExpression(): LikeExpressionContext;

    includedInExpression(): IncludedInExpressionContext;

    xpath(): XpathContext;

    xpath_locationPath(): Xpath_locationPathContext;

    xpath_step(): Xpath_stepContext;

    xpath_qname(): Xpath_qnameContext;

    xpath_predicate(): Xpath_predicateContext;

    xpath_expr(): Xpath_exprContext;

    list(): ListContext;

    parameters(): ParametersContext;

    variablePath(): VariablePathContext;

    variableIdentifier(): VariableIdentifierContext;

    variable(): VariableContext;

    castVariable(): CastVariableContext;

    literal(): LiteralContext;

    computableAtom(): ComputableAtomContext;

}
