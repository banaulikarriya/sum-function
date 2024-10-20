const add = require('./add');

describe('Function to calculate adding integer values', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

});