# React + JavaScript / TypeScript + Vite + Jest

Add the necessary dependencies:

For Javascript (JSX)
--------------------

```
npm install -D jest @testing-library/jest-dom @testing-library/react @testing-library/user-event @babel/core @babel/preset-env @babel/preset-react babel-jest identity-obj-proxy jest-environment-jsdom
```


For Typescript (TSX)
--------------------

```
npm install -D jest @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest identity-obj-proxy jest-environment-jsdom ts-node
```


Create the Jest config setup file
---------------------------------

_jest.setup.ts_ for TSX or _jest.setup.js_ for JSX, and add the following:

```
import "@testing-library/jest-dom";
```


Create the main Jest config file
--------------------------------

_jest.config.ts_ for TSX or _jest.config.js_ for JSX, and add the following:

For Javascript (JSX)
--------------------

```
export default {
  testEnvironment: "jest-environment-jsdom", // Same name of the lib you installed
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // The file you created to extend jest config and "implement" the jest-dom environment in the jest globals
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js", // The global stub for weird files
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // The mock for style related files
    "^@/(.*)$": "<rootDir>/src/$1", // [optional] Are you using aliases?
  },
};
```


For Typescript (TSX)
--------------------

```
export default {
  testEnvironment: "jest-environment-jsdom", // Same name of the lib you installed
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // The file you created to extend jest config and "implement" the jest-dom environment in the jest globals
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js", // The global stub for weird files
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // The mock for style related files
    "^@/(.*)$": "<rootDir>/src/$1", // [optional] Are you using aliases?
  },
};
```

Create the global mock for different file extensions
----------------------------------------------------

Now let’s create a file that will serve as a global mocker for images and other weird file extensions, in the root _dir_ create _test/\_\_mocks\_\_/_ and add _fileMock.js_ with the following content:

```
module.exports = 'test-file-stub';
```


Typescript only!
----------------

To avoid TS issues on your test files include the jest config in the _tsconfig.app.json_ file:

```
"include": ["src", "./jest.setup.ts"]
```


Babel config
------------

You’ll need to configure babel in order to transpile your JSX/TSX syntax to jest understandable one, for that create _.babelrc_ file at the root of the project and add the following:

For Javascript (JSX)
--------------------

```
{
  "presets": [
    ["@babel/preset-env", { "targets": { "esmodules": true } }], // It's the name of the lib you installed
    ["@babel/preset-react", { "runtime": "automatic" }] // It's the name of the lib you installed
  ]
}
```


For Typescript (TSX)
--------------------

```
{
  "presets": [
    ["@babel/preset-env", { "targets": { "esmodules": true } }], // It's the name of the lib you installed
    ["@babel/preset-react", { "runtime": "automatic" }], // It's the name of the lib you installed
    "@babel/preset-typescript" // It's the name of the lib you installed
  ]
}
```


Great we are done with configurations now just add the following commands to _package.json_ for running tests and code coverage, respectively, and we are done!

For Javascript (JSX)
--------------------

```
"test": "jest --watchAll",
"cov": "jest --coverage --collectCoverageFrom='src/**/*.{js,jsx}'"
```


For Typescript (TSX)
--------------------

```
"test": "jest --watchAll",
"cov": "jest --coverage --collectCoverageFrom='src/**/*.{ts,tsx}'"
```

Finally Run the following command to run the test
-------------------------------------------------
```
npm run test
```

Run the following command to generate the test coverage report
--------------------------------------------------------------
```
npm run cov
```