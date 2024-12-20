# ACC XTK Expression parser documentation

## Getting a parsing tree from an Expression

```
import { runXtkParser } from '@adobe/acc-xtk-parser';

const unitContext = runXtkParser('@exp1 = @expr2 AND @expr3 IS NOT NULL');
// Navigate through unitContext
```

## Evaluate an Expression

```TypeScript
import { evaluate } from '@adobe/acc-xtk-parser';

const value1 = evaluate('1 + 2 + 3');
// value1 should be 6

const value2 = evaluate('1 = 2 AND 3 = 4');
// value2 should be 0 ( = false )
```

### Interpreting xpath

A function is passed as option of the evaluate function to translate a xpath into string or number. 

```TypeScript
import { evaluate } from '@adobe/acc-xtk-parser';

const value1 = evaluate('@myattribute == 1', { xpathConverter: (path) => path === '@myattribute' ? 1 : undefined});
// value1 should be 1 ( = true )
```

### Interpreting functions

XTK functions are implemented server side in Adobe Campaign but they can be emulated by providing an option. 

```TypeScript
import { evaluate } from '@adobe/acc-xtk-parser';

const value1 = evaluate('f(@myattribute)', { functionConverter: (name, arg...) => // implement your code });
// value1 should be 1 ( = true )
```

### Interpreting variables

Variables may be present in certain context of evaluation, they can be emulated by providing an option.

```TypeScript
import { evaluate } from '@adobe/acc-xtk-parser';

const value1 = evaluate('$(var1) == 1', { variableConverter: () => 1 }) // returns 1
```

## Match an Expression

This feature is about capturing part of an expression based on a predefined pattern.

```TypeScript
import { XtkPattern } from '@adobe/acc-xtk-parser';

const pattern = new XtkPattern('$(var1) = 1 AND $(var2) IS NOT NUL'); 
const matched = pattern.match('@count = 1 AND @email IS NOT NULL');
// matched is an object with the following properties :
// {
//   var1: '@count',
//   var2: '@email'
// }
pattern.match('@count = 2 AND @email IS NOT NULL')
// will raise a NoMatchFoundException exception

```

## Capture all xpath

This feature is about collecting all xpath mentioned inside an expression.

```TypeScript
import { collectXPath } from '@adobe/acc-xtk-parser';

const list = collectXPath('@path1 == @path2') // return ['@path1','@path2'];
```

## Preprocess variable

This feature replaces variable inside an expression and return a new expression

```TypeScript
import { colcollectXPathlect } from '@adobe/acc-xtk-parser';

const newExpression = collectXPath('@path1 == $(VAR1)', { variableConverter: () => '1'}) // return "@path1 = 1";
```

A variant handle xpath inside variables

```TypeScript
import { colcollectXPathlect } from '@adobe/acc-xtk-parser';

const newExpression = collectXPath('@path1 == $(@path2)', { xpathConverter: () => '1'}) // return "@path1 = 1";
```
