/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2023 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

import { CommonTokenStream, InputStream } from 'antlr4';
import { ErrorListener } from 'antlr4/error';
import { XtkLexer } from '../XtkLexer';
import { UnitContext, XtkParser } from '../XtkParser';
const XtkParserVisitor = require('../XtkParserVisitor').XtkParserVisitor;

export class ValidatorListener extends ErrorListener {
  syntaxError(recognizer: any, offendingSymbol: any, line: number, column: number, msg: string, e: any): void {
    throw new Error(`${line}:${column}\n${msg}`);
  }
}

const runParser = (expr: string): UnitContext => {
  const inputStream = new InputStream(expr);
  const lexer = new XtkLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new XtkParser(tokenStream);
  parser.addErrorListener(new ValidatorListener());
  const unit = parser.unit();
  unit.accept(new XtkParserVisitor());
  return unit;
};

describe('Test integer', () => {
  it.each(['=', '==', '!=', '<>', '>', '<', '>=', '<='])('should handle integer', (operator) => {
    expect(runParser(`@a ${operator} 1`)).toBeDefined();
    expect(runParser(`[@a] ${operator} 1`)).toBeDefined();
    expect(runParser(`[targetData/@permissionsCategoryDetailiNSURANCE-consentStatusId]  ${operator} 2`)).toBeDefined();
  });
  it.each(['IN', 'NOT IN'])('should handle inclusion', (operator) => {
    expect(runParser(`@pers_id ${operator} (200195162087, 200016067320, 200058387214)`)).toBeDefined();
  });
  it.each(['+', '-', '*', '/', '&', '|', '%'])('should support numeric operations', (operator) => {
    expect(runParser(`@a ${operator} 1`)).toBeDefined();
    expect(runParser(`[@a] ${operator} 1`)).toBeDefined();
    expect(runParser(`(@a + 1) ${operator} 1`)).toBeDefined();
  });
});

describe('Test floating point', () => {
  it.each(['=', '==', '!=', '<>', '>', '<', '>=', '<='])('should handle integer', (operator) => {
    expect(runParser(`@a ${operator} 1.2`)).toBeDefined();
    expect(runParser(`[@a] ${operator} 1.2`)).toBeDefined();
    expect(runParser(`[@a] ${operator} 1.2`)).toBeDefined();
  });
});

describe('Test date / time', () => {
  it('should handle simple date time', () => {
    expect(runParser('@created >= #2021-09-16 23:00:00#')).toBeDefined();
  });
  it('should handle empty date', () => {
    expect(runParser('@created >= ##')).toBeDefined();
  });
  it('should handle date with fractional', () => {
    expect(runParser('@created >= #2021-09-16 23:00:00.000#')).toBeDefined();
    expect(runParser('@created >= #2021-09-16 23:00:00.000Z#')).toBeDefined();
  });
});

describe('Test string', () => {
  it.each(['@mobilePhone', '[target/recipient/@firstName]'])('should handle embedded quotes', (xpath) => {
    expect(runParser(`${xpath} NOT LIKE '%' + '"' + '%'`)).toBeDefined();
    expect(runParser(`${xpath} LIKE '%' + '<a href="' + '%'`)).toBeDefined();
  });
  it('should not be too strict on characters used in identifier', () => {
    expect(runParser('[targetData/enrich_src/@cömptàgeannée] >= 3')).toBeDefined();
  });
  it.each(['LIKE', 'NOT LIKE'])('should handle like', (operator) => {
    expect(runParser(`[delivery/@outputCellName] ${operator} '%' + '3RDLTR' + '%'`)).toBeDefined();
  });
  it('should handle concatenation of strings', () => {
    expect(runParser('ToString(@a) || ToString(@b)')).toBeDefined();
  });
});

describe('Test functions', () => {
  it('should handle comparison between functions', () => {
    expect(runParser('DateOnly(@logDate) > DaysAgo(365)')).toBeDefined();
  });
  it('should handle function as function parameter', () => {
    expect(runParser('ToDate(@eventDate) >= SubDays(ToDate($(instance/vars/@startDate)) , 1)')).toBeDefined();
  });
});

describe('Test variables', () => {
  it('should handle variables', () => {
    expect(runParser('@delivery_count >= $(vars.numberOfEmails)')).toBeDefined();
  });
  it('should handle cast', () => {
    expect(runParser('@delivery_count >= $int(vars.numberOfEmails)')).toBeDefined();
    expect(runParser('@lastModified > $datetime(options:tiaaUcpDataExportLastSuccess)')).toBeDefined();
  });
});

describe('Test xpath', () => {
  it('should handle different kind of xpath', () => {
    expect(runParser('@a')).toBeDefined();
    expect(runParser('[@a]')).toBeDefined();
    expect(runParser('[x/y/@a]')).toBeDefined();
    expect(runParser('([x/y/@a])')).toBeDefined();
  });
});

describe('Test SQL', () => {
  it.each(['IS NULL', 'IS NOT NULL'])('should handle null checks', (operator) => {
    expect(runParser(`@a ${operator}`)).toBeDefined();
  });
  it.each(['AND', 'OR', 'AND NOT'])('should handle logical combinations', (operator) => {
    expect(runParser(`@a IS NULL ${operator} @b IS NOT NULL`)).toBeDefined();
  });
});

const fs = require('fs');
const readline = require('readline');

describe('Test a full list of customer expression', () => {
  xit('should parse all expression', async () => {
    const fileStream = fs.createReadStream('<path>/all_expression.txt');
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let nbKo = 0;
    let nbTotal = 0;
    const allKo = Array<string>();

    rl.on('line', (line) => {
      try {
        nbTotal++;
        runParser(line);
      } catch (e) {
        nbKo++;
        allKo.push(line);
      }
    });

    rl.on('close', () => {
      console.log(allKo);
    });
  });
});
