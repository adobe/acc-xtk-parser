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
import { CommonTokenStream, ErrorListener, CharStream } from 'antlr4';
import { runXtkParser, XtkLexer, XtkParser, XtkParserVisitor } from '../src/index';

class ValidatorListener extends ErrorListener<any> {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    throw new Error(`${line}:${column}\n${msg}`);
  }
}

const runParser = (expr) => {
  const inputStream = new CharStream(expr);
  const lexer = new XtkLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new XtkParser(tokenStream);
  parser.addErrorListener(new ValidatorListener());
  const unit = parser.unit();
  unit.accept(new XtkParserVisitor());
  return unit;
};

describe('Test API', () => {
  it('should parse expression and return tree', () => {
    expect(runXtkParser('', false)).toBeUndefined();
    expect(runXtkParser('@a = @b')).toBeDefined();
    expect(runXtkParser('(@a = @b)')).toBeDefined();
    expect(runXtkParser('!(@a = @b)')).toBeDefined();
  });
  it.each(['@', 'TRUE OR @a =', 'TRUE AND @a ='])('should handle error on expression', (expr) => {
    const error = jest.spyOn(console, 'error').mockImplementation(() => void 0);
    expect(runXtkParser(expr, false)).toBeDefined();
    expect(error).toHaveBeenCalled();
  });
});

describe('Test integer', () => {
  it.each(['=', '==', '!=', '<>', '>', '<', '>=', '<='])('should handle integer', (operator) => {
    expect(runParser(`@a ${operator} 1`)).toBeDefined();
    expect(runParser(`@a ${operator} -1`)).toBeDefined();
    expect(runParser(`@a ${operator} 1.0`)).toBeDefined();
    expect(runParser(`@a ${operator} 1.0e-2`)).toBeDefined();
    expect(runParser(`@a ${operator} -1.0`)).toBeDefined();
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
    expect(runParser('@created >= #2021-09-16 23:00:00.000+01#')).toBeDefined();
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
    expect(runParser('([x/y[0]/@a])')).toBeDefined();
    expect(runParser('[xxx:xxx/@id]')).toBeDefined();
  });
});

describe('Test date / time', () => {
  it('should handle different kind of date', () => {
    expect(runParser('#2023-12-06#')).toBeDefined();
    expect(runParser('#12:00:00#')).toBeDefined();
  });
});

describe('Test SQL', () => {
  it.each(['IS NULL', 'IS NOT NULL'])('should handle null checks', (operator) => {
    expect(runParser(`@a ${operator}`)).toBeDefined();
  });
  it.each(['AND', 'OR', 'AND NOT'])('should handle logical combinations', (operator) => {
    expect(runParser(`@a IS NULL ${operator} @b IS NOT NULL`)).toBeDefined();
  });
  it('should handle precendence of AND over OR', () => {
    expect(runParser(`@a = 1 OR @b > 0 AND @b < 2`)).toBeDefined();
  });
  it('should handle precendence chained OR', () => {
    expect(runParser(`@a = 1 OR @b = 1 OR @b = 2`)).toBeDefined();
  });
  it('should handle precendence chained OR', () => {
    expect(runParser(`@a = 1 AND @b = 1 AND @b = 2`)).toBeDefined();
  });
  it('should handle expression mixing AND and OR with parenthesis', () => {
    expect(runParser(`@a = 1 AND ( @b > 0 OR @b < 2 )`)).toBeDefined();
  });
  it('should handle AND expression with LIKE', () => {
    expect(runParser(`@a LIKE 1 AND @b LIKE 2`)).toBeDefined();
  });
  it('should handle AND expression with IN', () => {
    expect(runParser(`@a IN (1,2) AND @b IN (1,2)`)).toBeDefined();
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
    const allKo = [];

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
