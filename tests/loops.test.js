const loops = require('../src/loops.js');
/* eslint-disable no-undef */
describe('Basic Loops', () => {
    describe('pointlessLoop', () => {
        it('Should return True', () => {
            expect(loops.pointlessLoop()).toBe(true);
        });
    });

    describe('consoleLogX', () => {
        it('Should return undefined', () => {
            expect(loops.consoleLogX()).toBe(undefined);
        });
    });

    describe('returnSum', () => {
        it('Should return the sum of the value that gets passed in and 28', () => {
            expect(loops.returnSum(2)).toBe(30);
        });
    });
});
/* eslint-enable no-undef */
