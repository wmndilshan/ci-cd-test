const { sum, subtract, multiply } = require('../src/utils/calculator');

describe('Calculator Functions', () => {
    describe('sum', () => {
        test('adds two positive numbers correctly', () => {
            expect(sum(2, 3)).toBe(5);
        });

        test('adds negative numbers correctly', () => {
            expect(sum(-5, -3)).toBe(-8);
        });

        test('adds zero correctly', () => {
            expect(sum(5, 0)).toBe(5);
        });

        test('adds decimal numbers correctly', () => {
            expect(sum(2.5, 3.5)).toBe(6);
        });
    });

    describe('subtract', () => {
        test('subtracts two positive numbers correctly', () => {
            expect(subtract(5, 3)).toBe(2);
        });

        test('subtracts negative numbers correctly', () => {
            expect(subtract(-5, -3)).toBe(-2);
        });

        test('subtracts zero correctly', () => {
            expect(subtract(5, 0)).toBe(5);
        });
    });

    describe('multiply', () => {
        test('multiplies two positive numbers correctly', () => {
            expect(multiply(3, 4)).toBe(12);
        });

        test('multiplies by zero correctly', () => {
            expect(multiply(5, 0)).toBe(0);
        });

        test('multiplies negative numbers correctly', () => {
            expect(multiply(-3, 4)).toBe(-12);
        });
    });
});
