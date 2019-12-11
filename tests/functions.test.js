const functions = require('../src/functions.js');
/* eslint-disable no-undef */
describe('basic functions', () => {
    describe('kittyMeowMeow', () => {
        it("Should return the string 'Meow'", () => {
            expect(functions.kittyMeowMeow()).toBe('Meow');
        });
    });

    describe('twoPlusTwo', () => {
        it('Should return the integer 4', () => {
            expect(functions.twoPlusTwo()).toBe(4);
        });
    });

    describe('kittyRoar', () => {
        it('Should return a string that says Hi to the variable passed in', () => {
            expect(functions.kittyRoar('Tanya')).toBe('Hi Tanya');
        });
    });
});

/* eslint-enable no-undef */
