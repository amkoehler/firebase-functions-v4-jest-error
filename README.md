# firebase-functions v4 jest error

firebase-functions to v4 appears to change how logger package (`firebase-functions/lib/logger`) is distributed. We're now seeing the below error when running tests with Jest.

This repo serves as a recreation of the issue. To run:

```sh
# Install dependencies
$ npm install

# Run the simple unit test that imports firebase-functions/lib/logger
$ npx nx run test-node-app:test
```

# Error

```bash
~/dev/tinkering/firebase-functions-v4-jest-error main*
❯ npx nx run test-node-app:test

> nx run test-node-app:test

● Validation Warning:

  Unknown option "coverageDirectory" with value "../../coverage/packages/test-node-app" was found.
  This is probably a typing mistake. Fixing it will remove this message.

  Configuration Documentation:
  https://jestjs.io/docs/configuration

 FAIL   test-node-app  packages/test-node-app/src/main.test.ts
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    .../firebase-functions-v4-jest-error/node_modules/firebase-functions/lib/logger/index.d.ts:5
    export declare type LogSeverity = "DEBUG" | "INFO" | "NOTICE" | "WARNING" | "ERROR" | "CRITICAL" | "ALERT" | "EMERGENCY";
    ^^^^^^

    SyntaxError: Unexpected token 'export'

      at Runtime.createScriptFromCode (../../node_modules/@jest/core/node_modules/jest-runtime/build/index.js:1495:14)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.4 s
Ran all test suites.
```
