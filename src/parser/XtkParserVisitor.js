// Generated from XtkParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by XtkParser.

function XtkParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

XtkParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
XtkParserVisitor.prototype.constructor = XtkParserVisitor;

// Visit a parse tree produced by XtkParser#unit.
XtkParserVisitor.prototype.visitUnit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#expression.
XtkParserVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#logicalOperator.
XtkParserVisitor.prototype.visitLogicalOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#functionCall.
XtkParserVisitor.prototype.visitFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#addingExpression.
XtkParserVisitor.prototype.visitAddingExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#multiplyingExpression.
XtkParserVisitor.prototype.visitMultiplyingExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#comparisonOperator.
XtkParserVisitor.prototype.visitComparisonOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#relationalExpression.
XtkParserVisitor.prototype.visitRelationalExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#unaryOperator.
XtkParserVisitor.prototype.visitUnaryOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#unaryExpression.
XtkParserVisitor.prototype.visitUnaryExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#likeOperator.
XtkParserVisitor.prototype.visitLikeOperator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#likeExpression.
XtkParserVisitor.prototype.visitLikeExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#includedInExpression.
XtkParserVisitor.prototype.visitIncludedInExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#xpath.
XtkParserVisitor.prototype.visitXpath = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#xpath_locationPath.
XtkParserVisitor.prototype.visitXpath_locationPath = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#xpath_step.
XtkParserVisitor.prototype.visitXpath_step = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#xpath_qname.
XtkParserVisitor.prototype.visitXpath_qname = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#xpath_predicate.
XtkParserVisitor.prototype.visitXpath_predicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#xpath_expr.
XtkParserVisitor.prototype.visitXpath_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#list.
XtkParserVisitor.prototype.visitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#parameters.
XtkParserVisitor.prototype.visitParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#variablePath.
XtkParserVisitor.prototype.visitVariablePath = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#variableIdentifier.
XtkParserVisitor.prototype.visitVariableIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#variable.
XtkParserVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#castVariable.
XtkParserVisitor.prototype.visitCastVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#literal.
XtkParserVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by XtkParser#computableAtom.
XtkParserVisitor.prototype.visitComputableAtom = function(ctx) {
  return this.visitChildren(ctx);
};



exports.XtkParserVisitor = XtkParserVisitor;