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


});