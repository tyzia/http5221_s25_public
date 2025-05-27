



// Jasmine

// Jasmine is a framework for testing JavaScript code.
// It is as a tool to check if your code works as expected.



// Key Features

// - Human-readable syntax (easy to understand).
// - Works in browsers and Node.js (non-browser).







// Installation of Jasmine

// > mkdir demo
// > cd demo
// > npm init -y
// > npm install jasmine --save-dev
// > npx jasmine init


// As a result we will get this folder structure:

// demo/
// ├── node_modules/       # Installed dependencies
// ├── spec/              # Folder for your test files
// │   └── support/
// │       └── jasmine.json  # Configuration file
// ├── package.json       # Project configuration
// └── package-lock.json  # Dependency lock file




// All your test files should
// go inside /spec folder

// We usually name our tests files:
// filename.spec.js









// Syntax

// describe('Math tests', () => {
//     it('should add 1 + 1', () => expect(1 + 1).toBe(2));
//     it('should add 2 + 2', () => expect(2 + 2).toBe(4));
// });


// Here:
// describe() - groups different tests together
// 'Math tests' - the name for the group.
// it() - defines a single test
// 'should add 1 + 1' - the name for the test.
// expect(1 + 1).toEqual(2) - test body





// expect()

// expect() - this is the main tool
// which allows you to compare things
// in Jasmine tests.
// It takes a value or actual result
// and has matcher methods attached.

// Matcher methods are:

// .toBe()
// .toEqual()
// .toBeTrue()
// .toContain()
// and many more



// .toBe()

// It checks if actual result
// equals to the expected result.
// === strictly equal
// Best for: numbers, strings, booleans

// Example
// function giveMeTwo() { return 2 }
// it('should have result as 2', () => {
//     const result = giveMeTwo();
//     expect(result).toBe(2); // '2'
// });



// Similar to unit tests:

// function addTwo(value) { return value + 3 }
// const testCase = { value: 2, expected: 4 };
// it(`should have result as ${testCase.expected}`, () => {
//     const result = addTwo(testCase.value);
//     expect(result).toBe(testCase.expected);
// });


// Array of test cases:

// function addTwo(value) { return value + 2 }
// const testCases = [
//     { value: 1, expected: 3 },
//     { value: 2, expected: 4 },
//     { value: 3, expected: 5 },
// ];
// testCases.forEach(({ value, expected }) => {
//     it(`should have result as ${expected}`, () => {
//         const result = addTwo(value);
//         expect(result).toBe(expected);
//     });
// });



// .toEqual()

// It checks if actual result
// equals to the expected result.
// Used for objects & arrays

// Example
// function giveMeObject() { return { name: 'humber' } }
// it('should have result object', () => {
//     const result = giveMeObject();
//     expect(result).toEqual({ name: 'humber' });
// });




// .toBeTrue()

// It checks if
// actual result is true.

// Example
// function giveMeTrue() { return true } // false
// it('should have result true', () => {
//     const result = giveMeTrue();
//     expect(result).toBeTrue();
// });




// .toContain()

// It checks if an array
// or a string contains a value.

// Example
// function giveMeArray() { return [1, 2, 3] }
// it('should have 2 in array', () => {
//     const result = giveMeArray();
//     expect(result).toContain(2); // 4
// });

// function giveMeHelloWorld() { return 'Hello World' }
// it('should have "hello" in the string', () => {
//     const result = giveMeHelloWorld();
//     expect(result).toContain('Hello'); // h
// });



// .not

// .not - will negate the matcher check
// It can be used with any matcher
// (.toEqual(), .toContain(), .toBeTrue(), etc)




// Example

// it('', () => expect(1).not.toEqual(2));
// it('', () => expect('hello').not.toContain('a'));



// I can nest describe() inside of other describe():

// describe('My tests', () => {
//     describe('Math tests', () => {
//         it('should add 1 + 1', () => expect(1 + 1).toEqual(2));
//         it('should add 2 + 2', () => expect(2 + 2).toEqual(4));
//     });
// });







// How to write tests?

// Requirements for JS function:

// should return true if age is between 18 and 25 (inclusive).
// should return false if age is not between 18 and 25.
// should return 'You provided not a number' if age is not a number.

// 1) Create JS function

// const isValidAge = age => {
//     if (typeof age !== 'number') {
//         return 'You provided not a number';
//     }
//     return age >=18 && age <= 25; // try to use ||
// }

// 2) Defined test cases and write tests

// describe('isValidAge', () => {
//     const notANumberMessage = 'You provided not a number';
//     const testCases = [
//         { input: 17, expected: false },
//         { input: 18, expected: true },
//         { input: 19, expected: true },
//         { input: 20, expected: true },
//         { input: 24, expected: true },
//         { input: 25, expected: true },
//         { input: 26, expected: false },
//         { input: 'not a number', expected: notANumberMessage },
//         { input: undefined, expected: notANumberMessage },
//         { input: null, expected: notANumberMessage },
//         { input: true, expected: notANumberMessage },
//         { input: {}, expected: notANumberMessage },
//     ];
//     testCases.forEach(({ input, expected }) =>
//         it(`should return ${expected} for ${input}`, () => expect(isValidAge(input)).toBe(expected))
//     );
// });





// My tests are important because
// they guard my code from accidental
// changes, which might break my app.












// Thank you



