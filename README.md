# sum-function

A simple string calculator that can handle different delimiters and throw exceptions for negative numbers. This calculator can sum numbers from a string input while supporting custom delimiters.

## Features

- Supports custom delimiters defined in the format `//[delimiter]\n[numbers...]`.
- Handles default delimiters: commas and newlines.
- Throws an exception for negative numbers with a descriptive error message.

## Installation
 npm install

## Run
npm start

## Running Tests
npm test

## Examples:
- Input: “”, Output: 0
- Input: “1”, Output: 1
- Input: “1,5”, Output: 6
- Input: “1\n2,3”, Output: 6
- Input: “//;\n1;2”, Output: 3
- Input: “//|\n1|2|3|4”, Output: 10
- Input: “//:\n1:2:3:5:5”, Output: 16
- Input: “//;\n1;2;-3”, Output: Error negative number -3
- Input: “1, 3, -5”, Output: Error negative number -5
- Input: “1, 4, -13, -15”, Output: Error negative number -13, -15



