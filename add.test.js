const add = require('./add');

describe('Function to calculate adding integer values', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number single number', () => {
        expect(add("1")).toBe(1);
    });

    test('should return the sum of multiple numbers separated by commas', () => {
        expect(add("1,2,3")).toBe(6);
    });

    test('should return the sum of multiple string numbers separated by , or newline char', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('should return the sum of custom delimiters patterns', () => {
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//|\n1|2|3|4")).toBe(10);
        expect(add("//:\n1:2:3:5:5")).toBe(16);
    });

    test('should return error for negative numbers', () => {
        expect(() => add("//;\n1;2;-3")).toThrow('negative numbers not allowed -3');
        expect(() => add("1, 3, -5")).toThrow('negative numbers not allowed -5');
    });

    test('should return error for multiple negative numbers', () => {
        expect(() => add("1, 4, -13, -15")).toThrow('negative numbers not allowed -13,-15');
    });

});