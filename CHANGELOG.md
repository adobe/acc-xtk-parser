# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.11] - 2024-03-22

- Fix unsupported literal : NULL

## [1.0.10] - 2024-02-29

- Fix improper matching of XTK expression
- Add capability to match operators

## [1.0.9] - 2024-02-29

- Fix crash of matcher when a function has no parameter

## [1.0.8] - 2024-02-28

- Allow empty list for IN and NOT IN

## [1.0.7] - 2024-02-27

- Fix parsing of data including a GMT time difference

## [1.0.6] - 2023-12-19

- Review design of the grammar for and logical expression

## [1.0.5] - 2023-12-18

- Fix missing antlr4 in the generated ES module

## [1.0.4] - 2023-12-14

- Embed antlr4 in package

## [1.0.3] - 2023-12-06

- Handle precedence of AND operator over OR
- New XTK evaluator
- SyntaxErrorException raised on syntax errors
- New XTK expression matcher

## [1.0.2] - 2023-11-26

- Fix missing dependencies required for Parcel bundler

## [1.0.1] - 2023-11-24

- Create a function to run the parser without having to import antlr4 plumbery

## [1.0.0] - 2023-11-24

- Initial opensourced version
