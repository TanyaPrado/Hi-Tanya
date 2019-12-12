/* Create the following methods */

/* PROBLEM 1 */
// Create a function named kittyMeowMeow and have it return the string "Meow"
// YOUR CODE HERE:
function kittyMeowMeow() {
    return 'Meow';
}

/* PROBLEM 2 */
// Create a function named twoPlusTwo and within it return 4
// YOUR CODE HERE:
function twoPlusTwo() {
    return 4;
}

/* PROBLEM 3 */
// Create a function named kittyRoar
// This function takes in one parameter, name, as it's argument
// Within this function, have it return the string "Hi ${name}"
// Name here would be a reference to the variable name being passed in to the method
// Look up "String Interpolation Javascript"
// YOUR CODE HERE:
function kittyRoar(name) {
    return `Hi ${name}`;
}

/* eslint-enable no-unused-vars, max-len */

module.exports = {
    kittyMeowMeow,
    twoPlusTwo,
    kittyRoar
};
